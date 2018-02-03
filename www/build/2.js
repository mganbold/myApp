webpackJsonp([2],{

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email-validator.js.map

/***/ }),

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_services_store_services__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(_formBuilder, _storeServices, _auth, _navCtrl, _alertCtrl) {
        this._formBuilder = _formBuilder;
        this._storeServices = _storeServices;
        this._auth = _auth;
        this._navCtrl = _navCtrl;
        this._alertCtrl = _alertCtrl;
        this._resetPasswordForm = _formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email_validator__["a" /* EmailValidator */].isValid])],
        });
    }
    ResetPasswordPage.prototype._resetPassword = function () {
        if (this._resetPasswordForm.invalid) {
            var alert_1 = this._alertCtrl.create({
                message: "Please enter a valid email address.",
                buttons: ["Ok"]
            });
            alert_1.present();
        }
        else {
            this._storeServices.resetPassword(this._resetPasswordForm.value.email);
            this._navCtrl.pop();
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-reset-password",template:/*ion-inline-start:"/Users/Mandah/Documents/Github/myApp/src/pages/reset-password/reset-password.html"*/'<ion-header no-border>\n  <ion-navbar class="ion-navbar" color="light" [hideBackButton]="true">\n    <ion-buttons left>\n      <button ion-button navPop color="primary" icon-only>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col class="password-header">\n      <h1>Forgot your password?</h1>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class="form-offset">\n      <div class="content-text"> Enter your email address below to request a reset password link.</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <form [formGroup]="_resetPasswordForm" (submit)="_resetPassword()" novalidate>\n        <ion-row>\n          <ion-col>\n            <ion-item (keyup.enter)="_resetPassword()" class="email-input">\n              <ion-input\n                #email formControlName="email"\n                type="email"\n                placeholder="Your email address"\n                [class.invalid]="!_resetPasswordForm.controls[\'email\'].valid && (_resetPasswordForm.controls[\'email\'].touched || _resetPasswordForm.submitted)"\n              >\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      <ion-footer>\n        <button full ion-button full type="submit" class="submit-button">\n          Submit\n        </button>\n      </ion-footer>\n    </form>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mandah/Documents/Github/myApp/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__store_services_store_services__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(1401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]),
            ],
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());

//# sourceMappingURL=reset-password.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map