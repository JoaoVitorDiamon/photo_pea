import z from "zod";
import { createImage } from "../../../functions/Image/create-image";
import { createQrCode } from "../../../functions/Image/create-qrcode";
import { app } from "../../server";
import { updateImage } from "../../../functions/Image/update-image";

export const createImages = async () => {
  app.post('/images', {
    schema: {
      body: z.object({
        base64: z.string({ message: "base64 is required" }),
      }),
    },
  }, async (req, reply) => {
    const { base64 } = req.body;
    const id = await createImage({ base64 });
    const qrcode = await createQrCode(id) as string;
    await updateImage({ id, qrcode });

    reply.status(201).send({
      message: "Image created successfully",
      qrcode,
    });
  });
};
