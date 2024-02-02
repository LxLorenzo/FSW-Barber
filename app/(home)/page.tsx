import { format } from "date-fns/format";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";
import { Barbershop } from "@prisma/client/edge";
import { Suspense } from "react";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  return (
    <>
      <Header></Header>
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Lorenzo!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 mb-3 font-medium tracking-wide">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase text-gray-400 mb-3 font-medium tracking-wide">
          Recomendados
        </h2>
        <div className="flex px-5 overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs uppercase text-gray-400 mb-3 font-medium tracking-wide">
          Populares
        </h2>
        <div className="flex px-5 overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: Barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  );
}
