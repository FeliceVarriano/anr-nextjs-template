import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import TestimonialCard from "sections/testimonial";
import Faq from "sections/faq";
import AboutUs from "sections/about-us";
import Gallery from "sections/gallery";
import Pricing from "components/pricing";
import OurProcess from "sections/our-process";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 004" />
          <Banner />
          <AboutUs />
          <OurProcess />
          <TestimonialCard />
          <Gallery />
          <Pricing />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
