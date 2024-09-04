import { Inter } from "next/font/google";
import "./globals.scss";
import Provider from './StoreProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import UserForm from "@/components/User/UserForm";
import UpBtn from "@/components/UpBtn/UpBtn";

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
        url: 'https://happy-stuff.vercel.app/images/og-image.webp', // Must be an absolute URL 
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
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">        
      <body className={inter.className}>        
          <Provider>           
            <div className="wrapper">
              <Header />             

              <div className='container'> 
                <div className="holder">
                  <Sidebar />
                  <main className='main'>   
                      <UserForm />
                      {children} 
                      <UpBtn /> 
                  </main>
                  </div>              
              </div>

              <Footer />
            </div>           
          </Provider>
        
      </body>
    </html>
  );
}
