CREATE TABLE `sites` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`url` text NOT NULL,
	`skills` text NOT NULL,
	`image_name` text NOT NULL,
	`number_of_image` integer DEFAULT 4
);
