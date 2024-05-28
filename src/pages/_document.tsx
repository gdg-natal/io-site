import { Html, Head, Main, NextScript } from "next/document";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-body">
        <Header />
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
