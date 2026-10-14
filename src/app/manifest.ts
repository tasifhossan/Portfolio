import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammad Tasif Hossan — Full-Stack Developer",
    short_name: "Tasif Dev",
    description: "Production portfolio of Mohammad Tasif Hossan, full-stack and backend systems architect.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F19",
    theme_color: "#1F4BFF",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
