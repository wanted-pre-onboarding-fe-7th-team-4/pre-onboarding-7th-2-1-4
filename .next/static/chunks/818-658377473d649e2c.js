"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [818],
  {
    3621: function (e, t, n) {
      n.d(t, {
        T: function () {
          return r;
        }
      });
      var r = n(9521).ZP.div.withConfig({
        displayName: "styles__CardItemListWrapper",
        componentId: "sc-1gmvrz-0"
      })(
        [
          "position:relative;min-height:calc(100vh - 101px);.message{position:absolute;left:0;right:0;text-align:center;vertical-align:middle;font-weight:700;font-size:",
          ";line-height:21px;top:50%;transform:translate(0,-50%);}"
        ],
        function (e) {
          return e.theme.fontSize.medium;
        }
      );
    },
    4846: function (e, t, n) {
      n.d(t, {
        fn: function () {
          return o;
        },
        XX: function () {
          return x;
        },
        F: function () {
          return v;
        },
        tB: function () {
          return i;
        },
        pD: function () {
          return l;
        },
        BL: function () {
          return u;
        }
      });
      var r,
        a = n(7294),
        o = function () {
          var e = (0, a.useState)(0),
            t = e[0],
            n = e[1],
            r = (0, a.useState)(0),
            o = r[0],
            i = r[1],
            c = (0, a.useState)(0),
            u = c[0],
            s = c[1],
            l = (0, a.useState)(""),
            d = l[0],
            f = l[1],
            m = (0, a.useState)(0),
            g = m[0],
            p = m[1],
            h = (0, a.useState)(0),
            x = h[0],
            y = h[1],
            v = (0, a.useState)(0),
            b = v[0],
            S = v[1];
          return {
            minute: t,
            hour: o,
            day: u,
            week: d,
            date: g,
            month: x,
            year: b,
            calculateDate: function (e) {
              var t = new Date(e),
                r = new Date(e).getTime(),
                a = (Date.now() - r) / 1e3,
                o = {
                  minute: Math.floor((a % 3600) / 60),
                  hour: Math.floor(a / 3600),
                  day: Math.floor(a / 86400),
                  week: ["일", "월", "화", "수", "목", "금", "토"][t.getDay()],
                  date: t.getDate(),
                  month: t.getMonth() + 1,
                  year: t.getFullYear()
                };
              n(o.minute),
                i(o.hour),
                s(o.day),
                f(o.week),
                p(o.date),
                y(o.month),
                S(o.year);
            }
          };
        },
        i = function () {
          var e = (0, a.useState)(""),
            t = e[0],
            n = e[1];
          return {
            amountLocalString: t,
            changeLocalString: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "ko-KR";
              return n(e.toLocaleString(t)), e.toLocaleString(t);
            }
          };
        },
        c = n(5175),
        u = function () {
          var e = (0, a.useState)("전기"),
            t = e[0],
            n = e[1],
            r = (0, a.useState)("전체"),
            o = r[0],
            i = r[1];
          return {
            fuel: t,
            segment: o,
            changeFuelToKorean: function (e) {
              n(c.B[e]);
            },
            changeSegmentToKorean: function (e) {
              i(c.o[e]);
            }
          };
        },
        s = {
          id: 0,
          imageUrl: "",
          name: "",
          brand: "",
          segmentKorean: "전체",
          fuelKorean: "전기",
          insurance: [{ name: "", description: "" }],
          amount: "",
          carInfoList: [{ name: "", description: "" }],
          additionalProducts: [{ name: "", amount: "" }]
        },
        l = function (e) {
          var t = (0, a.useState)(s),
            n = t[0],
            r = t[1],
            c = i(),
            l = c.amountLocalString,
            d = c.changeLocalString,
            f = i().changeLocalString,
            m = u(),
            g = m.fuel,
            p = m.segment,
            h = m.changeFuelToKorean,
            x = m.changeSegmentToKorean,
            y = o(),
            v = y.month,
            b = y.week,
            S = y.date,
            w = y.calculateDate;
          return (
            (0, a.useEffect)(
              function () {
                if (e) {
                  var t = e.id,
                    n = e.startDate,
                    a = e.attribute,
                    o = a.imageUrl,
                    i = a.name,
                    c = a.brand,
                    u = a.fuelType,
                    s = a.segment,
                    m = e.insurance,
                    y = e.additionalProducts,
                    L = e.amount;
                  h(u), x(s), w(n), d(L, "ko-KR");
                  var k = [
                    { name: "차종", description: p },
                    { name: "연료", description: g },
                    {
                      name: "이용 가능일",
                      description: ""
                        .concat(v, "월 ")
                        .concat(S, "일 (")
                        .concat(b, ") 부터")
                    }
                  ];
                  r({
                    id: t,
                    imageUrl: o,
                    name: i,
                    brand: c,
                    segmentKorean: p,
                    fuelKorean: g,
                    insurance: m,
                    amount: l,
                    carInfoList: k,
                    additionalProducts: y.map(function (e) {
                      return {
                        name: e.name,
                        amount: "월 ".concat(f(e.amount, "ko-KR"), " 원")
                      };
                    })
                  });
                }
              },
              [e, v, b, S]
            ),
            n
          );
        },
        d = n(29),
        f = n(7794),
        m = n.n(f),
        g = n(196).ZP.create({
          baseURL: "https://preonboarding.platdev.net/api/cars"
        }),
        p =
          ((r = (0, d.Z)(
            m().mark(function e(t) {
              var n;
              return m().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("ALL" !== (n = t.queryKey)[1]) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 4), g.get("");
                    case 4:
                    case 7:
                      return e.abrupt("return", e.sent.data.payload);
                    case 5:
                      return (
                        (e.next = 7), g.get("", { params: { segment: n[1] } })
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return r.apply(this, arguments);
          }),
        h = n(59),
        x = function (e) {
          var t = (0, h.a)(["cars", "ALL"], p, {
            select: function (t) {
              return t.find(function (t) {
                return t.id === e;
              });
            },
            onError: function (e) {
              return e;
            }
          });
          return {
            isLoading: t.isLoading,
            isError: t.isError,
            car: t.data,
            error: t.error
          };
        },
        y = n(7735),
        v = function () {
          var e = (0, a.useState)(y.categoryData[0]),
            t = e[0],
            n = e[1],
            r = (0, h.a)(["cars", t], p, {
              onError: function (e) {
                return e;
              }
            });
          return {
            isLoading: r.isLoading,
            isError: r.isError,
            cars: r.data,
            error: r.error,
            currentCategory: t,
            setCurrentCategory: n
          };
        };
    },
    5175: function (e, t, n) {
      n.d(t, {
        B: function () {
          return r;
        },
        o: function () {
          return a;
        }
      });
      var r = { gasoline: "가솔린", ev: "전기", hybrid: "하이브리드" },
        a = { ALL: "전체", C: "소형", D: "중형", E: "대형", SUV: "SUV" };
    },
    7735: function (e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return w;
          },
          categoryData: function () {
            return L;
          },
          default: function () {
            return k;
          }
        });
      var r = n(9521),
        a = r.ZP.button.withConfig({
          displayName: "styles__TagWrapper",
          componentId: "sc-1133xfk-0"
        })(
          [
            'padding:5px 17px;border-radius:62px;border:none;font-family:"Inter";font-weight:700;font-size:',
            ";line-height:17px;flex-shrink:0;cursor:pointer;",
            ""
          ],
          function (e) {
            return e.theme.fontSize.medium;
          },
          function (e) {
            var t = e.selected,
              n = e.theme;
            return (0, r.iv)(
              ["background-color:", ";color:", ";"],
              t ? n.color.black : n.color.gray,
              t ? n.color.white : n.color.black
            );
          }
        ),
        o = n(5175),
        i = n(5893),
        c = function (e) {
          var t = e.tagName,
            n = e.selected,
            r = e.index,
            c = e.onClick;
          return (0, i.jsx)(a, {
            selected: void 0 !== n && n,
            onClick: c,
            "data-index": r,
            children: o.o[t]
          });
        },
        u = n(7294),
        s = r.ZP.nav.withConfig({
          displayName: "styes__CategoryWrapper",
          componentId: "sc-covp6-0"
        })(
          [
            "display:flex;align-items:flex-start;gap:10px;padding:6px 12px;border-bottom:1px solid ",
            ";overflow-x:auto;overflow-y:hidden;&::-webkit-scrollbar{display:none;}"
          ],
          function (e) {
            return e.theme.color.black;
          }
        ),
        l = function (e) {
          var t = e.categoryData,
            n = e.currentCategory,
            r = e.setCurrentCategory;
          return (0, i.jsx)(s, {
            children: t.map(function (e, t) {
              return (0, i.jsx)(
                c,
                {
                  index: t,
                  selected: e === n,
                  onClick: function () {
                    return r(e);
                  },
                  tagName: e
                },
                "tag".concat(t)
              );
            })
          });
        },
        d = n(3621),
        f = r.ZP.div.withConfig({
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
          function (e) {
            return e.theme.color.black;
          },
          function (e) {
            return e.theme.color.black;
          },
          function (e) {
            return e.theme.fontSize.small;
          },
          function (e) {
            return e.theme.fontSize.XSmall;
          }
        ),
        m = r.ZP.span.withConfig({
          displayName: "styles__Container",
          componentId: "sc-1vtf5kr-0"
        })(
          [
            "padding:3px 14px;border-radius:42px;font-weight:700;line-height:15px;user-select:none;",
            ";"
          ],
          function (e) {
            var t = e.theme;
            return (0, r.iv)(
              ["font-size:", ";background-color:", ";color:", ";"],
              t.fontSize.XSmall,
              t.color.blue,
              t.color.white
            );
          }
        ),
        g = function (e) {
          var t = e.className;
          return (0, i.jsx)(m, { className: t, children: "신규" });
        },
        p = n(1664),
        h = n.n(p),
        x = n(4846),
        y = n(5675),
        v = n.n(y),
        b = function (e) {
          var t = e.carData,
            n = (0, x.fn)(),
            r = n.day,
            a = n.calculateDate,
            o = (0, x.tB)(),
            c = o.amountLocalString,
            s = o.changeLocalString,
            l = (0, x.BL)(),
            d = l.fuel,
            m = l.segment,
            p = l.changeFuelToKorean,
            y = l.changeSegmentToKorean;
          return (
            (0, u.useEffect)(
              function () {
                t &&
                  (a(t.createdAt),
                  s(t.amount),
                  p(t.attribute.fuelType),
                  y(t.attribute.segment));
              },
              [t]
            ),
            (0, i.jsx)(f, {
              children: (0, i.jsxs)(h(), {
                href: "/Detail/".concat(t.id),
                children: [
                  (0, i.jsxs)("div", {
                    className: "textWrapper",
                    children: [
                      (0, i.jsx)("p", {
                        className: "brand",
                        children: t.attribute.brand
                      }),
                      (0, i.jsx)("p", {
                        className: "name",
                        children: t.attribute.name
                      }),
                      (0, i.jsxs)("p", {
                        className: "type",
                        children: [m, " / ", d]
                      }),
                      (0, i.jsxs)("p", {
                        className: "amount",
                        children: ["월 ", c, " 원 부터"]
                      })
                    ]
                  }),
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)(v(), {
                      src: t.attribute.imageUrl,
                      alt: t.attribute.name,
                      width: 152,
                      height: 80,
                      priority: !0
                    })
                  }),
                  r < 1 && (0, i.jsx)(g, { className: "newItemTag" })
                ]
              })
            })
          );
        },
        S = function (e) {
          var t = e.carItemData;
          return e.isLoading
            ? (0, i.jsx)(d.T, {
                children: (0, i.jsx)("p", {
                  className: "message",
                  children: "불러오는 중"
                })
              })
            : t && 0 !== t.length
            ? (0, i.jsx)(d.T, {
                children: t.map(function (e) {
                  return (0, i.jsx)(b, { carData: e }, e.id);
                })
              })
            : (0, i.jsx)(d.T, {
                children: (0, i.jsx)("p", {
                  className: "message",
                  children: "차량이 없습니다."
                })
              });
        },
        w = !0,
        L = ["ALL", "E", "D", "C", "SUV"],
        k = function () {
          var e = (0, x.F)(),
            t = e.isLoading,
            n = e.cars,
            r = e.currentCategory,
            a = e.setCurrentCategory;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l, {
                categoryData: L,
                currentCategory: r,
                setCurrentCategory: a
              }),
              (0, i.jsx)(S, { isLoading: t, carItemData: n })
            ]
          });
        };
    }
  }
]);
