import React from 'react';

import styles from './Subtitle.module.scss';

interface SubtitleProps {
    text : string;
}

const Subtitle = ({text}: SubtitleProps) => {
    return (
        <h2 className={styles.Subtitle}>
            {text}
        </h2>
    );
};

export default Subtitle;
