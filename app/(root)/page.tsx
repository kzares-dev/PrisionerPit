import GameDescription from '@/components/home/GameDescription'
import LeaderBoard from '@/components/shared/LeaderBoard'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <section className='container' >

        <div className="flex min-h-[20vh] items-center  my-5  gap-5 md:flex-row flex-col">
          <Image src="/static/machine-brain-2.png" width={90} height={90} alt='' />

          <div className="">

            <h1 className='text-[70px] font-mono font-bold ' >Prisioner Pit</h1>
            <p className="max-w-[800px] font-mono text-neutral-600"> Are you familiar with the prisoner's dilemma? Well, here you can create algorithms to play it, and pit them against other algorithms </p>
            <Button href='/dashboard' className="mt-5" text="Get Started" />

          </div>
        </div>

      <div className="flex  min-h-[60vh] w-full gap-5 pt-10 flex-col lg:flex-row">
        <LeaderBoard />
        <GameDescription />
      </div>

    </section>
  )
}

export default Home
