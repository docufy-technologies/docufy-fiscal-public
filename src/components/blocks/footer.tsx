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
      className="text-muted-foreground hover:text-primary block duration-150"
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
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandX />
          </a>
          <a
            href="https://linkedin.com/company/docufybd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://facebook.com/docufy.bd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandFacebook />
          </a>
          <a
            href="https://instagram.com/docufy_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconBrandInstagram />
          </a>
          <a
            href="mailto:info@tech.docufybd.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary block"
          >
            <IconMail />
          </a>
        </div>
        <span className="text-muted-foreground block text-center text-base font-bold">
          {" "}
          © {new Date().getFullYear()} <a href="https://docufybd.com">Docufy</a>
          , All rights reserved
        </span>
      </div>
    </footer>
  );
}
