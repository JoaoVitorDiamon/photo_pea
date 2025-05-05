import { eq } from "drizzle-orm"
import { db } from "../../db"
import { images } from "../../db/schemas/images"


interface UpdateRequest {
    id: string
    qrcode?: string ;
}


export const updateImage = async ({ id,qrcode }: UpdateRequest) => {
    const [resultImage] = await db
        .update(images)
        .set({
            qrcode
        })
        .where(eq(images.id, id))
        .returning()

    return resultImage.qrcode
}
