import {
  SiJira,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaChrome } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export const tools = [
  {
    name: "Jira",
    icon: SiJira,
    description: "Bug tracking & Sprint management",
  },
  {
    name: "Postman",
    icon: SiPostman,
    description: "REST API testing",
  },
  {
    name: "Git",
    icon: SiGit,
    description: "Version control",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    description: "Repository management",
  },
  {
    name: "VS Code",
    icon: VscCode,
    description: "Development environment",
  },
  {
    name: "Chrome DevTools",
    icon: FaChrome,
    description: "UI inspection & debugging",
  },
  {
    name: "Manual Testing",
    icon: FiCheckCircle,
    description: "Functional, UI & Regression testing",
  },
  {
    name: "API Testing",
    icon: FiCheckCircle,
    description: "API validation using Postman",
  },
];