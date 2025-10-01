import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";

import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

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
                            <NavLink href={"/meals"}>Browse meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}