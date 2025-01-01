import { faCamera, faGamepad, faHeadphones, faLaptop, faMobile, faTablet, faTv, faWifi } from "@fortawesome/free-solid-svg-icons"

export const navBar = [
    {
        id: 1,
        title: 'მობილურები',
        icon: faMobile,
        route: 'mobilurebi',
        category: 'phone'
    },
    {
        id: 2,
        title: 'სმარტ გაჯეტები',
        icon: faWifi,
        route: 'saatebi',
        category: 'watch',
    },
    {
        id: 3,
        title: 'ჩასადებები',
        icon: faGamepad,
        route: 'phoneCases',
        category: 'phonecase',
    },
    {
        id: 4,
        title: 'ტაბები',
        icon: faTablet,
        route: 'tabebi',
        category: 'saatebi',
    },
    {
        id: 5,
        title: 'ლეპტოპები | IT',
        icon: faLaptop,
        route: 'leptopebi',
        category: '',
    },
    {
        id: 6,
        title: 'აუდიო სისტემა',
        icon: faHeadphones,
        route: 'audioSistema',
        category: 'saatebi',
    },
    {
        id: 7,
        title: 'TV | მონიტორები',
        icon: faTv,
        route: 'monitorebi',
        category: 'saatebi',
    },
    {
        id: 8,
        title: 'ფოტო | ვიდეო',
        icon: faCamera,
        route: 'poto',
        category: 'saatebi',
    }
]