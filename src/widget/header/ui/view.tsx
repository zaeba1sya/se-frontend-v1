import { ShoppingCart, User } from 'lucide-react'
import * as React from 'react'
import { HeaderLogo } from './logo'
import { HeaderSearch } from './search'
import { HeaderCatalog } from './catalog'

function Header(): React.ReactNode {
  return (
    <header className="flex h-16 w-full items-center px-6 py-1">
      <div className="flex w-full flex-row items-center justify-between">
        <HeaderLogo />
        <div className="relative flex w-full max-w-3xl flex-row items-center gap-3">
          <HeaderCatalog />
          <HeaderSearch />
        </div>
        <div className="flex h-full flex-row items-center gap-3">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition-shadow hover:shadow-md">
            <User className="h-5! w-5! text-gray-600" />
          </button>
          <button className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition-shadow hover:shadow-md">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }
