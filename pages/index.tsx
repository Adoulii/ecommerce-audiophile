import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Navbar/Nav";
import { useState, useEffect } from "react";
import ProductsProvider from "../Provider/productProvider";
import Product from "@/components/Navbar/Product";
import FeaturedProduct from "@/components/FeaturedProduct";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await ProductsProvider.getProducts();
        setProduct(data);
        console.log(data);
        setIsLoading(false);
      } catch (e) {
        setError("error");
        console.log(e);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <FeaturedProduct/>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {product.map((prod: any) => {
              return (
                <Product
                  name={prod.name}
                  description={prod.description}
                  price={prod.price}
                />
              );
            })}
          </>
        )}
      </main>
    </>
  );
}
