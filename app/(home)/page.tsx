import { format } from "date-fns/format";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";

export default function Home() {
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
    </>
  );
}
