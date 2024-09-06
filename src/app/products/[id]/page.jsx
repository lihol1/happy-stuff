'use client'
import { useEffect } from 'react';
import { ROUTES } from '@/utils/routes';
import { useGetProductQuery } from '@/store/api/apiSlice';
import Product from '@/components/Products/Product';
import Products from '@/components/Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getRelatedProducts } from '@/store/products/productsSlice';

export default function ProductPage({ params }) {
    const router = useRouter();  
    const id = params.id
    
    const { data, isFetching, isLoading, isSuccess  } = useGetProductQuery({ id });
    const dispatch = useDispatch();
    const { list, related } = useSelector(({  products }) => products)
    
    useEffect(()=>{
        if(!isFetching && !isLoading && !isSuccess) {
            router.push(ROUTES.HOME);
        }
    }, [isFetching, isLoading, isSuccess, router])    

    useEffect(()=>{
        if(!data || !list.length) return; 
        dispatch(getRelatedProducts(data.category.id))        
    }, [data, dispatch, list.length])

    return (    
<>
    {isLoading ? <div className="preloader">Loading...</div> : data ? (
    <>
        <Product {...data}/>
        <Products products={related} amount={5} title="Related products" /> 
    </>
    )
    : <div>Not found</div>}
</>

)};

