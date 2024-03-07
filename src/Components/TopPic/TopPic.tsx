import React from 'react';

import styles from './TopPic.module.scss';
import { StaticImageData } from 'next/image';

interface TopPicProps {
    image: StaticImageData;
    text: string;
}

const TopPic = ({ image, text }: TopPicProps) => {
    return (
        <div className={styles.TopPic_container} style={{backgroundImage: `url(${image.src})`,}}>
            <h1 className={styles.TopPicTitle}>{text}</h1>
        </div>
    );
};

export default TopPic;
