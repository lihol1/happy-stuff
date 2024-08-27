// &#39;use client&#39;
import styles from "@/styles/Terms.module.scss";
import { GoDot } from "react-icons/go";

const page = () => {
    return (<>
        <section className={styles.terms}>
            <h2 className={styles.title}>Terms And Conditions</h2>
            <h4 className={styles.subtitle}>How to purchase</h4>
            <div className={styles.text}>
                <ul className={`${styles.list} ${styles.marks}`} id="list">
                    <li><GoDot className={styles.dot}/><span>Choose a product.</span></li>
                    <li><GoDot className={styles.dot}/><span>Research the specification and features of product with the help of pictures.</span></li>
                    <li><GoDot className={styles.dot}/><span>Select the utem to be purchased.</span></li>
                    <li><GoDot className={styles.dot}/><span>Add the items to cart and buy them whenever it is needed.</span></li>
                    <li><GoDot className={styles.dot}/><span>After the completion of shopping, one can check-out.</span></li>                    
                </ul>
            </div>
            <h4 className={styles.subtitle}>Ways to pay</h4>
            <div className={styles.text}>In most categories, credit cards, debit cards, Apple Pay, Google Pay, Venmo and PayPal are accepted. You&#39;ll find the payment methods accepted by going to the Shipping and Payments section of the listing.</div>
            <h4 className={styles.subtitle}>Returning an unwanted item?</h4>
            <div className={styles.text}>
                We get it, sometimes something just doesn&#39;t fit you amd you want your money back. Don&#39;t worry, as long as as item is still in its original condition, we accept returns.
            </div>
            <h4 className={styles.subtitle}>Concerning prices</h4>
            <div className={styles.text}>Prices and delivery costs are liable to change at any time, but changes will not affect orders in respect of which we have already sent you a confirmation.</div>

            <h4 className={styles.subtitle}>Product delivery</h4>
            <div className={styles.text} >Once a payment has been accepted, the goods or services can be delivered in the following ways.<br/>Package delivery: The product is shipped to a customer-designated address. Retail package delivery is typically done by the public postal system or a retail courier such as FedEx, UPS, DHL, or TNT. Drop shipping: The order is passed to the manufacturer or third-party distributor, who then ships the item directly to the consumer, bypassing the retailer&#39;s physical location to save time, money, and space. In-store pick-up: The customer selects a local store using a locator software and picks up the delivered product at the selected location. This is the method often used in the bricks and clicks business model.</div>

        </section>
    
</>);
    
};

export default page;