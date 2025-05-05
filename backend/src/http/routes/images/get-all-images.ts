import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getAllImages } from "../../../functions/Image/get-all-images";

export const getImages: FastifyPluginAsyncZod = async (app) => {
    app.get("/images", async (_req, reply) => {
        const getAllImage = await getAllImages();
        reply.status(200).send(getAllImage);
    });
};
