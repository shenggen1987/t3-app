import "~/styles/globals.css";
import "@radix-ui/themes/styles.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { LanguageProvider } from "~/components/LanguageProvider";
import { getLocaleFromCookies } from "~/lib/cookies";

export const metadata: Metadata = {
  title: "EssayPass - AI Academic Writing Assistant",
  description:
    "Professional AI-powered academic writing tool with real citations, human-style content, and smart detection avoidance.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initialLocale = getLocaleFromCookies();

  return (
    <html lang={initialLocale} className={`${geist.variable}`}>
      <body>
        <LanguageProvider initialLocale={initialLocale}>
          <Theme
            appearance="light"
            accentColor="violet"
            grayColor="slate"
            radius="medium"
            scaling="100%"
          >
            {children}
          </Theme>
        </LanguageProvider>
      </body>
    </html>
  );
}
