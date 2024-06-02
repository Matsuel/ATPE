import React from 'react';
import NavBar from '@/Components/Navbar';
import styles from '@/styles/Contact.module.scss';
import Footer from '@/Components/Footer';
import ContactForm from '@/Components/ContactForm';
import TabName from '@/Components/TabName';
import TopPic from '@/Components/TopPic';
import ImgEscrime3 from '@/assets/imgEscrime3.png';
import Subtitle from '@/Components/Subtitle/Subtitle';

interface ContactProps {

}

const Contact = ({ }: ContactProps) => {
    return (
        <div className={styles.Contact_container}>
            <TabName name="Contact" />
            <NavBar />

            <TopPic image={ImgEscrime3} text="Rencontrons-nous" />

            <div className={styles.ContactContent}>
                <Subtitle text="Contactez-nous" />
                <ContactForm />
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
