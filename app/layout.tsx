import "./globals.css";

export const metadata = {
  title: "UMD Weather",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-900 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-50">
        {children}
      </body>
    </html>
  );
}
