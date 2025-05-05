import { db } from "../../db";
import { images } from "../../db/schemas/images"



export const getAllImages = async () => {
    const listOFImages = await db
        .select({
            id: images.id,
            timestamp: images.createdAt,
        })
        .from(images);

    return listOFImages;
}
