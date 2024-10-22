import dotenv from "dotenv";
import { paths } from "../utils";

export const config = () => {
    dotenv.config(paths.env);
};