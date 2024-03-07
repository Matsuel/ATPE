import React from 'react';

import styles from './style.module.scss';
import Head from 'next/head';

interface TabNameProps {
    name: string;
}

const TabName = ({name}: TabNameProps) => {
    return (
        <Head>
            <title>{name}</title>
        </Head>
    );
};

export default TabName;
