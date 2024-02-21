/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `LoginUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AddressUser" ALTER COLUMN "complement" DROP NOT NULL,
ALTER COLUMN "observation" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserProfile" ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "dateBirth" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LoginUsers_user_key" ON "LoginUsers"("user");
