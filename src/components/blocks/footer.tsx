import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

// import { Link, type LinkProps } from "@tanstack/react-router";

function FooterAnchor({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-foreground duration-150 hover:text-primary"
    >
      {label}
    </a>
  );
}

// function FooterLink({ label, to }: { label: string; to: LinkProps["to"] }) {
//   return (
//     <Link
//       to={to}
//       className="text-muted-foreground hover:text-primary block duration-150"
//     >
//       {label}
//     </Link>
//   );
// }

export default function Footer() {
  return (
    <footer className="pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <FooterAnchor label="Who We Are" href="https://docufybd.com/about" />
          <FooterAnchor
            label="Terms of Service"
            href="https://docufybd.com/terms-and-conditions"
          />
          <FooterAnchor
            label="Privacy Policy"
            href="https://docufybd.com/privacy-policy"
          />
        </div>
        <div className="my-5 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://x.com/docufybd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="block text-foreground hover:text-primary"
          >
            <IconBrandX />
          </a>
          <a
            href="https://linkedin.com/company/docufybd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="block text-foreground hover:text-primary"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://facebook.com/docufy.bd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="block text-foreground hover:text-primary"
          >
            <IconBrandFacebook />
          </a>
          <a
            href="https://instagram.com/docufy_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="block text-foreground hover:text-primary"
          >
            <IconBrandInstagram />
          </a>
          <a
            href="mailto:info@tech.docufybd.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="block text-foreground hover:text-primary"
          >
            <IconMail />
          </a>
        </div>
        <span className="block text-center text-base text-foreground">
          {" "}
          © {new Date().getFullYear()}{" "}
          <a
            href="https://docufybd.com"
            className="text-foreground transition-colors duration-150 hover:text-primary"
          >
            Docufy
          </a>
          , All rights reserved
        </span>
      </div>
    </footer>
  );
}
