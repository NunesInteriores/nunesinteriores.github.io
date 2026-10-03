CREATE TABLE `record_history` (
	`id` text PRIMARY KEY NOT NULL,
	`record_id` text NOT NULL,
	`client_id` text DEFAULT '' NOT NULL,
	`project_id` text DEFAULT '' NOT NULL,
	`kind` text NOT NULL,
	`title` text NOT NULL,
	`action` text NOT NULL,
	`changed` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_record_history_record` ON `record_history` (`record_id`);--> statement-breakpoint
CREATE INDEX `idx_record_history_client` ON `record_history` (`client_id`);--> statement-breakpoint
CREATE INDEX `idx_record_history_project` ON `record_history` (`project_id`);