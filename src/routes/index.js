"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signupController_1 = require("../controllers/signupController");
const router = (0, express_1.Router)();
router.use('/api/user', signupController_1.createUser);
exports.default = router;
