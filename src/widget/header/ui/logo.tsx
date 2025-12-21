import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from 'shared/ui/dropdown-menu'
import { LOGO_LINKS } from '../lib/constants'
import Link from 'next/link'
import { HeaderThemeSwitcher } from './theme-switcher'

function HeaderLogo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex cursor-pointer flex-row items-center justify-center gap-2">
          <Image
            src={'./logo.svg'}
            width={40}
            height={40}
            quality={100}
            alt="sakhelectro-logo"
          />
          <div className="flex flex-row items-center gap-3">
            <span className="text-xl">Sakhelectrik</span>
            <ChevronDown width={13} height={13} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-0.5 flex w-48 flex-col gap-3">
        {LOGO_LINKS.map(({ label: ll, items }, idx) => (
          <div key={idx}>
            <DropdownMenuLabel>{ll}</DropdownMenuLabel>
            {items.map(({ label: il, href }, idxi) => (
              <Link href={href} key={idxi}>
                <DropdownMenuItem className="ml-2 cursor-pointer">
                  {il}
                </DropdownMenuItem>
              </Link>
            ))}
          </div>
        ))}

        <HeaderThemeSwitcher />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { HeaderLogo }
