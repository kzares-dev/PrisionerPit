import GameDescription from '@/components/GameDescription'
import LeaderBoard from '@/components/LeaderBoard'
import React from 'react'

function Home() {
  return (
    <section className='container flex  min-h-[60vh] gap-5 pt-10 flex-col md:flex-row' >
      
      <LeaderBoard />
      
      <GameDescription />

    </section>
  )
}

export default Home
