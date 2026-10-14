import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammad Tasif Hossan — Full-Stack Developer",
    short_name: "Tasif Dev",
    description: "Production portfolio of Mohammad Tasif Hossan, full-stack and backend systems architect.",
    start_url: "/",
    display: "standalone",
    background_color: "#090d16",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
