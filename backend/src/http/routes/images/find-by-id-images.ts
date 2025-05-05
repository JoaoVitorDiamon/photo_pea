
import z from "zod";
import { getByIdImage } from "../../../functions/Image/get-by-id-image";
import { app } from "../../server";


export const findByIdImages = async () => {
    app.get("/images/:id",{

        schema: {
            params: z.object({
                id: z.string({ message: "id is required" }),
            }),
        },
    }, async (req, res) => {
        const { id } = req.params;

        const image = await getByIdImage(id);
        if (!image || image.length === 0) {
            return res.status(404).send("Imagem não encontrada");
        }

        const base64 = image[0].base64;
        const base64Data = base64.replace(/^data:image\/jpeg;base64,/, "");
        const buffer = Buffer.from(base64Data, "base64");

        res.header("Content-Type", "image/png");
        res.header("Content-Disposition", "attachment; filename=imagem.jpg");
        res.send(buffer);
    });
}
