import {
  SiJira,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaChrome } from "react-icons/fa";
import {
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";

export const tools = [
  {
    name: "Jira",
    icon: SiJira,
    description: "Defect tracking, issue management, and QA workflow practice.",
    level: "Practiced",
    gradient: "from-blue-50 to-indigo-100 dark:from-blue-500/15 dark:to-indigo-400/10",
  },
  {
    name: "Postman",
    icon: SiPostman,
    description: "Currently learning API requests, responses, collections, and validations.",
    level: "Learning",
    gradient: "from-orange-50 to-amber-100 dark:from-orange-500/15 dark:to-amber-400/10",
  },
  {
    name: "Git",
    icon: SiGit,
    description: "Version control for tracking changes and managing project history.",
    level: "Working Knowledge",
    gradient: "from-rose-50 to-orange-100 dark:from-rose-500/15 dark:to-orange-400/10",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    description: "Repository management and sharing QA practice projects.",
    level: "Working Knowledge",
    gradient: "from-slate-100 to-slate-200 dark:from-slate-500/15 dark:to-slate-300/10",
  },
  {
    name: "VS Code",
    icon: VscCode,
    description: "Primary workspace for portfolio and QA documentation tasks.",
    level: "Comfortable",
    gradient: "from-sky-50 to-cyan-100 dark:from-sky-500/15 dark:to-cyan-400/10",
  },
  {
    name: "Chrome DevTools",
    icon: FaChrome,
    description: "UI inspection, responsiveness checks, and basic debugging.",
    level: "Practiced",
    gradient: "from-cyan-50 to-blue-100 dark:from-cyan-500/15 dark:to-blue-400/10",
  },
  {
    name: "Manual Testing",
    icon: FiCheckCircle,
    description: "Functional, regression, smoke, sanity, and exploratory testing.",
    level: "Core Skill",
    gradient: "from-emerald-50 to-teal-100 dark:from-emerald-500/15 dark:to-teal-400/10",
  },
  {
    name: "QA Documentation",
    icon: FiFileText,
    description: "Test cases, bug reports, test scenarios, and structured QA artifacts.",
    level: "Core Skill",
    gradient: "from-violet-50 to-fuchsia-100 dark:from-violet-500/15 dark:to-fuchsia-400/10",
  },
];