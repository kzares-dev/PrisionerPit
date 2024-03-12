import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

function GameDescription() {
  return (
    <div className='flex w-full h-auto bg-white  shadow-sm py-3 px-4 flex-col gap-4 big-border pb-5'>

      <h1 className='text-[50px] lg:text-[60px] font-semibold font-mono text-neutral-800'> Prisoner's dilemma ?</h1>

      {/*-- This is the complete game description --*/}
      <div className=" flex flex-col xl:flex-row ml-4 px-4 py-5 border gap-4">

        <div className="flex gap-4 flex-end">
          <Image src="/static/prisioner.png" alt='' width={80} height={80} />
          <Image src="/static/prisioner-2.png" className='' alt='' width={80} height={80} />
        </div>

        <h2 className='max-w-[400px] text-xl font-semibold font-mono' >Two prisoners are given two options, as simple as to cooperate or not to cooperate.</h2>

      </div>

      <div className=" flex flex-col xl:flex-row ml-4 px-4 py-5 border gap-4 flex-end items-end">

        <h2 className='max-w-[400px] text-xl font-semibold font-mono' >If both cooperate, they each receive a coin.</h2>
        
        <div className="flex gap-4 flex-end">
          <Image src="/static/like.png" alt='' width={80} height={80} />
          <Image src="/static/dollar-coin.png" alt='' width={80} height={80} />
          <Image src="/static/like-reverse.png" className='' alt='' width={80} height={80} />
        </div>

      </div>

      <div className=" flex flex-col xl:flex-row ml-4 px-4 py-5 border gap-4">

        <div className="flex gap-4 flex-end">
          <Image src="/static/negative-vote-reverse.png" alt='' width={80} height={80} />
          <Image src="/static/no-money.png" alt='' width={80} height={80} />
          <Image src="/static/negative-vote.png" className='' alt='' width={80} height={80} />
        </div>

        <h2 className='max-w-[400px] text-xl font-semibold font-mono' >If both decide not to cooperate, they end up empty-handed.</h2>

      </div>

      <div className=" flex flex-col xl:flex-row ml-4 px-4 py-5 border gap-4 flex-end items-end">

        <h2 className='max-w-[400px] text-xl font-semibold font-mono' >If one cooperates and the other does not, the non-cooperator will take away 3 coins</h2>
        
        <div className="flex gap-4 flex-end">
          <Image src="/static/coin.png" alt='' width={80} height={80} />
          <Image src="/static/negative-vote-reverse.png" alt='' width={80} height={80} />
          <Image src="/static/like-reverse.png" className='' alt='' width={80} height={80} />
        </div>

      </div>


      <div className=" flex flex-col xl:flex-row ml-4 px-4 gap-4 flex-end items-end big-border flex-between py-10">
        <span className='max-w-[600px] text-xl font-semibold font-mono'>Now you can devise your own winning strategy and compete against those of others</span>
        <Button text="Create now" />
      </div>




    </div>
  )
}

export default GameDescription
