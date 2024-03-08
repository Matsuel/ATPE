import React from 'react';

import styles from '@/styles/HarcelementScolaire.module.scss';
import NavBar from '@/Components/Navbar';
import TabName from '@/Components/TabName';
import Personne2 from '@/assets/personne2.jpg';
import TopPic from '@/Components/TopPic';
import Subtitle from '@/Components/Subtitle/Subtitle';
import imgEscrime16 from '@/assets/imgEscrime16.jpg';
import imgEscrime17 from '@/assets/imgEscrime17.jpg';
import imgEscrime18 from '@/assets/imgEscrime18.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/Components/Footer';

interface HarcelementScolaireProps {

}

const Phrases: string[] = [
    "Pour un enfant ou un adolescent, se réparer et se reconstruire après un épisode de harcèlement scolaire, c'est apprendre à dire STOP, retrouver sa confiance...",
    "ATPE propose un parcours de reconstruction par l'escrime sur l'année en individuel et en stage collectif durant les vacances scolaires.",
    "Informations et inscriptions auprès de : Maître Philippe Pautrat."
];

const HarcelementScolaire = ({ }: HarcelementScolaireProps) => {
    return (
        <div className={styles.HarcelementScolaire_container}>
            <TabName name="Harcèlement Scolaire" />
            <NavBar />
            <TopPic image={Personne2} text="HARCELEMENT SCOLAIRE." />

            <Subtitle text='Le harcèlement scolaire est un délit.' />

            <p className={styles.HarcelementScolaire_Phrase}>
                &quot;Aucun élève ne doit subir de la part des autres élèves des faits de harcèlement ayant pour objet ou pour effet une dégradation de ses conditions d&apos;apprentissage susceptible de porter atteinte à ses droits et à sa dignité ou d&apos;altérer sa santé physique ou mentale&quot;.
            </p>

            <div className={styles.HarcelementScolaire_Images}>
                <Image src={imgEscrime16} alt="imgEscrime16" className={styles.HarcelementScolaire_Image} />
                <Image src={imgEscrime17} alt="imgEscrime17" className={styles.HarcelementScolaire_Image} />
                <Image src={imgEscrime18} alt="imgEscrime18" className={styles.HarcelementScolaire_Image} />
            </div>

            <Subtitle text='Grandir en sécurité.' />

            <div className={styles.HarcelementScolaire_Phrases}>
                {
                    Phrases.map((phrase: string, index: number) => {
                        return (
                            <p key={index} className={styles.HarcelementScolaire_Phrase}>{phrase}</p>);
                    })
                }
            </div>

            <Subtitle text="Prenons soin des nos enfants." />

            <Link href="/contact" className={styles.HarcelementScolaire_link}>
                Prendre rendez-vous
            </Link>

            <Footer />

        </div>
    );
};

export default HarcelementScolaire;
