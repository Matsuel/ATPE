import React from 'react';
import Image from 'next/image';
import styles from '@/styles/APropos.module.scss';
import NavBar from '@/Components/Navbar';
import Membres from '@/datas/members';
import Footer from '@/Components/Footer';

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
            <NavBar />
            <div className={styles.APropos_Image}>
                <h2 className={styles.AProposTitle}>Qui sommes nous ?</h2>
            </div>

            <h2 className={styles.AProposSubTitle}>Une équipe pluridisciplinaire</h2>

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
                <p className={styles.AProposText}>Notre équipe s'appuie sur un médecin référent, un médecin du sport spécialisé en traumatologie, des psychologues du travail, des psychologues cliniciens, des thérapeutes psychocorporels ainsi qu'un psychiatre.</p>

                <div className={styles.AProposReseauImages}>
                    <Image src={require('@/assets/imgEscrime6.jpg')} alt="Escrime" className={styles.AProposReseauImage} />
                    <Image src={require('@/assets/imgEscrime5.jpg')} alt="Escrime" className={styles.AProposReseauImage} />
                </div>

                <a className={styles.AProposReseauButton} href="/contact">
                    Rejoindre notre réseau
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default APropos;
