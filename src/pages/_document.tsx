import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-brand-700 font-sans text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
