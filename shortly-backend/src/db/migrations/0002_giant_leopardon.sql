ALTER TABLE "urls" DROP CONSTRAINT "urls_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "urls" ADD COLUMN "upated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "urls" ADD CONSTRAINT "urls_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;