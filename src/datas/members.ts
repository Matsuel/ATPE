interface MembreProps {
    picture: any;
    name: string;
    roles: string[];
}

const Membres : MembreProps[] = [
    {
        picture: require('@/assets/olivier.jpg'),
        name: "Olivier Serwar",
        roles: [
            "Maître d'armes depuis 25 ans.",
            "Créateur de la méthodologie de reconstruction par l'escrime.",
            "Maître praticien PNL."
        ]
    },
    {
        picture: require('@/assets/philippe.jpg'),
        name: "Philippe Pautrat",
        roles: [
            "Maître d'armes depuis 25 ans.",
            "Référent National des ateliers thérapeutiques d'escrime.",
            "Référent violence harcèlement FFE."
        ]
    },
    {
        picture: require('@/assets/christelle.jpg'),
        name: "Christelle Navarro",
        roles: [
            "Psycho-somato-thérapeute. Educatrice de santé Naturopathe.",
            "Formée en psychogénéalogie, en psychologie neurocognitive & en intégration neuro émotionnelle."
        ]
    },
    {
        picture: require('@/assets/martin.jpg'),
        name: "Martin Vanderkam",
        roles: [
            "Kinésithérapeute Ostéopathe",
            "Réfléxothérapie vertébrale & périphérique Miromathé R "
        ]
    },
    {
        picture: require('@/assets/dominique.png'),
        name: "Dominique Coutrot",
        roles: [
            "Président de l'association ATPE Active Ton Potentiel par l'Escrime.",
            "Consultant en entreprise",
            "Management - Organisation ",
            "Escrimeur depuis 1972"
        ]
    }
]

export default Membres;