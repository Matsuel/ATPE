import React from 'react';
import { faTwitter, faFacebook, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import MailSvg from '@/assets/mail.svg';
import Image from 'next/image';

interface FooterProps {

}

interface Social {
    name: string;
    link: string;
    icon: IconDefinition;
    color?: string;
}

interface Person {
    name: string;
    phone?: string;
}

const Footer = ({ }: FooterProps) => {

    const datas: Social[] = [
        {
            name: "Twitter",
            link: "https://twitter.com/",
            icon: faTwitter,
            color: "#00acee"
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/",
            icon: faFacebook,
            color: "#4267B2"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/",
            icon: faLinkedin,
            color: "#0e76a8"
        }
    ]

    const contacts: Person[] = [
        {
            name: "Philippe Pautrat",
            phone: "06 28 75 07 13"
        },
        {
            name: "Olivier Serwar",
            phone: "06 60 38 01 45"
        },
        {
            name: "Christelle Navarro",
            phone: "06 03 26 85 97"
        },
        {
            name: "Esther Cherpreau",
            phone: "06 79 25 51 49"
        }
    ]

    const email: string = "atpe75@gmail.com"

    return (
        <div className={styles.Footer_container}>

            <div className={styles.Footer_Links}>
                {
                    datas.map((item: Social, index: number) => {
                        return (
                            <a key={index} href={item.link} className={styles.Footer_Link} style={{ color: item.color }}>
                                <FontAwesomeIcon icon={item.icon} className={styles.Footer_Icon} />
                            </a>
                        )
                    })
                }
            </div>

            <div className={styles.Footer_Contacts}>

                <h2 className={styles.Footer_Contacts_Title}>Contactez-nous</h2>

                <div className={styles.FooterSeparator}></div>

                <div className={styles.Footer_Contacts_Email}>
                    <a href={`mailto:${email}`}><Image src={MailSvg} alt="mail" /></a>
                    <p className={styles.Footer_ContactEmail}>{email}</p>
                </div>

                <div className={styles.Footer_Contacts_Persons}>

                    {
                        contacts.map((item: Person, index: number) => {
                            return (
                                <div key={index} className={styles.Footer_Contacts_Person}>
                                    <h3 className={styles.Footer_ContactName}>{item.name}</h3>
                                    <a href={`tel:${item.phone}`}>
                                        <FontAwesomeIcon icon={faPhone} className={styles.Footer_ContactIcon} />
                                    </a>
                                    <p className={styles.Footer_ContactPhone}>{item.phone}</p>
                                </div>
                            )
                        })
                    }

                </div>




            </div>

        </div>
    );
};

export default Footer;
