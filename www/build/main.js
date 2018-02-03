webpackJsonp([7],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreServices = /** @class */ (function () {
    /**
     * Creates an instance of StoreServices.
     * @param {Store<AppState>} _store
     * @memberof StoreServices
     */
    function StoreServices(_store) {
        this._store = _store;
    }
    /**
     * Meter data is either loaded from cache or database.
     *
     * @param {string} uid
     * @memberof StoreServices
     */
    StoreServices.prototype.loadMeters = function (user) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_14" /* TriggerLoadMeters */](user));
    };
    StoreServices.prototype.updateMeterReads = function (meter, user) {
        // Update reads for given meter.
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_17" /* TriggerUpdateMeterReads */]({ meter: meter, user: user }));
    };
    StoreServices.prototype.updateMeterSettings = function (meter, user) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_18" /* TriggerUpdateMeterSettings */]({ meter: meter, user: user }));
    };
    StoreServices.prototype.selectMeterLoading = function () {
        return this._store.select(function (state) { return state.meters.loading; });
    };
    StoreServices.prototype.addMeter = function (meter, user) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_7" /* TriggerAddMeter */]({ meter: meter, user: user }));
    };
    StoreServices.prototype.removeMeter = function (meter, user) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_16" /* TriggerRemoveMeter */]({ meter: meter, user: user }));
    };
    StoreServices.prototype.selectMeters = function () {
        return this._store.select(function (state) { return state.meters.data; });
    };
    StoreServices.prototype.selectUser = function () {
        return this._store.select(function (state) { return state.user; });
    };
    StoreServices.prototype.addUser = function (user) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["o" /* AddUser */](user));
    };
    StoreServices.prototype.logOutUser = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_15" /* TriggerPrepForLogout */]());
    };
    StoreServices.prototype.updateUser = function (user) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_31" /* UpdateUser */](user));
    };
    StoreServices.prototype.updateAllMetersReads = function (meters$, user) {
        var _this = this;
        meters$.take(1).subscribe(function (meters) {
            // Set loading to true in the store.
            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_17" /* TriggerUpdateMeterReads */](null));
            // Update reads for every meter.
            _this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["D" /* LoadReadsByMeters */]({ meters: meters, user: user }));
        });
    };
    StoreServices.prototype.updateLoaderWhenReadsDone = function (refresher) {
        this.selectMeterLoading().take(2).subscribe(function (loading) {
            if (!loading) {
                refresher.complete();
            }
        });
    };
    StoreServices.prototype.addReads = function (reads) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["n" /* AddReads */](reads));
    };
    StoreServices.prototype.loadReadsByDateRange = function (meter, dateRange) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["P" /* ResetReadsTimeout */]({ guid: meter._guid, dateRange: dateRange }));
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["F" /* LoadingReads */]());
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["C" /* LoadReadsByDateRange */]({ meter: meter, dateRange: dateRange }));
    };
    StoreServices.prototype.selectReadsLoading = function () {
        return this._store.select(function (state) { return state.reads.loading; });
    };
    StoreServices.prototype.selectReadsData = function () {
        return this._store.select(function (state) { return state.reads.data; });
    };
    StoreServices.prototype.getProviders = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_8" /* TriggerAddProviders */]());
    };
    StoreServices.prototype.selectProviderTypes = function () {
        return this._store.select(function (state) { return state.providers.providerTypes; });
    };
    StoreServices.prototype.selectProviderCountries = function () {
        return this._store.select(function (state) { return state.providers.provider.countries; });
    };
    StoreServices.prototype.selectProviderRegions = function () {
        return this._store.select(function (state) { return state.providers.provider.regions; });
    };
    StoreServices.prototype.selectProviderServiceProviders = function () {
        return this._store.select(function (state) { return state.providers.provider.serviceProviders; });
    };
    StoreServices.prototype.selectProviderPlans = function () {
        return this._store.select(function (state) { return state.providers.provider.plans; });
    };
    StoreServices.prototype.selectAddMeterGuid = function () {
        return this._store.select(function (state) { return state.providers.provider.guid; });
    };
    StoreServices.prototype.getProviderCountries = function (utilityType) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_10" /* TriggerGetProviderCountries */](utilityType));
    };
    StoreServices.prototype.getProviderRegions = function (path) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_12" /* TriggerGetProviderRegions */](path));
    };
    StoreServices.prototype.getProviderProviders = function (path) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_13" /* TriggerGetProviders */](path));
    };
    StoreServices.prototype.getProviderPlans = function (path) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_11" /* TriggerGetProviderPlans */](path));
    };
    StoreServices.prototype.resetProviders = function () {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["O" /* ResetProviders */]());
    };
    StoreServices.prototype.validateMeter = function (meterNumber) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_19" /* TriggerValidateMeter */](meterNumber));
    };
    StoreServices.prototype.loadNeighborhoodReads = function (meter, dateRange) {
        var guid = meter._guid;
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["M" /* ResetComparisonTimeout */]({ guid: guid, dateRange: dateRange }));
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["E" /* LoadingComparisonReads */]());
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["_9" /* TriggerComparisonReads */]({ meter: meter, dateRange: dateRange }));
    };
    StoreServices.prototype.selectComparisonReads = function () {
        return this._store.select(function (state) { return state.comparison.data; });
    };
    StoreServices.prototype.selectComparisonGroup = function () {
        return this._store.select(function (state) { return state.comparison.neighborhoodGroup; });
    };
    StoreServices.prototype.selectComparisonLoading = function () {
        return this._store.select(function (state) { return state.comparison.loading; });
    };
    StoreServices.prototype.sideMenuOpen = function () {
        return this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["T" /* SideMenuOpen */]());
    };
    StoreServices.prototype.sideMenuClose = function () {
        return this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["S" /* SideMenuClose */]());
    };
    StoreServices.prototype.selectSideMenuStatus = function () {
        return this._store.select(function (state) { return state.uiControls.sideMenuOpen; });
    };
    StoreServices.prototype.resetPassword = function (emailAdd) {
        this._store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions__["N" /* ResetPassword */](emailAdd));
    };
    StoreServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], StoreServices);
    return StoreServices;
}());

//# sourceMappingURL=store-services.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthProvider = /** @class */ (function () {
    function AuthProvider(_af, _facebook, _googleplus, _alertCtrl, _storage) {
        this._af = _af;
        this._facebook = _facebook;
        this._googleplus = _googleplus;
        this._alertCtrl = _alertCtrl;
        this._storage = _storage;
    }
    AuthProvider.prototype.loginWithEmail = function (user) {
        var credential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.EmailAuthProvider.credential(user.email, user.password);
        return this._signInWithCredential(credential);
    };
    AuthProvider.prototype.registerUser = function (user) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this._af.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (authData) {
                observer.next(authData);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.loginWithGoogle = function () {
        var _this = this;
        return this._googleplus.login({
            "webClientId": __WEBPACK_IMPORTED_MODULE_3__configs__["g" /* googleConfig */].webClientId,
            "offline": true
        })
            .then(function (response) {
            var googleCredential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider.credential(response.idToken);
            return _this._signInWithCredential(googleCredential);
        });
    };
    AuthProvider.prototype._googleSilentLogin = function () {
        return this._googleplus.trySilentLogin({
            "webClientId": __WEBPACK_IMPORTED_MODULE_3__configs__["g" /* googleConfig */].webClientId,
            "offline": true
        }).then(function (response) {
            return __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider.credential(response.idToken);
        });
    };
    AuthProvider.prototype.loginWithFacebook = function () {
        var _this = this;
        return this._facebook.login(["email"])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
            return _this._signInWithCredential(facebookCredential);
        })
            .catch(function (error) {
            throw new Error(error);
        });
    };
    AuthProvider.prototype._getFacebookToken = function (credential) {
        return this._facebook.login(["email"]).then(function (response) {
            return __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        });
    };
    AuthProvider.prototype._signInWithCredential = function (credential) {
        var _this = this;
        this._storage.set("userInfo", credential);
        return this._af.auth.signInWithCredential(credential).then(function (response) { return response; })
            .catch(function (error) {
            _this._displayAndHandleErrors(error);
            return new Error(error);
        });
    };
    AuthProvider.prototype.resetPassword = function (emailAddr) {
        var _this = this;
        return this._af.auth.sendPasswordResetEmail(emailAddr).then(function () {
            var alert = _this._alertCtrl.create({
                message: "Please check your email for a password reset link.",
                buttons: [
                    {
                        text: "Ok",
                        role: "cancel",
                        handler: function () {
                        }
                    }
                ]
            });
            alert.present();
        })
            .catch(function (error) {
            _this._displayAndHandleErrors(error);
            return new Error(error);
        });
    };
    AuthProvider.prototype.getTokenId = function () {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            return __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.getIdToken().then(function (token) {
                observer.next(token);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.loginUserFromStorage = function (userInfo) {
        var _this = this;
        return this._getUserCredentials(userInfo)
            .then(function (credential) {
            _this._storage.set("userInfo", credential);
            return _this._af.auth.signInWithCredential(credential);
        })
            .catch(function (error) {
            // bubble up this error, so we can catch in the consumer.
            throw new Error(error);
        });
    };
    AuthProvider.prototype._getUserCredentials = function (userInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!userInfo || !userInfo.providerId) {
                reject("userInfo is not available.");
            }
            switch (userInfo.providerId) {
                case "google.com":
                    _this._googleSilentLogin().then(function (credential) {
                        resolve(credential);
                    });
                    break;
                case "facebook.com":
                    _this._getFacebookToken(userInfo).then(function (credential) {
                        resolve(credential);
                    });
                    break;
                case "password":
                    var credential = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.EmailAuthProvider.credential(userInfo.a, userInfo.f);
                    resolve(credential);
                    break;
                default:
                    reject("login type mismatch!");
            }
        });
    };
    AuthProvider.prototype._displayAndHandleErrors = function (error) {
        var _this = this;
        var title;
        var message;
        var buttons;
        switch (error.code) {
            case "auth/user-not-found":
                title = "Could Not Complete Login";
                message = "Unfortunately, we could not find your account. Please double check your password or create an account.";
                buttons = [
                    { text: "Try Again", role: "cancel" },
                    { text: "Sign Up", handler: function () {
                            // TODO: _UserSignUp() user goes here
                        } }
                ];
                break;
            case "social-login-not-found":
                title = "Could Not Complete Login";
                message = "Unfortunately, we could not find your account. If you feel this is an error, try using a different social provider. Otherwise, create an account.";
                buttons = [
                    {
                        text: "Cancel", role: "cancel", handler: function () {
                            _this.logOutUser();
                        }
                    },
                    {
                        text: "Sign Up", role: "cancel", handler: function () { return null; }
                    }
                ];
                break;
            case "auth/wrong-password":
                title = "The password is invalid. Please try again";
                message = error.message;
                buttons = ["Ok"];
                break;
            case "auth/email-already-in-use":
                title = "Could Not Complete Sign Up";
                message = error.message;
                buttons = ["Ok"];
                break;
            case "auth/account-exists-with-different-credential":
                title = "Try a Different Social Provider";
                message = error.message;
                buttons = ["Ok"];
                break;
            case "auth/internal-error" || "auth/invalid-credential":
                title = "Your login session has expired. Please login again.";
                message = error.message;
                buttons = ["Ok"];
                break;
            default:
                title = "Something Went Wrong";
                message = "Could not complete login at this time. Please try again";
                buttons = ["Ok"];
        }
        this._alertCtrl.create({
            title: title,
            message: message,
            buttons: buttons
        })
            .present();
    };
    AuthProvider.prototype.logOutUser = function () {
        var _this = this;
        this._storage.remove("userInfo");
        this._af.auth.signOut().then(function () {
            // clears ALL storage. WARNING: HOT!
            _this._storage.clear();
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__environment__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-meter/add-meter.module": [
		913,
		1
	],
	"../pages/edit-provider/edit-provider.module": [
		914,
		6
	],
	"../pages/home/home.module": [
		915,
		0
	],
	"../pages/login/login.module": [
		916,
		3
	],
	"../pages/profile/profile.module": [
		917,
		5
	],
	"../pages/reset-password/reset-password.module": [
		918,
		2
	],
	"../pages/sign-up/sign-up.module": [
		919,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);


var ChartHelper = /** @class */ (function () {
    function ChartHelper() {
    }
    ChartHelper.getDeltas = function (data) {
        var chartData = [];
        for (var i = data.length - 1; i >= 0; i--) {
            if (i - 1 >= 0) {
                var diff = data[i].total - data[i - 1].total;
                chartData.push({
                    date: new Date(parseInt(data[i].date.toString())),
                    line1: diff
                });
            }
        }
        return chartData;
    };
    /**
     * Removes values that are significantly larger than most values.
     * @param data
     */
    ChartHelper.normalizeData = function (data) {
        var tolerance = .5;
        var allValues = data.map(function (d) { return d.line1; });
        var maxValue = Math.max.apply(0, allValues);
        var largeValues = allValues.filter(function (val) { return val <= maxValue && val >= maxValue * tolerance; });
        // Check if abnormal values are less than 10% of all values.
        if (largeValues.length < allValues.length * .1) {
            // Remove abnormally large values.
            return data.filter(function (s) { return largeValues.indexOf(s.line1) === -1; });
        }
        return data;
    };
    /**
     * Puts values into date buckets determined by time span.
     * @param dateRange
     * @param data
     */
    ChartHelper.groupDeltasByTimeSpan = function (dateRange, data) {
        var endDate = dateRange.endDate, timeSpan = dateRange.timeSpan;
        var startDate = dateRange.startDate;
        var dataPoints = [];
        var emptyPoints = [];
        switch (timeSpan) {
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].MONTH:
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].WEEK:
                while (startDate < endDate && startDate <= new Date()) {
                    var startDay = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).startOf("day").toDate();
                    var endDay = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).endOf("day").toDate();
                    var dataPoint = this._getTotalsByDateRange(startDay, endDay, data);
                    // Check if data point is empty
                    if (dataPoint.line1 <= 0) {
                        // Tracks the index of empty days.
                        // So [5, 8, 9] => means values at index 5, 8, and 9 are zero.
                        emptyPoints.push(dataPoints.length);
                    }
                    dataPoints.push(dataPoint);
                    startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).add(1, "d").toDate();
                }
                // Iterate over array that tracked empty data points and fill in missing values.
                this._fillEmptyHoles(dataPoints, emptyPoints);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].DAY:
                while (startDate < endDate && startDate <= new Date()) {
                    var startHour = startDate;
                    var endHour = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).add(1, "h").toDate();
                    var dataPoint = this._getTotalsByDateRange(startHour, endHour, data);
                    if (dataPoint.line1 <= 0) {
                        emptyPoints.push(dataPoints.length);
                    }
                    dataPoints.push(dataPoint);
                    startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).add(1, "h").toDate();
                }
                this._fillEmptyHoles(dataPoints, emptyPoints);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].YEAR:
                while (startDate < endDate && startDate <= new Date()) {
                    var startMonth = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).startOf("month").toDate();
                    var endMonth = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).endOf("month").toDate();
                    var dataPoint = this._getTotalsByDateRange(startMonth, endMonth, data);
                    if (dataPoint.line1 <= 0) {
                        emptyPoints.push(dataPoints.length);
                    }
                    dataPoints.push(dataPoint);
                    startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).add(1, "M").toDate();
                }
                this._fillEmptyHoles(dataPoints, emptyPoints);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].HOUR:
                while (startDate < endDate && startDate <= new Date()) {
                    var startHour = startDate;
                    var endHour = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).add(15, "m").toDate();
                    var dataPoint = this._getTotalsByDateRange(startHour, endHour, data);
                    if (dataPoint.line1 <= 0) {
                        emptyPoints.push(dataPoints.length);
                    }
                    dataPoints.push(dataPoint);
                    startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).add(15, "m").toDate();
                }
                this._fillEmptyHoles(dataPoints, emptyPoints);
                break;
            default:
                break;
        }
        return dataPoints;
    };
    ChartHelper.getFormattedDateRange = function (dateRange) {
        var startDate = dateRange.startDate, endDate = dateRange.endDate, timeSpan = dateRange.timeSpan;
        switch (timeSpan) {
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].MONTH:
                return __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).format("MMM YYYY");
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].WEEK:
                return __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).format("MMM DD") + " - " + __WEBPACK_IMPORTED_MODULE_1_moment__(endDate).format("MMM DD YYYY");
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].DAY:
                return __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).format("MMM DD, YYYY");
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].HOUR:
                return __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).format("hh:mm a") + " - " + __WEBPACK_IMPORTED_MODULE_1_moment__(endDate).format("hh:mm a");
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].YEAR:
                return __WEBPACK_IMPORTED_MODULE_1_moment__(startDate).format("YYYY");
            default:
                return "";
        }
    };
    ChartHelper.getDefaultDateRange = function (timeSpan) {
        switch (timeSpan) {
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].MONTH:
                return {
                    startDate: __WEBPACK_IMPORTED_MODULE_1_moment__().startOf("month").toDate(),
                    endDate: __WEBPACK_IMPORTED_MODULE_1_moment__().endOf("month").toDate(),
                    dateFormat: "%e" // abbreviated weekday namespace-padded day of the month as a decimal number [ 1,31]
                };
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].DAY:
                return {
                    startDate: __WEBPACK_IMPORTED_MODULE_1_moment__().startOf("day").toDate(),
                    endDate: __WEBPACK_IMPORTED_MODULE_1_moment__().endOf("day").toDate(),
                    dateFormat: "%I%p" // hour (12-hour clock) as a decimal number [01,12] followed by either AM or PM
                };
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].WEEK:
                return {
                    startDate: __WEBPACK_IMPORTED_MODULE_1_moment__().startOf("week").toDate(),
                    endDate: __WEBPACK_IMPORTED_MODULE_1_moment__().endOf("week").toDate(),
                    dateFormat: "%a" // abbreviated weekday name
                };
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].HOUR:
                return {
                    startDate: __WEBPACK_IMPORTED_MODULE_1_moment__().startOf("hour").toDate(),
                    endDate: __WEBPACK_IMPORTED_MODULE_1_moment__().endOf("hour").toDate(),
                    dateFormat: "%M" // minute as a decimal number [00,59]
                };
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].YEAR:
                return {
                    startDate: __WEBPACK_IMPORTED_MODULE_1_moment__().startOf("year").toDate(),
                    endDate: __WEBPACK_IMPORTED_MODULE_1_moment__().endOf("year").toDate(),
                    dateFormat: "%b" // abbreviated month name
                };
            default:
                break;
        }
    };
    ChartHelper.getDateRange = function (direction, dateRange) {
        var startDate;
        var endDate;
        switch (dateRange.timeSpan) {
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].MONTH:
                startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.startDate).add(direction === "prev" ? -1 : 1, "M").startOf("month");
                endDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.endDate).add(direction === "prev" ? -1 : 1, "M").endOf("month");
                break;
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].DAY:
                startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.startDate).add(direction === "prev" ? -24 : 24, "h");
                endDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.endDate).add(direction === "prev" ? -24 : 24, "h");
                break;
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].WEEK:
                startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.startDate).add(direction === "prev" ? -7 : 7, "d");
                endDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.endDate).add(direction === "prev" ? -7 : 7, "d");
                break;
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].HOUR:
                startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.startDate).add(direction === "prev" ? -60 : 60, "m");
                endDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.endDate).add(direction === "prev" ? -60 : 60, "m");
                break;
            case __WEBPACK_IMPORTED_MODULE_0__configs__["k" /* timeSpanConfigs */].YEAR:
                startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.startDate).add(direction === "prev" ? -1 : 1, "y");
                endDate = __WEBPACK_IMPORTED_MODULE_1_moment__(dateRange.endDate).add(direction === "prev" ? -1 : 1, "y");
                break;
            default:
                break;
        }
        return {
            startDate: startDate.toDate(),
            endDate: endDate.toDate(),
            timeSpan: dateRange.timeSpan,
            dateFormat: dateRange.dateFormat
        };
    };
    ChartHelper._getTotalsByDateRange = function (startDate, endDate, data) {
        var points = data.filter(function (d) { return d.date >= startDate && d.date < endDate; });
        var total = points.reduce(function (a, b) {
            return a + b.line1;
        }, 0);
        return {
            date: startDate,
            line1: total
        };
    };
    /**
     * Fill in average value if value is missing at given indices.
     * @param data
     * @param indices
     */
    ChartHelper._fillEmptyHoles = function (data, indices) {
        // Iterate over every index of an empty data in the data array.
        indices.forEach(function (emptyIndex) {
            // Moves back to find the first non-zero value in data array.
            var backIndex = emptyIndex > 0 ? emptyIndex - 1 : 0;
            // Moves forward to find the first non-zero value in data array.
            var frwdIndex = emptyIndex < data.length - 1 ? emptyIndex + 1 : data.length - 1;
            // Non-zero value comes before the zero value at index emptyIndex.
            var prevVal = 0;
            // Non-zero value comes after the zero value at index emptyIndex.
            var nextVal = 0;
            // if zero value is at index 0 or 1
            if (backIndex === 0) {
                prevVal = data[0].line1 || 0;
            }
            // if zero value is at last index
            if (frwdIndex >= data.length) {
                nextVal = 0;
            }
            // Moves both forward and backward directions at the same time
            // until first non-zero values are found.
            while (backIndex > 0 || frwdIndex < data.length) {
                if (backIndex > 0) {
                    // First non-zero value is found before emptyIndex.
                    if (data[backIndex].line1 > 0) {
                        prevVal = data[backIndex].line1;
                        backIndex = 0;
                    }
                    else {
                        backIndex--;
                    }
                }
                if (frwdIndex < data.length) {
                    // First non-zero value is found after emptyIndex.
                    if (data[frwdIndex].line1 > 0) {
                        nextVal = data[frwdIndex].line1;
                        frwdIndex = data.length;
                    }
                    else {
                        frwdIndex++;
                    }
                }
            }
            // fill in averaged data points.
            if (prevVal && nextVal) {
                var avg = (prevVal + nextVal) / 2;
                // To differentiate missing values, adding the following decimal.
                data[emptyIndex].line1 = parseInt(avg.toString()) + 0.00099;
            }
            else if (prevVal && nextVal !== 0) {
                data[emptyIndex].line1 = prevVal;
            }
            else if (prevVal !== 0 && nextVal) {
                data[emptyIndex].line1 = nextVal;
            }
        });
    };
    return ChartHelper;
}());

//# sourceMappingURL=chart-helper.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_actions__ = __webpack_require__(526);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["f"]; });
/* unused harmony reexport TRIGGER_USER_CHECK */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["i"]; });
/* unused harmony reexport LogoutUser */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_0__user_actions__["g"]; });
/* unused harmony reexport TriggerUserCheck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meter_actions__ = __webpack_require__(527);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["z"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["w"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["x"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["y"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_1__meter_actions__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_actions__ = __webpack_require__(528);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["v"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_2__provider_actions__["q"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reads_actions__ = __webpack_require__(529);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_3__reads_actions__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comparison_actions__ = __webpack_require__(530);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["i"]; });
/* unused harmony reexport AddNeighborhoodGroup */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_4__comparison_actions__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_controls_actions__ = __webpack_require__(531);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_5__ui_controls_actions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_5__ui_controls_actions__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_5__ui_controls_actions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_5__ui_controls_actions__["b"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    cacheDuration: 1440,
    apiTimeout: 8000
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chartConfigs; });
var chartConfigs = [
    {
        name: "power",
        // background, foreground and inner arc colors respectively.
        arcChartColors: ["#ddd", "#EF8E0F", "#535969"],
        lineChartColors: ["#EF8E0F"],
        unit: "kWh",
        imgSrc: "./assets/imgs/icon_power.svg",
        imgColor: "#EF8E0F",
        textColor: "#EF8E0F"
    },
    {
        name: "gas",
        arcChartColors: ["#ddd", "#5555A9", "#535969"],
        lineChartColors: ["#5555A9"],
        unit: "DTH",
        imgSrc: "./assets/imgs/icon_gas.svg",
        imgColor: "#5555A9",
        textColor: "#5555A9"
    },
    {
        name: "water",
        arcChartColors: ["#ddd", "#2075CB", "#535969"],
        lineChartColors: ["#2075CB"],
        unit: "gal",
        imgSrc: "./assets/imgs/icon_water.svg",
        imgColor: "#2075CB",
        textColor: "#2075CB"
    },
    {
        name: "solar",
        arcChartColors: ["#ddd", "#57DD00", "#535969"],
        lineChartColors: ["#57DD00"],
        unit: "kWh",
        imgSrc: "./assets/imgs/icon_solar.svg",
        imgColor: "#57DD00",
        textColor: "#57DD00"
    }
];
//# sourceMappingURL=chart-configs.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(501);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__configs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_plus__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_reducers__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_effects__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_effects__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_services__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_menu_items_menu_items__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_23__components_menu_items_menu_items__["a" /* MenuItemsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            scrollAssist: false,
                            autoFocusAssist: false,
                            statusbarPadding: true
                        },
                        android: {
                            scrollAssist: false,
                            autoFocusAssist: false
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/add-meter/add-meter.module#AddMeterPageModule', name: 'AddMeterPage', segment: 'add-meter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-provider/edit-provider.module#EditProviderPageModule', name: 'EditProviderPage', segment: 'edit-provider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__store_reducers__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_16__store_reducers__["a" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25 //  Retains last 25 states
                }),
                __WEBPACK_IMPORTED_MODULE_17__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_19__store_effects__["b" /* MeterEffects */], __WEBPACK_IMPORTED_MODULE_19__store_effects__["a" /* ComparisonEffects */], __WEBPACK_IMPORTED_MODULE_19__store_effects__["d" /* ReadsEffects */], __WEBPACK_IMPORTED_MODULE_19__store_effects__["c" /* ProviderEffects */], __WEBPACK_IMPORTED_MODULE_19__store_effects__["e" /* UserEffects */]]),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__configs__["f" /* fireBaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_23__components_menu_items_menu_items__["a" /* MenuItemsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["b" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_20__store_services__["a" /* StoreServices */],
                __WEBPACK_IMPORTED_MODULE_21__helpers__["b" /* CostHelper */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TRIGGER_PREP_FOR_LOGOUT; });
/* unused harmony export TRIGGER_USER_CHECK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UpdateUser; });
/* unused harmony export TriggerUserCheck */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TriggerPrepForLogout; });
/* unused harmony export LogoutUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ResetPassword; });
var ADD_USER = "ADD USER";
var UPDATE_USER = "UPDATE USER";
var LOGOUT_USER = "LOGOUT USER";
var RESET_PASSWORD = "RESET PASSWORD";
var TRIGGER_PREP_FOR_LOGOUT = "TRIGGER PREP FOR LOGOUT";
var TRIGGER_USER_CHECK = "TRIGGER USER CHECK";
var AddUser = /** @class */ (function () {
    function AddUser(_payload) {
        this._payload = _payload;
        this.type = ADD_USER;
        this.payload = _payload;
    }
    return AddUser;
}());

var UpdateUser = /** @class */ (function () {
    function UpdateUser(_payload) {
        this._payload = _payload;
        this.type = UPDATE_USER;
        this.payload = _payload;
    }
    return UpdateUser;
}());

var TriggerUserCheck = /** @class */ (function () {
    function TriggerUserCheck(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_USER_CHECK;
        this.payload = _payload;
    }
    return TriggerUserCheck;
}());

var TriggerPrepForLogout = /** @class */ (function () {
    function TriggerPrepForLogout() {
        this.type = TRIGGER_PREP_FOR_LOGOUT;
    }
    return TriggerPrepForLogout;
}());

var LogoutUser = /** @class */ (function () {
    function LogoutUser() {
        this.type = LOGOUT_USER;
    }
    return LogoutUser;
}());

var ResetPassword = /** @class */ (function () {
    function ResetPassword(_payload) {
        this._payload = _payload;
        this.type = RESET_PASSWORD;
        this.payload = null;
        this.payload = _payload;
    }
    return ResetPassword;
}());

//# sourceMappingURL=user-actions.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TRIGGER_LOAD_METERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_METERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_METERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_METER_GUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return REMOVE_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UPDATE_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TRIGGER_ADD_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TRIGGER_REMOVE_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return TRIGGER_UPDATE_METER_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TRIGGER_UPDATE_METER_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TRIGGER_VALIDATE_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TriggerLoadMeters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LoadMeters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadMeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddMeters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddMeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RemoveMeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UpdateMeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddMeterGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TriggerAddMeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TriggerUpdateMeterReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return TriggerUpdateMeterSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TriggerRemoveMeter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return TriggerValidateMeter; });
var TRIGGER_LOAD_METERS = "[Meter] TRIGGER LOAD METERS";
var LOAD_METERS = "[Meter] LOAD METERS";
var LOAD_METER = "[Meter] LOAD METER";
var ADD_METERS = "[Meter] ADD_METERS";
var ADD_METER = "[Meter] ADD_METER";
var ADD_METER_GUID = "[Meter] ADD METER GUID";
var REMOVE_METER = "[Meter] REMOVE METER";
var UPDATE_METER = "[Meter] UPDATE METER";
var TRIGGER_ADD_METER = "[Meter] TRIGGER ADD METER";
var TRIGGER_REMOVE_METER = "[Meter] TRIGGER REMOVE METER";
var TRIGGER_UPDATE_METER_READS = "[Meter] TRIGGER UPDATE METER READS";
var TRIGGER_UPDATE_METER_SETTINGS = "[Meter] TRIGGER UPDATE METER SETTINGS";
var TRIGGER_VALIDATE_METER = "[Meter] TRIGGER VALIDATE METER";
var TriggerLoadMeters = /** @class */ (function () {
    function TriggerLoadMeters(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_LOAD_METERS;
        this.payload = _payload;
    }
    return TriggerLoadMeters;
}());

var LoadMeters = /** @class */ (function () {
    function LoadMeters(_payload) {
        this._payload = _payload;
        this.type = LOAD_METERS;
        this.payload = _payload;
    }
    return LoadMeters;
}());

var LoadMeter = /** @class */ (function () {
    function LoadMeter(_payload) {
        this._payload = _payload;
        this.type = LOAD_METER;
        this.payload = _payload;
    }
    return LoadMeter;
}());

var AddMeters = /** @class */ (function () {
    function AddMeters(_payload) {
        this._payload = _payload;
        this.type = ADD_METERS;
        this.payload = null;
        this.payload = _payload;
    }
    return AddMeters;
}());

var AddMeter = /** @class */ (function () {
    function AddMeter(_payload) {
        this._payload = _payload;
        this.type = ADD_METER;
        this.payload = null;
        this.payload = _payload;
    }
    return AddMeter;
}());

var RemoveMeter = /** @class */ (function () {
    function RemoveMeter(_payload) {
        this._payload = _payload;
        this.type = REMOVE_METER;
        this.payload = null;
        this.payload = _payload;
    }
    return RemoveMeter;
}());

var UpdateMeter = /** @class */ (function () {
    function UpdateMeter(_payload) {
        this._payload = _payload;
        this.type = UPDATE_METER;
        this.payload = null;
        this.payload = _payload;
    }
    return UpdateMeter;
}());

var AddMeterGuid = /** @class */ (function () {
    function AddMeterGuid(_payload) {
        this._payload = _payload;
        this.type = ADD_METER_GUID;
        this.payload = null;
        this.payload = _payload;
    }
    return AddMeterGuid;
}());

var TriggerAddMeter = /** @class */ (function () {
    function TriggerAddMeter(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_ADD_METER;
        this.payload = null;
        this.payload = _payload;
    }
    return TriggerAddMeter;
}());

var TriggerUpdateMeterReads = /** @class */ (function () {
    function TriggerUpdateMeterReads(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_UPDATE_METER_READS;
        this.payload = null;
        this.payload = _payload;
    }
    return TriggerUpdateMeterReads;
}());

var TriggerUpdateMeterSettings = /** @class */ (function () {
    function TriggerUpdateMeterSettings(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_UPDATE_METER_SETTINGS;
        this.payload = _payload;
    }
    return TriggerUpdateMeterSettings;
}());

var TriggerRemoveMeter = /** @class */ (function () {
    function TriggerRemoveMeter(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_REMOVE_METER;
        this.payload = _payload;
    }
    return TriggerRemoveMeter;
}());

var TriggerValidateMeter = /** @class */ (function () {
    function TriggerValidateMeter(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_VALIDATE_METER;
        this.payload = null;
        this.payload = _payload;
    }
    return TriggerValidateMeter;
}());

//# sourceMappingURL=meter-actions.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRIGGER_ADD_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TRIGGER_GET_PROVIDER_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TRIGGER_GET_PROVIDER_REGIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TRIGGER_GET_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TRIGGER_GET_PROVIDER_PLANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UPDATE_PROVIDER_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UPDATE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RESET_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UPDATE_PROVIDER_PLANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UPDATE_PROVIDER_REGIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TriggerAddProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TriggerGetProviderCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TriggerGetProviderRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TriggerGetProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TriggerGetProviderPlans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return UpdateProviderCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UpdateProviderRegions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return UpdateProviderPlans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UpdateProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResetProviders; });
var ADD_PROVIDERS = "ADD_PROVIDERS";
var TRIGGER_ADD_PROVIDERS = "TRIGGER ADD PROVIDERS";
var TRIGGER_GET_PROVIDER_COUNTRIES = "TRIGGER GET PROVIDER COUNTRIES";
var TRIGGER_GET_PROVIDER_REGIONS = "TRIGGER UPDATE PROVIDER REGIONS";
var TRIGGER_GET_PROVIDERS = "TRIGGER GET PROVIDERS";
var TRIGGER_GET_PROVIDER_PLANS = "TRIGGER GET PROVIDER PLANS";
var UPDATE_PROVIDER_COUNTRIES = "UPDATE PROVIDER COUNTRIES";
var UPDATE_PROVIDERS = "UPDATE PROVIDERS";
var RESET_PROVIDERS = "RESET PROVIDERS";
var UPDATE_PROVIDER_PLANS = "UPDATE PROVIDER PLANS";
var UPDATE_PROVIDER_REGIONS = "UPDATE PROVIDER REGIONS";
var TriggerAddProviders = /** @class */ (function () {
    function TriggerAddProviders() {
        this.type = TRIGGER_ADD_PROVIDERS;
        this.payload = null;
    }
    return TriggerAddProviders;
}());

var TriggerGetProviderCountries = /** @class */ (function () {
    function TriggerGetProviderCountries(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_GET_PROVIDER_COUNTRIES;
        this.payload = null;
        this.payload = _payload;
    }
    return TriggerGetProviderCountries;
}());

var TriggerGetProviderRegions = /** @class */ (function () {
    function TriggerGetProviderRegions(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_GET_PROVIDER_REGIONS;
        this.payload = null;
        this.payload = _payload;
    }
    return TriggerGetProviderRegions;
}());

var TriggerGetProviders = /** @class */ (function () {
    function TriggerGetProviders(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_GET_PROVIDERS;
        this.payload = null;
        this.payload = _payload;
    }
    return TriggerGetProviders;
}());

var TriggerGetProviderPlans = /** @class */ (function () {
    function TriggerGetProviderPlans(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_GET_PROVIDER_PLANS;
        this.payload = null;
        this.payload = _payload;
    }
    return TriggerGetProviderPlans;
}());

var UpdateProviderCountries = /** @class */ (function () {
    function UpdateProviderCountries(_payload) {
        this._payload = _payload;
        this.type = UPDATE_PROVIDER_COUNTRIES;
        this.payload = [];
        this.payload = _payload;
    }
    return UpdateProviderCountries;
}());

var UpdateProviderRegions = /** @class */ (function () {
    function UpdateProviderRegions(_payload) {
        this._payload = _payload;
        this.type = UPDATE_PROVIDER_REGIONS;
        this.payload = [];
        this.payload = _payload;
    }
    return UpdateProviderRegions;
}());

var AddProviders = /** @class */ (function () {
    function AddProviders(_payload) {
        this._payload = _payload;
        this.type = ADD_PROVIDERS;
        this.payload = [];
        this.payload = _payload;
    }
    return AddProviders;
}());

var UpdateProviderPlans = /** @class */ (function () {
    function UpdateProviderPlans(_payload) {
        this._payload = _payload;
        this.type = UPDATE_PROVIDER_PLANS;
        this.payload = null;
        this.payload = _payload;
    }
    return UpdateProviderPlans;
}());

var UpdateProviders = /** @class */ (function () {
    function UpdateProviders(_payload) {
        this._payload = _payload;
        this.type = UPDATE_PROVIDERS;
        this.payload = null;
        this.payload = _payload;
    }
    return UpdateProviders;
}());

var ResetProviders = /** @class */ (function () {
    function ResetProviders() {
        this.type = RESET_PROVIDERS;
        this.payload = null;
    }
    return ResetProviders;
}());

//# sourceMappingURL=provider-actions.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_READS_BY_METERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_READS_BY_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOADING_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RESET_READS_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadReadsByDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoadingReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LoadReadsByMeters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ResetReadsTimeout; });
var ADD_READS = "[Reads] ADD READS";
var LOAD_READS_BY_METERS = "[Reads] LOAD READS BY METERS";
var LOAD_READS_BY_DATE = "[Reads] LOAD READS BY DATE";
var LOADING_READS = "[Reads] LOADING READS";
var RESET_READS_TIMEOUT = "[Reads] RESET READS TIMEOUT";
var AddReads = /** @class */ (function () {
    function AddReads(_payload) {
        this._payload = _payload;
        this.type = ADD_READS;
        this.payload = _payload;
    }
    return AddReads;
}());

var LoadReadsByDateRange = /** @class */ (function () {
    function LoadReadsByDateRange(_payload) {
        this._payload = _payload;
        this.type = LOAD_READS_BY_DATE;
        this.payload = _payload;
    }
    return LoadReadsByDateRange;
}());

var LoadingReads = /** @class */ (function () {
    function LoadingReads() {
        this.type = LOADING_READS;
        this.payload = null;
    }
    return LoadingReads;
}());

var LoadReadsByMeters = /** @class */ (function () {
    function LoadReadsByMeters(_payload) {
        this._payload = _payload;
        this.type = LOAD_READS_BY_METERS;
        this.payload = _payload;
    }
    return LoadReadsByMeters;
}());

var ResetReadsTimeout = /** @class */ (function () {
    function ResetReadsTimeout(_payload) {
        this._payload = _payload;
        this.type = RESET_READS_TIMEOUT;
        this.payload = _payload;
    }
    return ResetReadsTimeout;
}());

//# sourceMappingURL=reads-actions.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TRIGGER_COMPARISON_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMPARISON_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOADING_COMPARISON_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_NEIGHBORHOOD_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RESET_COMPARISON_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BEGIN_COMPARISON_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHECK_COMPARISON_READS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TriggerComparisonReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CheckComparisonReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BeginComparisonReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddComparison; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadingComparisonReads; });
/* unused harmony export AddNeighborhoodGroup */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ResetComparisonTimeout; });
var TRIGGER_COMPARISON_READS = "[Comparison] TRIGGER COMPARISON READS";
var ADD_COMPARISON_READS = "[Comparison] ADD COMPARISON READS";
var LOADING_COMPARISON_READS = "[Comparison] LOADING COMPARISON READS";
var ADD_NEIGHBORHOOD_GROUP = "[Comparison] ADD NEIGHBORHOOD GROUP";
var RESET_COMPARISON_TIMEOUT = "[Comparison] RESET COMPARISON TIMEOUT";
var BEGIN_COMPARISON_READS = "[Comparison] BEGIN COMPARISON READS";
var CHECK_COMPARISON_READS = "[Comparison] CHECK COMPARISON READS";
var TriggerComparisonReads = /** @class */ (function () {
    function TriggerComparisonReads(_payload) {
        this._payload = _payload;
        this.type = TRIGGER_COMPARISON_READS;
        this.payload = _payload;
    }
    return TriggerComparisonReads;
}());

var CheckComparisonReads = /** @class */ (function () {
    function CheckComparisonReads(_payload) {
        this._payload = _payload;
        this.type = CHECK_COMPARISON_READS;
        this.payload = _payload;
    }
    return CheckComparisonReads;
}());

var BeginComparisonReads = /** @class */ (function () {
    function BeginComparisonReads(_payload) {
        this._payload = _payload;
        this.type = BEGIN_COMPARISON_READS;
        this.payload = _payload;
    }
    return BeginComparisonReads;
}());

var AddComparison = /** @class */ (function () {
    function AddComparison(_payload) {
        this._payload = _payload;
        this.type = ADD_COMPARISON_READS;
        this.payload = _payload;
    }
    return AddComparison;
}());

var LoadingComparisonReads = /** @class */ (function () {
    function LoadingComparisonReads() {
        this.type = LOADING_COMPARISON_READS;
        this.payload = null;
    }
    return LoadingComparisonReads;
}());

var AddNeighborhoodGroup = /** @class */ (function () {
    function AddNeighborhoodGroup(_payload) {
        this._payload = _payload;
        this.type = ADD_NEIGHBORHOOD_GROUP;
        this.payload = _payload;
    }
    return AddNeighborhoodGroup;
}());

var ResetComparisonTimeout = /** @class */ (function () {
    function ResetComparisonTimeout(_payload) {
        this._payload = _payload;
        this.type = RESET_COMPARISON_TIMEOUT;
        this.payload = _payload;
    }
    return ResetComparisonTimeout;
}());

//# sourceMappingURL=comparison-actions.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIDE_MENU_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDE_MENU_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SideMenuOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SideMenuClose; });
var SIDE_MENU_OPEN = "SIDE MENU OPEN";
var SIDE_MENU_CLOSE = "SIDE MENU CLOSE";
var SideMenuOpen = /** @class */ (function () {
    function SideMenuOpen() {
        this.type = SIDE_MENU_OPEN;
        this.payload = null;
    }
    return SideMenuOpen;
}());

var SideMenuClose = /** @class */ (function () {
    function SideMenuClose() {
        this.type = SIDE_MENU_CLOSE;
        this.payload = null;
    }
    return SideMenuClose;
}());

//# sourceMappingURL=ui-controls-actions.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fireBaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return databasePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return databaseToken; });
var fireBaseConfig = {
    apiKey: "AIzaSyARnfo80rPEQQgZjMBGuwekYTve9nsBA08",
    authDomain: "vutiliti-platform.firebaseapp.com",
    databaseURL: "https://vutiliti-platform.firebaseio.com",
    projectId: "firebase-vutiliti-platform",
    storageBucket: "firebase-vutiliti-platform.appspot.com",
    messagingSenderId: "153277340240"
};
var databasePaths = {
    users: "users",
    meters: "meters",
    orgs: "orgs",
    reads: "reads",
    providers: "providers",
    ranks: "nbhc_ranks"
};
var databaseToken = {
    production: "VICdha7cFBew3pqe2xnS6ECuYOj5LKnXQqnjoR9W",
    dev: "0JBEo6TvuaSdu3mxS2PRNjghQhGOWAVOjN0z2fis"
};
//# sourceMappingURL=database-configs.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertConfigs; });
var convertConfigs = {
    ccfToDth: 9.702023546750238,
    galToCcf: 748.052
};
//# sourceMappingURL=convert-configs.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return googleConfig; });
var googleConfig = {
    webClientId: "664713118536-hughg731mofacehql9kbqu09pjbeheui.apps.googleusercontent.com"
};
//# sourceMappingURL=social-configs.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigationConfigs; });
var navigationConfigs = {
    ARC_CHART: "arc-chart",
    LINE_CHART: "line-chart",
    COMPARISON: "comparison",
    EDIT: "edit"
};
//# sourceMappingURL=navigation-configs.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeSpanConfigs; });
var timeSpanConfigs = {
    HOUR: "hours",
    DAY: "days",
    WEEK: "weeks",
    MONTH: "months",
    YEAR: "years"
};
//# sourceMappingURL=timespan-configs.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meterConfigs; });
var meterConfigs = {
    types: {
        POWER: "power",
        GAS: "gas",
        WATER: "water",
        SOLAR: "solar"
    }
};
//# sourceMappingURL=meter-configs.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return neighborhoodConfigs; });
var neighborhoodConfigs = {
    NEIGHBORHOOD_COMP_REST_URL: "https://api-spark.vutiliti.io/v1/neighborhood/update",
    NEIGHBORHOOD_COMP_DEV_REST_URL: "https://api-spark-dev.vutiliti.io/v1/neighborhood/update",
    AUTHORIZATION: "Basic c3Bhcms6cmVhbGx5Z29vZHBhc3N3b3JkdGhhdGlzcmVhbGx5bG9uZ2FuZG5vb25ld2lsbHJlbWVtYmVyaXRiZWF1c2VpdHNhcnVub25zZW50ZW5jZXdpdGgxbnVtYmVyLnBlcmZlY3Q=",
    NEIGHBORHOOD_COMP_AVG_GUID: "-NBHC-AVERAGE",
    NEIGHBORHOOD_COMP_EFF_GUID: "-NBHC-EFFICIENT"
};
//# sourceMappingURL=neighborhood-configs.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return archChartConfigs; });
var archChartConfigs = {
    states: {
        NORMAL: "normal",
        WARNING: "warning",
        ALERT: "alert"
    }
};
//# sourceMappingURL=arcChart-configs.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_helper__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);



var CostHelper = /** @class */ (function () {
    function CostHelper() {
    }
    CostHelper.calculateCostFromDeltas = function (meter, deltas) {
        var totalDelta = 0;
        var totalCost = 0;
        for (var _i = 0, deltas_1 = deltas; _i < deltas_1.length; _i++) {
            var delta = deltas_1[_i];
            var date = delta.date, line1 = delta.line1;
            totalDelta += line1 > 0 ? line1 : 0;
            var rate = this._getRate(meter, date, totalDelta);
            if (line1 > 0) {
                if (meter._utilityType === __WEBPACK_IMPORTED_MODULE_0__configs__["h" /* meterConfigs */].types.GAS) {
                    totalCost += line1 / __WEBPACK_IMPORTED_MODULE_0__configs__["c" /* convertConfigs */].ccfToDth * rate;
                }
                else if (meter._utilityType === __WEBPACK_IMPORTED_MODULE_0__configs__["h" /* meterConfigs */].types.WATER) {
                    totalCost += line1 / __WEBPACK_IMPORTED_MODULE_0__configs__["c" /* convertConfigs */].galToCcf * rate;
                }
                else {
                    totalCost += line1 * rate;
                }
            }
        }
        return {
            totalCost: totalCost > 0 ? totalCost / 100 : 0,
            totalDelta: totalDelta
        };
    };
    CostHelper._getRate = function (meter, date, delta) {
        var _winter = meter._winter, _summer = meter._summer;
        var isSummer = date >= _summer.start_date && date < _summer.end_date || false;
        var tiers = isSummer && _summer ? _summer.tiers : (_winter ? _winter.tiers : null);
        var rates = [];
        if (tiers) {
            for (var _i = 0, _a = Object.keys(tiers); _i < _a.length; _i++) {
                var key = _a[_i];
                var limit = parseInt(key);
                var rate = tiers[key];
                rates.push({ limit: limit, rate: rate });
                if (delta > 0 && delta <= limit) {
                    return rates[rates.length - 2].rate || rate;
                }
            }
            return rates[rates.length - 1].rate;
        }
        return 1;
    };
    CostHelper.calculateBillingCycles = function (billingStartDay) {
        var today = new Date();
        var refDate = new Date(today.getFullYear(), today.getMonth(), billingStartDay);
        var prevBillingStartDate = __WEBPACK_IMPORTED_MODULE_2_moment__(refDate).add(-1, "M").toDate();
        var billingStartDate = refDate < today ? refDate : prevBillingStartDate;
        var billingEndDate = refDate < today ? __WEBPACK_IMPORTED_MODULE_2_moment__(refDate).add(1, "M").toDate() : __WEBPACK_IMPORTED_MODULE_2_moment__(prevBillingStartDate).add(1, "M").toDate();
        // # of days for billing cycle.
        var billingTotalDays = __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](__WEBPACK_IMPORTED_MODULE_2_moment__(billingEndDate).diff(__WEBPACK_IMPORTED_MODULE_2_moment__(billingStartDate))).asDays();
        // # of days since billing start date
        var billingCurrentDays = __WEBPACK_IMPORTED_MODULE_2_moment__["duration"](__WEBPACK_IMPORTED_MODULE_2_moment__().diff(__WEBPACK_IMPORTED_MODULE_2_moment__(billingStartDate))).asDays();
        return {
            billingTotalDays: billingTotalDays,
            billingCurrentDays: billingCurrentDays
        };
    };
    /**
     * Calculates actual cost and usage.
     * @param meters
     */
    CostHelper.calculateCostAndUsageForMeters = function (meters) {
        for (var _i = 0, meters_1 = meters; _i < meters_1.length; _i++) {
            var meter = meters_1[_i];
            var deltas = __WEBPACK_IMPORTED_MODULE_1__chart_helper__["a" /* ChartHelper */].getDeltas(meter._reads);
            var cost = deltas.length ? CostHelper.calculateCostFromDeltas(meter, deltas) : {};
            var _a = CostHelper.calculateBillingCycles(meter._billing_start), billingTotalDays = _a.billingTotalDays, billingCurrentDays = _a.billingCurrentDays;
            meter._actualUsageCost = cost.totalCost || 0;
            meter._usage = cost.totalDelta || 0;
            // # of days since billing start date
            meter._billing_since_start = billingCurrentDays || 0;
            // # of days in billing cycle.
            meter._billing_total = billingTotalDays || 0;
        }
        return meters;
    };
    return CostHelper;
}());

//# sourceMappingURL=cost-helper.js.map

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 259,
	"./af.js": 259,
	"./ar": 260,
	"./ar-dz": 261,
	"./ar-dz.js": 261,
	"./ar-kw": 262,
	"./ar-kw.js": 262,
	"./ar-ly": 263,
	"./ar-ly.js": 263,
	"./ar-ma": 264,
	"./ar-ma.js": 264,
	"./ar-sa": 265,
	"./ar-sa.js": 265,
	"./ar-tn": 266,
	"./ar-tn.js": 266,
	"./ar.js": 260,
	"./az": 267,
	"./az.js": 267,
	"./be": 268,
	"./be.js": 268,
	"./bg": 269,
	"./bg.js": 269,
	"./bm": 270,
	"./bm.js": 270,
	"./bn": 271,
	"./bn.js": 271,
	"./bo": 272,
	"./bo.js": 272,
	"./br": 273,
	"./br.js": 273,
	"./bs": 274,
	"./bs.js": 274,
	"./ca": 275,
	"./ca.js": 275,
	"./cs": 276,
	"./cs.js": 276,
	"./cv": 277,
	"./cv.js": 277,
	"./cy": 278,
	"./cy.js": 278,
	"./da": 279,
	"./da.js": 279,
	"./de": 280,
	"./de-at": 281,
	"./de-at.js": 281,
	"./de-ch": 282,
	"./de-ch.js": 282,
	"./de.js": 280,
	"./dv": 283,
	"./dv.js": 283,
	"./el": 284,
	"./el.js": 284,
	"./en-au": 285,
	"./en-au.js": 285,
	"./en-ca": 286,
	"./en-ca.js": 286,
	"./en-gb": 287,
	"./en-gb.js": 287,
	"./en-ie": 288,
	"./en-ie.js": 288,
	"./en-nz": 289,
	"./en-nz.js": 289,
	"./eo": 290,
	"./eo.js": 290,
	"./es": 291,
	"./es-do": 292,
	"./es-do.js": 292,
	"./es-us": 293,
	"./es-us.js": 293,
	"./es.js": 291,
	"./et": 294,
	"./et.js": 294,
	"./eu": 295,
	"./eu.js": 295,
	"./fa": 296,
	"./fa.js": 296,
	"./fi": 297,
	"./fi.js": 297,
	"./fo": 298,
	"./fo.js": 298,
	"./fr": 299,
	"./fr-ca": 300,
	"./fr-ca.js": 300,
	"./fr-ch": 301,
	"./fr-ch.js": 301,
	"./fr.js": 299,
	"./fy": 302,
	"./fy.js": 302,
	"./gd": 303,
	"./gd.js": 303,
	"./gl": 304,
	"./gl.js": 304,
	"./gom-latn": 305,
	"./gom-latn.js": 305,
	"./gu": 306,
	"./gu.js": 306,
	"./he": 307,
	"./he.js": 307,
	"./hi": 308,
	"./hi.js": 308,
	"./hr": 309,
	"./hr.js": 309,
	"./hu": 310,
	"./hu.js": 310,
	"./hy-am": 311,
	"./hy-am.js": 311,
	"./id": 312,
	"./id.js": 312,
	"./is": 313,
	"./is.js": 313,
	"./it": 314,
	"./it.js": 314,
	"./ja": 315,
	"./ja.js": 315,
	"./jv": 316,
	"./jv.js": 316,
	"./ka": 317,
	"./ka.js": 317,
	"./kk": 318,
	"./kk.js": 318,
	"./km": 319,
	"./km.js": 319,
	"./kn": 320,
	"./kn.js": 320,
	"./ko": 321,
	"./ko.js": 321,
	"./ky": 322,
	"./ky.js": 322,
	"./lb": 323,
	"./lb.js": 323,
	"./lo": 324,
	"./lo.js": 324,
	"./lt": 325,
	"./lt.js": 325,
	"./lv": 326,
	"./lv.js": 326,
	"./me": 327,
	"./me.js": 327,
	"./mi": 328,
	"./mi.js": 328,
	"./mk": 329,
	"./mk.js": 329,
	"./ml": 330,
	"./ml.js": 330,
	"./mr": 331,
	"./mr.js": 331,
	"./ms": 332,
	"./ms-my": 333,
	"./ms-my.js": 333,
	"./ms.js": 332,
	"./mt": 334,
	"./mt.js": 334,
	"./my": 335,
	"./my.js": 335,
	"./nb": 336,
	"./nb.js": 336,
	"./ne": 337,
	"./ne.js": 337,
	"./nl": 338,
	"./nl-be": 339,
	"./nl-be.js": 339,
	"./nl.js": 338,
	"./nn": 340,
	"./nn.js": 340,
	"./pa-in": 341,
	"./pa-in.js": 341,
	"./pl": 342,
	"./pl.js": 342,
	"./pt": 343,
	"./pt-br": 344,
	"./pt-br.js": 344,
	"./pt.js": 343,
	"./ro": 345,
	"./ro.js": 345,
	"./ru": 346,
	"./ru.js": 346,
	"./sd": 347,
	"./sd.js": 347,
	"./se": 348,
	"./se.js": 348,
	"./si": 349,
	"./si.js": 349,
	"./sk": 350,
	"./sk.js": 350,
	"./sl": 351,
	"./sl.js": 351,
	"./sq": 352,
	"./sq.js": 352,
	"./sr": 353,
	"./sr-cyrl": 354,
	"./sr-cyrl.js": 354,
	"./sr.js": 353,
	"./ss": 355,
	"./ss.js": 355,
	"./sv": 356,
	"./sv.js": 356,
	"./sw": 357,
	"./sw.js": 357,
	"./ta": 358,
	"./ta.js": 358,
	"./te": 359,
	"./te.js": 359,
	"./tet": 360,
	"./tet.js": 360,
	"./th": 361,
	"./th.js": 361,
	"./tl-ph": 362,
	"./tl-ph.js": 362,
	"./tlh": 363,
	"./tlh.js": 363,
	"./tr": 364,
	"./tr.js": 364,
	"./tzl": 365,
	"./tzl.js": 365,
	"./tzm": 366,
	"./tzm-latn": 367,
	"./tzm-latn.js": 367,
	"./tzm.js": 366,
	"./uk": 368,
	"./uk.js": 368,
	"./ur": 369,
	"./ur.js": 369,
	"./uz": 370,
	"./uz-latn": 371,
	"./uz-latn.js": 371,
	"./uz.js": 370,
	"./vi": 372,
	"./vi.js": 372,
	"./x-pseudo": 373,
	"./x-pseudo.js": 373,
	"./yo": 374,
	"./yo.js": 374,
	"./zh-cn": 375,
	"./zh-cn.js": 375,
	"./zh-hk": 376,
	"./zh-hk.js": 376,
	"./zh-tw": 377,
	"./zh-tw.js": 377
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 542;

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_configs__ = __webpack_require__(532);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__database_configs__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__database_configs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__database_configs__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__convert_configs__ = __webpack_require__(533);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__convert_configs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_configs__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__chart_configs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_configs__ = __webpack_require__(534);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__social_configs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_configs__ = __webpack_require__(535);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__navigation_configs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timespan_configs__ = __webpack_require__(536);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__timespan_configs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meter_configs__ = __webpack_require__(537);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__meter_configs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__neighborhood_configs__ = __webpack_require__(538);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__neighborhood_configs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__arcChart_configs__ = __webpack_require__(539);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__arcChart_configs__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(_authProvider, _httpClient) {
        this._authProvider = _authProvider;
        this._httpClient = _httpClient;
        this._refs = new Map();
        if (!__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.apps.length) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_3__configs__["f" /* fireBaseConfig */]);
        }
    }
    DatabaseProvider.prototype.dbRef = function (path) {
        if (!this._refs.has(path)) {
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref(path);
            this._refs.set(path, ref);
            return ref;
        }
        return this._refs.get(path);
    };
    /**
     * Gets org path string from uid.
     *
     * @param {string} uid
     * @returns {Observable<string>}
     * @memberof DatabaseProvider
     */
    DatabaseProvider.prototype.getOrgPathForUser = function (uid) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].users)
                .child(uid)
                .on("value", function (snapshot) {
                if (snapshot) {
                    var _a = snapshot.val().orgs, orgs = _a === void 0 ? null : _a;
                    if (orgs && !Array.isArray(orgs)) {
                        observer.next(orgs.path);
                    }
                    else {
                        observer.next(orgs[0].path);
                    }
                }
            });
        });
    };
    /**
     * Gets all meters associated with the given org path and
     * returns the meters as an array.
     *
     * @param {string} orgPath
     * @returns {Observable<IMeter[]>}
     * @memberof DatabaseProvider
     */
    DatabaseProvider.prototype.getMetersForOrg = function (orgPath) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].orgs)
                .child(orgPath)
                .once("value")
                .then(function (snapshot) {
                var meters = [];
                snapshot.forEach(function (child) {
                    var building = child.val();
                    var metersInBuilding = building._meters;
                    if (building && metersInBuilding) {
                        var _a = metersInBuilding._gas, _gas = _a === void 0 ? null : _a, _b = metersInBuilding._power, _power = _b === void 0 ? null : _b, _c = metersInBuilding._solar, _solar = _c === void 0 ? null : _c, _d = metersInBuilding._water, _water = _d === void 0 ? null : _d;
                        var gasMeters = _gas ? _this._getMeters(_gas, "gas") : [];
                        var powerMeters = _power ? _this._getMeters(_power, "power") : [];
                        var solarMeters = _solar ? _this._getMeters(_solar, "solar") : [];
                        var waterMeters = _water ? _this._getMeters(_water, "water") : [];
                        // Flattens meters arrays into a single array.
                        meters = [].concat(gasMeters, powerMeters, solarMeters, waterMeters);
                    }
                });
                observer.next(meters);
            })
                .catch(function (error) {
                observer.error(error);
            });
        });
    };
    /**
     * Gets reads data for each meter in the meters array and
     * adds _reads property that have the reads data.
     *
     * Example: meters: [{ _name, _billingStart, ... }, {...}]
     * returns meters: [{ _name, _billingStart, _reads: [...] }, {..., _reads: [...]}]
     *
     * @param {IMeter[]} meters
     * @returns {Observable<IMeter[]>}
     * @memberof DatabaseProvider
     */
    DatabaseProvider.prototype.getReadsForMeters = function (meters) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]
            .combineLatest.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"], meters.map(function (meter) { return _this.getReadsForMeter(meter._guid, meter._billing_start); })).map(function (allMeterData) {
            // Adds property _reads and assigns the reads for each meter in the passed meters array.
            return meters.map(function (meter, index) {
                return __assign({}, meter, { _reads: allMeterData[index] });
            });
        });
    };
    /**
     * Gets provider data for each meter in the meters array.
     * Adds data for _summer, _facilityFee and _winter as properties.
     *
     * @param {IMeter[]} meters
     * @returns {Observable<IMeter[]>}
     * @memberof DatabaseProvider
     */
    DatabaseProvider.prototype.getProviderForMeters = function (meters) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]
            .combineLatest.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"], meters.map(function (meter) { return _this._getProviderForMeter(meter._provider); })).map(function (providers) {
            var planTypes = ["Residential", "City", "County"];
            return providers.map(function (provider, index) {
                var _a = provider.plans, plans = _a === void 0 ? null : _a;
                var rateInfo = null;
                for (var _i = 0, planTypes_1 = planTypes; _i < planTypes_1.length; _i++) {
                    var type = planTypes_1[_i];
                    if (plans[type]) {
                        rateInfo = plans[type];
                        break;
                    }
                }
                var facilityFee = rateInfo ? rateInfo.facility_fee : null;
                var rateSchedules = rateInfo ? rateInfo.rate_schedules : null;
                var summer = rateSchedules ? rateSchedules.summer : null;
                var winter = rateSchedules ? rateSchedules.winter : null;
                return __assign({}, meters[index], { _summer: summer, _winter: winter, _facilityFee: facilityFee });
            });
        });
    };
    /**
     * Gets provider data for the given provider path.
     *
     * @private
     * @param {string} providerPath
     * @returns {Observable<any>}
     * @memberof DatabaseProvider
     */
    DatabaseProvider.prototype._getProviderForMeter = function (providerPath) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].providers)
                .child(providerPath)
                .on("value", function (snapshot) {
                if (snapshot) {
                    var providerData = snapshot.val();
                    observer.next(providerData);
                }
            });
        });
    };
    /**
     * Gets all reads for the given meter using meter guid and billing start date.
     *
     * @private
     * @param {string} meterGuid
     * @param {number} billingStart
     * @returns {Observable<IMeter[]>}
     * @memberof DatabaseProvider
     */
    DatabaseProvider.prototype.getReadsForMeter = function (meterGuid, billingStart) {
        var _this = this;
        var today = new Date();
        var refDate = new Date(today.getFullYear(), today.getMonth(), billingStart);
        var prevBillingStartDate = new Date(today.getFullYear(), today.getMonth() - 1, billingStart);
        var billingStartDate = refDate < today ? refDate : prevBillingStartDate;
        var startAt = billingStartDate.getTime().toString();
        var endAt = today.getTime().toString();
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].reads)
                .child(meterGuid)
                .child("reads")
                .orderByKey()
                .startAt(startAt)
                .endAt(endAt)
                .on("value", function (snapshot) {
                if (snapshot) {
                    var data_1 = snapshot.val();
                    var reads = [];
                    if (data_1) {
                        reads = Object.keys(data_1).map(function (key) {
                            return { date: key, total: data_1[key].total };
                        });
                    }
                    observer.next(reads);
                }
            });
        });
    };
    DatabaseProvider.prototype.getSummaries = function (meterGuid, timeSpan) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].reads)
                .child(meterGuid)
                .child("read_summaries/" + timeSpan)
                .orderByKey()
                .on("value", function (snapshot) {
                if (snapshot) {
                    var data_2 = snapshot.val();
                    var reads = [];
                    if (data_2) {
                        reads = Object.keys(data_2).map(function (key) {
                            return {
                                date: new Date(data_2[key].lastReadTime),
                                line1: data_2[key].delta
                            };
                        });
                    }
                    observer.next(reads);
                }
            });
        });
    };
    DatabaseProvider.prototype.getReadsByDateRange = function (meterGuid, dateRange) {
        var _this = this;
        var startDate = dateRange.startDate, endDate = dateRange.endDate;
        var startAt = startDate.getTime().toString();
        var endAt = endDate.getTime().toString();
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].reads)
                .child(meterGuid)
                .child("reads")
                .orderByKey()
                .startAt(startAt)
                .endAt(endAt)
                .on("value", function (snapshot) {
                if (snapshot) {
                    var data_3 = snapshot.val();
                    var reads = [];
                    if (data_3) {
                        reads = Object.keys(data_3).map(function (key) {
                            return { date: key, total: data_3[key].total };
                        });
                    }
                    observer.next(reads);
                }
            });
        });
    };
    DatabaseProvider.prototype.getReadsByNeighborhood = function (guid, dateRange) {
        var _this = this;
        var startDate = dateRange.startDate, endDate = dateRange.endDate;
        var startAt = startDate.getTime().toString();
        var endAt = endDate.getTime().toString();
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].reads)
                .child(guid)
                .child("read_summaries/hours")
                .orderByKey()
                .startAt(startAt)
                .endAt(endAt)
                .on("value", function (snapshot) {
                if (snapshot) {
                    var data_4 = snapshot.val();
                    var reads = [];
                    if (data_4) {
                        reads = Object.keys(data_4).map(function (key) {
                            return { date: key, delta: data_4[key].delta };
                        });
                    }
                    observer.next(reads);
                }
            });
        });
    };
    DatabaseProvider.prototype.addMeter = function (meter, user) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            var updates = {};
            var path = "Vutiliti/VutilitiCP/Residential/" + user.uid + "/Building1/_meters/_" + meter._utilityType + "/" + meter._name;
            var settings = {
                _billing_start: meter._billing_start,
                _goal: meter._goal,
                _meter_id: meter._meter_id,
                _plan: meter._plan,
                _provider: meter._provider,
                _type: meter._type,
                _guid: meter._guid,
            };
            updates[path] = settings;
            _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].orgs).child(path).set(settings).then(function () {
                observer.next(Object.assign({}, meter, settings));
            }, function (error) {
                observer.error(error);
            });
        });
    };
    DatabaseProvider.prototype.updateMeterSettings = function (meter, user) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            var updates = {};
            var path = "Vutiliti/VutilitiCP/Residential/" + user.uid + "/Building1/_meters/_" + meter._utilityType + "/" + meter._name;
            var settings = {
                _billing_start: meter._billing_start,
                _goal: meter._goal,
                _meter_id: meter._meter_id,
                _plan: meter._plan,
                _provider: meter._provider,
                _type: meter._type,
                _guid: meter._guid,
            };
            updates[path] = settings;
            // checks if user name has been changed or not, if so then delete old meter and add new
            if (meter._name !== meter._oldMeterName) {
                var oldMeterPath = "Vutiliti/VutilitiCP/Residential/" + user.uid + "/Building1/_meters/_" + meter._utilityType + "/" + meter._oldMeterName;
                _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].orgs).child(oldMeterPath).remove();
                // TODO: Implement addMeter() into this function once orgPath is saved to localStorage
                _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].orgs).child(path).set(settings).then(function () {
                    observer.next(Object.assign({}, meter, settings));
                })
                    .catch(function (error) {
                    observer.error(error);
                });
            }
            else {
                _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].orgs).child(path).update(settings).then(function () {
                    observer.next(Object.assign({}, meter, settings));
                })
                    .catch(function (error) {
                    observer.error(error);
                });
            }
        });
    };
    DatabaseProvider.prototype.findMeterById = function (meterId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].meters)
                .orderByChild("meter_id")
                .equalTo(meterId)
                .on("value", function (snapshot) {
                if (snapshot) {
                    var meterGuidObj = snapshot.val();
                    if (meterGuidObj) {
                        var meterGuid = Object.keys(meterGuidObj)[0];
                        observer.next(meterGuid);
                    }
                    else {
                        observer.next(null);
                    }
                }
            });
        });
    };
    DatabaseProvider.prototype._getShallowList = function (httpService, path) {
        return httpService.get(path + ".json?auth=" + __WEBPACK_IMPORTED_MODULE_3__configs__["e" /* databaseToken */].production + "&shallow=true")
            .map(function (res) { return Object.keys(res); });
    };
    DatabaseProvider.prototype.getProviderTypes = function () {
        return this._getShallowList(this._httpClient, "" + this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].providers));
    };
    DatabaseProvider.prototype.getProviderRequestInfo = function (path) {
        return this._getShallowList(this._httpClient, this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].providers) + "/" + path);
    };
    DatabaseProvider.prototype.getNeighborhoodGroup = function (meter) {
        var _this = this;
        var _guid = meter._guid, _utilityType = meter._utilityType;
        return this._authProvider.getTokenId()
            .switchMap(function (token) {
            var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set("Authorization", __WEBPACK_IMPORTED_MODULE_3__configs__["j" /* neighborhoodConfigs */].AUTHORIZATION);
            return _this._httpClient
                .get(__WEBPACK_IMPORTED_MODULE_3__configs__["j" /* neighborhoodConfigs */].NEIGHBORHOOD_COMP_DEV_REST_URL + "?guid=" + _guid + "&token=" + token + "&utilityType=" + _utilityType, { headers: header })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null); });
        });
    };
    DatabaseProvider.prototype.getNeighborhoodComparisonRanks = function (meter, dateRange) {
        var _this = this;
        var startDate = dateRange.startDate, endDate = dateRange.endDate;
        var startAt = startDate.getTime().toString();
        var endAt = endDate.getTime().toString();
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].ranks)
                .child(meter._guid + "/hours")
                .orderByKey()
                .startAt(startAt)
                .endAt(endAt)
                .on("value", function (snapshot) {
                if (snapshot) {
                    var ranks_1 = snapshot.val();
                    var totals_1 = [];
                    var sum = 0;
                    if (ranks_1) {
                        Object.keys(ranks_1).forEach(function (key) {
                            totals_1.push(ranks_1[key]);
                        });
                        sum = totals_1.reduce(function (a, b) {
                            return a + b.total;
                        }, 0);
                    }
                    observer.next(sum > 0 ? Math.round(sum / totals_1.length) : 0);
                }
            });
        });
    };
    DatabaseProvider.prototype.deleteMeter = function (meter, user) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            var path = "Vutiliti/VutilitiCP/Residential/" + user.uid + "/Building1/_meters/_" + meter._utilityType + "/" + meter._name;
            _this.dbRef(__WEBPACK_IMPORTED_MODULE_3__configs__["d" /* databasePaths */].orgs).child(path).remove().then(function () {
                observer.next(meter);
            })
                .catch(function (error) {
                observer.error(error);
            });
        });
    };
    /**
     * Iterates over meterObject containing meters and
     * puts the meters into an array and returns the array.
     *
     * Example: { MeterY: IMeter, MeterZ: IMeter, ... }
     *
     * @private
     * @param {*} meterObject
     * @param {string} meterType
     * @returns {IMeter[]}
     * @memberof DatabaseProvider
     */
    DatabaseProvider.prototype._getMeters = function (meterObject, meterType) {
        return Object.keys(meterObject).map(function (key) {
            return Object.assign({}, meterObject[key], { _name: key, _utilityType: meterType });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database__ = __webpack_require__(634);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__database__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__(656);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* unused harmony export metaReducedMeterReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meter_reducer__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_reducer__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reads_reducer__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comparison_reducer__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__provider_reducer__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_controls_reducer__ = __webpack_require__(665);

 // Angular CLI environment






var reducers = {
    meters: __WEBPACK_IMPORTED_MODULE_2__meter_reducer__["a" /* meterReducer */],
    user: __WEBPACK_IMPORTED_MODULE_3__user_reducer__["a" /* userReducer */],
    reads: __WEBPACK_IMPORTED_MODULE_4__reads_reducer__["a" /* readsReducer */],
    comparison: __WEBPACK_IMPORTED_MODULE_5__comparison_reducer__["a" /* comparisonReducer */],
    providers: __WEBPACK_IMPORTED_MODULE_6__provider_reducer__["a" /* providerReducer */],
    uiControls: __WEBPACK_IMPORTED_MODULE_7__ui_controls_reducer__["a" /* uiControlsReducer */]
};
// TODO: We may use this in the future.
/**
 * When not in production, it is initialized with a meta reducer that prevents state from being mutated.
 * When mutation occurs, an exception will be thrown.
 */
var metaReducers = !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production ? [__WEBPACK_IMPORTED_MODULE_0_ngrx_store_freeze__["storeFreeze"]] : [];
function metaReducedMeterReducer(state, action) {
    var newState = Object(__WEBPACK_IMPORTED_MODULE_2__meter_reducer__["a" /* meterReducer */])(state, action);
    // TODO: We can do other stuff here such as logging, etc.
    return newState;
}
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export meterReducerMap */
/* harmony export (immutable) */ __webpack_exports__["a"] = meterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(27);

var meterReducerMap = {
    meters: meterReducer
};
function meterReducer(state, action) {
    if (state === void 0) { state = { data: [], loading: false }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* ADD_METERS */]:
            return Object.assign({}, state, { data: action.payload, loading: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* ADD_METER */]:
            if (!action.payload) {
                return state;
            }
            return Object.assign({}, state, { data: state.data.concat(action.payload), loading: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["G" /* REMOVE_METER */]:
            var meterToRemove_1 = action.payload;
            var meters = state.data.filter(function (meter) {
                return meter._guid !== meterToRemove_1._guid || meter._name !== meterToRemove_1._name;
            });
            return Object.assign({}, state, { data: meters });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_4" /* TRIGGER_UPDATE_METER_READS */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_5" /* TRIGGER_UPDATE_METER_SETTINGS */]:
            return Object.assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_20" /* UPDATE_METER */]:
            if (!action.payload) {
                return state;
            }
            var _guid_1 = action.payload._guid;
            var filteredMeters = state.data.filter(function (meter) { return meter._guid !== _guid_1; });
            var allMeters = sortByKey(Object.assign([], filteredMeters.concat(action.payload)), "_name");
            return Object.assign({}, state, { data: allMeters, loading: false });
        default:
            return state;
    }
}
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
//# sourceMappingURL=meter-reducer.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export userReducerMap */
/* harmony export (immutable) */ __webpack_exports__["a"] = userReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(27);

var userReducerMap = {
    user: userReducer
};
var userDefault = {
    email: null,
    uid: null,
    orgPath: null,
    password: null
};
function userReducer(state, action) {
    if (state === void 0) { state = userDefault; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* ADD_USER */]: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_25" /* UPDATE_USER */]: {
            return Object.assign({}, state, action.payload);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["z" /* LOGOUT_USER */]: {
            return Object.assign({}, state, userDefault);
        }
        default:
            return state;
    }
}
//# sourceMappingURL=user-reducer.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export readsReducerMap */
/* harmony export (immutable) */ __webpack_exports__["a"] = readsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(27);

var readsReducerMap = {
    reads: readsReducer
};
function readsReducer(state, action) {
    if (state === void 0) { state = { data: [], loading: false }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* ADD_READS */]:
            if (!action.payload) {
                return Object.assign({}, state, { loading: false });
            }
            var _a = action.payload, _b = _a.guid, guid_1 = _b === void 0 ? null : _b, _c = _a.startDate, startDate_1 = _c === void 0 ? null : _c, _d = _a.endDate, endDate_1 = _d === void 0 ? null : _d;
            var filteredData = state.data.filter(function (s) {
                return s.guid !== guid_1 ||
                    s.startDate.toString() !== startDate_1.toString() ||
                    s.endDate.toString() !== endDate_1.toString();
            });
            return Object.assign({}, state, { data: filteredData.concat(action.payload) }, { loading: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["u" /* LOADING_READS */]:
            return Object.assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["K" /* RESET_READS_TIMEOUT */]:
            var dateRange_1 = action.payload.dateRange;
            var meterGuid_1 = action.payload.guid;
            var reads = state.data;
            // Finds current reads by guid and date range.
            var currentReadsData = reads.find(function (read) {
                return read.guid === meterGuid_1 &&
                    read.startDate.toString() === dateRange_1.startDate.toString() &&
                    read.endDate.toString() === dateRange_1.endDate.toString();
            });
            if (!currentReadsData) {
                return state;
            }
            // Reset the timedOut property in current reads data.
            var newReadsData_1 = Object.assign({}, currentReadsData, { timedOut: false });
            // Gets all reads data from the store except the current reads.
            var otherReadsData = reads.filter(function (d) {
                return d.guid !== newReadsData_1.guid ||
                    d.startDate.toString() !== dateRange_1.startDate.toString() &&
                        d.endDate.toString() !== dateRange_1.endDate.toString();
            });
            return Object.assign({}, state, { data: otherReadsData.concat(newReadsData_1) });
        default:
            return state;
    }
}
//# sourceMappingURL=reads-reducer.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export comparisonReducerMap */
/* harmony export (immutable) */ __webpack_exports__["a"] = comparisonReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(27);

var comparisonReducerMap = {
    comparison: comparisonReducer
};
function comparisonReducer(state, action) {
    if (state === void 0) { state = { data: [], loading: false, neighborhoodGroup: {} }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_COMPARISON_READS */]:
            if (!action.payload) {
                return Object.assign({}, state, { data: state.data, loading: false });
            }
            var _a = action.payload, _b = _a.guid, guid_1 = _b === void 0 ? null : _b, _c = _a.startDate, startDate_1 = _c === void 0 ? null : _c, _d = _a.endDate, endDate_1 = _d === void 0 ? null : _d;
            var filteredData = state.data.filter(function (d) {
                return d.guid !== guid_1 ||
                    d.startDate.toString() !== startDate_1.toString() ||
                    d.endDate.toString() !== endDate_1.toString();
            });
            return Object.assign({}, state, { data: filteredData.concat(action.payload) }, { loading: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["t" /* LOADING_COMPARISON_READS */]:
            return Object.assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["H" /* RESET_COMPARISON_TIMEOUT */]:
            var dateRange_1 = action.payload.dateRange;
            var meterGuid_1 = action.payload.guid;
            var comparisonReads = state.data;
            var currentComparisonData = comparisonReads.find(function (read) {
                return read.guid === meterGuid_1 &&
                    read.startDate.toString() === dateRange_1.startDate.toString() &&
                    read.endDate.toString() === dateRange_1.endDate.toString();
            });
            if (!currentComparisonData) {
                return Object.assign({}, state);
            }
            var newComparisonData_1 = Object.assign({}, currentComparisonData, { timedOut: false });
            var otherComparisonData = comparisonReads.filter(function (d) {
                return d.guid !== newComparisonData_1.guid ||
                    d.startDate.toString() !== dateRange_1.startDate.toString() &&
                        d.endDate.toString() !== dateRange_1.endDate.toString();
            });
            return Object.assign({}, state, { data: otherComparisonData.concat(newComparisonData_1) });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* ADD_NEIGHBORHOOD_GROUP */]:
            return Object.assign({}, state, { neighborhoodGroup: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=comparison-reducer.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export providerReducerMap */
/* harmony export (immutable) */ __webpack_exports__["a"] = providerReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(27);

var providerReducerMap = {
    providers: providerReducer
};
function providerReducer(state, action) {
    if (state === void 0) { state = { providerTypes: [], provider: {} }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* ADD_METER_GUID */]:
            var newMeterProvider = Object.assign({}, state.provider, { guid: action.payload });
            return Object.assign({}, state, { provider: newMeterProvider });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* ADD_PROVIDERS */]:
            return Object.assign({}, state, { providerTypes: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_22" /* UPDATE_PROVIDER_COUNTRIES */]:
            var newProviderCountries = Object.assign({}, state.provider, { countries: action.payload, regions: null, serviceProviders: null, plans: null });
            return Object.assign({}, state, { provider: newProviderCountries });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_24" /* UPDATE_PROVIDER_REGIONS */]:
            var newProviderRegions = Object.assign({}, state.provider, { regions: action.payload, serviceProviders: null, plans: null });
            return Object.assign({}, state, { provider: newProviderRegions });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_21" /* UPDATE_PROVIDERS */]:
            var newProviderProviders = Object.assign({}, state.provider, { serviceProviders: action.payload, plans: null });
            return Object.assign({}, state, { provider: newProviderProviders });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["_23" /* UPDATE_PROVIDER_PLANS */]:
            var newProviderPlans = Object.assign({}, state.provider, { plans: action.payload });
            return Object.assign({}, state, { provider: newProviderPlans });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["J" /* RESET_PROVIDERS */]:
            return Object.assign({}, state, { provider: {} });
        default:
            return state;
    }
}
//# sourceMappingURL=provider-reducer.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export uiControlsReducerMap */
/* harmony export (immutable) */ __webpack_exports__["a"] = uiControlsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(27);

var uiControlsReducerMap = {
    uiControls: uiControlsReducer
};
function uiControlsReducer(state, action) {
    if (state === void 0) { state = { sideMenuOpen: false }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["R" /* SIDE_MENU_OPEN */]:
            return Object.assign({}, state, { sideMenuOpen: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["Q" /* SIDE_MENU_CLOSE */]:
            return Object.assign({}, state, { sideMenuOpen: false });
        default:
            return state;
    }
}
//# sourceMappingURL=ui-controls-reducer.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meter_effects__ = __webpack_require__(670);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__meter_effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comparison_effects__ = __webpack_require__(907);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__comparison_effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reads_effects__ = __webpack_require__(908);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__reads_effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__provider_effects__ = __webpack_require__(909);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__provider_effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_effects__ = __webpack_require__(910);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__user_effects__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromPromise__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_services__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MeterEffects = /** @class */ (function () {
    function MeterEffects(_actions$, _db, _storage, _toastCtrl, _storeServices) {
        var _this = this;
        this._actions$ = _actions$;
        this._db = _db;
        this._storage = _storage;
        this._toastCtrl = _toastCtrl;
        this._storeServices = _storeServices;
        /**
         * Handles load meters action.
         *
         * Updates the store with data from cache if found.
         * Otherwise, dispatch load from db action to fetch from the API.
         *
         * @memberof MainEffects
         */
        this.checkCacheAndThenLoadData$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions__["_1" /* TRIGGER_LOAD_METERS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (user) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].combineLatest([
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].fromPromise(
                // Check if meter data is stored locally by uid as key.
                _this._storage.get(user.uid).then(function (cachedData) {
                    return cachedData || {};
                })),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(user)
            ]);
        })
            .map(function (values) {
            var cachedData = values[0], _a = values[1], user = _a === void 0 ? null : _a;
            var _b = cachedData.meters, meters = _b === void 0 ? [] : _b, _c = cachedData.lastUpdatedDate, lastUpdatedDate = _c === void 0 ? null : _c;
            // Check if retention policy is expired.
            var cachePolicyExpired = false;
            if (lastUpdatedDate) {
                var cacheDuration = __WEBPACK_IMPORTED_MODULE_12__environments__["a" /* environment */].cacheDuration;
                cachePolicyExpired = __WEBPACK_IMPORTED_MODULE_3_moment__(lastUpdatedDate).add(cacheDuration, "m").toDate() < new Date();
            }
            // Load data from database.
            if (!meters.length || !lastUpdatedDate || cachePolicyExpired) {
                return new __WEBPACK_IMPORTED_MODULE_14__actions__["B" /* LoadMeters */](user);
            }
            // Load data from cache.
            return new __WEBPACK_IMPORTED_MODULE_14__actions__["l" /* AddMeters */](meters);
        });
        /**
         * Handles load from database action.
         *
         * Fetches meter data from Firebase using uid.
         *
         * @memberof MainEffects
         */
        this.loadMetersFromDatabase$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions__["w" /* LOAD_METERS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (user) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].combineLatest([
                _this._db.getOrgPathForUser(user.uid),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(user)
            ]);
        })
            .switchMap(function (values) {
            var orgPath = values[0], user = values[1];
            var updatedUser = Object.assign({}, user, { orgPath: orgPath });
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].combineLatest([
                _this._db.getMetersForOrg(orgPath),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(updatedUser)
            ]);
        })
            .map(function (values) {
            var _a = values[0], meters = _a === void 0 ? [] : _a, user = values[1];
            // Load one meter at a time.
            return new __WEBPACK_IMPORTED_MODULE_14__actions__["A" /* LoadMeter */]({ meters: meters, user: user });
        });
        /**
         * Loads meters one at a time.
         *
         * @memberof MeterEffects
         */
        this.loadOneMeterAtATime$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions__["v" /* LOAD_METER */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            var _a = data.meters, meters = _a === void 0 ? [] : _a, user = data.user;
            var firstMeter = meters.length ? meters[0] : null;
            var remainingMeters = meters.slice(1);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].combineLatest([
                firstMeter ? _this._db.getReadsForMeters([firstMeter]) : __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(null),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(user),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(remainingMeters)
            ]);
        })
            .switchMap(function (values) {
            var meter = values[0], user = values[1], remainingMeters = values[2];
            var activeMeter = meter && meter.length ? meter[0] : null;
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].combineLatest([
                activeMeter ? _this._db.getProviderForMeters([activeMeter]) : __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(null),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(user),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(remainingMeters)
            ]);
        })
            .flatMap(function (values) {
            var meter = values[0], user = values[1], remainingMeters = values[2];
            var activeMeter = meter && meter.length ? meter[0] : null;
            if (!remainingMeters.length && !activeMeter) {
                // Store meter data locally by uid as key.
                _this._storeServices.selectMeters().take(1).subscribe(function (data) {
                    _this._storage.set(user.uid, {
                        meters: data,
                        lastUpdatedDate: new Date()
                    });
                });
                // At this point, all meters are loaded.
                return [new __WEBPACK_IMPORTED_MODULE_14__actions__["j" /* AddMeter */](null)];
            }
            // Calculates actual cost and usage.
            var newMeter = activeMeter
                ? __WEBPACK_IMPORTED_MODULE_13__helpers__["b" /* CostHelper */].calculateCostAndUsageForMeters([activeMeter])[0]
                : {};
            // Dispatch actions to update the store.
            return [
                // Add meter to store.
                new __WEBPACK_IMPORTED_MODULE_14__actions__["j" /* AddMeter */](newMeter),
                // Dispatch the same action.
                new __WEBPACK_IMPORTED_MODULE_14__actions__["A" /* LoadMeter */]({ meters: remainingMeters, user: user }),
                // Update user in store
                new __WEBPACK_IMPORTED_MODULE_14__actions__["_31" /* UpdateUser */](user)
            ];
        });
        /**
         * Handles TRIGGER_UPDATE_METER_SETTINGS action and
         * updates meter settings in the store.
         */
        this.updateMeterSettings$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions__["_5" /* TRIGGER_UPDATE_METER_SETTINGS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            var _a = data.meter, meter = _a === void 0 ? null : _a, _b = data.user, user = _b === void 0 ? null : _b;
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].combineLatest([
                _this._db.updateMeterSettings(meter, user),
                __WEBPACK_IMPORTED_MODULE_5_rxjs_rx__["Observable"].of(user)
            ]);
        })
            .map(function (data) {
            var _a = data[0], meter = _a === void 0 ? [] : _a, user = data[1];
            // Refreshes reads for this meter.
            return new __WEBPACK_IMPORTED_MODULE_14__actions__["_17" /* TriggerUpdateMeterReads */]({ meter: meter, user: user });
        });
        /**
         * Handles ADD_METER action and
         * adds meter to the store.
         */
        this.addMeter$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions__["U" /* TRIGGER_ADD_METER */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            var _a = data.meter, meter = _a === void 0 ? null : _a, _b = data.user, user = _b === void 0 ? null : _b;
            _this._presentToast(meter._name, "adding");
            return _this._db.addMeter(meter, user);
        })
            .switchMap(function (meter) {
            return _this._db.getProviderForMeters([meter]);
        })
            .switchMap(function (meter) {
            // Gets reads from database for given meter.
            return _this._db.getReadsForMeters(meter);
        })
            .map(function (meter) {
            var newMeter = __WEBPACK_IMPORTED_MODULE_13__helpers__["b" /* CostHelper */].calculateCostAndUsageForMeters([meter[0]]);
            _this._presentToast(meter[0]._name, "completed");
            return new __WEBPACK_IMPORTED_MODULE_14__actions__["j" /* AddMeter */](newMeter[0]);
        });
        /**
         * Handles VALIDATE_METER actions and
         * adds meterGuid to the state.provider.
         */
        this.validateMeter$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions__["_6" /* TRIGGER_VALIDATE_METER */])
            .map(function (action) { return action.payload; })
            .switchMap(function (meterId) {
            return _this._db.findMeterById(meterId);
        })
            .map(function (meterGuid) {
            return new __WEBPACK_IMPORTED_MODULE_14__actions__["k" /* AddMeterGuid */](meterGuid);
        });
        /**
         * Removes meter from database and store.
         */
        this.removeMeter$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_14__actions__["_3" /* TRIGGER_REMOVE_METER */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            var meter = data.meter, user = data.user;
            // Removes meter from database.
            return _this._db.deleteMeter(meter, user);
        })
            .map(function (meter) {
            _this._presentToast(meter._name, "removed");
            // Removes meter from store.
            return new __WEBPACK_IMPORTED_MODULE_14__actions__["L" /* RemoveMeter */](meter);
        });
    }
    /**
     * Handles meter Toasts.
     * @memberof MeterEffects
     */
    MeterEffects.prototype._presentToast = function (meterName, event) {
        var message = "Adding " + meterName + "...";
        if (event === "completed") {
            message = meterName + " was successfully added.";
        }
        if (event === "removed") {
            message = meterName + " was successfully removed.";
        }
        var toast = this._toastCtrl.create({
            message: message,
            duration: 2000,
            cssClass: "meter-toast",
            position: "top"
        });
        // removes any existing toasts
        toast.dismissAll();
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MeterEffects.prototype, "checkCacheAndThenLoadData$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MeterEffects.prototype, "loadMetersFromDatabase$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MeterEffects.prototype, "loadOneMeterAtATime$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MeterEffects.prototype, "updateMeterSettings$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MeterEffects.prototype, "addMeter$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MeterEffects.prototype, "validateMeter$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MeterEffects.prototype, "removeMeter$", void 0);
    MeterEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_11__providers__["b" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__store_services__["a" /* StoreServices */]])
    ], MeterEffects);
    return MeterEffects;
}());

//# sourceMappingURL=meter-effects.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_services__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__store_services__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cost_helper__ = __webpack_require__(540);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__cost_helper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_helper__ = __webpack_require__(258);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__chart_helper__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparisonEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_services__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__configs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ComparisonEffects = /** @class */ (function () {
    function ComparisonEffects(_actions$, _db, _storeServices) {
        var _this = this;
        this._actions$ = _actions$;
        this._db = _db;
        this._storeServices = _storeServices;
        this.getNeighborhoodReads$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions__["W" /* TRIGGER_COMPARISON_READS */])
            .map(function (action) { return action.payload; })
            .debounceTime(250)
            .switchMap(function (data) {
            var meter = data.meter, dateRange = data.dateRange;
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].combineLatest(_this._db.getNeighborhoodGroup(meter), __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(meter), __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(dateRange));
        })
            .switchMap(function (data) {
            var group = data[0], meter = data[1], dateRange = data[2];
            var neighborhoodGroupID = group && group.group_id ? group.group_id : null;
            var ncmpAvgGuid = neighborhoodGroupID ? "" + neighborhoodGroupID + __WEBPACK_IMPORTED_MODULE_10__configs__["j" /* neighborhoodConfigs */].NEIGHBORHOOD_COMP_AVG_GUID : null;
            var ncmpEffGuid = neighborhoodGroupID ? "" + neighborhoodGroupID + __WEBPACK_IMPORTED_MODULE_10__configs__["j" /* neighborhoodConfigs */].NEIGHBORHOOD_COMP_EFF_GUID : null;
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].combineLatest([
                __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(meter),
                __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(dateRange),
                _this._storeServices.selectComparisonReads().take(1),
                ncmpAvgGuid ? __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(ncmpAvgGuid) : __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(null),
                ncmpEffGuid ? __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(ncmpEffGuid) : __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(null)
            ]);
        })
            .map(function (data) {
            var meter = data[0], dateRange = data[1], reads = data[2], ncmpAvgGuid = data[3], ncmpEffGuid = data[4];
            return new __WEBPACK_IMPORTED_MODULE_12__actions__["s" /* CheckComparisonReads */]([meter, dateRange, reads, ncmpAvgGuid, ncmpEffGuid]);
        });
        this.checkNeighborhoodReads$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions__["r" /* CHECK_COMPARISON_READS */])
            .map(function (action) { return action.payload; })
            .map(function (data) {
            var meter = data[0], dateRange = data[1], reads = data[2], ncmpAvgGuid = data[3], ncmpEffGuid = data[4];
            var startDate = dateRange.startDate, endDate = dateRange.endDate;
            // Check if data is available in the store.
            var storeData = reads.find(function (read) {
                return read.guid === meter._guid &&
                    read.startDate.toString() === startDate.toString() &&
                    read.endDate.toString() === endDate.toString();
            });
            var avgCosts = storeData ? storeData.avgCosts : null;
            var effCosts = storeData ? storeData.effCosts : null;
            var usageCosts = storeData ? storeData.usageCosts : null;
            var calcReads = storeData ? storeData.calcReads : [];
            var timedOut = storeData ? storeData.timedOut : false;
            if (timedOut) {
                var payload = {
                    guid: meter._guid,
                    startDate: startDate,
                    endDate: endDate,
                    usageCosts: usageCosts,
                    avgCosts: avgCosts,
                    effCosts: effCosts,
                    calcReads: calcReads,
                    rank: storeData.rank,
                    timedOut: timedOut
                };
                // Request has timed out.
                return new __WEBPACK_IMPORTED_MODULE_12__actions__["i" /* AddComparison */](payload);
            }
            if (avgCosts && effCosts && calcReads.length) {
                // Get data from store.
                return new __WEBPACK_IMPORTED_MODULE_12__actions__["i" /* AddComparison */](null);
            }
            // Get data from API.
            return new __WEBPACK_IMPORTED_MODULE_12__actions__["q" /* BeginComparisonReads */]([meter, dateRange, ncmpAvgGuid, ncmpEffGuid]);
        });
        this.beginNeighborhoodReads$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions__["p" /* BEGIN_COMPARISON_READS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            var meter = data[0], dateRange = data[1], ncmpAvgGuid = data[2], ncmpEffGuid = data[3];
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].combineLatest([
                __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(meter),
                __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(dateRange),
                _this._db.getReadsByDateRange(meter._guid, dateRange),
                _this._db.getReadsByNeighborhood(ncmpAvgGuid, dateRange),
                _this._db.getReadsByNeighborhood(ncmpEffGuid, dateRange),
                _this._db.getNeighborhoodComparisonRanks(meter, dateRange),
                // Whether or not request has timed out.
                __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of(false)
            ])
                .take(1)
                .timeout(__WEBPACK_IMPORTED_MODULE_11__environments__["a" /* environment */].apiTimeout) // Times out if nothing comes back.
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__["Observable"].of([meter, dateRange, [], [], [], null, true]); });
        })
            .map(function (data) {
            var meter = data[0], dateRange = data[1], _a = data[2], usage = _a === void 0 ? [] : _a, _b = data[3], avg = _b === void 0 ? [] : _b, _c = data[4], eff = _c === void 0 ? [] : _c, rank = data[5], _d = data[6], timedOut = _d === void 0 ? false : _d;
            var startDate = dateRange.startDate, endDate = dateRange.endDate;
            // No need to display chart if avg and eff data is not available or request timed out.
            if ((!avg.length && !eff.length) || timedOut) {
                var payload_1 = {
                    guid: meter._guid,
                    startDate: startDate,
                    endDate: endDate,
                    usageCosts: null,
                    avgCosts: null,
                    effCosts: null,
                    calcReads: [],
                    rank: rank,
                    timedOut: timedOut
                };
                return new __WEBPACK_IMPORTED_MODULE_12__actions__["i" /* AddComparison */](payload_1);
            }
            // Calculate deltas and costs of average data.
            var avgResult = _this._calculateDeltasAndCosts(avg, dateRange, meter);
            var avgDeltas = avgResult.deltas;
            var avgCosts = avgResult.costs;
            // Calculate deltas and costs of efficiency data.
            var effResult = _this._calculateDeltasAndCosts(eff, dateRange, meter);
            var effDeltas = effResult.deltas;
            var effCosts = effResult.costs;
            // consumption data
            var useDeltas = [];
            var usageCosts = null;
            if (usage.length) {
                var rawDeltas = __WEBPACK_IMPORTED_MODULE_13__helpers__["a" /* ChartHelper */].getDeltas(usage);
                var normalizedDeltas = __WEBPACK_IMPORTED_MODULE_13__helpers__["a" /* ChartHelper */].normalizeData(rawDeltas);
                useDeltas = normalizedDeltas.length ? __WEBPACK_IMPORTED_MODULE_13__helpers__["a" /* ChartHelper */].groupDeltasByTimeSpan(dateRange, normalizedDeltas) : [];
                usageCosts = rawDeltas.length ? __WEBPACK_IMPORTED_MODULE_13__helpers__["b" /* CostHelper */].calculateCostFromDeltas(meter, rawDeltas) : null;
            }
            var calcReads = [];
            var loopDeltas = useDeltas.length ? useDeltas : avgDeltas;
            for (var i = 0; i < loopDeltas.length; i++) {
                // Check if consumption data is available.
                // If not available, show average and efficiency data in chart only.
                if (!useDeltas.length) {
                    calcReads.push({
                        date: loopDeltas[i].date,
                        line2: avgDeltas[i].line1 || 0,
                        line3: effDeltas[i].line1 || 0
                    });
                }
                else {
                    calcReads.push({
                        date: loopDeltas[i].date,
                        line1: effDeltas[i].line1 || 0,
                        line2: useDeltas[i].line1 || 0,
                        line3: avgDeltas[i].line1 || 0
                    });
                }
            }
            var payload = {
                guid: meter._guid,
                startDate: startDate,
                endDate: endDate,
                usageCosts: usageCosts,
                avgCosts: avgCosts,
                effCosts: effCosts,
                calcReads: calcReads,
                rank: rank,
                timedOut: timedOut
            };
            return new __WEBPACK_IMPORTED_MODULE_12__actions__["i" /* AddComparison */](payload);
        });
    }
    /**
     * Calculates deltas and costs from given array containing reads.
     *
     * TODO: Needs to declare an interface for the return type.
     * @param data
     * @param dateRange
     * @param meter
     */
    ComparisonEffects.prototype._calculateDeltasAndCosts = function (data, dateRange, meter) {
        var deltas = [];
        var costs = null;
        if (!data.length) {
            return { deltas: [], costs: null };
        }
        var lineData = data.map(function (d) {
            return {
                date: d.date,
                line1: d.delta
            };
        });
        // group efficiency data by time span
        deltas = __WEBPACK_IMPORTED_MODULE_13__helpers__["a" /* ChartHelper */].groupDeltasByTimeSpan(dateRange, lineData);
        costs = deltas.length ? __WEBPACK_IMPORTED_MODULE_13__helpers__["b" /* CostHelper */].calculateCostFromDeltas(meter, deltas) : null;
        return { deltas: deltas, costs: costs };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ComparisonEffects.prototype, "getNeighborhoodReads$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ComparisonEffects.prototype, "checkNeighborhoodReads$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ComparisonEffects.prototype, "beginNeighborhoodReads$", void 0);
    ComparisonEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_9__providers__["b" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__store_services__["a" /* StoreServices */]])
    ], ComparisonEffects);
    return ComparisonEffects;
}());

//# sourceMappingURL=comparison-effects.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_services__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_timeout__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ReadsEffects = /** @class */ (function () {
    function ReadsEffects(_actions$, _db, _storeServices, _storage) {
        var _this = this;
        this._actions$ = _actions$;
        this._db = _db;
        this._storeServices = _storeServices;
        this._storage = _storage;
        /**
         * Handles TRIGGER_UPDATE_METER_READS action and
         * updates reads and consumption cost for a particular meter.
         */
        this.updateReadsForAMeter$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_13__actions__["_4" /* TRIGGER_UPDATE_METER_READS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            if (!data || !data.meter) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].combineLatest([
                    __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(null),
                    __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of([]),
                    __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(null)
                ]);
            }
            else {
                var _a = data.meter, meter = _a === void 0 ? null : _a, _b = data.user, user = _b === void 0 ? null : _b;
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].combineLatest([
                    __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(meter),
                    // Gets reads from database for given meter.
                    _this._db.getReadsForMeter(meter._guid, meter._billing_start),
                    __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(user)
                ]);
            }
        })
            .map(function (values) {
            var _a = values[0], meter = _a === void 0 ? null : _a, _b = values[1], reads = _b === void 0 ? [] : _b, _c = values[2], user = _c === void 0 ? null : _c;
            if (!meter) {
                // Nothing gets updated.
                return new __WEBPACK_IMPORTED_MODULE_13__actions__["_26" /* UpdateMeter */](null);
            }
            var deltas = __WEBPACK_IMPORTED_MODULE_12__helpers__["a" /* ChartHelper */].getDeltas(reads);
            var cost = deltas.length ? __WEBPACK_IMPORTED_MODULE_12__helpers__["b" /* CostHelper */].calculateCostFromDeltas(meter, deltas) : {};
            var newMeter = Object.assign({}, meter, {
                _actualUsageCost: cost.totalCost || 0,
                _usage: cost.totalDelta || 0
            });
            // Update local storage.
            _this._storage.get(user.uid).then(function (cachedData) {
                var _a = cachedData.meters, meters = _a === void 0 ? [] : _a;
                for (var _i = 0, meters_1 = meters; _i < meters_1.length; _i++) {
                    var meter_1 = meters_1[_i];
                    if (meter_1._guid === newMeter._guid && meter_1._name === newMeter._name) {
                        meter_1 = newMeter;
                        break;
                    }
                }
                _this._storage.set(user.uid, { meters: meters });
            });
            return new __WEBPACK_IMPORTED_MODULE_13__actions__["_26" /* UpdateMeter */](newMeter);
        });
        /**
         * Handles LOAD_READS_BY_METERS action and
         * updates reads for all meters.
         */
        this.updateReadsForAllMeters$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_13__actions__["y" /* LOAD_READS_BY_METERS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            var _a = data.meters, meters = _a === void 0 ? [] : _a, _b = data.user, user = _b === void 0 ? null : _b;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].combineLatest([
                _this._db.getReadsForMeters(meters),
                __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(user)
            ]);
        })
            .map(function (values) {
            var _a = values[0], meters = _a === void 0 ? [] : _a, _b = values[1], user = _b === void 0 ? null : _b;
            // Calculates actual cost and usage.
            var newMeters = meters.length ? __WEBPACK_IMPORTED_MODULE_12__helpers__["b" /* CostHelper */].calculateCostAndUsageForMeters(meters) : [];
            // Updates local storage with new meters data.
            _this._storage.set(user.uid, { meters: newMeters, lastUpdatedDate: new Date() });
            return new __WEBPACK_IMPORTED_MODULE_13__actions__["l" /* AddMeters */](newMeters);
        });
        /**
         * Handles LOAD_READS_BY_DATE action and
         * updates reads in the store using meter guid, start and end dates.
         */
        this.updateReadsByDate$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_13__actions__["x" /* LOAD_READS_BY_DATE */])
            .map(function (action) { return action.payload; })
            .debounceTime(250)
            .switchMap(function (values) {
            var meter = values.meter, dateRange = values.dateRange;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].combineLatest([
                __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(meter),
                __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(dateRange),
                _this._storeServices.selectReadsData().take(1),
            ]);
        })
            .switchMap(function (data) {
            var meter = data[0], dateRange = data[1], _a = data[2], reads = _a === void 0 ? [] : _a;
            var startDate = dateRange.startDate, endDate = dateRange.endDate;
            // Get reads data from the store if available.
            var storeData = reads.find(function (read) {
                return read.guid === meter._guid &&
                    read.startDate.toString() === startDate.toString() &&
                    read.endDate.toString() === endDate.toString();
            });
            var isDataAvail = storeData && !storeData.timedOut;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].combineLatest([
                __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(meter),
                __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(dateRange),
                // if data is available in the store, pass it down. Otherwise, get it from Firebase.
                isDataAvail ? __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(storeData) : _this._db.getReadsByDateRange(meter._guid, dateRange),
                __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of(isDataAvail)
            ])
                .take(1)
                .timeout(__WEBPACK_IMPORTED_MODULE_11__environments__["a" /* environment */].apiTimeout) // Times out if nothing comes back.
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_rx__["Observable"].of([meter, dateRange, [], false, true]); });
        })
            .map(function (values) {
            var meter = values[0], dateRange = values[1], data = values[2], _a = values[3], isDataAvail = _a === void 0 ? false : _a, _b = values[4], timedOut = _b === void 0 ? false : _b;
            var startDate = dateRange.startDate, endDate = dateRange.endDate;
            if (isDataAvail) {
                return new __WEBPACK_IMPORTED_MODULE_13__actions__["n" /* AddReads */](null);
            }
            if (timedOut) {
                var payload_1 = {
                    guid: meter._guid,
                    startDate: startDate,
                    endDate: endDate,
                    deltas: [],
                    cost: null,
                    timedOut: timedOut
                };
                return new __WEBPACK_IMPORTED_MODULE_13__actions__["n" /* AddReads */](payload_1);
            }
            var rawDeltas = data.length ? __WEBPACK_IMPORTED_MODULE_12__helpers__["a" /* ChartHelper */].getDeltas(data) : [];
            // Removes abnormally large values.
            var normalizedDeltas = rawDeltas.length ? __WEBPACK_IMPORTED_MODULE_12__helpers__["a" /* ChartHelper */].normalizeData(rawDeltas) : [];
            // Puts values into date buckets by time span.
            var deltas = normalizedDeltas.length ? __WEBPACK_IMPORTED_MODULE_12__helpers__["a" /* ChartHelper */].groupDeltasByTimeSpan(dateRange, normalizedDeltas) : [];
            var cost = rawDeltas.length ? __WEBPACK_IMPORTED_MODULE_12__helpers__["b" /* CostHelper */].calculateCostFromDeltas(meter, rawDeltas) : 0;
            var payload = {
                guid: meter._guid,
                startDate: startDate,
                endDate: endDate,
                deltas: deltas,
                cost: cost,
                timedOut: timedOut
            };
            return new __WEBPACK_IMPORTED_MODULE_13__actions__["n" /* AddReads */](payload);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ReadsEffects.prototype, "updateReadsForAMeter$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ReadsEffects.prototype, "updateReadsForAllMeters$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ReadsEffects.prototype, "updateReadsByDate$", void 0);
    ReadsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_10__providers__["b" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__store_services__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ReadsEffects);
    return ReadsEffects;
}());

//# sourceMappingURL=reads-effects.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProviderEffects = /** @class */ (function () {
    function ProviderEffects(_actions$, _db) {
        var _this = this;
        this._actions$ = _actions$;
        this._db = _db;
        /**
         * Handles GetProviders action.
         */
        this.addProviders$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["V" /* TRIGGER_ADD_PROVIDERS */])
            .switchMap(function () {
            return _this._db.getProviderTypes();
        })
            .map(function (providersType) {
            return new __WEBPACK_IMPORTED_MODULE_3__actions__["m" /* AddProviders */](providersType);
        });
        this.getProviderCountries$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["Y" /* TRIGGER_GET_PROVIDER_COUNTRIES */])
            .map(function (action) { return action.payload; })
            .switchMap(function (utilityType) {
            return _this._db.getProviderRequestInfo(utilityType);
        })
            .map(function (countries) {
            return new __WEBPACK_IMPORTED_MODULE_3__actions__["_27" /* UpdateProviderCountries */](countries);
        });
        this.getProviderRegions$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["_0" /* TRIGGER_GET_PROVIDER_REGIONS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (path) {
            return _this._db.getProviderRequestInfo(path);
        })
            .map(function (regions) {
            return new __WEBPACK_IMPORTED_MODULE_3__actions__["_29" /* UpdateProviderRegions */](regions);
        });
        this.getProviders$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["X" /* TRIGGER_GET_PROVIDERS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (path) {
            return _this._db.getProviderRequestInfo(path);
        })
            .map(function (regions) {
            return new __WEBPACK_IMPORTED_MODULE_3__actions__["_30" /* UpdateProviders */](regions);
        });
        this.getProviderPlans$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["Z" /* TRIGGER_GET_PROVIDER_PLANS */])
            .map(function (action) { return action.payload; })
            .switchMap(function (path) {
            return _this._db.getProviderRequestInfo(path);
        })
            .map(function (plans) {
            return new __WEBPACK_IMPORTED_MODULE_3__actions__["_28" /* UpdateProviderPlans */](plans);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ProviderEffects.prototype, "addProviders$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ProviderEffects.prototype, "getProviderCountries$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ProviderEffects.prototype, "getProviderRegions$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ProviderEffects.prototype, "getProviders$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ProviderEffects.prototype, "getProviderPlans$", void 0);
    ProviderEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* DatabaseProvider */]])
    ], ProviderEffects);
    return ProviderEffects;
}());

//# sourceMappingURL=provider-effects.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEffects = /** @class */ (function () {
    function UserEffects(_actions$, _auth) {
        var _this = this;
        this._actions$ = _actions$;
        this._auth = _auth;
        this.logOutUser$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["_2" /* TRIGGER_PREP_FOR_LOGOUT */])
            .map(function () {
            return _this._auth.logOutUser();
        });
        this.resetPassword$ = this._actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["I" /* RESET_PASSWORD */])
            .map(function (action) { return action.payload; })
            .switchMap(function (emailAdd) {
            return _this._auth.resetPassword(emailAdd);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "logOutUser$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "resetPassword$", void 0);
    UserEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */]])
    ], UserEffects);
    return UserEffects;
}());

//# sourceMappingURL=user-effects.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_services_store_services__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, keyboard, _storeServices) {
        this._storeServices = _storeServices;
        this.rootPage = "LoginPage";
        platform.ready().then(function () {
            statusBar.overlaysWebView(false);
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString("#EDEFF2");
            keyboard.disableScroll(true);
            if (platform.is("android")) {
                statusBar.overlaysWebView(false);
                statusBar.styleDefault();
            }
        });
    }
    MyApp.prototype._closeMenu = function () {
        this._storeServices.sideMenuClose();
    };
    MyApp.prototype._openMenu = function () {
        this._storeServices.sideMenuOpen();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Mandah/Documents/Github/myApp/src/app/app.html"*/'<ion-nav #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n<!--Side Menu-->\n<ion-menu\n  type="overlay"\n  [content]="content"\n  (ionClose)="_closeMenu()"\n  (ionDrag)="_openMenu()"\n>\n  <menu-items></menu-items>\n</ion-menu>\n'/*ion-inline-end:"/Users/Mandah/Documents/Github/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4__store_services_store_services__["a" /* StoreServices */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_services_store_services__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuItemsComponent = /** @class */ (function () {
    function MenuItemsComponent(_storeServices, _app) {
        this._storeServices = _storeServices;
        this._app = _app;
        this._menuItems = [
            { title: "Add A Meter", component: "AddMeterPage", icon: "md-add" },
            { title: "Log Out", component: "LoginPage", icon: "log-out" }
        ];
    }
    MenuItemsComponent.prototype._closeMenu = function () {
        this._storeServices.sideMenuClose();
    };
    MenuItemsComponent.prototype._openMenu = function () {
        this._storeServices.sideMenuOpen();
    };
    MenuItemsComponent.prototype._openPage = function (menuItems) {
        this._closeMenu();
        var navigate = this._app.getActiveNavs()[0];
        if (menuItems.title === "Log Out") {
            this._storeServices.logOutUser();
            navigate.setRoot("LoginPage");
            return;
        }
        navigate.push("AddMeterPage");
    };
    MenuItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "menu-items",template:/*ion-inline-start:"/Users/Mandah/Documents/Github/myApp/src/components/menu-items/menu-items.html"*/'<ion-header class="side-menu-header" no-border>\n  <ion-navbar class="side-menu-navbar" color="light" [hideBackButton]="true">\n    <ion-title class="side-menu-title"><mark>vu</mark>tiliti</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="menu-content">\n  <ion-list class="menu-items">\n    <button menuClose ion-item detail-none *ngFor="let item of _menuItems" (click)="_openPage(item)">\n      <ion-icon name="{{item.icon}}" item-start></ion-icon>\n      {{item.title}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Mandah/Documents/Github/myApp/src/components/menu-items/menu-items.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__store_services_store_services__["a" /* StoreServices */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], MenuItemsComponent);
    return MenuItemsComponent;
}());

//# sourceMappingURL=menu-items.js.map

/***/ })

},[496]);
//# sourceMappingURL=main.js.map