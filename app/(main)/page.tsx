import { Metadata } from 'next'
import { HomePage } from 'view/home'

export const metadata: Metadata = {
  title: 'Главная страница | Электрик',
  description: 'Сахэлектрик'
}

export default function Home() {
  return <HomePage />
}
