import React from 'react';
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from './_components/Header';
import { ReservationProvider } from './_components/ReservationContext';
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
})


export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome to The Wild Oasis",
    description: "Luxurious cabin hotel ,located in the wood"
  }
};

function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body className={`bg-primary-950 ${josefin.className} relative text-primary-100 min-h-screen flex flex-col`}>
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            <ReservationProvider>{children}</ReservationProvider>
            </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
