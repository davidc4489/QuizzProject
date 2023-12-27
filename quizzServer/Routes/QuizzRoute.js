import express from "express";

import {getQuizz} from "../Controllers/Quizz.js";

const router = express.Router();

router.get("/:id", getQuizz)

export default router;