export default function MenuItem({children,activeColor}) {
  return (
    <li
        className={`relative overflow-hidden capitalize grid max-lg:place-content-center px-8 lg:place-items-center lg:p-0 after:${activeColor} after:w-full after:h-[50px] after:absolute after:border-l-4 after:border-withe after:-translate-x-[260px] after:hover:translate-x-0 after:z-0 after:transition-transform after:ease-linear after:duration-700 after:delay-0 transition-colors`}>
            {children}
    </li>
  )
}
