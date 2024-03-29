import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { Service } from "@prisma/client/edge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);
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
          <ServiceItem
            barbershop={barbershop}
            service={service}
            key={service.id}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </>
  );
};

export default BarbershopDetailsPage;
