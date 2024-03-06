import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/Components/Navbar";
import style from "@/styles/Home.module.scss";
import Home from "@/Components/Home";


const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <div className={style.mainContainer}>
      <NavBar />
      <Home />
    </div>
  );
}
