import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Counter from "./Counter";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  link: string;
  quantity: number;
}

interface CartItemProps {
  product: Product;
  removeProductFromCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, removeProductFromCart }) => {

  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <Card className="max-w-xs rounded-lg border hover:shadow-md transition-shadow">
      <CardHeader className="p-4">
        <div className="flex items-center relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover rounded-t-md"
          />
            <Button
              variant="outline"
              className="w-2 absolute inset-y-0 right-2 top-2 flex items-center bg-white"
              onClick={() => removeProductFromCart(product.id)}
            >
              <Trash2 className="text-red-600"/>
            </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <h2 className="text-base md:text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex flex-wrap gap-x-2 justify-between mt-2 text-base md:text-base xl:text-lg font-bold text-green-600">
            <p>${product.price}</p>
            <p className="text-green-800">Total Price: ${Number(product.price * quantity).toFixed(2)}</p>
          </div>
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <Counter quantity={quantity} setQuantity={setQuantity} />
      </CardFooter>
    </Card>
  );
};

export default CartItem;
