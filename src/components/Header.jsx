import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-center lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
      </Container>
    </header>
  )
}
