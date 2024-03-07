import React from 'react';
import styles from '@/styles/Professionnels.module.scss';
import NavBar from '@/Components/Navbar';
import Image2 from '@/assets/equipement.jpg';
import Check from '@/assets/check.svg';
import Cible from '@/assets/cible.svg';
import Calendar from '@/assets/calendar.svg';
import Image from 'next/image';
import Head from 'next/head';
import User from '@/assets/user.svg';
import Footer from '@/Components/Footer';
import TabName from '@/Components/TabName/TabName';
import TopPic from '@/Components/TopPic/TopPic';
import Personne from '@/assets/personne.jpg';
import Subtitle from '@/Components/Subtitle/Subtitle';

interface ProfessionnelsProps {

}

interface ProfessionnelText {
    content: string;
}

interface ProfessionnelProgramme {
    title: string;
    objectifs: string;
    objectifsPara: string;
    pourQui: string;
    pourQuiTab: string[];
    speech: string;
    programme: string;
    programmes: string[];
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
        content: "Lors des modules de reconstruction thérapeutique, la prise en charge est totale puisqu'elle concerne non seulement ce qui peut être raconté mais aussi ce qui doit être réparé de façon psychique, émotionnelle ainsi que dans les sens/sensations."
    },
    {
        content: "Ces dimensions se devant d'être accompagnées simultanément, car elles sont partie intégrante du processus de réparation, au delà du contenu théorique, la proposition pour vous durant ces stages est d'expérimenter les étapes de reconstruction vécues par les patient-e-s."
    }
]

const Programmes: ProfessionnelProgramme[] = [
    {
        title: "Stage initiation 1/2 journée",
        objectifs: "Objectifs",
        objectifsPara: "Sur cette journée d'initiation, ATPE vous propose de découvrir comment se déroulent les modules de reconstruction thérapeutique pour les victimes de violences sexuelles et comment vous pouvez contribuer à accompagner vos patients sur cette problématique.",
        pourQui: "Pour qui ?",
        pourQuiTab: [
            "Thérapeutes, médecins, personnel médical, coachs...",
            "Toute personne intéressée par l'escrime en tant qu'outil de transfert thérapeutique et/ou professionnel.",
            "Toute personne accompagnant des victimes de violences (verbales, physiques, sexuelles)."
        ],
        speech: "Durant la journée chaque thérapeute sera amené à expérimenter de façon personnelle les transferts possibles par l'escrime comme la capacité à poser ses limites, la nécessité de savoir se protéger ou encore comment la confiance en soi, en l'autre peut à nouveau être présente et se développer.",
        programme: "Programme (9H30/12H30)",
        programmes: [
            "Point sur les violences aujourd'hui",
            "Vue globale du parcours",
            "Rôle et mission du thérapeute",
            "Expérimentation personnalisée sur plusieurs thématiques",
            "Questions-réponses",
            "Bilan de la journée"
        ]
    },
    {
        title: "Stage exploration 2 jours",
        objectifs: "Objectifs",
        objectifsPara: "Vous familiariser avec l'escrime en tant qu'outil de résonance des comportements. Vous permettre de résoudre, le cas échéant, ce qui a été laissé de côté dans votre propre parcours thérapeutique et que vous souhaitez voir évoluer.",
        pourQui: "Pour qui ?",
        pourQuiTab: [
            "Thérapeutes, médecins, personnel médical, coachs...",
            "Toute personne intéressée par l'escrime en tant qu'outil de transfert thérapeutique et/ou professionnel.",
            "Toute personne accompagnant des victimes de violences (verbales, physiques, sexuelles)."
        ],
        speech: "Durant ces deux jours, le pont est constamment ratio fait entre l'escrime et les sujet traités (limites, confiance, protection, leadership, coopération...) et chaque stagiaire se voit proposer un espace d'expression où il peut naviguer de façon libre entre posture d'expérimentateur et posture réflexive.",
        programme: "Programme",
        programmes: [
            "Echauffement, maniement du sabre",
            "Premiers challenges en individuel",
            "Exercices psycho-corporels",
            "Escrime en équipes et challenges.",
            "Exercices psycho-corporels",
            "Questions-réponses",
            "Bilan de la journée"
        ]
    }
]

const Professionnels = ({ }: ProfessionnelsProps) => {
    return (
        <div className={styles.Professionnels_container}>
            <TabName name="Professionnels" />

            <NavBar />

            <TopPic image={Personne} text="Thérapeutes, accompagnez vos patient(e)s" />

            <div className={styles.Professionnels1}>

                <Subtitle text="Pour une prise en charge optimale des personnes victimes de violences" />

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
                        <Image src={Calendar} alt="calendar" width={30} height={30} />
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

                <div className={styles.ProfessionnelsProgramme_Cards}>
                    {
                        Programmes.map((item: ProfessionnelProgramme, index: number) => {
                            return (
                                <div key={index} className={styles.ProfessionnelsProgramme_Card}>
                                    <h3 className={styles.ProfessionnelsProgramme_CardTitle}>{index+1}. {item.title}</h3>
                                    <p className={styles.ProfessionnelsProgramme_TextTitle}>
                                        <Image src={Cible} alt="cible" className={styles.ProfessionnelProgramme_Icon}/>
                                        {item.objectifs}
                                    </p>
                                    <p className={styles.ProfessionnelsProgramme_Text}>{item.objectifsPara}</p>
                                    <p className={styles.ProfessionnelsProgramme_TextTitle}>
                                        <Image src={User} alt="user" />
                                        {item.pourQui}
                                    </p>
                                    {
                                        item.pourQuiTab.map((item: string, index: number) => {
                                            return (
                                                <p key={index} className={styles.ProfessionnelsProgramme_TextPourQui}>- {item}</p>
                                            )
                                        })
                                    }
                                    <p className={styles.ProfessionnelsProgramme_Text}>{item.speech}</p>
                                    <p className={styles.ProfessionnelsProgramme_TextTitle}>
                                        <Image src={Calendar} alt="calendar" />
                                        {item.programme}
                                        </p>
                                    {
                                        item.programmes.map((item: string, index: number) => {
                                            return (
                                                <p key={index} className={styles.ProfessionnelsProgramme_TextProg}>
                                                    <Image src={Check} alt="check" />
                                                    {item}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <h2 className={styles.ProfessionnelsProgramme_Ensemble}>
                    Ensemble, nous pouvons faire la différence
                </h2>
            </div>

            <Footer />
        </div>
    );
};

export default Professionnels;
