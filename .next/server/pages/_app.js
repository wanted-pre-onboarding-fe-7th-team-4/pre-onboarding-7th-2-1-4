(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 4392: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        Z: () => /* binding */ Components_Layout
      });

      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(1853);
      // EXTERNAL MODULE: external "react/jsx-runtime"
      var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./src/Components/Layout/IconBack/index.tsx
      const IconBack = () => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
              d: "M15 8H1",
              stroke: "black",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
              d: "M8 15L1 8L8 1",
              stroke: "black",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          ]
        });
      };

      /* harmony default export */ const Layout_IconBack = IconBack;
      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(7518);
      var external_styled_components_default =
        /*#__PURE__*/ __webpack_require__.n(external_styled_components_); // CONCATENATED MODULE: ./src/Components/Layout/HeaderBar/styles.tsx
      const Container = external_styled_components_default().header.withConfig({
        displayName: "styles__Container",
        componentId: "sc-1yu8yff-0"
      })(
        [
          "display:flex;height:60px;position:relative;align-items:center;border-bottom:1px solid ",
          ";button{width:24px;height:24px;text-align:center;position:absolute;left:20px;top:18px;border:0;background-color:transparent;}h1{flex:1;font-weight:700;font-size:",
          ";line-height:21px;text-align:center;color:",
          ";}"
        ],
        ({ theme }) => theme.color.black,
        ({ theme }) => theme.fontSize.medium,
        ({ theme }) => theme.color.black
      ); // CONCATENATED MODULE: ./src/Components/Layout/HeaderBar/index.tsx
      const HeaderBar = () => {
        const router = (0, router_.useRouter)();
        const { pathname } = router;
        const isHome = pathname === "/";

        const onClick = () => {
          router.back();
        };

        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(Container, {
          children: [
            !isHome &&
              /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_IconBack, {})
              }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
              children: isHome ? "전체차량" : "차량상세"
            })
          ]
        });
      };

      /* harmony default export */ const Layout_HeaderBar = HeaderBar; // CONCATENATED MODULE: ./src/Components/Layout/styles.tsx
      const styles_Container =
        external_styled_components_default().div.withConfig({
          displayName: "styles__Container",
          componentId: "sc-b7lk2p-0"
        })([
          "max-width:460px;margin:0 auto;min-height:100vh;.content{overflow-x:hidden;}"
        ]); // CONCATENATED MODULE: ./src/Components/Layout/index.tsx
      const Layout = ({ children }) => {
        return /*#__PURE__*/ (0, jsx_runtime_.jsxs)(styles_Container, {
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_HeaderBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
              className: "content",
              children: children
            })
          ]
        });
      };

      /* harmony default export */ const Components_Layout = Layout;

      /***/
    },

    /***/ 8654: /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ V: () => /* binding */ useError
              /* harmony export */
            });
            /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(3590);
            /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(8819);
            /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                react_toastify__WEBPACK_IMPORTED_MODULE_0__
              ]);
            react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            const useError = (title) => {
              react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(title, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              });
            };
            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 7110: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        n: () => /* reexport */ GlobalStyles,
        r: () => /* reexport */ theme
      }); // CONCATENATED MODULE: ./src/lib/styles/theme.ts

      const theme = {
        color: {
          black: "#000000",
          gray: "#D9D9D9",
          blue: "#0094FF",
          white: "#FFFFFF"
        },
        fontSize: {
          XLarge: "24px",
          large: "20px",
          medium: "17px",
          small: "14px",
          XSmall: "12px"
        }
      };
      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(7518); // CONCATENATED MODULE: ./src/lib/styles/ResetStyle.tsx
      /* prettier-ignore */

      const ResetStyle = (0,external_styled_components_.css)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"]);
      /* harmony default export */ const styles_ResetStyle = ResetStyle; // CONCATENATED MODULE: ./src/lib/styles/GlobalStyles.tsx
      const GlobalStyle = (0, external_styled_components_.createGlobalStyle)(
        [
          ":root{--color-black:#000000;--color-gray:#D9D9D9;--color-blue:#0094ff;}",
          ";body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}*{box-sizing:border-box;}a{text-decoration:none;color:inherit;}img,svg{vertical-align:middle;}"
        ],
        styles_ResetStyle
      );
      /* harmony default export */ const GlobalStyles = GlobalStyle; // CONCATENATED MODULE: ./src/lib/styles/index.ts

      /***/
    },

    /***/ 5709: /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
              /* harmony export */
            });
            /* harmony import */ var _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(8654);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _hooks_useError__WEBPACK_IMPORTED_MODULE_0__
              ]);
            _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];

            const queryErrorHandler = (error) => {
              const title =
                error instanceof Error
                  ? error.message
                  : "error connecting to server";
              (0,
              _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ /* .useError */.V)(
                title
              );
            };

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              queryErrorHandler;
            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 1336: /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ MyApp,
              /* harmony export */ queryClient: () => /* binding */ queryClient
              /* harmony export */
            });
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(968);
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_head__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6689);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_1__
              );
            /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(7518);
            /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                styled_components__WEBPACK_IMPORTED_MODULE_2__
              );
            /* harmony import */ var _lib_styles__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(7110);
            /* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(9752);
            /* harmony import */ var _lib_utils_queryErrorHandler__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(5709);
            /* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(4392);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__
              );
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__,
                _lib_utils_queryErrorHandler__WEBPACK_IMPORTED_MODULE_5__
              ]);
            [
              _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__,
              _lib_utils_queryErrorHandler__WEBPACK_IMPORTED_MODULE_5__
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly &&
                  (symbols = symbols.filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(
                      object,
                      sym
                    ).enumerable;
                  })),
                  keys.push.apply(keys, symbols);
              }
              return keys;
            }

            function _objectSpread(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2
                  ? ownKeys(Object(source), !0).forEach(function (key) {
                      _defineProperty(target, key, source[key]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      target,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : ownKeys(Object(source)).forEach(function (key) {
                      Object.defineProperty(
                        target,
                        key,
                        Object.getOwnPropertyDescriptor(source, key)
                      );
                    });
              }
              return target;
            }

            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                obj[key] = value;
              }
              return obj;
            }

            const queryClient =
              new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient(
                {
                  defaultOptions: {
                    queries: {
                      onError:
                        _lib_utils_queryErrorHandler__WEBPACK_IMPORTED_MODULE_5__ /* ["default"] */.Z,
                      staleTime: 600000,
                      cacheTime: 900000,
                      refetchOnWindowFocus: false
                    }
                  }
                }
              );
            function MyApp({ Component, pageProps }) {
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                    next_head__WEBPACK_IMPORTED_MODULE_0___default(),
                    {
                      children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          "meta",
                          {
                            charSet: "utf-8"
                          }
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          "meta",
                          {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                          }
                        )
                      ]
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                    _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider,
                    {
                      client: queryClient,
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                          _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.Hydrate,
                          {
                            state: pageProps.dehydratedState,
                            children: /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                              styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider,
                              {
                                theme:
                                  _lib_styles__WEBPACK_IMPORTED_MODULE_3__ /* .theme */.r,
                                children: [
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                                    _lib_styles__WEBPACK_IMPORTED_MODULE_3__ /* .GlobalStyles */.n,
                                    {}
                                  ),
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                                    _Components_Layout__WEBPACK_IMPORTED_MODULE_6__ /* ["default"] */.Z,
                                    {
                                      children:
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(
                                          Component,
                                          _objectSpread({}, pageProps)
                                        )
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        )
                    }
                  )
                ]
              });
            }
            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 8819: /***/ () => {
      /***/
    },

    /***/ 968: /***/ (module) => {
      "use strict";
      module.exports = require("next/head");

      /***/
    },

    /***/ 1853: /***/ (module) => {
      "use strict";
      module.exports = require("next/router");

      /***/
    },

    /***/ 6689: /***/ (module) => {
      "use strict";
      module.exports = require("react");

      /***/
    },

    /***/ 997: /***/ (module) => {
      "use strict";
      module.exports = require("react/jsx-runtime");

      /***/
    },

    /***/ 7518: /***/ (module) => {
      "use strict";
      module.exports = require("styled-components");

      /***/
    },

    /***/ 9752: /***/ (module) => {
      "use strict";
      module.exports = import("@tanstack/react-query");

      /***/
    },

    /***/ 3590: /***/ (module) => {
      "use strict";
      module.exports = import("react-toastify");

      /***/
    }
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(1336);
  module.exports = __webpack_exports__;
})();
