import { useState } from "react"
import useScrollDirection from "./useScrollDirection"
import { NavLink, Route, Routes } from "react-router-dom"
import MenuItem from "./MenuItem"

export default function Header({items=[], bgColor = "", activeColor="", getFetch}) {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const scrollDirection = useScrollDirection()

    const ulStyle = `overflow-auto pt-5 max-lg:h-screen ${bgColor} grid grid-rows-[repeat(5,50px),25px,repeat(auto-fit,50px)]  right-0 transition-transform duration-700 delay-150 lg:static lg:w-full lg:bg-transparent lg:p-0 lg:grid z-[1000]`

  return (
    <header className={`fixed  ${scrollDirection === "down" ? "max-lg:-top-24" : "max-lg:top-0"} ${bgColor} w-full lg:w-[260px] h-[70px] lg:h-screen max-lg:px-[32px] flex lg:grid lg:grid-rows-[95px,1fr] z-50 transition-all duration-500`}>
        <h1 className="font-bold text-2xl self-center lg:pl-[40px]">ReactFlix</h1>
        <nav className="w-full grid max-lg:justify-end">
            <ul className={menuIsOpen ? `fixed ${ulStyle} top-0 translate-x-0` : `absolute ${ulStyle} ${ scrollDirection === "down" ? "top-24" : "top-0"} max-lg:translate-x-[400px]`}>
                <Close setMenu={setMenuIsOpen}/>
                {items.map((item) => {
                    return(
                        <MenuItem
                            key={item}
                            activeColor={activeColor}
                            >
                            <NavLink
                                to={`${item == "home"? "/" : `/${item.split(' ').join('')}`} `}
                                onClick={()=>setMenuIsOpen(`max-lg:translate-x-[400px]`)}
                                className="z-10 w-full grid max-lg:place-content-center text-xl lg:pl-[40px]" >{item}</NavLink>
                            
                        </MenuItem>
                    )

                    })
                }
                <hr className="self-center lg:my-8"/>
                <Routes>
                    <Route 
                        path="/movies"
                        element={
                            <>
                                <MenuItem>
                                    <button onClick={()=>getFetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')}>
                                        Popular
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button onClick={()=>getFetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')}>
                                        Top Rated
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button onClick={()=>getFetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1')}>
                                        UpComing
                                    </button>
                                </MenuItem>
                            </>
                        } />
                </Routes>
            </ul>

            {/* <ul>
                <Routes>
                    <Route path='/movies' element={<div>asdsadd</div>} />
                </Routes>
            </ul> */}
        
            <Burger setMenu={setMenuIsOpen}/>
        </nav>
    </header>
  )
}

function Burger({setMenu}) {
    return(
        <div
            onClick={()=>setMenu(true)} 
            className="grid gap-[5px] h-[13px] self-center lg:hidden">
            <div className="w-[25px] h-[1px] bg-white"></div>
            <div className="w-[25px] h-[1px] bg-white"></div>
            <div className="w-[25px] h-[1px] bg-white"></div>
        </div>
    )
}

function Close({setMenu}){
    return(
        <div
            onClick={()=>setMenu(false)} 
            className="relative w-[35px] h-[35px] before:absolute before:w-[35px] before:h-[1px] before:bg-white before:rotate-45 after:absolute after:w-[35px] after:h-[1px] after:bg-white after:-rotate-45 after:top-[18px] before:top-[18px] justify-self-end lg:hidden">

        </div>
    )
}
