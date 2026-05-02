"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <span className="nav-name">kathryn le</span>
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <div className="nav-dropdown">
          <Link href="#about" onClick={() => setOpen(false)}>about</Link>
          <Link href="#experience" onClick={() => setOpen(false)}>experience</Link>
          <a href="https://drive.google.com/file/d/1y3PXhmSnQCNmsVbJB6k3YwyxVviirKED/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>resume</a>
          <a href="https://blog-gamma-one-37.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>blog</a>
          <Link href="#contact" onClick={() => setOpen(false)}>contact</Link>
        </div>
      )}
    </nav>
  );
}
