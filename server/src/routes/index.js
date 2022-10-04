import Router from "express";
import dataRoutes from "./dataRouters.js";

const router = Router();

router.use('/data', dataRoutes);

export default router;
