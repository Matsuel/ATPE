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
            <meta name="description" content="ATPEscrime" />
            <link rel="icon" href="/logo.png" />
        </Head>
    );
};

export default TabName;
