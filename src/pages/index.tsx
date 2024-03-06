import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/Components/Navbar";
import style from "@/styles/Home.module.scss";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={style.mainContainer}>
      <NavBar />
    </div>
  );
}
