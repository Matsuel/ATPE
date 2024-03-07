import React from 'react';

import styles from '@/styles/ML.module.scss';
import NavBar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import TabName from '@/Components/TabName';

interface MLProps {

}

interface Mention {
    content: string;
}

const mentions: Mention[] = [
    {
        content: "Droits d’auteur & Protection"
    },
    {
        content: "Le site ATPEscrime est le site de l’association, ATPescrime, "
    },
    {
        content: "Éditeur : ATPEscrime"
    },
    {
        content: "Directeur de publication et responsable de la rédaction : Atpescrime"
    },
    {
        content: "Photographies: images libres de droit"
    },
    {
        content: "Hébergement : Le site est hébergé par la société Hover, 96 Mowat Ave, Toronto, ON M6K Email : help@hover.com et joignable par téléphone au tel: +18667316556"
    },
    {
        content: "Droits d'auteur et de reproduction"
    },
    {
        content: "L'ensemble de ce site relève des législations française et internationale sur le droit d'auteur et la propriété intellectuelle (article L.122-5 du code de la propriété intellectuelle). Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables, et les représentations iconographiques et photographiques."
    },
    {
        content: "Conformément aux lois régissant les droits de propriété littéraire et artistique ou les droits voisins, la reproduction et la représentation de tout ou partie des éléments composant le site sur un support quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication."
    },
    {
        content: "La reproduction, par n'importe quel moyen et à n'importe quelle fin, des documents, des graphismes, photographies et ressources multimédias est soumise à l'accord préalable de leurs auteurs."
    },
    {
        content: "En cas de doute sur l'identité des détenteurs, une demande d'information peut être adressée via le formulaire de contact."
    },
    {
        content: "Toute copie partielle ou totale de ce site est soumise à autorisation."
    },
    {
        content: "Liens vers d'autres sites : des liens vers d'autres sites, privés, officiels, français ou étrangers, sont proposés. Ils n'engagent en aucun cas ATPEscrime, quant à leur contenu et ne visent qu'à permettre à l'internaute d'accéder plus facilement à d'autres ressources sur le sujet consulté."
    },
    {
        content: "La mise en place de liens hypertextes pointant vers le site est autorisée, sous réserve : de ne pas utiliser la technique du lien profond, c'est-à-dire que les pages du site ne doivent pas être imbriquées à l'intérieur des pages d'un autre site, mais visibles par l'ouverture d'une fenêtre indépendante. Que la source qui pointera grâce à un lien hypertexte directement sur le contenu visé soit précisée. Que les informations utilisées ne le soient qu'à des fins personnelles, éducatives, associatives ou professionnelles, toute utilisation à des fins commerciales ou publicitaires étant interdite."
    },
    {
        content: "Cette autorisation ne s'applique en aucun cas aux sites internet diffusant des informations à caractère raciste, pornographique, xénophobe, polémique, ou pouvant, d'une façon générale, porter atteinte à la sensibilité du plus grand nombre."
    },
    {
        content: "Protection des données personnelles"
    },
    {
        content: "Aucune information personnelle n'est collectée à votre insu. Aucune information personnelle n'est cédée à des tiers."
    },
    {
        content: "Données statistiques : afin de mieux connaître les centres d'intérêt des visiteurs du site et en vue de son amélioration, nous pouvons être amenés à mesurer le nombre de visites, de pages vues, ainsi que l'activité des visiteurs sur le site, et leur fréquence de retour. A cet effet, la technologie des cookies peut être utilisée. Il vous est possible de refuser ces 'cookies' ou de les supprimer sans que cela ait une quelconque influence sur votre accès aux pages du site. Pour vous opposer à l'enregistrement de cookies ou être prévenu avant d'accepter les cookies, nous vous recommandons la lecture de la rubrique d'aide de votre navigateur qui vous précisera la marche à suivre."
    },
    {
        content: "Par ailleurs, nous procédons à l'analyse de la fréquentation du site à partir de l'exploitation des données de connexion. Les adresses IP relatives aux consultations effectuées ne sont pas conservées au-delà de 12 mois."
    },
    {
        content: "Conditions d'utilisation du site : l'utilisateur de ce site reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser ce site. Il est invité à respecter les bons usages de l'internet, en particulier, dans l'utilisation des adresses électroniques qui y figurent. Il est rappelé que l'article 26 de la loi du 6 janvier 1978 « Informatique et libertés » prohibe toute collecte massive de ces adresses, à l'insu de leurs détenteurs, pour procéder à l'envoi massif de messages non désirés, quel que soit l'objet des messages diffusés. En application de l'article 16 de cette loi, sont également interdites la constitution de systèmes d'envoi automatisé de messages, la création de bases de données réunissant les adresses électroniques et la mise en place de traitements automatisés d'informations nominatives le concernant qui n'auraient pas fait l'objet d'une déclaration préalable à la CNIL."
    },
    {
        content: "Cookies: politique relative"
    },
    {
        content: "Notre politique propre aux « cookies » est également applicable aux autres technologies similaires telles que les pixels espions, les balises web, et les GIF invisibles couverts par la Directive de l’Union Européenne portant sur la protection de la vie privée dans le secteur des communications électroniques."
    },
    {
        content: "Les cookies sont de petits fichiers de données que votre navigateur loge sur votre ordinateur ou votre appareil. Les cookies autorisent le serveur du site web à transférer des données à un ordinateur ou à un appareil à des fins d’archivages ou pour d’autres buts. Les cookies peuvent aider un site web à fournir une expérience plus facile et plus conviviale. Les cookies en eux mêmes ne peuvent pas recueillir d’information stockée sur votre ordinateur ou dans vos fichiers."
    },
    {
        content: "Pour en savoir plus sur les cookies, veuillez consulter http://www.allaboutcookies.org/fr"
    },
    {
        content: "Il existe deux sortes de cookies: « session » et « persistant ». Les cookies de session sont des cookies temporaires qui durent seulement jusqu’à ce que vous fermiez le navigateur. Les cookies persistants restent sur votre disque dur ou votre appareil jusqu’à ce que vous les effaciez ou qu’ils expirent. Les cookies de session et les cookies persistants peuvent tous les deux être utilisés dans le cadre du site. Ces cookies sont utilisés pour des raisons de sécurité, pour faciliter la navigation, pour afficher des informations de manière plus efficace, et pour mieux vous assister grâce à des informations plus personnalisées. Nous pouvons également utiliser les cookies pour réunir des informations statistiques concernant l’utilisation du site afin de continuer à améliorer le design et la fonctionnalité, afin de comprendre comment les visiteurs utilisent le site, et pour nous aider à résoudre des questions relatives au site."
    },
    {
        content: "Les cookies sur ce site peuvent être regroupés selon les types suivants: les cookies essentiels sont absolument nécessaires afin que le site soit en mesure d’effectuer ses fonctions de bases. Ces cookies vous permettent de naviguer sur le site et d’utiliser les fonctions que vous avez demandées, telles qu’accéder aux zones protégées du site. Sans ces cookies, nous ne pouvons pas fournir les services qui permettent à ce site de fonctionner."
    },
    {
        content: "Les cookies de performance recueillent des informations anonymes sur la façon dont les visiteurs utilisent le site. Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site en nous fournissant des informations sur les zones visitées, le temps passé sur le site, et sur tout problème rencontré, tel que des messages d’erreurs. Ces informations nous aident à améliorer la performance du site."
    },
    {
        content: "Les cookies de fonctionnalité améliorent la facilité de navigation sur le site. Ces cookies peuvent, par exemple, retenir des informations telles que votre nom d’utilisateur, vos préférences linguistiques ou géographiques. Ces cookies peuvent servir à vous fournir des services que vous avez demandés tels que regarder une vidéo, déposer des commentaires sur un blog, ou interagir avec des services de tierces parties comme les fonctionnalités de réseaux sociaux. Retenir vos choix aide le site à fournir des fonctions améliorées et plus personnelles."
    },
    {
        content: "En plus de l'utilisation de cookies faite sur notre site, nous autorisons certains tiers à installer des cookies et à y accéder sur votre ordinateur. L'utilisation faite des cookies par ces sociétés est soumise à leurs propres politiques de confidentialité, et non à celle du site."
    },
    {
        content: "Si vous ne voulez pas que des informations soient collectées via l'utilisation de cookies, il existe une procédure simple dans la plupart des navigateurs qui vous autorise à refuser l'utilisation de cookies."
    },
    {
        content: "Pour en savoir plus sur la gestion des cookies, veuillez consulter http://www.allaboutcookies.org/manage-cookies/. Il se peut que certaines fonctions de ce site ne répondent pas correctement si vous refusez l'utilisation de cookies"
    },
]

const ML = ({ }: MLProps) => {
    return (
        <div className={styles.ML_container}>
            <TabName name="Mentions légales" />
            <NavBar />

            <div className={styles.ML_Top}>
                <h1 className={styles.ML_Title}>Mentions légales</h1>
            </div>

            <div className={styles.ML_Content}>
                {
                    mentions.map((item: Mention, index: number) => {
                        return (
                            <p key={index} className={styles.ML_Paragraph}>{item.content}</p>
                        )
                    })
                }
                </div>

                <Footer />
        </div>
    );
};

export default ML;
