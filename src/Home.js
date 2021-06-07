import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Hello-Charlie/launch/1500x600_Hero-Tall_JPN._CB656396748_.jpg"
                alt=""
            />

            <div className="home__row">
                {/* Product id, title, price, rating, image */}
                <Product
                    id="123456"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41wuoLxtHrL.__AC_SY200_.jpg"
                />

                <Product
                    id="123457"
                    title="TECNO Spark 7 (Spruce Green, 2GB RAM, 32 GB Storage) - 6000mAh Battery|16 MP Dual Camera| 6.52” Dot Notch Display"
                    price={50}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41NeE8iuxtL.__AC_SY200_.jpg"
                />
            </div>   

            <div className="home__row">
                {/* Product id, title, price, rating, image */}
                <Product
                    id="123458"
                    title="Pigeon by Stovekraft Kessel 1.2-Litre Multi-Purpose Kettle (Silver) 600W, Black"
                    price={10}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Y21By5TzL._SL1000_.jpg"
                />

                <Product
                    id="123459"
                    title="DailyObjects Women's Leather Peacocking Flip Top Card Wallet (Maroon)"
                    price={15}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41EC+vOm8QL._AC_SY200_.jpg"
                />

                <Product
                    id="123460"
                    title="Yogabar Dark Chocolate Peanut Butter| Creamy & Chocolatey | Slow Roasted | Non-GMO Premium Peanuts | 1kg"
                    price={20}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51b-5QnRoZL._AC_SY200_.jpg"
                />
            </div>          

            <div className="home__row">
                {/* Product id, title, price, rating, image */}
                <Product
                    id="123461"
                    title="Dell Vostro 3400 14 FHD Anti Glare Display Laptop (11th Gen i5-1135G7 / 8GB / 512 SSD / Integrated Graphics / Win 10 + Office H&S/ Dune Color /1.64Kg/Backlit Keyboard) D552157WIN9DE"
                    price={100}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51CEknIIHcL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>                 
        </div>
    )
}

export default Home
