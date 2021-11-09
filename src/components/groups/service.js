"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("./../../db"));
var responseCodes_1 = __importDefault(require("../general/responseCodes"));
var groupsService = {
    getAllgroups: function () {
        var groups = db_1.default.groups;
        return groups;
    },
    getGroupById: function (req, res) {
        var id = parseInt(req.params.id, 10);
        if (!id) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'No valid id provided',
            });
        }
        var group = db_1.default.groups.find(function (element) { return element.id === id; });
        if (!group) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: "No group found with id: " + id,
            });
        }
        return res.status(responseCodes_1.default.ok).json({
            group: group,
        });
    },
    deleteGroupById: function (req, res) {
        var id = parseInt(req.params.id, 10);
        if (!id) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'No valid id provided',
            });
        }
        var index = db_1.default.groups.findIndex(function (element) { return element.id === id; });
        if (index < 0) {
            return res.status(responseCodes_1.default.badRequest).json({
                message: "Group not found with id: " + id,
            });
        }
        db_1.default.groups.splice(index, 1);
        return res.status(responseCodes_1.default.noContent).json({});
    },
    addGroup: function (req, res) {
        var Name = req.body.Name;
        if (!Name) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'Group name is required',
            });
        }
        var id = db_1.default.groups.length + 1;
        db_1.default.groups.push({
            id: id,
            Name: Name
        });
        return res.status(responseCodes_1.default.created).json({
            id: id,
        });
    },
    updateGroupById: function (req, res) {
        var id = parseInt(req.params.id, 10);
        var Name = req.body.Name;
        if (!id) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'No valid id provided',
            });
        }
        if (!Name) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'Nothing to update',
            });
        }
        var index = db_1.default.groups.findIndex(function (element) { return element.id === id; });
        if (index < 0) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: "No group found with id: " + id,
            });
        }
        if (Name) {
            db_1.default.groups[index].Name = Name;
        }
        return res.status(responseCodes_1.default.noContent).json({});
    },
};
exports.default = groupsService;
