import { Inter } from "next/font/google";
import "./globals.scss";
import Provider from './StoreProvider';
// import { Providers } from '../components/Providers';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import UserForm from "@/components/User/UserForm";
// import Head from 'next/head'
// import LStorage from '../utils/Storage'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  charset: "utf-8", 
  title: "Happy Stuff",
  description: "E-commerce. Clothes for an inspiration",
  applicationName: "Happy Stuff",
  referrer: 'origin-when-cross-origin',
  keywords: ['Clothes', 'Clothing', 'Men\'s clothing', 'Women\'s clothing'],
  authors: [{ name: 'RM' }],  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://happy-stuff.vercel.app'), //заменить
  alternates: {
    canonical: '/',
    // languages: {
      // 'en-US': '/en-US',
      // 'de-DE': '/de-DE',
    // },
  },
  openGraph: {
    title: 'Happy Stuff',
    description: 'E-commerce. Clothes for an inspiration',
    url: 'https://happy-stuff.vercel.app', 
    siteName: 'Happy Stuff',
    images: [
      
      {
        url: 'https://happy-stuff.vercel.app/images/og-image.webp', // Must be an absolute URL //заменить
        width: 1200,
        height: 630,
        alt: 'A man and a woman are on a beach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    // nocache: false,
    noarchive: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    //   'max-video-preview': -1,
    //   'max-image-preview': 'large',
    //   'max-snippet': -1,
    },
  },
  // icons:

  //     [
  //       {
  //         // rel: "icon",
  //       url:'/icon.ico?v=1',
  //       sizes: 'any',
  //       type: 'image/x-icon'
  //     },
  //     {
  //       // rel: "icon",
  //       url:'/iconfav.svg',       
  //       type: 'image/svg+xml'
  //     },
  //     {
  //       url:'/apple-icon.png?v=4',       
  //       type: 'image/png'
  //     }
  //   ]
    // ,
    // apple: ['/apple-touch-icon.png?v=4'],    

  // manifest: '/site.webmanifest'  //Должна быть абсолютная ссылка?
};


// const userState = useSelector(state => state.user)
// console.log(userState)

export default function RootLayout({ children }) {
  return (
    <html lang="en">   
      {/* <Head>
        <link rel="icon" href="/public/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/public/icon.svg" type="image/svg+xml" /> 
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />    
        <link rel="manifest" href="/public/site.webmanifest" />   
      </Head>   */}
      <body className={inter.className}> 
        {/* <Providers> */}
          <Provider>
            {/* <LStorage> */}
            <div className="wrapper">
              <Header />
              
              <div className='container'> 
                <div className="holder">
                  <Sidebar />
                  <main className='main'>   
                      <UserForm />
                        {children}  
                  </main>
                  </div>              
              </div>

              <Footer />
            </div>
            {/* </LStorage> */}
          </Provider>
        {/* </Providers>     */}
      </body>
    </html>
  );
}
