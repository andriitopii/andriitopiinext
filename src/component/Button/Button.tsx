import styled from "./Button.module.scss"
import Link from "next/link"
import { ReactNode } from "react"
import { SlLink } from "react-icons/sl"
type Button = {
    href?: string,
    children: ReactNode
}
export default function Button({href, children}:Button){
    return(
        <Link href={href} className={styled.button}>{children}<span className={styled.button__icon}><SlLink color="#171717"/></span></Link>
    )
}