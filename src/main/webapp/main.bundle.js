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
        this.title = 'Angular2 Bootstrap4 Navbar';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-root',
            template: "\n    <navbar></navbar>\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo__ = __webpack_require__("../../../../../src/app/todo/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hero__ = __webpack_require__("../../../../../src/app/hero/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar__ = __webpack_require__("../../../../../src/app/navbar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__home__["a" /* HomeModule */], __WEBPACK_IMPORTED_MODULE_7__navbar__["a" /* NavbarModule */], __WEBPACK_IMPORTED_MODULE_4__todo__["a" /* TodoModule */], __WEBPACK_IMPORTED_MODULE_6__hero__["a" /* HeroModule */], __WEBPACK_IMPORTED_MODULE_8__login__["a" /* LoginModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot([])],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            providers: [
                [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }],
                [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] }]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/hero/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-detail\">\n  <div *ngIf=\"hero\" class=\"card\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{hero.name}}</h4>\n      <h5 class=\"card-title\">id : {{hero.id}}</h5>\n      <p class=\"card-text\">{{hero.name}}</p>\n    </div>\n  </div>\n  <div *ngIf=\"!hero\">\n    Hero not found!!\n  </div>\n  <br>\n  <a class=\"btn btn-primary\" (click)=\"gotoHeroes()\">Back</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hero/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_list_shared__ = __webpack_require__("../../../../../src/app/hero/hero-list/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroDetail = (function () {
    function HeroDetail(current, router) {
        this.current = current;
        this.router = router;
    }
    HeroDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.current.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.hero = _this.getHero(id);
        });
    };
    HeroDetail.prototype.getHero = function (_id) {
        var hero;
        __WEBPACK_IMPORTED_MODULE_2__hero_list_shared__["a" /* HEROES */].forEach(function (element) {
            if (element.id === _id) {
                hero = element;
            }
        });
        return hero;
    };
    HeroDetail.prototype.gotoHeroes = function () {
        this.router.navigate(['/heroes']);
    };
    HeroDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'hero-detail',
            template: __webpack_require__("../../../../../src/app/hero/hero-detail/hero-detail.component.html"),
            styles: ["\n    .hero-detail {\n      width: 300px;\n      margin-left: 20px;\n    }\n  "],
            inputs: ['hero']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HeroDetail);
    return HeroDetail;
}());



/***/ }),

/***/ "../../../../../src/app/hero/hero-detail/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_detail_component__ = __webpack_require__("../../../../../src/app/hero/hero-detail/hero-detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hero_detail_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/hero/hero-list/hero-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group heroes\">\n  <li *ngFor=\"let hero of heroes\" class=\"list-group-item\"\n    [ngClass]=\"getSelectedClass(hero)\">\n      <span class=\"tag tag-default tag-pill pull-left\">{{hero.id}} </span>\n      <a [routerLink]=\"['./detail', hero.id ]\">{{hero.name}}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/hero/hero-list/hero-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heroes {\n  width: 300px; }\n  .heroes li {\n    transition: all 0.2s ease; }\n    .heroes li span {\n      cursor: default; }\n    .heroes li a {\n      cursor: pointer; }\n  .heroes li:hover {\n    padding-left: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero/hero-list/hero-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/hero/hero-list/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroListComponent = (function () {
    function HeroListComponent() {
        this.heroes = __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* HEROES */];
        this.selectedHero = undefined;
    }
    HeroListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroListComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    HeroListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'hero-list',
            template: __webpack_require__("../../../../../src/app/hero/hero-list/hero-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero/hero-list/hero-list.component.scss")]
        })
    ], HeroListComponent);
    return HeroListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero/hero-list/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_list_component__ = __webpack_require__("../../../../../src/app/hero/hero-list/hero-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hero_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_hero_list_constant__ = __webpack_require__("../../../../../src/app/hero/hero-list/shared/hero-list.constant.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/hero/hero-list/shared/hero-list.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
var HEROES = [
    { "id": 11, "name": "Iron Man" },
    { "id": 12, "name": "Spider Man" },
    { "id": 13, "name": "Captain America" },
    { "id": 14, "name": "Hulk" },
    { "id": 15, "name": "Thor" },
    { "id": 16, "name": "Black Widow" },
    { "id": 17, "name": "Daredevil" },
    { "id": 18, "name": "Hawkeye" },
    { "id": 19, "name": "Wolverine" },
    { "id": 20, "name": "Magneto" }
];


/***/ }),

/***/ "../../../../../src/app/hero/hero-list/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_list_constant__ = __webpack_require__("../../../../../src/app/hero/hero-list/shared/hero-list.constant.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hero_list_constant__["a"]; });



/***/ }),

/***/ "../../../../../src/app/hero/hero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'hero-component',
            template: "\n    <div class=\"container-fluid\">\n      <h2>Marvel Heroes</h2>\n      <router-outlet></router-outlet>\n    </div>\n  "
        })
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero/hero.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_routes__ = __webpack_require__("../../../../../src/app/hero/hero.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeroModule = (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__hero_routes__["b" /* MODULE_ROUTES */])],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__hero_routes__["a" /* MODULE_COMPONENTS */]]
        })
    ], HeroModule);
    return HeroModule;
}());



/***/ }),

/***/ "../../../../../src/app/hero/hero.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_COMPONENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_component__ = __webpack_require__("../../../../../src/app/hero/hero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_detail__ = __webpack_require__("../../../../../src/app/hero/hero-detail/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_list__ = __webpack_require__("../../../../../src/app/hero/hero-list/index.ts");



var CHILD_ROUTES = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__hero_list__["a" /* HeroListComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_1__hero_detail__["a" /* HeroDetail */] }
];
var MODULE_ROUTES = [
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_0__hero_component__["a" /* HeroComponent */], children: CHILD_ROUTES.slice() }
];
var MODULE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__hero_component__["a" /* HeroComponent */], __WEBPACK_IMPORTED_MODULE_2__hero_list__["a" /* HeroListComponent */], __WEBPACK_IMPORTED_MODULE_1__hero_detail__["a" /* HeroDetail */]
];


/***/ }),

/***/ "../../../../../src/app/hero/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_module__ = __webpack_require__("../../../../../src/app/hero/hero.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hero_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'contact',
            template: '<div class="container-fluid">This is Contact Component</div>'
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/contact/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\" id=\"banner\" [hidden]=\"isAuthenticated\">\n\t\t\t<div class=\"parallax text-center\"\n\t\t\t\tstyle=\"background-image: url(assets/images/shield-large.png);\">\n\t\t\t\t\n\t\t\t\t<div class=\"parallax-pattern-overlay\">\n\t\t\t\t\t<div class=\"container text-center\" id=\"size-banner\">\n\t\t\t\t\t\t<h2 class=\"display-2\">Angular2 App</h2>\n\t\t\t\t\t\t<h3 class=\"banner-tag-line\">An Angular2 and Bootstrap 4, Todo App</h3>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<h1>Login</h1>\n\t\t\t\t\t\t<div class=\"well\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tWith Facebook: <a href=\"/login/fb\">click here</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\tWith Github: <a href=\"/login/github\">click here</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\n<div [hidden]=\"!isAuthenticated\">\n\t<header>\n\t\t<div class=\"jumbotron jumbotron-fluid\" id=\"banner\">\n\t\t\t<div class=\"parallax text-center\"\n\t\t\t\tstyle=\"background-image: url(assets/images/shield-large.png);\">\n\t\t\t\t\n\t\t\t\t<div class=\"parallax-pattern-overlay\">\n\t\t\t\t\t<div class=\"container text-center\" id=\"size-banner\">\n\t\t\t\t\t\t<h2 class=\"display-2\">Angular2 App</h2>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<h3 class=\"banner-tag-line\">An Angular2 and Bootstrap 4, Todo App</h3>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<a href=\"https://github.com/mvenin/micro20\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary-outline btn-banner\">View on Github</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t\n\t<section class=\"footer\" id=\"footer\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<p>MIT License - Copyright &copy; 2015 - 2016</p>\n\t\t\t\t\t<br>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron-fluid {\n  padding: 0; }\n\nheader {\n  margin-top: 15px; }\n\nimg {\n  width: 100%;\n  max-width: 100%;\n  height: auto; }\n\n.card-img-top {\n  width: 100%;\n  height: auto; }\n\n#site-title {\n  max-width: 150px; }\n\n#size-banner {\n  height: 580px;\n  padding-top: 60px; }\n\nheader .display-2 {\n  font-size: 350%;\n  line-height: 1;\n  font-weight: 300; }\n\n.banner-tag-line {\n  font-size: 150%;\n  line-height: 1.4;\n  font-weight: 300; }\n\n@media (min-width: 48em) {\n  /* -md- and above */\n  #size-banner {\n    height: 600px;\n    padding-top: 150px; }\n  header .display-2 {\n    font-size: 400%; }\n  .banner-tag-line {\n    font-size: 180%; } }\n\n.btn-banner {\n  font-weight: 600;\n  color: #002157;\n  border-color: #002157;\n  margin-right: 10px; }\n\n/* ---------------------- PARALLAX --------------------------------------*/\n.parallax {\n  text-align: center;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 30%;\n  background-attachment: fixed !important;\n  overflow: hidden; }\n\n.parallax-pattern-overlay {\n  background-color: rgba(255, 255, 255, 0.5); }\n\n/* ----------------------- FOOTER ---------------------------------------*/\n.footer {\n  background: #363636;\n  margin-top: -30px;\n  position: relative;\n  padding: 0; }\n\n/*.footer .container {\r\n    padding-top: 10px;\r\n}*/\n.footer p {\n  color: #fff;\n  font-size: .9em;\n  line-height: 24px;\n  font-weight: 300;\n  text-align: center;\n  text-transform: uppercase;\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.isAuthenticated = false;
        this.authenticated = {};
        router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && '/' === e.urlAfterRedirects) {
                console.log(e);
            }
            else {
                console.log(e);
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getUserIdentity();
    };
    HomeComponent.prototype.getUserIdentity = function () {
        var _this = this;
        this.loginService.getUserIdentity()
            .then(function (user) {
            _this.isAuthenticated = true;
            console.log('isAuthenticated' + _this.isAuthenticated);
            _this.authenticated = JSON.stringify(user);
        });
        console.log('isAuthenticated: ' + this.isAuthenticated);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__login_login_service__["a" /* LoginService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__immobilis_immobilis_service__ = __webpack_require__("../../../../../src/app/home/immobilis/immobilis.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__home_routes__["b" /* MODULE_ROUTES */])],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__home_routes__["a" /* MODULE_COMPONENTS */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__immobilis_immobilis_service__["a" /* ImmobilisService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODULE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULE_COMPONENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__immobilis__ = __webpack_require__("../../../../../src/app/home/immobilis/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__("../../../../../src/app/home/contact/index.ts");



var MODULE_ROUTES = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] },
    { path: 'home', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] },
    { path: 'immobilis', component: __WEBPACK_IMPORTED_MODULE_1__immobilis__["a" /* ImmobilisComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactComponent */] }
];
var MODULE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_1__immobilis__["a" /* ImmobilisComponent */],
    __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactComponent */]
];


/***/ }),

/***/ "../../../../../src/app/home/immobilis/immobilis.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n<div>\r\n\t<label>Uri:</label> \r\n\t<input #pageUri class=\"form-control form-control-lg\" />\r\n\t<button (click)=\"getPageHtml(pageUri.value);\" class=\"btn btn-primary\" type=\"submit\">Get content</button>\r\n</div>\r\n\r\n\r\n<div>\r\n{{pageContent}}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/immobilis/immobilis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmobilisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__immobilis_service__ = __webpack_require__("../../../../../src/app/home/immobilis/immobilis.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImmobilisComponent = (function () {
    function ImmobilisComponent(route, immobilisService) {
        this.route = route;
        this.immobilisService = immobilisService;
    }
    ImmobilisComponent.prototype.ngOnInit = function () {
        this.pageContent = 'nada yet';
    };
    ImmobilisComponent.prototype.getPageHtml = function (pageUri) {
        var _this = this;
        this.immobilisService.getContentFromUri(pageUri)
            .then(function (data) { return _this.pageContent = data; });
    };
    ImmobilisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'immobilis',
            template: __webpack_require__("../../../../../src/app/home/immobilis/immobilis.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__immobilis_service__["a" /* ImmobilisService */]])
    ], ImmobilisComponent);
    return ImmobilisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/immobilis/immobilis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmobilisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImmobilisService = (function () {
    function ImmobilisService(http) {
        this.http = http;
        this.todoUrl = 'api/scrap';
    }
    ImmobilisService.prototype.getContentFromUri = function (uriParams) {
        var url = this.todoUrl + "?uri=" + ("" + uriParams);
        var todos = this.http.get(url)
            .toPromise()
            .then(function (response) { var rs = response.text(); console.log(rs); return rs; })
            .catch(this.handleError);
        return todos;
    };
    ImmobilisService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ImmobilisService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ImmobilisService);
    return ImmobilisService;
}());



/***/ }),

/***/ "../../../../../src/app/home/immobilis/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__immobilis_component__ = __webpack_require__("../../../../../src/app/home/immobilis/immobilis.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__immobilis_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__immobilis_service__ = __webpack_require__("../../../../../src/app/home/immobilis/immobilis.service.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
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
    function LoginComponent(location, router, loginService) {
        this.location = location;
        this.router = router;
        this.loginService = loginService;
        this.isAuthenticated = false;
        this.authenticated = {};
        if ('/logout' === this.router.url) {
            this.loginService.logout();
            this.router.navigate(['/']);
            window.location.reload();
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getUserIdentity();
    };
    LoginComponent.prototype.getUserIdentity = function () {
        var _this = this;
        this.loginService.getUserIdentity()
            .then(function (user) {
            _this.isAuthenticated = true;
            console.log('isAuthenticated' + _this.isAuthenticated);
            _this.authenticated = JSON.stringify(user);
        });
        console.log('isAuthenticated' + this.isAuthenticated);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'login',
            template: "<div><span>{{ authenticated }}</span>\n<span>{{ isAuthenticated }}</span></div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MODULE_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */] }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(MODULE_ROUTES, { enableTracing: true })],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserIdentity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserIdentity = (function () {
    function UserIdentity(name) {
        this.name = name;
    }
    return UserIdentity;
}());

var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.loginUrl = 'login';
    }
    LoginService.prototype.logout = function () {
        this.http.get('/api/logout')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LoginService.prototype.getUserIdentity = function () {
        var url = '/user';
        var user = this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return user;
    };
    LoginService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_module__ = __webpack_require__("../../../../../src/app/navbar/navbar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navbar_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/navbar/navbar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__ = __webpack_require__("../../../../../src/app/navbar/navbar.metadata.ts");

var ROUTES = [
    { path: '', title: 'Angular2 Bootstrap4 Navbar', menuType: __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__["a" /* MenuType */].BRAND },
    { path: 'home', title: 'Home', menuType: __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__["a" /* MenuType */].LEFT },
    { path: 'todo', title: 'Todos', menuType: __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__["a" /* MenuType */].LEFT },
    { path: 'heroes', title: 'Heroes', menuType: __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__["a" /* MenuType */].LEFT },
    { path: 'immobilis', title: 'Immobilis', menuType: __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__["a" /* MenuType */].RIGHT },
    { path: 'contact', title: 'Contact', menuType: __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__["a" /* MenuType */].RIGHT },
    { path: 'logout', title: 'Logout', menuType: __WEBPACK_IMPORTED_MODULE_0__navbar_metadata__["a" /* MenuType */].RIGHT }
];


/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"hidden\" value=\"{{ isAuthenticated }}\"/>\n<input type=\"hidden\" value=\"{{ authenticated }}\"/>\n\n<nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse\" *ngIf=\"isAuthenticated\">\n\n\t<div class=\"clearfix\">\n\t\n\t\t<button (click)=\"isCollapsed = !isCollapsed\"\n\t\t\tclass=\"navbar-toggler pull-xs-right hidden-sm-up\" \n\t\t\ttype=\"button\"\n\t\t\taria-controls=\"bd-main-nav\" aria-label=\"Toggle navigation\">\n\t\t\t{{menuIcon}}\n\t\t\t</button>\n\t\t\t\n\t\t\t<a (click)=\"isCollapsed = true\" class=\"navbar-brand hidden-sm-up\"\n\t\t\t[routerLink]=\"[brandMenu.path]\"> Micro20 </a>\n\t\t\t\n\t\t<ul class=\"nav justify-content-center    hidden-xs-down\">\n\t\t\t\t<li (click)=\"isCollapsed = true\" *ngFor=\"let menuItem of menuItems\"\n\t\t\t\tclass=\"nav-item\" routerLinkActive=\"active\"\n\t\t\t\t[ngClass]=\"getMenuItemClasses(menuItem)\">\n\t\t\t\t\n\t\t\t\t<a\n\t\t\t\tclass=\"nav-item nav-link\" [routerLink]=\"[menuItem.path]\"\n\t\t\t\trouterLinkActive=\"active\">{{menuItem.title}}</a>\n\t\t\t\t\n\t\t\t\t</li>\n\t\t\t\t\n\t\t</ul>\t\t\n\t\t\t\n\t</div>\n\t\n\t<div class=\"navbar-toggleable-xs navbar-collapse\" id=\"bd-main-nav\"\n\t\t[attr.aria-expanded]=\"!isCollapsed\"\n\t\t[ngClass]=\"{collapse: isCollapsed}\">\n\t\t\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li (click)=\"isCollapsed = true\" class=\"nav-item\"\n\t\t\t\trouterLinkActive=\"active\">\n\t\t\t\t<a\n\t\t\t\tclass=\"navbar-brand hidden-xs-down\" [routerLink]=\"[brandMenu.path]\">{{brandMenu.title}}</a>\n\t\t\t</li>\n\t\t\t\n\t\t\t<li (click)=\"isCollapsed = true\" *ngFor=\"let menuItem of menuItems\"\n\t\t\t\tclass=\"nav-item\" routerLinkActive=\"active\"\n\t\t\t\t[ngClass]=\"getMenuItemClasses(menuItem)\">\n\t\t\t\t\n\t\t\t\t<a\n\t\t\t\tclass=\"nav-item nav-link\" [routerLink]=\"[menuItem.path]\"\n\t\t\t\trouterLinkActive=\"active\">{{menuItem.title}}</a>\n\t\t\t\t\n\t\t\t\t</li>\n\t\t</ul>\n\t\t\n\t</div>\n\t\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n  color: #fff; }\n\n.navbar-toggler {\n  border: solid 1px silver;\n  border-radius: 2px;\n  color: #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_routes_config__ = __webpack_require__("../../../../../src/app/navbar/navbar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_metadata__ = __webpack_require__("../../../../../src/app/navbar/navbar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = (function () {
    function NavbarComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.isCollapsed = true;
        this.isAuthenticated = true;
        this.authenticated = {};
        this.router.navigate(['/home']);
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.menuItems = __WEBPACK_IMPORTED_MODULE_2__navbar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem.menuType !== __WEBPACK_IMPORTED_MODULE_3__navbar_metadata__["a" /* MenuType */].BRAND; });
        this.brandMenu = __WEBPACK_IMPORTED_MODULE_2__navbar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem.menuType === __WEBPACK_IMPORTED_MODULE_3__navbar_metadata__["a" /* MenuType */].BRAND; })[0];
        this.getUserIdentity();
    };
    NavbarComponent.prototype.getUserIdentity = function () {
        var _this = this;
        this.loginService.getUserIdentity()
            .then(function (user) {
            _this.isAuthenticated = true;
            console.log('isAuthenticated' + _this.isAuthenticated);
            _this.authenticated = JSON.stringify(user);
            ;
        });
        console.log('isAuthenticated' + this.isAuthenticated);
    };
    Object.defineProperty(NavbarComponent.prototype, "menuIcon", {
        get: function () {
            return this.isCollapsed ? '☰' : '✖';
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.getMenuItemClasses = function (menuItem) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === __WEBPACK_IMPORTED_MODULE_3__navbar_metadata__["a" /* MenuType */].RIGHT
        };
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__login_login_service__["a" /* LoginService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.metadata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuType; });
var MenuType;
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(MenuType || (MenuType = {}));


/***/ }),

/***/ "../../../../../src/app/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "../../../../../src/app/todo/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_module__ = __webpack_require__("../../../../../src/app/todo/todo.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n\r\n.todos li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.todos li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\n\r\ntable { table-layout: fixed; }\r\ntable td { word-wrap: break-word; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n \r\n\t<div class=\"row\"><div class=\"col-md-12\">\r\n\t\t<div class=\"input-group\">\r\n\t\t  <span class=\"input-group-addon\">Todo:</span>\r\n\t\t  <input type=\"text\" class=\"form-control\"  #todoDescr >\r\n\t\t  <span class=\"input-group-addon\">\r\n\t\t  \t<button (click)=\"addTodo(todoDescr.value); todoDescr.value=''\" class=\"btn btn-primary\" type=\"submit\">Add</button>\r\n\t\t  </span>\r\n\t\t</div>\r\n\t</div></div>\r\n\t\r\n\t<div class=\"row\"><div class=\"col-md-12\">\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table table-striped\">\r\n\t\t\t  <thead>\r\n\t\t\t    <tr>\r\n\t\t\t      <th class=\"col-xs-1\">#</th>\r\n\t\t\t      <th class=\"col-xs-8\">Todo</th>\r\n\t\t\t      <th class=\"col-xs-2\">DueDate</th>\r\n\t\t\t      <th class=\"col-xs-1\">Action</th>\r\n\t\t\t    </tr>\r\n\t\t\t  </thead>\r\n\t\t\t  <tbody>\r\n\t\t\t    <tr *ngFor=\"let todo of todos; let i = index;\" (click)=\"onSelect(todo)\" [class.selected]=\"todo === selectedTodo\">\r\n\t\t\t      <th scope=\"row\">{{i+1}}</th>\r\n\t\t\t      <td>{{todo.name}}</td>\r\n\t\t\t      <td>{{todo.dueDate}}</td>\r\n\t\t\t      <td> <button class=\"btn btn-delete float-right\"  (click)=\"deleteTodo(todo); $event.stopPropagation()\">x</button> </td>\r\n\t\t\t    </tr>\r\n\t\t\t  </tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div></div>\r\n\t\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoComponent.prototype.onSelect = function (todo) {
        this.selectedTodo = todo;
    };
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos()
            .then(function (todos) { return _this.todos = todos; });
    };
    TodoComponent.prototype.addTodo = function (todoDescr) {
        var _this = this;
        todoDescr = todoDescr.trim();
        if (!todoDescr)
            return;
        this.todoService.createTodo(todoDescr)
            .then(function (todo) {
            _this.todos.push(todo);
            _this.selectedTodo = null;
        });
    };
    TodoComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.todoService
            .deleteTodo(todo.id)
            .then(function () {
            _this.todos = _this.todos.filter(function (h) { return h !== todo; });
            if (_this.selectedTodo === todo) {
                _this.selectedTodo = null;
            }
        });
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'todo',
            template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MODULE_ROUTES = [
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_4__todo_component__["a" /* TodoComponent */] }
];
var TodoModule = (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(MODULE_ROUTES)],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__todo_component__["a" /* TodoComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__todo_service__["a" /* TodoService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]]
        })
    ], TodoModule);
    return TodoModule;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Todo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Todo = (function () {
    function Todo(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }
    return Todo;
}());

var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.todoUrl = 'api/todos';
    }
    TodoService.prototype.getTodos = function () {
        var url = "" + this.todoUrl;
        var todos = this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return todos;
    };
    TodoService.prototype.getAuth = function () {
        var url = 'me';
        var todos = this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return todos;
    };
    TodoService.prototype.createTodo = function (name) {
        return this.http
            .post(this.todoUrl, JSON.stringify(new Todo(name, new Date())), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TodoService.prototype.deleteTodo = function (id) {
        var url = this.todoUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        if (error.status === 403) {
            alert(error._body);
        }
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__("../../../../../src/app/index.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map