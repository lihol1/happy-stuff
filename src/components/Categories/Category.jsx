'use client'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/api/apiSlice";
import styles from "../../styles/Category.module.scss";
import Products from "../Products/Products";
 
const Category = ({ params: {id}, catLength}) => {
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 200000,
  };

  const defaultParams = {
    categoryId: id,
    limit: 6,
    page: 1,
    offset: 0,
    ...defaultValues,
  };
  
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const [isEnd, setIsEnd] = useState(false);//конец списка для кнопки "See more"

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);//при изменении параметров происходит запрос с новыми данными, отображение новых товаров

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setItems([]);
    setIsEnd(false);
    setParams({ ...defaultParams, categoryId: id });
   
  }, [id]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setIsEnd(true);
    //Удираем кнопку See more, когда товары заканчиваются. Именно здесь, когда меняется data и происходит перерисовка
    ((params.page * (params.limit))) >= catLength && setIsEnd(true); 
    
    setItems((_items) => [..._items, ...data]);//значит - берем предыдущие items и устанавливаем новые 
  }, [data, isLoading]);

  //чтобы вывести название категории
  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === id * 1);//id строка, переводим ее в число, умножая на 1
    
    setCat(category);
  }, [list, id]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([]);
    setIsEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setIsEnd(false);
  };

  return (
    <>
    <section className={styles.category}>
      <h2 className={styles.title}>{cat?.name}</h2>

      <form className={styles.filters} onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
            value={values.title}
          />
        </div>
        <div className={styles.prices}>
          <div className={styles.filter}>
            <input
              type="number"
              name="price_min"
              onChange={handleChange}
              placeholder="Price from"
              value={values.price_min}
            />
            <span>Price from</span>
          </div>
          <div className={styles.filter}>
            <input
              type="number"
              name="price_max"
              onChange={handleChange}
              placeholder="Price to"
              value={values.price_max}
            />
            <span>Price to</span>
          </div>
        </div>
        <button type="submit" hidden />
      </form>

      {isLoading ? (
        <div className="preloader"></div>
      ) : !isSuccess || !items.length ? (
        <div className={styles.back}>
          <span>No results</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}          
        />
      )}

      {!isEnd && (
        <div className={styles.more}>
          <button            
            onClick={() =>{setParams({ ...params, page: params.page + 1 });            
            }}>
            See more
          </button>
        </div>
      )}
    </section>
    </>
  );
};

export default Category;