import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-white py-4 border-b shadow-sm'>


      <div className="flex flex-1 flex-between container">

        {/*-- Logo section --*/}
        <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          PrisonerPit
        </p>


      </div>

    </div>
  )
}

export default Navbar
