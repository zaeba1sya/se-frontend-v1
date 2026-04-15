import type { Metadata } from 'next'

import { AboutView } from 'view/info'

export const metadata: Metadata = {
  title: 'О компании',
  description:
    'Сахэлектрик — электромаркет Сахалина с 2008 года. Надёжное электрооборудование и услуги электромонтажа.'
}

export default function AboutPage() {
  return <AboutView />
}
