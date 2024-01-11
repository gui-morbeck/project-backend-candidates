import express from "express";

import candidateController from "../controllers/candidate.controller.js";
import globalMiddleware from "../middlewares/global.middleware.js";

const router = express.Router();

router.post("/", globalMiddleware.validData, globalMiddleware.validCpf, candidateController.createCandidate);
router.get("/search", globalMiddleware.validQueryFilter, candidateController.findCandidatesBySkills)

export default router;