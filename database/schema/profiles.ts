import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  date,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { usersTable } from "./users";

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  jobTitle: text("job_title").notNull(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  whyFit: text("why_fit").notNull(),
  whatStrengths: text("what_strengths").notNull(),
  whatNeedImprovement: text("what_need_improvement").notNull(),
  address: text("address").notNull(),
  skypeId: text("skype_id").notNull(),
  dateOfBirth: date("date_of_birth", { mode: "date" }).notNull(),
  hasPaypal: text("has_paypal").notNull(),
  numberOfChildren: text("number_of_children").notNull(),
  internetProvider: text("internet_provider").notNull(),
  numberOfMonitors: text("number_of_monitors").notNull(),
  numberOfExperience: text("number_of_experience").notNull(),
  salaryUnit: text("salary_unit").notNull(),
  desiredSalary: text("desired_salary").notNull(),
  howHear: text("how_hear"),
  referrer: text("referrer"),
});

export const phones = pgTable("phones", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  number: varchar("number", { length: 20 }).notNull(),
  type: text("type").notNull(),
});

export const emails = pgTable("emails", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  address: text("address").notNull(),
  type: text("type").notNull(),
});

export const contentLinks = pgTable("content_links", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  link: text("link").notNull(),
});

// export const videoLinks = pgTable("video_links", {
//   id: serial("id").primaryKey(),
//   profileId: integer("profile_id").references(() => profiles.id, {
//     onDelete: "cascade",
//   }),
//   link: text("link").notNull(),
// });

export const assessmentTests = pgTable("assessment_tests", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  link: text("link").notNull(),
});

export const workSamples = pgTable("work_samples", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  link: text("link").notNull(),
});

export const fileUploads = pgTable("file_uploads", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  type: text("type").notNull(),
  link: text("link").notNull(),
  podioFileId: text("podio_field_id").notNull(),
  filename: text("filename").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  profiles: many(profiles),
}));

export const profilesRelations = relations(profiles, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [profiles.userId],
    references: [usersTable.id],
  }),
  phones: many(phones),
  emails: many(emails),
  contentLinks: many(contentLinks),
  // videoLinks: many(videoLinks),
  assessmentTests: many(assessmentTests),
  workSamples: many(workSamples),
  fileUploads: many(fileUploads),
}));
