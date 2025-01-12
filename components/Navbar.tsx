"use client";

import { useState } from "react";
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../components/ui/dropdown-menu';
export default function Navbar() {
  const [active, setActive] = useState("home");
  const CONTRIBUTORS = [
    {
      name: '22bcs049@iiitdwd.ac.in',
      
    },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-20 max-w-7xl items-center">
      <div className="flex items-center justify-center gap-4  px-[30px]">
              
              <a
                
                className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-700 px-8 text-sm font-medium transition-colors hover:bg-zinc-900"
              >
                Portfolio
              </a>
              
            </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="https://drive.google.com/file/d/1bNqITJ00j6EZz0XfX3OfP7YdnA32ay5c/view?usp=drive_link"
              onClick={() => setActive("projects")}
              className={`transition-colors hover:text-foreground/100 ${
                active === "projects" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Download Resume
            </a>
            <a
              href="#skills"
              onClick={() => setActive("skills")}
              className={`transition-colors hover:text-foreground/100 ${
                active === "skills" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Skills
            </a>
            
            <div className="flex items-center space-x-2">
            <div className="absolute top-4 right-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-700 px-8 text-sm font-medium transition-colors hover:bg-zinc-900">
            Email
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg rounded-md">
            {CONTRIBUTORS.map((contributor, index) => (
              <DropdownMenuItem key={index} className="flex items-center gap-2 text-black px-4 py-2 text-sm">
                <Mail className="w-5 h-5 text-gray-700" />
                <a  target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {contributor.name}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      

</div>
          </nav>
        </div>
      </div>
    </header>
  );
}
