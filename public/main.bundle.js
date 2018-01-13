webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/-services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/auth';
        this.url = '/api/auth';
        this.isUserLoggedIn = false;
    }
    AuthService.prototype.x_signUp = function (newUser) {
        return this._http.post(this.url + '/register', newUser, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.x_authenticateUser = function (user) {
        return this._http.post(this.url + '/authenticate', user, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.x_storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.x_setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    AuthService.prototype.x_setUserLoggedOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        this.isUserLoggedIn = false;
        console.log('Logged Out');
    };
    AuthService.prototype.x_getUserLoggedIn = function () {
        // return this.isUserLoggedIn;
        return Object(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsService = (function () {
    function CommentsService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/comments';
        this.url = '/api/comments';
    }
    // Отдаем один комментарий по ID комента
    CommentsService.prototype.x_getComment = function (id) {
        return this._http.get(this.url + '/comment/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Отдаем комментарии по ID таска родителя
    CommentsService.prototype.x_getComments = function (id) {
        return this._http.get(this.url + '/task/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.x_createComment = function (data) {
        return this._http.post(this.url + '/create', data, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.x_saveEdit = function (comment) {
        return this._http.put(this.url + '/edit', comment, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.x_deleteComment = function (id) {
        return this._http.delete(this.url + '/delete/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    CommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/desks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesksService = (function () {
    function DesksService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/desks';
        this.url = '/api/desks';
    }
    // Получаем 1 доску по ID
    DesksService.prototype.x_getDesk = function (id) {
        return this._http.get(this.url + '/desk/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Отдаем доски по ID секции родителя
    DesksService.prototype.x_getDesks = function (section_id) {
        return this._http.get(this.url + '/section/' + section_id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Создаем доску для ID секции родителя
    DesksService.prototype.x_createDesk = function (data) {
        return this._http.post(this.url + '/create', data, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Сохраняем редактирование доски
    DesksService.prototype.x_saveEdit = function (desk) {
        return this._http.put(this.url + '/edit', desk, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    DesksService.prototype.x_deleteDesk = function (id) {
        return this._http.delete(this.url + '/delete/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    DesksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], DesksService);
    return DesksService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsService = (function () {
    function ProjectsService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/projects';
        this.url = '/api/projects';
        // Shared сервис
        // Для передачи ID Удаленного проекта
        this.projectDeleted = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.projectDeletedEmitted = this.projectDeleted.asObservable();
    }
    // отдаем проекты для ID команды из БД
    ProjectsService.prototype.x_getProjects = function (team_id) {
        return this._http.get(this.url + '/projects/' + team_id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Отдаем 1 проект по его ID 
    ProjectsService.prototype.x_getProject = function (id) {
        return this._http.get(this.url + '/project/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Создаем проект
    ProjectsService.prototype.x_createProject = function (newProject) {
        return this._http.post(this.url + '/project_add', newProject, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.x_saveEdit = function (data) {
        return this._http.put(this.url + '/edit/' + data.id, data, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.x_deleteProject = function (id) {
        return this._http.delete(this.url + '/delete/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.emitProjectDeleted = function (id) {
        this.projectDeleted.next(id);
    };
    ProjectsService.prototype.x_makeFav = function (P_ID, U_ID, add) {
        var body = {
            p_id: P_ID,
            u_id: U_ID,
            add: add
        };
        return this._http.put(this.url + '/makefav', body, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/sections.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionsService = (function () {
    function SectionsService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/sections';
        this.url = '/api/sections';
    }
    // Получаем одну секцию по ID
    SectionsService.prototype.x_getSection = function (id) {
        return this._http.get(this.url + '/one/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Отдаем массив секций по ID родительского проекта
    SectionsService.prototype.x_getSections = function (project_id) {
        return this._http.get(this.url + '/project/' + project_id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Создаем 3 стандартные секции у нового проекта
    SectionsService.prototype.x_initialiseProject = function (project_id) {
        var body = {
            id: project_id
        };
        return this._http.post(this.url + '/sections_init', body, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Создаем секцию
    SectionsService.prototype.x_createSection = function (data) {
        return this._http.post(this.url + '/create', data, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Сохраняем редактирование секции
    SectionsService.prototype.x_saveEdit = function (section) {
        return this._http.put(this.url + '/edit', section, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Удаляем секцию по ID
    SectionsService.prototype.x_deleteSection = function (id) {
        return this._http.delete(this.url + '/delete/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    SectionsService.prototype.x_deleteProjectSections = function (project_id) {
        return this._http.delete(this.url + '/delete/project/' + project_id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    SectionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], SectionsService);
    return SectionsService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = (function () {
    function SharedService() {
    }
    SharedService.prototype.x_loadToken = function () {
        var token = localStorage.getItem('id_token');
        return token;
    };
    SharedService.prototype._headers = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.x_loadToken());
        // Если стоит флаг 'j'
        opts.forEach(function (o) {
            if (o === "j") {
                headers.append('Content-Type', 'application/json');
            }
        });
        return { headers: headers };
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksService = (function () {
    function TasksService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/tasks';
        this.url = '/api/tasks';
        // Сохраняем ID родителей родительской доски
        // // при удалении таска для правильной редирекции в доску
        this.parentsID = {
            p: 0,
            s: 0
        };
        // Shared сервис
        // Для удаления таска в родительской доске
        this.taskDeleted = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.taskDeletedEmitted = this.taskDeleted.asObservable();
    }
    // Отдаем таски по ID родительской доски
    TasksService.prototype.x_getTasks = function (desk_id) {
        return this._http.get(this.url + '/desk/' + desk_id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Отдаем таск по его ID
    TasksService.prototype.x_getTask = function (id) {
        return this._http.get(this.url + '/task/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Создаем таск и возвращаем его глобальный ID
    TasksService.prototype.x_createTask = function (new_task) {
        return this._http.post(this.url + '/create', new_task, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Редактируем таск
    TasksService.prototype.x_saveEdit = function (data) {
        return this._http.put(this.url + '/edit', data, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Удаляем таск по его ID
    TasksService.prototype.x_deleteTask = function (id) {
        return this._http.delete(this.url + '/delete/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    TasksService.prototype.storeParentsIds = function (p, s) {
        this.parentsID.p = p;
        this.parentsID.s = s;
    };
    TasksService.prototype.emitTaskDeleted = function (change) {
        this.taskDeleted.next(change);
    };
    TasksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/teams.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamsService = (function () {
    function TeamsService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/teams';
        this.url = '/api/teams';
    }
    // отдаем команды из БД
    TeamsService.prototype.x_getTeams = function () {
        return this._http.get(this.url + '/teams', this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Создаем команду с именем
    TeamsService.prototype.x_createTeam = function (new_team_name) {
        var body = {
            name: new_team_name
        };
        return this._http.post(this.url + '/team_add', body, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    // Удаляем команду по ID
    TeamsService.prototype.x_deleteTeam = function (id) {
        return this._http.delete(this.url + '/team/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    TeamsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], TeamsService);
    return TeamsService;
}());



/***/ }),

/***/ "../../../../../src/app/-services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(_http, _ss) {
        this._http = _http;
        this._ss = _ss;
        // url = 'http://127.0.0.1:3000/api/users';
        this.url = '/api/users';
    }
    UsersService.prototype.getID = function () {
        // Если перезагружаем страницу то ID берем в storage
        if (!this.ID) {
            this.ID = JSON.parse(localStorage.getItem('user')).id;
        }
        return this.ID;
    };
    UsersService.prototype.x_getUserInfo = function (id) {
        return this._http.get(this.url + '/user/' + id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.x_getTeamUsers = function (team_id) {
        return this._http.get(this.url + '/team_users/' + team_id, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.x_deleteFromTeam = function (user_id, team_id) {
        var body = {
            user_id: user_id,
            team_id: team_id
        };
        return this._http.put(this.url + '/delete_from_team', body, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.x_addUserToTeam = function (email, team_id) {
        var body = {
            email: email,
            team_id: team_id
        };
        return this._http.put(this.url + '/add_to_team', body, this._ss._headers())
            .map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_service__ = __webpack_require__("../../../../../src/app/-services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_teams_service__ = __webpack_require__("../../../../../src/app/-services/teams.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_projects_service__ = __webpack_require__("../../../../../src/app/-services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sections_service__ = __webpack_require__("../../../../../src/app/-services/sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_desks_service__ = __webpack_require__("../../../../../src/app/-services/desks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_tasks_service__ = __webpack_require__("../../../../../src/app/-services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_comments_service__ = __webpack_require__("../../../../../src/app/-services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_shared_service__ = __webpack_require__("../../../../../src/app/-services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_authguard_guard__ = __webpack_require__("../../../../../src/app/guards/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_e404_e404_component__ = __webpack_require__("../../../../../src/app/components/e404/e404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_teams_team_list_team_list_component__ = __webpack_require__("../../../../../src/app/components/teams/team-list/team-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_teams_team_team_component__ = __webpack_require__("../../../../../src/app/components/teams/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_users_user_user_component__ = __webpack_require__("../../../../../src/app/components/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_projects_project_list_project_list_component__ = __webpack_require__("../../../../../src/app/components/projects/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_projects_project_list_item_project_list_item_component__ = __webpack_require__("../../../../../src/app/components/projects/project-list-item/project-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_projects_project_project_component__ = __webpack_require__("../../../../../src/app/components/projects/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_desks_desk_desk_component__ = __webpack_require__("../../../../../src/app/components/desks/desk/desk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_color_color_color_component__ = __webpack_require__("../../../../../src/app/components/color/color/color.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_sections_section_list_section_list_component__ = __webpack_require__("../../../../../src/app/components/sections/section-list/section-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_sections_section_item_section_item_component__ = __webpack_require__("../../../../../src/app/components/sections/section-item/section-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_sections_section_one_section_one_component__ = __webpack_require__("../../../../../src/app/components/sections/section-one/section-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_tasks_task_task_component__ = __webpack_require__("../../../../../src/app/components/tasks/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_comments_comment_comment_component__ = __webpack_require__("../../../../../src/app/components/comments/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_fav_fav_component__ = __webpack_require__("../../../../../src/app/components/fav/fav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_loading_loading_component__ = __webpack_require__("../../../../../src/app/components/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_auth_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_e404_e404_component__["a" /* E404 */],
                __WEBPACK_IMPORTED_MODULE_21__components_teams_team_list_team_list_component__["a" /* TeamListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_teams_team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_users_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_projects_project_list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_projects_project_list_item_project_list_item_component__["a" /* ProjectListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_projects_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_desks_desk_desk_component__["a" /* DeskComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_color_color_color_component__["a" /* ColorComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_sections_section_list_section_list_component__["a" /* SectionListComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_sections_section_item_section_item_component__["a" /* SectionItemComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_sections_section_one_section_one_component__["a" /* SectionOneComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_tasks_task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_comments_comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_fav_fav_component__["a" /* FavComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_loading_loading_component__["a" /* LoadingComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__guards_authguard_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_6__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_7__services_teams_service__["a" /* TeamsService */],
                __WEBPACK_IMPORTED_MODULE_8__services_projects_service__["a" /* ProjectsService */],
                __WEBPACK_IMPORTED_MODULE_9__services_sections_service__["a" /* SectionsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_desks_service__["a" /* DesksService */],
                __WEBPACK_IMPORTED_MODULE_11__services_tasks_service__["a" /* TasksService */],
                __WEBPACK_IMPORTED_MODULE_12__services_comments_service__["a" /* CommentsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_shared_service__["a" /* SharedService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_projects_project_project_component__ = __webpack_require__("../../../../../src/app/components/projects/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sections_section_one_section_one_component__ = __webpack_require__("../../../../../src/app/components/sections/section-one/section-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_desks_desk_desk_component__ = __webpack_require__("../../../../../src/app/components/desks/desk/desk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tasks_task_task_component__ = __webpack_require__("../../../../../src/app/components/tasks/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_e404_e404_component__ = __webpack_require__("../../../../../src/app/components/e404/e404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_authguard_guard__ = __webpack_require__("../../../../../src/app/guards/authguard.guard.ts");











var APP_ROUTES = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_auth_auth_component__["a" /* AuthComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__components_auth_login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_3__components_auth_signup_signup_component__["a" /* SignupComponent */]
            }
        ]
    },
    {
        path: 'dash',
        component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_authguard_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'project/:id',
                component: __WEBPACK_IMPORTED_MODULE_5__components_projects_project_project_component__["a" /* ProjectComponent */]
            },
            {
                path: 'project/:id/section/:id',
                component: __WEBPACK_IMPORTED_MODULE_6__components_sections_section_one_section_one_component__["a" /* SectionOneComponent */]
            },
            {
                path: 'project/:id/section/:id/desk/:id',
                component: __WEBPACK_IMPORTED_MODULE_7__components_desks_desk_desk_component__["a" /* DeskComponent */],
                children: [
                    {
                        path: 'task/:id',
                        component: __WEBPACK_IMPORTED_MODULE_8__components_tasks_task_task_component__["a" /* TaskComponent */]
                    }
                ]
            }
        ]
    },
    {
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_9__components_e404_e404_component__["a" /* E404 */]
    },
    {
        path: '**',
        redirectTo: 'error',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n\r\n\t<div class=\"auth\">\r\n\t\t<div class=\"auth-left\">\r\n\t\t\t<div class=\"auth-left__wrap\">\r\n\t\t\t\t<p>// TEAMWORK</p>\r\n\t\t\t\t<a>\r\n\t\t\t\t\t<img src=\"../../../assets/img/teamwork.svg\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"auth-right\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #e5e5ff; }\n\n.auth {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50rem; }\n  .auth-left {\n    width: 34rem;\n    height: 100%;\n    background-color: gold;\n    position: relative; }\n    .auth-left__wrap {\n      position: relative;\n      width: 100%;\n      height: calc(100% + 2 * 0.5rem);\n      top: -0.5rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: linear-gradient(45deg, #6d6639, #1a3e77, #b71031);\n      background-size: 600% 600%;\n      -webkit-animation: bganim 20s linear infinite;\n              animation: bganim 20s linear infinite;\n      border-radius: 5px;\n      box-shadow: 0 0.5rem 2rem 0 rgba(26, 62, 119, 0.5);\n      color: #fff; }\n      .auth-left__wrap p {\n        margin-bottom: 2rem; }\n      .auth-left__wrap a {\n        display: block;\n        width: 50%; }\n        .auth-left__wrap a img {\n          width: 100%; }\n  .auth-right {\n    height: 100%;\n    border: 1px solid #6d6639;\n    border-left: none; }\n\n@-webkit-keyframes bganim {\n  0% {\n    background-position: 50% 0%; }\n  50% {\n    background-position: 50% 100%; }\n  100% {\n    background-position: 50% 0%; } }\n\n@keyframes bganim {\n  0% {\n    background-position: 50% 0%; }\n  50% {\n    background-position: 50% 100%; }\n  100% {\n    background-position: 50% 0%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = (function () {
    function AuthComponent(_authService) {
        this._authService = _authService;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this._authService.x_setUserLoggedOut();
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'auth',
            template: __webpack_require__("../../../../../src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/auth.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n  <div class=\"auth-wrap\">\n    <div class=\"auth-title\">\n      Log In\n    </div>\n    <form class=\"auth-form\" (submit)='login($event)'>\n      <input [(ngModel)]=\"temp_email\" type=\"email\" name=\"au_email\" required placeholder=\"Email\">\n      <input [(ngModel)]=\"temp_password\" type=\"password\" name=\"au_password\" required placeholder=\"Password\">\n\n      <button type=\"submit\">Log In</button>\n    </form>\n  </div>\n\n  <div class=\"auth-type\">\n    <a [routerLink]=\"['/signup']\">Sign Up</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .auth-wrap {\n    padding: 0 2rem; }\n  .auth-title {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    font-size: 2rem; }\n  .auth-form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 30rem; }\n    .auth-form input {\n      background: none;\n      border: none;\n      outline: none;\n      height: 2rem;\n      border-bottom: 1px solid #002359;\n      color: #fff;\n      color: #000;\n      padding-left: 1rem;\n      height: 5rem;\n      margin-bottom: 1rem;\n      border-bottom-color: rgba(109, 102, 57, 0.5); }\n      .auth-form input::-webkit-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .auth-form input:-ms-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .auth-form input::placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .auth-form input::-webkit-input-placeholder {\n        color: #1a3e77; }\n      .auth-form input:-ms-input-placeholder {\n        color: #1a3e77; }\n      .auth-form input::placeholder {\n        color: #1a3e77; }\n    .auth-form button {\n      margin-top: 3rem;\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: 10rem;\n      font-size: 1.4rem;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n      .auth-form button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #6d6639; }\n      .auth-form button:hover {\n        background-color: #6d6639; }\n  .auth-type {\n    width: 100%;\n    height: 5rem;\n    border-top: 1px solid #6d6639;\n    text-align: center; }\n    .auth-type a {\n      color: #6d6639;\n      line-height: 5rem;\n      transition: 0.5s; }\n      .auth-type a:hover {\n        color: #b71031; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
        this.temp_email = '';
        this.temp_password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.temp_email || !this.temp_password) {
            console.log('Заполните поля');
        }
        else {
            // // Есть ли пользователь? Верны ли данные
            var user = {
                email: this.temp_email,
                password: this.temp_password
            };
            this._authService.x_authenticateUser(user)
                .subscribe(function (data) {
                // console.log(data.msg);
                if (data.success) {
                    _this._authService.x_storeUserData(data.token, data.user);
                    // Пользователь есть в базе и данные верны - изменяем статус на LOGGED IN
                    var response_login = _this._authService.x_setUserLoggedIn();
                    // Переходим в dash
                    _this.router.navigate(['dash']);
                }
                else {
                    _this.router.navigate(['login']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n\t<div class=\"auth-wrap\">\n\t\t<div class=\"auth-title\">\n\t\t\tSign Up\n\t\t</div>\n\t\t<form class=\"auth-form\" (submit)='signUp()'>\n\t\t\t<input [(ngModel)]=\"temp_name\" type=\"text\" name=\"name\" placeholder=\"Name\">\n\t\t\t<input [(ngModel)]=\"temp_email\" type=\"email\" name=\"email\" placeholder=\"Email\">\n\t\t\t<input [(ngModel)]=\"temp_pass\" type=\"password\" name=\"pass\" placeholder=\"Password\">\n\t\t\t<input [(ngModel)]=\"temp_pass_rep\" type=\"password\" name=\"pass_rep\" placeholder=\"Repeat password\">\n\n\t\t\t<button type=\"submit\">Sign Up</button>\n\t\t\t<!-- <input class=\"auth-form__submit\" type=\"submit\" value=\"Sign Up\"> -->\n\t\t</form>\n\t</div>\n\n\t<div class=\"auth-type\">\n\t\t<a [routerLink]=\"['/login']\">Log In</a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/signup/signup.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .auth-wrap {\n    padding: 0 2rem; }\n  .auth-title {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    font-size: 2rem; }\n  .auth-form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 30rem; }\n    .auth-form input {\n      background: none;\n      border: none;\n      outline: none;\n      height: 2rem;\n      border-bottom: 1px solid #002359;\n      color: #fff;\n      color: #000;\n      padding-left: 1rem;\n      height: 5rem;\n      margin-bottom: 1rem;\n      border-bottom-color: rgba(109, 102, 57, 0.5); }\n      .auth-form input::-webkit-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .auth-form input:-ms-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .auth-form input::placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .auth-form input::-webkit-input-placeholder {\n        color: #1a3e77; }\n      .auth-form input:-ms-input-placeholder {\n        color: #1a3e77; }\n      .auth-form input::placeholder {\n        color: #1a3e77; }\n    .auth-form button {\n      margin-top: 3rem;\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: 10rem;\n      font-size: 1.4rem;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n      .auth-form button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #6d6639; }\n      .auth-form button:hover {\n        background-color: #6d6639; }\n  .auth-type {\n    width: 100%;\n    height: 5rem;\n    border-top: 1px solid #6d6639;\n    text-align: center; }\n    .auth-type a {\n      color: #6d6639;\n      line-height: 5rem;\n      transition: 0.5s; }\n      .auth-type a:hover {\n        color: #b71031; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(_authservice, router) {
        this._authservice = _authservice;
        this.router = router;
        this.temp_name = '';
        this.temp_email = '';
        this.temp_pass = '';
        this.temp_pass_rep = '';
        // Default avatar
        this.avatar_def = '../../assets/img/avatar_def.jpg';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (!this.temp_name || !this.temp_email || !this.temp_pass || !this.temp_pass_rep) {
            console.log('Fill inpits');
        }
        else {
            if (this.temp_pass != this.temp_pass_rep) {
                console.log('Passwords are not same');
            }
            else {
                var newUser = {
                    name: this.temp_name,
                    email: this.temp_email,
                    password: this.temp_pass,
                    avatar: this.avatar_def
                };
                this._authservice.x_signUp(newUser)
                    .subscribe(function (res) {
                    // console.log(res.msg);
                    if (res.success) {
                        _this.resetForm('all');
                        _this.router.navigate(['login']);
                    }
                    else {
                        _this.resetForm('');
                    }
                });
            }
        }
    };
    SignupComponent.prototype.resetForm = function (a) {
        if (a == 'all') {
            this.temp_name = '';
        }
        this.temp_email = '';
        this.temp_pass = '';
        this.temp_pass_rep = '';
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'signup',
            template: __webpack_require__("../../../../../src/app/components/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/signup/signup.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/color/color/_colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projectColors; });
var projectColors = [
    [
        'red',
        '#ff0020',
        0
    ],
    [
        'gold',
        '#ffe100',
        1
    ],
    [
        'green',
        '#00ff90',
        2
    ],
    [
        'blue',
        '#0055ff',
        3
    ],
    [
        'purple',
        '#a100ff',
        4
    ]
];


/***/ }),

/***/ "../../../../../src/app/components/color/color/color.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let c of colors\">\n\n  <input \n    (click)=setColor(c[2]) \n    type=\"radio\" \n    name=\"name\" \n    id=\"{{c[0]}}\" \n  >\n\n  <label \n    [style.background-color]=\"c[1]\" \n    for=\"{{c[0]}}\" \n  ></label>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/color/color/color.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nlabel {\n  display: block;\n  width: 3rem;\n  height: 3rem;\n  margin: 0.5rem;\n  border-radius: 100px;\n  border: 0.5rem solid rgba(255, 255, 255, 0.8);\n  transition: 0.4s ease-in-out; }\n\ninput {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0; }\n  input:checked + label {\n    border: 0rem solid rgba(255, 255, 255, 0.5);\n    transition: 0.4s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/color/color/color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colors__ = __webpack_require__("../../../../../src/app/components/color/color/_colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorComponent = (function () {
    function ColorComponent() {
        this.colors = __WEBPACK_IMPORTED_MODULE_1__colors__["a" /* projectColors */];
        this.colorSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    ColorComponent.prototype.ngOnInit = function () {
    };
    ColorComponent.prototype.setColor = function (color_index) {
        this.colorSelected.emit(this.colors[color_index][1]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ColorComponent.prototype, "colorSelected", void 0);
    ColorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'color',
            template: __webpack_require__("../../../../../src/app/components/color/color/color.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/color/color/color.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorComponent);
    return ColorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/comments/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment\" [class.AAA]=\"this_comment.parentUserId == id_active\" *ngIf=\"render\">\n\t<div class=\"comment-edit\">\n\t</div>\n\t<div class=\"comment-left\">\n\t\t<div class=\"comment-left__avatar\" [style.background-image]=\"'url(' + parent_user.avatar + ')'\"></div>\n\t</div>\n\t<div class=\"comment-right\">\n\t\t<p class=\"comment-right-name\">{{parent_user.name}}</p>\n\t\t<div class=\"comment-right-text\">\n\t\t\t<div class=\"comment-right-text-triangle\"></div>\n\n\t\t\t<div class=\"comment-right-text-text\">\n\t\t\t\t<p>{{this_comment.text}}</p>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"this_comment.parentUserId == id_active && !edit_mode\">\n\t\t\t\t<a class=\"a_btn\" (click)=\"x_deleteComment()\">\n\t\t\t\t\t<img src=\"../../../../assets/img/delete.svg\">\n\t\t\t\t</a>\n\t\t\t\t<a class=\"a_btn\" (click)=\"toggleAddingMode()\">\n\t\t\t\t\t<img src=\"../../../../assets/img/edit2.svg\">\n\t\t\t\t</a>\n\t\t\t</div>\n\n\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class=\"edit\" *ngIf=\"edit_mode\">\n\t<textarea name=\"\" id=\"\" cols=\"30\" rows=\"2\" [(ngModel)]=\"this_comment.text\"></textarea>\n\t<button (click)=\"x_saveEdit()\">save</button>\n\t<button (click)=\"toggleAddingMode()\">×</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/comments/comment/comment.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment {\n  padding: 0.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .comment-left {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n    .comment-left__avatar {\n      border-radius: 100px;\n      height: 4rem;\n      width: 4rem;\n      background-size: cover;\n      background-position: center; }\n  .comment-right {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n    padding-left: 1rem; }\n    .comment-right-name {\n      font-size: 1.3rem;\n      font-weight: 600;\n      margin-bottom: 0.6rem; }\n    .comment-right-text {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .comment-right-text-triangle {\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-width: 0 1rem 1rem 0;\n        border-color: transparent #7c8eaa transparent transparent; }\n      .comment-right-text-text {\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n        background-color: #7c8eaa;\n        padding: 1rem;\n        font-size: 1.2rem;\n        border-radius: 4px;\n        border-top-left-radius: 0; }\n  .comment-edit {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.a_btn {\n  display: inline-block;\n  height: 2rem;\n  padding: 0.2rem 0;\n  cursor: default;\n  margin-right: 1rem;\n  opacity: 0;\n  transition: 0.5s; }\n  .a_btn img {\n    height: 100%;\n    cursor: pointer; }\n\n.AAA {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .AAA .comment-left {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .AAA .comment-right {\n    padding: 0;\n    padding-right: 1rem; }\n    .AAA .comment-right-name {\n      text-align: right; }\n    .AAA .comment-right-text-triangle {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3;\n      border-width: 1rem 1rem 0 0;\n      border-color: #ccc799 transparent transparent transparent; }\n    .AAA .comment-right-text-text {\n      background-color: #ccc799;\n      border-radius: 4px;\n      border-top-right-radius: 0; }\n  .AAA:hover .a_btn {\n    opacity: 1; }\n\n.edit {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-right: 1rem; }\n  .edit textarea {\n    width: calc(100% - 9rem);\n    resize: none;\n    border-radius: 3px; }\n    .edit textarea:focus {\n      outline: 0; }\n  .edit button {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    width: auto;\n    height: 2rem;\n    padding: 0 0.5rem;\n    line-height: 2rem;\n    font-size: 1rem;\n    min-width: 2rem; }\n    .edit button:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #b71031; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comments/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comments_service__ = __webpack_require__("../../../../../src/app/-services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/-services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = (function () {
    function CommentComponent(_commentsService, _usersService) {
        this._commentsService = _commentsService;
        this._usersService = _usersService;
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.block_scroll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.edit_mode = false;
        this.wait = false;
        this.render = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.render = false;
        this.id_active = this._usersService.getID();
        this.x_getComment();
    };
    // Получаем комментарий по ID
    CommentComponent.prototype.x_getComment = function () {
        var _this = this;
        this._commentsService.x_getComment(this.id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.this_comment = res.data;
                _this.x_getUser();
            }
        });
    };
    // Получаем автора комментария по ID автора
    CommentComponent.prototype.x_getUser = function () {
        var _this = this;
        this._usersService.x_getUserInfo(this.this_comment.parentUserId)
            .subscribe(function (res) {
            // console.log(res);
            _this.parent_user = res.data;
            _this.render = true;
        });
    };
    // Переключатель формы редактирования комментария
    CommentComponent.prototype.toggleAddingMode = function () {
        this.edit_mode = !this.edit_mode;
        this.block_scroll.emit(this.edit_mode);
    };
    CommentComponent.prototype.x_saveEdit = function () {
        var _this = this;
        this._commentsService.x_saveEdit(this.this_comment)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.toggleAddingMode();
            }
        });
    };
    CommentComponent.prototype.x_deleteComment = function () {
        var _this = this;
        var flag = confirm('Sure?');
        if (flag) {
            // Удаляем коммент
            this._commentsService.x_deleteComment(this.this_comment.id)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    // Говорим таску удалить этот комментарий у себя
                    _this.deleted.emit(_this.this_comment.id);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "deleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "block_scroll", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'comment',
            template: __webpack_require__("../../../../../src/app/components/comments/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/comments/comment/comment.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"db\">\n\n\t<section class=\"db-menu\">\n\n\t\t<!-- <loading></loading> -->\n\n\t\t<div class=\"db-menu__logo\">// DASHBOARD</div>\n\n\t\t<team-list (TeamId)=\"setProjectsTeamId(i, $event)\"></team-list>\n\n\t\t<project-list \n\t\t\t[teamId]=\"projectsTeamId\" \n\t\t\t(ProjectId)=\"setProjectToShow(i, $event)\" \n\t\t></project-list>\n\n\t</section>\n\n\t<section class=\"db-main\">\n\n\t\t<section class=\"db-main__user\" *ngIf=\"render_active_user\">\n\t\t\t<!-- <a class=\"db-main__user-exit\" routerLink=\"/\">\n\t\t\t\t<img src=\"../../assets/img/calendar.svg\">\n\t\t\t</a> -->\n\t\t\t<div class=\"db-main__user-avatar\" [style.background-image]=\"'url(' + activeUser.avatar + ')'\"></div>\n\t\t\t<div class=\"db-main__user-info\">\n\t\t\t\t<p>{{activeUser.name}}</p>\n\t\t\t\t<p>{{activeUser.email}}</p>\n\t\t\t</div>\n\n\t\t\t<a class=\"db-main__user-exit\" href=\"#\" (click)=\"onLogoutClick($event)\">\n\t\t\t\t<img src=\"../../assets/img/exit.svg\">\n\t\t\t</a>\n\t\t</section>\n\n\t\t<!-- Project -->\n\t\t<router-outlet></router-outlet>\n\n\t</section>\n\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".db {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 0;\n  top: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: #e5e5ff; }\n  .db-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background-color: #1a3e77;\n    height: 100%;\n    width: 25rem;\n    color: white;\n    font-size: 1.4rem;\n    overflow-y: auto; }\n    .db-menu__logo {\n      padding: 0;\n      text-align: center;\n      height: 5rem;\n      line-height: 5rem;\n      font-size: 2rem; }\n  .db-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: calc(100% - 25rem); }\n    .db-main__user {\n      position: absolute;\n      z-index: 400;\n      top: 0;\n      right: 0;\n      height: 5rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .db-main__user-avatar {\n        border-radius: 100px;\n        margin-top: 0.5rem;\n        margin-right: 1rem;\n        height: 4rem;\n        width: 4rem;\n        background-size: cover;\n        background-position: center; }\n      .db-main__user-info {\n        padding-right: 1rem;\n        padding-top: 1.1rem;\n        font-size: 1.2rem; }\n        .db-main__user-info > p:first-child {\n          font-size: 1.4rem;\n          text-transform: uppercase; }\n      .db-main__user-exit {\n        display: block;\n        width: 5rem;\n        padding: 1.5rem;\n        cursor: default; }\n        .db-main__user-exit img {\n          cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/-services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projects_service__ = __webpack_require__("../../../../../src/app/-services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/-services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(_authService, _projectsService, _usersService, router) {
        this._authService = _authService;
        this._projectsService = _projectsService;
        this._usersService = _usersService;
        this.router = router;
        this.activeUser = {};
        this.render_active_user = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.x_getActiveUser();
    };
    // Получаем инфу об активном пользователе
    DashboardComponent.prototype.x_getActiveUser = function () {
        var _this = this;
        this._usersService.x_getUserInfo(this._usersService.getID())
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.activeUser = res.data;
                _this.render_active_user = true;
            }
        });
    };
    // Ловим team Id из Team-list и сохраняем в dashboard
    // Project - list получает его как Input
    DashboardComponent.prototype.setProjectsTeamId = function (i, e) {
        this.projectsTeamId = e;
    };
    // Кликнули на проект в списке и в dashboard вызывем переход
    // Переходим по ссылке
    DashboardComponent.prototype.setProjectToShow = function (i, e) {
        var _this = this;
        // Переходим по новой ссылке
        this.router.navigate(['dash']);
        setTimeout(function () {
            _this.router.navigate([
                'dash',
                'project', e
            ]);
        }, 0);
    };
    // Информация о текущем проекте для использования в dashboard компонентах
    DashboardComponent.prototype.getCurrentProject = function (id) {
        var _this = this;
        this._projectsService.x_getProject(id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.currentProject = res.data;
            }
        });
    };
    DashboardComponent.prototype.onLogoutClick = function (e) {
        e.preventDefault();
        this._authService.x_setUserLoggedOut();
        this.router.navigate(['login']);
        return false;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/desks/desk/desk.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"left\">\n\n  <div class=\"desk-header\">\n    <button class=\"desk-header__back\" (click)=\"goBack()\">Back</button>\n  </div>\n\n  <!-- [style.background-color]=\"setColor()\" -->\n\n  <div class=\"desk-info\" *ngIf=\"render\">\n    <div class=\"desk-info__left\"></div>\n    <div class=\"desk-info__center\">\n      <div class=\"desk-info__center__info\">\n        <p *ngIf=\"!mode.edit_desk\">{{this_desk.line}}</p>\n        <input *ngIf=\"mode.edit_desk\" [(ngModel)]=\"this_desk.line\" type=\"text\" name=\"desk_line\">\n      </div>\n      <div class=\"desk-info__center__buttons\">\n        <button *ngIf=\"mode.edit_desk\" (click)=\"x_saveEdit()\">Save</button>\n        <button *ngIf=\"mode.edit_desk\" (click)=\"toggleMode('edit_desk')\">×</button>\n        <button *ngIf=\"!mode.edit_desk\" (click)=\"toggleMode('edit_desk')\">Edit</button>\n        <button *ngIf=\"!mode.edit_desk\" (click)=\"x_deleteDesk()\">Delete</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"desk-task-list\" *ngIf=\"render\">\n\n    <div *ngFor=\"let t of tasks\" (click)=\"goToTask(t.id)\" class=\"desk-task-list__item\">\n      <p>{{t.line}}</p>\n    </div>\n\n\n    <div class=\"desk-task-list__item\">\n      <div class=\"desk-task-list__edit\">\n        <div class=\"desk-task-list__edit__add\" *ngIf=\"mode.add_task\">\n          <div>\n            <!-- <label for=\"new_desk_line\">Line</label> -->\n            <input type=\"text\" name=\"new_desk_line\" [(ngModel)]=\"temp_task_line\" placeholder=\"Task title\">\n            <button (click)=\"x_createTask()\">Create</button>\n            <button *ngIf=\"mode.add_task\" (click)=\"toggleMode('add_task')\">×</button>\n          </div>\n        </div>\n\n        <button *ngIf=\"!mode.add_task\" class=\"desk-task-list__plus\" (click)=\"toggleMode('add_task')\">+ TASK</button>\n      </div>\n    </div>\n\n  </div>\n\n</section>\n\n<section class=\"right\">\n  <div class=\"right__null-triangle\" *ngIf=\"render\"></div>\n  <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/desks/desk/desk.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%; }\n\n.desk-header {\n  height: 5rem; }\n  .desk-header button {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    width: auto;\n    height: 3rem;\n    padding: 0 1rem;\n    line-height: 3rem;\n    font-size: 1.4rem;\n    margin-top: 1rem;\n    margin-left: 1rem; }\n    .desk-header button:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #b71031; }\n\n.desk-info {\n  height: 5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #bdbfc1; }\n  .desk-info__left {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 2.5rem 0 2.5rem 1.66666667rem;\n    border-color: transparent transparent transparent #1a3e77; }\n  .desk-info__center {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .desk-info__center__info {\n      color: #1a3e77;\n      margin-left: 1rem;\n      line-height: 5rem; }\n      .desk-info__center__info input {\n        background: none;\n        border: none;\n        outline: none;\n        height: 2rem;\n        border-bottom: 1px solid #002359;\n        color: #fff;\n        color: #1a3e77;\n        height: 4rem;\n        display: block;\n        border-bottom-color: #fff; }\n        .desk-info__center__info input::-webkit-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .desk-info__center__info input:-ms-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .desk-info__center__info input::placeholder {\n          color: #fff;\n          opacity: 0.5; }\n    .desk-info__center__buttons button {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: auto;\n      height: 3rem;\n      padding: 0 1rem;\n      line-height: 3rem;\n      font-size: 1.4rem;\n      margin-top: 1rem;\n      margin-left: 1rem;\n      margin-left: 0;\n      margin-right: 0.5rem; }\n      .desk-info__center__buttons button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n\n.desk-task-list {\n  text-align: center;\n  height: 100%;\n  overflow: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem; }\n  .desk-task-list::-webkit-scrollbar-thumb {\n    border-radius: 1px;\n    background-color: #bdbfc1; }\n  .desk-task-list__item {\n    width: 100%;\n    text-align: left;\n    margin-bottom: 0.5rem; }\n    @media screen and (min-width: 1100px) {\n      .desk-task-list__item {\n        width: calc((100% / 2) - 2px); } }\n    .desk-task-list__item p {\n      height: 5rem;\n      cursor: pointer;\n      padding: 1rem;\n      background-color: #6d6639;\n      color: #fff;\n      border-radius: 0.5rem; }\n  .desk-task-list__plus {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    width: auto;\n    height: 3rem;\n    padding: 0 1rem;\n    line-height: 3rem;\n    font-size: 1.4rem;\n    margin-top: 1rem;\n    margin-left: 1rem; }\n    .desk-task-list__plus:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #b71031; }\n  .desk-task-list__edit {\n    text-align: center;\n    border: 1px solid #6d6639;\n    background-color: none;\n    color: #fff;\n    height: 5rem;\n    border-radius: 0.5rem; }\n    .desk-task-list__edit__add {\n      position: absolute;\n      z-index: 200;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.75);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .desk-task-list__edit__add button {\n        color: #fff;\n        text-align: center;\n        cursor: pointer;\n        outline: none;\n        border: none;\n        width: 4rem;\n        height: 4rem;\n        border-radius: 100px;\n        font-size: 3rem;\n        line-height: 4rem;\n        background-color: #002359;\n        width: auto;\n        height: 3rem;\n        padding: 0 1rem;\n        line-height: 3rem;\n        font-size: 1.4rem;\n        margin-top: 1rem;\n        margin-left: 1rem; }\n        .desk-task-list__edit__add button:hover {\n          background-color: #b71031;\n          transition: all 0.3s;\n          box-shadow: 0px 0px 10px 0 #b71031; }\n      .desk-task-list__edit__add input {\n        background: none;\n        border: none;\n        outline: none;\n        height: 2rem;\n        border-bottom: 1px solid #002359;\n        color: #fff;\n        color: #fff; }\n        .desk-task-list__edit__add input::-webkit-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .desk-task-list__edit__add input:-ms-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .desk-task-list__edit__add input::placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .desk-task-list__edit__add input::-webkit-input-placeholder {\n          color: grey; }\n        .desk-task-list__edit__add input:-ms-input-placeholder {\n          color: grey; }\n        .desk-task-list__edit__add input::placeholder {\n          color: grey; }\n\n.left {\n  width: calc(100% - 40rem);\n  height: calc(100% - 10rem); }\n\n.right {\n  width: 40rem;\n  position: relative; }\n  .right__null-triangle {\n    position: absolute;\n    z-index: 100;\n    top: 5rem;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 2.5rem 0 2.5rem 1.66666667rem;\n    border-color: transparent transparent transparent #bdbfc1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/desks/desk/desk.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_desks_service__ = __webpack_require__("../../../../../src/app/-services/desks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__ = __webpack_require__("../../../../../src/app/-services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeskComponent = (function () {
    function DeskComponent(_desksService, _tasksService, activatedRoute, router) {
        var _this = this;
        this._desksService = _desksService;
        this._tasksService = _tasksService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tasks = [];
        this.wait = {
            task: false,
            desk_delete: false,
            desk_edit: false
        };
        this.mode = {
            add_task: false,
            edit_desk: false
        };
        this.temp_task_line = '';
        this.render = false;
        // Подписываемся на удаление таска, чтобы удалить его в массиве доски
        _tasksService.taskDeletedEmitted.subscribe(function (id) {
            _this.deleteTaskFromList(id);
        });
    }
    DeskComponent.prototype.ngOnInit = function () {
        this.render = false;
        // Извлекаем ID родителей
        this.parentRoute();
        // Оопределяем свой id
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.x_getDesk();
        this.x_getTasks();
    };
    // Переключатель режима
    DeskComponent.prototype.toggleMode = function (mode) {
        // Создаем таск
        if (mode == 'add_task') {
            this.temp_task_line = '';
            this.mode.add_task = !this.mode.add_task;
        }
        // Редактируем доску
        if (mode == 'edit_desk') {
            // Запоминаем текущий текст
            this.current_line = this.this_desk.line;
            this.mode.edit_desk = !this.mode.edit_desk;
        }
    };
    // Получаем инфу о текущей доске
    DeskComponent.prototype.x_getDesk = function () {
        var _this = this;
        this._desksService.x_getDesk(this.id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.this_desk = res.data;
            }
        });
    };
    DeskComponent.prototype.parentRoute = function () {
        // Извлекаем из URL id проекта и секции
        // Для навигации
        var route = this.activatedRoute.snapshot.url;
        for (var i = 0; i < route.length; i++) {
            if (route[i].path == 'project') {
                this.id_p = parseInt(route[i + 1].path);
            }
            if (route[i].path == 'section') {
                this.id_s = parseInt(route[i + 1].path);
            }
        }
        // Отдаем в TaskService для возврата в тасках при удалении
        this._tasksService.storeParentsIds(this.id_p, this.id_s);
    };
    // Сохраняем редактирование в доске
    DeskComponent.prototype.x_saveEdit = function () {
        var _this = this;
        if (this.current_line == this.this_desk.line) {
            console.log('Line is not edited');
        }
        else {
            this._desksService.x_saveEdit(this.this_desk)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    _this.toggleMode('edit_desk');
                }
            });
        }
    };
    // Удаляем доску
    DeskComponent.prototype.x_deleteDesk = function () {
        var _this = this;
        var flag = confirm('Sure?');
        if (flag) {
            // Удаляем доску
            this._desksService.x_deleteDesk(this.id)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    _this.goBack();
                }
            });
        }
    };
    // Возвращаемся назад
    DeskComponent.prototype.goBack = function () {
        this.router.navigate([
            'dash',
            'project', this.id_p,
            'section', this.id_s
        ]);
    };
    // Получаем все таски по ID доски родителя
    DeskComponent.prototype.x_getTasks = function () {
        var _this = this;
        this._tasksService.x_getTasks(this.id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.tasks = res.data;
            }
            setTimeout(function () {
                _this.render = true;
            }, 0);
        });
    };
    // Создаем таск и переходим в него
    DeskComponent.prototype.x_createTask = function () {
        var _this = this;
        var new_task = {
            id: -999,
            line: this.temp_task_line,
            parentDeskId: this.id
        };
        this._tasksService.x_createTask(new_task)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                // Получаем global ID таска и присваиваем его временному таску
                new_task.id = res.data.id;
                // На клиенте - добавляем таск в маасив доски
                _this.tasks.push(new_task);
                // Переходим в созданный таск
                _this.goToTask(new_task.id);
            }
            _this.toggleMode('add_task');
        });
    };
    // Переходим в дочерний таск
    DeskComponent.prototype.goToTask = function (task_id) {
        var _this = this;
        this.router.navigate([
            'dash',
            'project', this.id_p,
            'section', this.id_s,
            'desk', this.id
        ]);
        setTimeout(function () {
            _this.router.navigate([
                'dash',
                'project', _this.id_p,
                'section', _this.id_s,
                'desk', _this.id,
                'task', task_id
            ]);
        }, 0);
    };
    // На клиенте Удаляем таск в доске -> массиве тасков
    // От shared сервиса
    DeskComponent.prototype.deleteTaskFromList = function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                this.tasks.splice(i, 1);
            }
        }
    };
    DeskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'desk',
            template: __webpack_require__("../../../../../src/app/components/desks/desk/desk.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/desks/desk/desk.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_desks_service__["a" /* DesksService */],
            __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__["a" /* TasksService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DeskComponent);
    return DeskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/e404/e404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"e404\">\n\t<div class=\"e404-wrap\">\n\t\t<div class=\"e404-text\">\n\t\t\t<p>404</p>\n\t\t\t<br>\n\t\t\t<span>Page</span>\n\t\t\t<span>not found</span>\n\t\t</div>\n\t\t<div class=\"e404-link\">\n\t\t\t<a [routerLink]=\"['/login']\">Log In</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/e404/e404.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".e404 {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .e404-wrap {\n    width: 30rem;\n    height: 40rem;\n    border: 1px solid #6d6639;\n    border-radius: 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .e404-text {\n    width: 100%;\n    height: calc(100% - 5rem);\n    background: linear-gradient(45deg, #6d6639, #1a3e77, #b71031);\n    background-size: 600% 600%;\n    -webkit-animation: bganim 20s linear infinite;\n            animation: bganim 20s linear infinite;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #fff;\n    font-size: 2rem;\n    text-transform: uppercase; }\n    .e404-text p {\n      font-size: 7rem; }\n  .e404-link {\n    height: 5rem;\n    width: 100%;\n    line-height: 5rem;\n    text-align: center;\n    border-top: 1px solid #6d6639; }\n\n@-webkit-keyframes bganim {\n  0% {\n    background-position: 50% 0%; }\n  50% {\n    background-position: 50% 100%; }\n  100% {\n    background-position: 50% 0%; } }\n\n@keyframes bganim {\n  0% {\n    background-position: 50% 0%; }\n  50% {\n    background-position: 50% 100%; }\n  100% {\n    background-position: 50% 0%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/e404/e404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return E404; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var E404 = (function () {
    function E404() {
    }
    E404.prototype.ngOnInit = function () {
        setTimeout(function () {
            console.log('redirecting to home');
        }, 2000);
    };
    E404 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'e404',
            template: __webpack_require__("../../../../../src/app/components/e404/e404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/e404/e404.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], E404);
    return E404;
}());



/***/ }),

/***/ "../../../../../src/app/components/fav/fav.component.html":
/***/ (function(module, exports) {

module.exports = "<svg \n\t\twidth=\"100%\" height=\"100%\"\n\t\txmlns=\"http://www.w3.org/2000/svg\" \n\t\txmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t\tstyle=\"display: none\">\n\n\t\t<style type=\"text/css\">\n\t\t\t.def {\n\t\t\t\tfill: #002359;\n\t\t\t}\n\t\t</style>\n\n\t<symbol id=\"xx8899\" viewBox=\"0 0 128 128\">\n\n\t\t<path d=\"M64,115.5c-28.397,0-51.5-23.103-51.5-51.5S35.603,12.5,64,12.5s51.5,23.103,51.5,51.5    S92.397,115.5,64,115.5z M64,15.5c-26.743,0-48.5,21.757-48.5,48.5s21.757,48.5,48.5,48.5s48.5-21.757,48.5-48.5    S90.743,15.5,64,15.5z\"/>\n\t\t<path d=\"M64.064,89.247c0,0,12.271-7.245,20.167-18.421C89,64.075,89,58.468,89,58.468    c0-7.574-6.14-13.714-13.714-13.714c-4.39,0-8.332,1.927-10.842,5.136L64,50.432l-0.443-0.543    c-2.51-3.209-6.453-5.136-10.843-5.136C45.14,44.753,39,50.893,39,58.468c0,0,0,5.607,4.77,12.359    c7.895,11.175,20.16,18.417,20.16,18.417L64.064,89.247z\"/>\n\n\t</symbol>\n</svg>\n\n<a class=\"fav\" (click)=fav(e) >\n  <svg>\n    <use xlink:href=\"#xx8899\" class=\"def\" [class.AAA]=\"!flag\"/>\n  </svg>\n</a>"

/***/ }),

/***/ "../../../../../src/app/components/fav/fav.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fav {\n  display: block;\n  height: 4rem;\n  width: 4rem; }\n  .fav svg {\n    cursor: pointer;\n    width: 100%;\n    height: 100%; }\n\n.AAA {\n  fill: #b71031;\n  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;\n          animation: heartbeat 1.5s ease-in-out infinite both;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n\n@-webkit-keyframes heartbeat {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  10% {\n    -webkit-transform: scale(0.91);\n            transform: scale(0.91);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  17% {\n    -webkit-transform: scale(0.98);\n            transform: scale(0.98);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  33% {\n    -webkit-transform: scale(0.87);\n            transform: scale(0.87);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  45% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; } }\n\n@keyframes heartbeat {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  10% {\n    -webkit-transform: scale(0.91);\n            transform: scale(0.91);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  17% {\n    -webkit-transform: scale(0.98);\n            transform: scale(0.98);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  33% {\n    -webkit-transform: scale(0.87);\n            transform: scale(0.87);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  45% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fav/fav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavComponent = (function () {
    function FavComponent() {
        this.favTrigger = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.flag = true;
    }
    FavComponent.prototype.ngOnInit = function () {
        if (this.inFav) {
            this.flag = false;
        }
    };
    FavComponent.prototype.fav = function () {
        if (this.flag) {
            this.favTrigger.emit(1);
            this.flag = !this.flag;
            // console.log('make fav');
        }
        else {
            this.favTrigger.emit(0);
            this.flag = !this.flag;
            // console.log('remove fav');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FavComponent.prototype, "favTrigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FavComponent.prototype, "inFav", void 0);
    FavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fav',
            template: __webpack_require__("../../../../../src/app/components/fav/fav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/fav/fav.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FavComponent);
    return FavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wait\">\n\t<div class=\"wait__spin\"></div>\n\t<!-- <div class=\"wait__spin2\"></div> -->\n\t<!-- <div class=\"wait__spin3\"></div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wait {\n  position: absolute;\n  z-index: 90;\n  width: 100%;\n  height: 100%;\n  background-color: #e5e5ff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .wait__spin {\n    position: absolute;\n    width: 5rem;\n    height: 5rem;\n    border: 1rem solid #6d6639;\n    border-radius: 100px;\n    -webkit-animation: spinner 0.5s linear infinite;\n            animation: spinner 0.5s linear infinite;\n    border-bottom-color: #1a3e77; }\n  .wait__spin2 {\n    position: absolute;\n    width: 4rem;\n    height: 4rem;\n    border: 1rem solid #b71031;\n    border-radius: 100px;\n    -webkit-animation: spinner2 0.6s linear infinite;\n            animation: spinner2 0.6s linear infinite;\n    border-bottom-color: #1a3e77;\n    border-bottom-right-radius: 5rem;\n    -webkit-transform: translateX(3rem);\n            transform: translateX(3rem); }\n  .wait__spin3 {\n    position: absolute;\n    width: 1rem;\n    height: 1rem;\n    border: 1rem solid #b71031;\n    border-radius: 100px;\n    -webkit-animation: spinner3 0.4s linear infinite;\n            animation: spinner3 0.4s linear infinite;\n    border-bottom-color: #6d6639;\n    -webkit-transform: translateX(3rem);\n            transform: translateX(3rem); }\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes spinner2 {\n  0% {\n    -webkit-transform: rotate(0deg) translateX(2rem);\n            transform: rotate(0deg) translateX(2rem); }\n  50% {\n    -webkit-transform: rotate(180deg) translateX(2.5rem);\n            transform: rotate(180deg) translateX(2.5rem); }\n  100% {\n    -webkit-transform: rotate(360deg) translateX(2rem);\n            transform: rotate(360deg) translateX(2rem); } }\n\n@keyframes spinner2 {\n  0% {\n    -webkit-transform: rotate(0deg) translateX(2rem);\n            transform: rotate(0deg) translateX(2rem); }\n  50% {\n    -webkit-transform: rotate(180deg) translateX(2.5rem);\n            transform: rotate(180deg) translateX(2.5rem); }\n  100% {\n    -webkit-transform: rotate(360deg) translateX(2rem);\n            transform: rotate(360deg) translateX(2rem); } }\n\n@-webkit-keyframes spinner3 {\n  0% {\n    -webkit-transform: rotate(0deg) translateX(3rem);\n            transform: rotate(0deg) translateX(3rem); }\n  50% {\n    -webkit-transform: rotate(180deg) translateX(6rem);\n            transform: rotate(180deg) translateX(6rem); }\n  100% {\n    -webkit-transform: rotate(360deg) translateX(3rem);\n            transform: rotate(360deg) translateX(3rem); } }\n\n@keyframes spinner3 {\n  0% {\n    -webkit-transform: rotate(0deg) translateX(3rem);\n            transform: rotate(0deg) translateX(3rem); }\n  50% {\n    -webkit-transform: rotate(180deg) translateX(6rem);\n            transform: rotate(180deg) translateX(6rem); }\n  100% {\n    -webkit-transform: rotate(360deg) translateX(3rem);\n            transform: rotate(360deg) translateX(3rem); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loading',
            template: __webpack_require__("../../../../../src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loading/loading.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects/project-list-item/project-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project\" [style.background-color]=\"setColor()\">\n\t<div class=\"project-left\">\n\t\t<p class=\"project-left__name\">{{name}}</p>\n\t\t<p>{{description}}</p>\n\t</div>\n\t<div class=\"project-right\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/projects/project-list-item/project-list-item.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project {\n  margin-right: 1rem;\n  height: 5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .project-right {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 2.5rem 1.66666667rem 2.5rem 0;\n    border-color: transparent #1a3e77 transparent transparent; }\n  .project-left {\n    padding: 0.5rem; }\n    .project-left__name {\n      color: #002359;\n      font-size: 1.6rem;\n      margin-bottom: 0.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects/project-list-item/project-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectListItemComponent = (function () {
    function ProjectListItemComponent() {
    }
    ProjectListItemComponent.prototype.ngOnInit = function () {
    };
    ProjectListItemComponent.prototype.setColor = function () {
        return this.color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectListItemComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectListItemComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectListItemComponent.prototype, "color", void 0);
    ProjectListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-list-item',
            template: __webpack_require__("../../../../../src/app/components/projects/project-list-item/project-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects/project-list-item/project-list-item.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectListItemComponent);
    return ProjectListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<p \r\n\t*ngIf=\"!projects.length && teamId\" \r\n\tstyle=\"width: 100%; text-align: center\"\r\n>Add project</p>\r\n\r\n<project-list-item \r\n\tclass=\"project__item\"\r\n\t*ngFor=\"let p of projects\"\r\n\t[name]=\"p.name\"\r\n\t[description]=\"p.description\"\r\n\t[color]=\"p.color\"\r\n\t(click)=\"sendIdOfProject(p.id)\"\r\n></project-list-item>\r\n\r\n<!-- <div *ngIf=\"wait\">WAITING</div> -->\r\n<div class=\"project__buttons\">\r\n\t<button \r\n\t\t[class.AAA]=\"add_project_mode\"\r\n\t\tclass=\"project__add\"\r\n\t\t*ngIf=\"teamId\"\r\n\t\t(click)=\"toggleAddingMode()\"\r\n\t>+</button>\r\n\t\t\r\n\t<button \r\n\t\t*ngIf=\"add_project_mode\" \r\n\t\tclass=\"project-form__submit\" \r\n\t\t(click)=\"x_createProject()\"\r\n\t>Create</button>\r\n</div>\r\n\r\n\r\n<div class=\"project-form\" *ngIf=\"add_project_mode\">\r\n\t<!-- <label for=\"project_name\">Name</label> -->\r\n\t<input [(ngModel)]=\"temp_name\" name=\"project_name\" type=\"text\" placeholder=\"Title\">\r\n\r\n\t<!-- <label for=\"project_description\">Description</label> -->\r\n\t<input [(ngModel)]=\"temp_description\" name=\"project_description\" type=\"text\" placeholder=\"Description\">\r\n\r\n\t<color (colorSelected)=\"setTempColor(i, $event)\"></color>\r\n\t\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/projects/project-list/project-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project__item {\n  cursor: pointer; }\n\n.project__add {\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 100px;\n  font-size: 3rem;\n  line-height: 4rem;\n  background-color: #002359; }\n  .project__add:hover {\n    background-color: #b71031;\n    transition: all 0.3s;\n    box-shadow: 0px 0px 10px 0 #b71031; }\n\n.project__buttons {\n  margin-top: 1rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.project-form {\n  text-align: center;\n  padding: 0.5rem 1rem; }\n  .project-form input {\n    background: none;\n    border: none;\n    outline: none;\n    height: 2rem;\n    border-bottom: 1px solid #002359;\n    color: #fff;\n    width: 100%;\n    margin-bottom: 1rem;\n    height: 3rem; }\n    .project-form input::-webkit-input-placeholder {\n      color: #fff;\n      opacity: 0.5; }\n    .project-form input:-ms-input-placeholder {\n      color: #fff;\n      opacity: 0.5; }\n    .project-form input::placeholder {\n      color: #fff;\n      opacity: 0.5; }\n  .project-form__submit {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    margin-left: 1rem;\n    padding: 0 1rem;\n    width: auto;\n    font-size: 1.4rem; }\n    .project-form__submit:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #3fcc4a; }\n    .project-form__submit:hover {\n      background-color: #3fcc4a; }\n\n.AAA {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  transition: 0.5rem;\n  background-color: #b71031; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/-services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sections_service__ = __webpack_require__("../../../../../src/app/-services/sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectListComponent = (function () {
    function ProjectListComponent(_projectsService, _sectionsService, router) {
        var _this = this;
        this._projectsService = _projectsService;
        this._sectionsService = _sectionsService;
        this.router = router;
        this.projects = [];
        this.wait = false;
        this.add_project_mode = false;
        this.temp_name = '';
        this.temp_description = '';
        this.temp_color = '#918f62';
        this.ProjectId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Подписываемся на ID удаленного проекта
        this._projectsService.projectDeletedEmitted.subscribe(function (id) {
            // Удаляем project из списка
            _this.deleteProjectFromList(id);
        });
    }
    ProjectListComponent.prototype.ngOnChanges = function () {
        if (this.teamId) {
            this.x_getProjects(this.teamId);
        }
    };
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    // Переключатель формы добавления проекта команде
    ProjectListComponent.prototype.toggleAddingMode = function () {
        this.add_project_mode = !this.add_project_mode;
        this.temp_name = '';
        this.temp_description = '';
    };
    // Получаем проекты для команды по её Id
    ProjectListComponent.prototype.x_getProjects = function (team_id) {
        var _this = this;
        this._projectsService.x_getProjects(team_id)
            .subscribe(function (res) {
            _this.projects = [];
            // console.log(res.msg);
            if (res.success) {
                _this.projects = res.data;
            }
        });
    };
    // Отправляем в dashboard id проекта для последующего открытия в главном экране
    ProjectListComponent.prototype.sendIdOfProject = function (project_id) {
        this.ProjectId.emit(project_id);
    };
    // Создаем новый проект
    ProjectListComponent.prototype.x_createProject = function () {
        var _this = this;
        // Валидность инпутов
        if (!this.temp_name || !this.temp_description) {
            console.log('Write project info');
        }
        else {
            // this.wait = true;
            var new_project = {
                id: -999,
                name: this.temp_name,
                description: this.temp_description,
                color: this.temp_color,
                parentTeamId: this.teamId
            };
            // Создаем новый проект
            this._projectsService.x_createProject(new_project)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    var return_project_1 = res.data;
                    // После, инициализируем его 3мя секциями
                    _this._sectionsService.x_initialiseProject(res.data.id)
                        .subscribe(function (res) {
                        // console.log(res.msg);
                        if (res.success) {
                            _this.toggleAddingMode();
                            // На клиенте - пушим в текущий список
                            _this.projects.push(return_project_1);
                            // Отдаем в DashBoard ID нового проекта и переходим в него
                            _this.sendIdOfProject(return_project_1.id);
                        }
                    });
                }
            });
        }
    };
    // Ловим цвет из палитры
    ProjectListComponent.prototype.setTempColor = function (i, e) {
        this.temp_color = e;
    };
    // На клиенте - удаляем проект в листе проектов
    ProjectListComponent.prototype.deleteProjectFromList = function (id) {
        var DB = this.projects;
        for (var i = 0; i < DB.length; i++) {
            if (DB[i].id == id) {
                this.projects.splice(i, 1);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectListComponent.prototype, "teamId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectListComponent.prototype, "ProjectId", void 0);
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-list',
            template: __webpack_require__("../../../../../src/app/components/projects/project-list/project-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects/project-list/project-list.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_sections_service__["a" /* SectionsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<loading *ngIf=\"wait\"></loading>\r\n\r\n<div class=\"project-header\">\r\n\t<button (click)=\"close()\">Close</button>\r\n</div>\r\n\r\n<div class=\"project-info\" [style.background-color]=\"setColor()\" *ngIf=\"!wait\">\r\n\t<div class=\"project-info__left\"></div>\r\n\t<div class=\"project-info__center\">\r\n\t\t<div class=\"project-info__center__info\">\r\n\t\t\t<p *ngIf=\"!edit_mode\">{{thisProject.name}}</p>\r\n\t\t\t<p *ngIf=\"!edit_mode\">{{thisProject.description}}</p>\r\n\t\t\t<input *ngIf=\"edit_mode\" type=\"text\" name=\"name\" [(ngModel)]=\"thisProject.name\">\r\n\t\t\t<input *ngIf=\"edit_mode\" type=\"text\" name=\"desc\" [(ngModel)]=\"thisProject.description\">\r\n\t\t</div>\r\n\t\t<div class=\"project-info__center__buttons\">\r\n\t\t\t<fav (favTrigger)=\"x_makeFav($event)\" [inFav]=\"inFav\" *ngIf=\"!edit_mode\"></fav>\r\n\t\t\t<button *ngIf=\"edit_mode\" (click)=\"x_saveEdit()\">Save</button>\r\n\t\t\t<button *ngIf=\"edit_mode\" (click)=\"toggleAddingMode()\">×</button>\r\n\t\t\t<button *ngIf=\"!edit_mode\" (click)=\"toggleAddingMode()\">Edit</button>\r\n\t\t\t<button *ngIf=\"!edit_mode\" (click)=\"x_deleteProject()\">Delete</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<color *ngIf=\"edit_mode\" (colorSelected)=\"setTempColor(i, $event)\"></color>\r\n\r\n<section-list [parentProjectId]=\"id\"></section-list>"

/***/ }),

/***/ "../../../../../src/app/components/projects/project/project.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative; }\n\n.project-header {\n  height: 5rem; }\n  .project-header button {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    width: auto;\n    height: 3rem;\n    padding: 0 1rem;\n    line-height: 3rem;\n    font-size: 1.4rem;\n    margin-left: 1rem;\n    margin-top: 1rem; }\n    .project-header button:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #b71031; }\n\n.project-info {\n  height: 5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .project-info__left {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 2.5rem 0 2.5rem 1.66666667rem;\n    border-color: transparent transparent transparent #1a3e77; }\n  .project-info__center {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .project-info__center__info {\n      color: #fff;\n      margin-left: 1rem;\n      line-height: 2.5rem; }\n      .project-info__center__info p:last-child {\n        font-size: 1.2rem; }\n      .project-info__center__info input {\n        background: none;\n        border: none;\n        outline: none;\n        height: 2rem;\n        border-bottom: 1px solid #002359;\n        color: #fff;\n        display: block;\n        border-bottom-color: #fff; }\n        .project-info__center__info input::-webkit-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .project-info__center__info input:-ms-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .project-info__center__info input::placeholder {\n          color: #fff;\n          opacity: 0.5; }\n    .project-info__center__buttons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .project-info__center__buttons button {\n        color: #fff;\n        text-align: center;\n        cursor: pointer;\n        outline: none;\n        border: none;\n        width: 4rem;\n        height: 4rem;\n        border-radius: 100px;\n        font-size: 3rem;\n        line-height: 4rem;\n        background-color: #002359;\n        width: auto;\n        height: 3rem;\n        padding: 0 1rem;\n        line-height: 3rem;\n        font-size: 1.4rem;\n        margin-left: 1rem;\n        margin-left: 0;\n        margin-right: 0.5rem; }\n        .project-info__center__buttons button:hover {\n          background-color: #b71031;\n          transition: all 0.3s;\n          box-shadow: 0px 0px 10px 0 #b71031; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/-services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sections_service__ = __webpack_require__("../../../../../src/app/-services/sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/-services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectComponent = (function () {
    function ProjectComponent(_projectsService, _sectionsService, _usersService, activatedRoute, router) {
        this._projectsService = _projectsService;
        this._sectionsService = _sectionsService;
        this._usersService = _usersService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.edit_mode = false;
        this.wait = false;
        this.inFav = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wait = true;
        // В самом начале
        // Получаем id из маршрута
        this.activatedRoute.params
            .subscribe(function (values) {
            _this.id = values.id;
        });
        // После инициализируем проект
        this.x_initialise(this.id);
    };
    // Цвет проекта для верстки
    ProjectComponent.prototype.setColor = function () {
        return this.thisProject.color;
    };
    // Получаем проект
    ProjectComponent.prototype.x_initialise = function (id) {
        var _this = this;
        this._projectsService.x_getProject(id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.thisProject = res.data;
                _this.wait = false;
                _this.x_isFav();
            }
        });
    };
    ProjectComponent.prototype.x_isFav = function () {
        var user_id = this._usersService.getID();
        for (var i = 0; i < this.thisProject.userFavId.length; i++) {
            if (this.thisProject.userFavId[i] == user_id) {
                this.inFav = true;
                break;
            }
        }
    };
    // Переключатель формы редактирования
    ProjectComponent.prototype.toggleAddingMode = function () {
        this.edit_mode = !this.edit_mode;
    };
    // Сохраняем редактирование
    ProjectComponent.prototype.x_saveEdit = function () {
        var _this = this;
        var data = {
            id: this.thisProject.id,
            name: this.thisProject.name,
            description: this.thisProject.description,
            color: this.thisProject.color
        };
        this._projectsService.x_saveEdit(data)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.toggleAddingMode();
            }
        });
    };
    // Получаем цвет от палитры
    ProjectComponent.prototype.setTempColor = function (i, e) {
        this.thisProject.color = e;
    };
    ProjectComponent.prototype.close = function () {
        this.router.navigate(['dash']);
    };
    // Кнопка удалить проект
    ProjectComponent.prototype.x_deleteProject = function () {
        var _this = this;
        var flag = confirm('Sure?');
        if (flag) {
            // Удаляем проект
            this._projectsService.x_deleteProject(this.id)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    // Удаляем дочерние секции
                    _this._sectionsService.x_deleteProjectSections(_this.id)
                        .subscribe(function (res) {
                        // console.log(res.msg);
                        if (res.success) {
                            // console.log('childsectionsdeleted');
                        }
                    });
                    // Отдаем событие с ID в сервис для удаления проекта и в project list
                    _this._projectsService.emitProjectDeleted(_this.id);
                    _this.close();
                }
            });
        }
    };
    ProjectComponent.prototype.x_makeFav = function (add) {
        var projectID = this.id;
        var userID = this._usersService.getID();
        this._projectsService.x_makeFav(projectID, userID, add)
            .subscribe(function (res) {
            // console.log(res.msg);
        });
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project',
            template: __webpack_require__("../../../../../src/app/components/projects/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects/project/project.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_sections_service__["a" /* SectionsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sections/section-item/section-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" (click)=\"navigate()\">\n\t<P class=\"section_n\">{{section.name}}</P>\n\t<p class=\"section_d\">{{section.description}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sections/section-item/section-item.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section {\n  width: 100%;\n  height: 100%;\n  background-color: #6d6639;\n  padding: 1rem;\n  border-radius: 0 0 1.5rem 0; }\n  .section_n {\n    color: #fff;\n    margin-bottom: 0.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sections/section-item/section-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionItemComponent = (function () {
    function SectionItemComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    SectionItemComponent.prototype.ngOnInit = function () {
    };
    SectionItemComponent.prototype.navigate = function () {
        this.router.navigate([
            'dash',
            'project', this.section.parentProjectId,
            'section', this.section.id
        ]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SectionItemComponent.prototype, "section", void 0);
    SectionItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'section-item',
            template: __webpack_require__("../../../../../src/app/components/sections/section-item/section-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sections/section-item/section-item.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SectionItemComponent);
    return SectionItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sections/section-list/section-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sections\">\n\t<p>SECTIONS</p>\n\t<br>\n\n\t<div class=\"sections-item-list\">\n\t\t<section-item *ngFor=\"let s of sections\" [section]=\"s\" class=\"sections-item-list__item\"></section-item>\n\n\t\t<div class=\"sections-new  sections-item-list__item\">\n\t\t\t<div *ngIf=\"add_mode\">\n\t\t\t\t<!-- <label for=\"name\">Name</label> -->\n\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"temp_name\" placeholder=\"Title\">\n\t\t\t\t<!-- <label for=\"description\">Description</label> -->\n\t\t\t\t<input type=\"text\" name=\"description\" [(ngModel)]=\"temp_description\" placeholder=\"Description\">\n\t\t\t\t<div class=\"btns\">\n\t\t\t\t\t<button class=\"sections-new__add\" (click)=\"x_createSection()\">ADD</button>\n\t\t\t\t\t<button class=\"sections-new__close\" (click)=\"toggleAddingMode()\" *ngIf=\"add_mode\">×</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button *ngIf=\"!add_mode\" class=\"sections-new__plus\" (click)=\"toggleAddingMode()\">+</button>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sections/section-list/section-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sections {\n  padding: 1rem; }\n  .sections-item-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    overflow: auto;\n    max-height: calc(100vh - 10rem - 6rem); }\n    .sections-item-list__item {\n      width: 24%;\n      height: 10rem;\n      margin-right: calc((100% - 24%*4)/3);\n      margin-bottom: 1.5rem;\n      cursor: pointer; }\n      .sections-item-list__item:nth-child(4n) {\n        margin-right: 0; }\n      @media screen and (max-width: 1000px) {\n        .sections-item-list__item {\n          width: 30%; }\n          .sections-item-list__item:nth-child(1n) {\n            margin-right: calc((100% - 30%*3)/2); }\n          .sections-item-list__item:nth-child(3n) {\n            margin-right: 0; } }\n  .sections-new {\n    padding: 1rem;\n    border: 1px solid #6d6639;\n    border-radius: 0 0 1.5rem 0;\n    text-align: center; }\n    .sections-new__plus {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      margin-top: calc(5rem - 3rem); }\n      .sections-new__plus:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #6d6639; }\n      .sections-new__plus:hover {\n        background-color: #6d6639; }\n    .sections-new input {\n      background: none;\n      border: none;\n      outline: none;\n      height: 2rem;\n      border-bottom: 1px solid #002359;\n      color: #fff;\n      width: 100%;\n      border-bottom-color: #efefef;\n      color: #1a3e77; }\n      .sections-new input::-webkit-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .sections-new input:-ms-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .sections-new input::placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .sections-new input::-webkit-input-placeholder {\n        color: #6d6639; }\n      .sections-new input:-ms-input-placeholder {\n        color: #6d6639; }\n      .sections-new input::placeholder {\n        color: #6d6639; }\n    .sections-new__add {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      height: 3rem;\n      width: 6rem;\n      padding: 0.5rem;\n      font-size: 1.2rem;\n      line-height: normal;\n      margin-right: 1rem; }\n      .sections-new__add:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #3fcc4a; }\n      .sections-new__add:hover {\n        background-color: #3fcc4a; }\n    .sections-new__close {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: 3rem;\n      height: 3rem;\n      font-size: 1.2rem;\n      line-height: normal; }\n      .sections-new__close:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n\n.btns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 0.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sections/section-list/section-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sections_service__ = __webpack_require__("../../../../../src/app/-services/sections.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionListComponent = (function () {
    function SectionListComponent(_sectionsService) {
        this._sectionsService = _sectionsService;
        this.sections = [];
        this.wait = false;
        this.add_mode = false;
        this.temp_name = '';
        this.temp_description = '';
    }
    SectionListComponent.prototype.ngOnInit = function () {
        this.x_getSections();
    };
    // Переключатель формы добавления проекта команде
    SectionListComponent.prototype.toggleAddingMode = function () {
        this.temp_name = '';
        this.temp_description = '';
        this.add_mode = !this.add_mode;
    };
    // Получаем секции
    SectionListComponent.prototype.x_getSections = function () {
        var _this = this;
        this._sectionsService.x_getSections(this.parentProjectId)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.sections = res.data;
            }
        });
    };
    // Создаем секцию
    SectionListComponent.prototype.x_createSection = function () {
        var _this = this;
        if (!this.temp_name || !this.temp_description) {
            console.log('Write some section data');
        }
        else {
            var data = {
                id: 0,
                name: this.temp_name,
                description: this.temp_description,
                parentProjectId: this.parentProjectId
            };
            this._sectionsService.x_createSection(data)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    // console.log(res.data);
                    _this.toggleAddingMode();
                    // На кленте добавляем в массив
                    _this.sections.push(res.data);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SectionListComponent.prototype, "parentProjectId", void 0);
    SectionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'section-list',
            template: __webpack_require__("../../../../../src/app/components/sections/section-list/section-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sections/section-list/section-list.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sections_service__["a" /* SectionsService */]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sections/section-one/section-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\n  <button (click)=\"close()\">Back</button>\n</div>\n\n<loading *ngIf=\"!render_info\"></loading>\n\n<!-- [style.background-color]=\"setColor()\" -->\n<div class=\"section-info\" *ngIf=\"render_info\">\n  <div class=\"section-info__left_1\" [style.background-color]=\"parent_color\"></div>\n  <div class=\"section-info__left_2\" [style.border-left-color]=\"parent_color\"></div>\n  <div class=\"section-info__center\">\n    <div class=\"section-info__center__info\">\n      <p *ngIf=\"!mode.edit_section\">{{section.name}}</p>\n      <p *ngIf=\"!mode.edit_section\">{{section.description}}</p>\n      <input *ngIf=\"mode.edit_section\" type=\"text\" name=\"name\" [(ngModel)]=\"section.name\">\n      <input *ngIf=\"mode.edit_section\" type=\"text\" name=\"desc\" [(ngModel)]=\"section.description\">\n    </div>\n    <div class=\"section-info__center__buttons\">\n      <button *ngIf=\"mode.edit_section\" (click)=\"x_saveEdit()\">Save</button>\n      <button *ngIf=\"mode.edit_section\" (click)=\"toggleMode('edit_section')\">×</button>\n      <button *ngIf=\"!mode.edit_section\" (click)=\"toggleMode('edit_section')\">Edit</button>\n      <button *ngIf=\"!mode.edit_section\" (click)=\"x_deleteSection()\">Delete</button>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"desks\" *ngIf=\"render_info\">\n  <p>DESKS</p>\n  <br>\n\n  <div class=\"desks-list\">\n\n    <div *ngFor=\"let d of desks\" class=\"desks-list__item\" (click)=\"navigate(d.id)\">\n      <p class=\"desks__item-line\">{{d.line}}</p>\n    </div>\n\n    <div class=\"desks-list__add\">\n      <div class=\"create\" *ngIf=\"mode.add_desk\">\n        <!-- <div> -->\n          <!-- <label for=\"line\">Line</label> -->\n          <input type=\"text\" name=\"line\" [(ngModel)]=\"temp_desk_line\" placeholder=\"Desk title\">\n          <button (click)=\"x_createDesk()\">Create</button>\n          <button (click)=\"toggleMode('add_desk')\">×</button>\n        <!-- </div> -->\n      </div>\n      <button *ngIf=\"!mode.add_desk\" (click)=\"toggleMode('add_desk')\">+ DESK</button>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sections/section-one/section-one.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative; }\n\n.section-header {\n  height: 5rem; }\n  .section-header button {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    width: auto;\n    height: 3rem;\n    padding: 0 1rem;\n    line-height: 3rem;\n    font-size: 1.4rem;\n    margin-top: 1rem;\n    margin-left: 1rem; }\n    .section-header button:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #b71031; }\n\n.section-info {\n  height: 5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .section-info__left_1 {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 2.5rem 0 2.5rem 1.66666667rem;\n    border-color: transparent transparent transparent #1a3e77; }\n  .section-info__left_2 {\n    width: 0;\n    height: 0;\n    background-color: #6d6639;\n    border: 0 solid transparent;\n    border-bottom-width: 2.5rem;\n    border-top-width: 2.5rem;\n    border-left: 1.66666667rem solid black; }\n  .section-info__center {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    background-color: #6d6639; }\n    .section-info__center__info {\n      color: #fff;\n      margin-left: 1rem;\n      line-height: 2.5rem; }\n      .section-info__center__info p:last-child {\n        font-size: 1.2rem; }\n      .section-info__center__info input {\n        background: none;\n        border: none;\n        outline: none;\n        height: 2rem;\n        border-bottom: 1px solid #002359;\n        color: #fff;\n        display: block;\n        border-bottom-color: #fff; }\n        .section-info__center__info input::-webkit-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .section-info__center__info input:-ms-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .section-info__center__info input::placeholder {\n          color: #fff;\n          opacity: 0.5; }\n    .section-info__center__buttons button {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: auto;\n      height: 3rem;\n      padding: 0 1rem;\n      line-height: 3rem;\n      font-size: 1.4rem;\n      margin-top: 1rem;\n      margin-left: 1rem;\n      margin-left: 0;\n      margin-right: 0.5rem; }\n      .section-info__center__buttons button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n\n.desks {\n  padding: 1rem; }\n  .desks-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .desks-list__item {\n      cursor: pointer;\n      padding: 0 1rem;\n      text-align: center;\n      border-bottom-right-radius: 1rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 7rem;\n      margin-bottom: 1.5rem;\n      width: 23%;\n      margin-right: calc((100% - 4 * 23%) / 3);\n      background-color: #bdbfc1; }\n      .desks-list__item:nth-child(4n) {\n        margin-right: 0; }\n      @media screen and (max-width: 1000px) {\n        .desks-list__item {\n          width: 32%;\n          margin-right: calc((100% - 3 * 32%) / 2); }\n          .desks-list__item:nth-child(4n) {\n            margin-right: calc((100% - 3 * 32%) / 2); }\n          .desks-list__item:nth-child(3n) {\n            margin-right: 0; } }\n    .desks-list__add {\n      cursor: pointer;\n      padding: 0 1rem;\n      text-align: center;\n      border-bottom-right-radius: 1rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 7rem;\n      margin-bottom: 1.5rem;\n      width: 23%;\n      margin-right: calc((100% - 4 * 23%) / 3);\n      border: 1px solid #bdbfc1;\n      cursor: default; }\n      .desks-list__add:nth-child(4n) {\n        margin-right: 0; }\n      @media screen and (max-width: 1000px) {\n        .desks-list__add {\n          width: 32%;\n          margin-right: calc((100% - 3 * 32%) / 2); }\n          .desks-list__add:nth-child(4n) {\n            margin-right: calc((100% - 3 * 32%) / 2); }\n          .desks-list__add:nth-child(3n) {\n            margin-right: 0; } }\n    .desks-list__add button {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: auto;\n      height: 3rem;\n      padding: 0 1rem;\n      line-height: 3rem;\n      font-size: 1.4rem;\n      margin-top: 1rem;\n      margin-left: 1rem;\n      margin: 0; }\n      .desks-list__add button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n    .desks-list__add input {\n      background: none;\n      border: none;\n      outline: none;\n      height: 2rem;\n      border-bottom: 1px solid #002359;\n      color: #fff;\n      width: 90%;\n      margin-bottom: 0.5rem;\n      border-bottom-color: #bdbfc1;\n      color: #1a3e77; }\n      .desks-list__add input::-webkit-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .desks-list__add input:-ms-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .desks-list__add input::placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .desks-list__add input::-webkit-input-placeholder {\n        color: #1a3e77; }\n      .desks-list__add input:-ms-input-placeholder {\n        color: #1a3e77; }\n      .desks-list__add input::placeholder {\n        color: #1a3e77; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sections/section-one/section-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sections_service__ = __webpack_require__("../../../../../src/app/-services/sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_desks_service__ = __webpack_require__("../../../../../src/app/-services/desks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_service__ = __webpack_require__("../../../../../src/app/-services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionOneComponent = (function () {
    function SectionOneComponent(_sectionsService, _desksService, _projectsService, activatedRoute, router) {
        this._sectionsService = _sectionsService;
        this._desksService = _desksService;
        this._projectsService = _projectsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.desks = [];
        this.wait = {
            section: false,
            desk: false
        };
        this.mode = {
            edit_section: false,
            add_desk: false
        };
        this.temp_desk_line = '';
        // Сохраняем перед редактированием для проверки на изменение
        this.current_section_name = '';
        this.current_section_description = '';
        this.parent_color = '';
        this.render_info = false;
    }
    SectionOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.render_info = false;
        // Получаем ID из маршрута
        this.activatedRoute.params.subscribe(function (values) {
            _this.id = values.id;
        });
        this.x_getSectionInfo();
        this.x_getDesks();
    };
    // Переключатель формы добавления доски для секции
    SectionOneComponent.prototype.toggleMode = function (mode) {
        // Добавляем доску
        if (mode == 'add_desk') {
            this.temp_desk_line = '';
            this.mode.add_desk = !this.mode.add_desk;
        }
        // Редактируем секцию
        if (mode == 'edit_section') {
            this.current_section_name = this.section.name;
            this.current_section_description = this.section.description;
            this.mode.edit_section = !this.mode.edit_section;
        }
    };
    // Получаем инфу о текущей секции по ID
    SectionOneComponent.prototype.x_getSectionInfo = function () {
        var _this = this;
        this._sectionsService.x_getSection(this.id)
            .subscribe(function (res) {
            if (res.success) {
                _this.section = res.data;
                _this.x_getParentColor();
            }
        });
    };
    // Сохраняем после редактирования
    SectionOneComponent.prototype.x_saveEdit = function () {
        var _this = this;
        // Валидность
        var flag = true;
        if (this.current_section_name == this.section.name && this.current_section_description == this.section.description) {
            flag = false;
        }
        if (!flag) {
            console.log('Same lines');
        }
        else {
            this._sectionsService.x_saveEdit(this.section)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    _this.toggleMode('edit_section');
                }
            });
        }
    };
    // Удаляем секцию по ID
    SectionOneComponent.prototype.x_deleteSection = function () {
        var _this = this;
        var flag = confirm('Sure?');
        if (flag) {
            // Удаляем секцию
            this._sectionsService.x_deleteSection(this.id)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    _this.close();
                    // Удаляем все дочерние эл-ты?
                    //
                }
            });
        }
    };
    SectionOneComponent.prototype.close = function () {
        this.router.navigate([
            'dash',
            'project', this.section.parentProjectId
        ]);
    };
    // Получаем доски
    SectionOneComponent.prototype.x_getDesks = function () {
        var _this = this;
        this._desksService.x_getDesks(this.id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.desks = res.data;
            }
        });
    };
    // Создаем доску
    SectionOneComponent.prototype.x_createDesk = function () {
        var _this = this;
        if (!this.temp_desk_line) {
            console.log('write desk line');
        }
        else {
            // Отправляем данные
            var data = {
                id: -999,
                line: this.temp_desk_line,
                parentSectionId: this.id
            };
            this._desksService.x_createDesk(data)
                .subscribe(function (res) {
                console.log(res.msg);
                if (res.success) {
                    _this.toggleMode('add_desk');
                    // На клиенте - добавляем в массив
                    _this.desks.push(res.data);
                }
            });
        }
    };
    SectionOneComponent.prototype.navigate = function (id) {
        this.router.navigate([
            'dash',
            'project', this.section.parentProjectId,
            'section', this.section.id,
            'desk', id
        ]);
    };
    SectionOneComponent.prototype.x_getParentColor = function () {
        var _this = this;
        this._projectsService.x_getProject(this.section.parentProjectId)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.parent_color = res.data.color;
            }
            else {
                _this.parent_color = '#6d6639';
            }
            _this.render_info = true;
        });
    };
    SectionOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'section-one',
            template: __webpack_require__("../../../../../src/app/components/sections/section-one/section-one.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sections/section-one/section-one.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sections_service__["a" /* SectionsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_desks_service__["a" /* DesksService */],
            __WEBPACK_IMPORTED_MODULE_3__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], SectionOneComponent);
    return SectionOneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tasks/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"host\">\n  <loading *ngIf=\"wait\"></loading>\n\n  <!-- [style.background-color]=\"setColor()\" -->\n  <div class=\"task-info\" *ngIf=\"render\">\n    <div class=\"task-info__left\"></div>\n    <div class=\"task-info__center\">\n      <div class=\"task-info__center__info\">\n        <p *ngIf=\"!mode.edit_task\">{{this_task.line}}</p>\n        <input *ngIf=\"mode.edit_task\" [(ngModel)]=\"this_task.line\" type=\"text\" name=\"line\">\n      </div>\n      <div class=\"task-info__center__buttons\">\n        <button *ngIf=\"mode.edit_task\" (click)=\"x_saveEdit()\">Save</button>\n        <button *ngIf=\"mode.edit_task\" (click)=\"toggleMode('edit_task')\">×</button>\n        <button *ngIf=\"!mode.edit_task\" (click)=\"toggleMode('edit_task')\">Edit</button>\n        <button *ngIf=\"!mode.edit_task\" (click)=\"x_deleteTask()\">Delete</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"main\">\n    <p class=\"no\" *ngIf=\"!comments.length\">No comments yet</p>\n\n    <div class=\"comments\" #scrollMe style=\"overflow: scroll; height: xyz;\">\n      <comment *ngFor=\"let c of comments\" [id]=\"c.id\" (deleted)=\"deleteComment($event)\" (block_scroll)=\"___block_scroll($event)\"></comment>\n    </div>\n\n    <div class=\"comments-add\">\n      <textarea class=\"comments-add__text\" cols=\"30\" rows=\"3\" [(ngModel)]=\"temp_comment_value\"></textarea>\n      <button class=\"comments-add__button\" (click)=\"x_createComment()\">Send</button>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tasks/task/task.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".host {\n  position: absolute;\n  top: 5rem;\n  right: 0;\n  width: 40rem;\n  height: calc(100vh - 5rem); }\n\n.task-header {\n  height: 5rem; }\n  .task-header button {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    width: auto;\n    height: 3rem;\n    padding: 0 1rem;\n    line-height: 3rem;\n    font-size: 1.4rem;\n    margin-top: 1rem;\n    margin-left: 1rem; }\n    .task-header button:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #b71031; }\n\n.task-info {\n  height: 5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff; }\n  .task-info__left {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 2.5rem 0 2.5rem 1.66666667rem;\n    border-color: transparent transparent transparent #bdbfc1; }\n  .task-info__center {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .task-info__center__info {\n      color: #1a3e77;\n      margin-left: 1rem;\n      line-height: 5rem; }\n      .task-info__center__info input {\n        background: none;\n        border: none;\n        outline: none;\n        height: 2rem;\n        border-bottom: 1px solid #002359;\n        color: #fff;\n        color: #1a3e77;\n        height: 4rem;\n        display: block;\n        border-bottom-color: #fff; }\n        .task-info__center__info input::-webkit-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .task-info__center__info input:-ms-input-placeholder {\n          color: #fff;\n          opacity: 0.5; }\n        .task-info__center__info input::placeholder {\n          color: #fff;\n          opacity: 0.5; }\n    .task-info__center__buttons button {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: auto;\n      height: 3rem;\n      padding: 0 1rem;\n      line-height: 3rem;\n      font-size: 1.4rem;\n      margin-top: 1rem;\n      margin-left: 1rem;\n      margin-left: 0;\n      margin-right: 0.5rem; }\n      .task-info__center__buttons button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n\n.main {\n  height: calc(100% - 6rem);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.comments {\n  height: calc(100% - 5rem);\n  overflow: auto; }\n  .comments-add {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .comments-add__text {\n      width: calc(100% - 8rem);\n      resize: none;\n      border-radius: 3px; }\n      .comments-add__text:focus {\n        outline: 0; }\n    .comments-add__button {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359;\n      width: auto;\n      height: 3rem;\n      padding: 0 1rem;\n      line-height: 3rem;\n      font-size: 1.4rem;\n      margin-top: 1rem;\n      margin-left: 1rem; }\n      .comments-add__button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n\n.no {\n  width: 100%;\n  text-align: center;\n  padding-top: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tasks/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__ = __webpack_require__("../../../../../src/app/-services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comments_service__ = __webpack_require__("../../../../../src/app/-services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/-services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskComponent = (function () {
    function TaskComponent(_tasksService, _commentsService, usersService, activatedRoute, router) {
        this._tasksService = _tasksService;
        this._commentsService = _commentsService;
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.scroll_blocked = false;
        this.comments = [];
        this.wait = false;
        this.mode = {
            add_comment: true,
            edit_task: false
        };
        this.temp_comment_value = '';
        this.render = false;
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scroll_blocked = false;
        this.render = false;
        this.wait = true;
        this.activatedRoute.params
            .subscribe(function (params) {
            return _this.id = parseInt(params.id);
        });
        this.x_getTask();
        this.x_getComments();
        this.___scrollToBottom();
    };
    TaskComponent.prototype.ngAfterViewChecked = function () {
        this.___scrollToBottom();
    };
    TaskComponent.prototype.___scrollToBottom = function () {
        if (!this.scroll_blocked) {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
    };
    TaskComponent.prototype.___block_scroll = function (e) {
        this.scroll_blocked = e;
    };
    // Переключатель формы добавления комментария таску
    TaskComponent.prototype.toggleMode = function (mode) {
        if (mode == 'add_comment') {
            this.temp_comment_value = '';
            this.mode.add_comment = !this.mode.add_comment;
        }
        if (mode == 'edit_task') {
            this.mode.edit_task = !this.mode.edit_task;
        }
    };
    TaskComponent.prototype.x_getTask = function () {
        var _this = this;
        this._tasksService.x_getTask(this.id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.this_task = res.data;
            }
            _this.render = true;
        });
    };
    TaskComponent.prototype.x_saveEdit = function () {
        var _this = this;
        var data = {
            id: this.id,
            line: this.this_task.line,
            parentDeskId: this.this_task.parentDeskId
        };
        this._tasksService.x_saveEdit(data)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.toggleMode('edit_task');
            }
        });
    };
    TaskComponent.prototype.x_deleteTask = function () {
        var _this = this;
        var flag = confirm('Sure?');
        if (flag) {
            // Удаляем таск
            this._tasksService.x_deleteTask(this.id)
                .subscribe(function (res) {
                console.log(res.msg);
                if (res.success) {
                    // Отдаем в событие сервиса ID для удаления таска и в досках
                    _this._tasksService.emitTaskDeleted(_this.id);
                    _this.parentRoute();
                }
            });
        }
    };
    TaskComponent.prototype.x_getComments = function () {
        var _this = this;
        this._commentsService.x_getComments(this.id)
            .subscribe(function (res) {
            // console.log(res.msg);
            if (res.success) {
                _this.comments = res.data;
            }
            _this.wait = false;
        });
    };
    TaskComponent.prototype.x_createComment = function () {
        var _this = this;
        if (!this.temp_comment_value) {
            console.log('Write some');
        }
        else {
            var data = {
                text: this.temp_comment_value,
                parentTaskId: this.id,
                parentUserId: this.usersService.getID()
            };
            this._commentsService.x_createComment(data)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    _this.toggleMode('add_comment');
                    _this.comments.push(res.data);
                }
            });
        }
    };
    // На клиенте - удаляем коммент
    TaskComponent.prototype.deleteComment = function (id) {
        for (var i = 0; i < this.comments.length; i++) {
            if (this.comments[i].id == id) {
                this.comments.splice(i, 1);
            }
        }
    };
    // Уходим назад в доску
    TaskComponent.prototype.parentRoute = function () {
        this.router.navigate([
            'dash',
            'project',
            this._tasksService.parentsID.p,
            'section',
            this._tasksService.parentsID.s,
            'desk',
            this.this_task.parentDeskId
        ]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TaskComponent.prototype, "myScrollContainer", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'task',
            template: __webpack_require__("../../../../../src/app/components/tasks/task/task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tasks/task/task.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */],
            __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/teams/team-list/team-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"teams\">\n  <p class=\"teams-title\">Teams</p>\n\n  <team \n    *ngFor=\"let t of teams\" \n    [id]=\"t.id\" \n    [name]=\"t.name\" \n    (click)=\"sendIdToProjects(t.id)\"\n    (team_deleted)=\"x_deleteTeamLocal($event)\"></team>\n\n  <div class=\"teams-add\">\n    <button \n      class=\"teams-add__btn\"\n      [class.AAA]=\"add_team_mode\"\n      (click)=\"toggleAddingMode()\">+</button>\n  \n    <div class=\"teams-add__form\" *ngIf=\"add_team_mode\">\n      <input [(ngModel)]=\"temp_team_name\" type=\"text\" placeholder=\"team name\">\n      <button (click)=\"x_createTeam(temp_team_name)\">Create</button>\n    </div>\n  </div>\n \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/teams/team-list/team-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".teams-title {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0.5rem; }\n\n.teams-add {\n  position: relative;\n  padding: 0.5rem 0;\n  padding-left: 1rem; }\n  .teams-add__btn {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100px;\n    font-size: 3rem;\n    line-height: 4rem;\n    background-color: #002359;\n    background-color: #6d6639; }\n    .teams-add__btn:hover {\n      background-color: #b71031;\n      transition: all 0.3s;\n      box-shadow: 0px 0px 10px 0 #b71031; }\n  .teams-add__form {\n    width: 85%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline; }\n    .teams-add__form input {\n      background: none;\n      border: none;\n      outline: none;\n      height: 2rem;\n      border-bottom: 1px solid #002359;\n      color: #fff;\n      width: 70%; }\n      .teams-add__form input::-webkit-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .teams-add__form input:-ms-input-placeholder {\n        color: #fff;\n        opacity: 0.5; }\n      .teams-add__form input::placeholder {\n        color: #fff;\n        opacity: 0.5; }\n    .teams-add__form button {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      height: 2rem;\n      border-radius: 100px;\n      font-size: 1rem;\n      line-height: 1.8rem;\n      background-color: #002359;\n      width: 25%; }\n      .teams-add__form button:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n\n.AAA {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  background-color: #b71031;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 2rem;\n  height: 2rem;\n  font-size: 1.2rem;\n  line-height: 1.9rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/teams/team-list/team-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_teams_service__ = __webpack_require__("../../../../../src/app/-services/teams.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamListComponent = (function () {
    function TeamListComponent(_teamsService) {
        this._teamsService = _teamsService;
        this.teams = [];
        this.add_team_mode = false;
        this.temp_team_name = '';
        this.TeamId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TeamListComponent.prototype.ngOnInit = function () {
        this.x_getTeams();
    };
    // Получаем все команды через сервис
    TeamListComponent.prototype.x_getTeams = function () {
        var _this = this;
        this._teamsService.x_getTeams()
            .subscribe(function (res) {
            _this.teams = res.data;
        });
    };
    // Переключатель формы добавления пользователья в команду
    TeamListComponent.prototype.toggleAddingMode = function () {
        this.temp_team_name = '';
        this.add_team_mode = !this.add_team_mode;
    };
    // Добавление команды
    TeamListComponent.prototype.x_createTeam = function (team_name) {
        var _this = this;
        if (!team_name) {
            console.log('Write some team name');
        }
        else {
            this._teamsService.x_createTeam(team_name)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    // На клиенте
                    _this.teams.push(res.data);
                    _this.temp_team_name = '';
                    _this.toggleAddingMode();
                }
            });
        }
    };
    // Нажатие на команде для отображения списка проектов
    // отправка id в dashboard - оттуда в project list
    TeamListComponent.prototype.sendIdToProjects = function (team_id) {
        this.TeamId.emit(team_id);
    };
    // На клиенте - удаляем из массива
    TeamListComponent.prototype.x_deleteTeamLocal = function (e) {
        var DB = this.teams;
        for (var i = 0; i < DB.length; i++) {
            if (DB[i].id == e) {
                this.teams.splice(i, 1);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TeamListComponent.prototype, "TeamId", void 0);
    TeamListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team-list',
            template: __webpack_require__("../../../../../src/app/components/teams/team-list/team-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/teams/team-list/team-list.component.sass")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_teams_service__["a" /* TeamsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_teams_service__["a" /* TeamsService */]])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/teams/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"team\">\n\n  <div class=\"team-header\">\n    <span class=\"team-header__name\">{{name}}</span>\n\n    <button \n      class=\"team-header__delete\"\n      (click)=\"x_deleteTeam(id, $event)\">Delete</button>\n  </div>\n\n  <div class=\"team-users\">\n    <user \n      *ngFor=\"let u of teamUsers\" \n      [id]=\"u.id\" \n      [name]=\"u.name\"\n      [avatar]=\"u.avatar\"\n      (click)=\"x_deleteFromTeam(u.id, id, $event)\">\n    </user>\n\n    <button \n      class=\"team-users__add\"\n      [class.AAA]=\"add_user_mode\"\n      (click)=\"toggleAddingMode()\"><div>+</div></button>\n  </div>\n  \n  <div class=\"team-users__add-form\">\n    <input \n      *ngIf=\"add_user_mode\" \n      [(ngModel)]=\"temp_email\" \n      type=\"email\" \n      placeholder=\"enter email\">\n    <button \n      *ngIf=\"add_user_mode\" \n      (click)=\"x_addUserByEmail(temp_email)\">Поиск</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/teams/team/team.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team {\n  position: relative;\n  padding: 0.5rem;\n  padding-left: 1rem; }\n  .team:hover {\n    cursor: pointer;\n    background-color: #6d6639;\n    transition: all 0.2s; }\n    .team:hover .team-header__delete {\n      opacity: 1; }\n  .team-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 0.5rem; }\n    .team-header__name {\n      line-height: 2rem; }\n    .team-header__delete {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      height: 2rem;\n      border-radius: 100px;\n      font-size: 1rem;\n      line-height: 1.8rem;\n      background-color: #002359;\n      width: 4rem;\n      opacity: 0; }\n      .team-header__delete:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n  .team-users {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .team-users__add {\n      color: #fff;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      width: 4rem;\n      height: 4rem;\n      border-radius: 100px;\n      font-size: 3rem;\n      line-height: 4rem;\n      background-color: #002359; }\n      .team-users__add:hover {\n        background-color: #b71031;\n        transition: all 0.3s;\n        box-shadow: 0px 0px 10px 0 #b71031; }\n      .team-users__add-form {\n        width: 85%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: baseline;\n            -ms-flex-align: baseline;\n                align-items: baseline; }\n        .team-users__add-form input {\n          width: 70%;\n          background: none;\n          border: none;\n          outline: none;\n          height: 2rem;\n          border-bottom: 1px solid #002359;\n          color: #fff; }\n          .team-users__add-form input::-webkit-input-placeholder {\n            color: #fff;\n            opacity: 0.5; }\n          .team-users__add-form input:-ms-input-placeholder {\n            color: #fff;\n            opacity: 0.5; }\n          .team-users__add-form input::placeholder {\n            color: #fff;\n            opacity: 0.5; }\n        .team-users__add-form button {\n          color: #fff;\n          text-align: center;\n          cursor: pointer;\n          outline: none;\n          border: none;\n          height: 2rem;\n          border-radius: 100px;\n          font-size: 1rem;\n          line-height: 1.8rem;\n          background-color: #002359;\n          width: 25%; }\n          .team-users__add-form button:hover {\n            background-color: #b71031;\n            transition: all 0.3s;\n            box-shadow: 0px 0px 10px 0 #b71031; }\n\n.AAA {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  background-color: #b71031;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 2rem;\n  height: 2rem;\n  font-size: 1.2rem;\n  line-height: 1.9rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/teams/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/-services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teams_service__ = __webpack_require__("../../../../../src/app/-services/teams.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = (function () {
    function TeamComponent(_usersService, _teamsService) {
        this._usersService = _usersService;
        this._teamsService = _teamsService;
        this.teamUsers = [];
        this.team_deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.add_user_mode = false;
        this.temp_email = '';
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.x_getTeamUsers(this.id);
    };
    // Получаем пользователей в команду по id команды
    TeamComponent.prototype.x_getTeamUsers = function (id) {
        var _this = this;
        this._usersService.x_getTeamUsers(id)
            .subscribe(function (res) {
            _this.teamUsers = res.data;
        });
    };
    // Добавляем пользователя по email
    TeamComponent.prototype.x_addUserByEmail = function (email) {
        var _this = this;
        if (!email) {
            console.log('Write some email');
        }
        else {
            this._usersService.x_addUserToTeam(email, this.id)
                .subscribe(function (res) {
                if (res.success) {
                    _this.temp_email = '';
                    _this.toggleAddingMode();
                    _this.teamUsers.push(res.data);
                }
                else {
                    // console.log(res.msg);
                }
            });
        }
    };
    // Удаляем из команды по Id пользователя
    TeamComponent.prototype.x_deleteFromTeam = function (user_id, team_id, e) {
        var _this = this;
        e.preventDefault();
        var flag = confirm('Sure?');
        if (flag) {
            // Удаляем пользователя
            this._usersService.x_deleteFromTeam(user_id, team_id)
                .subscribe(function (res) {
                _this.x_deleteFromTeamLocal(user_id);
            });
        }
    };
    // На клиенте - удаляем из массива
    TeamComponent.prototype.x_deleteFromTeamLocal = function (id) {
        var DB = this.teamUsers;
        for (var i = 0; i < DB.length; i++) {
            if (DB[i].id == id) {
                this.teamUsers.splice(i, 1);
            }
        }
    };
    // Удаляем команду
    TeamComponent.prototype.x_deleteTeam = function (team_id, e) {
        var _this = this;
        e.preventDefault();
        var flag = confirm('Sure?');
        if (flag) {
            this._teamsService.x_deleteTeam(team_id)
                .subscribe(function (res) {
                // console.log(res.msg);
                if (res.success) {
                    _this.team_deleted.emit(team_id);
                }
            });
        }
    };
    // Переключатель формы добавления пользователья в команду
    TeamComponent.prototype.toggleAddingMode = function () {
        this.temp_email = '';
        this.add_user_mode = !this.add_user_mode;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "team_deleted", void 0);
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team',
            template: __webpack_require__("../../../../../src/app/components/teams/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/teams/team/team.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_2__services_teams_service__["a" /* TeamsService */]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user\" [style.background-image]=\"'url(' + avatar + ')'\">\r\n\t{{name}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/users/user/user.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.user {\n  position: relative;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 100px;\n  font-size: 0.8rem;\n  line-height: 4rem;\n  text-align: center;\n  background-size: cover;\n  background-position: center;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem; }\n  .user:hover:before {\n    content: '\\D7';\n    font-size: 3rem;\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    background-color: black;\n    opacity: 0.8;\n    z-index: 10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "avatar", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user',
            template: __webpack_require__("../../../../../src/app/components/users/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/user/user.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/-services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._authService.x_getUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map