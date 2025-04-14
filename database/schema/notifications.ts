import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users"; // Assuming users schema is defined in users.ts
import { relations } from "drizzle-orm"; // Import relations

export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
  type: text("type"), // info, jobs, job_submissions
  linkTo: text("link_to"),
});

// Define relationships
export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
}));
