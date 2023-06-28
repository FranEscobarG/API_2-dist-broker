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
exports.query = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config = {
    host: '3.217.106.192',
    user: 'fran',
    database: 'bdbroker',
    password: 'passf123',
};
const query = (sql, params) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Mysql');
    const conn = yield promise_1.default.createConnection(config);
    try {
        const result = yield conn.execute(sql, params);
        return result;
    }
    finally {
        console.log('Todo ok');
        yield conn.end();
    }
});
exports.query = query;
