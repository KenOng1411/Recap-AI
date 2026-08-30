import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Runs before hydration so the correct theme applies with no flash. Defaults to
// dark (the site's primary look) unless the visitor previously chose light.
const noFlashThemeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored !== "light") document.documentElement.classList.add("dark");
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {noFlashThemeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
