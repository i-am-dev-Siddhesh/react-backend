import express from "express";

import { checkApiKey } from "../middlewares/auth";

import {
  checkServerHealth,
  getMockData,
} from "../controllers/general.controller";

const router = express.Router({ mergeParams: true });

router.route("/").get(checkApiKey, checkServerHealth);
router.route("/mockdata").get(checkApiKey, getMockData);

export default router;
