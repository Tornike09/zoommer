"use client";

import axios from "axios";
import { IProduct } from "@/app/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/app/components/Header/Header";
import { ProductDetails } from "@/app/components/ProductDetails/ProductDetails";

const Post = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id, category } = useParams();
  const params = useParams()

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `https://jsonserver.reactbd.com/${category}/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProductData();
  }, [id, category]);

  return <div>
    <Header/>
    <div>
      {product && <ProductDetails product={product}/>}
    </div>
  </div>;
};
export default Post;
