CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" text NOT NULL,
	"email" text NOT NULL,
	"profile_image" text,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"name" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "assessment_tests" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" integer,
	"link" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" integer,
	"link" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "emails" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" integer,
	"address" text NOT NULL,
	"type" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "file_uploads" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" integer,
	"type" text NOT NULL,
	"link" text NOT NULL,
	"podio_field_id" text NOT NULL,
	"filename" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "phones" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" integer,
	"number" varchar(20) NOT NULL,
	"type" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_title" text NOT NULL,
	"user_id" integer NOT NULL,
	"why_fit" text NOT NULL,
	"what_strengths" text NOT NULL,
	"what_need_improvement" text NOT NULL,
	"address" text NOT NULL,
	"skype_id" text NOT NULL,
	"date_of_birth" date NOT NULL,
	"has_paypal" text NOT NULL,
	"number_of_children" text NOT NULL,
	"internet_provider" text NOT NULL,
	"number_of_monitors" text NOT NULL,
	"number_of_experience" text NOT NULL,
	"salary_unit" text NOT NULL,
	"desired_salary" text NOT NULL,
	"how_know" text,
	"how_hear" text,
	"someone_name" text,
	"referrer" text
);
--> statement-breakpoint
CREATE TABLE "video_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" integer,
	"link" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "work_samples" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_id" integer,
	"link" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "assessment_tests" ADD CONSTRAINT "assessment_tests_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_links" ADD CONSTRAINT "content_links_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emails" ADD CONSTRAINT "emails_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "file_uploads" ADD CONSTRAINT "file_uploads_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "phones" ADD CONSTRAINT "phones_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "video_links" ADD CONSTRAINT "video_links_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "work_samples" ADD CONSTRAINT "work_samples_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;