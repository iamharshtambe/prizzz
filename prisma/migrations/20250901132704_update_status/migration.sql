/*
  Warnings:

  - Made the column `status` on table `Todo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Todo" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" SET DEFAULT false;
