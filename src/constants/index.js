import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, hawan, mundan, naamkaran, annaparan, annivarsary, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marriages' },
    { value: '500+', label: 'Grehpravesh' },
    { value: '25000+', label: 'Hawans' },
];

export const products = [
    {
        imgURL: hawan,
        name: "Hawan",
        tagline: "Purify your home and soul with the sacred power of fire. Schedule your Hawan ceremony today to invite divine blessings and positive energy into your life."
    },
    {
        imgURL: mundan,
        name: "Mundan Sanskaar",
        tagline: "Mark a pivotal moment in your child’s journey, ensuring a life filled with positivity, good health, and divine blessings."
    },
    {
        imgURL: naamkaran,
        name: "Naamkaran Sanskaar",
        tagline: "Celebrate the beginning of your child's journey with a name that carries blessings and meaning. Book your Naamkaran Sanskaar ceremony today to invoke divine protection and prosperity."
    },
    {
        imgURL: annivarsary,
        name: "Annivarsary Hawan",
        tagline: "Mark your anniversary with a sacred Hawan to renew your vows and invite continued blessings. Celebrate your enduring love with a ceremony that brings peace, prosperity, and spiritual harmony."
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Authentic Vedic Rituals",
        subtext: "We adhere to the purity and simplicity of traditional Vedic rituals, ensuring an authentic and spiritually enriching marriage ceremony."
    },
    {
        imgURL: shieldTick,
        label: "Experienced Acharyas",
        subtext: "Our ceremonies are conducted by experienced Acharyas who guide you through each ritual with care, respect, and profound understanding."
    },
    {
        imgURL: support,
        label: "Seamless Legal Process",
        subtext: "We handle all the legal documentation, providing you with a hassle-free experience from the ceremony to official recognition."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Amit Dhaiya',
        rating: 5,
        feedback: "The Acharyas at Arya Samaj Mandir are incredibly knowledgeable and kind. Our Bhoomi Poojan was perfect."
    },
    {
        imgURL: customer2,
        customerName: 'Amit & Priya',
        rating: 5,
        feedback: "Arya Samaj Mandir made our wedding day truly special. The rituals were performed with such dedication and precision. Highly recommended !!!"
    }
];


export const footerLinks = [
    {
        title: "Our Services",
        links: [
            { name: "Arya Samaj Marriage", link: "/" },
            { name: "Naamkaran Sanskaar", link: "/" },
            { name: "Hawan and Pooja Archana", link: "/" },
            { name: "Bhoomipoojan", link: "/" },
            { name: "16 Sanskaar", link: "/" },
            { name: "Annaparan Sanskaar", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Blogs", link: "/" },
            { name: "Privacy policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "a.chandrakant123@gmail.com", link: "mailto:a.chandrakant123@gmail.com" },
            { name: "+9212441177", link: "tel:+9212441177" },
            { name: "South City 1, Gurugram, Haryana"}
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/share/TCoP2Z4i32Jm93HK/?mibextid=qi2Omg" },
    { src: twitter, alt: "youtube logo", link: "https://www.youtube.com/@a.chandrakant8342"},
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/arya_samaj_acharyachandrakant_?igsh=d2FnOWxpb2lsMWtn" },

    
];
