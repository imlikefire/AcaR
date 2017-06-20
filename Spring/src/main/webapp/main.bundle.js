webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 142;


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromDBService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FromDBService = (function () {
    function FromDBService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.loginUser = function (link, email, password) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
            urlSearchParams.append('email', email);
            urlSearchParams.append('password', password);
            var body = urlSearchParams.toString();
            return this.http.post(link, body, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }))
                .map(function (response) { return response; }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.registerUser = function (link, postObject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
            return this.http.post(link, JSON.stringify(postObject), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }))
                .map(function (response) { return response; });
        };
        this.getUser = function (link, id) {
            return this.http.get(link + id)
                .map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getCourses = function (link) {
            return this.http.get(link).map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getProfs = function (link) {
            return this.http.get(link).map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.gradeProf = function (link, name, grade) {
            return this.http.put(link + name + '/' + grade, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers }))
                .map(function (response) { return response; })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getBestProf = function (link, courseName) {
            return this.http.get(link + courseName).map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getSchedule = function (link) {
            return this.http.get(link).map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getResources = function (link) {
            return this.http.get(link).map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getOnlineDocs = function () {
            return this.http.get("./assets/od.json").map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getSoftware = function () {
            return this.http.get("./assets/soft.json").map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.getProjects = function () {
            return this.http.get("./assets/proj.json").map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.resetPass = function (link, email) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
            urlSearchParams.append('email', email);
            var body = urlSearchParams.toString();
            return this.http.post(link, body, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }))
                .map(function (response) { return response; })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
        this.validateAccount = function (link, email, code) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
            urlSearchParams.append('email', email);
            urlSearchParams.append('code', code);
            var body = urlSearchParams.toString();
            return this.http.post(link, body, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }))
                .map(function (response) { return response; })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
        };
    }
    return FromDBService;
}());
FromDBService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object])
], FromDBService);

var _a;
//# sourceMappingURL=fromdb.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.loggedIn = false;
        this.firstName = '';
        this.lastName = '';
        this.userRole = '';
        this.email = '';
        this.loginLoaded = true;
        this.registered = false;
        this.setLoginStatus = function (log) {
            this.loggedIn = log;
        };
        this.setID = function (id) {
            this.userID = id;
        };
        this.setFirstName = function (name) {
            this.firstName = name;
        };
        this.setLastName = function (name) {
            this.lastName = name;
        };
        this.loadLogin = function () {
            this.loginLoaded = true;
        };
        this.loadRegister = function () {
            this.loginLoaded = false;
        };
        this.setRegistered = function (reg) {
            this.registered = reg;
        };
        this.setUserRole = function (role) {
            this.userRole = role;
        };
        this.setUserEmail = function (email) {
            this.email = email;
        };
        this.setPassword = function (pass) {
            this.password = pass;
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(238),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fromdb_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cursuri_cursuri_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__books_books_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__onlinedocs_onlinedocs_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__software_software_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projects_projects_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__validate_validate_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__schedule_schedule_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__settings_settings_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_nvd3__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profs_profs_component__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'cursuri',
                    component: __WEBPACK_IMPORTED_MODULE_9__cursuri_cursuri_component__["a" /* CursuriComponent */]
                },
                {
                    path: 'books',
                    component: __WEBPACK_IMPORTED_MODULE_11__books_books_component__["a" /* BooksComponent */]
                },
                {
                    path: 'online-docs',
                    component: __WEBPACK_IMPORTED_MODULE_12__onlinedocs_onlinedocs_component__["a" /* OnlinedocsComponent */]
                },
                {
                    path: 'software',
                    component: __WEBPACK_IMPORTED_MODULE_13__software_software_component__["a" /* SoftwareComponent */]
                },
                {
                    path: 'projects',
                    component: __WEBPACK_IMPORTED_MODULE_14__projects_projects_component__["a" /* ProjectsComponent */]
                },
                {
                    path: 'schedule',
                    component: __WEBPACK_IMPORTED_MODULE_16__schedule_schedule_component__["a" /* ScheduleComponent */]
                },
                {
                    path: 'profs',
                    component: __WEBPACK_IMPORTED_MODULE_20__profs_profs_component__["a" /* ProfsComponent */]
                }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__cursuri_cursuri_component__["a" /* CursuriComponent */],
            __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__books_books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_12__onlinedocs_onlinedocs_component__["a" /* OnlinedocsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__software_software_component__["a" /* SoftwareComponent */],
            __WEBPACK_IMPORTED_MODULE_14__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__validate_validate_component__["a" /* ValidateComponent */],
            __WEBPACK_IMPORTED_MODULE_16__schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_nvd3__["NvD3Component"],
            __WEBPACK_IMPORTED_MODULE_20__profs_profs_component__["a" /* ProfsComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__fromdb_service__["a" /* FromDBService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    function BooksComponent(newService) {
        this.newService = newService;
        this.booksLink = "http://localhost:5991/resurse/getAll";
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newService.getResources(this.booksLink).subscribe(function (resources) {
            _this.books = resources;
        }, function (err) {
            console.log(err);
        });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-books',
        template: __webpack_require__(239),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], BooksComponent);

var _a;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursuriComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CursuriComponent = (function () {
    function CursuriComponent(newService) {
        this.newService = newService;
        this.click = false;
        this.filterbyname = '';
        this.filterbyan = '';
        this.cursuriLink = "http://localhost:5991/v1/orar/discipline/getAll";
        this.bestProfLink = "http://localhost:5991/v1/orar/profesori/getBestByNota/";
        this.bestProcLink = "http://localhost:5991/v1/orar/profesori/getBestByProcentaj/";
        this.getBestNota = function () {
            var _this = this;
            this.newService.getBestProf(this.bestProfLink, this.course).subscribe(function (best) {
                _this.best = best;
            }, function (err) {
                console.log(err);
            });
        };
        this.getBestProc = function () {
            var _this = this;
            this.newService.getBestProf(this.bestProcLink, this.course).subscribe(function (bestProc) {
                _this.bestProc = bestProc;
            }, function (err) {
                console.log(err);
            });
        };
        this.clicked = function (courseName) {
            this.click = true;
            this.course = courseName;
            this.getBestNota();
            this.getBestProc();
        };
        this.options = {
            chart: {
                type: 'pieChart',
                height: 450,
                showLabels: true,
                duration: 0.01,
                refresh: true,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    }
                },
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                }
            }
        };
        this.data = [
            {
                key: "Nota 4",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Nota 5",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Nota 6",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Nota 7",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Nota 8",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Nota 9",
                y: Math.floor((Math.random() * 10) + 1)
            },
            {
                key: "Nota 10",
                y: Math.floor((Math.random() * 10) + 1)
            }
        ];
    }
    CursuriComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newService.getCourses(this.cursuriLink).subscribe(function (cursuri) {
            _this.cursuri = cursuri;
        }, function (err) {
            console.log(err);
        });
    };
    return CursuriComponent;
}());
CursuriComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cursuri',
        template: __webpack_require__(240),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], CursuriComponent);

var _a;
//# sourceMappingURL=cursuri.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(userService) {
        this.userService = userService;
        this.email = '';
        this.password = '';
        this.loginUrl = 'http://localhost:5991/login';
        this.loginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.passEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        FB.init({
            appId: '1353185968129247',
            secret: '15fddd64c6b7d17787d937716fb8c4fe',
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.9',
            authEndpoint: 'localhost:5991',
            oauth: true,
            email: true
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogged = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            _this.onFacebookLoginClick();
        });
    };
    LoginComponent.prototype.onFacebookLoginClick = function () {
        FB.init({
            appId: '1353185968129247',
            secret: '15fddd64c6b7d17787d937716fb8c4fe',
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.9',
            authEndpoint: 'localhost:5991',
            oauth: true,
            email: true
        });
        FB.login(function (response) {
            if (response.authResponse) {
                var self = this;
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', { "fields": "id,name" }, function (response) {
                    console.log(response);
                    this.user = response;
                    this.user.role = 'user';
                    console.log(this.user);
                    self.loginEvent.emit(true);
                });
            }
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };
    LoginComponent.prototype.logOut = function () {
        FB.logout(function (response) { });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.loginUser(this.loginUrl, this.email, this.password).subscribe(function (response) {
            _this.loginEvent.emit(true);
            var id = response._body;
            _this.userID = id;
            _this.userEvent.emit(id);
            _this.passEvent.emit(_this.password);
        }, function (error) {
            console.log("Login error !");
        }, function () {
        });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LoginComponent.prototype, "loginEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], LoginComponent.prototype, "userEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], LoginComponent.prototype, "passEvent", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(241),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(newService) {
        this.newService = newService;
        this.cursuriLink = "http://localhost:5991/v1/orar/discipline/getAll";
        this.profsLink = "http://localhost:5991/v1/orar/profesori/getAll";
        this.userLink = "http://localhost:5991/v1/users/";
        this.firstNameEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lastNameEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userRoleEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emailEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newService.getCourses(this.cursuriLink).subscribe(function (cursuri) {
            _this.cursuri = cursuri;
        }, function (err) {
            console.log(err);
        });
        this.newService.getProfs(this.profsLink).subscribe(function (profs) {
            _this.profs = profs;
        }, function (err) {
            console.log(err);
        });
        this.newService.getOnlineDocs().subscribe(function (od) {
            _this.od = od;
        }, function (err) {
            console.log(err);
        });
        this.newService.getProjects().subscribe(function (proj) {
            _this.proj = proj;
        }, function (err) {
            console.log(err);
        });
        this.newService.getSoftware().subscribe(function (soft) {
            _this.soft = soft;
        }, function (err) {
            console.log(err);
        });
        this.getUsername();
    };
    MenuComponent.prototype.getUsername = function () {
        var _this = this;
        this.newService.getUser(this.userLink, this.userID).subscribe(function (user) {
            _this.firstNameEvent.emit(user.firstName);
            _this.lastNameEvent.emit(user.lastName);
            _this.userRoleEvent.emit(user.role);
            _this.emailEvent.emit(user.email);
        }, function (err) {
            console.log(err);
        });
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MenuComponent.prototype, "userID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MenuComponent.prototype, "firstNameEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], MenuComponent.prototype, "lastNameEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], MenuComponent.prototype, "userRoleEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], MenuComponent.prototype, "emailEvent", void 0);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(242),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _e || Object])
], MenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlinedocsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnlinedocsComponent = (function () {
    function OnlinedocsComponent(newService) {
        this.newService = newService;
    }
    OnlinedocsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newService.getOnlineDocs().subscribe(function (od) {
            _this.od = od;
        }, function (err) {
            console.log(err);
        });
    };
    return OnlinedocsComponent;
}());
OnlinedocsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-onlinedocs',
        template: __webpack_require__(243),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], OnlinedocsComponent);

var _a;
//# sourceMappingURL=onlinedocs.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
        this.firstName = '';
        this.lastName = '';
        this.userRole = '';
        this.email = '';
        this.logEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clicked = false;
        this.setClicked = function () {
            this.clicked = !this.clicked;
        };
        this.logout = function () {
            this.logEvent.emit(false);
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProfileComponent.prototype, "firstName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProfileComponent.prototype, "lastName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProfileComponent.prototype, "userRole", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProfileComponent.prototype, "email", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ProfileComponent.prototype, "logEvent", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(244),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfsComponent = (function () {
    function ProfsComponent(newService) {
        this.newService = newService;
        this.filterbyname = '';
        this.filterbyrating = 0;
        this.filterbyprom = 0;
        this.clicked = false;
        this.profsLink = "http://localhost:5991/v1/orar/profesori/getAll";
        this.gradeLink = "http://localhost:5991/v1/orar/profesori/addNota/";
        this.getTeachers = function () {
            var _this = this;
            this.newService.getProfs(this.profsLink).subscribe(function (profs) {
                _this.profs = profs;
            }, function (err) {
                console.log(err);
            });
        };
        this.addNota = function (name) {
            this.profName = name;
            this.clicked = true;
        };
        this.gradeTeacher = function (name, grade) {
            var _this = this;
            if (this.grade) {
                this.newService.gradeProf(this.gradeLink, name, grade).subscribe(function (response) {
                    console.log("success");
                    var pr = JSON.parse(response._body);
                    for (var i = 0; i < _this.profs.length; i++)
                        if (_this.profs[i].id_prof == pr.id_prof)
                            _this.profs[i] = pr;
                }, function (error) {
                    console.log("error");
                });
            }
        };
    }
    ProfsComponent.prototype.ngOnInit = function () {
        this.getTeachers();
    };
    return ProfsComponent;
}());
ProfsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profs',
        template: __webpack_require__(245),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], ProfsComponent);

var _a;
//# sourceMappingURL=profs.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent(newService) {
        this.newService = newService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newService.getProjects().subscribe(function (proj) {
            _this.proj = proj;
        }, function (err) {
            console.log(err);
        });
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(246),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.registerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user = {
            active: false,
            email: '',
            firstName: '',
            id: 0,
            lastName: '',
            password: '',
            role: 'student'
        };
        this.userLink = "http://localhost:5991/register";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.registerUser(this.userLink, this.user).subscribe(function (succes) {
            console.log("Register succeeded :" + succes);
            _this.registerEvent.emit(true);
        }, function (error) {
            console.log("Register error !");
        }, function () {
        });
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerEvent", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(247),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleComponent = (function () {
    function ScheduleComponent(newService) {
        this.newService = newService;
        this.filterByGroup = '';
        this.filterByClass = '';
        this.filterByName = '';
        this.filterByProf = '';
        this.scheduleLink = "http://localhost:5991/v1/orar/getAll";
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newService.getCourses(this.scheduleLink).subscribe(function (schedule) {
            _this.schedule = schedule;
        }, function (err) {
            console.log(err);
        });
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(248),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], ScheduleComponent);

var _a;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(newService) {
        this.newService = newService;
        this.clicked = false;
        this.show = false;
        this.oldpass = '';
        this.message = '';
        this.resetEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.resetUrl = 'http://localhost:5991/login/password';
        this.setClicked = function () {
            this.clicked = !this.clicked;
        };
        this.showResetInput = function () {
            this.show = !this.show;
        };
        this.resetPassword = function () {
            if (this.oldpass == this.password) {
                this.message = "Password reset ! Check your email !";
                this.newService.resetPass(this.resetUrl, this.email).subscribe(function (success) {
                    console.log("Password reset successful : " + success);
                }, function (error) {
                    console.log("Password reset error : " + error);
                }, function () {
                });
                this.resetEvent.emit(false);
            }
            else
                this.message = "Wrong password !";
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SettingsComponent.prototype, "password", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SettingsComponent.prototype, "email", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SettingsComponent.prototype, "resetEvent", void 0);
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(249),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _b || Object])
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SoftwareComponent = (function () {
    function SoftwareComponent(newService) {
        this.newService = newService;
    }
    SoftwareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newService.getSoftware().subscribe(function (soft) {
            _this.soft = soft;
        }, function (err) {
            console.log(err);
        });
    };
    return SoftwareComponent;
}());
SoftwareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-software',
        template: __webpack_require__(250),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], SoftwareComponent);

var _a;
//# sourceMappingURL=software.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fromdb_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidateComponent = (function () {
    function ValidateComponent(userService) {
        this.userService = userService;
        this.email = '';
        this.code = '';
        this.link = "http://localhost:5991/register/validate";
        this.message = '';
    }
    ValidateComponent.prototype.ngOnInit = function () {
    };
    ValidateComponent.prototype.validate = function () {
        var _this = this;
        this.userService.validateAccount(this.link, this.email, this.code).subscribe(function (succes) {
            console.log("Succes validation :" + succes);
            _this.message = "Validation complete !";
        }, function (error) {
            console.log("Error at validation :" + error);
        }, function () {
        });
    };
    return ValidateComponent;
}());
ValidateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-validate',
        template: __webpack_require__(251),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fromdb_service__["a" /* FromDBService */]) === "function" && _a || Object])
], ValidateComponent);

var _a;
//# sourceMappingURL=validate.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "h1,h3 {\r\n  padding-top: 3%;\r\n  text-align: center;\r\n  color: snow;\r\n  font-weight: bolder;\r\n  font-size: 40px;\r\n  font-family: \"Adobe Devanagari\";\r\n}\r\n\r\n\r\nh1 {\r\n  font-size: 30px;\r\n}\r\n\r\n.footer-text-white{\r\n  color: white;\r\n  font-style: italic;\r\n}\r\n.footer-text-black {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.login-box {\r\n  background-color: #848688;\r\n  width: 550px !important;\r\n  max-width: 550px;\r\n}\r\n\r\n.login-content {\r\n  width: 400px;\r\n  display: block;\r\n  margin:0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.login-logo {\r\n  width: 20%;\r\n}\r\n\r\n.login-title {\r\n  color: black;\r\n}\r\n\r\n\r\n.login-bg {\r\n  height: 100vh;\r\n  min-height: 100vh;\r\n}\r\n\r\n.child {\r\n  margin-top:100px;\r\n}\r\n\r\n\r\n\r\n\r\n.btn-social {\r\n  position: relative;\r\n  padding-left: 44px;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis\r\n}\r\n\r\n.btn-social > :first-child {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 32px;\r\n  line-height: 34px;\r\n  font-size: 1.6em;\r\n  text-align: center;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-social.btn-lg {\r\n  padding-left: 61px\r\n}\r\n\r\n.btn-social.btn-lg > :first-child {\r\n  line-height: 45px;\r\n  width: 45px;\r\n  font-size: 1.8em\r\n}\r\n\r\n.btn-social.btn-sm {\r\n  padding-left: 38px\r\n}\r\n\r\n.btn-social.btn-sm > :first-child {\r\n  line-height: 28px;\r\n  width: 28px;\r\n  font-size: 1.4em\r\n}\r\n\r\n.btn-social.btn-xs {\r\n  padding-left: 30px\r\n}\r\n\r\n.btn-social.btn-xs > :first-child {\r\n  line-height: 20px;\r\n  width: 20px;\r\n  font-size: 1.2em\r\n}\r\n\r\n.btn-social-icon {\r\n  position: relative;\r\n  padding-left: 44px;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  height: 34px;\r\n  width: 34px;\r\n  padding: 0\r\n}\r\n\r\n.btn-social-icon > :first-child {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 32px;\r\n  line-height: 34px;\r\n  font-size: 1.6em;\r\n  text-align: center;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-social-icon.btn-lg {\r\n  padding-left: 61px\r\n}\r\n\r\n.btn-social-icon.btn-lg > :first-child {\r\n  line-height: 45px;\r\n  width: 45px;\r\n  font-size: 1.8em\r\n}\r\n\r\n.btn-social-icon.btn-sm {\r\n  padding-left: 38px\r\n}\r\n\r\n.btn-social-icon.btn-sm > :first-child {\r\n  line-height: 28px;\r\n  width: 28px;\r\n  font-size: 1.4em\r\n}\r\n\r\n.btn-social-icon.btn-xs {\r\n  padding-left: 30px\r\n}\r\n\r\n.btn-social-icon.btn-xs > :first-child {\r\n  line-height: 20px;\r\n  width: 20px;\r\n  font-size: 1.2em\r\n}\r\n\r\n.btn-social-icon > :first-child {\r\n  border: none;\r\n  text-align: center;\r\n  width: 100% !important\r\n}\r\n\r\n.btn-social-icon.btn-lg {\r\n  height: 45px;\r\n  width: 45px;\r\n  padding-left: 0;\r\n  padding-right: 0\r\n}\r\n\r\n.btn-social-icon.btn-sm {\r\n  height: 30px;\r\n  width: 30px;\r\n  padding-left: 0;\r\n  padding-right: 0\r\n}\r\n\r\n.btn-social-icon.btn-xs {\r\n  height: 22px;\r\n  width: 22px;\r\n  padding-left: 0;\r\n  padding-right: 0\r\n}\r\n\r\n.btn-adn {\r\n  color: #fff;\r\n  background-color: #d87a68;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:focus, .btn-adn.focus {\r\n  color: #fff;\r\n  background-color: #ce563f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:hover {\r\n  color: #fff;\r\n  background-color: #ce563f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active, .btn-adn.active, .open > .dropdown-toggle.btn-adn {\r\n  color: #fff;\r\n  background-color: #ce563f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active:hover, .btn-adn.active:hover, .open > .dropdown-toggle.btn-adn:hover, .btn-adn:active:focus, .btn-adn.active:focus, .open > .dropdown-toggle.btn-adn:focus, .btn-adn:active.focus, .btn-adn.active.focus, .open > .dropdown-toggle.btn-adn.focus {\r\n  color: #fff;\r\n  background-color: #b94630;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active, .btn-adn.active, .open > .dropdown-toggle.btn-adn {\r\n  background-image: none\r\n}\r\n\r\n.btn-adn.disabled:hover, .btn-adn[disabled]:hover, fieldset[disabled] .btn-adn:hover, .btn-adn.disabled:focus, .btn-adn[disabled]:focus, fieldset[disabled] .btn-adn:focus, .btn-adn.disabled.focus, .btn-adn[disabled].focus, fieldset[disabled] .btn-adn.focus {\r\n  background-color: #d87a68;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn .badge {\r\n  color: #d87a68;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-bitbucket {\r\n  color: #fff;\r\n  background-color: #205081;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:focus, .btn-bitbucket.focus {\r\n  color: #fff;\r\n  background-color: #163758;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:hover {\r\n  color: #fff;\r\n  background-color: #163758;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active, .btn-bitbucket.active, .open > .dropdown-toggle.btn-bitbucket {\r\n  color: #fff;\r\n  background-color: #163758;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active:hover, .btn-bitbucket.active:hover, .open > .dropdown-toggle.btn-bitbucket:hover, .btn-bitbucket:active:focus, .btn-bitbucket.active:focus, .open > .dropdown-toggle.btn-bitbucket:focus, .btn-bitbucket:active.focus, .btn-bitbucket.active.focus, .open > .dropdown-toggle.btn-bitbucket.focus {\r\n  color: #fff;\r\n  background-color: #0f253c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active, .btn-bitbucket.active, .open > .dropdown-toggle.btn-bitbucket {\r\n  background-image: none\r\n}\r\n\r\n.btn-bitbucket.disabled:hover, .btn-bitbucket[disabled]:hover, fieldset[disabled] .btn-bitbucket:hover, .btn-bitbucket.disabled:focus, .btn-bitbucket[disabled]:focus, fieldset[disabled] .btn-bitbucket:focus, .btn-bitbucket.disabled.focus, .btn-bitbucket[disabled].focus, fieldset[disabled] .btn-bitbucket.focus {\r\n  background-color: #205081;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket .badge {\r\n  color: #205081;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-dropbox {\r\n  color: #fff;\r\n  background-color: #1087dd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:focus, .btn-dropbox.focus {\r\n  color: #fff;\r\n  background-color: #0d6aad;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:hover {\r\n  color: #fff;\r\n  background-color: #0d6aad;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active, .btn-dropbox.active, .open > .dropdown-toggle.btn-dropbox {\r\n  color: #fff;\r\n  background-color: #0d6aad;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active:hover, .btn-dropbox.active:hover, .open > .dropdown-toggle.btn-dropbox:hover, .btn-dropbox:active:focus, .btn-dropbox.active:focus, .open > .dropdown-toggle.btn-dropbox:focus, .btn-dropbox:active.focus, .btn-dropbox.active.focus, .open > .dropdown-toggle.btn-dropbox.focus {\r\n  color: #fff;\r\n  background-color: #0a568c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active, .btn-dropbox.active, .open > .dropdown-toggle.btn-dropbox {\r\n  background-image: none\r\n}\r\n\r\n.btn-dropbox.disabled:hover, .btn-dropbox[disabled]:hover, fieldset[disabled] .btn-dropbox:hover, .btn-dropbox.disabled:focus, .btn-dropbox[disabled]:focus, fieldset[disabled] .btn-dropbox:focus, .btn-dropbox.disabled.focus, .btn-dropbox[disabled].focus, fieldset[disabled] .btn-dropbox.focus {\r\n  background-color: #1087dd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox .badge {\r\n  color: #1087dd;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-facebook {\r\n  color: #fff;\r\n  background-color: #3b5998;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:focus, .btn-facebook.focus {\r\n  color: #fff;\r\n  background-color: #2d4373;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:hover {\r\n  color: #fff;\r\n  background-color: #2d4373;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active, .btn-facebook.active, .open > .dropdown-toggle.btn-facebook {\r\n  color: #fff;\r\n  background-color: #2d4373;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active:hover, .btn-facebook.active:hover, .open > .dropdown-toggle.btn-facebook:hover, .btn-facebook:active:focus, .btn-facebook.active:focus, .open > .dropdown-toggle.btn-facebook:focus, .btn-facebook:active.focus, .btn-facebook.active.focus, .open > .dropdown-toggle.btn-facebook.focus {\r\n  color: #fff;\r\n  background-color: #23345a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active, .btn-facebook.active, .open > .dropdown-toggle.btn-facebook {\r\n  background-image: none\r\n}\r\n\r\n.btn-facebook.disabled:hover, .btn-facebook[disabled]:hover, fieldset[disabled] .btn-facebook:hover, .btn-facebook.disabled:focus, .btn-facebook[disabled]:focus, fieldset[disabled] .btn-facebook:focus, .btn-facebook.disabled.focus, .btn-facebook[disabled].focus, fieldset[disabled] .btn-facebook.focus {\r\n  background-color: #3b5998;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook .badge {\r\n  color: #3b5998;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-flickr {\r\n  color: #fff;\r\n  background-color: #ff0084;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:focus, .btn-flickr.focus {\r\n  color: #fff;\r\n  background-color: #cc006a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:hover {\r\n  color: #fff;\r\n  background-color: #cc006a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active, .btn-flickr.active, .open > .dropdown-toggle.btn-flickr {\r\n  color: #fff;\r\n  background-color: #cc006a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active:hover, .btn-flickr.active:hover, .open > .dropdown-toggle.btn-flickr:hover, .btn-flickr:active:focus, .btn-flickr.active:focus, .open > .dropdown-toggle.btn-flickr:focus, .btn-flickr:active.focus, .btn-flickr.active.focus, .open > .dropdown-toggle.btn-flickr.focus {\r\n  color: #fff;\r\n  background-color: #a80057;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active, .btn-flickr.active, .open > .dropdown-toggle.btn-flickr {\r\n  background-image: none\r\n}\r\n\r\n.btn-flickr.disabled:hover, .btn-flickr[disabled]:hover, fieldset[disabled] .btn-flickr:hover, .btn-flickr.disabled:focus, .btn-flickr[disabled]:focus, fieldset[disabled] .btn-flickr:focus, .btn-flickr.disabled.focus, .btn-flickr[disabled].focus, fieldset[disabled] .btn-flickr.focus {\r\n  background-color: #ff0084;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr .badge {\r\n  color: #ff0084;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-foursquare {\r\n  color: #fff;\r\n  background-color: #f94877;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:focus, .btn-foursquare.focus {\r\n  color: #fff;\r\n  background-color: #f71752;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:hover {\r\n  color: #fff;\r\n  background-color: #f71752;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active, .btn-foursquare.active, .open > .dropdown-toggle.btn-foursquare {\r\n  color: #fff;\r\n  background-color: #f71752;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active:hover, .btn-foursquare.active:hover, .open > .dropdown-toggle.btn-foursquare:hover, .btn-foursquare:active:focus, .btn-foursquare.active:focus, .open > .dropdown-toggle.btn-foursquare:focus, .btn-foursquare:active.focus, .btn-foursquare.active.focus, .open > .dropdown-toggle.btn-foursquare.focus {\r\n  color: #fff;\r\n  background-color: #e30742;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active, .btn-foursquare.active, .open > .dropdown-toggle.btn-foursquare {\r\n  background-image: none\r\n}\r\n\r\n.btn-foursquare.disabled:hover, .btn-foursquare[disabled]:hover, fieldset[disabled] .btn-foursquare:hover, .btn-foursquare.disabled:focus, .btn-foursquare[disabled]:focus, fieldset[disabled] .btn-foursquare:focus, .btn-foursquare.disabled.focus, .btn-foursquare[disabled].focus, fieldset[disabled] .btn-foursquare.focus {\r\n  background-color: #f94877;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare .badge {\r\n  color: #f94877;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-github {\r\n  color: #fff;\r\n  background-color: #444;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:focus, .btn-github.focus {\r\n  color: #fff;\r\n  background-color: #2b2b2b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:hover {\r\n  color: #fff;\r\n  background-color: #2b2b2b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active, .btn-github.active, .open > .dropdown-toggle.btn-github {\r\n  color: #fff;\r\n  background-color: #2b2b2b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active:hover, .btn-github.active:hover, .open > .dropdown-toggle.btn-github:hover, .btn-github:active:focus, .btn-github.active:focus, .open > .dropdown-toggle.btn-github:focus, .btn-github:active.focus, .btn-github.active.focus, .open > .dropdown-toggle.btn-github.focus {\r\n  color: #fff;\r\n  background-color: #191919;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active, .btn-github.active, .open > .dropdown-toggle.btn-github {\r\n  background-image: none\r\n}\r\n\r\n.btn-github.disabled:hover, .btn-github[disabled]:hover, fieldset[disabled] .btn-github:hover, .btn-github.disabled:focus, .btn-github[disabled]:focus, fieldset[disabled] .btn-github:focus, .btn-github.disabled.focus, .btn-github[disabled].focus, fieldset[disabled] .btn-github.focus {\r\n  background-color: #444;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github .badge {\r\n  color: #444;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-google {\r\n  color: #fff;\r\n  background-color: #dd4b39;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:focus, .btn-google.focus {\r\n  color: #fff;\r\n  background-color: #c23321;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:hover {\r\n  color: #fff;\r\n  background-color: #c23321;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active, .btn-google.active, .open > .dropdown-toggle.btn-google {\r\n  color: #fff;\r\n  background-color: #c23321;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active:hover, .btn-google.active:hover, .open > .dropdown-toggle.btn-google:hover, .btn-google:active:focus, .btn-google.active:focus, .open > .dropdown-toggle.btn-google:focus, .btn-google:active.focus, .btn-google.active.focus, .open > .dropdown-toggle.btn-google.focus {\r\n  color: #fff;\r\n  background-color: #a32b1c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active, .btn-google.active, .open > .dropdown-toggle.btn-google {\r\n  background-image: none\r\n}\r\n\r\n.btn-google.disabled:hover, .btn-google[disabled]:hover, fieldset[disabled] .btn-google:hover, .btn-google.disabled:focus, .btn-google[disabled]:focus, fieldset[disabled] .btn-google:focus, .btn-google.disabled.focus, .btn-google[disabled].focus, fieldset[disabled] .btn-google.focus {\r\n  background-color: #dd4b39;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google .badge {\r\n  color: #dd4b39;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-instagram {\r\n  color: #fff;\r\n  background-color: #3f729b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:focus, .btn-instagram.focus {\r\n  color: #fff;\r\n  background-color: #305777;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:hover {\r\n  color: #fff;\r\n  background-color: #305777;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active, .btn-instagram.active, .open > .dropdown-toggle.btn-instagram {\r\n  color: #fff;\r\n  background-color: #305777;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active:hover, .btn-instagram.active:hover, .open > .dropdown-toggle.btn-instagram:hover, .btn-instagram:active:focus, .btn-instagram.active:focus, .open > .dropdown-toggle.btn-instagram:focus, .btn-instagram:active.focus, .btn-instagram.active.focus, .open > .dropdown-toggle.btn-instagram.focus {\r\n  color: #fff;\r\n  background-color: #26455d;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active, .btn-instagram.active, .open > .dropdown-toggle.btn-instagram {\r\n  background-image: none\r\n}\r\n\r\n.btn-instagram.disabled:hover, .btn-instagram[disabled]:hover, fieldset[disabled] .btn-instagram:hover, .btn-instagram.disabled:focus, .btn-instagram[disabled]:focus, fieldset[disabled] .btn-instagram:focus, .btn-instagram.disabled.focus, .btn-instagram[disabled].focus, fieldset[disabled] .btn-instagram.focus {\r\n  background-color: #3f729b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram .badge {\r\n  color: #3f729b;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-linkedin {\r\n  color: #fff;\r\n  background-color: #007bb6;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:focus, .btn-linkedin.focus {\r\n  color: #fff;\r\n  background-color: #005983;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:hover {\r\n  color: #fff;\r\n  background-color: #005983;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active, .btn-linkedin.active, .open > .dropdown-toggle.btn-linkedin {\r\n  color: #fff;\r\n  background-color: #005983;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active:hover, .btn-linkedin.active:hover, .open > .dropdown-toggle.btn-linkedin:hover, .btn-linkedin:active:focus, .btn-linkedin.active:focus, .open > .dropdown-toggle.btn-linkedin:focus, .btn-linkedin:active.focus, .btn-linkedin.active.focus, .open > .dropdown-toggle.btn-linkedin.focus {\r\n  color: #fff;\r\n  background-color: #00405f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active, .btn-linkedin.active, .open > .dropdown-toggle.btn-linkedin {\r\n  background-image: none\r\n}\r\n\r\n.btn-linkedin.disabled:hover, .btn-linkedin[disabled]:hover, fieldset[disabled] .btn-linkedin:hover, .btn-linkedin.disabled:focus, .btn-linkedin[disabled]:focus, fieldset[disabled] .btn-linkedin:focus, .btn-linkedin.disabled.focus, .btn-linkedin[disabled].focus, fieldset[disabled] .btn-linkedin.focus {\r\n  background-color: #007bb6;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin .badge {\r\n  color: #007bb6;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-microsoft {\r\n  color: #fff;\r\n  background-color: #2672ec;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:focus, .btn-microsoft.focus {\r\n  color: #fff;\r\n  background-color: #125acd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:hover {\r\n  color: #fff;\r\n  background-color: #125acd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active, .btn-microsoft.active, .open > .dropdown-toggle.btn-microsoft {\r\n  color: #fff;\r\n  background-color: #125acd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active:hover, .btn-microsoft.active:hover, .open > .dropdown-toggle.btn-microsoft:hover, .btn-microsoft:active:focus, .btn-microsoft.active:focus, .open > .dropdown-toggle.btn-microsoft:focus, .btn-microsoft:active.focus, .btn-microsoft.active.focus, .open > .dropdown-toggle.btn-microsoft.focus {\r\n  color: #fff;\r\n  background-color: #0f4bac;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active, .btn-microsoft.active, .open > .dropdown-toggle.btn-microsoft {\r\n  background-image: none\r\n}\r\n\r\n.btn-microsoft.disabled:hover, .btn-microsoft[disabled]:hover, fieldset[disabled] .btn-microsoft:hover, .btn-microsoft.disabled:focus, .btn-microsoft[disabled]:focus, fieldset[disabled] .btn-microsoft:focus, .btn-microsoft.disabled.focus, .btn-microsoft[disabled].focus, fieldset[disabled] .btn-microsoft.focus {\r\n  background-color: #2672ec;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft .badge {\r\n  color: #2672ec;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-odnoklassniki {\r\n  color: #fff;\r\n  background-color: #f4731c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:focus, .btn-odnoklassniki.focus {\r\n  color: #fff;\r\n  background-color: #d35b0a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:hover {\r\n  color: #fff;\r\n  background-color: #d35b0a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active, .btn-odnoklassniki.active, .open > .dropdown-toggle.btn-odnoklassniki {\r\n  color: #fff;\r\n  background-color: #d35b0a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active:hover, .btn-odnoklassniki.active:hover, .open > .dropdown-toggle.btn-odnoklassniki:hover, .btn-odnoklassniki:active:focus, .btn-odnoklassniki.active:focus, .open > .dropdown-toggle.btn-odnoklassniki:focus, .btn-odnoklassniki:active.focus, .btn-odnoklassniki.active.focus, .open > .dropdown-toggle.btn-odnoklassniki.focus {\r\n  color: #fff;\r\n  background-color: #b14c09;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active, .btn-odnoklassniki.active, .open > .dropdown-toggle.btn-odnoklassniki {\r\n  background-image: none\r\n}\r\n\r\n.btn-odnoklassniki.disabled:hover, .btn-odnoklassniki[disabled]:hover, fieldset[disabled] .btn-odnoklassniki:hover, .btn-odnoklassniki.disabled:focus, .btn-odnoklassniki[disabled]:focus, fieldset[disabled] .btn-odnoklassniki:focus, .btn-odnoklassniki.disabled.focus, .btn-odnoklassniki[disabled].focus, fieldset[disabled] .btn-odnoklassniki.focus {\r\n  background-color: #f4731c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki .badge {\r\n  color: #f4731c;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-openid {\r\n  color: #fff;\r\n  background-color: #f7931e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:focus, .btn-openid.focus {\r\n  color: #fff;\r\n  background-color: #da7908;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:hover {\r\n  color: #fff;\r\n  background-color: #da7908;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active, .btn-openid.active, .open > .dropdown-toggle.btn-openid {\r\n  color: #fff;\r\n  background-color: #da7908;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active:hover, .btn-openid.active:hover, .open > .dropdown-toggle.btn-openid:hover, .btn-openid:active:focus, .btn-openid.active:focus, .open > .dropdown-toggle.btn-openid:focus, .btn-openid:active.focus, .btn-openid.active.focus, .open > .dropdown-toggle.btn-openid.focus {\r\n  color: #fff;\r\n  background-color: #b86607;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active, .btn-openid.active, .open > .dropdown-toggle.btn-openid {\r\n  background-image: none\r\n}\r\n\r\n.btn-openid.disabled:hover, .btn-openid[disabled]:hover, fieldset[disabled] .btn-openid:hover, .btn-openid.disabled:focus, .btn-openid[disabled]:focus, fieldset[disabled] .btn-openid:focus, .btn-openid.disabled.focus, .btn-openid[disabled].focus, fieldset[disabled] .btn-openid.focus {\r\n  background-color: #f7931e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid .badge {\r\n  color: #f7931e;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-pinterest {\r\n  color: #fff;\r\n  background-color: #cb2027;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:focus, .btn-pinterest.focus {\r\n  color: #fff;\r\n  background-color: #9f191f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:hover {\r\n  color: #fff;\r\n  background-color: #9f191f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active, .btn-pinterest.active, .open > .dropdown-toggle.btn-pinterest {\r\n  color: #fff;\r\n  background-color: #9f191f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active:hover, .btn-pinterest.active:hover, .open > .dropdown-toggle.btn-pinterest:hover, .btn-pinterest:active:focus, .btn-pinterest.active:focus, .open > .dropdown-toggle.btn-pinterest:focus, .btn-pinterest:active.focus, .btn-pinterest.active.focus, .open > .dropdown-toggle.btn-pinterest.focus {\r\n  color: #fff;\r\n  background-color: #801419;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active, .btn-pinterest.active, .open > .dropdown-toggle.btn-pinterest {\r\n  background-image: none\r\n}\r\n\r\n.btn-pinterest.disabled:hover, .btn-pinterest[disabled]:hover, fieldset[disabled] .btn-pinterest:hover, .btn-pinterest.disabled:focus, .btn-pinterest[disabled]:focus, fieldset[disabled] .btn-pinterest:focus, .btn-pinterest.disabled.focus, .btn-pinterest[disabled].focus, fieldset[disabled] .btn-pinterest.focus {\r\n  background-color: #cb2027;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest .badge {\r\n  color: #cb2027;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-reddit {\r\n  color: #000;\r\n  background-color: #eff7ff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:focus, .btn-reddit.focus {\r\n  color: #000;\r\n  background-color: #bcddff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:hover {\r\n  color: #000;\r\n  background-color: #bcddff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active, .btn-reddit.active, .open > .dropdown-toggle.btn-reddit {\r\n  color: #000;\r\n  background-color: #bcddff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active:hover, .btn-reddit.active:hover, .open > .dropdown-toggle.btn-reddit:hover, .btn-reddit:active:focus, .btn-reddit.active:focus, .open > .dropdown-toggle.btn-reddit:focus, .btn-reddit:active.focus, .btn-reddit.active.focus, .open > .dropdown-toggle.btn-reddit.focus {\r\n  color: #000;\r\n  background-color: #98ccff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active, .btn-reddit.active, .open > .dropdown-toggle.btn-reddit {\r\n  background-image: none\r\n}\r\n\r\n.btn-reddit.disabled:hover, .btn-reddit[disabled]:hover, fieldset[disabled] .btn-reddit:hover, .btn-reddit.disabled:focus, .btn-reddit[disabled]:focus, fieldset[disabled] .btn-reddit:focus, .btn-reddit.disabled.focus, .btn-reddit[disabled].focus, fieldset[disabled] .btn-reddit.focus {\r\n  background-color: #eff7ff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit .badge {\r\n  color: #eff7ff;\r\n  background-color: #000\r\n}\r\n\r\n.btn-soundcloud {\r\n  color: #fff;\r\n  background-color: #f50;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:focus, .btn-soundcloud.focus {\r\n  color: #fff;\r\n  background-color: #c40;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:hover {\r\n  color: #fff;\r\n  background-color: #c40;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active, .btn-soundcloud.active, .open > .dropdown-toggle.btn-soundcloud {\r\n  color: #fff;\r\n  background-color: #c40;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active:hover, .btn-soundcloud.active:hover, .open > .dropdown-toggle.btn-soundcloud:hover, .btn-soundcloud:active:focus, .btn-soundcloud.active:focus, .open > .dropdown-toggle.btn-soundcloud:focus, .btn-soundcloud:active.focus, .btn-soundcloud.active.focus, .open > .dropdown-toggle.btn-soundcloud.focus {\r\n  color: #fff;\r\n  background-color: #a83800;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active, .btn-soundcloud.active, .open > .dropdown-toggle.btn-soundcloud {\r\n  background-image: none\r\n}\r\n\r\n.btn-soundcloud.disabled:hover, .btn-soundcloud[disabled]:hover, fieldset[disabled] .btn-soundcloud:hover, .btn-soundcloud.disabled:focus, .btn-soundcloud[disabled]:focus, fieldset[disabled] .btn-soundcloud:focus, .btn-soundcloud.disabled.focus, .btn-soundcloud[disabled].focus, fieldset[disabled] .btn-soundcloud.focus {\r\n  background-color: #f50;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud .badge {\r\n  color: #f50;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-tumblr {\r\n  color: #fff;\r\n  background-color: #2c4762;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:focus, .btn-tumblr.focus {\r\n  color: #fff;\r\n  background-color: #1c2d3f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:hover {\r\n  color: #fff;\r\n  background-color: #1c2d3f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active, .btn-tumblr.active, .open > .dropdown-toggle.btn-tumblr {\r\n  color: #fff;\r\n  background-color: #1c2d3f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active:hover, .btn-tumblr.active:hover, .open > .dropdown-toggle.btn-tumblr:hover, .btn-tumblr:active:focus, .btn-tumblr.active:focus, .open > .dropdown-toggle.btn-tumblr:focus, .btn-tumblr:active.focus, .btn-tumblr.active.focus, .open > .dropdown-toggle.btn-tumblr.focus {\r\n  color: #fff;\r\n  background-color: #111c26;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active, .btn-tumblr.active, .open > .dropdown-toggle.btn-tumblr {\r\n  background-image: none\r\n}\r\n\r\n.btn-tumblr.disabled:hover, .btn-tumblr[disabled]:hover, fieldset[disabled] .btn-tumblr:hover, .btn-tumblr.disabled:focus, .btn-tumblr[disabled]:focus, fieldset[disabled] .btn-tumblr:focus, .btn-tumblr.disabled.focus, .btn-tumblr[disabled].focus, fieldset[disabled] .btn-tumblr.focus {\r\n  background-color: #2c4762;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr .badge {\r\n  color: #2c4762;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-twitter {\r\n  color: #fff;\r\n  background-color: #55acee;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:focus, .btn-twitter.focus {\r\n  color: #fff;\r\n  background-color: #2795e9;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:hover {\r\n  color: #fff;\r\n  background-color: #2795e9;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active, .btn-twitter.active, .open > .dropdown-toggle.btn-twitter {\r\n  color: #fff;\r\n  background-color: #2795e9;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active:hover, .btn-twitter.active:hover, .open > .dropdown-toggle.btn-twitter:hover, .btn-twitter:active:focus, .btn-twitter.active:focus, .open > .dropdown-toggle.btn-twitter:focus, .btn-twitter:active.focus, .btn-twitter.active.focus, .open > .dropdown-toggle.btn-twitter.focus {\r\n  color: #fff;\r\n  background-color: #1583d7;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active, .btn-twitter.active, .open > .dropdown-toggle.btn-twitter {\r\n  background-image: none\r\n}\r\n\r\n.btn-twitter.disabled:hover, .btn-twitter[disabled]:hover, fieldset[disabled] .btn-twitter:hover, .btn-twitter.disabled:focus, .btn-twitter[disabled]:focus, fieldset[disabled] .btn-twitter:focus, .btn-twitter.disabled.focus, .btn-twitter[disabled].focus, fieldset[disabled] .btn-twitter.focus {\r\n  background-color: #55acee;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter .badge {\r\n  color: #55acee;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-vimeo {\r\n  color: #fff;\r\n  background-color: #1ab7ea;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:focus, .btn-vimeo.focus {\r\n  color: #fff;\r\n  background-color: #1295bf;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:hover {\r\n  color: #fff;\r\n  background-color: #1295bf;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active, .btn-vimeo.active, .open > .dropdown-toggle.btn-vimeo {\r\n  color: #fff;\r\n  background-color: #1295bf;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active:hover, .btn-vimeo.active:hover, .open > .dropdown-toggle.btn-vimeo:hover, .btn-vimeo:active:focus, .btn-vimeo.active:focus, .open > .dropdown-toggle.btn-vimeo:focus, .btn-vimeo:active.focus, .btn-vimeo.active.focus, .open > .dropdown-toggle.btn-vimeo.focus {\r\n  color: #fff;\r\n  background-color: #0f7b9f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active, .btn-vimeo.active, .open > .dropdown-toggle.btn-vimeo {\r\n  background-image: none\r\n}\r\n\r\n.btn-vimeo.disabled:hover, .btn-vimeo[disabled]:hover, fieldset[disabled] .btn-vimeo:hover, .btn-vimeo.disabled:focus, .btn-vimeo[disabled]:focus, fieldset[disabled] .btn-vimeo:focus, .btn-vimeo.disabled.focus, .btn-vimeo[disabled].focus, fieldset[disabled] .btn-vimeo.focus {\r\n  background-color: #1ab7ea;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo .badge {\r\n  color: #1ab7ea;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-vk {\r\n  color: #fff;\r\n  background-color: #587ea3;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:focus, .btn-vk.focus {\r\n  color: #fff;\r\n  background-color: #466482;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:hover {\r\n  color: #fff;\r\n  background-color: #466482;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active, .btn-vk.active, .open > .dropdown-toggle.btn-vk {\r\n  color: #fff;\r\n  background-color: #466482;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active:hover, .btn-vk.active:hover, .open > .dropdown-toggle.btn-vk:hover, .btn-vk:active:focus, .btn-vk.active:focus, .open > .dropdown-toggle.btn-vk:focus, .btn-vk:active.focus, .btn-vk.active.focus, .open > .dropdown-toggle.btn-vk.focus {\r\n  color: #fff;\r\n  background-color: #3a526b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active, .btn-vk.active, .open > .dropdown-toggle.btn-vk {\r\n  background-image: none\r\n}\r\n\r\n.btn-vk.disabled:hover, .btn-vk[disabled]:hover, fieldset[disabled] .btn-vk:hover, .btn-vk.disabled:focus, .btn-vk[disabled]:focus, fieldset[disabled] .btn-vk:focus, .btn-vk.disabled.focus, .btn-vk[disabled].focus, fieldset[disabled] .btn-vk.focus {\r\n  background-color: #587ea3;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk .badge {\r\n  color: #587ea3;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-yahoo {\r\n  color: #fff;\r\n  background-color: #720e9e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:focus, .btn-yahoo.focus {\r\n  color: #fff;\r\n  background-color: #500a6f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:hover {\r\n  color: #fff;\r\n  background-color: #500a6f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active, .btn-yahoo.active, .open > .dropdown-toggle.btn-yahoo {\r\n  color: #fff;\r\n  background-color: #500a6f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active:hover, .btn-yahoo.active:hover, .open > .dropdown-toggle.btn-yahoo:hover, .btn-yahoo:active:focus, .btn-yahoo.active:focus, .open > .dropdown-toggle.btn-yahoo:focus, .btn-yahoo:active.focus, .btn-yahoo.active.focus, .open > .dropdown-toggle.btn-yahoo.focus {\r\n  color: #fff;\r\n  background-color: #39074e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active, .btn-yahoo.active, .open > .dropdown-toggle.btn-yahoo {\r\n  background-image: none\r\n}\r\n\r\n.btn-yahoo.disabled:hover, .btn-yahoo[disabled]:hover, fieldset[disabled] .btn-yahoo:hover, .btn-yahoo.disabled:focus, .btn-yahoo[disabled]:focus, fieldset[disabled] .btn-yahoo:focus, .btn-yahoo.disabled.focus, .btn-yahoo[disabled].focus, fieldset[disabled] .btn-yahoo.focus {\r\n  background-color: #720e9e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo .badge {\r\n  color: #720e9e;\r\n  background-color: #fff\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "li {\r\n  background-color: snow;\r\n  font-weight: bold;\r\n  border-bottom: 3px solid white;\r\n}\r\n\r\nli:hover {\r\n  background-color: #e7e7e7;\r\n}\r\n\r\n.scrollable-menu {\r\n  height: auto;\r\n  max-height: 300px;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n}\r\np {\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n  font-family: \"Adobe Devanagari\", sans-serif;\r\n  color: snow;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "h1,h3 {\r\n  padding-top: 3%;\r\n  text-align: center;\r\n  color: snow;\r\n  font-weight: bolder;\r\n  font-size: 40px;\r\n  font-family: \"Adobe Devanagari\";\r\n}\r\n\r\n.login-form {\r\n  text-align: center;\r\n  padding-top: 5%;\r\n  font-size: 20px;\r\n  color: snow;\r\n}\r\n\r\nlabel {\r\n  padding-right: 1%;\r\n}\r\n\r\ninput {\r\n  color: black;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948;\r\n  background-color: #6dffc7;\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442;\r\n  background-color: #f9a69a;\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n}\r\n\r\n.footer-text-white{\r\n  color: white;\r\n  font-style: italic;\r\n}\r\n.footer-text-black {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.login-box {\r\n  background-color: #848688;\r\n  width: 550px !important;\r\n  max-width: 550px;\r\n}\r\n\r\n.login-content {\r\n  width: 400px;\r\n  display: block;\r\n  margin:0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.login-logo {\r\n  width: 20%;\r\n}\r\n\r\n.login-title {\r\n  color: black;\r\n}\r\n\r\n\r\n.login-bg {\r\n  height: 100vh;\r\n  min-height: 100vh;\r\n}\r\n\r\n.child {\r\n  margin-top:100px;\r\n}\r\n\r\n\r\n\r\n\r\n.btn-social {\r\n  position: relative;\r\n  padding-left: 44px;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis\r\n}\r\n\r\n.btn-social > :first-child {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 32px;\r\n  line-height: 34px;\r\n  font-size: 1.6em;\r\n  text-align: center;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-social.btn-lg {\r\n  padding-left: 61px\r\n}\r\n\r\n.btn-social.btn-lg > :first-child {\r\n  line-height: 45px;\r\n  width: 45px;\r\n  font-size: 1.8em\r\n}\r\n\r\n.btn-social.btn-sm {\r\n  padding-left: 38px\r\n}\r\n\r\n.btn-social.btn-sm > :first-child {\r\n  line-height: 28px;\r\n  width: 28px;\r\n  font-size: 1.4em\r\n}\r\n\r\n.btn-social.btn-xs {\r\n  padding-left: 30px\r\n}\r\n\r\n.btn-social.btn-xs > :first-child {\r\n  line-height: 20px;\r\n  width: 20px;\r\n  font-size: 1.2em\r\n}\r\n\r\n.btn-social-icon {\r\n  position: relative;\r\n  padding-left: 44px;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  height: 34px;\r\n  width: 34px;\r\n  padding: 0\r\n}\r\n\r\n.btn-social-icon > :first-child {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 32px;\r\n  line-height: 34px;\r\n  font-size: 1.6em;\r\n  text-align: center;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-social-icon.btn-lg {\r\n  padding-left: 61px\r\n}\r\n\r\n.btn-social-icon.btn-lg > :first-child {\r\n  line-height: 45px;\r\n  width: 45px;\r\n  font-size: 1.8em\r\n}\r\n\r\n.btn-social-icon.btn-sm {\r\n  padding-left: 38px\r\n}\r\n\r\n.btn-social-icon.btn-sm > :first-child {\r\n  line-height: 28px;\r\n  width: 28px;\r\n  font-size: 1.4em\r\n}\r\n\r\n.btn-social-icon.btn-xs {\r\n  padding-left: 30px\r\n}\r\n\r\n.btn-social-icon.btn-xs > :first-child {\r\n  line-height: 20px;\r\n  width: 20px;\r\n  font-size: 1.2em\r\n}\r\n\r\n.btn-social-icon > :first-child {\r\n  border: none;\r\n  text-align: center;\r\n  width: 100% !important\r\n}\r\n\r\n.btn-social-icon.btn-lg {\r\n  height: 45px;\r\n  width: 45px;\r\n  padding-left: 0;\r\n  padding-right: 0\r\n}\r\n\r\n.btn-social-icon.btn-sm {\r\n  height: 30px;\r\n  width: 30px;\r\n  padding-left: 0;\r\n  padding-right: 0\r\n}\r\n\r\n.btn-social-icon.btn-xs {\r\n  height: 22px;\r\n  width: 22px;\r\n  padding-left: 0;\r\n  padding-right: 0\r\n}\r\n\r\n.btn-adn {\r\n  color: #fff;\r\n  background-color: #d87a68;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:focus, .btn-adn.focus {\r\n  color: #fff;\r\n  background-color: #ce563f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:hover {\r\n  color: #fff;\r\n  background-color: #ce563f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active, .btn-adn.active, .open > .dropdown-toggle.btn-adn {\r\n  color: #fff;\r\n  background-color: #ce563f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active:hover, .btn-adn.active:hover, .open > .dropdown-toggle.btn-adn:hover, .btn-adn:active:focus, .btn-adn.active:focus, .open > .dropdown-toggle.btn-adn:focus, .btn-adn:active.focus, .btn-adn.active.focus, .open > .dropdown-toggle.btn-adn.focus {\r\n  color: #fff;\r\n  background-color: #b94630;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn:active, .btn-adn.active, .open > .dropdown-toggle.btn-adn {\r\n  background-image: none\r\n}\r\n\r\n.btn-adn.disabled:hover, .btn-adn[disabled]:hover, fieldset[disabled] .btn-adn:hover, .btn-adn.disabled:focus, .btn-adn[disabled]:focus, fieldset[disabled] .btn-adn:focus, .btn-adn.disabled.focus, .btn-adn[disabled].focus, fieldset[disabled] .btn-adn.focus {\r\n  background-color: #d87a68;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-adn .badge {\r\n  color: #d87a68;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-bitbucket {\r\n  color: #fff;\r\n  background-color: #205081;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:focus, .btn-bitbucket.focus {\r\n  color: #fff;\r\n  background-color: #163758;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:hover {\r\n  color: #fff;\r\n  background-color: #163758;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active, .btn-bitbucket.active, .open > .dropdown-toggle.btn-bitbucket {\r\n  color: #fff;\r\n  background-color: #163758;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active:hover, .btn-bitbucket.active:hover, .open > .dropdown-toggle.btn-bitbucket:hover, .btn-bitbucket:active:focus, .btn-bitbucket.active:focus, .open > .dropdown-toggle.btn-bitbucket:focus, .btn-bitbucket:active.focus, .btn-bitbucket.active.focus, .open > .dropdown-toggle.btn-bitbucket.focus {\r\n  color: #fff;\r\n  background-color: #0f253c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket:active, .btn-bitbucket.active, .open > .dropdown-toggle.btn-bitbucket {\r\n  background-image: none\r\n}\r\n\r\n.btn-bitbucket.disabled:hover, .btn-bitbucket[disabled]:hover, fieldset[disabled] .btn-bitbucket:hover, .btn-bitbucket.disabled:focus, .btn-bitbucket[disabled]:focus, fieldset[disabled] .btn-bitbucket:focus, .btn-bitbucket.disabled.focus, .btn-bitbucket[disabled].focus, fieldset[disabled] .btn-bitbucket.focus {\r\n  background-color: #205081;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-bitbucket .badge {\r\n  color: #205081;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-dropbox {\r\n  color: #fff;\r\n  background-color: #1087dd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:focus, .btn-dropbox.focus {\r\n  color: #fff;\r\n  background-color: #0d6aad;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:hover {\r\n  color: #fff;\r\n  background-color: #0d6aad;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active, .btn-dropbox.active, .open > .dropdown-toggle.btn-dropbox {\r\n  color: #fff;\r\n  background-color: #0d6aad;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active:hover, .btn-dropbox.active:hover, .open > .dropdown-toggle.btn-dropbox:hover, .btn-dropbox:active:focus, .btn-dropbox.active:focus, .open > .dropdown-toggle.btn-dropbox:focus, .btn-dropbox:active.focus, .btn-dropbox.active.focus, .open > .dropdown-toggle.btn-dropbox.focus {\r\n  color: #fff;\r\n  background-color: #0a568c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox:active, .btn-dropbox.active, .open > .dropdown-toggle.btn-dropbox {\r\n  background-image: none\r\n}\r\n\r\n.btn-dropbox.disabled:hover, .btn-dropbox[disabled]:hover, fieldset[disabled] .btn-dropbox:hover, .btn-dropbox.disabled:focus, .btn-dropbox[disabled]:focus, fieldset[disabled] .btn-dropbox:focus, .btn-dropbox.disabled.focus, .btn-dropbox[disabled].focus, fieldset[disabled] .btn-dropbox.focus {\r\n  background-color: #1087dd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-dropbox .badge {\r\n  color: #1087dd;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-facebook {\r\n  color: #fff;\r\n  background-color: #3b5998;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:focus, .btn-facebook.focus {\r\n  color: #fff;\r\n  background-color: #2d4373;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:hover {\r\n  color: #fff;\r\n  background-color: #2d4373;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active, .btn-facebook.active, .open > .dropdown-toggle.btn-facebook {\r\n  color: #fff;\r\n  background-color: #2d4373;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active:hover, .btn-facebook.active:hover, .open > .dropdown-toggle.btn-facebook:hover, .btn-facebook:active:focus, .btn-facebook.active:focus, .open > .dropdown-toggle.btn-facebook:focus, .btn-facebook:active.focus, .btn-facebook.active.focus, .open > .dropdown-toggle.btn-facebook.focus {\r\n  color: #fff;\r\n  background-color: #23345a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook:active, .btn-facebook.active, .open > .dropdown-toggle.btn-facebook {\r\n  background-image: none\r\n}\r\n\r\n.btn-facebook.disabled:hover, .btn-facebook[disabled]:hover, fieldset[disabled] .btn-facebook:hover, .btn-facebook.disabled:focus, .btn-facebook[disabled]:focus, fieldset[disabled] .btn-facebook:focus, .btn-facebook.disabled.focus, .btn-facebook[disabled].focus, fieldset[disabled] .btn-facebook.focus {\r\n  background-color: #3b5998;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-facebook .badge {\r\n  color: #3b5998;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-flickr {\r\n  color: #fff;\r\n  background-color: #ff0084;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:focus, .btn-flickr.focus {\r\n  color: #fff;\r\n  background-color: #cc006a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:hover {\r\n  color: #fff;\r\n  background-color: #cc006a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active, .btn-flickr.active, .open > .dropdown-toggle.btn-flickr {\r\n  color: #fff;\r\n  background-color: #cc006a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active:hover, .btn-flickr.active:hover, .open > .dropdown-toggle.btn-flickr:hover, .btn-flickr:active:focus, .btn-flickr.active:focus, .open > .dropdown-toggle.btn-flickr:focus, .btn-flickr:active.focus, .btn-flickr.active.focus, .open > .dropdown-toggle.btn-flickr.focus {\r\n  color: #fff;\r\n  background-color: #a80057;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr:active, .btn-flickr.active, .open > .dropdown-toggle.btn-flickr {\r\n  background-image: none\r\n}\r\n\r\n.btn-flickr.disabled:hover, .btn-flickr[disabled]:hover, fieldset[disabled] .btn-flickr:hover, .btn-flickr.disabled:focus, .btn-flickr[disabled]:focus, fieldset[disabled] .btn-flickr:focus, .btn-flickr.disabled.focus, .btn-flickr[disabled].focus, fieldset[disabled] .btn-flickr.focus {\r\n  background-color: #ff0084;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-flickr .badge {\r\n  color: #ff0084;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-foursquare {\r\n  color: #fff;\r\n  background-color: #f94877;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:focus, .btn-foursquare.focus {\r\n  color: #fff;\r\n  background-color: #f71752;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:hover {\r\n  color: #fff;\r\n  background-color: #f71752;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active, .btn-foursquare.active, .open > .dropdown-toggle.btn-foursquare {\r\n  color: #fff;\r\n  background-color: #f71752;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active:hover, .btn-foursquare.active:hover, .open > .dropdown-toggle.btn-foursquare:hover, .btn-foursquare:active:focus, .btn-foursquare.active:focus, .open > .dropdown-toggle.btn-foursquare:focus, .btn-foursquare:active.focus, .btn-foursquare.active.focus, .open > .dropdown-toggle.btn-foursquare.focus {\r\n  color: #fff;\r\n  background-color: #e30742;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare:active, .btn-foursquare.active, .open > .dropdown-toggle.btn-foursquare {\r\n  background-image: none\r\n}\r\n\r\n.btn-foursquare.disabled:hover, .btn-foursquare[disabled]:hover, fieldset[disabled] .btn-foursquare:hover, .btn-foursquare.disabled:focus, .btn-foursquare[disabled]:focus, fieldset[disabled] .btn-foursquare:focus, .btn-foursquare.disabled.focus, .btn-foursquare[disabled].focus, fieldset[disabled] .btn-foursquare.focus {\r\n  background-color: #f94877;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-foursquare .badge {\r\n  color: #f94877;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-github {\r\n  color: #fff;\r\n  background-color: #444;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:focus, .btn-github.focus {\r\n  color: #fff;\r\n  background-color: #2b2b2b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:hover {\r\n  color: #fff;\r\n  background-color: #2b2b2b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active, .btn-github.active, .open > .dropdown-toggle.btn-github {\r\n  color: #fff;\r\n  background-color: #2b2b2b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active:hover, .btn-github.active:hover, .open > .dropdown-toggle.btn-github:hover, .btn-github:active:focus, .btn-github.active:focus, .open > .dropdown-toggle.btn-github:focus, .btn-github:active.focus, .btn-github.active.focus, .open > .dropdown-toggle.btn-github.focus {\r\n  color: #fff;\r\n  background-color: #191919;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github:active, .btn-github.active, .open > .dropdown-toggle.btn-github {\r\n  background-image: none\r\n}\r\n\r\n.btn-github.disabled:hover, .btn-github[disabled]:hover, fieldset[disabled] .btn-github:hover, .btn-github.disabled:focus, .btn-github[disabled]:focus, fieldset[disabled] .btn-github:focus, .btn-github.disabled.focus, .btn-github[disabled].focus, fieldset[disabled] .btn-github.focus {\r\n  background-color: #444;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-github .badge {\r\n  color: #444;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-google {\r\n  color: #fff;\r\n  background-color: #dd4b39;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:focus, .btn-google.focus {\r\n  color: #fff;\r\n  background-color: #c23321;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:hover {\r\n  color: #fff;\r\n  background-color: #c23321;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active, .btn-google.active, .open > .dropdown-toggle.btn-google {\r\n  color: #fff;\r\n  background-color: #c23321;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active:hover, .btn-google.active:hover, .open > .dropdown-toggle.btn-google:hover, .btn-google:active:focus, .btn-google.active:focus, .open > .dropdown-toggle.btn-google:focus, .btn-google:active.focus, .btn-google.active.focus, .open > .dropdown-toggle.btn-google.focus {\r\n  color: #fff;\r\n  background-color: #a32b1c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google:active, .btn-google.active, .open > .dropdown-toggle.btn-google {\r\n  background-image: none\r\n}\r\n\r\n.btn-google.disabled:hover, .btn-google[disabled]:hover, fieldset[disabled] .btn-google:hover, .btn-google.disabled:focus, .btn-google[disabled]:focus, fieldset[disabled] .btn-google:focus, .btn-google.disabled.focus, .btn-google[disabled].focus, fieldset[disabled] .btn-google.focus {\r\n  background-color: #dd4b39;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-google .badge {\r\n  color: #dd4b39;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-instagram {\r\n  color: #fff;\r\n  background-color: #3f729b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:focus, .btn-instagram.focus {\r\n  color: #fff;\r\n  background-color: #305777;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:hover {\r\n  color: #fff;\r\n  background-color: #305777;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active, .btn-instagram.active, .open > .dropdown-toggle.btn-instagram {\r\n  color: #fff;\r\n  background-color: #305777;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active:hover, .btn-instagram.active:hover, .open > .dropdown-toggle.btn-instagram:hover, .btn-instagram:active:focus, .btn-instagram.active:focus, .open > .dropdown-toggle.btn-instagram:focus, .btn-instagram:active.focus, .btn-instagram.active.focus, .open > .dropdown-toggle.btn-instagram.focus {\r\n  color: #fff;\r\n  background-color: #26455d;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram:active, .btn-instagram.active, .open > .dropdown-toggle.btn-instagram {\r\n  background-image: none\r\n}\r\n\r\n.btn-instagram.disabled:hover, .btn-instagram[disabled]:hover, fieldset[disabled] .btn-instagram:hover, .btn-instagram.disabled:focus, .btn-instagram[disabled]:focus, fieldset[disabled] .btn-instagram:focus, .btn-instagram.disabled.focus, .btn-instagram[disabled].focus, fieldset[disabled] .btn-instagram.focus {\r\n  background-color: #3f729b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-instagram .badge {\r\n  color: #3f729b;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-linkedin {\r\n  color: #fff;\r\n  background-color: #007bb6;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:focus, .btn-linkedin.focus {\r\n  color: #fff;\r\n  background-color: #005983;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:hover {\r\n  color: #fff;\r\n  background-color: #005983;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active, .btn-linkedin.active, .open > .dropdown-toggle.btn-linkedin {\r\n  color: #fff;\r\n  background-color: #005983;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active:hover, .btn-linkedin.active:hover, .open > .dropdown-toggle.btn-linkedin:hover, .btn-linkedin:active:focus, .btn-linkedin.active:focus, .open > .dropdown-toggle.btn-linkedin:focus, .btn-linkedin:active.focus, .btn-linkedin.active.focus, .open > .dropdown-toggle.btn-linkedin.focus {\r\n  color: #fff;\r\n  background-color: #00405f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin:active, .btn-linkedin.active, .open > .dropdown-toggle.btn-linkedin {\r\n  background-image: none\r\n}\r\n\r\n.btn-linkedin.disabled:hover, .btn-linkedin[disabled]:hover, fieldset[disabled] .btn-linkedin:hover, .btn-linkedin.disabled:focus, .btn-linkedin[disabled]:focus, fieldset[disabled] .btn-linkedin:focus, .btn-linkedin.disabled.focus, .btn-linkedin[disabled].focus, fieldset[disabled] .btn-linkedin.focus {\r\n  background-color: #007bb6;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-linkedin .badge {\r\n  color: #007bb6;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-microsoft {\r\n  color: #fff;\r\n  background-color: #2672ec;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:focus, .btn-microsoft.focus {\r\n  color: #fff;\r\n  background-color: #125acd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:hover {\r\n  color: #fff;\r\n  background-color: #125acd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active, .btn-microsoft.active, .open > .dropdown-toggle.btn-microsoft {\r\n  color: #fff;\r\n  background-color: #125acd;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active:hover, .btn-microsoft.active:hover, .open > .dropdown-toggle.btn-microsoft:hover, .btn-microsoft:active:focus, .btn-microsoft.active:focus, .open > .dropdown-toggle.btn-microsoft:focus, .btn-microsoft:active.focus, .btn-microsoft.active.focus, .open > .dropdown-toggle.btn-microsoft.focus {\r\n  color: #fff;\r\n  background-color: #0f4bac;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft:active, .btn-microsoft.active, .open > .dropdown-toggle.btn-microsoft {\r\n  background-image: none\r\n}\r\n\r\n.btn-microsoft.disabled:hover, .btn-microsoft[disabled]:hover, fieldset[disabled] .btn-microsoft:hover, .btn-microsoft.disabled:focus, .btn-microsoft[disabled]:focus, fieldset[disabled] .btn-microsoft:focus, .btn-microsoft.disabled.focus, .btn-microsoft[disabled].focus, fieldset[disabled] .btn-microsoft.focus {\r\n  background-color: #2672ec;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-microsoft .badge {\r\n  color: #2672ec;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-odnoklassniki {\r\n  color: #fff;\r\n  background-color: #f4731c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:focus, .btn-odnoklassniki.focus {\r\n  color: #fff;\r\n  background-color: #d35b0a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:hover {\r\n  color: #fff;\r\n  background-color: #d35b0a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active, .btn-odnoklassniki.active, .open > .dropdown-toggle.btn-odnoklassniki {\r\n  color: #fff;\r\n  background-color: #d35b0a;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active:hover, .btn-odnoklassniki.active:hover, .open > .dropdown-toggle.btn-odnoklassniki:hover, .btn-odnoklassniki:active:focus, .btn-odnoklassniki.active:focus, .open > .dropdown-toggle.btn-odnoklassniki:focus, .btn-odnoklassniki:active.focus, .btn-odnoklassniki.active.focus, .open > .dropdown-toggle.btn-odnoklassniki.focus {\r\n  color: #fff;\r\n  background-color: #b14c09;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki:active, .btn-odnoklassniki.active, .open > .dropdown-toggle.btn-odnoklassniki {\r\n  background-image: none\r\n}\r\n\r\n.btn-odnoklassniki.disabled:hover, .btn-odnoklassniki[disabled]:hover, fieldset[disabled] .btn-odnoklassniki:hover, .btn-odnoklassniki.disabled:focus, .btn-odnoklassniki[disabled]:focus, fieldset[disabled] .btn-odnoklassniki:focus, .btn-odnoklassniki.disabled.focus, .btn-odnoklassniki[disabled].focus, fieldset[disabled] .btn-odnoklassniki.focus {\r\n  background-color: #f4731c;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-odnoklassniki .badge {\r\n  color: #f4731c;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-openid {\r\n  color: #fff;\r\n  background-color: #f7931e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:focus, .btn-openid.focus {\r\n  color: #fff;\r\n  background-color: #da7908;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:hover {\r\n  color: #fff;\r\n  background-color: #da7908;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active, .btn-openid.active, .open > .dropdown-toggle.btn-openid {\r\n  color: #fff;\r\n  background-color: #da7908;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active:hover, .btn-openid.active:hover, .open > .dropdown-toggle.btn-openid:hover, .btn-openid:active:focus, .btn-openid.active:focus, .open > .dropdown-toggle.btn-openid:focus, .btn-openid:active.focus, .btn-openid.active.focus, .open > .dropdown-toggle.btn-openid.focus {\r\n  color: #fff;\r\n  background-color: #b86607;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid:active, .btn-openid.active, .open > .dropdown-toggle.btn-openid {\r\n  background-image: none\r\n}\r\n\r\n.btn-openid.disabled:hover, .btn-openid[disabled]:hover, fieldset[disabled] .btn-openid:hover, .btn-openid.disabled:focus, .btn-openid[disabled]:focus, fieldset[disabled] .btn-openid:focus, .btn-openid.disabled.focus, .btn-openid[disabled].focus, fieldset[disabled] .btn-openid.focus {\r\n  background-color: #f7931e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-openid .badge {\r\n  color: #f7931e;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-pinterest {\r\n  color: #fff;\r\n  background-color: #cb2027;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:focus, .btn-pinterest.focus {\r\n  color: #fff;\r\n  background-color: #9f191f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:hover {\r\n  color: #fff;\r\n  background-color: #9f191f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active, .btn-pinterest.active, .open > .dropdown-toggle.btn-pinterest {\r\n  color: #fff;\r\n  background-color: #9f191f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active:hover, .btn-pinterest.active:hover, .open > .dropdown-toggle.btn-pinterest:hover, .btn-pinterest:active:focus, .btn-pinterest.active:focus, .open > .dropdown-toggle.btn-pinterest:focus, .btn-pinterest:active.focus, .btn-pinterest.active.focus, .open > .dropdown-toggle.btn-pinterest.focus {\r\n  color: #fff;\r\n  background-color: #801419;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest:active, .btn-pinterest.active, .open > .dropdown-toggle.btn-pinterest {\r\n  background-image: none\r\n}\r\n\r\n.btn-pinterest.disabled:hover, .btn-pinterest[disabled]:hover, fieldset[disabled] .btn-pinterest:hover, .btn-pinterest.disabled:focus, .btn-pinterest[disabled]:focus, fieldset[disabled] .btn-pinterest:focus, .btn-pinterest.disabled.focus, .btn-pinterest[disabled].focus, fieldset[disabled] .btn-pinterest.focus {\r\n  background-color: #cb2027;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-pinterest .badge {\r\n  color: #cb2027;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-reddit {\r\n  color: #000;\r\n  background-color: #eff7ff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:focus, .btn-reddit.focus {\r\n  color: #000;\r\n  background-color: #bcddff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:hover {\r\n  color: #000;\r\n  background-color: #bcddff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active, .btn-reddit.active, .open > .dropdown-toggle.btn-reddit {\r\n  color: #000;\r\n  background-color: #bcddff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active:hover, .btn-reddit.active:hover, .open > .dropdown-toggle.btn-reddit:hover, .btn-reddit:active:focus, .btn-reddit.active:focus, .open > .dropdown-toggle.btn-reddit:focus, .btn-reddit:active.focus, .btn-reddit.active.focus, .open > .dropdown-toggle.btn-reddit.focus {\r\n  color: #000;\r\n  background-color: #98ccff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit:active, .btn-reddit.active, .open > .dropdown-toggle.btn-reddit {\r\n  background-image: none\r\n}\r\n\r\n.btn-reddit.disabled:hover, .btn-reddit[disabled]:hover, fieldset[disabled] .btn-reddit:hover, .btn-reddit.disabled:focus, .btn-reddit[disabled]:focus, fieldset[disabled] .btn-reddit:focus, .btn-reddit.disabled.focus, .btn-reddit[disabled].focus, fieldset[disabled] .btn-reddit.focus {\r\n  background-color: #eff7ff;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-reddit .badge {\r\n  color: #eff7ff;\r\n  background-color: #000\r\n}\r\n\r\n.btn-soundcloud {\r\n  color: #fff;\r\n  background-color: #f50;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:focus, .btn-soundcloud.focus {\r\n  color: #fff;\r\n  background-color: #c40;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:hover {\r\n  color: #fff;\r\n  background-color: #c40;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active, .btn-soundcloud.active, .open > .dropdown-toggle.btn-soundcloud {\r\n  color: #fff;\r\n  background-color: #c40;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active:hover, .btn-soundcloud.active:hover, .open > .dropdown-toggle.btn-soundcloud:hover, .btn-soundcloud:active:focus, .btn-soundcloud.active:focus, .open > .dropdown-toggle.btn-soundcloud:focus, .btn-soundcloud:active.focus, .btn-soundcloud.active.focus, .open > .dropdown-toggle.btn-soundcloud.focus {\r\n  color: #fff;\r\n  background-color: #a83800;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud:active, .btn-soundcloud.active, .open > .dropdown-toggle.btn-soundcloud {\r\n  background-image: none\r\n}\r\n\r\n.btn-soundcloud.disabled:hover, .btn-soundcloud[disabled]:hover, fieldset[disabled] .btn-soundcloud:hover, .btn-soundcloud.disabled:focus, .btn-soundcloud[disabled]:focus, fieldset[disabled] .btn-soundcloud:focus, .btn-soundcloud.disabled.focus, .btn-soundcloud[disabled].focus, fieldset[disabled] .btn-soundcloud.focus {\r\n  background-color: #f50;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-soundcloud .badge {\r\n  color: #f50;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-tumblr {\r\n  color: #fff;\r\n  background-color: #2c4762;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:focus, .btn-tumblr.focus {\r\n  color: #fff;\r\n  background-color: #1c2d3f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:hover {\r\n  color: #fff;\r\n  background-color: #1c2d3f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active, .btn-tumblr.active, .open > .dropdown-toggle.btn-tumblr {\r\n  color: #fff;\r\n  background-color: #1c2d3f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active:hover, .btn-tumblr.active:hover, .open > .dropdown-toggle.btn-tumblr:hover, .btn-tumblr:active:focus, .btn-tumblr.active:focus, .open > .dropdown-toggle.btn-tumblr:focus, .btn-tumblr:active.focus, .btn-tumblr.active.focus, .open > .dropdown-toggle.btn-tumblr.focus {\r\n  color: #fff;\r\n  background-color: #111c26;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr:active, .btn-tumblr.active, .open > .dropdown-toggle.btn-tumblr {\r\n  background-image: none\r\n}\r\n\r\n.btn-tumblr.disabled:hover, .btn-tumblr[disabled]:hover, fieldset[disabled] .btn-tumblr:hover, .btn-tumblr.disabled:focus, .btn-tumblr[disabled]:focus, fieldset[disabled] .btn-tumblr:focus, .btn-tumblr.disabled.focus, .btn-tumblr[disabled].focus, fieldset[disabled] .btn-tumblr.focus {\r\n  background-color: #2c4762;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-tumblr .badge {\r\n  color: #2c4762;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-twitter {\r\n  color: #fff;\r\n  background-color: #55acee;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:focus, .btn-twitter.focus {\r\n  color: #fff;\r\n  background-color: #2795e9;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:hover {\r\n  color: #fff;\r\n  background-color: #2795e9;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active, .btn-twitter.active, .open > .dropdown-toggle.btn-twitter {\r\n  color: #fff;\r\n  background-color: #2795e9;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active:hover, .btn-twitter.active:hover, .open > .dropdown-toggle.btn-twitter:hover, .btn-twitter:active:focus, .btn-twitter.active:focus, .open > .dropdown-toggle.btn-twitter:focus, .btn-twitter:active.focus, .btn-twitter.active.focus, .open > .dropdown-toggle.btn-twitter.focus {\r\n  color: #fff;\r\n  background-color: #1583d7;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter:active, .btn-twitter.active, .open > .dropdown-toggle.btn-twitter {\r\n  background-image: none\r\n}\r\n\r\n.btn-twitter.disabled:hover, .btn-twitter[disabled]:hover, fieldset[disabled] .btn-twitter:hover, .btn-twitter.disabled:focus, .btn-twitter[disabled]:focus, fieldset[disabled] .btn-twitter:focus, .btn-twitter.disabled.focus, .btn-twitter[disabled].focus, fieldset[disabled] .btn-twitter.focus {\r\n  background-color: #55acee;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-twitter .badge {\r\n  color: #55acee;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-vimeo {\r\n  color: #fff;\r\n  background-color: #1ab7ea;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:focus, .btn-vimeo.focus {\r\n  color: #fff;\r\n  background-color: #1295bf;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:hover {\r\n  color: #fff;\r\n  background-color: #1295bf;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active, .btn-vimeo.active, .open > .dropdown-toggle.btn-vimeo {\r\n  color: #fff;\r\n  background-color: #1295bf;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active:hover, .btn-vimeo.active:hover, .open > .dropdown-toggle.btn-vimeo:hover, .btn-vimeo:active:focus, .btn-vimeo.active:focus, .open > .dropdown-toggle.btn-vimeo:focus, .btn-vimeo:active.focus, .btn-vimeo.active.focus, .open > .dropdown-toggle.btn-vimeo.focus {\r\n  color: #fff;\r\n  background-color: #0f7b9f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo:active, .btn-vimeo.active, .open > .dropdown-toggle.btn-vimeo {\r\n  background-image: none\r\n}\r\n\r\n.btn-vimeo.disabled:hover, .btn-vimeo[disabled]:hover, fieldset[disabled] .btn-vimeo:hover, .btn-vimeo.disabled:focus, .btn-vimeo[disabled]:focus, fieldset[disabled] .btn-vimeo:focus, .btn-vimeo.disabled.focus, .btn-vimeo[disabled].focus, fieldset[disabled] .btn-vimeo.focus {\r\n  background-color: #1ab7ea;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vimeo .badge {\r\n  color: #1ab7ea;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-vk {\r\n  color: #fff;\r\n  background-color: #587ea3;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:focus, .btn-vk.focus {\r\n  color: #fff;\r\n  background-color: #466482;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:hover {\r\n  color: #fff;\r\n  background-color: #466482;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active, .btn-vk.active, .open > .dropdown-toggle.btn-vk {\r\n  color: #fff;\r\n  background-color: #466482;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active:hover, .btn-vk.active:hover, .open > .dropdown-toggle.btn-vk:hover, .btn-vk:active:focus, .btn-vk.active:focus, .open > .dropdown-toggle.btn-vk:focus, .btn-vk:active.focus, .btn-vk.active.focus, .open > .dropdown-toggle.btn-vk.focus {\r\n  color: #fff;\r\n  background-color: #3a526b;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk:active, .btn-vk.active, .open > .dropdown-toggle.btn-vk {\r\n  background-image: none\r\n}\r\n\r\n.btn-vk.disabled:hover, .btn-vk[disabled]:hover, fieldset[disabled] .btn-vk:hover, .btn-vk.disabled:focus, .btn-vk[disabled]:focus, fieldset[disabled] .btn-vk:focus, .btn-vk.disabled.focus, .btn-vk[disabled].focus, fieldset[disabled] .btn-vk.focus {\r\n  background-color: #587ea3;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-vk .badge {\r\n  color: #587ea3;\r\n  background-color: #fff\r\n}\r\n\r\n.btn-yahoo {\r\n  color: #fff;\r\n  background-color: #720e9e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:focus, .btn-yahoo.focus {\r\n  color: #fff;\r\n  background-color: #500a6f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:hover {\r\n  color: #fff;\r\n  background-color: #500a6f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active, .btn-yahoo.active, .open > .dropdown-toggle.btn-yahoo {\r\n  color: #fff;\r\n  background-color: #500a6f;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active:hover, .btn-yahoo.active:hover, .open > .dropdown-toggle.btn-yahoo:hover, .btn-yahoo:active:focus, .btn-yahoo.active:focus, .open > .dropdown-toggle.btn-yahoo:focus, .btn-yahoo:active.focus, .btn-yahoo.active.focus, .open > .dropdown-toggle.btn-yahoo.focus {\r\n  color: #fff;\r\n  background-color: #39074e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo:active, .btn-yahoo.active, .open > .dropdown-toggle.btn-yahoo {\r\n  background-image: none\r\n}\r\n\r\n.btn-yahoo.disabled:hover, .btn-yahoo[disabled]:hover, fieldset[disabled] .btn-yahoo:hover, .btn-yahoo.disabled:focus, .btn-yahoo[disabled]:focus, fieldset[disabled] .btn-yahoo:focus, .btn-yahoo.disabled.focus, .btn-yahoo[disabled].focus, fieldset[disabled] .btn-yahoo.focus {\r\n  background-color: #720e9e;\r\n  border-color: rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn-yahoo .badge {\r\n  color: #720e9e;\r\n  background-color: #fff\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".custom-butt {\r\n  color: #ac2925;\r\n  text-weight: bolder;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "li {\r\n  background-color: snow;\r\n  font-weight: bold;\r\n  border-bottom: 3px solid white;\r\n}\r\n\r\nli:hover {\r\n  background-color: #e7e7e7;\r\n}\r\n\r\n.scrollable-menu {\r\n  height: auto;\r\n  max-height: 300px;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n}\r\nlabel {\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  font-family: \"Adobe Devanagari\", sans-serif;\r\n  color: snow;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "h1,h3 {\r\n  padding-top: 3%;\r\n  text-align: center;\r\n  color: snow;\r\n  font-weight: bolder;\r\n  font-size: 40px;\r\n  font-family: \"Adobe Devanagari\";\r\n}\r\n\r\n.register-form {\r\n  text-align: center;\r\n  padding-top: 5%;\r\n  font-size: 20px;\r\n  color: snow;\r\n}\r\n\r\nlabel {\r\n  padding-right: 1%;\r\n}\r\n\r\ninput {\r\n  color: black;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948;\r\n  background-color: #6dffc7;\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442;\r\n  background-color: #f9a69a;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".odd {\r\n  background-color: snow;\r\n}\r\n.even {\r\n  background-color: #e7e7e7;\r\n}\r\n.custom-table {\r\n  text-align: center;\r\n  padding-left: -20px;\r\n}\r\nth {\r\n  text-align: center;\r\n  background-color: #c4e3f3;\r\n  color: #122b40;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".changepass-form {\r\n  text-align: center;\r\n  padding-top: 5%;\r\n  font-size: 15px;\r\n  color: snow;\r\n}\r\n\r\nlabel {\r\n  padding-right: 1%;\r\n}\r\n\r\ninput {\r\n  color: black;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948;\r\n  background-color: #6dffc7;\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442;\r\n  background-color: #f9a69a;\r\n}\r\np {\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  font-family: \"Adobe Devanagari\", sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "h3,h5 {\r\n  padding-top: 3%;\r\n  text-align: center;\r\n  color: snow;\r\n  font-weight: bolder;\r\n  font-size: 40px;\r\n  font-family: \"Adobe Devanagari\", sans-serif;\r\n}\r\n\r\n.validate-form {\r\n  text-align: center;\r\n  padding-top: 5%;\r\n  font-size: 20px;\r\n  color: snow;\r\n}\r\n\r\nlabel {\r\n  padding-right: 1%;\r\n}\r\n\r\ninput {\r\n  color: black;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948;\r\n  background-color: #6dffc7;\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442;\r\n  background-color: #f9a69a;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"loggedIn; then user else nouser\"></div>\n  <ng-template #nouser><h1>Welcome to <strong>AcaR</strong> !</h1></ng-template>\n  <ng-template #user><h1>Welcome, <strong>{{firstName}} {{lastName}}</strong> !</h1></ng-template>\n  <hr>\n</div>\n<div class=\"container\">\n  <div class=\"col-sm-4\">\n    <div *ngIf=\"loggedIn\">\n      <app-profile [firstName]=\"firstName\" [lastName]=\"lastName\" [userRole]=\"userRole\" [email]=\"email\" (logEvent)=\"setLoginStatus($event)\"></app-profile>\n    </div>\n  </div>\n\n  <div class=\"col-sm-4\" align=\"center\">\n\n    <div *ngIf=\"loggedIn; then logged else nologged\"></div>\n\n    <ng-template #nologged>\n      <button class=\"btn btn-success\" (click)=\"loadLogin()\">Log In</button>\n      <button class=\"btn btn-success\" (click)=\"loadRegister()\">Register</button>\n\n      <br><br><br>\n      <div *ngIf=\"loginLoaded; then loginTempl else registerTempl\"></div>\n        <ng-template #loginTempl><app-login (loginEvent)=\"setLoginStatus($event)\" (userEvent)=\"setID($event)\" (passEvent)=\"setPassword($event)\"></app-login>\n        </ng-template>\n        <ng-template #registerTempl>\n          <div *ngIf=\"registered; then forValidate else forRegister\"></div>\n            <ng-template #forValidate><app-validate></app-validate></ng-template>\n            <ng-template #forRegister><app-register (registerEvent)=\"setRegistered($event)\"></app-register></ng-template>\n        </ng-template>\n    </ng-template>\n\n    <ng-template #logged>\n      <app-menu [userID]=\"userID\" (firstNameEvent)=\"setFirstName($event)\" (lastNameEvent)=\"setLastName($event)\" (userRoleEvent)=\"setUserRole($event)\" (emailEvent)=\"setUserEmail($event)\"></app-menu>\n    </ng-template>\n\n  </div>\n  <div class=\"col-sm-4\">\n    <div *ngIf=\"loggedIn\">\n      <app-settings [password]=\"password\" [email]=\"email\" (resetEvent)=\"setLoginStatus($event)\"></app-settings>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <ng-container *ngFor=\"let b of books\">\n  <a *ngIf=\"b.tip=='Book'\" href=\"{{b.link}}\" target=\"_blank\" class=\"list-group-item\">\n    {{b.nume}} <br> Difficulty: {{b.dificultate}} </a>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\"> Name : </span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Filter by name\" name=\"filter\" [(ngModel)]=\"filterbyname\">\n    </div>\n</div>\n<br>\n<div class=\"row\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\"> Year : </span>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Filter by year\" name=\"filter\" [(ngModel)]=\"filterbyan\">\n    </div>\n</div>\n<br><br>\n<ul class=\"scrollable-menu text-center\">\n  <div *ngFor=\"let c of cursuri\">\n  <li *ngIf=\"c.titlu_disciplina.toLowerCase().includes(filterbyname.toLowerCase()) && c.an.toString().includes(filterbyan)\" class=\"list-group-item\">\n    <a (click)=\"clicked(c.titlu_disciplina)\">{{c.titlu_disciplina}}</a> <br>\n    AN : {{c.an}} SEM : {{c.semestru}}\n  </li>\n  </div>\n</ul>\n<div *ngIf=\"click\">\n  <p>Grades average :</p>\n  <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n  <br><br>\n  <div *ngIf=\"best?.length>0; then exista else nuexista\"></div>\n  <ng-template #exista><p> We found {{best?.length}} teacher/s with the best grade ! </p>\n    <div *ngFor=\"let b of best\">\n      <p>{{b.grad_didactic}} {{b.nume}}</p>\n      <p> Grade: {{b.nota}} Prom. percentage: {{b.procentaj}}</p>\n    </div>\n  </ng-template>\n  <ng-template #nuexista><p>We didn't find any best teachers !</p></ng-template>\n  <div *ngIf=\"bestProc?.length>0; then existaa\"></div>\n  <ng-template #existaa><p> We found {{bestProc?.length}} teacher/s with the best promotion percentage ! </p>\n    <div *ngFor=\"let bb of bestProc\">\n      <p>{{bb.grad_didactic}} {{bb.nume}}</p>\n      <p> Grade: {{bb.nota}} Prom. percentage: {{bb.procentaj}}</p>\n    </div>\n  </ng-template>\n\n\n</div>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<img src=\"./assets/user.png\" alt=\"login-icon\" width=\"200\" height=\"200\">\n\n<form class=\"login-form\" #loginForm=\"ngForm\">\n\n  <label>Email adress :</label>\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" required autofocus>\n  <br><br><br>\n\n  <label>Password :</label>\n  <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" required>\n\n  <br><br>\n\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\" (click)=\"login()\"> Log In </button>\n\n  <br><br>\n\n  <button (click)=\"checkLogged()\" class=\"btn btn-block btn-social btn-facebook\">\n    <span class=\"fa fa-facebook\"></span> Log in with Facebook\n  </button>\n  <button (click)=\"logOut()\" class=\"btn btn-block btn-social btn-facebook\">\n    <span class=\"fa fa-facebook\"></span> Log out from FB\n  </button>\n  <br><br><br>\n\n</form>\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <a routerLink=\"/cursuri\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-education\"></span> Courses <span class=\"badge\">{{cursuri?.length}}</span>\n  </a>\n  <a routerLink=\"/schedule\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-time\"></span> Schedule <span class=\"badge\">1</span>\n  </a>\n  <a routerLink=\"/books\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-book\"></span> Books <span class=\"badge\">9</span>\n  </a>\n  <a routerLink=\"/online-docs\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-globe\"></span> Online Documentation <span class=\"badge\">{{od?.length}}</span>\n  </a>\n  <a routerLink=\"/software\" class=\"list-group-item\">\n  <span class=\"glyphicon glyphicon-shopping-cart\"></span> Software Aplications <span class=\"badge\">{{soft?.length}}</span>\n  </a>\n  <a routerLink=\"/projects\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-briefcase\"></span> Projects <span class=\"badge\">{{proj?.length}}</span>\n  </a>\n  <a routerLink=\"/profs\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-user\"></span> Professors <span class=\"badge\">{{profs?.length}}</span>\n  </a>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <a *ngFor=\"let o of od\" href=\"{{o.link}}\" target=\"_blank\" class=\"list-group-item\">{{o.nume}}</a>\n</div>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <button (click)=\"setClicked()\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-user\"></span> Your Profile\n  </button>\n</div>\n<div class=\"list-group\" *ngIf=\"clicked\">\n    <button class=\"list-group-item\">First name : {{firstName}}</button>\n    <button class=\"list-group-item\">Last name : {{lastName}}</button>\n    <button class=\"list-group-item\">Email : {{email}}</button>\n    <button class=\"list-group-item\">Status : {{userRole}}</button>\n    <br><br>\n    <button class=\"list-group-item custom-butt\"  (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span> Log out</button>\n</div>\n\n"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\"> Name : </span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Filter by name\" name=\"filter\" [(ngModel)]=\"filterbyname\">\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\"> Rating > </span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Filter by rating\" name=\"filter\" [(ngModel)]=\"filterbyrating\">\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\"> Promotion % > </span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Filter by prom percentage\" name=\"filter\" [(ngModel)]=\"filterbyprom\">\n  </div>\n</div>\n<br><br>\n<ul class=\"scrollable-menu text-center\">\n  <div *ngFor=\"let p of profs\">\n    <li *ngIf=\"p.nume.toLowerCase().includes(filterbyname.toLowerCase()) && p.nota > filterbyrating && p.procentaj > filterbyprom\" class=\"list-group-item\">\n      <a (click)=\"addNota(p.nume)\"><strong>{{p.nume}}</strong></a> <br>\n      Rating: {{p.nota}} Promotion percentage: {{p.procentaj}}\n    </li>\n  </div>\n</ul>\n<br><br>\n<div *ngIf=\"clicked\">\n  <label> Grade {{profName}} : </label>\n  <input type=\"text\" [(ngModel)]=\"grade\">\n  <button (click)=\"gradeTeacher(profName,grade)\">Grade</button>\n</div>\n<br><br>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <a *ngFor=\"let p of proj\" href=\"{{p.link}}\" target=\"_blank\" class=\"list-group-item\">{{p.nume}} <br> {{p.autor}} </a>\n</div>\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" #registerForm=\"ngForm\">\n\n  <label>First name :</label>\n  <input type=\"text\" name=\"firstName\" [(ngModel)]=\"user.firstName\" required autofocus>\n  <br><br>\n\n  <label>Last name :</label>\n  <input type=\"text\" name=\"lastName\" [(ngModel)]=\"user.lastName\" required>\n  <br><br>\n\n  <label>E-mail adress :</label>\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" required>\n  <br><br>\n\n  <label>Password :</label>\n  <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n  <br><br>\n\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.form.valid\" (click)=\"register()\"> Register </button>\n  <br><br>\n\n</form>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Filter by group !</span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search by group...\" [(ngModel)]=\"filterByGroup\">\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Filter by class !</span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search by class...\" [(ngModel)]=\"filterByClass\">\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Filter by name !</span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search by course name...\" [(ngModel)]=\"filterByName\">\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Filter by prof !</span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search by professor name...\" [(ngModel)]=\"filterByProf\">\n  </div>\n</div>\n<br>\n<table class=\"table table-bordered table-hover table-sm custom-table\">\n  <thead>\n  <tr>\n    <th>#</th>\n    <th>Day</th>\n    <th>Hours</th>\n    <th>Name</th>\n    <th>Prof</th>\n    <th>Class</th>\n    <th>Group</th>\n  </tr>\n  </thead>\n  <tbody>\n  <ng-container *ngFor=\"let s of schedule; let i = index; let even = even; let odd = odd\">\n    <tr *ngIf=\"s.grupa.toLowerCase().includes(filterByGroup.toLowerCase()) && ('C'+s.sala).toString().toLowerCase().includes(filterByClass.toLowerCase()) && s.disciplina.toLowerCase().includes(filterByName.toLowerCase()) && s.prof.toLowerCase().includes(filterByProf.toLowerCase())\" [ngClass]=\"{ odd: odd, even: even }\">\n    <th scope=\"row\">{{i+1}}</th>\n    <td>{{s.zi}}</td>\n    <td>{{s.oraInceput}} - {{s.oraSfarsit}}</td>\n    <td>{{s.disciplina}}</td>\n    <td>{{s.prof}}</td>\n    <td>C{{s.sala}}</td>\n    <td>{{s.grupa}}</td>\n    </tr>\n  </ng-container>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <button (click)=\"setClicked()\" class=\"list-group-item\">\n    <span class=\"glyphicon glyphicon-cog\"></span> Settings\n  </button>\n</div>\n<div class=\"list-group\" *ngIf=\"clicked\">\n  <button (click)=\"showResetInput()\" class=\"list-group-item\">Reset password</button>\n  <div *ngIf=\"show\">\n    <form class=\"changepass-form\" #changePassForm=\"ngForm\">\n\n      <br>\n      <label>Old password :</label>\n      <input type=\"password\" name=\"oldpass\" [(ngModel)]=\"oldpass\" required autofocus>\n      <br><br>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!changePassForm.form.valid\" (click)=\"resetPassword()\"> Reset </button>\n      <br><br>\n      <p>{{message}}</p>\n      <br><br>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <a *ngFor=\"let s of soft\" href=\"{{s.link}}\" target=\"_blank\" class=\"list-group-item\">{{s.nume}}</a>\n</div>\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<h3> Register succeeded ! Check your email. </h3>\n\n<form class=\"validate-form\" #validateForm=\"ngForm\">\n\n  <label>Email :</label>\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" required autofocus>\n  <br><br>\n\n  <label>Code :</label>\n  <input type=\"text\" name=\"code\" [(ngModel)]=\"code\" required>\n  <br><br>\n\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!validateForm.form.valid\" (click)=\"validate()\"> Validate </button>\n  <br><br>\n\n  <h5>{{message}}</h5>\n\n</form>\n"

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ })

},[523]);
//# sourceMappingURL=main.bundle.js.map