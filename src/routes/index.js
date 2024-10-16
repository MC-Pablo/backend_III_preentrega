import { Router } from "express";
import usersRouter from "./users.router.js";
import sessionsRouter from "./sessions.router.js";
import mocksRouter from "./mock.router.js";

const router = Router();
router.use("/api/users", usersRouter);
router.use("/api/sessions", sessionsRouter);
router.use("/api/mocks", mocksRouter);

export default router;