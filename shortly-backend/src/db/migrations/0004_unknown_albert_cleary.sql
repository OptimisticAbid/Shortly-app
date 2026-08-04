CREATE INDEX "url_id_idx" ON "clicks" USING btree ("url_id");--> statement-breakpoint
CREATE INDEX "url_analytics_idx" ON "clicks" USING btree ("url_id","clicked_at");--> statement-breakpoint
CREATE INDEX "user_idx" ON "urls" USING btree ("user_id");