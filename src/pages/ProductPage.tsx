import ProductDetailsCard from "@/components/custom/ProductDetailsCard";
import PageLayout from "@/layouts/PageLayout";

const ProductPage = () => {
    const breadcrumbs = [
        {
          label: "Products",
          href: "/"
        },
        {
          label: "Product Details",
          href: "/product-details"
        },
    ];

    const product = {
        name: "Product 1",
        image: "https://via.placeholder.com/600x600",
        price: "$99.99",
        description: "This is a more detailed description of Product 1. It includes all the necessary information you need to know about the product, including its features and benefits.",
        specifications: [
          "Feature 1: High Quality",
          "Feature 2: Waterproof",
          "Feature 3: 2-Year Warranty",
          "Feature 4: Energy Efficient"
        ],
        link: "/cart"
    };

    return (
        <PageLayout title="Product Details" breadcrumbs={breadcrumbs} useParentCard={false}>
            <ProductDetailsCard product={product} />
        </PageLayout>
    );
};

export default ProductPage;
