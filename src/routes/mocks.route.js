import { Router } from "express";
import { generateUsersMock } from "../mocks/user.mock.js";
import { UserServices } from "../services/user.services.js";


const userServices = new UserServices();
const router = Router();

router.get("/mockingusers", async (req, res, next) => {
  try {
    const users = generateUsersMock(50);
    const response = await userServices.createMany(users);

    res.status(201).json({ status: "ok", payload: response });
  } catch (error) {
    error.path = "[GET] api/mocks/mockingusers";
    next(error);
  }
});

export default router;