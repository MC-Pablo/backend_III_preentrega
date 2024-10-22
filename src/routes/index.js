import { Router } from "express";
import usersRouter from "./users.route.js";
import sessionsRouter from "./sessions.route.js";
import mocksRouter from "./mocks.route.js";

const router = Router();
router.use("/api/users", usersRouter);
router.use("/api/sessions", sessionsRouter);
router.use("/api/mocks", mocksRouter);

export default router;