import { Breadcrumb } from "@/components/ui/breadcrumb";
import React, { ReactNode } from "react";
import BreadCrumb from "./BreadCrumb";
import { Card, CardContent } from "@/components/ui/card";

// Define the type for breadcrumb items
interface Breadcrumb {
  label: string;
  href: string;
}

// Define the types for the props
interface PageLayoutProps {
  title: string;
  breadcrumbs?: Breadcrumb[]; // Optional prop, could be undefined
  children: ReactNode; // ReactNode type to support any valid React element
  useParentCard: Boolean; // ReactNode type to support any valid React element
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, breadcrumbs, children, useParentCard }) => {
  return (
    <div className="container mx-auto mt-4 px-3 space-y-3">
      {breadcrumbs && (
        <BreadCrumb breadcrumbs={breadcrumbs} />
      )}

      <h1 className="text-xl md:text-2xl font-bold mb-4">{title}</h1>

      {useParentCard ?
        <Card className="p-4">
          <CardContent>
            {children}
          </CardContent>
        </Card>
        
        : children
      }
    </div>
  );
};

export default PageLayout;
