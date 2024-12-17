import { type RouteObject } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { DocsPage } from "@/pages/docs";
import { RootLayout } from "@/layouts/RootLayout";
import { ComponentsLayout } from "@/layouts/ComponentsLayout";
import { ComponentsPage } from "@/pages/components";
import { HeroComponentsPage } from "@/pages/components/hero";
import { CTAComponentsPage } from "@/pages/components/cta";
import { FeaturesComponentsPage } from "@/pages/components/features";
import { BlogComponentsPage } from "@/pages/components/blog";
import { BusinessComponentsPage } from "@/pages/components/business";
import { FooterComponentsPage } from "@/pages/components/footer";
import { NavbarComponentsPage } from "@/pages/components/navbar";
import { PromoComponentsPage } from "@/pages/components/promo";


export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "docs",
        element: <DocsPage />,
      },
      {
        path: "components",
        element: <ComponentsLayout />,
        children: [
          {
            index: true,
            element: <ComponentsPage />,
          },
          {
            path: "hero",
            element: <HeroComponentsPage />,
          },
          {
            path: "features",
            element: <FeaturesComponentsPage />,
          },
          {
            path: "business",
            element: <BusinessComponentsPage />,
          },
          {
            path: "blog",
            element: <BlogComponentsPage />,
          },
          {
            path: "cta",
            element: <CTAComponentsPage />,
          },
          {
            path: "promo",
            element: <PromoComponentsPage />,
          },
          {
            path: "navbar",
            element: <NavbarComponentsPage />,
          },
          {
            path: "footer",
            element: <FooterComponentsPage />,
          },
          {
            path: "*",
            element: <ComponentsPage />
          }
        ],
      },
    ],
  },
];