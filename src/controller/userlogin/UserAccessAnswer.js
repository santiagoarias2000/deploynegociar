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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserAccessAnswer {
    static process(register, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (register != null) {
                console.log(register);
                ///vamos a crear el token
                const miToken = jsonwebtoken_1.default.sign({ Name: register.nameUser, LastName: register.lastnameUser, role: register.nameRol, dosDev: 'eso somos' }, 'LaClaveVaAqui', { expiresIn: '8h' });
                return res.status(200).json({ miToken: miToken });
            }
            else {
                return res.status(401).json({ mensaje: 'Usuario incorrecto o contraseña incorrecta' });
            }
        });
    }
}
exports.default = UserAccessAnswer;
