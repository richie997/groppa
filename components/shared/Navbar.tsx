import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-3">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Bon plan</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="bg-white p-8 shadow-lg w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-500">Bon plan</Badge>
                    <Link 
                      href="#" 
                      className="block font-medium text-justify hover:bg-cyan-100 p-6 transition-colors"
                    >
                      Until 02/28, benefit from 100 euros including tax
                      offered(1) for subscribing to an electricity offer at a
                      market price Elec Reference 2 years or Duo Adapt 1 year
                    </Link>
                  </div>
                  <div className="space-y-2 opacity-100">
                    <h1 className="text-center text-2xl font-bold">Find my Elec Pilot</h1>
                    <p className="shadow-[0_4px_6px_-1px_rgba(0,188,212,1)] p-6 rounded-lg text-justify text-lg">
                      Easily reduce your heating consumption without changing
                      your radiators with the free my pilot elec service <br />
                      <Link href="/" className="hover:underline">Explore</Link>
                    </p>
                   

                  </div>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Moving</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="bg-white p-8 shadow-lg w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-500">Bon plan</Badge>
                    <Link href="#" className="block font-medium text-justify hover:bg-cyan-100 p-6 transition-colors">
                      Until 02/28, benefit from 100 euros including tax offered(1) for moving services
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-center text-2xl font-bold">Moving Services</h1>
                    <p className="shadow-[0_4px_6px_-1px_rgba(0,188,212,1)] p-6 rounded-lg text-justify text-lg">
                      Make your move easier with our comprehensive moving services
                      <br />
                      <Link href="/" className="hover:underline">Learn More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Electricity & Gas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="bg-white p-8 shadow-lg w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-500">Bon plan</Badge>
                    <Link href="#" className="block font-medium text-justify hover:bg-cyan-100 p-6 transition-colors">
                      Until 02/28, benefit from 100 euros including tax offered(1) for subscribing to an electricity offer at a
                      market price Elec Reference 2 years or Duo Adapt 1 year
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-center text-2xl font-bold">Find my Elec Pilot</h1>
                    <p className="shadow-[0_4px_6px_-1px_rgba(0,188,212,1)] p-6 rounded-lg text-justify text-lg">
                      Easily reduce your heating consumption without changing
                      your radiators with the free my pilot elec service <br />
                      <Link href="/" className="hover:underline">Explore</Link>
                    </p>
                  </div>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Services & Equipment</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="bg-white p-8 shadow-lg w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-500">Bon plan</Badge>
                    <Link href="#" className="block font-medium text-justify hover:bg-cyan-100 p-6 transition-colors">
                      Until 02/28, benefit from 100 euros including tax offered(1) for subscribing to an electricity offer at a
                      market price Elec Reference 2 years or Duo Adapt 1 year
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-center text-2xl font-bold">Find my Elec Pilot</h1>
                    <p className="shadow-[0_4px_6px_-1px_rgba(0,188,212,1)] p-6 rounded-lg text-justify text-lg">
                      Easily reduce your heating consumption without changing
                      your radiators with the free my pilot elec service <br />
                      <Link href="/" className="hover:underline">Explore</Link>
                    </p>
                  </div>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Energy Economy</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="bg-white p-8 shadow-lg w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-500">Bon plan</Badge>
                    <Link href="#" className="block font-medium text-justify hover:bg-cyan-100 p-6 transition-colors">
                      Until 02/28, benefit from 100 euros including tax offered(1) for subscribing to an electricity offer at a
                      market price Elec Reference 2 years or Duo Adapt 1 year
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-center text-2xl font-bold">Find my Elec Pilot</h1>
                    <p className="shadow-[0_4px_6px_-1px_rgba(0,188,212,1)] p-6 rounded-lg text-justify text-lg">
                      Easily reduce your heating consumption without changing
                      your radiators with the free my pilot elec service <br />
                      <Link href="/" className="hover:underline">Explore</Link>
                    </p>
                  </div>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Why Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="bg-white p-8 shadow-lg w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-500">Bon plan</Badge>
                    <Link href="#" className="block font-medium text-justify hover:bg-cyan-100 p-6 transition-colors">
                      Until 02/28, benefit from 100 euros including tax offered(1) for subscribing to an electricity offer at a
                      market price Elec Reference 2 years or Duo Adapt 1 year
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-center text-2xl font-bold">Find my Elec Pilot</h1>
                    <p className="shadow-[0_4px_6px_-1px_rgba(0,188,212,1)] p-6 rounded-lg text-justify text-lg">
                      Easily reduce your heating consumption without changing
                      your radiators with the free my pilot elec service <br />
                      <Link href="/" className="hover:underline">Explore</Link>
                    </p>
                  </div>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">Help & Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="bg-white p-8 shadow-lg w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-indigo-500">Bon plan</Badge>
                    <Link href="#" className="block font-medium text-justify hover:bg-cyan-100 p-6 transition-colors">
                      Until 02/28, benefit from 100 euros including tax offered(1) for subscribing to an electricity offer at a
                      market price Elec Reference 2 years or Duo Adapt 1 year
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-center text-2xl font-bold">Find my Elec Pilot</h1>
                    <p className="shadow-[0_4px_6px_-1px_rgba(0,188,212,1)] p-6 rounded-lg text-justify text-lg">
                      Easily reduce your heating consumption without changing
                      your radiators with the free my pilot elec service <br />
                      <Link href="/" className="hover:underline">Explore</Link>
                    </p>
                  </div>
                </div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
