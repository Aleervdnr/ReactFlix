import { useState } from "react"
import useScrollDirection from "./useScrollDirection"
import { NavLink, Route, Routes } from "react-router-dom"

export default function Header({items=[], bgColor = "", activeColor=""}) {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const scrollDirection = useScrollDirection()

    const ulStyle = `w-[180px] max-lg:h-screen ${bgColor} p-8 grid grid-rows-[repeat(auto-fill,50px)] max-lg:gap-8 right-0 transition-transform duration-700 delay-150 lg:static lg:w-full lg:bg-transparent lg:p-0 lg:grid z-[1000]`

  return (
    <header className={`fixed ${scrollDirection === "down" ? "max-lg:-top-24" : "max-lg:top-0"} ${bgColor} w-full lg:w-[260px] h-[70px] lg:h-screen max-lg:px-[32px] flex lg:grid lg:grid-rows-[95px,1fr]
     z-50 transition-all duration-500`}>
        <h1 className="font-bold text-2xl self-center lg:pl-[40px]">ReactFlix</h1>
        <nav className="w-full grid max-lg:justify-end">
            <ul className={menuIsOpen ? `fixed ${ulStyle} top-0 translate-x-0` : `absolute ${ulStyle} ${ scrollDirection === "down" ? "top-24" : "top-0"} max-lg:translate-x-[400px]`}>
                <Close setMenu={setMenuIsOpen}/>
                {items.map((item) => {
                    return(
                        <li
                            key={item}
                            className={`relative overflow-hidden capitalize grid max-lg:place-content-center lg:place-items-center lg:p-0 after:${activeColor} after:w-full after:h-[50px] after:absolute after:border-l-4 after:border-withe after:-translate-x-[260px] after:hover:translate-x-0 after:z-0 after:transition-transform after:ease-linear after:duration-700 after:delay-0 transition-colors`}>
                            <NavLink 
                                to={`${item == "home"? "/" : `/${item.split(' ').join('')}`} `}
                                onClick={()=>setMenuIsOpen(`max-lg:translate-x-[400px]`)}
                                className="z-10 w-full grid max-lg:place-content-center text-xl lg:pl-[40px]" >{item}</NavLink>
                            
                        </li>
                    )

                    })
                }
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
