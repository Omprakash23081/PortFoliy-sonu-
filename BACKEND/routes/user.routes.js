import { Router } from "express";
import { createContact, getStats } from "../controller/contact.controller.js";
const router = Router();

router.route("/contact").post(createContact);

//admin router
router.route("/stats").get(getStats);

export default router;
