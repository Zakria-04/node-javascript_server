import { Router } from "express";
import { createUser, loginUser } from "../Controller/user.controller.js";

const useRouter = Router();

useRouter.post("/createUser", createUser);
useRouter.post("/loginUser", loginUser);

export default useRouter;
