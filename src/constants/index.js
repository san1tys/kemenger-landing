import { facebook, instagram, support, experience, twitter, method, phone, location, envelope } from "../assets/icons";
import { customer1, customer2, customer3, customer4, customer5 } from '../assets/videos'

export const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#about-us", label: "О тренинге" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#reviews", label: "Отзывы" },
];

export const shoes = [
    {
        thumbnail: '',
        bigShoe: '',
    },
    {
        thumbnail: '',
        bigShoe: '',
    },
    {
        thumbnail: '',
        bigShoe: '',
    },
];

export const statistics = [
    { value: '1 год', label: 'Успешной работы' },
    { value: '400+', label: 'Участников тренинга' },
    { value: '4 дня', label: 'Трансформации и роста' },
];
export const products = [
    {
        imgURL: '',
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: "",
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: '',
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: '',
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: method,
        label: "Проверенные методики",
        subtext: "Только практические инструменты, которые доказали свою эффективность."
    },
    {
        imgURL: experience,
        label: "Опыт и качество",
        subtext: "Тренеры с многолетним опытом и уникальными авторскими методиками."
    },
    {
        imgURL: support,
        label: "Поддержка и рост",
        subtext: "Команда единомышленников и атмосфера, где ты сможешь раскрыть свой потенциал."
    },
];

export const reviews = [
    {
        videoURL: customer1,
        customerName: 'Жанар',
        feedback: "Кеменгер дал состояние счастья и драйва, улучшил отношения с близкими и подарил вдохновляющее окружение для роста."
    },
    {
        videoURL: customer2,
        customerName: 'Александр',
        feedback: "Кеменгер — это комьюнити, где каждый идет к своим целям в энергичной и вдохновляющей атмосфере."
    },
    {
        videoURL: customer3,
        customerName: 'Ерасыл',
        feedback: "Тренинг помогает ломать старые установки, трансформировать себя и становиться лучшей версией."
    },
    {
        videoURL: customer4,
        customerName: 'Зауре',
        feedback: "Тренинг дал драйв, новые знакомства и открытия. После него начали сбываться мечты, цели и открылись возможности."
    },
    {
        videoURL: customer5,
        customerName: 'Зарина',
        feedback: "Кеменгер — это семья, изобилие сердца и огромная отдача. Здесь рождаются горящие глаза и открытые души."
    }
];


export const footerLinks = [
    {
        title: "Свяжитесь с нами",
        links: [
            { src: location, name: "Sauran 7", link: "" },
            { src: phone, name: "+9 255 4862354", link: "" },
            { src: envelope, name: "support@company.com", link: "" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "" },
    { src: twitter, alt: "twitter logo", link: "" },
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/" },
];
