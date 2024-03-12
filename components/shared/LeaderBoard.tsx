import PrisionerCard from "./PrisionerCard"

const prisioner = [
  1,2,3,4,5
]

function LeaderBoard() {
  return (
    <div className='w-full max-w-[400px]  h-auto  big-border flex flex-col gap-5 pb-4' >

      <h1 className='py-3 font-semibold text-[30px] font-mono border-b pl-4' > LeaderBoard </h1>

      <div className="flex flex-col gap-5 ">

          {prisioner.map(() => (
            <PrisionerCard />
          ))}
        

      </div>
      
    </div>
  )
}

export default LeaderBoard
