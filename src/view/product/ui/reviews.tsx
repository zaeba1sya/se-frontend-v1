'use client'

import { useMemo, useState } from 'react'
import { MessageSquare, Star } from 'lucide-react'

import { formatDate } from 'shared/lib/format'
import { cn } from 'shared/lib/utils'
import { type Review, getReviewsByProduct } from 'shared/mocks'
import { Button, Textarea } from 'shared/ui'

interface Props {
  productId: string
}

interface LocalReview extends Review {}

const MAX_RATING = 5

export function Reviews({ productId }: Props) {
  const initial = useMemo(
    () => getReviewsByProduct(productId),
    [productId]
  )
  const [reviews, setReviews] = useState<LocalReview[]>(initial)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [justSent, setJustSent] = useState(false)

  const avg =
    reviews.length > 0
      ? reviews.reduce((a, r) => a + r.rating, 0) / reviews.length
      : 0

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (rating === 0) {
      setError('Поставьте оценку от 1 до 5')
      return
    }
    if (!author.trim() || !body.trim()) {
      setError('Заполните имя и текст отзыва')
      return
    }
    setError(null)
    const next: LocalReview = {
      id: `r-local-${Date.now().toString()}`,
      productId,
      author: author.trim(),
      rating,
      createdAt: new Date().toISOString(),
      title: title.trim() || 'Отзыв покупателя',
      body: body.trim()
    }
    setReviews(prev => [next, ...prev])
    setRating(0)
    setAuthor('')
    setTitle('')
    setBody('')
    setJustSent(true)
    setTimeout(() => setJustSent(false), 2400)
  }

  return (
    <section className="mt-16">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Отзывы покупателей
          </h2>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            {reviews.length > 0 ? (
              <>
                <Star
                  className="fill-warning text-warning size-4"
                  strokeWidth={0}
                />
                <span className="text-foreground font-semibold">
                  {avg.toFixed(1)}
                </span>
                <span>· {reviews.length} отзывов</span>
              </>
            ) : (
              <span>Пока нет отзывов — станьте первым</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <div className="flex flex-col gap-3">
          {reviews.length === 0 ? (
            <div className="bg-card hairline flex flex-col items-center justify-center gap-3 rounded-2xl p-10 text-center">
              <MessageSquare className="text-muted-foreground size-8" />
              <p className="text-muted-foreground text-sm">
                Отзывов пока нет. Поделитесь мнением первым.
              </p>
            </div>
          ) : (
            reviews.map(r => (
              <article
                key={r.id}
                className="bg-card hairline flex flex-col gap-2 rounded-2xl p-5"
              >
                <header className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary ring-primary/20 flex size-9 items-center justify-center rounded-full text-xs font-semibold ring-1">
                      {r.author
                        .split(' ')
                        .map(p => p[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground text-sm font-semibold">
                        {r.author}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {formatDate(r.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-0.5"
                    aria-label={`Оценка ${r.rating.toString()} из 5`}
                  >
                    {Array.from({ length: MAX_RATING }, (_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'size-4',
                          i < r.rating
                            ? 'fill-warning text-warning'
                            : 'text-muted-foreground/30'
                        )}
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </header>
                <h3 className="text-foreground text-sm font-semibold">
                  {r.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {r.body}
                </p>
              </article>
            ))
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card hairline flex h-fit flex-col gap-4 rounded-2xl p-5 lg:sticky lg:top-[180px]"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-foreground text-base font-semibold">
              Оставить отзыв
            </h3>
            <p className="text-muted-foreground text-xs">
              Ваш опыт поможет другим покупателям
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-muted-foreground text-xs font-medium">
              Ваша оценка
            </span>
            <div className="flex items-center gap-1">
              {Array.from({ length: MAX_RATING }, (_, i) => {
                const value = i + 1
                const active = (hover || rating) >= value
                return (
                  <button
                    type="button"
                    key={value}
                    onMouseEnter={() => setHover(value)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(value)}
                    className="p-1"
                    aria-label={`Поставить ${value.toString()}`}
                  >
                    <Star
                      className={cn(
                        'size-6 transition-colors',
                        active
                          ? 'fill-warning text-warning'
                          : 'text-muted-foreground/30 hover:text-muted-foreground'
                      )}
                      strokeWidth={0}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-muted-foreground text-xs font-medium">
              Имя
            </span>
            <input
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              placeholder="Как вас зовут"
              className="bg-background hairline h-10 rounded-xl px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-muted-foreground text-xs font-medium">
              Заголовок
            </span>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Коротко о впечатлении"
              className="bg-background hairline h-10 rounded-xl px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-muted-foreground text-xs font-medium">
              Отзыв
            </span>
            <Textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              placeholder="Что понравилось, что можно улучшить?"
              rows={4}
              className="resize-none"
            />
          </label>

          {error ? (
            <p className="text-destructive text-xs">{error}</p>
          ) : null}
          {justSent ? (
            <p className="text-success text-xs">
              Спасибо! Ваш отзыв опубликован.
            </p>
          ) : null}

          <Button type="submit" size="lg" className="w-full rounded-full">
            Опубликовать отзыв
          </Button>
        </form>
      </div>
    </section>
  )
}
