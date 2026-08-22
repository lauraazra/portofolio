import {
  FaGithub,
  FaGlobe,
  FaFileLines,
  FaFigma,
  FaCircleDown,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

import { SiGooglecolab } from "react-icons/si";

export const LINK_ICONS: Record<string, React.ReactNode> = {
  Repository: <FaGithub className="w-6 h-6" />,
  Website: <FaGlobe className="w-6 h-6" />,
  Documentation: <FaFileLines className="w-6 h-6" />,
  Design: <FaFigma className="w-6 h-6" />,
  Download: <FaCircleDown className="w-6 h-6" />,
  Paper: <FaFileLines className="w-6 h-6" />,
  Colab: <SiGooglecolab className="w-6 h-6" />,
  instagram: <FaInstagram className="w-4 h-4" />,
  tiktok: <FaTiktok className="w-4 h-4" />,
};
