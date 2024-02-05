-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_barbershopId_fkey";

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "barbershopId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "Barbershop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
