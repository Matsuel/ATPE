import React from 'react';

import styles from '@/styles/Particuliers.module.scss';
import NavBar from '@/Components/Navbar';
import TabName from '@/Components/TabName';
import Link from 'next/link';
import Footer from '@/Components/Footer';

interface ParticuliersProps {

}

interface ButtonsContentProps {
    name: string;
    route: string;
}

const ButtonsContent: ButtonsContentProps[] = [
    {
        name: "Violences sexuelles",
        route: "violences-sexuelles"
    },
    {
        name: "Violences & Harcèlement",
        route: "violences-harcelement"
    },
    {
        name: "Harcèlement scolaire",
        route: "harcelement-scolaire"
    }
];



const Particuliers = ({ }: ParticuliersProps) => {
    return (
        <div className={styles.Particuliers_container}>
            <NavBar />
            <TabName name="Particuliers" />

            <div className={styles.Particuliers_links}>
                {
                    ButtonsContent.map((button: ButtonsContentProps, index: number) => {
                        return (
                            <Link href={button.route} key={index} className={styles.Particuliers_link}>
                                {button.name}
                            </Link>
                        );
                    })
                }
            </div>

            <Footer />

        </div>
    );
};

export default Particuliers;
