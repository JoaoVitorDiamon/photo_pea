import { createId } from "@paralleldrive/cuid2";

import { pgTable, timestamp,text,} from "drizzle-orm/pg-core";
import { } from "stream/consumers";


export const images = pgTable("Imagens", {
    id: text('id').primaryKey()
        .$defaultFn(() => createId()),
   createdAt: timestamp('created_at').defaultNow(),
   base64: text('base64').notNull(),
   qrcode: text('qrcode'),
})
