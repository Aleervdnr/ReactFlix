export default function LayoutScreens({children,title}) {
  return (
      <div className='w-full lg:h-screen overflow-y-auto grid grid-cols-[repeat(auto-fill,118px)] place-content-center gap-x-[25px] grid-rows-[50px,1fr] place-items-center md:grid-cols-[repeat(auto-fill,230px)] gap-y-[25px] md:gap-y-[50px] col-start-2'>  
      <h2 className="col-span-full text-3xl self-end font-bold mr-auto">{title}</h2>

        {
          children
        }      
      </div>
  )
}
