import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps{
    children:ReactNode,
    className?:string,
    onClick?:()=>void
}

export  function Button({children, className= '', onClick}:ButtonProps) {
  return (
    <button className={twMerge(`m-2 px-6 py-3 rounded-lg text-white bg-blue-600 `, className)} onClick={onClick}>{children}</button>
  )
}
