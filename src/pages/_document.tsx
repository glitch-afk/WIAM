import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen text-white font-sans bg-brand-700 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
