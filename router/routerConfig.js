import Shop from '../pages/Shop'
import Gallery from '../pages/Gallery'
import Contacts from '../pages/Contacts'
import Home from 'pages/Home'
const routesConfig = [
    {
        title:'На главную',
        path: '/',
        element: <Home/>
    },
    {
        title:'Каталог',
        path: '/Shop',
        element: <Shop/>
    },
    {
        title:'Галерея',
        path: '/Gallery',
        element: <Gallery/>
    },
    {
        title:'Контакты',
        path: '/Contacts',
        element: <Contacts/>
    },
]
export default routesConfig