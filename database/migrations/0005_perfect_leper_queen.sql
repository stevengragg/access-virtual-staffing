ALTER TABLE "users" ADD COLUMN "api_token" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "text" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "isNewUser" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "job_search_status" text;