"use client"
import React,{useState} from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link';

function Navbar ({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div>
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Documentaion"
            ></MenuItem>
          </Link>

          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Roadmap"
            ></MenuItem>
          </Link>

          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>
          
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Architecure"
            ></MenuItem>
          </Link>

          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Our Team"
            ></MenuItem>
          </Link>

          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar