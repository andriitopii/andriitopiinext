import Image from "next/image"
import Link from "next/link"
import imgWhite from "./img/logo-white.svg"
import imgBlack from "./img/logo-black.svg"
import styles from "./Logo.module.css"
type LogoHref = {
    href: string,
    img: boolean
}
export default function Logo ({href, img}: LogoHref) {
    return (
        <Link className={styles.logo} href={href}>
            <Image alt="Логотип" width={`100%`} height={48} src={img ? imgWhite : imgBlack}/>
        </Link>
    )
}