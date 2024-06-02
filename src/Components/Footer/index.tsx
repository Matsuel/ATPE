import React from 'react';
import { faTwitter, faFacebook, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import MailSvg from '@/assets/mail.svg';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {

}

interface Social {
    name: string;
    link: string;
    icon: IconDefinition;
    color: string;
}

interface Person {
    name: string;
    phone: string;
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
    ]

    const email: string = "atpe75@gmail.com"

    return (
        <div className={styles.Footer_container}>

            <div className={styles.Footer_Links}>
                {
                    datas.map((item: Social, index: number) => {
                        return (
                            <Link href={item.link} key={index} passHref className={styles.Footer_Link}>
                                <FontAwesomeIcon icon={item.icon} className={styles.Footer_Icon} style={{ color: item.color }} />
                            </Link>
                        )
                    })
                }
            </div>

            <div className={styles.Footer_Contacts}>

                <h2 className={styles.Footer_Contacts_Title}>Contactez-nous</h2>

                <div className={styles.FooterSeparator}></div>

                <div className={styles.Footer_Contacts_Email}>
                    <Link href={`mailto:${email}`} passHref>
                        <Image src={MailSvg} alt="mail" />
                    </Link>
                    <p className={styles.Footer_ContactEmail} onClick={() => { navigator.clipboard.writeText(email) }}>{email}</p>
                </div>

                <div className={styles.Footer_Contacts_Persons}>

                    {
                        contacts.map((item: Person, index: number) => {
                            return (
                                <div key={index} className={styles.Footer_Contacts_Person}>
                                    <h3 className={styles.Footer_ContactName}>{item.name}</h3>
                                    <Link href={`tel:${item.phone}`} passHref>
                                        <FontAwesomeIcon icon={faPhone} className={styles.Footer_ContactIcon} />
                                    </Link>
                                    <p className={styles.Footer_ContactPhone} onClick={() => { navigator.clipboard.writeText(item.phone) }}>
                                        {item.phone}
                                    </p>
                                </div>
                            )
                        })
                    }

                </div>

                <div className={styles.FooterSeparator}></div>

                <div className={styles.FooterLinks}>
                    <Link href="/mentionslegales" passHref className={styles.FooterLink}>Mentions légales</Link>
                    <Link href="/apropos" passHref className={styles.FooterLink}>A propos de nous</Link>
                </div>


            </div>

        </div>
    );
};

export default Footer;
