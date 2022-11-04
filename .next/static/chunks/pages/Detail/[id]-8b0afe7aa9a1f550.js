(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [229],
  {
    5769: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return _;
          }
        });
      var i = n(1163);
      n(7294);
      var r = n(9521),
        a = r.ZP.div.withConfig({
          displayName: "styles__ImgContainer",
          componentId: "sc-1ri9uws-0"
        })([
          "position:relative;width:100%;height:240px;& > img{width:100%;height:100%;object-fit:cover;}"
        ]),
        o = r.ZP.div.withConfig({
          displayName: "styles__Title",
          componentId: "sc-1ri9uws-1"
        })(
          [
            "width:100%;padding:1rem;& > h3{font-size:",
            ";font-weight:700;margin-bottom:0.5rem;}& > h1{font-size:",
            ";font-weight:700;}"
          ],
          function (e) {
            return e.theme.fontSize.large;
          },
          function (e) {
            return e.theme.fontSize.XLarge;
          }
        ),
        s = n(5675),
        c = n.n(s),
        l = n(5893),
        m = function (e) {
          var t = e.imageUrl,
            n = e.brand,
            i = e.name;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(a, {
                children:
                  t &&
                  (0, l.jsx)(c(), { src: t, alt: i, fill: !0, priority: !0 })
              }),
              (0, l.jsxs)(o, {
                children: [
                  (0, l.jsx)("h3", { children: n }),
                  (0, l.jsx)("h1", { children: i })
                ]
              })
            ]
          });
        },
        d = r.ZP.header.withConfig({
          displayName: "styled__Container",
          componentId: "sc-1sdl8rc-0"
        })(
          [
            "background-color:",
            ";width:100%;height:48px;padding-left:20px;h3{font-weight:700;font-size:",
            ";color:",
            ";line-height:48px;}"
          ],
          function (e) {
            return e.theme.color.blue;
          },
          function (e) {
            return e.theme.fontSize.medium;
          },
          function (e) {
            return e.theme.color.white;
          }
        ),
        u = function (e) {
          var t = e.title;
          return (0, l.jsx)(d, { children: (0, l.jsx)("h3", { children: t }) });
        },
        h = r.ZP.div.withConfig({
          displayName: "styles__Container",
          componentId: "sc-2q8xy9-0"
        })(
          [
            "height:48px;padding:13px 21px 14px 19px;display:flex;justify-content:space-between;align-items:center;span{font-size:",
            ";line-height:21px;}.name{font-weight:700;}.value{font-weight:400;}"
          ],
          function (e) {
            return e.theme.fontSize.medium;
          }
        ),
        p = function (e) {
          var t = e.name,
            n = e.value;
          return (0, l.jsxs)(h, {
            children: [
              (0, l.jsx)("span", {
                className: "name",
                children: void 0 === t ? "" : t
              }),
              (0, l.jsx)("span", {
                className: "value",
                children: void 0 === n ? "" : n
              })
            ]
          });
        },
        x = n(4846),
        f = n(3621),
        g = n(9008),
        j = n.n(g);
      function w(e) {
        var t = e.description,
          n = e.title,
          i = e.siteTitle,
          r = e.image;
        return (0, l.jsxs)(j(), {
          children: [
            (0, l.jsx)("title", { children: "".concat(n, " | ").concat(i) }),
            (0, l.jsx)("meta", { name: "description", content: t }),
            (0, l.jsx)("meta", { property: "og:type", content: "website" }),
            (0, l.jsx)("meta", { property: "og:title", content: n }),
            (0, l.jsx)("meta", { property: "og:description", content: t }),
            (0, l.jsx)("meta", { property: "og:site_name", content: i }),
            (0, l.jsx)("meta", { property: "og:image", content: r }),
            (0, l.jsx)("meta", {
              property: "twitter:card",
              content: "summary"
            }),
            (0, l.jsx)("meta", { property: "twitter:title", content: n }),
            (0, l.jsx)("meta", { property: "twitter:description", content: t })
          ]
        });
      }
      var v = !0,
        _ = function () {
          var e = (0, i.useRouter)().query.id,
            t = (0, x.XX)(Number(e)),
            n = t.isLoading,
            r = t.isError,
            a = t.car,
            o = (0, x.pD)(a),
            s = o.imageUrl,
            c = o.name,
            d = o.brand,
            h = o.insurance,
            g = o.amount,
            j = o.carInfoList,
            v = o.additionalProducts;
          return r
            ? (0, l.jsx)(f.T, {
                children: (0, l.jsx)("p", {
                  className: "message",
                  children: "서버에서 응답이 없습니다."
                })
              })
            : n
            ? (0, l.jsx)(f.T, {
                children: (0, l.jsx)("p", {
                  className: "message",
                  children: "불러오는 중"
                })
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(w, {
                    title: "".concat(d, " ").concat(c),
                    description: "월 ".concat(g, " 원"),
                    image: s
                  }),
                  (0, l.jsx)(m, { imageUrl: s, brand: d, name: c }),
                  (0, l.jsx)(p, { value: "월 ".concat(g, " 원") }),
                  (0, l.jsx)(u, { title: "차량 정보" }),
                  j.map(function (e) {
                    return (0,
                    l.jsx)(p, { name: e.name, value: e.description }, e.name);
                  }),
                  h.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(u, { title: "보험" }),
                        h.map(function (e, t) {
                          var n = e.name,
                            i = e.description;
                          return (0, l.jsx)(p, { name: n, value: i }, t);
                        })
                      ]
                    }),
                  v.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(u, { title: "추가 상품" }),
                        v.map(function (e, t) {
                          var n = e.name,
                            i = e.amount;
                          return (0, l.jsx)(p, { name: n, value: i }, t);
                        })
                      ]
                    })
                ]
              });
        };
    },
    9088: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/Detail/[id]",
        function () {
          return n(5769);
        }
      ]);
    }
  },
  function (e) {
    e.O(0, [143, 818, 774, 888, 179], function () {
      return e((e.s = 9088));
    }),
      (_N_E = e.O());
  }
]);
