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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLUserRepository = void 0;
const mysql_1 = require("./mysql");
const user_1 = require("../domain/user");
class MySQLUserRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM users';
            const [rows] = yield (0, mysql_1.query)(sql, []);
            console.log('=>', rows);
            let result = Object.values(JSON.parse(JSON.stringify(rows)));
            return result.map((row) => new user_1.User(row.id, row.name, row.email, row.password));
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            const params = [user.name, user.email, user.password];
            yield (0, mysql_1.query)(sql, params);
            return user;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM users WHERE id = ?';
            const params = [id];
            const [rows] = yield (0, mysql_1.query)(sql, params);
            if (!rows) {
                return null; // cuando no se encontró ningún usuario con el ID 
            }
            // const userRow = rows[0];
            let [result] = JSON.parse(JSON.stringify(rows));
            const user = new user_1.User(result[0].id, result[0].name, result[0].email, result[0].password);
            return user;
        });
    }
}
exports.MySQLUserRepository = MySQLUserRepository;
