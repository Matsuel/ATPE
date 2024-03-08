import React from 'react';

import styles from '@/styles/ViolenceHarcelement.module.scss';
import TopPic from '@/Components/TopPic';
import ImgEscrime10 from '@/assets/imgEscrime10.jpg';
import Check from '@/assets/check.svg';
import NavBar from '@/Components/Navbar';
import Subtitle from '@/Components/Subtitle/Subtitle';
import TabName from '@/Components/TabName';
import Image from 'next/image';
import Link from 'next/link';

import imgEscrime12 from '@/assets/imgEscrime12.png';
import imgEscrime13 from '@/assets/imgEscrime13.png';
import imgEscrime14 from '@/assets/imgEscrime14.jpg';
import imgEscrime15 from '@/assets/imgEscrime15.jpg';
import imgEscrime4 from '@/assets/imgEscrime4.jpg';
import Footer from '@/Components/Footer';

interface ViolenceHarcelementProps {

}

const Phrases: string[] = [
    "La violence est l'usage de la force ou d'un pouvoir physique ou psychique, pour contraindre, dominer, tuer, détruire ou endommager. Présente à tout âge et dans tous les milieux sociaux, elle implique des coups, des blessures, de la souffrance, ou encore la destruction de biens humains ou d'éléments naturels. ",
    "Si vous avez été victime de violence ou de harcèlement dans votre cercle familial, professionnel ou social, quels qu'en soient les impacts,",
    "Il est possible de vous reconstruire."
];

const AntiViolence: string[] = [
    "Aucune violence n'est minime et il n'y a pas de hiérarchie dans le vécu et le ressenti d'actes de violence   !",
    "Faire l'expérience de la violence ou du harcèlement est un évènement traumatisant et ce choc peut amener à un état de sidération psychique (stupéfaction, incapacité à agir ou à raisonner, immobilisme), une conduite désordonnée ou encore une façon d'agir de manière adaptée extérieurement mais totalement automatique intérieurement (état de dissociation psychique).",
    "Si ces symptômes perdurent au delà de quelques semaines après l'évènement, on parle alors de syndrome de stress post-traumatique et ce nouvel état peut alors conduire à de nouvelles pathologies comme la dépression, des problèmes de santé, des conduites addictives, des conduites à risque...",
    "Si vous vous reconnaissez, il y a urgence à ce que vous soyez pris en charge ! "
];

interface ViolenceHarcelementProgrammes {
    title: string;
    paras: string[];
    steps: string[];
    footer: string;
}

const ViolenceHarcelementProgrammes: ViolenceHarcelementProgrammes[] = [
    {
        title: "Séances individuelles",
        paras: [
            "En séances individuelles, ATPE vous propose un accompagnement sur mesure en deux temps avec un maître d'armes en séance d'escrime et un thérapeute spécialisé en cabinet.",
            "Au delà de poser les mots sur ce qui a été vécu et faire évoluer les croyances, le travail croisé en escrime-thérapie permet de prendre conscience des mécanismes d'emprise qui ont été mis en place, de retrouver sa confiance en sachant poser ses limites ou encore d'évacuer l'énergie de stress généré... ",
            "C'est un travail à la fois psychique ET corporel."
        ],
        steps: [
            "6 séances (environ) d'1H d'escrime. ",
            "6 séances (environ) d'1H avec un thérapeute spécialisé.",
            "Des thématiques et des objectifs précis pour chaque séance."
        ],
        footer: "Séances à la demande"
    },
    {
        title: "Modules collectifs ",
        paras: [
            "Les modules collectifs d'accompagnement par l'escrime pour les violences et/ou le harcèlement sont répartis sur 6 séances de 4H.",
            "Les ateliers se déroulent en salle d'armes avec des maîtres d'armes et des thérapeutes. Le travail en groupe facilite les prise de conscience et engendre l'émulation.  ",
            "Au programme, échauffement, escrime, exercices psycho-corporels, réflexion, relaxation.",
            "Il est préconisé de suivre par ailleurs une thérapie avec une personne comprenant ce qui est vécu lors des ateliers."
        ],
        steps: [
            "5 modules de 4H une fois par mois.",
            "Groupes de 6 à 14 personnes.",
            "2 à 4 encadrants (maîtres d'armes et thérapeutes) selon le nombre de participants.",
            "Hommes et femmes en groupe différenciés.",
            "Des thématiques et des objectifs précis pour chaque séance."
        ],
        footer: "Intégrer un module collectif"
    }
];

const ViolenceHarcelement = ({ }: ViolenceHarcelementProps) => {
    return (
        <div className={styles.ViolenceHarcelement_container}>
            <TabName name="Violences & Harcèlement" />
            <NavBar />
            <TopPic image={ImgEscrime10} text="VIOLENCES & HARCELEMENT" />

            <Subtitle text='Retrouver votre pleine puissance.' />

            <div className={styles.ViolenceHarcelement_Phrases}>
                {
                    Phrases.map((phrase: string, index: number) => {
                        return (
                            <p key={index} className={styles.ViolenceHarcelement_Phrase}>{phrase}</p>);
                    })
                }
            </div>

            <Subtitle text='Des ateliers pour se sortir du cercle de la violence.' />

            <div className={styles.ViolenceHarcelement_AntiViolences}>
                {
                    AntiViolence.map((phrase: string, index: number) => {
                        return (
                            <p key={index} className={styles.ViolenceHarcelement_AntiViolences_Phrase}>
                                {phrase}
                            </p>
                        );
                    })
                }
            </div>

            <Subtitle text="Tout au long de l'année, en séances individuelles ou collectives, les Maîtres d'Armes et les thérapeutes d'ATPE vous permettent de mettre des mots sur ce qui a été vécu, d'évacuer votre stress, de réguler votre énergie & de retrouver votre pouvoir d'action." />

            <div className={styles.ViolenceHarcelement_Programmes}>
                {
                    ViolenceHarcelementProgrammes.map((programme: ViolenceHarcelementProgrammes, index: number) => {
                        return (
                            <div key={index} className={styles.ViolenceHarcelement_Programme}>
                                <h3 className={styles.ViolenceHarcelement_Programme_title}>{programme.title}</h3>
                                {
                                    programme.paras.map((para: string, index: number) => {
                                        return (
                                            <p key={index} className={styles.ViolenceHarcelement_Programme_para}>{para}</p>
                                        );
                                    })
                                }
                                {
                                    programme.steps.map((step: string, index: number) => {
                                        return (
                                            <p key={index} className={styles.ViolenceHarcelement_Programme_step}>
                                                <Image src={Check} alt="check" />
                                                {step}
                                            </p>
                                        );
                                    })
                                }
                                <p className={styles.ViolenceHarcelement_Programme_footer}>{programme.footer}</p>

                                <Link href="/contact" className={styles.ViolenceHarcelement_Programme_link}>
                                    Demande d'informations
                                </Link>

                            </div>
                        );
                    })
                }
            </div>

            <Subtitle text="Se sortir de la violence & retrouver la joie de vivre." />

            <div className={styles.ViolenceHarcelement_Images}>
                <Image src={imgEscrime12} alt="imgEscrime12" className={styles.ViolenceHarcelement_Image} />
                <Image src={imgEscrime13} alt="imgEscrime13" className={styles.ViolenceHarcelement_Image} />
                <Image src={imgEscrime14} alt="imgEscrime14" className={styles.ViolenceHarcelement_Image} />
                <Image src={imgEscrime15} alt="imgEscrime15" className={styles.ViolenceHarcelement_Image} />
                <Image src={imgEscrime4} alt="imgEscrime4" className={styles.ViolenceHarcelement_Image} />
            </div>

            <Footer />
        </div>
    );
};

export default ViolenceHarcelement;
