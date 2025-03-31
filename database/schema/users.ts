import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
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
    .notNull(),
  jobSubmissionNotifPref: varchar("job_submission_notif_pref")
    .default("enabled")
    .notNull(),
  isNewUser: boolean("is_new_user").default(true).notNull(),
});
