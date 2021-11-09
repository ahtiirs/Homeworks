"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("./../../db"));
var responseCodes_1 = __importDefault(require("../general/responseCodes"));
var coursesService = {
    getAll: function (req, res) {
        var homeworks = db_1.default.homeworks;
        return res.status(responseCodes_1.default.ok).json({
            homeworks: homeworks,
        });
    },
    getById: function (req, res) {
        var id = parseInt(req.params.id, 10);
        if (!id) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'No valid id provided',
            });
        }
        var homework = db_1.default.homeworks.find(function (element) { return element.id === id; });
        if (!homework) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: "No homework found with id: " + id,
            });
        }
        return res.status(responseCodes_1.default.ok).json({
            homework: homework,
        });
    },
    deleteById: function (req, res) {
        var id = parseInt(req.params.id, 10);
        if (!id) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'No valid id provided',
            });
        }
        var index = db_1.default.homeworks.findIndex(function (element) { return element.id === id; });
        if (index < 0) {
            return res.status(responseCodes_1.default.badRequest).json({
                message: "Homework not found with id: " + id,
            });
        }
        db_1.default.homeworks.splice(index, 1);
        return res.status(responseCodes_1.default.noContent).json({});
    },
    add: function (req, res) {
        var _a = req.body, group = _a.group, teacher = _a.teacher, Name = _a.Name, dueDate = _a.dueDate;
        if (!Name) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'Homework is required',
            });
        }
        if (!dueDate) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'Due date is required',
            });
        }
        var id = db_1.default.teachers.length + 1;
        db_1.default.homeworks.push({
            id: id,
            group: group,
            teacher: teacher,
            Name: Name,
            dueDate: dueDate
        });
        return res.status(responseCodes_1.default.created).json({
            id: id,
        });
    },
    updateById: function (req, res) {
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
        var index = db_1.default.teachers.findIndex(function (element) { return element.id === id; });
        if (index < 0) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: "No teacher found with id: " + id,
            });
        }
        if (Name) {
            db_1.default.teachers[index].Name = Name;
        }
        return res.status(responseCodes_1.default.noContent).json({});
    },
};
exports.default = coursesService;
