import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <SidebarProvider>
        <Header sidebarTrigger = {
          <SidebarTrigger className="z-20 shadow-none" variant="secondary" title="All Products" size="sm" />
        }
        />
        <main className="max-w-screen w-full mt-36 sm:mt-28 lg:mt-20 md:mx-8 mx-4">
          {children}
        </main>
        <AppSidebar />
      </SidebarProvider>
      <Footer />
    </>
  )
}