"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const user_1 = __importDefault(require("./user"));
const Complaint_1 = __importDefault(require("./Complaint"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3000;
app.use("/user", user_1.default);
app.use("/complaint", Complaint_1.default);
app.listen(port, () => {
    console.log("Listening on port 3000");
});
