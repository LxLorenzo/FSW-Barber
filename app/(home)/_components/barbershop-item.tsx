import { Card, CardContent, CardTitle } from "@/app/_components/ui/card";
import Image from "next/image";
import { Barbershop } from "@prisma/client";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { StarIcon } from "lucide-react";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="relative w-full h-[159px]">
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className="bg-[#221c3d] flex items-center gap-1"
            >
              <StarIcon size={12} className="text-primary fill-primary" />
              <span className="text-xs">5.0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            fill
            sizes="100vw"
            alt={barbershop.name}
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
        <div className="px-2 pb-3">
          <h2 className="font-medium mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button variant="secondary" className="w-full mt-3">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
