import "./styles/globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Tool 4 You",
  description: "Discover the ideal tool for your activities",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

const headerProps = {
  logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0e794bf66420096e920bd50e32de1115938e28c4c8628a18e959cf647782974?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028",
  navItems: ["Encontrar recomendação", "Contato", "Sobre"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="style-page">
          <Header {...headerProps} />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
