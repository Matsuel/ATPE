import React from 'react';

import styles from '@/styles/Violences.module.scss';
import NavBar from '@/Components/Navbar';
import ImgEscrime7 from '@/assets/imgEscrime7.jpg';
import TopPic from '@/Components/TopPic/TopPic';
import TabName from '@/Components/TabName/TabName';
import Infos, { InfosProps } from '@/Components/Infos/Infos';
import { faArrowsUpDownLeftRight, faFaceSmile, faHandsHolding, faSquareCheck, faTableCells, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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

const Violences = ({ }: ViolencesProps) => {
    return (
        <div className={styles.Violences_container}>
            <NavBar />

            <TabName name="Violences sexuelles" />

            <TopPic image={ImgEscrime7} text="Violences sexuelles" />

            <div className={styles.ViolencesMethodologies}>

                {
                    MethodoliesArray.map((info: InfosProps, index: number) => {
                        return (
                            <Infos key={index} icon={info.icon} title={info.title} text={info.text} />
                        )
                    })
                }
            
            </div>          
        </div>
    );
};

export default Violences;
