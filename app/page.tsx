import Image from "next/image";
import "./page.module.css";
import "@/app/globals.css";
import Navbar from "@/ui/navbar";
import Section from "@/ui/section";
import Skills from "@/ui/Content/skills";
import Experience from "@/ui/Content/experience";
import LogoImg from "@/ui/logo.png";
import Link from "next/link";

export default function Home() {
  // const sections = [
  //   { title: "Home", name: "home" },
  //   { title: "About Me", name: "about-me" },
  //   { title: "Education", name: "education" },
  //   { title: "Experience", name: "experience" },
  //   { title: "Skills", name: "skills" },
  //   { title: "Connect", name: "connect" },
  // ];
  const skills = { title: "Skills", name: "skills" };
  const experience = { title: "Experience", name: "experience" };
  return (
    <div>
      <div className="main-header">
        <Link className="logo-img" href="#home">
          <Image src={LogoImg} alt="logo"></Image>
        </Link>
        <Navbar></Navbar>
      </div>

      <div>
        <Section
          id={experience.name}
          title={experience.title}
          children={<Experience></Experience>}
        ></Section>
      </div>

      <div>
        <Section
          id={skills.name}
          title={skills.title}
          children={<Skills></Skills>}
        ></Section>
      </div>
    </div>
  );
}
