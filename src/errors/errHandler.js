import { Logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  Logger.error(`${err.path} ${err.message}`);
  const message = status === 500 ? "Internal server error" : err.message;
  res.status(status).json({ status: "error", error: message });
};
