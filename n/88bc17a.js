(window.webpackJsonp = window.webpackJsonp || []).push([[10], [function (t, e, n) {
    "use strict";
    n.d(e, "k", (function () {
        return d
    })), n.d(e, "m", (function () {
        return h
    })), n.d(e, "l", (function () {
        return m
    })), n.d(e, "e", (function () {
        return b
    })), n.d(e, "b", (function () {
        return g
    })), n.d(e, "s", (function () {
        return w
    })), n.d(e, "g", (function () {
        return v
    })), n.d(e, "h", (function () {
        return y
    })), n.d(e, "d", (function () {
        return x
    })), n.d(e, "r", (function () {
        return k
    })), n.d(e, "j", (function () {
        return _
    })), n.d(e, "t", (function () {
        return O
    })), n.d(e, "o", (function () {
        return L
    })), n.d(e, "q", (function () {
        return M
    })), n.d(e, "f", (function () {
        return E
    })), n.d(e, "c", (function () {
        return T
    })), n.d(e, "i", (function () {
        return S
    })), n.d(e, "p", (function () {
        return $
    })), n.d(e, "a", (function () {
        return H
    })), n.d(e, "v", (function () {
        return N
    })), n.d(e, "n", (function () {
        return Z
    })), n.d(e, "u", (function () {
        return B
    }));
    n(7), n(45), n(11), n(12);
    var r = n(28), i = n(2), o = n(5), a = n(25),
        s = (n(20), n(6), n(236), n(16), n(26), n(44), n(9), n(30), n(29), n(35), n(31), n(169), n(114), n(238), n(48), n(49), n(241), n(66), n(50), n(1)),
        l = n(33);

    function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function (e) {
                Object(o.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function u(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return f(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                    }, e: function (t) {
                        throw t
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, s = !1;
        return {
            s: function () {
                n = n.call(t)
            }, n: function () {
                var t = n.next();
                return a = t.done, t
            }, e: function (t) {
                s = !0, o = t
            }, f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function d(t) {
        s.default.config.errorHandler && s.default.config.errorHandler(t)
    }

    function h(t) {
        return t.then((function (t) {
            return t.default || t
        }))
    }

    function m(t) {
        return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
    }

    function b(t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = t.$children || [], i = u(r);
        try {
            for (i.s(); !(e = i.n()).done;) {
                var o = e.value;
                o.$fetch ? n.push(o) : o.$children && b(o, n)
            }
        } catch (a) {
            i.e(a)
        } finally {
            i.f()
        }
        return n
    }

    function g(t, e) {
        if (e || !t.options.__hasNuxtData) {
            var n = t.options._originDataFn || t.options.data || function () {
                return {}
            };
            t.options._originDataFn = n, t.options.data = function () {
                var r = n.call(this, this);
                return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), p(p({}, r), e)
            }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
        }
    }

    function w(t) {
        return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = s.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
    }

    function v(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
        return Array.prototype.concat.apply([], t.matched.map((function (t, r) {
            return Object.keys(t[n]).map((function (i) {
                return e && e.push(r), t[n][i]
            }))
        })))
    }

    function y(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return v(t, e, "instances")
    }

    function x(t, e) {
        return Array.prototype.concat.apply([], t.matched.map((function (t, n) {
            return Object.keys(t.components).reduce((function (r, i) {
                return t.components[i] ? r.push(e(t.components[i], t.instances[i], t, i, n)) : delete t.components[i], r
            }), [])
        })))
    }

    function k(t, e) {
        return Promise.all(x(t, function () {
            var t = Object(i.a)(regeneratorRuntime.mark((function t(n, r, i, o) {
                var a, s;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if ("function" != typeof n || n.options) {
                                t.next = 11;
                                break
                            }
                            return t.prev = 1, t.next = 4, n();
                        case 4:
                            n = t.sent, t.next = 11;
                            break;
                        case 7:
                            throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (a = Date.now(), (!(s = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || s + 6e4 < a) && (window.sessionStorage.setItem("nuxt-reload", a), window.location.reload(!0))), t.t0;
                        case 11:
                            return i.components[o] = n = w(n), t.abrupt("return", "function" == typeof e ? e(n, r, i, o) : n);
                        case 13:
                        case"end":
                            return t.stop()
                    }
                }), t, null, [[1, 7]])
            })));
            return function (e, n, r, i) {
                return t.apply(this, arguments)
            }
        }()))
    }

    function _(t) {
        return C.apply(this, arguments)
    }

    function C() {
        return (C = Object(i.a)(regeneratorRuntime.mark((function t(e) {
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (e) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        return t.next = 4, k(e);
                    case 4:
                        return t.abrupt("return", p(p({}, e), {}, {
                            meta: v(e).map((function (t, n) {
                                return p(p({}, t.options.meta), (e.matched[n] || {}).meta)
                            }))
                        }));
                    case 5:
                    case"end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }

    function O(t, e) {
        return j.apply(this, arguments)
    }

    function j() {
        return (j = Object(i.a)(regeneratorRuntime.mark((function t(e, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return e.context || (e.context = {
                            isStatic: !1,
                            isDev: !1,
                            isHMR: !1,
                            app: e,
                            store: e.store,
                            payload: n.payload,
                            error: n.error,
                            base: e.router.options.base,
                            env: {}
                        }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function (t, n, i) {
                            if (t) {
                                e.context._redirected = !0;
                                var o = Object(r.a)(n);
                                if ("number" == typeof t || "undefined" !== o && "object" !== o || (i = n || {}, n = t, o = Object(r.a)(n), t = 302), "object" === o && (n = e.router.resolve(n).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n)) throw n = Object(l.d)(n, i), window.location.replace(n), new Error("ERR_REDIRECT");
                                e.context.next({path: n, query: i, status: t})
                            }
                        }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([_(n.route), _(n.from)]);
                    case 3:
                        i = t.sent, o = Object(a.a)(i, 2), s = o[0], c = o[1], n.route && (e.context.route = s), n.from && (e.context.from = c), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                    case 15:
                    case"end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }

    function L(t, e) {
        return !t.length || e._redirected || e._errored ? Promise.resolve() : M(t[0], e).then((function () {
            return L(t.slice(1), e)
        }))
    }

    function M(t, e) {
        var n;
        return (n = 2 === t.length ? new Promise((function (n) {
            t(e, (function (t, r) {
                t && e.error(t), n(r = r || {})
            }))
        })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
    }

    function E(t, e) {
        if ("hash" === e) return window.location.hash.replace(/^#\//, "");
        t = decodeURI(t).slice(0, -1);
        var n = decodeURI(window.location.pathname);
        t && n.startsWith(t) && (n = n.slice(t.length));
        var r = (n || "/") + window.location.search + window.location.hash;
        return Object(l.c)(r)
    }

    function T(t, e) {
        return function (t, e) {
            for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", A(e)));
            return function (e, r) {
                for (var i = "", o = e || {}, a = (r || {}).pretty ? z : encodeURIComponent, s = 0; s < t.length; s++) {
                    var l = t[s];
                    if ("string" != typeof l) {
                        var c = o[l.name || "pathMatch"], p = void 0;
                        if (null == c) {
                            if (l.optional) {
                                l.partial && (i += l.prefix);
                                continue
                            }
                            throw new TypeError('Expected "' + l.name + '" to be defined')
                        }
                        if (Array.isArray(c)) {
                            if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                            if (0 === c.length) {
                                if (l.optional) continue;
                                throw new TypeError('Expected "' + l.name + '" to not be empty')
                            }
                            for (var u = 0; u < c.length; u++) {
                                if (p = a(c[u]), !n[s].test(p)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(p) + "`");
                                i += (0 === u ? l.prefix : l.delimiter) + p
                            }
                        } else {
                            if (p = l.asterisk ? R(c) : a(c), !n[s].test(p)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + p + '"');
                            i += l.prefix + p
                        }
                    } else i += l
                }
                return i
            }
        }(function (t, e) {
            var n, r = [], i = 0, o = 0, a = "", s = e && e.delimiter || "/";
            for (; null != (n = P.exec(t));) {
                var l = n[0], c = n[1], p = n.index;
                if (a += t.slice(o, p), o = p + l.length, c) a += c[1]; else {
                    var u = t[o], f = n[2], d = n[3], h = n[4], m = n[5], b = n[6], g = n[7];
                    a && (r.push(a), a = "");
                    var w = null != f && null != u && u !== f, v = "+" === b || "*" === b, y = "?" === b || "*" === b,
                        x = n[2] || s, k = h || m;
                    r.push({
                        name: d || i++,
                        prefix: f || "",
                        delimiter: x,
                        optional: y,
                        repeat: v,
                        partial: w,
                        asterisk: Boolean(g),
                        pattern: k ? D(k) : g ? ".*" : "[^" + I(x) + "]+?"
                    })
                }
            }
            o < t.length && (a += t.substr(o));
            a && r.push(a);
            return r
        }(t, e), e)
    }

    function S(t, e) {
        var n = {}, r = p(p({}, t), e);
        for (var i in r) String(t[i]) !== String(e[i]) && (n[i] = !0);
        return n
    }

    function $(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t; else try {
            e = JSON.stringify(t, null, 2)
        } catch (n) {
            e = "[".concat(t.constructor.name, "]")
        }
        return p(p({}, t), {}, {
            message: e,
            statusCode: t.statusCode || t.status || t.response && t.response.status || 500
        })
    }

    window.onNuxtReadyCbs = [], window.onNuxtReady = function (t) {
        window.onNuxtReadyCbs.push(t)
    };
    var P = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

    function z(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, (function (t) {
            return "%" + t.charCodeAt(0).toString(16).toUpperCase()
        }))
    }

    function R(t) {
        return z(t, !0)
    }

    function I(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }

    function D(t) {
        return t.replace(/([=!:$/()])/g, "\\$1")
    }

    function A(t) {
        return t && t.sensitive ? "" : "i"
    }

    function H(t, e, n) {
        t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
    }

    var N = l.b, Z = (l.e, l.a);

    function B(t) {
        try {
            window.history.scrollRestoration = t
        } catch (e) {
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
        return Ze
    })), n.d(e, "a", (function () {
        return j
    }));
    n(9), n(7), n(6), n(11), n(12);
    var r = n(2), i = n(5), o = (n(20), n(26), n(44), n(16), n(31), n(1)), a = n(3), s = n(196), l = n(129), c = n.n(l),
        p = n(52), u = n.n(p), f = n(130), d = n(33), h = n(0);
    "scrollRestoration" in window.history && (Object(h.u)("manual"), window.addEventListener("beforeunload", (function () {
        Object(h.u)("auto")
    })), window.addEventListener("load", (function () {
        Object(h.u)("manual")
    })));

    function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function b(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? m(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var g = function () {
    };
    o.default.use(f.a);
    var w = {
        mode: "history",
        base: "/",
        linkActiveClass: "_active-link",
        linkExactActiveClass: "_active-exact",
        scrollBehavior: function (t, e, n) {
            var r = !1, i = t !== e;
            n ? r = n : i && function (t) {
                var e = Object(h.g)(t);
                if (1 === e.length) {
                    var n = e[0].options;
                    return !1 !== (void 0 === n ? {} : n).scrollToTop
                }
                return e.some((function (t) {
                    var e = t.options;
                    return e && e.scrollToTop
                }))
            }(t) && (r = {x: 0, y: 0});
            var o = window.$nuxt;
            return (!i || t.path === e.path && t.hash !== e.hash) && o.$nextTick((function () {
                return o.$emit("triggerScroll")
            })), new Promise((function (e) {
                o.$once("triggerScroll", (function () {
                    if (t.hash) {
                        var n = t.hash;
                        void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                        try {
                            document.querySelector(n) && (r = {selector: n})
                        } catch (i) {
                            console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                        }
                    }
                    e(r)
                }))
            }))
        },
        routes: [{
            path: "/contacts", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 1088)))
            }, name: "contacts"
        }, {
            path: "/documents", component: function () {
                return Object(h.m)(n.e(14).then(n.bind(null, 1096)))
            }, name: "documents"
        }, {
            path: "/favourites", component: function () {
                return Object(h.m)(Promise.all([n.e(3), n.e(6), n.e(15)]).then(n.bind(null, 1087)))
            }, name: "favourites"
        }, {
            path: "/filter", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(3), n.e(6), n.e(16)]).then(n.bind(null, 1085)))
            }, name: "filter"
        }, {
            path: "/flats", component: function () {
                return Object(h.m)(n.e(18).then(n.bind(null, 1094)))
            }, name: "flats"
        }, {
            path: "/new", component: function () {
                return Object(h.m)(Promise.all([n.e(1), n.e(2), n.e(5), n.e(20)]).then(n.bind(null, 1080)))
            }, name: "new"
        }, {
            path: "/parking", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(3), n.e(22)]).then(n.bind(null, 1083)))
            }, name: "parking"
        }, {
            path: "/post", component: function () {
                return Object(h.m)(Promise.all([n.e(3), n.e(24)]).then(n.bind(null, 1089)))
            }, name: "post"
        }, {
            path: "/privacy", component: function () {
                return Object(h.m)(n.e(26).then(n.bind(null, 1097)))
            }, name: "privacy"
        }, {
            path: "/progress", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(8), n.e(35), n.e(27)]).then(n.bind(null, 1084)))
            }, name: "progress"
        }, {
            path: "/promo", component: function () {
                return Object(h.m)(n.e(29).then(n.bind(null, 1093)))
            }, name: "promo"
        }, {
            path: "/purchase", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(30)]).then(n.bind(null, 1092)))
            }, name: "purchase"
        }, {
            path: "/purchase/mortgage", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(2), n.e(4), n.e(31)]).then(n.bind(null, 1086)))
            }, name: "purchase-mortgage"
        }, {
            path: "/advantage/:slug?", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(5), n.e(12)]).then(n.bind(null, 1081)))
            }, name: "advantage-slug"
        }, {
            path: "/flats/:id", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(2), n.e(4), n.e(17)]).then(n.bind(null, 1079)))
            }, name: "flats-id"
        }, {
            path: "/parking/:id", component: function () {
                return Object(h.m)(Promise.all([n.e(0), n.e(1), n.e(2), n.e(4), n.e(21)]).then(n.bind(null, 1082)))
            }, name: "parking-id"
        }, {
            path: "/post/:slug", component: function () {
                return Object(h.m)(Promise.all([n.e(1), n.e(7), n.e(23)]).then(n.bind(null, 1091)))
            }, name: "post-slug"
        }, {
            path: "/print/:id", component: function () {
                return Object(h.m)(n.e(25).then(n.bind(null, 1090)))
            }, name: "print-id"
        }, {
            path: "/promo/:slug", component: function () {
                return Object(h.m)(Promise.all([n.e(1), n.e(7), n.e(28)]).then(n.bind(null, 1095)))
            }, name: "promo-slug"
        }, {
            path: "/", component: function () {
                return Object(h.m)(Promise.all([n.e(1), n.e(8), n.e(34), n.e(2), n.e(19)]).then(n.bind(null, 1078)))
            }, name: "index"
        }],
        fallback: !1
    };

    function v(t, e) {
        var n = e._app && e._app.basePath || w.base, r = new f.a(b(b({}, w), {}, {base: n})), i = r.push;
        r.push = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
                n = arguments.length > 2 ? arguments[2] : void 0;
            return i.call(this, t, e, n)
        };
        var o = r.resolve.bind(r);
        return r.resolve = function (t, e, n) {
            return "string" == typeof t && (t = Object(d.c)(t)), o(t, e, n)
        }, r
    }

    var y = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {type: String, default: ""},
                keepAlive: Boolean,
                keepAliveProps: {type: Object, default: void 0}
            },
            render: function (t, e) {
                var n = e.parent, r = e.data, i = e.props, o = n.$createElement;
                r.nuxtChild = !0;
                for (var a = n, s = n.$nuxt.nuxt.transitions, l = n.$nuxt.nuxt.defaultTransition, c = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && c++, n = n.$parent;
                r.nuxtChildDepth = c;
                var p = s[c] || l, u = {};
                x.forEach((function (t) {
                    void 0 !== p[t] && (u[t] = p[t])
                }));
                var f = {};
                k.forEach((function (t) {
                    "function" == typeof p[t] && (f[t] = p[t].bind(a))
                }));
                var d = f.beforeEnter;
                if (f.beforeEnter = function (t) {
                    if (window.$nuxt.$nextTick((function () {
                        window.$nuxt.$emit("triggerScroll")
                    })), d) return d.call(a, t)
                }, !1 === p.css) {
                    var h = f.leave;
                    (!h || h.length < 2) && (f.leave = function (t, e) {
                        h && h.call(a, t), a.$nextTick(e)
                    })
                }
                var m = o("routerView", r);
                return i.keepAlive && (m = o("keep-alive", {props: i.keepAliveProps}, [m])), o("transition", {
                    props: u,
                    on: f
                }, [m])
            }
        },
        x = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
        k = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
        _ = {props: {error: {type: Object}}}, C = n(131), O = n(4);
    var j = Object(O.a)(_, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
        }), [], !1, (function (t) {
            this.$style = C.default.locals || C.default
        }), null, null).exports, L = n(25), M = (n(48), n(49), {
            name: "Nuxt",
            components: {NuxtChild: y, NuxtError: j},
            props: {
                nuxtChildKey: {type: String, default: void 0},
                keepAlive: Boolean,
                keepAliveProps: {type: Object, default: void 0},
                name: {type: String, default: "default"}
            },
            errorCaptured: function (t) {
                this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
            },
            computed: {
                routerViewKey: function () {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(h.c)(this.$route.matched[0].path)(this.$route.params);
                    var t = Object(L.a)(this.$route.matched, 1)[0];
                    if (!t) return this.$route.path;
                    var e = t.components.default;
                    if (e && e.options) {
                        var n = e.options;
                        if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                    }
                    return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function () {
                o.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function (t) {
                var e = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
                    return e.errorFromNuxtError = !1
                })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {props: {to: "/"}}, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
                    return e.displayingNuxtError = !1
                })), t(j, {props: {error: this.nuxt.err}})) : t("NuxtChild", {key: this.routerViewKey, props: this.$props})
            }
        }), E = (n(35), n(45), n(30), n(29), {
            name: "NuxtLoading", data: function () {
                return {
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }
            }, computed: {
                left: function () {
                    return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                }
            }, beforeDestroy: function () {
                this.clear()
            }, methods: {
                clear: function () {
                    clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                }, start: function () {
                    var t = this;
                    return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function () {
                        return t.startTimer()
                    }), this.throttle) : this.startTimer(), this
                }, set: function (t) {
                    return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                }, get: function () {
                    return this.percent
                }, increase: function (t) {
                    return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                }, decrease: function (t) {
                    return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                }, pause: function () {
                    return clearInterval(this._timer), this
                }, resume: function () {
                    return this.startTimer(), this
                }, finish: function () {
                    return this.percent = this.reversed ? 0 : 100, this.hide(), this
                }, hide: function () {
                    var t = this;
                    return this.clear(), setTimeout((function () {
                        t.show = !1, t.$nextTick((function () {
                            t.percent = 0, t.reversed = !1
                        }))
                    }), 500), this
                }, fail: function (t) {
                    return this.canSucceed = !1, this
                }, startTimer: function () {
                    var t = this;
                    this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function () {
                        t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                    }), 100)
                }
            }, render: function (t) {
                var e = t(!1);
                return this.show && (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                    },
                    style: {width: this.percent + "%", left: this.left}
                })), e
            }
        }), T = (n(245), Object(O.a)(E, undefined, undefined, !1, null, null, null).exports), S = (n(247), n(249), n(149)),
        $ = (n(146), n(67));

    function P(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function z(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? P(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var R = {
        name: "MenuToggle",
        components: {CloseIcon: $.a},
        computed: z(z({}, Object(a.e)("menu", ["menuOpened"])), Object(a.e)("global", ["isLightTheme"]))
    }, I = n(132);
    var D = Object(O.a)(R, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {class: t.$style.MenuToggle}, [n("div", {
            class: [t.$style.circles, {
                _active: t.menuOpened,
                _light: t.isLightTheme
            }]
        }, [n("div", {class: t.$style.circle}), t._v(" "), n("div", {class: t.$style.circle}), t._v(" "), n("div", {class: t.$style.circle}), t._v(" "), n("div", {class: t.$style.circle})]), t._v(" "), n("close-icon", {
            class: [t.$style.close, {
                _active: t.menuOpened,
                _light: t.isLightTheme
            }], attrs: {"is-without-shadow": ""}
        })], 1)
    }), [], !1, (function (t) {
        this.$style = I.default.locals || I.default
    }), null, null).exports;

    function A(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    var H = {
        name: "CompanyLogo", props: {isPdf: {type: Boolean, default: !1}}, computed: function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? A(Object(n), !0).forEach((function (e) {
                    Object(i.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }({}, Object(a.e)("global", ["isLightTheme"]))
    }, N = H, Z = (n(297), Object(O.a)(N, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("svg", {
            class: ["company-logo", {_inversed: t.isPdf || t.isLightTheme}],
            attrs: {viewBox: "0 0 171 11", xmlns: "http://www.w3.org/2000/svg"}
        }, )
    }), [], !1, null, null, null).exports);

    function B(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    var G = {
        name: "ThemeToggle", computed: function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? B(Object(n), !0).forEach((function (e) {
                    Object(i.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }({}, Object(a.e)("global", ["isLightTheme"])), methods: {
            toggleTheme: function () {
                this.$store.commit("global/TOGGLE_THEME")
            }
        }
    }, V = G, U = n(133);
    var Y = Object(O.a)(V, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            class: t.$style.ThemeToggle,
            on: {click: t.toggleTheme}
        }, [n("div", {class: [t.$style.button, {_night: t.isLightTheme}]}), t._v(" "), n("div", {class: t.$style.descr}, [t.isLightTheme ? [t._v("\n            Ночь\n        ")] : [t._v("\n            День\n        ")]], 2)])
    }), [], !1, (function (t) {
        this.$style = U.default.locals || U.default
    }), null, null).exports;

    function F(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function q(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? F(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var J = { // Левое меню
        name: "StellarAside",
        components: {ThemeToggle: Y, CompanyLogo: Z, MenuToggle: D},
        data: function () {
            return {
                links: [
                    {
                        link: {path: "/", hash: "#intro"},
                        exact: !0,
                        name: "ГЛАВНАЯ"
                    }, {
                        link: {path: "new"},
                        name: "БОНОЛИТ",
                        subname: "Газобетонные блоки"
                    }, {
                        link: {path: "filter/index.html"},
                        name: "ИСКУЛЬТ-ИТОНГ",
                        subname: "Газобетонные блоки"
                    }, {
                        link: {path: "parking/index.html"},
                        name: "ЛСР",
                        subname: "Кирпич"
                    }, {
                        link: {path: "new"},
                        name: "ХОЛЬЦИМ",
                        subname: "Цемент"
                    }, {
                        link: {path: "new"},
                        name: "КАПАРОЛ",
                        subname: "Краски"
                    }, {
                        link: {path: "new"},
                        name: "КРАЙЗЕЛЬ, ПЕРФЕКТА",
                        subname: "Штукатурки, Клей, Шпаклёвка"
                    }, {
                        link: {path: "new"},
                        name: "КЕРАМЗИТ",
                    }, {
                        link: {path: "/", hash: "#about"},
                        exact: !0,
                        name: "О КОМПАНИИ"
                    }, {
                        link: {path: "contacts/index.html"},
                        name: "КОНТАКТЫ"
                    }
                ]
            }
        },
        computed: q(q({}, Object(a.e)("menu", ["menuOpened"])), Object(a.e)("global", ["isLightTheme"])),
        methods: {
            toggleMenu: function () {
                this.$store.commit("menu/SET_MENU_STATE", !this.menuOpened)
            }, checkJump: function (t) {
                var e = t.link;
                "/" === this.$route.path && "/" === e.path && this.$store.commit("menu/JUMP_TO_NEXT_VIEW", e)
            }
        }
    }, W = n(134);
    var X = Object(O.a)(J, (function () {
        var t = this, e = t.$createElement, r = t._self._c || e;
        return r("div", {class: [t.$style.Aside, {_light: t.isLightTheme}]}, [r("n-link", {
            directives: [{
                name: "scroll-to",
                rawName: "v-scroll-to",
                value: "body",
                expression: "'body'"
            }], class: t.$style.logoLink, attrs: {to: "/"}, nativeOn: {
                click: function (e) {
                    return t.checkJump({link: {path: ""}})
                }
            }
        }, [t.isLightTheme ? r("img", {
            class: [t.$style.logo],
            attrs: {src: n(292)}
        }) : r("img", {
            class: [t.$style.logo],
            attrs: {src: n(293)}
        })]), t._v(" "), r("p", {class: [t.$style.project, {_light: t.isLightTheme}]}, [t._v("\n        Строительные материалы\n    ")]), t._v(" "), r("div", {class: t.$style.asideWrapper}, [r("menu-toggle", {
            class: t.$style.menu,
            nativeOn: {
                click: function (e) {
                    return t.toggleMenu.apply(null, arguments)
                }
            }
        }), t._v(" "), r("nav", {class: [t.$style.nav, {_hidden: t.menuOpened}]}, t._l(t.links, (function (e, n) {
            return r("n-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: e.isScrollTop ? "body" : !!e.link.hash && e.link.hash,
                    expression: "link.isScrollTop ? 'body' : link.link.hash ? link.link.hash : false"
                }],
                key: n,
                class: [t.$style.navLink, e.classLink ? e.classLink : ""],
                attrs: {to: e.link, exact: e.exact || !1},
                nativeOn: {
                    click: function (n) {
                        return t.checkJump(e)
                    }
                }
            }, [
                t._v("\n                " + t._s(e.name) + "\n            "),
                r("div", {class: "menu__subname"}, [t._v(!e.subname ? "" : e.subname)], 1)
            ])
        })), 1), t._v(" "), r("div", {class: t.$style.themeButton}, [r("theme-toggle")], 1)], 1), t._v(" "), r("a", {
            class: t.$style.company,
            attrs: {href: "https://tashir-estate.ru/", target: "_blank"}
        }, [r("company-logo")], 1)], 1)
    }), [], !1, (function (t) {
        this.$style = W.default.locals || W.default
    }), null, null), Q = X.exports;

    function K(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function tt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? K(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var et = {
        name: "StellarSprite",
        computed: tt(tt({}, Object(a.e)("global", ["isLightTheme"])), {}, {
            matrixColor: function () {
                return this.isLightTheme ? "0.18 0 0 0 0\n                                0 0.385 0 0 0\n                                0 0 0.54 0 0\n                                0 0 0 1 0" : "0.6588235294117647 0 0 0 0\n                               0 0.7529411764705882 0 0 0\n                               0 0 0.8274509803921568 0 0\n                               0 0 0 1 0"
            }, arrowColor: function () {
                return this.isLightTheme ? "#222326" : "#ffffff"
            }
        })
    }, nt = Object(O.a)(et, (function () {
        var t = this, e = t.$createElement, r = t._self._c || e;
        return r("svg", {
            staticStyle: {width: "0", height: "0", position: "absolute", top: "-100vw", left: "-100vw"},
            attrs: {xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink"}
        }, [r("defs", [r("symbol", {
            attrs: {
                id: "logo-stellar",
                viewBox: "0 0 110 52",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
            }
        }, [r("g", {attrs: {"clip-path": "url(#clip0)"}}, [r("path", {
            attrs: {
                d: "M70.6012 21.634H69.7158V29.3866H70.6012V21.634Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M75.9546 17.777H79.9388V16.945H76.84V14.0709H79.7778V13.3145H76.84V10.7807H79.9388V9.98657H75.9546V17.777Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M73.2578 22.4282H75.9542V29.3866H76.8395V22.4282H79.4957V21.634H73.2578V22.4282Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M64.3236 22.2011C65.0479 22.2011 66.0541 22.4281 66.8187 23.2222L67.3016 22.5037C66.537 21.7852 65.5711 21.407 64.2833 21.407C61.4662 21.407 59.8564 23.26 59.8564 25.4913C59.8564 27.7225 61.426 29.5378 64.2833 29.5378C65.5309 29.5378 66.4967 29.1596 67.3016 28.441L66.8187 27.7225C65.9736 28.5167 65.0479 28.7436 64.3236 28.7436C62.1101 28.7436 60.8223 27.3443 60.8223 25.4535C60.8223 23.5626 62.1101 22.2011 64.3236 22.2011Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M62.9568 17.1713C61.9507 17.1713 61.4678 16.604 61.1459 15.9233L60.502 16.5284C60.9446 17.5116 61.9105 17.9276 62.9568 17.9276C64.4056 17.9276 65.291 16.9822 65.291 15.8099C65.291 14.4862 64.4861 13.8433 63.1983 13.3139C62.4739 13.0114 61.7898 12.5954 61.7898 11.8012C61.7898 10.9692 62.3934 10.5532 63.0373 10.5532C63.6008 10.5532 64.2044 10.8936 64.4459 11.4608L65.0898 10.8558C64.6471 10.1372 64.0032 9.79688 63.0373 9.79688C61.9507 9.79688 60.9044 10.4776 60.9044 11.7634C60.9044 13.087 61.7093 13.5408 62.7959 14.0703C63.5605 14.4106 64.3654 14.7888 64.3654 15.8099C64.3654 16.604 63.7215 17.1713 62.9568 17.1713Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M73.2577 9.98657H67.0601V10.7807H69.7162V17.777H70.6016V10.7807H73.2577V9.98657Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M98.1693 9.98657L94.7485 17.777L95.6339 17.8904L96.801 15.1676H100.342L101.51 17.8904L102.395 17.777L99.0547 9.98657H98.1693ZM100.061 14.3734H97.2034L97.6864 13.3145C98.0083 12.596 98.29 11.8396 98.6522 11.0076C99.0144 11.8396 99.2961 12.596 99.6181 13.3145L100.061 14.3734Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M107.384 13.9574C108.31 13.6927 108.994 13.0498 108.994 12.0665C108.994 10.6673 107.988 9.98657 106.62 9.98657H104.406V17.777H105.292V10.7051H106.539C107.586 10.7051 108.109 11.1589 108.109 12.0665C108.109 13.1632 107.183 13.428 106.217 13.5792L108.793 17.8526L109.638 17.7392L107.384 13.9574Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M85.291 24.2053C84.9691 24.886 84.6874 25.4533 84.4057 26.0205H84.3654C84.0435 25.3398 83.7617 24.7725 83.48 24.2053L82.1117 21.4824L81.2666 21.7093L83.9227 26.966V27.1551V29.3863H84.8081V27.1551V26.966L87.4642 21.7093L86.6191 21.4824L85.291 24.2053Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M83.9617 9.98657H83.0361V17.777H87.7447V16.945H83.9617V9.98657Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M90.1612 9.98657H89.2759V17.777H93.9844V16.945H90.1612V9.98657Z",
                fill: "white"
            }
        })]), t._v(" "), r("rect", {
            attrs: {
                width: "51.9863",
                height: "52",
                fill: "url(#pattern0)"
            }
        }), t._v(" "), r("defs", [r("pattern", {
            attrs: {
                id: "pattern0",
                patternContentUnits: "objectBoundingBox",
                width: "1",
                height: "1"
            }
        }, [r("use", {
            attrs: {
                "xlink:href": "#image0",
                transform: "scale(0.00141443)"
            }
        })]), t._v(" "), r("clipPath", {attrs: {id: "clip0"}}, [r("rect", {
            attrs: {
                width: "50.1027",
                height: "20.0464",
                fill: "white",
                transform: "translate(59.897 9.79712)"
            }
        })]), t._v(" "), r("image", {
            attrs: {
                id: "image0",
                width: "707",
                height: "707",
                "xlink:href": n(173)
            }
        })])]), t._v(" "), r("symbol", {
            attrs: {
                id: "logo-stellar-mob",
                viewBox: "0 0 119 31",
                fill: "none"
            }
        }, [r("rect", {
            attrs: {
                width: "30.8301",
                height: "31",
                fill: "url(#pattern0)"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M53.6722 16.4173H57.5443V15.5542H54.5327V12.5723H57.3878V11.7876H54.5327V9.15889H57.5443V8.33496H53.6722V16.4173Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M41.0391 15.789C40.0613 15.789 39.592 15.2004 39.2791 14.4942L38.6533 15.122C39.0835 16.1421 40.0222 16.5737 41.0391 16.5737C42.4471 16.5737 43.3076 15.5928 43.3076 14.3765C43.3076 13.0033 42.5253 12.3363 41.2738 11.787C40.5698 11.4731 39.9049 11.0416 39.9049 10.2176C39.9049 9.35446 40.4916 8.92288 41.1173 8.92288C41.6649 8.92288 42.2516 9.27599 42.4862 9.86451L43.112 9.23676C42.6818 8.4913 42.056 8.13818 41.1173 8.13818C40.0613 8.13818 39.0444 8.84441 39.0444 10.1784C39.0444 11.5516 39.8267 12.0224 40.8827 12.5717C41.6258 12.9248 42.408 13.3172 42.408 14.3765C42.408 15.2004 41.7822 15.789 41.0391 15.789Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M51.0521 8.33496H45.0289V9.15889H47.6103V16.4173H48.4707V9.15889H51.0521V8.33496Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M75.2618 8.33496L71.9374 16.4173L72.7978 16.535L73.9321 13.7101H77.3739L78.5081 16.535L79.3685 16.4173L76.1223 8.33496H75.2618ZM77.1001 12.8862H74.3232L74.7925 11.7876C75.1054 11.0422 75.3792 10.2575 75.7312 9.3943C76.0832 10.2575 76.357 11.0422 76.6698 11.7876L77.1001 12.8862Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M84.218 12.4546C85.1175 12.18 85.7824 11.513 85.7824 10.4929C85.7824 9.04119 84.8046 8.33496 83.4749 8.33496H81.3237V16.4173H82.1842V9.08042H83.3966C84.4135 9.08042 84.922 9.55124 84.922 10.4929C84.922 11.6307 84.0224 11.9053 83.0837 12.0623L85.5869 16.4958L86.4082 16.3781L84.218 12.4546Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M61.4556 8.33496H60.556V16.4173H65.1321V15.5542H61.4556V8.33496Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M67.4785 8.33496H66.618V16.4173H71.1941V15.5542H67.4785V8.33496Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M102.612 8.37402H101.752V16.4172H102.612V8.37402Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M105.194 9.19795H107.815V16.4172H108.675V9.19795H111.256V8.37402H105.194V9.19795Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M96.511 8.96162C97.215 8.96162 98.1928 9.19703 98.9359 10.021L99.4053 9.2755C98.6622 8.53004 97.7235 8.1377 96.4719 8.1377C93.7341 8.1377 92.1697 10.0602 92.1697 12.3751C92.1697 14.6899 93.695 16.5732 96.4719 16.5732C97.6844 16.5732 98.623 16.1808 99.4053 15.4354L98.9359 14.6899C98.1146 15.5138 97.215 15.7492 96.511 15.7492C94.3599 15.7492 93.1083 14.2976 93.1083 12.3358C93.1083 10.3741 94.3599 8.96162 96.511 8.96162Z",
                fill: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M116.888 11.0415C116.575 11.7477 116.301 12.3362 116.028 12.9247H115.989C115.676 12.2185 115.402 11.63 115.128 11.0415L113.798 8.21655L112.977 8.45196L115.558 13.9056V14.1018V16.4166H116.419V14.1018V13.9056L119 8.45196L118.179 8.21655L116.888 11.0415Z",
                fill: "white"
            }
        }), t._v(" "), r("defs", [r("pattern", {
            attrs: {
                id: "pattern0",
                patternContentUnits: "objectBoundingBox",
                width: "1",
                height: "1"
            }
        }, [r("use", {
            attrs: {
                "xlink:href": "#image0",
                transform: "scale(0.00141443)"
            }
        })]), t._v(" "), r("image", {
            attrs: {
                id: "image0",
                width: "707",
                height: "707",
                "xlink:href": n(173)
            }
        })])]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-backward",
                viewBox: "0 0 12 13",
                fill: "none"
            }
        }, [r("path", {attrs: {d: "M6.26074 1.05127L2.22461 6.57764L6.26074 12.0728"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-links",
                viewBox: "0 0 16 15"
            }
        }, [r("path", {attrs: {d: "M10.2819 0.5H15.3735V5.5853M1.37354 9.37993V14.5H6.48724"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-sort",
                viewBox: "0 0 5 16"
            }
        }, [r("path", {attrs: {d: "M2.89648 13.0864L2.89648 0.625"}}), t._v(" "), r("path", {attrs: {d: "M2.89648 15.2114L1.24562 11.2271L4.54735 11.2271L2.89648 15.2114Z"}})]), t._v(" "), r("symbol", {attrs: {id: "ic-view-cards"}}, [r("path", {attrs: {d: "M1.14355 5.36035L1.14355 0.672852"}}), t._v(" "), r("path", {attrs: {d: "M4.95605 5.36035L4.95605 0.672852"}}), t._v(" "), r("path", {attrs: {d: "M8.76855 5.36035L8.76855 0.672852"}}), t._v(" "), r("path", {attrs: {d: "M1.14355 11.9521L1.14355 7.26465"}}), t._v(" "), r("path", {attrs: {d: "M4.95605 11.9521L4.95605 7.26465"}}), t._v(" "), r("path", {attrs: {d: "M8.76855 11.9521L8.76855 7.26465"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-view-rows",
                viewBox: "0 0 14 9"
            }
        }, [r("path", {attrs: {d: "M0.669922 0.5H13.1699"}}), t._v(" "), r("path", {attrs: {d: "M0.669922 4.3125H13.1699"}}), t._v(" "), r("path", {attrs: {d: "M0.669922 8.125H13.1699"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-reserved",
                viewBox: "0 0 12 12"
            }
        }, [r("rect", {
            attrs: {
                x: "1.27734",
                y: "3.875",
                width: "9.75",
                height: "6.75",
                rx: "1"
            }
        }), t._v(" "), r("path", {attrs: {d: "M3.83984 3.875V1.6875C3.83984 1.13522 4.28756 0.6875 4.83984 0.6875H7.46484C8.01713 0.6875 8.46484 1.13522 8.46484 1.6875V3.875"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-cross",
                viewBox: "0 0 24 24"
            }
        }, [r("path", {attrs: {d: "M17.7671 6.61633L6.45338 17.93"}}), t._v(" "), r("path", {attrs: {d: "M17.7671 17.9301L6.45338 6.61634"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-vr",
                viewBox: "0 0 83 45"
            }
        }, [r("rect", {
            attrs: {
                x: "0.961914",
                y: "5.79663",
                width: "81.5",
                height: "33.5",
                rx: "4"
            }
        }), t._v(" "), r("path", {attrs: {d: "M34.4619 11.7966H48.9619"}}), t._v(" "), r("path", {attrs: {d: "M8.96191 3.04663C8.96191 1.94206 9.85734 1.04663 10.9619 1.04663H72.2119C73.3165 1.04663 74.2119 1.94206 74.2119 3.04663V5.79663H8.96191V3.04663Z"}}), t._v(" "), r("path", {attrs: {d: "M74.2119 42.1716C74.2119 43.2762 73.3165 44.1716 72.2119 44.1716L10.9619 44.1716C9.85734 44.1716 8.96191 43.2762 8.96191 42.1716L8.96191 39.4216L74.2119 39.4216L74.2119 42.1716Z"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-marker",
                viewBox: "0 0 16 25",
                fill: "none"
            }
        }, [r("path", {attrs: {d: "M15.2934 7.97482C15.2934 10.0634 14.4341 14.0282 13.0239 17.4791C12.3205 19.2005 11.4937 20.7592 10.5939 21.8784C9.68087 23.0141 8.7735 23.5996 7.91818 23.5996C7.06285 23.5996 6.15548 23.0141 5.24247 21.8784C4.34266 20.7592 3.51585 19.2005 2.81241 17.4791C1.40224 14.0282 0.542969 10.0634 0.542969 7.97482C0.542969 3.9016 3.84496 0.599609 7.91818 0.599609C11.9914 0.599609 15.2934 3.9016 15.2934 7.97482Z"}}), t._v(" "), r("circle", {
            attrs: {
                cx: "7.91812",
                cy: "9.14518",
                r: "2.9545"
            }
        })]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-filter",
                viewBox: "0 0 31 32",
                fill: "none"
            }
        }, [r("circle", {
            attrs: {
                cx: "15.5",
                cy: "16.073",
                r: "15",
                stroke: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M15.5 8.823L15.5 23.323",
                stroke: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M11.0625 8.823L11.0625 23.323",
                stroke: "white"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M19.9375 8.823L19.9375 23.323",
                stroke: "white"
            }
        }), t._v(" "), r("rect", {
            attrs: {
                x: "9.875",
                y: "11.448",
                width: "2.375",
                height: "3.0625",
                fill: "white"
            }
        }), t._v(" "), r("rect", {
            attrs: {
                x: "14.3125",
                y: "17.6355",
                width: "2.375",
                height: "3.0625",
                fill: "white"
            }
        }), t._v(" "), r("rect", {
            attrs: {
                x: "18.75",
                y: "11.448",
                width: "2.375",
                height: "3.0625",
                fill: "white"
            }
        })]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-filter--dark",
                viewBox: "0 0 31 32",
                fill: "none"
            }
        }, [r("circle", {
            attrs: {
                cx: "15.5",
                cy: "16.073",
                r: "15",
                stroke: "#222326"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M15.5 8.823L15.5 23.323",
                stroke: "#222326"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M11.0625 8.823L11.0625 23.323",
                stroke: "#222326"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M19.9375 8.823L19.9375 23.323",
                stroke: "#222326"
            }
        }), t._v(" "), r("rect", {
            attrs: {
                x: "9.875",
                y: "11.448",
                width: "2.375",
                height: "3.0625",
                fill: "#222326"
            }
        }), t._v(" "), r("rect", {
            attrs: {
                x: "14.3125",
                y: "17.6355",
                width: "2.375",
                height: "3.0625",
                fill: "#222326"
            }
        }), t._v(" "), r("rect", {
            attrs: {
                x: "18.75",
                y: "11.448",
                width: "2.375",
                height: "3.0625",
                fill: "#222326"
            }
        })]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-filter-close",
                viewBox: "0 0 31 32",
                fill: "none"
            }
        }, [r("circle", {
            attrs: {
                cx: "15.5",
                cy: "15.875",
                r: "15"
            }
        }), t._v(" "), r("path", {attrs: {d: "M10.373 10.7485L20.6261 21.0016"}}), t._v(" "), r("path", {attrs: {d: "M20.627 10.7485L10.3739 21.0016"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-view",
                viewBox: "0 0 36 35",
                fill: "none"
            }
        }, [r("circle", {
            attrs: {
                cx: "18.001",
                cy: "17.4995",
                r: "17"
            }
        }), t._v(" "), r("path", {attrs: {d: "M17.8844 12.3635C14.8505 12.3635 12.0992 14.0014 10.0691 16.662C9.90341 16.8799 9.90341 17.1844 10.0691 17.4024C12.0992 20.0661 14.8505 21.7041 17.8844 21.7041C20.9183 21.7041 23.6695 20.0661 25.6997 17.4056C25.8654 17.1877 25.8654 16.8831 25.6997 16.6652C23.6692 14.0014 20.9183 12.3635 17.8844 12.3635ZM18.001 18.8032C16.9161 18.8705 16.0196 17.989 16.091 16.9184C16.1462 16.0337 16.8738 15.3189 17.7704 15.2612C18.8553 15.1939 19.7518 16.0754 19.6803 17.146C19.6219 18.0339 18.8943 18.7487 18.001 18.8032Z"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-cards",
                viewBox: "0 0 9 12",
                fill: "none"
            }
        }, [r("path", {attrs: {d: "M0.674805 4.72119L0.674804 0.0336914"}}), t._v(" "), r("path", {attrs: {d: "M4.4873 4.72119L4.4873 0.0336914"}}), t._v(" "), r("path", {attrs: {d: "M8.2998 4.72119L8.2998 0.0336914"}}), t._v(" "), r("path", {attrs: {d: "M0.674805 11.313L0.674804 6.62549"}}), t._v(" "), r("path", {attrs: {d: "M4.4873 11.313L4.4873 6.62549"}}), t._v(" "), r("path", {attrs: {d: "M8.2998 11.313L8.2998 6.62549"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-rows",
                viewBox: "0 0 13 9",
                fill: "none"
            }
        }, [r("path", {attrs: {d: "M0.201172 0.86084H12.7012"}}), t._v(" "), r("path", {attrs: {d: "M0.201172 4.67334H12.7012"}}), t._v(" "), r("path", {attrs: {d: "M0.201172 8.48584H12.7012"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-play",
                viewBox: "0 0 31 31"
            }
        }, [r("circle", {
            attrs: {
                cx: "15.606",
                cy: "15.2012",
                r: "15.144",
                fill: "#7251EF",
                "fill-opacity": "0.3"
            }
        }), t._v(" "), r("circle", {
            attrs: {
                cx: "15.606",
                cy: "15.2012",
                r: "11.5",
                fill: "#7251EF"
            }
        }), t._v(" "), r("path", {
            attrs: {
                d: "M18.606 15.2012L14.106 17.7992L14.106 12.6031L18.606 15.2012Z",
                fill: "#C4C4C4"
            }
        })]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-arrow-bold",
                viewBox: "0 0 6 10"
            }
        }, [r("path", {attrs: {d: "M3.81846 5L0 1.11094L1.09077 0L6 5L1.09077 10L0 8.88906L3.81846 5Z"}})]), t._v(" "), r("symbol", {
            attrs: {
                id: "ic-plus",
                viewBox: "0 0 10 10"
            }
        }, [r("path", {
            attrs: {
                d: "M5 9.5L5 0.5M0.5 5L9.5 5",
                "stroke-width": "1.5"
            }
        })]), t._v(" "), r("svg", {
            attrs: {
                id: "circle-index-stroke",
                viewBox: "0 0 100 100"
            }
        }, [r("circle", {
            attrs: {
                cx: "50",
                cy: "50",
                r: "47",
                stroke: "url(#circle-index-stroke-grandient)",
                "stroke-width": ".5",
                fill: "none",
                transform: "rotate(90 50 50)"
            }
        })]), t._v(" "), r("symbol", {
            attrs: {
                id: "circle-index-stroke-light",
                viewBox: "0 0 235 235",
                fill: "none"
            }
        }, [r("rect", {
            attrs: {
                x: "1.44104",
                y: "186.52",
                width: "191",
                height: "191",
                rx: "95.5",
                transform: "rotate(-75.6959 1.44104 186.52)"
            }
        }), t._v(" "), r("defs", [r("radialGradient", {
            attrs: {
                id: "circle-index-stroke-gradient-light",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(53.8293 130.121) rotate(80.1921) scale(252.45)"
            }
        }, [r("stop", {attrs: {"stop-color": "#7251EF"}}), t._v(" "), r("stop", {
            attrs: {
                offset: "1",
                "stop-color": "#7251EF",
                "stop-opacity": "0"
            }
        })], 1)], 1)]), t._v(" "), r("filter", {attrs: {id: "feMatrix"}}, [r("feColorMatrix", {
            attrs: {
                values: t.matrixColor,
                type: "matrix"
            }
        })], 1), t._v(" "), r("linearGradient", {
            attrs: {
                id: "long-arrow-0",
                x1: "16.734",
                y1: "8.56225",
                x2: "0.359375",
                y2: "8.56226",
                gradientUnits: "userSpaceOnUse"
            }
        }, [r("stop", {attrs: {"stop-color": t.arrowColor}}), t._v(" "), r("stop", {
            attrs: {
                "stop-color": t.arrowColor,
                offset: "1",
                "stop-opacity": "0"
            }
        })], 1), t._v(" "), r("linearGradient", {
            attrs: {
                id: "long-arrow-1",
                x1: "20.486",
                y1: "8.56201",
                x2: "15.3931",
                y2: "8.56201",
                gradientUnits: "userSpaceOnUse"
            }
        }, [r("stop", {attrs: {"stop-color": t.arrowColor}}), t._v(" "), r("stop", {
            attrs: {
                "stop-color": t.arrowColor,
                offset: "1",
                "stop-opacity": "0"
            }
        })], 1), t._v(" "), r("linearGradient", {
            attrs: {
                id: "circle-index-stroke-grandient",
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%"
            }
        }, [r("stop", {attrs: {offset: "0%", "stop-color": "#fff"}}), t._v(" "), r("stop", {
            attrs: {
                offset: "100%",
                "stop-color": "rgba(255,255,255,0)"
            }
        })], 1)], 1)])
    }), [], !1, null, null, null).exports, rt = {name: "CommonSprite"}, it = Object(O.a)(rt, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("svg", {
            staticStyle: {display: "none"},
            attrs: {xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink"}
        }, [n("defs", [n("symbol", {
            attrs: {
                id: "logo-facebook",
                viewBox: "0 0 9 17"
            }
        }, [n("path", {attrs: {d: "M8.65186 0.864657L6.57779 0.861328C4.24737 0.861328 2.74092 2.40606 2.74092 4.79974V6.6158H0.653529C0.473754 6.61414 0.327271 6.76062 0.327271 6.9404V9.57044C0.327271 9.75022 0.473754 9.8967 0.653529 9.8967H2.73926V16.5351C2.73926 16.7148 2.88574 16.8613 3.06551 16.8613H5.78711C5.96689 16.8613 6.11337 16.7148 6.11337 16.5351V9.89837H8.55199C8.73176 9.89837 8.87825 9.75188 8.87825 9.57211L8.87991 6.94206C8.87991 6.8555 8.84496 6.77227 8.78503 6.71068C8.72511 6.64909 8.64021 6.61414 8.55365 6.61414H6.11337V5.0744C6.11337 4.33532 6.28982 3.95912 7.25361 3.95912H8.65186C8.83164 3.95912 8.97812 3.81264 8.97812 3.63286V1.19092C8.97812 1.01114 8.83164 0.864657 8.65186 0.864657Z"}})]), t._v(" "), n("symbol", {
            attrs: {
                id: "logo-flickr",
                viewBox: "0 0 14 7"
            }
        }, [n("g", {attrs: {"clip-path": "url(#flickr-clip)"}}, [n("path", {attrs: {d: "M13.8803 3.86111C13.8803 5.57844 12.4877 6.97222 10.7696 6.97222C9.05153 6.97222 7.65886 5.58 7.65886 3.86111C7.65886 2.14222 9.05153 0.75 10.7696 0.75C12.4877 0.75 13.8803 2.14378 13.8803 3.86111ZM3.11074 0.75C1.39266 0.75 0 2.14378 0 3.86111C0 5.57844 1.39266 6.97222 3.11074 6.97222C4.82882 6.97222 6.22148 5.58 6.22148 3.86111C6.22148 2.14378 4.82882 0.75 3.11074 0.75Z"}})]), t._v(" "), n("defs", [n("clipPath", {attrs: {id: "flickr-clip"}}, [n("rect", {
            attrs: {
                width: "13.8803",
                height: "6.22222",
                fill: "white",
                transform: "translate(0 0.75)"
            }
        })])])]), t._v(" "), n("symbol", {
            attrs: {
                id: "logo-telegram",
                viewBox: "0 0 19 17"
            }
        }, [n("path", {attrs: {d: "M0.712197 8.53291L4.94669 10.1133L6.58585 15.3842C6.69059 15.7217 7.10344 15.8466 7.37725 15.6225L9.73737 13.6985C9.98483 13.4969 10.337 13.4865 10.5955 13.6746L14.8527 16.7655C15.1461 16.9786 15.5608 16.8181 15.6343 16.4635L18.7527 1.46297C18.833 1.07584 18.4526 0.753034 18.0845 0.895756L0.707296 7.5994C0.278518 7.76479 0.282193 8.37181 0.712197 8.53291ZM6.32123 9.27225L14.5967 4.1753C14.7455 4.08403 14.8986 4.28494 14.7706 4.40378L7.94079 10.7521C7.70067 10.9757 7.5457 11.2746 7.50221 11.5993L7.26944 13.3236C7.23882 13.5539 6.91539 13.5766 6.85169 13.3536L5.95677 10.21C5.85447 9.8511 6.00393 9.46826 6.32123 9.27225Z"}})]), t._v(" "), n("symbol", {
            attrs: {
                id: "logo-youtube",
                viewBox: "0 0 16 12"
            }
        }, [n("path", {attrs: {d: "M15.281 1.55571C14.8601 0.807226 14.4035 0.669347 13.4735 0.616923C12.5447 0.553893 10.2086 0.527832 8.18469 0.527832C6.15711 0.527832 3.82014 0.553893 2.89226 0.616014C1.96408 0.669347 1.50651 0.806014 1.08166 1.55571C0.648323 2.30329 0.425293 3.59117 0.425293 5.85813C0.425293 5.85995 0.425293 5.86117 0.425293 5.86117C0.425293 5.86298 0.425293 5.8642 0.425293 5.8642V5.86601C0.425293 8.12359 0.648323 9.42086 1.08166 10.1609C1.50651 10.9093 1.96317 11.0451 2.89105 11.1081C3.82014 11.1624 6.15711 11.1945 8.18469 11.1945C10.2083 11.1945 12.5444 11.1624 13.4744 11.109C14.4044 11.046 14.861 10.9103 15.282 10.1618C15.7192 9.42177 15.9404 8.1245 15.9404 5.86692C15.9404 5.86692 15.9404 5.86389 15.9404 5.86207C15.9404 5.86207 15.9404 5.86026 15.9404 5.85904C15.9404 3.59117 15.7192 2.30329 15.281 1.55571ZM6.24347 8.77026V2.95207L11.092 5.86117L6.24347 8.77026Z"}})]), t._v(" "), n("symbol", {
            attrs: {
                id: "ic-email",
                viewBox: "0 0 31 31"
            }
        }, [n("path", {attrs: {d: "M25.109,21.51c-0.123,0-0.246-0.045-0.342-0.136l-5.754-5.398c-0.201-0.188-0.211-0.505-0.022-0.706\n\t\t\tc0.189-0.203,0.504-0.212,0.707-0.022l5.754,5.398c0.201,0.188,0.211,0.505,0.022,0.706C25.375,21.457,25.243,21.51,25.109,21.51z\n\t\t\t"}}), t._v(" "), n("path", {attrs: {d: "M5.902,21.51c-0.133,0-0.266-0.053-0.365-0.158c-0.189-0.201-0.179-0.518,0.022-0.706l5.756-5.398\n\t\t\tc0.202-0.188,0.519-0.18,0.707,0.022c0.189,0.201,0.179,0.518-0.022,0.706l-5.756,5.398C6.148,21.465,6.025,21.51,5.902,21.51z"}}), t._v(" "), n("path", {attrs: {d: "M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047\n\t\tC31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012\n\t\tc0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z"}}), t._v(" "), n("path", {attrs: {d: "M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.83,6.155C0.622,5.974,0.6,5.658,0.781,5.449\n\t\tc0.183-0.208,0.498-0.227,0.706-0.048l12.84,11.2c0.639,0.557,1.719,0.557,2.357,0L29.508,5.419\n\t\tc0.207-0.181,0.522-0.161,0.706,0.048c0.181,0.209,0.16,0.524-0.048,0.706L17.342,17.355\n\t\tC16.835,17.797,16.171,18.018,15.506,18.018z"}})]), t._v(" "), n("symbol", {
            attrs: {
                id: "ic-swipe-d",
                viewBox: "0 0 20 20"
            }
        }, [n("path", {attrs: {d: "M3.22562 7.22712C3.34013 7.22712 3.45473 7.1834 3.54209 7.09597L5.46916 5.16889C5.64403 4.9941 5.64403 4.71068 5.46916 4.53596C5.29444 4.36109 4.99849 4.36109 4.82377 4.53596L3.63616 5.71103V0.456805C3.63616 0.209645 3.43578 0.00918579 3.18854 0.00918579C2.94138 0.00918579 2.74092 0.209645 2.74092 0.456805V5.68671L1.65209 4.58542C1.47737 4.41055 1.20007 4.41055 1.02535 4.58542C0.850478 4.76022 0.853612 5.04363 1.02848 5.21835L2.90766 7.09597C2.99495 7.1834 3.1111 7.22712 3.22562 7.22712Z"}}), t._v(" "), n("path", {
            attrs: {d: "M19.0259 10.3595C18.8118 9.08009 18.1777 8.42336 17.6835 8.09779C17.1505 7.74664 16.5795 7.6404 16.1579 7.62033C15.8363 7.14325 15.2742 6.66258 14.379 6.54553V2.15125C14.379 0.944923 13.4596 0 12.2747 0C11.7098 0 11.1815 0.210157 10.7791 0.591901C10.5428 0.816158 10.3688 1.08465 10.2603 1.37978C9.89247 1.10301 9.43157 0.951861 8.94576 0.951861C7.74405 0.951861 6.83784 1.8421 6.83724 3.02262L6.83441 9.00512C6.79778 9.02153 6.74242 9.03749 6.68095 9.03749C6.65551 9.03749 6.63626 9.03466 6.62343 9.03175L6.56621 8.94372C6.17544 8.3078 5.54646 7.94336 4.8381 7.94329C4.08177 7.94322 3.34969 8.36883 2.97302 9.02765C2.61082 9.66125 2.62328 10.4023 3.00651 11.0633C3.01039 11.071 3.01442 11.0785 3.01852 11.086L7.47831 19.2321C7.71271 19.6976 8.19592 19.9968 8.71874 19.997L14.8865 20C15.5247 20 16.0802 19.5626 16.2344 18.95L16.8371 17.1469C16.8395 17.1395 16.8418 17.132 16.8442 17.1245C18.6936 14.3005 19.3463 12.2746 19.0259 10.3595ZM16.0604 16.6874C16.0254 16.7406 16.0005 16.8005 15.9881 16.8631L15.3719 18.7077C15.3262 18.9391 15.1232 19.1069 14.8873 19.1069H14.887L8.71926 19.1028C8.52835 19.1027 8.35467 18.9922 8.27306 18.8197L3.80387 10.6563C3.79858 10.6451 3.79261 10.6339 3.78634 10.6233C3.24219 9.69915 4.03186 8.83845 4.8381 8.83853C5.19716 8.8386 5.55966 9.00929 5.80891 9.4211L5.89336 9.55084C6.06488 9.81456 6.36911 9.93266 6.68132 9.93266C7.19482 9.93266 7.7298 9.61291 7.73009 9.09546L7.73323 3.02299C7.7336 2.23891 8.34035 1.84702 8.9471 1.84702C9.55422 1.84702 10.1614 2.23951 10.161 3.02419L10.1598 7.02328C10.1598 7.26104 10.3526 7.46867 10.5894 7.46867C10.5917 7.46867 10.5942 7.46867 10.5966 7.46867C10.8378 7.46867 11.022 7.23687 11.022 6.99546V2.09709C11.022 1.41746 11.5832 0.895237 12.2702 0.895237C13.0148 0.895237 13.4839 1.50385 13.4839 2.15125V7.03738C13.4839 7.24657 13.662 7.41488 13.87 7.41488C13.873 7.41488 13.8803 7.4148 13.8833 7.41473C13.9086 7.41413 13.9366 7.41383 13.9629 7.41383C14.4566 7.41383 15.1187 7.53096 15.5247 8.2893C15.6028 8.43522 15.77 8.51251 15.9356 8.51251C15.9398 8.51251 15.9444 8.51244 15.9485 8.51236C15.967 8.51191 15.9864 8.51162 16.0063 8.51162C16.613 8.51162 17.8467 8.73632 18.1431 10.5072C18.4305 12.2263 17.7865 14.0639 16.0604 16.6874Z"}
        })])])])
    }), [], !1, null, null, null).exports;

    function ot(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function at(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ot(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var st = {
        name: "StellarHeader",
        data: function () {
            return {isInit: !1, headerElement: null, headerHeight: null, scrollTop: null, lastScroll: 0}
        },
        computed: at(at(at(at({}, Object(a.e)("favorite", ["count"])), Object(a.e)("menu", ["menuOpened"])), Object(a.e)("global", ["isLightTheme"])), {}, {
            headerClasses: function () {
                return {
                    _fill: this.isScrolling && !this.menuOpened,
                    _active: this.isInit,
                    "_opened-menu": this.menuOpened,
                    _light: this.isLightTheme,
                    _hidden: this.isThemeTransition
                }
            }, isScrolling: function () {
                return this.scrollTop > this.headerHeight / 1.5
            }
        }),
        mounted: function () {
            this.headerElement = this.$refs.header, this.headerHeight = this.headerElement.clientHeight, this.headerElement && this.initHeader()
        },
        destroyed: function () {
            document.removeEventListener("scroll", this.checkScroll)
        },
        methods: {
            initHeader: function () {
                this.isInit = !0, this.checkScroll(), document.addEventListener("scroll", this.checkScroll)
            }, checkScroll: function () {
                this.scrollTop = window.pageYOffset, this.headerHeight = this.headerElement.clientHeight
            }
        }
    }, lt = n(135);
    var ct = Object(O.a)(st, (function () { // !header
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {class: [t.$style.wrapper]}, [n("div", {
            ref: "header",
            class: [t.$style.header, t.headerClasses]
        }, [n("div", {class: t.$style.project}), t._v(" "), n("div", {class: t.$style.actions}, [n("n-link", {
            class: t.$style.fav,
            attrs: {to: "/favourites/"}
        }, ), t._v(" "), n("a", {
            class: t.$style.phone,
            attrs: {href: "tel:+78001016367", itemprop: "telephone"}
        }, [t._v("+7 (800) 101-63-67")]),
            n("a", {
                class: t.$style.email,
                attrs: {href: "mailto: index@kerames.ru", itemprop: "mail"}
            }, [t._v("index@kerames.ru")])
        ], 1)])])
    }), [], !1, (function (t) {
        this.$style = lt.default.locals || lt.default
    }), null, null).exports, pt = {
        name: "FooterIda",
        props: {isShowTitle: {type: Boolean, default: !0}, title: {type: String, default: "Разработка сайта"}}
    };
    n(302);

    function ut(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ft(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ut(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var dt = {
        name: "StellarFooterContent",
        components: {
            FooterIda: Object(O.a)(pt, (function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "footer-ida",
                }, t._v(" "))
            }), [], !1, null, null, null).exports
        },
        props: {isShowTitle: {type: Boolean, default: !0}},
        computed: ft(ft({}, Object(a.e)("global", ["isLightTheme"])), {}, {
            socials: function () {
                return this.$store.state.project.project.social_links
            }
        })
    }, ht = n(136);
    var mt = Object(O.a)(dt, (function () { // !footer
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {class: [t.$style.FooterContent, "container", {_light: t.isLightTheme}]},
                [
                    n("div", {class: "item_Hv72G address_9du8q"},
                        [
                            n("span", {class: "name_YMAOH"},
                                [t._v("Адрес")]),
                            n("p", {class: "", itemprop: "address"},
                                [t._v("г. Москва, Волгоградской проспект, д. 47")]),
                        ],
                        0),
                    n("div", {class: "item_Hv72G"},
                        [
                            n("span", {class: "name_YMAOH"},
                                [t._v("Телефон отдела продаж")]),
                            n("p", {href: "tel:+78001016367", itemprop: "telephone"},
                                [t._v("+7 (800) 101-63-67")]),
                        ],
                        0),
                ]
                , 1)
        }), [], !1, (function (t) {
            this.$style = ht.default.locals || ht.default
        }), null, null).exports, bt = (n(50), [{
            link: {path: "/"},
            isScrollTop: !0,
            name: "О проекте",
            subLinks: [{link: {path: "/", hash: "#about"}, name: "Расположение"}, {
                link: {path: "/", hash: "#advantages"},
                name: "Преимущества"
            }, {link: {path: "/", hash: "#finish"}, name: "Интерьеры"}]
        }, {
            link: {path: "/new/"},
            isScrollTop: !0,
            name: "Новый корпус",
            subLinks: [],
            classLink: "new"
        }, {
            link: {path: "/filter/"},
            name: "Выбрать квартиру",
            subLinks: [{
                link: {name: "filter", query: {rooms: "0,1"}, params: {changeFilter: !0}},
                name: "Однокомнатные"
            }, {
                link: {name: "filter", query: {rooms: "2"}, params: {changeFilter: !0}},
                name: "Двухкомнатные"
            }, {
                link: {name: "filter", query: {rooms: "3"}, params: {changeFilter: !0}},
                name: "Трехкомнатные"
            }, {link: {path: "/", hash: "#visual"}, name: "Визуальный выбор"}]
        }, {link: {path: "/parking/"}, name: "Паркинг", subLinks: []}, {
            link: {path: "/purchase/"},
            name: "Способы покупки",
            subLinks: [{link: {path: "/purchase/mortgage/"}, name: "Ипотека от 0,1%"}]
        }, {link: {path: "/post/"}, name: "Новости", subLinks: [{link: {path: "/promo/"}, name: "Акции"}]}]),
        gt = [{link: {path: "/progress/"}, name: "Ход строительства"}, {
            link: {path: "/documents/"},
            name: "Документы"
        }, {link: {path: "/contacts/"}, name: "Контакты"}], wt = [{
            link: {path: "/"},
            isScrollTop: !0,
            name: "О проекте",
            order: 0,
            subLinks: [{link: {path: "/", hash: "#about"}, name: "Расположение"}, {
                link: {path: "/", hash: "#advantages"},
                name: "Преимущества"
            }, {link: {path: "/", hash: "#finish"}, name: "Интерьеры"}]
        }, {
            link: {path: "/filter/"},
            name: "Выбрать квартиру",
            order: 1,
            subLinks: [{
                link: {name: "filter", query: {rooms: "0,1"}, params: {changeFilter: !0}},
                name: "Однокомнатные"
            }, {
                link: {name: "filter", query: {rooms: "2"}, params: {changeFilter: !0}},
                name: "Двухкомнатные"
            }, {
                link: {name: "filter", query: {rooms: "3"}, params: {changeFilter: !0}},
                name: "Трехкомнатные"
            }, {link: {path: "/", hash: "#visual"}, name: "Визуальный выбор"}]
        }, {link: {path: "/post/"}, name: "Новости", order: 4, subLinks: [{link: {path: "/promo/"}, name: "Акции"}]}],
        vt = [{link: {path: "/progress/"}, name: "Ход строительства", order: 5}, {
            link: {path: "/new/"},
            name: "Новый корпус",
            order: 2
        }, {link: {path: "/parking/"}, name: "Паркинг", order: 3}, {
            link: {path: "/documents/"},
            name: "Документы",
            order: 6
        }, {link: {path: "/contacts/"}, name: "Контакты", order: 7}, {
            link: {path: "/purchase/mortgage/"},
            name: "Ипотека от 0,1%",
            order: 4
        }];

    function yt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function xt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? yt(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var kt = {
        name: "StellarMenu",
        components: {ThemeToggle: Y, CompanyLogo: Z, BackwardLink: n(144).a, StellarFooterContent: mt},
        data: function () {
            return {activeSublinkIndex: null, childLinks: bt, soloLinks: gt, mobChildLinks: wt, mobSoloLinks: vt}
        },
        computed: xt(xt(xt({}, Object(a.e)("menu", ["menuOpened"])), Object(a.e)("global", ["isLightTheme"])), {}, {
            isActiveSublink: function () {
                return null !== this.activeSublinkIndex
            }, isMobile: function () {
                return !["lap", "xl"].includes(this.$mq)
            }
        }),
        watch: {
            $route: function (t, e) {
                this.$store.commit("menu/SET_MENU_STATE", !1)
            }, menuOpened: function (t) {
                t || (this.activeSublinkIndex = null)
            }
        },
        methods: {
            onClickLink: function (t) {
                var e;
                this.activeSublinkIndex = t, (null === (e = this.$refs) || void 0 === e ? void 0 : e.container) && (this.$refs.container.scrollTop = 0)
            }, hideSublinks: function () {
                this.activeSublinkIndex = null
            }
        }
    }, _t = n(137);
    var Ct = Object(O.a)(kt, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "page wrapper",
            class: [t.$style.StellarMenu, {_active: t.menuOpened}]
        }, [n("picture", [n("source", {
            class: t.$style.bg,
            attrs: {srcset: "./images/projects/stellar/menu-bg.webp", type: "image/webp"}
        }), t._v(" "), n("img", {
            class: t.$style.bg,
            attrs: {src: "./images/projects/stellar/menu-bg.png", alt: "background menu"}
        })]), t._v(" "), n("div", {
            class: [t.$style.overlay, {
                _active: t.menuOpened,
                _light: t.isLightTheme
            }]
        }), t._v(" "), n("div", {
            ref: "container",
            class: [t.$style.container, "container", {_active: t.menuOpened}]
        }, [t.isMobile ? n("div", {class: t.$style.navs}, [n("backward-link", {
            class: [t.$style.closeSubs, {_visible: t.isActiveSublink}],
            attrs: {text: "Вернуться назад"},
            nativeOn: {
                click: function (e) {
                    return t.hideSublinks.apply(null, arguments)
                }
            }
        }), t._v(" "), n("div", {class: t.$style.mobileContainer}, [t.mobChildLinks.length ? t._l(t.mobChildLinks, (function (e, r) {
            return n("div", {
                key: "mobChildLinks" + r,
                class: t.$style.childsRow,
                style: {order: e.order, marginTop: 0 === e.order ? 0 : ""}
            }, [n("nuxt-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: e.isScrollTop ? "body" : !!e.link.hash && e.link.hash,
                    expression: "link.isScrollTop ? 'body' : link.link.hash ? link.link.hash : false"
                }],
                class: [t.$style.navLink, t.$style.navLinkChild, {_hidden: t.isActiveSublink, _light: t.isLightTheme}],
                attrs: {to: e.link, event: "tabS" !== t.$mq ? "click" : ""},
                nativeOn: {
                    click: function (e) {
                        return t.onClickLink(r)
                    }
                }
            }, [t._v("\n                            " + t._s(e.name) + "\n                        ")]), t._v(" "), e.subLinks && e.subLinks.length ? n("div", {class: [t.$style.childsItems, {_active: t.activeSublinkIndex === r}]}, [n("nuxt-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: e.isScrollTop ? "body" : !!e.link.hash && e.link.hash,
                    expression: "link.isScrollTop ? 'body' : link.link.hash ? link.link.hash : false"
                }], class: [t.$style.subLink, "_main-mobile"], attrs: {to: e.link}
            }, [t._v("\n                                " + t._s(e.name) + "\n                            ")]), t._v(" "), t._l(e.subLinks, (function (e, r) {
                return n("nuxt-link", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: !!e.link.hash && e.link.hash,
                        expression: "subLink.link.hash ? subLink.link.hash : false"
                    }], key: "subLinks" + r, class: t.$style.subLink, attrs: {to: e.link}
                }, [t._v("\n                                " + t._s(e.name) + "\n                            ")])
            }))], 2) : t._e()], 1)
        })) : t._e(), t._v(" "), t.mobSoloLinks.length ? t._l(t.mobSoloLinks, (function (e, r) {
            return n("n-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: e.isScrollTop ? "body" : !!e.link.hash && e.link.hash,
                    expression: "link.isScrollTop ? 'body' : link.link.hash ? link.link.hash : false"
                }],
                key: r,
                class: [t.$style.navLink, t.$style.navLinkSolo, {_hidden: t.isActiveSublink, _light: t.isLightTheme}],
                style: {order: e.order},
                attrs: {to: e.link}
            }, [t._v("\n                        " + t._s(e.name) + "\n                    ")])
        })) : t._e()], 2)], 1) : n("div", {class: t.$style.navs}, [n("backward-link", {
            class: [t.$style.closeSubs, {_visible: t.isActiveSublink}],
            attrs: {text: "Вернуться назад"},
            nativeOn: {
                click: function (e) {
                    return t.hideSublinks.apply(null, arguments)
                }
            }
        }), t._v(" "), t.childLinks.length ? n("div", {class: t.$style.childNavs}, t._l(t.childLinks, (function (e, r) {
            return n("div", {
                key: "childLinks" + r,
                class: t.$style.childsRow
            }, [n("nuxt-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: e.isScrollTop ? "body" : !!e.link.hash && e.link.hash,
                    expression: "link.isScrollTop ? 'body' : link.link.hash ? link.link.hash : false"
                }],
                class: [t.$style.navLink, t.$style.navLinkChild, {
                    _hidden: t.isActiveSublink,
                    _light: t.isLightTheme
                }, e.classLink ? e.classLink : ""],
                attrs: {to: e.link, event: "tabS" !== t.$mq ? "click" : ""},
                nativeOn: {
                    click: function (e) {
                        return t.onClickLink(r)
                    }
                }
            }, [t._v("\n                        " + t._s(e.name) + "\n                    ")]), t._v(" "), e.subLinks && e.subLinks.length ? n("div", {class: [t.$style.childsItems, {_active: t.activeSublinkIndex === r}]}, [n("nuxt-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: e.isScrollTop ? "body" : !!e.link.hash && e.link.hash,
                    expression: "link.isScrollTop ? 'body' : link.link.hash ? link.link.hash : false"
                }], class: [t.$style.subLink, "_main-mobile"], attrs: {to: e.link}
            }, [t._v("\n                            " + t._s(e.name) + "\n                        ")]), t._v(" "), t._l(e.subLinks, (function (e, r) {
                return n("nuxt-link", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: !!e.link.hash && e.link.hash,
                        expression: "subLink.link.hash ? subLink.link.hash : false"
                    }], key: "subLinks" + r, class: t.$style.subLink, attrs: {to: e.link}
                }, [t._v("\n                            " + t._s(e.name) + "\n                        ")])
            }))], 2) : t._e()], 1)
        })), 0) : t._e(), t._v(" "), t.soloLinks.length ? n("div", {class: t.$style.soloNavs}, t._l(t.soloLinks, (function (e, r) {
            return n("n-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: e.isScrollTop ? "body" : !!e.link.hash && e.link.hash,
                    expression: "link.isScrollTop ? 'body' : link.link.hash ? link.link.hash : false"
                }],
                key: "soloLinks" + r,
                class: [t.$style.navLink, t.$style.navLinkSolo, {_hidden: t.isActiveSublink, _light: t.isLightTheme}],
                attrs: {to: e.link}
            }, [t._v("\n                    " + t._s(e.name) + "\n                ")])
        })), 1) : t._e()], 1), t._v(" "), n("a", {
            class: t.$style.phone,
            attrs: {href: "tel:+74956658999"}
        }, [t._v("+7 (495) 665 82 99")]), t._v(" "), n("div", {class: t.$style.themeButton}, [n("theme-toggle")], 1), t._v(" "), n("a", {
            class: t.$style.companyLinkMobile,
            attrs: {href: "http://tashir-estate.ru/", target: "_blank"}
        }, [n("div", {class: t.$style.companyLogo}, [n("company-logo")], 1), t._v(" "), n("div", {class: t.$style.companyLinkMobileText}, [t._v("\n                Перейти на сайт "), n("span", {class: [t.$style.companyName, {_light: t.isLightTheme}]}, [t._v("Tashir Estate")])])]), t._v(" "), n("div", {class: t.$style.footer}, [n("a", {
            class: [t.$style.companyLink, {_light: t.isLightTheme}],
            attrs: {href: "http://tashir-estate.ru/", target: "_blank"}
        }, [t._v("\n                Перейти на сайт "), n("span", {class: [t.$style.companyName, {_light: t.isLightTheme}]}, [t._v("Tashir Estate")])]), t._v(" "), n("div", {class: t.$style.footerWrapper}, [n("stellar-footer-content", {class: [t.$style.footerContent, {"_no-border": "tabS" !== t.$mq}]})], 1)])])])
    }), [], !1, (function (t) {
        this.$style = _t.default.locals || _t.default
    }), null, null), Ot = Ct.exports;

    function jt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Lt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? jt(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var Mt = {
        name: "StellarHeaderMobile",
        components: {MenuToggle: D},
        data: function () {
            return {scrollTop: 0, lastScroll: 0}
        },
        computed: Lt(Lt(Lt(Lt({}, Object(a.e)("global", ["isLightTheme"])), Object(a.e)("favorite", ["count"])), Object(a.e)("menu", ["menuOpened"])), {}, {
            isScrolling: function () {
                return this.scrollTop > 10
            }, headerClasses: function () {
                return {
                    _fill: this.isScrolling && !this.menuOpened,
                    "_opened-menu": this.menuOpened,
                    _light: this.isLightTheme
                }
            }
        }),
        mounted: function () {
            this.checkScroll(), document.addEventListener("scroll", this.checkScroll)
        },
        destroyed: function () {
            document.removeEventListener("scroll", this.checkScroll)
        },
        methods: {
            checkScroll: function () {
                this.scrollTop = window.pageYOffset
            }, toggleMenu: function () {
                this.$store.commit("menu/SET_MENU_STATE", !this.menuOpened)
            }
        }
    }, Et = n(138);
    var Tt = Object(O.a)(Mt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {class: [t.$style.wrapper]}, [n("div", {class: [t.$style.HeaderMobile, t.headerClasses]}, [n("menu-toggle", {
                class: t.$style.toggle,
                nativeOn: {
                    click: function (e) {
                        return t.toggleMenu.apply(null, arguments)
                    }
                }
            }), t._v(" "), n("n-link", {
                directives: [{
                    name: "scroll-to",
                    rawName: "v-scroll-to",
                    value: "body",
                    expression: "'body'"
                }], class: t.$style.logoLink, attrs: {to: "/"}
            }, [n("svg", {
                class: [t.$style.logo, {_light: t.isLightTheme}],
                attrs: {viewBox: "0 0 119 31"}
            }, [n("use", {attrs: {"xlink:href": "#logo-stellar-mob"}})])]), t._v(" "), n("div", {class: t.$style.favWrapper}, [n("n-link", {
                class: [t.$style.fav, {
                    _active: t.count,
                    _light: t.isLightTheme
                }], attrs: {to: "/favourites/"}
            }, [t._v("\n                " + t._s(t.count) + "\n            ")])], 1)], 1)])
        }), [], !1, (function (t) {
            this.$style = Et.default.locals || Et.default
        }), null, null), St = Tt.exports, $t = n(194),
        Pt = {components: {CloseIcon: $.a, UiLink: $t.a}, props: {active: {type: Boolean, default: !1}}};
    n(311);

    function zt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Rt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? zt(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    var It = {
        name: "TashirLayout",
        components: {
            StellarHeaderMobile: St,
            StellarMenu: Ot,
            StellarFooterContent: mt,
            StellarAside: Q,
            StellarHeader: ct,
            CommonSprite: it,
            StellarSprite: nt,
            PopupTelegram: Object(O.a)(Pt, (function () { // Вылезавший попап
                /*var t = this, e = t.$createElement, r = t._self._c || e;
                return r("transition", {attrs: {name: "fade"}}, [t.active ? r("div", {staticClass: "backdrop"}, [r("div", {staticClass: "box"}, [r("div", {staticClass: "outer-container"}, [r("div", {staticClass: "inner-container"}, [r("img", {
                    staticClass: "fill",
                    attrs: {src: n(309)}
                }), t._v(" "), r("div", {staticClass: "details"}, [r("img", {
                    staticClass: "qr",
                    attrs: {src: n(310)}
                }), t._v(" "), r("div", {staticClass: "text"}, [r("h2", [t._v("Подписывайтесь на telegram-канал Tashir Estate")]), t._v(" "), r("p", [t._v("Будьте в курсе наших последних событий")])]), t._v(" "), r("ui-link", {
                    staticClass: "button link white-theme",
                    attrs: {url: "https://t.me/tashirestate"},
                    nativeOn: {
                        click: function (e) {
                            return t.$emit("close")
                        }
                    }
                }, [t._v("\n                            Перейти\n                            "), r("svg", {
                    staticClass: "tg-icon",
                    attrs: {viewBox: "0 0 22 19"}
                }, [r("path", {
                    attrs: {
                        d: "M20.2143 0.427235L0.723292 7.77117C-0.061051 8.11315 -0.326344 8.79806 0.533682 9.16974L5.534 10.7224L17.624 3.42175C18.2841 2.96341 18.9599 3.08564 18.3784 3.5898L7.99472 12.7761L7.66853 16.6637C7.97066 17.264 8.52384 17.2667 8.87669 16.9684L11.7495 14.3124L16.6696 17.9122C17.8124 18.5733 18.4342 18.1467 18.68 16.9351L21.9072 2.00431C22.2423 0.512944 21.6709 -0.14415 20.2143 0.427235Z",
                        fill: "black"
                    }
                })])])], 1), t._v(" "), r("close-icon", {
                    staticClass: "close",
                    attrs: {"is-without-shadow": !0},
                    nativeOn: {
                        click: function (e) {
                            return t.$emit("close")
                        }
                    }
                })], 1)])])]) : t._e()])*/
            }), [], !1, null, "48c3b72c", null).exports
        },
        head: function () {
            return Rt({
                title: "Kerames, ЛСР и кирпич, газобетон, бонолит",
                __dangerouslyDisableSanitizers: ["script"],
                script: [{
                    src: "//smartcallback.ru/api/SmartCallBack.js?t=MX9hFX0IpUCDduFlA7aK",
                    body: !0,
                    async: !0
                }, {
                    innerHTML: '\n                        window.ctvsData = window.ctvsData || [];\n                        function ctvs(){ctvsData.push(arguments)};\n                        ctvs("config", "dfa0d3e4f37cb0670d65ccf218591aea");',
                    body: !0
                }, {
                    src: "https://widget.calltovisit.com/widget.js?config=dfa0d3e4f37cb0670d65ccf218591aea",
                    async: !0,
                    body: !0
                }, {
                    src: "https://www.googletagmanager.com/gtag/js?id=DC-9517914",
                    async: !0,
                    body: !0
                }, {
                    innerHTML: "\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n                        gtag('config', 'DC-9517914');\n                        ",
                    body: !0
                }],
                bodyAttrs: {class: (this.isLightTheme ? "_light" : "") + (this.locked ? " _locked" : "")}
            }, this.metaInfo)
        },
        mixins: [S.a],
        data: function () {
            return {
                isLockScroll: !1,
                modalTimeOut: void 0,
                scrollTop: 0,
                gtm: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK5ZVTZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
                themeTimeOut: null,
                telegramVisible: !1
            }
        },
        computed: Rt(Rt(Rt(Rt(Rt({}, Object(a.c)("modal", {modal: "getState"})), Object(a.e)("global", ["isLightTheme"])), Object(a.e)("global", ["locked"])), Object(a.e)({
            env: function (t) {
                return t.env
            }
        })), {}, {
            isHiddenBorder: function (t) {
                return t.$store.state.footer.isHiddenBorder
            }
        }),
        watch: {
            modal: function () {
                this.modal ? this.lockScroll() : this.unlockScroll()
            }, isLightTheme: function () {
                this.toggleTheme()
            }, "$route.path": function () {
                this.unlockScroll()
            }
        },
        mounted: function () {
            var t = this;
            if (window.addEventListener("focus", this.focusCheckTheme), !window.sessionStorage.getItem("telegram_shown")) var e = setInterval((function () {
                t.locked || (clearInterval(e), t.telegramVisible = !0)
            }), 3e4)
        },
        destroyed: function () {
            window.removeEventListener("focus", this.focusCheckTheme)
        },
        methods: Rt(Rt({}, Object(a.b)({focusCheckTheme: "global/CHECK_SITE_THEME_ON_FOCUS"})), {}, {
            lockScroll: function () {
                clearTimeout(this.modalTimeOut), this.scrollTop = window ? window.scrollY : 0, document.body.classList.add("_locked"), this.isLockScroll = !0, "tabS" === this.$mq && (document.body.style.top = "-".concat(this.scrollTop, "px"))
            }, unlockScroll: function () {
                var t = this;
                this.modalTimeOut = setTimeout((function () {
                    clearTimeout(t.modalTimeOut), document.body.classList.remove("_locked"), document.body.style.top = "", window.scrollTo(0, t.scrollTop), t.isLockScroll = !1
                }), "tabS" !== this.$mq ? 300 : 10)
            }, initCalltouch: function () {
                var t = document.getElementsByTagName("script")[0], e = document.createElement("script");
                e.src = "https://mod.calltouch.ru/init.js?id=q4o4iqhw", t.parentNode.insertBefore(e, t)
            }, toggleTheme: function () {
                this.themeTimeOut && clearTimeout(this.themeTimeOut), document.body.classList.add("_no-animation"), this.themeTimeOut = setTimeout((function () {
                    document.body.classList.remove("_no-animation")
                }), 500)
            }, closeTelegram: function () {
                this.telegramVisible = !1, window.sessionStorage.setItem("telegram_shown", "true")
            }
        })
    }, Dt = n(139);
    var At = Object(O.a)(It, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            class: [t.$style.Stellar, {_lock: t.isLockScroll, _light: t.isLightTheme}],
            attrs: {id: "page-wrapper"}
        }, [n("noscript", {domProps: {innerHTML: t._s(t.gtm)}}), t._v(" "), n("a", {
            class: t.$style.hidden,
            attrs: {href: "tel:8 (495) 127-36-31"}
        }, [t._v("\n        8 (495) 127-36-31\n    ")]), t._v(" "), n("stellar-menu"), t._v(" "), n("stellar-aside"), t._v(" "), n("stellar-header"), t._v(" "), n("stellar-header-mobile"), t._v(" "), n("main", {class: t.$style.Main}, [n("div", {class: t.$style.Page}, [n("nuxt")], 1), t._v(" "), n("footer", {class: t.$style.footer}, [n("stellar-footer-content", {
            class: {"_no-border": t.isHiddenBorder},
            attrs: {"is-show-title": !1}
        })], 1)]), t._v(" "), n("common-sprite"), t._v(" "), n("stellar-sprite"), t._v(" "), n("popup-telegram", {
            attrs: {active: t.telegramVisible},
            on: {close: t.closeTelegram}
        })], 1)
    }), [], !1, (function (t) {
        this.$style = Dt.default.locals || Dt.default
    }), null, null).exports, Ht = {
        head: function () {
            return {script: [{src: "https://mod.calltouch.ru/init.js?id=q4o4iqhw"}]}
        }, mounted: function () {
            var t = setInterval((function () {
                var e = document.querySelector("#Calltouch-callback-container");
                e && (e.style.display = "none", clearInterval(t))
            }), 10)
        }
    }, Nt = (n(314), Object(O.a)(Ht, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", [n("nuxt"), t._v(" "), n("svg", {
            staticStyle: {display: "none"},
            attrs: {xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink"}
        }, [n("defs", [n("filter", {attrs: {id: "feMatrix"}}, [n("feColorMatrix", {
            attrs: {
                type: "matrix",
                values: "0.5     0     0     0     0\n                                      0     0.5     0     0     0\n                                      0     0     0.5     0     0\n                                      0     0     0     1     0 "
            }
        })], 1)])])], 1)
    }), [], !1, null, null, null).exports);

    function Zt(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return Bt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bt(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                    }, e: function (t) {
                        throw t
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, s = !1;
        return {
            s: function () {
                n = n.call(t)
            }, n: function () {
                var t = n.next();
                return a = t.done, t
            }, e: function (t) {
                s = !0, o = t
            }, f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function Bt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    var Gt = {_default: Object(h.s)(At), _print: Object(h.s)(Nt)}, Vt = {
        render: function (t, e) {
            var n = t("NuxtLoading", {ref: "loading"}), r = t(this.layout || "nuxt"),
                i = t("div", {domProps: {id: "__layout"}, key: this.layoutName}, [r]), o = t("transition", {
                    props: {name: "layout", mode: "out-in"}, on: {
                        beforeEnter: function (t) {
                            window.$nuxt.$nextTick((function () {
                                window.$nuxt.$emit("triggerScroll")
                            }))
                        }
                    }
                }, [i]);
            return t("div", {domProps: {id: "__nuxt"}}, [n, o])
        }, data: function () {
            return {isOnline: !0, layout: null, layoutName: "", nbFetching: 0}
        }, beforeCreate: function () {
            o.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
        }, created: function () {
            this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
        }, mounted: function () {
            var t = this;
            return Object(r.a)(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            t.$loading = t.$refs.loading;
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))()
        }, watch: {"nuxt.err": "errorChanged"}, computed: {
            isOffline: function () {
                return !this.isOnline
            }, isFetching: function () {
                return this.nbFetching > 0
            }
        }, methods: {
            refreshOnlineStatus: function () {
                void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
            }, refresh: function () {
                var t = this;
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    var n, r;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if ((n = Object(h.h)(t.$route)).length) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return t.$loading.start(), r = n.map((function (e) {
                                    var n = [];
                                    if (e.$options.fetch && e.$options.fetch.length && n.push(Object(h.q)(e.$options.fetch, t.context)), e.$fetch) n.push(e.$fetch()); else {
                                        var r, i = Zt(Object(h.e)(e.$vnode.componentInstance));
                                        try {
                                            for (i.s(); !(r = i.n()).done;) {
                                                var a = r.value;
                                                n.push(a.$fetch())
                                            }
                                        } catch (s) {
                                            i.e(s)
                                        } finally {
                                            i.f()
                                        }
                                    }
                                    return e.$options.asyncData && n.push(Object(h.q)(e.$options.asyncData, t.context).then((function (t) {
                                        for (var n in t) o.default.set(e.$data, n, t[n])
                                    }))), Promise.all(n)
                                })), e.prev = 5, e.next = 8, Promise.all(r);
                            case 8:
                                e.next = 15;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(h.k)(e.t0), t.error(e.t0);
                            case 15:
                                t.$loading.finish();
                            case 16:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[5, 10]])
                })))()
            }, errorChanged: function () {
                if (this.nuxt.err) {
                    this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                    var t = (j.options || j).layout;
                    "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                }
            }, setLayout: function (t) {
                return t && Gt["_" + t] || (t = "default"), this.layoutName = t, this.layout = Gt["_" + t], this.layout
            }, loadLayout: function (t) {
                return t && Gt["_" + t] || (t = "default"), Promise.resolve(Gt["_" + t])
            }
        }, components: {NuxtLoading: T}
    };
    n(53);

    function Ut(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return Yt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yt(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                    }, e: function (t) {
                        throw t
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, s = !1;
        return {
            s: function () {
                n = n.call(t)
            }, n: function () {
                var t = n.next();
                return a = t.done, t
            }, e: function (t) {
                s = !0, o = t
            }, f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function Yt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    o.default.use(a.a);
    var Ft = ["state", "getters", "actions", "mutations"], qt = {};
    (qt = function (t, e) {
        if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
        return "function" != typeof t && (t = Object.assign({}, t)), Wt(t, e)
    }(n(316), "store/index.js")).modules = qt.modules || {}, Xt(n(122), "modules/visual.js"), Xt(n(124), "modules/documents.js"), Xt(n(123), "modules/favorite.js"), Xt(n(118), "modules/global.js"), Xt(n(125), "modules/contacts.js"), Xt(n(127), "modules/metatags.js"), Xt(n(119), "modules/modal.js"), Xt(n(121), "modules/project.js"), Xt(n(120), "modules/purchase.js"), Xt(n(126), "modules/menu.js");
    var Jt = qt instanceof Function ? qt : function () {
        return new a.a.Store(Object.assign({strict: !1}, qt))
    };

    function Wt(t, e) {
        if (t.state && "function" != typeof t.state) {
            console.warn("'state' should be a method that returns an object in ".concat(e));
            var n = Object.assign({}, t.state);
            t = Object.assign({}, t, {
                state: function () {
                    return n
                }
            })
        }
        return t
    }

    function Xt(t, e) {
        t = t.default || t;
        var n = e.replace(/\.(js|mjs)$/, "").split("/"), r = n[n.length - 1], i = "store/".concat(e);
        if (t = "state" === r ? function (t, e) {
            if ("function" != typeof t) {
                console.warn("".concat(e, " should export a method that returns an object"));
                var n = Object.assign({}, t);
                return function () {
                    return n
                }
            }
            return Wt(t, e)
        }(t, i) : Wt(t, i), Ft.includes(r)) {
            var o = r;
            Kt(Qt(qt, n, {isProperty: !0}), t, o)
        } else {
            "index" === r && (n.pop(), r = n[n.length - 1]);
            var a, s = Qt(qt, n), l = Ut(Ft);
            try {
                for (l.s(); !(a = l.n()).done;) {
                    var c = a.value;
                    Kt(s, t[c], c)
                }
            } catch (p) {
                l.e(p)
            } finally {
                l.f()
            }
            !1 === t.namespaced && delete s.namespaced
        }
    }

    function Qt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.isProperty,
            i = void 0 !== r && r;
        if (!e.length || i && 1 === e.length) return t;
        var o = e.shift();
        return t.modules[o] = t.modules[o] || {}, t.modules[o].namespaced = !0, t.modules[o].modules = t.modules[o].modules || {}, Qt(t.modules[o], e, {isProperty: i})
    }

    function Kt(t, e, n) {
        e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
    }

    var te = n(198), ee = n.n(te), ne = function (t, e) {
        var n = t.req, r = t.res, i = !0;
        e("cookies", ee()(n, r, i))
    }, re = n(65), ie = n.n(re), oe = n(199);

    function ae(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function se(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ae(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function le(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return ce(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                    }, e: function (t) {
                        throw t
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, s = !1;
        return {
            s: function () {
                n = n.call(t)
            }, n: function () {
                var t = n.next();
                return a = t.done, t
            }, e: function (t) {
                s = !0, o = t
            }, f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function ce(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    for (var pe = {
        setBaseURL: function (t) {
            this.defaults.baseURL = t
        }, setHeader: function (t, e) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                i = le(Array.isArray(r) ? r : [r]);
            try {
                for (i.s(); !(n = i.n()).done;) {
                    var o = n.value;
                    e ? this.defaults.headers[o][t] = e : delete this.defaults.headers[o][t]
                }
            } catch (a) {
                i.e(a)
            } finally {
                i.f()
            }
        }, setToken: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                r = t ? (e ? e + " " : "") + t : null;
            this.setHeader("Authorization", r, n)
        }, onRequest: function (t) {
            this.interceptors.request.use((function (e) {
                return t(e) || e
            }))
        }, onResponse: function (t) {
            this.interceptors.response.use((function (e) {
                return t(e) || e
            }))
        }, onRequestError: function (t) {
            this.interceptors.request.use(void 0, (function (e) {
                return t(e) || Promise.reject(e)
            }))
        }, onResponseError: function (t) {
            this.interceptors.response.use(void 0, (function (e) {
                return t(e) || Promise.reject(e)
            }))
        }, onError: function (t) {
            this.onRequestError(t), this.onResponseError(t)
        }, create: function (t) {
            return he(Object(oe.a)(t, this.defaults))
        }
    }, ue = function () {
        var t = de[fe];
        pe["$" + t] = function () {
            return this[t].apply(this, arguments).then((function (t) {
                return t && t.data
            }))
        }
    }, fe = 0, de = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; fe < de.length; fe++) ue();
    var he = function (t) {
            var e = ie.a.create(t);
            return e.CancelToken = ie.a.CancelToken, e.isCancel = ie.a.isCancel, function (t) {
                for (var e in pe) t[e] = pe[e].bind(t)
            }(e), e.onRequest((function (t) {
                t.headers = se(se({}, e.defaults.headers.common), t.headers)
            })), me(e), e
        }, me = function (t) {
            var e = {
                finish: function () {
                }, start: function () {
                }, fail: function () {
                }, set: function () {
                }
            }, n = function () {
                var t = "undefined" != typeof window && window.$nuxt;
                return t && t.$loading && t.$loading.set ? t.$loading : e
            }, r = 0;
            t.onRequest((function (t) {
                t && !1 === t.progress || r++
            })), t.onResponse((function (t) {
                t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
            })), t.onError((function (t) {
                t && t.config && !1 === t.config.progress || (r--, ie.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
            }));
            var i = function (t) {
                if (r && t.total) {
                    var e = 100 * t.loaded / (t.total * r);
                    n().set(Math.min(100, e))
                }
            };
            t.defaults.onUploadProgress = i, t.defaults.onDownloadProgress = i
        }, be = function (t, e) {
            var n = t.$config && t.$config.axios || {},
                r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/";
            var i = he({
                baseURL: r,
                headers: {
                    common: {Accept: "application/json, text/plain, */*"},
                    delete: {},
                    get: {},
                    head: {},
                    post: {},
                    put: {},
                    patch: {}
                }
            });
            t.$axios = i, e("axios", i)
        }, ge = function (t) {
            var e = t.app;

            function n() {
                window.dataLayer = window.dataLayer || [], dataLayer.push(arguments)
            }

            n("js", new Date), e.router.afterEach((function (t, e) {
                n("config", "UA-127051324-3")
            }))
        }, we = function (t) {
            function e() {
                window.dataLayer = window.dataLayer || [], dataLayer.push(arguments)
            }

            t.app.router.afterEach((function (t, n) {
                e("js", new Date), e("config", "DC-9517914")
            }))
        }, ve = n(140), ye = n.n(ve),
        xe = (n(141), n(211), ["Студия", "Однокомнатная квартира", "Двухкомнатная квартира", "Трехкомнатная квартира", "Четырехкомнатная квартира"]);
    o.default.filter("splitThousands", (function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        if (!t) return "";
        var n = t.toString().split("."), r = n[0].replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, e);
        return Number(n[1]) && (r += ".".concat(n[1])), r
    })), o.default.filter("roomsNumberToString", (function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e ? xe[t].toLowerCase() : xe[t]
    })), o.default.filter("roundToMillions", (function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return t ? +(Number(t) / 1e6).toFixed(e) : 0
    })), o.default.filter("plural", (function (t, e) {
        if (!t) return "";
        var n = Math.abs(t);
        return (n %= 100) >= 5 && n <= 20 ? e[2] : 1 === (n %= 10) ? e[0] : n >= 2 && n <= 4 ? e[1] : e[2]
    })), o.default.filter("prettyPhone", (function (t) {
        return t.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5")
    })), o.default.filter("bytesToSize", (function (t) {
        if (!t && 0 === t) return "";
        var e = ["Bytes", "KB", "MB", "GB", "TB"], n = parseInt(Math.floor(Math.log(t) / Math.log(1024)), 10);
        return 0 === n ? "".concat(t, " ").concat(e[n]) : "".concat((t / Math.pow(1024, n)).toFixed(1), " ").concat(e[n])
    })), o.default.filter("monthByNumber", (function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = {
            1: "Январь",
            2: "Февраль",
            3: "Март",
            4: "Апрель",
            5: "Май",
            6: "Июнь",
            7: "Июль",
            8: "Август",
            9: "Сентябрь",
            10: "Октябрь",
            11: "Ноябрь",
            12: "Декабрь"
        }, r = {
            1: "Января",
            2: "Февраля",
            3: "Марта",
            4: "Апреля",
            5: "Мая",
            6: "Июня",
            7: "Июля",
            8: "Августа",
            9: "Сентября",
            10: "Октября",
            11: "Ноября",
            12: "Декабря"
        };
        return e ? r[t] : n[t]
    })), o.default.filter("getHours", (function (t) {
        if (!t) return "";
        var e = t.split(":"), n = new Date;
        return n.setHours(Number(e[0]), Number(e[1])), "".concat(n.getHours())
    }));
    var ke = function (t) {
        var e = t.$axios, n = t.req;
        e.defaults.xsrfCookieName = "csrftoken", e.defaults.xsrfHeaderName = "X-CSRFToken";
        var r = n && n.headers ? Object.assign({}, n.headers) : {};
        e.setHeader("X-Forwarded-Host", r["x-forwarded-host"]), e.setHeader("X-Forwarded-Port", r["x-forwarded-port"]), e.setHeader("X-Forwarded-Proto", r["x-forwarded-proto"]), e.setHeader("Accept-Language", "ru")
    }, _e = function (t, e) {
        t.app;
        e("api", {
            project: {
                list: "/api/project/", current: "/api/project/current", about: function (t) {
                    return "/api/project/".concat(t, "/about/")
                }, infra: function (t) {
                    return "/api/project/".concat(t, "/infra/")
                }, projectPages: function (t) {
                    return "/api/project/".concat(t, "/pages/?limit=10")
                }, gallery: function (t) {
                    return "/api/project/".concat(t, "/gallery/")
                }, office: function (t) {
                    return "/api/project/".concat(t, "/office/")
                }, environment: function (t) {
                    return "/api/project/".concat(t, "/environment/")
                }, posts: function (t) {
                    return "/api/project/".concat(t, "/posts/")
                }, layouts: function (t) {
                    return "/api/project/".concat(t, "/layouts/")
                }, first_block: function (t) {
                    return "/api/project/".concat(t, "/first/")
                }
            },
            flats: {
                list: "/api/flat/",
                favorites: "/api/flat/favorites/",
                specs: "/api/flat/specs/",
                facets: "/api/flat/facets/"
            },
            floor: {
                list: "api/floor/", detail: function (t) {
                    return "/api/floor/".concat(t)
                }
            },
            flatTypes: {
                list: "/api/layout/", detail: function (t) {
                    return "/api/layout/".concat(t, "/")
                }
            },
            visual: {building: "/api/building/", section: "/api/section/", parking: "/api/building/parking/"},
            news: {
                base: "/api/post/", specs: "/api/post/specs/", detail: function (t) {
                    return "/api/post/".concat(t, "/")
                }, randomImages: "api/post/random_images/"
            },
            advantages: {
                detail: function (t) {
                    return "/api/page/".concat(t, "/")
                }
            },
            promo: {
                base: "/api/promo/", detail: function (t) {
                    return "/api/promo/".concat(t, "/")
                }
            },
            page: {
                detail: function (t) {
                    return "/api/page/".concat(t, "/")
                }
            },
            parking: {
                list: "/api/parking/",
                specialOffers: "api/parking/?special_offer=1",
                specs: "/api/parking/specs/",
                facets: "/api/parking/facets/",
                detail: function (t) {
                    return "/api/parking/".concat(t, "/")
                }
            },
            favorites: "/api/favorites/",
            documents: "/api/document/",
            interiorGallery: "/api/interior_gallery/",
            office: "/api/office/",
            mortgage: {
                page: "/api/mortgage/",
                offers: "/api/mortgage-offer/",
                tashir: "/api/mortgage-offer/tashir/",
                specs: "/api/mortgage-offer/specs/",
                programs: "/api/mortgage-program/"
            },
            installment: {page: "/api/installment/"},
            request: "/api/request/",
            progress: {list: "/api/progress/"}
        })
    }, Ce = n(200), Oe = n.n(Ce);
    o.default.use(Oe.a, {observer: !0, observerOptions: {rootMargin: "0px", threshold: .1}});
    var je = n(201), Le = n.n(je);
    o.default.component("vue-slider", Le.a);
    var Me = n(202), Ee = function (t) {
        t.app;
        o.default.use(Me.a, {breakpoints: {tabS: 921, tab: 1025, lap: 1361, xl: 1 / 0}, defaultBreakpoint: "lap"})
    }, Te = n(204), Se = function (t) {
        var e = t.app, n = e.store, r = e.router;
        Object(Te.sync)(n, r)
    }, $e = n(205), Pe = n.n($e);
    o.default.use(Pe.a, {duration: 700, easing: "ease-out", offset: -50});
    var ze = n(367).default;
    o.default.use(ze), o.default.directive("click-outside", {
        bind: function (t, e) {
            t.addEventListener("click", (function (t) {
                return t.stopPropagation()
            })), document.body.addEventListener("click", e.value)
        }, unbind: function (t, e) {
            document.body.removeEventListener("click", e.value)
        }
    });
    var Re = n(206);

    function Ie(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function De(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ie(Object(n), !0).forEach((function (e) {
                Object(i.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    o.default.directive("observe-visibility", Re.a), o.default.component(c.a.name, c.a), o.default.component(u.a.name, De(De({}, u.a), {}, {
        render: function (t, e) {
            return u.a._warned || (u.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), u.a.render(t, e)
        }
    })), o.default.component(y.name, y), o.default.component("NChild", y), o.default.component(M.name, M), Object.defineProperty(o.default.prototype, "$nuxt", {
        get: function () {
            var t = this.$root.$options.$nuxt;
            return t || "undefined" == typeof window ? t : window.$nuxt
        }, configurable: !0
    }), o.default.use(s.a, {
        keyName: "head",
        attribute: "data-n-head",
        ssrAttribute: "data-n-head-ssr",
        tagIDKeyName: "hid"
    });
    var Ae = {
        name: "page",
        mode: "out-in",
        appear: !1,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
    }, He = a.a.Store.prototype.registerModule;

    function Ne(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = Array.isArray(t) ? !!t.reduce((function (t, e) {
                return t && t[e]
            }), this.state) : t in this.state;
        return He.call(this, t, e, De({preserveState: r}, n))
    }

    function Ze(t) {
        return Be.apply(this, arguments)
    }

    function Be() {
        return Be = Object(r.a)(regeneratorRuntime.mark((function t(e) {
            var n, i, a, s, l, c, p, u, f = arguments;
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return u = function (t, e) {
                            if (!t) throw new Error("inject(key, value) has no key provided");
                            if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                            s[t = "$" + t] = e, s.context[t] || (s.context[t] = e), a[t] = s[t];
                            var n = "__nuxt_" + t + "_installed__";
                            o.default[n] || (o.default[n] = !0, o.default.use((function () {
                                Object.prototype.hasOwnProperty.call(o.default.prototype, t) || Object.defineProperty(o.default.prototype, t, {
                                    get: function () {
                                        return this.$root.$options[t]
                                    }
                                })
                            })))
                        }, n = f.length > 1 && void 0 !== f[1] ? f[1] : {}, t.next = 4, v(0, n);
                    case 4:
                        return i = t.sent, (a = Jt(e)).$router = i, a.registerModule = Ne, s = De({
                            head: {
                                htmlAttrs: {lang: "ru"},
                                title: "Kerames, ЛСР и кирпич, газобетон, бонолит",
                                meta: [{charset: "utf-8"}, {
                                    name: "viewport",
                                    content: "width=device-width, initial-scale=1"
                                }, {
                                    hid: "keywords",
                                    name: "keywords",
                                    content: "stellar city, сколково, новостройка сколково, квартира сколково, жк, жилой комплекс, квартира, квартиры, дом, купить квартиру, квартиры бизнес класса, купить квартиры, жилой комплекс бизнес-класса, квартиры бизнес класса в москве, премиум квартиры"
                                }, {
                                    hid: "description",
                                    name: "description",
                                    content: "Новый третий корпус! Мастер-спальни, окна на 3 стороны и собственная инфраструктура. Прописка в Москве, 20 минут до центра."
                                }, {
                                    hid: "og:title",
                                    property: "og:title",
                                    content: "Kerames, ЛСР и кирпич, газобетон, бонолит"
                                }, {
                                    hid: "og:description",
                                    property: "og:description",
                                    content: "Новый третий корпус! Мастер-спальни, окна на 3 стороны и собственная инфраструктура. Прописка в Москве, 20 минут до центра."
                                }, {
                                    name: "facebook-domain-verification",
                                    content: "9ffilx6v36d285ictdpn10niyp4nrk"
                                }, {name: "yandex-verification", content: "ac2344a5fae79c32"}],
                                link: [{rel: "icon", type: "image/x-icon", href: "/assets/favicon.ico"}],
                                __dangerouslyDisableSanitizers: ["script"],
                                script: [{
                                    innerHTML: '(function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === \'function\',n=m?"init-min.js":"init.js";s.type="text/javascript";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","q4o4iqhw");',
                                    type: "text/javascript",
                                    charset: "utf-8"
                                }, {
                                    src: "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver",
                                    body: !0
                                }, {src: "//wurfl.io/wurfl.js"}, {innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NK5ZVTZ');"}, {
                                    innerHTML: '\n                    window.ctvsData = window.ctvsData || [];\n                    function ctvs(){ctvsData.push(arguments)};\n                    ctvs("config", "dc47f39c5876da45fdde721822b96c77");\n                ',
                                    type: "text/javascript",
                                    charset: "utf-8",
                                    body: !0
                                }, {
                                    src: "https://widget.calltovisit.com/widget.js?config=dc47f39c5876da45fdde721822b96c77",
                                    async: !0,
                                    body: !0
                                }],
                                style: []
                            },
                            store: a,
                            router: i,
                            nuxt: {
                                defaultTransition: Ae, transitions: [Ae], setTransitions: function (t) {
                                    return Array.isArray(t) || (t = [t]), t = t.map((function (t) {
                                        return t = t ? "string" == typeof t ? Object.assign({}, Ae, {name: t}) : Object.assign({}, Ae, t) : Ae
                                    })), this.$options.nuxt.transitions = t, t
                                }, err: null, dateErr: null, error: function (t) {
                                    t = t || null, s.context._errored = Boolean(t), t = t ? Object(h.p)(t) : null;
                                    var n = s.nuxt;
                                    return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                }
                            }
                        }, Vt), a.app = s, l = e ? e.next : function (t) {
                            return s.router.push(t)
                        }, e ? c = i.resolve(e.url).route : (p = Object(h.f)(i.options.base, i.options.mode), c = i.resolve(p).route), t.next = 14, Object(h.t)(s, {
                            store: a,
                            route: c,
                            next: l,
                            error: s.nuxt.error.bind(s),
                            payload: e ? e.payload : void 0,
                            req: e ? e.req : void 0,
                            res: e ? e.res : void 0,
                            beforeRenderFns: e ? e.beforeRenderFns : void 0,
                            ssrContext: e
                        });
                    case 14:
                        return u("config", n), window.__NUXT__ && window.__NUXT__.state && a.replaceState(window.__NUXT__.state), t.next = 20, ne(s.context, u);
                    case 20:
                        return t.next = 23, be(s.context, u);
                    case 23:
                        return t.next = 26, ge(s.context);
                    case 26:
                        return t.next = 29, we(s.context);
                    case 29:
                        if ("function" != typeof ye.a) {
                            t.next = 32;
                            break
                        }
                        return t.next = 32, ye()(s.context, u);
                    case 32:
                        t.next = 35;
                        break;
                    case 35:
                        return t.next = 38, ke(s.context);
                    case 38:
                        return t.next = 41, _e(s.context, u);
                    case 41:
                        t.next = 44;
                        break;
                    case 44:
                        t.next = 47;
                        break;
                    case 47:
                        return t.next = 50, Ee(s.context);
                    case 50:
                        return t.next = 53, Se(s.context);
                    case 53:
                        t.next = 56;
                        break;
                    case 56:
                        t.next = 59;
                        break;
                    case 59:
                        t.next = 62;
                        break;
                    case 62:
                        t.next = 65;
                        break;
                    case 65:
                        return t.next = 68, new Promise((function (t, e) {
                            if (!i.resolve(s.context.route.fullPath).route.matched.length) return t();
                            i.replace(s.context.route.fullPath, t, (function (n) {
                                if (!n._isRouter) return e(n);
                                if (2 !== n.type) return t();
                                var o = i.afterEach(function () {
                                    var e = Object(r.a)(regeneratorRuntime.mark((function e(n, r) {
                                        return regeneratorRuntime.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 3, Object(h.j)(n);
                                                case 3:
                                                    s.context.route = e.sent, s.context.params = n.params || {}, s.context.query = n.query || {}, o(), t();
                                                case 8:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function (t, n) {
                                        return e.apply(this, arguments)
                                    }
                                }())
                            }))
                        }));
                    case 68:
                        return t.abrupt("return", {store: a, app: s, router: i});
                    case 69:
                    case"end":
                        return t.stop()
                }
            }), t)
        }))), Be.apply(this, arguments)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var r = {
        name: "CloseIcon",
        props: {isBackward: {type: Boolean, default: !1}, isWithoutShadow: {type: Boolean, default: !1}}
    }, i = (n(294), n(4)), o = Object(i.a)(r, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "close-icn"}, [n("div", {class: ["close-icn__block", {"_no-shadow": t.isWithoutShadow}]}, [t.isBackward ? n("svg", {
            staticClass: "close-icn__svg _backward",
            attrs: {viewBox: "0 0 24 24"}
        }, [n("use", {attrs: {"xlink:href": "#ic-backward"}})]) : n("svg", {
            staticClass: "close-icn__svg",
            attrs: {viewBox: "0 0 24 24"}
        }, [n("use", {attrs: {"xlink:href": "#ic-cross"}})])])])
    }), [], !1, null, null, null);
    e.a = o.exports
}, , , , , , , , , , , , , function (t, e, n) {
    var r = n(244);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("3f1e8e96", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(296);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("54f0bb86", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(299);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("c8f01442", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(300);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("e60aa7f6", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(301);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("3388058e", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(304);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("1c83a076", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(307);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("37f11f46", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(308);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("4f7518bd", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(313);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("052894a7", r, !0, {sourceMap: !1})
}, , , , , function (t, e, n) {
    "use strict";
    n(66), n(50), n(44), n(6), n(16), n(35), n(26), n(7), n(45), n(30), n(29);
    var r = n(1);

    function i(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return o(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0, i = function () {
                };
                return {
                    s: i, n: function () {
                        return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                    }, e: function (t) {
                        throw t
                    }, f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0, l = !1;
        return {
            s: function () {
                n = n.call(t)
            }, n: function () {
                var t = n.next();
                return s = t.done, t
            }, e: function (t) {
                l = !0, a = t
            }, f: function () {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (l) throw a
                }
            }
        }
    }

    function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    var a = window.requestIdleCallback || function (t) {
        var e = Date.now();
        return setTimeout((function () {
            t({
                didTimeout: !1, timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - e))
                }
            })
        }), 1)
    }, s = window.cancelIdleCallback || function (t) {
        clearTimeout(t)
    }, l = window.IntersectionObserver && new window.IntersectionObserver((function (t) {
        t.forEach((function (t) {
            var e = t.intersectionRatio, n = t.target;
            e <= 0 || !n.__prefetch || n.__prefetch()
        }))
    }));
    e.a = {
        name: "NuxtLink",
        extends: r.default.component("RouterLink"),
        props: {prefetch: {type: Boolean, default: !0}, noPrefetch: {type: Boolean, default: !1}},
        mounted: function () {
            this.prefetch && !this.noPrefetch && (this.handleId = a(this.observe, {timeout: 2e3}))
        },
        beforeDestroy: function () {
            s(this.handleId), this.__observed && (l.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
            observe: function () {
                l && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), l.observe(this.$el), this.__observed = !0)
            }, shouldPrefetch: function () {
                return this.getPrefetchComponents().length > 0
            }, canPrefetch: function () {
                var t = navigator.connection;
                return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
            }, getPrefetchComponents: function () {
                return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (t) {
                    return t.components.default
                })).filter((function (t) {
                    return "function" == typeof t && !t.options && !t.__prefetched
                }))
            }, prefetchLink: function () {
                if (this.canPrefetch()) {
                    l.unobserve(this.$el);
                    var t, e = i(this.getPrefetchComponents());
                    try {
                        for (e.s(); !(t = e.n()).done;) {
                            var n = t.value, r = n();
                            r instanceof Promise && r.catch((function () {
                            })), n.__prefetched = !0
                        }
                    } catch (o) {
                        e.e(o)
                    } finally {
                        e.f()
                    }
                }
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
        return a
    })), n.d(e, "d", (function () {
        return s
    })), n.d(e, "b", (function () {
        return l
    })), n.d(e, "e", (function () {
        return c
    })), n.d(e, "a", (function () {
        return p
    }));
    var r = n(5);
    n(31), n(16), n(48), n(49), n(141), n(53), n(35), n(114), n(95), n(9), n(7), n(6), n(11), n(12);

    function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(n), !0).forEach((function (e) {
                Object(r.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function a(t) {
        var e = "";
        for (var n in t) t[n] && (Array.isArray(t[n]) && t[n].length ? (e += "".concat(n, "="), t[n].forEach((function (t) {
            return e += "".concat(t, ",")
        })), e = e.slice(0, -1) + "&") : "string" == typeof t[n] && t[n].length ? e += "".concat(n, "=").concat(t[n], "&") : console.warn("Unsupported parametr's type", t[n]));
        return e.slice(0, -1)
    }

    function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = {scrollValue: 0, duration: 300, scrollOrigin: "scrollTop"};
        if (console.log(t), t.element) {
            var n = o(o({}, e), t), r = n.element, i = n.scrollValue, a = n.duration, s = n.scrollOrigin;
            console.log({element: r, scrollValue: i, duration: a, scrollOrigin: s});
            var l = r[s], c = i - l, p = +new Date;
            f()
        }

        function u(t, e, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
        }

        function f() {
            var t = +new Date - p;
            r[s] = parseInt(u(t, l, c, a)), t < a ? window.requestAnimationFrame(f) : r[s] = i
        }
    }

    function l() {
        document.documentElement.style.paddingRight = "".concat(window.innerWidth - document.documentElement.clientWidth, "px"), document.documentElement.style.height = "100%", document.documentElement.style.overflow = "hidden"
    }

    function c() {
        document.documentElement.style.height = "", document.documentElement.style.overflow = "", document.documentElement.style.paddingRight = ""
    }

    function p(t) {
        if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t);
        var e = document.createElement("textarea");
        return e.value = t, e.style.position = "fixed", e.style.left = "-999999px", e.style.top = "-999999px", document.body.appendChild(e), e.focus(), e.select(), new Promise((function (t, n) {
            document.execCommand("copy") ? t() : n(), e.remove()
        }))
    }
}, , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(2), i = (n(20), "is-light-theme"), o = "dfeffc", a = "141924", s = {
        CHECK_SITE_THEME: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r, o, a;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return r = t.state, o = t.commit, n.next = 3, e.$cookies.get(i);
                        case 3:
                            if (void 0 === (a = n.sent)) {
                                n.next = 10;
                                break
                            }
                            if (r.isLightTheme !== a) {
                                n.next = 7;
                                break
                            }
                            return n.abrupt("return");
                        case 7:
                            o("TOGGLE_THEME"), n.next = 11;
                            break;
                        case 10:
                            c() || o("TOGGLE_THEME");
                        case 11:
                        case"end":
                            return n.stop()
                    }
                }), n)
            })))()
        }, CHECK_SITE_THEME_BY_TIME: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return t.state, r = t.commit, n.next = 3, e.$cookies.get(i);
                        case 3:
                            if (void 0 === n.sent && !c()) {
                                n.next = 6;
                                break
                            }
                            return n.abrupt("return");
                        case 6:
                            r("TOGGLE_THEME");
                        case 7:
                        case"end":
                            return n.stop()
                    }
                }), n)
            })))()
        }, CHECK_SITE_THEME_ON_FOCUS: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r, o, a;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return r = t.state, o = t.commit, n.next = 3, e.$cookies.get(i);
                        case 3:
                            if (a = n.sent, r.isLightTheme !== a) {
                                n.next = 6;
                                break
                            }
                            return n.abrupt("return");
                        case 6:
                            o("CHANGE_THEME_BY_COOKIE", a);
                        case 7:
                        case"end":
                            return n.stop()
                    }
                }), n)
            })))()
        }
    }, l = {
        TOGGLE_THEME: function (t) {
            t.isLightTheme = !t.isLightTheme, t.currentColor = t.isLightTheme ? o : a, this.$cookies.set(i, t.isLightTheme)
        }, CHANGE_THEME_BY_COOKIE: function (t, e) {
            t.isLightTheme = e, t.currentColor = e ? o : a
        }, SET_BODY_LOCKED: function (t, e) {
            t.locked = e
        }
    };

    function c() {
        var t = (new Date).getHours();
        return t >= 19 || t < 7
    }

    e.default = {
        namespaced: !0, state: function () {
            return {isLightTheme: !0, themeTime: 300, currentColor: "141924", locked: !1}
        }, actions: s, mutations: l
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    e.default = {
        namespaced: !0, state: function () {
            return {state: !1}
        }, getters: {
            getState: function (t) {
                return t.state
            }
        }, actions: {
            CLOSE_MODAL: function (t) {
                t.state;
                (0, t.commit)("SET_STATE", !1)
            }, SET_MODAL: function (t, e) {
                t.state;
                (0, t.commit)("SET_STATE", !!e)
            }
        }, mutations: {
            SET_STATE: function (t, e) {
                t.state = e
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(68), i = n(2), o = (n(20), n(6), n(66), n(50), n(146), n(44), {
        CHANGE_MORTGAGE_RATE: function (t) {
            var e = this;
            return Object(i.a)(regeneratorRuntime.mark((function n() {
                var i, o, a;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return t.state, i = t.commit, n.next = 3, e.$axios.$get(e.$api.mortgage.offers);
                        case 3:
                            o = n.sent, a = Math.min.apply(Math, Object(r.a)(o.map((function (t) {
                                return t.min_rate
                            })))), i("SET_MORTGAGE_RATE", a);
                        case 6:
                        case"end":
                            return n.stop()
                    }
                }), n)
            })))()
        }
    });
    e.default = {
        namespaced: !0, state: function () {
            return {links: [{id: 1, link: "/purchase/mortgage", title: "Ипотека", info: "5%", info_text: "от"}]}
        }, getters: {
            links: function (t, e, n) {
                return n.route ? t.links.filter((function (t) {
                    return ![t.link, "".concat(t.link, "/")].includes(n.route.path)
                })) : []
            }
        }, actions: o, mutations: {
            SET_MORTGAGE_RATE: function (t, e) {
                t.links[0].info = "".concat(e, "%")
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(2), i = (n(20), n(147), n(26), {
        GET_PROJECT: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r, i, o, a, s, l, c, p, u, f, d, h, m, b, g;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return t.state, r = t.commit, n.next = 3, e.$axios.$get(e.$api.project.current);
                        case 3:
                            i = n.sent, o = i.pk, a = i.name, s = i.address, l = i.coords, c = i.plan_display, p = i.plan_preview, u = i.frontend_name, f = i.social_links, d = i.price_increase_start, h = i.price_increase_end, m = i.price_increase_text, b = i.current_time, g = i.show_prices, r("SET_PROJECT", {
                                id: o,
                                genplan: {preview: p, origin: c},
                                name: a,
                                address: s,
                                coords: l,
                                frontend_name: u,
                                social_links: f,
                                price_increase_start: d,
                                price_increase_end: h,
                                price_increase_text: m,
                                current_time: b,
                                show_prices: g
                            });
                        case 7:
                        case"end":
                            return n.stop()
                    }
                }), n)
            })))()
        }, GET_PROJECT_PAGES: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r, i, o;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return r = t.state, i = t.commit, r.project.id || console.error("Cant get project id"), n.prev = 2, n.next = 5, e.$axios.$get(e.$api.project.projectPages(r.project.id));
                        case 5:
                            o = n.sent, i("SET_PROJECT_PAGES", o), n.next = 12;
                            break;
                        case 9:
                            n.prev = 9, n.t0 = n.catch(2), console.log(n.t0);
                        case 12:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[2, 9]])
            })))()
        }, GET_PROJECT_PAGE: function (t, e) {
            var n = this;
            return Object(r.a)(regeneratorRuntime.mark((function r() {
                var i, o, a;
                return regeneratorRuntime.wrap((function (r) {
                    for (; ;) switch (r.prev = r.next) {
                        case 0:
                            if (i = t.state, o = t.commit, i.page[e]) {
                                r.next = 12;
                                break
                            }
                            return r.prev = 2, r.next = 5, n.$axios.$get(n.$api.page.detail(e));
                        case 5:
                            a = r.sent, o("SET_PROJECT_PAGE", {slug: e, data: a}), r.next = 12;
                            break;
                        case 9:
                            r.prev = 9, r.t0 = r.catch(2), console.log(r.t0);
                        case 12:
                        case"end":
                            return r.stop()
                    }
                }), r, null, [[2, 9]])
            })))()
        }, changeWhiteBox: function (t, e) {
            t.state;
            (0, t.commit)("changeWhiteBox", e)
        }
    });
    e.default = {
        namespaced: !0, state: function () {
            return {project: {}, pages: [], page: {}, iswhitebox: !1}
        }, getters: {
            pageBySlug: function (t) {
                return function (e) {
                    return t.pages.find((function (t) {
                        return t.slug === e
                    }))
                }
            }, iswhitebox: function (t) {
                return t.iswhitebox
            }
        }, actions: i, mutations: {
            SET_PROJECT: function (t, e) {
                t.project = e
            }, SET_PROJECT_PAGES: function (t, e) {
                t.pages = e
            }, SET_PROJECT_PAGE: function (t, e) {
                var n = e.slug, r = e.data;
                t.page[n] = r
            }, changeWhiteBox: function (t, e) {
                t.iswhitebox = e
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(2), i = (n(20), {
        GET_BUILDINGS: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r, i, o;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return t.state, t.rootState, r = t.commit, n.prev = 1, n.next = 4, e.$axios.get(e.$api.visual.building);
                        case 4:
                            if (i = n.sent, o = i.data) {
                                n.next = 8;
                                break
                            }
                            throw"Cant get buildings from api";
                        case 8:
                            r("SET_BUILDINGS", o), n.next = 14;
                            break;
                        case 11:
                            n.prev = 11, n.t0 = n.catch(1), console.error(n.t0);
                        case 14:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[1, 11]])
            })))()
        }, GET_BUILDING: function (t, e) {
            var n = this;
            return Object(r.a)(regeneratorRuntime.mark((function r() {
                var i, o, a;
                return regeneratorRuntime.wrap((function (r) {
                    for (; ;) switch (r.prev = r.next) {
                        case 0:
                            return t.state, t.rootState, i = t.commit, r.prev = 1, r.next = 4, n.$axios.get("".concat(n.$api.visual.building).concat(e));
                        case 4:
                            if (o = r.sent, a = o.data) {
                                r.next = 8;
                                break
                            }
                            throw"Cant get building from api";
                        case 8:
                            i("SET_BUILDING", a), r.next = 14;
                            break;
                        case 11:
                            r.prev = 11, r.t0 = r.catch(1), console.error(r.t0);
                        case 14:
                        case"end":
                            return r.stop()
                    }
                }), r, null, [[1, 11]])
            })))()
        }, GET_SECTION: function (t, e) {
            var n = this;
            return Object(r.a)(regeneratorRuntime.mark((function r() {
                var i, o, a;
                return regeneratorRuntime.wrap((function (r) {
                    for (; ;) switch (r.prev = r.next) {
                        case 0:
                            return t.state, t.rootState, i = t.commit, r.prev = 1, r.next = 4, n.$axios.get("".concat(n.$api.visual.section).concat(e));
                        case 4:
                            if (o = r.sent, a = o.data) {
                                r.next = 8;
                                break
                            }
                            throw"Cant get section from api";
                        case 8:
                            i("SET_SECTION", a), r.next = 14;
                            break;
                        case 11:
                            r.prev = 11, r.t0 = r.catch(1), console.error(r.t0);
                        case 14:
                        case"end":
                            return r.stop()
                    }
                }), r, null, [[1, 11]])
            })))()
        }
    });
    e.default = {
        namespaced: !0, state: function () {
            return {buildings: null, building: null, section: null}
        }, actions: i, mutations: {
            SET_BUILDINGS: function (t, e) {
                t.buildings = e
            }, SET_BUILDING: function (t, e) {
                t.building = e
            }, SET_SECTION: function (t, e) {
                t.section = e
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(2), i = (n(20), n(317), n(30), n(16), n(29), {
        GET_FAVORITES: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r, i, o, a;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return t.state, t.rootState, r = t.commit, n.prev = 1, i = e.$api.flats.favorites, n.next = 5, e.$axios.get(i);
                        case 5:
                            if (o = n.sent, a = o.data) {
                                n.next = 9;
                                break
                            }
                            throw"Cant get favorites from api";
                        case 9:
                            a.length && (r("SET_FAVORITES", a), r("CHANGE_COUNT", a.length)), n.next = 15;
                            break;
                        case 12:
                            n.prev = 12, n.t0 = n.catch(1), console.error(n.t0);
                        case 15:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[1, 12]])
            })))()
        }, TOGGLE_FAVORITE: function (t, e) {
            var n = this;
            return Object(r.a)(regeneratorRuntime.mark((function r() {
                var i, o, a, s, l, c;
                return regeneratorRuntime.wrap((function (r) {
                    for (; ;) switch (r.prev = r.next) {
                        case 0:
                            if (t.state, t.rootState, i = t.commit, r.prev = 1, e) {
                                r.next = 4;
                                break
                            }
                            throw"Can not get the flat object";
                        case 4:
                            if (e.id) {
                                r.next = 6;
                                break
                            }
                            throw"Flat does not have id prop";
                        case 6:
                            return o = n.state.favorite.favoritesMap.has(e.id), a = n.$api.favorites, s = o ? "".concat(a).concat(e.id, "/remove/") : "".concat(a).concat(e.id, "/add/"), r.next = 11, n.$axios({
                                method: "post",
                                url: s
                            });
                        case 11:
                            l = r.sent, c = l.data, o ? i("REMOVE_FAVORITE_OBJECT", e.id) : i("ADD_FAVORITE_OBJECT", {
                                id: e.id,
                                flat: e
                            }), i("CHANGE_COUNT", c.count), r.next = 20;
                            break;
                        case 17:
                            r.prev = 17, r.t0 = r.catch(1), console.error("TOGGLE_FAVORITE: ", r.t0);
                        case 20:
                        case"end":
                            return r.stop()
                    }
                }), r, null, [[1, 17]])
            })))()
        }
    }), o = {
        SET_FAVORITES: function (t, e) {
            var n = new Map;
            e.forEach((function (t) {
                n.set(t.id, t)
            })), t.favoritesMap = n
        }, ADD_FAVORITE_OBJECT: function (t, e) {
            var n = e.id, r = e.flat;
            t.favoritesMap.set(n, r), t.favoritesMap = new Map(t.favoritesMap)
        }, REMOVE_FAVORITE_OBJECT: function (t, e) {
            t.favoritesMap.delete(e), t.favoritesMap = new Map(t.favoritesMap)
        }, CHANGE_COUNT: function (t, e) {
            t.count = e
        }
    };
    e.default = {
        namespaced: !0, state: function () {
            return {favoritesMap: new Map, count: 0}
        }, actions: i, mutations: o
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(68), i = n(2), o = (n(20), {
        GET_DOCUMENTS: function (t) {
            var e = this;
            return Object(i.a)(regeneratorRuntime.mark((function n() {
                var r, i, o;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return r = t.commit, t.state, t.rootState, n.prev = 1, n.next = 4, e.$axios.get(e.$api.documents);
                        case 4:
                            i = n.sent, (null == (o = i.data) ? void 0 : o.length) && r("SET_DOCUMENTS", o), n.next = 12;
                            break;
                        case 9:
                            n.prev = 9, n.t0 = n.catch(1), console.error(n.t0);
                        case 12:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[1, 9]])
            })))()
        }
    }), a = {
        SET_DOCUMENTS: function (t, e) {
            t.all = Object(r.a)(e)
        }
    };
    e.default = {
        namespaced: !0, state: function () {
            return {all: []}
        }, actions: o, mutations: a
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    n(9), n(7), n(6), n(11), n(12);
    var r = n(5), i = n(2);
    n(20), n(53);

    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    var a = {
        GET_CONTACTS: function (t) {
            var e = this;
            return Object(i.a)(regeneratorRuntime.mark((function n() {
                var r, i, o;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return r = t.commit, t.state, t.rootState, n.prev = 1, n.next = 4, e.$axios.get(e.$api.office);
                        case 4:
                            i = n.sent, (null == (o = i.data) ? void 0 : o.length) && r("SET_DATA", o[0]), n.next = 12;
                            break;
                        case 9:
                            n.prev = 9, n.t0 = n.catch(1), console.error(n.t0);
                        case 12:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[1, 9]])
            })))()
        }
    }, s = {
        SET_DATA: function (t, e) {
            t.data = function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function (e) {
                        Object(r.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }({}, e)
        }
    };
    e.default = {
        namespaced: !0, state: function () {
            return {data: {}}
        }, getters: {
            location: function (t) {
                return t.data.location ? t.data.location.split(",").reverse() : []
            }
        }, actions: a, mutations: s
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(94), i = {
        SET_MENU_STATE: function (t, e) {
            e ? Object(r.b)() : Object(r.e)(), t.menuOpened = e
        }, JUMP_TO_NEXT_VIEW: function (t, e) {
            t.isJump = e
        }
    };
    e.default = {
        namespaced: !0, state: function () {
            return {menuOpened: !1, isJump: !1}
        }, mutations: i
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(2), i = (n(20), n(147), n(26), n(31), function (t, e) {
        return t.items.find((function (t) {
            return e.path === t.path || e.name === t.slug
        }))
    }), o = {
        tag: function (t) {
            return function (e) {
                return i(t, e) || t.default
            }
        }
    }, a = {
        load: function (t) {
            var e = this;
            return Object(r.a)(regeneratorRuntime.mark((function n() {
                var r, o, a, s;
                return regeneratorRuntime.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            if (r = t.state, o = t.commit, r.items.length) {
                                n.next = 15;
                                break
                            }
                            return n.prev = 2, n.next = 5, e.$axios.$get("/api/metatags/");
                        case 5:
                            (a = n.sent).forEach((function (t) {
                                t.path = t.path.replace(/^(.+?)\/*?$/, "$1")
                            })), o("setItems", a), (s = i(r, {
                                path: "/",
                                name: "index"
                            })) && o("setDefault", s), n.next = 15;
                            break;
                        case 12:
                            n.prev = 12, n.t0 = n.catch(2), console.log(n.t0);
                        case 15:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[2, 12]])
            })))()
        }
    };
    e.default = {
        namespaced: !0, state: function () {
            return {items: [], default: {}}
        }, getters: o, mutations: {
            setItems: function (t, e) {
                t.items = e
            }, setDefault: function (t, e) {
                t.default = e
            }
        }, actions: a
    }
}, function (t, e, n) {
    "use strict";
    var r = {};
    r.trailingSlashRedirect = n(233), r.trailingSlashRedirect = r.trailingSlashRedirect.default || r.trailingSlashRedirect, e.a = r
}, , , function (t, e, n) {
    "use strict";
    var r = n(80), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(81), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(82), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(83), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(84), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(85), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(86), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(87), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(88), i = n.n(r);
    n.d(e, "default", (function () {
        return i.a
    }))
}, function (t, e, n) {
    n(340)
}, , , , function (t, e, n) {
    "use strict";
    n(9), n(7), n(6), n(11), n(12);
    var r = n(5), i = n(3);

    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    var a = {
        name: "BackwardLink",
        props: {
            isWhite: {type: Boolean, default: !1},
            link: {type: [String, Object]},
            text: {type: String, default: "Назад"}
        },
        computed: function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function (e) {
                    Object(r.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }({}, Object(i.e)("global", ["isLightTheme"]))
    }, s = a, l = (n(305), n(4)), c = Object(l.a)(s, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n(t.link ? "nuxt-link" : "div", {
            tag: "component",
            class: ["backward-link", {_white: t.isWhite, _light: t.isLightTheme}],
            attrs: {to: t.link ? t.link : null}
        }, [n("svg", {
            staticClass: "backward-link__icon",
            attrs: {viewBox: "0 0 12 13"}
        }, [n("use", {attrs: {"xlink:href": "#ic-backward"}})]), t._v(" "), n("div", [t._v(t._s(t.text))])])
    }), [], !1, null, null, null);
    e.a = c.exports
}, , , , , function (t, e, n) {
    "use strict";
    n(7), n(6), n(11), n(12);
    var r = n(5), i = (n(9), n(209), n(3));

    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach((function (e) {
                Object(r.a)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    e.a = {
        computed: a(a(a({}, Object(i.c)({tag: "metatags/tag"})), Object(i.e)({
            env: function (t) {
                return t.env
            }
        })), {}, {
            metaInfo: function () {
                var t = this.tag(this.$route), e = {
                    link: [{rel: "canonical", href: "https://".concat(this.env.host).concat(this.$route.path)}],
                    meta: [{
                        hid: "og:url",
                        property: "og:url",
                        content: "https://".concat(this.env.host).concat(this.$route.path)
                    }]
                };
                return t.description && (e.meta.push({
                    hid: "description",
                    name: "description",
                    content: t.description
                }), e.meta.push({
                    hid: "og:description",
                    name: "og:description",
                    content: t.description
                })), t.title && (e.title = t.title, e.meta.push({
                    hid: "og:title",
                    property: "og:title",
                    content: t.title
                })), t.og_image && e.meta.push({hid: "og:image", property: "og:image", content: t.og_image}), e
            }
        }), methods: {
            mergeMetaInfo: function (t) {
                var e = this.metaInfo;
                return Object.keys(t).forEach((function (n) {
                    "meta" == n ? t.meta.forEach((function (t) {
                        var n = e.meta.findIndex((function (e) {
                            return e.hid === t.hid
                        }));
                        n >= 0 ? e.meta[n] = t : e.meta.push(t)
                    })) : e[n] = t[n]
                })), e
            }
        }
    }
}, , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    var r = n(246);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("3191d5ad", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(295);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("5b7fbbe4", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(298);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("5ccf8a5f", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    t.exports = n.p + "img/logo.cda97d8.png"
}, function (t, e, n) {
    var r = n(303);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("b91ff2a2", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(306);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("c9df3cfa", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(312);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("718c299a", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(315);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("b1688648", r, !0, {sourceMap: !1})
}, , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n(95);
    var r = {
        props: {url: {type: String, default: "#"}}, computed: {
            native: function () {
                return "#" != this.url
            }, external: function () {
                return this.url.match(/^http(s?):/)
            }, tagName: function () {
                return this.external ? "a" : "nuxt-link"
            }, tagBindings: function () {
                return this.external ? {
                    href: this.url,
                    target: "_blank",
                    rel: "nofollow noopener noreferrer"
                } : {to: this.url, event: this.native ? "click" : ""}
            }
        }
    }, i = n(4), o = Object(i.a)(r, (function () {
        var t = this, e = t.$createElement;
        return (t._self._c || e)(t.tagName, t._b({
            tag: "component", nativeOn: {
                click: function (e) {
                    return t.$emit("click")
                }
            }
        }, "component", t.tagBindings, !1), [t._t("default")], 2)
    }), [], !1, null, null, null);
    e.a = o.exports
}, , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var r = n(2), i = (n(20), n(16), n(1)), o = n(0), a = window.__NUXT__;

    function s() {
        if (!this._hydrated) return this.$fetch()
    }

    function l() {
        if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
            var t;
            this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
            var e = a.fetch[this._fetchKey];
            if (e && e._error) this.$fetchState.error = e._error; else for (var n in e) i.default.set(this.$data, n, e[n])
        }
    }

    function c() {
        var t = this;
        return this._fetchPromise || (this._fetchPromise = p.call(this).then((function () {
            delete t._fetchPromise
        }))), this._fetchPromise
    }

    function p() {
        return u.apply(this, arguments)
    }

    function u() {
        return (u = Object(r.a)(regeneratorRuntime.mark((function t() {
            var e, n, r, i = this;
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                    case 9:
                        t.next = 15;
                        break;
                    case 11:
                        t.prev = 11, t.t0 = t.catch(6), e = Object(o.p)(t.t0);
                    case 15:
                        if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                            t.next = 19;
                            break
                        }
                        return t.next = 19, new Promise((function (t) {
                            return setTimeout(t, r)
                        }));
                    case 19:
                        this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function () {
                            return i.$nuxt.nbFetching--
                        }));
                    case 23:
                    case"end":
                        return t.stop()
                }
            }), t, this, [[6, 11]])
        })))).apply(this, arguments)
    }

    e.a = {
        beforeCreate: function () {
            Object(o.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, i.default.util.defineReactive(this, "$fetchState", {
                pending: !1,
                error: null,
                timestamp: Date.now()
            }), this.$fetch = c.bind(this), Object(o.a)(this, "created", l), Object(o.a)(this, "beforeMount", s))
        }
    }
}, , , , , , , , function (t, e, n) {
    t.exports = n(216)
}, function (t, e, n) {
    "use strict";
    n.r(e), function (t) {
        n(35), n(7), n(45);
        var e = n(28), r = n(2),
            i = (n(160), n(224), n(228), n(230), n(20), n(26), n(6), n(9), n(66), n(50), n(44), n(30), n(16), n(29), n(1)),
            o = n(195), a = n(128), s = n(0), l = n(34), c = n(207), p = n(93);

        function u(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function (t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0, i = function () {
                    };
                    return {
                        s: i, n: function () {
                            return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                        }, e: function (t) {
                            throw t
                        }, f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(t)
                }, n: function () {
                    var t = n.next();
                    return a = t.done, t
                }, e: function (t) {
                    s = !0, o = t
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        i.default.__nuxt__fetch__mixin__ || (i.default.mixin(c.a), i.default.__nuxt__fetch__mixin__ = !0), i.default.component(p.a.name, p.a), i.default.component("NLink", p.a), t.fetch || (t.fetch = o.a);
        var d, h, m = [], b = window.__NUXT__ || {}, g = b.config || {};
        g._app && (n.p = Object(s.v)(g._app.cdnURL, g._app.assetsPath)), Object.assign(i.default.config, {
            silent: !0,
            performance: !1
        });
        var w = i.default.config.errorHandler || console.error;

        function v(t, e, n) {
            for (var r = function (t) {
                var r = function (t, e) {
                    if (!t || !t.options || !t.options[e]) return {};
                    var n = t.options[e];
                    if ("function" == typeof n) {
                        for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
                        return n.apply(void 0, i)
                    }
                    return n
                }(t, "transition", e, n) || {};
                return "string" == typeof r ? {name: r} : r
            }, i = n ? Object(s.g)(n) : [], o = Math.max(t.length, i.length), a = [], l = function (e) {
                var n = Object.assign({}, r(t[e])), o = Object.assign({}, r(i[e]));
                Object.keys(n).filter((function (t) {
                    return void 0 !== n[t] && !t.toLowerCase().includes("leave")
                })).forEach((function (t) {
                    o[t] = n[t]
                })), a.push(o)
            }, c = 0; c < o; c++) l(c);
            return a
        }

        function y(t, e, n) {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                var i, o, a, l, c = this;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (this._routeChanged = Boolean(d.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(s.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                t.next = 12;
                                break
                            }
                            return t.next = 9, Object(s.r)(e, (function (t, e) {
                                return {Component: t, instance: e}
                            }));
                        case 9:
                            i = t.sent, i.some((function (t) {
                                var r = t.Component, i = t.instance, o = r.options.watchQuery;
                                return !0 === o || (Array.isArray(o) ? o.some((function (t) {
                                    return c._diffQuery[t]
                                })) : "function" == typeof o && o.apply(i, [e.query, n.query]))
                            })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                        case 12:
                            r(), t.next = 26;
                            break;
                        case 15:
                            if (t.prev = 15, t.t0 = t.catch(5), o = t.t0 || {}, a = o.statusCode || o.status || o.response && o.response.status || 500, l = o.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(l)) {
                                t.next = 23;
                                break
                            }
                            return window.location.reload(!0), t.abrupt("return");
                        case 23:
                            this.error({statusCode: a, message: l}), this.$nuxt.$emit("routeChanged", e, n, o), r();
                        case 26:
                        case"end":
                            return t.stop()
                    }
                }), t, this, [[5, 15]])
            })))).apply(this, arguments)
        }

        function k(t, e) {
            return b.serverRendered && e && Object(s.b)(t, e), t._Ctor = t, t
        }

        function _(t) {
            return Object(s.d)(t, function () {
                var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, i, o) {
                    var a;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof e || e.options) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3, e();
                            case 3:
                                e = t.sent;
                            case 4:
                                return a = k(Object(s.s)(e), b.data ? b.data[o] : null), r.components[i] = a, t.abrupt("return", a);
                            case 7:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function (e, n, r, i, o) {
                    return t.apply(this, arguments)
                }
            }())
        }

        function C(t, e, n) {
            var r = this, i = ["trailingSlashRedirect"], o = !1;
            if (void 0 !== n && (i = [], (n = Object(s.s)(n)).options.middleware && (i = i.concat(n.options.middleware)), t.forEach((function (t) {
                t.options.middleware && (i = i.concat(t.options.middleware))
            }))), i = i.map((function (t) {
                return "function" == typeof t ? t : ("function" != typeof a.a[t] && (o = !0, r.error({
                    statusCode: 500,
                    message: "Unknown middleware " + t
                })), a.a[t])
            })), !o) return Object(s.o)(i, e)
        }

        function O(t, e, n) {
            return j.apply(this, arguments)
        }

        function j() {
            return j = Object(r.a)(regeneratorRuntime.mark((function t(e, n, i) {
                var o, a, c, p, f, h, b, g, w, y, x, k, _, O, j, L = this;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", i());
                        case 2:
                            return !1, e === n ? (m = [], !0) : (o = [], m = Object(s.g)(n, o).map((function (t, e) {
                                return Object(s.c)(n.matched[o[e]].path)(n.params)
                            }))), a = !1, c = function (t) {
                                n.path === t.path && L.$loading.finish && L.$loading.finish(), n.path !== t.path && L.$loading.pause && L.$loading.pause(), a || (a = !0, i(t))
                            }, t.next = 8, Object(s.t)(d, {route: e, from: n, next: c.bind(this)});
                        case 8:
                            if (this._dateLastError = d.nuxt.dateErr, this._hadError = Boolean(d.nuxt.err), p = [], (f = Object(s.g)(e, p)).length) {
                                t.next = 27;
                                break
                            }
                            return t.next = 15, C.call(this, f, d.context);
                        case 15:
                            if (!a) {
                                t.next = 17;
                                break
                            }
                            return t.abrupt("return");
                        case 17:
                            return h = (l.a.options || l.a).layout, t.next = 20, this.loadLayout("function" == typeof h ? h.call(l.a, d.context) : h);
                        case 20:
                            return b = t.sent, t.next = 23, C.call(this, f, d.context, b);
                        case 23:
                            if (!a) {
                                t.next = 25;
                                break
                            }
                            return t.abrupt("return");
                        case 25:
                            return d.context.error({
                                statusCode: 404,
                                message: "This page could not be found"
                            }), t.abrupt("return", i());
                        case 27:
                            return f.forEach((function (t) {
                                t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                            })), this.setTransitions(v(f, e, n)), t.prev = 29, t.next = 32, C.call(this, f, d.context);
                        case 32:
                            if (!a) {
                                t.next = 34;
                                break
                            }
                            return t.abrupt("return");
                        case 34:
                            if (!d.context._errored) {
                                t.next = 36;
                                break
                            }
                            return t.abrupt("return", i());
                        case 36:
                            return "function" == typeof (g = f[0].options.layout) && (g = g(d.context)), t.next = 40, this.loadLayout(g);
                        case 40:
                            return g = t.sent, t.next = 43, C.call(this, f, d.context, g);
                        case 43:
                            if (!a) {
                                t.next = 45;
                                break
                            }
                            return t.abrupt("return");
                        case 45:
                            if (!d.context._errored) {
                                t.next = 47;
                                break
                            }
                            return t.abrupt("return", i());
                        case 47:
                            w = !0, t.prev = 48, y = u(f), t.prev = 50, y.s();
                        case 52:
                            if ((x = y.n()).done) {
                                t.next = 63;
                                break
                            }
                            if ("function" == typeof (k = x.value).options.validate) {
                                t.next = 56;
                                break
                            }
                            return t.abrupt("continue", 61);
                        case 56:
                            return t.next = 58, k.options.validate(d.context);
                        case 58:
                            if (w = t.sent) {
                                t.next = 61;
                                break
                            }
                            return t.abrupt("break", 63);
                        case 61:
                            t.next = 52;
                            break;
                        case 63:
                            t.next = 68;
                            break;
                        case 65:
                            t.prev = 65, t.t0 = t.catch(50), y.e(t.t0);
                        case 68:
                            return t.prev = 68, y.f(), t.finish(68);
                        case 71:
                            t.next = 77;
                            break;
                        case 73:
                            return t.prev = 73, t.t1 = t.catch(48), this.error({
                                statusCode: t.t1.statusCode || "500",
                                message: t.t1.message
                            }), t.abrupt("return", i());
                        case 77:
                            if (w) {
                                t.next = 80;
                                break
                            }
                            return this.error({
                                statusCode: 404,
                                message: "This page could not be found"
                            }), t.abrupt("return", i());
                        case 80:
                            return t.next = 82, Promise.all(f.map(function () {
                                var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                    var o, a, l, c, u, f, h, b, g;
                                    return regeneratorRuntime.wrap((function (t) {
                                        for (; ;) switch (t.prev = t.next) {
                                            case 0:
                                                if (r._path = Object(s.c)(e.matched[p[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== m[i], L._routeChanged && o ? r._dataRefresh = !0 : L._paramChanged && o ? (a = r.options.watchParam, r._dataRefresh = !1 !== a) : L._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function (t) {
                                                    return L._diffQuery[t]
                                                })) : "function" == typeof l && (_ || (_ = Object(s.h)(e)), r._dataRefresh = l.apply(_[i], [e.query, n.query]))), L._hadError || !L._isMounted || r._dataRefresh) {
                                                    t.next = 6;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 6:
                                                return c = [], u = r.options.asyncData && "function" == typeof r.options.asyncData, f = Boolean(r.options.fetch) && r.options.fetch.length, h = u && f ? 30 : 45, u && ((b = Object(s.q)(r.options.asyncData, d.context)).then((function (t) {
                                                    Object(s.b)(r, t), L.$loading.increase && L.$loading.increase(h)
                                                })), c.push(b)), L.$loading.manual = !1 === r.options.loading, f && ((g = r.options.fetch(d.context)) && (g instanceof Promise || "function" == typeof g.then) || (g = Promise.resolve(g)), g.then((function (t) {
                                                    L.$loading.increase && L.$loading.increase(h)
                                                })), c.push(g)), t.abrupt("return", Promise.all(c));
                                            case 14:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function (e, n) {
                                    return t.apply(this, arguments)
                                }
                            }()));
                        case 82:
                            a || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), i()), t.next = 99;
                            break;
                        case 85:
                            if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (O = t.t2 || {}).message) {
                                t.next = 90;
                                break
                            }
                            return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, O));
                        case 90:
                            return m = [], Object(s.k)(O), "function" == typeof (j = (l.a.options || l.a).layout) && (j = j(d.context)), t.next = 96, this.loadLayout(j);
                        case 96:
                            this.error(O), this.$nuxt.$emit("routeChanged", e, n, O), i();
                        case 99:
                        case"end":
                            return t.stop()
                    }
                }), t, this, [[29, 85], [48, 73], [50, 65, 68, 71]])
            }))), j.apply(this, arguments)
        }

        function L(t, n) {
            Object(s.d)(t, (function (t, n, r, o) {
                return "object" !== Object(e.a)(t) || t.options || ((t = i.default.extend(t))._Ctor = t, r.components[o] = t), t
            }))
        }

        function M(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
            var n = e ? (l.a.options || l.a).layout : t.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(d.context)), this.setLayout(n)
        }

        function E(t) {
            t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
        }

        function T(t, e) {
            var n = this;
            if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                var r = Object(s.h)(t), o = Object(s.g)(t), a = !1;
                i.default.nextTick((function () {
                    r.forEach((function (t, e) {
                        if (t && !t._isDestroyed && t.constructor._dataRefresh && o[e] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                            var n = t.constructor.options.data.call(t);
                            for (var r in n) i.default.set(t.$data, r, n[r]);
                            a = !0
                        }
                    })), a && window.$nuxt.$nextTick((function () {
                        window.$nuxt.$emit("triggerScroll")
                    })), E(n)
                }))
            }
        }

        function S(t) {
            window.onNuxtReadyCbs.forEach((function (e) {
                "function" == typeof e && e(t)
            })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), h.afterEach((function (e, n) {
                i.default.nextTick((function () {
                    return t.$nuxt.$emit("routeChanged", e, n)
                }))
            }))
        }

        function $() {
            return ($ = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                var n, r, o, a, l;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return d = e.app, h = e.router, e.store, n = new i.default(d), r = b.layout || "default", t.next = 7, n.loadLayout(r);
                        case 7:
                            return n.setLayout(r), o = function () {
                                n.$mount("#__nuxt"), h.afterEach(L), h.afterEach(M.bind(n)), h.afterEach(T.bind(n)), i.default.nextTick((function () {
                                    S(n)
                                }))
                            }, t.next = 11, Promise.all(_(d.context.route));
                        case 11:
                            if (a = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), a.length && (n.setTransitions(v(a, h.currentRoute)), m = h.currentRoute.matched.map((function (t) {
                                return Object(s.c)(t.path)(h.currentRoute.params)
                            }))), n.$loading = {}, b.error && n.error(b.error), h.beforeEach(y.bind(n)), h.beforeEach(O.bind(n)), !b.serverRendered || !Object(s.n)(b.routePath, n.context.route.path)) {
                                t.next = 20;
                                break
                            }
                            return t.abrupt("return", o());
                        case 20:
                            return l = function () {
                                L(h.currentRoute, h.currentRoute), M.call(n, h.currentRoute), E(n), o()
                            }, t.next = 23, new Promise((function (t) {
                                return setTimeout(t, 0)
                            }));
                        case 23:
                            O.call(n, h.currentRoute, h.currentRoute, (function (t) {
                                if (t) {
                                    var e = h.afterEach((function (t, n) {
                                        e(), l()
                                    }));
                                    h.push(t, void 0, (function (t) {
                                        t && w(t)
                                    }))
                                } else l()
                            }));
                        case 24:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        Object(l.b)(null, b.config).then((function (t) {
            return $.apply(this, arguments)
        })).catch(w)
    }.call(this, n(36))
}, , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n.r(e);
    n(168), n(31);
    e.default = function (t) {
        var e = t.route, n = t.redirect;
        if ("/" !== e.path && e.path.endsWith("/")) {
            var r = e.path, i = e.query, o = e.hash;
            n({path: r.replace(/\/+$/, "") || "/", query: i, hash: o})
        }
    }
}, , , , , , , , , , , function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".wrap_mbpjg{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.image_OtO3l{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;max-height:500rem;margin-bottom:4.8rem;background-size:contain}.title_0KaNK{font-size:2rem}.subtitle_Npa2O,.title_0KaNK{-ms-flex-negative:0;flex-shrink:0;font-weight:300;text-align:center}.subtitle_Npa2O{margin-top:1.6rem;font-size:1.6rem}.link_aFqQ4{font-weight:400}", ""]), r.locals = {
        wrap: "wrap_mbpjg",
        image: "image_OtO3l",
        title: "title_0KaNK",
        subtitle: "subtitle_Npa2O",
        link: "link_aFqQ4"
    }, t.exports = r
}, function (t, e, n) {
    "use strict";
    n(170)
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}", ""]), t.exports = r
}, function (t, e, n) {
    var r = n(248);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("0902334e", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:top .2s,-webkit-transform .2s;transition:top .2s,-webkit-transform .2s;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:left .2s,-webkit-transform .2s;transition:left .2s,-webkit-transform .2s;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:right .2s,-webkit-transform .2s;transition:right .2s,-webkit-transform .2s;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}.swiper-fraction-wrapper{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.swiper-pagination-current{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:4.2rem;height:4.2rem;background-color:#fff;color:#000;border-radius:50%;font-size:1.8rem;line-height:1}.swiper-pagination-devider{display:block;width:.6rem;height:.6rem;margin:1.5rem;background-color:#fff;border-radius:50%}.swiper-pagination-total{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:2.7rem;height:2.7rem;background-color:#141924;color:#fff;border-radius:50%;font-size:1rem;font-weight:700}.swiper-slide{position:relative;background-size:cover;background-repeat:no-repeat;background-position:50% 50%}.swiper-image-origin{opacity:0;background-size:cover;background-repeat:no-repeat;background-position:50%;-webkit-transition:opacity .26s ease-out;transition:opacity .26s ease-out}.swiper-image-origin,.swiper-image-origin:after{position:absolute;top:0;left:0;width:100%;height:100%}.swiper-image-origin:after{content:\"\";display:block;z-index:1;pointer-events:none}.swiper-image-origin.swiper-lazy-loaded{opacity:1}", ""]), t.exports = r
}, function (t, e, n) {
    var r = n(250);
    r.__esModule && (r = r.default), "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
    (0, n(15).default)("5e717e52", r, !0, {sourceMap: !1})
}, function (t, e, n) {
    var r = n(14), i = n(208), o = n(251), a = n(252), s = n(253), l = n(254), c = n(255), p = n(256), u = n(257),
        f = n(258), d = n(259), h = n(260), m = n(261), b = n(262), g = n(263), w = n(264), v = n(265), y = n(266),
        x = n(267), k = n(268), _ = n(269), C = n(270), O = n(271), j = n(272), L = n(273), M = n(274), E = n(275),
        T = n(276), S = n(277), $ = n(278), P = n(279), z = n(280), R = n(281), I = n(282), D = n(283), A = n(284),
        H = n(285), N = n(286), Z = n(287), B = n(288), G = n(289), V = n(290), U = n(291), Y = r(!1), F = i(o),
        q = i(a), J = i(s), W = i(l), X = i(c), Q = i(p), K = i(u), tt = i(f), et = i(d), nt = i(h), rt = i(m),
        it = i(b), ot = i(g), at = i(w), st = i(v), lt = i(y), ct = i(x), pt = i(k), ut = i(_), ft = i(C), dt = i(O),
        ht = i(j), mt = i(L), bt = i(M), gt = i(E), wt = i(T), vt = i(S), yt = i($), xt = i(P), kt = i(z), _t = i(R),
        Ct = i(I), Ot = i(D), jt = i(A), Lt = i(H), Mt = i(N), Et = i(Z), Tt = i(B), St = i(G), $t = i(V), Pt = i(U);
    Y.push([t.i, '@font-face{font-family:"Roboto";src:local("Roboto Thin"),local("Roboto-Thin"),url(' + F + ') format("woff2"),url(' + q + ') format("woff"),url(' + J + ') format("truetype");font-weight:100;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Thin Italic"),local("Roboto-ThinItalic"),url(' + W + ') format("woff2"),url(' + X + ') format("woff"),url(' + Q + ') format("truetype");font-weight:100;font-style:italic;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Light"),local("Roboto-Light"),url(' + K + ') format("woff2"),url(' + tt + ') format("woff"),url(' + et + ') format("truetype");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url(' + nt + ') format("woff2"),url(' + rt + ') format("woff"),url(' + it + ') format("truetype");font-weight:300;font-style:italic;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto"),local("Roboto-Regular"),url(' + ot + ') format("woff2"),url(' + at + ') format("woff"),url(' + st + ') format("truetype");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Italic"),local("Roboto-Italic"),url(' + lt + ') format("woff2"),url(' + ct + ') format("woff"),url(' + pt + ') format("truetype");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Medium"),local("Roboto-Medium"),url(' + ut + ') format("woff2"),url(' + ft + ') format("woff"),url(' + dt + ') format("truetype");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url(' + ht + ') format("woff2"),url(' + mt + ') format("woff"),url(' + bt + ') format("truetype");font-weight:500;font-style:italic;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Bold"),local("Roboto-Bold"),url(' + gt + ') format("woff2"),url(' + wt + ') format("woff"),url(' + vt + ') format("truetype");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url(' + yt + ') format("woff2"),url(' + xt + ') format("woff"),url(' + kt + ') format("truetype");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Black"),local("Roboto-Black"),url(' + _t + ') format("woff2"),url(' + Ct + ') format("woff"),url(' + Ot + ') format("truetype");font-weight:900;font-style:normal;font-display:swap}@font-face{font-family:"Roboto";src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url(' + jt + ') format("woff2"),url(' + Lt + ') format("woff"),url(' + Mt + ') format("truetype");font-weight:900;font-style:italic;font-display:swap}*{-webkit-box-sizing:border-box;box-sizing:border-box}html{height:100%;font-size:.727276vw}@media only screen and (max-width:920px){html{width:100%;font-size:10px;height:auto;overflow-x:hidden;overflow-y:auto}}body{min-height:100vh;font-family:"Roboto",sans-serif;color:#fff;font-size:1.6rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:antialiased;overflow-x:hidden;overflow-y:auto}body._locked{width:calc(100% + 15px);overflow:hidden;padding-right:15px}@media only screen and (max-width:920px){body._locked{position:fixed;left:0;bottom:0;width:100%;min-height:100%;padding-right:0}}a{color:inherit;text-decoration:none}ul{margin-top:0;margin-bottom:0;padding-left:0}li{list-style:none}.contain,.cover,.fill{position:absolute;left:0;top:0;width:100%;height:100%}.cover{-o-object-fit:cover;object-fit:cover}.contain{-o-object-fit:contain;object-fit:contain}.lazy-image{position:absolute;left:0;top:0;width:100%;height:100%;background-position:50%;background-size:cover;opacity:0;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.lazy-image[lazy=loaded]{opacity:1}.image-wrap{position:relative}.image-wrap .image{position:absolute;top:0;left:0;width:100%;height:100%}.title{width:100%;margin:0 0 4.4rem;font-weight:200;font-size:4rem;line-height:1.3;color:#828a9b}@media only screen and (max-width:920px){.title{width:100%;max-width:100%;margin-bottom:34px;font-size:26px;line-height:1.28em}}.first-title{width:100%;margin:0 0 4.4rem;font-weight:300;font-size:4rem;line-height:1.2;color:#fff}@media only screen and (max-width:920px){.first-title{width:100%;max-width:100%;margin-bottom:34px;font-size:26px}}.second-title{font-size:3.6rem;font-weight:300;color:#fff;margin:0 0 3.7rem;line-height:1.2}@media only screen and (max-width:920px){.second-title{font-size:2.4rem;margin-bottom:1rem}}body._light .title{color:#6a7894}.page{min-height:calc(100vh - 21.85rem);padding-top:10.8rem;padding-bottom:5rem}@media only screen and (max-width:767px){.page{padding-top:100px}}.wrapper{padding-left:24.7rem}@media only screen and (max-width:920px){.wrapper{padding-left:0}}.container{padding:0 6.18rem}@media only screen and (max-width:920px){.container{padding:0 20px}}.p-header{padding-top:10.8rem}@media only screen and (max-width:767px){.p-header{padding-top:100px}}.section:first-child{margin-top:0}.section:last-child{margin-bottom:0}.stroke-word{font-size:3.6rem;font-weight:700;text-transform:uppercase;-webkit-text-fill-color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:#fff9eb}._light .stroke-word{-webkit-text-stroke-color:#3f3f3f}._light ._light-40{color:#404040!important}._light ._light-48{color:#484848!important}._light ._light-3f{color:#3f3f3f!important}._light ._light-66{color:#666!important}._light ._light-36{color:#363636!important}.page-enter,.page-leave-active{opacity:0;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.page-enter-active{-webkit-transition:opacity .6s ease-out .4s;transition:opacity .6s ease-out .4s}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .2s;transition:opacity .2s}.fade-enter,.fade-leave-active{opacity:0}.max-height-enter-active,.max-height-leave-active{-webkit-transition:max-height .2s;transition:max-height .2s}.max-height-enter,.max-height-leave-active{max-height:0}.mb-marker,.mb-project-marker{position:absolute;top:0;left:0;will-change:transform}.mb-project-marker .mb-marker__icn{display:block;width:3.7rem;height:5.7rem;background-image:url(' + Et + ');background-size:contain;background-repeat:no-repeat;background-position:50%}.mb-marker{width:34px;height:34px}.mb-marker svg{width:100%;height:100%}.mb-marker-cluster{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:45px;height:45px;background:linear-gradient(209.24deg,#ed5339,#800ca0 32.48%,#6200c6 53.96%,#3a2de3 77.77%,#ffca00 99.05%);border-radius:50%;color:#222326;font-size:16px;font-weight:700;cursor:pointer}.mb-marker-cluster:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;width:39px;height:39px;margin:auto;background:#fff;border-radius:50%;z-index:0}.mb-marker-cluster span{z-index:1}.mapboxgl-canvas-container.mapboxgl-interactive{cursor:default}.mapboxgl-popup{position:absolute;top:-25px;padding:16px 27px;color:#fff;font-size:14px;text-align:center;line-height:1.4;background:rgba(0,0,0,.5);border-radius:26px;pointer-events:none;-webkit-transition:.2s;transition:.2s;opacity:0}.mapboxgl-popup.mb-active{-webkit-transition:.2s;transition:.2s;opacity:.8}.mapboxgl-popup-close-button,.mapboxgl-popup-tip{display:none}.mapboxgl-popup-content{padding:0;border-radius:0;background:none;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.infra-popup{padding:0 .5rem;text-align:center;font-size:1.3rem;line-height:1.4;color:#fff;-webkit-transform:translate3d(0,-3.2rem,0);transform:translate3d(0,-3.2rem,0)}body._light .infra-popup{color:#222326}.mb-marker-attraction{position:absolute;width:70px;height:70px;border-radius:100%;cursor:pointer}.mb-marker-attraction__image{border-radius:50%;width:100%;height:100%;background-size:cover;background-position:50%;background-repeat:no-repeat}body._light .button-bordered._hover,body._light .button-bordered:hover,body._light .button._hover,body._light .button:hover{-webkit-box-shadow:1rem 1rem 2.5rem rgba(156,198,232,.25);box-shadow:1rem 1rem 2.5rem rgba(156,198,232,.25);-webkit-transform:translateY(-3%);transform:translateY(-3%)}.button,body._light .button-bordered{color:#222326}.button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:16rem;min-height:5rem;padding:.5rem 2rem;background-color:#fff;border-radius:3rem;-webkit-box-shadow:1rem 1rem 2.5rem transparent;box-shadow:1rem 1rem 2.5rem transparent;font-size:1.4rem;line-height:1.4;text-align:center;text-decoration:none;border:none;-webkit-transition:opacity .3s ease,color .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease;transition:opacity .3s ease,color .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease;transition:box-shadow .3s ease,opacity .3s ease,color .3s ease,transform .3s ease;transition:box-shadow .3s ease,opacity .3s ease,color .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:translateY(0);transform:translateY(0)}.button._hover,.button:hover{-webkit-box-shadow:1rem 1rem 2.5rem #2b3b57;box-shadow:1rem 1rem 2.5rem #2b3b57;-webkit-transform:translateY(-3%);transform:translateY(-3%)}.button-bordered{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:16rem;min-height:5rem;padding:.5rem 2rem;background-color:transparent;border-radius:3rem;-webkit-box-shadow:1rem 1rem 2.5rem transparent;box-shadow:1rem 1rem 2.5rem transparent;font-size:1.4rem;line-height:1.4;text-align:center;text-decoration:none;border:1px solid #5f697c;color:hsla(0,0%,100%,.7);-webkit-transition:opacity .3s ease,color .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease;transition:opacity .3s ease,color .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease;transition:box-shadow .3s ease,opacity .3s ease,color .3s ease,transform .3s ease;transition:box-shadow .3s ease,opacity .3s ease,color .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:translateY(0);transform:translateY(0)}.button-bordered._hover,.button-bordered:hover{-webkit-box-shadow:1rem 1rem 2.5rem #2b3b57;box-shadow:1rem 1rem 2.5rem #2b3b57;-webkit-transform:translateY(-3%);transform:translateY(-3%)}.button-bordered-2{color:#ffeec7;min-width:24.4rem;background:transparent;-webkit-box-shadow:0 4px 4px rgba(0,0,0,.25);box-shadow:0 4px 4px rgba(0,0,0,.25);border:1px solid #ffeec7}.button-bordered-2._hover,.button-bordered-2:hover{-webkit-box-shadow:1rem 1rem 2.5rem rgba(0,0,0,.55);box-shadow:1rem 1rem 2.5rem rgba(0,0,0,.55);-webkit-transform:translateY(-3%);transform:translateY(-3%)}.input{display:block;width:100%;height:32px;background:none;border:none;-webkit-appearance:none;font-size:16px;line-height:32px;color:#fff;outline:none}.slider-component{-webkit-box-shadow:none;box-shadow:none;border-radius:0}.slider-component._light .vue-slider-rail{background-color:#d4e5f3}.slider-component._light .vue-slider-dot .vue-slider-dot-handle:before,.slider-component._light .vue-slider-process{background-color:#222326}.slider-component._light .vue-slider-dot .vue-slider-dot-handle:after{border-color:#222326}.slider-component .vue-slider{-webkit-box-shadow:none;box-shadow:none;border-radius:0}.slider-component .vue-slider-rail{background-color:#828a9b}.slider-component .vue-slider-process{background-color:#fff}.slider-component .vue-slider-dot{cursor:pointer;-webkit-box-shadow:none;box-shadow:none;-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.slider-component .vue-slider-dot .vue-slider-dot-handle:before{content:"";position:absolute;top:50%;left:50%;z-index:2;width:.6rem;height:.6rem;background-color:#fff;border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.slider-component .vue-slider-dot .vue-slider-dot-handle:after{content:"";position:absolute;top:50%;left:50%;z-index:2;width:1.4rem;height:1.4rem;border-radius:50%;border:.1rem solid #fff;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.swiper-dynamic-bullets{padding:0 .7rem}.swiper-dynamic-bullets._white .swiper-pagination-bullet:after,.swiper-dynamic-bullets._white .swiper-pagination-bullet:before{background-image:url(' + Tt + ')}.swiper-dynamic-bullets._white .swiper-pagination-bullet .swiper-pagination-bullet__circle{background-color:#fff}@media only screen and (max-width:920px){.swiper-dynamic-bullets{padding:0;width:110px!important}}.swiper-dynamic-bullets .swiper-pagination-bullet{-webkit-box-sizing:content-box;box-sizing:content-box;width:1.86rem;height:1.86rem;padding:0 .4rem;opacity:1;background:none;-webkit-transform:scale(1);transform:scale(1);outline:none}@media only screen and (max-width:920px){.swiper-dynamic-bullets .swiper-pagination-bullet{width:14px;height:14px;padding:0 4px}}.swiper-dynamic-bullets .swiper-pagination-bullet.swiper-pagination-bullet{margin:0}.swiper-dynamic-bullets .swiper-pagination-bullet:after,.swiper-dynamic-bullets .swiper-pagination-bullet:before{content:"";position:absolute;top:50%;display:none;width:1.46rem;height:.2rem;background-image:url(' + St + ");background-size:1.3rem 100%;background-repeat:repeat-x}@media only screen and (max-width:920px){.swiper-dynamic-bullets .swiper-pagination-bullet:after,.swiper-dynamic-bullets .swiper-pagination-bullet:before{width:10px}}.swiper-dynamic-bullets .swiper-pagination-bullet:before{right:50%;background-position:100% 50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.swiper-dynamic-bullets .swiper-pagination-bullet:after{left:50%;background-position:0 50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.swiper-dynamic-bullets .swiper-pagination-bullet .swiper-pagination-bullet__circle{display:block;width:100%;height:100%;background-color:#323d54;border-radius:50%;-webkit-transform:scale(.6);transform:scale(.6);-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.swiper-dynamic-bullets .swiper-pagination-bullet-active-next-next .swiper-pagination-bullet__circle,.swiper-dynamic-bullets .swiper-pagination-bullet-active-prev-prev .swiper-pagination-bullet__circle{-webkit-transform:scale(.4);transform:scale(.4)}.swiper-dynamic-bullets .swiper-pagination-bullet-active:after,.swiper-dynamic-bullets .swiper-pagination-bullet-active:before{display:block}.swiper-dynamic-bullets .swiper-pagination-bullet-active .swiper-pagination-bullet__circle{-webkit-transform:scale(1);transform:scale(1)}.swiper-dynamic-bullets .swiper-pagination-bullet-active-next:after,.swiper-dynamic-bullets .swiper-pagination-bullet-active-next:before,.swiper-dynamic-bullets .swiper-pagination-bullet-active-prev:after,.swiper-dynamic-bullets .swiper-pagination-bullet-active-prev:before,.swiper-dynamic-bullets .swiper-pagination-bullet-active:after,.swiper-dynamic-bullets .swiper-pagination-bullet-active:before{display:block}.swiper-dynamic-bullets .swiper-pagination-bullet-active-next:first-child:before,.swiper-dynamic-bullets .swiper-pagination-bullet-active-next:last-child:after,.swiper-dynamic-bullets .swiper-pagination-bullet-active-prev:first-child:before,.swiper-dynamic-bullets .swiper-pagination-bullet-active-prev:last-child:after,.swiper-dynamic-bullets .swiper-pagination-bullet-active:first-child:before,.swiper-dynamic-bullets .swiper-pagination-bullet-active:last-child:after{display:none}.swiper-dynamic-bullets .swiper-pagination-bullet-active-next-next:before,.swiper-dynamic-bullets .swiper-pagination-bullet-active-prev-prev:after{display:block}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.fade-enter,.fade-leave-to{opacity:0}.slide-down-enter-active,.slide-down-leave-active,.slide-top-enter-active,.slide-top-leave-active{-webkit-transition:.3s;transition:.3s}.slide-down-leave-to,.slide-top-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-down-enter,.slide-top-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-left-enter-active,.slide-left-leave-active,.slide-right-enter-active,.slide-right-leave-active{-webkit-transition:.3s;transition:.3s}.slide-left-enter,.slide-right-leave-to{-webkit-transform:translate(100%);transform:translate(100%)}.slide-left-leave-to,.slide-right-enter{-webkit-transform:translate(-100%);transform:translate(-100%)}.list-enter-active,.list-leave-active,.list-move{-webkit-transition:.5s cubic-bezier(.59,.12,.34,.95);transition:.5s cubic-bezier(.59,.12,.34,.95);-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.list-enter{opacity:0;-webkit-transform:translateX(50px) scaleY(.5);transform:translateX(50px) scaleY(.5)}.list-enter-to{opacity:1;-webkit-transform:translateX(0) scaleY(1);transform:translateX(0) scaleY(1)}.list-leave-active{position:absolute}.list-leave-to{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:center top;transform-origin:center top}.select-filter{position:relative;width:100%;background:transparent}@media only screen and (max-width:920px){.select-filter{background-color:transparent}}.select-filter>*{width:100%}.select-filter._bordered .multiselect{border-color:#fff}.select-filter._opened{z-index:2}.select-filter._opened .multiselect{border-bottom:none;border-radius:.2rem .2rem 0 0}.select-filter._disabled{opacity:.5;pointer-events:none}.select-filter._light._bordered .multiselect{border-color:#222326}.select-filter._light .multiselect__select:before{background-image:url(" + $t + ')}.select-filter._light .multiselect__single{color:#222326}.select-filter._light .multiselect__content-wrapper{background-color:#dfeffc;border-color:#222326;color:#222326}.select-filter._light .multiselect.multiselect--active,.select-filter._light .multiselect.multiselect--active .multiselect__content-wrapper{-webkit-box-shadow:0 3rem 3rem rgba(0,0,0,.25);box-shadow:0 3rem 3rem rgba(0,0,0,.25)}.select-filter._light .select-filter__labels{color:#222326}.select-filter._disable-clicking-active .multiselect__option--selected{pointer-events:none}.select-filter .multiselect{height:3rem;outline:none;background:transparent;border:.1rem solid transparent;border-radius:.2rem;-webkit-box-shadow:0 3rem 3rem transparent;box-shadow:0 3rem 3rem transparent}@media only screen and (max-width:920px){.select-filter .multiselect{padding-right:30px;padding-left:12px}}.select-filter .multiselect.multiselect--active{-webkit-box-shadow:0 3rem 3rem #1b2741;box-shadow:0 3rem 3rem #1b2741}.select-filter .multiselect.multiselect--active .multiselect__select{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.select-filter .multiselect.multiselect--active .multiselect__placeholder{display:inline-block}.select-filter .multiselect.multiselect--active .multiselect__content-wrapper{-webkit-box-shadow:0 3rem 3rem #1b2741;box-shadow:0 3rem 3rem #1b2741}.select-filter .multiselect__tags{height:100%;min-height:0;padding:.5rem 1.4rem .7rem;border-radius:0;overflow:hidden;white-space:nowrap;background:transparent;text-overflow:ellipsis;border:none;cursor:pointer}@media only screen and (max-width:920px){.select-filter .multiselect__tags{padding-left:0;font-weight:300;font-size:14px}}.select-filter .multiselect__placeholder{margin-bottom:0;padding-top:0;font-size:1.4rem}.select-filter .multiselect__select{position:absolute;top:0;right:0;height:100%;width:4rem;border:none;pointer-events:none;-webkit-transition:none;transition:none}.select-filter .multiselect__select:before{content:"";position:absolute;top:50%;left:50%;height:1.6rem;width:1.6rem;margin:0;border:none;background-image:url(' + Pt + ");background-repeat:no-repeat;background-position:50%;background-size:contain;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);-webkit-transition:none;transition:none}.select-filter .multiselect__single{margin-bottom:0;padding-top:0;padding-left:0;background:none;font-size:1.4rem;color:#fff}.select-filter .multiselect__content-wrapper{width:calc(100% + .2rem);margin-top:-.1rem;margin-left:-.1rem;background-color:#141924;border-radius:0 0 .2rem .2rem;border:.1rem solid #fff;border-top:none;color:#fff;-webkit-box-shadow:0 3rem 3rem transparent;box-shadow:0 3rem 3rem transparent;z-index:5;overflow-y:auto}.select-filter .multiselect__content{padding:.9rem 1.4rem 1.4rem}.select-filter .multiselect__content,.select-filter .multiselect__element{width:100%}.select-filter .multiselect__element{margin-top:1.4rem}.select-filter .multiselect__element:first-child{margin-top:0}.select-filter .multiselect__option{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;font-size:1.4rem;background-color:transparent;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;cursor:pointer}.select-filter .multiselect__option--selected,.select-filter .multiselect__option:hover{opacity:.5}.select-filter .multiselect__option--disabled{background:transparent!important;opacity:.5}.select-filter .multiselect__option--disabled .multiselect__select{background-color:transparent}.select-filter__labels{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1.6rem;color:#fff}.select-filter__select{position:absolute;top:0;left:0;display:block;width:100%;height:100%;font-size:1.6rem;opacity:0;z-index:3}", ""]), t.exports = Y
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotothin.3058110.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotothin.35fb101.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotothin.a232962.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotothinitalic.d8ab340.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotothinitalic.2222176.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotothinitalic.8f7f19a.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotolight.95ff440.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotolight.8c9edc3.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotolight.25d4745.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotolightitalic.f8d5964.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotolightitalic.2712173.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotolightitalic.0af2901.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Roboto.806e04d.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Roboto.59d18e1.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Roboto.ecf539e.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoitalic.b025b15.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoitalic.bf5f5b6.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoitalic.727137e.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotomedium.76cb645.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotomedium.5673e7a.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotomedium.704bba0.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotomediumitalic.ff02e68.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotomediumitalic.7f386c9.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotomediumitalic.35abcf5.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotobold.23c8ce0.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotobold.1e0c226.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotobold.1ac02c0.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotobolditalic.19771af.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotobolditalic.12310c5.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotobolditalic.57d3da3.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoblack.3f8e10e.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoblack.eab3a56.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoblack.5473997.ttf"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoblackitalic.3701b24.woff2"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoblackitalic.34d76a2.woff"
}, function (t, e, n) {
    t.exports = n.p + "fonts/Robotoblackitalic.4296e07.ttf"
}, function (t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCAzOSA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4LjQyODggMTkuMjk4NEMzOC40Mjg4IDI5LjcwMDcgMjkuOTk2MSA1Ny44NjM4IDE5LjU5MzggNTcuODYzOEM5LjE5MTUxIDU3Ljg2MzggMC43NTg3ODkgMjkuNzAwNyAwLjc1ODc4OSAxOS4yOTg0QzAuNzU4Nzg5IDguODk2MSA5LjE5MTUxIDAuNDYzMzc5IDE5LjU5MzggMC40NjMzNzlDMjkuOTk2MSAwLjQ2MzM3OSAzOC40Mjg4IDguODk2MSAzOC40Mjg4IDE5LjI5ODRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIzOC40Mjg4IiB5MT0iMC40NjMzNzkiIHgyPSItNi4wOTc5NSIgeTI9IjUyLjY2MzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0VENTMzOSIvPgo8c3RvcCBvZmZzZXQ9IjAuMzIyNDc0IiBzdG9wLWNvbG9yPSIjODAwQ0EwIi8+CjxzdG9wIG9mZnNldD0iMC41MzU2OTgiIHN0b3AtY29sb3I9IiM2MjAwQzYiLz4KPHN0b3Agb2Zmc2V0PSIwLjc3MjE1NCIgc3RvcC1jb2xvcj0iIzNBMkRFMyIvPgo8c3RvcCBvZmZzZXQ9IjAuOTgzNDI1IiBzdG9wLWNvbG9yPSIjRkZDQTAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
}, function (t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDE1IDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjk2ODc1IDEuMDU3MzdMMTMuODQzNyAxLjA1NzM3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMSA0Ii8+Cjwvc3ZnPgo="
}, function (t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDE1IDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjk2ODc1IDEuMDU3MzdMMTMuODQzNyAxLjA1NzM3IiBzdHJva2U9IiMzMjNENTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMSA0Ii8+Cjwvc3ZnPgo="
}, function (t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTMwODYgNi42MDQ0OUw2LjY1NzIzIDEwLjY0MDZMMTIuMTUyMyA2LjYwNDQ5IiBzdHJva2U9IiMyMjIzMjYiLz4KPC9zdmc+Cg=="
}, function (t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTMwODYgNi42MDQ0OUw2LjY1NzIzIDEwLjY0MDZMMTIuMTUyMyA2LjYwNDQ5IiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="
}, function (t, e, n) {
    t.exports = "images/logo-kerames.png"
}, function (t, e, n) {
    t.exports = "images/logo-kerames.png"
}, function (t, e, n) {
    "use strict";
    n(171)
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, '.close-icn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:5.4rem;height:5.4rem;border:.1rem solid hsla(0,0%,100%,.6);border-radius:50%;cursor:pointer;-webkit-transition:opacity .26s ease;transition:opacity .26s ease}.close-icn:hover{opacity:.5}.close-icn._blue{border-color:#3b4762}.close-icn._blue .close-icn__block{background-color:#3b4762;-webkit-box-shadow:none;box-shadow:none}.close-icn._light{border-color:#222326}.close-icn._light .close-icn__block:before{background-color:#222326}.close-icn._light .close-icn__svg{stroke:#dfeffc}.close-icn__block{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:65.8%;height:65.8%;border-radius:50%;-webkit-box-shadow:1rem 1rem 2.5rem #2b3b57;box-shadow:1rem 1rem 2.5rem #2b3b57;-webkit-transition:-webkit-box-shadow .3s ease;transition:-webkit-box-shadow .3s ease;transition:box-shadow .3s ease;transition:box-shadow .3s ease,-webkit-box-shadow .3s ease}.close-icn__block:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;display:block;width:100%;height:100%;border-radius:50%;background-color:#fff}.close-icn__block._no-shadow{-webkit-box-shadow:none;box-shadow:none}.close-icn__svg{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;z-index:1;display:block;width:60%;height:58%;stroke:#000}.close-icn__svg._backward{width:35%;height:35%}', ""]), t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".MenuToggle_4zhUD{position:relative;width:4rem;height:4rem;display:inline-block;cursor:pointer}@media screen and (min-aspect-ratio:288/115){.MenuToggle_4zhUD{width:6.956vh;height:6.956vh}}@media only screen and (max-width:920px){.MenuToggle_4zhUD{width:15px 15px}}.circles_xLZAd{position:absolute;top:50%;left:50%;display:block;width:50%;height:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.circles_xLZAd._active .circle_X0CMo{-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.circles_xLZAd:not(._active) .circle_X0CMo:first-child{-webkit-transform:translate(-135%,-135%);transform:translate(-135%,-135%)}.circles_xLZAd:not(._active) .circle_X0CMo:nth-child(2){-webkit-transform:translate(35%,-135%);transform:translate(35%,-135%)}.circles_xLZAd:not(._active) .circle_X0CMo:nth-child(3){-webkit-transform:translate(-135%,35%);transform:translate(-135%,35%)}.circles_xLZAd:not(._active) .circle_X0CMo:nth-child(4){-webkit-transform:translate(35%,35%);transform:translate(35%,35%)}.circles_xLZAd._light .circle_X0CMo{background-color:#222326}.circle_X0CMo{width:30%;height:30%;border-radius:50%;background-color:#fff;cursor:pointer;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:-webkit-transform .2s ease .2s;transition:-webkit-transform .2s ease .2s;transition:transform .2s ease .2s;transition:transform .2s ease .2s,-webkit-transform .2s ease .2s}.circle_X0CMo,.close_rlWDA{position:absolute;top:50%;left:50%}.close_rlWDA{width:4rem;height:4rem;opacity:1;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.close_rlWDA._active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);-webkit-transition:-webkit-transform .2s ease .2s;transition:-webkit-transform .2s ease .2s;transition:transform .2s ease .2s;transition:transform .2s ease .2s,-webkit-transform .2s ease .2s}.close_rlWDA:hover{opacity:1}@media screen and (min-aspect-ratio:288/115){.close_rlWDA{width:6.95vh;height:6.95vh}}", ""]), r.locals = {
        MenuToggle: "MenuToggle_4zhUD",
        circles: "circles_xLZAd",
        circle: "circle_X0CMo",
        close: "close_rlWDA"
    }, t.exports = r
}, function (t, e, n) {
    "use strict";
    n(172)
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".company-logo{display:block;width:100%;height:100%;fill:#fff}.company-logo._inversed{fill:#254369}", ""]), t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".ThemeToggle_GcDAA{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.button_MT9W-{width:2.3rem;height:2.3rem;border:.2rem solid #f2db88;border-radius:50%;margin:0 .2rem;-webkit-transition:border .3s ease;transition:border .3s ease}.button_MT9W-._night{border-color:#141924}.descr_qijUo{margin-left:.9em;color:#828a9b;font-weight:300;font-size:1.2rem;line-height:1.16;text-align:center}", ""]), r.locals = {
        ThemeToggle: "ThemeToggle_GcDAA",
        button: "button_MT9W-",
        descr: "descr_qijUo"
    }, t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, '.Aside_GBKnc{position:fixed;top:0;left:0;z-index:11;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:5rem 2.3rem 2.3rem 6rem;width:24.7rem;height:100vh;border-right:.1rem solid #192747}.Aside_GBKnc._light{border-color:#d4e5f3}@media only screen and (max-width:920px){.Aside_GBKnc{display:none}}.logoLink_e0S2h{display:block;width:12.3rem}@media screen and (min-aspect-ratio:288/115){.logoLink_e0S2h{width:21.39vh}}.logo_O6HTv{width:100%;height:auto;fill:#fff;-webkit-transition:opacity .26s ease;transition:opacity .26s ease}.logo_O6HTv._light{fill:#222326}@media screen and (min-aspect-ratio:288/115){.logo_O6HTv{width:9.04vh}}.logo_O6HTv:hover{opacity:.7}.asideWrapper_N56wX{padding:1.5rem 0 2rem;margin:auto 0}.menu_CJXIv{display:block;margin:0 0 0 5rem}@media screen and (min-aspect-ratio:288/115){.menu_CJXIv{margin:0 0 4.86vh 8.695vh}}.nav_VXwvM{display:block;margin:1.8rem 0 2.3rem;-webkit-transition:opacity .26s ease,visibility 0s ease;transition:opacity .26s ease,visibility 0s ease}.nav_VXwvM._hidden{opacity:0;visibility:hidden;-webkit-transition:opacity .26s ease,visibility 0s ease .26s;transition:opacity .26s ease,visibility 0s ease .26s}@media screen and (min-aspect-ratio:288/115){.nav_VXwvM{margin:4.86vh 0}}.navLink_UDmGF{display:block;text-decoration:none;font-weight:300;font-size:1.2rem;line-height:1.16;-webkit-transition:color .23s ease;transition:color .23s ease}.navLink_UDmGF._active-link,.navLink_UDmGF:hover{color:#828a9b}.navLink_UDmGF:not(:first-child){margin-top:2rem}@media screen and (min-aspect-ratio:288/115){.navLink_UDmGF:not(:first-child){margin-top:3.478vh}}@media screen and (min-aspect-ratio:288/115){.navLink_UDmGF{margin-top:2.086vh}}.navLink_UDmGF.new:after{background-color:#7251ef;border-radius:5px;color:#fff;content:"NEW";font-size:.8rem;font-weight:700;line-height:normal;margin:-8px 0 0 5px;padding:3px;position:absolute}@-webkit-keyframes blink_MXZin{50%{opacity:0}}@keyframes blink_MXZin{50%{opacity:0}}.themeButton_kr3cy{display:block;width:75%;margin:2.3rem 0 0}@media screen and (min-aspect-ratio:288/115){.themeButton_kr3cy{margin:4.86vh 0}}.company_oQuEH{display:block;width:12.3rem;height:auto;margin:auto 0 0;cursor:pointer;-webkit-transition:opacity .26s ease;transition:opacity .26s ease}@media screen and (min-aspect-ratio:288/115){.company_oQuEH{width:15.13vh;height:5.217vh}}.company_oQuEH:hover{opacity:.7}.project_ZF1HS{max-width:9rem;margin-bottom:0;margin-top:2rem;font-weight:500;font-size:1.2rem;line-height:1.6;color:rgba(44,179,214,.8)}.project_ZF1HS._light{color:#222326}', ""]),
        r.locals = {
        Aside: "Aside_GBKnc",
        logoLink: "logoLink_e0S2h",
        logo: "logo_O6HTv",
        asideWrapper: "asideWrapper_N56wX",
        menu: "menu_CJXIv",
        nav: "nav_VXwvM",
        navLink: "navLink_UDmGF",
        themeButton: "themeButton_kr3cy",
        company: "company_oQuEH",
        project: "project_ZF1HS",
        blink: "blink_MXZin"
    }, t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, '.wrapper_Ndkv5{position:fixed;top:0;left:0;display:block;width:100%;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .4s ease;transition:-webkit-transform .4s ease;transition:transform .4s ease;transition:transform .4s ease,-webkit-transform .4s ease;pointer-events:none;z-index:13}@media only screen and (max-width:920px){.wrapper_Ndkv5{display:none}}.header_hOJgt{margin-left:24.7rem;display:-webkit-box;display:-ms-flexbox;display:flex;height:5.3rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1.3rem 6.18rem 0;opacity:0;color:#fff;-webkit-transform:translate3d(0,-20rem,0);transform:translate3d(0,-20rem,0);z-index:1}.header_hOJgt *{pointer-events:all}.header_hOJgt._active{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .6s cubic-bezier(.165,.84,.44,1),-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:opacity .6s cubic-bezier(.165,.84,.44,1),-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1),opacity .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1),opacity .6s cubic-bezier(.165,.84,.44,1),-webkit-transform .6s cubic-bezier(.165,.84,.44,1)}.header_hOJgt._fill:after{-webkit-transform:scaleY(1);transform:scaleY(1)}.header_hOJgt._opened-menu{z-index:11}.header_hOJgt._light{color:#222326}.header_hOJgt._light:after{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(30%,#dfeffc),to(rgba(223,239,252,0)));background-image:linear-gradient(180deg,#dfeffc 30%,rgba(223,239,252,0))}.header_hOJgt:after{content:"";position:absolute;top:0;left:0;z-index:-1;display:block;width:100%;height:180%;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(30%,#141924),to(rgba(20,25,37,0)));background-image:linear-gradient(180deg,#141924 30%,rgba(20,25,37,0));-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:top;transform-origin:top;-webkit-transition:-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1),-webkit-transform .6s cubic-bezier(.165,.84,.44,1);pointer-events:none}.project_Cnh2S{font-weight:300;font-size:1.2rem;line-height:1.25;color:#828a9b}.actions_QmkPT,.fav_2DhGJ{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fav_2DhGJ{margin-right:6.3rem;-webkit-transition:opacity .23s ease;transition:opacity .23s ease}.fav_2DhGJ:hover{opacity:.8}.favCount_T7awt{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:1.66em;height:1.66em;margin-right:1.3rem;font-weight:300;font-size:1.4rem;line-height:.8;border:.1rem solid #fff;border-radius:50%;-webkit-transition:background-color .23s ease,color .23s ease;transition:background-color .23s ease,color .23s ease}.favCount_T7awt._light{border-color:#222326}.favCount_T7awt._active{background-color:#fff;color:#141924}.favCount_T7awt._active._light{background-color:#222326;color:#fff}.favText_neGoY{font-weight:300;font-size:1.2rem}.phone_xQ7Zz{font-size:1.6rem;line-height:1.18;text-align:right;white-space:nowrap}', ""]), r.locals = {
        wrapper: "wrapper_Ndkv5",
        header: "header_hOJgt",
        project: "project_Cnh2S",
        actions: "actions_QmkPT",
        fav: "fav_2DhGJ",
        favCount: "favCount_T7awt",
        favText: "favText_neGoY",
        phone: "phone_xQ7Zz"
    }, t.exports = r
}, function (t, e, n) {
    "use strict";
    n(174)
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".footer-ida{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-left:auto;text-decoration:none;-webkit-transition:fill .26s ease,color .26s ease;transition:fill .26s ease,color .26s ease;color:#586785}@media only screen and (max-width:920px){.footer-ida{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:0}}.footer-ida._light svg .ida-logo__letter{-webkit-animation-name:ida_light;animation-name:ida_light}.footer-ida:hover .footer-ida__text{opacity:.5}.footer-ida:hover svg .ida-logo__border-top{-webkit-transform:translateY(-16px);transform:translateY(-16px)}.footer-ida:hover svg .ida-logo__border-bottom{-webkit-transform:translateY(16px);transform:translateY(16px)}.footer-ida:hover svg .ida-logo__letter{-webkit-animation-name:ida;animation-name:ida;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.footer-ida:hover svg .ida-logo__letter:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}.footer-ida:hover svg .ida-logo__letter:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}.footer-ida:hover svg .ida-logo__letter:nth-child(4){-webkit-animation-delay:.3s;animation-delay:.3s}.footer-ida:hover svg .ida-logo__letter:nth-child(5){-webkit-animation-delay:.4s;animation-delay:.4s}.footer-ida:hover svg .ida-logo__letter:nth-child(6){-webkit-animation-delay:.5s;animation-delay:.5s}.footer-ida:hover svg .ida-logo__letter:nth-child(7){-webkit-animation-delay:.6s;animation-delay:.6s}.footer-ida:hover svg .ida-logo__letter:nth-child(8){-webkit-animation-delay:.7s;animation-delay:.7s}.footer-ida:hover svg .ida-logo__letter:nth-child(9){-webkit-animation-delay:.8s;animation-delay:.8s}.footer-ida:hover svg .ida-logo__letter:nth-child(10){-webkit-animation-delay:.9s;animation-delay:.9s}.footer-ida__text{font-size:12px;opacity:.8;margin-right:13px;white-space:nowrap;-webkit-transition:opacity .4s ease;transition:opacity .4s ease}.ida-logo{display:block;-ms-flex-negative:0;flex-shrink:0;width:69px;height:21px;fill:#586785}.ida-logo__border-bottom,.ida-logo__border-top{-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}@-webkit-keyframes ida{0%{fill:#b7b7b7}25%{fill:#fff}50%{fill:#b7b7b7}75%{fill:#b7b7b7}to{fill:#b7b7b7}}@keyframes ida{0%{fill:#b7b7b7}25%{fill:#fff}50%{fill:#b7b7b7}75%{fill:#b7b7b7}to{fill:#b7b7b7}}@-webkit-keyframes ida_light{0%{fill:#aed0ea}25%{fill:#fff}50%{fill:#aed0ea}75%{fill:#aed0ea}to{fill:#aed0ea}}@keyframes ida_light{0%{fill:#aed0ea}25%{fill:#fff}50%{fill:#aed0ea}75%{fill:#aed0ea}to{fill:#aed0ea}}", ""]), t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".FooterContent_MhTfU{border-top:1px solid #192747;padding-top:4.5rem;padding-bottom:2.3rem;display:-webkit-box;display:-ms-flexbox;display:flex}.FooterContent_MhTfU._light{border-color:#d4e5f3}@media only screen and (max-width:920px){.FooterContent_MhTfU{padding-top:21px;padding-bottom:24px}}.FooterContent_MhTfU._no-border{border-top:0}.socials_bi7uE{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:auto}.socials_bi7uE._light .social_v8cZ3{fill:#586785}.social_v8cZ3{display:block;-ms-flex-negative:0;flex-shrink:0;width:1.8rem;height:1.6rem;margin-right:1.9rem;fill:#fff;opacity:1;-webkit-transition:opacity .26s ease;transition:opacity .26s ease}.social_v8cZ3:last-child{margin-right:0}.social_v8cZ3:hover{opacity:.7}.social_v8cZ3 svg{display:block;width:100%;height:100%}.ida_DW4G6:hover{color:hsla(0,0%,100%,.6)}.ida_DW4G6:hover .ida-logo{fill:hsla(0,0%,100%,.6)}.ida_DW4G6:hover._light{color:rgba(34,35,38,.6)}.ida_DW4G6:hover._light .ida-logo{fill:rgba(174,208,234,.6)}", ""]), r.locals = {
        FooterContent: "FooterContent_MhTfU",
        socials: "socials_bi7uE",
        social: "social_v8cZ3",
        ida: "ida_DW4G6"
    }, t.exports = r
}, function (t, e, n) {
    "use strict";
    n(175)
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".backward-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.4rem;font-weight:300;stroke:#5f697c;color:#5f697c;-webkit-transition:stroke .26s ease,color .26s ease,opacity .2s ease;transition:stroke .26s ease,color .26s ease,opacity .2s ease}.backward-link._white{stroke:#fff;color:#fff}.backward-link._white:hover{opacity:.6}.backward-link._light:not(._white):hover{stroke:#222326;color:#222326}.backward-link:hover{stroke:#fff;color:#fff}.backward-link__icon{display:block;width:.78em;fill:none;margin-right:.3em}", ""]), t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, '.StellarMenu_1ND7g{position:fixed;z-index:11;top:0;left:0;display:block;padding-bottom:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;visibility:hidden;pointer-events:none;opacity:0;-webkit-transition:opacity .26s ease,visibility 0s ease .26s;transition:opacity .26s ease,visibility 0s ease .26s}.StellarMenu_1ND7g._active{visibility:visible;pointer-events:auto;opacity:1;-webkit-transition:opacity .26s ease,visibility 0s;transition:opacity .26s ease,visibility 0s}.StellarMenu_1ND7g._active .test_u6n\\+2{opacity:1;-webkit-filter:blur(0);filter:blur(0);-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1);-webkit-transition:opacity .4s ease-out .6s,blur .4s ease-out .6s,-webkit-transform .4s ease-out .6s;transition:opacity .4s ease-out .6s,blur .4s ease-out .6s,-webkit-transform .4s ease-out .6s;transition:opacity .4s ease-out .6s,blur .4s ease-out .6s,transform .4s ease-out .6s;transition:opacity .4s ease-out .6s,blur .4s ease-out .6s,transform .4s ease-out .6s,-webkit-transform .4s ease-out .6s}.bg_nE1Wz{position:absolute;z-index:2;top:0;left:0;display:block;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;pointer-events:none;background-position:100% 0;opacity:0;-webkit-filter:blur(1rem);filter:blur(1rem);-webkit-transform:translateY(-10%),scaleY(0);transform:translateY(-10%),scaleY(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}@media only screen and (max-width:767px){.bg_nE1Wz{height:60%}}@media only screen and (max-width:768px) and (orientation:landscape),only screen and (min-width:768px) and (max-width:920px){.bg_nE1Wz{height:100%}}.overlay_Z8OAM{position:absolute;top:100%;left:100%;z-index:1;width:260vw;height:260vw;border-radius:50%;background-color:#141924;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:translate(-50%,-50%) translateZ(0) scale(0);transform:translate(-50%,-50%) translateZ(0) scale(0);will-change:transform;-webkit-transition:-webkit-transform .3s ease .4s;transition:-webkit-transform .3s ease .4s;transition:transform .3s ease .4s;transition:transform .3s ease .4s,-webkit-transform .3s ease .4s}.overlay_Z8OAM._light{background-color:#dfeffc}@media screen and (orientation:portrait){.overlay_Z8OAM{width:260vh;height:260vh}}.overlay_Z8OAM._active{-webkit-transform:translate(-50%,-50%) translateZ(0) scale(1);transform:translate(-50%,-50%) translateZ(0) scale(1);-webkit-transition:-webkit-transform .6s ease-out;transition:-webkit-transform .6s ease-out;transition:transform .6s ease-out;transition:transform .6s ease-out,-webkit-transform .6s ease-out}.container_Yb-GL{position:relative;z-index:2;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;opacity:0}@media only screen and (max-width:920px){.container_Yb-GL{overflow-x:hidden;overflow-y:auto}}@media screen and (device-aspect-ratio:40/71){.container_Yb-GL{display:block}}.container_Yb-GL._active{opacity:1;-webkit-transition:opacity .4s ease-out .6s;transition:opacity .4s ease-out .6s}.footer_bagaG{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:auto}@media only screen and (max-width:920px){.footer_bagaG{display:block;margin-top:14px}.footer_bagaG .footer-ida__text{display:none}}.companyLink_EJzcH{-ms-flex-negative:0;flex-shrink:0;margin-right:15rem;font-weight:300;font-size:1.4rem;line-height:1.6rem;color:#828a9b;-webkit-transition:color .26s ease;transition:color .26s ease}@media only screen and (max-width:920px){.companyLink_EJzcH{display:none}}.companyLink_EJzcH:hover{color:#fff}.companyLink_EJzcH:hover._light{color:#6a7894}.companyName_vo-lm{color:#fff;white-space:nowrap}.companyName_vo-lm._light{color:#6a7894}.footerWrapper_uYNQZ{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.footerContent_tuB8p{padding-left:0;padding-right:0;padding-top:2.3rem}@media only screen and (max-width:920px){.footerContent_tuB8p{margin:0 -20px;padding-top:21px;padding-left:20px;padding-right:20px}}.navs_NgHMT{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media only screen and (max-width:920px){.navs_NgHMT{display:block;padding:0 20px 0 40px}}.closeSubs_tfP2A{position:absolute;top:0;left:100vw;display:none;width:100%;padding:0 20px 0 60px;visibility:hidden;opacity:0;-webkit-transition:opacity .36s ease,visibility 0s ease .36s,-webkit-transform .36s ease;transition:opacity .36s ease,visibility 0s ease .36s,-webkit-transform .36s ease;transition:opacity .36s ease,transform .36s ease,visibility 0s ease .36s;transition:opacity .36s ease,transform .36s ease,visibility 0s ease .36s,-webkit-transform .36s ease}@media only screen and (max-width:920px){.closeSubs_tfP2A{display:-webkit-box;display:-ms-flexbox;display:flex}}.closeSubs_tfP2A._visible{-webkit-transform:translateX(-100vw);transform:translateX(-100vw);opacity:1;visibility:visible;-webkit-transition:opacity .36s ease,-webkit-transform .36s ease;transition:opacity .36s ease,-webkit-transform .36s ease;transition:opacity .36s ease,transform .36s ease;transition:opacity .36s ease,transform .36s ease,-webkit-transform .36s ease}.navLink_bJ6yd{width:21rem;font-weight:300;font-size:2.4rem;line-height:1.16;color:#828a9b;-webkit-transition:color .26s ease;transition:color .26s ease}@media screen and (min-aspect-ratio:288/115){.navLink_bJ6yd{font-size:4.17vh}}@media only screen and (max-width:920px){.navLink_bJ6yd{width:100%;font-weight:300;font-size:18px;opacity:1;visibility:visible;-webkit-transition:color .26s ease,opacity .36s ease .1s,visibility 0s ease .36s,-webkit-transform .36s ease .1s;transition:color .26s ease,opacity .36s ease .1s,visibility 0s ease .36s,-webkit-transform .36s ease .1s;transition:color .26s ease,opacity .36s ease .1s,transform .36s ease .1s,visibility 0s ease .36s;transition:color .26s ease,opacity .36s ease .1s,transform .36s ease .1s,visibility 0s ease .36s,-webkit-transform .36s ease .1s}.navLink_bJ6yd._hidden{opacity:0;visibility:hidden;-webkit-transform:translateX(-100vw);transform:translateX(-100vw);-webkit-transition:color .26s ease,opacity .36s ease,-webkit-transform .36s ease;transition:color .26s ease,opacity .36s ease,-webkit-transform .36s ease;transition:color .26s ease,opacity .36s ease,transform .36s ease;transition:color .26s ease,opacity .36s ease,transform .36s ease,-webkit-transform .36s ease}}.navLink_bJ6yd._light{color:#141924}.navLink_bJ6yd:hover{color:inherit}.childsRow_pvG02{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media only screen and (max-width:920px){.childsRow_pvG02{margin:27px 0 0}}.childsRow_pvG02:not(:first-child){margin-top:3.6rem}@media screen and (min-aspect-ratio:288/115){.childsRow_pvG02:not(:first-child){margin-top:6.26vh}}@media only screen and (max-width:920px){.childsRow_pvG02:not(:first-child){margin:27px 0 0}}.childsItems_P0BIp{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:2.6rem}@media screen and (min-aspect-ratio:288/115){.childsItems_P0BIp{margin-left:2.52vh}}@media only screen and (max-width:920px){.childsItems_P0BIp{position:absolute;z-index:1;left:100vw;top:40px;width:100vw;height:calc(100% - 40px);display:block;padding:0 20px 0 60px;margin-left:0;opacity:0;overflow-x:hidden;overflow-y:auto;visibility:hidden;-webkit-transition:opacity .36s ease,visibility 0s ease .36s,-webkit-transform .36s ease;transition:opacity .36s ease,visibility 0s ease .36s,-webkit-transform .36s ease;transition:opacity .36s ease,transform .36s ease,visibility 0s ease .36s;transition:opacity .36s ease,transform .36s ease,visibility 0s ease .36s,-webkit-transform .36s ease}.childsItems_P0BIp._active{opacity:1;-webkit-transform:translateX(-100vw);transform:translateX(-100vw);visibility:visible;-webkit-transition:opacity .36s ease,-webkit-transform .36s ease;transition:opacity .36s ease,-webkit-transform .36s ease;transition:opacity .36s ease,transform .36s ease;transition:opacity .36s ease,transform .36s ease,-webkit-transform .36s ease}}.subLink_5iqU4{font-weight:300;font-size:1.4rem;line-height:1.16}@media screen and (min-aspect-ratio:288/115){.subLink_5iqU4{font-size:2.43vh}}@media only screen and (max-width:920px){.subLink_5iqU4{display:block;margin:27px 0 0;width:100%;font-weight:300;font-size:18px;line-height:1.16;color:#828a9b;-webkit-transition:color .26s ease;transition:color .26s ease}.subLink_5iqU4:hover{color:inherit}}.subLink_5iqU4._main-mobile{display:none}@media only screen and (max-width:920px){.subLink_5iqU4._main-mobile{display:block}}.subLink_5iqU4:not(:last-child){margin-right:3rem}@media only screen and (max-width:920px){.subLink_5iqU4:first-child{margin-top:0}}.soloNavs_cc0sc{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.soloNavs_cc0sc:not(:first-child){margin-top:1.8rem}@media screen and (min-aspect-ratio:288/115){.soloNavs_cc0sc:not(:first-child){margin-top:3.13vh}}@media only screen and (max-width:920px){.soloNavs_cc0sc:not(:first-child){display:block;margin-top:27px}}@media only screen and (max-width:920px){.navLinkChild_t4kEG{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navLinkChild_t4kEG._light:after{background-color:#222326}.navLinkChild_t4kEG:after{content:"";display:block;-ms-flex-negative:0;flex-shrink:0;width:8px;height:8px;border-radius:50%;margin-left:auto;background-color:#fff}}.navLinkSolo_31OIV{margin:1.8rem 50% 1.8rem 0}@media screen and (min-aspect-ratio:288/115){.navLinkSolo_31OIV{margin:3.13vh 50% 3.13vh 0}}@media only screen and (max-width:920px){.navLinkSolo_31OIV{margin:27px 0 0;display:block}}@media only screen and (max-width:920px) and (max-width:920px){.navLinkSolo_31OIV:not(:first-child){margin:27px 0 0}}.navLinkSolo_31OIV:nth-child(2n){margin-right:0}.phone_5fL4h{margin:20px 0;padding:0 20px 0 40px;font-size:16px;line-height:1.1875;display:none}@media only screen and (max-width:920px){.phone_5fL4h{display:block}}.themeButton_bFYJF{display:none}@media only screen and (max-width:920px){.themeButton_bFYJF{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;margin:20px 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 20px 0 40px}}.companyLinkMobile_PHLo8{display:none}@media only screen and (max-width:767px){.companyLinkMobile_PHLo8{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:20px 0 40px;padding:0 20px 0 40px;font-weight:300;font-size:12px;line-height:1.4;color:#828a9b;-webkit-transition:color .26s ease;transition:color .26s ease}}.companyLogo_4fQQ8{width:87px;height:30px;margin-right:24px;cursor:pointer}.mobileContainer_A\\+seh{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}', ""]), r.locals = {
        StellarMenu: "StellarMenu_1ND7g",
        test: "test_u6n+2",
        bg: "bg_nE1Wz",
        overlay: "overlay_Z8OAM",
        container: "container_Yb-GL",
        footer: "footer_bagaG",
        companyLink: "companyLink_EJzcH",
        companyName: "companyName_vo-lm",
        footerWrapper: "footerWrapper_uYNQZ",
        footerContent: "footerContent_tuB8p",
        navs: "navs_NgHMT",
        closeSubs: "closeSubs_tfP2A",
        navLink: "navLink_bJ6yd",
        childsRow: "childsRow_pvG02",
        childsItems: "childsItems_P0BIp",
        subLink: "subLink_5iqU4",
        soloNavs: "soloNavs_cc0sc",
        navLinkChild: "navLinkChild_t4kEG",
        navLinkSolo: "navLinkSolo_31OIV",
        phone: "phone_5fL4h",
        themeButton: "themeButton_bFYJF",
        companyLinkMobile: "companyLinkMobile_PHLo8",
        companyLogo: "companyLogo_4fQQ8",
        mobileContainer: "mobileContainer_A+seh"
    }, t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, '.wrapper_HNRqC{position:fixed;top:0;left:0;z-index:11;display:none;width:100%;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}@media only screen and (max-width:920px){.wrapper_HNRqC{display:block}}.HeaderMobile_IPNi5{width:100%;padding:14px 8px}@media only screen and (max-width:920px){.HeaderMobile_IPNi5{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.HeaderMobile_IPNi5._fill:after{-webkit-transform:scaleY(1);transform:scaleY(1)}.HeaderMobile_IPNi5._opened-menu{z-index:11}.HeaderMobile_IPNi5._light:after{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(30%,#dfeffc),to(rgba(223,239,252,0)));background-image:linear-gradient(180deg,#dfeffc 30%,rgba(223,239,252,0))}.HeaderMobile_IPNi5:after{content:"";position:absolute;top:0;left:0;z-index:-1;width:100%;height:180%;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(30%,#141924),to(rgba(20,25,37,0)));background-image:linear-gradient(180deg,#141924 30%,rgba(20,25,37,0));-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:top;transform-origin:top;-webkit-transition:-webkit-transform .4s cubic-bezier(.165,.84,.44,1);transition:-webkit-transform .4s cubic-bezier(.165,.84,.44,1);transition:transform .4s cubic-bezier(.165,.84,.44,1);transition:transform .4s cubic-bezier(.165,.84,.44,1),-webkit-transform .4s cubic-bezier(.165,.84,.44,1);pointer-events:none}.logoLink_4bzNw{display:block;width:144px;margin:0 auto}.logo_33gR\\+{display:block;width:100%;height:31px;fill:#fff;-webkit-transition:opacity .26s ease;transition:opacity .26s ease}.logo_33gR\\+._light{fill:#222326}.logo_33gR\\+:hover{opacity:.7}.favWrapper_5Xc5M{padding:0 12px}.fav_-9UBD{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:16px;height:16px;padding-top:.1em;font-size:9px;line-height:1;border:1px solid #fff;border-radius:50%;-webkit-transition:opacity .23s ease,background-color .23s ease,color .23s ease;transition:opacity .23s ease,background-color .23s ease,color .23s ease}.fav_-9UBD._light{border-color:#222326}.fav_-9UBD._active{background-color:#fff;color:#141924}.fav_-9UBD._active._light{background-color:#222326;color:#fff}.fav_-9UBD:hover{opacity:.8}', ""]), r.locals = {
        wrapper: "wrapper_HNRqC",
        HeaderMobile: "HeaderMobile_IPNi5",
        logoLink: "logoLink_4bzNw",
        logo: "logo_33gR+",
        favWrapper: "favWrapper_5Xc5M",
        fav: "fav_-9UBD"
    }, t.exports = r
}, function (t, e, n) {
    t.exports = n.p + "img/bg.1cc4753.svg"
}, function (t, e, n) {
    t.exports = n.p + "img/qr.662fc20.svg"
}, function (t, e, n) {
    "use strict";
    n(176)
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, ".backdrop[data-v-48c3b72c]{position:fixed;z-index:999;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,.8)}.backdrop[data-v-48c3b72c],.box[data-v-48c3b72c]{max-height:-webkit-fill-available;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.box[data-v-48c3b72c]{--min-indicator-size:300px;--indicator-size:max(min(80vw,80vh),var(--min-indicator-size));width:100%;min-height:100vh;max-height:-moz-available;max-height:fill-available;overflow:hidden;position:relative;height:var(--indicator-size);-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:calc(var(--indicator-size)*0.05)}.outer-container[data-v-48c3b72c]{position:relative;min-width:var(--indicator-size)}.inner-container[data-v-48c3b72c]{position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:0;padding-bottom:100%}.details[data-v-48c3b72c],.inner-container[data-v-48c3b72c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.details[data-v-48c3b72c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;text-align:center;position:absolute;top:20%;height:60%;left:20%;width:60%;padding-top:8%}@media only screen and (min-width:600px){.details[data-v-48c3b72c]{font-size:calc(var(--indicator-size)*0.033)}}.details h2[data-v-48c3b72c]{color:#fff;font-size:1em;font-weight:400}.details p[data-v-48c3b72c]{color:#99a1b0;font-size:.8em}.details .link[data-v-48c3b72c]{min-height:3.5em;font-size:.8em;max-width:16em}.qr[data-v-48c3b72c]{height:35%;display:none}@media only screen and (min-width:600px){.qr[data-v-48c3b72c]{display:block}}.close[data-v-48c3b72c]{width:40px;height:40px;position:absolute;right:1.2em;top:16%}.tg-icon[data-v-48c3b72c]{height:1.5em;margin-left:1em}", ""]), t.exports = r
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, "body{background-color:#141924}body._light{background-color:#dfeffc;color:#222326}body._no-animation *{-webkit-transition:none!important;transition:none!important}.Stellar_jqf3V{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.Stellar_jqf3V._lock{padding-right:15px}.Main_vdvJE{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media screen and (device-aspect-ratio:40/71){.Main_vdvJE{display:block}}.Page_tVGdf{width:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media screen and (device-aspect-ratio:40/71){.Page_tVGdf{display:block}}.footer_s3-CS{padding-left:24.7rem;position:relative;z-index:1;margin-top:8.8rem}@media only screen and (max-width:920px){.footer_s3-CS{padding-left:0;margin-top:30px}}.hidden_3yrHU{display:none}", ""]), r.locals = {
        Stellar: "Stellar_jqf3V",
        Main: "Main_vdvJE",
        Page: "Page_tVGdf",
        footer: "footer_s3-CS",
        hidden: "hidden_3yrHU"
    }, t.exports = r
}, function (t, e, n) {
    "use strict";
    n(177)
}, function (t, e, n) {
    var r = n(14)(!1);
    r.push([t.i, "#Calltouch-callback-container[style]{display:none!important}", ""]), t.exports = r
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "state", (function () {
        return h
    })), n.d(e, "modules", (function () {
        return m
    })), n.d(e, "mutations", (function () {
        return b
    })), n.d(e, "actions", (function () {
        return g
    }));
    var r = n(2), i = (n(20), n(30), n(16), n(29), n(118)), o = n(119), a = n(120), s = n(121), l = n(122), c = n(123),
        p = n(124), u = n(125), f = n(126), d = n(127), h = function () {
            return {loaded: !1, footer: {isHiddenBorder: !1}}
        }, m = {
            global: i.default,
            menu: f.default,
            modal: o.default,
            purchase: a.default,
            project: s.default,
            visual: l.default,
            favorite: c.default,
            documents: p.default,
            contacts: u.default,
            metatags: d.default
        }, b = {
            LOADED: function () {
                this.state.loaded = !0
            }, HIDE_FOOTER_BORDER: function (t, e) {
                this.state.footer.isHiddenBorder = e
            }, SET_ENV: function (t, e) {
                t.env = e
            }
        }, g = {
            nuxtServerInit: function (t, e) {
                return Object(r.a)(regeneratorRuntime.mark((function n() {
                    var r;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return t.state, r = t.dispatch, t.commit, e.req, e.res, n.next = 5, Promise.all([r("global/CHECK_SITE_THEME"), r("project/GET_PROJECT"), r("favorite/GET_FAVORITES"), r("purchase/CHANGE_MORTGAGE_RATE"), r("metatags/load")]);
                            case 5:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))()
            }
        }
}], [[215, 32, 11, 33]]]);