import {
  pgTable,
  serial,
  text,
  integer,
  date,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";
import { profiles } from "./profiles";

export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  profileId: integer("profile_id")
    .references(() => profiles.id)
    .notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
  status: text("status").notNull(), // e.g., pending, approved, rejected
  progress: text("progress").notNull(), // e.g., in_review, completed
  podioItemId: text("podio_item_id"),
});

export const jobApplicationsRelations = relations(
  jobApplications,
  ({ one }) => ({
    user: one(users, {
      fields: [jobApplications.userId],
      references: [users.id],
    }),
    profile: one(profiles, {
      fields: [jobApplications.profileId],
      references: [profiles.id],
    }),
  })
);
