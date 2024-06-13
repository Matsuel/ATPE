import React from 'react';
import styles from './ContactForm.module.scss';
import Image from 'next/image';
import Mail from '@/assets/mail.svg';
import emailjs from '@emailjs/browser'
import { toast } from 'sonner';

interface ContactFormProps {
    data: {
        template_id: string,
        service_id: string,
        key: string
    }
}

const ContactForm = ({data}: ContactFormProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const templateParams = {
            from_name: form.get('name') + ' ' + form.get('firstname'),
            message: form.get('message'),
            email: form.get('email'),
            phone: form.get('phone')
        }

        emailjs.send(data.service_id, data.template_id, templateParams, data.key)
            .then(() => {
                toast.success('Votre message a bien été envoyé !');
            }, () => {
                toast.error('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ultérieurement.');
            });
    }

    return (
        <form className={styles.ContactForm} onSubmit={handleSubmit}>
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
                <input type="text" placeholder="Nom" className={styles.ContactFormInput} maxLength={50} name='name' required />
                <input type="text" placeholder="Prénom" className={styles.ContactFormInput} maxLength={50} name='firstname' required />
            </div>
            <div className={styles.ContactFormNames}>
                <input type="email" placeholder="Email" className={styles.ContactFormInput} maxLength={150} name='email' required />
                <input type="tel" placeholder="Téléphone" className={styles.ContactFormInput} maxLength={10} name='phone' required />
            </div>
            <textarea placeholder="Votre message" name='message' className={styles.ContactFormInputArea} required></textarea>
            <button className={styles.ContactFormSendBtn}>Transmettre mes informations</button>
        </form>
    );
};

export default ContactForm;