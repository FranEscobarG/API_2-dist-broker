"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.getUserById = exports.createUserUseCase = exports.getUserListUseCase = void 0;
// CONTIENE LA INSTANCIA DE TODAS LAS DEPENDENCIAS QUE SE ESTARAN UTILIZANDO
const create_user_usecase_1 = __importDefault(require("../application/create-user-usecase"));
const get_userById_usecase_1 = require("../application/get-userById-usecase");
const get_userlist_usecase_1 = __importDefault(require("../application/get-userlist-usecase"));
const mysql_user_repository_1 = require("./mysql-user-repository");
const user_controller_1 = __importDefault(require("./user-controller"));
const mySqlUserRepository = new mysql_user_repository_1.MySQLUserRepository(); // Esta implemeta el userRepository que necesita el caso de uso
exports.getUserListUseCase = new get_userlist_usecase_1.default(mySqlUserRepository); //Instancia del Caso de Uso - Se le pasa el user-repository que necesita
exports.createUserUseCase = new create_user_usecase_1.default(mySqlUserRepository);
exports.getUserById = new get_userById_usecase_1.GetUserByID(mySqlUserRepository);
exports.userController = new user_controller_1.default(exports.getUserListUseCase, exports.createUserUseCase, exports.getUserById); // Dependencia de controller que necesita que le llegue el welcomeEmailSender
// ya para poder invocar este caso de uso desde la ruta
