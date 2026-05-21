import {
  IconAppWindow,
  IconBlocks,
  IconBusinessplan,
  IconFunction,
  IconStack,
  IconWebhook,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
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
        "space-y-3 text-center border border-foreground",
        className,
      )}
    >
      <div className="relative mx-auto flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl">{title}</h3>
      <p className="text-base mt-2 leading-tight">{description}</p>
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
        className="text-center h-screen"
      >
        <div className="bg-linear-to-t from-background via-background/50 via-30% to-transparent h-full">
          <div className="max-w-3xl h-full flex flex-col items-center justify-center mx-auto gap-6">
            <img
              src="https://tech.docufybd.com/docufy-logo.png"
              alt="Docufy Logo"
              className="h-20"
            />
            <h1 className="uppercase font-serif lg:text-5xl">
              One Less Thing to Worry
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              eum soluta est, sed debitis distinctio et error fugit tempore. A,
              obcaecati.
            </p>
            <div className="flex gap-6">
              <AnimatedButton>Book A Consultation</AnimatedButton>
              <AnimatedButton variant="outline">Contact Us</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[90vh] max-w-6xl px-6 py-30 mx-auto gap-12">
        <div className="grid md:grid-cols-3 *:border-foreground items-stretch gap-4">
          <div
            id="message"
            className="flex h-full flex-col items-center justify-center gap-6 border p-6 md:p-10 col-span-2"
          >
            <h1 className="lg:text-5xl font-serif uppercase">
              You should not be worrying about taxes
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae laudantium ab, aut, ea officiis fugiat est saepe
              deleniti vero voluptatum itaque quia commodi temporibus iure velit
              ipsum. Ab beatae dolorum vero impedit, aliquam possimus a id,
              assumenda perspiciatis sit odio.
            </p>
          </div>
          <div id="image" className="h-full overflow-hidden border p-6">
            <img
              src="/stressed.png"
              alt="Stressed"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
          <h2 className="capitalize leading-relaxed tracking-wider text-center">
            The Smart Solutions Docufy Tech Offers
          </h2>

          <div className="relative mx-auto grid max-w-6xl *:p-12 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-xl overflow-hidden gap-2">
            <SolutionsCardCustom
              title="Project / Product Overview"
              description="A concise summary of a project's goals, scope, timeline, and outcomes."
              icon={<IconStack className="size-6" />}
            />
            <SolutionsCardCustom
              title="Business Requirement Document (BRD)"
              description="Documents business needs to guide system or process development."
              icon={<IconBusinessplan className="size-6" />}
            />
            <SolutionsCardCustom
              title="Product Requirement Document (PRD)"
              description="Defines product purpose, features, and user needs for development."
              icon={<IconBlocks className="size-6" />}
            />
            <SolutionsCardCustom
              title="Functional Requirement Document (FRD)"
              description="Outlines system behaviors, features, and interactions."
              icon={<IconFunction className="size-6" />}
            />
            <SolutionsCardCustom
              title="Software Requirement Specification (SRS)"
              description="Defines clear, verifiable system requirements."
              icon={<IconAppWindow className="size-6" />}
            />
            <SolutionsCardCustom
              title="Web Application Development"
              description="Builds responsive, user-friendly websites for your needs."
              icon={<IconWebhook className="size-6" />}
            />
          </div>
        </div>
      </section>
      <section className="py-30 flex flex-col justifycenter text-center items-center gap-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet!</p>
        <div className="flex gap-6">
          <AnimatedButton>CTA CTA</AnimatedButton>
          <AnimatedButton>CTA CTA</AnimatedButton>
        </div>
      </section>
    </>
  );
}
