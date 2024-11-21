import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Calendar, Home, Menu, Search, Settings, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Layout({ children }: { children: React.ReactNode }) {

  const items = [
    {
      title: "Products",
      url: "/",
      icon: Home,
    },
    {
      title: "Cart",
      url: "/cart",
      icon: ShoppingCart,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]

  return (
    <>
      {/* <Sheet>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Products</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
            <ul>

            </ul>
            {items.map((item) => (
                <li key={item.title}>
                  <a href={item.url}>
                    <item.icon  className="text-slate-600 font-semibold"/>
                    <span className="text-slate-600 font-semibold">{item.title}</span>
                  </a>
                </li>
              ))}
          </SheetHeader>
          <div className="grid gap-4 py-4">

          </div>
        </SheetContent>
        <Header sidebarTrigger={
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
              <span className="hidden lg:block">All Products</span>
              <span className="hidden md:block lg:hidden">All</span>
            </Button>
          </SheetTrigger>
        }
        />
      </Sheet>
      <main className="max-w-screen mt-20 md:mx-8 mx-4">
        {children}
      </main>
      <Footer /> */}
      <SidebarProvider>
        <Header sidebarTrigger = {
          <SidebarTrigger className="m-2 z-20 shadow-none" variant="secondary" title="All Products" size="sm" />
        }
        />
        <main className="max-w-screen mt-20 md:mx-8 mx-4">
          {children}
        </main>
        <AppSidebar />
      </SidebarProvider>
      <Footer />
    </>
  )
}