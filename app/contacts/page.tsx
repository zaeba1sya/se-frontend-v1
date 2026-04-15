import type { Metadata } from 'next'

import { ContactsView } from 'view/info'

export const metadata: Metadata = {
  title: 'Контакты'
}

export default function ContactsPage() {
  return <ContactsView />
}
