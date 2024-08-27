import Image from 'next/image';
import img from '@/images/404-page.png'

export default function NotFound (){
    return (
        <div className="not-found">
          
            <Image className="notfoundimage"
                width={904}
                height={539}
                alt='not-found page'
                quality={75}
                src={img}
                sizes='(max-width: 992px) 90vw, (max-width: 1230px) 70vw'
            ></Image>
        </div>
    );
};

