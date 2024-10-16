import express from "express";
import { connectDB } from "./config/mongoose.config.js";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";

import { ErrorHandle } from "./errors/errHandle.js";
import { Logger } from "./utils/logger.js";

connectDB();
const server = express();
app.use("/api", router);
// Decodificadores del BODY
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// Decodificadores de Cookies
server.use(cookieParser());


// Middleware de manejo de errores
server.use(ErrorHandle);
// Método oyente de solicitudes
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => Logger.info(`Listening on ${PORT}`));