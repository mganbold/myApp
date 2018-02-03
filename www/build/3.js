webpackJsonp([3],{

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

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email_validator__ = __webpack_require__(1395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_services__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(_storeServices, _auth, navCtrl, _alertCtrl, _formBuilder, _storage, _splashScreen, _keyboard, _menuCtrl) {
        this._storeServices = _storeServices;
        this._auth = _auth;
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this._formBuilder = _formBuilder;
        this._storage = _storage;
        this._splashScreen = _splashScreen;
        this._keyboard = _keyboard;
        this._menuCtrl = _menuCtrl;
        this._user = {
            email: null,
            password: null,
            uid: null
        };
        this._isNewUser = false;
        this._loginForm = _formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email_validator__["a" /* EmailValidator */].isValid])],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this._loginReturningUser();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this._menuCtrl.swipeEnable(false);
    };
    LoginPage.prototype._loginReturningUser = function () {
        var _this = this;
        this._storage.get("userInfo")
            .then(function (userInfo) {
            if (!userInfo || !userInfo.providerId) {
                throw new Error("User is not available in local storage.");
            }
            return _this._auth.loginUserFromStorage(userInfo);
        })
            .then(function (userData) {
            if (!userData || !userData.email || !userData.uid) {
                throw new Error("userData is not valid.");
            }
            var user = _this._createUser(userData);
            _this.navCtrl.push("HomePage");
            // Update the store with current user.
            _this._storeServices.addUser(user);
            _this._splashScreen.hide();
        })
            .catch(function (error) {
            console.log(error);
            _this._splashScreen.hide();
        });
    };
    LoginPage.prototype._onLoginOptionClick = function () {
        this._isNewUser = false;
    };
    LoginPage.prototype._onSignUpOptionClick = function () {
        this._isNewUser = true;
    };
    LoginPage.prototype._onLoginClick = function (user) {
        var _this = this;
        user.email = this._loginForm.value.email.toLowerCase().trim();
        user.password = this._loginForm.value.password;
        if (this._loginForm.dirty) {
            this._loginForm.controls["email"].markAsTouched();
            this._loginForm.controls["password"].markAsTouched();
            if (!this._loginForm.valid) {
                this._showError();
                return;
            }
            if (this._isNewUser) {
                this.navCtrl.push("SignUpPage");
                return;
            }
            this._auth.loginWithEmail(user)
                .then(function (userData) {
                var user = _this._createUser(userData);
                _this._loginForm.reset();
                _this._loginForm.controls["email"].clearValidators();
                _this._loginForm.controls["password"].clearValidators();
                _this._storeServices.addUser(user);
                _this.navCtrl.push("HomePage");
            });
        }
    };
    LoginPage.prototype._onFacebookClick = function () {
        var _this = this;
        this._auth.loginWithFacebook()
            .then(function (userData) {
            var user = _this._createUser(userData);
            _this._storeServices.addUser(user);
            _this.navCtrl.push("HomePage");
        })
            .catch(function (error) {
            console.log("Facebook login failed: ", error);
        });
    };
    LoginPage.prototype._onGoogleClick = function () {
        var _this = this;
        this._auth.loginWithGoogle()
            .then(function (userData) {
            var user = _this._createUser(userData);
            _this._storeServices.addUser(user);
            _this.navCtrl.push("HomePage");
        })
            .catch(function (error) {
            console.log("Google login failed:", error);
        });
    };
    LoginPage.prototype._onResetPasswordClick = function () {
        this.navCtrl.push("ResetPasswordPage");
    };
    LoginPage.prototype._createUser = function (user) {
        return {
            email: user.email,
            uid: user.uid,
            password: null,
            orgPath: null
        };
    };
    LoginPage.prototype._showError = function () {
        var message;
        var buttons;
        if (!this._loginForm.controls["email"].valid && !this._loginForm.controls["password"].valid) {
            message = "Please enter a valid email address.\n\n        Password must be at least 6 characters.";
            buttons = [{ text: "Try again", role: "cancel" }];
        }
        else if (!this._loginForm.controls["email"].valid) {
            message = "Please enter a valid email address.";
            buttons = [{ text: "Try again", role: "cancel" }];
        }
        else if (!this._loginForm.controls["password"].valid) {
            message = "Password must be at least 6 characters.";
            buttons = [{ text: "Try again", role: "cancel" }];
        }
        this._alertCtrl.create({
            title: "Error",
            message: message,
            buttons: buttons
        })
            .present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/Mandah/Documents/Github/myApp/src/pages/login/login.html"*/'<ion-content class="login-page">\n  <ion-grid>\n    <ion-row>\n      <ion-col class="logo-container">\n        <img class="login-img" src="assets/whiteLogo.png">\n        <div class="app-title">\n          <span class="vu-white-text">vu</span><span class="vu-blue-text">tiliti</span>\n          <span class="app-name-spark">spark</span>\n          <div class="app-tagline">information to spark change</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n     <ion-col class="login-options">\n       <div\n         class="selected-option"\n         [class.deselected-option]="this._isNewUser"\n         (tap)="_onLoginOptionClick()"\n       >\n         Login\n       </div>\n       <div\n         class="selected-option signup-text"\n         [class.deselected-option]="!this._isNewUser"\n         (tap)="_onSignUpOptionClick()"\n       >\n         Sign Up\n       </div>\n     </ion-col>\n    </ion-row>\n    <form (submit)="_onLoginClick(_user)" [formGroup]="_loginForm">\n      <ion-row>\n        <ion-col class="no-padding">\n          <ion-item>\n            <ion-label>\n              <ion-icon class="login-input-icon" name="mail"></ion-icon>\n            </ion-label>\n            <ion-input\n              type="email"\n              #email\n              formControlName="email"\n              placeholder="Email address"\n              [class.invalid]="!_loginForm.controls.email.valid && (_loginForm.controls.email.touched || _loginForm.submitted)"\n            >\n            </ion-input>\n          </ion-item>\n          <ion-item (keyup.enter)="_onLoginClick(_user)">\n            <ion-label>\n              <ion-icon class="login-input-icon" name="lock"></ion-icon>\n            </ion-label>\n            <ion-input\n              type="password"\n              #password\n              formControlName="password"\n              placeholder="Password"\n              [class.invalid]="!_loginForm.controls.password.valid && (_loginForm.controls.password.touched || _loginForm.submitted)"\n            >\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="no-padding">\n          <button\n            ion-button\n            outline\n            block color="primary"\n            type="submit"\n          >\n            {{ !this._isNewUser ? "Login" : "Register" }}\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row class="or-with">\n      <ion-col><div class="line"></div></ion-col>\n      <ion-col class="or-text"> or </ion-col>\n      <ion-col><div class="line"></div></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  class="bottom-row">\n        <button class="social-login" ion-button outline color="light" (tap)="_onFacebookClick()">\n          <img class="icon-image" src="assets/facebook.svg">\n        </button>\n        <button class="social-login" ion-button outline color="light" (tap)="_onGoogleClick()">\n          <img class="icon-image" src="assets/googleplus.svg">\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="terms">\n        By logging in you agree to the <a href="https://www.vutiliti.com/tos.html">Terms of Use</a>\n      </ion-col>\n    </ion-row>\n    <button class="forgot-pass-btn" ion-button full (click)="_onResetPasswordClick()">Reset Password</button>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Mandah/Documents/Github/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__store_services__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_7__providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=3.js.map