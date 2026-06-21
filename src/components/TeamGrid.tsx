import { memo } from "react";
import { ExternalLink, Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/fallbackContent";

export const TeamGrid = memo(function TeamGrid({
  members,
  dataSection,
}: {
  members: TeamMember[];
  dataSection?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <article key={member.id} className="card-surface p-6">
          <div className="flex items-start gap-5">
            <img
              src={member.photo_url}
              alt={member.name}
              data-section={dataSection}
              className="h-20 w-20 shrink-0 rounded-full object-cover object-top grayscale transition duration-300 hover:grayscale-0"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = "/shakhriyor.avif";
              }}
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold leading-6 text-text">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent">
                {member.role_mlc}
              </p>
              {member.role_external ? (
                <p className="mt-1.5 text-sm leading-5 text-text-secondary">
                  {member.role_external}
                </p>
              ) : null}
              {member.linkedin_url ? (
                <a
                  href={member.linkedin_url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost mt-3"
                >
                  <Linkedin size={15} />
                  LinkedIn
                  <ExternalLink size={13} />
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
});
