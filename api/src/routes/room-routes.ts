import { Router } from "express";

import { getRoomStatus } from "../controllers/room-controller";

const router = Router();

router.route("/:id/status").get(getRoomStatus);

export default router;
