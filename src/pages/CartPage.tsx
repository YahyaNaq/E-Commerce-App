import CartItem from "@/components/custom/CartItem";
import SearchBar from "@/components/custom/SearchBar";
import { Button } from "@/components/ui/button";
import PageLayout from "@/layouts/PageLayout";
import { SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const CartPage = () => {  
  const breadcrumbs = [
    {
      label: "Cart",
      href: "/"
    },
  ];

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

  const handleSearch = (value:string) => {
    const updatedProducts = products.filter((product) => (product.name).toLowerCase().includes(value.toLowerCase()));
    setFilteredProducts(updatedProducts);
  }

  const removeProductFromCart = (productId:number) => {
    const updatedProducts = products.filter((product) => product.id !== productId)
    setProducts(updatedProducts);
    console.log(updatedProducts, productId);
  }

  return (
    <PageLayout title="Cart" breadcrumbs={breadcrumbs} useParentCard={false}>
      <div>
        <div className="w-full sm:w-7/12 lg:w-4/12 my-3 md:my-5">
          <SearchBar onChange={(e) => handleSearch(e.target.value)} placeholder="Search products in the cart" />
        </div>
        <div className="my-4">
          <Button variant="default">
            <SquareArrowOutUpRight/>
            <a href="/checkout" className="text-white hover:text-white w-full">Checkout</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <CartItem key={index} product={product} removeProductFromCart={removeProductFromCart} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default CartPage;