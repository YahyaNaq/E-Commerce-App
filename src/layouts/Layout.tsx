import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import React from "react"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="min-w-fit mt-2 md:mx-8 mx-4">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}