import '@/styles/globals.css'
import { ContextProvider } from '@/Context/Context'
import Nav from '@/Component/Nav/Nav'


export default function App({ Component, pageProps }) {

 


  return (
    <ContextProvider>
      <div>
      <Nav />
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  )
}
