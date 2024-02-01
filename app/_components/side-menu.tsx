"use client";

import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const SideMenu = () => {
  const { data, status } = useSession();
  const handleLogin = async () => await signIn("google");

  const handleLogout = async () => await signOut();
  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex justify-between px-5 py-6 items-center">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data.user.image ?? ""} />
            </Avatar>
            <h2>{data.user.name}</h2>
          </div>
          <Button variant="secondary" size="icon">
            <LogOutIcon size={18} onClick={handleLogout} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col px-5 py-6 gap-3">
          <div className="flex items-center gap-2">
            <UserIcon />
            <h2>Olá, faça seu login!</h2>
          </div>
          <Button
            variant="secondary"
            onClick={handleLogin}
            className="w-full justify-start"
          >
            <LogInIcon className="mr-2" size={18} />
            Fazer Login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link href="/">
            <HomeIcon className="mr-2" size={18} />
            Início
          </Link>
        </Button>

        {data?.user && (
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/bookings">
              <CalendarIcon className="mr-2" size={18} />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
