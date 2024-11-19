import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageLayout from "@/layouts/PageLayout";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const CheckoutPage = () => {  
  const breadcrumbs = [
    {
      label: "Cart",
      href: "/"
    },
  ];

  const [products] = useState([
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

  // Calculate total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email("Please enter a valid email address."),
    address: z.string().min(2, {
      message: "Address must be at least 2 characters.",
    }),
    payment_method: z.string().min(2, {
      message: "Address must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      payment_method: ""
    },
  });

  const { handleSubmit, control } = form;

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  return (
    <PageLayout title="Checkout" breadcrumbs={breadcrumbs} useParentCard={false}>
      <div>
        <div className="max-w-4xl space-y-6">
          {/* Order Summary */}
          <Card className="p-4">
            <h2 className="max-w-2xl text-base md:text-lg font-bold mb-4">Order Summary</h2>
            <Table className="text-xs sm:text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-center">Qty</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell className="text-center">{product.quantity}</TableCell>
                    <TableCell className="text-right">
                      ${product.price * product.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total Price:</TableCell>
                  <TableCell className="text-right">${totalPrice}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </Card>

          {/* Payment Information Form */}
          <Card className="p-4">
            <h2 className="font-bold mb-4 text-base md:text-lg">Payment Information</h2>
            <div>
              <Form {...form} >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="confirmOrderForm">
                  <FormField
                    control={control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your name"
                            className={`${fieldState.error && "border-red-500"}`}
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter your email address"
                            className={`${fieldState.error && "border-red-500"}`}
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="address"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your address"
                            className={`${fieldState.error && "border-red-500"}`}
                          />
                        </FormControl>
                        <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="payment_method"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel htmlFor="payment_method">Payment Method</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your payment method (e.g., credit card)"
                              className={`${fieldState.error && "border-red-500"}`}
                            />
                          </FormControl>
                          <FormMessage>{fieldState.error?.message}</FormMessage>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </Card>

          {/* Submit Order Button */}
          <div className="flex justify-center">
            <Button form="confirmOrderForm" type="submit" className="w-full sm:w-auto">
              Confirm Order
            </Button>
          </div>
        </div>
        <div className="my-80">

        </div>
      </div>
    </PageLayout>
  );
}

export default CheckoutPage;