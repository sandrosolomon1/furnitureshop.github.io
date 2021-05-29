(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-module"], {
    /***/
    "MzDm":
    /*!**********************************************!*\
      !*** ./src/app/service/service.component.ts ***!
      \**********************************************/

    /*! exports provided: ServiceComponent */

    /***/
    function MzDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
        return ServiceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ServiceComponent = /*#__PURE__*/function () {
        function ServiceComponent() {
          _classCallCheck(this, ServiceComponent);
        }

        _createClass(ServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServiceComponent;
      }();

      ServiceComponent.ɵfac = function ServiceComponent_Factory(t) {
        return new (t || ServiceComponent)();
      };

      ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServiceComponent,
        selectors: [["app-service"]],
        decls: 16,
        vars: 0,
        consts: [[1, "container"], [1, "content"]],
        template: function ServiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D8 \u10D3\u10D0 \u10DB\u10D8\u10EC\u10DD\u10D3\u10D4\u10D1\u10D0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10D8\u10E1 \u10D0\u10D3\u10D2\u10D8\u10DA\u10D6\u10D4 \u10DB\u10D8\u10E2\u10D0\u10DC\u10D0 \u10EE\u10D3\u10D4\u10D1\u10D0, \u10DB\u10D0\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10E0\u10D0\u10EA \u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D4\u10DA\u10D8\u10E1 \u10DB\u10D8\u10D4\u10E0 \u10D2\u10D0\u10D3\u10D0\u10EE\u10D3\u10D8\u10DA\u10D8\u10D0 \u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10D8\u10E1 \u10DB\u10D7\u10DA\u10D8\u10D0\u10DC\u10D8 \u10E6\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D4\u10D1\u10D0 \u10D3\u10D0 \u10D7\u10D0\u10DC\u10EE\u10D0 \u10D0\u10E1\u10D0\u10EE\u10E3\u10DA\u10D8\u10D0 \u10D1\u10D4\u10DA\u10E3\u10E5\u10E1\u10D8\u10E1 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D6\u10D4. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u10DB\u10D8\u10E2\u10D0\u10DC\u10D8\u10E1 \u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D8 \u10E5\u10D0\u10DA\u10D0\u10E5\u10D8\u10E1 \u10DB\u10D0\u10E1\u10E8\u10E2\u10D0\u10D1\u10D8\u10D7 (\u10D7\u10D1\u10D8\u10DA\u10D8\u10E1\u10D8\u10E1\u10D0 \u10D3\u10D0 \u10D1\u10D0\u10D7\u10E3\u10DB\u10E8\u10D8) 500 \u10DA\u10D0\u10E0\u10D6\u10D4 \u10D6\u10D4\u10DB\u10DD\u10D7 \u10E8\u10D4\u10DC\u10D0\u10EB\u10D4\u10DC\u10D6\u10D4 \u10E3\u10E4\u10D0\u10E1\u10DD\u10D0, \u10EE\u10DD\u10DA\u10DD \u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD\u10E1 \u10E1\u10EE\u10D5\u10D0 \u10E0\u10D4\u10D2\u10D8\u10DD\u10DC\u10D4\u10D1\u10E8\u10D8 \u10D4\u10DB\u10D0\u10E2\u10D4\u10D1\u10D0 \u10E2\u10E0\u10D0\u10DC\u10E1\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E6\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D4\u10D1\u10D0, \u10DB\u10D0\u10DC\u10EB\u10D8\u10DA\u10D8\u10E1 \u10DB\u10D8\u10EE\u10D4\u10D3\u10D5\u10D8\u10D7. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u10E2\u10E0\u10D0\u10DC\u10E1\u10DE\u10DD\u10E0\u10E2\u10D8\u10E0\u10D4\u10D1\u10D0 \u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10DA\u10D8\u10E1 \u10DB\u10D8\u10D4\u10E0 \u10DB\u10D8\u10D7\u10D8\u10D7\u10D4\u10D1\u10E3\u10DA \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D6\u10D4 \u10EE\u10DD\u10E0\u10EA\u10D8\u10D4\u10DA\u10D3\u10D4\u10D1\u10D0 \u10E8\u10D4\u10E1\u10E7\u10D8\u10D3\u10D5\u10D8\u10D3\u10D0\u10DC 1 \u10E1\u10D0\u10DB\u10E3\u10E8\u10D0\u10DD \u10D3\u10E6\u10D8\u10E1 \u10D2\u10D0\u10DC\u10DB\u10D0\u10D5\u10DA\u10DD\u10D1\u10D0\u10E8\u10D8. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u10D1\u10D4\u10DA\u10E3\u10E5\u10E1\u10D8\u10E1 \u10DE\u10E0\u10DD\u10E4\u10D4\u10E1\u10D8\u10DD\u10DC\u10D0\u10DA\u10D8 \u10D9\u10D0\u10D3\u10E0\u10D4\u10D1\u10D8, \u10D0\u10D5\u10D4\u10EF\u10E1 \u10D3\u10D4\u10E2\u10D0\u10DA\u10E3\u10E0\u10D8 \u10E1\u10D8\u10D6\u10E3\u10E1\u10E2\u10D8\u10D7 \u10D3\u10D0 \u10D2\u10D0\u10DC\u10E1\u10D0\u10D9\u10E3\u10D7\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10D8\u10E4\u10E0\u10D7\u10EE\u10D8\u10DA\u10D8\u10D7 \u10D0\u10EC\u10E7\u10DD\u10D1\u10D4\u10DC \u10D3\u10D0 \u10D0\u10DB\u10DD\u10DC\u10E2\u10D0\u10DF\u10D4\u10D1\u10D4\u10DC \u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10DA\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10E1\u10D0\u10E1\u10E3\u10E0\u10D5\u10D4\u10DA \u10D0\u10D3\u10D2\u10D8\u10DA\u10D0\u10E1. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u10DC\u10D4\u10D1\u10D8\u10E1\u10DB\u10D8\u10D4\u10E0\u10D8 \u10D3\u10D0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7\u10D8 \u10D8\u10DC\u10E4\u10DD\u10E0\u10DB\u10D0\u10EA\u10D8\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D3\u10D0\u10D2\u10D5\u10D8\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D8\u10D7 032 2 51 74 00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u10D0\u10DC \u10DB\u10DD\u10D2\u10EC\u10D4\u10E0\u10D4\u10D7 \u10D4\u10DA- \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D6\u10D4: info@beluxhome.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h1[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  line-height: 65px;\n  font-family: \"DejaVu Sans Bold\", sans-serif;\n  font-weight: bold;\n  color: #A6A9B6;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJzZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnRGVqYVZ1IFNhbnMgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNBNkE5QjY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "mhyn":
    /*!*******************************************!*\
      !*** ./src/app/service/service.module.ts ***!
      \*******************************************/

    /*! exports provided: ServiceModule */

    /***/
    function mhyn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceModule", function () {
        return ServiceModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service.component */
      "MzDm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ServiceModule = function ServiceModule() {
        _classCallCheck(this, ServiceModule);
      };

      ServiceModule.ɵfac = function ServiceModule_Factory(t) {
        return new (t || ServiceModule)();
      };

      ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ServiceModule
      });
      ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _service_component__WEBPACK_IMPORTED_MODULE_1__["ServiceComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ServiceModule, {
          declarations: [_service_component__WEBPACK_IMPORTED_MODULE_1__["ServiceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=service-service-module-es5.js.map