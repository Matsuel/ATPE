import React from 'react';
import NavBar from '@/Components/Navbar';
import styles from '@/styles/Contact.module.scss';
import Image from 'next/image';
import Mail from '@/assets/mail.svg';
import Footer from '@/Components/Footer';

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
                <div className={styles.ContactForm}>
                    <div className={styles.ContactFormInfo}>
                        <p className={styles.ContactText}>
                            Remplissez le formulaire afin d'être contacté.
                        </p>
                        <p className={styles.ContactText}>
                            Ou bien envoyez nous directement un mail en cliquant sur l'icone ci-dessous.
                        </p>
                        <a href="mailto:atpe75@gmail.com" className={styles.ContactMail}>
                            <Image src={Mail} alt="Mail" width={35} height={35} />
                        </a>
                        <p className={styles.ContactMail} onClick={() => { navigator.clipboard.writeText("atpe75@gmail.com")}}>
                            atpe75@gmail.com
                        </p>
                    </div>
                    <div className={styles.ContactFormNames}>
                        <input type="text" placeholder="Nom" className={styles.ContactFormInput} maxLength={50} />
                        <input type="text" placeholder="Prénom" className={styles.ContactFormInput} maxLength={50} />
                    </div>
                    <div className={styles.ContactFormNames}>
                        <input type="email" placeholder="Email" className={styles.ContactFormInput} maxLength={150} />
                        <input type="tel" placeholder="Téléphone" className={styles.ContactFormInput} />
                    </div>
                    <textarea placeholder="Votre message" className={styles.ContactFormInputArea}></textarea>
                    <button className={styles.ContactFormSendBtn}>Transmettre mes informations</button>
                </div>
            </div>

            <Footer />



        </div>
    );
};

export default Contact;
