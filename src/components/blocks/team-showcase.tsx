import { IconBrandLinkedin, IconBrandX, IconWorld } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageURL: string;
  socialLinks?: {
    X?: string;
    LinkedIn?: string;
    website?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Md Farhan Mahmud Moon",
    role: "Business and Management Development Advisor",
    imageURL: "/moon.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/1farhanmahmud/",
      X: "https://x.com/1farhanmahmud",
    },
  },
  {
    id: "2",
    name: "Sneha Salam",
    role: "Founder & Chief Executive Officer",
    imageURL: "/sneha.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/sneha-salam/",
      website: "https://snehasalam.com",
      X: "https://x.com/SalamSneha",
    },
  },
  {
    id: "3",
    name: "MD Ferdous Hassan",
    role: "Chief Communications Officer",
    imageURL: "/snigdho.png",
    socialLinks: { LinkedIn: "https://www.linkedin.com/in/ferdoushassan280/" },
  },
  {
    id: "4",
    name: "Nazifa Zafrin Ahona",
    role: "Chief Operating Officer",
    imageURL: "/ahona.webp",
    socialLinks: { LinkedIn: "https://www.linkedin.com/in/nazifazafrin/" },
  },
  {
    id: "5",
    name: "Md Izaz Uddin Ashik",
    role: "Chief Legal Officer",
    imageURL: "/ashik.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/md-izaz-uddin-258788121/",
    },
  },
  {
    id: "6",
    name: "Md Rakibul Hasan Ratul",
    role: "Chief Technology Officer",
    imageURL: "/ratul.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/rhasanratul",
      X: "https://x.com/RHasanRatul",
    },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export function TeamShowcaseMobile({
  members = DEFAULT_MEMBERS,
}: TeamShowcaseProps) {
  return (
    <div className="sm:hidden flex flex-col justify-center items-center gap-16">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex flex-col items-center gap-4 max-w-[90%] text-center!"
        >
          <img
            src={member.imageURL}
            alt={member.name}
            className="size-52 rounded-xl"
          />
          <div>
            <h3 className="text-lg font-medium">{member.name}</h3>
            {member.socialLinks && (
              <div className="flex justify-center items-center">
                {member.socialLinks?.LinkedIn && (
                  <a
                    href={member.socialLinks.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                    title="LinkedIn"
                  >
                    <IconBrandLinkedin size={20} />
                  </a>
                )}
                {member.socialLinks?.X && (
                  <a
                    href={member.socialLinks.X}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                    title="X / Twitter"
                  >
                    <IconBrandX size={20} />
                  </a>
                )}
                {member.socialLinks?.website && (
                  <a
                    href={member.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                    title="Portfolio"
                  >
                    <IconWorld size={20} />
                  </a>
                )}
              </div>
            )}
            <p className="text-base px-8 mx-auto text-secondary font-bold">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TeamShowcaseDesktop({
  members = DEFAULT_MEMBERS,
}: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="max-sm:hidden flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-6 select-none w-full max-w-4xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* ── Left: photo grid ── */}
      <div className="flex gap-2 flex-shrink-0 overflow-x-auto mx-auto pb-1 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          {col1.map((member) => (
            <PhotoCard
              key={member.role}
              member={member}
              className="w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list*/}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl cursor-pointer shrink-0 transition-opacity duration-400",
        className,
        isDimmed ? "opacity-60" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.imageURL}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? "grayscale(0)" : "grayscale(1)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300 text-right",
        isDimmed ? "opacity-50" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social*/}
      <div className="flex justify-end items-center gap-2.5">
        {/* Social icons */}
        {member.socialLinks && (
          <div
            className={cn(
              "flex items-center gap-1.5 ml-0.5 transition-all duration-200",
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2 pointer-events-none",
            )}
          >
            {member.socialLinks?.LinkedIn && (
              <a
                href={member.socialLinks.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <IconBrandLinkedin size={20} />
              </a>
            )}
            {member.socialLinks?.X && (
              <a
                href={member.socialLinks.X}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <IconBrandX size={20} />
              </a>
            )}
            {member.socialLinks?.website && (
              <a
                href={member.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="Portfolio"
              >
                <IconWorld size={20} />
              </a>
            )}
          </div>
        )}

        <span
          className={cn(
            "text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300",
            isActive ? "text-foreground" : "text-foreground/80",
          )}
        >
          {member.name}
        </span>
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {member.role}
      </p>
    </div>
  );
}
