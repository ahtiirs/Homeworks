"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responseCodes_1 = __importDefault(require("../general/responseCodes"));
var service_1 = __importDefault(require("./service"));
var groupsController = {
    getAllGroups: function (req, res) {
        var groupsList = service_1.default.getAllgroups();
        return res.status(responseCodes_1.default.ok).json({
            groupsList: groupsList,
        });
    },
    getGroupById: function (req, res) {
        var Group = service_1.default.getGroupById(req, res);
        return Group;
    },
    deleteGroupById: function (req, res) {
        var Group = service_1.default.deleteGroupById(req, res);
        return Group;
    },
    addGroup: function (req, res) {
        var Group = service_1.default.addGroup(req, res);
        return Group;
    },
    updateGroupById: function (req, res) {
        var Group = service_1.default.updateGroupById(req, res);
        return Group;
    },
};
exports.default = groupsController;
