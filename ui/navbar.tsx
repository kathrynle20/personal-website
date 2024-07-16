"use client";

import Link from "next/link";
import "@/ui/navbar.css";

export default function Navbar() {
  const links = [
    { title: "Home", name: "home" },
    { title: "About Me", name: "about-me" },
    { title: "Education", name: "education" },
    { title: "Experience", name: "experience" },
    { title: "Skills", name: "skills" },
    { title: "Connect", name: "connect" },
  ];

  return (
    <div className="navbar-wrapper">
      {links.map((link, index) => {
        return (
          <div className="navbar-link">
            <Link key={index} href={"#" + link.name}>
              <div>{link.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
