'use client'
import React from "react";
import Category from "@/components/Categories/Category";
import { useGetProductsQuery } from '@/store/api/apiSlice';

 
const CategoryPage = ({ params }) => {
  const paramsId = params.id
  //получаем количество товаров в категории, передаем в компонент
  const dataParams = {
    categoryId: paramsId
    }  
  
   const { data=[], isLoading, isSuccess  } = useGetProductsQuery(dataParams);
   const catLength = data.length

   return (
    <>
    
      {isSuccess && <Category params={params} catLength={catLength} />}
    </>
  );
};

export default CategoryPage;