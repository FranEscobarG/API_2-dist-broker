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
class UserController {
    constructor(getUserListUseCase, createUserUseCase, getUserByID) {
        this.getUserListUseCase = getUserListUseCase;
        this.createUserUseCase = createUserUseCase;
        this.getUserByID = getUserByID;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userPayload = req.body;
                const user = yield this.createUserUseCase.execute(userPayload);
                res.status(201).json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.getUserListUseCase.execute();
                res.json(users); // Enviar la respuesta JSON con los datos de usuarios
            }
            catch (error) {
                next(error);
            }
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.getUserByID.run(req.params.id);
                res.json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UserController;
