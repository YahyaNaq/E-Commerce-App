import CartItem from "@/components/custom/CartItem";
import SearchBarLive from "@/components/custom/SearchBarLive";
import { Button } from "@/components/ui/button";
import { ShoppingCart, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const CartSheet = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 29.99,
            description: "This is a short description of Product 1.",
            link: "/product-details",
            quantity: 3
        },
        {
            id: 5,
            name: "Product 5",
            image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 49.99,
            description: "This is a short description of Product 2.",
            link: "/product-details",
            quantity: 4
        }
    ]);

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products])

    const handleSearch = (value: string) => {
        const updatedProducts = products.filter((product) => (product.name).toLowerCase().includes(value.toLowerCase()));
        setFilteredProducts(updatedProducts);
    }

    const removeProductFromCart = (productId: number) => {
        const updatedProducts = products.filter((product) => product.id !== productId)
        setProducts(updatedProducts);
        console.log(updatedProducts, productId);
    }

    return (
        <>
            <SheetTrigger className="p-0 bg-inherit focus:outline-none">
                <ShoppingCart size="28" color="white" strokeWidth={2.5} />
                <span className="sr-only">View Cart</span>
            </SheetTrigger>
            <SheetContent className="">
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>
                        <div>
                            <div className="w-full my-3 md:my-5">
                                <SearchBarLive onChange={(e) => handleSearch(e.target.value)} placeholder="Search products in the cart" />
                            </div>
                            <div className="my-4">
                                <Button variant="default">
                                    <SquareArrowOutUpRight />
                                    <a href="/checkout" className="w-full">Checkout</a>
                                </Button>
                            </div>
                            <div className="w-full space-y-4">
                                {filteredProducts.map((product, index) => (
                                    <CartItem key={index} product={product} removeProductFromCart={removeProductFromCart} />
                                ))}
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </>
    );
}

export default CartSheet;