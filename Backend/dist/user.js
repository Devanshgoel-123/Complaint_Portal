"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    hostel: zod_1.z.string(),
    room: zod_1.z.number().int().gt(5)
});
userRouter.get("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { success } = userSchema.safeParse(body);
    if (success) {
        const findUser = yield prisma.user.findFirst({
            where: {
                email: body.email
            },
        });
        if (findUser) {
            res.status(401).json({
                message: "User already there"
            });
        }
        else {
            try {
                const user = yield prisma.user.create({
                    data: body
                });
                res.status(200).json({
                    message: "You have been registered"
                });
            }
            catch (err) {
                res.status(401).json({
                    message: "Some error occured"
                });
            }
        }
    }
    else {
        return res.status(401).json({
            message: "Incorrect Inputs"
        });
    }
}));
exports.default = userRouter;
