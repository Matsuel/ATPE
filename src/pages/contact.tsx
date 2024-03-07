import React from 'react';
import NavBar from '@/Components/Navbar';
import styles from '@/styles/Contact.module.scss';
import Image from 'next/image';
import Mail from '@/assets/mail.svg';
import Footer from '@/Components/Footer';
import ContactForm from '@/Components/ContactForm/ContactForm';
import TabName from '@/Components/TabName/TabName';

interface ContactProps {

}

const Contact = ({ }: ContactProps) => {
    return (
        <div className={styles.Contact_container}>
            <TabName name="Contact" />
            <NavBar />

            <div className={styles.ContactImage}>
                <h1 className={styles.ContactTitle}>Rencontrons-nous</h1>
            </div>



            <div className={styles.ContactContent}>
                <h2 className={styles.ContactSubTitle}>Contactez-nous</h2>
                <ContactForm />
                
            </div>

            <Footer />



        </div>
    );
};

export default Contact;
