import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    // BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import React from "react";

interface Breadcrumb {
    label: string;
    href: string;
}

// Define the props type for the BreadCrumb component
interface BreadCrumbProps {
    breadcrumbs: Breadcrumb[]; // Array of breadcrumb items
}

const BreadCrumb: React.FunctionComponent<BreadCrumbProps> = ({ breadcrumbs }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={crumb.href}>{ crumb.label }</BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default BreadCrumb;
