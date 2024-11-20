import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
  specifications: string[];
  link: string;
}

interface ProductDetailsCardProps {
  product: Product;
}

const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({ product }) => {
  return (
    <Card className="max-w-4xl mx-auto my-8 shadow-sm border">
      <CardHeader>
        <div className="sm:flex gap-6 py-4">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="sm:w-1/3 object-cover rounded-lg mb-2"
          />
          {/* Product Information */}
          <div className="flex-1">
            <h1 className="text-lg md:text-xl font-bold mb-2">{product.name}</h1>
            <p className="sm:text-sm md:text-base text-gray-600">{product.description}</p>
            <div className="mt-4 sm:text-base md:text-lg font-semibold text-green-600">
              {product.price}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-4">
        {/* Product Specifications */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
          <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
            {product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="py-4">
        <Button className="w-full xs:text-xs text-sm py-3 px-6">
          <a
            href={product.link}
            className="flex items-center justify-center w-full gap-x-2 text-center"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductDetailsCard;
