"use client"
import Link from "next/link";
import Logo from "../Logo/Logo";
import styled from "./Header.module.scss";
import Button from "../Button/Button";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={styled.header}>
          <button className={styled.header__menuBtn}>МЕНЮ</button>
  
          <Button href="/order">Залишити <br></br> замовлення</Button>

         
          
        </div>
      </div>
    </header>
  );
}
