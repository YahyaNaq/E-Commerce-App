import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CounterProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
const Counter: React.FC<CounterProps> = ({ quantity, setQuantity }) => {

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center">
      {/* Decrement Button */}
      <Button onClick={decrement} className="h-10 text-2xl font-light rounded-e-none">
        -
      </Button>

      {/* Count Display */}
      <Input
        type="text"
        value={quantity}
        readOnly
        className="h-10 rounded-none text-center"
      />

      {/* Increment Button */}
      <Button onClick={increment} className="h-10 text-2xl font-light rounded-s-none">
        +
      </Button>
    </div>
  );
};

export default Counter;
