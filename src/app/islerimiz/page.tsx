import type { Metadata } from "next";
import IslerimizClient from "./IslerimizClient";

export const metadata: Metadata = {
  title: "İşlerimiz | Dentaverax",
  description:
    "Gerçek müşterilerle gerçekleştirdiğimiz başarılı projeler, vaka analizleri ve dönüşüm hikayelerini inceleyin.",
};

export default function IslerimizPage() {
  return <IslerimizClient />;
}
