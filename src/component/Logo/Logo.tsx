import Image from "next/image"
import Link from "next/link"
import imgWhite from "./img/logo-white.svg"
import styles from "./Logo.module.css"
type LogoHref = {
    href: string
}
export default function Logo ({href}: LogoHref) {
    return (
        <Link className={styles.logo} href={href}>
            <Image alt="Логотип" width={48} height={48} src={imgWhite}/>
        </Link>
    )
}