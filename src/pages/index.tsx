import Image from "next/image";

import NavBar from "@/Components/Navbar";
import styles from "@/styles/Home.module.scss";
import { faUserSlash, faUserNinja, faChildReaching } from "@fortawesome/free-solid-svg-icons";
import FFE from "@/assets/ffe.png";
import Footer from "@/Components/Footer";
import TabName from "@/Components/TabName";
import Infos, { InfosProps } from "@/Components/Infos";
import Subtitle from "@/Components/Subtitle/Subtitle";
import Link from "next/link";

const InfosViolences: InfosProps[] = [
    {
        icon: faUserSlash,
        title: "VIOLENCES SEXUELLES",
        text: ["Depuis 12 ans, ATPE met son savoir-faire au service des femmes, des hommes et des enfants, victimes de violences sexuelles."]
    },
    {
        icon: faUserNinja,
        title: "VIOLENCES & HARCELEMENT",
        text: ["En individuel ou en groupe, ATPE vous aide à sortir du cercle de la violence en initiant pas à pas une façon d'être plus écologique pour chacun et chacune."]
    },
    {
        icon: faChildReaching,
        title: "HARCELEMENT SCOLAIRE",
        text: ["Le harcèlement ne devrait plus exister ! ATPE s'emploie durant toute l'année scolaire à aider les enfants et adolescents victimes de ces pratiques."]
    }
];

export default function App() {
    return (
        <>
            <TabName name="ATPEscrime" />
            <NavBar />
            <div className={styles.Home_container}>
                <div className={styles.Home1}>
                    <h1 className={styles.Home1_title}>
                        Active ton potentiel par la pratique de l&apos;escrime
                    </h1>
                </div>

                <div className={styles.Home2}>
                    <h2 className={styles.Home2_title}>
                        L&apos;escrime, au service d&apos;un monde meilleur
                    </h2>

                    <div className={styles.HomeSeparator}></div>

                    <Subtitle text="Il n'est plus temps d'attendre quand des solutions existent !" />

                    <h2 className={styles.Home2_title}>
                        ATPEscrime accompagne les personnes victimes de violences dans leur reconstruction.
                    </h2>

                    <div className={styles.Home2_Icons}>
                        {
                            InfosViolences.map((info: InfosProps, index: number) => {
                                return (
                                    <Infos key={index} icon={info.icon} title={info.title} text={info.text} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className={styles.Home3}>
                    <h2 className={styles.Home3_title}>
                        S&apos;épanouir avec l'escrime...
                    </h2>

                    <p className={styles.Home3_text}>
                        Porteuse de valeurs fondamentales, l&apos;escrime est un moyen d&apos;éducation exceptionnel, un facteur d&apos;épanouissement de la personne, d&apos;intégration sociale et de promotion.
                        La lutte contre les discriminations et la parité y sont promues.
                        Des valeurs morales personnelles comme la loyauté, le courage, la combativité, le dépassement de soi, la rigueur, l&apos;autonomie et des valeurs citoyennes comme le respect, la solidarité, la tolérance, l&apos;esprit d'équipe, le plaisir, font de l&apos;escrime une véritable école de vie
                    </p>

                    <p className={styles.Home3_signature}>
                        Féderation Française d&apos;Escrime
                    </p>

                    <Image src={FFE} alt="logo" width={200} />

                </div>

                <div className={styles.Home4}>
                    <h2 className={styles.Home4_title}>
                        "Que l&apos;on s&apos;efforce d&apos;être pleinement humain
                        et il n&apos;y aura plus de place pour le mal."
                    </h2>
                    <p className={styles.Home4_signature}>
                        - Confucius
                    </p>
                </div>

                <div className={styles.Home5}>
                    <h2 className={styles.Home5_title}>
                        Rencontrons-nous
                    </h2>
                    <Link href="/apropos" passHref className={styles.Home5_link}>
                        Nous contacter
                    </Link>
                </div>

                <Footer />
            </div>
        </>
    );
}
