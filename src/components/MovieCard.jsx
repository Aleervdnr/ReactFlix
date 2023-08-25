export default function MovieCard({data}) {
  return (
    <div
        className="w-[310px] h-[180px] grid grid-cols-[120px,1fr] md:grid-cols-1 md:h-[410px] md:w-[230px] md:gap-[14px]"
    >
      
        <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
      
        <div className="flex flex-col max-md:border max-md:border-l-0 max-md:pl-[20px] max-md:pt-[14px] max-md:bg-[#25243A]">
            <span className="font-bold">{data.title}</span>
            <span className="font-bold">{data.release_date}</span>
        </div>
    </div>
  )
}
