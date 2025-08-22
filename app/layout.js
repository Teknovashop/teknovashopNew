import "./globals.css";

export const metadata = {
  title: "Teknovashop — Tecnología, ofertas y tendencias",
  description: "Noticias tecnológicas, chollos y productos top venta. Teknovashop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
