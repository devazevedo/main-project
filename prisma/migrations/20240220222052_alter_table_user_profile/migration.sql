/*
  Warnings:

  - You are about to drop the column `accessLevel` on the `LoginUsers` table. All the data in the column will be lost.
  - Added the required column `accessLevel` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LoginUsers" DROP COLUMN "accessLevel";

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "accessLevel" "AccessLevelName" NOT NULL;
