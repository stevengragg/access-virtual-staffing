ALTER TABLE "users" RENAME COLUMN "auth0_id" TO "user_id";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_auth0_id_unique";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_user_id_unique" UNIQUE("user_id");