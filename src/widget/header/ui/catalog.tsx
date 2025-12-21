import { Menu } from 'lucide-react'
import { Button } from 'shared/ui/button'

function HeaderCatalog() {
  return (
    <Button
      variant="default"
      className="text-primary flex h-full cursor-pointer flex-row items-center gap-2 rounded-lg bg-white px-6! whitespace-nowrap hover:bg-white"
    >
      <Menu className="h-3! w-3!" />
      Каталог
    </Button>
  )
}

export { HeaderCatalog }
