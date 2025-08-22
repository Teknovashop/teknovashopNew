export const metadata = {
  title: "Teknovashop",
  description: "Tu tienda de tecnología favorita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
