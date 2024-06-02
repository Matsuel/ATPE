import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '@/assets/logo.png'

interface NavBarProps {

}

interface Tab {
    name: string;
    link: string;
}

const NavBar = ({ }: NavBarProps) => {
    const tab: Tab[] = [
        {
            name: "Accueil",
            link: "/"
        },
        {
            name: "Particuliers",
            link: "/particuliers"
        },
        {
            name: "Professionnels",
            link: "/professionnels"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "A propos",
            link: "/apropos"
        },
    ]

    return (
        <div className={styles.NavBar_container}>
            <div className={styles.NavBar_Content}>
                <Image src={Logo} alt="logo" width={200} />
                {
                    tab.map((item: Tab, index: number) => {
                        return (
                            <a key={index} href={item.link} className={styles.Navbar_tab}>{item.name}</a>
                        )
                    })
                }

            </div>



        </div>
    );
};

export default NavBar;
