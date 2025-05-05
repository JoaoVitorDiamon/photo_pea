import fastify from "fastify";
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from "fastify-type-provider-zod";
import cors from "@fastify/cors";
import {createImages } from "./routes/images/create-images";
import { findByIdImages } from "./routes/images/find-by-id-images";
import { getImages } from "./routes/images/get-all-images";

export const app = fastify({
    bodyLimit: 50 * 1024 * 1024
}).withTypeProvider<ZodTypeProvider>();
app.register(cors, {
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: [
		"Content-Type",
		"Authorization",
        "ngrok-skip-browser-warning",
	],


}

);

app.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
	if (err) {
		console.error("Erro ao iniciar o servidor:", err);
		process.exit(1);
	}
	console.log(`Servidor HTTP rodando em ${address}`);
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


app.register(createImages);
app.register(getImages);
app.register(findByIdImages);
