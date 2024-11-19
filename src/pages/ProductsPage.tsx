import ProductCard from "@/components/custom/ProductCard";
import SearchBar from "@/components/custom/SearchBar";
import PageLayout from "@/layouts/PageLayout";
import { useState } from "react";

const ProductsPage = () => {  
  const breadcrumbs = [
    {
      label: "Products",
      href: "/"
    },
  ];

  const products = [
    {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$29.99",
      description: "This is a short description of Product 1.",
      link: "/product-details"
    },
    {
      name: "Product 2",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$49.99",
      description: "This is a short description of Product 2.",
      link: "/product/2"
    },
    {
      name: "Product 3",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$19.99",
      description: "This is a short description of Product 3.",
      link: "/product/3"
    },
    {
      name: "Product 4",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$29.99",
      description: "This is a short description of Product 1.",
      link: "/product/1"
    },
    {
      name: "Product 5",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$49.99",
      description: "This is a short description of Product 2.",
      link: "/product/2"
    },
    {
      name: "Product 6",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$19.99",
      description: "This is a short description of Product 3.",
      link: "/product/3"
    },
    {
      name: "Product 7",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$29.99",
      description: "This is a short description of Product 1.",
      link: "/product/1"
    },
    {
      name: "Product 8",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$49.99",
      description: "This is a short description of Product 2.",
      link: "/product/2"
    },
    {
      name: "Product 9",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$19.99",
      description: "This is a short description of Product 3.",
      link: "/product/3"
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (value:string) => {
    const prods = products.filter((product) => (product.name).toLowerCase().includes(value.toLowerCase()));
    setFilteredProducts(prods);
  }

  return (
    <PageLayout title="Products" breadcrumbs={breadcrumbs} useParentCard={false}>
      <div>
        <div className="w-full sm:w-7/12 lg:w-4/12 my-3 md:my-5">
          <SearchBar onChange={(e) => handleSearch(e.target.value)} placeholder="Search products by name" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductsPage;