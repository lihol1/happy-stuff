'use client'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/user/userSlice";
import styles from "../../styles/Cart.module.scss";
import { sumBy } from "../../utils/common";
import Products from '@/components/Products/Products';
import Image from 'next/image';
import Link from 'next/link';


const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user); 
  const { products: { list } } = useSelector((state) => state); 
  
  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
    
  };

  return (
    <>
    <section className={styles.cart}>
      <h2 className={styles.title}>Cart</h2>

      {!cart.length ? (
        <div className={styles.empty}>Cart is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={styles.item} key={id}>
                  <Link href={`/products/${id}`} >
                    <div className={styles.holder}>                   
                     
                      <Image className={styles.image}
                        width={100}
                        height={100}
                        alt={title}
                        src={images[0]}
                      />
                    </div>
                  </Link>
                  <Link href={`/products/${id}`}>
                  
                    <div className={styles.info}>
                      <h3 className={styles.name}>{title}</h3>
                      <div className={styles.category}>{category.name}</div>
                    </div>
                  </Link>
                  <div className={styles.price}>{price}$</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref='/sprite.svg#minus'
                        />
                      </svg>
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref='/sprite.svg#plus'
                        />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.total}>{(price * quantity).toFixed(2)}$</div>

                  <div className={styles.close} onClick={() => removeItem(item.id)}>
                    <svg className="icon">
                      <use
                        xlinkHref='/sprite.svg#close'
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <div className={styles.total}>
              TOTAL PRICE:{" "}
              <span>
                {(sumBy(cart.map(({ quantity, price }) =>(quantity * price)))).toFixed(2)}$
               
              </span>
            </div>

            <button className={styles.proceed}>Proceed to checkout</button>
          </div>
          
        </>
      )}
      
    </section>
    <Products products={list} amount={6} title="Trending" />
    </>
  );
};

export default CartPage;