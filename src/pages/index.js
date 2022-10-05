import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import TestimonialCard from "sections/testimonial";
import Faq from "sections/faq";
import AboutUs from "sections/aboutus";
import Gallery from "sections/gallery";
import Pricing from "components/pricing";
import OurProcess from "sections/our-process";
import { ContactComponent } from "sections/contact-component";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="A&R Streaming" />
          <Banner />
          <AboutUs />
          <OurProcess />
          <TestimonialCard />
          <Gallery />
          <Pricing />
          <ContactComponent />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
