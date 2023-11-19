import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const sitesTable = sqliteTable("sites", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  skills: text("skills").notNull(),
  imageName: text("image_name").notNull(),
  numberOfImage: integer("number_of_image").notNull().default(4)
});