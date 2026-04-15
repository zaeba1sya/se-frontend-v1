import { redirect } from 'next/navigation'

import { ROUTES } from 'shared/lib/constants/routes'

export default function AccountIndexPage() {
  redirect(ROUTES.ACCOUNT_PROFILE)
}
