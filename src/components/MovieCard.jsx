export default function MovieCard({title, img, description}) {
  return (
    <div
        className="grid grid-cols-[118px] grid-rows-[180px,1fr] md:grid-cols-[200px] md:grid-rows-[300px,1fr] md:w-[230px] md:gap-[14px] hover:scale-110 transition-transform"
    >
      
        <img src={`https://image.tmdb.org/t/p/original${img}`} alt="" />
      
        <div className="flex flex-col ">
            <span className="font-bold">{title}</span>
            <span className="font-bold">{description}</span>
        </div>
    </div>
  )
}
