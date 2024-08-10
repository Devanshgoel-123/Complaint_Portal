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
const complaintRouter = express_1.default.Router();
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
var category;
(function (category) {
    category["carpenter"] = "carpenter";
    category["plumber"] = "plumber";
    category["cleaner"] = "cleaner";
})(category || (category = {}));
const complaintSchema = zod_1.z.object({
    category: zod_1.z.nativeEnum(category),
    subCategory: zod_1.z.string(),
});
complaintRouter.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const complaintBody = req.body;
    const { success } = complaintSchema.safeParse(complaintBody);
    if (success) {
        const complaint = yield prisma.complaint.create({
            data: complaintBody
        });
        if (complaint) {
            return res.status(200).json({
                message: "Complaint registered SuccessFully"
            });
        }
        else {
            res.status(400).json({
                message: "Server Error couldn't register Complaint"
            });
        }
    }
    else {
        res.status(401).json({
            message: "Incorrect Inputs"
        });
    }
}));
exports.default = complaintRouter;
