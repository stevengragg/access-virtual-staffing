import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").unique().notNull(),
  email: text("email").unique().notNull(),
  profileImage: text("profile_image"),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow(),
  provider: text("provider"),
  jobRecommendationNotifPref: varchar("job_recommendation_notif_pref")
    .default("enabled")
    .notNull(), //enabled,disabled
  jobSubmissionNotifPref: varchar("job_submission_notif_pref")
    .default("enabled")
    .notNull(), //enabed,disabled
  apiToken: text("api_token"),
  apiTokenExpiration: timestamp("api_token_expiration"),
  isNewUser: boolean("is_new_user").default(true).notNull(),
  jobSearchStatus: text("job_search_status")
    .default("ready_to_interview")
    .notNull(), //ready_to_interview,open_to_offers,closed_to_offers
});
