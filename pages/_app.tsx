import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import { Toaster } from "react-hot-toast";
import {persistor, store} from "../redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {SessionProvider} from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
      <SessionProvider session={session}>
      <Provider store={store}>
          <Toaster/>
          <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
          </PersistGate>
      </Provider>
          </SessionProvider>
  )
}

export default MyApp
