export default function LayoutScreens({children,title}) {
  return (
    <div className="lg:pl-[260px]">    
      <div className='w-full grid place-content-center gap-x-[25px] md:grid-cols-2 grid-rows-[50px,1fr] place-items-center md:grid-cols-[repeat(auto-fill,230px)] gap-y-[25px] md:gap-y-[50px] '>  
      <h2 className="col-span-full text-3xl self-end font-bold mr-auto">{title}</h2>

        {
          children
        }      
      </div>

    </div>
  )
}
