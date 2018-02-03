webpackJsonp([6],{

/***/ 1397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProviderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_services__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProviderPage = /** @class */ (function () {
    function EditProviderPage(_formBuilder, _storeServices, _navCtrl, _viewCtrl, navParams) {
        this._formBuilder = _formBuilder;
        this._storeServices = _storeServices;
        this._navCtrl = _navCtrl;
        this._viewCtrl = _viewCtrl;
        this.navParams = navParams;
        this._providerData = this.navParams.get("providerData").split("/");
        this._planName = this.navParams.get("plan");
        this._type = this._providerData[0];
        this._country = this._providerData[1];
        this._region = this._providerData[2];
        this._editProvider = _formBuilder.group({
            country: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            region: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            provider: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2)])],
            plan: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
        this._providerCountries$ = this._storeServices.selectProviderCountries();
        this._providerRegions$ = this._storeServices.selectProviderRegions();
        this._providerServiceProviders$ = this._storeServices.selectProviderServiceProviders();
        this._providerPlans$ = this._storeServices.selectProviderPlans();
        this._addMeterGuid$ = this._storeServices.selectAddMeterGuid();
    }
    EditProviderPage.prototype.ionViewDidLoad = function () {
        this._storeServices.getProviderCountries(this._type);
    };
    EditProviderPage.prototype._getRegions = function () {
        this._storeServices.getProviderRegions(this._type + "/" + this._editProvider.value["country"]);
    };
    EditProviderPage.prototype._getProviders = function () {
        this._storeServices.getProviderProviders(this._type + "/" + this._editProvider.value["country"] + "/" + this._editProvider.value["region"]);
    };
    EditProviderPage.prototype._getPlans = function () {
        this._storeServices.getProviderPlans(this._type + "/" + this._editProvider.value["country"] + "/" + this._editProvider.value["region"] + "/" + this._editProvider.value["provider"] + "/plans");
    };
    EditProviderPage.prototype._closeModal = function () {
        this._viewCtrl.dismiss({ type: this._type, provider: this._editProvider });
    };
    EditProviderPage.prototype._cancelModal = function () {
        this._viewCtrl.dismiss();
    };
    EditProviderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-edit-provider",template:/*ion-inline-start:"/Users/Mandah/Documents/Github/myApp/src/pages/edit-provider/edit-provider.html"*/'<ion-header>\n  <ion-navbar color="light" hideBackButton="true">\n    <ion-title class="setup-title">Provider Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form class="text-container" [formGroup]="_editProvider">\n      <h4>Update your provider information</h4>\n      <div *ngIf="_providerCountries$ | async as countries">\n        <ion-item>\n          <ion-label>Country</ion-label>\n          <ion-select formControlName="country" (ionChange)="_getRegions()">\n            <ion-option *ngFor="let country of countries" [value]="country">\n              {{country}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n      <div *ngIf="_providerRegions$ | async as regions">\n        <ion-item>\n          <ion-label>Region</ion-label>\n          <ion-select formControlName="region" (ionChange)="_getProviders()">\n            <ion-option *ngFor="let region of regions" [value]="region">{{region}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n      <div *ngIf="_providerServiceProviders$ | async as serviceProviders">\n        <ion-item>\n          <ion-label>Provider</ion-label>\n          <ion-select formControlName="provider" (ionChange)="_getPlans()">\n            <ion-option *ngFor="let provider of serviceProviders" [value]="provider">\n              {{ provider }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n      <div *ngIf="_providerPlans$ | async as plans">\n        <ion-item>\n          <ion-label>Plan</ion-label>\n          <ion-select formControlName="plan">\n            <ion-option *ngFor="let plan of plans" [value]="plan">\n              {{ plan }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    <section class="button-section">\n      <button class="form-nav-button-back" (tap)="_cancelModal()">Cancel</button>\n      <button\n        [disabled]="!this._editProvider.valid"\n        ion-button\n        type="submit"\n        class="form-nav-button"\n        color="primary"\n        (tap)="_closeModal()"\n      >\n        Update\n      </button>\n    </section>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/Mandah/Documents/Github/myApp/src/pages/edit-provider/edit-provider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__store_services__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditProviderPage);
    return EditProviderPage;
}());

//# sourceMappingURL=edit-provider.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProviderPageModule", function() { return EditProviderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_provider__ = __webpack_require__(1397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProviderPageModule = /** @class */ (function () {
    function EditProviderPageModule() {
    }
    EditProviderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_provider__["a" /* EditProviderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_provider__["a" /* EditProviderPage */]),
            ],
        })
    ], EditProviderPageModule);
    return EditProviderPageModule;
}());

//# sourceMappingURL=edit-provider.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map