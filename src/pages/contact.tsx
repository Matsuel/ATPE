import React from 'react';
import NavBar from '@/Components/Navbar';
import styles from '@/styles/Contact.module.scss';
import Image from 'next/image';
import Img3 from '@/assets/imgEscrime3.png';

interface ContactProps {

}

const Contact = ({ }: ContactProps) => {
    return (
        <div className={styles.Contact_container}>
            <NavBar />

            <div className={styles.ContactImage}>
                <h1 className={styles.ContactTitle}>Rencontrons-nous</h1>
            </div>



            <div className={styles.ContactContent}>
                <h2 className={styles.ContactSubTitle}>Contactez-nous</h2>
                <p className={styles.ContactText}>En remplissant le formulaire ci-dessous.</p>
                <div className={styles.ContactForm}>
                    <input type="text" placeholder="Nom" />
                    <input type="text" placeholder="Prénom" />
                    <input type="number" placeholder="Téléphone" maxLength={10} />
                    <input type="text" placeholder="Email" maxLength={150} />
                    <textarea placeholder="Votre message"></textarea>
                    <button>Envoyer</button>
                </div>
            </div>



        </div>
    );
};

export default Contact;
