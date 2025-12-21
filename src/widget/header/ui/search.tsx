import { Search } from 'lucide-react'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

function HeaderSearch() {
  return (
    <div className="w-full">
      <Input
        id="search"
        name="search"
        placeholder="Искать на Сахэлектрик"
        className="h-9! bg-white"
      />
      <Button className="absolute top-1 right-1 h-7 w-7 cursor-pointer">
        <Search className="h-4! w-4!" />
      </Button>
    </div>
  )
}

export { HeaderSearch }
