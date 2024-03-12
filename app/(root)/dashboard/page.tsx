import Button from "@/components/ui/Button"
import Image from "next/image"


function Dashboard() {
  return (
    <section className="w-full h-auto container py-10 px-1 flex gap-10 flex-col" >

      <div className="flex min-h-[20vh] my-5  gap-5 flex-col flex-center">
        <Image src="/static/machine-brain.png" width={90} height={90} alt='' />


          <h1 className='text-[30px] font-italic font-semibold text-neutral-500 ' >Welcome Back</h1>
          <h1 className='text-[70px] font-mono font-bold leading-[40px]' >To Prisioner's Pit</h1>

      </div>

      <div className=' flex flex-col flex-center w-full min-h-[60vh] big-border shadow-md h-auto ' >
        
      </div>




    </section>
  )
}

export default Dashboard
