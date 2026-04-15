import type { Metadata } from 'next'

import { AccountLayout } from 'view/account'

export const metadata: Metadata = {
  title: 'Личный кабинет'
}

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return <AccountLayout>{children}</AccountLayout>
}
