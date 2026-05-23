import {
  IconArchive,
  IconBuildingStore,
  IconChecklist,
  IconClock,
  IconShieldLock,
  IconWriting,
} from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ClassNameValue } from "tailwind-merge";
import AnimatedButton from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function SolutionsCardCustom({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <div
      className={cn(
        "border border-secondary bg-card/60 text-center",
        className,
      )}
    >
      <div className="relative mx-auto mb-4 flex aspect-square size-12 items-center justify-center rounded-full border border-primary text-primary before:absolute before:-inset-2 before:rounded-full before:border before:border-secondary">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl text-primary">{title}</h3>
        <p className="mt-2 text-base leading-tight text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="text-center h-[90dvh]"
      >
        <div className="bg-linear-to-t from-background via-background/50 via-30% to-transparent h-full">
          <div className="max-w-3xl h-full flex flex-col items-center justify-center mx-auto gap-6">
            <img
              src="https://tech.docufybd.com/docufy-logo.png"
              alt="Docufy Logo"
              className="h-20"
            />
            <h1 className="uppercase font-serif lg:text-5xl text-primary">
              One Less Thing to Worry
            </h1>
            <p className="text-xl text-secondary">
              Whether you need help filing on time, organizing records,
              preparing for a return, or dealing with a tax issue that needs
              attention, Docufy Fiscal gives you straightforward guidance,
              careful support, and a clear process so tax work becomes one less
              thing to worry about.
            </p>
            <div className="flex gap-6">
              <AnimatedButton>
                <a
                  href="https://calendly.com/docufy-bd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  Request A Consultation
                </a>
              </AnimatedButton>
              <AnimatedButton variant="outline">
                <a
                  href="mailto:info@fiscal.docufybd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  Contact Us
                </a>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[90vh] max-w-6xl px-6 py-30 mx-auto gap-8">
        <div className="grid h-full items-stretch gap-4 md:grid-cols-3 *:border-secondary">
          <div
            id="message"
            className="col-span-2 flex h-full flex-col items-center justify-center gap-6 border border-primary bg-card/40 p-6"
          >
            <h1 className="lg:text-6xl text-wrap font-serif uppercase text-primary">
              Tax work does not need to sit on your shoulders.
            </h1>
            <p className="text-xl text-secondary">
              From tax filings and VAT submissions to audits, RJSC returns,
              consultancy, dispute handling, and the day-to-day details that
              come with staying on top of fiscal obligations, Docufy Fiscal
              helps you stay compliant, organized, and prepared with less
              pressure, fewer last-minute surprises, and more peace of mind.
            </p>
          </div>
          <div
            id="image"
            className="h-full overflow-hidden border border-secondary bg-card/40 p-6"
          >
            <img
              src="/stressed.png"
              alt="Stressed"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section id="values" className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <h2 className="capitalize leading-relaxed tracking-wider text-center text-primary">
            Values Why Docufy Fiscal Stands Out
          </h2>

          <div className="relative mx-auto grid max-w-6xl overflow-hidden gap-2 backdrop-blur-xl *:border-secondary *:bg-card/50 *:p-12 sm:grid-cols-2 lg:grid-cols-3">
            <SolutionsCardCustom
              title="End-to-end fiscal support"
              description="One team handles tax filing, VAT, audits, RJSC returns, consultancy, and dispute matters so nothing gets scattered across vendors."
              icon={<IconChecklist className="size-6" />}
            />
            <SolutionsCardCustom
              title="Accuracy with accountable process"
              description="We focus on careful review, clean documentation, and timely submission, which lowers the chance of avoidable errors and last-minute fixes."
              icon={<IconWriting className="size-6" />}
            />
            <SolutionsCardCustom
              title="Confidential by default"
              description="Client records are treated with strict confidentiality, so sensitive tax and financial information stays protected throughout the process."
              icon={<IconShieldLock className="size-6" />}
            />
            <SolutionsCardCustom
              title="Guidance that makes tax manageable"
              description="We turn complex tax, VAT, and compliance requirements into practical next steps that are easier for teams and founders to act on."
              icon={<IconBuildingStore className="size-6" />}
            />
            <SolutionsCardCustom
              title="Research-led support"
              description="Our approach is built on clear communication and careful review, so clients get informed support instead of generic filing advice."
              icon={<IconArchive className="size-6" />}
            />
            <SolutionsCardCustom
              title="Prepared for both routine and urgent needs"
              description="From recurring compliance work to notices and disputes, the team is set up to respond quickly when the situation needs attention."
              icon={<IconClock className="size-6" />}
            />
          </div>
        </div>
      </section>
      <section className="py-30 flex flex-col justify-center text-center items-center gap-4">
        <p>
          Ready to elevate your tax experience? Let's get started with Docufy
          Fiscal.
        </p>
        <div className="flex gap-6">
          <AnimatedButton>
            <a
              href="https://calendly.com/docufy-bd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex justify-center items-center"
            >
              Book a Consultation
            </a>
          </AnimatedButton>
          <AnimatedButton variant="outline">
            <Link
              to="/solutions"
              className="w-full h-full flex justify-center items-center"
            >
              Explore Solutions
            </Link>
          </AnimatedButton>
        </div>
      </section>
    </>
  );
}
