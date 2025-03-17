import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
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
});
