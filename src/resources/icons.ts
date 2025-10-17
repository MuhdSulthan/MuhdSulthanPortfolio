import { IconType } from "react-icons";

// Import icons individually to reduce bundle size
import { HiArrowUpRight } from "react-icons/hi2";
import { HiOutlineLink } from "react-icons/hi2";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { HiOutlineDocument } from "react-icons/hi2";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiCommandLine } from "react-icons/hi2";
import { HiShieldCheck } from "react-icons/hi2";
import { HiCpuChip } from "react-icons/hi2";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { HiCog6Tooth } from "react-icons/hi2";
import { HiServerStack } from "react-icons/hi2";
import { HiComputerDesktop } from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiTryhackme,
  SiCredly,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaInstagram,
} from "react-icons/fa6";

//
// Define social keys (strong typing)
//
export type SocialKey =
  | "github"
  | "linkedin"
  | "x"
  | "instagram"
  | "discord"
  | "tryhackme"
  | "credly";

//
// Main icon library
//
export const iconLibrary: Record<string, IconType> = {
  // UI icons
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  terminal: HiCommandLine,
  shield: HiShieldCheck,
  code: HiCpuChip,
  smartphone: HiDevicePhoneMobile,
  harddrive: HiComputerDesktop,
  settings: HiCog6Tooth,
  activity: HiOutlineEye,
  server: HiServerStack,

  // Tech stack icons
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,

  // Social icons
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX, // Twitter (X)
  instagram: FaInstagram,
  discord: FaDiscord,
  tryhackme: SiTryhackme,
  credly: SiCredly,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
