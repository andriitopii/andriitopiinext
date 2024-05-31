import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import HomeHero from "@/component/HomeHero/HomeHero";
import HomeAbout from "@/component/HomeAbout/HomeAbout";

export default function Home() {
  
  return (
   <>
   
    <HomeHero/>
   <HomeAbout/>
   
   </>
    
   
  );
}
