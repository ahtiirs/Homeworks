"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responseCodes_1 = __importDefault(require("../general/responseCodes"));
var service_1 = __importDefault(require("./service"));
var teachersController = {
    getAll: function (req, res) {
        var data = service_1.default.getAll(req, res);
        return res.status(responseCodes_1.default.ok).json({
            data: data,
        });
    },
    getById: function (req, res) {
        var data = service_1.default.getById(req, res);
        return data;
    },
    deleteById: function (req, res) {
        var data = service_1.default.deleteById(req, res);
        return data;
    },
    add: function (req, res) {
        var data = service_1.default.add(req, res);
        return data;
    },
    updateById: function (req, res) {
        var data = service_1.default.updateById(req, res);
        return data;
    },
};
exports.default = teachersController;
