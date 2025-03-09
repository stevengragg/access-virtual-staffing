import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: text("user_id").unique().notNull(),
  email: text("email").unique().notNull(),
  profileImage: text("profile_image"),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow(),
  phoneNumber: varchar({ length: 20 }),
});

export { usersTable };
