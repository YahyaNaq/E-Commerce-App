import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../ui/button";

interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
  link: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="max-w-xs rounded-lg border hover:shadow-md transition-shadow">
      <CardHeader className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-t-md"
        />
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <h2 className="text-base md:text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="mt-2 text-base md:text-lg font-bold text-green-600">{product.price}</div>
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <Button className="w-full xs:text-xs text-sm py-3 px-6">
          <a
            href={product.link}
            className="w-full text-xs md:text-sm py-2 px-4 text-center"
          >
            View Product
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
