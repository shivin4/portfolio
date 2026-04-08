import type { Project } from "./types";
import { logiclens } from "./logiclens";
import { stackpilot } from "./stackpilot";
import { factlens } from "./factlens";
import { sehat } from "./sehat";
import { abilify } from "./abilify";
import { joblyt } from "./joblyt";

export type {
  Project,
  ProjectLink,
  JourneyStep,
  HowItWorksCard,
  ProblemStatement,
} from "./types";

const allProjects: Project[] = [
  logiclens,
  stackpilot,
  factlens,
  sehat,
  abilify,
  joblyt,
];

export const projects: Project[] = [...allProjects].sort(
  (a, b) => a.priority - b.priority
);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
