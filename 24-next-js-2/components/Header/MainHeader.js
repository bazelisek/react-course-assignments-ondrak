import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";

import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";

export default function MainHeader() {
    return(
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="a plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Browse community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}