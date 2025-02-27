import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
});

export { usersTable };
