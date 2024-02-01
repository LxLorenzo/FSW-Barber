import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { Service } from "@prisma/client/edge";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop || !params.id) {
    return null;
  }
  return (
    <>
      <BarbershopInfo barbershop={barbershop} />
      <div className="px-5 py-6 flex flex-col gap-4">
        {barbershop.services.map((service: Service) => (
          <ServiceItem service={service} key={service.id} />
        ))}
      </div>
    </>
  );
};

export default BarbershopDetailsPage;
