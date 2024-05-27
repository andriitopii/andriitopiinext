import Link from "next/link";
import Logo from "../Logo/Logo";
import styled from "./Header.module.css";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={styled.header}>
          <Logo href={"/"} />
          <search>
            <form>
              <input name="fsrch" id="fsrch" placeholder="Search W3Schools" />
            </form>
          </search>
          <nav>
            <ul className={styled.menu}>
              <li>
                <Link href="/course">Курси</Link>
              </li>
              <li>
                <Link href="/service">Послуги</Link>
              </li>
              <li>
                <Link href="/blog">Блог</Link>
              </li>
              <li>
                <Link href="/about">Про нас</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
