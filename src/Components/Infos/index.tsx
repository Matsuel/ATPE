import React from 'react';

import styles from './Infos.module.scss';
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface InfosProps {
    icon: any;
    title: string;
    text: string[];
}

const Infos = ({
    icon,
    text,
    title
}: InfosProps) => {
    return (
        <div className={styles.Infos}>
            <FontAwesomeIcon icon={icon} className={styles.InfosIcon} />
            <h3 className={styles.InfosTitle}>
                {title}
            </h3>
            {
                text.map((t: string, index: number) => {
                    return (
                        <p key={index} className={styles.InfosText}>
                            {t}
                        </p>
                    )
                })
            }
        </div>
    );
};

export default Infos
