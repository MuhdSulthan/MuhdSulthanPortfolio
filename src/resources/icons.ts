import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

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
