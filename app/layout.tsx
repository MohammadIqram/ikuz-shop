import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKUZ SHOP | Underground Streetwear",
  description:
    "Heavyweight streetwear, industrial nightwear, and high-velocity drops from IKUZ SHOP.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
