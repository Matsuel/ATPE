import React from 'react';
import styles from './ContactForm.module.scss';
import Image from 'next/image';
import Mail from '@/assets/mail.svg';

const ContactForm = () => {
    return (
        <div className={styles.ContactForm}>
            <div className={styles.ContactFormInfo}>
                <p className={styles.ContactText}>
                    Remplissez le formulaire afin d&apos;être contacté.
                </p>
                <p className={styles.ContactText}>
                    Ou bien envoyez nous directement un mail en cliquant sur l&apos;icone ci-dessous.
                </p>
                <a href="mailto:atpe75@gmail.com" className={styles.ContactMail}>
                    <Image src={Mail} alt="Mail" width={35} height={35} />
                </a>
                <p className={styles.ContactMail} onClick={() => { navigator.clipboard.writeText("atpe75@gmail.com") }}>
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
    );
};

export default ContactForm;
