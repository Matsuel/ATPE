import React from 'react';
import NavBar from '@/Components/Navbar';
import styles from '@/styles/Contact.module.scss';
import Footer from '@/Components/Footer';
import ContactForm from '@/Components/ContactForm';
import TabName from '@/Components/TabName';
import TopPic from '@/Components/TopPic';
import ImgEscrime3 from '@/assets/imgEscrime3.png';
import Subtitle from '@/Components/Subtitle/Subtitle';
import { Toaster } from 'sonner';

interface ContactProps {
    data: any
}

const Contact = ({ data }: ContactProps) => {
    return (
        <div className={styles.Contact_container}>
            <Toaster position="bottom-right" />
            <TabName name="Contact" />
            <NavBar />

            <TopPic image={ImgEscrime3} text="Rencontrons-nous" />

            <div className={styles.ContactContent}>
                <Subtitle text="Contactez-nous" />
                <ContactForm data={data} />
            </div>

            <Footer />
        </div>
    );
};

export default Contact;

export async function getServerSideProps(context: any) {

    return {
        props: {
            data: {
                template_id: process.env.TEMPLATE_ID,
                service_id: process.env.SERVICE_ID,
                key: process.env.KEY
            }
        }
    }

}