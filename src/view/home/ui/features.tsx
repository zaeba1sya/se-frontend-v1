const features = [
  {
    title: 'Бесплатная доставка',
    description: 'При заказе от $50',
    icon: '🚚'
  },
  {
    title: 'Гарантия возврата',
    description: '30 дней на возврат',
    icon: '↩️'
  },
  {
    title: 'Безопасная оплата',
    description: '100% защита платежей',
    icon: '🔒'
  },
  {
    title: 'Поддержка 24/7',
    description: 'Всегда на связи',
    icon: '💬'
  }
]

function HomeFeatures() {
  return (
    <div className="mx-auto max-w-10/12 px-6 py-12">
      <div className="grid gap-6 md:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 text-center shadow-sm"
          >
            <div className="mb-3 text-4xl">{feature.icon}</div>
            <h3 className="mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { HomeFeatures }
