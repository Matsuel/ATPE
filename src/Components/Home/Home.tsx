import React from 'react';
import styles from './style.module.scss';
import { faUserSlash, faUserNinja, faChildReaching } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HomeProps {

}

const Home = ({ }: HomeProps) => {
    return (
        <div className={styles.Home_container}>
            <div className={styles.Home1}>
                <h1 className={styles.Home1_title}>
                    Active ton potentiel par la pratique de l'escrime
                </h1>
            </div>

            <div className={styles.Home2}>
                <h2 className={styles.Home2_title}>
                    L'escrime, au service d'un monde meilleur
                </h2>

                <div className={styles.HomeSeparator}></div>
                <h3 className={styles.Home2_subtitle}>
                    Il n'est plus temps d'attendre quand des solutions existent !
                </h3>

                <h2 className={styles.Home2_title}>
                    ATPEscrime accompagne les personnes victimes de violences dans leur reconstruction.
                </h2>

                <div className={styles.Home2_Icons}>
                    <div className={styles.Home2_Info}>
                        <FontAwesomeIcon icon={faUserSlash} className={styles.Home2_Icon} />
                        <h3 className={styles.Home2_InfoTitle}>
                            VIOLENCES SEXUELLES
                        </h3>
                        <p className={styles.Home2_InfoText}>
                            Depuis 12 ans,
                            ATPE met son savoir-faire au service des femmes, des hommes et des enfants, victimes de violences sexuelles.
                        </p>

                    </div>

                    <div className={styles.Home2_Info}>
                        <FontAwesomeIcon icon={faUserNinja} className={styles.Home2_Icon} />
                        <h3 className={styles.Home2_InfoTitle}>
                            VIOLENCES  & HARCELEMENT

                        </h3>
                        <p className={styles.Home2_InfoText}>
                            En individuel ou en groupe, ATPE vous aide à sortir du cercle de la violence en initiant pas à pas une façon d'être plus écologique pour chacun et chacune.
                        </p>
                    </div>

                    <div className={styles.Home2_Info}>
                        <FontAwesomeIcon icon={faChildReaching} className={styles.Home2_Icon} />
                        <h3 className={styles.Home2_InfoTitle}>
                            HARCELEMENT SCOLAIRE
                        </h3>
                        <p className={styles.Home2_InfoText}>
                            Le harcèlement ne devrait plus
                            exister !
                            ATPE s'emploie durant toute l'année scolaire à aider les enfants et adolescents victimes de ces pratiques.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
