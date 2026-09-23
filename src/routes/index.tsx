import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dragon Access Sdn. Bhd. — Pinjaman Berlesen di Johor Bahru",
      },
      {
        name: "description",
        content:
          "DRAGON ACCESS SDN. BHD. — lebih 25 tahun berpengalaman di Johor Bahru menyediakan penyelesaian pinjaman berlesen yang dipercayai. Kadar kompetitif, proses pantas, pelan custom.",
      },
      {
        property: "og:title",
        content: "Dragon Access Sdn. Bhd. — Pinjaman Berlesen di Johor Bahru",
      },
      {
        property: "og:description",
        content:
          "Lebih 25 tahun berpengalaman di Johor Bahru menyediakan penyelesaian pinjaman berlesen yang dipercayai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});
