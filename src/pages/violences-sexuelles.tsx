import React from 'react';

import styles from '@/styles/Violences.module.scss';
import NavBar from '@/Components/Navbar';
import ImgEscrime7 from '@/assets/imgEscrime7.jpg';
import TopPic from '@/Components/TopPic/TopPic';
import TabName from '@/Components/TabName/TabName';
import Infos, { InfosProps } from '@/Components/Infos/Infos';
import { faArrowsUpDownLeftRight, faFaceSmile, faHandsHolding, faSquareCheck, faTableCells, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ImgEscrime8 from '@/assets/imgEscrime8.jpg';
import Check from '@/assets/check.svg';
import Subtitle from '@/Components/Subtitle/Subtitle';

interface ViolencesProps {

}

const MethodoliesArray: InfosProps[] = [
    {
        icon: faHandsHolding,
        title: "Intégration",
        text: [
            "Un bilan réalisé avec un thérapeute spécialisé défini l'engagement à suivre les ateliers. Il porte sur le chemin parcouru, l'impact des violences subies, les conditions de vie actuelle... ",
            "Il est le premier pas d'une nouvelle vie. "
        ]
    },
    {
        icon: faTableCells,
        title: "Programme",
        text: [
            "Chaque atelier fait l'objet d'une thématique et d'objectifs précis alternant des temps de parole, un échauffement, des exercices d'escrime et d'autres psycho-corporels, des échanges, de la réflexion et de la relaxation."
        ]
    },
    {
        icon: faUserPlus,
        title: "Equipe",
        text: [
            "L'équipe d'accompagnants est pluridisciplinaire, professionnelle et spécialisée dans l'accompagnement de victimes afin de permettre l'expression de chacun selon son propre rythme et ses besoins."
        ]
    },
    {
        icon: faSquareCheck,
        title: "Protection",
        text: [
            "Sécurité et bienveillance sont les maîtres mots pour ces séances qui se déroulent dans un cadre dédié, une salle d'armes, avec un équipement spécifique : masque, tenue complète, gant et sabre ainsi que des règles qui permettent un cadre sécurisant."
        ]

    },
    {
        icon: faArrowsUpDownLeftRight,
        title: "Durée",
        text: [
            "Les modules de reconstruction par l'escrime se déroulent sur une période allant de 8 à 10 mois. Ce temps de régénération est indispensable à l'élaboration de nouveaux schémas cognitifs, émotionnels et comportementaux. "
        ]
    },
    {
        icon: faFaceSmile,
        title: "Accompagnement",
        text: [
            "Durant toute la durée du parcours, il est indispensable que l'escrimeur-se- soit accompagné-e- en séance individuelle par un thérapeute (connaissant le programme) afin de soutenir et faciliter le travail d'intégration après chaque ateliers. "
        ]
    }
]

const StepsViolences: string[] = [
    "10 séances pour se réparer et retrouver l'énergie de vivre !",
    "Groupes différenciés pour femmes et hommes.",
    "10 à 14 participants.",
    "4H d'atelier",
    "Travail en individuel et en groupe."
]



const Violences = ({ }: ViolencesProps) => {
    return (
        <div className={styles.Violences_container}>
            <NavBar />

            <TabName name="Violences sexuelles" />

            <TopPic image={ImgEscrime7} text="Violences sexuelles" />

            <div className={styles.ViolencesStats}>
                <div className={styles.ViolencesStatsTexts}>
                    <p className={styles.ViolencesStatsSpeech}>
                        1 personne sur 5 est victime de violences sexuelles.
                    </p>
                    <p className={styles.ViolencesStatsText}>
                        Les modules de reconstruction thérapeutique ATPE,  créés en escrime par Olivier Serwar vous proposent une approche globale ayant fait ses preuves depuis 2012 :
                    </p>

                    {
                        StepsViolences.map((step: string, index: number) => {
                            return (
                                <p key={index} className={styles.ViolencesStatsStep}>
                                    <Image src={Check} alt="Check" className={styles.ViolencesStatsCheck} />
                                    {step}
                                </p>
                            )
                        })
                    }
                </div>
                <Image src={ImgEscrime8} alt="Escrime" className={styles.ViolencesStatsImage} />
            </div>

            <Subtitle text="UNE METHODOLOGIE" />

            <div className={styles.ViolencesMethodologies}>

                {
                    MethodoliesArray.map((info: InfosProps, index: number) => {
                        return (
                            <Infos key={index} icon={info.icon} title={info.title} text={info.text} />
                        )
                    })
                }

            </div>

            <div className={styles.ViolencesTrees}>

                <div className={styles.ViolencesTreesTexts}>
                    <h3 className={styles.ViolencesTreesTitle}>
                        Reprendre confiance
                    </h3>
                    <p className={styles.ViolencesTreesText}>
                        Les objectifs avérés des modules de reconstruction thérapeutique par l'escrime sont de retrouver votre confiance, votre énergie de vie
                        et de reprendre en main votre destin.
                    </p>

                    <a href="/contact" className={styles.ViolencesTreesContact}>
                        Je souhaite plus d'informations
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Violences;
