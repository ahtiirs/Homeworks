"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("./../../db"));
var responseCodes_1 = __importDefault(require("../general/responseCodes"));
var teachersService = {
    getAll: function (req, res) {
        var teachers = db_1.default.teachers;
        return res.status(responseCodes_1.default.ok).json({
            teachers: teachers,
        });
    },
    getById: function (req, res) {
        var id = parseInt(req.params.id, 10);
        if (!id) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'No valid id provided',
            });
        }
        var teacher = db_1.default.teachers.find(function (element) { return element.id === id; });
        if (!teacher) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: "No user found with id: " + id,
            });
        }
        return res.status(responseCodes_1.default.ok).json({
            teacher: teacher,
        });
    },
    deleteById: function (req, res) {
        var id = parseInt(req.params.id, 10);
        if (!id) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'No valid id provided',
            });
        }
        var index = db_1.default.teachers.findIndex(function (element) { return element.id === id; });
        if (index < 0) {
            return res.status(responseCodes_1.default.badRequest).json({
                message: "Course not found with id: " + id,
            });
        }
        db_1.default.teachers.splice(index, 1);
        return res.status(responseCodes_1.default.noContent).json({});
    },
    add: function (req, res) {
        var Name = req.body.Name;
        if (!Name) {
            return res.status(responseCodes_1.default.badRequest).json({
                error: 'Course name is required',
            });
        }
        var id = db_1.default.teachers.length + 1;
        db_1.default.teachers.push({
            id: id,
            Name: Name
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
exports.default = teachersService;
