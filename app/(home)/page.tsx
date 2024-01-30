import { format } from "date-fns/format";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

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
    </>
  );
}
