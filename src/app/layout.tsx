"use client"

import "./globals.css"
import "react-toastify/dist/ReactToastify.css" // Стили для react-toastify
import { ToastContainer } from "react-toastify" // Контейнер для уведомлений
import { Roboto } from "next/font/google"
import Header from "@/components/Header/Header"
import StoreProvider from "@/redux/storeProvider"
import { metadata } from "./layout.server"
import Footer from "@/components/Footer/Footer"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title ? String(metadata.title) : ""}</title>
      </head>
      <body className={roboto.className}>
        <StoreProvider>
          {/* Основное содержимое */}
          <main className="max-w-6xl mx-auto px-10 pt-4 overflow-hidden">
            <Header />
            {children}
          </main>
          {/* Футер на всю ширину экрана */}
          <Footer />
        </StoreProvider>

        {/* ToastContainer для уведомлений */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
