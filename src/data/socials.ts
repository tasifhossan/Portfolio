export interface SocialLink {
  name: string;
  url: string;
  label: string;
  ariaLabel?: string;
  icon: "Github" | "Linkedin" | "Twitter" | "Facebook";
}

export const socialsData: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/tasifhossan",
    label: "GitHub Profile (tasifhossan)",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    // [LINKEDIN URL] placeholder
    url: "[LINKEDIN URL] https://linkedin.com/in/tasifhossan",
    label: "LinkedIn Profile",
    icon: "Linkedin",
  },
  {
    name: "Twitter / X",
    // [TWITTER URL] placeholder
    url: "[TWITTER URL] https://x.com/tasifhossan",
    label: "Twitter / X Profile",
    icon: "Twitter",
  },
  {
    name: "Facebook",
    // [FACEBOOK URL] placeholder
    url: "[FACEBOOK URL] https://facebook.com/tasifhossan",
    label: "Facebook Profile",
    icon: "Facebook",
  },
];
