import { db } from "../../db"
import { images } from "../../db/schemas/images"


interface ImageRequest {
  base64: string
  qrcode?: string
}


export const createImage = async ({base64,qrcode}: ImageRequest) => {
  const [resultImage] = await db
    .insert(images)
    .values({
      base64,
      qrcode
    })
    .returning()

  return resultImage.id
}
