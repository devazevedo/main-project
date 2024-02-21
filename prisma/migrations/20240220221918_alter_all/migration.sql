/*
  Warnings:

  - You are about to drop the column `addressUserId` on the `UserProfile` table. All the data in the column will be lost.
  - Added the required column `userProfileId` to the `AddressUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_addressUserId_fkey";

-- AlterTable
ALTER TABLE "AddressUser" ADD COLUMN     "userProfileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "addressUserId";

-- AddForeignKey
ALTER TABLE "AddressUser" ADD CONSTRAINT "AddressUser_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
