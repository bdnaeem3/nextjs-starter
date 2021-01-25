import Head from 'next/head'
import { Provider } from 'react-redux';
import PublicTemplate from '../components/template/PublicTemplate';
import store from '../redux/store';
import '../assets/scss/style.scss';

const MyApp = ({Component, pageProps}) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Culturize</title>
      </Head>
      <PublicTemplate>
        <Component {...pageProps} />
      </PublicTemplate>
    </Provider>
  )
}

export default MyApp
