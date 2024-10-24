import { connect } from "mongoose";

// Conecta con la base de datos MongoDB
export const connectDB = async () => {
    console.log(process.env.MONGODB_URI)
    try {
        await connect(process.env.MONGODB_URI || "");
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar con MongoDB", error);
    }
};