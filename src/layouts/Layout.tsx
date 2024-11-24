import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<>
			<SidebarProvider>
				<Header sidebarTrigger={
					<SidebarTrigger
						className="z-20 shadow-none"
						variant="secondary"
						title="All Options"
						size="sm"
						side="right"
					/>
				}
				/>
				<main className="max-w-screen w-full mt-32 sm:mt-24 lg:mt-22">
					{children}
				</main>
				<AppSidebar />
			</SidebarProvider>
			<Footer />
		</>
	)
}