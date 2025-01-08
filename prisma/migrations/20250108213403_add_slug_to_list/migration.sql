/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `lists` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `lists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lists" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "lists_slug_key" ON "lists"("slug");
