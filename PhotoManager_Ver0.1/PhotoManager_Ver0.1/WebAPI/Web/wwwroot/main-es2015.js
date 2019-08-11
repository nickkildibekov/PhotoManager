(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n   <!-- Header -->\r\n   <app-header></app-header>\r\n \r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  <!-- Footer -->\r\n   <app-footer></app-footer>\r\n  <!-- Footer -->\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\">\r\n        <div class=\"container\">\r\n          <div class=\"row\" style=\"justify-content: space-evenly;\">\r\n            <div class=\"text-center\">\r\n              <a href=\"callto:+380982159299\"><i id=\"social-phn\" class=\"fa fa-phone-square fa-3x social\"></i></a>\r\n              <a href=\"skype:live:nikita_kildibekov?call\"><i id=\"social-skp\" class=\"fa fa-skype fa-3x social\"></i></a>\r\n              <a href=\"mailto:#\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\r\n            </div>\r\n            <div class=\"text-center author-name\">\r\n              Nikita Kildibekov\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <a href=\"https://www.facebook.com/\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\r\n              <a href=\"https://twitter.com\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\r\n              <a href=\"https://www.instagram.com/\"><i id=\"social-instagram\" class=\"fa fa-instagram fa-3x social\"></i></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <header>\r\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand\" (click)='defaultFilter()'>Photo Manager</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\">\r\n          <ul class=\"navbar-nav flex-grow-1 just-ct-sp-between\">\r\n            <li class=\"nav-item\" *ngIf=\"isActivated\">\r\n              <button type=\"button\" class=\"btn btn-warning font-larger\" (click)='onUploadsFilter()'>My Uploads</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <button type=\"button\" class=\"btn btn-success font-larger\" (click)='topContribFilter()'>Top contributors</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <button type=\"button\" class=\"btn btn-info font-larger\" (click)='mostRatedFilter()'>Most Rated</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <button type=\"button\" class=\"btn btn-danger font-larger\" (click)='lastWeekFilter()'>Last Week</button>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"isActivated\">\r\n              <button class=\"btn btn-primary font-larger\" routerLink=\"posts/create\">Create</button>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"isActivated\">\r\n             <span><b>{{firstName}}</b></span> <br> <span><b>{{lastName}}</b></span>\r\n            </li>\r\n            <li class=\"nav-item\"  *ngIf=\"isActivated\">\r\n              <button class=\"btn btn-secondary font-larger\" (click)='onLogout()'><i>Log Out</i></button>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!isActivated\">\r\n              <button class=\"btn btn-secondary font-larger\" routerLink=\"users/login\"><i>Login</i></button>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!isActivated\">\r\n              <button class=\"btn btn-secondary font-larger\" routerLink=\"users/registration\"><i>Register</i></button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/create-post.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-create/create-post.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form = ngForm autocomplete=\"off\" (ngSubmit)=\"onSubmit(Title,Description,Image)\">\r\n        <div class=\"card border-primary mb-3\">\r\n                <div class=\"card-header bg-primary\">\r\n                    <h3 class=\"card-title\">Create Post</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\">\r\n                                <label>Title</label>\r\n                                <input required ngModel #Title name=\"Title\" id=\"Title\" class=\"form-control col-sm-7\"/>                        \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <label class=\"col-sm-10 col-form-label\"> Image</label>\r\n                                    <div class=\"col-sm-10\">\r\n                                        <div class=\"custom-file\">\r\n                                            <img [src]=\"imageUrl\"  style=\"width:250px;height:200px\">\r\n                                            <input  type=\"file\"  #Image  accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-7\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea required  ngModel #Description name=\"Description\" id=\"Description\" class=\"form-control\" rows=\"12\" cols=\"80\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                        <div class=\"row just-ct-evenly\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"button\" value=\"Back to list\" class=\"btn btn-primary\" (click) = \"onBack()\"/>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"submit\" value=\"Create\" class=\"btn btn-primary\" [disabled]=\"Image.value=== ''|| !form.valid\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-detail/post-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-detail/post-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Details</h1>\r\n<div>\r\n    <div class=\"row details-top\">\r\n        <div class=\"col-md-6\">\r\n            <span>Author: </span>\r\n            <span>{{post?.AuthorFullName}}</span>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <span>Posted: </span>\r\n            <span>{{post?.PostedDateTime | date }}</span>\r\n        </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"container details-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                    <p><b>Title:</b><br>{{post?.Title}}</p>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <p><b>Description:</b><br>{{post?.Description}}</p>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <p><b>Rating:</b>{{post?.Rating}}<br>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <img class=\"img-fluid\" src=\"assets/{{post?.ImagePath}}\" alt=\"Post image\"\r\n                    asp-append-version=\"true\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row just-ct-evenly\">\r\n    <input type=\"button\" value=\"Back\" class=\"btn btn-primary font-larger\" (click)=\"onBack()\" />\r\n    <input type=\"button\" value=\"Edit Post\" class=\"btn btn-warning font-larger\" (click)=\"onEdit(post.Id)\" />\r\n    <input type=\"button\" value=\"Delete Post\" class=\"btn btn-danger font-larger\" (click)=\"onDelete(post.Id)\" />\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-edit/post-edit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-edit/post-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(Id,Title,Description,Image)\">\r\n        <input ngModel #Id name=\"Id\" id=\"Id\" value=\"{{post?.Id}}\" style=\"display: none\"/>\r\n        <div class=\"card border-primary mb-3\">\r\n                <div class=\"card-header bg-primary\">\r\n                    <h3 class=\"card-title\">Edit Post</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">\r\n                            <div class=\"form-group\">\r\n                                <label>Title</label>\r\n                                <input required  ngModel #Title name=\"Title\" id=\"Title\" value=\"{{post?.Title}}\" class=\"form-control col-sm-7\"/>                        \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <label class=\"col-sm-10 col-form-label\"> Image</label>\r\n                                    <div class=\"col-sm-10\">\r\n                                        <div class=\"custom-file\">\r\n                                            <img src=\"assets/{{post?.ImagePath}}\"  style=\"width:250px;height:200px\">\r\n                                            <input  type=\"file\"  #Image  accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-7\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description</label>\r\n                                <textarea required  ngModel  name=\"Description\" #Description id=\"Description\" class=\"form-control\" rows=\"12\" cols=\"80\">{{post?.Description}}</textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                        <div class=\"row just-ct-evenly\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"button\" value=\"Back to list\" class=\"btn btn-primary\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"submit\" value=\"Save\" class=\"btn btn-primary\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row just-ct-sp-between\">\r\n    <div *ngIf=\"postList?.length == 0\">\r\n        <p class=\"font-italic text-center\">\r\n            No posts in database\r\n        </p>\r\n    </div>\r\n    <div *ngFor=\"let post of postList | myUploads: filterCurUserId |  mostRated: mostrtd | lastWeek: lwfilter | paginate: { itemsPerPage: 8, currentPage: p } \"\r\n        class=\"col-md-3 d-flex align-items-stretch\">\r\n        <div class=\"card card-main border-success\">\r\n            <div class=\"card-header just-ct-sp-between row\">\r\n                <div>{{post.AuthorFullName}}</div>\r\n                <div><small>{{post.PostedDateTime | date}}</small></div>\r\n            </div>\r\n            <div class=\"card-body container\">\r\n                <h4 class=\"card-title\">{{post.Title}}</h4>\r\n                <img class=\"card-img-top\" src=\"assets/{{post.ImagePath}}\" alt=\"Post image\"\r\n                    (click)=\"postDetails(post.Id)\" />\r\n                <p class=\"card-text\">\r\n                    <small>\r\n                        {{post.Description | slice:0:60}}<span *ngIf=\"post.Description.length > 60\">...</span>\r\n                    </small>\r\n                </p>\r\n                <div class=\"row main-card-inside just-ct-sp-between\" *ngIf=\"curUserId !== post.ApplicationUserId\">\r\n                    <div class=\"col-4\">\r\n                        <div class=\"row\">\r\n                            <i class=\"fa fa-thumbs-up mr-2\"  (click)='like(post, post.Id, curUserId)'></i>\r\n                            <span *ngIf=\"likedPostId === post.Id\">{{curLikes}}</span>\r\n                            <span *ngIf=\"likedPostId !== post.Id\">{{post.Likes?.length}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <div class=\"row\">\r\n                            <i class=\"fa fa-thumbs-down mr-2\" (click)='disLike(post.Id)'></i>\r\n                            <span *ngIf=\"disLikedPostId === post.Id\">{{curDisLikes}}</span>\r\n                            <span *ngIf=\"disLikedPostId !== post.Id\">{{post.DisLikes?.length}}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"justify-content: space-around;\">\r\n                        <span *ngIf=\"likedPostId !== post.Id && dislLikedPostId !== post.Id \">Rating:\r\n                            {{post?.Rating}}</span>\r\n                        <span *ngIf=\"likedPostId === post.Id || disLikedPostId === post.Id \">Rating:\r\n                            {{getRating()}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row main-card-inside just-ct-sp-between\" *ngIf=\"curUserId === post.ApplicationUserId\">\r\n                    <div class=\"col-8\"><span><i>YOUR POST</i></span></div>\r\n                    <div>\r\n                        <span *ngIf=\"likedPostId !== post.Id && dislLikedPostId !== post.Id \">Rating:\r\n                            {{post?.Rating}}</span>\r\n                        <span *ngIf=\"likedPostId === post.Id || disLikedPostId === post.Id \">Rating:\r\n                            {{getRating()}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"text-center\" *ngIf=\"postList?.length\">\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/posts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-delete/user-delete.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-delete/user-delete.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>user-delete works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-detail/user-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-detail/user-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>user-detail works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-login/user-login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-login/user-login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <section>\r\n            <form #loginFormModel='ngForm' autocomplete=\"off\" (submit)=\"onSubmit(Email,Password)\">\r\n                <h4 class=\"text-center\">Use a local account to log in.</h4>\r\n                <hr />\r\n                <div class=\"form-group\">\r\n                    <label>E-mail</label>\r\n                    <input #Email name=\"Email\" type=\"email\" [(ngModel)]=\"loginFormModel.Email\" class=\"form-control\"\r\n                        required />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Password</label>\r\n                    <input #Password type=\"password\" name=\"Password\" [(ngModel)]=\"loginFormModel.Password\"\r\n                        class=\"form-control\" required />\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"loginFormModel.invalid\">Log In</button>\r\n                <div class=\"form-group\">\r\n                    <p>\r\n                        <a [routerLink]=\"['/users/registration']\">\r\n                            Register as a new user\r\n                        </a>\r\n                    </p>\r\n                </div>\r\n            </form>\r\n        </section>\r\n    </div>\r\n    <div class=\"col-md-6 col-md-offset-2\">\r\n        <section>\r\n            <h4 class=\"text-center\">Use another service to log in.</h4>\r\n            <hr />\r\n        </section>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-registration/user-registration.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-registration/user-registration.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-8 text-center\">\r\n            <h4>Create an account.</h4>\r\n            <p><span style=\"color:red\">*</span><span><i>-required fileld</i></span></p>\r\n            <hr />\r\n            <div class=\"row justify-content-sm-between\">\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"form-group required\">\r\n                        <label>Email</label>\r\n                        <input class=\"form-control\" formControlName=\"Email\" type=\"email\"\r\n                            placeholder=\"enter your e-mail\">\r\n                        <label class=\"text-danger\"\r\n                            *ngIf=\"formModel.get('Email').touched && formModel.get('Email').errors?.email\">Invalid\r\n                            email address.</label>\r\n                        <label class=\"text-danger\"\r\n                            *ngIf=\"formModel.get('Email').touched && formModel.get('Email').errors?.required\">This\r\n                            field is mandatory.</label>\r\n                    </div>\r\n                    <div formGroupName=\"Passwords\">\r\n                        <div class=\"form-group required\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" class=\"form-control\" formControlName=\"Password\">\r\n                            <label class=\"text-danger\"\r\n                                *ngIf=\"formModel.get('Passwords.Password').touched && formModel.get('Passwords.Password').errors?.required\">This\r\n                                field is mandatory.</label>\r\n                            <label class=\"text-danger\"\r\n                                *ngIf=\"formModel.get('Passwords.Password').touched && formModel.get('Passwords.Password').errors?.minlength\">Minimum\r\n                                6 characters required.</label>\r\n                        </div>\r\n                        <div class=\"form-group required\">\r\n                            <label>Confirm Password</label>\r\n                            <input type=\"password\" class=\"form-control\" formControlName=\"ConfirmPassword\">\r\n                            <label class=\"text-danger\"\r\n                                *ngIf=\"formModel.get('Passwords.ConfirmPassword').touched && formModel.get('Passwords.ConfirmPassword').errors?.required\">This\r\n                                field is mandatory.</label>\r\n                            <label class=\"text-danger\"\r\n                                *ngIf=\"formModel.get('Passwords.ConfirmPassword').touched && formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch\">Confirm\r\n                                Password does not match.</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"form-group required\">\r\n                        <label>First Name</label>\r\n                        <input class=\"form-control\" formControlName=\"FirstName\" placeholder=\"enter your first name\">\r\n                        <label class=\"text-danger\"\r\n                            *ngIf=\"formModel.get('FirstName').touched && formModel.get('FirstName').errors?.required\">This\r\n                            field is mandatory.</label>\r\n                    </div>\r\n                    <div class=\"form-group required\">\r\n                        <label>Last Name</label>\r\n                        <input class=\"form-control\" formControlName=\"LastName\" placeholder=\"enter your last name\">\r\n                        <label class=\"text-danger\"\r\n                            *ngIf=\"formModel.get('LastName').touched && formModel.get('LastName').errors?.required\">This\r\n                            field is mandatory.</label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Phone</label>\r\n                        <input class=\"form-control\" formControlName=\"Phone\" placeholder=\"enter your phone\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr />\r\n            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!formModel.valid\">Sign\r\n                Up</button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users-list/users-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users-list/users-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>users-list works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");






let AppComponent = class AppComponent {
    constructor(router, postListComponent, service, authGuard) {
        this.router = router;
        this.postListComponent = postListComponent;
        this.service = service;
        this.authGuard = authGuard;
        this.title = 'Photo Manager';
    }
    ngOnInit() {
        this.filter = 'default';
        this.router.navigate(['posts/list/', this.filter]);
    }
    onLogout() {
        sessionStorage.removeItem('token');
        location.reload();
    }
    onUploadsFilter() {
        this.filter = 'myUploads';
        this.router.navigate(['posts/list/', this.filter]);
    }
    topContribFilter() {
        this.filter = 'topContrib';
        this.router.navigate(['posts/list/', this.filter]);
    }
    lastWeekFilter() {
        this.filter = 'lastWeek';
        this.router.navigate(['posts/list/', this.filter]);
    }
    mostRatedFilter() {
        this.filter = 'mostRated';
        this.router.navigate(['posts/list/', this.filter]);
    }
    defaultFilter() {
        this.filter = 'default';
        this.router.navigate(['posts/list/', this.filter]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__["PostListComponent"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__["PostListComponent"]],
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _posts_pipes_my_uploads_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/pipes/my-uploads-filter.pipe */ "./src/app/posts/pipes/my-uploads-filter.pipe.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _users_user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/user-delete/user-delete.component */ "./src/app/users/user-delete/user-delete.component.ts");
/* harmony import */ var _users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/user-detail/user-detail.component */ "./src/app/users/user-detail/user-detail.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _users_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/user-registration/user-registration.component */ "./src/app/users/user-registration/user-registration.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./posts/post-detail/post-detail.component */ "./src/app/posts/post-detail/post-detail.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _posts_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./posts/post-edit/post-edit.component */ "./src/app/posts/post-edit/post-edit.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _posts_post_create_create_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./posts/post-create/create-post.component */ "./src/app/posts/post-create/create-post.component.ts");
/* harmony import */ var _users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./users/user-login/user-login.component */ "./src/app/users/user-login/user-login.component.ts");
/* harmony import */ var _posts_pipes_most_rated_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./posts/pipes/most-rated-filter.pipe */ "./src/app/posts/pipes/most-rated-filter.pipe.ts");
/* harmony import */ var _posts_pipes_last_week_filter_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./posts/pipes/last-week-filter.pipe */ "./src/app/posts/pipes/last-week-filter.pipe.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





























const appRoutes = [
    { path: '', redirectTo: '/posts/list/:filter', pathMatch: 'full' },
    { path: 'root', component: _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"] },
    {
        path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_15__["PostsComponent"],
        children: [
            { path: 'list/:filter', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__["PostListComponent"], data: { title: 'List of Posts' } },
            { path: 'create', component: _posts_post_create_create_post_component__WEBPACK_IMPORTED_MODULE_23__["CreatePostComponent"], data: { title: 'Create Post' } },
            { path: 'detail/:Id', component: _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_16__["PostDetailComponent"], data: { title: 'Post Details' } },
            { path: 'edit/:Id', component: _posts_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_18__["PostEditComponent"], data: { title: 'Edit Post' } },
        ]
    },
    {
        path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
        children: [
            { path: 'list', component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"], data: { title: 'List of Users' } },
            { path: 'registration', component: _users_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationComponent"], data: { title: 'Registration' } },
            { path: 'login', component: _users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_24__["UserLoginComponent"], data: { title: 'Login' } },
            { path: 'detail/:Id', component: _users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"], data: { title: 'User Details' } },
        ]
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_15__["PostsComponent"],
            _posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_16__["PostDetailComponent"],
            _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__["PostListComponent"],
            _posts_post_create_create_post_component__WEBPACK_IMPORTED_MODULE_23__["CreatePostComponent"],
            _posts_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_18__["PostEditComponent"],
            _posts_pipes_my_uploads_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["MyUploadsFilterPipe"],
            _posts_pipes_last_week_filter_pipe__WEBPACK_IMPORTED_MODULE_26__["LastWeekFilterPipe"],
            _posts_pipes_most_rated_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["MostRatedFilterPipe"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
            _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"],
            _users_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationComponent"],
            _users_user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_3__["UserDeleteComponent"],
            _users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"],
            _users_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_24__["UserLoginComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
        ],
        providers: [src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (sessionStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.filter = 'default';
            this.router.navigate(['posts/list/', this.filter]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html")
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




let HeaderComponent = class HeaderComponent {
    constructor(root, authGuard) {
        this.root = root;
        this.authGuard = authGuard;
    }
    ngOnInit() {
        this.isActivated = this.authGuard.canActivate(null, null);
        if (this.isActivated) {
            this.firstName = sessionStorage.getItem('curUserFName');
            this.lastName = sessionStorage.getItem('curUserLName');
        }
    }
    ngOnChanges(changes) {
        this.firstName = changes.firstName.currentValue;
        this.lastName = changes.lastName.currentValue;
    }
    onLogout() {
        this.root.onLogout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { type: src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        providers: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/posts/pipes/last-week-filter.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/posts/pipes/last-week-filter.pipe.ts ***!
  \******************************************************/
/*! exports provided: LastWeekFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastWeekFilterPipe", function() { return LastWeekFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LastWeekFilterPipe = class LastWeekFilterPipe {
    transform(postList, lwfilter) {
        if (!postList) {
            return [];
        }
        if (!lwfilter) {
            return postList;
        }
        lwfilter = new Date();
        lwfilter.setDate(lwfilter.getDate() - 7);
        return postList.filter(post => post.PostedDateTime >= lwfilter.getDate());
    }
};
LastWeekFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'lastWeek'
    })
], LastWeekFilterPipe);



/***/ }),

/***/ "./src/app/posts/pipes/most-rated-filter.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/posts/pipes/most-rated-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: MostRatedFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostRatedFilterPipe", function() { return MostRatedFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MostRatedFilterPipe = class MostRatedFilterPipe {
    transform(postList, mostrtd) {
        if (!postList) {
            return [];
        }
        if (!mostrtd) {
            return postList;
        }
        return postList.filter(post => post.Rating > 0).sort((one, two) => (one.Rating > two.Rating ? -1 : 1));
    }
};
MostRatedFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mostRated'
    })
], MostRatedFilterPipe);



/***/ }),

/***/ "./src/app/posts/pipes/my-uploads-filter.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/posts/pipes/my-uploads-filter.pipe.ts ***!
  \*******************************************************/
/*! exports provided: MyUploadsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyUploadsFilterPipe", function() { return MyUploadsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyUploadsFilterPipe = class MyUploadsFilterPipe {
    transform(postList, filterCurUserId) {
        if (!postList) {
            return [];
        }
        if (!filterCurUserId) {
            return postList;
        }
        return postList.filter(post => post.ApplicationUserId === filterCurUserId);
    }
};
MyUploadsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'myUploads'
    })
], MyUploadsFilterPipe);



/***/ }),

/***/ "./src/app/posts/post-create/create-post.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/create-post.component.ts ***!
  \************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let CreatePostComponent = class CreatePostComponent {
    constructor(postService, location, router) {
        this.postService = postService;
        this.location = location;
        this.router = router;
        this.fileToUpload = null;
        this.imageUrl = 'assets/default.png';
    }
    ngOnInit() {
        this.resetForm();
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
        // Show image preview
        const reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    resetForm(form) {
        if (form != null) {
            form.resetForm();
        }
        this.formData = {
            Id: null,
            Title: '',
            Description: '',
            PostedDateTime: null,
            Likes: [],
            DisLikes: [],
            Rating: 0,
            AuthorFullName: '',
            ApplicationUserId: '',
            ImagePath: 'assets/default.png',
            Image: null
        };
    }
    onSubmit(Title, Description, Image) {
        this.postService.addPost(Title.value, Description.value, this.fileToUpload).subscribe(data => {
            console.log('done');
            this.imageUrl = '';
            this.resetForm();
            this.filter = 'default';
            this.router.navigate(['posts/list/', this.filter]);
        });
    }
    onBack() {
        this.location.back();
    }
};
CreatePostComponent.ctorParameters = () => [
    { type: src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreatePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-create-post',
        template: __webpack_require__(/*! raw-loader!./create-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/create-post.component.html")
    })
], CreatePostComponent);



/***/ }),

/***/ "./src/app/posts/post-detail/post-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-detail/post-detail.component.ts ***!
  \************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let PostDetailComponent = class PostDetailComponent {
    constructor(actrouter, toastr, postService, location, router) {
        this.actrouter = actrouter;
        this.toastr = toastr;
        this.postService = postService;
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
        this.actrouter.paramMap.subscribe(params => {
            console.log(params.get('Id'));
            this.postService.getPostById(+params.get('Id')).subscribe(c => {
                console.log(c);
                this.post = c;
            });
        });
    }
    onBack() {
        this.location.back();
    }
    onEdit(Id) {
        this.router.navigate(['posts/edit/', Id]);
    }
    onDelete(Id) {
        if (confirm('Are you sure to delete this record ?') === true) {
            this.postService.deletePost(Id)
                .subscribe(x => {
                this.filter = 'default';
                this.router.navigate(['posts/list/', this.filter]);
                this.toastr.warning('Deleted Successfully', 'Post Info');
            });
        }
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail',
        template: __webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-detail/post-detail.component.html")
    })
], PostDetailComponent);



/***/ }),

/***/ "./src/app/posts/post-edit/post-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-edit/post-edit.component.ts ***!
  \********************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PostEditComponent = class PostEditComponent {
    constructor(actrouter, postService, router) {
        this.actrouter = actrouter;
        this.postService = postService;
        this.router = router;
        this.fileToUpload = null;
    }
    ngOnInit() {
        this.actrouter.paramMap.subscribe(params => {
            console.log(params.get('Id'));
            this.postService.getPostById(+params.get('Id')).subscribe(c => {
                console.log(c);
                this.post = c;
            });
        });
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
        // Show image preview
        const reader = new FileReader();
        reader.onload = (event) => {
            this.post.ImagePath = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    onSubmit(Id, Title, Description) {
        this.postService.updatePost(Id.value, Title.value, Description.value, this.fileToUpload).subscribe(data => {
            this.filter = 'default';
            this.router.navigate(['posts/list/', this.filter]);
        });
    }
};
PostEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-post-edit',
        template: __webpack_require__(/*! raw-loader!./post-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-edit/post-edit.component.html")
    })
], PostEditComponent);



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let PostListComponent = class PostListComponent {
    constructor(authGuard, userService, postService, router, currentUserService, actrouter, toastr) {
        this.authGuard = authGuard;
        this.userService = userService;
        this.postService = postService;
        this.router = router;
        this.currentUserService = currentUserService;
        this.actrouter = actrouter;
        this.toastr = toastr;
        this.p = 1;
    }
    ngOnInit() {
        this.isActivated = this.authGuard.canActivate(null, null);
        this.likedPostId = null;
        this.token = sessionStorage.getItem('token');
        this.disLikedPostId = null;
        this.curUserId = this.currentUserService.getCurrentUserId(this.token);
        this.actrouter.paramMap.subscribe(params => {
            switch (params.get('filter')) {
                case 'myUploads':
                    this.lwfilter = null;
                    this.mostrtd = 0;
                    this.filterCurUserId = this.currentUserService.getCurrentUserId(this.token);
                    break;
                case 'topContrib':
                    this.lwfilter = null;
                    this.filterCurUserId = null;
                    break;
                case 'mostRated':
                    this.lwfilter = null;
                    this.filterCurUserId = null;
                    this.mostrtd = 1;
                    break;
                case 'lastWeek':
                    this.filterCurUserId = null;
                    this.mostrtd = 0;
                    this.lwfilter = new Date();
                    this.lwfilter.setDate(this.lwfilter.getDate() - 7);
                    break;
                case 'default':
                    this.filterCurUserId = null;
                    this.curUserId = this.currentUserService.getCurrentUserId(this.token);
                    this.mostrtd = 0;
                    this.lwfilter = null;
                    this.postService.getPosts().subscribe(resultArray => {
                        console.log(resultArray);
                        return this.postList = resultArray;
                    }, error => console.log('Error :: ' + error));
            }
        });
        this.cpost = {
            Id: null,
            Title: '',
            Description: '',
            PostedDateTime: null,
            Rating: 0,
            Likes: [],
            DisLikes: [],
            AuthorFullName: '',
            ApplicationUserId: '',
            ImagePath: 'assets/default.jpg',
            Image: null
        };
    }
    postDetails(id) {
        this.router.navigate(['posts/detail/', id]);
    }
    like(post, postId, curUserId) {
        if (this.token !== null) {
            if (!this.isContain(post, curUserId)) {
                this.likedPostId = postId;
                this.postService.likePost(this.token, postId).subscribe(x => {
                    this.cpost = x;
                    this.curDisLikes = +this.cpost.DisLikes.length;
                    this.curLikes = +this.cpost.Likes.length;
                });
            }
            else {
                this.toastr.error('You can vote only one time.', 'Voting failed.');
            }
        }
        else {
            this.toastr.error('Only registered users can vote.', 'Voting failed.');
        }
    }
    disLike(post, postId, curUserId) {
        if (this.token !== null) {
            if (!this.isContain(post, curUserId)) {
                this.disLikedPostId = postId;
                this.postService.disLikePost(this.token, postId).subscribe(x => {
                    this.cpost = x;
                    this.curDisLikes = +this.cpost.DisLikes.length;
                    this.curLikes = +this.cpost.Likes.length;
                });
            }
            else {
                this.toastr.error('You can vote only one time.', 'Voting failed.');
            }
        }
        else {
            this.toastr.error('Only registered users can vote.', 'Voting failed.');
        }
    }
    getUserId() {
        this.currentUserService.getCurrentUserId(this.token);
    }
    isContain(post, curUserId) {
        return post.Likes.some(l => l.ApplicationUserId === curUserId);
    }
    getRating() {
        return this.curLikes - this.curDisLikes;
    }
};
PostListComponent.ctorParameters = () => [
    { type: src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        providers: [],
        selector: 'app-post-list',
        template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html")
    })
], PostListComponent);



/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/post.service */ "./src/app/shared/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PostsComponent = class PostsComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
    }
};
PostsComponent.ctorParameters = () => [
    { type: src_app_shared_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html")
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/shared/services/post.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/post.service.ts ***!
  \*************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/utils */ "./src/app/utils/utils.ts");







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
let PostService = class PostService {
    constructor(fb, http, currentUserService) {
        this.fb = fb;
        this.http = http;
        this.currentUserService = currentUserService;
        this.apiUrl = 'https://localhost:44327/api/Posts/';
    }
    handleError({ operation = 'operation', result } = {}) {
        return (error) => {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    getPosts() {
        return this.http.get(this.apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(list => console.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError({ operation: 'getPosts', result: [] })));
    }
    getPostById(id) {
        const url = `${this.apiUrl}${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched Post id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError({ operation: `getPostById id=${id}` })));
    }
    addPost(title, description, fileToUpload) {
        this.token = sessionStorage.getItem('token');
        const formData = new FormData();
        formData.append('Title', title);
        formData.append('Description', description);
        formData.append('File', fileToUpload);
        formData.append('ApplicationUserId', this.currentUserService.getCurrentUserId(this.token));
        formData.append('AuthorFullName', (this.currentUserService.getCurrentUserFName() + ' '
            + this.currentUserService.getCurrentUserLName()));
        return this.http.post(this.apiUrl, formData);
    }
    updatePost(id, title, description, fileToUpload) {
        const formData = new FormData();
        formData.append('Title', title);
        formData.append('Description', description);
        if (fileToUpload != null) {
            formData.append('File', fileToUpload);
        }
        formData.append('Id', id);
        return this.http.put(this.apiUrl, formData);
    }
    deletePost(id) {
        const url = `${this.apiUrl}${id}`;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`deleted Post id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError({ operation: 'deletePost' })));
    }
    likePost(token, postId) {
        const url = `${this.apiUrl}Like/${token}/${postId}`;
        const result = this.http.post(url, httpOptions);
        return result;
    }
    disLikePost(token, postId) {
        const url = `${this.apiUrl}DisLike/${token}/${postId}`;
        const result = this.http.post(url, httpOptions);
        return result;
    }
    checkForLike(userId, postId) {
        const url = `${this.apiUrl}CheckForLike/${userId}/${postId}`;
        const result = this.http.post(url, httpOptions);
        return result;
    }
    checkForDisLike(userId, postId) {
        const url = `${this.apiUrl}CheckForDisLike/${userId}/${postId}`;
        const result = this.http.post(url, httpOptions);
        return result;
    }
};
PostService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let UserService = class UserService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.BaseURI = 'https://localhost:44327/api/';
        this.formModel = this.fb.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, { validator: this.comparePasswords })
        });
        this.loginFormModel = this.fb.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    comparePasswords(fb) {
        const confirmPswrdCtrl = fb.get('ConfirmPassword');
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value !== confirmPswrdCtrl.value) {
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPswrdCtrl.setErrors(null);
            }
        }
    }
    register(formModel) {
        const body = {
            Email: formModel.value.Email,
            FirstName: formModel.value.FirstName,
            LastName: formModel.value.LastName,
            Phone: formModel.value.Phone,
            Password: formModel.value.Passwords.Password
        };
        return this.http.post(this.BaseURI + 'applicationUsers/Register', body);
    }
    login(email, password) {
        const formData = new FormData();
        formData.append('Email', email);
        formData.append('Password', password);
        return this.http.post(this.BaseURI + 'applicationUsers/Login', formData);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/users/user-delete/user-delete.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/user-delete/user-delete.component.ts ***!
  \************************************************************/
/*! exports provided: UserDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteComponent", function() { return UserDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserDeleteComponent = class UserDeleteComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-delete',
        template: __webpack_require__(/*! raw-loader!./user-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-delete/user-delete.component.html")
    })
], UserDeleteComponent);



/***/ }),

/***/ "./src/app/users/user-detail/user-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/user-detail/user-detail.component.ts ***!
  \************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserDetailComponent = class UserDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-detail',
        template: __webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-detail/user-detail.component.html")
    })
], UserDetailComponent);



/***/ }),

/***/ "./src/app/users/user-login/user-login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/user-login/user-login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");






let UserLoginComponent = class UserLoginComponent {
    constructor(route, userService, router, toastr, root) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.root = root;
        this.loginFormModel = {
            Email: '',
            Password: ''
        };
    }
    ngOnInit() {
    }
    onSubmit(Email, Password) {
        this.userService.login(Email.value, Password.value).subscribe((res) => {
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('curUserFName', res.userFName);
            sessionStorage.setItem('curUserLName', res.userLName);
            this.root.ngOnInit();
            location.reload();
        }, err => {
            if (err.status === 400) {
                this.toastr.error('Incorrect email or password.', 'Authentication failed.');
            }
            else {
                console.log(err);
            }
        });
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
];
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        providers: [src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        selector: 'app-user-login',
        template: __webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-login/user-login.component.html")
    })
], UserLoginComponent);



/***/ }),

/***/ "./src/app/users/user-registration/user-registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/users/user-registration/user-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user-login/user-login.component */ "./src/app/users/user-login/user-login.component.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let UserRegistrationComponent = class UserRegistrationComponent {
    constructor(fb, login, userService, router, toastr) {
        this.fb = fb;
        this.login = login;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.user = {};
        this.formModel = this.fb.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
            FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            }, { validator: this.comparePasswords })
        });
    }
    comparePasswords(fb) {
        const confirmPswrdCtrl = fb.get('ConfirmPassword');
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value !== confirmPswrdCtrl.value) {
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPswrdCtrl.setErrors(null);
            }
        }
    }
    ngOnInit() {
        this.formModel.reset();
    }
    onSubmit() {
        this.userService.register(this.formModel).subscribe((res) => {
            if (res.Succeeded) {
                this.userService.login(this.formModel.value.Email, this.formModel.value.Passwords.Password).subscribe((log) => {
                    sessionStorage.setItem('token', log.token);
                    sessionStorage.setItem('curUserFName', log.userFName);
                    sessionStorage.setItem('curUserLName', log.userLName);
                    this.router.navigateByUrl('/root').then(c => location.reload()).then(r => this.toastr.success('New user created!', 'Registration successful.'));
                });
                this.formModel.reset();
            }
            else {
                res.Errors.forEach(element => {
                    switch (element.Code) {
                        case 'DuplicateUserName':
                            this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, err => {
            console.log(err);
        });
    }
};
UserRegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_1__["UserLoginComponent"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        providers: [_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_1__["UserLoginComponent"]],
        selector: 'app-user-registration',
        template: __webpack_require__(/*! raw-loader!./user-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-registration/user-registration.component.html")
    })
], UserRegistrationComponent);



/***/ }),

/***/ "./src/app/users/users-list/users-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsersListComponent = class UsersListComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: __webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users-list/users-list.component.html")
    })
], UsersListComponent);



/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let UsersComponent = class UsersComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
};
UsersComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html")
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



let CurrentUserService = class CurrentUserService {
    getCurrentUserId(token) {
        if (token !== null) {
            this.decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
            const userId = this.decoded.UserID;
            return userId;
        }
        return null;
    }
    getCurrentUserFName() {
        if (sessionStorage.getItem('token') != null) {
            return this.user = sessionStorage.getItem('curUserFName');
        }
    }
    getCurrentUserLName() {
        if (sessionStorage.getItem('token') != null) {
            return this.user = sessionStorage.getItem('curUserLName');
        }
    }
};
CurrentUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CurrentUserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\nikita-kildibekov-internship\PhotoManager_Ver0.1\WebAPI\Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map