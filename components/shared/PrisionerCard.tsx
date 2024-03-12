
function PrisionerCard() {
    return (
        <div className='flex flex-row items-center gap-2'>

            <span className='w-10 h-10 border bg-gray-200 animate-pulse rounded-full' />

            <div className="flex flex-col ">
                <h1 className='text-[20px] font-mono leading-tight text-neutral-700'>Tic for Tac</h1>
                <h2 className='text-neutral-400'>Created by {"<your ass>"}  </h2>
            </div>

        </div>
    )
}

export default PrisionerCard
