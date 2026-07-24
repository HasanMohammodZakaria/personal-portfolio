"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";


interface ProvidersProps {
  children: React.ReactNode;
}


export default function Providers({
  children,
}: ProvidersProps) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >

      {children}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

    </ThemeProvider>
  );
}