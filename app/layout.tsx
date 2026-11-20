import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parchy.fr"),
  applicationName: "Parchy",
  authors: [
    { name: "Amélie Florent" },
    { name: "Nathan Hemery" },
  ],
  creator: "Amélie Florent et Nathan Hemery",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
