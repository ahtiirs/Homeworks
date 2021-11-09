"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var controller_1 = __importDefault(require("./components/courses/controller"));
var controller_2 = __importDefault(require("./components/groups/controller"));
var controller_3 = __importDefault(require("./components/homeworks/controller"));
var controller_4 = __importDefault(require("./components/teachers/controller"));
var responseCodes_1 = __importDefault(require("./components/general/responseCodes"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// pordi nr mida api kuulab 
var port = 3000;
/**
* API test endpoint
*/
app.get('/ping', function (req, res) {
    res.status(responseCodes_1.default.ok).json({
        message: 'Alive',
    });
});
// ************************ group ******************
app.get('/groups', controller_2.default.getAllGroups);
app.get('/groups/:id', controller_2.default.getGroupById);
app.delete('/groups/:id', controller_2.default.deleteGroupById);
app.post('/groups', controller_2.default.addGroup);
app.patch('/groups/:id', controller_2.default.updateGroupById);
// *********************** course ******************
app.get('/courses', controller_1.default.getAll);
app.get('/courses/:id', controller_1.default.getById);
app.delete('/courses/:id', controller_1.default.deleteById);
app.post('/courses', controller_1.default.add);
app.patch('/courses/:id', controller_1.default.updateById);
/** --------------------------------------------------------------------------------------- */
app.get('/homeworks', controller_3.default.getAll);
app.get('/homeworks/:id', controller_3.default.getById);
app.delete('/homeworks/:id', controller_3.default.deleteById);
app.post('/homeworks', controller_3.default.add);
app.patch('/homeworks/:id', controller_3.default.updateById);
// *********************** teacher *****************
app.get('/teachers', controller_4.default.getAll);
app.get('/teachers/:id', controller_4.default.getById);
app.delete('/teachers/:id', controller_4.default.deleteById);
app.post('/teachers', controller_4.default.add);
app.patch('/teachers/:id', controller_4.default.updateById);
/**
* Start listening
*/
app.listen(port, function () {
    // eslint-disable-next-line no-console
    console.log("Server is running on port: " + port);
});
