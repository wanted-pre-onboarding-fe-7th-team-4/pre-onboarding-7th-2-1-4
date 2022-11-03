"use strict";
exports.id = 169;
exports.ids = [169];
exports.modules = {
  /***/ 8676: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(3621);
          /* harmony import */ var _CarItem__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(1378);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _CarItem__WEBPACK_IMPORTED_MODULE_1__
            ]);
          _CarItem__WEBPACK_IMPORTED_MODULE_1__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];
          ("use client");

          const CarItemList = ({ carItemData, isLoading }) => {
            if (isLoading) {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                _styles__WEBPACK_IMPORTED_MODULE_0__ /* .CardItemListWrapper */.T,
                {
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                      "p",
                      {
                        className: "message",
                        children: "\uBD88\uB7EC\uC624\uB294 \uC911"
                      }
                    )
                }
              );
            }

            if (!carItemData || carItemData.length === 0) {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                _styles__WEBPACK_IMPORTED_MODULE_0__ /* .CardItemListWrapper */.T,
                {
                  children:
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                      "p",
                      {
                        className: "message",
                        children: "\uCC28\uB7C9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
                      }
                    )
                }
              );
            }

            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
              _styles__WEBPACK_IMPORTED_MODULE_0__ /* .CardItemListWrapper */.T,
              {
                children: carItemData.map((carData) =>
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(
                    _CarItem__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                    {
                      carData: carData
                    },
                    carData.id
                  )
                )
              }
            );
          };

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            CarItemList;
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 3621: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ T: () => /* binding */ CardItemListWrapper
      /* harmony export */
    });
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(7518);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );

    const CardItemListWrapper =
      styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
        displayName: "styles__CardItemListWrapper",
        componentId: "sc-1gmvrz-0"
      })(
        [
          "position:relative;min-height:calc(100vh - 101px);.message{position:absolute;left:0;right:0;text-align:center;vertical-align:middle;font-weight:700;font-size:",
          ";line-height:21px;top:50%;transform:translate(0,-50%);}"
        ],
        ({ theme }) => theme.fontSize.medium
      );

    /***/
  },

  /***/ 1378: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(1372);
          /* harmony import */ var _ItemTag__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(4604);
          /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(1664);
          /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              next_link__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(8169);
          /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(5675);
          /* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              next_image__WEBPACK_IMPORTED_MODULE_5__
            );
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__
            );
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _lib_hooks__WEBPACK_IMPORTED_MODULE_4__
            ]);
          _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];
          ("use client");

          const CarItem = ({ carData }) => {
            const { day, calculateDate } = (0,
            _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ /* .useCalculateDate */.fn)();
            const { amountLocalString, changeLocalString } = (0,
            _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ /* .useChangeAmountToLocalString */.tB)();
            const { fuel, segment, changeFuelToKorean, changeSegmentToKorean } =
              (0,
              _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ /* .useChangeFuelSegmentEnumToKorean */.BL)();
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
              if (carData) {
                calculateDate(carData.createdAt);
                changeLocalString(carData.amount);
                changeFuelToKorean(carData.attribute.fuelType);
                changeSegmentToKorean(carData.attribute.segment);
              }
            }, [carData]);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
              _styles__WEBPACK_IMPORTED_MODULE_1__ /* .Container */.W,
              {
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                  next_link__WEBPACK_IMPORTED_MODULE_3___default(),
                  {
                    href: `/Detail/${carData.id}`,
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                        "div",
                        {
                          className: "textWrapper",
                          children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                              "p",
                              {
                                className: "brand",
                                children: carData.attribute.brand
                              }
                            ),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                              "p",
                              {
                                className: "name",
                                children: carData.attribute.name
                              }
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                              "p",
                              {
                                className: "type",
                                children: [segment, " / ", fuel]
                              }
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                              "p",
                              {
                                className: "amount",
                                children: [
                                  "\uC6D4 ",
                                  amountLocalString,
                                  " \uC6D0 \uBD80\uD130"
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                        "div",
                        {
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                              next_image__WEBPACK_IMPORTED_MODULE_5___default(),
                              {
                                src: carData.attribute.imageUrl,
                                alt: carData.attribute.name,
                                width: 152,
                                height: 80,
                                priority: true
                              }
                            )
                        }
                      ),
                      day < 1 &&
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(
                          _ItemTag__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */.Z,
                          {
                            className: "newItemTag"
                          }
                        )
                    ]
                  }
                )
              }
            );
          };

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            CarItem;
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 1372: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ W: () => /* binding */ Container
      /* harmony export */
    });
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(7518);
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );

    const Container =
      styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
        displayName: "styles__Container",
        componentId: "sc-in8kqa-0"
      })(
        [
          "border-bottom:1px solid ",
          ";height:120px;&:last-child{border-bottom:0;}a{position:relative;display:flex;align-items:center;justify-content:space-between;padding:20px;}.textWrapper{p{color:",
          ";}.brand,.name{font-weight:700;font-size:",
          ";line-height:17px;}.type{margin-top:8px;}.type,.amount{font-weight:500;font-size:",
          ";line-height:15px;}}.newItemTag{position:absolute;top:8px;right:8px;}"
        ],
        ({ theme }) => theme.color.black,
        ({ theme }) => theme.color.black,
        ({ theme }) => theme.fontSize.small,
        ({ theme }) => theme.fontSize.XSmall
      ); // export const Container = styled.li`
    //   position: relative;
    //   height: 120px;
    //   width: 100%;
    //   cursor: pointer;
    //   padding: 1.5rem 1rem;
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   border-bottom: 1px solid ${({ theme }) => theme.color.black};
    //   &:last-child {
    //     border-bottom: 0;
    //   }
    //   .newItemTag {
    //     position: absolute;
    //     top: 8px;
    //     right: 8px;
    //   }
    // `;
    // export const Info = styled.div`
    //   p {
    //     color: ${({ theme }) => theme.color.black};
    //   }
    //   .brand,
    //   .name {
    //     font-weight: 700;
    //     font-size: ${({ theme }) => theme.fontSize.small};
    //     line-height: 17px;
    //   }
    //   .type {
    //     margin-top: 8px;
    //   }
    //   .type,
    //   .amount {
    //     font-weight: 500;
    //     font-size: ${({ theme }) => theme.fontSize.XSmall};
    //     line-height: 15px;
    //   }
    // `;
    // export const ImgContainer = styled.div`
    //   position: relative;
    //   width: 152px;
    //   height: 80px;
    //   & > img {
    //     /* display: block; */
    //     width: 100%;
    //     height: 100%;
    //     object-fit: cover;
    //   }
    // `;

    /***/
  },

  /***/ 2875: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ Components_Category
    });

    // EXTERNAL MODULE: external "styled-components"
    var external_styled_components_ = __webpack_require__(7518);
    var external_styled_components_default =
      /*#__PURE__*/ __webpack_require__.n(external_styled_components_); // CONCATENATED MODULE: ./src/Components/Tag/styles.tsx
    const TagWrapper = external_styled_components_default().button.withConfig({
      displayName: "styles__TagWrapper",
      componentId: "sc-1133xfk-0"
    })(
      [
        'padding:5px 17px;border-radius:62px;border:none;font-family:"Inter";font-weight:700;font-size:',
        ";line-height:17px;flex-shrink:0;cursor:pointer;",
        ""
      ],
      ({ theme }) => theme.fontSize.medium,
      ({ selected, theme }) =>
        (0, external_styled_components_.css)(
          ["background-color:", ";color:", ";"],
          selected ? theme.color.black : theme.color.gray,
          selected ? theme.color.white : theme.color.black
        )
    );
    // EXTERNAL MODULE: ./src/lib/types/types.ts
    var types = __webpack_require__(5175); // CONCATENATED MODULE: ./src/lib/types/index.ts
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./src/Components/Tag/index.tsx
    // import { useChangeFuelSegmentEnumToKorean } from "@/lib/hooks";

    const Tag = ({ tagName, selected = false, index, onClick }) => {
      // const { segment } = useChangeFuelSegmentEnumToKorean();
      // changeSegmentToKorean(tagName);
      return /*#__PURE__*/ jsx_runtime_.jsx(TagWrapper, {
        selected: selected,
        onClick: onClick,
        "data-index": index,
        children: types /* SEGMENT */.o[tagName]
      });
    };

    /* harmony default export */ const Components_Tag = Tag;
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(6689); // CONCATENATED MODULE: ./src/Components/Category/styes.tsx
    const CategoryWrapper = external_styled_components_default().nav.withConfig(
      {
        displayName: "styes__CategoryWrapper",
        componentId: "sc-covp6-0"
      }
    )(
      [
        "display:flex;align-items:flex-start;gap:10px;padding:6px 12px;border-bottom:1px solid ",
        ";overflow-x:auto;overflow-y:hidden;&::-webkit-scrollbar{display:none;}"
      ],
      ({ theme }) => theme.color.black
    ); // CONCATENATED MODULE: ./src/Components/Category/index.tsx
    // changeFuelToKorean
    // -fuel enum을 받아 문자열로 변경해줍니다.
    // changeSegmentToKorean
    // - segment enum을 받아 문자열로 변경해줍니다.
    // return
    // - fuel 문자열
    // - segment 문자열
    // - changeFuelToKorean(fuelTypeKey: TFuelType)=>void
    // - changeSegmentToKorean(segmentType: TSegment)=>void
    const Category = ({
      categoryData,
      currentCategory,
      setCurrentCategory
    }) => {
      return /*#__PURE__*/ jsx_runtime_.jsx(CategoryWrapper, {
        children: categoryData.map((segment, index) =>
          /*#__PURE__*/ jsx_runtime_.jsx(
            Components_Tag,
            {
              index: index,
              selected: segment === currentCategory,
              onClick: () => setCurrentCategory(segment),
              tagName: segment
            },
            `tag${index}`
          )
        )
      });
    };

    /* harmony default export */ const Components_Category = Category;

    /***/
  },

  /***/ 4604: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      Z: () => /* binding */ Components_ItemTag
    });

    // EXTERNAL MODULE: external "styled-components"
    var external_styled_components_ = __webpack_require__(7518);
    var external_styled_components_default =
      /*#__PURE__*/ __webpack_require__.n(external_styled_components_); // CONCATENATED MODULE: ./src/Components/ItemTag/styles.tsx
    const Container = external_styled_components_default().span.withConfig({
      displayName: "styles__Container",
      componentId: "sc-1vtf5kr-0"
    })(
      [
        "padding:3px 14px;border-radius:42px;font-weight:700;line-height:15px;user-select:none;",
        ";"
      ],
      ({ theme }) =>
        (0, external_styled_components_.css)(
          ["font-size:", ";background-color:", ";color:", ";"],
          theme.fontSize.XSmall,
          theme.color.blue,
          theme.color.white
        )
    );
    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(997); // CONCATENATED MODULE: ./src/Components/ItemTag/index.tsx
    const ItemTag = ({ className }) => {
      return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        className: className,
        children: "\uC2E0\uADDC"
      });
    };

    /* harmony default export */ const Components_ItemTag = ItemTag;

    /***/
  },

  /***/ 742: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ R: () => /* binding */ getCars
            /* harmony export */
          });
          /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(9648);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              axios__WEBPACK_IMPORTED_MODULE_0__
            ]);
          axios__WEBPACK_IMPORTED_MODULE_0__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];

          const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
            baseURL: "https://preonboarding.platdev.net/api/cars"
          });
          const getCars = async ({ queryKey }) => {
            if (queryKey[1] === "ALL") {
              return (await api.get("")).data.payload;
            }

            return (
              await api.get("", {
                params: {
                  segment: queryKey[1]
                }
              })
            ).data.payload;
          };
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 8169: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ BL: () =>
              /* reexport safe */ _useChangeFuelSegmentEnumToKorean__WEBPACK_IMPORTED_MODULE_2__.Z,
            /* harmony export */ F: () =>
              /* reexport safe */ _useCarList__WEBPACK_IMPORTED_MODULE_5__.Z,
            /* harmony export */ XX: () =>
              /* reexport safe */ _useCar__WEBPACK_IMPORTED_MODULE_4__.Z,
            /* harmony export */ fn: () =>
              /* reexport safe */ _useCalculateDate__WEBPACK_IMPORTED_MODULE_0__.Z,
            /* harmony export */ pD: () =>
              /* reexport safe */ _useChangeDetailData__WEBPACK_IMPORTED_MODULE_3__.Z,
            /* harmony export */ tB: () =>
              /* reexport safe */ _useChangeAmountToLocalString__WEBPACK_IMPORTED_MODULE_1__.Z
            /* harmony export */
          });
          /* harmony import */ var _useCalculateDate__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(154);
          /* harmony import */ var _useChangeAmountToLocalString__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(7794);
          /* harmony import */ var _useChangeFuelSegmentEnumToKorean__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7741);
          /* harmony import */ var _useChangeDetailData__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(2425);
          /* harmony import */ var _useCar__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(6913);
          /* harmony import */ var _useCarList__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(3268);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _useChangeDetailData__WEBPACK_IMPORTED_MODULE_3__,
              _useCar__WEBPACK_IMPORTED_MODULE_4__,
              _useCarList__WEBPACK_IMPORTED_MODULE_5__
            ]);
          [
            _useChangeDetailData__WEBPACK_IMPORTED_MODULE_3__,
            _useCar__WEBPACK_IMPORTED_MODULE_4__,
            _useCarList__WEBPACK_IMPORTED_MODULE_5__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 154: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    ("use client");

    const useCalculateDate = () => {
      const { 0: minute, 1: setMinute } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
      const { 0: hour, 1: setHour } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
      const { 0: day, 1: setDay } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
      const { 0: week, 1: setWeek } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
      const { 0: date, 1: setDate } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
      const { 0: month, 1: setMonth } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
      const { 0: year, 1: setYear } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

      const calculateDate = (date) => {
        const createDate = new Date(date);
        const createDateToTime = new Date(date).getTime();
        const now = Date.now();
        const amountTimeFromNow = now - createDateToTime;
        const amountTimeForSeconds = amountTimeFromNow / 1000;
        const week = ["일", "월", "화", "수", "목", "금", "토"];
        const time = {
          minute: Math.floor((amountTimeForSeconds % 3600) / 60),
          hour: Math.floor(amountTimeForSeconds / 3600),
          day: Math.floor(amountTimeForSeconds / (3600 * 24)),
          week: week[createDate.getDay()],
          date: createDate.getDate(),
          month: createDate.getMonth() + 1,
          year: createDate.getFullYear()
        };
        setMinute(time.minute);
        setHour(time.hour);
        setDay(time.day);
        setWeek(time.week);
        setDate(time.date);
        setMonth(time.month);
        setYear(time.year);
      };

      return {
        minute,
        hour,
        day,
        week,
        date,
        month,
        year,
        calculateDate
      };
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      useCalculateDate;

    /***/
  },

  /***/ 6913: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(742);
          /* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(9752);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _api__WEBPACK_IMPORTED_MODULE_0__,
              _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__
            ]);
          [
            _api__WEBPACK_IMPORTED_MODULE_0__,
            _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          const useCar = (id) => {
            const { isLoading, isError, data, error } = (0,
            _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
              ["cars", "ALL"],
              _api__WEBPACK_IMPORTED_MODULE_0__ /* .getCars */.R,
              {
                select: (list) => list.find((item) => item.id === id),
                onError: (error) => error
              }
            );
            return {
              isLoading,
              isError,
              car: data,
              error
            };
          };

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            useCar;
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 3268: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(742);
          /* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(9752);
          /* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(2779);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            );
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _api__WEBPACK_IMPORTED_MODULE_0__,
              _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__,
              _pages__WEBPACK_IMPORTED_MODULE_2__
            ]);
          [
            _api__WEBPACK_IMPORTED_MODULE_0__,
            _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__,
            _pages__WEBPACK_IMPORTED_MODULE_2__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;
          ("use client");

          const useCarList = () => {
            const { 0: currentCategory, 1: setCurrentCategory } = (0,
            react__WEBPACK_IMPORTED_MODULE_3__.useState)(
              _pages__WEBPACK_IMPORTED_MODULE_2__.categoryData[0]
            );
            const { isLoading, isError, data, error } = (0,
            _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
              ["cars", currentCategory],
              _api__WEBPACK_IMPORTED_MODULE_0__ /* .getCars */.R,
              {
                onError: (error) => error
              }
            );
            return {
              isLoading,
              isError,
              cars: data,
              error,
              currentCategory,
              setCurrentCategory
            };
          };

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            useCarList;
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 7794: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    ("use client");

    const useChangeAmountToLocalString = () => {
      const { 0: amountLocalString, 1: setAmountToLocalString } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

      const changeLocalString = (amount, local = "ko-KR") => {
        setAmountToLocalString(amount.toLocaleString(local));
        return amount.toLocaleString(local);
      };

      return {
        amountLocalString,
        changeLocalString
      };
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      useChangeAmountToLocalString;

    /***/
  },

  /***/ 2425: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(8169);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              ___WEBPACK_IMPORTED_MODULE_1__
            ]);
          ___WEBPACK_IMPORTED_MODULE_1__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];
          ("use client");

          const defaultValue = {
            id: 0,
            imageUrl: "",
            name: "",
            brand: "",
            segmentKorean: "전체",
            fuelKorean: "전기",
            insurance: [
              {
                name: "",
                description: ""
              }
            ],
            amount: "",
            carInfoList: [
              {
                name: "",
                description: ""
              }
            ],
            additionalProducts: [
              {
                name: "",
                amount: ""
              }
            ]
          };

          const useChangeDetailData = (data) => {
            const { 0: detail, 1: setDetail } = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
            const { amountLocalString, changeLocalString } = (0,
            ___WEBPACK_IMPORTED_MODULE_1__ /* .useChangeAmountToLocalString */.tB)();
            const { changeLocalString: changeAdditionalAmout } = (0,
            ___WEBPACK_IMPORTED_MODULE_1__ /* .useChangeAmountToLocalString */.tB)();
            const {
              fuel: fuelKorean,
              segment: segmentKorean,
              changeFuelToKorean,
              changeSegmentToKorean
            } = (0,
            ___WEBPACK_IMPORTED_MODULE_1__ /* .useChangeFuelSegmentEnumToKorean */.BL)();
            const { month, week, date, calculateDate } = (0,
            ___WEBPACK_IMPORTED_MODULE_1__ /* .useCalculateDate */.fn)();
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
              if (data) {
                const {
                  id,
                  startDate,
                  attribute: { imageUrl, name, brand, fuelType, segment },
                  insurance,
                  additionalProducts,
                  amount
                } = data;
                changeFuelToKorean(fuelType);
                changeSegmentToKorean(segment);
                calculateDate(startDate);
                changeLocalString(amount, "ko-KR");
                const carInfoList = [
                  {
                    name: "차종",
                    description: segmentKorean
                  },
                  {
                    name: "연료",
                    description: fuelKorean
                  },
                  {
                    name: "이용 가능일",
                    description: `${month}월 ${date}일 (${week}) 부터`
                  }
                ];
                const newAdditionalProducts = additionalProducts.map(
                  (value) => ({
                    name: value.name,
                    amount: `월 ${changeAdditionalAmout(
                      value.amount,
                      "ko-KR"
                    )} 원`
                  })
                );
                setDetail({
                  id,
                  imageUrl,
                  name,
                  brand,
                  segmentKorean,
                  fuelKorean,
                  insurance,
                  amount: amountLocalString,
                  carInfoList,
                  additionalProducts: newAdditionalProducts
                });
              }
            }, [data, month, week, date]);
            return detail;
          };

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            useChangeDetailData;
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 7741: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(5175);
    ("use client");

    const useChangeFuelSegmentEnumToKorean = () => {
      const { 0: fuel, 1: setFuel } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)("전기");
      const { 0: segment, 1: setSegment } = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)("전체");

      const changeFuelToKorean = (fuelTypeKey) => {
        setFuel(
          _types_types__WEBPACK_IMPORTED_MODULE_1__ /* .FUELTYPE */.B[
            fuelTypeKey
          ]
        );
      };

      const changeSegmentToKorean = (segmentType) => {
        setSegment(
          _types_types__WEBPACK_IMPORTED_MODULE_1__ /* .SEGMENT */.o[
            segmentType
          ]
        );
      };

      return {
        fuel,
        segment,
        changeFuelToKorean,
        changeSegmentToKorean
      };
    };

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
      useChangeFuelSegmentEnumToKorean;

    /***/
  },

  /***/ 5175: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ B: () => /* binding */ FUELTYPE,
      /* harmony export */ o: () => /* binding */ SEGMENT
      /* harmony export */
    });
    const FUELTYPE = {
      gasoline: "가솔린",
      ev: "전기",
      hybrid: "하이브리드"
    };
    const SEGMENT = {
      ALL: "전체",
      C: "소형",
      D: "중형",
      E: "대형",
      SUV: "SUV"
    };

    /***/
  },

  /***/ 2779: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ categoryData: () => /* binding */ categoryData,
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */ getServerSideProps: () =>
              /* binding */ getServerSideProps
            /* harmony export */
          });
          /* harmony import */ var _Components_Category__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(2875);
          /* harmony import */ var _Components_CarItemList__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(8676);
          /* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(8169);
          /* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(9752);
          /* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(742);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(997);
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _Components_CarItemList__WEBPACK_IMPORTED_MODULE_1__,
              _lib_hooks__WEBPACK_IMPORTED_MODULE_2__,
              _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__,
              _lib_api__WEBPACK_IMPORTED_MODULE_4__
            ]);
          [
            _Components_CarItemList__WEBPACK_IMPORTED_MODULE_1__,
            _lib_hooks__WEBPACK_IMPORTED_MODULE_2__,
            _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__,
            _lib_api__WEBPACK_IMPORTED_MODULE_4__
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;

          const categoryData = ["ALL", "E", "D", "C", "SUV"];

          const Index = () => {
            const { isLoading, cars, currentCategory, setCurrentCategory } = (0,
            _lib_hooks__WEBPACK_IMPORTED_MODULE_2__ /* .useCarList */.F)();
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
              {
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                    _Components_Category__WEBPACK_IMPORTED_MODULE_0__ /* ["default"] */.Z,
                    {
                      categoryData: categoryData,
                      currentCategory: currentCategory,
                      setCurrentCategory: setCurrentCategory
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(
                    _Components_CarItemList__WEBPACK_IMPORTED_MODULE_1__ /* ["default"] */.Z,
                    {
                      isLoading: isLoading,
                      carItemData: cars
                    }
                  )
                ]
              }
            );
          };

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Index;
          const getServerSideProps = async () => {
            const queryClient =
              new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
            await queryClient.prefetchQuery(
              ["cars", "ALL"],
              _lib_api__WEBPACK_IMPORTED_MODULE_4__ /* .getCars */.R
            );
            return {
              props: {
                dehydratedState: (0,
                _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(
                  queryClient
                )
              }
            };
          };
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  }
};
