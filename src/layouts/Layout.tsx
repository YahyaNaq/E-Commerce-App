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