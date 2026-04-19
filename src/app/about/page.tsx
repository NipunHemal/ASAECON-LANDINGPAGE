import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | ආස Econ",
  description: "\"ආස Econ\" ආරම්භ වූයේ ආර්ථික විද්‍යාව යනු හුදෙක් විභාගයක් සමත් වීම සඳහා පමණක් නොව, ලෝකය දැකීමේ කවුළුවක් බව පෙන්වා දීමේ අරමුණෙනි.",
  openGraph: {
    title: "About Us | ආස Econ",
    description: "සංකීර්ණ න්‍යායන් ඉතා සරලව ප්‍රායෝගිකව උගන්වන ශ්‍රී ලංකාවේ ප්‍රමුඛතම ආර්ථික විද්‍යා පංතියයි.",
    url: "https://asa-econ.com/about",
    siteName: "ආස Econ",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
