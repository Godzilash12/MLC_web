import { ExternalLink, Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/fallbackContent";

export function TeamGrid({
  members,
  dataSection
}: {
  members: TeamMember[];
  dataSection?: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <article key={member.id} className="card-surface p-6">
          <div className="flex items-start gap-5">
            <img
              src={member.photo_url}
              alt={member.name}
              data-section={dataSection}
              className="h-24 w-24 rounded-full object-cover grayscale transition duration-300 hover:grayscale-0"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-text">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{member.role_mlc}</p>
              {member.role_external ? (
                <p className="mt-2 text-sm leading-6 text-text-secondary">{member.role_external}</p>
              ) : null}
              {member.linkedin_url ? (
                <a
                  href={member.linkedin_url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost mt-4"
                >
                  <Linkedin size={16} />
                  LinkedIn
                  <ExternalLink size={14} />
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
