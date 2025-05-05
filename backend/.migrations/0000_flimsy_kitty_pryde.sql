CREATE TABLE IF NOT EXISTS "Imagens" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"base64" text NOT NULL,
	"qrcode" text NOT NULL
);
