import "./styles/globals.css";
import Header from "./components/Header";
import {
  useResultRecommendationContext,
  ResultRecommendationContextProvider,
} from "./hooks/contexts/resultRecommendationContext";

export const metadata = {
  title: "STARS Recomendador",
  description: "Discover the ideal tool for your activities",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

const headerProps = {
  logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/750f70d0592cc77ae275c551e6e667d01a9f31ff",
  navItems: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ResultRecommendationContextProvider>
          <div className="style-page">
            <Header {...headerProps} />
            <main>{children}</main>
          </div>
        </ResultRecommendationContextProvider>
      </body>
    </html>
  );
}
