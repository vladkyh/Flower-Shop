import PrivacyPolicy from 'pages/PrivacyPolicy'
import PaymentTerms from 'pages/PaymentTerms'
import TermsOfReturn from 'pages/TermsOfReturn'
import Home from 'pages/Home'
const routesConfigFooter = [
    {
        title:'Главная',
        path: '/',
        element: <Home/>
    },
    {
        title:'Политика конфиденциальности',
        path: '/PrivacyPolicy',
        element: <PrivacyPolicy/>
      },
      {
        title:'Условия оплаты',
        path: '/PaymentTerms',
        element: <PaymentTerms/>
      },
      {
        title:'Условия возрата товара',
        path: '/TermsOfReturn',
        element: <TermsOfReturn/>
      },
]
export default routesConfigFooter