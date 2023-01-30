import '../styles/globals.css'
import Layout from 'components/Layout/Layout'
import Communicate from 'components/Communicate'
import {Provider} from 'react-redux';
import { store } from 'store/store';
import Product from 'components/Product';
const MyApp =({ Component, pageProps })=> (
    <Provider store={store}>
      <Layout>
        <Component{...pageProps}/>
        <Communicate/>
        <Product/>
      </Layout>
    </Provider>
)
export default MyApp
