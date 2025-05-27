import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className = "" }: SocialIconsProps) {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-white cursor-pointer transition-colors"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}