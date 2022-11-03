"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229,405];
exports.modules = {

/***/ 3902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Components_CarProfile)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/Components/CarProfile/styles.tsx

const ImgContainer = external_styled_components_default().div.withConfig({
  displayName: "styles__ImgContainer",
  componentId: "sc-1ri9uws-0"
})(["position:relative;width:100%;height:240px;& > img{width:100%;height:100%;object-fit:cover;}"]);
const Title = external_styled_components_default().div.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1ri9uws-1"
})(["width:100%;padding:1rem;& > h3{font-size:", ";font-weight:700;margin-bottom:0.5rem;}& > h1{font-size:", ";font-weight:700;}"], ({
  theme
}) => theme.fontSize.large, ({
  theme
}) => theme.fontSize.XLarge);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/Components/CarProfile/index.tsx
"use client";








const CarProfile = ({
  imageUrl,
  brand,
  name
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ImgContainer, {
      children: imageUrl && /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: imageUrl,
        alt: name,
        fill: true,
        priority: true
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Title, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: brand
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: name
      })]
    })]
  });
};

/* harmony default export */ const Components_CarProfile = (CarProfile);

/***/ }),

/***/ 9403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ indx)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/Components/ListHeader/styled.ts

const Container = external_styled_components_default().header.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1sdl8rc-0"
})(["background-color:", ";width:100%;height:48px;padding-left:20px;h3{font-weight:700;font-size:", ";color:", ";line-height:48px;}"], ({
  theme
}) => theme.color.blue, ({
  theme
}) => theme.fontSize.medium, ({
  theme
}) => theme.color.white);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/Components/ListHeader/indx.tsx




const ListHeader = ({
  title
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: title
    })
  });
};

/* harmony default export */ const indx = (ListHeader);

/***/ }),

/***/ 7364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Components_ListItem)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/Components/ListItem/styles.tsx

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-2q8xy9-0"
})(["height:48px;padding:13px 21px 14px 19px;display:flex;justify-content:space-between;align-items:center;span{font-size:", ";line-height:21px;}.name{font-weight:700;}.value{font-weight:400;}"], ({
  theme
}) => theme.fontSize.medium);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/Components/ListItem/index.tsx





const ListItem = ({
  name = "",
  value = ""
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "name",
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "value",
      children: value
    })]
  });
};

/* harmony default export */ const Components_ListItem = (ListItem);

/***/ }),

/***/ 474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function SEO({
  description,
  title,
  siteTitle,
  image
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
      children: `${title} | ${siteTitle}`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:site_name",
      content: siteTitle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:image",
      content: image
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:card",
      content: "summary"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:description",
      content: description
    })]
  });
}

/***/ }),

/***/ 4825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_CarProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3902);
/* harmony import */ var _Components_ListHeader_indx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9403);
/* harmony import */ var _Components_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7364);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8169);
/* harmony import */ var _Components_CarItemList_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3621);
/* harmony import */ var _Components_SEO_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9752);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(742);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, _lib_api__WEBPACK_IMPORTED_MODULE_8__]);
([_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, _lib_api__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Detail = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    id
  } = router.query;
  const {
    isLoading,
    isError,
    car
  } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCar */ .XX)(Number(id));
  const {
    imageUrl,
    name,
    brand,
    insurance,
    amount,
    carInfoList,
    additionalProducts
  } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useChangeDetailData */ .pD)(car);

  if (isError) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_CarItemList_styles__WEBPACK_IMPORTED_MODULE_5__/* .CardItemListWrapper */ .T, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        className: "message",
        children: "\uC11C\uBC84\uC5D0\uC11C \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
      })
    });
  }

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_CarItemList_styles__WEBPACK_IMPORTED_MODULE_5__/* .CardItemListWrapper */ .T, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
        className: "message",
        children: "\uBD88\uB7EC\uC624\uB294 \uC911"
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_SEO_seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      title: `${brand} ${name}`,
      description: `월 ${amount} 원`,
      image: imageUrl
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_CarProfile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      imageUrl: imageUrl,
      brand: brand,
      name: name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_ListItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      value: `월 ${amount} 원`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_ListHeader_indx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      title: "\uCC28\uB7C9 \uC815\uBCF4"
    }), carInfoList.map(value => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_ListItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      name: value.name,
      value: value.description
    }, value.name)), insurance.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_ListHeader_indx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "\uBCF4\uD5D8"
      }), insurance.map(({
        name,
        description
      }, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_ListItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: name,
        value: description
      }, index))]
    }), additionalProducts.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_ListHeader_indx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "\uCD94\uAC00 \uC0C1\uD488"
      }), additionalProducts.map(({
        name,
        amount
      }, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Components_ListItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: name,
        value: amount
      }, index))]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);
const getServerSideProps = async () => {
  const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();
  await queryClient.prefetchQuery(["cars", "ALL"], _lib_api__WEBPACK_IMPORTED_MODULE_8__/* .getCars */ .R);
  return {
    props: {
      dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.dehydrate)(queryClient)
    }
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,169], () => (__webpack_exec__(4825)));
module.exports = __webpack_exports__;

})();