-- CreateTable
CREATE TABLE "queuesCustomer" (
    "id" SERIAL NOT NULL,
    "queueId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "isWaiting" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "queuesCustomer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "queuesCustomer" ADD CONSTRAINT "queuesCustomer_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "queues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
