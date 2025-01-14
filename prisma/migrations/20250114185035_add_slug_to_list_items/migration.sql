/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `list_items` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `list_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "list_items" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "list_items_slug_key" ON "list_items"("slug");
