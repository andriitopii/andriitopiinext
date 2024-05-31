"use client";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import styled from "./HomeHero.module.scss";
import Image from "next/image";
import ImgLogo from "./ImgLogo.png";
import Link from "next/link";
import Button from "../Button/Button";

export default function HomeHero() {
  return (
    <section className={styled.homeHero}>
      <div className="container">
        <div className={styled.homeHero__content}>
          <ul className={styled.homeHero__content_media}>
            <li>
              <span className={styled.homeHero__content_media___decoration}></span>
              <Image src={ImgLogo} alt="AndriiTopii - digital agency" />
              <span className={styled.homeHero__content_media___decoration}></span>
            </li>
          </ul>

          <ul className={styled.homeHero__content_link}>
            <li><Link href="/service/web-dev">WEB - РОЗРОБКА</Link></li>
            <li><Link href="/service/smm">SMM</Link></li>
            <li><Link href="/service/ui-ux">UI/UX</Link></li>
            <li><Link href="/contact">КОНТАКТИ</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
