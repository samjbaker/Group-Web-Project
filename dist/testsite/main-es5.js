(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/sambaker/Documents/MSc_Work/Software_Eng_Group_project/project/Front_end/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "05rl":
    /*!***********************************************************************!*\
      !*** ./src/app/desktop/middle-section/news-feed/news-feed.service.ts ***!
      \***********************************************************************/

    /*! exports provided: NewsFeedService */

    /***/
    function rl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsFeedService", function () {
        return NewsFeedService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var NewsFeedService = /*#__PURE__*/function () {
        function NewsFeedService(http) {
          _classCallCheck(this, NewsFeedService);

          this.http = http;
        }

        _createClass(NewsFeedService, [{
          key: "getFeeds",
          value: function getFeeds() {
            return this.http.get("http://localhost:3000/api");
          }
        }, {
          key: "addPost",
          value: function addPost(post) {
            return this.http.post("http://localhost:3000/api", post);
          }
        }]);

        return NewsFeedService;
      }();

      NewsFeedService.ɵfac = function NewsFeedService_Factory(t) {
        return new (t || NewsFeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      NewsFeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NewsFeedService,
        factory: NewsFeedService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "Eipy":
    /*!**************************************************************!*\
      !*** ./src/app/desktop/trendingbar/trendingbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: TrendingbarComponent */

    /***/
    function Eipy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrendingbarComponent", function () {
        return TrendingbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TrendingbarComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", i_r1, " ");
        }
      }

      var TrendingbarComponent = /*#__PURE__*/function () {
        function TrendingbarComponent() {
          _classCallCheck(this, TrendingbarComponent);

          this.trends = ["I love soup", "Cats", "Jake Paul", "Simps", "Meghan Markle"];
        }

        _createClass(TrendingbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TrendingbarComponent;
      }();

      TrendingbarComponent.ɵfac = function TrendingbarComponent_Factory(t) {
        return new (t || TrendingbarComponent)();
      };

      TrendingbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TrendingbarComponent,
        selectors: [["app-trendingbar"]],
        decls: 5,
        vars: 1,
        consts: [[1, "trendingBarContainer"], [1, "title"], [1, "trends"], ["class", "individualTrend", 4, "ngFor", "ngForOf"], [1, "individualTrend"]],
        template: function TrendingbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Trending for you ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TrendingbarComponent_div_4_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trends);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".trendingBarContainer[_ngcontent-%COMP%] {\n  height: 85%;\n  width: 80%;\n  margin-left: 10%;\n  margin-top: 3%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3.5vh;\n  font-weight: bold;\n}\n\n.trends[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 80%;\n}\n\n.individualTrend[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  height: 15%;\n  width: 100%;\n  font-size: 2.5vh;\n  display: flex;\n  align-items: center;\n  font-weight: lighter;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyZW5kaW5nYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InRyZW5kaW5nYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyZW5kaW5nQmFyQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4NSU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMuNXZoO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRyZW5kcyB7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogODAlO1xufVxuXG4uaW5kaXZpZHVhbFRyZW5kIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGhlaWdodDogMTUlO1xuICB3aWR0aDoxMDAlO1xuICBmb250LXNpemU6IDIuNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "FsNL":
    /*!**************************************************!*\
      !*** ./src/app/desktop/about/about.component.ts ***!
      \**************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function FsNL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 14,
        vars: 0,
        consts: [[1, "container"], [1, "header"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nFakebook is a new site, designed to get us talking about social\nmedia. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " The site is designed to emulate the experience of using a social\nnetworking website like Facebook or Twitter. However, rather\nthan posts from real people, our site is populated by friendly\nbots. You can get involved too- try posting on the home page\nand see your post appear on the timeline! Your posts may then appear\nin the timelines of other users in the future, contributing to\nthe nonsense! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " On the timeline you\u2019ll also find fact boxes, offering thoughts\nabout how social media works, and how it may be affecting you.\nYou might find this just as addictive as a real social media\nsite- and that\u2019s the point. On fakebook, social media\u2019s addictive\nqualities won\u2019t just be driving engagement- they\u2019ll be helping\nyou to understand the modern internet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " On fakebook, we\u2019re using some of the features that keep you\nengaged on social media to start conversations about why social\nmedia works- and whether it\u2019s working for us.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\nFakebook. The posts are fake, but the addiction is real.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 100%;\n  width: 100%;\n  border-radius: 1vh;\n  padding: 6%;\n  overflow-y: auto;\n  font-weight: lighter;\n  font-size: 3vh;\n  line-height: 8vh;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 4vh;\n  font-weight: lighter;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxdmg7XG4gIHBhZGRpbmc6IDYlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG4gIGxpbmUtaGVpZ2h0OiA4dmg7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDR2aDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'fakebook';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./desktop/desktop.component */
      "uaOw");
      /* harmony import */


      var _desktop_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./desktop/leftsidebar/leftsidebar.component */
      "bJku");
      /* harmony import */


      var _desktop_trendingbar_trendingbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./desktop/trendingbar/trendingbar.component */
      "Eipy");
      /* harmony import */


      var _desktop_middle_section_middle_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./desktop/middle-section/middle-section.component */
      "bkLa");
      /* harmony import */


      var _desktop_middle_section_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./desktop/middle-section/news-feed/news-feed.component */
      "waFn");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _desktop_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./desktop/about/about.component */
      "FsNL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_4__["DesktopComponent"], _desktop_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_5__["LeftsidebarComponent"], _desktop_trendingbar_trendingbar_component__WEBPACK_IMPORTED_MODULE_6__["TrendingbarComponent"], _desktop_middle_section_middle_section_component__WEBPACK_IMPORTED_MODULE_7__["MiddleSectionComponent"], _desktop_middle_section_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_8__["NewsFeedComponent"], _desktop_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]],
          exports: [_desktop_desktop_component__WEBPACK_IMPORTED_MODULE_4__["DesktopComponent"], _desktop_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_5__["LeftsidebarComponent"], _desktop_trendingbar_trendingbar_component__WEBPACK_IMPORTED_MODULE_6__["TrendingbarComponent"], _desktop_middle_section_middle_section_component__WEBPACK_IMPORTED_MODULE_7__["MiddleSectionComponent"], _desktop_middle_section_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_8__["NewsFeedComponent"], _desktop_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]]
        });
      })();
      /***/

    },

    /***/
    "bJku":
    /*!**************************************************************!*\
      !*** ./src/app/desktop/leftsidebar/leftsidebar.component.ts ***!
      \**************************************************************/

    /*! exports provided: LeftsidebarComponent */

    /***/
    function bJku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeftsidebarComponent", function () {
        return LeftsidebarComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      var LeftsidebarComponent = /*#__PURE__*/function () {
        function LeftsidebarComponent() {
          _classCallCheck(this, LeftsidebarComponent);

          this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHome"];
          this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInfoCircle"];
        }

        _createClass(LeftsidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LeftsidebarComponent;
      }();

      LeftsidebarComponent.ɵfac = function LeftsidebarComponent_Factory(t) {
        return new (t || LeftsidebarComponent)();
      };

      LeftsidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LeftsidebarComponent,
        selectors: [["app-leftsidebar"]],
        decls: 7,
        vars: 2,
        consts: [[1, "content"], ["routerLink", "", 1, "link"], [3, "icon"], ["routerLink", "about", 1, "link"]],
        template: function LeftsidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \xA0\xA0Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \xA0\xA0About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faInfoCircle);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
        styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n}\n\n.link[_ngcontent-%COMP%] {\n  height: 20%;\n  margin-top: 25%;\n  font-size: 3.5vh;\n  display: flex;\n  align-items: center;\n  padding-left: 15%;\n  cursor: pointer;\n  text-decoration: none;\n  color: black;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xlZnRzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJsZWZ0c2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubGluayB7XG4gIGhlaWdodDogMjAlO1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIGZvbnQtc2l6ZTogMy41dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5mYS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "bkLa":
    /*!********************************************************************!*\
      !*** ./src/app/desktop/middle-section/middle-section.component.ts ***!
      \********************************************************************/

    /*! exports provided: MiddleSectionComponent */

    /***/
    function bkLa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiddleSectionComponent", function () {
        return MiddleSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./news-feed/news-feed.component */
      "waFn");

      var MiddleSectionComponent = /*#__PURE__*/function () {
        function MiddleSectionComponent() {
          _classCallCheck(this, MiddleSectionComponent);
        }

        _createClass(MiddleSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MiddleSectionComponent;
      }();

      MiddleSectionComponent.ɵfac = function MiddleSectionComponent_Factory(t) {
        return new (t || MiddleSectionComponent)();
      };

      MiddleSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MiddleSectionComponent,
        selectors: [["app-middle-section"]],
        decls: 1,
        vars: 0,
        template: function MiddleSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news-feed");
          }
        },
        directives: [_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_1__["NewsFeedComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWRkbGUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "uaOw":
    /*!**********************************************!*\
      !*** ./src/app/desktop/desktop.component.ts ***!
      \**********************************************/

    /*! exports provided: DesktopComponent */

    /***/
    function uaOw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesktopComponent", function () {
        return DesktopComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./leftsidebar/leftsidebar.component */
      "bJku");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _trendingbar_trendingbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./trendingbar/trendingbar.component */
      "Eipy");

      var DesktopComponent = /*#__PURE__*/function () {
        function DesktopComponent() {
          _classCallCheck(this, DesktopComponent);
        }

        _createClass(DesktopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DesktopComponent;
      }();

      DesktopComponent.ɵfac = function DesktopComponent_Factory(t) {
        return new (t || DesktopComponent)();
      };

      DesktopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DesktopComponent,
        selectors: [["app-desktop"]],
        decls: 14,
        vars: 0,
        consts: [[1, "home-container"], [1, "home-header"], [1, "home-header-content"], [1, "title"], [1, "description"], [1, "home-body"], [1, "leftSideBar"], [1, "middleSection"], [1, "trendingBar"]],
        template: function DesktopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FAKEBOOK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "a generative nonsense social media feed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-leftsidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-trendingbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_leftsidebar_leftsidebar_component__WEBPACK_IMPORTED_MODULE_1__["LeftsidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _trendingbar_trendingbar_component__WEBPACK_IMPORTED_MODULE_3__["TrendingbarComponent"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.home-container[_ngcontent-%COMP%] {\n  background-color: #F0F2F5;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%] {\n  height: 18vh;\n  width: 99vw;\n  margin: 1vh;\n  position: relative;\n  background-color: #435bee;\n  border-radius: 1vh;\n}\n.home-container[_ngcontent-%COMP%]   .home-body[_ngcontent-%COMP%] {\n  margin-left: 1vh;\n  height: 100%;\n  width: 99vw;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n}\n.home-container[_ngcontent-%COMP%]   .home-header-content[_ngcontent-%COMP%] {\n  margin-top: 4vh;\n  margin-left: 6vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.home-container[_ngcontent-%COMP%]   .home-header-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-family: monospace;\n  font-size: 5.5vh;\n  color: white;\n}\n.home-container[_ngcontent-%COMP%]   .home-header-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-family: monospace;\n  color: white;\n  font-size: 3vh;\n}\n.leftSideBar[_ngcontent-%COMP%] {\n  background-color: #96a5ff;\n  width: 13vw;\n  border-radius: 1vh;\n}\n.middleSection[_ngcontent-%COMP%] {\n  margin-left: 1vw;\n  margin-right: 1vw;\n  width: 64vw;\n  flex-direction: column;\n}\n.trendingBar[_ngcontent-%COMP%] {\n  background-color: #d2d8ff;\n  width: 20vw;\n  border-radius: 1vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vZGVza3RvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0Usc0JBQUE7QUNBRjtBREdBO0VBQWEsWUFBQTtBQ0NiO0FEQUE7RUFBTyxTQUFBO0VBQVcsaURBQUE7QUNLbEI7QUFWQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWFGO0FBWEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFhSjtBQVhFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBYUo7QUFYRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBYUo7QUFaSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFjTjtBQVpJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBY047QUFUQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWUY7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFZRjtBQVRBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFZRiIsImZpbGUiOiJkZXNrdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4qe1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuJHByaW1hcnktYnV0dG9uLWNvbG9yOiAjMjkzMDk3O1xuJHN1Y2Nlc3MtYnV0dG9uLWNvbG9yOiAjNDJCNzJBO1xuXG4kaGVhZGVyLWNvbG9yOiB3aGl0ZTtcbiRib2R5LWNvbG9yOiAjRjBGMkY1O1xuIiwiQGltcG9ydCBcInNyYy9zdHlsZXNcIjtcblxuLmhvbWUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmhvbWUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE4dmg7XG4gICAgd2lkdGg6IDk5dnc7XG4gICAgbWFyZ2luOiAxdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgOTEsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMXZoO1xuICB9XG4gIC5ob21lLWJvZHkge1xuICAgIG1hcmdpbi1sZWZ0OjF2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDk5dnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuaG9tZS1oZWFkZXItY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIG1hcmdpbi1sZWZ0OiA2dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogNS41dmg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAzdmg7XG4gICAgfVxuICB9XG59XG5cbi5sZWZ0U2lkZUJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTAsIDE2NSwgMjU1KTtcbiAgd2lkdGg6IDEzdnc7XG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcbn1cblxuLm1pZGRsZVNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMXZ3O1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgd2lkdGg6IDY0dnc7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50cmVuZGluZ0JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxNiwgMjU1KTtcbiAgd2lkdGg6IDIwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcbn1cbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "ubzj":
    /*!*******************************************************************************!*\
      !*** ./src/app/desktop/middle-section/news-feed/newsfeed-resolver.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: NewsfeedResolverService */

    /***/
    function ubzj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsfeedResolverService", function () {
        return NewsfeedResolverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _news_feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./news-feed.service */
      "05rl");

      var NewsfeedResolverService = /*#__PURE__*/function () {
        function NewsfeedResolverService(newsFeedService) {
          _classCallCheck(this, NewsfeedResolverService);

          this.newsFeedService = newsFeedService;
        }

        _createClass(NewsfeedResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            return this.newsFeedService.getFeeds();
          }
        }]);

        return NewsfeedResolverService;
      }();

      NewsfeedResolverService.ɵfac = function NewsfeedResolverService_Factory(t) {
        return new (t || NewsfeedResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_news_feed_service__WEBPACK_IMPORTED_MODULE_1__["NewsFeedService"]));
      };

      NewsfeedResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NewsfeedResolverService,
        factory: NewsfeedResolverService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _desktop_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./desktop/about/about.component */
      "FsNL");
      /* harmony import */


      var _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./desktop/desktop.component */
      "uaOw");
      /* harmony import */


      var _desktop_middle_section_middle_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./desktop/middle-section/middle-section.component */
      "bkLa");
      /* harmony import */


      var _desktop_middle_section_news_feed_newsfeed_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./desktop/middle-section/news-feed/newsfeed-resolver.service */
      "ubzj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_2__["DesktopComponent"],
        children: [{
          path: 'about',
          component: _desktop_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
        }, {
          path: '',
          component: _desktop_middle_section_middle_section_component__WEBPACK_IMPORTED_MODULE_3__["MiddleSectionComponent"],
          resolve: {
            feeds: _desktop_middle_section_news_feed_newsfeed_resolver_service__WEBPACK_IMPORTED_MODULE_4__["NewsfeedResolverService"]
          }
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "waFn":
    /*!*************************************************************************!*\
      !*** ./src/app/desktop/middle-section/news-feed/news-feed.component.ts ***!
      \*************************************************************************/

    /*! exports provided: NewsFeedComponent */

    /***/
    function waFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function () {
        return NewsFeedComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _news_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./news-feed.service */
      "05rl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function NewsFeedComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " @FAKEBOOK-FACT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feedbox_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", feedbox_r2.post_text, " ");
        }
      }

      function NewsFeedComponent_div_6_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsFeedComponent_div_6_ng_template_2_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.updateButtonColor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "fa-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feedbox_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" @", feedbox_r2.user_info[0].user_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", feedbox_r2.post_text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r5.heartColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.faHeart);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feedbox_r2.likes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.faComment);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feedbox_r2.no_comments);
        }
      }

      function NewsFeedComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewsFeedComponent_div_6_div_1_Template, 8, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NewsFeedComponent_div_6_ng_template_2_Template, 20, 8, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var feedbox_r2 = ctx.$implicit;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", feedbox_r2.is_fact == true)("ngIfElse", _r4);
        }
      }

      var NewsFeedComponent = /*#__PURE__*/function () {
        function NewsFeedComponent(activatedRoute, newsFeedService) {
          _classCallCheck(this, NewsFeedComponent);

          this.activatedRoute = activatedRoute;
          this.newsFeedService = newsFeedService;
          this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHeart"];
          this.faComment = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faComment"];
          this.feeds = [];
          this.colorflag = 0;
          this.heartColor = "rgb(150, 165, 255)";
        }

        _createClass(NewsFeedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.data.subscribe(function (data) {
              _this.feeds = data.feeds;
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            var _this2 = this;

            if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight * 0.75) {
              this.newsFeedService.getFeeds().subscribe(function (feeds) {
                var _this2$feeds;

                (_this2$feeds = _this2.feeds).push.apply(_this2$feeds, _toConsumableArray(feeds));
              });
            }
          }
        }, {
          key: "updateButtonColor",
          value: function updateButtonColor() {
            this.colorflag++;
            this.colorflag = this.colorflag % 2;

            if (this.colorflag == 0) {
              this.heartColor = "rgb(150, 165, 255)";
            } else {
              this.heartColor = "red";
            }
          }
        }, {
          key: "postMessage",
          value: function postMessage(form) {
            var message = form.controls['post_text'].value;

            if (message != null && message.length > 0) {
              this.feeds.unshift({
                "user_id": 100,
                "post_number": 100,
                "post_text": "" + message,
                "timestamp": "blah",
                "likes": 0,
                "is_fact": false,
                "fact_ref": "blah",
                "no_comments": 0,
                "user_info": [{
                  "user_id": 100,
                  "user_name": "You",
                  "pic_filename": "Je ne sais pas"
                }],
                "username": "You"
              });
              this.newsFeedService.addPost({
                "user_id": 0,
                "post_number": 0,
                "post_text": "" + message,
                "timestamp": "blah",
                "likes": 0,
                "is_fact": false,
                "fact_ref": "blah",
                "no_comments": 0
              }).subscribe();
            }

            form.resetForm();
          }
        }]);

        return NewsFeedComponent;
      }();

      NewsFeedComponent.ɵfac = function NewsFeedComponent_Factory(t) {
        return new (t || NewsFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_news_feed_service__WEBPACK_IMPORTED_MODULE_3__["NewsFeedService"]));
      };

      NewsFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NewsFeedComponent,
        selectors: [["app-news-feed"]],
        hostBindings: function NewsFeedComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NewsFeedComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            });
          }
        },
        decls: 7,
        vars: 1,
        consts: [[1, "writePost"], [3, "ngSubmit"], ["form", "ngForm"], ["rows", "2", "required", "", "ngModel", "", "name", "post_text", "placeholder", "What's happening"], ["type", "submit", "value", "post"], [1, "newsFeed", 3, "scroll"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "box"], ["class", "feed", "style", "background-color:rgb(224, 228, 255);border-radius: 1vh;", 4, "ngIf", "ngIfElse"], ["class", "feed"], ["elseBlock", ""], [1, "feed", 2, "background-color", "rgb(224, 228, 255)", "border-radius", "1vh"], [1, "feed_left"], ["src", "assets/profile_pic.png", "alt", "little_keanu"], [1, "feed_right"], [1, "username"], [1, "feed_content"], [1, "feed"], [1, "feed_content_post"], [1, "feed_content_text"], [1, "feed_content_footer"], [1, "heart-container"], [1, "heartButton", 3, "click"], [1, "heart", 3, "icon"], [1, "heart_number"], [1, "comment-container"], [1, "commentButton"], [1, "comment", 3, "icon"], [1, "comment_number"]],
        template: function NewsFeedComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewsFeedComponent_Template_form_ngSubmit_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

              return ctx.postMessage(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "textarea", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NewsFeedComponent_Template_div_scroll_5_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NewsFeedComponent_div_6_Template, 4, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.feeds);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]],
        styles: [".writePost[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 1vh;\n  height: 25%;\n  width: 100%;\n  position: relative;\n  flex-direction: column;\n}\n.writePost[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 96%;\n  font-size: 4vh;\n  background-color: #F0F2F5;\n  margin-top: 2%;\n  margin-left: 2%;\n  margin-bottom: 1%;\n  border: none;\n  resize: none;\n}\n.writePost[_ngcontent-%COMP%]   input[value=post][_ngcontent-%COMP%] {\n  background-color: #435bee;\n  color: white;\n  font-size: 4vh;\n  border: none;\n  border-radius: 0.7vh;\n  margin-top: 0%;\n  margin-left: 90%;\n  cursor: pointer;\n}\n.newsFeed[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  width: 100%;\n  height: 72.1%;\n  flex: none;\n  overflow-y: auto;\n}\n.box[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  width: 100%;\n  height: 33.33%;\n  margin-top: 0.5vh;\n  margin-bottom: 1.5vh;\n  border-radius: 1vh;\n}\n.feed[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: relative;\n  flex-direction: row;\n}\n.feed[_ngcontent-%COMP%]   .feed_left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 16.66%;\n}\n.feed[_ngcontent-%COMP%]   .feed_left[_ngcontent-%COMP%]   img[alt=little_keanu][_ngcontent-%COMP%] {\n  height: 50%;\n  margin: 10%;\n  border-radius: 50%;\n}\n.feed[_ngcontent-%COMP%]   .feed_right[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 83.33%;\n  display: flex;\n  flex-direction: column;\n}\n.username[_ngcontent-%COMP%] {\n  height: 19%;\n  width: 90%;\n  margin-left: 7%;\n  margin-top: 1%;\n  overflow-y: auto;\n  font-size: 2.5vh;\n  font-weight: bold;\n}\n.feed_content[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  height: 85%;\n  width: 99%;\n  overflow-y: auto;\n  font-size: 2.5vh;\n  line-height: 4.5vh;\n}\n.feed_content_post[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  height: 85%;\n  width: 99%;\n  font-size: 2.5vh;\n  line-height: 4.5vh;\n}\n.feed_content_text[_ngcontent-%COMP%] {\n  height: 73%;\n  width: 100%;\n  overflow-y: auto;\n  font-size: 2.5vh;\n  line-height: 4.5vh;\n  font-size: 2.5vh;\n  line-height: 4.5vh;\n}\n.feed_content_footer[_ngcontent-%COMP%] {\n  height: 27%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.heart-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  margin-left: 45%;\n}\n.comment-container[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n.heartButton[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 100%;\n  background-color: #F0F2F5;\n}\n.heartButton[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.commentButton[_ngcontent-%COMP%] {\n  color: #bdc5fc;\n  font-size: 100%;\n  border: none;\n  background-color: #F0F2F5;\n}\n.commentButton[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.heart_number[_ngcontent-%COMP%] {\n  color: #96a5ff;\n  font-size: 88%;\n}\n.comment_number[_ngcontent-%COMP%] {\n  color: #bdc5fc;\n  font-size: 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ld3MtZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBR0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUtBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUhGO0FBSUU7RUFDRSxlQUFBO0FBRko7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBSEY7QUFJRTtFQUNFLGVBQUE7QUFGSjtBQU1BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFIRjtBQU1BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFIRiIsImZpbGUiOiJuZXdzLWZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JpdGVQb3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcbiAgaGVpZ2h0OiAyNSU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuICBpbnB1dFt2YWx1ZT1cInBvc3RcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgOTEsIDIzOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjd2aDtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5cbi5uZXdzRmVlZCB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3Mi4xJTtcbiAgZmxleDogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMy4zMyU7XG4gIG1hcmdpbi10b3A6IDAuNXZoO1xuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xufVxuXG4uZmVlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAuZmVlZF9sZWZ0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDE2LjY2JTtcbiAgICBpbWdbYWx0PVwibGl0dGxlX2tlYW51XCJdIHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgbWFyZ2luOiAxMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLmZlZWRfcmlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogODMuMzMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4udXNlcm5hbWUge1xuICBoZWlnaHQ6IDE5JTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZm9udC1zaXplOiAyLjV2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mZWVkX2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIGhlaWdodDo4NSU7XG4gIHdpZHRoOiA5OSU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZvbnQtc2l6ZTogMi41dmg7XG4gIGxpbmUtaGVpZ2h0OiA0LjV2aDtcbn1cblxuLmZlZWRfY29udGVudF9wb3N0IHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBoZWlnaHQ6ODUlO1xuICB3aWR0aDogOTklO1xuICBmb250LXNpemU6IDIuNXZoO1xuICBsaW5lLWhlaWdodDogNC41dmg7XG59XG5cbi5mZWVkX2NvbnRlbnRfdGV4dCB7XG4gIGhlaWdodDogNzMlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZm9udC1zaXplOiAyLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDQuNXZoO1xuICBmb250LXNpemU6IDIuNXZoO1xuICBsaW5lLWhlaWdodDogNC41dmg7XG59XG5cbi5mZWVkX2NvbnRlbnRfZm9vdGVyIHtcbiAgaGVpZ2h0OiAyNyU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaGVhcnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNDUlO1xufVxuXG4uY29tbWVudC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFydEJ1dHRvbiB7XG4gIC8vY29sb3I6IHJnYigxNTAsIDE2NSwgMjU1KTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIC5oZWFydCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5jb21tZW50QnV0dG9uIHtcbiAgY29sb3I6IHJnYigxODksIDE5NywgMjUyKTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIC5jb21tZW50IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmhlYXJ0X251bWJlciB7XG4gIGNvbG9yOiByZ2IoMTUwLCAxNjUsIDI1NSk7XG4gIGZvbnQtc2l6ZTogODglO1xufVxuXG4uY29tbWVudF9udW1iZXIge1xuICBjb2xvcjogcmdiKDE4OSwgMTk3LCAyNTIpO1xuICBmb250LXNpemU6IDg4JTtcbn1cbiJdfQ== */"],
        changeDetection: 0
      });
      NewsFeedComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: NewsFeedComponent,
        factory: NewsFeedComponent.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map