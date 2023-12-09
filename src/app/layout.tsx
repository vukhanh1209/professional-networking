import "./globals.css";
import "style/index.scss";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import ToastMessage from "@/components/common/AlertMessage/ToastMessage";
import { StoreProvider } from "@/redux/StoreProvider";
import { Providers } from "@/components/common/Provider";

const lexend = Lexend({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "HeyDevs - Developer-focused job platform",
  description:
    "HeyDevs là nền tảng tuyển dụng dành cho lập trình viên, nơi bạn tạo hồ sơ và để các công ty ứng tuyển vào bạn!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="vi">
        <body className={lexend.className}>
          <Providers>{children}</Providers>
          <ToastMessage />
        </body>
      </html>
    </StoreProvider>
  );
}
