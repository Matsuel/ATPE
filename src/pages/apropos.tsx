import React from 'react';
import Image from 'next/image';
import styles from '@/styles/APropos.module.scss';
import NavBar from '@/Components/Navbar';
import Membres from '@/datas/members';
import Footer from '@/Components/Footer';
import TabName from '@/Components/TabName';
import TopPic from '@/Components/TopPic';
import ImgEscrime4 from '@/assets/imgEscrime4.jpg';
import Subtitle from '@/Components/Subtitle/Subtitle';
import Link from 'next/link';

interface AProposProps {

}

interface MembreProps {
    picture: any;
    name: string;
    roles: string[];
}

const APropos = ({ }: AProposProps) => {
    return (
        <div className={styles.APropos_container}>
            <TabName name="A propos" />
            <NavBar />
            
            <TopPic image={ImgEscrime4} text="Qui sommes nous ?" />

            <Subtitle text="Une équipe pluridisciplinaire" />

            <div className={styles.Members}>
                {
                    Membres.map((membre: MembreProps, index: number) => {
                        return (
                            <div key={index} className={styles.Membre}>
                                <Image src={membre.picture} alt={membre.name} className={styles.MembreImage} />
                                <h3 className={styles.MembreName}>{membre.name}</h3>
                                {
                                    membre.roles.map((role: string, index: number) => {
                                        return (
                                            <p key={index} className={styles.MembreRole}>{role}</p>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }                
            </div>

            <div className={styles.AProposReseau}>
                <h2 className={styles.AProposSubTitle}>Notre réseau</h2>
                <p className={styles.AProposText}>Notre équipe s&apos;appuie sur un médecin référent, un médecin du sport spécialisé en traumatologie, des psychologues du travail, des psychologues cliniciens, des thérapeutes psychocorporels ainsi qu&apos;un psychiatre.</p>

                <div className={styles.AProposReseauImages}>
                    <Image src={require('@/assets/imgEscrime6.jpg')} alt="Escrime" className={styles.AProposReseauImage} />
                    <Image src={require('@/assets/imgEscrime5.jpg')} alt="Escrime" className={styles.AProposReseauImage} />
                </div>

                <Link href="/contact" passHref className={styles.AProposReseauButton}>
                    Rejoindre notre réseau
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default APropos;
