"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const db_config_1 = __importDefault(require("../config/db.config"));
//So for this signup we will first do the following steps 
//1. we create the user
const createUser = async (req, res) => {
    const { email, password } = req.body;
    const findUser = await db_config_1.default.user_Signup.findUnique({
        where: {
            email: email
        }
    });
    if (findUser) {
        return res.json({ status: 200, message: "email already exist " });
    }
    const newUser = await db_config_1.default.user_Signup.create({
        data: {
            email: email,
            password: password
        }
    });
    return res.json({ status: 200, message: "sucees fully created", data: newUser });
};
exports.createUser = createUser;
