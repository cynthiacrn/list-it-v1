/*
  Warnings:

  - Added the required column `url` to the `list_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "list_items" ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "url" TEXT NOT NULL;
