import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-1 pb-20">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl text-center">
            The Treadmill Desk Race
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Do you work from a treadmill desk? Join us on <strong>August 19th</strong> for a virtual treadmill race! Free to join. Win bragging rights and meet others who like to work and walk just like you!
            </p>
          </div>
          <div className="pt-10 sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-center">
            <Button href="https://forms.gle/DbtmZ3tFFZVQ171y9" target="_blank">Sign Up!</Button>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-center lg:text-left">
            {[
              ['When', 'August 19th'],
              ['Venue', 'Your treadmill'],
              ['Location', 'Zoom'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
