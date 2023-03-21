import { Roboto } from "next/font/google";
import variables from '../styles/global.module.scss'
import '../styles/global.scss'
const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className} style={{backgroundColor: variables.primaryBg}}>
      <Component {...pageProps} />
    </main>
  );
}
