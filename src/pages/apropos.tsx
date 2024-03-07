import React from 'react';
import Image from 'next/image';
import styles from '@/styles/APropos.module.scss';
import NavBar from '@/Components/Navbar';
import Membres from '@/datas/members';

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

            <div className={styles.AProposContent}>
                <h2 className={styles.AProposSubTitle}>Une équipe pluridisciplinaire</h2>
                <div className={styles.AProposMembres}>
                </div>
            </div>

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
        </div>
    );
};

export default APropos;
