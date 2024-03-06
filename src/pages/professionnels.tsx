import React from 'react';
import styles from '@/styles/Professionnels.module.scss';
import NavBar from '@/Components/Navbar';
import Image2 from '@/assets/equipement.jpg';
import Image from 'next/image';

interface ProfessionnelsProps {

}

interface ProfessionnelText {
    content: string;
}

const ProfessionnelTexts: ProfessionnelText[] = [
    {
        content: "Violence verbale, morale, physique, sexuelle, conjugale..."
    },
    {
        content: "Dommages corporels, psychologiques, émotionnels, relationnels..."
    },
    {
        content: "Les dégâts engendrés pour les victimes sont immenses et souvent irréversibles..."
    }
]

const ProfessionnelsTexts2: ProfessionnelText[] = [
    {
        content: "L'escrime permet des transferts rapides et favorise  l'émergence de prises de conscience dans un cadre sécurisé."
    },
    {
        content: "Les maîtres d'escrime et les thérapeutes d'ATPE vous proposent d'appréhender les problématiques rencontrées par vos patients victimes de violences en apportant des solutions."
    }
]

const ProfessionnelsProgramme: ProfessionnelText[] = [
    {
        content:"Lors des modules de reconstruction thérapeutique, la prise en charge est totale puisqu'elle concerne non seulement ce qui peut être raconté mais aussi ce qui doit être réparé de façon psychique, émotionnelle ainsi que dans les sens/sensations."
    },
    {
        content:"Ces dimensions se devant d'être accompagnées simultanément, car elles sont partie intégrante du processus de réparation, au delà du contenu théorique, la proposition pour vous durant ces stages est d'expérimenter les étapes de reconstruction vécues par les patient-e-s."
    }
]

const Professionnels = ({ }: ProfessionnelsProps) => {
    return (
        <div className={styles.Professionnels_container}>
            <NavBar />

            <div className={styles.Professionnels_Top}>
                <h1 className={styles.Professionnels_Title}>
                    Thérapeutes,<br />
                    accompagnez vos patient(e)s
                </h1>
            </div>

            <div className={styles.Professionnels1}>
                <h2 className={styles.Professionnels1_Title}>
                    Pour une prise-en-charge optimale des personnes victimes de violences
                </h2>

                <div className={styles.ProfessionnelsSeparator}></div>

                {
                    ProfessionnelTexts.map((item: ProfessionnelText, index: number) => {
                        return (
                            <p key={index} className={styles.Professionnels1_Text}>{item.content}</p>
                        )
                    })
                }
            </div>

            {/* Voir s'il ya besoin de faire le composant avec l'image escrime */}

            <div className={styles.Professionnels3}>
                <div className={styles.Professionnels3_ContentLeft}>
                    <h2 className={styles.Professionnels3_Title}>
                        Découvrez les modules de reconstruction par l'escrime
                        & Faites partie du réseau.
                    </h2>

                    {
                        ProfessionnelsTexts2.map((item: ProfessionnelText, index: number) => {
                            return (
                                <p key={index} className={styles.Professionnels3_Text}>{item.content}</p>
                            )
                        })
                    }
                </div>

                <Image src={Image2} alt="equipement" />
            </div>

            <div className={styles.ProfessionnelsProgramme}>
                <div className={styles.ProfessionnelsProgramme_Content}>
                    <h2 className={styles.ProfessionnelsProgramme_Title}>
                        Programme de la formation
                    </h2>
                    
                    {
                        ProfessionnelsProgramme.map((item: ProfessionnelText, index: number) => {
                            return (
                                <p key={index} className={styles.ProfessionnelsProgramme_Text}>{item.content}</p>
                            )
                        })
                    }

                </div>

                
            </div>
        </div>
    );
};

export default Professionnels;
