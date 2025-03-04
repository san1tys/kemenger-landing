import { facebook, instagram, support, experience, whatsapp, method, phone, location, envelope } from "../assets/icons";
import { customer1, customer2, customer3, customer4, customer5 } from '../assets/videos'
import { poster1, poster2, poster3, poster4, poster5, mas1, mas2, mas3, mas4 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#about-us", label: "О тренинге" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#masters", label: "Наши эксперты" },
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

export const masters = [
    {
        imgURL: mas1,
        label: "Тимур Сагинбаев",
        subtext: "Сооснователь трансформационных проектов и бизнес-тренер",
        backContent: "Сооснователь KEMENGER и организатор QAHARMAN ORDA в Алматы и Астане. Тренер курса 'QAHARMAN- АТАЛЫК', видеопродакшн-эксперт. Провел тренинги для более 100 человек. Бизнес-тренер Almaty Management University, игропрактик трансформационной психологии.",
        experience: "9 лет опыта в тренингах и трансформациях"
    },
    {
        imgURL: mas2,
        label: "Олег Карим Братущенко",
        subtext: "Организатор и координатор лидерских программ KEMENGER",
        backContent: "Организатор проекта KEMENGER в городах Алматы и Астана. Координатор лидерских программ KEMENGER. Психолог-практик, наставник, специалист в трансформациях с 2016 года. Профессиональный спортсмен, чемпион Казахстана по спортивному рафтингу, призер чемпионата Азии.",
        experience: "7 лет опыта трансформаций"
    },
    {
        imgURL: mas3,
        label: "Эдгар Новопашин",
        subtext: "Трансформационный тренер",
        backContent: "Трансформационный тренер и практический психолог с 25-летним опытом. Входит в топ-5 трансформационных тренеров в СНГ. Автор трансформационных игр и практик, наставник тренеров. Основатель Федерации кикбоксинга РФ. Байкер, путешественник и автор книги 'Байки байкера'.",
        experience: "25 лет опыта трансформационной деятельности"
    },
    {
        imgURL: mas4,
        label: "Айбек Акылбаев",
        subtext: "Мотивационный спикер, оратор",
        backContent: "Основатель мужского тренинга #1 в Казахстане QAHARMAN ORDA, тренер QAHARMAN ORDA. Сооснователь трансформационного тренинга KEMENGER. Основатель и тренер ораторского центра Orator.kz. Спортсмен: IRONMAN 70.3, марафонец, полумарафонец. Любитель активного образа жизни, увлекается горами.",
        experience: "Опыт в проведении тренингов и ораторском мастерстве"
    }

];

export const reviews = [
    {
        posterURL: poster1,
        videoURL: customer1,
        customerName: 'Жанар',
        feedback: "Кеменгер дал состояние счастья и драйва, улучшил отношения с близкими и подарил вдохновляющее окружение для роста."
    },
    {
        posterURL: poster2,
        videoURL: customer2,
        customerName: 'Багдат',
        feedback: "Кеменгер — это комьюнити, где каждый идет к своим целям в энергичной и вдохновляющей атмосфере."
    },
    {
        posterURL: poster3,
        videoURL: customer3,
        customerName: 'Ерасыл',
        feedback: "Тренинг помогает ломать старые установки, трансформировать себя и становиться лучшей версией."
    },
    {
        posterURL: poster4,
        videoURL: customer4,
        customerName: 'Зауре',
        feedback: "Тренинг дал драйв, новые знакомства и открытия. После него начали сбываться мечты, цели и открылись возможности."
    },
    {
        posterURL: poster5,
        videoURL: customer5,
        customerName: 'Зарина',
        feedback: "Кеменгер — это семья, изобилие сердца и огромная отдача. Здесь рождаются горящие глаза и открытые души."
    }
];


export const footerLinks = [
    {
        title: "Свяжитесь с нами",
        links: [
            { src: phone, name: "+9 255 4862354", link: "" },
            { src: envelope, name: "support@company.com", link: "" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "" },
    { src: whatsapp, alt: "whatsapp logo", link: "" },
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/" },
];
