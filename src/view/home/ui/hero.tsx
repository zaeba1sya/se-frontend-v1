import Image from 'next/image'
import { Badge } from 'shared/ui/badge'
import { Button } from 'shared/ui/button'

function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-10/12 px-6 py-16">
        <div className="flex items-center justify-between">
          <div className="flex max-w-xl flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">
                <Badge variant="secondary">New Collection 2025</Badge>
              </p>
              <h1 className="text-6xl leading-tight text-gray-900">
                Shop Smart,
                <br />
                Live Better
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Discover amazing deals on products you love. Free
                shipping on orders over $50!
              </p>
            </div>

            <Button
              className="w-fit rounded-full px-8 py-6 text-white shadow-lg hover:opacity-90"
              style={{ backgroundColor: '#7a429d' }}
            >
              Shop Now
            </Button>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-80 w-80">
              <video src="./shop-animation.mp4" loop autoPlay muted />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HeroSection }
