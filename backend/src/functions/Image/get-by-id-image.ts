import { eq } from "drizzle-orm"
import { db } from "../../db"
import { images } from "../../db/schemas/images"

export const getByIdImage = async (id: string) => {
const image = await db
        .select({
        id: images.id,
        base64: images.base64,
        qrcode: images.qrcode,
        })
        .from(images)
        .where(eq(images.id, id))

    return image
    }
