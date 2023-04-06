/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Roommate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Roommate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Roommate" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Roommate_email_key" ON "Roommate"("email");
