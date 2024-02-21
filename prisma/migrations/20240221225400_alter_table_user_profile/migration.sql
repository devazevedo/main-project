-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_loginUsersId_fkey";

-- AlterTable
ALTER TABLE "AddressUser" ALTER COLUMN "neighborhood" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserProfile" ALTER COLUMN "loginUsersId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_loginUsersId_fkey" FOREIGN KEY ("loginUsersId") REFERENCES "LoginUsers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
