/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[33], {
    117: function (g, I) {
        g.exports = function (g) {
            return null != g && "object" == typeof g
        }
    }, 129: function (g, I, C) {
        "use strict";
        var t = {
            name: "ClientOnly",
            functional: !0,
            props: {placeholder: String, placeholderTag: {type: String, default: "div"}},
            render: function (g, I) {
                var C = I.parent, t = I.slots, A = I.props, e = t(), n = e.default;
                void 0 === n && (n = []);
                var i = e.placeholder;
                return C._isMounted ? n : (C.$once("hook:mounted", (function () {
                    C.$forceUpdate()
                })), A.placeholderTag && (A.placeholder || i) ? g(A.placeholderTag, {class: ["client-only-placeholder"]}, A.placeholder || i) : n.length > 0 ? n.map((function () {
                    return g(!1)
                })) : g(!1))
            }
        };
        g.exports = t
    }, 14: function (g, I, C) {
        "use strict";
        g.exports = function (g) {
            var I = [];
            return I.toString = function () {
                return this.map((function (I) {
                    var C = function (g, I) {
                        var C = g[1] || "", t = g[3];
                        if (!t) return C;
                        if (I && "function" == typeof btoa) {
                            var A = (n = t, i = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i), "/*# ".concat(a, " */")),
                                e = t.sources.map((function (g) {
                                    return "/*# sourceURL=".concat(t.sourceRoot || "").concat(g, " */")
                                }));
                            return [C].concat(e).concat([A]).join("\n")
                        }
                        var n, i, a;
                        return [C].join("\n")
                    }(I, g);
                    return I[2] ? "@media ".concat(I[2], " {").concat(C, "}") : C
                })).join("")
            }, I.i = function (g, C, t) {
                "string" == typeof g && (g = [[null, g, ""]]);
                var A = {};
                if (t) for (var e = 0; e < this.length; e++) {
                    var n = this[e][0];
                    null != n && (A[n] = !0)
                }
                for (var i = 0; i < g.length; i++) {
                    var a = [].concat(g[i]);
                    t && A[a[0]] || (C && (a[2] ? a[2] = "".concat(C, " and ").concat(a[2]) : a[2] = C), I.push(a))
                }
            }, I
        }
    }, 15: function (g, I, C) {
        "use strict";

        function t(g, I) {
            for (var C = [], t = {}, A = 0; A < I.length; A++) {
                var e = I[A], n = e[0], i = {id: g + ":" + A, css: e[1], media: e[2], sourceMap: e[3]};
                t[n] ? t[n].parts.push(i) : C.push(t[n] = {id: n, parts: [i]})
            }
            return C
        }

        C.r(I), C.d(I, "default", (function () {
            return u
        }));
        var A = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !A) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var e = {}, n = A && (document.head || document.getElementsByTagName("head")[0]), i = null, a = 0, s = !1,
            l = function () {
            }, c = null, o = "data-vue-ssr-id",
            r = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

        function u(g, I, C, A) {
            s = C, c = A || {};
            var n = t(g, I);
            return d(n), function (I) {
                for (var C = [], A = 0; A < n.length; A++) {
                    var i = n[A];
                    (a = e[i.id]).refs--, C.push(a)
                }
                I ? d(n = t(g, I)) : n = [];
                for (A = 0; A < C.length; A++) {
                    var a;
                    if (0 === (a = C[A]).refs) {
                        for (var s = 0; s < a.parts.length; s++) a.parts[s]();
                        delete e[a.id]
                    }
                }
            }
        }

        function d(g) {
            for (var I = 0; I < g.length; I++) {
                var C = g[I], t = e[C.id];
                if (t) {
                    t.refs++;
                    for (var A = 0; A < t.parts.length; A++) t.parts[A](C.parts[A]);
                    for (; A < C.parts.length; A++) t.parts.push(p(C.parts[A]));
                    t.parts.length > C.parts.length && (t.parts.length = C.parts.length)
                } else {
                    var n = [];
                    for (A = 0; A < C.parts.length; A++) n.push(p(C.parts[A]));
                    e[C.id] = {id: C.id, refs: 1, parts: n}
                }
            }
        }

        function b() {
            var g = document.createElement("style");
            return g.type = "text/css", n.appendChild(g), g
        }

        function p(g) {
            var I, C, t = document.querySelector("style[" + o + '~="' + g.id + '"]');
            if (t) {
                if (s) return l;
                t.parentNode.removeChild(t)
            }
            if (r) {
                var A = a++;
                t = i || (i = b()), I = h.bind(null, t, A, !1), C = h.bind(null, t, A, !0)
            } else t = b(), I = Z.bind(null, t), C = function () {
                t.parentNode.removeChild(t)
            };
            return I(g), function (t) {
                if (t) {
                    if (t.css === g.css && t.media === g.media && t.sourceMap === g.sourceMap) return;
                    I(g = t)
                } else C()
            }
        }

        var m, B = (m = [], function (g, I) {
            return m[g] = I, m.filter(Boolean).join("\n")
        });

        function h(g, I, C, t) {
            var A = C ? "" : t.css;
            if (g.styleSheet) g.styleSheet.cssText = B(I, A); else {
                var e = document.createTextNode(A), n = g.childNodes;
                n[I] && g.removeChild(n[I]), n.length ? g.insertBefore(e, n[I]) : g.appendChild(e)
            }
        }

        function Z(g, I) {
            var C = I.css, t = I.media, A = I.sourceMap;
            if (t && g.setAttribute("media", t), c.ssrId && g.setAttribute(o, I.id), A && (C += "\n/*# sourceURL=" + A.sources[0] + " */", C += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(A)))) + " */"), g.styleSheet) g.styleSheet.cssText = C; else {
                for (; g.firstChild;) g.removeChild(g.firstChild);
                g.appendChild(document.createTextNode(C))
            }
        }
    }, 187: function (g, I) {
        var C = Object.prototype;
        g.exports = function (g) {
            var I = g && g.constructor;
            return g === ("function" == typeof I && I.prototype || C)
        }
    }, 188: function (g, I, C) {
        var t = C(89), A = C(191);
        g.exports = function (g) {
            if (!A(g)) return !1;
            var I = t(g);
            return "[object Function]" == I || "[object GeneratorFunction]" == I || "[object AsyncFunction]" == I || "[object Proxy]" == I
        }
    }, 189: function (g, I, C) {
        var t = C(43).Symbol;
        g.exports = t
    }, 190: function (g, I, C) {
        (function (I) {
            var C = "object" == typeof I && I && I.Object === Object && I;
            g.exports = C
        }).call(this, C(36))
    }, 191: function (g, I) {
        g.exports = function (g) {
            var I = typeof g;
            return null != g && ("object" == I || "function" == I)
        }
    }, 192: function (g, I) {
        var C = Function.prototype.toString;
        g.exports = function (g) {
            if (null != g) {
                try {
                    return C.call(g)
                } catch (I) {
                }
                try {
                    return g + ""
                } catch (I) {
                }
            }
            return ""
        }
    }, 193: function (g, I) {
        g.exports = function (g) {
            return "number" == typeof g && g > -1 && g % 1 == 0 && g <= 9007199254740991
        }
    }, 195: function (g, I, C) {
        "use strict";
        I.a = function (g, I) {
            return I = I || {}, new Promise((function (C, t) {
                var A = new XMLHttpRequest, e = [], n = [], i = {}, a = function () {
                    return {
                        ok: 2 == (A.status / 100 | 0),
                        statusText: A.statusText,
                        status: A.status,
                        url: A.responseURL,
                        text: function () {
                            return Promise.resolve(A.responseText)
                        },
                        json: function () {
                            return Promise.resolve(A.responseText).then(JSON.parse)
                        },
                        blob: function () {
                            return Promise.resolve(new Blob([A.response]))
                        },
                        clone: a,
                        headers: {
                            keys: function () {
                                return e
                            }, entries: function () {
                                return n
                            }, get: function (g) {
                                return i[g.toLowerCase()]
                            }, has: function (g) {
                                return g.toLowerCase() in i
                            }
                        }
                    }
                };
                for (var s in A.open(I.method || "get", g, !0), A.onload = function () {
                    A.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function (g, I, C) {
                        e.push(I = I.toLowerCase()), n.push([I, C]), i[I] = i[I] ? i[I] + "," + C : C
                    })), C(a())
                }, A.onerror = t, A.withCredentials = "include" == I.credentials, I.headers) A.setRequestHeader(s, I.headers[s]);
                A.send(I.body || null)
            }))
        }
    }, 197: function (g, I, C) {
        "use strict";
        var t = function (g) {
            return function (g) {
                return !!g && "object" == typeof g
            }(g) && !function (g) {
                var I = Object.prototype.toString.call(g);
                return "[object RegExp]" === I || "[object Date]" === I || function (g) {
                    return g.$$typeof === A
                }(g)
            }(g)
        };
        var A = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

        function e(g, I) {
            return !1 !== I.clone && I.isMergeableObject(g) ? l((C = g, Array.isArray(C) ? [] : {}), g, I) : g;
            var C
        }

        function n(g, I, C) {
            return g.concat(I).map((function (g) {
                return e(g, C)
            }))
        }

        function i(g) {
            return Object.keys(g).concat(function (g) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(g).filter((function (I) {
                    return g.propertyIsEnumerable(I)
                })) : []
            }(g))
        }

        function a(g, I) {
            try {
                return I in g
            } catch (C) {
                return !1
            }
        }

        function s(g, I, C) {
            var t = {};
            return C.isMergeableObject(g) && i(g).forEach((function (I) {
                t[I] = e(g[I], C)
            })), i(I).forEach((function (A) {
                (function (g, I) {
                    return a(g, I) && !(Object.hasOwnProperty.call(g, I) && Object.propertyIsEnumerable.call(g, I))
                })(g, A) || (a(g, A) && C.isMergeableObject(I[A]) ? t[A] = function (g, I) {
                    if (!I.customMerge) return l;
                    var C = I.customMerge(g);
                    return "function" == typeof C ? C : l
                }(A, C)(g[A], I[A], C) : t[A] = e(I[A], C))
            })), t
        }

        function l(g, I, C) {
            (C = C || {}).arrayMerge = C.arrayMerge || n, C.isMergeableObject = C.isMergeableObject || t, C.cloneUnlessOtherwiseSpecified = e;
            var A = Array.isArray(I);
            return A === Array.isArray(g) ? A ? C.arrayMerge(g, I, C) : s(g, I, C) : e(I, C)
        }

        l.all = function (g, I) {
            if (!Array.isArray(g)) throw new Error("first argument should be an array");
            return g.reduce((function (g, C) {
                return l(g, C, I)
            }), {})
        };
        var c = l;
        g.exports = c
    }, 198: function (g, I) {
        g.exports = function (g) {
            function I(t) {
                if (C[t]) return C[t].exports;
                var A = C[t] = {i: t, l: !1, exports: {}};
                return g[t].call(A.exports, A, A.exports, I), A.l = !0, A.exports
            }

            var C = {};
            return I.m = g, I.c = C, I.d = function (g, C, t) {
                I.o(g, C) || Object.defineProperty(g, C, {configurable: !1, enumerable: !0, get: t})
            }, I.n = function (g) {
                var C = g && g.__esModule ? function () {
                    return g.default
                } : function () {
                    return g
                };
                return I.d(C, "a", C), C
            }, I.o = function (g, I) {
                return Object.prototype.hasOwnProperty.call(g, I)
            }, I.p = "", I(I.s = 0)
        }([function (g, I, C) {
            "use strict";
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                return typeof g
            } : function (g) {
                return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
            }, A = C(1);
            g.exports = function (I, C) {
                var e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    n = "object" === ("undefined" == typeof document ? "undefined" : t(document)) && "string" == typeof document.cookie,
                    i = "object" === (void 0 === I ? "undefined" : t(I)) && "object" === (void 0 === C ? "undefined" : t(C)) && void 0 !== g,
                    a = !n && !i || n && i, s = function (g) {
                        if (i) {
                            var t = I.headers.cookie || "";
                            return g && (t = (t = C.getHeaders())["set-cookie"] ? t["set-cookie"].map((function (g) {
                                return g.split(";")[0]
                            })).join(";") : ""), t
                        }
                        if (n) return document.cookie || ""
                    }, l = function () {
                        var g = C.getHeader("Set-Cookie");
                        return (g = "string" == typeof g ? [g] : g) || []
                    }, c = function (g) {
                        return C.setHeader("Set-Cookie", g)
                    }, o = function (g, I) {
                        if (!I) return g;
                        try {
                            return JSON.parse(g)
                        } catch (I) {
                            return g
                        }
                    }, r = {
                        parseJSON: e, set: function () {
                            var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                C = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {path: "/"};
                            if (!a) if (I = "object" === (void 0 === I ? "undefined" : t(I)) ? JSON.stringify(I) : I, i) {
                                var e = l();
                                e.push(A.serialize(g, I, C)), c(e)
                            } else document.cookie = A.serialize(g, I, C)
                        }, setAll: function () {
                            var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            a || Array.isArray(g) && g.forEach((function (g) {
                                var I = g.name, C = void 0 === I ? "" : I, t = g.value, A = void 0 === t ? "" : t,
                                    e = g.opts, n = void 0 === e ? {path: "/"} : e;
                                r.set(C, A, n)
                            }))
                        }, get: function () {
                            var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    fromRes: !1,
                                    parseJSON: r.parseJSON
                                };
                            if (a) return "";
                            var C = A.parse(s(I.fromRes)), t = C[g];
                            return o(t, I.parseJSON)
                        }, getAll: function () {
                            var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                fromRes: !1,
                                parseJSON: r.parseJSON
                            };
                            if (a) return {};
                            var I = A.parse(s(g.fromRes));
                            for (var C in I) I[C] = o(I[C], g.parseJSON);
                            return I
                        }, remove: function () {
                            var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {path: "/"};
                            if (!a) {
                                var C = r.get(g);
                                I.expires = new Date(0), C && r.set(g, "", I)
                            }
                        }, removeAll: function () {
                            if (!a) {
                                var g = A.parse(s());
                                for (var I in g) r.remove(I)
                            }
                        }, nodeCookie: A
                    };
                return r
            }
        }, function (g, I, C) {
            "use strict";

            function t(g, I) {
                try {
                    return I(g)
                } catch (I) {
                    return g
                }
            }

            I.parse = function (g, I) {
                if ("string" != typeof g) throw new TypeError("argument str must be a string");
                for (var C = {}, e = I || {}, i = g.split(n), a = e.decode || A, s = 0; s < i.length; s++) {
                    var l = i[s], c = l.indexOf("=");
                    if (!(c < 0)) {
                        var o = l.substr(0, c).trim(), r = l.substr(++c, l.length).trim();
                        '"' == r[0] && (r = r.slice(1, -1)), null == C[o] && (C[o] = t(r, a))
                    }
                }
                return C
            }, I.serialize = function (g, I, C) {
                var t = C || {}, A = t.encode || e;
                if ("function" != typeof A) throw new TypeError("option encode is invalid");
                if (!i.test(g)) throw new TypeError("argument name is invalid");
                var n = A(I);
                if (n && !i.test(n)) throw new TypeError("argument val is invalid");
                var a = g + "=" + n;
                if (null != t.maxAge) {
                    var s = t.maxAge - 0;
                    if (isNaN(s)) throw new Error("maxAge should be a Number");
                    a += "; Max-Age=" + Math.floor(s)
                }
                if (t.domain) {
                    if (!i.test(t.domain)) throw new TypeError("option domain is invalid");
                    a += "; Domain=" + t.domain
                }
                if (t.path) {
                    if (!i.test(t.path)) throw new TypeError("option path is invalid");
                    a += "; Path=" + t.path
                }
                if (t.expires) {
                    if ("function" != typeof t.expires.toUTCString) throw new TypeError("option expires is invalid");
                    a += "; Expires=" + t.expires.toUTCString()
                }
                if (t.httpOnly && (a += "; HttpOnly"), t.secure && (a += "; Secure"), t.sameSite) switch ("string" == typeof t.sameSite ? t.sameSite.toLowerCase() : t.sameSite) {
                    case!0:
                        a += "; SameSite=Strict";
                        break;
                    case"lax":
                        a += "; SameSite=Lax";
                        break;
                    case"strict":
                        a += "; SameSite=Strict";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid")
                }
                return a
            };
            var A = decodeURIComponent, e = encodeURIComponent, n = /; */, i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        }])
    }, 199: function (g, I, C) {
        "use strict";
        var t = C(28);
        C(16), C(48), C(49);

        function A(g) {
            return null !== g && "object" === Object(t.a)(g)
        }

        function e(g, I) {
            var C = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".",
                t = arguments.length > 3 ? arguments[3] : void 0;
            if (!A(I)) return e(g, {}, C, t);
            var n = Object.assign({}, I);
            for (var i in g) if ("__proto__" !== i && "constructor" !== i) {
                var a = g[i];
                null != a && (t && t(n, i, a, C) || (Array.isArray(a) && Array.isArray(n[i]) ? n[i] = n[i].concat(a) : A(a) && A(n[i]) ? n[i] = e(a, n[i], (C ? "".concat(C, ".") : "") + i.toString(), t) : n[i] = a))
            }
            return n
        }

        function n(g) {
            return function () {
                for (var I = arguments.length, C = new Array(I), t = 0; t < I; t++) C[t] = arguments[t];
                return C.reduce((function (I, C) {
                    return e(I, C, "", g)
                }), {})
            }
        }

        var i = n();
        i.fn = n((function (g, I, C, t) {
            if (void 0 !== g[I] && "function" == typeof C) return g[I] = C(g[I]), !0
        })), i.arrayFn = n((function (g, I, C, t) {
            if (Array.isArray(g[I]) && "function" == typeof C) return g[I] = C(g[I]), !0
        })), i.extend = n, I.a = i
    }, 200: function (g, I, C) {
        g.exports = function () {
            "use strict";

            function g(g) {
                return g.constructor && "function" == typeof g.constructor.isBuffer && g.constructor.isBuffer(g)
            }

            function I(g) {
                g = g || {};
                var I = arguments.length, A = 0;
                if (1 === I) return g;
                for (; ++A < I;) {
                    var e = arguments[A];
                    m(g) && (g = e), t(e) && C(g, e)
                }
                return g
            }

            function C(g, C) {
                for (var e in B(g, C), C) if ("__proto__" !== e && A(C, e)) {
                    var n = C[e];
                    t(n) ? ("undefined" === Z(g[e]) && "function" === Z(n) && (g[e] = n), g[e] = I(g[e] || {}, n)) : g[e] = n
                }
                return g
            }

            function t(g) {
                return "object" === Z(g) || "function" === Z(g)
            }

            function A(g, I) {
                return Object.prototype.hasOwnProperty.call(g, I)
            }

            function e(g, I) {
                if (g.length) {
                    var C = g.indexOf(I);
                    return C > -1 ? g.splice(C, 1) : void 0
                }
            }

            function n(g, I) {
                for (var C = !1, t = 0, A = g.length; t < A; t++) if (I(g[t])) {
                    C = !0;
                    break
                }
                return C
            }

            function i(g, I) {
                if ("IMG" === g.tagName && g.getAttribute("data-srcset")) {
                    var C = g.getAttribute("data-srcset"), t = [], A = g.parentNode.offsetWidth * I, e = void 0,
                        n = void 0, i = void 0;
                    (C = C.trim().split(",")).map((function (g) {
                        g = g.trim(), -1 === (e = g.lastIndexOf(" ")) ? (n = g, i = 999998) : (n = g.substr(0, e), i = parseInt(g.substr(e + 1, g.length - e - 2), 10)), t.push([i, n])
                    })), t.sort((function (g, I) {
                        if (g[0] < I[0]) return -1;
                        if (g[0] > I[0]) return 1;
                        if (g[0] === I[0]) {
                            if (-1 !== I[1].indexOf(".webp", I[1].length - 5)) return 1;
                            if (-1 !== g[1].indexOf(".webp", g[1].length - 5)) return -1
                        }
                        return 0
                    }));
                    for (var a = "", s = void 0, l = t.length, c = 0; c < l; c++) if ((s = t[c])[0] >= A) {
                        a = s[1];
                        break
                    }
                    return a
                }
            }

            function a(g, I) {
                for (var C = void 0, t = 0, A = g.length; t < A; t++) if (I(g[t])) {
                    C = g[t];
                    break
                }
                return C
            }

            function s() {
                if (!F) return !1;
                var g = !0, I = document;
                try {
                    var C = I.createElement("object");
                    C.type = "image/webp", C.style.visibility = "hidden", C.innerHTML = "!", I.body.appendChild(C), g = !C.offsetWidth, I.body.removeChild(C)
                } catch (I) {
                    g = !1
                }
                return g
            }

            function l(g, I) {
                var C = null, t = 0;
                return function () {
                    if (!C) {
                        var A = Date.now() - t, e = this, n = arguments, i = function () {
                            t = Date.now(), C = !1, g.apply(e, n)
                        };
                        A >= I ? i() : C = setTimeout(i, I)
                    }
                }
            }

            function c(g) {
                return null !== g && "object" === (void 0 === g ? "undefined" : d(g))
            }

            function o(g) {
                if (!(g instanceof Object)) return [];
                if (Object.keys) return Object.keys(g);
                var I = [];
                for (var C in g) g.hasOwnProperty(C) && I.push(C);
                return I
            }

            function r(g) {
                for (var I = g.length, C = [], t = 0; t < I; t++) C.push(g[t]);
                return C
            }

            function u() {
            }

            var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                    return typeof g
                } : function (g) {
                    return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
                }, b = function (g, I) {
                    if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                }, p = function () {
                    function g(g, I) {
                        for (var C = 0; C < I.length; C++) {
                            var t = I[C];
                            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                        }
                    }

                    return function (I, C, t) {
                        return C && g(I.prototype, C), t && g(I, t), I
                    }
                }(), m = function (g) {
                    return null == g || "function" != typeof g && "object" !== (void 0 === g ? "undefined" : d(g))
                }, B = function (g, I) {
                    if (null == g) throw new TypeError("expected first argument to be an object.");
                    if (void 0 === I || "undefined" == typeof Symbol) return g;
                    if ("function" != typeof Object.getOwnPropertySymbols) return g;
                    for (var C = Object.prototype.propertyIsEnumerable, t = Object(g), A = arguments.length, e = 0; ++e < A;) for (var n = Object(arguments[e]), i = Object.getOwnPropertySymbols(n), a = 0; a < i.length; a++) {
                        var s = i[a];
                        C.call(n, s) && (t[s] = n[s])
                    }
                    return t
                }, h = Object.prototype.toString, Z = function (I) {
                    var C = void 0 === I ? "undefined" : d(I);
                    return "undefined" === C ? "undefined" : null === I ? "null" : !0 === I || !1 === I || I instanceof Boolean ? "boolean" : "string" === C || I instanceof String ? "string" : "number" === C || I instanceof Number ? "number" : "function" === C || I instanceof Function ? void 0 !== I.constructor.name && "Generator" === I.constructor.name.slice(0, 9) ? "generatorfunction" : "function" : void 0 !== Array.isArray && Array.isArray(I) ? "array" : I instanceof RegExp ? "regexp" : I instanceof Date ? "date" : "[object RegExp]" === (C = h.call(I)) ? "regexp" : "[object Date]" === C ? "date" : "[object Arguments]" === C ? "arguments" : "[object Error]" === C ? "error" : "[object Promise]" === C ? "promise" : g(I) ? "buffer" : "[object Set]" === C ? "set" : "[object WeakSet]" === C ? "weakset" : "[object Map]" === C ? "map" : "[object WeakMap]" === C ? "weakmap" : "[object Symbol]" === C ? "symbol" : "[object Map Iterator]" === C ? "mapiterator" : "[object Set Iterator]" === C ? "setiterator" : "[object String Iterator]" === C ? "stringiterator" : "[object Array Iterator]" === C ? "arrayiterator" : "[object Int8Array]" === C ? "int8array" : "[object Uint8Array]" === C ? "uint8array" : "[object Uint8ClampedArray]" === C ? "uint8clampedarray" : "[object Int16Array]" === C ? "int16array" : "[object Uint16Array]" === C ? "uint16array" : "[object Int32Array]" === C ? "int32array" : "[object Uint32Array]" === C ? "uint32array" : "[object Float32Array]" === C ? "float32array" : "[object Float64Array]" === C ? "float64array" : "object"
                }, G = I, F = "undefined" != typeof window, X = F && "IntersectionObserver" in window,
                W = {event: "event", observer: "observer"}, V = function () {
                    function g(g, I) {
                        I = I || {bubbles: !1, cancelable: !1, detail: void 0};
                        var C = document.createEvent("CustomEvent");
                        return C.initCustomEvent(g, I.bubbles, I.cancelable, I.detail), C
                    }

                    if (F) return "function" == typeof window.CustomEvent ? window.CustomEvent : (g.prototype = window.Event.prototype, g)
                }(), Q = function () {
                    var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return F && window.devicePixelRatio || g
                }, y = function () {
                    if (F) {
                        var g = !1;
                        try {
                            var I = Object.defineProperty({}, "passive", {
                                get: function () {
                                    g = !0
                                }
                            });
                            window.addEventListener("test", null, I)
                        } catch (g) {
                        }
                        return g
                    }
                }(), v = {
                    on: function (g, I, C) {
                        var t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        y ? g.addEventListener(I, C, {capture: t, passive: !0}) : g.addEventListener(I, C, t)
                    }, off: function (g, I, C) {
                        var t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        g.removeEventListener(I, C, t)
                    }
                }, R = function (g, I, C) {
                    var t = new Image;
                    t.src = g.src, t.onload = function () {
                        I({naturalHeight: t.naturalHeight, naturalWidth: t.naturalWidth, src: t.src})
                    }, t.onerror = function (g) {
                        C(g)
                    }
                }, f = function (g, I) {
                    return "undefined" != typeof getComputedStyle ? getComputedStyle(g, null).getPropertyValue(I) : g.style[I]
                }, N = function (g) {
                    return f(g, "overflow") + f(g, "overflow-y") + f(g, "overflow-x")
                }, k = function (g) {
                    if (F) {
                        if (!(g instanceof HTMLElement)) return window;
                        for (var I = g; I && I !== document.body && I !== document.documentElement && I.parentNode;) {
                            if (/(scroll|auto)/.test(N(I))) return I;
                            I = I.parentNode
                        }
                        return window
                    }
                }, Y = {}, x = function () {
                    function g(I) {
                        var C = I.el, t = I.src, A = I.error, e = I.loading, n = I.bindType, i = I.$parent, a = I.options,
                            s = I.elRenderer;
                        b(this, g), this.el = C, this.src = t, this.error = A, this.loading = e, this.bindType = n, this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = a, this.rect = null, this.$parent = i, this.elRenderer = s, this.performanceData = {
                            init: Date.now(),
                            loadStart: 0,
                            loadEnd: 0
                        }, this.filter(), this.initState(), this.render("loading", !1)
                    }

                    return p(g, [{
                        key: "initState", value: function () {
                            "dataset" in this.el ? this.el.dataset.src = this.src : this.el.setAttribute("data-src", this.src), this.state = {
                                error: !1,
                                loaded: !1,
                                rendered: !1
                            }
                        }
                    }, {
                        key: "record", value: function (g) {
                            this.performanceData[g] = Date.now()
                        }
                    }, {
                        key: "update", value: function (g) {
                            var I = g.src, C = g.loading, t = g.error, A = this.src;
                            this.src = I, this.loading = C, this.error = t, this.filter(), A !== this.src && (this.attempt = 0, this.initState())
                        }
                    }, {
                        key: "getRect", value: function () {
                            this.rect = this.el.getBoundingClientRect()
                        }
                    }, {
                        key: "checkInView", value: function () {
                            return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0
                        }
                    }, {
                        key: "filter", value: function () {
                            var g = this;
                            o(this.options.filter).map((function (I) {
                                g.options.filter[I](g, g.options)
                            }))
                        }
                    }, {
                        key: "renderLoading", value: function (g) {
                            var I = this;
                            R({src: this.loading}, (function (C) {
                                I.render("loading", !1), g()
                            }), (function () {
                                g(), I.options.silent || console.warn("VueLazyload log: load failed with loading image(" + I.loading + ")")
                            }))
                        }
                    }, {
                        key: "load", value: function () {
                            var g = this, I = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
                            return this.attempt > this.options.attempt - 1 && this.state.error ? (this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times"), void I()) : this.state.loaded || Y[this.src] ? (this.state.loaded = !0, I(), this.render("loaded", !0)) : void this.renderLoading((function () {
                                g.attempt++, g.record("loadStart"), R({src: g.src}, (function (C) {
                                    g.naturalHeight = C.naturalHeight, g.naturalWidth = C.naturalWidth, g.state.loaded = !0, g.state.error = !1, g.record("loadEnd"), g.render("loaded", !1), Y[g.src] = 1, I()
                                }), (function (I) {
                                    !g.options.silent && console.error(I), g.state.error = !0, g.state.loaded = !1, g.render("error", !1)
                                }))
                            }))
                        }
                    }, {
                        key: "render", value: function (g, I) {
                            this.elRenderer(this, g, I)
                        }
                    }, {
                        key: "performance", value: function () {
                            var g = "loading", I = 0;
                            return this.state.loaded && (g = "loaded", I = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (g = "error"), {
                                src: this.src,
                                state: g,
                                time: I
                            }
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.el = null, this.src = null, this.error = null, this.loading = null, this.bindType = null, this.attempt = 0
                        }
                    }]), g
                }(), w = "https://bor-stroy.com/upload/medialibrary/324/3245ec408695922175c378dcdf9abf56.jpg",
                U = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
                H = {rootMargin: "0px", threshold: 0}, S = function (g) {
                    return function () {
                        function I(g) {
                            var C = g.preLoad, t = g.error, A = g.throttleWait, e = g.preLoadTop, n = g.dispatchEvent,
                                i = g.loading, a = g.attempt, c = g.silent, o = void 0 === c || c, r = g.scale,
                                u = g.listenEvents, d = (g.hasbind, g.filter), p = g.adapter, m = g.observer,
                                B = g.observerOptions;
                            b(this, I), this.version = "1.2.6", this.mode = W.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = {
                                silent: o,
                                dispatchEvent: !!n,
                                throttleWait: A || 200,
                                preLoad: C || 1.3,
                                preLoadTop: e || 0,
                                error: t || w,
                                loading: i || w,
                                attempt: a || 3,
                                scale: r || Q(r),
                                ListenEvents: u || U,
                                hasbind: !1,
                                supportWebp: s(),
                                filter: d || {},
                                adapter: p || {},
                                observer: !!m,
                                observerOptions: B || H
                            }, this._initEvent(), this.lazyLoadHandler = l(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? W.observer : W.event)
                        }

                        return p(I, [{
                            key: "config", value: function () {
                                var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                G(this.options, g)
                            }
                        }, {
                            key: "performance", value: function () {
                                var g = [];
                                return this.ListenerQueue.map((function (I) {
                                    g.push(I.performance())
                                })), g
                            }
                        }, {
                            key: "addLazyBox", value: function (g) {
                                this.ListenerQueue.push(g), F && (this._addListenerTarget(window), this._observer && this._observer.observe(g.el), g.$el && g.$el.parentNode && this._addListenerTarget(g.$el.parentNode))
                            }
                        }, {
                            key: "add", value: function (I, C, t) {
                                var A = this;
                                if (n(this.ListenerQueue, (function (g) {
                                    return g.el === I
                                }))) return this.update(I, C), g.nextTick(this.lazyLoadHandler);
                                var e = this._valueFormatter(C.value), a = e.src, s = e.loading, l = e.error;
                                g.nextTick((function () {
                                    a = i(I, A.options.scale) || a, A._observer && A._observer.observe(I);
                                    var e = Object.keys(C.modifiers)[0], n = void 0;
                                    e && (n = (n = t.context.$refs[e]) ? n.$el || n : document.getElementById(e)), n || (n = k(I));
                                    var c = new x({
                                        bindType: C.arg,
                                        $parent: n,
                                        el: I,
                                        loading: s,
                                        error: l,
                                        src: a,
                                        elRenderer: A._elRenderer.bind(A),
                                        options: A.options
                                    });
                                    A.ListenerQueue.push(c), F && (A._addListenerTarget(window), A._addListenerTarget(n)), A.lazyLoadHandler(), g.nextTick((function () {
                                        return A.lazyLoadHandler()
                                    }))
                                }))
                            }
                        }, {
                            key: "update", value: function (I, C) {
                                var t = this, A = this._valueFormatter(C.value), e = A.src, n = A.loading, s = A.error;
                                e = i(I, this.options.scale) || e;
                                var l = a(this.ListenerQueue, (function (g) {
                                    return g.el === I
                                }));
                                l && l.update({
                                    src: e,
                                    loading: n,
                                    error: s
                                }), this._observer && (this._observer.unobserve(I), this._observer.observe(I)), this.lazyLoadHandler(), g.nextTick((function () {
                                    return t.lazyLoadHandler()
                                }))
                            }
                        }, {
                            key: "remove", value: function (g) {
                                if (g) {
                                    this._observer && this._observer.unobserve(g);
                                    var I = a(this.ListenerQueue, (function (I) {
                                        return I.el === g
                                    }));
                                    I && (this._removeListenerTarget(I.$parent), this._removeListenerTarget(window), e(this.ListenerQueue, I) && I.destroy())
                                }
                            }
                        }, {
                            key: "removeComponent", value: function (g) {
                                g && (e(this.ListenerQueue, g), this._observer && this._observer.unobserve(g.el), g.$parent && g.$el.parentNode && this._removeListenerTarget(g.$el.parentNode), this._removeListenerTarget(window))
                            }
                        }, {
                            key: "setMode", value: function (g) {
                                var I = this;
                                X || g !== W.observer || (g = W.event), this.mode = g, g === W.event ? (this._observer && (this.ListenerQueue.forEach((function (g) {
                                    I._observer.unobserve(g.el)
                                })), this._observer = null), this.TargetQueue.forEach((function (g) {
                                    I._initListen(g.el, !0)
                                }))) : (this.TargetQueue.forEach((function (g) {
                                    I._initListen(g.el, !1)
                                })), this._initIntersectionObserver())
                            }
                        }, {
                            key: "_addListenerTarget", value: function (g) {
                                if (g) {
                                    var I = a(this.TargetQueue, (function (I) {
                                        return I.el === g
                                    }));
                                    return I ? I.childrenCount++ : (I = {
                                        el: g,
                                        id: ++this.TargetIndex,
                                        childrenCount: 1,
                                        listened: !0
                                    }, this.mode === W.event && this._initListen(I.el, !0), this.TargetQueue.push(I)), this.TargetIndex
                                }
                            }
                        }, {
                            key: "_removeListenerTarget", value: function (g) {
                                var I = this;
                                this.TargetQueue.forEach((function (C, t) {
                                    C.el === g && (--C.childrenCount || (I._initListen(C.el, !1), I.TargetQueue.splice(t, 1), C = null))
                                }))
                            }
                        }, {
                            key: "_initListen", value: function (g, I) {
                                var C = this;
                                this.options.ListenEvents.forEach((function (t) {
                                    return v[I ? "on" : "off"](g, t, C.lazyLoadHandler)
                                }))
                            }
                        }, {
                            key: "_initEvent", value: function () {
                                var g = this;
                                this.Event = {listeners: {loading: [], loaded: [], error: []}}, this.$on = function (I, C) {
                                    g.Event.listeners[I] || (g.Event.listeners[I] = []), g.Event.listeners[I].push(C)
                                }, this.$once = function (I, C) {
                                    function t() {
                                        A.$off(I, t), C.apply(A, arguments)
                                    }

                                    var A = g;
                                    g.$on(I, t)
                                }, this.$off = function (I, C) {
                                    if (C) e(g.Event.listeners[I], C); else {
                                        if (!g.Event.listeners[I]) return;
                                        g.Event.listeners[I].length = 0
                                    }
                                }, this.$emit = function (I, C, t) {
                                    g.Event.listeners[I] && g.Event.listeners[I].forEach((function (g) {
                                        return g(C, t)
                                    }))
                                }
                            }
                        }, {
                            key: "_lazyLoadHandler", value: function () {
                                var g = this, I = [];
                                this.ListenerQueue.forEach((function (g, C) {
                                    if (!g.state.error && g.state.loaded) return I.push(g);
                                    g.checkInView() && g.load()
                                })), I.forEach((function (I) {
                                    return e(g.ListenerQueue, I)
                                }))
                            }
                        }, {
                            key: "_initIntersectionObserver", value: function () {
                                var g = this;
                                X && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach((function (I) {
                                    g._observer.observe(I.el)
                                })))
                            }
                        }, {
                            key: "_observerHandler", value: function (g, I) {
                                var C = this;
                                g.forEach((function (g) {
                                    g.isIntersecting && C.ListenerQueue.forEach((function (I) {
                                        if (I.el === g.target) {
                                            if (I.state.loaded) return C._observer.unobserve(I.el);
                                            I.load()
                                        }
                                    }))
                                }))
                            }
                        }, {
                            key: "_elRenderer", value: function (g, I, C) {
                                if (g.el) {
                                    var t = g.el, A = g.bindType, e = void 0;
                                    switch (I) {
                                        case"loading":
                                            e = g.loading;
                                            break;
                                        case"error":
                                            e = g.error;
                                            break;
                                        default:
                                            e = g.src
                                    }
                                    if (A ? t.style[A] = 'url("' + e + '")' : t.getAttribute("src") !== e && t.setAttribute("src", e), t.setAttribute("lazy", I), this.$emit(I, g, C), this.options.adapter[I] && this.options.adapter[I](g, this.options), this.options.dispatchEvent) {
                                        var n = new V(I, {detail: g});
                                        t.dispatchEvent(n)
                                    }
                                }
                            }
                        }, {
                            key: "_valueFormatter", value: function (g) {
                                var I = g, C = this.options.loading, t = this.options.error;
                                return c(g) && (g.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + g), I = g.src, C = g.loading || this.options.loading, t = g.error || this.options.error), {
                                    src: I,
                                    loading: C,
                                    error: t
                                }
                            }
                        }]), I
                    }()
                }, L = function (g) {
                    return {
                        props: {tag: {type: String, default: "div"}}, render: function (g) {
                            return !1 === this.show ? g(this.tag) : g(this.tag, null, this.$slots.default)
                        }, data: function () {
                            return {el: null, state: {loaded: !1}, rect: {}, show: !1}
                        }, mounted: function () {
                            this.el = this.$el, g.addLazyBox(this), g.lazyLoadHandler()
                        }, beforeDestroy: function () {
                            g.removeComponent(this)
                        }, methods: {
                            getRect: function () {
                                this.rect = this.$el.getBoundingClientRect()
                            }, checkInView: function () {
                                return this.getRect(), F && this.rect.top < window.innerHeight * g.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * g.options.preLoad && this.rect.right > 0
                            }, load: function () {
                                this.show = !0, this.state.loaded = !0, this.$emit("show", this)
                            }
                        }
                    }
                }, T = function () {
                    function g(I) {
                        var C = I.lazy;
                        b(this, g), this.lazy = C, C.lazyContainerMananger = this, this._queue = []
                    }

                    return p(g, [{
                        key: "bind", value: function (g, I, C) {
                            var t = new z({el: g, binding: I, vnode: C, lazy: this.lazy});
                            this._queue.push(t)
                        }
                    }, {
                        key: "update", value: function (g, I, C) {
                            var t = a(this._queue, (function (I) {
                                return I.el === g
                            }));
                            t && t.update({el: g, binding: I, vnode: C})
                        }
                    }, {
                        key: "unbind", value: function (g, I, C) {
                            var t = a(this._queue, (function (I) {
                                return I.el === g
                            }));
                            t && (t.clear(), e(this._queue, t))
                        }
                    }]), g
                }(), D = {selector: "img"}, z = function () {
                    function g(I) {
                        var C = I.el, t = I.binding, A = I.vnode, e = I.lazy;
                        b(this, g), this.el = null, this.vnode = A, this.binding = t, this.options = {}, this.lazy = e, this._queue = [], this.update({
                            el: C,
                            binding: t
                        })
                    }

                    return p(g, [{
                        key: "update", value: function (g) {
                            var I = this, C = g.el, t = g.binding;
                            this.el = C, this.options = G({}, D, t.value), this.getImgs().forEach((function (g) {
                                I.lazy.add(g, G({}, I.binding, {
                                    value: {
                                        src: "dataset" in g ? g.dataset.src : g.getAttribute("data-src"),
                                        error: "dataset" in g ? g.dataset.error : g.getAttribute("data-error"),
                                        loading: "dataset" in g ? g.dataset.loading : g.getAttribute("data-loading")
                                    }
                                }), I.vnode)
                            }))
                        }
                    }, {
                        key: "getImgs", value: function () {
                            return r(this.el.querySelectorAll(this.options.selector))
                        }
                    }, {
                        key: "clear", value: function () {
                            var g = this;
                            this.getImgs().forEach((function (I) {
                                return g.lazy.remove(I)
                            })), this.vnode = null, this.binding = null, this.lazy = null
                        }
                    }]), g
                }(), E = function (g) {
                    return {
                        props: {src: [String, Object], tag: {type: String, default: "img"}}, render: function (g) {
                            return g(this.tag, {attrs: {src: this.renderSrc}}, this.$slots.default)
                        }, data: function () {
                            return {
                                el: null,
                                options: {src: "", error: "", loading: "", attempt: g.options.attempt},
                                state: {loaded: !1, error: !1, attempt: 0},
                                rect: {},
                                renderSrc: ""
                            }
                        }, watch: {
                            src: function () {
                                this.init(), g.addLazyBox(this), g.lazyLoadHandler()
                            }
                        }, created: function () {
                            this.init(), this.renderSrc = this.options.loading
                        }, mounted: function () {
                            this.el = this.$el, g.addLazyBox(this), g.lazyLoadHandler()
                        }, beforeDestroy: function () {
                            g.removeComponent(this)
                        }, methods: {
                            init: function () {
                                var I = g._valueFormatter(this.src), C = I.src, t = I.loading, A = I.error;
                                this.state.loaded = !1, this.options.src = C, this.options.error = A, this.options.loading = t, this.renderSrc = this.options.loading
                            }, getRect: function () {
                                this.rect = this.$el.getBoundingClientRect()
                            }, checkInView: function () {
                                return this.getRect(), F && this.rect.top < window.innerHeight * g.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * g.options.preLoad && this.rect.right > 0
                            }, load: function () {
                                var I = this, C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
                                if (this.state.attempt > this.options.attempt - 1 && this.state.error) return g.options.silent || console.log("VueLazyload log: " + this.options.src + " tried too more than " + this.options.attempt + " times"), void C();
                                var t = this.options.src;
                                R({src: t}, (function (g) {
                                    var C = g.src;
                                    I.renderSrc = C, I.state.loaded = !0
                                }), (function (g) {
                                    I.state.attempt++, I.renderSrc = I.options.error, I.state.error = !0
                                }))
                            }
                        }
                    }
                };
            return {
                install: function (g) {
                    var I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, C = new (S(g))(I),
                        t = new T({lazy: C}), A = "2" === g.version.split(".")[0];
                    g.prototype.$Lazyload = C, I.lazyComponent && g.component("lazy-component", L(C)), I.lazyImage && g.component("lazy-image", E(C)), A ? (g.directive("lazy", {
                        bind: C.add.bind(C),
                        update: C.update.bind(C),
                        componentUpdated: C.lazyLoadHandler.bind(C),
                        unbind: C.remove.bind(C)
                    }), g.directive("lazy-container", {
                        bind: t.bind.bind(t),
                        update: t.update.bind(t),
                        unbind: t.unbind.bind(t)
                    })) : (g.directive("lazy", {
                        bind: C.lazyLoadHandler.bind(C), update: function (g, I) {
                            G(this.vm.$refs, this.vm.$els), C.add(this.el, {
                                modifiers: this.modifiers || {},
                                arg: this.arg,
                                value: g,
                                oldValue: I
                            }, {context: this.vm})
                        }, unbind: function () {
                            C.remove(this.el)
                        }
                    }), g.directive("lazy-container", {
                        update: function (g, I) {
                            t.update(this.el, {
                                modifiers: this.modifiers || {},
                                arg: this.arg,
                                value: g,
                                oldValue: I
                            }, {context: this.vm})
                        }, unbind: function () {
                            t.unbind(this.el)
                        }
                    }))
                }
            }
        }()
    }, 201: function (g, I, C) {
        var t;
        "undefined" != typeof self && self, g.exports = (t = C(1), function (g) {
            var I = {};

            function C(t) {
                if (I[t]) return I[t].exports;
                var A = I[t] = {i: t, l: !1, exports: {}};
                return g[t].call(A.exports, A, A.exports, C), A.l = !0, A.exports
            }

            return C.m = g, C.c = I, C.d = function (g, I, t) {
                C.o(g, I) || Object.defineProperty(g, I, {enumerable: !0, get: t})
            }, C.r = function (g) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(g, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(g, "__esModule", {value: !0})
            }, C.t = function (g, I) {
                if (1 & I && (g = C(g)), 8 & I) return g;
                if (4 & I && "object" == typeof g && g && g.__esModule) return g;
                var t = Object.create(null);
                if (C.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: g
                }), 2 & I && "string" != typeof g) for (var A in g) C.d(t, A, function (I) {
                    return g[I]
                }.bind(null, A));
                return t
            }, C.n = function (g) {
                var I = g && g.__esModule ? function () {
                    return g.default
                } : function () {
                    return g
                };
                return C.d(I, "a", I), I
            }, C.o = function (g, I) {
                return Object.prototype.hasOwnProperty.call(g, I)
            }, C.p = "", C(C.s = "fb15")
        }({
            2350: function (g, I) {
                function C(g, I) {
                    var C = g[1] || "", A = g[3];
                    if (!A) return C;
                    if (I && "function" == typeof btoa) {
                        var e = t(A), n = A.sources.map((function (g) {
                            return "/*# sourceURL=" + A.sourceRoot + g + " */"
                        }));
                        return [C].concat(n).concat([e]).join("\n")
                    }
                    return [C].join("\n")
                }

                function t(g) {
                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(g)))) + " */"
                }

                g.exports = function (g) {
                    var I = [];
                    return I.toString = function () {
                        return this.map((function (I) {
                            var t = C(I, g);
                            return I[2] ? "@media " + I[2] + "{" + t + "}" : t
                        })).join("")
                    }, I.i = function (g, C) {
                        "string" == typeof g && (g = [[null, g, ""]]);
                        for (var t = {}, A = 0; A < this.length; A++) {
                            var e = this[A][0];
                            "number" == typeof e && (t[e] = !0)
                        }
                        for (A = 0; A < g.length; A++) {
                            var n = g[A];
                            "number" == typeof n[0] && t[n[0]] || (C && !n[2] ? n[2] = C : C && (n[2] = "(" + n[2] + ") and (" + C + ")"), I.push(n))
                        }
                    }, I
                }
            }, "499e": function (g, I, C) {
                "use strict";

                function t(g, I) {
                    for (var C = [], t = {}, A = 0; A < I.length; A++) {
                        var e = I[A], n = e[0], i = {id: g + ":" + A, css: e[1], media: e[2], sourceMap: e[3]};
                        t[n] ? t[n].parts.push(i) : C.push(t[n] = {id: n, parts: [i]})
                    }
                    return C
                }

                C.r(I), C.d(I, "default", (function () {
                    return u
                }));
                var A = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !A) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var e = {}, n = A && (document.head || document.getElementsByTagName("head")[0]), i = null, a = 0,
                    s = !1, l = function () {
                    }, c = null, o = "data-vue-ssr-id",
                    r = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function u(g, I, C, A) {
                    s = C, c = A || {};
                    var n = t(g, I);
                    return d(n), function (I) {
                        for (var C = [], A = 0; A < n.length; A++) {
                            var i = n[A], a = e[i.id];
                            a.refs--, C.push(a)
                        }
                        for (I ? d(n = t(g, I)) : n = [], A = 0; A < C.length; A++) if (0 === (a = C[A]).refs) {
                            for (var s = 0; s < a.parts.length; s++) a.parts[s]();
                            delete e[a.id]
                        }
                    }
                }

                function d(g) {
                    for (var I = 0; I < g.length; I++) {
                        var C = g[I], t = e[C.id];
                        if (t) {
                            t.refs++;
                            for (var A = 0; A < t.parts.length; A++) t.parts[A](C.parts[A]);
                            for (; A < C.parts.length; A++) t.parts.push(p(C.parts[A]));
                            t.parts.length > C.parts.length && (t.parts.length = C.parts.length)
                        } else {
                            var n = [];
                            for (A = 0; A < C.parts.length; A++) n.push(p(C.parts[A]));
                            e[C.id] = {id: C.id, refs: 1, parts: n}
                        }
                    }
                }

                function b() {
                    var g = document.createElement("style");
                    return g.type = "text/css", n.appendChild(g), g
                }

                function p(g) {
                    var I, C, t = document.querySelector("style[" + o + '~="' + g.id + '"]');
                    if (t) {
                        if (s) return l;
                        t.parentNode.removeChild(t)
                    }
                    if (r) {
                        var A = a++;
                        t = i || (i = b()), I = B.bind(null, t, A, !1), C = B.bind(null, t, A, !0)
                    } else t = b(), I = h.bind(null, t), C = function () {
                        t.parentNode.removeChild(t)
                    };
                    return I(g), function (t) {
                        if (t) {
                            if (t.css === g.css && t.media === g.media && t.sourceMap === g.sourceMap) return;
                            I(g = t)
                        } else C()
                    }
                }

                var m = function () {
                    var g = [];
                    return function (I, C) {
                        return g[I] = C, g.filter(Boolean).join("\n")
                    }
                }();

                function B(g, I, C, t) {
                    var A = C ? "" : t.css;
                    if (g.styleSheet) g.styleSheet.cssText = m(I, A); else {
                        var e = document.createTextNode(A), n = g.childNodes;
                        n[I] && g.removeChild(n[I]), n.length ? g.insertBefore(e, n[I]) : g.appendChild(e)
                    }
                }

                function h(g, I) {
                    var C = I.css, t = I.media, A = I.sourceMap;
                    if (t && g.setAttribute("media", t), c.ssrId && g.setAttribute(o, I.id), A && (C += "\n/*# sourceURL=" + A.sources[0] + " */", C += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(A)))) + " */"), g.styleSheet) g.styleSheet.cssText = C; else {
                        for (; g.firstChild;) g.removeChild(g.firstChild);
                        g.appendChild(document.createTextNode(C))
                    }
                }
            }, "4abb": function (g, I, C) {
                var t = C("df80");
                "string" == typeof t && (t = [[g.i, t, ""]]), t.locals && (g.exports = t.locals), (0, C("499e").default)("3e7284f8", t, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            }, "4ed8": function (g, I, C) {
                var t = C("ae61");
                "string" == typeof t && (t = [[g.i, t, ""]]), t.locals && (g.exports = t.locals), (0, C("499e").default)("57c2b2f0", t, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            }, "556c": function (g, I, C) {
                var t = C("d5ac");
                "string" == typeof t && (t = [[g.i, t, ""]]), t.locals && (g.exports = t.locals), (0, C("499e").default)("f3ffc7f8", t, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            }, "65d9": function (g, I, C) {
                "use strict";

                function t(g) {
                    return g && "object" == typeof g && "default" in g ? g.default : g
                }

                Object.defineProperty(I, "__esModule", {value: !0});
                var A = t(C("8bbf")),
                    e = "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;

                function n(g, I) {
                    i(g, I), Object.getOwnPropertyNames(I.prototype).forEach((function (C) {
                        i(g.prototype, I.prototype, C)
                    })), Object.getOwnPropertyNames(I).forEach((function (C) {
                        i(g, I, C)
                    }))
                }

                function i(g, I, C) {
                    (C ? Reflect.getOwnMetadataKeys(I, C) : Reflect.getOwnMetadataKeys(I)).forEach((function (t) {
                        var A = C ? Reflect.getOwnMetadata(t, I, C) : Reflect.getOwnMetadata(t, I);
                        C ? Reflect.defineMetadata(t, A, g, C) : Reflect.defineMetadata(t, A, g)
                    }))
                }

                var a = {__proto__: []} instanceof Array;

                function s(g) {
                    return function (I, C, t) {
                        var A = "function" == typeof I ? I : I.constructor;
                        A.__decorators__ || (A.__decorators__ = []), "number" != typeof t && (t = void 0), A.__decorators__.push((function (I) {
                            return g(I, C, t)
                        }))
                    }
                }

                function l() {
                    for (var g = [], I = 0; I < arguments.length; I++) g[I] = arguments[I];
                    return A.extend({mixins: g})
                }

                function c(g) {
                    var I = typeof g;
                    return null == g || "object" !== I && "function" !== I
                }

                function o(g, I) {
                    var C = I.prototype._init;
                    I.prototype._init = function () {
                        var I = this, C = Object.getOwnPropertyNames(g);
                        if (g.$options.props) for (var t in g.$options.props) g.hasOwnProperty(t) || C.push(t);
                        C.forEach((function (C) {
                            "_" !== C.charAt(0) && Object.defineProperty(I, C, {
                                get: function () {
                                    return g[C]
                                }, set: function (I) {
                                    g[C] = I
                                }, configurable: !0
                            })
                        }))
                    };
                    var t = new I;
                    I.prototype._init = C;
                    var A = {};
                    return Object.keys(t).forEach((function (g) {
                        void 0 !== t[g] && (A[g] = t[g])
                    })), A
                }

                var r = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

                function u(g, I) {
                    void 0 === I && (I = {}), I.name = I.name || g._componentTag || g.name;
                    var C = g.prototype;
                    Object.getOwnPropertyNames(C).forEach((function (g) {
                        if ("constructor" !== g) if (r.indexOf(g) > -1) I[g] = C[g]; else {
                            var t = Object.getOwnPropertyDescriptor(C, g);
                            void 0 !== t.value ? "function" == typeof t.value ? (I.methods || (I.methods = {}))[g] = t.value : (I.mixins || (I.mixins = [])).push({
                                data: function () {
                                    var I;
                                    return (I = {})[g] = t.value, I
                                }
                            }) : (t.get || t.set) && ((I.computed || (I.computed = {}))[g] = {get: t.get, set: t.set})
                        }
                    })), (I.mixins || (I.mixins = [])).push({
                        data: function () {
                            return o(this, g)
                        }
                    });
                    var t = g.__decorators__;
                    t && (t.forEach((function (g) {
                        return g(I)
                    })), delete g.__decorators__);
                    var i = Object.getPrototypeOf(g.prototype), a = i instanceof A ? i.constructor : A, s = a.extend(I);
                    return d(s, g, a), e && n(s, g), s
                }

                function d(g, I, C) {
                    Object.getOwnPropertyNames(I).forEach((function (t) {
                        if ("prototype" !== t) {
                            var A = Object.getOwnPropertyDescriptor(g, t);
                            if (!A || A.configurable) {
                                var e = Object.getOwnPropertyDescriptor(I, t);
                                if (!a) {
                                    if ("cid" === t) return;
                                    var n = Object.getOwnPropertyDescriptor(C, t);
                                    if (!c(e.value) && n && n.value === e.value) return
                                }
                                Object.defineProperty(g, t, e)
                            }
                        }
                    }))
                }

                function b(g) {
                    return "function" == typeof g ? u(g) : function (I) {
                        return u(I, g)
                    }
                }

                b.registerHooks = function (g) {
                    r.push.apply(r, g)
                }, I.default = b, I.createDecorator = s, I.mixins = l
            }, "8bbf": function (g, I) {
                g.exports = t
            }, ae61: function (g, I, C) {
                (g.exports = C("2350")(!1)).push([g.i, ".vue-slider-dot{position:absolute;will-change:transform;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""])
            }, d5ac: function (g, I, C) {
                (g.exports = C("2350")(!1)).push([g.i, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""])
            }, df80: function (g, I, C) {
                (g.exports = C("2350")(!1)).push([g.i, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-ms-touch-action:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-disabled{pointer-events:none}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}.vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important}", ""])
            }, fb15: function (g, I, C) {
                "use strict";
                var t;

                function A(g, I, C, t) {
                    var A, e = arguments.length,
                        n = e < 3 ? I : null === t ? t = Object.getOwnPropertyDescriptor(I, C) : t;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(g, I, C, t); else for (var i = g.length - 1; i >= 0; i--) (A = g[i]) && (n = (e < 3 ? A(n) : e > 3 ? A(I, C, n) : A(I, C)) || n);
                    return e > 3 && n && Object.defineProperty(I, C, n), n
                }

                C.r(I), "undefined" != typeof window && (t = window.document.currentScript) && (t = t.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/)) && (C.p = t[1]);
                var e = C("8bbf"), n = C.n(e), i = C("65d9"), a = C.n(i);

                function s(g, I) {
                    return void 0 === I && (I = {}), Object(i.createDecorator)((function (C, t) {
                        (C.props || (C.props = {}))[t] = I, C.model = {prop: t, event: g || t}
                    }))
                }

                function l(g) {
                    return void 0 === g && (g = {}), Object(i.createDecorator)((function (I, C) {
                        (I.props || (I.props = {}))[C] = g
                    }))
                }

                function c(g, I) {
                    void 0 === I && (I = {});
                    var C = I.deep, t = void 0 !== C && C, A = I.immediate, e = void 0 !== A && A;
                    return Object(i.createDecorator)((function (I, C) {
                        "object" != typeof I.watch && (I.watch = Object.create(null));
                        var A = I.watch;
                        "object" != typeof A[g] || Array.isArray(A[g]) ? void 0 === A[g] && (A[g] = []) : A[g] = [A[g]], A[g].push({
                            handler: C,
                            deep: t,
                            immediate: e
                        })
                    }))
                }

                function o(g) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                        return typeof g
                    } : function (g) {
                        return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
                    }, o(g)
                }

                function r(g, I) {
                    if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                }

                function u(g, I) {
                    for (var C = 0; C < I.length; C++) {
                        var t = I[C];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                    }
                }

                function d(g, I, C) {
                    return I && u(g.prototype, I), C && u(g, C), g
                }

                function b(g, I) {
                    return !I || "object" !== o(I) && "function" != typeof I ? p(g) : I
                }

                function p(g) {
                    if (void 0 === g) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return g
                }

                function m(g) {
                    return m = Object.setPrototypeOf ? Object.getPrototypeOf : function (g) {
                        return g.__proto__ || Object.getPrototypeOf(g)
                    }, m(g)
                }

                function B(g, I) {
                    if ("function" != typeof I && null !== I) throw new TypeError("Super expression must either be null or a function");
                    g.prototype = Object.create(I && I.prototype, {
                        constructor: {
                            value: g,
                            writable: !0,
                            configurable: !0
                        }
                    }), I && h(g, I)
                }

                function h(g, I) {
                    return h = Object.setPrototypeOf || function (g, I) {
                        return g.__proto__ = I, g
                    }, h(g, I)
                }

                C("4ed8");
                var Z = function (g) {
                    function I() {
                        return r(this, I), b(this, m(I).apply(this, arguments))
                    }

                    return B(I, g), d(I, [{
                        key: "dragStart", value: function (g) {
                            if (this.disabled) return !1;
                            this.$emit("drag-start")
                        }
                    }, {
                        key: "render", value: function () {
                            var g = arguments[0];
                            return g("div", {
                                ref: "dot",
                                class: this.dotClasses,
                                on: {mousedown: this.dragStart, touchstart: this.dragStart}
                            }, [this.$slots.dot || g("div", {
                                class: this.handleClasses,
                                style: this.dotStyle
                            }), "none" !== this.tooltip ? g("div", {class: this.tooltipClasses}, [this.$slots.tooltip || g("div", {
                                class: this.tooltipInnerClasses,
                                style: this.tooltipStyle
                            }, [g("span", {class: "vue-slider-dot-tooltip-text"}, [this.tooltipValue])])]) : null])
                        }
                    }, {
                        key: "dotClasses", get: function () {
                            return ["vue-slider-dot", {
                                "vue-slider-dot-disabled": this.disabled,
                                "vue-slider-dot-focus": this.focus
                            }]
                        }
                    }, {
                        key: "handleClasses", get: function () {
                            return ["vue-slider-dot-handle", {
                                "vue-slider-dot-handle-disabled": this.disabled,
                                "vue-slider-dot-handle-focus": this.focus
                            }]
                        }
                    }, {
                        key: "tooltipClasses", get: function () {
                            return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], {"vue-slider-dot-tooltip-show": this.showTooltip}]
                        }
                    }, {
                        key: "tooltipInnerClasses", get: function () {
                            return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], {
                                "vue-slider-dot-tooltip-inner-disabled": this.disabled,
                                "vue-slider-dot-tooltip-inner-focus": this.focus
                            }]
                        }
                    }, {
                        key: "showTooltip", get: function () {
                            switch (this.tooltip) {
                                case"always":
                                    return !0;
                                case"none":
                                default:
                                    return !1;
                                case"focus":
                                    return !!this.focus
                            }
                        }
                    }, {
                        key: "tooltipValue", get: function () {
                            return this.tooltipFormatter ? "string" == typeof this.tooltipFormatter ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value
                        }
                    }]), I
                }(n.a);
                A([l({default: 0})], Z.prototype, "value", void 0), A([l()], Z.prototype, "tooltip", void 0), A([l()], Z.prototype, "dotStyle", void 0), A([l()], Z.prototype, "tooltipStyle", void 0), A([l({
                    type: String,
                    validator: function (g) {
                        return ["top", "right", "bottom", "left"].indexOf(g) > -1
                    },
                    required: !0
                })], Z.prototype, "tooltipPlacement", void 0), A([l({type: [String, Function]})], Z.prototype, "tooltipFormatter", void 0), A([l({
                    type: Boolean,
                    default: !1
                })], Z.prototype, "focus", void 0), A([l({default: !1})], Z.prototype, "disabled", void 0);
                var G = Z = A([a.a], Z);

                function F(g) {
                    return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                        return typeof g
                    } : function (g) {
                        return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
                    }, F(g)
                }

                function X(g, I) {
                    if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                }

                function W(g, I) {
                    for (var C = 0; C < I.length; C++) {
                        var t = I[C];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                    }
                }

                function V(g, I, C) {
                    return I && W(g.prototype, I), C && W(g, C), g
                }

                function Q(g, I) {
                    return !I || "object" !== F(I) && "function" != typeof I ? y(g) : I
                }

                function y(g) {
                    if (void 0 === g) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return g
                }

                function v(g) {
                    return v = Object.setPrototypeOf ? Object.getPrototypeOf : function (g) {
                        return g.__proto__ || Object.getPrototypeOf(g)
                    }, v(g)
                }

                function R(g, I) {
                    if ("function" != typeof I && null !== I) throw new TypeError("Super expression must either be null or a function");
                    g.prototype = Object.create(I && I.prototype, {
                        constructor: {
                            value: g,
                            writable: !0,
                            configurable: !0
                        }
                    }), I && f(g, I)
                }

                function f(g, I) {
                    return f = Object.setPrototypeOf || function (g, I) {
                        return g.__proto__ = I, g
                    }, f(g, I)
                }

                C("556c");
                var N = function (g) {
                    function I() {
                        return X(this, I), Q(this, v(I).apply(this, arguments))
                    }

                    return R(I, g), V(I, [{
                        key: "labelClickHandle", value: function (g) {
                            g.stopPropagation(), this.$emit("pressLabel", this.mark.pos)
                        }
                    }, {
                        key: "render", value: function () {
                            var g = arguments[0], I = this.mark;
                            return g("div", {class: this.marksClasses}, [this.$slots.step || g("div", {
                                class: this.stepClasses,
                                style: [this.stepStyle, I.style, I.active ? this.stepActiveStyle : null, I.active ? I.activeStyle : null]
                            }), this.hideLabel ? null : this.$slots.label || g("div", {
                                class: this.labelClasses,
                                style: [this.labelStyle, I.labelStyle, I.active ? this.labelActiveStyle : null, I.active ? I.labelActiveStyle : null],
                                on: {click: this.labelClickHandle}
                            }, [I.label])])
                        }
                    }, {
                        key: "marksClasses", get: function () {
                            return ["vue-slider-mark", {"vue-slider-mark-active": this.mark.active}]
                        }
                    }, {
                        key: "stepClasses", get: function () {
                            return ["vue-slider-mark-step", {"vue-slider-mark-step-active": this.mark.active}]
                        }
                    }, {
                        key: "labelClasses", get: function () {
                            return ["vue-slider-mark-label", {"vue-slider-mark-label-active": this.mark.active}]
                        }
                    }]), I
                }(n.a);
                A([l({required: !0})], N.prototype, "mark", void 0), A([l(Boolean)], N.prototype, "hideLabel", void 0), A([l()], N.prototype, "stepStyle", void 0), A([l()], N.prototype, "stepActiveStyle", void 0), A([l()], N.prototype, "labelStyle", void 0), A([l()], N.prototype, "labelActiveStyle", void 0);
                var k, Y = N = A([a.a], N), x = function (g) {
                    return "number" == typeof g ? "".concat(g, "px") : g
                }, w = function (g) {
                    var I = document.documentElement, C = document.body, t = g.getBoundingClientRect();
                    return {
                        y: t.top + (window.pageYOffset || I.scrollTop) - (I.clientTop || C.clientTop || 0),
                        x: t.left + (window.pageXOffset || I.scrollLeft) - (I.clientLeft || C.clientLeft || 0)
                    }
                }, U = function (g, I, C) {
                    var t = "targetTouches" in g ? g.targetTouches[0] : g, A = w(I),
                        e = {x: t.pageX - A.x, y: t.pageY - A.y};
                    return {x: C ? I.offsetWidth - e.x : e.x, y: C ? I.offsetHeight - e.y : e.y}
                };
                !function (g) {
                    g[g.PAGE_UP = 33] = "PAGE_UP", g[g.PAGE_DOWN = 34] = "PAGE_DOWN", g[g.END = 35] = "END", g[g.HOME = 36] = "HOME", g[g.LEFT = 37] = "LEFT", g[g.UP = 38] = "UP", g[g.RIGHT = 39] = "RIGHT", g[g.DOWN = 40] = "DOWN"
                }(k || (k = {}));
                var H = function (g, I) {
                    switch (g.keyCode) {
                        case k.UP:
                            return function (g) {
                                return "ttb" === I.direction ? g - 1 : g + 1
                            };
                        case k.RIGHT:
                            return function (g) {
                                return "rtl" === I.direction ? g - 1 : g + 1
                            };
                        case k.DOWN:
                            return function (g) {
                                return "ttb" === I.direction ? g + 1 : g - 1
                            };
                        case k.LEFT:
                            return function (g) {
                                return "rtl" === I.direction ? g + 1 : g - 1
                            };
                        case k.END:
                            return function () {
                                return I.max
                            };
                        case k.HOME:
                            return function () {
                                return I.min
                            };
                        case k.PAGE_UP:
                            return function (g) {
                                return g + 10
                            };
                        case k.PAGE_DOWN:
                            return function (g) {
                                return g - 10
                            };
                        default:
                            return null
                    }
                };

                function S(g, I) {
                    if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                }

                function L(g, I) {
                    for (var C = 0; C < I.length; C++) {
                        var t = I[C];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                    }
                }

                function T(g, I, C) {
                    return I && L(g.prototype, I), C && L(g, C), g
                }

                var D, z, E = function () {
                    function g(I) {
                        S(this, g), this.num = I
                    }

                    return T(g, [{
                        key: "decimal", value: function (g, I) {
                            var C = this.num, t = this.getDecimalLen(C), A = this.getDecimalLen(g), e = 0;
                            switch (I) {
                                case"+":
                                    e = this.getExponent(t, A), this.num = (this.safeRoundUp(C, e) + this.safeRoundUp(g, e)) / e;
                                    break;
                                case"-":
                                    e = this.getExponent(t, A), this.num = (this.safeRoundUp(C, e) - this.safeRoundUp(g, e)) / e;
                                    break;
                                case"*":
                                    this.num = this.safeRoundUp(this.safeRoundUp(C, this.getExponent(t)), this.safeRoundUp(g, this.getExponent(A))) / this.getExponent(t + A);
                                    break;
                                case"/":
                                    e = this.getExponent(t, A), this.num = this.safeRoundUp(C, e) / this.safeRoundUp(g, e);
                                    break;
                                case"%":
                                    e = this.getExponent(t, A), this.num = this.safeRoundUp(C, e) % this.safeRoundUp(g, e) / e
                            }
                            return this
                        }
                    }, {
                        key: "plus", value: function (g) {
                            return this.decimal(g, "+")
                        }
                    }, {
                        key: "minus", value: function (g) {
                            return this.decimal(g, "-")
                        }
                    }, {
                        key: "multiply", value: function (g) {
                            return this.decimal(g, "*")
                        }
                    }, {
                        key: "divide", value: function (g) {
                            return this.decimal(g, "/")
                        }
                    }, {
                        key: "remainder", value: function (g) {
                            return this.decimal(g, "%")
                        }
                    }, {
                        key: "toNumber", value: function () {
                            return this.num
                        }
                    }, {
                        key: "getDecimalLen", value: function (g) {
                            return ("".concat(g).split(".")[1] || "").length
                        }
                    }, {
                        key: "getExponent", value: function (g, I) {
                            return Math.pow(10, void 0 !== I ? Math.max(g, I) : g)
                        }
                    }, {
                        key: "safeRoundUp", value: function (g, I) {
                            return Math.round(g * I)
                        }
                    }]), g
                }();

                function J(g) {
                    for (var I = 1; I < arguments.length; I++) {
                        var C = null != arguments[I] ? arguments[I] : {}, t = Object.keys(C);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(C).filter((function (g) {
                            return Object.getOwnPropertyDescriptor(C, g).enumerable
                        })))), t.forEach((function (I) {
                            tg(g, I, C[I])
                        }))
                    }
                    return g
                }

                function M(g, I) {
                    return K(g) || O(g, I) || P()
                }

                function P() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }

                function O(g, I) {
                    var C = [], t = !0, A = !1, e = void 0;
                    try {
                        for (var n, i = g[Symbol.iterator](); !(t = (n = i.next()).done) && (C.push(n.value), !I || C.length !== I); t = !0) ;
                    } catch (a) {
                        A = !0, e = a
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (A) throw e
                        }
                    }
                    return C
                }

                function K(g) {
                    if (Array.isArray(g)) return g
                }

                function j(g) {
                    return q(g) || $(g) || _()
                }

                function _() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }

                function $(g) {
                    if (Symbol.iterator in Object(g) || "[object Arguments]" === Object.prototype.toString.call(g)) return Array.from(g)
                }

                function q(g) {
                    if (Array.isArray(g)) {
                        for (var I = 0, C = new Array(g.length); I < g.length; I++) C[I] = g[I];
                        return C
                    }
                }

                function gg(g, I) {
                    if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                }

                function Ig(g, I) {
                    for (var C = 0; C < I.length; C++) {
                        var t = I[C];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                    }
                }

                function Cg(g, I, C) {
                    return I && Ig(g.prototype, I), C && Ig(g, C), g
                }

                function tg(g, I, C) {
                    return I in g ? Object.defineProperty(g, I, {
                        value: C,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : g[I] = C, g
                }

                !function (g) {
                    g[g.VALUE = 1] = "VALUE", g[g.INTERVAL = 2] = "INTERVAL", g[g.MIN = 3] = "MIN", g[g.MAX = 4] = "MAX", g[g.ORDER = 5] = "ORDER"
                }(z || (z = {}));
                var Ag = (tg(D = {}, z.VALUE, 'The type of the "value" is illegal'), tg(D, z.INTERVAL, 'The prop "interval" is invalid, "(max - min)" cannot be divisible by "interval"'), tg(D, z.MIN, 'The "value" cannot be less than the minimum.'), tg(D, z.MAX, 'The "value" cannot be greater than the maximum.'), tg(D, z.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), D),
                    eg = function () {
                        function g(I) {
                            gg(this, g), this.dotsPos = [], this.dotsValue = [], this.data = I.data, this.max = I.max, this.min = I.min, this.interval = I.interval, this.order = I.order, this.marks = I.marks, this.included = I.included, this.process = I.process, this.adsorb = I.adsorb, this.dotOptions = I.dotOptions, this.onError = I.onError, this.order ? (this.minRange = I.minRange || 0, this.maxRange = I.maxRange || 0, this.enableCross = I.enableCross, this.fixed = I.fixed) : ((I.minRange || I.maxRange || !I.enableCross || I.fixed) && this.emitError(z.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1), this.setValue(I.value)
                        }

                        return Cg(g, [{
                            key: "setValue", value: function (g) {
                                this.setDotsValue(Array.isArray(g) ? j(g) : [g], !0)
                            }
                        }, {
                            key: "setDotsValue", value: function (g, I) {
                                this.dotsValue = g, I && this.syncDotsPos()
                            }
                        }, {
                            key: "setDotsPos", value: function (g) {
                                var I = this, C = this.order ? j(g).sort((function (g, I) {
                                    return g - I
                                })) : g;
                                this.dotsPos = C, this.setDotsValue(C.map((function (g) {
                                    return I.getValueByPos(g)
                                })), this.adsorb)
                            }
                        }, {
                            key: "getValueByPos", value: function (g) {
                                var I = this.parsePos(g);
                                if (this.included) {
                                    var C = 100;
                                    this.markList.forEach((function (t) {
                                        var A = Math.abs(t.pos - g);
                                        A < C && (C = A, I = t.value)
                                    }))
                                }
                                return I
                            }
                        }, {
                            key: "syncDotsPos", value: function () {
                                var g = this;
                                this.dotsPos = this.dotsValue.map((function (I) {
                                    return g.parseValue(I)
                                }))
                            }
                        }, {
                            key: "getRecentDot", value: function (g) {
                                var I = this.dotsPos.map((function (I) {
                                    return Math.abs(I - g)
                                }));
                                return I.indexOf(Math.min.apply(Math, j(I)))
                            }
                        }, {
                            key: "getIndexByValue", value: function (g) {
                                return this.data ? this.data.indexOf(g) : new E(+g).minus(this.min).divide(this.interval).toNumber()
                            }
                        }, {
                            key: "getValueByIndex", value: function (g) {
                                return g < 0 ? g = 0 : g > this.total && (g = this.total), this.data ? this.data[g] : new E(g).multiply(this.interval).plus(this.min).toNumber()
                            }
                        }, {
                            key: "setDotPos", value: function (g, I) {
                                var C = (g = this.getValidPos(g, I).pos) - this.dotsPos[I];
                                if (C) {
                                    var t = new Array(this.dotsPos.length);
                                    this.fixed ? t = this.getFixedChangePosArr(C, I) : this.minRange || this.maxRange ? t = this.getLimitRangeChangePosArr(g, C, I) : t[I] = C, this.setDotsPos(this.dotsPos.map((function (g, I) {
                                        return g + (t[I] || 0)
                                    })))
                                }
                            }
                        }, {
                            key: "getFixedChangePosArr", value: function (g, I) {
                                var C = this;
                                return this.dotsPos.forEach((function (t, A) {
                                    if (A !== I) {
                                        var e = C.getValidPos(t + g, A), n = e.pos;
                                        e.inRange || (g = Math.min(Math.abs(n - t), Math.abs(g)) * (g < 0 ? -1 : 1))
                                    }
                                })), this.dotsPos.map((function (I) {
                                    return g
                                }))
                            }
                        }, {
                            key: "getLimitRangeChangePosArr", value: function (g, I, C) {
                                var t = this, A = [{index: C, changePos: I}], e = I;
                                return [this.minRange, this.maxRange].forEach((function (n, i) {
                                    if (!n) return !1;
                                    for (var a = 0 === i, s = I > 0, l = 0, c = function (g, I) {
                                        var C = Math.abs(g - I);
                                        return a ? C < t.minRangeDir : C > t.maxRangeDir
                                    }, o = C + (l = a ? s ? 1 : -1 : s ? -1 : 1), r = t.dotsPos[o], u = g; t.isPos(r) && c(r, u);) {
                                        var d = t.getValidPos(r + e, o).pos;
                                        A.push({index: o, changePos: d - r}), o += l, u = d, r = t.dotsPos[o]
                                    }
                                })), this.dotsPos.map((function (g, I) {
                                    var C = A.filter((function (g) {
                                        return g.index === I
                                    }));
                                    return C.length ? C[0].changePos : 0
                                }))
                            }
                        }, {
                            key: "isPos", value: function (g) {
                                return "number" == typeof g
                            }
                        }, {
                            key: "getValidPos", value: function (g, I) {
                                var C = this.valuePosRange[I], t = !0;
                                return g < C[0] ? (g = C[0], t = !1) : g > C[1] && (g = C[1], t = !1), {
                                    pos: g,
                                    inRange: t
                                }
                            }
                        }, {
                            key: "parseValue", value: function (g) {
                                if (this.data) g = this.data.indexOf(g); else if ("number" == typeof g || "string" == typeof g) {
                                    if ((g = +g) < this.min) return this.emitError(z.MIN), 0;
                                    if (g > this.max) return this.emitError(z.MAX), 0;
                                    if ("number" != typeof g || g != g) return this.emitError(z.VALUE), 0;
                                    g = new E(g).minus(this.min).divide(this.interval).toNumber()
                                }
                                var I = new E(g).multiply(this.gap).toNumber();
                                return I < 0 ? 0 : I > 100 ? 100 : I
                            }
                        }, {
                            key: "parsePos", value: function (g) {
                                var I = Math.round(g / this.gap);
                                return this.getValueByIndex(I)
                            }
                        }, {
                            key: "isActiveByPos", value: function (g) {
                                return this.processArray.some((function (I) {
                                    var C = M(I, 2), t = C[0], A = C[1];
                                    return g >= t && g <= A
                                }))
                            }
                        }, {
                            key: "getValues", value: function () {
                                if (this.data) return this.data;
                                for (var g = [], I = 0; I <= this.total; I++) g.push(new E(I).multiply(this.interval).plus(this.min).toNumber());
                                return g
                            }
                        }, {
                            key: "emitError", value: function (g) {
                                this.onError && this.onError(g, Ag[g])
                            }
                        }, {
                            key: "getDotRange", value: function (g, I, C) {
                                if (!this.dotOptions) return C;
                                var t = Array.isArray(this.dotOptions) ? this.dotOptions[g] : this.dotOptions;
                                return t && void 0 !== t[I] ? this.parseValue(t[I]) : C
                            }
                        }, {
                            key: "markList", get: function () {
                                var g = this;
                                if (!this.marks) return [];
                                var I = function (I, C) {
                                    var t = g.parseValue(I);
                                    return J({pos: t, value: I, label: I, active: g.isActiveByPos(t)}, C)
                                };
                                return !0 === this.marks ? this.getValues().map((function (g) {
                                    return I(g)
                                })) : "[object Object]" === Object.prototype.toString.call(this.marks) ? Object.keys(this.marks).sort((function (g, I) {
                                    return +g - +I
                                })).map((function (C) {
                                    var t = g.marks[C];
                                    return I(C, "string" != typeof t ? t : {label: t})
                                })) : Array.isArray(this.marks) ? this.marks.map((function (g) {
                                    return I(g)
                                })) : "function" == typeof this.marks ? this.getValues().map((function (I) {
                                    return {value: I, result: g.marks(I)}
                                })).filter((function (g) {
                                    return !!g.result
                                })).map((function (g) {
                                    var C = g.value, t = g.result;
                                    return I(C, t)
                                })) : []
                            }
                        }, {
                            key: "processArray", get: function () {
                                if (this.process) {
                                    if ("function" == typeof this.process) return this.process(this.dotsPos);
                                    if (1 === this.dotsPos.length) return [[0, this.dotsPos[0]]];
                                    if (this.dotsPos.length > 1) return [[Math.min.apply(Math, j(this.dotsPos)), Math.max.apply(Math, j(this.dotsPos))]]
                                }
                                return []
                            }
                        }, {
                            key: "total", get: function () {
                                var g = 0;
                                return (g = this.data ? this.data.length - 1 : new E(this.max).minus(this.min).divide(this.interval).toNumber()) - Math.floor(g) != 0 ? (this.emitError(z.INTERVAL), 0) : g
                            }
                        }, {
                            key: "gap", get: function () {
                                return 100 / this.total
                            }
                        }, {
                            key: "minRangeDir", get: function () {
                                return this.minRange ? this.minRange * this.gap : 0
                            }
                        }, {
                            key: "maxRangeDir", get: function () {
                                return this.maxRange ? this.maxRange * this.gap : 100
                            }
                        }, {
                            key: "valuePosRange", get: function () {
                                var g = this, I = this.dotsPos, C = [];
                                return I.forEach((function (t, A) {
                                    C.push([Math.max(g.minRange ? g.minRangeDir * A : 0, g.enableCross ? 0 : I[A - 1] || 0, g.getDotRange(A, "min", 0)), Math.min(g.minRange ? 100 - g.minRangeDir * (I.length - 1 - A) : 100, g.enableCross ? 100 : I[A + 1] || 100, g.getDotRange(A, "max", 100))])
                                })), C
                            }
                        }, {
                            key: "dotsIndex", get: function () {
                                var g = this;
                                return this.dotsValue.map((function (I) {
                                    return g.getIndexByValue(I)
                                }))
                            }
                        }]), g
                    }();

                function ng(g, I) {
                    if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                }

                function ig(g, I) {
                    for (var C = 0; C < I.length; C++) {
                        var t = I[C];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                    }
                }

                function ag(g, I, C) {
                    return I && ig(g.prototype, I), C && ig(g, C), g
                }

                var sg = function () {
                    function g(I) {
                        ng(this, g), this.states = 0, this.map = I
                    }

                    return ag(g, [{
                        key: "add", value: function (g) {
                            this.states |= g
                        }
                    }, {
                        key: "delete", value: function (g) {
                            this.states &= ~g
                        }
                    }, {
                        key: "toggle", value: function (g) {
                            this.has(g) ? this.delete(g) : this.add(g)
                        }
                    }, {
                        key: "has", value: function (g) {
                            return !!(this.states & g)
                        }
                    }]), g
                }();

                function lg(g) {
                    return lg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                        return typeof g
                    } : function (g) {
                        return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
                    }, lg(g)
                }

                function cg(g) {
                    for (var I = 1; I < arguments.length; I++) {
                        var C = null != arguments[I] ? arguments[I] : {}, t = Object.keys(C);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(C).filter((function (g) {
                            return Object.getOwnPropertyDescriptor(C, g).enumerable
                        })))), t.forEach((function (I) {
                            bg(g, I, C[I])
                        }))
                    }
                    return g
                }

                function og(g, I) {
                    return dg(g) || ug(g, I) || rg()
                }

                function rg() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }

                function ug(g, I) {
                    var C = [], t = !0, A = !1, e = void 0;
                    try {
                        for (var n, i = g[Symbol.iterator](); !(t = (n = i.next()).done) && (C.push(n.value), !I || C.length !== I); t = !0) ;
                    } catch (a) {
                        A = !0, e = a
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (A) throw e
                        }
                    }
                    return C
                }

                function dg(g) {
                    if (Array.isArray(g)) return g
                }

                function bg(g, I, C) {
                    return I in g ? Object.defineProperty(g, I, {
                        value: C,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : g[I] = C, g
                }

                function pg(g) {
                    return hg(g) || Bg(g) || mg()
                }

                function mg() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }

                function Bg(g) {
                    if (Symbol.iterator in Object(g) || "[object Arguments]" === Object.prototype.toString.call(g)) return Array.from(g)
                }

                function hg(g) {
                    if (Array.isArray(g)) {
                        for (var I = 0, C = new Array(g.length); I < g.length; I++) C[I] = g[I];
                        return C
                    }
                }

                function Zg(g, I) {
                    if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                }

                function Gg(g, I) {
                    for (var C = 0; C < I.length; C++) {
                        var t = I[C];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                    }
                }

                function Fg(g, I, C) {
                    return I && Gg(g.prototype, I), C && Gg(g, C), g
                }

                function Xg(g, I) {
                    return !I || "object" !== lg(I) && "function" != typeof I ? Wg(g) : I
                }

                function Wg(g) {
                    if (void 0 === g) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return g
                }

                function Vg(g) {
                    return Vg = Object.setPrototypeOf ? Object.getPrototypeOf : function (g) {
                        return g.__proto__ || Object.getPrototypeOf(g)
                    }, Vg(g)
                }

                function Qg(g, I) {
                    if ("function" != typeof I && null !== I) throw new TypeError("Super expression must either be null or a function");
                    g.prototype = Object.create(I && I.prototype, {
                        constructor: {
                            value: g,
                            writable: !0,
                            configurable: !0
                        }
                    }), I && yg(g, I)
                }

                function yg(g, I) {
                    return yg = Object.setPrototypeOf || function (g, I) {
                        return g.__proto__ = I, g
                    }, yg(g, I)
                }

                C("4abb");
                var vg = {None: 0, Drag: 1, Focus: 2}, Rg = 4, fg = function (g) {
                    function I() {
                        var g;
                        return Zg(this, I), (g = Xg(this, Vg(I).apply(this, arguments))).states = new sg(vg), g.scale = 1, g.focusDotIndex = 0, g
                    }

                    return Qg(I, g), Fg(I, [{
                        key: "onValueChanged", value: function () {
                            !this.states.has(vg.Drag) && this.isNotSync && this.control.setValue(this.value)
                        }
                    }, {
                        key: "created", value: function () {
                            this.initControl()
                        }
                    }, {
                        key: "mounted", value: function () {
                            this.bindEvent()
                        }
                    }, {
                        key: "beforeDestroy", value: function () {
                            this.unbindEvent()
                        }
                    }, {
                        key: "bindEvent", value: function () {
                            document.addEventListener("touchmove", this.dragMove, {passive: !1}), document.addEventListener("touchend", this.dragEnd, {passive: !1}), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle)
                        }
                    }, {
                        key: "unbindEvent", value: function () {
                            document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle)
                        }
                    }, {
                        key: "setScale", value: function () {
                            this.scale = new E(Math.floor(this.isHorizontal ? this.$el.offsetWidth : this.$el.offsetHeight)).divide(100).toNumber()
                        }
                    }, {
                        key: "initControl", value: function () {
                            var g = this;
                            this.control = new eg({
                                value: this.value,
                                data: this.data,
                                enableCross: this.enableCross,
                                fixed: this.fixed,
                                max: this.max,
                                min: this.min,
                                interval: this.interval,
                                minRange: this.minRange,
                                maxRange: this.maxRange,
                                order: this.order,
                                marks: this.marks,
                                included: this.included,
                                process: this.process,
                                adsorb: this.adsorb,
                                dotOptions: this.dotOptions,
                                onError: this.emitError
                            }), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach((function (I) {
                                g.$watch(I, (function (C) {
                                    if ("data" === I && Array.isArray(g.control.data) && Array.isArray(C) && g.control.data.length === C.length && C.every((function (I, C) {
                                        return I === g.control.data[C]
                                    }))) return !1;
                                    g.control[I] = C, ["data", "max", "min", "interval"].indexOf(I) > -1 && g.control.syncDotsPos()
                                }))
                            }))
                        }
                    }, {
                        key: "isDisabledByDotIndex", value: function (g) {
                            return this.dots[g].disabled
                        }
                    }, {
                        key: "syncValueByPos", value: function () {
                            var g = this.control.dotsValue;
                            this.isDiff(g, Array.isArray(this.value) ? this.value : [this.value]) && this.$emit("change", 1 === g.length ? g[0] : pg(g))
                        }
                    }, {
                        key: "isDiff", value: function (g, I) {
                            return g.length !== I.length || g.some((function (g, C) {
                                return g !== I[C]
                            }))
                        }
                    }, {
                        key: "emitError", value: function (g, I) {
                            this.silent || console.error("[VueSlider error]: ".concat(I)), this.$emit("error", g, I)
                        }
                    }, {
                        key: "dragStart", value: function (g) {
                            this.focusDotIndex = g, this.setScale(), this.states.add(vg.Drag), this.states.add(vg.Focus), this.$emit("drag-start")
                        }
                    }, {
                        key: "dragMove", value: function (g) {
                            if (!this.states.has(vg.Drag)) return !1;
                            g.preventDefault();
                            var I = this.getPosByEvent(g);
                            this.isCrossDot(I), this.control.setDotPos(I, this.focusDotIndex), this.lazy || this.syncValueByPos();
                            var C = this.control.dotsValue;
                            this.$emit("dragging", 1 === C.length ? C[0] : pg(C))
                        }
                    }, {
                        key: "isCrossDot", value: function (g) {
                            if (this.canSort) {
                                var I = this.focusDotIndex, C = g;
                                C > this.dragRange[1] ? (C = this.dragRange[1], this.focusDotIndex++) : C < this.dragRange[0] && (C = this.dragRange[0], this.focusDotIndex--), I !== this.focusDotIndex && this.control.setDotPos(C, I)
                            }
                        }
                    }, {
                        key: "dragEnd", value: function () {
                            var g = this;
                            if (!this.states.has(vg.Drag)) return !1;
                            this.lazy && this.syncValueByPos(), setTimeout((function () {
                                g.included && g.isNotSync ? g.control.setValue(g.value) : g.control.syncDotsPos(), g.states.delete(vg.Drag), g.useKeyboard || g.states.delete(vg.Focus), g.$emit("drag-end")
                            }))
                        }
                    }, {
                        key: "blurHandle", value: function (g) {
                            if (!this.states.has(vg.Focus) || !this.$refs.container || this.$refs.container.contains(g.target)) return !1;
                            this.states.delete(vg.Focus)
                        }
                    }, {
                        key: "clickHandle", value: function (g) {
                            if (!this.clickable) return !1;
                            if (!this.states.has(vg.Drag)) {
                                this.setScale();
                                var I = this.getPosByEvent(g);
                                this.setValueByPos(I)
                            }
                        }
                    }, {
                        key: "focus", value: function () {
                            var g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.states.add(vg.Focus), this.focusDotIndex = g
                        }
                    }, {
                        key: "blur", value: function () {
                            this.states.delete(vg.Focus)
                        }
                    }, {
                        key: "getValue", value: function () {
                            var g = this.control.dotsValue;
                            return 1 === g.length ? g[0] : g
                        }
                    }, {
                        key: "getIndex", value: function () {
                            var g = this.control.dotsIndex;
                            return 1 === g.length ? g[0] : g
                        }
                    }, {
                        key: "setValue", value: function (g) {
                            this.control.setValue(Array.isArray(g) ? pg(g) : [g]), this.syncValueByPos()
                        }
                    }, {
                        key: "setIndex", value: function (g) {
                            var I = this, C = Array.isArray(g) ? g.map((function (g) {
                                return I.control.getValueByIndex(g)
                            })) : this.control.getValueByIndex(g);
                            this.setValue(C)
                        }
                    }, {
                        key: "setValueByPos", value: function (g) {
                            var I = this, C = this.control.getRecentDot(g);
                            if (this.isDisabledByDotIndex(C)) return !1;
                            this.focusDotIndex = C, this.control.setDotPos(g, C), this.syncValueByPos(), this.useKeyboard && this.states.add(vg.Focus), setTimeout((function () {
                                I.included && I.isNotSync ? I.control.setValue(I.value) : I.control.syncDotsPos()
                            }))
                        }
                    }, {
                        key: "keydownHandle", value: function (g) {
                            if (!this.useKeyboard || !this.states.has(vg.Focus)) return !1;
                            var I = H(g, {direction: this.direction, max: this.control.total, min: 0});
                            if (I) {
                                g.preventDefault();
                                var C = I(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])),
                                    t = this.control.parseValue(this.control.getValueByIndex(C));
                                this.isCrossDot(t), this.control.setDotPos(t, this.focusDotIndex), this.syncValueByPos()
                            }
                        }
                    }, {
                        key: "getPosByEvent", value: function (g) {
                            return U(g, this.$el, this.isReverse)[this.isHorizontal ? "x" : "y"] / this.scale
                        }
                    }, {
                        key: "renderSlot", value: function (g, I, C, t) {
                            var A = this.$createElement, e = this.$scopedSlots[g];
                            return e ? t ? e(I) : A("template", {slot: g}, [e(I)]) : C
                        }
                    }, {
                        key: "render", value: function () {
                            var g = this, I = arguments[0];
                            return I("div", {
                                ref: "container",
                                class: this.containerClasses,
                                style: this.containerStyles,
                                attrs: {"aria-hidden": !0},
                                on: {click: this.clickHandle}
                            }, [I("div", {
                                class: "vue-slider-rail",
                                style: this.railStyle
                            }, [this.processArray.map((function (C, t) {
                                return g.renderSlot("process", C, I("div", {
                                    class: "vue-slider-process",
                                    key: "process-".concat(t),
                                    style: C.style
                                }), !0)
                            })), this.marks ? I("div", {class: "vue-slider-marks"}, [this.control.markList.map((function (C, t) {
                                var A;
                                return g.renderSlot("mark", C, I("vue-slider-mark", {
                                    key: "mark-".concat(t),
                                    attrs: {
                                        mark: C,
                                        hideLabel: g.hideLabel,
                                        stepStyle: g.stepStyle,
                                        stepActiveStyle: g.stepActiveStyle,
                                        labelStyle: g.labelStyle,
                                        labelActiveStyle: g.labelActiveStyle
                                    },
                                    style: (A = {}, bg(A, g.isHorizontal ? "height" : "width", "100%"), bg(A, g.isHorizontal ? "width" : "height", g.tailSize), bg(A, g.mainDirection, "".concat(C.pos, "%")), A),
                                    on: {
                                        pressLabel: function (I) {
                                            return g.setValueByPos(I)
                                        }
                                    }
                                }, [g.renderSlot("step", C, null), g.renderSlot("label", C, null)]), !0)
                            }))]) : null, this.dots.map((function (C, t) {
                                var A;
                                return I("vue-slider-dot", {
                                    ref: "dot-".concat(t),
                                    key: "dot-".concat(t),
                                    attrs: {
                                        value: C.value,
                                        disabled: C.disabled,
                                        focus: C.focus,
                                        "dot-style": [C.style, C.disabled ? C.disabledStyle : null, C.focus ? C.focusStyle : null],
                                        tooltip: C.tooltip || g.tooltip,
                                        "tooltip-style": [g.tooltipStyle, C.tooltipStyle, C.disabled ? C.tooltipDisabledStyle : null, C.focus ? C.tooltipFocusStyle : null],
                                        "tooltip-formatter": Array.isArray(g.tooltipFormatter) ? g.tooltipFormatter[t] : g.tooltipFormatter,
                                        "tooltip-placement": g.tooltipDirections[t]
                                    },
                                    style: [g.dotBaseStyle, (A = {}, bg(A, g.mainDirection, "".concat(C.pos, "%")), bg(A, "transition", "".concat(g.mainDirection, " ").concat(g.animateTime, "s")), A)],
                                    on: {
                                        "drag-start": function () {
                                            return g.dragStart(t)
                                        }
                                    }
                                }, [g.renderSlot("dot", C, null), g.renderSlot("tooltip", C, null)])
                            }))]), 1 !== this.dots.length || this.data ? null : I("input", {
                                class: "vue-slider-sr-only",
                                attrs: {type: "range", min: this.min, max: this.max},
                                domProps: {value: this.value}
                            })])
                        }
                    }, {
                        key: "tailSize", get: function () {
                            return x((this.isHorizontal ? this.height : this.width) || Rg)
                        }
                    }, {
                        key: "containerClasses", get: function () {
                            return ["vue-slider", ["vue-slider-".concat(this.direction)], {"vue-slider-disabled": this.disabled}]
                        }
                    }, {
                        key: "containerStyles", get: function () {
                            var g = og(Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], 2),
                                I = g[0], C = g[1], t = this.width ? x(this.width) : this.isHorizontal ? "auto" : x(Rg),
                                A = this.height ? x(this.height) : this.isHorizontal ? x(Rg) : "auto";
                            return {
                                padding: this.contained ? "".concat(C / 2, "px ").concat(I / 2, "px") : this.isHorizontal ? "".concat(C / 2, "px 0") : "0 ".concat(I / 2, "px"),
                                width: t,
                                height: A
                            }
                        }
                    }, {
                        key: "processArray", get: function () {
                            var g = this;
                            return this.control.processArray.map((function (I) {
                                var C, t = og(I, 3), A = t[0], e = t[1], n = t[2];
                                if (A > e) {
                                    var i = [e, A];
                                    A = i[0], e = i[1]
                                }
                                var a = g.isHorizontal ? "width" : "height";
                                return {
                                    start: A,
                                    end: e,
                                    style: cg((C = {}, bg(C, g.isHorizontal ? "height" : "width", "100%"), bg(C, g.isHorizontal ? "top" : "left", 0), bg(C, g.mainDirection, "".concat(A, "%")), bg(C, a, "".concat(e - A, "%")), bg(C, "transitionProperty", "".concat(a, ",").concat(g.mainDirection)), bg(C, "transitionDuration", "".concat(g.animateTime, "s")), C), g.processStyle, n)
                                }
                            }))
                        }
                    }, {
                        key: "dotBaseStyle", get: function () {
                            var g, I = og(Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], 2),
                                C = I[0], t = I[1];
                            return g = this.isHorizontal ? bg({
                                transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"),
                                WebkitTransform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"),
                                top: "50%"
                            }, "ltr" === this.direction ? "left" : "right", "0") : bg({
                                transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"),
                                WebkitTransform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"),
                                left: "50%"
                            }, "btt" === this.direction ? "bottom" : "top", "0"), cg({
                                width: "".concat(C, "px"),
                                height: "".concat(t, "px")
                            }, g)
                        }
                    }, {
                        key: "mainDirection", get: function () {
                            switch (this.direction) {
                                case"ltr":
                                    return "left";
                                case"rtl":
                                    return "right";
                                case"btt":
                                    return "bottom";
                                case"ttb":
                                    return "top"
                            }
                        }
                    }, {
                        key: "isHorizontal", get: function () {
                            return "ltr" === this.direction || "rtl" === this.direction
                        }
                    }, {
                        key: "isReverse", get: function () {
                            return "rtl" === this.direction || "btt" === this.direction
                        }
                    }, {
                        key: "tooltipDirections", get: function () {
                            var g = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
                            return Array.isArray(g) ? g : this.dots.map((function () {
                                return g
                            }))
                        }
                    }, {
                        key: "dots", get: function () {
                            var g = this;
                            return this.control.dotsPos.map((function (I, C) {
                                return cg({
                                    pos: I,
                                    index: C,
                                    value: g.control.dotsValue[C],
                                    focus: g.states.has(vg.Focus) && g.focusDotIndex === C,
                                    disabled: !1,
                                    style: g.dotStyle
                                }, (Array.isArray(g.dotOptions) ? g.dotOptions[C] : g.dotOptions) || {})
                            }))
                        }
                    }, {
                        key: "animateTime", get: function () {
                            return this.states.has(vg.Drag) ? 0 : this.duration
                        }
                    }, {
                        key: "canSort", get: function () {
                            return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross
                        }
                    }, {
                        key: "isNotSync", get: function () {
                            var g = this.control.dotsValue;
                            return Array.isArray(this.value) ? this.value.length !== g.length || this.value.some((function (I, C) {
                                return I !== g[C]
                            })) : this.value !== g[0]
                        }
                    }, {
                        key: "dragRange", get: function () {
                            var g = this.dots[this.focusDotIndex - 1], I = this.dots[this.focusDotIndex + 1];
                            return [g ? g.pos : -1 / 0, I ? I.pos : 1 / 0]
                        }
                    }]), I
                }(n.a);
                A([s("change", {default: 0})], fg.prototype, "value", void 0), A([l({
                    type: Boolean,
                    default: !1
                })], fg.prototype, "silent", void 0), A([l({
                    default: "ltr", validator: function (g) {
                        return ["ltr", "rtl", "ttb", "btt"].indexOf(g) > -1
                    }
                })], fg.prototype, "direction", void 0), A([l({type: [Number, String]})], fg.prototype, "width", void 0), A([l({type: [Number, String]})], fg.prototype, "height", void 0), A([l({default: 14})], fg.prototype, "dotSize", void 0), A([l({default: !1})], fg.prototype, "contained", void 0), A([l({
                    type: Number,
                    default: 0
                })], fg.prototype, "min", void 0), A([l({
                    type: Number,
                    default: 100
                })], fg.prototype, "max", void 0), A([l({
                    type: Number,
                    default: 1
                })], fg.prototype, "interval", void 0), A([l({
                    type: Boolean,
                    default: !1
                })], fg.prototype, "disabled", void 0), A([l({
                    type: Boolean,
                    default: !0
                })], fg.prototype, "clickable", void 0), A([l({
                    type: Number,
                    default: .5
                })], fg.prototype, "duration", void 0), A([l(Array)], fg.prototype, "data", void 0), A([l({
                    type: Boolean,
                    default: !1
                })], fg.prototype, "lazy", void 0), A([l({
                    type: String, validator: function (g) {
                        return ["none", "always", "focus"].indexOf(g) > -1
                    }, default: "focus"
                })], fg.prototype, "tooltip", void 0), A([l({
                    type: [String, Array], validator: function (g) {
                        return (Array.isArray(g) ? g : [g]).every((function (g) {
                            return ["top", "right", "bottom", "left"].indexOf(g) > -1
                        }))
                    }
                })], fg.prototype, "tooltipPlacement", void 0), A([l({type: [String, Array, Function]})], fg.prototype, "tooltipFormatter", void 0), A([l({
                    type: Boolean,
                    default: !1
                })], fg.prototype, "useKeyboard", void 0), A([l({
                    type: Boolean,
                    default: !0
                })], fg.prototype, "enableCross", void 0), A([l({
                    type: Boolean,
                    default: !1
                })], fg.prototype, "fixed", void 0), A([l({
                    type: Boolean,
                    default: !0
                })], fg.prototype, "order", void 0), A([l(Number)], fg.prototype, "minRange", void 0), A([l(Number)], fg.prototype, "maxRange", void 0), A([l({
                    type: [Boolean, Object, Array, Function],
                    default: !1
                })], fg.prototype, "marks", void 0), A([l({
                    type: [Boolean, Function],
                    default: !0
                })], fg.prototype, "process", void 0), A([l(Boolean)], fg.prototype, "included", void 0), A([l(Boolean)], fg.prototype, "adsorb", void 0), A([l(Boolean)], fg.prototype, "hideLabel", void 0), A([l()], fg.prototype, "dotOptions", void 0), A([l()], fg.prototype, "railStyle", void 0), A([l()], fg.prototype, "processStyle", void 0), A([l()], fg.prototype, "dotStyle", void 0), A([l()], fg.prototype, "tooltipStyle", void 0), A([l()], fg.prototype, "stepStyle", void 0), A([l()], fg.prototype, "stepActiveStyle", void 0), A([l()], fg.prototype, "labelStyle", void 0), A([l()], fg.prototype, "labelActiveStyle", void 0), A([c("value")], fg.prototype, "onValueChanged", null);
                var Ng = fg = A([a()({
                    data: function () {
                        return {control: null}
                    }, components: {VueSliderDot: G, VueSliderMark: Y}, inheritAttrs: !1
                })], fg);
                C.d(I, "ERROR_TYPE", (function () {
                    return z
                })), I.default = Ng
            }
        }).default)
    }, 202: function (g, I, C) {
        "use strict";
        var t = C(203), A = C.n(t);

        function e(g) {
            var I = Object.keys(g), C = I.map((function (I) {
                return g[I]
            })), t = [0].concat(function (g) {
                if (Array.isArray(g)) {
                    for (var I = 0, C = new Array(g.length); I < g.length; I++) C[I] = g[I];
                    return C
                }
                return Array.from(g)
            }(C.slice(0, -1))), e = t.reduce((function (g, C, e) {
                var n = Object.assign({minWidth: C}, e < I.length - 1 ? {maxWidth: t[e + 1] - 1} : {}), i = A()(n);
                return Object.assign(g, function (g, I, C) {
                    return I in g ? Object.defineProperty(g, I, {
                        value: C,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : g[I] = C, g
                }({}, I[e], i))
            }), {});
            return e
        }

        function n(g, I, C) {
            return function C(t) {
                if (void 0 !== I[t]) return I[t];
                var A = g.findIndex((function (g) {
                    return g === t
                })), e = -1 !== A || 0 !== A ? g[A - 1] : null;
                return e ? void 0 !== I[e] ? I[e] : C(e) : I[A]
            }(C)
        }

        function i(g, I) {
            var C = window.matchMedia(g), t = function (g) {
                g.matches && I()
            };
            C.addListener(t), t(C)
        }

        function a(g) {
            return "[object Array]" === Object.prototype.toString.call(g)
        }

        var s = {
            props: {mq: {required: !0, type: [String, Array]}}, computed: {
                plusModifier: function () {
                    return !a(this.mq) && "+" === this.mq.slice(-1)
                }, activeBreakpoints: function () {
                    var g = Object.keys(this.$mqAvailableBreakpoints),
                        I = this.plusModifier ? this.mq.slice(0, -1) : a(this.mq) ? this.mq : [this.mq];
                    return this.plusModifier ? function (g, I) {
                        var C = g.findIndex((function (g) {
                            return g === I
                        }));
                        return g.slice(C)
                    }(g, I) : I
                }
            }, render: function (g, I) {
                return this.activeBreakpoints.includes(this.$mq) ? g("div", this.$slots.default) : g()
            }
        }, l = {sm: 450, md: 1250, lg: 1 / 0}, c = {
            install: function (g) {
                var I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, C = I.breakpoints,
                    t = void 0 === C ? l : C, A = I.defaultBreakpoint, a = void 0 === A ? "sm" : A, c = !1, o = new g({
                        data: function () {
                            return {currentBreakpoint: a}
                        }
                    });
                g.filter("mq", (function (g, I) {
                    return n(Object.keys(t), I, g)
                })), g.mixin({
                    computed: {
                        $mq: function () {
                            return o.currentBreakpoint
                        }
                    }, created: function () {
                        this.$isServer && (o.currentBreakpoint = a)
                    }, mounted: function () {
                        if (!c) {
                            var g = e(t), I = function (I) {
                                i(g[I], (function () {
                                    o.currentBreakpoint = I
                                }))
                            };
                            for (var C in g) I(C);
                            c = !0
                        }
                    }
                }), g.prototype.$mqAvailableBreakpoints = t, g.component("MqLayout", s)
            }
        };
        I.a = c
    }, 203: function (g, I, C) {
        var t = C(366), A = function (g) {
            var I = "", C = Object.keys(g);
            return C.forEach((function (A, e) {
                var n = g[A];
                (function (g) {
                    return /[height|width]$/.test(g)
                })(A = t(A)) && "number" == typeof n && (n += "px"), I += !0 === n ? A : !1 === n ? "not " + A : "(" + A + ": " + n + ")", e < C.length - 1 && (I += " and ")
            })), I
        };
        g.exports = function (g) {
            var I = "";
            return "string" == typeof g ? g : g instanceof Array ? (g.forEach((function (C, t) {
                I += A(C), t < g.length - 1 && (I += ", ")
            })), I) : A(g)
        }
    }, 204: function (g, I) {
        function C(g, I) {
            var t = {
                name: g.name,
                path: g.path,
                hash: g.hash,
                query: g.query,
                params: g.params,
                fullPath: g.fullPath,
                meta: g.meta
            };
            return I && (t.from = C(I)), Object.freeze(t)
        }

        I.sync = function (g, I, t) {
            var A = (t || {}).moduleName || "route";
            g.registerModule(A, {
                namespaced: !0, state: C(I.currentRoute), mutations: {
                    ROUTE_CHANGED: function (I, t) {
                        g.state[A] = C(t.to, t.from)
                    }
                }
            });
            var e, n = !1, i = g.watch((function (g) {
                return g[A]
            }), (function (g) {
                var C = g.fullPath;
                C !== e && (null != e && (n = !0, I.push(g)), e = C)
            }), {sync: !0}), a = I.afterEach((function (I, C) {
                n ? n = !1 : (e = I.fullPath, g.commit(A + "/ROUTE_CHANGED", {to: I, from: C}))
            }));
            return function () {
                null != a && a(), null != i && i(), g.unregisterModule(A)
            }
        }
    }, 205: function (g, I, C) {
        g.exports = function () {
            "use strict";

            function g(I) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                    return typeof g
                } : function (g) {
                    return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
                }, g(I)
            }

            function I() {
                return I = Object.assign || function (g) {
                    for (var I = 1; I < arguments.length; I++) {
                        var C = arguments[I];
                        for (var t in C) Object.prototype.hasOwnProperty.call(C, t) && (g[t] = C[t])
                    }
                    return g
                }, I.apply(this, arguments)
            }

            var C = 4, t = .001, A = 1e-7, e = 10, n = 11, i = 1 / (n - 1), a = "function" == typeof Float32Array;

            function s(g, I) {
                return 1 - 3 * I + 3 * g
            }

            function l(g, I) {
                return 3 * I - 6 * g
            }

            function c(g) {
                return 3 * g
            }

            function o(g, I, C) {
                return ((s(I, C) * g + l(I, C)) * g + c(I)) * g
            }

            function r(g, I, C) {
                return 3 * s(I, C) * g * g + 2 * l(I, C) * g + c(I)
            }

            function u(g, I, C, t, n) {
                var i, a, s = 0;
                do {
                    (i = o(a = I + (C - I) / 2, t, n) - g) > 0 ? C = a : I = a
                } while (Math.abs(i) > A && ++s < e);
                return a
            }

            function d(g, I, t, A) {
                for (var e = 0; e < C; ++e) {
                    var n = r(I, t, A);
                    if (0 === n) return I;
                    I -= (o(I, t, A) - g) / n
                }
                return I
            }

            function b(g) {
                return g
            }

            var p = function (g, I, C, A) {
                if (!(0 <= g && g <= 1 && 0 <= C && C <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                if (g === I && C === A) return b;
                for (var e = a ? new Float32Array(n) : new Array(n), s = 0; s < n; ++s) e[s] = o(s * i, g, C);

                function l(I) {
                    for (var A = 0, a = 1, s = n - 1; a !== s && e[a] <= I; ++a) A += i;
                    --a;
                    var l = A + (I - e[a]) / (e[a + 1] - e[a]) * i, c = r(l, g, C);
                    return c >= t ? d(I, l, g, C) : 0 === c ? l : u(I, A, A + i, g, C)
                }

                return function (g) {
                    return 0 === g ? 0 : 1 === g ? 1 : o(l(g), I, A)
                }
            }, m = {
                ease: [.25, .1, .25, 1],
                linear: [0, 0, 1, 1],
                "ease-in": [.42, 0, 1, 1],
                "ease-out": [0, 0, .58, 1],
                "ease-in-out": [.42, 0, .58, 1]
            }, B = !1;
            try {
                var h = Object.defineProperty({}, "passive", {
                    get: function () {
                        B = !0
                    }
                });
                window.addEventListener("test", null, h)
            } catch (Y) {
            }
            var Z = {
                $: function (g) {
                    return "string" != typeof g ? g : document.querySelector(g)
                }, on: function (g, I, C) {
                    var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {passive: !1};
                    I instanceof Array || (I = [I]);
                    for (var A = 0; A < I.length; A++) g.addEventListener(I[A], C, !!B && t)
                }, off: function (g, I, C) {
                    I instanceof Array || (I = [I]);
                    for (var t = 0; t < I.length; t++) g.removeEventListener(I[t], C)
                }, cumulativeOffset: function (g) {
                    var I = 0, C = 0;
                    do {
                        I += g.offsetTop || 0, C += g.offsetLeft || 0, g = g.offsetParent
                    } while (g);
                    return {top: I, left: C}
                }
            }, G = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"], F = {
                container: "body",
                duration: 500,
                easing: "ease",
                offset: 0,
                force: !0,
                cancelable: !0,
                onStart: !1,
                onDone: !1,
                onCancel: !1,
                x: !1,
                y: !0
            };

            function X(g) {
                F = I({}, F, g)
            }

            var W = function () {
                var I, C, t, A, e, n, i, a, s, l, c, o, r, u, d, b, B, h, X, W, V, Q, y, v, R = function (g) {
                    i && (W = g, X = !0)
                };

                function f(g) {
                    var I = g.scrollTop;
                    return "body" === g.tagName.toLowerCase() && (I = I || document.documentElement.scrollTop), I
                }

                function N(g) {
                    var I = g.scrollLeft;
                    return "body" === g.tagName.toLowerCase() && (I = I || document.documentElement.scrollLeft), I
                }

                function k(g) {
                    if (X) return Y();
                    Q || (Q = g), y = g - Q, v = Math.min(y / t, 1), v = V(v), x(C, d + h * v, r + B * v), y < t ? window.requestAnimationFrame(k) : Y()
                }

                function Y() {
                    X || x(C, b, u), Q = !1, Z.off(C, G, R), X && l && l(W, I), !X && s && s(I)
                }

                function x(g, I, C) {
                    o && (g.scrollTop = I), c && (g.scrollLeft = C), "body" === g.tagName.toLowerCase() && (o && (document.documentElement.scrollTop = I), c && (document.documentElement.scrollLeft = C))
                }

                function w(Q, y) {
                    var v = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if ("object" === g(y) ? v = y : "number" == typeof y && (v.duration = y), !(I = Z.$(Q))) return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + Q);
                    C = Z.$(v.container || F.container), t = v.duration || F.duration, A = v.easing || F.easing, e = v.offset || F.offset, n = v.hasOwnProperty("force") ? !1 !== v.force : F.force, i = v.hasOwnProperty("cancelable") ? !1 !== v.cancelable : F.cancelable, a = v.onStart || F.onStart, s = v.onDone || F.onDone, l = v.onCancel || F.onCancel, c = void 0 === v.x ? F.x : v.x, o = void 0 === v.y ? F.y : v.y;
                    var Y = Z.cumulativeOffset(C), x = Z.cumulativeOffset(I);
                    if ("function" == typeof e && (e = e()), d = f(C), b = x.top - Y.top + e, r = N(C), u = x.left - Y.left + e, X = !1, h = b - d, B = u - r, !n) {
                        var w = d, U = w + C.offsetHeight, H = b, S = H + I.offsetHeight;
                        if (H >= w && S <= U) return void s(I)
                    }
                    return "string" == typeof A && (A = m[A] || m.ease), V = p.apply(p, A), h || B ? (a && a(I), Z.on(C, G, R, {passive: !0}), window.requestAnimationFrame(k), function () {
                        W = null, X = !0
                    }) : void 0
                }

                return w
            }, V = W(), Q = [];

            function y(g) {
                for (var I = 0; I < Q.length; ++I) if (Q[I].el === g) return Q.splice(I, 1), !0;
                return !1
            }

            function v(g) {
                for (var I = 0; I < Q.length; ++I) if (Q[I].el === g) return Q[I]
            }

            function R(g) {
                var I = v(g);
                return I || (Q.push(I = {el: g, binding: {}}), I)
            }

            function f(g) {
                g.preventDefault();
                var I = R(this).binding;
                if ("string" == typeof I.value) return V(I.value);
                V(I.value.el || I.value.element, I.value)
            }

            var N = {
                bind: function (g, I) {
                    R(g).binding = I, Z.on(g, "click", f)
                }, unbind: function (g) {
                    y(g), Z.off(g, "click", f)
                }, update: function (g, I) {
                    R(g).binding = I
                }, scrollTo: V, bindings: Q
            }, k = function (g, I) {
                I && X(I), g.directive("scroll-to", N), g.prototype.$scrollTo = N.scrollTo
            };
            return "undefined" != typeof window && window.Vue && (window.VueScrollTo = N, window.VueScrollTo.setDefaults = X, window.Vue.use(k)), N.install = k, N
        }()
    }, 206: function (g, I, C) {
        "use strict";
        (function (g) {
            function t(g) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                    return typeof g
                } : function (g) {
                    return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
                }, t(g)
            }

            function A(g, I) {
                for (var C = 0; C < I.length; C++) {
                    var t = I[C];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(g, t.key, t)
                }
            }

            function e(g) {
                return function (g) {
                    if (Array.isArray(g)) {
                        for (var I = 0, C = new Array(g.length); I < g.length; I++) C[I] = g[I];
                        return C
                    }
                }(g) || function (g) {
                    if (Symbol.iterator in Object(g) || "[object Arguments]" === Object.prototype.toString.call(g)) return Array.from(g)
                }(g) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function n(g, I) {
                if (g === I) return !0;
                if ("object" === t(g)) {
                    for (var C in g) if (!n(g[C], I[C])) return !1;
                    return !0
                }
                return !1
            }

            C.d(I, "a", (function () {
                return l
            }));
            var i = function () {
                function g(I, C, t) {
                    !function (g, I) {
                        if (!(g instanceof I)) throw new TypeError("Cannot call a class as a function")
                    }(this, g), this.el = I, this.observer = null, this.frozen = !1, this.createObserver(C, t)
                }

                var I, C, t;
                return I = g, C = [{
                    key: "createObserver", value: function (g, I) {
                        var C = this;
                        if (this.observer && this.destroyObserver(), !this.frozen) {
                            var t;
                            if (this.options = "function" == typeof (t = g) ? {callback: t} : t, this.callback = function (g, I) {
                                C.options.callback(g, I), g && C.options.once && (C.frozen = !0, C.destroyObserver())
                            }, this.callback && this.options.throttle) {
                                var A = (this.options.throttleOptions || {}).leading;
                                this.callback = function (g, I) {
                                    var C, t, A,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        i = function (i) {
                                            for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) s[l - 1] = arguments[l];
                                            if (A = s, !C || i !== t) {
                                                var c = n.leading;
                                                "function" == typeof c && (c = c(i, t)), C && i === t || !c || g.apply(void 0, [i].concat(e(A))), t = i, clearTimeout(C), C = setTimeout((function () {
                                                    g.apply(void 0, [i].concat(e(A))), C = 0
                                                }), I)
                                            }
                                        };
                                    return i._clear = function () {
                                        clearTimeout(C), C = null
                                    }, i
                                }(this.callback, this.options.throttle, {
                                    leading: function (g) {
                                        return "both" === A || "visible" === A && g || "hidden" === A && !g
                                    }
                                })
                            }
                            this.oldResult = void 0, this.observer = new IntersectionObserver((function (g) {
                                var I = g[0];
                                if (g.length > 1) {
                                    var t = g.find((function (g) {
                                        return g.isIntersecting
                                    }));
                                    t && (I = t)
                                }
                                if (C.callback) {
                                    var A = I.isIntersecting && I.intersectionRatio >= C.threshold;
                                    if (A === C.oldResult) return;
                                    C.oldResult = A, C.callback(A, I)
                                }
                            }), this.options.intersection), I.context.$nextTick((function () {
                                C.observer && C.observer.observe(C.el)
                            }))
                        }
                    }
                }, {
                    key: "destroyObserver", value: function () {
                        this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null)
                    }
                }, {
                    key: "threshold", get: function () {
                        return this.options.intersection && "number" == typeof this.options.intersection.threshold ? this.options.intersection.threshold : 0
                    }
                }], C && A(I.prototype, C), t && A(I, t), g
            }();

            function a(g, I, C) {
                var t = I.value;
                if (t) if ("undefined" == typeof IntersectionObserver) console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill"); else {
                    var A = new i(g, t, C);
                    g._vue_visibilityState = A
                }
            }

            function s(g) {
                var I = g._vue_visibilityState;
                I && (I.destroyObserver(), delete g._vue_visibilityState)
            }

            var l = {
                bind: a, update: function (g, I, C) {
                    var t = I.value;
                    if (!n(t, I.oldValue)) {
                        var A = g._vue_visibilityState;
                        t ? A ? A.createObserver(t, C) : a(g, {value: t}, C) : s(g)
                    }
                }, unbind: s
            };
            var c = {
                version: "1.0.0", install: function (g) {
                    g.directive("observe-visibility", l)
                }
            }, o = null;
            "undefined" != typeof window ? o = window.Vue : void 0 !== g && (o = g.Vue), o && o.use(c)
        }).call(this, C(36))
    }, 208: function (g, I, C) {
        "use strict";
        g.exports = function (g, I) {
            return I || (I = {}), "string" != typeof (g = g && g.__esModule ? g.default : g) ? g : (/^['"].*['"]$/.test(g) && (g = g.slice(1, -1)), I.hash && (g += I.hash), /["'() \t\n]/.test(g) || I.needQuotes ? '"'.concat(g.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : g)
        }
    }, 211: function (g, I, C) {
        var t = C(341), A = C(344), e = C(356), n = C(358), i = C(359), a = C(360), s = C(187), l = C(362),
            c = Object.prototype.hasOwnProperty;
        g.exports = function (g) {
            if (null == g) return !0;
            if (i(g) && (n(g) || "string" == typeof g || "function" == typeof g.splice || a(g) || l(g) || e(g))) return !g.length;
            var I = A(g);
            if ("[object Map]" == I || "[object Set]" == I) return !g.size;
            if (s(g)) return !t(g).length;
            for (var C in g) if (c.call(g, C)) return !1;
            return !0
        }
    }, 340: function (g, I) {
        !function () {
            "use strict";
            if ("object" == typeof window) if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function () {
                    return this.intersectionRatio > 0
                }
            }); else {
                var g = function (g) {
                    for (var I = window.document, C = A(I); C;) C = A(I = C.ownerDocument);
                    return I
                }(), I = [], C = null, t = null;
                n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n._setupCrossOriginUpdater = function () {
                    return C || (C = function (g, C) {
                        t = g && C ? c(g, C) : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        }, I.forEach((function (g) {
                            g._checkForIntersections()
                        }))
                    }), C
                }, n._resetCrossOriginUpdater = function () {
                    C = null, t = null
                }, n.prototype.observe = function (g) {
                    if (!this._observationTargets.some((function (I) {
                        return I.element == g
                    }))) {
                        if (!g || 1 != g.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: g,
                            entry: null
                        }), this._monitorIntersections(g.ownerDocument), this._checkForIntersections()
                    }
                }, n.prototype.unobserve = function (g) {
                    this._observationTargets = this._observationTargets.filter((function (I) {
                        return I.element != g
                    })), this._unmonitorIntersections(g.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                }, n.prototype.disconnect = function () {
                    this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                }, n.prototype.takeRecords = function () {
                    var g = this._queuedEntries.slice();
                    return this._queuedEntries = [], g
                }, n.prototype._initThresholds = function (g) {
                    var I = g || [0];
                    return Array.isArray(I) || (I = [I]), I.sort().filter((function (g, I, C) {
                        if ("number" != typeof g || isNaN(g) || g < 0 || g > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return g !== C[I - 1]
                    }))
                }, n.prototype._parseRootMargin = function (g) {
                    var I = (g || "0px").split(/\s+/).map((function (g) {
                        var I = /^(-?\d*\.?\d+)(px|%)$/.exec(g);
                        if (!I) throw new Error("rootMargin must be specified in pixels or percent");
                        return {value: parseFloat(I[1]), unit: I[2]}
                    }));
                    return I[1] = I[1] || I[0], I[2] = I[2] || I[0], I[3] = I[3] || I[1], I
                }, n.prototype._monitorIntersections = function (I) {
                    var C = I.defaultView;
                    if (C && -1 == this._monitoringDocuments.indexOf(I)) {
                        var t = this._checkForIntersections, e = null, n = null;
                        this.POLL_INTERVAL ? e = C.setInterval(t, this.POLL_INTERVAL) : (i(C, "resize", t, !0), i(I, "scroll", t, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in C && (n = new C.MutationObserver(t)).observe(I, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })), this._monitoringDocuments.push(I), this._monitoringUnsubscribes.push((function () {
                            var g = I.defaultView;
                            g && (e && g.clearInterval(e), a(g, "resize", t, !0)), a(I, "scroll", t, !0), n && n.disconnect()
                        }));
                        var s = this.root && (this.root.ownerDocument || this.root) || g;
                        if (I != s) {
                            var l = A(I);
                            l && this._monitorIntersections(l.ownerDocument)
                        }
                    }
                }, n.prototype._unmonitorIntersections = function (I) {
                    var C = this._monitoringDocuments.indexOf(I);
                    if (-1 != C) {
                        var t = this.root && (this.root.ownerDocument || this.root) || g,
                            e = this._observationTargets.some((function (g) {
                                var C = g.element.ownerDocument;
                                if (C == I) return !0;
                                for (; C && C != t;) {
                                    var e = A(C);
                                    if ((C = e && e.ownerDocument) == I) return !0
                                }
                                return !1
                            }));
                        if (!e) {
                            var n = this._monitoringUnsubscribes[C];
                            if (this._monitoringDocuments.splice(C, 1), this._monitoringUnsubscribes.splice(C, 1), n(), I != t) {
                                var i = A(I);
                                i && this._unmonitorIntersections(i.ownerDocument)
                            }
                        }
                    }
                }, n.prototype._unmonitorAllIntersections = function () {
                    var g = this._monitoringUnsubscribes.slice(0);
                    this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                    for (var I = 0; I < g.length; I++) g[I]()
                }, n.prototype._checkForIntersections = function () {
                    if (this.root || !C || t) {
                        var g = this._rootIsInDom(),
                            I = g ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
                        this._observationTargets.forEach((function (t) {
                            var A = t.element, n = s(A), i = this._rootContainsTarget(A), a = t.entry,
                                l = g && i && this._computeTargetAndRootIntersection(A, n, I), c = null;
                            this._rootContainsTarget(A) ? C && !this.root || (c = I) : c = {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                            var o = t.entry = new e({
                                time: window.performance && performance.now && performance.now(),
                                target: A,
                                boundingClientRect: n,
                                rootBounds: c,
                                intersectionRect: l
                            });
                            a ? g && i ? this._hasCrossedThreshold(a, o) && this._queuedEntries.push(o) : a && a.isIntersecting && this._queuedEntries.push(o) : this._queuedEntries.push(o)
                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }
                }, n.prototype._computeTargetAndRootIntersection = function (I, A, e) {
                    if ("none" != window.getComputedStyle(I).display) {
                        for (var n, i, a, l, o, u, d, b, p = A, m = r(I), B = !1; !B && m;) {
                            var h = null, Z = 1 == m.nodeType ? window.getComputedStyle(m) : {};
                            if ("none" == Z.display) return null;
                            if (m == this.root || 9 == m.nodeType) if (B = !0, m == this.root || m == g) C && !this.root ? !t || 0 == t.width && 0 == t.height ? (m = null, h = null, p = null) : h = t : h = e; else {
                                var G = r(m), F = G && s(G), X = G && this._computeTargetAndRootIntersection(G, F, e);
                                F && X ? (m = G, h = c(F, X)) : (m = null, p = null)
                            } else {
                                var W = m.ownerDocument;
                                m != W.body && m != W.documentElement && "visible" != Z.overflow && (h = s(m))
                            }
                            if (h && (n = h, i = p, a = void 0, l = void 0, o = void 0, u = void 0, d = void 0, b = void 0, a = Math.max(n.top, i.top), l = Math.min(n.bottom, i.bottom), o = Math.max(n.left, i.left), u = Math.min(n.right, i.right), b = l - a, p = (d = u - o) >= 0 && b >= 0 && {
                                top: a,
                                bottom: l,
                                left: o,
                                right: u,
                                width: d,
                                height: b
                            } || null), !p) break;
                            m = m && r(m)
                        }
                        return p
                    }
                }, n.prototype._getRootRect = function () {
                    var I;
                    if (this.root && !u(this.root)) I = s(this.root); else {
                        var C = u(this.root) ? this.root : g, t = C.documentElement, A = C.body;
                        I = {
                            top: 0,
                            left: 0,
                            right: t.clientWidth || A.clientWidth,
                            width: t.clientWidth || A.clientWidth,
                            bottom: t.clientHeight || A.clientHeight,
                            height: t.clientHeight || A.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(I)
                }, n.prototype._expandRectByRootMargin = function (g) {
                    var I = this._rootMarginValues.map((function (I, C) {
                        return "px" == I.unit ? I.value : I.value * (C % 2 ? g.width : g.height) / 100
                    })), C = {top: g.top - I[0], right: g.right + I[1], bottom: g.bottom + I[2], left: g.left - I[3]};
                    return C.width = C.right - C.left, C.height = C.bottom - C.top, C
                }, n.prototype._hasCrossedThreshold = function (g, I) {
                    var C = g && g.isIntersecting ? g.intersectionRatio || 0 : -1,
                        t = I.isIntersecting ? I.intersectionRatio || 0 : -1;
                    if (C !== t) for (var A = 0; A < this.thresholds.length; A++) {
                        var e = this.thresholds[A];
                        if (e == C || e == t || e < C != e < t) return !0
                    }
                }, n.prototype._rootIsInDom = function () {
                    return !this.root || o(g, this.root)
                }, n.prototype._rootContainsTarget = function (I) {
                    var C = this.root && (this.root.ownerDocument || this.root) || g;
                    return o(C, I) && (!this.root || C == I.ownerDocument)
                }, n.prototype._registerInstance = function () {
                    I.indexOf(this) < 0 && I.push(this)
                }, n.prototype._unregisterInstance = function () {
                    var g = I.indexOf(this);
                    -1 != g && I.splice(g, 1)
                }, window.IntersectionObserver = n, window.IntersectionObserverEntry = e
            }

            function A(g) {
                try {
                    return g.defaultView && g.defaultView.frameElement || null
                } catch (I) {
                    return null
                }
            }

            function e(g) {
                this.time = g.time, this.target = g.target, this.rootBounds = l(g.rootBounds), this.boundingClientRect = l(g.boundingClientRect), this.intersectionRect = l(g.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }), this.isIntersecting = !!g.intersectionRect;
                var I = this.boundingClientRect, C = I.width * I.height, t = this.intersectionRect,
                    A = t.width * t.height;
                this.intersectionRatio = C ? Number((A / C).toFixed(4)) : this.isIntersecting ? 1 : 0
            }

            function n(g, I) {
                var C, t, A, e = I || {};
                if ("function" != typeof g) throw new Error("callback must be a function");
                if (e.root && 1 != e.root.nodeType && 9 != e.root.nodeType) throw new Error("root must be a Document or Element");
                this._checkForIntersections = (C = this._checkForIntersections.bind(this), t = this.THROTTLE_TIMEOUT, A = null, function () {
                    A || (A = setTimeout((function () {
                        C(), A = null
                    }), t))
                }), this._callback = g, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(e.rootMargin), this.thresholds = this._initThresholds(e.threshold), this.root = e.root || null, this.rootMargin = this._rootMarginValues.map((function (g) {
                    return g.value + g.unit
                })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
            }

            function i(g, I, C, t) {
                "function" == typeof g.addEventListener ? g.addEventListener(I, C, t || !1) : "function" == typeof g.attachEvent && g.attachEvent("on" + I, C)
            }

            function a(g, I, C, t) {
                "function" == typeof g.removeEventListener ? g.removeEventListener(I, C, t || !1) : "function" == typeof g.detatchEvent && g.detatchEvent("on" + I, C)
            }

            function s(g) {
                var I;
                try {
                    I = g.getBoundingClientRect()
                } catch (C) {
                }
                return I ? (I.width && I.height || (I = {
                    top: I.top,
                    right: I.right,
                    bottom: I.bottom,
                    left: I.left,
                    width: I.right - I.left,
                    height: I.bottom - I.top
                }), I) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
            }

            function l(g) {
                return !g || "x" in g ? g : {
                    top: g.top,
                    y: g.top,
                    bottom: g.bottom,
                    left: g.left,
                    x: g.left,
                    right: g.right,
                    width: g.width,
                    height: g.height
                }
            }

            function c(g, I) {
                var C = I.top - g.top, t = I.left - g.left;
                return {top: C, left: t, height: I.height, width: I.width, bottom: C + I.height, right: t + I.width}
            }

            function o(g, I) {
                for (var C = I; C;) {
                    if (C == g) return !0;
                    C = r(C)
                }
                return !1
            }

            function r(I) {
                var C = I.parentNode;
                return 9 == I.nodeType && I != g ? A(I) : (C && C.assignedSlot && (C = C.assignedSlot.parentNode), C && 11 == C.nodeType && C.host ? C.host : C)
            }

            function u(g) {
                return g && 9 === g.nodeType
            }
        }()
    }, 341: function (g, I, C) {
        var t = C(187), A = C(342), e = Object.prototype.hasOwnProperty;
        g.exports = function (g) {
            if (!t(g)) return A(g);
            var I = [];
            for (var C in Object(g)) e.call(g, C) && "constructor" != C && I.push(C);
            return I
        }
    }, 342: function (g, I, C) {
        var t = C(343)(Object.keys, Object);
        g.exports = t
    }, 343: function (g, I) {
        g.exports = function (g, I) {
            return function (C) {
                return g(I(C))
            }
        }
    }, 344: function (g, I, C) {
        var t = C(345), A = C(352), e = C(353), n = C(354), i = C(355), a = C(89), s = C(192), l = "[object Map]",
            c = "[object Promise]", o = "[object Set]", r = "[object WeakMap]", u = "[object DataView]", d = s(t),
            b = s(A), p = s(e), m = s(n), B = s(i), h = a;
        (t && h(new t(new ArrayBuffer(1))) != u || A && h(new A) != l || e && h(e.resolve()) != c || n && h(new n) != o || i && h(new i) != r) && (h = function (g) {
            var I = a(g), C = "[object Object]" == I ? g.constructor : void 0, t = C ? s(C) : "";
            if (t) switch (t) {
                case d:
                    return u;
                case b:
                    return l;
                case p:
                    return c;
                case m:
                    return o;
                case B:
                    return r
            }
            return I
        }), g.exports = h
    }, 345: function (g, I, C) {
        var t = C(63)(C(43), "DataView");
        g.exports = t
    }, 346: function (g, I, C) {
        var t = C(188), A = C(349), e = C(191), n = C(192), i = /^\[object .+?Constructor\]$/, a = Function.prototype,
            s = Object.prototype, l = a.toString, c = s.hasOwnProperty,
            o = RegExp("^" + l.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        g.exports = function (g) {
            return !(!e(g) || A(g)) && (t(g) ? o : i).test(n(g))
        }
    }, 347: function (g, I, C) {
        var t = C(189), A = Object.prototype, e = A.hasOwnProperty, n = A.toString, i = t ? t.toStringTag : void 0;
        g.exports = function (g) {
            var I = e.call(g, i), C = g[i];
            try {
                g[i] = void 0;
                var t = !0
            } catch (a) {
            }
            var A = n.call(g);
            return t && (I ? g[i] = C : delete g[i]), A
        }
    }, 348: function (g, I) {
        var C = Object.prototype.toString;
        g.exports = function (g) {
            return C.call(g)
        }
    }, 349: function (g, I, C) {
        var t, A = C(350), e = (t = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "")) ? "Symbol(src)_1." + t : "";
        g.exports = function (g) {
            return !!e && e in g
        }
    }, 350: function (g, I, C) {
        var t = C(43)["__core-js_shared__"];
        g.exports = t
    }, 351: function (g, I) {
        g.exports = function (g, I) {
            return null == g ? void 0 : g[I]
        }
    }, 352: function (g, I, C) {
        var t = C(63)(C(43), "Map");
        g.exports = t
    }, 353: function (g, I, C) {
        var t = C(63)(C(43), "Promise");
        g.exports = t
    }, 354: function (g, I, C) {
        var t = C(63)(C(43), "Set");
        g.exports = t
    }, 355: function (g, I, C) {
        var t = C(63)(C(43), "WeakMap");
        g.exports = t
    }, 356: function (g, I, C) {
        var t = C(357), A = C(117), e = Object.prototype, n = e.hasOwnProperty, i = e.propertyIsEnumerable,
            a = t(function () {
                return arguments
            }()) ? t : function (g) {
                return A(g) && n.call(g, "callee") && !i.call(g, "callee")
            };
        g.exports = a
    }, 357: function (g, I, C) {
        var t = C(89), A = C(117);
        g.exports = function (g) {
            return A(g) && "[object Arguments]" == t(g)
        }
    }, 358: function (g, I) {
        var C = Array.isArray;
        g.exports = C
    }, 359: function (g, I, C) {
        var t = C(188), A = C(193);
        g.exports = function (g) {
            return null != g && A(g.length) && !t(g)
        }
    }, 360: function (g, I, C) {
        (function (g) {
            var t = C(43), A = C(361), e = I && !I.nodeType && I,
                n = e && "object" == typeof g && g && !g.nodeType && g, i = n && n.exports === e ? t.Buffer : void 0,
                a = (i ? i.isBuffer : void 0) || A;
            g.exports = a
        }).call(this, C(150)(g))
    }, 361: function (g, I) {
        g.exports = function () {
            return !1
        }
    }, 362: function (g, I, C) {
        var t = C(363), A = C(364), e = C(365), n = e && e.isTypedArray, i = n ? A(n) : t;
        g.exports = i
    }, 363: function (g, I, C) {
        var t = C(89), A = C(193), e = C(117), n = {};
        n["[object Float32Array]"] = n["[object Float64Array]"] = n["[object Int8Array]"] = n["[object Int16Array]"] = n["[object Int32Array]"] = n["[object Uint8Array]"] = n["[object Uint8ClampedArray]"] = n["[object Uint16Array]"] = n["[object Uint32Array]"] = !0, n["[object Arguments]"] = n["[object Array]"] = n["[object ArrayBuffer]"] = n["[object Boolean]"] = n["[object DataView]"] = n["[object Date]"] = n["[object Error]"] = n["[object Function]"] = n["[object Map]"] = n["[object Number]"] = n["[object Object]"] = n["[object RegExp]"] = n["[object Set]"] = n["[object String]"] = n["[object WeakMap]"] = !1, g.exports = function (g) {
            return e(g) && A(g.length) && !!n[t(g)]
        }
    }, 364: function (g, I) {
        g.exports = function (g) {
            return function (I) {
                return g(I)
            }
        }
    }, 365: function (g, I, C) {
        (function (g) {
            var t = C(190), A = I && !I.nodeType && I, e = A && "object" == typeof g && g && !g.nodeType && g,
                n = e && e.exports === A && t.process, i = function () {
                    try {
                        var g = e && e.require && e.require("util").types;
                        return g || n && n.binding && n.binding("util")
                    } catch (I) {
                    }
                }();
            g.exports = i
        }).call(this, C(150)(g))
    }, 366: function (g, I) {
        g.exports = function (g) {
            return g.replace(/[A-Z]/g, (function (g) {
                return "-" + g.toLowerCase()
            })).toLowerCase()
        }
    }, 367: function (module, exports) {
        !function (g) {
            var I = {};

            function C(t) {
                if (I[t]) return I[t].exports;
                var A = I[t] = {i: t, l: !1, exports: {}};
                return g[t].call(A.exports, A, A.exports, C), A.l = !0, A.exports
            }

            C.m = g, C.c = I, C.d = function (g, I, t) {
                C.o(g, I) || Object.defineProperty(g, I, {configurable: !1, enumerable: !0, get: t})
            }, C.n = function (g) {
                var I = g && g.__esModule ? function () {
                    return g.default
                } : function () {
                    return g
                };
                return C.d(I, "a", I), I
            }, C.o = function (g, I) {
                return Object.prototype.hasOwnProperty.call(g, I)
            }, C.p = "/dist/", C(C.s = 4)
        }([function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* dependencyLibs/inputmask.dependencyLib.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("../global/window"), require("../global/document")) : window.dependencyLib = factory(window, document);\n}(function(window, document) {\n    function indexOf(list, elem) {\n        for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;\n        return -1;\n    }\n    function type(obj) {\n        return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[class2type.toString.call(obj)] || "object" : typeof obj;\n    }\n    function isWindow(obj) {\n        return null != obj && obj === obj.window;\n    }\n    function isArraylike(obj) {\n        var length = "length" in obj && obj.length, ltype = type(obj);\n        return "function" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj));\n    }\n    function isValidElement(elem) {\n        return elem instanceof Element;\n    }\n    function DependencyLib(elem) {\n        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (void 0 !== elem && null !== elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), \n        void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);\n    }\n    for (var class2type = {}, classTypes = "Boolean Number String Function Array Date RegExp Object Error".split(" "), nameNdx = 0; nameNdx < classTypes.length; nameNdx++) class2type["[object " + classTypes[nameNdx] + "]"] = classTypes[nameNdx].toLowerCase();\n    return DependencyLib.prototype = {\n        on: function(events, handler) {\n            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {\n                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";\n                !function(ev, namespace) {\n                    elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), \n                    eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], \n                    eventRegistry[ev][namespace].push(handler);\n                }(ev, namespace);\n            }\n            return this;\n        },\n        off: function(events, handler) {\n            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) for (var nsEvent = _events[endx].split("."), offEvents = function(ev, namespace) {\n                var hndx, hndL, evts = [];\n                if (ev.length > 0) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({\n                    ev: ev,\n                    namespace: namespace && namespace.length > 0 ? namespace : "global",\n                    handler: eventRegistry[ev][namespace][hndx]\n                }); else evts.push({\n                    ev: ev,\n                    namespace: namespace && namespace.length > 0 ? namespace : "global",\n                    handler: handler\n                }); else if (namespace.length > 0) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, \n                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({\n                    ev: evNdx,\n                    namespace: nmsp,\n                    handler: eventRegistry[evNdx][nmsp][hndx]\n                }); else evts.push({\n                    ev: evNdx,\n                    namespace: nmsp,\n                    handler: handler\n                });\n                return evts;\n            }(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) !function(ev, namespace, handler) {\n                if (ev in eventRegistry == 1) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), \n                "global" === namespace) for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);\n            }(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);\n            return this;\n        },\n        trigger: function(events) {\n            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [ events.type ], endx = 0; endx < _events.length; endx++) {\n                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";\n                if (void 0 !== document && "global" === namespace) {\n                    var evnt, i, params = {\n                        bubbles: !0,\n                        cancelable: !0,\n                        detail: Array.prototype.slice.call(arguments, 1)\n                    };\n                    if (document.createEvent) {\n                        try {\n                            evnt = new CustomEvent(ev, params);\n                        } catch (e) {\n                            evnt = document.createEvent("CustomEvent"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);\n                        }\n                        events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);\n                    } else evnt = document.createEventObject(), evnt.eventType = ev, events.type && DependencyLib.extend(evnt, events), \n                    elem.fireEvent("on" + evnt.eventType, evnt);\n                } else if (void 0 !== eventRegistry[ev]) if (arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]), \n                "global" === namespace) for (var nmsp in eventRegistry[ev]) for (i = 0; i < eventRegistry[ev][nmsp].length; i++) eventRegistry[ev][nmsp][i].apply(elem, arguments); else for (i = 0; i < eventRegistry[ev][namespace].length; i++) eventRegistry[ev][namespace][i].apply(elem, arguments);\n            }\n            return this;\n        }\n    }, DependencyLib.isFunction = function(obj) {\n        return "function" === type(obj);\n    }, DependencyLib.noop = function() {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function(elem, arr, i) {\n        return null == arr ? -1 : indexOf(arr, elem);\n    }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function(obj) {\n        return "object" === type(obj) && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !class2type.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));\n    }, DependencyLib.extend = function() {\n        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;\n        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, \n        i++), "object" == typeof target || DependencyLib.isFunction(target) || (target = {}), \n        i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], \n        copy = options[name], target !== copy && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, \n        clone = src && DependencyLib.isArray(src) ? src : []) : clone = src && DependencyLib.isPlainObject(src) ? src : {}, \n        target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));\n        return target;\n    }, DependencyLib.each = function(obj, callback) {\n        var i = 0;\n        if (isArraylike(obj)) for (var length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++) ; else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;\n        return obj;\n    }, DependencyLib.map = function(elems, callback) {\n        var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];\n        if (isArray) for (;i < length; i++) null != (value = callback(elems[i], i)) && ret.push(value); else for (i in elems) null != (value = callback(elems[i], i)) && ret.push(value);\n        return [].concat(ret);\n    }, DependencyLib.data = function(owner, key, value) {\n        if (void 0 === value) return owner.__data ? owner.__data[key] : null;\n        owner.__data = owner.__data || {}, owner.__data[key] = value;\n    }, "function" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function(event, params) {\n        params = params || {\n            bubbles: !1,\n            cancelable: !1,\n            detail: void 0\n        };\n        var evt = document.createEvent("CustomEvent");\n        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), \n        evt;\n    }, DependencyLib.Event.prototype = window.Event.prototype), DependencyLib;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliLmpzPzczMWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQSw0QkFBNEIsdUdBQXVHLDZCQUE2QjtBQUNoSztBQUNBO0FBQ0EsK0lBQStJLHVCQUF1QjtBQUN0SztBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtJQUErSSx1QkFBdUI7QUFDdEs7QUFDQSxxSEFBcUgsYUFBYTtBQUNsSTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQix5REFBeUQsYUFBYTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhLCtEQUErRCxnQkFBZ0I7QUFDNUY7QUFDQSx3SkFBd0o7QUFDeEosYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkxBQTZMLHVCQUF1QjtBQUNwTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsdUZBQXVGLG9DQUFvQyx3REFBd0QsaUJBQWlCLHlDQUF5QztBQUM3TztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLG9DQUFvQztBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxxRkFBcUY7QUFDckYsc0ZBQXNGO0FBQ3RGLDJGQUEyRjtBQUMzRiw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkRBQTJELHVEQUF1RCxPQUFPO0FBQ3pIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLFdBQVcsaUVBQWlFO0FBQ3ZHO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBkZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYi5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cbiFmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwiLi4vZ2xvYmFsL3dpbmRvd1wiLCBcIi4uL2dsb2JhbC9kb2N1bWVudFwiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi4vZ2xvYmFsL3dpbmRvd1wiKSwgcmVxdWlyZShcIi4uL2dsb2JhbC9kb2N1bWVudFwiKSkgOiB3aW5kb3cuZGVwZW5kZW5jeUxpYiA9IGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XG59KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgICBmdW5jdGlvbiBpbmRleE9mKGxpc3QsIGVsZW0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIGlmIChsaXN0W2ldID09PSBlbGVtKSByZXR1cm4gaTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBvYmogPyBvYmogKyBcIlwiIDogXCJvYmplY3RcIiA9PSB0eXBlb2Ygb2JqIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb2JqID8gY2xhc3MydHlwZVtjbGFzczJ0eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIiA6IHR5cGVvZiBvYmo7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgICAgICByZXR1cm4gbnVsbCAhPSBvYmogJiYgb2JqID09PSBvYmoud2luZG93O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0FycmF5bGlrZShvYmopIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsIGx0eXBlID0gdHlwZShvYmopO1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiICE9PSBsdHlwZSAmJiAhaXNXaW5kb3cob2JqKSAmJiAoISgxICE9PSBvYmoubm9kZVR5cGUgfHwgIWxlbmd0aCkgfHwgKFwiYXJyYXlcIiA9PT0gbHR5cGUgfHwgMCA9PT0gbGVuZ3RoIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIGxlbmd0aCAmJiBsZW5ndGggPiAwICYmIGxlbmd0aCAtIDEgaW4gb2JqKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBEZXBlbmRlbmN5TGliKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gZWxlbSA6IHRoaXMgaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gdm9pZCAodm9pZCAwICE9PSBlbGVtICYmIG51bGwgIT09IGVsZW0gJiYgZWxlbSAhPT0gd2luZG93ICYmICh0aGlzWzBdID0gZWxlbS5ub2RlTmFtZSA/IGVsZW0gOiB2b2lkIDAgIT09IGVsZW1bMF0gJiYgZWxlbVswXS5ub2RlTmFtZSA/IGVsZW1bMF0gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pLCBcbiAgICAgICAgdm9pZCAwICE9PSB0aGlzWzBdICYmIG51bGwgIT09IHRoaXNbMF0gJiYgKHRoaXNbMF0uZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSB8fCB7fSkpKSA6IG5ldyBEZXBlbmRlbmN5TGliKGVsZW0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBjbGFzczJ0eXBlID0ge30sIGNsYXNzVHlwZXMgPSBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIG5hbWVOZHggPSAwOyBuYW1lTmR4IDwgY2xhc3NUeXBlcy5sZW5ndGg7IG5hbWVOZHgrKykgY2xhc3MydHlwZVtcIltvYmplY3QgXCIgKyBjbGFzc1R5cGVzW25hbWVOZHhdICsgXCJdXCJdID0gY2xhc3NUeXBlc1tuYW1lTmR4XS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBEZXBlbmRlbmN5TGliLnByb3RvdHlwZSA9IHtcbiAgICAgICAgb246IGZ1bmN0aW9uKGV2ZW50cywgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHRoaXNbMF0pKSBmb3IgKHZhciBldmVudFJlZ2lzdHJ5ID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5LCBlbGVtID0gdGhpc1swXSwgX2V2ZW50cyA9IGV2ZW50cy5zcGxpdChcIiBcIiksIGVuZHggPSAwOyBlbmR4IDwgX2V2ZW50cy5sZW5ndGg7IGVuZHgrKykge1xuICAgICAgICAgICAgICAgIHZhciBuc0V2ZW50ID0gX2V2ZW50c1tlbmR4XS5zcGxpdChcIi5cIiksIGV2ID0gbnNFdmVudFswXSwgbmFtZXNwYWNlID0gbnNFdmVudFsxXSB8fCBcImdsb2JhbFwiO1xuICAgICAgICAgICAgICAgICFmdW5jdGlvbihldiwgbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciA/IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldiwgaGFuZGxlciwgITEpIDogZWxlbS5hdHRhY2hFdmVudCAmJiBlbGVtLmF0dGFjaEV2ZW50KFwib25cIiArIGV2LCBoYW5kbGVyKSwgXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50UmVnaXN0cnlbZXZdID0gZXZlbnRSZWdpc3RyeVtldl0gfHwge30sIGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV0gPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdIHx8IFtdLCBcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRSZWdpc3RyeVtldl1bbmFtZXNwYWNlXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH0oZXYsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmOiBmdW5jdGlvbihldmVudHMsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSkgZm9yICh2YXIgZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgZWxlbSA9IHRoaXNbMF0sIF9ldmVudHMgPSBldmVudHMuc3BsaXQoXCIgXCIpLCBlbmR4ID0gMDsgZW5keCA8IF9ldmVudHMubGVuZ3RoOyBlbmR4KyspIGZvciAodmFyIG5zRXZlbnQgPSBfZXZlbnRzW2VuZHhdLnNwbGl0KFwiLlwiKSwgb2ZmRXZlbnRzID0gZnVuY3Rpb24oZXYsIG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIHZhciBobmR4LCBobmRMLCBldnRzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGV2Lmxlbmd0aCA+IDApIGlmICh2b2lkIDAgPT09IGhhbmRsZXIpIGZvciAoaG5keCA9IDAsIGhuZEwgPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSAmJiBuYW1lc3BhY2UubGVuZ3RoID4gMCA/IG5hbWVzcGFjZSA6IFwiZ2xvYmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV1baG5keF1cbiAgICAgICAgICAgICAgICB9KTsgZWxzZSBldnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBldjogZXYsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlICYmIG5hbWVzcGFjZS5sZW5ndGggPiAwID8gbmFtZXNwYWNlIDogXCJnbG9iYWxcIixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgICAgICAgICAgICAgIH0pOyBlbHNlIGlmIChuYW1lc3BhY2UubGVuZ3RoID4gMCkgZm9yICh2YXIgZXZOZHggaW4gZXZlbnRSZWdpc3RyeSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2TmR4XSkgaWYgKG5tc3AgPT09IG5hbWVzcGFjZSkgaWYgKHZvaWQgMCA9PT0gaGFuZGxlcikgZm9yIChobmR4ID0gMCwgXG4gICAgICAgICAgICAgICAgaG5kTCA9IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdW2huZHhdXG4gICAgICAgICAgICAgICAgfSk7IGVsc2UgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZ0cztcbiAgICAgICAgICAgIH0obnNFdmVudFswXSwgbnNFdmVudFsxXSksIGkgPSAwLCBvZmZFdmVudHNMID0gb2ZmRXZlbnRzLmxlbmd0aDsgaSA8IG9mZkV2ZW50c0w7IGkrKykgIWZ1bmN0aW9uKGV2LCBuYW1lc3BhY2UsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgaW4gZXZlbnRSZWdpc3RyeSA9PSAxKSBpZiAoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyID8gZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2LCBoYW5kbGVyLCAhMSkgOiBlbGVtLmRldGFjaEV2ZW50ICYmIGVsZW0uZGV0YWNoRXZlbnQoXCJvblwiICsgZXYsIGhhbmRsZXIpLCBcbiAgICAgICAgICAgICAgICBcImdsb2JhbFwiID09PSBuYW1lc3BhY2UpIGZvciAodmFyIG5tc3AgaW4gZXZlbnRSZWdpc3RyeVtldl0pIGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLnNwbGljZShldmVudFJlZ2lzdHJ5W2V2XVtubXNwXS5pbmRleE9mKGhhbmRsZXIpLCAxKTsgZWxzZSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLnNwbGljZShldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgICAgfShvZmZFdmVudHNbaV0uZXYsIG9mZkV2ZW50c1tpXS5uYW1lc3BhY2UsIG9mZkV2ZW50c1tpXS5oYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSkgZm9yICh2YXIgZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgZWxlbSA9IHRoaXNbMF0sIF9ldmVudHMgPSBcInN0cmluZ1wiID09IHR5cGVvZiBldmVudHMgPyBldmVudHMuc3BsaXQoXCIgXCIpIDogWyBldmVudHMudHlwZSBdLCBlbmR4ID0gMDsgZW5keCA8IF9ldmVudHMubGVuZ3RoOyBlbmR4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbnNFdmVudCA9IF9ldmVudHNbZW5keF0uc3BsaXQoXCIuXCIpLCBldiA9IG5zRXZlbnRbMF0sIG5hbWVzcGFjZSA9IG5zRXZlbnRbMV0gfHwgXCJnbG9iYWxcIjtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkb2N1bWVudCAmJiBcImdsb2JhbFwiID09PSBuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2bnQsIGksIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2bnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXYsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIiksIGV2bnQuaW5pdEN1c3RvbUV2ZW50KGV2LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnR5cGUgJiYgRGVwZW5kZW5jeUxpYi5leHRlbmQoZXZudCwgZXZlbnRzKSwgZWxlbS5kaXNwYXRjaEV2ZW50KGV2bnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCksIGV2bnQuZXZlbnRUeXBlID0gZXYsIGV2ZW50cy50eXBlICYmIERlcGVuZGVuY3lMaWIuZXh0ZW5kKGV2bnQsIGV2ZW50cyksIFxuICAgICAgICAgICAgICAgICAgICBlbGVtLmZpcmVFdmVudChcIm9uXCIgKyBldm50LmV2ZW50VHlwZSwgZXZudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IGV2ZW50UmVnaXN0cnlbZXZdKSBpZiAoYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdLnR5cGUgPyBhcmd1bWVudHNbMF0gOiBEZXBlbmRlbmN5TGliLkV2ZW50KGFyZ3VtZW50c1swXSksIFxuICAgICAgICAgICAgICAgIFwiZ2xvYmFsXCIgPT09IG5hbWVzcGFjZSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2XSkgZm9yIChpID0gMDsgaSA8IGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtubXNwXVtpXS5hcHBseShlbGVtLCBhcmd1bWVudHMpOyBlbHNlIGZvciAoaSA9IDA7IGkgPCBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdW2ldLmFwcGx5KGVsZW0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIERlcGVuZGVuY3lMaWIuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09PSB0eXBlKG9iaik7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5ub29wID0gZnVuY3Rpb24oKSB7fSwgRGVwZW5kZW5jeUxpYi5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSwgRGVwZW5kZW5jeUxpYi5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbSwgYXJyLCBpKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGFyciA/IC0xIDogaW5kZXhPZihhcnIsIGVsZW0pO1xuICAgIH0sIERlcGVuZGVuY3lMaWIudmFsSG9va3MgPSB2b2lkIDAsIERlcGVuZGVuY3lMaWIuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gXCJvYmplY3RcIiA9PT0gdHlwZShvYmopICYmICFvYmoubm9kZVR5cGUgJiYgIWlzV2luZG93KG9iaikgJiYgIShvYmouY29uc3RydWN0b3IgJiYgIWNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCBcImlzUHJvdG90eXBlT2ZcIikpO1xuICAgIH0sIERlcGVuZGVuY3lMaWIuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSwgdGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LCBpID0gMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCwgZGVlcCA9ICExO1xuICAgICAgICBmb3IgKFwiYm9vbGVhblwiID09IHR5cGVvZiB0YXJnZXQgJiYgKGRlZXAgPSB0YXJnZXQsIHRhcmdldCA9IGFyZ3VtZW50c1tpXSB8fCB7fSwgXG4gICAgICAgIGkrKyksIFwib2JqZWN0XCIgPT0gdHlwZW9mIHRhcmdldCB8fCBEZXBlbmRlbmN5TGliLmlzRnVuY3Rpb24odGFyZ2V0KSB8fCAodGFyZ2V0ID0ge30pLCBcbiAgICAgICAgaSA9PT0gbGVuZ3RoICYmICh0YXJnZXQgPSB0aGlzLCBpLS0pOyBpIDwgbGVuZ3RoOyBpKyspIGlmIChudWxsICE9IChvcHRpb25zID0gYXJndW1lbnRzW2ldKSkgZm9yIChuYW1lIGluIG9wdGlvbnMpIHNyYyA9IHRhcmdldFtuYW1lXSwgXG4gICAgICAgIGNvcHkgPSBvcHRpb25zW25hbWVdLCB0YXJnZXQgIT09IGNvcHkgJiYgKGRlZXAgJiYgY29weSAmJiAoRGVwZW5kZW5jeUxpYi5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IERlcGVuZGVuY3lMaWIuaXNBcnJheShjb3B5KSkpID8gKGNvcHlJc0FycmF5ID8gKGNvcHlJc0FycmF5ID0gITEsIFxuICAgICAgICBjbG9uZSA9IHNyYyAmJiBEZXBlbmRlbmN5TGliLmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdKSA6IGNsb25lID0gc3JjICYmIERlcGVuZGVuY3lMaWIuaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge30sIFxuICAgICAgICB0YXJnZXRbbmFtZV0gPSBEZXBlbmRlbmN5TGliLmV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkpIDogdm9pZCAwICE9PSBjb3B5ICYmICh0YXJnZXRbbmFtZV0gPSBjb3B5KSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5lYWNoID0gZnVuY3Rpb24ob2JqLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGlmIChpc0FycmF5bGlrZShvYmopKSBmb3IgKHZhciBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoICYmICExICE9PSBjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKTsgaSsrKSA7IGVsc2UgZm9yIChpIGluIG9iaikgaWYgKCExID09PSBjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSkgYnJlYWs7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5tYXAgPSBmdW5jdGlvbihlbGVtcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHZhbHVlLCBpID0gMCwgbGVuZ3RoID0gZWxlbXMubGVuZ3RoLCBpc0FycmF5ID0gaXNBcnJheWxpa2UoZWxlbXMpLCByZXQgPSBbXTtcbiAgICAgICAgaWYgKGlzQXJyYXkpIGZvciAoO2kgPCBsZW5ndGg7IGkrKykgbnVsbCAhPSAodmFsdWUgPSBjYWxsYmFjayhlbGVtc1tpXSwgaSkpICYmIHJldC5wdXNoKHZhbHVlKTsgZWxzZSBmb3IgKGkgaW4gZWxlbXMpIG51bGwgIT0gKHZhbHVlID0gY2FsbGJhY2soZWxlbXNbaV0sIGkpKSAmJiByZXQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQocmV0KTtcbiAgICB9LCBEZXBlbmRlbmN5TGliLmRhdGEgPSBmdW5jdGlvbihvd25lciwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB2YWx1ZSkgcmV0dXJuIG93bmVyLl9fZGF0YSA/IG93bmVyLl9fZGF0YVtrZXldIDogbnVsbDtcbiAgICAgICAgb3duZXIuX19kYXRhID0gb3duZXIuX19kYXRhIHx8IHt9LCBvd25lci5fX2RhdGFba2V5XSA9IHZhbHVlO1xuICAgIH0sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID8gRGVwZW5kZW5jeUxpYi5FdmVudCA9IHdpbmRvdy5DdXN0b21FdmVudCA6IChEZXBlbmRlbmN5TGliLkV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICAgICAgYnViYmxlczogITEsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiAhMSxcbiAgICAgICAgICAgIGRldGFpbDogdm9pZCAwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICByZXR1cm4gZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKSwgXG4gICAgICAgIGV2dDtcbiAgICB9LCBEZXBlbmRlbmN5TGliLkV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGUpLCBEZXBlbmRlbmN5TGliO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')
        }, function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window"), require("./global/document")) : window.Inputmask = factory(window.dependencyLib || jQuery, window, document);\n}(function($, window, document, undefined) {\n    function Inputmask(alias, options, internal) {\n        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);\n        this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, \n        !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, \n        options.alias = alias), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, \n        this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));\n    }\n    function resolveAlias(aliasStr, options, opts) {\n        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];\n        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), \n        $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), \n        !1);\n    }\n    function generateMaskSet(opts, nocache) {\n        function generateMask(mask, metadata, opts) {\n            var regexMask = !1;\n            if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, regexMask ? (mask = opts.regex, \n            mask = mask.replace(/^(\\^)(.*)(\\$)$/, "$2")) : (regexMask = !0, mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), \n            opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {\n                var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;\n                mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;\n            }\n            var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;\n            return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {\n                mask: mask,\n                maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),\n                validPositions: {},\n                _buffer: undefined,\n                buffer: undefined,\n                tests: {},\n                metadata: metadata,\n                maskLength: undefined\n            }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, \n            masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), \n            masksetDefinition;\n        }\n        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {\n            if (opts.mask.length > 1) {\n                opts.keepStatic = null === opts.keepStatic || opts.keepStatic;\n                var altMask = opts.groupmarker.start;\n                return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {\n                    altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start), \n                    msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;\n                }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);\n            }\n            opts.mask = opts.mask.pop();\n        }\n        return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);\n    }\n    function maskScope(actionObj, maskset, opts) {\n        function getMaskTemplate(baseOnInput, minimalPos, includeMode) {\n            minimalPos = minimalPos || 0;\n            var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();\n            do {\n                !0 === baseOnInput && getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], \n                test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), \n                test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), \n                pos++;\n            } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);\n            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1, \n            maskTemplate;\n        }\n        function getMaskSet() {\n            return maskset;\n        }\n        function resetMaskSet(soft) {\n            var maskset = getMaskSet();\n            maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);\n        }\n        function getLastValidPosition(closestTo, strict, validPositions) {\n            var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;\n            closestTo === undefined && (closestTo = -1);\n            for (var posNdx in valids) {\n                var psNdx = parseInt(posNdx);\n                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), \n                psNdx >= closestTo && (after = psNdx));\n            }\n            return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;\n        }\n        function stripValidPositions(start, end, nocheck, strict) {\n            var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;\n            for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function(pos) {\n                var posMatch = getMaskSet().validPositions[pos];\n                if (posMatch !== undefined && null === posMatch.match.fn) {\n                    var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];\n                    return prevMatch !== undefined && nextMatch !== undefined;\n                }\n                return !1;\n            }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts)) || delete getMaskSet().validPositions[i]);\n            for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition(); ) {\n                for (;getMaskSet().validPositions[startPos] !== undefined; ) startPos++;\n                if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {\n                    var t = getTestTemplate(i);\n                    !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), \n                    getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], \n                    i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], \n                    i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;\n                }\n            }\n            resetMaskSet(!0);\n        }\n        function determineTestTemplate(tests, guessNextBest) {\n            for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (testPos = testPositions[ndx], \n            !(testPos.match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation || testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;\n            return testPos;\n        }\n        function getTestTemplate(pos, ndxIntlzr, tstPs) {\n            return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));\n        }\n        function getTest(pos) {\n            return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];\n        }\n        function positionCanMatchDefinition(pos, def) {\n            for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {\n                valid = !0;\n                break;\n            }\n            return valid;\n        }\n        function getTests(pos, ndxIntlzr, tstPs) {\n            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {\n                function handleMatch(match, loopNdx, quantifierRecurse) {\n                    function isFirstMatch(latestMatch, tokenGroup) {\n                        var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);\n                        return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {\n                            if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;\n                        }), firstMatch;\n                    }\n                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {\n                        var bestMatch, indexPos;\n                        if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) for (var vpAlternation = getMaskSet().validPositions[pos - 1].locator, tpAlternation = getMaskSet().tests[pos][0].locator, i = 0; i < targetAlternation; i++) if (vpAlternation[i] !== tpAlternation[i]) return vpAlternation.slice(targetAlternation + 1);\n                        return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {\n                            var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;\n                            (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, \n                            indexPos = ndxPos);\n                        }), bestMatch ? bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) : targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;\n                    }\n                    if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;\n                    if (testPos === pos && match.matches === undefined) return matches.push({\n                        match: match,\n                        locator: loopNdx.reverse(),\n                        cd: cacheDependency\n                    }), !0;\n                    if (match.matches !== undefined) {\n                        if (match.isGroup && quantifierRecurse !== match) {\n                            if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;\n                        } else if (match.isOptional) {\n                            var optionalToken = match;\n                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {\n                                if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;\n                                insertStop = !0, testPos = pos;\n                            }\n                        } else if (match.isAlternator) {\n                            var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;\n                            if (-1 === altIndex || "string" == typeof altIndex) {\n                                var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];\n                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);\n                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {\n                                    if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), \n                                    !0 !== (match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) || match) && match !== undefined && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {\n                                        var ntndx = $.inArray(match, maskToken.matches) + 1;\n                                        maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ ntndx ].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse)) && (altIndexArr.push(ntndx.toString()), \n                                        $.each(matches, function(ndx, lmnt) {\n                                            lmnt.alternation = loopNdx.length - 1;\n                                        }));\n                                    }\n                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];\n                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {\n                                        var altMatch = maltMatches[ndx1], dropMatch = !1;\n                                        altMatch.alternation = altMatch.alternation || loopNdxCnt;\n                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {\n                                            var altMatch2 = malternateMatches[ndx2];\n                                            if ("string" != typeof altIndex || -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {\n                                                if (function(source, target) {\n                                                    return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;\n                                                }(altMatch, altMatch2)) {\n                                                    dropMatch = !0, altMatch.alternation === altMatch2.alternation && -1 === altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation], \n                                                    altMatch2.alternation = altMatch.alternation), altMatch.match.nativeDef === altMatch2.match.def && (altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation], \n                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch));\n                                                    break;\n                                                }\n                                                if (altMatch.match.def === altMatch2.match.def) {\n                                                    dropMatch = !1;\n                                                    break;\n                                                }\n                                                if (function(source, target) {\n                                                    return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);\n                                                }(altMatch, altMatch2) || function(source, target) {\n                                                    return null !== source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def.replace(/[\\[\\]]/g, ""), getMaskSet(), pos, !1, opts, !1);\n                                                }(altMatch, altMatch2)) {\n                                                    altMatch.alternation === altMatch2.alternation && -1 === altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), \n                                                    -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0]), \n                                                    dropMatch = !0, altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split("")[0] + "," + altMatch.locator[altMatch.alternation], \n                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));\n                                                    break;\n                                                }\n                                            }\n                                        }\n                                        dropMatch || malternateMatches.push(altMatch);\n                                    }\n                                }\n                                "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function(lmnt, ndx) {\n                                    if (isFinite(ndx)) {\n                                        var alternation = lmnt.alternation, altLocArr = lmnt.locator[alternation].toString().split(",");\n                                        lmnt.locator[alternation] = undefined, lmnt.alternation = undefined;\n                                        for (var alndx = 0; alndx < altLocArr.length; alndx++) -1 !== $.inArray(altLocArr[alndx], altIndexArr) && (lmnt.locator[alternation] !== undefined ? (lmnt.locator[alternation] += ",", \n                                        lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), \n                                        lmnt.alternation = alternation);\n                                        if (lmnt.locator[alternation] !== undefined) return lmnt;\n                                    }\n                                })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, \n                                match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();\n                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);\n                            if (match) return !0;\n                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {\n                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];\n                            if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup)) {\n                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, \n                                isFirstMatch(latestMatch, tokenGroup)) {\n                                    if (qndx > qt.quantifier.min - 1) {\n                                        insertStop = !0, testPos = pos;\n                                        break;\n                                    }\n                                    return !0;\n                                }\n                                return !0;\n                            }\n                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;\n                    } else testPos++;\n                }\n                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {\n                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);\n                    if (match && testPos === pos) return match;\n                    if (testPos > pos) break;\n                }\n            }\n            function filterTests(tests) {\n                if (opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && !0 !== tests[0].match.optionality && !0 !== tests[0].match.optionalQuantifier && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {\n                    if (getMaskSet().validPositions[pos - 1] === undefined) return [ determineTestTemplate(tests) ];\n                    if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) return [ determineTestTemplate(tests) ];\n                    if (getMaskSet().validPositions[pos - 1]) return [ determineTestTemplate(tests) ];\n                }\n                return tests;\n            }\n            var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";\n            if (pos > -1) {\n                if (ndxIntlzr === undefined) {\n                    for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1; ) previousPos--;\n                    test !== undefined && previousPos > -1 && (ndxInitializer = function(tests) {\n                        var locator = [];\n                        return $.isArray(tests) || (tests = [ tests ]), tests.length > 0 && (tests[0].alternation === undefined ? (locator = determineTestTemplate(tests.slice()).locator.slice(), \n                        0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function(ndx, tst) {\n                            if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);\n                        })), locator;\n                    }(test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);\n                }\n                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);\n                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {\n                    if (resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]) && testPos === pos || testPos > pos) break;\n                }\n            }\n            return (0 === matches.length || insertStop) && matches.push({\n                match: {\n                    fn: null,\n                    cardinality: 0,\n                    optionality: !0,\n                    casing: null,\n                    def: "",\n                    placeholder: ""\n                },\n                locator: [],\n                cd: cacheDependency\n            }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), \n            filterTests(getMaskSet().tests[pos]));\n        }\n        function getBufferTemplate() {\n            return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), \n            getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), \n            getMaskSet()._buffer;\n        }\n        function getBuffer(noCache) {\n            return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), \n            getMaskSet().buffer;\n        }\n        function refreshFromBuffer(start, end, buffer) {\n            var i, p;\n            if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];\n            for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {\n                var valResult = isValid(p, buffer[i], !0, !0);\n                !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);\n            }\n        }\n        function casing(elem, test, pos) {\n            switch (opts.casing || test.casing) {\n              case "upper":\n                elem = elem.toUpperCase();\n                break;\n\n              case "lower":\n                elem = elem.toLowerCase();\n                break;\n\n              case "title":\n                var posBefore = getMaskSet().validPositions[pos - 1];\n                elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();\n                break;\n\n              default:\n                if ($.isFunction(opts.casing)) {\n                    var args = Array.prototype.slice.call(arguments);\n                    args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);\n                }\n            }\n            return elem;\n        }\n        function checkAlternationMatch(altArr1, altArr2, na) {\n            for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);\n            for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {\n                isMatch = !0;\n                break;\n            }\n            return isMatch;\n        }\n        function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {\n            function isSelection(posObj) {\n                var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;\n                return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;\n            }\n            function _isValid(position, c, strict) {\n                var rslt = !1;\n                return $.each(getTests(position), function(ndx, tst) {\n                    for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));\n                    if (c && (chrs += c), getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {\n                        c: getPlaceholder(position, test, !0) || test.def,\n                        pos: position\n                    })) {\n                        var elem = rslt.c !== undefined ? rslt.c : c;\n                        elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;\n                        var validatedPos = position, possibleModifiedBuffer = getBuffer();\n                        if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [ rslt.remove ]), \n                        $.each(rslt.remove.sort(function(a, b) {\n                            return b - a;\n                        }), function(ndx, lmnt) {\n                            stripValidPositions(lmnt, lmnt + 1, !0);\n                        })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [ rslt.insert ]), \n                        $.each(rslt.insert.sort(function(a, b) {\n                            return a - b;\n                        }), function(ndx, lmnt) {\n                            isValid(lmnt.pos, lmnt.c, !0, fromSetValid);\n                        })), rslt.refreshFromBuffer) {\n                            var refresh = rslt.refreshFromBuffer;\n                            if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), \n                            rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), \n                            !1;\n                            if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), \n                            !1;\n                        } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, \n                        refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), \n                        !1;\n                        return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), \n                        setValidPosition(validatedPos, $.extend({}, tst, {\n                            input: casing(elem, test, validatedPos)\n                        }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);\n                    }\n                }), rslt;\n            }\n            function setValidPosition(pos, validTest, fromSetValid, isSelection) {\n                if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {\n                    var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, !0);\n                    for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];\n                    getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);\n                    var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;\n                    for (i = j = pos; i <= lvp; i++) {\n                        var t = positionsClone[i];\n                        if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn); ) {\n                            if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), \n                            getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), \n                            j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {\n                                var result = isValid(posMatch, t.input, !0, !0);\n                                valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, \n                                needsValidation = !0;\n                            } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;\n                            if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), \n                            valid) break;\n                        }\n                        if (!valid) break;\n                    }\n                    if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), \n                    resetMaskSet(!0), !1;\n                } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);\n                return resetMaskSet(!0), !0;\n            }\n            function fillMissingNonMask(maskPos) {\n                for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;\n                var testTemplate, testsFromPos;\n                for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice(), \n                "" === testsFromPos[testsFromPos.length - 1].match.def && testsFromPos.pop(), (testTemplate = determineTestTemplate(testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));\n            }\n            strict = !0 === strict;\n            var maskPos = pos;\n            pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);\n            var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);\n            if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), \n            !0 === result) {\n                if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), \n                maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), \n                (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {\n                    var currentPosValid = getMaskSet().validPositions[maskPos];\n                    if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {\n                        if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {\n                            !function(originalPos, newPos) {\n                                var vp = getMaskSet().validPositions[newPos];\n                                if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {\n                                    var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0), equality = -1;\n                                    "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function(ndx, tst) {\n                                        for (var i = 0; i < tll; i++) {\n                                            if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {\n                                                var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];\n                                                targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);\n                                                break;\n                                            }\n                                            equality < i && (equality = i, bestMatch = tst);\n                                        }\n                                    }), bestMatch = $.extend({}, bestMatch, {\n                                        input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def\n                                    }), bestMatch.generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, \n                                    _isValid(newPos, vp.input, !0);\n                                }\n                            }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;\n                            break;\n                        }\n                    } else result = {\n                        caret: seekNext(maskPos)\n                    };\n                }\n                !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = function(pos, c, strict) {\n                    var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1, lAltPos = getLastValidPosition();\n                    for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {\n                        if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, \n                        prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;\n                        prevAltPos = altPos;\n                    }\n                    if (alternation !== undefined) {\n                        decisionPos = parseInt(lastAlt);\n                        var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];\n                        decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);\n                        var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];\n                        $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function(ndx, test) {\n                            altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];\n                            for (var mndx = 0; mndx < altNdxs.length; mndx++) {\n                                var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0, verifyValidInput = !1;\n                                if (decisionTaker < altNdxs[mndx] && (test.na === undefined || -1 === $.inArray(altNdxs[mndx], test.na.split(",")) || -1 === $.inArray(decisionTaker.toString(), altNdxs))) {\n                                    getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);\n                                    var possibilities = getMaskSet().validPositions[decisionPos].locator;\n                                    for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]), \n                                    null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0, \n                                    !0 !== possibilityPos.generatedInput && validInputs.push(possibilityPos.input)), \n                                    staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def), \n                                    getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input, \n                                    i = decisionPos + 1; i < getLastValidPosition(undefined, !0) + 1; i++) validPos = getMaskSet().validPositions[i], \n                                    validPos && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++, \n                                    delete getMaskSet().validPositions[i];\n                                    for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(), \n                                    resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0; ) {\n                                        var input = validInputs.shift();\n                                        if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;\n                                    }\n                                    if (isValidRslt) {\n                                        getMaskSet().validPositions[decisionPos].locator = possibilities;\n                                        var targetLvp = getLastValidPosition(pos) + 1;\n                                        for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;\n                                        pos += staticInputsBeforePosAlternate - staticInputsBeforePos, isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);\n                                    }\n                                    if (isValidRslt) return !1;\n                                    resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);\n                                }\n                            }\n                        });\n                    }\n                    return isValidRslt;\n                }(maskPos, c, strict)), !0 === result && (result = {\n                    pos: maskPos\n                });\n            }\n            if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {\n                var postResult = opts.postValidation(getBuffer(!0), result, opts);\n                if (postResult.refreshFromBuffer && postResult.buffer) {\n                    var refresh = postResult.refreshFromBuffer;\n                    refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);\n                }\n                result = !0 === postResult ? result : postResult;\n            }\n            return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), \n            getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;\n        }\n        function isMask(pos, strict) {\n            var test = getTestTemplate(pos).match;\n            if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;\n            if (!0 !== strict && pos > -1) {\n                var tests = getTests(pos);\n                return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);\n            }\n            return !1;\n        }\n        function seekNext(pos, newBlock) {\n            var maskL = getMaskSet().maskLength;\n            if (pos >= maskL) return maskL;\n            var position = pos;\n            for (getTests(maskL + 1).length > 1 && (getMaskTemplate(!0, maskL + 1, !0), maskL = getMaskSet().maskLength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position)); ) ;\n            return position;\n        }\n        function seekPrevious(pos, newBlock) {\n            var tests, position = pos;\n            if (position <= 0) return 0;\n            for (;--position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && (tests = getTests(position), \n            tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;\n            return position;\n        }\n        function getBufferElement(position) {\n            return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;\n        }\n        function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {\n            if (event && $.isFunction(opts.onBeforeWrite)) {\n                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);\n                if (result) {\n                    if (result.refreshFromBuffer) {\n                        var refresh = result.refreshFromBuffer;\n                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), \n                        buffer = getBuffer(!0);\n                    }\n                    caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);\n                }\n            }\n            input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : android && event && "input" === event.type ? setTimeout(function() {\n                caret(input, caretPos);\n            }, 0) : caret(input, caretPos), !0 === triggerInputEvent && (skipInputEvent = !0, \n            $(input).trigger("input")));\n        }\n        function getPlaceholder(pos, test, returnPL) {\n            if (test = test || getTest(pos).match, test.placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;\n            if (null === test.fn) {\n                if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {\n                    var prevTest, tests = getTests(pos), staticAlternations = [];\n                    if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), \n                    null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);\n                }\n                return test.def;\n            }\n            return opts.placeholder.charAt(pos % opts.placeholder.length);\n        }\n        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {\n            function isTemplateMatch(ndx, charCodes) {\n                return -1 !== getBufferTemplate().slice(ndx, seekNext(ndx)).join("").indexOf(charCodes) && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);\n            }\n            var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;\n            if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {\n                var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));\n                matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), \n                initialNdx = seekNext(initialNdx));\n            }\n            if (-1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, \n            $.each(inputValue, function(ndx, charCode) {\n                if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {\n                    var keypress = new $.Event("_checkval");\n                    keypress.which = charCode.charCodeAt(0), charCodes += charCode;\n                    var lvp = getLastValidPosition(undefined, !0), lvTest = getMaskSet().validPositions[lvp], nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);\n                    if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {\n                        var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;\n                        result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos), \n                        initialNdx = pos + 1, charCodes = "";\n                    } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);\n                    if (!1 !== result && !strict && $.isFunction(opts.onBeforeWrite)) {\n                        var origResult = result;\n                        if (result = opts.onBeforeWrite.call(inputmask, keypress, getBuffer(), result.forwardPosition, opts), \n                        (result = $.extend(origResult, result)) && result.refreshFromBuffer) {\n                            var refresh = result.refreshFromBuffer;\n                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer), \n                            resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret, result.forwardPosition = result.caret);\n                        }\n                    }\n                }\n            }), writeOut) {\n                var caretPos = undefined;\n                document.activeElement === input && result && (caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition), \n                writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);\n            }\n        }\n        function unmaskedvalue(input) {\n            if (input) {\n                if (input.inputmask === undefined) return input.value;\n                input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);\n            }\n            var umValue = [], vps = getMaskSet().validPositions;\n            for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);\n            var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");\n            if ($.isFunction(opts.onUnMask)) {\n                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");\n                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);\n            }\n            return unmaskedValue;\n        }\n        function caret(input, begin, end, notranslate) {\n            function translatePosition(pos) {\n                if (!0 !== notranslate && isRTL && "number" == typeof pos && (!opts.greedy || "" !== opts.placeholder)) {\n                    pos = getBuffer().join("").length - pos;\n                }\n                return pos;\n            }\n            var range;\n            if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, \n            end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), \n            range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, \n            end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), \n            begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), \n            end = begin + range.text.length), {\n                begin: translatePosition(begin),\n                end: translatePosition(end)\n            };\n            if (begin.begin !== undefined && (end = begin.end, begin = begin.begin), "number" == typeof begin) {\n                begin = translatePosition(begin), end = translatePosition(end), end = "number" == typeof end ? end : begin;\n                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;\n                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || !1 !== opts.insertMode || begin !== end || end++, \n                input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {\n                    if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {\n                        var textNode = document.createTextNode("");\n                        input.appendChild(textNode);\n                    }\n                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), \n                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), \n                    range.collapse(!0);\n                    var sel = window.getSelection();\n                    sel.removeAllRanges(), sel.addRange(range);\n                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), \n                range.moveEnd("character", end), range.moveStart("character", begin), range.select());\n                renderColorMask(input, {\n                    begin: begin,\n                    end: end\n                });\n            }\n        }\n        function determineLastRequiredPosition(returnDefinition) {\n            var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;\n            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), \n            ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);\n            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;\n            for (pos = bl - 1; pos > lvp && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;\n            return returnDefinition ? {\n                l: bl,\n                def: positions[bl] ? positions[bl].match : undefined\n            } : bl;\n        }\n        function clearOptionalTail(buffer) {\n            for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && "" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def); ) rl++;\n            for (;(validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter; ) rl--;\n            return buffer.splice(rl), buffer;\n        }\n        function isComplete(buffer) {\n            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);\n            if ("*" === opts.repeat) return undefined;\n            var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);\n            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {\n                complete = !0;\n                for (var i = 0; i <= aml; i++) {\n                    var test = getTestTemplate(i).match;\n                    if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {\n                        complete = !1;\n                        break;\n                    }\n                }\n            }\n            return complete;\n        }\n        function handleRemove(input, k, pos, strict, fromIsValid) {\n            if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), \n            isRTL)) {\n                var pend = pos.end;\n                pos.end = pos.begin, pos.begin = pend;\n            }\n            k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), \n            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, \n            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), \n            stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && function() {\n                if (opts.keepStatic) {\n                    for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {\n                        var altPos = getMaskSet().validPositions[lastAlt];\n                        if (altPos) {\n                            if (!0 !== altPos.generatedInput && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input), \n                            delete getMaskSet().validPositions[lastAlt], altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;\n                            prevAltPos = altPos;\n                        }\n                    }\n                    if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0; ) {\n                        var keypress = new $.Event("keypress");\n                        keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);\n                    } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);\n                }\n            }();\n            var lvp = getLastValidPosition(pos.begin, !0);\n            if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, \n            !0 !== fromIsValid)) for (;getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined; ) getMaskSet().p++;\n        }\n        function initializeColorMask(input) {\n            function findCaretPos(clientx) {\n                var caretPos, e = document.createElement("span");\n                for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);\n                e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, \n                e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", \n                e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);\n                var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;\n                for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {\n                    if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {\n                        var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;\n                        e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;\n                        break;\n                    }\n                    previousWidth = e.offsetWidth;\n                }\n                return document.body.removeChild(e), caretPos;\n            }\n            var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null), template = document.createElement("div");\n            template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, \n            colorMask = document.createElement("div"), colorMask.className = "im-colormask", \n            input.parentNode.insertBefore(colorMask, input), input.parentNode.removeChild(input), \n            colorMask.appendChild(template), colorMask.appendChild(input), input.style.left = template.offsetLeft + "px", \n            $(input).on("click", function(e) {\n                return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [ e ]);\n            }), $(input).on("keydown", function(e) {\n                e.shiftKey || !1 === opts.insertMode || setTimeout(function() {\n                    renderColorMask(input);\n                }, 0);\n            });\n        }\n        function renderColorMask(input, caretPos, clear) {\n            function handleStatic() {\n                isStatic || null !== test.fn && testPos.input !== undefined ? isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def) && (isStatic = !1, \n                maskTemplate += "</span>") : (isStatic = !0, maskTemplate += "<span class=\'im-static\'>");\n            }\n            function handleCaret(force) {\n                !0 !== force && pos !== caretPos.begin || document.activeElement !== input || (maskTemplate += "<span class=\'im-caret\' style=\'border-right-width: 1px;border-right-style: solid;\'></span>");\n            }\n            var test, testPos, ndxIntlzr, maskTemplate = "", isStatic = !1, pos = 0;\n            if (colorMask !== undefined) {\n                var buffer = getBuffer();\n                if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {\n                    begin: caretPos,\n                    end: caretPos\n                }), !0 !== clear) {\n                    var lvp = getLastValidPosition();\n                    do {\n                        handleCaret(), getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], \n                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += buffer[pos]) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), \n                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(), \n                        maskTemplate += getPlaceholder(pos, test))), pos++;\n                    } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);\n                    -1 === maskTemplate.indexOf("im-caret") && handleCaret(!0), isStatic && handleStatic();\n                }\n                var template = colorMask.getElementsByTagName("div")[0];\n                template.innerHTML = maskTemplate, input.inputmask.positionColorMask(input, template);\n            }\n        }\n        maskset = maskset || this.maskset, opts = opts || this.opts;\n        var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {\n            on: function(input, eventName, eventHandler) {\n                var ev = function(e) {\n                    if (this.inputmask === undefined && "FORM" !== this.nodeName) {\n                        var imOpts = $.data(this, "_inputmask_opts");\n                        imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);\n                    } else {\n                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {\n                            switch (e.type) {\n                              case "input":\n                                if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();\n                                break;\n\n                              case "keydown":\n                                skipKeyPressEvent = !1, skipInputEvent = !1;\n                                break;\n\n                              case "keypress":\n                                if (!0 === skipKeyPressEvent) return e.preventDefault();\n                                skipKeyPressEvent = !0;\n                                break;\n\n                              case "click":\n                                if (iemobile || iphone) {\n                                    var that = this, args = arguments;\n                                    return setTimeout(function() {\n                                        eventHandler.apply(that, args);\n                                    }, 0), !1;\n                                }\n                            }\n                            var returnVal = eventHandler.apply(this, arguments);\n                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;\n                        }\n                        e.preventDefault();\n                    }\n                };\n                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), \n                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);\n            },\n            off: function(input, event) {\n                if (input.inputmask && input.inputmask.events) {\n                    var events;\n                    event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, \n                    $.each(events, function(eventName, evArr) {\n                        for (;evArr.length > 0; ) {\n                            var ev = evArr.pop();\n                            -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);\n                        }\n                        delete input.inputmask.events[eventName];\n                    });\n                }\n            }\n        }, EventHandlers = {\n            keydownEvent: function(e) {\n                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);\n                if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !function(eventName) {\n                    var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;\n                    return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), \n                    el = null, isSupported;\n                }("cut")) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")), \n                input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(getBuffer()) && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {\n                    e.preventDefault();\n                    var caretPos = seekNext(getLastValidPosition());\n                    opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, \n                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);\n                } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), \n                caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), \n                $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), \n                pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), \n                pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), \n                pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function() {\n                    var caretPos = caret(input);\n                    caret(input, caretPos.begin);\n                }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {\n                    var caretPos = caret(input);\n                    caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);\n                }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));\n                opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);\n            },\n            keypressEvent: function(e, checkval, writeOut, strict, ndx) {\n                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;\n                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), \n                setTimeout(function() {\n                    $input.trigger("change");\n                }, 0)), !0;\n                if (k) {\n                    46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));\n                    var forwardPosition, pos = checkval ? {\n                        begin: ndx,\n                        end: ndx\n                    } : caret(input), c = String.fromCharCode(k);\n                    getMaskSet().writeOutBuffer = !0;\n                    var valResult = isValid(pos, c, strict);\n                    if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos), \n                    getMaskSet().p = forwardPosition), !1 !== writeOut && (setTimeout(function() {\n                        opts.onKeyValidation.call(input, k, valResult, opts);\n                    }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {\n                        var buffer = getBuffer();\n                        writeBuffer(input, buffer, opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, e, !0 !== checkval), \n                        !0 !== checkval && setTimeout(function() {\n                            !0 === isComplete(buffer) && $input.trigger("complete");\n                        }, 0);\n                    }\n                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), \n                    valResult;\n                }\n            },\n            pasteEvent: function(e) {\n                var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);\n                isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);\n                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);\n                if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), \n                valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), \n                isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), \n                window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {\n                    if (!ev.clipboardData || !ev.clipboardData.getData) return !0;\n                    inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;\n                }\n                var pasteValue = inputValue;\n                if ($.isFunction(opts.onBeforePaste)) {\n                    if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();\n                    pasteValue || (pasteValue = inputValue);\n                }\n                return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")), \n                writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), \n                !0 === isComplete(getBuffer()) && $input.trigger("complete"), e.preventDefault();\n            },\n            inputFallBackEvent: function(e) {\n                var input = this, inputValue = input.inputmask._valueGet();\n                if (getBuffer().join("") !== inputValue) {\n                    var caretPos = caret(input);\n                    if (!1 === function(input, inputValue, caretPos) {\n                        if ("." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && (inputValue = inputValue.split(""), \n                        inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0), inputValue = inputValue.join("")), \n                        inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {\n                            var keypress = new $.Event("keypress");\n                            return keypress.which = opts.radixPoint.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, caretPos.begin - 1), \n                            !1;\n                        }\n                    }(input, inputValue, caretPos)) return !1;\n                    if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""), \n                    !1 === function(input, inputValue, caretPos) {\n                        if (iemobile) {\n                            var inputChar = inputValue.replace(getBuffer().join(""), "");\n                            if (1 === inputChar.length) {\n                                var keypress = new $.Event("keypress");\n                                return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), \n                                !1;\n                            }\n                        }\n                    }(input, inputValue, caretPos)) return !1;\n                    caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input));\n                    var buffer = getBuffer().join(""), frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin), backBufferPart = buffer.substr(caretPos.begin), selection = caretPos, entries = "", isEntry = !1;\n                    if (frontPart !== frontBufferPart) {\n                        selection.begin = 0;\n                        for (var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) selection.begin++;\n                        isEntry && (entries += frontPart.slice(selection.begin, selection.end));\n                    }\n                    backPart !== backBufferPart && (backPart.length > backBufferPart.length ? isEntry && (selection.end = selection.begin) : backPart.length < backBufferPart.length ? selection.end += backBufferPart.length - backPart.length : backPart.charAt(0) !== backBufferPart.charAt(0) && selection.end++), \n                    writeBuffer(input, getBuffer(), selection), entries.length > 0 ? $.each(entries.split(""), function(ndx, entry) {\n                        var keypress = new $.Event("keypress");\n                        keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);\n                    }) : (selection.begin === selection.end - 1 && caret(input, seekPrevious(selection.begin + 1), selection.end), \n                    e.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, e)), \n                    e.preventDefault();\n                }\n            },\n            setValueEvent: function(e) {\n                this.inputmask.refreshValue = !1;\n                var input = this, value = input.inputmask._valueGet(!0);\n                $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), \n                value = value.split(""), checkVal(input, !0, !1, isRTL ? value.reverse() : value), \n                undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");\n            },\n            focusEvent: function(e) {\n                var input = this, nptValue = input.inputmask._valueGet();\n                opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), \n                !0 === opts.positionCaretOnTab && !1 === mouseEnter && "" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), \n                EventHandlers.clickEvent.apply(input, [ e, !0 ])), undoValue = getBuffer().join("");\n            },\n            mouseleaveEvent: function(e) {\n                var input = this;\n                if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {\n                    var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();\n                    nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), \n                    writeBuffer(input, buffer));\n                }\n            },\n            clickEvent: function(e, tabbed) {\n                function doRadixFocus(clickPos) {\n                    if ("" !== opts.radixPoint) {\n                        var vps = getMaskSet().validPositions;\n                        if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {\n                            if (clickPos < seekNext(-1)) return !0;\n                            var radixPos = $.inArray(opts.radixPoint, getBuffer());\n                            if (-1 !== radixPos) {\n                                for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;\n                                return !0;\n                            }\n                        }\n                    }\n                    return !1;\n                }\n                var input = this;\n                setTimeout(function() {\n                    if (document.activeElement === input) {\n                        var selectedCaret = caret(input);\n                        if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), \n                        selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {\n                          case "none":\n                            break;\n\n                          case "radixFocus":\n                            if (doRadixFocus(selectedCaret.begin)) {\n                                var radixPos = getBuffer().join("").indexOf(opts.radixPoint);\n                                caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);\n                                break;\n                            }\n\n                          default:\n                            var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);\n                            if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {\n                                var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);\n                                if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {\n                                    var newPos = seekNext(lastPosition);\n                                    (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);\n                                }\n                                caret(input, lastPosition);\n                            }\n                        }\n                    }\n                }, 0);\n            },\n            dblclickEvent: function(e) {\n                var input = this;\n                setTimeout(function() {\n                    caret(input, 0, seekNext(getLastValidPosition()));\n                }, 0);\n            },\n            cutEvent: function(e) {\n                var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);\n                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), \n                document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos), \n                writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")), \n                input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");\n            },\n            blurEvent: function(e) {\n                var $input = $(this), input = this;\n                if (input.inputmask) {\n                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();\n                    "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), \n                    !1 === isComplete(buffer) && (setTimeout(function() {\n                        $input.trigger("incomplete");\n                    }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), \n                    writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), \n                    $input.trigger("change"));\n                }\n            },\n            mouseenterEvent: function(e) {\n                var input = this;\n                mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());\n            },\n            submitEvent: function(e) {\n                undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), \n                opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), \n                setTimeout(function() {\n                    writeBuffer(el, getBuffer());\n                }, 0));\n            },\n            resetEvent: function(e) {\n                el.inputmask.refreshValue = !0, setTimeout(function() {\n                    $el.trigger("setvalue");\n                }, 0);\n            }\n        };\n        Inputmask.prototype.positionColorMask = function(input, template) {\n            input.style.left = template.offsetLeft + "px";\n        };\n        var valueBuffer;\n        if (actionObj !== undefined) switch (actionObj.action) {\n          case "isComplete":\n            return el = actionObj.el, isComplete(getBuffer());\n\n          case "unmaskedvalue":\n            return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, \n            valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(""), \n            checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), \n            unmaskedvalue(el);\n\n          case "mask":\n            !function(elem) {\n                EventRuler.off(elem);\n                var isSupported = function(input, opts) {\n                    var elementType = input.getAttribute("type"), isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;\n                    if (!isSupported) if ("INPUT" === input.tagName) {\n                        var el = document.createElement("input");\n                        el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;\n                    } else isSupported = "partial";\n                    return !1 !== isSupported ? function(npt) {\n                        function getter() {\n                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);\n                        }\n                        function setter(value) {\n                            valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");\n                        }\n                        var valueGet, valueSet;\n                        if (!npt.inputmask.__valueGet) {\n                            if (!0 !== opts.noValuePatching) {\n                                if (Object.getOwnPropertyDescriptor) {\n                                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(object) {\n                                        return object.__proto__;\n                                    } : function(object) {\n                                        return object.constructor.prototype;\n                                    });\n                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;\n                                    valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, \n                                    valueSet = valueProperty.set, Object.defineProperty(npt, "value", {\n                                        get: getter,\n                                        set: setter,\n                                        configurable: !0\n                                    })) : "INPUT" !== npt.tagName && (valueGet = function() {\n                                        return this.textContent;\n                                    }, valueSet = function(value) {\n                                        this.textContent = value;\n                                    }, Object.defineProperty(npt, "value", {\n                                        get: getter,\n                                        set: setter,\n                                        configurable: !0\n                                    }));\n                                } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), \n                                valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), \n                                npt.__defineSetter__("value", setter));\n                                npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;\n                            }\n                            npt.inputmask._valueGet = function(overruleRTL) {\n                                return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);\n                            }, npt.inputmask._valueSet = function(value, overruleRTL) {\n                                valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);\n                            }, valueGet === undefined && (valueGet = function() {\n                                return this.value;\n                            }, valueSet = function(value) {\n                                this.value = value;\n                            }, function(type) {\n                                if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {\n                                    var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {\n                                        return elem.value;\n                                    }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {\n                                        return elem.value = value, elem;\n                                    };\n                                    $.valHooks[type] = {\n                                        get: function(elem) {\n                                            if (elem.inputmask) {\n                                                if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();\n                                                var result = valhookGet(elem);\n                                                return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";\n                                            }\n                                            return valhookGet(elem);\n                                        },\n                                        set: function(elem, value) {\n                                            var result, $elem = $(elem);\n                                            return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"), \n                                            result;\n                                        },\n                                        inputmaskpatch: !0\n                                    };\n                                }\n                            }(npt.type), function(npt) {\n                                EventRuler.on(npt, "mouseenter", function(event) {\n                                    var $input = $(this);\n                                    this.inputmask._valueGet() !== getBuffer().join("") && $input.trigger("setvalue");\n                                });\n                            }(npt));\n                        }\n                    }(input) : input.inputmask = undefined, isSupported;\n                }(elem, opts);\n                if (!1 !== isSupported && (el = elem, $el = $(el), maxLength = el !== undefined ? el.maxLength : undefined, \n                -1 === maxLength && (maxLength = undefined), !0 === opts.colorMask && initializeColorMask(el), \n                android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), \n                "rtfm" === opts.androidHack && (!0 !== opts.colorMask && initializeColorMask(el), \n                el.type = "password")), !0 === isSupported && (EventRuler.on(el, "submit", EventHandlers.submitEvent), \n                EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), \n                EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), \n                EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, "click", EventHandlers.clickEvent), \n                EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), \n                EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent), \n                EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), \n                EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), \n                android || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), \n                EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop), \n                EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop), \n                EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), \n                EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), \n                undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {\n                    var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);\n                    "" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split("").reverse() : initialValue.split(""));\n                    var buffer = getBuffer().slice();\n                    undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), \n                    opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), \n                    writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));\n                }\n            }(el);\n            break;\n\n          case "format":\n            return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(""), \n            checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {\n                value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),\n                metadata: maskScope.call(this, {\n                    action: "getmetadata"\n                }, maskset, opts)\n            } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");\n\n          case "isValid":\n            actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");\n            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;\n            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");\n\n          case "getemptymask":\n            return getBufferTemplate().join("");\n\n          case "remove":\n            if (el && el.inputmask) {\n                $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), \n                EventRuler.off(el);\n                Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {\n                    get: el.inputmask.__valueGet,\n                    set: el.inputmask.__valueSet,\n                    configurable: !0\n                }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), \n                el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined;\n            }\n            return el;\n\n          case "getmetadata":\n            if ($.isArray(maskset.metadata)) {\n                var maskTarget = getMaskTemplate(!0, 0, !1).join("");\n                return $.each(maskset.metadata, function(ndx, mtdt) {\n                    if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;\n                }), maskTarget;\n            }\n            return maskset.metadata;\n        }\n    }\n    var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;\n    return Inputmask.prototype = {\n        dataAttribute: "data-inputmask",\n        defaults: {\n            placeholder: "_",\n            optionalmarker: {\n                start: "[",\n                end: "]"\n            },\n            quantifiermarker: {\n                start: "{",\n                end: "}"\n            },\n            groupmarker: {\n                start: "(",\n                end: ")"\n            },\n            alternatormarker: "|",\n            escapeChar: "\\\\",\n            mask: null,\n            regex: null,\n            oncomplete: $.noop,\n            onincomplete: $.noop,\n            oncleared: $.noop,\n            repeat: 0,\n            greedy: !0,\n            autoUnmask: !1,\n            removeMaskOnSubmit: !1,\n            clearMaskOnLostFocus: !0,\n            insertMode: !0,\n            clearIncomplete: !1,\n            alias: null,\n            onKeyDown: $.noop,\n            onBeforeMask: null,\n            onBeforePaste: function(pastedValue, opts) {\n                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;\n            },\n            onBeforeWrite: null,\n            onUnMask: null,\n            showMaskOnFocus: !0,\n            showMaskOnHover: !0,\n            onKeyValidation: $.noop,\n            skipOptionalPartCharacter: " ",\n            numericInput: !1,\n            rightAlign: !1,\n            undoOnEscape: !0,\n            radixPoint: "",\n            radixPointDefinitionSymbol: undefined,\n            groupSeparator: "",\n            keepStatic: null,\n            positionCaretOnTab: !0,\n            tabThrough: !1,\n            supportsInputType: [ "text", "tel", "password" ],\n            ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],\n            isComplete: null,\n            canClearPosition: $.noop,\n            preValidation: null,\n            postValidation: null,\n            staticDefinitionSymbol: undefined,\n            jitMasking: !1,\n            nullable: !0,\n            inputEventOnly: !1,\n            noValuePatching: !1,\n            positionCaretOnClick: "lvp",\n            casing: null,\n            inputmode: "verbatim",\n            colorMask: !1,\n            androidHack: !1,\n            importDataAttributes: !0\n        },\n        definitions: {\n            "9": {\n                validator: "[0-9\\uff11-\\uff19]",\n                cardinality: 1,\n                definitionSymbol: "*"\n            },\n            a: {\n                validator: "[A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",\n                cardinality: 1,\n                definitionSymbol: "*"\n            },\n            "*": {\n                validator: "[0-9\\uff11-\\uff19A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",\n                cardinality: 1\n            }\n        },\n        aliases: {},\n        masksCache: {},\n        mask: function(elems) {\n            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {\n                function importOption(option, optionData) {\n                    null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), \n                    userOptions[option] = optionData);\n                }\n                if (!0 === opts.importDataAttributes) {\n                    var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);\n                    if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("\'", "g"), \'"\'), \n                    dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {\n                        optionData = undefined;\n                        for (p in dataoptions) if ("alias" === p.toLowerCase()) {\n                            optionData = dataoptions[p];\n                            break;\n                        }\n                    }\n                    importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);\n                    for (option in opts) {\n                        if (dataoptions) {\n                            optionData = undefined;\n                            for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {\n                                optionData = dataoptions[p];\n                                break;\n                            }\n                        }\n                        importOption(option, optionData);\n                    }\n                }\n                return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), \n                ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), \n                opts.isRTL = !0), opts;\n            }\n            var that = this;\n            return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), \n            elems = elems.nodeName ? [ elems ] : elems, $.each(elems, function(ndx, el) {\n                var scopedOpts = $.extend(!0, {}, that.opts);\n                importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);\n                var maskset = generateMaskSet(scopedOpts, that.noMasksCache);\n                maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, \n                el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), \n                el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), \n                el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, \n                el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {\n                    action: "mask"\n                }));\n            }), elems && elems[0] ? elems[0].inputmask || this : this;\n        },\n        option: function(options, noremask) {\n            return "string" == typeof options ? this.opts[options] : "object" == typeof options ? ($.extend(this.userOptions, options), \n            this.el && !0 !== noremask && this.mask(this.el), this) : void 0;\n        },\n        unmaskedvalue: function(value) {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: "unmaskedvalue",\n                value: value\n            });\n        },\n        remove: function() {\n            return maskScope.call(this, {\n                action: "remove"\n            });\n        },\n        getemptymask: function() {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: "getemptymask"\n            });\n        },\n        hasMaskedValue: function() {\n            return !this.opts.autoUnmask;\n        },\n        isComplete: function() {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: "isComplete"\n            });\n        },\n        getmetadata: function() {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: "getmetadata"\n            });\n        },\n        isValid: function(value) {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: "isValid",\n                value: value\n            });\n        },\n        format: function(value, metadata) {\n            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), \n            maskScope.call(this, {\n                action: "format",\n                value: value,\n                metadata: metadata\n            });\n        },\n        analyseMask: function(mask, regexMask, opts) {\n            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {\n                this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, \n                this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, \n                this.quantifier = {\n                    min: 1,\n                    max: 1\n                };\n            }\n            function insertTestDefinition(mtoken, element, position) {\n                position = position !== undefined ? position : mtoken.matches.length;\n                var prevMatch = mtoken.matches[position - 1];\n                if (regexMask) 0 === element.indexOf("[") || escaped && /\\\\d|\\\\s|\\\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {\n                    fn: new RegExp(element, opts.casing ? "i" : ""),\n                    cardinality: 1,\n                    optionality: mtoken.isOptional,\n                    newBlockMarker: prevMatch === undefined || prevMatch.def !== element,\n                    casing: null,\n                    def: element,\n                    placeholder: undefined,\n                    nativeDef: element\n                }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function(ndx, lmnt) {\n                    prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {\n                        fn: null,\n                        cardinality: 0,\n                        optionality: mtoken.isOptional,\n                        newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,\n                        casing: null,\n                        def: opts.staticDefinitionSymbol || lmnt,\n                        placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,\n                        nativeDef: lmnt\n                    });\n                })), escaped = !1; else {\n                    var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];\n                    if (maskdef && !escaped) {\n                        for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {\n                            var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;\n                            mtoken.matches.splice(position++, 0, {\n                                fn: validator ? "string" == typeof validator ? new RegExp(validator, opts.casing ? "i" : "") : new function() {\n                                    this.test = validator;\n                                }() : new RegExp("."),\n                                cardinality: cardinality || 1,\n                                optionality: mtoken.isOptional,\n                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),\n                                casing: maskdef.casing,\n                                def: maskdef.definitionSymbol || element,\n                                placeholder: maskdef.placeholder,\n                                nativeDef: element\n                            }), prevMatch = mtoken.matches[position - 1];\n                        }\n                        mtoken.matches.splice(position++, 0, {\n                            fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {\n                                this.test = maskdef.validator;\n                            }() : new RegExp("."),\n                            cardinality: maskdef.cardinality,\n                            optionality: mtoken.isOptional,\n                            newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),\n                            casing: maskdef.casing,\n                            def: maskdef.definitionSymbol || element,\n                            placeholder: maskdef.placeholder,\n                            nativeDef: element\n                        });\n                    } else mtoken.matches.splice(position++, 0, {\n                        fn: null,\n                        cardinality: 0,\n                        optionality: mtoken.isOptional,\n                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,\n                        casing: null,\n                        def: opts.staticDefinitionSymbol || element,\n                        placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,\n                        nativeDef: element\n                    }), escaped = !1;\n                }\n            }\n            function verifyGroupMarker(maskToken) {\n                maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {\n                    var nextToken = maskToken.matches[ndx + 1];\n                    (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, \n                    regexMask || (insertTestDefinition(token, opts.groupmarker.start, 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker.end))), \n                    verifyGroupMarker(token);\n                });\n            }\n            function defaultCase() {\n                if (openenings.length > 0) {\n                    if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), \n                    currentOpeningToken.isAlternator) {\n                        alternator = openenings.pop();\n                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;\n                        openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], \n                        currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);\n                    }\n                } else insertTestDefinition(currentToken, m);\n            }\n            function reverseTokens(maskToken) {\n                maskToken.matches = maskToken.matches.reverse();\n                for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {\n                    var intMatch = parseInt(match);\n                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {\n                        var qt = maskToken.matches[match];\n                        maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);\n                    }\n                    maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function(st) {\n                        return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start), \n                        st;\n                    }(maskToken.matches[match]);\n                }\n                return maskToken;\n            }\n            var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\\{[0-9\\+\\*]+(?:,[0-9\\+\\*]*)?\\})|[^.?*+^${[]()|\\\\]+|./g, regexTokenizer = /\\[\\^?]?(?:[^\\\\\\]]+|\\\\[\\S\\s]?)*]?|\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\\S\\s]?)|\\((?:\\?[:=!]?)?|(?:[?*+]|\\{[0-9]+(?:,[0-9]*)?\\})\\??|[^.?*+^${[()|\\\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];\n            for (regexMask && (opts.optionalmarker.start = undefined, opts.optionalmarker.end = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {\n                if (m = match[0], regexMask) switch (m.charAt(0)) {\n                  case "?":\n                    m = "{0,1}";\n                    break;\n\n                  case "+":\n                  case "*":\n                    m = "{" + m + "}";\n                }\n                if (escaped) defaultCase(); else switch (m.charAt(0)) {\n                  case opts.escapeChar:\n                    escaped = !0, regexMask && defaultCase();\n                    break;\n\n                  case opts.optionalmarker.end:\n                  case opts.groupmarker.end:\n                    if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {\n                        if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), \n                        currentOpeningToken.isAlternator) {\n                            alternator = openenings.pop();\n                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, \n                            alternator.matches[mndx].alternatorGroup = !1;\n                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], \n                            currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);\n                        }\n                    } else currentToken.matches.push(openingToken); else defaultCase();\n                    break;\n\n                  case opts.optionalmarker.start:\n                    openenings.push(new MaskToken(!1, !0));\n                    break;\n\n                  case opts.groupmarker.start:\n                    openenings.push(new MaskToken(!0));\n                    break;\n\n                  case opts.quantifiermarker.start:\n                    var quantifier = new MaskToken(!1, !1, !0);\n                    m = m.replace(/[{}]/g, "");\n                    var mq = m.split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);\n                    if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {\n                        min: mq0,\n                        max: mq1\n                    }, openenings.length > 0) {\n                        var matches = openenings[openenings.length - 1].matches;\n                        match = matches.pop(), match.isGroup || (groupToken = new MaskToken(!0), groupToken.matches.push(match), \n                        match = groupToken), matches.push(match), matches.push(quantifier);\n                    } else match = currentToken.matches.pop(), match.isGroup || (regexMask && null === match.fn && "." === match.def && (match.fn = new RegExp(match.def, opts.casing ? "i" : "")), \n                    groupToken = new MaskToken(!0), groupToken.matches.push(match), match = groupToken), \n                    currentToken.matches.push(match), currentToken.matches.push(quantifier);\n                    break;\n\n                  case opts.alternatormarker:\n                    if (openenings.length > 0) {\n                        currentOpeningToken = openenings[openenings.length - 1];\n                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];\n                        lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();\n                    } else lastMatch = currentToken.matches.pop();\n                    if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), \n                    lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), \n                    openenings.push(alternator), lastMatch.openGroup) {\n                        lastMatch.openGroup = !1;\n                        var alternatorGroup = new MaskToken(!0);\n                        alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);\n                    }\n                    break;\n\n                  default:\n                    defaultCase();\n                }\n            }\n            for (;openenings.length > 0; ) openingToken = openenings.pop(), currentToken.matches.push(openingToken);\n            return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), \n            (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;\n        }\n    }, Inputmask.extendDefaults = function(options) {\n        $.extend(!0, Inputmask.prototype.defaults, options);\n    }, Inputmask.extendDefinitions = function(definition) {\n        $.extend(!0, Inputmask.prototype.definitions, definition);\n    }, Inputmask.extendAliases = function(alias) {\n        $.extend(!0, Inputmask.prototype.aliases, alias);\n    }, Inputmask.format = function(value, options, metadata) {\n        return Inputmask(options).format(value, metadata);\n    }, Inputmask.unmask = function(value, options) {\n        return Inputmask(options).unmaskedvalue(value);\n    }, Inputmask.isValid = function(value, options) {\n        return Inputmask(options).isValid(value);\n    }, Inputmask.remove = function(elems) {\n        $.each(elems, function(ndx, el) {\n            el.inputmask && el.inputmask.remove();\n        });\n    }, Inputmask.escapeRegex = function(str) {\n        var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\\\", "$", "^" ];\n        return str.replace(new RegExp("(\\\\" + specials.join("|\\\\") + ")", "gim"), "\\\\$1");\n    }, Inputmask.keyCode = {\n        ALT: 18,\n        BACKSPACE: 8,\n        BACKSPACE_SAFARI: 127,\n        CAPS_LOCK: 20,\n        COMMA: 188,\n        COMMAND: 91,\n        COMMAND_LEFT: 91,\n        COMMAND_RIGHT: 93,\n        CONTROL: 17,\n        DELETE: 46,\n        DOWN: 40,\n        END: 35,\n        ENTER: 13,\n        ESCAPE: 27,\n        HOME: 36,\n        INSERT: 45,\n        LEFT: 37,\n        MENU: 93,\n        NUMPAD_ADD: 107,\n        NUMPAD_DECIMAL: 110,\n        NUMPAD_DIVIDE: 111,\n        NUMPAD_ENTER: 108,\n        NUMPAD_MULTIPLY: 106,\n        NUMPAD_SUBTRACT: 109,\n        PAGE_DOWN: 34,\n        PAGE_UP: 33,\n        PERIOD: 190,\n        RIGHT: 39,\n        SHIFT: 16,\n        SPACE: 32,\n        TAB: 9,\n        UP: 38,\n        WINDOWS: 91,\n        X: 88\n    }, Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5qcz9mMWQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDZDQUE2QztBQUM3QywrRkFBK0Y7QUFDL0YsMkRBQTJEO0FBQzNELHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYiwrQ0FBK0MscUZBQXFGO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixvREFBb0QsNkJBQTZCO0FBQ2pGLHNCQUFzQixvREFBb0Q7QUFDMUUsdUhBQXVIO0FBQ3ZIO0FBQ0EsdUxBQXVMO0FBQ3ZMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5UUFBeVE7QUFDelEsNmhCQUE2aEI7QUFDN2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxxQkFBcUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1QQUFtUCx1QkFBdUI7QUFDMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxxQkFBcUIsdUNBQXVDO0FBQy9KLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCO0FBQ2pGO0FBQ0E7QUFDQSwwREFBMEQsaUNBQWlDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDBCQUEwQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5QixxTUFBcU0sb0ZBQW9GO0FBQ2xUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSx1RkFBdUYsaUNBQWlDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELHdIQUF3SDtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxxQkFBcUIsb0JBQW9CO0FBQ2pKLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHdEQUF3RCwyQkFBMkI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLHFCQUFxQixTQUFTO0FBQzNHLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtCQUFrQjtBQUN4SywrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLGFBQWE7QUFDakg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELGlDQUFpQyxVQUFVO0FBQzNDLHNFQUFzRTtBQUN0RTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0EsbUVBQW1FLDRLQUE0SztBQUMvTyw2TUFBNk07QUFDN007QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQSxpQkFBaUIsd0RBQXdEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpREFBaUQ7QUFDN0Y7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4TEFBOEwsZUFBZTtBQUM3TTtBQUNBO0FBQ0EsMEhBQTBILGFBQWE7QUFDdkk7QUFDQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUk7QUFDbkksMkVBQTJFLGNBQWM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1QkFBdUI7QUFDckU7QUFDQTtBQUNBLDhGQUE4RjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsNkNBQTZDO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSx3QkFBd0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdDQUFnQztBQUNqRztBQUNBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakc7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBeUgseUpBQXlKO0FBQ2xSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEdBQThHLGtCQUFrQjtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFQQUFxUDtBQUNyUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esb0hBQW9IO0FBQ3BILCtCQUErQixxQkFBcUI7QUFDcEQsaUZBQWlGO0FBQ2pGO0FBQ0EsOEJBQThCLCtmQUErZjtBQUM3aEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxrSkFBa0osb1hBQW9YO0FBQ3RnQixrQkFBa0IsZ0pBQWdKO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUhBQXVILGtGQUFrRixjQUFjO0FBQ3ZOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLHdCQUF3QjtBQUMzSDtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdFQUFnRTtBQUNoRSx1Q0FBdUMsa0ZBQWtGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxpQkFBaUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzS0FBc0ssMEJBQTBCO0FBQ2hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxpQkFBaUI7QUFDakIsd0tBQXdLO0FBQ3hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SkFBNko7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSkFBaUosOERBQThEO0FBQy9NO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlMQUFpTDtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsMEdBQTBHLDRCQUE0QjtBQUN0STs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHlJQUF5STtBQUN6STtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSx3SUFBd0kseUJBQXlCO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdIQUF3SCw0QkFBNEIsV0FBVyxzRkFBc0YsSUFBSSx3Q0FBd0MsRUFBRSxjQUFjLEVBQUUsK0NBQStDLG9CQUFvQixjQUFjO0FBQ3BZLDJHQUEyRyxzRUFBc0U7QUFDakw7QUFDQTtBQUNBLDBCQUEwQixJQUFJO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtDQUFrQztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBOEM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCw2RUFBNkUsS0FBSztBQUNsRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogaW5wdXRtYXNrLmpzXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvSW5wdXRtYXNrXG4qIENvcHlyaWdodCAoYykgMjAxMCAtIDIwMTcgUm9iaW4gSGVyYm90c1xuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuKiBWZXJzaW9uOiAzLjMuOFxuKi9cblxuIWZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsgXCIuL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliXCIsIFwiLi9nbG9iYWwvd2luZG93XCIsIFwiLi9nbG9iYWwvZG9jdW1lbnRcIiBdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiksIHJlcXVpcmUoXCIuL2dsb2JhbC93aW5kb3dcIiksIHJlcXVpcmUoXCIuL2dsb2JhbC9kb2N1bWVudFwiKSkgOiB3aW5kb3cuSW5wdXRtYXNrID0gZmFjdG9yeSh3aW5kb3cuZGVwZW5kZW5jeUxpYiB8fCBqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xufShmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcbiAgICBmdW5jdGlvbiBJbnB1dG1hc2soYWxpYXMsIG9wdGlvbnMsIGludGVybmFsKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbnB1dG1hc2spKSByZXR1cm4gbmV3IElucHV0bWFzayhhbGlhcywgb3B0aW9ucywgaW50ZXJuYWwpO1xuICAgICAgICB0aGlzLmVsID0gdW5kZWZpbmVkLCB0aGlzLmV2ZW50cyA9IHt9LCB0aGlzLm1hc2tzZXQgPSB1bmRlZmluZWQsIHRoaXMucmVmcmVzaFZhbHVlID0gITEsIFxuICAgICAgICAhMCAhPT0gaW50ZXJuYWwgJiYgKCQuaXNQbGFpbk9iamVjdChhbGlhcykgPyBvcHRpb25zID0gYWxpYXMgOiAob3B0aW9ucyA9IG9wdGlvbnMgfHwge30sIFxuICAgICAgICBvcHRpb25zLmFsaWFzID0gYWxpYXMpLCB0aGlzLm9wdHMgPSAkLmV4dGVuZCghMCwge30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpLCB0aGlzLm5vTWFza3NDYWNoZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZpbml0aW9ucyAhPT0gdW5kZWZpbmVkLCBcbiAgICAgICAgdGhpcy51c2VyT3B0aW9ucyA9IG9wdGlvbnMgfHwge30sIHRoaXMuaXNSVEwgPSB0aGlzLm9wdHMubnVtZXJpY0lucHV0LCByZXNvbHZlQWxpYXModGhpcy5vcHRzLmFsaWFzLCBvcHRpb25zLCB0aGlzLm9wdHMpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUFsaWFzKGFsaWFzU3RyLCBvcHRpb25zLCBvcHRzKSB7XG4gICAgICAgIHZhciBhbGlhc0RlZmluaXRpb24gPSBJbnB1dG1hc2sucHJvdG90eXBlLmFsaWFzZXNbYWxpYXNTdHJdO1xuICAgICAgICByZXR1cm4gYWxpYXNEZWZpbml0aW9uID8gKGFsaWFzRGVmaW5pdGlvbi5hbGlhcyAmJiByZXNvbHZlQWxpYXMoYWxpYXNEZWZpbml0aW9uLmFsaWFzLCB1bmRlZmluZWQsIG9wdHMpLCBcbiAgICAgICAgJC5leHRlbmQoITAsIG9wdHMsIGFsaWFzRGVmaW5pdGlvbiksICQuZXh0ZW5kKCEwLCBvcHRzLCBvcHRpb25zKSwgITApIDogKG51bGwgPT09IG9wdHMubWFzayAmJiAob3B0cy5tYXNrID0gYWxpYXNTdHIpLCBcbiAgICAgICAgITEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1hc2tTZXQob3B0cywgbm9jYWNoZSkge1xuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZU1hc2sobWFzaywgbWV0YWRhdGEsIG9wdHMpIHtcbiAgICAgICAgICAgIHZhciByZWdleE1hc2sgPSAhMTtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBtYXNrICYmIFwiXCIgIT09IG1hc2sgfHwgKHJlZ2V4TWFzayA9IG51bGwgIT09IG9wdHMucmVnZXgsIHJlZ2V4TWFzayA/IChtYXNrID0gb3B0cy5yZWdleCwgXG4gICAgICAgICAgICBtYXNrID0gbWFzay5yZXBsYWNlKC9eKFxcXikoLiopKFxcJCkkLywgXCIkMlwiKSkgOiAocmVnZXhNYXNrID0gITAsIG1hc2sgPSBcIi4qXCIpKSwgMSA9PT0gbWFzay5sZW5ndGggJiYgITEgPT09IG9wdHMuZ3JlZWR5ICYmIDAgIT09IG9wdHMucmVwZWF0ICYmIChvcHRzLnBsYWNlaG9sZGVyID0gXCJcIiksIFxuICAgICAgICAgICAgb3B0cy5yZXBlYXQgPiAwIHx8IFwiKlwiID09PSBvcHRzLnJlcGVhdCB8fCBcIitcIiA9PT0gb3B0cy5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwZWF0U3RhcnQgPSBcIipcIiA9PT0gb3B0cy5yZXBlYXQgPyAwIDogXCIrXCIgPT09IG9wdHMucmVwZWF0ID8gMSA6IG9wdHMucmVwZWF0O1xuICAgICAgICAgICAgICAgIG1hc2sgPSBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0ICsgbWFzayArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5xdWFudGlmaWVybWFya2VyLnN0YXJ0ICsgcmVwZWF0U3RhcnQgKyBcIixcIiArIG9wdHMucmVwZWF0ICsgb3B0cy5xdWFudGlmaWVybWFya2VyLmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXNrc2V0RGVmaW5pdGlvbiwgbWFza2RlZktleSA9IHJlZ2V4TWFzayA/IFwicmVnZXhfXCIgKyBvcHRzLnJlZ2V4IDogb3B0cy5udW1lcmljSW5wdXQgPyBtYXNrLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogbWFzaztcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0gPT09IHVuZGVmaW5lZCB8fCAhMCA9PT0gbm9jYWNoZSA/IChtYXNrc2V0RGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICAgICAgICAgIG1hc2tUb2tlbjogSW5wdXRtYXNrLnByb3RvdHlwZS5hbmFseXNlTWFzayhtYXNrLCByZWdleE1hc2ssIG9wdHMpLFxuICAgICAgICAgICAgICAgIHZhbGlkUG9zaXRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICBfYnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgYnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdGVzdHM6IHt9LFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICAgICAgICAgICAgICBtYXNrTGVuZ3RoOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0sICEwICE9PSBub2NhY2hlICYmIChJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0gPSBtYXNrc2V0RGVmaW5pdGlvbiwgXG4gICAgICAgICAgICBtYXNrc2V0RGVmaW5pdGlvbiA9ICQuZXh0ZW5kKCEwLCB7fSwgSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldKSkpIDogbWFza3NldERlZmluaXRpb24gPSAkLmV4dGVuZCghMCwge30sIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSksIFxuICAgICAgICAgICAgbWFza3NldERlZmluaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLm1hc2spICYmIChvcHRzLm1hc2sgPSBvcHRzLm1hc2sob3B0cykpLCAkLmlzQXJyYXkob3B0cy5tYXNrKSkge1xuICAgICAgICAgICAgaWYgKG9wdHMubWFzay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5rZWVwU3RhdGljID0gbnVsbCA9PT0gb3B0cy5rZWVwU3RhdGljIHx8IG9wdHMua2VlcFN0YXRpYztcbiAgICAgICAgICAgICAgICB2YXIgYWx0TWFzayA9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuZWFjaChvcHRzLm51bWVyaWNJbnB1dCA/IG9wdHMubWFzay5yZXZlcnNlKCkgOiBvcHRzLm1hc2ssIGZ1bmN0aW9uKG5keCwgbXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsdE1hc2subGVuZ3RoID4gMSAmJiAoYWx0TWFzayArPSBvcHRzLmdyb3VwbWFya2VyLmVuZCArIG9wdHMuYWx0ZXJuYXRvcm1hcmtlciArIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpLCBcbiAgICAgICAgICAgICAgICAgICAgbXNrLm1hc2sgPT09IHVuZGVmaW5lZCB8fCAkLmlzRnVuY3Rpb24obXNrLm1hc2spID8gYWx0TWFzayArPSBtc2sgOiBhbHRNYXNrICs9IG1zay5tYXNrO1xuICAgICAgICAgICAgICAgIH0pLCBhbHRNYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuZW5kLCBnZW5lcmF0ZU1hc2soYWx0TWFzaywgb3B0cy5tYXNrLCBvcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdHMubWFzayA9IG9wdHMubWFzay5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0cy5tYXNrICYmIG9wdHMubWFzay5tYXNrICE9PSB1bmRlZmluZWQgJiYgISQuaXNGdW5jdGlvbihvcHRzLm1hc2subWFzaykgPyBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLm1hc2ssIG9wdHMubWFzaywgb3B0cykgOiBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLCBvcHRzLm1hc2ssIG9wdHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrU2NvcGUoYWN0aW9uT2JqLCBtYXNrc2V0LCBvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldE1hc2tUZW1wbGF0ZShiYXNlT25JbnB1dCwgbWluaW1hbFBvcywgaW5jbHVkZU1vZGUpIHtcbiAgICAgICAgICAgIG1pbmltYWxQb3MgPSBtaW5pbWFsUG9zIHx8IDA7XG4gICAgICAgICAgICB2YXIgbmR4SW50bHpyLCB0ZXN0LCB0ZXN0UG9zLCBtYXNrVGVtcGxhdGUgPSBbXSwgcG9zID0gMCwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAhMCA9PT0gYmFzZU9uSW5wdXQgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPyAodGVzdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdLCBcbiAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksIG1hc2tUZW1wbGF0ZS5wdXNoKCEwID09PSBpbmNsdWRlTW9kZSA/IHRlc3RQb3MuaW5wdXQgOiAhMSA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0Lm5hdGl2ZURlZiA6IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdCkpKSA6ICh0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXG4gICAgICAgICAgICAgICAgdGVzdCA9IHRlc3RQb3MubWF0Y2gsIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCAoITEgPT09IG9wdHMuaml0TWFza2luZyB8fCBwb3MgPCBsdnAgfHwgXCJudW1iZXJcIiA9PSB0eXBlb2Ygb3B0cy5qaXRNYXNraW5nICYmIGlzRmluaXRlKG9wdHMuaml0TWFza2luZykgJiYgb3B0cy5qaXRNYXNraW5nID4gcG9zKSAmJiBtYXNrVGVtcGxhdGUucHVzaCghMSA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0Lm5hdGl2ZURlZiA6IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdCkpKSwgXG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICB9IHdoaWxlICgobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgcG9zIDwgbWF4TGVuZ3RoKSAmJiAobnVsbCAhPT0gdGVzdC5mbiB8fCBcIlwiICE9PSB0ZXN0LmRlZikgfHwgbWluaW1hbFBvcyA+IHBvcyk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiA9PT0gbWFza1RlbXBsYXRlW21hc2tUZW1wbGF0ZS5sZW5ndGggLSAxXSAmJiBtYXNrVGVtcGxhdGUucG9wKCksIGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoID0gcG9zICsgMSwgXG4gICAgICAgICAgICBtYXNrVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWFza1NldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrc2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0TWFza1NldChzb2Z0KSB7XG4gICAgICAgICAgICB2YXIgbWFza3NldCA9IGdldE1hc2tTZXQoKTtcbiAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyID0gdW5kZWZpbmVkLCAhMCAhPT0gc29mdCAmJiAobWFza3NldC52YWxpZFBvc2l0aW9ucyA9IHt9LCBtYXNrc2V0LnAgPSAwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0VmFsaWRQb3NpdGlvbihjbG9zZXN0VG8sIHN0cmljdCwgdmFsaWRQb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBiZWZvcmUgPSAtMSwgYWZ0ZXIgPSAtMSwgdmFsaWRzID0gdmFsaWRQb3NpdGlvbnMgfHwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zO1xuICAgICAgICAgICAgY2xvc2VzdFRvID09PSB1bmRlZmluZWQgJiYgKGNsb3Nlc3RUbyA9IC0xKTtcbiAgICAgICAgICAgIGZvciAodmFyIHBvc05keCBpbiB2YWxpZHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHNOZHggPSBwYXJzZUludChwb3NOZHgpO1xuICAgICAgICAgICAgICAgIHZhbGlkc1twc05keF0gJiYgKHN0cmljdCB8fCAhMCAhPT0gdmFsaWRzW3BzTmR4XS5nZW5lcmF0ZWRJbnB1dCkgJiYgKHBzTmR4IDw9IGNsb3Nlc3RUbyAmJiAoYmVmb3JlID0gcHNOZHgpLCBcbiAgICAgICAgICAgICAgICBwc05keCA+PSBjbG9zZXN0VG8gJiYgKGFmdGVyID0gcHNOZHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMSAhPT0gYmVmb3JlICYmIGNsb3Nlc3RUbyAtIGJlZm9yZSA+IDEgfHwgYWZ0ZXIgPCBjbG9zZXN0VG8gPyBiZWZvcmUgOiBhZnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdHJpcFZhbGlkUG9zaXRpb25zKHN0YXJ0LCBlbmQsIG5vY2hlY2ssIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyIGksIHN0YXJ0UG9zID0gc3RhcnQsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBuZWVkc1ZhbGlkYXRpb24gPSAhMTtcbiAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnAgPSBzdGFydCwgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnRQb3M7IGktLSkgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldICE9PSB1bmRlZmluZWQgJiYgKCEwICE9PSBub2NoZWNrICYmICghZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmIGZ1bmN0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIHZhciBwb3NNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdO1xuICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG51bGwgPT09IHBvc01hdGNoLm1hdGNoLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0sIG5leHRNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG5leHRNYXRjaCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KGkpIHx8ICExID09PSBvcHRzLmNhbkNsZWFyUG9zaXRpb24oZ2V0TWFza1NldCgpLCBpLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBzdHJpY3QsIG9wdHMpKSB8fCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldKTtcbiAgICAgICAgICAgIGZvciAocmVzZXRNYXNrU2V0KCEwKSwgaSA9IHN0YXJ0UG9zICsgMTsgaSA8PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpOyApIHtcbiAgICAgICAgICAgICAgICBmb3IgKDtnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc3RhcnRQb3NdICE9PSB1bmRlZmluZWQ7ICkgc3RhcnRQb3MrKztcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHN0YXJ0UG9zICYmIChpID0gc3RhcnRQb3MgKyAxKSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldID09PSB1bmRlZmluZWQgJiYgaXNNYXNrKGkpKSBpKys7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGdldFRlc3RUZW1wbGF0ZShpKTtcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IG5lZWRzVmFsaWRhdGlvbiAmJiBwb3NpdGlvbnNDbG9uZVtzdGFydFBvc10gJiYgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdLm1hdGNoLmRlZiA9PT0gdC5tYXRjaC5kZWYgPyAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3N0YXJ0UG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdKSwgXG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tzdGFydFBvc10uaW5wdXQgPSB0LmlucHV0LCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgaSsrKSA6IHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHN0YXJ0UG9zLCB0Lm1hdGNoLmRlZikgPyAhMSAhPT0gaXNWYWxpZChzdGFydFBvcywgdC5pbnB1dCB8fCBnZXRQbGFjZWhvbGRlcihpKSwgITApICYmIChkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgaSsrLCBuZWVkc1ZhbGlkYXRpb24gPSAhMCkgOiBpc01hc2soaSkgfHwgKGkrKywgc3RhcnRQb3MtLSksIHN0YXJ0UG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHMsIGd1ZXNzTmV4dEJlc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHRlc3RQb3MsIHRlc3RQb3NpdGlvbnMgPSB0ZXN0cywgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgbHZUZXN0ID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2x2cF0gfHwgZ2V0VGVzdHMoMClbMF0sIGx2VGVzdEFsdEFyciA9IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkID8gbHZUZXN0LmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSA6IFtdLCBuZHggPSAwOyBuZHggPCB0ZXN0UG9zaXRpb25zLmxlbmd0aCAmJiAodGVzdFBvcyA9IHRlc3RQb3NpdGlvbnNbbmR4XSwgXG4gICAgICAgICAgICAhKHRlc3RQb3MubWF0Y2ggJiYgKG9wdHMuZ3JlZWR5ICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciB8fCAoITEgPT09IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxpdHkgfHwgITEgPT09IHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIpICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKGx2VGVzdC5hbHRlcm5hdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdGVzdFBvcy5hbHRlcm5hdGlvbiB8fCB0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkICYmIGNoZWNrQWx0ZXJuYXRpb25NYXRjaCh0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgbHZUZXN0QWx0QXJyKSkpIHx8ICEwID09PSBndWVzc05leHRCZXN0ICYmIChudWxsICE9PSB0ZXN0UG9zLm1hdGNoLmZuIHx8IC9bMC05YS1iQS1aXS8udGVzdCh0ZXN0UG9zLm1hdGNoLmRlZikpKTsgbmR4KyspIDtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0UG9zO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFRlc3RUZW1wbGF0ZShwb3MsIG5keEludGx6ciwgdHN0UHMpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSB8fCBkZXRlcm1pbmVUZXN0VGVtcGxhdGUoZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIgPyBuZHhJbnRsenIuc2xpY2UoKSA6IG5keEludGx6ciwgdHN0UHMpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRUZXN0KHBvcykge1xuICAgICAgICAgICAgcmV0dXJuIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID8gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gOiBnZXRUZXN0cyhwb3MpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHBvcywgZGVmKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB2YWxpZCA9ICExLCB0ZXN0cyA9IGdldFRlc3RzKHBvcyksIHRuZHggPSAwOyB0bmR4IDwgdGVzdHMubGVuZ3RoOyB0bmR4KyspIGlmICh0ZXN0c1t0bmR4XS5tYXRjaCAmJiB0ZXN0c1t0bmR4XS5tYXRjaC5kZWYgPT09IGRlZikge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIsIHRzdFBzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW4sIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1hdGNoKG1hdGNoLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdE1hdGNoID0gMCA9PT0gJC5pbkFycmF5KGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TWF0Y2ggfHwgJC5lYWNoKHRva2VuR3JvdXAubWF0Y2hlcywgZnVuY3Rpb24obmR4LCBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gbWF0Y2guaXNRdWFudGlmaWVyICYmIChmaXJzdE1hdGNoID0gaXNGaXJzdE1hdGNoKGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXNbbmR4IC0gMV0pKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZpcnN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZU5keEluaXRpYWxpemVyKHBvcywgYWx0ZXJuYXRlTmR4LCB0YXJnZXRBbHRlcm5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3RNYXRjaCwgaW5kZXhQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdICYmIHRhcmdldEFsdGVybmF0aW9uICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdKSBmb3IgKHZhciB2cEFsdGVybmF0aW9uID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdLmxvY2F0b3IsIHRwQWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudGVzdHNbcG9zXVswXS5sb2NhdG9yLCBpID0gMDsgaSA8IHRhcmdldEFsdGVybmF0aW9uOyBpKyspIGlmICh2cEFsdGVybmF0aW9uW2ldICE9PSB0cEFsdGVybmF0aW9uW2ldKSByZXR1cm4gdnBBbHRlcm5hdGlvbi5zbGljZSh0YXJnZXRBbHRlcm5hdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSkgJiYgJC5lYWNoKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdIHx8IFsgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gXSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gdGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IHRhcmdldEFsdGVybmF0aW9uIDogbG1udC5hbHRlcm5hdGlvbiwgbmR4UG9zID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLmluZGV4T2YoYWx0ZXJuYXRlTmR4KSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleFBvcyA9PT0gdW5kZWZpbmVkIHx8IG5keFBvcyA8IGluZGV4UG9zKSAmJiAtMSAhPT0gbmR4UG9zICYmIChiZXN0TWF0Y2ggPSBsbW50LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFBvcyA9IG5keFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgYmVzdE1hdGNoID8gYmVzdE1hdGNoLmxvY2F0b3Iuc2xpY2UoKHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyB0YXJnZXRBbHRlcm5hdGlvbiA6IGJlc3RNYXRjaC5hbHRlcm5hdGlvbikgKyAxKSA6IHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyByZXNvbHZlTmR4SW5pdGlhbGl6ZXIocG9zLCBhbHRlcm5hdGVOZHgpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID4gMWU0KSB0aHJvdyBcIklucHV0bWFzazogVGhlcmUgaXMgcHJvYmFibHkgYW4gZXJyb3IgaW4geW91ciBtYXNrIGRlZmluaXRpb24gb3IgaW4gdGhlIGNvZGUuIENyZWF0ZSBhbiBpc3N1ZSBvbiBnaXRodWIgd2l0aCBhbiBleGFtcGxlIG9mIHRoZSBtYXNrIHlvdSBhcmUgdXNpbmcuIFwiICsgZ2V0TWFza1NldCgpLm1hc2s7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID09PSBwb3MgJiYgbWF0Y2gubWF0Y2hlcyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IGxvb3BOZHgucmV2ZXJzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeVxuICAgICAgICAgICAgICAgICAgICB9KSwgITA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5tYXRjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pc0dyb3VwICYmIHF1YW50aWZpZXJSZWN1cnNlICE9PSBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IGhhbmRsZU1hdGNoKG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpICsgMV0sIGxvb3BOZHgpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLmlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxUb2tlbiA9IG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IHJlc29sdmVUZXN0RnJvbVRva2VuKG1hdGNoLCBuZHhJbml0aWFsaXplciwgbG9vcE5keCwgcXVhbnRpZmllclJlY3Vyc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgIWlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgb3B0aW9uYWxUb2tlbikpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2guaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbHRNYXRjaGVzLCBhbHRlcm5hdGVUb2tlbiA9IG1hdGNoLCBtYWx0ZXJuYXRlTWF0Y2hlcyA9IFtdLCBjdXJyZW50TWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoKSwgbG9vcE5keENudCA9IGxvb3BOZHgubGVuZ3RoLCBhbHRJbmRleCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBhbHRJbmRleCB8fCBcInN0cmluZ1wiID09IHR5cGVvZiBhbHRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1uZHgsIGN1cnJlbnRQb3MgPSB0ZXN0UG9zLCBuZHhJbml0aWFsaXplckNsb25lID0gbmR4SW5pdGlhbGl6ZXIuc2xpY2UoKSwgYWx0SW5kZXhBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4KSBhbHRJbmRleEFyciA9IGFsdEluZGV4LnNwbGl0KFwiLFwiKTsgZWxzZSBmb3IgKGFtbmR4ID0gMDsgYW1uZHggPCBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzLmxlbmd0aDsgYW1uZHgrKykgYWx0SW5kZXhBcnIucHVzaChhbW5keCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG5keCA9IDA7IG5keCA8IGFsdEluZGV4QXJyLmxlbmd0aDsgbmR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbW5keCA9IHBhcnNlSW50KGFsdEluZGV4QXJyW25keF0pLCBtYXRjaGVzID0gW10sIG5keEluaXRpYWxpemVyID0gcmVzb2x2ZU5keEluaXRpYWxpemVyKHRlc3RQb3MsIGFtbmR4LCBsb29wTmR4Q250KSB8fCBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IChtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYW1uZHhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FtbmR4XSwgWyBhbW5keCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpIHx8IG1hdGNoKSAmJiBtYXRjaCAhPT0gdW5kZWZpbmVkICYmIGFsdEluZGV4QXJyW2FsdEluZGV4QXJyLmxlbmd0aCAtIDFdIDwgYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnRuZHggPSAkLmluQXJyYXkobWF0Y2gsIG1hc2tUb2tlbi5tYXRjaGVzKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXMubGVuZ3RoID4gbnRuZHggJiYgKG1hdGNoID0gaGFuZGxlTWF0Y2gobWFza1Rva2VuLm1hdGNoZXNbbnRuZHhdLCBbIG50bmR4IF0uY29uY2F0KGxvb3BOZHguc2xpY2UoMSwgbG9vcE5keC5sZW5ndGgpKSwgcXVhbnRpZmllclJlY3Vyc2UpKSAmJiAoYWx0SW5kZXhBcnIucHVzaChudG5keC50b1N0cmluZygpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG1hdGNoZXMsIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmFsdGVybmF0aW9uID0gbG9vcE5keC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgpLCB0ZXN0UG9zID0gY3VycmVudFBvcywgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MSA9IDA7IG5keDEgPCBtYWx0TWF0Y2hlcy5sZW5ndGg7IG5keDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXRjaCA9IG1hbHRNYXRjaGVzW25keDFdLCBkcm9wTWF0Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9IGFsdE1hdGNoLmFsdGVybmF0aW9uIHx8IGxvb3BOZHhDbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MiA9IDA7IG5keDIgPCBtYWx0ZXJuYXRlTWF0Y2hlcy5sZW5ndGg7IG5keDIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0TWF0Y2gyID0gbWFsdGVybmF0ZU1hdGNoZXNbbmR4Ml07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBhbHRJbmRleCB8fCAtMSAhPT0gJC5pbkFycmF5KGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIGFsdEluZGV4QXJyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5tYXRjaC5uYXRpdmVEZWYgPT09IHRhcmdldC5tYXRjaC5uYXRpdmVEZWYgfHwgc291cmNlLm1hdGNoLmRlZiA9PT0gdGFyZ2V0Lm1hdGNoLm5hdGl2ZURlZiB8fCBzb3VyY2UubWF0Y2gubmF0aXZlRGVmID09PSB0YXJnZXQubWF0Y2guZGVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9PT0gYWx0TWF0Y2gyLmFsdGVybmF0aW9uICYmIC0xID09PSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSkgJiYgKGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0gPSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWF0Y2gyLmFsdGVybmF0aW9uID0gYWx0TWF0Y2guYWx0ZXJuYXRpb24pLCBhbHRNYXRjaC5tYXRjaC5uYXRpdmVEZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYgJiYgKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dID0gYWx0TWF0Y2gyLmxvY2F0b3JbYWx0TWF0Y2gyLmFsdGVybmF0aW9uXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFsdGVybmF0ZU1hdGNoZXMuc3BsaWNlKG1hbHRlcm5hdGVNYXRjaGVzLmluZGV4T2YoYWx0TWF0Y2gyKSwgMSwgYWx0TWF0Y2gpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRNYXRjaC5tYXRjaC5kZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wTWF0Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYsIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSB8fCBmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcIiksIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdE1hdGNoLmFsdGVybmF0aW9uID09PSBhbHRNYXRjaDIuYWx0ZXJuYXRpb24gJiYgLTEgPT09IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hIHx8IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBhbHRNYXRjaC5uYS5pbmRleE9mKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSA9IGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSArIFwiLFwiICsgYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaC5hbHRlcm5hdGlvbl0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRlcm5hdGVNYXRjaGVzLnNwbGljZShtYWx0ZXJuYXRlTWF0Y2hlcy5pbmRleE9mKGFsdE1hdGNoMiksIDAsIGFsdE1hdGNoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoIHx8IG1hbHRlcm5hdGVNYXRjaGVzLnB1c2goYWx0TWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4ICYmIChtYWx0ZXJuYXRlTWF0Y2hlcyA9ICQubWFwKG1hbHRlcm5hdGVNYXRjaGVzLCBmdW5jdGlvbihsbW50LCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Zpbml0ZShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gbG1udC5hbHRlcm5hdGlvbiwgYWx0TG9jQXJyID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gdW5kZWZpbmVkLCBsbW50LmFsdGVybmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGFsbmR4ID0gMDsgYWxuZHggPCBhbHRMb2NBcnIubGVuZ3RoOyBhbG5keCsrKSAtMSAhPT0gJC5pbkFycmF5KGFsdExvY0FyclthbG5keF0sIGFsdEluZGV4QXJyKSAmJiAobG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gXCIsXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gYWx0TG9jQXJyW2FsbmR4XSkgOiBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gcGFyc2VJbnQoYWx0TG9jQXJyW2FsbmR4XSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQuYWx0ZXJuYXRpb24gPSBhbHRlcm5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGxtbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbWF0Y2hlcyA9IGN1cnJlbnRNYXRjaGVzLmNvbmNhdChtYWx0ZXJuYXRlTWF0Y2hlcyksIHRlc3RQb3MgPSBwb3MsIGluc2VydFN0b3AgPSBtYXRjaGVzLmxlbmd0aCA+IDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aCA+IDAsIG5keEluaXRpYWxpemVyID0gbmR4SW5pdGlhbGl6ZXJDbG9uZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYWx0SW5kZXhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FsdEluZGV4XSwgWyBhbHRJbmRleCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5pc1F1YW50aWZpZXIgJiYgcXVhbnRpZmllclJlY3Vyc2UgIT09IG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpIC0gMV0pIGZvciAodmFyIHF0ID0gbWF0Y2gsIHFuZHggPSBuZHhJbml0aWFsaXplci5sZW5ndGggPiAwID8gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKSA6IDA7IHFuZHggPCAoaXNOYU4ocXQucXVhbnRpZmllci5tYXgpID8gcW5keCArIDEgOiBxdC5xdWFudGlmaWVyLm1heCkgJiYgdGVzdFBvcyA8PSBwb3M7IHFuZHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbkdyb3VwID0gbWFza1Rva2VuLm1hdGNoZXNbJC5pbkFycmF5KHF0LCBtYXNrVG9rZW4ubWF0Y2hlcykgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPSBoYW5kbGVNYXRjaCh0b2tlbkdyb3VwLCBbIHFuZHggXS5jb25jYXQobG9vcE5keCksIHRva2VuR3JvdXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyID0gcW5keCA+IHF0LnF1YW50aWZpZXIubWluIC0gMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgdG9rZW5Hcm91cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxbmR4ID4gcXQucXVhbnRpZmllci5taW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gcmVzb2x2ZVRlc3RGcm9tVG9rZW4obWF0Y2gsIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRlc3RQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdG5keCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogMDsgdG5keCA8IG1hc2tUb2tlbi5tYXRjaGVzLmxlbmd0aDsgdG5keCsrKSBpZiAoITAgIT09IG1hc2tUb2tlbi5tYXRjaGVzW3RuZHhdLmlzUXVhbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBoYW5kbGVNYXRjaChtYXNrVG9rZW4ubWF0Y2hlc1t0bmR4XSwgWyB0bmR4IF0uY29uY2F0KGxvb3BOZHgpLCBxdWFudGlmaWVyUmVjdXJzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiB0ZXN0UG9zID09PSBwb3MpIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RQb3MgPiBwb3MpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbHRlclRlc3RzKHRlc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMua2VlcFN0YXRpYyAmJiBwb3MgPiAwICYmIHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApICYmICEwICE9PSB0ZXN0c1swXS5tYXRjaC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdHNbMF0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIG51bGwgPT09IHRlc3RzWzBdLm1hdGNoLmZuICYmICEvWzAtOWEtYkEtWl0vLnRlc3QodGVzdHNbMF0ubWF0Y2guZGVmKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdID09PSB1bmRlZmluZWQpIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXS5hbHRlcm5hdGlvbiA9PT0gdGVzdHNbMF0uYWx0ZXJuYXRpb24pIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSkgcmV0dXJuIFsgZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGF0ZXN0TWF0Y2gsIG1hc2tUb2tlbnMgPSBnZXRNYXNrU2V0KCkubWFza1Rva2VuLCB0ZXN0UG9zID0gbmR4SW50bHpyID8gdHN0UHMgOiAwLCBuZHhJbml0aWFsaXplciA9IG5keEludGx6ciA/IG5keEludGx6ci5zbGljZSgpIDogWyAwIF0sIG1hdGNoZXMgPSBbXSwgaW5zZXJ0U3RvcCA9ICExLCBjYWNoZURlcGVuZGVuY3kgPSBuZHhJbnRsenIgPyBuZHhJbnRsenIuam9pbihcIlwiKSA6IFwiXCI7XG4gICAgICAgICAgICBpZiAocG9zID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobmR4SW50bHpyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdGVzdCwgcHJldmlvdXNQb3MgPSBwb3MgLSAxOyAodGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twcmV2aW91c1Bvc10gfHwgZ2V0TWFza1NldCgpLnRlc3RzW3ByZXZpb3VzUG9zXSkgPT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xOyApIHByZXZpb3VzUG9zLS07XG4gICAgICAgICAgICAgICAgICAgIHRlc3QgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xICYmIChuZHhJbml0aWFsaXplciA9IGZ1bmN0aW9uKHRlc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRvciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuaXNBcnJheSh0ZXN0cykgfHwgKHRlc3RzID0gWyB0ZXN0cyBdKSwgdGVzdHMubGVuZ3RoID4gMCAmJiAodGVzdHNbMF0uYWx0ZXJuYXRpb24gPT09IHVuZGVmaW5lZCA/IChsb2NhdG9yID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzLnNsaWNlKCkpLmxvY2F0b3Iuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAwID09PSBsb2NhdG9yLmxlbmd0aCAmJiAobG9jYXRvciA9IHRlc3RzWzBdLmxvY2F0b3Iuc2xpY2UoKSkpIDogJC5lYWNoKHRlc3RzLCBmdW5jdGlvbihuZHgsIHRzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSB0c3QuZGVmKSBpZiAoMCA9PT0gbG9jYXRvci5sZW5ndGgpIGxvY2F0b3IgPSB0c3QubG9jYXRvci5zbGljZSgpOyBlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRvci5sZW5ndGg7IGkrKykgdHN0LmxvY2F0b3JbaV0gJiYgLTEgPT09IGxvY2F0b3JbaV0udG9TdHJpbmcoKS5pbmRleE9mKHRzdC5sb2NhdG9yW2ldKSAmJiAobG9jYXRvcltpXSArPSBcIixcIiArIHRzdC5sb2NhdG9yW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbG9jYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgfSh0ZXN0KSwgY2FjaGVEZXBlbmRlbmN5ID0gbmR4SW5pdGlhbGl6ZXIuam9pbihcIlwiKSwgdGVzdFBvcyA9IHByZXZpb3VzUG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdWzBdLmNkID09PSBjYWNoZURlcGVuZGVuY3kpIHJldHVybiBmaWx0ZXJUZXN0cyhnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbXRuZHggPSBuZHhJbml0aWFsaXplci5zaGlmdCgpOyBtdG5keCA8IG1hc2tUb2tlbnMubGVuZ3RoOyBtdG5keCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW5zW210bmR4XSwgbmR4SW5pdGlhbGl6ZXIsIFsgbXRuZHggXSkgJiYgdGVzdFBvcyA9PT0gcG9zIHx8IHRlc3RQb3MgPiBwb3MpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoMCA9PT0gbWF0Y2hlcy5sZW5ndGggfHwgaW5zZXJ0U3RvcCkgJiYgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsb2NhdG9yOiBbXSxcbiAgICAgICAgICAgICAgICBjZDogY2FjaGVEZXBlbmRlbmN5XG4gICAgICAgICAgICB9KSwgbmR4SW50bHpyICE9PSB1bmRlZmluZWQgJiYgZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10gPyBmaWx0ZXJUZXN0cygkLmV4dGVuZCghMCwgW10sIG1hdGNoZXMpKSA6IChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSA9ICQuZXh0ZW5kKCEwLCBbXSwgbWF0Y2hlcyksIFxuICAgICAgICAgICAgZmlsdGVyVGVzdHMoZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXJUZW1wbGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkuX2J1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuX2J1ZmZlciA9IGdldE1hc2tUZW1wbGF0ZSghMSwgMSksIFxuICAgICAgICAgICAgZ2V0TWFza1NldCgpLmJ1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1NldCgpLl9idWZmZXIuc2xpY2UoKSkpLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS5fYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlcihub0NhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLmJ1ZmZlciAhPT0gdW5kZWZpbmVkICYmICEwICE9PSBub0NhY2hlIHx8IChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1RlbXBsYXRlKCEwLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCAhMCkpLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS5idWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaEZyb21CdWZmZXIoc3RhcnQsIGVuZCwgYnVmZmVyKSB7XG4gICAgICAgICAgICB2YXIgaSwgcDtcbiAgICAgICAgICAgIGlmICghMCA9PT0gc3RhcnQpIHJlc2V0TWFza1NldCgpLCBzdGFydCA9IDAsIGVuZCA9IGJ1ZmZlci5sZW5ndGg7IGVsc2UgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgZGVsZXRlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgIGZvciAocCA9IHN0YXJ0LCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgaWYgKHJlc2V0TWFza1NldCghMCksIGJ1ZmZlcltpXSAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbFJlc3VsdCA9IGlzVmFsaWQocCwgYnVmZmVyW2ldLCAhMCwgITApO1xuICAgICAgICAgICAgICAgICExICE9PSB2YWxSZXN1bHQgJiYgKHJlc2V0TWFza1NldCghMCksIHAgPSB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IHZhbFJlc3VsdC5jYXJldCA6IHZhbFJlc3VsdC5wb3MgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYXNpbmcoZWxlbSwgdGVzdCwgcG9zKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMuY2FzaW5nIHx8IHRlc3QuY2FzaW5nKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJ1cHBlclwiOlxuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImxvd2VyXCI6XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgICAgICB2YXIgcG9zQmVmb3JlID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdO1xuICAgICAgICAgICAgICAgIGVsZW0gPSAwID09PSBwb3MgfHwgcG9zQmVmb3JlICYmIHBvc0JlZm9yZS5pbnB1dCA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZShJbnB1dG1hc2sua2V5Q29kZS5TUEFDRSkgPyBlbGVtLnRvVXBwZXJDYXNlKCkgOiBlbGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMuY2FzaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBlbGVtID0gb3B0cy5jYXNpbmcuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBbHRlcm5hdGlvbk1hdGNoKGFsdEFycjEsIGFsdEFycjIsIG5hKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYU5keCwgYWx0QXJyQyA9IG9wdHMuZ3JlZWR5ID8gYWx0QXJyMiA6IGFsdEFycjIuc2xpY2UoMCwgMSksIGlzTWF0Y2ggPSAhMSwgbmFBcnIgPSBuYSAhPT0gdW5kZWZpbmVkID8gbmEuc3BsaXQoXCIsXCIpIDogW10sIGkgPSAwOyBpIDwgbmFBcnIubGVuZ3RoOyBpKyspIC0xICE9PSAobmFOZHggPSBhbHRBcnIxLmluZGV4T2YobmFBcnJbaV0pKSAmJiBhbHRBcnIxLnNwbGljZShuYU5keCwgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhbG5keCA9IDA7IGFsbmR4IDwgYWx0QXJyMS5sZW5ndGg7IGFsbmR4KyspIGlmICgtMSAhPT0gJC5pbkFycmF5KGFsdEFycjFbYWxuZHhdLCBhbHRBcnJDKSkge1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSAhMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpc01hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVmFsaWQocG9zLCBjLCBzdHJpY3QsIGZyb21TZXRWYWxpZCwgZnJvbUFsdGVybmF0ZSwgdmFsaWRhdGVPbmx5KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1NlbGVjdGlvbihwb3NPYmopIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gaXNSVEwgPyBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID4gMSB8fCBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID09IDEgOiBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID4gMSB8fCBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID09IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiAwID09PSBwb3NPYmouYmVnaW4gJiYgcG9zT2JqLmVuZCA9PT0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPyBcImZ1bGxcIiA6IHNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pc1ZhbGlkKHBvc2l0aW9uLCBjLCBzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgcnNsdCA9ICExO1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmVhY2goZ2V0VGVzdHMocG9zaXRpb24pLCBmdW5jdGlvbihuZHgsIHRzdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ZXN0ID0gdHN0Lm1hdGNoLCBsb29wZW5kID0gYyA/IDEgOiAwLCBjaHJzID0gXCJcIiwgaSA9IHRlc3QuY2FyZGluYWxpdHk7IGkgPiBsb29wZW5kOyBpLS0pIGNocnMgKz0gZ2V0QnVmZmVyRWxlbWVudChwb3NpdGlvbiAtIChpIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyAmJiAoY2hycyArPSBjKSwgZ2V0QnVmZmVyKCEwKSwgITEgIT09IChyc2x0ID0gbnVsbCAhPSB0ZXN0LmZuID8gdGVzdC5mbi50ZXN0KGNocnMsIGdldE1hc2tTZXQoKSwgcG9zaXRpb24sIHN0cmljdCwgb3B0cywgaXNTZWxlY3Rpb24ocG9zKSkgOiAoYyA9PT0gdGVzdC5kZWYgfHwgYyA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSAmJiBcIlwiICE9PSB0ZXN0LmRlZiAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjOiBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSByc2x0LmMgIT09IHVuZGVmaW5lZCA/IHJzbHQuYyA6IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbSA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIG51bGwgPT09IHRlc3QuZm4gPyBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmIDogZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0ZWRQb3MgPSBwb3NpdGlvbiwgcG9zc2libGVNb2RpZmllZEJ1ZmZlciA9IGdldEJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJzbHQucmVtb3ZlICE9PSB1bmRlZmluZWQgJiYgKCQuaXNBcnJheShyc2x0LnJlbW92ZSkgfHwgKHJzbHQucmVtb3ZlID0gWyByc2x0LnJlbW92ZSBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gocnNsdC5yZW1vdmUuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwVmFsaWRQb3NpdGlvbnMobG1udCwgbG1udCArIDEsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5pbnNlcnQgIT09IHVuZGVmaW5lZCAmJiAoJC5pc0FycmF5KHJzbHQuaW5zZXJ0KSB8fCAocnNsdC5pbnNlcnQgPSBbIHJzbHQuaW5zZXJ0IF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChyc2x0Lmluc2VydC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChsbW50LnBvcywgbG1udC5jLCAhMCwgZnJvbVNldFZhbGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHBvc3NpYmxlTW9kaWZpZWRCdWZmZXIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByc2x0LnBvcyA9PT0gdW5kZWZpbmVkICYmIHJzbHQuYyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gcnNsdC5wb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbGlkYXRlZFBvcyA9IHJzbHQucG9zICE9PSB1bmRlZmluZWQgPyByc2x0LnBvcyA6IHBvc2l0aW9uKSAhPT0gcG9zaXRpb24pIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwLCBmcm9tU2V0VmFsaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEwICE9PSByc2x0ICYmIHJzbHQucG9zICE9PSB1bmRlZmluZWQgJiYgcnNsdC5wb3MgIT09IHBvc2l0aW9uICYmICh2YWxpZGF0ZWRQb3MgPSByc2x0LnBvcywgXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcihwb3NpdGlvbiwgdmFsaWRhdGVkUG9zLCBnZXRCdWZmZXIoKS5zbGljZSgpKSwgdmFsaWRhdGVkUG9zICE9PSBwb3NpdGlvbikpIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEwID09PSByc2x0IHx8IHJzbHQucG9zICE9PSB1bmRlZmluZWQgfHwgcnNsdC5jICE9PSB1bmRlZmluZWQpICYmIChuZHggPiAwICYmIHJlc2V0TWFza1NldCghMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRQb3NpdGlvbih2YWxpZGF0ZWRQb3MsICQuZXh0ZW5kKHt9LCB0c3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogY2FzaW5nKGVsZW0sIHRlc3QsIHZhbGlkYXRlZFBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBmcm9tU2V0VmFsaWQsIGlzU2VsZWN0aW9uKHBvcykpIHx8IChyc2x0ID0gITEpLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgcnNsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbGlkUG9zaXRpb24ocG9zLCB2YWxpZFRlc3QsIGZyb21TZXRWYWxpZCwgaXNTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb24gfHwgb3B0cy5pbnNlcnRNb2RlICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgZnJvbVNldFZhbGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcG9zOyBpIDw9IGx2cDsgaSsrKSBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRUZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGosIHZhbGlkID0gITAsIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucywgbmVlZHNWYWxpZGF0aW9uID0gITEsIGluaXRpYWxMZW5ndGggPSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gaiA9IHBvczsgaSA8PSBsdnA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBwb3NpdGlvbnNDbG9uZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICE9PSB1bmRlZmluZWQpIGZvciAodmFyIHBvc01hdGNoID0gajsgcG9zTWF0Y2ggPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobnVsbCA9PT0gdC5tYXRjaC5mbiAmJiB2cHNbaV0gJiYgKCEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyIHx8ICEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxpdHkpIHx8IG51bGwgIT0gdC5tYXRjaC5mbik7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCsrLCAhMSA9PT0gbmVlZHNWYWxpZGF0aW9uICYmIHBvc2l0aW9uc0Nsb25lW3Bvc01hdGNoXSAmJiBwb3NpdGlvbnNDbG9uZVtwb3NNYXRjaF0ubWF0Y2guZGVmID09PSB0Lm1hdGNoLmRlZikgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbcG9zTWF0Y2hdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXS5pbnB1dCA9IHQuaW5wdXQsIGZpbGxNaXNzaW5nTm9uTWFzayhwb3NNYXRjaCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSBwb3NNYXRjaCwgdmFsaWQgPSAhMDsgZWxzZSBpZiAocG9zaXRpb25DYW5NYXRjaERlZmluaXRpb24ocG9zTWF0Y2gsIHQubWF0Y2guZGVmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXNWYWxpZChwb3NNYXRjaCwgdC5pbnB1dCwgITAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSAhMSAhPT0gcmVzdWx0LCBqID0gcmVzdWx0LmNhcmV0IHx8IHJlc3VsdC5pbnNlcnQgPyBnZXRMYXN0VmFsaWRQb3NpdGlvbigpIDogcG9zTWF0Y2gsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkc1ZhbGlkYXRpb24gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEodmFsaWQgPSAhMCA9PT0gdC5nZW5lcmF0ZWRJbnB1dCkgJiYgcG9zTWF0Y2ggPj0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggLSAxKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPCBpbml0aWFsTGVuZ3RoICYmIChnZXRNYXNrU2V0KCkubWFza0xlbmd0aCA9IGluaXRpYWxMZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQoITAsIHt9LCBwb3NpdGlvbnNDbG9uZSksIFxuICAgICAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoITApLCAhMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHZhbGlkVGVzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0TWFza1NldCghMCksICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZmlsbE1pc3NpbmdOb25NYXNrKG1hc2tQb3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwbmR4ID0gbWFza1BvcyAtIDE7IHBuZHggPiAtMSAmJiAhZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BuZHhdOyBwbmR4LS0pIDtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFRlbXBsYXRlLCB0ZXN0c0Zyb21Qb3M7XG4gICAgICAgICAgICAgICAgZm9yIChwbmR4Kys7IHBuZHggPCBtYXNrUG9zOyBwbmR4KyspIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twbmR4XSA9PT0gdW5kZWZpbmVkICYmICghMSA9PT0gb3B0cy5qaXRNYXNraW5nIHx8IG9wdHMuaml0TWFza2luZyA+IHBuZHgpICYmICh0ZXN0c0Zyb21Qb3MgPSBnZXRUZXN0cyhwbmR4LCBnZXRUZXN0VGVtcGxhdGUocG5keCAtIDEpLmxvY2F0b3IsIHBuZHggLSAxKS5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICBcIlwiID09PSB0ZXN0c0Zyb21Qb3NbdGVzdHNGcm9tUG9zLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiB0ZXN0c0Zyb21Qb3MucG9wKCksICh0ZXN0VGVtcGxhdGUgPSBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHNGcm9tUG9zKSkgJiYgKHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgPT09IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgfHwgIWlzTWFzayhwbmR4LCAhMCkgfHwgJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgZ2V0QnVmZmVyKCkpIDwgcG5keCAmJiB0ZXN0VGVtcGxhdGUubWF0Y2guZm4gJiYgdGVzdFRlbXBsYXRlLm1hdGNoLmZuLnRlc3QoZ2V0UGxhY2Vob2xkZXIocG5keCksIGdldE1hc2tTZXQoKSwgcG5keCwgITEsIG9wdHMpKSAmJiAhMSAhPT0gKHJlc3VsdCA9IF9pc1ZhbGlkKHBuZHgsIGdldFBsYWNlaG9sZGVyKHBuZHgsIHRlc3RUZW1wbGF0ZS5tYXRjaCwgITApIHx8IChudWxsID09IHRlc3RUZW1wbGF0ZS5tYXRjaC5mbiA/IHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgOiBcIlwiICE9PSBnZXRQbGFjZWhvbGRlcihwbmR4KSA/IGdldFBsYWNlaG9sZGVyKHBuZHgpIDogZ2V0QnVmZmVyKClbcG5keF0pLCAhMCkpICYmIChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvcyB8fCBwbmR4XS5nZW5lcmF0ZWRJbnB1dCA9ICEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpY3QgPSAhMCA9PT0gc3RyaWN0O1xuICAgICAgICAgICAgdmFyIG1hc2tQb3MgPSBwb3M7XG4gICAgICAgICAgICBwb3MuYmVnaW4gIT09IHVuZGVmaW5lZCAmJiAobWFza1BvcyA9IGlzUlRMICYmICFpc1NlbGVjdGlvbihwb3MpID8gcG9zLmVuZCA6IHBvcy5iZWdpbik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gITAsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpO1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLnByZVZhbGlkYXRpb24pICYmICFzdHJpY3QgJiYgITAgIT09IGZyb21TZXRWYWxpZCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5ICYmIChyZXN1bHQgPSBvcHRzLnByZVZhbGlkYXRpb24oZ2V0QnVmZmVyKCksIG1hc2tQb3MsIGMsIGlzU2VsZWN0aW9uKHBvcyksIG9wdHMpKSwgXG4gICAgICAgICAgICAhMCA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGxNaXNzaW5nTm9uTWFzayhtYXNrUG9zKSwgaXNTZWxlY3Rpb24ocG9zKSAmJiAoaGFuZGxlUmVtb3ZlKHVuZGVmaW5lZCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MsICEwLCAhMCksIFxuICAgICAgICAgICAgICAgIG1hc2tQb3MgPSBnZXRNYXNrU2V0KCkucCksIG1hc2tQb3MgPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbWFza1BvcyA8IG1heExlbmd0aCkgJiYgKHJlc3VsdCA9IF9pc1ZhbGlkKG1hc2tQb3MsIGMsIHN0cmljdCksIFxuICAgICAgICAgICAgICAgICghc3RyaWN0IHx8ICEwID09PSBmcm9tU2V0VmFsaWQpICYmICExID09PSByZXN1bHQgJiYgITAgIT09IHZhbGlkYXRlT25seSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3NWYWxpZCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1ttYXNrUG9zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50UG9zVmFsaWQgfHwgbnVsbCAhPT0gY3VycmVudFBvc1ZhbGlkLm1hdGNoLmZuIHx8IGN1cnJlbnRQb3NWYWxpZC5tYXRjaC5kZWYgIT09IGMgJiYgYyAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG9wdHMuaW5zZXJ0TW9kZSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc2Vla05leHQobWFza1BvcyldID09PSB1bmRlZmluZWQpICYmICFpc01hc2sobWFza1BvcywgITApKSBmb3IgKHZhciBuUG9zID0gbWFza1BvcyArIDEsIHNuUG9zID0gc2Vla05leHQobWFza1Bvcyk7IG5Qb3MgPD0gc25Qb3M7IG5Qb3MrKykgaWYgKCExICE9PSAocmVzdWx0ID0gX2lzVmFsaWQoblBvcywgYywgc3RyaWN0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24ob3JpZ2luYWxQb3MsIG5ld1Bvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdnAgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbmV3UG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZwKSBmb3IgKHZhciB0YXJnZXRMb2NhdG9yID0gdnAubG9jYXRvciwgdGxsID0gdGFyZ2V0TG9jYXRvci5sZW5ndGgsIHBzID0gb3JpZ2luYWxQb3M7IHBzIDwgbmV3UG9zOyBwcysrKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BzXSA9PT0gdW5kZWZpbmVkICYmICFpc01hc2socHMsICEwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RzID0gZ2V0VGVzdHMocHMpLnNsaWNlKCksIGJlc3RNYXRjaCA9IGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cywgITApLCBlcXVhbGl0eSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIHRlc3RzLnBvcCgpLCAkLmVhY2godGVzdHMsIGZ1bmN0aW9uKG5keCwgdHN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0bGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHN0LmxvY2F0b3JbaV0gPT09IHVuZGVmaW5lZCB8fCAhY2hlY2tBbHRlcm5hdGlvbk1hdGNoKHRzdC5sb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0YXJnZXRMb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0c3QubmEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QUkgPSB0YXJnZXRMb2NhdG9yW2ldLCBiZXN0TWF0Y2hBSSA9IGJlc3RNYXRjaC5sb2NhdG9yW2ldLCB0c3RBSSA9IHRzdC5sb2NhdG9yW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QUkgLSBiZXN0TWF0Y2hBSSA+IE1hdGguYWJzKHRhcmdldEFJIC0gdHN0QUkpICYmIChiZXN0TWF0Y2ggPSB0c3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxpdHkgPCBpICYmIChlcXVhbGl0eSA9IGksIGJlc3RNYXRjaCA9IHRzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGJlc3RNYXRjaCA9ICQuZXh0ZW5kKHt9LCBiZXN0TWF0Y2gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZ2V0UGxhY2Vob2xkZXIocHMsIGJlc3RNYXRjaC5tYXRjaCwgITApIHx8IGJlc3RNYXRjaC5tYXRjaC5kZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBiZXN0TWF0Y2guZ2VuZXJhdGVkSW5wdXQgPSAhMCwgc2V0VmFsaWRQb3NpdGlvbihwcywgYmVzdE1hdGNoLCAhMCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tuZXdQb3NdID0gdW5kZWZpbmVkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkKG5ld1BvcywgdnAuaW5wdXQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obWFza1BvcywgcmVzdWx0LnBvcyAhPT0gdW5kZWZpbmVkID8gcmVzdWx0LnBvcyA6IG5Qb3MpLCBtYXNrUG9zID0gblBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBzZWVrTmV4dChtYXNrUG9zKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAhMSA9PT0gcmVzdWx0ICYmIG9wdHMua2VlcFN0YXRpYyAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tQWx0ZXJuYXRlICYmIChyZXN1bHQgPSBmdW5jdGlvbihwb3MsIGMsIHN0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEFsdCwgYWx0ZXJuYXRpb24sIGFsdFBvcywgcHJldkFsdFBvcywgaSwgdmFsaWRQb3MsIGFsdE5keHMsIGRlY2lzaW9uUG9zLCB2YWxpZFBzQ2xvbmUgPSAkLmV4dGVuZCghMCwge30sIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyksIGlzVmFsaWRSc2x0ID0gITEsIGxBbHRQb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHByZXZBbHRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbEFsdFBvc107IGxBbHRQb3MgPj0gMDsgbEFsdFBvcy0tKSBpZiAoKGFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsQWx0UG9zXSkgJiYgYWx0UG9zLmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWx0ID0gbEFsdFBvcywgYWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF0uYWx0ZXJuYXRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0gIT09IGFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcyA9IGFsdFBvcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25Qb3MgPSBwYXJzZUludChsYXN0QWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNpc2lvblRha2VyID0gcHJldkFsdFBvcy5sb2NhdG9yW3ByZXZBbHRQb3MuYWx0ZXJuYXRpb24gfHwgYWx0ZXJuYXRpb25dICE9PSB1bmRlZmluZWQgPyBwcmV2QWx0UG9zLmxvY2F0b3JbcHJldkFsdFBvcy5hbHRlcm5hdGlvbiB8fCBhbHRlcm5hdGlvbl0gOiBhbHROZHhzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25UYWtlci5sZW5ndGggPiAwICYmIChkZWNpc2lvblRha2VyID0gZGVjaXNpb25UYWtlci5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmlsaXR5UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSwgcHJldlBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvcyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGdldFRlc3RzKGRlY2lzaW9uUG9zLCBwcmV2UG9zID8gcHJldlBvcy5sb2NhdG9yIDogdW5kZWZpbmVkLCBkZWNpc2lvblBvcyAtIDEpLCBmdW5jdGlvbihuZHgsIHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHROZHhzID0gdGVzdC5sb2NhdG9yW2FsdGVybmF0aW9uXSA/IHRlc3QubG9jYXRvclthbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIikgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtbmR4ID0gMDsgbW5keCA8IGFsdE5keHMubGVuZ3RoOyBtbmR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkSW5wdXRzID0gW10sIHN0YXRpY0lucHV0c0JlZm9yZVBvcyA9IDAsIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSA9IDAsIHZlcmlmeVZhbGlkSW5wdXQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlY2lzaW9uVGFrZXIgPCBhbHROZHhzW21uZHhdICYmICh0ZXN0Lm5hID09PSB1bmRlZmluZWQgfHwgLTEgPT09ICQuaW5BcnJheShhbHROZHhzW21uZHhdLCB0ZXN0Lm5hLnNwbGl0KFwiLFwiKSkgfHwgLTEgPT09ICQuaW5BcnJheShkZWNpc2lvblRha2VyLnRvU3RyaW5nKCksIGFsdE5keHMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdGVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2liaWxpdGllcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5sb2NhdG9yW2FsdGVybmF0aW9uXSA9IHBhcnNlSW50KGFsdE5keHNbbW5keF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT0gdGVzdC5tYXRjaC5mbiA/IChwb3NzaWJpbGl0eVBvcy5pbnB1dCAhPT0gdGVzdC5tYXRjaC5kZWYgJiYgKHZlcmlmeVZhbGlkSW5wdXQgPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gcG9zc2liaWxpdHlQb3MuZ2VuZXJhdGVkSW5wdXQgJiYgdmFsaWRJbnB1dHMucHVzaChwb3NzaWJpbGl0eVBvcy5pbnB1dCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSsrLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3NdLmdlbmVyYXRlZElucHV0ID0gIS9bMC05YS1iQS1aXS8udGVzdCh0ZXN0Lm1hdGNoLmRlZiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5pbnB1dCA9IHRlc3QubWF0Y2guZGVmKSA6IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10uaW5wdXQgPSBwb3NzaWJpbGl0eVBvcy5pbnB1dCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZGVjaXNpb25Qb3MgKyAxOyBpIDwgZ2V0TGFzdFZhbGlkUG9zaXRpb24odW5kZWZpbmVkLCAhMCkgKyAxOyBpKyspIHZhbGlkUG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUG9zICYmICEwICE9PSB2YWxpZFBvcy5nZW5lcmF0ZWRJbnB1dCAmJiAvWzAtOWEtYkEtWl0vLnRlc3QodmFsaWRQb3MuaW5wdXQpID8gdmFsaWRJbnB1dHMucHVzaCh2YWxpZFBvcy5pbnB1dCkgOiBpIDwgcG9zICYmIHN0YXRpY0lucHV0c0JlZm9yZVBvcysrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZlcmlmeVZhbGlkSW5wdXQgJiYgdmFsaWRJbnB1dHNbMF0gPT09IHRlc3QubWF0Y2guZGVmICYmIHZhbGlkSW5wdXRzLnNoaWZ0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKSwgaXNWYWxpZFJzbHQgPSAhMDsgdmFsaWRJbnB1dHMubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdmFsaWRJbnB1dHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQgIT09IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciAmJiAhKGlzVmFsaWRSc2x0ID0gaXNWYWxpZChnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKSArIDEsIGlucHV0LCAhMSwgZnJvbVNldFZhbGlkLCAhMCkpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkUnNsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvciA9IHBvc3NpYmlsaXRpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKHBvcykgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGRlY2lzaW9uUG9zICsgMTsgaSA8IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgKyAxOyBpKyspICgodmFsaWRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0pID09PSB1bmRlZmluZWQgfHwgbnVsbCA9PSB2YWxpZFBvcy5tYXRjaC5mbikgJiYgaSA8IHBvcyArIChzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUgLSBzdGF0aWNJbnB1dHNCZWZvcmVQb3MpICYmIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSBzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUgLSBzdGF0aWNJbnB1dHNCZWZvcmVQb3MsIGlzVmFsaWRSc2x0ID0gaXNWYWxpZChwb3MgPiB0YXJnZXRMdnAgPyB0YXJnZXRMdnAgOiBwb3MsIGMsIHN0cmljdCwgZnJvbVNldFZhbGlkLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFJzbHQpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCgpLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCghMCwge30sIHZhbGlkUHNDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZFJzbHQ7XG4gICAgICAgICAgICAgICAgfShtYXNrUG9zLCBjLCBzdHJpY3QpKSwgITAgPT09IHJlc3VsdCAmJiAocmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBwb3M6IG1hc2tQb3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5wb3N0VmFsaWRhdGlvbikgJiYgITEgIT09IHJlc3VsdCAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tU2V0VmFsaWQgJiYgITAgIT09IHZhbGlkYXRlT25seSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3N0UmVzdWx0ID0gb3B0cy5wb3N0VmFsaWRhdGlvbihnZXRCdWZmZXIoITApLCByZXN1bHQsIG9wdHMpO1xuICAgICAgICAgICAgICAgIGlmIChwb3N0UmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyICYmIHBvc3RSZXN1bHQuYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcG9zdFJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHBvc3RSZXN1bHQuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gITAgPT09IHBvc3RSZXN1bHQgPyByZXN1bHQgOiBwb3N0UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQucG9zID09PSB1bmRlZmluZWQgJiYgKHJlc3VsdC5wb3MgPSBtYXNrUG9zKSwgITEgIT09IHJlc3VsdCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5IHx8IChyZXNldE1hc2tTZXQoITApLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmUpKSwgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzTWFzayhwb3MsIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyIHRlc3QgPSBnZXRUZXN0VGVtcGxhdGUocG9zKS5tYXRjaDtcbiAgICAgICAgICAgIGlmIChcIlwiID09PSB0ZXN0LmRlZiAmJiAodGVzdCA9IGdldFRlc3QocG9zKS5tYXRjaCksIG51bGwgIT0gdGVzdC5mbikgcmV0dXJuIHRlc3QuZm47XG4gICAgICAgICAgICBpZiAoITAgIT09IHN0cmljdCAmJiBwb3MgPiAtMSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0cyA9IGdldFRlc3RzKHBvcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlZWtOZXh0KHBvcywgbmV3QmxvY2spIHtcbiAgICAgICAgICAgIHZhciBtYXNrTCA9IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBvcyA+PSBtYXNrTCkgcmV0dXJuIG1hc2tMO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgZm9yIChnZXRUZXN0cyhtYXNrTCArIDEpLmxlbmd0aCA+IDEgJiYgKGdldE1hc2tUZW1wbGF0ZSghMCwgbWFza0wgKyAxLCAhMCksIG1hc2tMID0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGgpOyArK3Bvc2l0aW9uIDwgbWFza0wgJiYgKCEwID09PSBuZXdCbG9jayAmJiAoITAgIT09IGdldFRlc3QocG9zaXRpb24pLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICFpc01hc2socG9zaXRpb24pKSB8fCAhMCAhPT0gbmV3QmxvY2sgJiYgIWlzTWFzayhwb3NpdGlvbikpOyApIDtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZWVrUHJldmlvdXMocG9zLCBuZXdCbG9jaykge1xuICAgICAgICAgICAgdmFyIHRlc3RzLCBwb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSAwKSByZXR1cm4gMDtcbiAgICAgICAgICAgIGZvciAoOy0tcG9zaXRpb24gPiAwICYmICghMCA9PT0gbmV3QmxvY2sgJiYgITAgIT09IGdldFRlc3QocG9zaXRpb24pLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICEwICE9PSBuZXdCbG9jayAmJiAhaXNNYXNrKHBvc2l0aW9uKSAmJiAodGVzdHMgPSBnZXRUZXN0cyhwb3NpdGlvbiksIFxuICAgICAgICAgICAgdGVzdHMubGVuZ3RoIDwgMiB8fCAyID09PSB0ZXN0cy5sZW5ndGggJiYgXCJcIiA9PT0gdGVzdHNbMV0ubWF0Y2guZGVmKSk7ICkgO1xuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlckVsZW1lbnQocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zaXRpb25dID09PSB1bmRlZmluZWQgPyBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbikgOiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zaXRpb25dLmlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIsIGNhcmV0UG9zLCBldmVudCwgdHJpZ2dlcklucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudCAmJiAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVdyaXRlKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvcHRzLm9uQmVmb3JlV3JpdGUuY2FsbChpbnB1dG1hc2ssIGV2ZW50LCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHJlc3VsdC5idWZmZXIgfHwgYnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBnZXRCdWZmZXIoITApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zICE9PSB1bmRlZmluZWQgJiYgKGNhcmV0UG9zID0gcmVzdWx0LmNhcmV0ICE9PSB1bmRlZmluZWQgPyByZXN1bHQuY2FyZXQgOiBjYXJldFBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQgIT09IHVuZGVmaW5lZCAmJiAoaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChidWZmZXIuam9pbihcIlwiKSksIGNhcmV0UG9zID09PSB1bmRlZmluZWQgfHwgZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBcImJsdXJcIiA9PT0gZXZlbnQudHlwZSA/IHJlbmRlckNvbG9yTWFzayhpbnB1dCwgY2FyZXRQb3MsIDAgPT09IGJ1ZmZlci5sZW5ndGgpIDogYW5kcm9pZCAmJiBldmVudCAmJiBcImlucHV0XCIgPT09IGV2ZW50LnR5cGUgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBjYXJldFBvcyk7XG4gICAgICAgICAgICB9LCAwKSA6IGNhcmV0KGlucHV0LCBjYXJldFBvcyksICEwID09PSB0cmlnZ2VySW5wdXRFdmVudCAmJiAoc2tpcElucHV0RXZlbnQgPSAhMCwgXG4gICAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKFwiaW5wdXRcIikpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QsIHJldHVyblBMKSB7XG4gICAgICAgICAgICBpZiAodGVzdCA9IHRlc3QgfHwgZ2V0VGVzdChwb3MpLm1hdGNoLCB0ZXN0LnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgfHwgITAgPT09IHJldHVyblBMKSByZXR1cm4gJC5pc0Z1bmN0aW9uKHRlc3QucGxhY2Vob2xkZXIpID8gdGVzdC5wbGFjZWhvbGRlcihvcHRzKSA6IHRlc3QucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBpZiAobnVsbCA9PT0gdGVzdC5mbikge1xuICAgICAgICAgICAgICAgIGlmIChwb3MgPiAtMSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2VGVzdCwgdGVzdHMgPSBnZXRUZXN0cyhwb3MpLCBzdGF0aWNBbHRlcm5hdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApKSBmb3IgKHZhciBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSBpZiAoITAgIT09IHRlc3RzW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmICEwICE9PSB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgKG51bGwgPT09IHRlc3RzW2ldLm1hdGNoLmZuIHx8IHByZXZUZXN0ID09PSB1bmRlZmluZWQgfHwgITEgIT09IHRlc3RzW2ldLm1hdGNoLmZuLnRlc3QocHJldlRlc3QubWF0Y2guZGVmLCBnZXRNYXNrU2V0KCksIHBvcywgITAsIG9wdHMpKSAmJiAoc3RhdGljQWx0ZXJuYXRpb25zLnB1c2godGVzdHNbaV0pLCBcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gdGVzdHNbaV0ubWF0Y2guZm4gJiYgKHByZXZUZXN0ID0gdGVzdHNbaV0pLCBzdGF0aWNBbHRlcm5hdGlvbnMubGVuZ3RoID4gMSAmJiAvWzAtOWEtYkEtWl0vLnRlc3Qoc3RhdGljQWx0ZXJuYXRpb25zWzBdLm1hdGNoLmRlZikpKSByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdC5kZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmFsKGlucHV0LCB3cml0ZU91dCwgc3RyaWN0LCBucHR2bCwgaW5pdGlhdGluZ0V2ZW50KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1RlbXBsYXRlTWF0Y2gobmR4LCBjaGFyQ29kZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuc2xpY2UobmR4LCBzZWVrTmV4dChuZHgpKS5qb2luKFwiXCIpLmluZGV4T2YoY2hhckNvZGVzKSAmJiAhaXNNYXNrKG5keCkgJiYgZ2V0VGVzdChuZHgpLm1hdGNoLm5hdGl2ZURlZiA9PT0gY2hhckNvZGVzLmNoYXJBdChjaGFyQ29kZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IG5wdHZsLnNsaWNlKCksIGNoYXJDb2RlcyA9IFwiXCIsIGluaXRpYWxOZHggPSAtMSwgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHJlc2V0TWFza1NldCgpLCBzdHJpY3QgfHwgITAgPT09IG9wdHMuYXV0b1VubWFzaykgaW5pdGlhbE5keCA9IHNlZWtOZXh0KGluaXRpYWxOZHgpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGljSW5wdXQgPSBnZXRCdWZmZXJUZW1wbGF0ZSgpLnNsaWNlKDAsIHNlZWtOZXh0KC0xKSkuam9pbihcIlwiKSwgbWF0Y2hlcyA9IGlucHV0VmFsdWUuam9pbihcIlwiKS5tYXRjaChuZXcgUmVnRXhwKFwiXlwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KHN0YXRpY0lucHV0KSwgXCJnXCIpKTtcbiAgICAgICAgICAgICAgICBtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoaW5wdXRWYWx1ZS5zcGxpY2UoMCwgbWF0Y2hlcy5sZW5ndGggKiBzdGF0aWNJbnB1dC5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICBpbml0aWFsTmR4ID0gc2Vla05leHQoaW5pdGlhbE5keCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC0xID09PSBpbml0aWFsTmR4ID8gKGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQoaW5pdGlhbE5keCksIGluaXRpYWxOZHggPSAwKSA6IGdldE1hc2tTZXQoKS5wID0gaW5pdGlhbE5keCwgXG4gICAgICAgICAgICAkLmVhY2goaW5wdXRWYWx1ZSwgZnVuY3Rpb24obmR4LCBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPT0gdW5kZWZpbmVkKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW25keF0gPT09IHVuZGVmaW5lZCAmJiBpbnB1dFZhbHVlW25keF0gPT09IGdldFBsYWNlaG9sZGVyKG5keCkgJiYgaXNNYXNrKG5keCwgITApICYmICExID09PSBpc1ZhbGlkKG5keCwgaW5wdXRWYWx1ZVtuZHhdLCAhMCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICEwKSkgZ2V0TWFza1NldCgpLnArKzsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwiX2NoZWNrdmFsXCIpO1xuICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGNoYXJDb2RlLmNoYXJDb2RlQXQoMCksIGNoYXJDb2RlcyArPSBjaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgITApLCBsdlRlc3QgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbHZwXSwgbmV4dFRlc3QgPSBnZXRUZXN0VGVtcGxhdGUobHZwICsgMSwgbHZUZXN0ID8gbHZUZXN0LmxvY2F0b3Iuc2xpY2UoKSA6IHVuZGVmaW5lZCwgbHZwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RlbXBsYXRlTWF0Y2goaW5pdGlhbE5keCwgY2hhckNvZGVzKSB8fCBzdHJpY3QgfHwgb3B0cy5hdXRvVW5tYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gc3RyaWN0ID8gbmR4IDogbnVsbCA9PSBuZXh0VGVzdC5tYXRjaC5mbiAmJiBuZXh0VGVzdC5tYXRjaC5vcHRpb25hbGl0eSAmJiBsdnAgKyAxIDwgZ2V0TWFza1NldCgpLnAgPyBsdnAgKyAxIDogZ2V0TWFza1NldCgpLnA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MsICEwLCAhMSwgc3RyaWN0LCBwb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxOZHggPSBwb3MgKyAxLCBjaGFyQ29kZXMgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmVzdWx0ID0gRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITEsICEwLCBsdnAgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSByZXN1bHQgJiYgIXN0cmljdCAmJiAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVdyaXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID0gb3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwoaW5wdXRtYXNrLCBrZXlwcmVzcywgZ2V0QnVmZmVyKCksIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24sIG9wdHMpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQgPSAkLmV4dGVuZChvcmlnUmVzdWx0LCByZXN1bHQpKSAmJiByZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcighMCA9PT0gcmVmcmVzaCA/IHJlZnJlc2ggOiByZWZyZXNoLnN0YXJ0LCByZWZyZXNoLmVuZCwgcmVzdWx0LmJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCghMCksIHJlc3VsdC5jYXJldCAmJiAoZ2V0TWFza1NldCgpLnAgPSByZXN1bHQuY2FyZXQsIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSByZXN1bHQuY2FyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIHdyaXRlT3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGlucHV0ICYmIHJlc3VsdCAmJiAoY2FyZXRQb3MgPSBvcHRzLm51bWVyaWNJbnB1dCA/IHNlZWtQcmV2aW91cyhyZXN1bHQuZm9yd2FyZFBvc2l0aW9uKSA6IHJlc3VsdC5mb3J3YXJkUG9zaXRpb24pLCBcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGNhcmV0UG9zLCBpbml0aWF0aW5nRXZlbnQgfHwgbmV3ICQuRXZlbnQoXCJjaGVja3ZhbFwiKSwgaW5pdGlhdGluZ0V2ZW50ICYmIFwiaW5wdXRcIiA9PT0gaW5pdGlhdGluZ0V2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVubWFza2VkdmFsdWUoaW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzayAmJiBpbnB1dC5pbnB1dG1hc2sucmVmcmVzaFZhbHVlICYmIEV2ZW50SGFuZGxlcnMuc2V0VmFsdWVFdmVudC5jYWxsKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1bVZhbHVlID0gW10sIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucztcbiAgICAgICAgICAgIGZvciAodmFyIHBuZHggaW4gdnBzKSB2cHNbcG5keF0ubWF0Y2ggJiYgbnVsbCAhPSB2cHNbcG5keF0ubWF0Y2guZm4gJiYgdW1WYWx1ZS5wdXNoKHZwc1twbmR4XS5pbnB1dCk7XG4gICAgICAgICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IDAgPT09IHVtVmFsdWUubGVuZ3RoID8gXCJcIiA6IChpc1JUTCA/IHVtVmFsdWUucmV2ZXJzZSgpIDogdW1WYWx1ZSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5vblVuTWFzaykpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVmFsdWUgPSAoaXNSVEwgPyBnZXRCdWZmZXIoKS5zbGljZSgpLnJldmVyc2UoKSA6IGdldEJ1ZmZlcigpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgIHVubWFza2VkVmFsdWUgPSBvcHRzLm9uVW5NYXNrLmNhbGwoaW5wdXRtYXNrLCBidWZmZXJWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYXJldChpbnB1dCwgYmVnaW4sIGVuZCwgbm90cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZVBvc2l0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIGlmICghMCAhPT0gbm90cmFuc2xhdGUgJiYgaXNSVEwgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgcG9zICYmICghb3B0cy5ncmVlZHkgfHwgXCJcIiAhPT0gb3B0cy5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKS5sZW5ndGggLSBwb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmFuZ2U7XG4gICAgICAgICAgICBpZiAoYmVnaW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0LnNldFNlbGVjdGlvblJhbmdlID8gKGJlZ2luID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQsIFxuICAgICAgICAgICAgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kKSA6IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyAocmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSwgXG4gICAgICAgICAgICByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnROb2RlICE9PSBpbnB1dCAmJiByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lciAhPT0gaW5wdXQgfHwgKGJlZ2luID0gcmFuZ2Uuc3RhcnRPZmZzZXQsIFxuICAgICAgICAgICAgZW5kID0gcmFuZ2UuZW5kT2Zmc2V0KSkgOiBkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlICYmIChyYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLCBcbiAgICAgICAgICAgIGJlZ2luID0gMCAtIHJhbmdlLmR1cGxpY2F0ZSgpLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCAtaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgZW5kID0gYmVnaW4gKyByYW5nZS50ZXh0Lmxlbmd0aCksIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogdHJhbnNsYXRlUG9zaXRpb24oYmVnaW4pLFxuICAgICAgICAgICAgICAgIGVuZDogdHJhbnNsYXRlUG9zaXRpb24oZW5kKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChiZWdpbi5iZWdpbiAhPT0gdW5kZWZpbmVkICYmIChlbmQgPSBiZWdpbi5lbmQsIGJlZ2luID0gYmVnaW4uYmVnaW4pLCBcIm51bWJlclwiID09IHR5cGVvZiBiZWdpbikge1xuICAgICAgICAgICAgICAgIGJlZ2luID0gdHJhbnNsYXRlUG9zaXRpb24oYmVnaW4pLCBlbmQgPSB0cmFuc2xhdGVQb3NpdGlvbihlbmQpLCBlbmQgPSBcIm51bWJlclwiID09IHR5cGVvZiBlbmQgPyBlbmQgOiBiZWdpbjtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsQ2FsYyA9IHBhcnNlSW50KCgoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUgPyAoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUoaW5wdXQsIG51bGwpIDogaW5wdXQuY3VycmVudFN0eWxlKS5mb250U2l6ZSkgKiBlbmQ7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnNjcm9sbExlZnQgPSBzY3JvbGxDYWxjID4gaW5wdXQuc2Nyb2xsV2lkdGggPyBzY3JvbGxDYWxjIDogMCwgbW9iaWxlIHx8ICExICE9PSBvcHRzLmluc2VydE1vZGUgfHwgYmVnaW4gIT09IGVuZCB8fCBlbmQrKywgXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UpIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gYmVnaW4sIGlucHV0LnNlbGVjdGlvbkVuZCA9IGVuZDsgZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLCBpbnB1dC5maXJzdENoaWxkID09PSB1bmRlZmluZWQgfHwgbnVsbCA9PT0gaW5wdXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoaW5wdXQuZmlyc3RDaGlsZCwgYmVnaW4gPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gYmVnaW4gOiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChpbnB1dC5maXJzdENoaWxkLCBlbmQgPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gZW5kIDogaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICByYW5nZS5jb2xsYXBzZSghMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKSwgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaW5wdXQuY3JlYXRlVGV4dFJhbmdlICYmIChyYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpLCByYW5nZS5jb2xsYXBzZSghMCksIFxuICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgZW5kKSwgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIGJlZ2luKSwgcmFuZ2Uuc2VsZWN0KCkpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNvbG9yTWFzayhpbnB1dCwge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogYmVnaW4sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24ocmV0dXJuRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgdmFyIHBvcywgdGVzdFBvcywgYnVmZmVyID0gZ2V0QnVmZmVyKCksIGJsID0gYnVmZmVyLmxlbmd0aCwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgcG9zaXRpb25zID0ge30sIGx2VGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdnBdLCBuZHhJbnRsenIgPSBsdlRlc3QgIT09IHVuZGVmaW5lZCA/IGx2VGVzdC5sb2NhdG9yLnNsaWNlKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHBvcyA9IGx2cCArIDE7IHBvcyA8IGJ1ZmZlci5sZW5ndGg7IHBvcysrKSB0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXG4gICAgICAgICAgICBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgcG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHRlc3RQb3MpO1xuICAgICAgICAgICAgdmFyIGx2VGVzdEFsdCA9IGx2VGVzdCAmJiBsdlRlc3QuYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IGx2VGVzdC5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHBvcyA9IGJsIC0gMTsgcG9zID4gbHZwICYmICh0ZXN0UG9zID0gcG9zaXRpb25zW3Bvc10sICh0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsaXR5IHx8IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgbHZUZXN0QWx0ICYmIChsdlRlc3RBbHQgIT09IHBvc2l0aW9uc1twb3NdLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAmJiBudWxsICE9IHRlc3RQb3MubWF0Y2guZm4gfHwgbnVsbCA9PT0gdGVzdFBvcy5tYXRjaC5mbiAmJiB0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAmJiBjaGVja0FsdGVybmF0aW9uTWF0Y2godGVzdFBvcy5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIiksIGx2VGVzdEFsdC50b1N0cmluZygpLnNwbGl0KFwiLFwiKSkgJiYgXCJcIiAhPT0gZ2V0VGVzdHMocG9zKVswXS5kZWYpKSAmJiBidWZmZXJbcG9zXSA9PT0gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0UG9zLm1hdGNoKSk7IHBvcy0tKSBibC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRlZmluaXRpb24gPyB7XG4gICAgICAgICAgICAgICAgbDogYmwsXG4gICAgICAgICAgICAgICAgZGVmOiBwb3NpdGlvbnNbYmxdID8gcG9zaXRpb25zW2JsXS5tYXRjaCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSA6IGJsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikge1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsaWRQb3MsIHJsID0gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24oKSwgYmwgPSBidWZmZXIubGVuZ3RoLCBsdiA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tnZXRMYXN0VmFsaWRQb3NpdGlvbigpXTsgcmwgPCBibCAmJiAhaXNNYXNrKHJsLCAhMCkgJiYgKHZhbGlkUG9zID0gbHYgIT09IHVuZGVmaW5lZCA/IGdldFRlc3RUZW1wbGF0ZShybCwgbHYubG9jYXRvci5zbGljZShcIlwiKSwgbHYpIDogZ2V0VGVzdChybCkpICYmICEwICE9PSB2YWxpZFBvcy5tYXRjaC5vcHRpb25hbGl0eSAmJiAoITAgIT09IHZhbGlkUG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdmFsaWRQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgcmwgKyAxID09PSBibCAmJiBcIlwiID09PSAobHYgIT09IHVuZGVmaW5lZCA/IGdldFRlc3RUZW1wbGF0ZShybCArIDEsIGx2LmxvY2F0b3Iuc2xpY2UoXCJcIiksIGx2KSA6IGdldFRlc3QocmwgKyAxKSkubWF0Y2guZGVmKTsgKSBybCsrO1xuICAgICAgICAgICAgZm9yICg7KHZhbGlkUG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3JsIC0gMV0pICYmIHZhbGlkUG9zICYmIHZhbGlkUG9zLm1hdGNoLm9wdGlvbmFsaXR5ICYmIHZhbGlkUG9zLmlucHV0ID09PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7ICkgcmwtLTtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIuc3BsaWNlKHJsKSwgYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzQ29tcGxldGUoYnVmZmVyKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMuaXNDb21wbGV0ZSkpIHJldHVybiBvcHRzLmlzQ29tcGxldGUoYnVmZmVyLCBvcHRzKTtcbiAgICAgICAgICAgIGlmIChcIipcIiA9PT0gb3B0cy5yZXBlYXQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgY29tcGxldGUgPSAhMSwgbHJwID0gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24oITApLCBhbWwgPSBzZWVrUHJldmlvdXMobHJwLmwpO1xuICAgICAgICAgICAgaWYgKGxycC5kZWYgPT09IHVuZGVmaW5lZCB8fCBscnAuZGVmLm5ld0Jsb2NrTWFya2VyIHx8IGxycC5kZWYub3B0aW9uYWxpdHkgfHwgbHJwLmRlZi5vcHRpb25hbFF1YW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9ICEwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGFtbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gZ2V0VGVzdFRlbXBsYXRlKGkpLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gdGVzdC5mbiAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0gPT09IHVuZGVmaW5lZCAmJiAhMCAhPT0gdGVzdC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdC5vcHRpb25hbFF1YW50aWZpZXIgfHwgbnVsbCA9PT0gdGVzdC5mbiAmJiBidWZmZXJbaV0gIT09IGdldFBsYWNlaG9sZGVyKGksIHRlc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGlucHV0LCBrLCBwb3MsIHN0cmljdCwgZnJvbUlzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmICgob3B0cy5udW1lcmljSW5wdXQgfHwgaXNSVEwpICYmIChrID09PSBJbnB1dG1hc2sua2V5Q29kZS5CQUNLU1BBQ0UgPyBrID0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFICYmIChrID0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFKSwgXG4gICAgICAgICAgICBpc1JUTCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVuZCA9IHBvcy5lbmQ7XG4gICAgICAgICAgICAgICAgcG9zLmVuZCA9IHBvcy5iZWdpbiwgcG9zLmJlZ2luID0gcGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSAmJiAocG9zLmVuZCAtIHBvcy5iZWdpbiA8IDEgfHwgITEgPT09IG9wdHMuaW5zZXJ0TW9kZSkgPyAocG9zLmJlZ2luID0gc2Vla1ByZXZpb3VzKHBvcy5iZWdpbiksIFxuICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5iZWdpbl0gIT09IHVuZGVmaW5lZCAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXS5pbnB1dCA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiBwb3MuYmVnaW4tLSkgOiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5ERUxFVEUgJiYgcG9zLmJlZ2luID09PSBwb3MuZW5kICYmIChwb3MuZW5kID0gaXNNYXNrKHBvcy5lbmQsICEwKSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmVuZF0gJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5lbmRdLmlucHV0ICE9PSBvcHRzLnJhZGl4UG9pbnQgPyBwb3MuZW5kICsgMSA6IHNlZWtOZXh0KHBvcy5lbmQpICsgMSwgXG4gICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXSAhPT0gdW5kZWZpbmVkICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MuYmVnaW5dLmlucHV0ID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIHBvcy5lbmQrKyksIFxuICAgICAgICAgICAgc3RyaXBWYWxpZFBvc2l0aW9ucyhwb3MuYmVnaW4sIHBvcy5lbmQsICExLCBzdHJpY3QpLCAhMCAhPT0gc3RyaWN0ICYmIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmtlZXBTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdmFsaWRJbnB1dHMgPSBbXSwgbGFzdEFsdCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKC0xLCAhMCksIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBwcmV2QWx0UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2xhc3RBbHRdOyBsYXN0QWx0ID49IDA7IGxhc3RBbHQtLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsYXN0QWx0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IGFsdFBvcy5nZW5lcmF0ZWRJbnB1dCAmJiAvWzAtOWEtYkEtWl0vLnRlc3QoYWx0UG9zLmlucHV0KSAmJiB2YWxpZElucHV0cy5wdXNoKGFsdFBvcy5pbnB1dCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF0sIGFsdFBvcy5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkICYmIGFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0gIT09IHByZXZBbHRQb3MubG9jYXRvclthbHRQb3MuYWx0ZXJuYXRpb25dKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2QWx0UG9zID0gYWx0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWx0ID4gLTEpIGZvciAoZ2V0TWFza1NldCgpLnAgPSBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigtMSwgITApKTsgdmFsaWRJbnB1dHMubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cHJlc3MgPSBuZXcgJC5FdmVudChcImtleXByZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3Mud2hpY2ggPSB2YWxpZElucHV0cy5wb3AoKS5jaGFyQ29kZUF0KDApLCBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MsICEwLCAhMSwgITEsIGdldE1hc2tTZXQoKS5wKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHZhciBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbihwb3MuYmVnaW4sICEwKTtcbiAgICAgICAgICAgIGlmIChsdnAgPCBwb3MuYmVnaW4pIGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQobHZwKTsgZWxzZSBpZiAoITAgIT09IHN0cmljdCAmJiAoZ2V0TWFza1NldCgpLnAgPSBwb3MuYmVnaW4sIFxuICAgICAgICAgICAgITAgIT09IGZyb21Jc1ZhbGlkKSkgZm9yICg7Z2V0TWFza1NldCgpLnAgPCBsdnAgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2dldE1hc2tTZXQoKS5wXSA9PT0gdW5kZWZpbmVkOyApIGdldE1hc2tTZXQoKS5wKys7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbG9yTWFzayhpbnB1dCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZmluZENhcmV0UG9zKGNsaWVudHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MsIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzdHlsZSBpbiBjb21wdXRlZFN0eWxlKSBpc05hTihzdHlsZSkgJiYgLTEgIT09IHN0eWxlLmluZGV4T2YoXCJmb250XCIpICYmIChlLnN0eWxlW3N0eWxlXSA9IGNvbXB1dGVkU3R5bGVbc3R5bGVdKTtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLnRleHRUcmFuc2Zvcm0sIGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IGNvbXB1dGVkU3R5bGUubGV0dGVyU3BhY2luZywgXG4gICAgICAgICAgICAgICAgZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIiwgZS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIiwgZS5zdHlsZS53aWR0aCA9IFwiYXV0b1wiLCBcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLCBlLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiLCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgICAgIHZhciBpdGwsIGlucHV0VGV4dCA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSwgcHJldmlvdXNXaWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChjYXJldFBvcyA9IDAsIGl0bCA9IGlucHV0VGV4dC5sZW5ndGg7IGNhcmV0UG9zIDw9IGl0bDsgY2FyZXRQb3MrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5pbm5lckhUTUwgKz0gaW5wdXRUZXh0LmNoYXJBdChjYXJldFBvcykgfHwgXCJfXCIsIGUub2Zmc2V0V2lkdGggPj0gY2xpZW50eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldDEgPSBjbGllbnR4IC0gcHJldmlvdXNXaWR0aCwgb2Zmc2V0MiA9IGUub2Zmc2V0V2lkdGggLSBjbGllbnR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBpbnB1dFRleHQuY2hhckF0KGNhcmV0UG9zKSwgb2Zmc2V0MSAtPSBlLm9mZnNldFdpZHRoIC8gMywgY2FyZXRQb3MgPSBvZmZzZXQxIDwgb2Zmc2V0MiA/IGNhcmV0UG9zIC0gMSA6IGNhcmV0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNXaWR0aCA9IGUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUpLCBjYXJldFBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gKGlucHV0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlKGlucHV0LCBudWxsKSwgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGUud2lkdGggPSBjb21wdXRlZFN0eWxlLndpZHRoLCB0ZW1wbGF0ZS5zdHlsZS50ZXh0QWxpZ24gPSBjb21wdXRlZFN0eWxlLnRleHRBbGlnbiwgXG4gICAgICAgICAgICBjb2xvck1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBjb2xvck1hc2suY2xhc3NOYW1lID0gXCJpbS1jb2xvcm1hc2tcIiwgXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb2xvck1hc2ssIGlucHV0KSwgaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnB1dCksIFxuICAgICAgICAgICAgY29sb3JNYXNrLmFwcGVuZENoaWxkKHRlbXBsYXRlKSwgY29sb3JNYXNrLmFwcGVuZENoaWxkKGlucHV0KSwgaW5wdXQuc3R5bGUubGVmdCA9IHRlbXBsYXRlLm9mZnNldExlZnQgKyBcInB4XCIsIFxuICAgICAgICAgICAgJChpbnB1dCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmV0KGlucHV0LCBmaW5kQ2FyZXRQb3MoZS5jbGllbnRYKSksIEV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudC5jYWxsKGlucHV0LCBbIGUgXSk7XG4gICAgICAgICAgICB9KSwgJChpbnB1dCkub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5IHx8ICExID09PSBvcHRzLmluc2VydE1vZGUgfHwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29sb3JNYXNrKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckNvbG9yTWFzayhpbnB1dCwgY2FyZXRQb3MsIGNsZWFyKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdGF0aWMoKSB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWMgfHwgbnVsbCAhPT0gdGVzdC5mbiAmJiB0ZXN0UG9zLmlucHV0ICE9PSB1bmRlZmluZWQgPyBpc1N0YXRpYyAmJiAobnVsbCAhPT0gdGVzdC5mbiAmJiB0ZXN0UG9zLmlucHV0ICE9PSB1bmRlZmluZWQgfHwgXCJcIiA9PT0gdGVzdC5kZWYpICYmIChpc1N0YXRpYyA9ICExLCBcbiAgICAgICAgICAgICAgICBtYXNrVGVtcGxhdGUgKz0gXCI8L3NwYW4+XCIpIDogKGlzU3RhdGljID0gITAsIG1hc2tUZW1wbGF0ZSArPSBcIjxzcGFuIGNsYXNzPSdpbS1zdGF0aWMnPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNhcmV0KGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgITAgIT09IGZvcmNlICYmIHBvcyAhPT0gY2FyZXRQb3MuYmVnaW4gfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXQgfHwgKG1hc2tUZW1wbGF0ZSArPSBcIjxzcGFuIGNsYXNzPSdpbS1jYXJldCcgc3R5bGU9J2JvcmRlci1yaWdodC13aWR0aDogMXB4O2JvcmRlci1yaWdodC1zdHlsZTogc29saWQ7Jz48L3NwYW4+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRlc3QsIHRlc3RQb3MsIG5keEludGx6ciwgbWFza1RlbXBsYXRlID0gXCJcIiwgaXNTdGF0aWMgPSAhMSwgcG9zID0gMDtcbiAgICAgICAgICAgIGlmIChjb2xvck1hc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZXRQb3MgPT09IHVuZGVmaW5lZCA/IGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpIDogY2FyZXRQb3MuYmVnaW4gPT09IHVuZGVmaW5lZCAmJiAoY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBjYXJldFBvc1xuICAgICAgICAgICAgICAgIH0pLCAhMCAhPT0gY2xlYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNhcmV0KCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID8gKHRlc3RQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksIGhhbmRsZVN0YXRpYygpLCBtYXNrVGVtcGxhdGUgKz0gYnVmZmVyW3Bvc10pIDogKHRlc3RQb3MgPSBnZXRUZXN0VGVtcGxhdGUocG9zLCBuZHhJbnRsenIsIHBvcyAtIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgPSB0ZXN0UG9zLm1hdGNoLCBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgKCExID09PSBvcHRzLmppdE1hc2tpbmcgfHwgcG9zIDwgbHZwIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIG9wdHMuaml0TWFza2luZyAmJiBpc0Zpbml0ZShvcHRzLmppdE1hc2tpbmcpICYmIG9wdHMuaml0TWFza2luZyA+IHBvcykgJiYgKGhhbmRsZVN0YXRpYygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUZW1wbGF0ZSArPSBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QpKSksIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgcG9zIDwgbWF4TGVuZ3RoKSAmJiAobnVsbCAhPT0gdGVzdC5mbiB8fCBcIlwiICE9PSB0ZXN0LmRlZikgfHwgbHZwID4gcG9zIHx8IGlzU3RhdGljKTtcbiAgICAgICAgICAgICAgICAgICAgLTEgPT09IG1hc2tUZW1wbGF0ZS5pbmRleE9mKFwiaW0tY2FyZXRcIikgJiYgaGFuZGxlQ2FyZXQoITApLCBpc1N0YXRpYyAmJiBoYW5kbGVTdGF0aWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gY29sb3JNYXNrLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpWzBdO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IG1hc2tUZW1wbGF0ZSwgaW5wdXQuaW5wdXRtYXNrLnBvc2l0aW9uQ29sb3JNYXNrKGlucHV0LCB0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFza3NldCA9IG1hc2tzZXQgfHwgdGhpcy5tYXNrc2V0LCBvcHRzID0gb3B0cyB8fCB0aGlzLm9wdHM7XG4gICAgICAgIHZhciB1bmRvVmFsdWUsICRlbCwgbWF4TGVuZ3RoLCBjb2xvck1hc2ssIGlucHV0bWFzayA9IHRoaXMsIGVsID0gdGhpcy5lbCwgaXNSVEwgPSB0aGlzLmlzUlRMLCBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExLCBpZ25vcmFibGUgPSAhMSwgbW91c2VFbnRlciA9ICExLCBFdmVudFJ1bGVyID0ge1xuICAgICAgICAgICAgb246IGZ1bmN0aW9uKGlucHV0LCBldmVudE5hbWUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBldiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRtYXNrID09PSB1bmRlZmluZWQgJiYgXCJGT1JNXCIgIT09IHRoaXMubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbU9wdHMgPSAkLmRhdGEodGhpcywgXCJfaW5wdXRtYXNrX29wdHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbU9wdHMgPyBuZXcgSW5wdXRtYXNrKGltT3B0cykubWFzayh0aGlzKSA6IEV2ZW50UnVsZXIub2ZmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic2V0dmFsdWVcIiA9PT0gZS50eXBlIHx8IFwiRk9STVwiID09PSB0aGlzLm5vZGVOYW1lIHx8ICEodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5ICYmICEoXCJrZXlkb3duXCIgPT09IGUudHlwZSAmJiBlLmN0cmxLZXkgJiYgNjcgPT09IGUua2V5Q29kZSB8fCAhMSA9PT0gb3B0cy50YWJUaHJvdWdoICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuVEFCKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gc2tpcElucHV0RXZlbnQpIHJldHVybiBza2lwSW5wdXRFdmVudCA9ICExLCBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5ZG93blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImtleXByZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gc2tpcEtleVByZXNzRXZlbnQpIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBLZXlQcmVzc0V2ZW50ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGllbW9iaWxlIHx8IGlwaG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCksICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWwgPSBldmVudEhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgPT09IHJldHVyblZhbCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpKSwgcmV0dXJuVmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0gfHwgW10sIGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGV2KSwgXG4gICAgICAgICAgICAgICAgLTEgIT09ICQuaW5BcnJheShldmVudE5hbWUsIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0pID8gbnVsbCAhPT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9uKGV2ZW50TmFtZSwgZXYpIDogJChpbnB1dCkub24oZXZlbnROYW1lLCBldik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbihpbnB1dCwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrICYmIGlucHV0LmlucHV0bWFzay5ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPyAoZXZlbnRzID0gW10sIGV2ZW50c1tldmVudF0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50XSkgOiBldmVudHMgPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzLCBcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGV2ZW50cywgZnVuY3Rpb24oZXZlbnROYW1lLCBldkFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZXZBcnIubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ID0gZXZBcnIucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09ICQuaW5BcnJheShldmVudE5hbWUsIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0pID8gbnVsbCAhPT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9mZihldmVudE5hbWUsIGV2KSA6ICQoaW5wdXQpLm9mZihldmVudE5hbWUsIGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgRXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsICRpbnB1dCA9ICQoaW5wdXQpLCBrID0gZS5rZXlDb2RlLCBwb3MgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSB8fCBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5ERUxFVEUgfHwgaXBob25lICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRV9TQUZBUkkgfHwgZS5jdHJsS2V5ICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLlggJiYgIWZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIGV2TmFtZSA9IFwib25cIiArIGV2ZW50TmFtZSwgaXNTdXBwb3J0ZWQgPSBldk5hbWUgaW4gZWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZCB8fCAoZWwuc2V0QXR0cmlidXRlKGV2TmFtZSwgXCJyZXR1cm47XCIpLCBpc1N1cHBvcnRlZCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZWxbZXZOYW1lXSksIFxuICAgICAgICAgICAgICAgICAgICBlbCA9IG51bGwsIGlzU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgIH0oXCJjdXRcIikpIGUucHJldmVudERlZmF1bHQoKSwgaGFuZGxlUmVtb3ZlKGlucHV0LCBrLCBwb3MpLCB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCEwKSwgZ2V0TWFza1NldCgpLnAsIGUsIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSksIFxuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpID8gJGlucHV0LnRyaWdnZXIoXCJjbGVhcmVkXCIpIDogITAgPT09IGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIik7IGVsc2UgaWYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLkVORCB8fCBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5QQUdFX0RPV04pIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnNlcnRNb2RlIHx8IGNhcmV0UG9zICE9PSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCB8fCBlLnNoaWZ0S2V5IHx8IGNhcmV0UG9zLS0sIFxuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IGNhcmV0UG9zLCBjYXJldFBvcywgITApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5IT01FICYmICFlLnNoaWZ0S2V5IHx8IGsgPT09IElucHV0bWFzay5rZXlDb2RlLlBBR0VfVVAgPyAoZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgMCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IDAsICEwKSkgOiAob3B0cy51bmRvT25Fc2NhcGUgJiYgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRVNDQVBFIHx8IDkwID09PSBrICYmIGUuY3RybEtleSkgJiYgITAgIT09IGUuYWx0S2V5ID8gKGNoZWNrVmFsKGlucHV0LCAhMCwgITEsIHVuZG9WYWx1ZS5zcGxpdChcIlwiKSksIFxuICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2xpY2tcIikpIDogayAhPT0gSW5wdXRtYXNrLmtleUNvZGUuSU5TRVJUIHx8IGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5ID8gITAgPT09IG9wdHMudGFiVGhyb3VnaCAmJiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5UQUIgPyAoITAgPT09IGUuc2hpZnRLZXkgPyAobnVsbCA9PT0gZ2V0VGVzdChwb3MuYmVnaW4pLm1hdGNoLmZuICYmIChwb3MuYmVnaW4gPSBzZWVrTmV4dChwb3MuYmVnaW4pKSwgXG4gICAgICAgICAgICAgICAgcG9zLmVuZCA9IHNlZWtQcmV2aW91cyhwb3MuYmVnaW4sICEwKSwgcG9zLmJlZ2luID0gc2Vla1ByZXZpb3VzKHBvcy5lbmQsICEwKSkgOiAocG9zLmJlZ2luID0gc2Vla05leHQocG9zLmJlZ2luLCAhMCksIFxuICAgICAgICAgICAgICAgIHBvcy5lbmQgPSBzZWVrTmV4dChwb3MuYmVnaW4sICEwKSwgcG9zLmVuZCA8IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoICYmIHBvcy5lbmQtLSksIFxuICAgICAgICAgICAgICAgIHBvcy5iZWdpbiA8IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoICYmIChlLnByZXZlbnREZWZhdWx0KCksIGNhcmV0KGlucHV0LCBwb3MuYmVnaW4sIHBvcy5lbmQpKSkgOiBlLnNoaWZ0S2V5IHx8ICExID09PSBvcHRzLmluc2VydE1vZGUgJiYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUID8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgY2FyZXRQb3MuYmVnaW4pO1xuICAgICAgICAgICAgICAgIH0sIDApIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuTEVGVCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBpc1JUTCA/IGNhcmV0UG9zLmJlZ2luICsgMSA6IGNhcmV0UG9zLmJlZ2luIC0gMSk7XG4gICAgICAgICAgICAgICAgfSwgMCkpIDogKG9wdHMuaW5zZXJ0TW9kZSA9ICFvcHRzLmluc2VydE1vZGUsIGNhcmV0KGlucHV0LCBvcHRzLmluc2VydE1vZGUgfHwgcG9zLmJlZ2luICE9PSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCA/IHBvcy5iZWdpbiA6IHBvcy5iZWdpbiAtIDEpKTtcbiAgICAgICAgICAgICAgICBvcHRzLm9uS2V5RG93bi5jYWxsKHRoaXMsIGUsIGdldEJ1ZmZlcigpLCBjYXJldChpbnB1dCkuYmVnaW4sIG9wdHMpLCBpZ25vcmFibGUgPSAtMSAhPT0gJC5pbkFycmF5KGssIG9wdHMuaWdub3JhYmxlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5cHJlc3NFdmVudDogZnVuY3Rpb24oZSwgY2hlY2t2YWwsIHdyaXRlT3V0LCBzdHJpY3QsIG5keCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsICRpbnB1dCA9ICQoaW5wdXQpLCBrID0gZS53aGljaCB8fCBlLmNoYXJDb2RlIHx8IGUua2V5Q29kZTtcbiAgICAgICAgICAgICAgICBpZiAoISghMCA9PT0gY2hlY2t2YWwgfHwgZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBpZ25vcmFibGUpKSByZXR1cm4gayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRU5URVIgJiYgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICh1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9LCAwKSksICEwO1xuICAgICAgICAgICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIDQ2ID09PSBrICYmICExID09PSBlLnNoaWZ0S2V5ICYmIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAoayA9IG9wdHMucmFkaXhQb2ludC5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcndhcmRQb3NpdGlvbiwgcG9zID0gY2hlY2t2YWwgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbmR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuZHhcbiAgICAgICAgICAgICAgICAgICAgfSA6IGNhcmV0KGlucHV0KSwgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoayk7XG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS53cml0ZU91dEJ1ZmZlciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsUmVzdWx0ID0gaXNWYWxpZChwb3MsIGMsIHN0cmljdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gdmFsUmVzdWx0ICYmIChyZXNldE1hc2tTZXQoITApLCBmb3J3YXJkUG9zaXRpb24gPSB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IHZhbFJlc3VsdC5jYXJldCA6IGNoZWNrdmFsID8gdmFsUmVzdWx0LnBvcyArIDEgOiBzZWVrTmV4dCh2YWxSZXN1bHQucG9zKSwgXG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS5wID0gZm9yd2FyZFBvc2l0aW9uKSwgITEgIT09IHdyaXRlT3V0ICYmIChzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5vbktleVZhbGlkYXRpb24uY2FsbChpbnB1dCwgaywgdmFsUmVzdWx0LCBvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCksIGdldE1hc2tTZXQoKS53cml0ZU91dEJ1ZmZlciAmJiAhMSAhPT0gdmFsUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGdldEJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGJ1ZmZlciwgb3B0cy5udW1lcmljSW5wdXQgJiYgdmFsUmVzdWx0LmNhcmV0ID09PSB1bmRlZmluZWQgPyBzZWVrUHJldmlvdXMoZm9yd2FyZFBvc2l0aW9uKSA6IGZvcndhcmRQb3NpdGlvbiwgZSwgITAgIT09IGNoZWNrdmFsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gY2hlY2t2YWwgJiYgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCA9PT0gaXNDb21wbGV0ZShidWZmZXIpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBjaGVja3ZhbCkgcmV0dXJuICExICE9PSB2YWxSZXN1bHQgJiYgKHZhbFJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSBmb3J3YXJkUG9zaXRpb24pLCBcbiAgICAgICAgICAgICAgICAgICAgdmFsUmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXN0ZUV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBWYWx1ZSwgaW5wdXQgPSB0aGlzLCBldiA9IGUub3JpZ2luYWxFdmVudCB8fCBlLCAkaW5wdXQgPSAkKGlucHV0KSwgaW5wdXRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoITApLCBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcbiAgICAgICAgICAgICAgICBpc1JUTCAmJiAodGVtcFZhbHVlID0gY2FyZXRQb3MuZW5kLCBjYXJldFBvcy5lbmQgPSBjYXJldFBvcy5iZWdpbiwgY2FyZXRQb3MuYmVnaW4gPSB0ZW1wVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUJlZm9yZUNhcmV0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLCB2YWx1ZUFmdGVyQ2FyZXQgPSBpbnB1dFZhbHVlLnN1YnN0cihjYXJldFBvcy5lbmQsIGlucHV0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVCZWZvcmVDYXJldCA9PT0gKGlzUlRMID8gZ2V0QnVmZmVyVGVtcGxhdGUoKS5yZXZlcnNlKCkgOiBnZXRCdWZmZXJUZW1wbGF0ZSgpKS5zbGljZSgwLCBjYXJldFBvcy5iZWdpbikuam9pbihcIlwiKSAmJiAodmFsdWVCZWZvcmVDYXJldCA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICB2YWx1ZUFmdGVyQ2FyZXQgPT09IChpc1JUTCA/IGdldEJ1ZmZlclRlbXBsYXRlKCkucmV2ZXJzZSgpIDogZ2V0QnVmZmVyVGVtcGxhdGUoKSkuc2xpY2UoY2FyZXRQb3MuZW5kKS5qb2luKFwiXCIpICYmICh2YWx1ZUFmdGVyQ2FyZXQgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaXNSVEwgJiYgKHRlbXBWYWx1ZSA9IHZhbHVlQmVmb3JlQ2FyZXQsIHZhbHVlQmVmb3JlQ2FyZXQgPSB2YWx1ZUFmdGVyQ2FyZXQsIHZhbHVlQWZ0ZXJDYXJldCA9IHRlbXBWYWx1ZSksIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEpIGlucHV0VmFsdWUgPSB2YWx1ZUJlZm9yZUNhcmV0ICsgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2LmNsaXBib2FyZERhdGEgfHwgIWV2LmNsaXBib2FyZERhdGEuZ2V0RGF0YSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdmFsdWVCZWZvcmVDYXJldCArIGV2LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXN0ZVZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVQYXN0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSAocGFzdGVWYWx1ZSA9IG9wdHMub25CZWZvcmVQYXN0ZS5jYWxsKGlucHV0bWFzaywgaW5wdXRWYWx1ZSwgb3B0cykpKSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBwYXN0ZVZhbHVlIHx8IChwYXN0ZVZhbHVlID0gaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1ZhbChpbnB1dCwgITEsICExLCBpc1JUTCA/IHBhc3RlVmFsdWUuc3BsaXQoXCJcIikucmV2ZXJzZSgpIDogcGFzdGVWYWx1ZS50b1N0cmluZygpLnNwbGl0KFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSwgZSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgITAgPT09IGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIiksIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dEZhbGxCYWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCBpbnB1dFZhbHVlID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRCdWZmZXIoKS5qb2luKFwiXCIpICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBmdW5jdGlvbihpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIi5cIiA9PT0gaW5wdXRWYWx1ZS5jaGFyQXQoY2FyZXRQb3MuYmVnaW4gLSAxKSAmJiBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgKGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWVbY2FyZXRQb3MuYmVnaW4gLSAxXSA9IG9wdHMucmFkaXhQb2ludC5jaGFyQXQoMCksIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUuY2hhckF0KGNhcmV0UG9zLmJlZ2luIC0gMSkgPT09IG9wdHMucmFkaXhQb2ludCAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IGdldEJ1ZmZlcigpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXByZXNzLndoaWNoID0gb3B0cy5yYWRpeFBvaW50LmNoYXJDb2RlQXQoMCksIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICEwLCAhMSwgY2FyZXRQb3MuYmVnaW4gLSAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oaW5wdXQsIGlucHV0VmFsdWUsIGNhcmV0UG9zKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKFwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSkgKyBcIikqXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICExID09PSBmdW5jdGlvbihpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZW1vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dENoYXIgPSBpbnB1dFZhbHVlLnJlcGxhY2UoZ2V0QnVmZmVyKCkuam9pbihcIlwiKSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT09IGlucHV0Q2hhci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXByZXNzLndoaWNoID0gaW5wdXRDaGFyLmNoYXJDb2RlQXQoMCksIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICEwLCAhMSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2NhcmV0UG9zLmJlZ2luIC0gMV0gPyBjYXJldFBvcy5iZWdpbiA6IGNhcmV0UG9zLmJlZ2luIC0gMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oaW5wdXQsIGlucHV0VmFsdWUsIGNhcmV0UG9zKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBjYXJldFBvcy5iZWdpbiA+IGlucHV0VmFsdWUubGVuZ3RoICYmIChjYXJldChpbnB1dCwgaW5wdXRWYWx1ZS5sZW5ndGgpLCBjYXJldFBvcyA9IGNhcmV0KGlucHV0KSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBmcm9udFBhcnQgPSBpbnB1dFZhbHVlLnN1YnN0cigwLCBjYXJldFBvcy5iZWdpbiksIGJhY2tQYXJ0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoY2FyZXRQb3MuYmVnaW4pLCBmcm9udEJ1ZmZlclBhcnQgPSBidWZmZXIuc3Vic3RyKDAsIGNhcmV0UG9zLmJlZ2luKSwgYmFja0J1ZmZlclBhcnQgPSBidWZmZXIuc3Vic3RyKGNhcmV0UG9zLmJlZ2luKSwgc2VsZWN0aW9uID0gY2FyZXRQb3MsIGVudHJpZXMgPSBcIlwiLCBpc0VudHJ5ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9udFBhcnQgIT09IGZyb250QnVmZmVyUGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmJlZ2luID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGZwbCA9IChpc0VudHJ5ID0gZnJvbnRQYXJ0Lmxlbmd0aCA+PSBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoKSA/IGZyb250UGFydC5sZW5ndGggOiBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoLCBpID0gMDsgZnJvbnRQYXJ0LmNoYXJBdChpKSA9PT0gZnJvbnRCdWZmZXJQYXJ0LmNoYXJBdChpKSAmJiBpIDwgZnBsOyBpKyspIHNlbGVjdGlvbi5iZWdpbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbnRyeSAmJiAoZW50cmllcyArPSBmcm9udFBhcnQuc2xpY2Uoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFja1BhcnQgIT09IGJhY2tCdWZmZXJQYXJ0ICYmIChiYWNrUGFydC5sZW5ndGggPiBiYWNrQnVmZmVyUGFydC5sZW5ndGggPyBpc0VudHJ5ICYmIChzZWxlY3Rpb24uZW5kID0gc2VsZWN0aW9uLmJlZ2luKSA6IGJhY2tQYXJ0Lmxlbmd0aCA8IGJhY2tCdWZmZXJQYXJ0Lmxlbmd0aCA/IHNlbGVjdGlvbi5lbmQgKz0gYmFja0J1ZmZlclBhcnQubGVuZ3RoIC0gYmFja1BhcnQubGVuZ3RoIDogYmFja1BhcnQuY2hhckF0KDApICE9PSBiYWNrQnVmZmVyUGFydC5jaGFyQXQoMCkgJiYgc2VsZWN0aW9uLmVuZCsrKSwgXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoKSwgc2VsZWN0aW9uKSwgZW50cmllcy5sZW5ndGggPiAwID8gJC5lYWNoKGVudHJpZXMuc3BsaXQoXCJcIiksIGZ1bmN0aW9uKG5keCwgZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGVudHJ5LmNoYXJDb2RlQXQoMCksIGlnbm9yYWJsZSA9ICExLCBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IChzZWxlY3Rpb24uYmVnaW4gPT09IHNlbGVjdGlvbi5lbmQgLSAxICYmIGNhcmV0KGlucHV0LCBzZWVrUHJldmlvdXMoc2VsZWN0aW9uLmJlZ2luICsgMSksIHNlbGVjdGlvbi5lbmQpLCBcbiAgICAgICAgICAgICAgICAgICAgZS5rZXlDb2RlID0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBFdmVudEhhbmRsZXJzLmtleWRvd25FdmVudC5jYWxsKGlucHV0LCBlKSksIFxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFZhbHVlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzay5yZWZyZXNoVmFsdWUgPSAhMTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCB2YWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoITApO1xuICAgICAgICAgICAgICAgICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgJiYgKHZhbHVlID0gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlLCBvcHRzKSB8fCB2YWx1ZSksIFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCJcIiksIGNoZWNrVmFsKGlucHV0LCAhMCwgITEsIGlzUlRMID8gdmFsdWUucmV2ZXJzZSgpIDogdmFsdWUpLCBcbiAgICAgICAgICAgICAgICB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCAob3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBvcHRzLmNsZWFySW5jb21wbGV0ZSkgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c0V2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgb3B0cy5zaG93TWFza09uRm9jdXMgJiYgKCFvcHRzLnNob3dNYXNrT25Ib3ZlciB8fCBvcHRzLnNob3dNYXNrT25Ib3ZlciAmJiBcIlwiID09PSBucHRWYWx1ZSkgJiYgKGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSA/IHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoKSwgc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSkpIDogITEgPT09IG1vdXNlRW50ZXIgJiYgY2FyZXQoaW5wdXQsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKSksIFxuICAgICAgICAgICAgICAgICEwID09PSBvcHRzLnBvc2l0aW9uQ2FyZXRPblRhYiAmJiAhMSA9PT0gbW91c2VFbnRlciAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAod3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBjYXJldChpbnB1dCkpLCBcbiAgICAgICAgICAgICAgICBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQuYXBwbHkoaW5wdXQsIFsgZSwgITAgXSkpLCB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbGVhdmVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlRW50ZXIgPSAhMSwgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKSwgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIG5wdFZhbHVlICE9PSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAoLTEgPT09IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgJiYgbnB0VmFsdWUgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSA/IGJ1ZmZlciA9IFtdIDogY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpY2tFdmVudDogZnVuY3Rpb24oZSwgdGFiYmVkKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9SYWRpeEZvY3VzKGNsaWNrUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2cHMgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnBzW2NsaWNrUG9zXSA9PT0gdW5kZWZpbmVkIHx8IHZwc1tjbGlja1Bvc10uaW5wdXQgPT09IGdldFBsYWNlaG9sZGVyKGNsaWNrUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1BvcyA8IHNlZWtOZXh0KC0xKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFBvcyA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIGdldEJ1ZmZlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZwIGluIHZwcykgaWYgKHJhZGl4UG9zIDwgdnAgJiYgdnBzW3ZwXS5pbnB1dCAhPT0gZ2V0UGxhY2Vob2xkZXIodnApKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkQ2FyZXQgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFiYmVkICYmIChpc1JUTCA/IHNlbGVjdGVkQ2FyZXQuZW5kID0gc2VsZWN0ZWRDYXJldC5iZWdpbiA6IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSBzZWxlY3RlZENhcmV0LmVuZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5iZWdpbiA9PT0gc2VsZWN0ZWRDYXJldC5lbmQpIHN3aXRjaCAob3B0cy5wb3NpdGlvbkNhcmV0T25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyYWRpeEZvY3VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvUmFkaXhGb2N1cyhzZWxlY3RlZENhcmV0LmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQoaW5wdXQsIG9wdHMubnVtZXJpY0lucHV0ID8gc2Vla05leHQocmFkaXhQb3MpIDogcmFkaXhQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xpY2tQb3NpdGlvbiA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4sIGx2Y2xpY2tQb3NpdGlvbiA9IGdldExhc3RWYWxpZFBvc2l0aW9uKGNsaWNrUG9zaXRpb24sICEwKSwgbGFzdFBvc2l0aW9uID0gc2Vla05leHQobHZjbGlja1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tQb3NpdGlvbiA8IGxhc3RQb3NpdGlvbikgY2FyZXQoaW5wdXQsIGlzTWFzayhjbGlja1Bvc2l0aW9uLCAhMCkgfHwgaXNNYXNrKGNsaWNrUG9zaXRpb24gLSAxLCAhMCkgPyBjbGlja1Bvc2l0aW9uIDogc2Vla05leHQoY2xpY2tQb3NpdGlvbikpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdmNsaWNrUG9zaXRpb25dLCB0dCA9IGdldFRlc3RUZW1wbGF0ZShsYXN0UG9zaXRpb24sIGx2cCA/IGx2cC5tYXRjaC5sb2NhdG9yIDogdW5kZWZpbmVkLCBsdnApLCBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhc3RQb3NpdGlvbiwgdHQubWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gcGxhY2Vob2xkZXIgJiYgZ2V0QnVmZmVyKClbbGFzdFBvc2l0aW9uXSAhPT0gcGxhY2Vob2xkZXIgJiYgITAgIT09IHR0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdHQubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzayhsYXN0UG9zaXRpb24sICEwKSAmJiB0dC5tYXRjaC5kZWYgPT09IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gc2Vla05leHQobGFzdFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja1Bvc2l0aW9uID49IG5ld1BvcyB8fCBjbGlja1Bvc2l0aW9uID09PSBsYXN0UG9zaXRpb24pICYmIChsYXN0UG9zaXRpb24gPSBuZXdQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBsYXN0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRibGNsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCAwLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3V0RXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCAkaW5wdXQgPSAkKGlucHV0KSwgcG9zID0gY2FyZXQoaW5wdXQpLCBldiA9IGUub3JpZ2luYWxFdmVudCB8fCBlLCBjbGlwYm9hcmREYXRhID0gd2luZG93LmNsaXBib2FyZERhdGEgfHwgZXYuY2xpcGJvYXJkRGF0YSwgY2xpcERhdGEgPSBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKHBvcy5lbmQsIHBvcy5iZWdpbikgOiBnZXRCdWZmZXIoKS5zbGljZShwb3MuYmVnaW4sIHBvcy5lbmQpO1xuICAgICAgICAgICAgICAgIGNsaXBib2FyZERhdGEuc2V0RGF0YShcInRleHRcIiwgaXNSVEwgPyBjbGlwRGF0YS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGNsaXBEYXRhLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCAmJiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiksIGhhbmRsZVJlbW92ZShpbnB1dCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MpLCBcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGdldE1hc2tTZXQoKS5wLCBlLCB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSAmJiAkaW5wdXQudHJpZ2dlcihcImNsZWFyZWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmx1ckV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyksIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBucHRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSwgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gbnB0VmFsdWUgJiYgKG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgKC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIG5wdFZhbHVlID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgPyBidWZmZXIgPSBbXSA6IGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikpLCBcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IGlzQ29tcGxldGUoYnVmZmVyKSAmJiAoc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiaW5jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCksIG9wdHMuY2xlYXJJbmNvbXBsZXRlICYmIChyZXNldE1hc2tTZXQoKSwgYnVmZmVyID0gb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyA/IFtdIDogZ2V0QnVmZmVyVGVtcGxhdGUoKS5zbGljZSgpKSksIFxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCB1bmRlZmluZWQsIGUpKSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICh1bmRvVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlckV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBtb3VzZUVudGVyID0gITAsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0ICYmIG9wdHMuc2hvd01hc2tPbkhvdmVyICYmIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSAmJiB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICRlbC50cmlnZ2VyKFwiY2hhbmdlXCIpLCBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIGVsLmlucHV0bWFzay5fdmFsdWVHZXQgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKSwgXG4gICAgICAgICAgICAgICAgb3B0cy5yZW1vdmVNYXNrT25TdWJtaXQgJiYgKGVsLmlucHV0bWFzay5fdmFsdWVTZXQoZWwuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSwgITApLCBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgZ2V0QnVmZmVyKCkpO1xuICAgICAgICAgICAgICAgIH0sIDApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9ICEwLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkZWwudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlLnBvc2l0aW9uQ29sb3JNYXNrID0gZnVuY3Rpb24oaW5wdXQsIHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5sZWZ0ID0gdGVtcGxhdGUub2Zmc2V0TGVmdCArIFwicHhcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHZhbHVlQnVmZmVyO1xuICAgICAgICBpZiAoYWN0aW9uT2JqICE9PSB1bmRlZmluZWQpIHN3aXRjaCAoYWN0aW9uT2JqLmFjdGlvbikge1xuICAgICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XG4gICAgICAgICAgICByZXR1cm4gZWwgPSBhY3Rpb25PYmouZWwsIGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpO1xuXG4gICAgICAgICAgY2FzZSBcInVubWFza2VkdmFsdWVcIjpcbiAgICAgICAgICAgIHJldHVybiBlbCAhPT0gdW5kZWZpbmVkICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZSwgXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlciA9ICgkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZU1hc2spID8gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlQnVmZmVyLCBvcHRzKSB8fCB2YWx1ZUJ1ZmZlciA6IHZhbHVlQnVmZmVyKS5zcGxpdChcIlwiKSwgXG4gICAgICAgICAgICBjaGVja1ZhbCh1bmRlZmluZWQsICExLCAhMSwgaXNSVEwgPyB2YWx1ZUJ1ZmZlci5yZXZlcnNlKCkgOiB2YWx1ZUJ1ZmZlciksICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlV3JpdGUpICYmIG9wdHMub25CZWZvcmVXcml0ZS5jYWxsKGlucHV0bWFzaywgdW5kZWZpbmVkLCBnZXRCdWZmZXIoKSwgMCwgb3B0cykpLCBcbiAgICAgICAgICAgIHVubWFza2VkdmFsdWUoZWwpO1xuXG4gICAgICAgICAgY2FzZSBcIm1hc2tcIjpcbiAgICAgICAgICAgICFmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vZmYoZWxlbSk7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3VwcG9ydGVkID0gZnVuY3Rpb24oaW5wdXQsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUeXBlID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSwgaXNTdXBwb3J0ZWQgPSBcIklOUFVUXCIgPT09IGlucHV0LnRhZ05hbWUgJiYgLTEgIT09ICQuaW5BcnJheShlbGVtZW50VHlwZSwgb3B0cy5zdXBwb3J0c0lucHV0VHlwZSkgfHwgaW5wdXQuaXNDb250ZW50RWRpdGFibGUgfHwgXCJURVhUQVJFQVwiID09PSBpbnB1dC50YWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSBpZiAoXCJJTlBVVFwiID09PSBpbnB1dC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGVsZW1lbnRUeXBlKSwgaXNTdXBwb3J0ZWQgPSBcInRleHRcIiA9PT0gZWwudHlwZSwgZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaXNTdXBwb3J0ZWQgPSBcInBhcnRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExICE9PSBpc1N1cHBvcnRlZCA/IGZ1bmN0aW9uKG5wdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzayA/IHRoaXMuaW5wdXRtYXNrLm9wdHMuYXV0b1VubWFzayA/IHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSA6IC0xICE9PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpIHx8ICEwICE9PSBvcHRzLm51bGxhYmxlID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcyAmJiBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzID8gKGlzUlRMID8gY2xlYXJPcHRpb25hbFRhaWwoZ2V0QnVmZmVyKCkuc2xpY2UoKSkucmV2ZXJzZSgpIDogY2xlYXJPcHRpb25hbFRhaWwoZ2V0QnVmZmVyKCkuc2xpY2UoKSkpLmpvaW4oXCJcIikgOiB2YWx1ZUdldC5jYWxsKHRoaXMpIDogXCJcIiA6IHZhbHVlR2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldC5jYWxsKHRoaXMsIHZhbHVlKSwgdGhpcy5pbnB1dG1hc2sgJiYgJCh0aGlzKS50cmlnZ2VyKFwic2V0dmFsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVHZXQsIHZhbHVlU2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFucHQuaW5wdXRtYXNrLl9fdmFsdWVHZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMubm9WYWx1ZVBhdGNoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiAoT2JqZWN0LmdldFByb3RvdHlwZU9mID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgXCJ0ZXN0XCIuX19wcm90b19fID8gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByb3BlcnR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YobnB0KSwgXCJ2YWx1ZVwiKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHkgJiYgdmFsdWVQcm9wZXJ0eS5nZXQgJiYgdmFsdWVQcm9wZXJ0eS5zZXQgPyAodmFsdWVHZXQgPSB2YWx1ZVByb3BlcnR5LmdldCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldCA9IHZhbHVlUHJvcGVydHkuc2V0LCBPYmplY3QuZGVmaW5lUHJvcGVydHkobnB0LCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHNldHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgOiBcIklOUFVUXCIgIT09IG5wdC50YWdOYW1lICYmICh2YWx1ZUdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucHQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogc2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGRvY3VtZW50Ll9fbG9va3VwR2V0dGVyX18gJiYgbnB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiAodmFsdWVHZXQgPSBucHQuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTZXQgPSBucHQuX19sb29rdXBTZXR0ZXJfXyhcInZhbHVlXCIpLCBucHQuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGdldHRlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHQuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIHNldHRlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHQuaW5wdXRtYXNrLl9fdmFsdWVHZXQgPSB2YWx1ZUdldCwgbnB0LmlucHV0bWFzay5fX3ZhbHVlU2V0ID0gdmFsdWVTZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wdC5pbnB1dG1hc2suX3ZhbHVlR2V0ID0gZnVuY3Rpb24ob3ZlcnJ1bGVSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzUlRMICYmICEwICE9PSBvdmVycnVsZVJUTCA/IHZhbHVlR2V0LmNhbGwodGhpcy5lbCkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiB2YWx1ZUdldC5jYWxsKHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG5wdC5pbnB1dG1hc2suX3ZhbHVlU2V0ID0gZnVuY3Rpb24odmFsdWUsIG92ZXJydWxlUlRMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0LmNhbGwodGhpcy5lbCwgbnVsbCA9PT0gdmFsdWUgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiAhMCAhPT0gb3ZlcnJ1bGVSVEwgJiYgaXNSVEwgPyB2YWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZUdldCA9PT0gdW5kZWZpbmVkICYmICh2YWx1ZUdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZVNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLnZhbEhvb2tzICYmICgkLnZhbEhvb2tzW3R5cGVdID09PSB1bmRlZmluZWQgfHwgITAgIT09ICQudmFsSG9va3NbdHlwZV0uaW5wdXRtYXNrcGF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaG9va0dldCA9ICQudmFsSG9va3NbdHlwZV0gJiYgJC52YWxIb29rc1t0eXBlXS5nZXQgPyAkLnZhbEhvb2tzW3R5cGVdLmdldCA6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbGhvb2tTZXQgPSAkLnZhbEhvb2tzW3R5cGVdICYmICQudmFsSG9va3NbdHlwZV0uc2V0ID8gJC52YWxIb29rc1t0eXBlXS5zZXQgOiBmdW5jdGlvbihlbGVtLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnZhbHVlID0gdmFsdWUsIGVsZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC52YWxIb29rc1t0eXBlXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrKSByZXR1cm4gZWxlbS5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbGhvb2tHZXQoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBlbGVtLmlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zKSB8fCAhMCAhPT0gb3B0cy5udWxsYWJsZSA/IHJlc3VsdCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGhvb2tHZXQoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGVsZW0sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQsICRlbGVtID0gJChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IHZhbGhvb2tTZXQoZWxlbSwgdmFsdWUpLCBlbGVtLmlucHV0bWFzayAmJiAkZWxlbS50cmlnZ2VyKFwic2V0dmFsdWVcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2twYXRjaDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KG5wdC50eXBlKSwgZnVuY3Rpb24obnB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24obnB0LCBcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgJiYgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShucHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfShpbnB1dCkgOiBpbnB1dC5pbnB1dG1hc2sgPSB1bmRlZmluZWQsIGlzU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgIH0oZWxlbSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgaWYgKCExICE9PSBpc1N1cHBvcnRlZCAmJiAoZWwgPSBlbGVtLCAkZWwgPSAkKGVsKSwgbWF4TGVuZ3RoID0gZWwgIT09IHVuZGVmaW5lZCA/IGVsLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgXG4gICAgICAgICAgICAgICAgLTEgPT09IG1heExlbmd0aCAmJiAobWF4TGVuZ3RoID0gdW5kZWZpbmVkKSwgITAgPT09IG9wdHMuY29sb3JNYXNrICYmIGluaXRpYWxpemVDb2xvck1hc2soZWwpLCBcbiAgICAgICAgICAgICAgICBhbmRyb2lkICYmIChlbC5oYXNPd25Qcm9wZXJ0eShcImlucHV0bW9kZVwiKSAmJiAoZWwuaW5wdXRtb2RlID0gb3B0cy5pbnB1dG1vZGUsIGVsLnNldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiLCBvcHRzLmlucHV0bW9kZSkpLCBcbiAgICAgICAgICAgICAgICBcInJ0Zm1cIiA9PT0gb3B0cy5hbmRyb2lkSGFjayAmJiAoITAgIT09IG9wdHMuY29sb3JNYXNrICYmIGluaXRpYWxpemVDb2xvck1hc2soZWwpLCBcbiAgICAgICAgICAgICAgICBlbC50eXBlID0gXCJwYXNzd29yZFwiKSksICEwID09PSBpc1N1cHBvcnRlZCAmJiAoRXZlbnRSdWxlci5vbihlbCwgXCJzdWJtaXRcIiwgRXZlbnRIYW5kbGVycy5zdWJtaXRFdmVudCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwicmVzZXRcIiwgRXZlbnRIYW5kbGVycy5yZXNldEV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJtb3VzZWVudGVyXCIsIEV2ZW50SGFuZGxlcnMubW91c2VlbnRlckV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJibHVyXCIsIEV2ZW50SGFuZGxlcnMuYmx1ckV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJmb2N1c1wiLCBFdmVudEhhbmRsZXJzLmZvY3VzRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcIm1vdXNlbGVhdmVcIiwgRXZlbnRIYW5kbGVycy5tb3VzZWxlYXZlRXZlbnQpLCAhMCAhPT0gb3B0cy5jb2xvck1hc2sgJiYgRXZlbnRSdWxlci5vbihlbCwgXCJjbGlja1wiLCBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImRibGNsaWNrXCIsIEV2ZW50SGFuZGxlcnMuZGJsY2xpY2tFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwicGFzdGVcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJkcmFnZHJvcFwiLCBFdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImRyb3BcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjdXRcIiwgRXZlbnRIYW5kbGVycy5jdXRFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwiY29tcGxldGVcIiwgb3B0cy5vbmNvbXBsZXRlKSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJpbmNvbXBsZXRlXCIsIG9wdHMub25pbmNvbXBsZXRlKSwgRXZlbnRSdWxlci5vbihlbCwgXCJjbGVhcmVkXCIsIG9wdHMub25jbGVhcmVkKSwgXG4gICAgICAgICAgICAgICAgYW5kcm9pZCB8fCAhMCA9PT0gb3B0cy5pbnB1dEV2ZW50T25seSA/IGVsLnJlbW92ZUF0dHJpYnV0ZShcIm1heExlbmd0aFwiKSA6IChFdmVudFJ1bGVyLm9uKGVsLCBcImtleWRvd25cIiwgRXZlbnRIYW5kbGVycy5rZXlkb3duRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImtleXByZXNzXCIsIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudCkpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9uc3RhcnRcIiwgJC5ub29wKSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjb21wb3NpdGlvbnVwZGF0ZVwiLCAkLm5vb3ApLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9uZW5kXCIsICQubm9vcCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwia2V5dXBcIiwgJC5ub29wKSwgRXZlbnRSdWxlci5vbihlbCwgXCJpbnB1dFwiLCBFdmVudEhhbmRsZXJzLmlucHV0RmFsbEJhY2tFdmVudCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiYmVmb3JlaW5wdXRcIiwgJC5ub29wKSksIEV2ZW50UnVsZXIub24oZWwsIFwic2V0dmFsdWVcIiwgRXZlbnRIYW5kbGVycy5zZXRWYWx1ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgdW5kb1ZhbHVlID0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpLCBcIlwiICE9PSBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSB8fCAhMSA9PT0gb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9ICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIG9wdHMpIHx8IGVsLmlucHV0bWFzay5fdmFsdWVHZXQoITApIDogZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCk7XG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGluaXRpYWxWYWx1ZSAmJiBjaGVja1ZhbChlbCwgITAsICExLCBpc1JUTCA/IGluaXRpYWxWYWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkgOiBpbml0aWFsVmFsdWUuc3BsaXQoXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdW5kb1ZhbHVlID0gYnVmZmVyLmpvaW4oXCJcIiksICExID09PSBpc0NvbXBsZXRlKGJ1ZmZlcikgJiYgb3B0cy5jbGVhckluY29tcGxldGUgJiYgcmVzZXRNYXNrU2V0KCksIFxuICAgICAgICAgICAgICAgICAgICBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsICYmICgtMSA9PT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSA/IGJ1ZmZlciA9IFtdIDogY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSksIFxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgYnVmZmVyKSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWwgJiYgY2FyZXQoZWwsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KGVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImZvcm1hdFwiOlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlQnVmZmVyID0gKCQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgYWN0aW9uT2JqLnZhbHVlLCBvcHRzKSB8fCBhY3Rpb25PYmoudmFsdWUgOiBhY3Rpb25PYmoudmFsdWUpLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgIGNoZWNrVmFsKHVuZGVmaW5lZCwgITAsICExLCBpc1JUTCA/IHZhbHVlQnVmZmVyLnJldmVyc2UoKSA6IHZhbHVlQnVmZmVyKSwgYWN0aW9uT2JqLm1ldGFkYXRhID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXG4gICAgICAgICAgICAgICAgfSwgbWFza3NldCwgb3B0cylcbiAgICAgICAgICAgIH0gOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xuXG4gICAgICAgICAgY2FzZSBcImlzVmFsaWRcIjpcbiAgICAgICAgICAgIGFjdGlvbk9iai52YWx1ZSA/ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZS5zcGxpdChcIlwiKSwgY2hlY2tWYWwodW5kZWZpbmVkLCAhMCwgITAsIGlzUlRMID8gdmFsdWVCdWZmZXIucmV2ZXJzZSgpIDogdmFsdWVCdWZmZXIpKSA6IGFjdGlvbk9iai52YWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKSwgcmwgPSBkZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbigpLCBsbWliID0gYnVmZmVyLmxlbmd0aCAtIDE7IGxtaWIgPiBybCAmJiAhaXNNYXNrKGxtaWIpOyBsbWliLS0pIDtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIuc3BsaWNlKHJsLCBsbWliICsgMSAtIHJsKSwgaXNDb21wbGV0ZShidWZmZXIpICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKTtcblxuICAgICAgICAgIGNhc2UgXCJnZXRlbXB0eW1hc2tcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIik7XG5cbiAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICBpZiAoZWwgJiYgZWwuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgJGVsID0gJChlbCksIGVsLmlucHV0bWFzay5fdmFsdWVTZXQob3B0cy5hdXRvVW5tYXNrID8gdW5tYXNrZWR2YWx1ZShlbCkgOiBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub2ZmKGVsKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKGVsKSwgXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0LFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgfSkgOiBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmIGVsLl9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiAoZWwuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0KSwgXG4gICAgICAgICAgICAgICAgZWwuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0KSksIGVsLmlucHV0bWFzayA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbDtcblxuICAgICAgICAgIGNhc2UgXCJnZXRtZXRhZGF0YVwiOlxuICAgICAgICAgICAgaWYgKCQuaXNBcnJheShtYXNrc2V0Lm1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrVGFyZ2V0ID0gZ2V0TWFza1RlbXBsYXRlKCEwLCAwLCAhMSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJC5lYWNoKG1hc2tzZXQubWV0YWRhdGEsIGZ1bmN0aW9uKG5keCwgbXRkdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXRkdC5tYXNrID09PSBtYXNrVGFyZ2V0KSByZXR1cm4gbWFza1RhcmdldCA9IG10ZHQsICExO1xuICAgICAgICAgICAgICAgIH0pLCBtYXNrVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc2tzZXQubWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgbW9iaWxlID0gL21vYmlsZS9pLnRlc3QodWEpLCBpZW1vYmlsZSA9IC9pZW1vYmlsZS9pLnRlc3QodWEpLCBpcGhvbmUgPSAvaXBob25lL2kudGVzdCh1YSkgJiYgIWllbW9iaWxlLCBhbmRyb2lkID0gL2FuZHJvaWQvaS50ZXN0KHVhKSAmJiAhaWVtb2JpbGU7XG4gICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUgPSB7XG4gICAgICAgIGRhdGFBdHRyaWJ1dGU6IFwiZGF0YS1pbnB1dG1hc2tcIixcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIl9cIixcbiAgICAgICAgICAgIG9wdGlvbmFsbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiW1wiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJdXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGlmaWVybWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwie1wiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJ9XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cG1hcmtlcjoge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIihcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwiKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx0ZXJuYXRvcm1hcmtlcjogXCJ8XCIsXG4gICAgICAgICAgICBlc2NhcGVDaGFyOiBcIlxcXFxcIixcbiAgICAgICAgICAgIG1hc2s6IG51bGwsXG4gICAgICAgICAgICByZWdleDogbnVsbCxcbiAgICAgICAgICAgIG9uY29tcGxldGU6ICQubm9vcCxcbiAgICAgICAgICAgIG9uaW5jb21wbGV0ZTogJC5ub29wLFxuICAgICAgICAgICAgb25jbGVhcmVkOiAkLm5vb3AsXG4gICAgICAgICAgICByZXBlYXQ6IDAsXG4gICAgICAgICAgICBncmVlZHk6ICEwLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICByZW1vdmVNYXNrT25TdWJtaXQ6ICExLFxuICAgICAgICAgICAgY2xlYXJNYXNrT25Mb3N0Rm9jdXM6ICEwLFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICExLFxuICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICBvbktleURvd246ICQubm9vcCxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogbnVsbCxcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIHBhc3RlZFZhbHVlLCBvcHRzKSA6IHBhc3RlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IG51bGwsXG4gICAgICAgICAgICBvblVuTWFzazogbnVsbCxcbiAgICAgICAgICAgIHNob3dNYXNrT25Gb2N1czogITAsXG4gICAgICAgICAgICBzaG93TWFza09uSG92ZXI6ICEwLFxuICAgICAgICAgICAgb25LZXlWYWxpZGF0aW9uOiAkLm5vb3AsXG4gICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIiBcIixcbiAgICAgICAgICAgIG51bWVyaWNJbnB1dDogITEsXG4gICAgICAgICAgICByaWdodEFsaWduOiAhMSxcbiAgICAgICAgICAgIHVuZG9PbkVzY2FwZTogITAsXG4gICAgICAgICAgICByYWRpeFBvaW50OiBcIlwiLFxuICAgICAgICAgICAgcmFkaXhQb2ludERlZmluaXRpb25TeW1ib2w6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAga2VlcFN0YXRpYzogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPblRhYjogITAsXG4gICAgICAgICAgICB0YWJUaHJvdWdoOiAhMSxcbiAgICAgICAgICAgIHN1cHBvcnRzSW5wdXRUeXBlOiBbIFwidGV4dFwiLCBcInRlbFwiLCBcInBhc3N3b3JkXCIgXSxcbiAgICAgICAgICAgIGlnbm9yYWJsZXM6IFsgOCwgOSwgMTMsIDE5LCAyNywgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0NSwgNDYsIDkzLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLCAxMjEsIDEyMiwgMTIzLCAwLCAyMjkgXSxcbiAgICAgICAgICAgIGlzQ29tcGxldGU6IG51bGwsXG4gICAgICAgICAgICBjYW5DbGVhclBvc2l0aW9uOiAkLm5vb3AsXG4gICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBudWxsLFxuICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IG51bGwsXG4gICAgICAgICAgICBzdGF0aWNEZWZpbml0aW9uU3ltYm9sOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBqaXRNYXNraW5nOiAhMSxcbiAgICAgICAgICAgIG51bGxhYmxlOiAhMCxcbiAgICAgICAgICAgIGlucHV0RXZlbnRPbmx5OiAhMSxcbiAgICAgICAgICAgIG5vVmFsdWVQYXRjaGluZzogITEsXG4gICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJsdnBcIixcbiAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJ2ZXJiYXRpbVwiLFxuICAgICAgICAgICAgY29sb3JNYXNrOiAhMSxcbiAgICAgICAgICAgIGFuZHJvaWRIYWNrOiAhMSxcbiAgICAgICAgICAgIGltcG9ydERhdGFBdHRyaWJ1dGVzOiAhMFxuICAgICAgICB9LFxuICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgXCI5XCI6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTEtXFx1ZmYxOV1cIixcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjExLVxcdWZmMTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXNlczoge30sXG4gICAgICAgIG1hc2tzQ2FjaGU6IHt9LFxuICAgICAgICBtYXNrOiBmdW5jdGlvbihlbGVtcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gaW1wb3J0QXR0cmlidXRlT3B0aW9ucyhucHQsIG9wdHMsIHVzZXJPcHRpb25zLCBkYXRhQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW1wb3J0T3B0aW9uKG9wdGlvbiwgb3B0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsICE9PSAob3B0aW9uRGF0YSA9IG9wdGlvbkRhdGEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbkRhdGEgOiBucHQuZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUgKyBcIi1cIiArIG9wdGlvbikpICYmIChcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25EYXRhICYmICgwID09PSBvcHRpb24uaW5kZXhPZihcIm9uXCIpID8gb3B0aW9uRGF0YSA9IHdpbmRvd1tvcHRpb25EYXRhXSA6IFwiZmFsc2VcIiA9PT0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGEgPSAhMSA6IFwidHJ1ZVwiID09PSBvcHRpb25EYXRhICYmIChvcHRpb25EYXRhID0gITApKSwgXG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcHRpb25zW29wdGlvbl0gPSBvcHRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEwID09PSBvcHRzLmltcG9ydERhdGFBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24sIGRhdGFvcHRpb25zLCBvcHRpb25EYXRhLCBwLCBhdHRyT3B0aW9ucyA9IG5wdC5nZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyT3B0aW9ucyAmJiBcIlwiICE9PSBhdHRyT3B0aW9ucyAmJiAoYXR0ck9wdGlvbnMgPSBhdHRyT3B0aW9ucy5yZXBsYWNlKG5ldyBSZWdFeHAoXCInXCIsIFwiZ1wiKSwgJ1wiJyksIFxuICAgICAgICAgICAgICAgICAgICBkYXRhb3B0aW9ucyA9IEpTT04ucGFyc2UoXCJ7XCIgKyBhdHRyT3B0aW9ucyArIFwifVwiKSksIGRhdGFvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwIGluIGRhdGFvcHRpb25zKSBpZiAoXCJhbGlhc1wiID09PSBwLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gZGF0YW9wdGlvbnNbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0T3B0aW9uKFwiYWxpYXNcIiwgb3B0aW9uRGF0YSksIHVzZXJPcHRpb25zLmFsaWFzICYmIHJlc29sdmVBbGlhcyh1c2VyT3B0aW9ucy5hbGlhcywgdXNlck9wdGlvbnMsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG9wdGlvbiBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiBkYXRhb3B0aW9ucykgaWYgKHAudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IGRhdGFvcHRpb25zW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRPcHRpb24ob3B0aW9uLCBvcHRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoITAsIG9wdHMsIHVzZXJPcHRpb25zKSwgKFwicnRsXCIgPT09IG5wdC5kaXIgfHwgb3B0cy5yaWdodEFsaWduKSAmJiAobnB0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIiksIFxuICAgICAgICAgICAgICAgIChcInJ0bFwiID09PSBucHQuZGlyIHx8IG9wdHMubnVtZXJpY0lucHV0KSAmJiAobnB0LmRpciA9IFwibHRyXCIsIG5wdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXJcIiksIFxuICAgICAgICAgICAgICAgIG9wdHMuaXNSVEwgPSAhMCksIG9wdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZWxlbXMgJiYgKGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpKSwgXG4gICAgICAgICAgICBlbGVtcyA9IGVsZW1zLm5vZGVOYW1lID8gWyBlbGVtcyBdIDogZWxlbXMsICQuZWFjaChlbGVtcywgZnVuY3Rpb24obmR4LCBlbCkge1xuICAgICAgICAgICAgICAgIHZhciBzY29wZWRPcHRzID0gJC5leHRlbmQoITAsIHt9LCB0aGF0Lm9wdHMpO1xuICAgICAgICAgICAgICAgIGltcG9ydEF0dHJpYnV0ZU9wdGlvbnMoZWwsIHNjb3BlZE9wdHMsICQuZXh0ZW5kKCEwLCB7fSwgdGhhdC51c2VyT3B0aW9ucyksIHRoYXQuZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2tzZXQgPSBnZW5lcmF0ZU1hc2tTZXQoc2NvcGVkT3B0cywgdGhhdC5ub01hc2tzQ2FjaGUpO1xuICAgICAgICAgICAgICAgIG1hc2tzZXQgIT09IHVuZGVmaW5lZCAmJiAoZWwuaW5wdXRtYXNrICE9PSB1bmRlZmluZWQgJiYgKGVsLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPSAhMCwgXG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlbW92ZSgpKSwgZWwuaW5wdXRtYXNrID0gbmV3IElucHV0bWFzayh1bmRlZmluZWQsIHVuZGVmaW5lZCwgITApLCBcbiAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sub3B0cyA9IHNjb3BlZE9wdHMsIGVsLmlucHV0bWFzay5ub01hc2tzQ2FjaGUgPSB0aGF0Lm5vTWFza3NDYWNoZSwgZWwuaW5wdXRtYXNrLnVzZXJPcHRpb25zID0gJC5leHRlbmQoITAsIHt9LCB0aGF0LnVzZXJPcHRpb25zKSwgXG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLmlzUlRMID0gc2NvcGVkT3B0cy5pc1JUTCB8fCBzY29wZWRPcHRzLm51bWVyaWNJbnB1dCwgZWwuaW5wdXRtYXNrLmVsID0gZWwsIFxuICAgICAgICAgICAgICAgIGVsLmlucHV0bWFzay5tYXNrc2V0ID0gbWFza3NldCwgJC5kYXRhKGVsLCBcIl9pbnB1dG1hc2tfb3B0c1wiLCBzY29wZWRPcHRzKSwgbWFza1Njb3BlLmNhbGwoZWwuaW5wdXRtYXNrLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJtYXNrXCJcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSwgZWxlbXMgJiYgZWxlbXNbMF0gPyBlbGVtc1swXS5pbnB1dG1hc2sgfHwgdGhpcyA6IHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjogZnVuY3Rpb24ob3B0aW9ucywgbm9yZW1hc2spIHtcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25zID8gdGhpcy5vcHRzW29wdGlvbnNdIDogXCJvYmplY3RcIiA9PSB0eXBlb2Ygb3B0aW9ucyA/ICgkLmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBvcHRpb25zKSwgXG4gICAgICAgICAgICB0aGlzLmVsICYmICEwICE9PSBub3JlbWFzayAmJiB0aGlzLm1hc2sodGhpcy5lbCksIHRoaXMpIDogdm9pZCAwO1xuICAgICAgICB9LFxuICAgICAgICB1bm1hc2tlZHZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1bm1hc2tlZHZhbHVlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInJlbW92ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0ZW1wdHltYXNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiZ2V0ZW1wdHltYXNrXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoYXNNYXNrZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMub3B0cy5hdXRvVW5tYXNrO1xuICAgICAgICB9LFxuICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNDb21wbGV0ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0bWV0YWRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNWYWxpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8IGdlbmVyYXRlTWFza1NldCh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhbmFseXNlTWFzazogZnVuY3Rpb24obWFzaywgcmVnZXhNYXNrLCBvcHRzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBNYXNrVG9rZW4oaXNHcm91cCwgaXNPcHRpb25hbCwgaXNRdWFudGlmaWVyLCBpc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXSwgdGhpcy5vcGVuR3JvdXAgPSBpc0dyb3VwIHx8ICExLCB0aGlzLmFsdGVybmF0b3JHcm91cCA9ICExLCB0aGlzLmlzR3JvdXAgPSBpc0dyb3VwIHx8ICExLCBcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsIHx8ICExLCB0aGlzLmlzUXVhbnRpZmllciA9IGlzUXVhbnRpZmllciB8fCAhMSwgdGhpcy5pc0FsdGVybmF0b3IgPSBpc0FsdGVybmF0b3IgfHwgITEsIFxuICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGVzdERlZmluaXRpb24obXRva2VuLCBlbGVtZW50LCBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gIT09IHVuZGVmaW5lZCA/IHBvc2l0aW9uIDogbXRva2VuLm1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChyZWdleE1hc2spIDAgPT09IGVsZW1lbnQuaW5kZXhPZihcIltcIikgfHwgZXNjYXBlZCAmJiAvXFxcXGR8XFxcXHN8XFxcXHddL2kudGVzdChlbGVtZW50KSB8fCBcIi5cIiA9PT0gZWxlbWVudCA/IG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIGZuOiBuZXcgUmVnRXhwKGVsZW1lbnQsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGVmOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICB9KSA6IChlc2NhcGVkICYmIChlbGVtZW50ID0gZWxlbWVudFtlbGVtZW50Lmxlbmd0aCAtIDFdKSwgJC5lYWNoKGVsZW1lbnQuc3BsaXQoXCJcIiksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdLCBtdG9rZW4ubWF0Y2hlcy5zcGxpY2UocG9zaXRpb24rKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiBwcmV2TWF0Y2ggPT09IHVuZGVmaW5lZCB8fCBwcmV2TWF0Y2guZGVmICE9PSBsbW50ICYmIG51bGwgIT09IHByZXZNYXRjaC5mbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGxtbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sICE9PSB1bmRlZmluZWQgPyBsbW50IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBsbW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKSwgZXNjYXBlZCA9ICExOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tkZWYgPSAob3B0cy5kZWZpbml0aW9ucyA/IG9wdHMuZGVmaW5pdGlvbnNbZWxlbWVudF0gOiB1bmRlZmluZWQpIHx8IElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrZGVmICYmICFlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcmV2YWxpZGF0b3JzID0gbWFza2RlZi5wcmV2YWxpZGF0b3IsIHByZXZhbGlkYXRvcnNMID0gcHJldmFsaWRhdG9ycyA/IHByZXZhbGlkYXRvcnMubGVuZ3RoIDogMCwgaSA9IDE7IGkgPCBtYXNrZGVmLmNhcmRpbmFsaXR5OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmFsaWRhdG9yID0gcHJldmFsaWRhdG9yc0wgPj0gaSA/IHByZXZhbGlkYXRvcnNbaSAtIDFdIDogW10sIHZhbGlkYXRvciA9IHByZXZhbGlkYXRvci52YWxpZGF0b3IsIGNhcmRpbmFsaXR5ID0gcHJldmFsaWRhdG9yLmNhcmRpbmFsaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiB2YWxpZGF0b3IgPyBcInN0cmluZ1wiID09IHR5cGVvZiB2YWxpZGF0b3IgPyBuZXcgUmVnRXhwKHZhbGlkYXRvciwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbmV3IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0ID0gdmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkgOiBuZXcgUmVnRXhwKFwiLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IGNhcmRpbmFsaXR5IHx8IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IChtYXNrZGVmLmRlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbWFza2RlZi5jYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtYXNrZGVmLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcHJldk1hdGNoID0gbXRva2VuLm1hdGNoZXNbcG9zaXRpb24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG1hc2tkZWYudmFsaWRhdG9yID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbWFza2RlZi52YWxpZGF0b3IgPyBuZXcgUmVnRXhwKG1hc2tkZWYudmFsaWRhdG9yLCBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBuZXcgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdCA9IG1hc2tkZWYudmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSA6IG5ldyBSZWdFeHAoXCIuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiBtYXNrZGVmLmNhcmRpbmFsaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogcHJldk1hdGNoID09PSB1bmRlZmluZWQgfHwgcHJldk1hdGNoLmRlZiAhPT0gKG1hc2tkZWYuZGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG1hc2tkZWYuY2FzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1hc2tkZWYucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6IG10b2tlbi5pc09wdGlvbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQgJiYgbnVsbCAhPT0gcHJldk1hdGNoLmZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfSksIGVzY2FwZWQgPSAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB2ZXJpZnlHcm91cE1hcmtlcihtYXNrVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBtYXNrVG9rZW4gJiYgbWFza1Rva2VuLm1hdGNoZXMgJiYgJC5lYWNoKG1hc2tUb2tlbi5tYXRjaGVzLCBmdW5jdGlvbihuZHgsIHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG9rZW4gPSBtYXNrVG9rZW4ubWF0Y2hlc1tuZHggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkIHx8IG5leHRUb2tlbi5tYXRjaGVzID09PSB1bmRlZmluZWQgfHwgITEgPT09IG5leHRUb2tlbi5pc1F1YW50aWZpZXIpICYmIHRva2VuICYmIHRva2VuLmlzR3JvdXAgJiYgKHRva2VuLmlzR3JvdXAgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4TWFzayB8fCAoaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQsIDApLCAhMCAhPT0gdG9rZW4ub3Blbkdyb3VwICYmIGluc2VydFRlc3REZWZpbml0aW9uKHRva2VuLCBvcHRzLmdyb3VwbWFya2VyLmVuZCkpKSwgXG4gICAgICAgICAgICAgICAgICAgIHZlcmlmeUdyb3VwTWFya2VyKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDYXNlKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0sIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRPcGVuaW5nVG9rZW4sIG0pLCBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5pc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IgPSBvcGVuZW5pbmdzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKSkgOiBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRUb2tlbiwgbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZXZlcnNlVG9rZW5zKG1hc2tUb2tlbikge1xuICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzID0gbWFza1Rva2VuLm1hdGNoZXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG1hdGNoIGluIG1hc2tUb2tlbi5tYXRjaGVzKSBpZiAobWFza1Rva2VuLm1hdGNoZXMuaGFzT3duUHJvcGVydHkobWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnRNYXRjaCA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXS5pc1F1YW50aWZpZXIgJiYgbWFza1Rva2VuLm1hdGNoZXNbaW50TWF0Y2ggKyAxXSAmJiBtYXNrVG9rZW4ubWF0Y2hlc1tpbnRNYXRjaCArIDFdLmlzR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdCA9IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShtYXRjaCwgMSksIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShpbnRNYXRjaCArIDEsIDAsIHF0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0ubWF0Y2hlcyAhPT0gdW5kZWZpbmVkID8gbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gcmV2ZXJzZVRva2VucyhtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0pIDogbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gZnVuY3Rpb24oc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPyBzdCA9IG9wdHMub3B0aW9uYWxtYXJrZXIuc3RhcnQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5ncm91cG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5lbmQgJiYgKHN0ID0gb3B0cy5ncm91cG1hcmtlci5zdGFydCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Q7XG4gICAgICAgICAgICAgICAgICAgIH0obWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXRjaCwgbSwgb3BlbmluZ1Rva2VuLCBjdXJyZW50T3BlbmluZ1Rva2VuLCBhbHRlcm5hdG9yLCBsYXN0TWF0Y2gsIGdyb3VwVG9rZW4sIHRva2VuaXplciA9IC8oPzpbPyorXXxcXHtbMC05XFwrXFwqXSsoPzosWzAtOVxcK1xcKl0qKT9cXH0pfFteLj8qK14ke1tdKCl8XFxcXF0rfC4vZywgcmVnZXhUb2tlbml6ZXIgPSAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nLCBlc2NhcGVkID0gITEsIGN1cnJlbnRUb2tlbiA9IG5ldyBNYXNrVG9rZW4oKSwgb3BlbmVuaW5ncyA9IFtdLCBtYXNrVG9rZW5zID0gW107XG4gICAgICAgICAgICBmb3IgKHJlZ2V4TWFzayAmJiAob3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA9IHVuZGVmaW5lZCwgb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPSB1bmRlZmluZWQpOyBtYXRjaCA9IHJlZ2V4TWFzayA/IHJlZ2V4VG9rZW5pemVyLmV4ZWMobWFzaykgOiB0b2tlbml6ZXIuZXhlYyhtYXNrKTsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKG0gPSBtYXRjaFswXSwgcmVnZXhNYXNrKSBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgICAgICAgICAgICBtID0gXCJ7MCwxfVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICAgICAgICAgIG0gPSBcIntcIiArIG0gKyBcIn1cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVzY2FwZWQpIGRlZmF1bHRDYXNlKCk7IGVsc2Ugc3dpdGNoIChtLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmVzY2FwZUNoYXI6XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSAhMCwgcmVnZXhNYXNrICYmIGRlZmF1bHRDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kOlxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyLmVuZDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3MucG9wKCksIG9wZW5pbmdUb2tlbi5vcGVuR3JvdXAgPSAhMSwgb3BlbmluZ1Rva2VuICE9PSB1bmRlZmluZWQpIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T3BlbmluZ1Rva2VuID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdLCBjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4uaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5hbHRlcm5hdG9yR3JvdXAgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnB1c2goYWx0ZXJuYXRvcikpIDogY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKTsgZWxzZSBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMSwgITApKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5ncm91cG1hcmtlci5zdGFydDpcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKG5ldyBNYXNrVG9rZW4oITApKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5xdWFudGlmaWVybWFya2VyLnN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVhbnRpZmllciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSBtLnJlcGxhY2UoL1t7fV0vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtcSA9IG0uc3BsaXQoXCIsXCIpLCBtcTAgPSBpc05hTihtcVswXSkgPyBtcVswXSA6IHBhcnNlSW50KG1xWzBdKSwgbXExID0gMSA9PT0gbXEubGVuZ3RoID8gbXEwIDogaXNOYU4obXFbMV0pID8gbXFbMV0gOiBwYXJzZUludChtcVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIipcIiAhPT0gbXExICYmIFwiK1wiICE9PSBtcTEgfHwgKG1xMCA9IFwiKlwiID09PSBtcTEgPyAwIDogMSksIHF1YW50aWZpZXIucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbXEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBtcTFcbiAgICAgICAgICAgICAgICAgICAgfSwgb3BlbmVuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXS5tYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBtYXRjaGVzLnBvcCgpLCBtYXRjaC5pc0dyb3VwIHx8IChncm91cFRva2VuID0gbmV3IE1hc2tUb2tlbighMCksIGdyb3VwVG9rZW4ubWF0Y2hlcy5wdXNoKG1hdGNoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGdyb3VwVG9rZW4pLCBtYXRjaGVzLnB1c2gobWF0Y2gpLCBtYXRjaGVzLnB1c2gocXVhbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpLCBtYXRjaC5pc0dyb3VwIHx8IChyZWdleE1hc2sgJiYgbnVsbCA9PT0gbWF0Y2guZm4gJiYgXCIuXCIgPT09IG1hdGNoLmRlZiAmJiAobWF0Y2guZm4gPSBuZXcgUmVnRXhwKG1hdGNoLmRlZiwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVG9rZW4gPSBuZXcgTWFza1Rva2VuKCEwKSwgZ3JvdXBUb2tlbi5tYXRjaGVzLnB1c2gobWF0Y2gpLCBtYXRjaCA9IGdyb3VwVG9rZW4pLCBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChtYXRjaCksIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gocXVhbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIG9wdHMuYWx0ZXJuYXRvcm1hcmtlcjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJUb2tlbiA9IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlc1tjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2ggPSBjdXJyZW50T3BlbmluZ1Rva2VuLm9wZW5Hcm91cCAmJiAoc3ViVG9rZW4ubWF0Y2hlcyA9PT0gdW5kZWZpbmVkIHx8ICExID09PSBzdWJUb2tlbi5pc0dyb3VwICYmICExID09PSBzdWJUb2tlbi5pc0FsdGVybmF0b3IpID8gb3BlbmVuaW5ncy5wb3AoKSA6IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGxhc3RNYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE1hdGNoLmlzQWx0ZXJuYXRvcikgb3BlbmVuaW5ncy5wdXNoKGxhc3RNYXRjaCk7IGVsc2UgaWYgKGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXAgPyAoYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCksIFxuICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2guYWx0ZXJuYXRvckdyb3VwID0gITEpIDogYWx0ZXJuYXRvciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMSwgITApLCBhbHRlcm5hdG9yLm1hdGNoZXMucHVzaChsYXN0TWF0Y2gpLCBcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKGFsdGVybmF0b3IpLCBsYXN0TWF0Y2gub3Blbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2gub3Blbkdyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJuYXRvckdyb3VwID0gbmV3IE1hc2tUb2tlbighMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yR3JvdXAuYWx0ZXJuYXRvckdyb3VwID0gITAsIG9wZW5lbmluZ3MucHVzaChhbHRlcm5hdG9yR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoO29wZW5lbmluZ3MubGVuZ3RoID4gMDsgKSBvcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzLnBvcCgpLCBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKG9wZW5pbmdUb2tlbik7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFRva2VuLm1hdGNoZXMubGVuZ3RoID4gMCAmJiAodmVyaWZ5R3JvdXBNYXJrZXIoY3VycmVudFRva2VuKSwgbWFza1Rva2Vucy5wdXNoKGN1cnJlbnRUb2tlbikpLCBcbiAgICAgICAgICAgIChvcHRzLm51bWVyaWNJbnB1dCB8fCBvcHRzLmlzUlRMKSAmJiByZXZlcnNlVG9rZW5zKG1hc2tUb2tlbnNbMF0pLCBtYXNrVG9rZW5zO1xuICAgICAgICB9XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZERlZmluaXRpb25zID0gZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9ucywgZGVmaW5pdGlvbik7XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMgPSBmdW5jdGlvbihhbGlhcykge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5hbGlhc2VzLCBhbGlhcyk7XG4gICAgfSwgSW5wdXRtYXNrLmZvcm1hdCA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zLCBtZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSwgbWV0YWRhdGEpO1xuICAgIH0sIElucHV0bWFzay51bm1hc2sgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLnVubWFza2VkdmFsdWUodmFsdWUpO1xuICAgIH0sIElucHV0bWFzay5pc1ZhbGlkID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIElucHV0bWFzayhvcHRpb25zKS5pc1ZhbGlkKHZhbHVlKTtcbiAgICB9LCBJbnB1dG1hc2sucmVtb3ZlID0gZnVuY3Rpb24oZWxlbXMpIHtcbiAgICAgICAgJC5lYWNoKGVsZW1zLCBmdW5jdGlvbihuZHgsIGVsKSB7XG4gICAgICAgICAgICBlbC5pbnB1dG1hc2sgJiYgZWwuaW5wdXRtYXNrLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LCBJbnB1dG1hc2suZXNjYXBlUmVnZXggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgdmFyIHNwZWNpYWxzID0gWyBcIi9cIiwgXCIuXCIsIFwiKlwiLCBcIitcIiwgXCI/XCIsIFwifFwiLCBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiLCBcIlxcXFxcIiwgXCIkXCIsIFwiXlwiIF07XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFwiKFxcXFxcIiArIHNwZWNpYWxzLmpvaW4oXCJ8XFxcXFwiKSArIFwiKVwiLCBcImdpbVwiKSwgXCJcXFxcJDFcIik7XG4gICAgfSwgSW5wdXRtYXNrLmtleUNvZGUgPSB7XG4gICAgICAgIEFMVDogMTgsXG4gICAgICAgIEJBQ0tTUEFDRTogOCxcbiAgICAgICAgQkFDS1NQQUNFX1NBRkFSSTogMTI3LFxuICAgICAgICBDQVBTX0xPQ0s6IDIwLFxuICAgICAgICBDT01NQTogMTg4LFxuICAgICAgICBDT01NQU5EOiA5MSxcbiAgICAgICAgQ09NTUFORF9MRUZUOiA5MSxcbiAgICAgICAgQ09NTUFORF9SSUdIVDogOTMsXG4gICAgICAgIENPTlRST0w6IDE3LFxuICAgICAgICBERUxFVEU6IDQ2LFxuICAgICAgICBET1dOOiA0MCxcbiAgICAgICAgRU5EOiAzNSxcbiAgICAgICAgRU5URVI6IDEzLFxuICAgICAgICBFU0NBUEU6IDI3LFxuICAgICAgICBIT01FOiAzNixcbiAgICAgICAgSU5TRVJUOiA0NSxcbiAgICAgICAgTEVGVDogMzcsXG4gICAgICAgIE1FTlU6IDkzLFxuICAgICAgICBOVU1QQURfQUREOiAxMDcsXG4gICAgICAgIE5VTVBBRF9ERUNJTUFMOiAxMTAsXG4gICAgICAgIE5VTVBBRF9ESVZJREU6IDExMSxcbiAgICAgICAgTlVNUEFEX0VOVEVSOiAxMDgsXG4gICAgICAgIE5VTVBBRF9NVUxUSVBMWTogMTA2LFxuICAgICAgICBOVU1QQURfU1VCVFJBQ1Q6IDEwOSxcbiAgICAgICAgUEFHRV9ET1dOOiAzNCxcbiAgICAgICAgUEFHRV9VUDogMzMsXG4gICAgICAgIFBFUklPRDogMTkwLFxuICAgICAgICBSSUdIVDogMzksXG4gICAgICAgIFNISUZUOiAxNixcbiAgICAgICAgU1BBQ0U6IDMyLFxuICAgICAgICBUQUI6IDksXG4gICAgICAgIFVQOiAzOCxcbiAgICAgICAgV0lORE9XUzogOTEsXG4gICAgICAgIFg6IDg4XG4gICAgfSwgSW5wdXRtYXNrO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')
        }, function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* global/window.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return window;\n}.call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports && (module.exports = window);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC93aW5kb3cuanM/YTUyZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogZ2xvYmFsL3dpbmRvdy5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cblwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbn0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')
        }, function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* global/document.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return document;\n}.call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports && (module.exports = document);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC9kb2N1bWVudC5qcz80ZGY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBnbG9iYWwvZG9jdW1lbnQuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG5cImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbn0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC9kb2N1bWVudC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n')
        }, function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inputmask__);\n/*\n * vue-inputmask\n *\n * (C) 2016 Simon Clériot\n * MIT LICENCE\n *\n */\n\n\nvar inputmaskPlugin = {\n    install: function (Vue, options) {\n        Vue.directive('mask', {\n            bind: function (el, binding) {\n                __WEBPACK_IMPORTED_MODULE_0_inputmask___default()(binding.value).mask(el);\n            }\n        });\n    }\n};\n\nexports.default = inputmaskPlugin;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdnVlLWlucHV0bWFzay5qcz9hMmE5Il0sIm5hbWVzIjpbImlucHV0bWFza1BsdWdpbiIsImluc3RhbGwiLCJWdWUiLCJvcHRpb25zIiwiZGlyZWN0aXZlIiwiYmluZCIsImVsIiwiYmluZGluZyIsIklucHV0bWFzayIsInZhbHVlIiwibWFzayIsImV4cG9ydHMiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7O0FBRUEsSUFBSUEsa0JBQWtCO0FBQ2xCQyxhQUFTLFVBQVNDLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtBQUM1QkQsWUFBSUUsU0FBSixDQUFjLE1BQWQsRUFBc0I7QUFDbEJDLGtCQUFNLFVBQVNDLEVBQVQsRUFBYUMsT0FBYixFQUFzQjtBQUN4QkMsZ0JBQUEsaURBQUFBLENBQVVELFFBQVFFLEtBQWxCLEVBQXlCQyxJQUF6QixDQUE4QkosRUFBOUI7QUFDSDtBQUhpQixTQUF0QjtBQUtIO0FBUGlCLENBQXRCOztBQVVBSyxRQUFRQyxPQUFSLEdBQWtCWixlQUFsQiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIHZ1ZS1pbnB1dG1hc2tcbiAqXG4gKiAoQykgMjAxNiBTaW1vbiBDbMOpcmlvdFxuICogTUlUIExJQ0VOQ0VcbiAqXG4gKi9cbmltcG9ydCBJbnB1dG1hc2sgZnJvbSAnaW5wdXRtYXNrJ1xuXG52YXIgaW5wdXRtYXNrUGx1Z2luID0ge1xuICAgIGluc3RhbGw6IGZ1bmN0aW9uKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWUuZGlyZWN0aXZlKCdtYXNrJywge1xuICAgICAgICAgICAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICBJbnB1dG1hc2soYmluZGluZy52YWx1ZSkubWFzayhlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlucHV0bWFza1BsdWdpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92dWUtaW5wdXRtYXNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n")
        }, function (module, exports, __webpack_require__) {
            eval('__webpack_require__(6);\r\n__webpack_require__(7);\r\n__webpack_require__(8);\r\n__webpack_require__(9);\r\n\r\n// require("./dist/inputmask/phone-codes/phone-be");\r\n// require("./dist/inputmask/phone-codes/phone-nl");\r\n// require("./dist/inputmask/phone-codes/phone-ru");\r\n// require("./dist/inputmask/phone-codes/phone-uk");\r\n// require("./dist/inputmask/phone-codes/phone");\r\n\r\nmodule.exports = __webpack_require__(1);\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2luZGV4LmpzP2VlNjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmRhdGUuZXh0ZW5zaW9uc1wiKTtcclxucmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmV4dGVuc2lvbnNcIik7XHJcbnJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnNcIik7XHJcbnJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5waG9uZS5leHRlbnNpb25zXCIpO1xyXG5cclxuLy8gcmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svcGhvbmUtY29kZXMvcGhvbmUtYmVcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL3Bob25lLWNvZGVzL3Bob25lLW5sXCIpO1xyXG4vLyByZXF1aXJlKFwiLi9kaXN0L2lucHV0bWFzay9waG9uZS1jb2Rlcy9waG9uZS1ydVwiKTtcclxuLy8gcmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svcGhvbmUtY29kZXMvcGhvbmUtdWtcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL3Bob25lLWNvZGVzL3Bob25lXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2suanNcIik7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n')
        }, function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.date.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask) {\n    function isLeapYear(year) {\n        return isNaN(year) || 29 === new Date(year, 2, 0).getDate();\n    }\n    return Inputmask.extendAliases({\n        "dd/mm/yyyy": {\n            mask: "1/2/y",\n            placeholder: "dd/mm/yyyy",\n            regex: {\n                val1pre: new RegExp("[0-3]"),\n                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");\n                }\n            },\n            leapday: "29/02/",\n            separator: "/",\n            yearrange: {\n                minyear: 1900,\n                maxyear: 2099\n            },\n            isInYearRange: function(chrs, minyear, maxyear) {\n                if (isNaN(chrs)) return !1;\n                var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));\n                return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);\n            },\n            determinebaseyear: function(minyear, maxyear, hint) {\n                var currentyear = new Date().getFullYear();\n                if (minyear > currentyear) return minyear;\n                if (maxyear < currentyear) {\n                    for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint; ) maxYearPrefix--;\n                    var maxxYear = maxYearPrefix + maxYearPostfix;\n                    return minyear > maxxYear ? minyear : maxxYear;\n                }\n                if (minyear <= currentyear && currentyear <= maxyear) {\n                    for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint; ) currentYearPrefix--;\n                    var currentYearAndHint = currentYearPrefix + hint;\n                    return currentYearAndHint < minyear ? minyear : currentYearAndHint;\n                }\n                return currentyear;\n            },\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()), \n                    $input.trigger("setvalue");\n                }\n            },\n            getFrontValue: function(mask, buffer, opts) {\n                for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {\n                    var definition = opts.definitions[mask.charAt(i)];\n                    definition ? (start += length, length = definition.cardinality) : length++;\n                }\n                return buffer.join("").substr(start, length);\n            },\n            postValidation: function(buffer, currentResult, opts) {\n                var dayMonthValue, year, bufferStr = buffer.join("");\n                return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substring(4, 10)) : (year = bufferStr.substring(6, 10), \n                dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));\n            },\n            definitions: {\n                "1": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        if ("3" == chrs.charAt(0)) {\n                            if (new RegExp("[2-9]").test(chrs.charAt(1))) return chrs = "30", maskset.buffer[pos] = "0", \n                            pos++, {\n                                pos: pos\n                            };\n                        }\n                        var isValid = opts.regex.val1.test(chrs);\n                        return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", \n                        {\n                            refreshFromBuffer: {\n                                start: pos - 1,\n                                end: pos\n                            },\n                            pos: pos,\n                            c: chrs.charAt(0)\n                        });\n                    },\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var pchrs = chrs;\n                            isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);\n                            var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);\n                            if (!strict && !isValid) {\n                                if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs, \n                                maskset.buffer[++pos] = "0", {\n                                    pos: pos,\n                                    c: "0"\n                                };\n                                if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0", \n                                pos++, {\n                                    pos: pos\n                                };\n                            }\n                            return isValid;\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                "2": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);\n                        if (-1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator), \n                        "1" == chrs.charAt(0)) {\n                            if (new RegExp("[3-9]").test(chrs.charAt(1))) return chrs = "10", maskset.buffer[pos] = "0", \n                            pos++, {\n                                pos: pos\n                            };\n                        }\n                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);\n                        return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", \n                        {\n                            refreshFromBuffer: {\n                                start: pos - 1,\n                                end: pos\n                            },\n                            pos: pos,\n                            c: chrs.charAt(0)\n                        });\n                    },\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);\n                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);\n                            -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);\n                            var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);\n                            return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", \n                            pos++, {\n                                pos: pos\n                            });\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                y: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                    },\n                    cardinality: 4,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                            if (!strict && !isValid) {\n                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);\n                                if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), \n                                {\n                                    pos: pos\n                                };\n                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2), \n                                isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), \n                                maskset.buffer[pos++] = yearPrefix.charAt(1), {\n                                    pos: pos\n                                };\n                            }\n                            return isValid;\n                        },\n                        cardinality: 1\n                    }, {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                            if (!strict && !isValid) {\n                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);\n                                if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), \n                                {\n                                    pos: pos\n                                };\n                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), \n                                isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0), \n                                maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), \n                                {\n                                    refreshFromBuffer: {\n                                        start: pos - 3,\n                                        end: pos\n                                    },\n                                    pos: pos\n                                };\n                            }\n                            return isValid;\n                        },\n                        cardinality: 2\n                    }, {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);\n                        },\n                        cardinality: 3\n                    } ]\n                }\n            },\n            insertMode: !1,\n            autoUnmask: !1\n        },\n        "mm/dd/yyyy": {\n            placeholder: "mm/dd/yyyy",\n            alias: "dd/mm/yyyy",\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");\n                },\n                val1pre: new RegExp("[01]"),\n                val1: new RegExp("0[1-9]|1[012]")\n            },\n            leapday: "02/29/",\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), \n                    $input.trigger("setvalue");\n                }\n            }\n        },\n        "yyyy/mm/dd": {\n            mask: "y/1/2",\n            placeholder: "yyyy/mm/dd",\n            alias: "mm/dd/yyyy",\n            leapday: "/02/29",\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()), \n                    $input.trigger("setvalue");\n                }\n            }\n        },\n        "dd.mm.yyyy": {\n            mask: "1.2.y",\n            placeholder: "dd.mm.yyyy",\n            leapday: "29.02.",\n            separator: ".",\n            alias: "dd/mm/yyyy"\n        },\n        "dd-mm-yyyy": {\n            mask: "1-2-y",\n            placeholder: "dd-mm-yyyy",\n            leapday: "29-02-",\n            separator: "-",\n            alias: "dd/mm/yyyy"\n        },\n        "mm.dd.yyyy": {\n            mask: "1.2.y",\n            placeholder: "mm.dd.yyyy",\n            leapday: "02.29.",\n            separator: ".",\n            alias: "mm/dd/yyyy"\n        },\n        "mm-dd-yyyy": {\n            mask: "1-2-y",\n            placeholder: "mm-dd-yyyy",\n            leapday: "02-29-",\n            separator: "-",\n            alias: "mm/dd/yyyy"\n        },\n        "yyyy.mm.dd": {\n            mask: "y.1.2",\n            placeholder: "yyyy.mm.dd",\n            leapday: ".02.29",\n            separator: ".",\n            alias: "yyyy/mm/dd"\n        },\n        "yyyy-mm-dd": {\n            mask: "y-1-2",\n            placeholder: "yyyy-mm-dd",\n            leapday: "-02-29",\n            separator: "-",\n            alias: "yyyy/mm/dd"\n        },\n        datetime: {\n            mask: "1/2/y h:s",\n            placeholder: "dd/mm/yyyy hh:mm",\n            alias: "dd/mm/yyyy",\n            regex: {\n                hrspre: new RegExp("[012]"),\n                hrs24: new RegExp("2[0-4]|1[3-9]"),\n                hrs: new RegExp("[01][0-9]|2[0-4]"),\n                ampm: new RegExp("^[a|p|A|P][m|M]"),\n                mspre: new RegExp("[0-5]"),\n                ms: new RegExp("[0-5][0-9]")\n            },\n            timeseparator: ":",\n            hourFormat: "24",\n            definitions: {\n                h: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0", \n                        maskset.buffer[pos] = "0", {\n                            refreshFromBuffer: {\n                                start: pos - 1,\n                                end: pos\n                            },\n                            c: "0"\n                        };\n                        var isValid = opts.regex.hrs.test(chrs);\n                        if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || -1 !== "-.:".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0", \n                        maskset.buffer[pos] = chrs.charAt(0), pos++, {\n                            refreshFromBuffer: {\n                                start: pos - 2,\n                                end: pos\n                            },\n                            pos: pos,\n                            c: opts.timeseparator\n                        };\n                        if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {\n                            var tmp = parseInt(chrs, 10);\n                            return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p", \n                            maskset.buffer[pos + 6] = "m"), tmp -= 12, tmp < 10 ? (maskset.buffer[pos] = tmp.toString(), \n                            maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1), \n                            maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {\n                                refreshFromBuffer: {\n                                    start: pos - 1,\n                                    end: pos + 6\n                                },\n                                c: maskset.buffer[pos]\n                            };\n                        }\n                        return isValid;\n                    },\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.regex.hrspre.test(chrs);\n                            return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", \n                            pos++, {\n                                pos: pos\n                            });\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                s: {\n                    validator: "[0-5][0-9]",\n                    cardinality: 2,\n                    prevalidator: [ {\n                        validator: function(chrs, maskset, pos, strict, opts) {\n                            var isValid = opts.regex.mspre.test(chrs);\n                            return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", \n                            pos++, {\n                                pos: pos\n                            });\n                        },\n                        cardinality: 1\n                    } ]\n                },\n                t: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.regex.ampm.test(chrs + "m");\n                    },\n                    casing: "lower",\n                    cardinality: 1\n                }\n            },\n            insertMode: !1,\n            autoUnmask: !1\n        },\n        datetime12: {\n            mask: "1/2/y h:s t\\\\m",\n            placeholder: "dd/mm/yyyy hh:mm xm",\n            alias: "datetime",\n            hourFormat: "12"\n        },\n        "mm/dd/yyyy hh:mm xm": {\n            mask: "1/2/y h:s t\\\\m",\n            placeholder: "mm/dd/yyyy hh:mm xm",\n            alias: "datetime12",\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");\n                },\n                val1pre: new RegExp("[01]"),\n                val1: new RegExp("0[1-9]|1[012]")\n            },\n            leapday: "02/29/",\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {\n                    var today = new Date();\n                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), \n                    $input.trigger("setvalue");\n                }\n            }\n        },\n        "hh:mm t": {\n            mask: "h:s t\\\\m",\n            placeholder: "hh:mm xm",\n            alias: "datetime",\n            hourFormat: "12"\n        },\n        "h:s t": {\n            mask: "h:s t\\\\m",\n            placeholder: "hh:mm xm",\n            alias: "datetime",\n            hourFormat: "12"\n        },\n        "hh:mm:ss": {\n            mask: "h:s:s",\n            placeholder: "hh:mm:ss",\n            alias: "datetime",\n            autoUnmask: !1\n        },\n        "hh:mm": {\n            mask: "h:s",\n            placeholder: "hh:mm",\n            alias: "datetime",\n            autoUnmask: !1\n        },\n        date: {\n            alias: "dd/mm/yyyy"\n        },\n        "mm/yyyy": {\n            mask: "1/y",\n            placeholder: "mm/yyyy",\n            leapday: "donotuse",\n            separator: "/",\n            alias: "mm/dd/yyyy"\n        },\n        shamsi: {\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");\n                },\n                val1pre: new RegExp("[01]"),\n                val1: new RegExp("0[1-9]|1[012]")\n            },\n            yearrange: {\n                minyear: 1300,\n                maxyear: 1499\n            },\n            mask: "y/1/2",\n            leapday: "/12/30",\n            placeholder: "yyyy/mm/dd",\n            alias: "mm/dd/yyyy",\n            clearIncomplete: !0\n        },\n        "yyyy-mm-dd hh:mm:ss": {\n            mask: "y-1-2 h:s:s",\n            placeholder: "yyyy-mm-dd hh:mm:ss",\n            alias: "datetime",\n            separator: "-",\n            leapday: "-02-29",\n            regex: {\n                val2pre: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");\n                },\n                val2: function(separator) {\n                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);\n                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");\n                },\n                val1pre: new RegExp("[01]"),\n                val1: new RegExp("0[1-9]|1[012]")\n            },\n            onKeyDown: function(e, buffer, caretPos, opts) {}\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5kYXRlLmV4dGVuc2lvbnMuanM/ZTgyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkgsZ0NBQWdDO0FBQzdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLG9DQUFvQztBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHNEQUFzRCwyQ0FBMkM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIGlucHV0bWFzay5kYXRlLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XG4gICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiBpc05hTih5ZWFyKSB8fCAyOSA9PT0gbmV3IERhdGUoeWVhciwgMiwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICBcImRkL21tL3l5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLzIveVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAtM11cIiksXG4gICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXxbMTJdWzAtOV18M1swMV1cIiksXG4gICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXxbMTJdWzAtOV18M1swMV0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMDFdKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18WzEyXVswLTldKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXwxWzAxMl0pKXwoMzBcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEzLTldfDFbMDEyXSkpfCgzMVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMTM1NzhdfDFbMDJdKSlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMjkvMDIvXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiL1wiLFxuICAgICAgICAgICAgeWVhcnJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWlueWVhcjogMTkwMCxcbiAgICAgICAgICAgICAgICBtYXh5ZWFyOiAyMDk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNJblllYXJSYW5nZTogZnVuY3Rpb24oY2hycywgbWlueWVhciwgbWF4eWVhcikge1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihjaHJzKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciBlbnRlcmVkeWVhciA9IHBhcnNlSW50KGNocnMuY29uY2F0KG1pbnllYXIudG9TdHJpbmcoKS5zbGljZShjaHJzLmxlbmd0aCkpKSwgZW50ZXJlZHllYXIyID0gcGFyc2VJbnQoY2hycy5jb25jYXQobWF4eWVhci50b1N0cmluZygpLnNsaWNlKGNocnMubGVuZ3RoKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4oZW50ZXJlZHllYXIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyICYmIGVudGVyZWR5ZWFyIDw9IG1heHllYXIpIHx8ICFpc05hTihlbnRlcmVkeWVhcjIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyMiAmJiBlbnRlcmVkeWVhcjIgPD0gbWF4eWVhcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGV0ZXJtaW5lYmFzZXllYXI6IGZ1bmN0aW9uKG1pbnllYXIsIG1heHllYXIsIGhpbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1pbnllYXIgPiBjdXJyZW50eWVhcikgcmV0dXJuIG1pbnllYXI7XG4gICAgICAgICAgICAgICAgaWYgKG1heHllYXIgPCBjdXJyZW50eWVhcikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtYXhZZWFyUHJlZml4ID0gbWF4eWVhci50b1N0cmluZygpLnNsaWNlKDAsIDIpLCBtYXhZZWFyUG9zdGZpeCA9IG1heHllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgbWF4eWVhciA8IG1heFllYXJQcmVmaXggKyBoaW50OyApIG1heFllYXJQcmVmaXgtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heHhZZWFyID0gbWF4WWVhclByZWZpeCArIG1heFllYXJQb3N0Zml4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlueWVhciA+IG1heHhZZWFyID8gbWlueWVhciA6IG1heHhZZWFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWlueWVhciA8PSBjdXJyZW50eWVhciAmJiBjdXJyZW50eWVhciA8PSBtYXh5ZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRZZWFyUHJlZml4ID0gY3VycmVudHllYXIudG9TdHJpbmcoKS5zbGljZSgwLCAyKTsgbWF4eWVhciA8IGN1cnJlbnRZZWFyUHJlZml4ICsgaGludDsgKSBjdXJyZW50WWVhclByZWZpeC0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFllYXJBbmRIaW50ID0gY3VycmVudFllYXJQcmVmaXggKyBoaW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFllYXJBbmRIaW50IDwgbWlueWVhciA/IG1pbnllYXIgOiBjdXJyZW50WWVhckFuZEhpbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50eWVhcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCh0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRGcm9udFZhbHVlOiBmdW5jdGlvbihtYXNrLCBidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzdGFydCA9IDAsIGxlbmd0aCA9IDAsIGkgPSAwOyBpIDwgbWFzay5sZW5ndGggJiYgXCIyXCIgIT09IG1hc2suY2hhckF0KGkpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmluaXRpb24gPSBvcHRzLmRlZmluaXRpb25zW21hc2suY2hhckF0KGkpXTtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA/IChzdGFydCArPSBsZW5ndGgsIGxlbmd0aCA9IGRlZmluaXRpb24uY2FyZGluYWxpdHkpIDogbGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIuam9pbihcIlwiKS5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGJ1ZmZlciwgY3VycmVudFJlc3VsdCwgb3B0cykge1xuICAgICAgICAgICAgICAgIHZhciBkYXlNb250aFZhbHVlLCB5ZWFyLCBidWZmZXJTdHIgPSBidWZmZXIuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMCA9PT0gb3B0cy5tYXNrLmluZGV4T2YoXCJ5XCIpID8gKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyKDAsIDQpLCBkYXlNb250aFZhbHVlID0gYnVmZmVyU3RyLnN1YnN0cmluZyg0LCAxMCkpIDogKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyaW5nKDYsIDEwKSwgXG4gICAgICAgICAgICAgICAgZGF5TW9udGhWYWx1ZSA9IGJ1ZmZlclN0ci5zdWJzdHIoMCwgNikpLCBjdXJyZW50UmVzdWx0ICYmIChkYXlNb250aFZhbHVlICE9PSBvcHRzLmxlYXBkYXkgfHwgaXNMZWFwWWVhcih5ZWFyKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIjFcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIzXCIgPT0gY2hycy5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIlsyLTldXCIpLnRlc3QoY2hycy5jaGFyQXQoMSkpKSByZXR1cm4gY2hycyA9IFwiMzBcIiwgbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MrKywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXgudmFsMS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8IGNocnMuY2hhckF0KDEpICE9PSBvcHRzLnNlcGFyYXRvciAmJiAtMSA9PT0gXCItLi9cIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcbiAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGNocnMgPSBjaHJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKG1hc2tzZXQuYnVmZmVyW3BvcyArIDFdKSB8fCAocGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gMSA9PT0gcGNocnMubGVuZ3RoID8gb3B0cy5yZWdleC52YWwxcHJlLnRlc3QocGNocnMpIDogb3B0cy5yZWdleC52YWwxLnRlc3QocGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwxLnRlc3QoY2hycyArIFwiMFwiKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBjaHJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbKytwb3NdID0gXCIwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIH0gXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyb250VmFsdWUgPSBvcHRzLmdldEZyb250VmFsdWUobWFza3NldC5tYXNrLCBtYXNrc2V0LmJ1ZmZlciwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGZyb250VmFsdWUuaW5kZXhPZihvcHRzLnBsYWNlaG9sZGVyWzBdKSAmJiAoZnJvbnRWYWx1ZSA9IFwiMDFcIiArIG9wdHMuc2VwYXJhdG9yKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFcIiA9PSBjaHJzLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiWzMtOV1cIikudGVzdChjaHJzLmNoYXJBdCgxKSkpIHJldHVybiBjaHJzID0gXCIxMFwiLCBtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCBjaHJzLmNoYXJBdCgxKSAhPT0gb3B0cy5zZXBhcmF0b3IgJiYgLTEgPT09IFwiLS4vXCIuaW5kZXhPZihjaHJzLmNoYXJBdCgxKSkgfHwgIShpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcbiAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihtYXNrc2V0LmJ1ZmZlcltwb3MgKyAxXSkgfHwgKGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcm9udFZhbHVlID0gb3B0cy5nZXRGcm9udFZhbHVlKG1hc2tzZXQubWFzaywgbWFza3NldC5idWZmZXIsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSBmcm9udFZhbHVlLmluZGV4T2Yob3B0cy5wbGFjZWhvbGRlclswXSkgJiYgKGZyb250VmFsdWUgPSBcIjAxXCIgKyBvcHRzLnNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSAxID09PSBjaHJzLmxlbmd0aCA/IG9wdHMucmVnZXgudmFsMnByZShvcHRzLnNlcGFyYXRvcikudGVzdChmcm9udFZhbHVlICsgY2hycykgOiBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIFwiMFwiICsgY2hycykpID8gaXNWYWxpZCA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmlzSW5ZZWFyUmFuZ2UoY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiA0LFxuICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzICsgXCIwXCIpLnRvU3RyaW5nKCkuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKHllYXJQcmVmaXggKyBjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHllYXJQcmVmaXggPSBvcHRzLmRldGVybWluZWJhc2V5ZWFyKG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIsIGNocnMgKyBcIjBcIikudG9TdHJpbmcoKS5zbGljZSgwLCAyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoeWVhclByZWZpeCArIGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSB5ZWFyUHJlZml4LmNoYXJBdCgxKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzKS50b1N0cmluZygpLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZShjaHJzWzBdICsgeWVhclByZWZpeFsxXSArIGNocnNbMV0sIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeWVhclByZWZpeCA9IG9wdHMuZGV0ZXJtaW5lYmFzZXllYXIob3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhciwgY2hycykudG9TdHJpbmcoKS5zbGljZSgwLCAyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoeWVhclByZWZpeCArIGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSB5ZWFyUHJlZml4LmNoYXJBdCgwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDEpLCBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSBjaHJzLmNoYXJBdCgwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuaXNJblllYXJSYW5nZShjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogM1xuICAgICAgICAgICAgICAgICAgICB9IF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITEsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxuICAgICAgICB9LFxuICAgICAgICBcIm1tL2RkL3l5eXlcIjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibW0vZGQveXl5eVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICB2YWwycHJlOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0zXSl8KDAyXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0yXSlcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWwyOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEtOV18WzEyXVswLTldKSl8KCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMTM1NzhdfDFbMDJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzEpXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMXByZTogbmV3IFJlZ0V4cChcIlswMV1cIiksXG4gICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXwxWzAxMl1cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjAyLzI5L1wiLFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwoKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwieXl5eS9tbS9kZFwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcInkvMS8yXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ5eXl5L21tL2RkXCIsXG4gICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIi8wMi8yOVwiLFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwodG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGQubW0ueXl5eVwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEuMi55XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjI5LjAyLlwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi5cIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRkLW1tLXl5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLTIteVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQtbW0teXl5eVwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIyOS0wMi1cIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCItXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkZC9tbS95eXl5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtbS5kZC55eXl5XCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiMS4yLnlcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tLmRkLnl5eXlcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMDIuMjkuXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLlwiLFxuICAgICAgICAgICAgYWxpYXM6IFwibW0vZGQveXl5eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibW0tZGQteXl5eVwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEtMi15XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS1kZC15eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjAyLTI5LVwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi1cIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcInl5eXkubW0uZGRcIjoge1xuICAgICAgICAgICAgbWFzazogXCJ5LjEuMlwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwieXl5eS5tbS5kZFwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIuMDIuMjlcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCIuXCIsXG4gICAgICAgICAgICBhbGlhczogXCJ5eXl5L21tL2RkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5eXl5LW1tLWRkXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwieS0xLTJcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiLTAyLTI5XCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwieXl5eS9tbS9kZFwiXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEvMi95IGg6c1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eSBoaDptbVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICBocnNwcmU6IG5ldyBSZWdFeHAoXCJbMDEyXVwiKSxcbiAgICAgICAgICAgICAgICBocnMyNDogbmV3IFJlZ0V4cChcIjJbMC00XXwxWzMtOV1cIiksXG4gICAgICAgICAgICAgICAgaHJzOiBuZXcgUmVnRXhwKFwiWzAxXVswLTldfDJbMC00XVwiKSxcbiAgICAgICAgICAgICAgICBhbXBtOiBuZXcgUmVnRXhwKFwiXlthfHB8QXxQXVttfE1dXCIpLFxuICAgICAgICAgICAgICAgIG1zcHJlOiBuZXcgUmVnRXhwKFwiWzAtNV1cIiksXG4gICAgICAgICAgICAgICAgbXM6IG5ldyBSZWdFeHAoXCJbMC01XVswLTldXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZXNlcGFyYXRvcjogXCI6XCIsXG4gICAgICAgICAgICBob3VyRm9ybWF0OiBcIjI0XCIsXG4gICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgIGg6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiMjRcIiA9PT0gb3B0cy5ob3VyRm9ybWF0ICYmIDI0ID09PSBwYXJzZUludChjaHJzLCAxMCkpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXguaHJzLnRlc3QoY2hycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0cmljdCAmJiAhaXNWYWxpZCAmJiAoY2hycy5jaGFyQXQoMSkgPT09IG9wdHMudGltZXNlcGFyYXRvciB8fCAtMSAhPT0gXCItLjpcIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSkgJiYgKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhycy50ZXN0KFwiMFwiICsgY2hycy5jaGFyQXQoMCkpKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zXSA9IGNocnMuY2hhckF0KDApLCBwb3MrKywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogb3B0cy50aW1lc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgJiYgXCIyNFwiICE9PSBvcHRzLmhvdXJGb3JtYXQgJiYgb3B0cy5yZWdleC5ocnMyNC50ZXN0KGNocnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHBhcnNlSW50KGNocnMsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjQgPT09IHRtcCA/IChtYXNrc2V0LmJ1ZmZlcltwb3MgKyA1XSA9IFwiYVwiLCBtYXNrc2V0LmJ1ZmZlcltwb3MgKyA2XSA9IFwibVwiKSA6IChtYXNrc2V0LmJ1ZmZlcltwb3MgKyA1XSA9IFwicFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MgKyA2XSA9IFwibVwiKSwgdG1wIC09IDEyLCB0bXAgPCAxMCA/IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gdG1wLnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIpIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSB0bXAudG9TdHJpbmcoKS5jaGFyQXQoMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gdG1wLnRvU3RyaW5nKCkuY2hhckF0KDApKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvcyArIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogbWFza3NldC5idWZmZXJbcG9zXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDIsXG4gICAgICAgICAgICAgICAgICAgIHByZXZhbGlkYXRvcjogWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhyc3ByZS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhycy50ZXN0KFwiMFwiICsgY2hycykpID8gaXNWYWxpZCA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC01XVswLTldXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAyLFxuICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC5tc3ByZS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lm1zLnRlc3QoXCIwXCIgKyBjaHJzKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgICAgICB9IF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucmVnZXguYW1wbS50ZXN0KGNocnMgKyBcIm1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiLFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRNb2RlOiAhMSxcbiAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGV0aW1lMTI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiMS8yL3kgaDpzIHRcXFxcbVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eSBoaDptbSB4bVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIGhvdXJGb3JtYXQ6IFwiMTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1tL2RkL3l5eXkgaGg6bW0geG1cIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLzIveSBoOnMgdFxcXFxtXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS9kZC95eXl5IGhoOm1tIHhtXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkYXRldGltZTEyXCIsXG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTNdKXwoMDJcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTJdKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXxbMTJdWzAtOV0pKXwoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzApfCgoMFsxMzU3OF18MVswMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMSlcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAxXVwiKSxcbiAgICAgICAgICAgICAgICB2YWwxOiBuZXcgUmVnRXhwKFwiMFsxLTldfDFbMDEyXVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMDIvMjkvXCIsXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCgodG9kYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaDptbSB0XCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaDpzIHRcXFxcbVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW0geG1cIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBob3VyRm9ybWF0OiBcIjEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJoOnMgdFwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcImg6cyB0XFxcXG1cIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImhoOm1tIHhtXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgaG91ckZvcm1hdDogXCIxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGg6bW06c3NcIjoge1xuICAgICAgICAgICAgbWFzazogXCJoOnM6c1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW06c3NcIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxuICAgICAgICB9LFxuICAgICAgICBcImhoOm1tXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaDpzXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJoaDptbVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1tL3l5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxL3lcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tL3l5eXlcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiZG9ub3R1c2VcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCIvXCIsXG4gICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hhbXNpOiB7XG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMS02XSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxuICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhcnJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWlueWVhcjogMTMwMCxcbiAgICAgICAgICAgICAgICBtYXh5ZWFyOiAxNDk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFzazogXCJ5LzEvMlwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIvMTIvMzBcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXkvbW0vZGRcIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIixcbiAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogITBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5eXl5LW1tLWRkIGhoOm1tOnNzXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwieS0xLTIgaDpzOnNcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXktbW0tZGQgaGg6bW06c3NcIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCItMDItMjlcIixcbiAgICAgICAgICAgIHJlZ2V4OiB7XG4gICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pfCgwMlwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtMl0pXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMCl8KCgwWzEzNTc4XXwxWzAyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxuICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7fVxuICAgICAgICB9XG4gICAgfSksIElucHV0bWFzaztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2suZGF0ZS5leHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n')
        }, function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask) {\n    return Inputmask.extendDefinitions({\n        A: {\n            validator: "[A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",\n            cardinality: 1,\n            casing: "upper"\n        },\n        "&": {\n            validator: "[0-9A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",\n            cardinality: 1,\n            casing: "upper"\n        },\n        "#": {\n            validator: "[0-9A-Fa-f]",\n            cardinality: 1,\n            casing: "upper"\n        }\n    }), Inputmask.extendAliases({\n        url: {\n            definitions: {\n                i: {\n                    validator: ".",\n                    cardinality: 1\n                }\n            },\n            mask: "(\\\\http://)|(\\\\http\\\\s://)|(ftp://)|(ftp\\\\s://)i{+}",\n            insertMode: !1,\n            autoUnmask: !1,\n            inputmode: "url"\n        },\n        ip: {\n            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",\n            definitions: {\n                i: {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, \n                        chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, \n                        new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);\n                    },\n                    cardinality: 1\n                }\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                return maskedValue;\n            },\n            inputmode: "numeric"\n        },\n        email: {\n            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",\n            greedy: !1,\n            onBeforePaste: function(pastedValue, opts) {\n                return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");\n            },\n            definitions: {\n                "*": {\n                    validator: "[0-9A-Za-z!#$%&\'*+/=?^_`{|}~-]",\n                    cardinality: 1,\n                    casing: "lower"\n                },\n                "-": {\n                    validator: "[0-9A-Za-z-]",\n                    cardinality: 1,\n                    casing: "lower"\n                }\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                return maskedValue;\n            },\n            inputmode: "email"\n        },\n        mac: {\n            mask: "##:##:##:##:##:##"\n        },\n        vin: {\n            mask: "V{13}9{4}",\n            definitions: {\n                V: {\n                    validator: "[A-HJ-NPR-Za-hj-npr-z\\\\d]",\n                    cardinality: 1,\n                    casing: "upper"\n                }\n            },\n            clearIncomplete: !0,\n            autoUnmask: !0\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5leHRlbnNpb25zLmpzPzY5NWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLG9FQUFvRSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSztBQUMzRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHlEQUF5RCxFQUFFO0FBQzNEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsR0FBRyxFQUFFLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogaW5wdXRtYXNrLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XG4gICAgcmV0dXJuIElucHV0bWFzay5leHRlbmREZWZpbml0aW9ucyh7XG4gICAgICAgIEE6IHtcbiAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXG4gICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICB9LFxuICAgICAgICBcIiZcIjoge1xuICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtRmEtZl1cIixcbiAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgfVxuICAgIH0pLCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hc2s6IFwiKFxcXFxodHRwOi8vKXwoXFxcXGh0dHBcXFxcczovLyl8KGZ0cDovLyl8KGZ0cFxcXFxzOi8vKWl7K31cIixcbiAgICAgICAgICAgIGluc2VydE1vZGU6ICExLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICBpbnB1dG1vZGU6IFwidXJsXCJcbiAgICAgICAgfSxcbiAgICAgICAgaXA6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaVtpW2ldXS5pW2lbaV1dLmlbaVtpXV0uaVtpW2ldXVwiLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3MgLSAxID4gLTEgJiYgXCIuXCIgIT09IG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID8gKGNocnMgPSBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSArIGNocnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hycyA9IHBvcyAtIDIgPiAtMSAmJiBcIi5cIiAhPT0gbWFza3NldC5idWZmZXJbcG9zIC0gMl0gPyBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAyXSArIGNocnMgOiBcIjBcIiArIGNocnMpIDogY2hycyA9IFwiMDBcIiArIGNocnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cChcIjI1WzAtNV18MlswLTRdWzAtOV18WzAxXVswLTldWzAtOV1cIikudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCJcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiKnsxLDY0fVsuKnsxLDY0fV1bLip7MSw2NH1dWy4qezEsNjN9XUAtezEsNjN9Li17MSw2M31bLi17MSw2M31dWy4tezEsNjN9XVwiLFxuICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhc3RlZFZhbHVlID0gcGFzdGVkVmFsdWUudG9Mb3dlckNhc2UoKSwgcGFzdGVkVmFsdWUucmVwbGFjZShcIm1haWx0bzpcIiwgXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtWmEteiEjJCUmJyorLz0/Xl9ge3x9fi1dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwibG93ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXotXVwiLFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJlbWFpbFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1hYzoge1xuICAgICAgICAgICAgbWFzazogXCIjIzojIzojIzojIzojIzojI1wiXG4gICAgICAgIH0sXG4gICAgICAgIHZpbjoge1xuICAgICAgICAgICAgbWFzazogXCJWezEzfTl7NH1cIixcbiAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgVjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtSEotTlBSLVphLWhqLW5wci16XFxcXGRdXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICEwLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITBcbiAgICAgICAgfVxuICAgIH0pLCBJbnB1dG1hc2s7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n')
        }, function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.numeric.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask, undefined) {\n    function autoEscape(txt, opts) {\n        for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);\n        return escapedTxt;\n    }\n    return Inputmask.extendAliases({\n        numeric: {\n            mask: function(opts) {\n                if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), \n                opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), \n                " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, \n                opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), \n                isFinite(opts.integerDigits))) {\n                    var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;\n                    opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), \n                    opts.integerDigits < 1 && (opts.integerDigits = "*");\n                }\n                opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), \n                "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), \n                opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", \n                !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, \n                opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);\n                var mask = "[+]";\n                if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", \n                opts.digits !== undefined) {\n                    opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;\n                    var dq = opts.digits.toString().split(",");\n                    isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");\n                }\n                return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;\n            },\n            placeholder: "",\n            greedy: !1,\n            digits: "*",\n            digitsOptional: !0,\n            enforceDigitsOnBlur: !1,\n            radixPoint: ".",\n            positionCaretOnClick: "radixFocus",\n            groupSize: 3,\n            groupSeparator: "",\n            autoGroup: !1,\n            allowMinus: !0,\n            negationSymbol: {\n                front: "-",\n                back: ""\n            },\n            integerDigits: "+",\n            integerOptional: !0,\n            prefix: "",\n            suffix: "",\n            rightAlign: !0,\n            decimalProtect: !0,\n            min: null,\n            max: null,\n            step: 1,\n            insertMode: !0,\n            autoUnmask: !1,\n            unmaskAsNumber: !1,\n            inputmode: "numeric",\n            preValidation: function(buffer, pos, c, isSelection, opts) {\n                if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, \n                "" === buffer.join("") || {\n                    caret: pos,\n                    dopost: !0\n                });\n                if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {\n                    var radixPos = $.inArray(opts.radixPoint, buffer);\n                    if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {\n                        caret: radixPos + 1\n                    };\n                }\n                return !0;\n            },\n            postValidation: function(buffer, currentResult, opts) {\n                var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");\n                if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;\n                var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos, maskedValue = buffer.slice();\n                opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());\n                var charAtPos = maskedValue[caretPos];\n                if (charAtPos === opts.groupSeparator && (caretPos += 1, charAtPos = maskedValue[caretPos]), \n                caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;\n                charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", \n                opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), \n                prefix = prefix.join(""), suffix = suffix.join("");\n                var processValue = maskedValue.join("").replace(prefix, "");\n                if (processValue = processValue.replace(suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), \n                processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), \n                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), \n                isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), \n                processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\\?/g, "")), \n                processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), \n                "" !== processValue) {\n                    if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {\n                        var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);\n                        -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);\n                        for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);\n                    }\n                    if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(""); else {\n                        var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;\n                        processValue = Inputmask(function(buffer, opts) {\n                            var postMask = "";\n                            if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {\n                                var radixSplit = buffer.join("").split(opts.radixPoint);\n                                radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\\d*\\??\\d*/)[0].length + "}");\n                            }\n                            return postMask;\n                        }(processValue, opts), {\n                            numericInput: !0,\n                            jitMasking: !0,\n                            definitions: {\n                                "*": {\n                                    validator: "[0-9?]",\n                                    cardinality: 1\n                                }\n                            }\n                        }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), \n                        processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);\n                    }\n                }\n                if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), \n                processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, \n                processValue += opts.negationSymbol.back), processValue = processValue.split(""), \n                charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) caretPos = $.inArray("?", processValue), \n                caretPos > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {\n                    var newCaretPos = $.inArray(charAtPos, processValue);\n                    -1 !== newCaretPos && (caretPos = newCaretPos);\n                }\n                opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());\n                var rslt = {\n                    caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,\n                    buffer: processValue,\n                    refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")\n                };\n                return rslt.refreshFromBuffer ? rslt : currentResult;\n            },\n            onBeforeWrite: function(e, buffer, caretPos, opts) {\n                if (e) switch (e.type) {\n                  case "keydown":\n                    return opts.postValidation(buffer, {\n                        caret: caretPos,\n                        dopost: !0\n                    }, opts);\n\n                  case "blur":\n                  case "checkval":\n                    var unmasked;\n                    if (function(opts) {\n                        opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), \n                        "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), \n                        opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), \n                        null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), \n                        "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), \n                        opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), \n                        opts.parseMinMaxOptions = "done");\n                    }(opts), null !== opts.min || null !== opts.max) {\n                        if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {\n                            unmaskAsNumber: !0\n                        })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, \n                        opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {\n                            caret: caretPos,\n                            dopost: !0,\n                            placeholder: "0"\n                        }, opts);\n                        if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, \n                        opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {\n                            caret: caretPos,\n                            dopost: !0,\n                            placeholder: "0"\n                        }, opts);\n                    }\n                    return opts.postValidation(buffer, {\n                        caret: caretPos,\n                        placeholder: "0",\n                        event: "blur"\n                    }, opts);\n\n                  case "_checkval":\n                    return {\n                        caret: caretPos\n                    };\n                }\n            },\n            regex: {\n                integerPart: function(opts, emptyCheck) {\n                    return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\\\d+");\n                },\n                integerNPart: function(opts) {\n                    return new RegExp("[\\\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");\n                }\n            },\n            definitions: {\n                "~": {\n                    validator: function(chrs, maskset, pos, strict, opts, isSelection) {\n                        var isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);\n                        if (!0 === isValid) {\n                            if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {\n                                var processValue = maskset.buffer.join("");\n                                processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), \n                                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");\n                                var pvRadixSplit = processValue.split(opts.radixPoint);\n                                pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), \n                                "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), \n                                processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";\n                                var bufferTemplate = maskset._buffer.join("");\n                                for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$"); ) bufferTemplate = bufferTemplate.slice(1);\n                                processValue = processValue.replace(bufferTemplate, ""), processValue = processValue.split(""), \n                                isValid = processValue[pos] === undefined ? {\n                                    pos: pos,\n                                    remove: pos\n                                } : {\n                                    pos: pos\n                                };\n                            }\n                        } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = "0", \n                        isValid = {\n                            pos: pos + 1\n                        });\n                        return isValid;\n                    },\n                    cardinality: 1\n                },\n                "+": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);\n                    },\n                    cardinality: 1,\n                    placeholder: ""\n                },\n                "-": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        return opts.allowMinus && chrs === opts.negationSymbol.back;\n                    },\n                    cardinality: 1,\n                    placeholder: ""\n                },\n                ":": {\n                    validator: function(chrs, maskset, pos, strict, opts) {\n                        var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]", isValid = new RegExp(radix).test(chrs);\n                        return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {\n                            caret: pos + 1\n                        }), isValid;\n                    },\n                    cardinality: 1,\n                    placeholder: function(opts) {\n                        return opts.radixPoint;\n                    }\n                }\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;\n                var processValue = maskedValue.replace(opts.prefix, "");\n                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), \n                "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), \n                opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), \n                processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), \n                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), \n                Number(processValue)) : processValue;\n            },\n            isComplete: function(buffer, opts) {\n                var maskedValue = buffer.join("");\n                if (buffer.slice().join("") !== maskedValue) return !1;\n                var processValue = maskedValue.replace(opts.prefix, "");\n                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), \n                "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), \n                isFinite(processValue);\n            },\n            onBeforeMask: function(initialValue, opts) {\n                if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), \n                "" !== opts.radixPoint && isFinite(initialValue)) {\n                    var vs = initialValue.split("."), groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;\n                    2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));\n                }\n                var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\\./g);\n                if (dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\\./g, ""), \n                initialValue = initialValue.replace(",", opts.radixPoint)) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, ""), \n                initialValue = initialValue.replace(".", opts.radixPoint)) : initialValue = initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\\./g, "") : initialValue.replace(/,/g, "") : initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), \n                0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), \n                "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {\n                    var valueParts = initialValue.split(opts.radixPoint), decPart = valueParts[1].match(new RegExp("\\\\d*"))[0];\n                    if (parseInt(opts.digits) < decPart.toString().length) {\n                        var digitsFactor = Math.pow(10, parseInt(opts.digits));\n                        initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), \n                        initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor, \n                        initialValue = initialValue.toString().replace(".", opts.radixPoint);\n                    }\n                }\n                return initialValue;\n            },\n            canClearPosition: function(maskset, position, lvp, strict, opts) {\n                var vp = maskset.validPositions[position], canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;\n                return !canClear || "+" !== vp.match.nativeDef && "-" !== vp.match.nativeDef || (opts.isNegative = !1), \n                canClear;\n            },\n            onKeyDown: function(e, buffer, caretPos, opts) {\n                var $input = $(this);\n                if (e.ctrlKey) switch (e.keyCode) {\n                  case Inputmask.keyCode.UP:\n                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");\n                    break;\n\n                  case Inputmask.keyCode.DOWN:\n                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");\n                }\n            }\n        },\n        currency: {\n            prefix: "$ ",\n            groupSeparator: ",",\n            alias: "numeric",\n            placeholder: "0",\n            autoGroup: !0,\n            digits: 2,\n            digitsOptional: !1,\n            clearMaskOnLostFocus: !1\n        },\n        decimal: {\n            alias: "numeric"\n        },\n        integer: {\n            alias: "numeric",\n            digits: 0,\n            radixPoint: ""\n        },\n        percentage: {\n            alias: "numeric",\n            digits: 2,\n            digitsOptional: !0,\n            radixPoint: ".",\n            placeholder: "0",\n            autoGroup: !1,\n            min: 0,\n            max: 100,\n            suffix: " %",\n            allowMinus: !1\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanM/ZTAyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrQ0FBK0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLDZCQUE2QixlQUFlLDJCQUEyQjtBQUMzSztBQUNBO0FBQ0E7QUFDQSwrR0FBK0csb0JBQW9CLG1JQUFtSSxzQkFBc0Isa0RBQWtELG9CQUFvQjtBQUNsVztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBLCtNQUErTTtBQUMvTTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsdUJBQXVCLEVBQUUsRUFBRTtBQUN0RztBQUNBLG1GQUFtRixvREFBb0Q7QUFDdkk7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0RkFBNEY7QUFDNUY7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RywwRUFBMEU7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIGlucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrLCB1bmRlZmluZWQpIHtcbiAgICBmdW5jdGlvbiBhdXRvRXNjYXBlKHR4dCwgb3B0cykge1xuICAgICAgICBmb3IgKHZhciBlc2NhcGVkVHh0ID0gXCJcIiwgaSA9IDA7IGkgPCB0eHQubGVuZ3RoOyBpKyspIElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbdHh0LmNoYXJBdChpKV0gfHwgb3B0cy5kZWZpbml0aW9uc1t0eHQuY2hhckF0KGkpXSB8fCBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0ID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMucXVhbnRpZmllcm1hcmtlci5zdGFydCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLnF1YW50aWZpZXJtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5ncm91cG1hcmtlci5lbmQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5hbHRlcm5hdG9ybWFya2VyID09PSB0eHQuY2hhckF0KGkpID8gZXNjYXBlZFR4dCArPSBcIlxcXFxcIiArIHR4dC5jaGFyQXQoaSkgOiBlc2NhcGVkVHh0ICs9IHR4dC5jaGFyQXQoaSk7XG4gICAgICAgIHJldHVybiBlc2NhcGVkVHh0O1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICBudW1lcmljOiB7XG4gICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgIT09IG9wdHMucmVwZWF0ICYmIGlzTmFOKG9wdHMuaW50ZWdlckRpZ2l0cykgJiYgKG9wdHMuaW50ZWdlckRpZ2l0cyA9IG9wdHMucmVwZWF0KSwgXG4gICAgICAgICAgICAgICAgb3B0cy5yZXBlYXQgPSAwLCBvcHRzLmdyb3VwU2VwYXJhdG9yID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKFwiLlwiID09PSBvcHRzLnJhZGl4UG9pbnQgPyBvcHRzLmdyb3VwU2VwYXJhdG9yID0gXCIsXCIgOiBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ID8gb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiLlwiIDogb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICBcIiBcIiA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiAob3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gdW5kZWZpbmVkKSwgb3B0cy5hdXRvR3JvdXAgPSBvcHRzLmF1dG9Hcm91cCAmJiBcIlwiICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yLCBcbiAgICAgICAgICAgICAgICBvcHRzLmF1dG9Hcm91cCAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygb3B0cy5ncm91cFNpemUgJiYgaXNGaW5pdGUob3B0cy5ncm91cFNpemUpICYmIChvcHRzLmdyb3VwU2l6ZSA9IHBhcnNlSW50KG9wdHMuZ3JvdXBTaXplKSksIFxuICAgICAgICAgICAgICAgIGlzRmluaXRlKG9wdHMuaW50ZWdlckRpZ2l0cykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXBzID0gTWF0aC5mbG9vcihvcHRzLmludGVnZXJEaWdpdHMgLyBvcHRzLmdyb3VwU2l6ZSksIG1vZCA9IG9wdHMuaW50ZWdlckRpZ2l0cyAlIG9wdHMuZ3JvdXBTaXplO1xuICAgICAgICAgICAgICAgICAgICBvcHRzLmludGVnZXJEaWdpdHMgPSBwYXJzZUludChvcHRzLmludGVnZXJEaWdpdHMpICsgKDAgPT09IG1vZCA/IHNlcHMgLSAxIDogc2VwcyksIFxuICAgICAgICAgICAgICAgICAgICBvcHRzLmludGVnZXJEaWdpdHMgPCAxICYmIChvcHRzLmludGVnZXJEaWdpdHMgPSBcIipcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdHMucGxhY2Vob2xkZXIubGVuZ3RoID4gMSAmJiAob3B0cy5wbGFjZWhvbGRlciA9IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSwgXG4gICAgICAgICAgICAgICAgXCJyYWRpeEZvY3VzXCIgPT09IG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgJiYgXCJcIiA9PT0gb3B0cy5wbGFjZWhvbGRlciAmJiAhMSA9PT0gb3B0cy5pbnRlZ2VyT3B0aW9uYWwgJiYgKG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcImx2cFwiKSwgXG4gICAgICAgICAgICAgICAgb3B0cy5kZWZpbml0aW9uc1tcIjtcIl0gPSBvcHRzLmRlZmluaXRpb25zW1wiflwiXSwgb3B0cy5kZWZpbml0aW9uc1tcIjtcIl0uZGVmaW5pdGlvblN5bWJvbCA9IFwiflwiLCBcbiAgICAgICAgICAgICAgICAhMCA9PT0gb3B0cy5udW1lcmljSW5wdXQgJiYgKG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcInJhZGl4Rm9jdXNcIiA9PT0gb3B0cy5wb3NpdGlvbkNhcmV0T25DbGljayA/IFwibHZwXCIgOiBvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrLCBcbiAgICAgICAgICAgICAgICBvcHRzLmRpZ2l0c09wdGlvbmFsID0gITEsIGlzTmFOKG9wdHMuZGlnaXRzKSAmJiAob3B0cy5kaWdpdHMgPSAyKSwgb3B0cy5kZWNpbWFsUHJvdGVjdCA9ICExKTtcbiAgICAgICAgICAgICAgICB2YXIgbWFzayA9IFwiWytdXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2sgKz0gYXV0b0VzY2FwZShvcHRzLnByZWZpeCwgb3B0cyksICEwID09PSBvcHRzLmludGVnZXJPcHRpb25hbCA/IG1hc2sgKz0gXCJ+ezEsXCIgKyBvcHRzLmludGVnZXJEaWdpdHMgKyBcIn1cIiA6IG1hc2sgKz0gXCJ+e1wiICsgb3B0cy5pbnRlZ2VyRGlnaXRzICsgXCJ9XCIsIFxuICAgICAgICAgICAgICAgIG9wdHMuZGlnaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCA9IG9wdHMuZGVjaW1hbFByb3RlY3QgPyBcIjpcIiA6IG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRxID0gb3B0cy5kaWdpdHMudG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKGRxWzBdICYmIGRxWzFdICYmIGlzRmluaXRlKGRxWzFdKSkgPyBtYXNrICs9IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgKyBcIjt7XCIgKyBvcHRzLmRpZ2l0cyArIFwifVwiIDogKGlzTmFOKG9wdHMuZGlnaXRzKSB8fCBwYXJzZUludChvcHRzLmRpZ2l0cykgPiAwKSAmJiAob3B0cy5kaWdpdHNPcHRpb25hbCA/IG1hc2sgKz0gXCJbXCIgKyBvcHRzLnJhZGl4UG9pbnREZWZpbml0aW9uU3ltYm9sICsgXCI7ezEsXCIgKyBvcHRzLmRpZ2l0cyArIFwifV1cIiA6IG1hc2sgKz0gb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCArIFwiO3tcIiArIG9wdHMuZGlnaXRzICsgXCJ9XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFzayArPSBhdXRvRXNjYXBlKG9wdHMuc3VmZml4LCBvcHRzKSwgbWFzayArPSBcIlstXVwiLCBvcHRzLmdyZWVkeSA9ICExLCBtYXNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgIGRpZ2l0czogXCIqXCIsXG4gICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITAsXG4gICAgICAgICAgICBlbmZvcmNlRGlnaXRzT25CbHVyOiAhMSxcbiAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiLlwiLFxuICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uQ2xpY2s6IFwicmFkaXhGb2N1c1wiLFxuICAgICAgICAgICAgZ3JvdXBTaXplOiAzLFxuICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiXCIsXG4gICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxuICAgICAgICAgICAgYWxsb3dNaW51czogITAsXG4gICAgICAgICAgICBuZWdhdGlvblN5bWJvbDoge1xuICAgICAgICAgICAgICAgIGZyb250OiBcIi1cIixcbiAgICAgICAgICAgICAgICBiYWNrOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW50ZWdlckRpZ2l0czogXCIrXCIsXG4gICAgICAgICAgICBpbnRlZ2VyT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgcmlnaHRBbGlnbjogITAsXG4gICAgICAgICAgICBkZWNpbWFsUHJvdGVjdDogITAsXG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGwsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBmdW5jdGlvbihidWZmZXIsIHBvcywgYywgaXNTZWxlY3Rpb24sIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCItXCIgPT09IGMgfHwgYyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCkgcmV0dXJuICEwID09PSBvcHRzLmFsbG93TWludXMgJiYgKG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMuaXNOZWdhdGl2ZSA9PT0gdW5kZWZpbmVkIHx8ICFvcHRzLmlzTmVnYXRpdmUsIFxuICAgICAgICAgICAgICAgIFwiXCIgPT09IGJ1ZmZlci5qb2luKFwiXCIpIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgZG9wb3N0OiAhMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghMSA9PT0gaXNTZWxlY3Rpb24gJiYgYyA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG9wdHMuZGlnaXRzICE9PSB1bmRlZmluZWQgJiYgKGlzTmFOKG9wdHMuZGlnaXRzKSB8fCBwYXJzZUludChvcHRzLmRpZ2l0cykgPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSAkLmluQXJyYXkob3B0cy5yYWRpeFBvaW50LCBidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSByZXR1cm4gITAgPT09IG9wdHMubnVtZXJpY0lucHV0ID8gcG9zID09PSByYWRpeFBvcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiByYWRpeFBvcyArIDFcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbihidWZmZXIsIGN1cnJlbnRSZXN1bHQsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gb3B0cy5zdWZmaXguc3BsaXQoXCJcIiksIHByZWZpeCA9IG9wdHMucHJlZml4LnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzdWx0LnBvcyA9PT0gdW5kZWZpbmVkICYmIGN1cnJlbnRSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCAmJiAhMCAhPT0gY3VycmVudFJlc3VsdC5kb3Bvc3QpIHJldHVybiBjdXJyZW50UmVzdWx0O1xuICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGN1cnJlbnRSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IGN1cnJlbnRSZXN1bHQuY2FyZXQgOiBjdXJyZW50UmVzdWx0LnBvcywgbWFza2VkVmFsdWUgPSBidWZmZXIuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBvcHRzLm51bWVyaWNJbnB1dCAmJiAoY2FyZXRQb3MgPSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBjYXJldFBvcyAtIDEsIG1hc2tlZFZhbHVlID0gbWFza2VkVmFsdWUucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhckF0UG9zID0gbWFza2VkVmFsdWVbY2FyZXRQb3NdO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyQXRQb3MgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgKGNhcmV0UG9zICs9IDEsIGNoYXJBdFBvcyA9IG1hc2tlZFZhbHVlW2NhcmV0UG9zXSksIFxuICAgICAgICAgICAgICAgIGNhcmV0UG9zID09PSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBvcHRzLnN1ZmZpeC5sZW5ndGggLSAxICYmIGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50KSByZXR1cm4gY3VycmVudFJlc3VsdDtcbiAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCAmJiBjaGFyQXRQb3MgIT09IG9wdHMucmFkaXhQb2ludCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgJiYgY2hhckF0UG9zICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgKG1hc2tlZFZhbHVlW2NhcmV0UG9zXSA9IFwiP1wiLCBcbiAgICAgICAgICAgICAgICBvcHRzLnByZWZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49ICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIGNhcmV0UG9zIDwgb3B0cy5wcmVmaXgubGVuZ3RoIC0gMSArICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApID8gcHJlZml4W2NhcmV0UG9zIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCldID0gXCI/XCIgOiBvcHRzLnN1ZmZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49IG1hc2tlZFZhbHVlLmxlbmd0aCAtIG9wdHMuc3VmZml4Lmxlbmd0aCAtICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIChzdWZmaXhbY2FyZXRQb3MgLSAobWFza2VkVmFsdWUubGVuZ3RoIC0gb3B0cy5zdWZmaXgubGVuZ3RoIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCkpXSA9IFwiP1wiKSksIFxuICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5qb2luKFwiXCIpLCBzdWZmaXggPSBzdWZmaXguam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUuam9pbihcIlwiKS5yZXBsYWNlKHByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKHN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaXNOYU4ob3B0cy5wbGFjZWhvbGRlcikgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMucGxhY2Vob2xkZXIpLCBcImdcIiksIFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlLmxlbmd0aCA+IDEgJiYgMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAoXCIwXCIgPT09IGNoYXJBdFBvcyAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoL15cXD8vZywgXCJcIikpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZSgvXjAvZywgXCJcIikpLCBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50ICYmICEwICE9PSBvcHRzLm51bWVyaWNJbnB1dCAmJiAocHJvY2Vzc1ZhbHVlID0gXCIwXCIgKyBwcm9jZXNzVmFsdWUpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBwcm9jZXNzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5zcGxpdChcIlwiKSwgKCFvcHRzLmRpZ2l0c09wdGlvbmFsIHx8IG9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCkgJiYgaXNGaW5pdGUob3B0cy5kaWdpdHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3NpdGlvbiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIHByb2Nlc3NWYWx1ZSksIHJwYiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIG1hc2tlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSByYWRpeFBvc2l0aW9uICYmIChwcm9jZXNzVmFsdWUucHVzaChvcHRzLnJhZGl4UG9pbnQpLCByYWRpeFBvc2l0aW9uID0gcHJvY2Vzc1ZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gb3B0cy5kaWdpdHM7IGkrKykgb3B0cy5kaWdpdHNPcHRpb25hbCAmJiAoIW9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciB8fCBcImJsdXJcIiAhPT0gY3VycmVudFJlc3VsdC5ldmVudCkgfHwgcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSAhPT0gdW5kZWZpbmVkICYmIHByb2Nlc3NWYWx1ZVtyYWRpeFBvc2l0aW9uICsgaV0gIT09IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApID8gLTEgIT09IHJwYiAmJiBtYXNrZWRWYWx1ZVtycGIgKyBpXSAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSB8fCBtYXNrZWRWYWx1ZVtycGIgKyBpXSkgOiBwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gY3VycmVudFJlc3VsdC5wbGFjZWhvbGRlciB8fCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMuYXV0b0dyb3VwIHx8IFwiXCIgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgY2hhckF0UG9zID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgY3VycmVudFJlc3VsdC5wb3MgPT09IHVuZGVmaW5lZCAmJiAhY3VycmVudFJlc3VsdC5kb3Bvc3QpIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5qb2luKFwiXCIpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRSYWRpeCA9IHByb2Nlc3NWYWx1ZVtwcm9jZXNzVmFsdWUubGVuZ3RoIC0gMV0gPT09IG9wdHMucmFkaXhQb2ludCAmJiBjdXJyZW50UmVzdWx0LmMgPT09IG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IElucHV0bWFzayhmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdE1hc2sgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0TWFzayArPSBcIihcIiArIG9wdHMuZ3JvdXBTZXBhcmF0b3IgKyBcIip7XCIgKyBvcHRzLmdyb3VwU2l6ZSArIFwifSl7Kn1cIiwgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFNwbGl0ID0gYnVmZmVyLmpvaW4oXCJcIikuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXhTcGxpdFsxXSAmJiAocG9zdE1hc2sgKz0gb3B0cy5yYWRpeFBvaW50ICsgXCIqe1wiICsgcmFkaXhTcGxpdFsxXS5tYXRjaCgvXlxcZCpcXD8/XFxkKi8pWzBdLmxlbmd0aCArIFwifVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9jZXNzVmFsdWUsIG9wdHMpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpY0lucHV0OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqaXRNYXNraW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTk/XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZvcm1hdChwcm9jZXNzVmFsdWUuam9pbihcIlwiKSksIGFkZFJhZGl4ICYmIChwcm9jZXNzVmFsdWUgKz0gb3B0cy5yYWRpeFBvaW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIHByb2Nlc3NWYWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCAmJiAob3B0cy5pc05lZ2F0aXZlID0gXCIwXCIgIT09IHByb2Nlc3NWYWx1ZSksIFxuICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByZWZpeCArIHByb2Nlc3NWYWx1ZSwgcHJvY2Vzc1ZhbHVlICs9IHN1ZmZpeCwgb3B0cy5pc05lZ2F0aXZlICYmIChwcm9jZXNzVmFsdWUgPSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250ICsgcHJvY2Vzc1ZhbHVlLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgKz0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCkgaWYgKGNoYXJBdFBvcyAhPT0gb3B0cy5yYWRpeFBvaW50ICYmIGNoYXJBdFBvcyAhPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykgY2FyZXRQb3MgPSAkLmluQXJyYXkoXCI/XCIsIHByb2Nlc3NWYWx1ZSksIFxuICAgICAgICAgICAgICAgIGNhcmV0UG9zID4gLTEgPyBwcm9jZXNzVmFsdWVbY2FyZXRQb3NdID0gY2hhckF0UG9zIDogY2FyZXRQb3MgPSBjdXJyZW50UmVzdWx0LmNhcmV0IHx8IDA7IGVsc2UgaWYgKGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50IHx8IGNoYXJBdFBvcyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCB8fCBjaGFyQXRQb3MgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q2FyZXRQb3MgPSAkLmluQXJyYXkoY2hhckF0UG9zLCBwcm9jZXNzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAtMSAhPT0gbmV3Q2FyZXRQb3MgJiYgKGNhcmV0UG9zID0gbmV3Q2FyZXRQb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRzLm51bWVyaWNJbnB1dCAmJiAoY2FyZXRQb3MgPSBwcm9jZXNzVmFsdWUubGVuZ3RoIC0gY2FyZXRQb3MgLSAxLCBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgcnNsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNoYXJBdFBvcyA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRSZXN1bHQucG9zICE9PSB1bmRlZmluZWQgPyBjYXJldFBvcyArIChvcHRzLm51bWVyaWNJbnB1dCA/IC0xIDogMSkgOiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBwcm9jZXNzVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiBjdXJyZW50UmVzdWx0LmRvcG9zdCB8fCBidWZmZXIuam9pbihcIlwiKSAhPT0gcHJvY2Vzc1ZhbHVlLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByc2x0LnJlZnJlc2hGcm9tQnVmZmVyID8gcnNsdCA6IGN1cnJlbnRSZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CZWZvcmVXcml0ZTogZnVuY3Rpb24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xuICAgICAgICAgICAgICAgIGlmIChlKSBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImtleWRvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucG9zdFZhbGlkYXRpb24oYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdHMpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYmx1clwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrdmFsXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciB1bm1hc2tlZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMucGFyc2VNaW5NYXhPcHRpb25zID09PSB1bmRlZmluZWQgJiYgKG51bGwgIT09IG9wdHMubWluICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnJlcGxhY2Uob3B0cy5yYWRpeFBvaW50LCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMubWluID0gaXNGaW5pdGUob3B0cy5taW4pID8gcGFyc2VGbG9hdChvcHRzLm1pbikgOiBOYU4sIGlzTmFOKG9wdHMubWluKSAmJiAob3B0cy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gb3B0cy5tYXggJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgucmVwbGFjZShvcHRzLnJhZGl4UG9pbnQsIFwiLlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5tYXggPSBpc0Zpbml0ZShvcHRzLm1heCkgPyBwYXJzZUZsb2F0KG9wdHMubWF4KSA6IE5hTiwgaXNOYU4ob3B0cy5tYXgpICYmIChvcHRzLm1heCA9IE51bWJlci5NQVhfVkFMVUUpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBhcnNlTWluTWF4T3B0aW9ucyA9IFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfShvcHRzKSwgbnVsbCAhPT0gb3B0cy5taW4gfHwgbnVsbCAhPT0gb3B0cy5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bm1hc2tlZCA9IG9wdHMub25Vbk1hc2soYnVmZmVyLmpvaW4oXCJcIiksIHVuZGVmaW5lZCwgJC5leHRlbmQoe30sIG9wdHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbnVsbCAhPT0gb3B0cy5taW4gJiYgdW5tYXNrZWQgPCBvcHRzLm1pbikgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWluIDwgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gb3B0cy5tYXggJiYgdW5tYXNrZWQgPiBvcHRzLm1heCkgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWF4IDwgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWF4LnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucG9zdFZhbGlkYXRpb24oYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJibHVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJfY2hlY2t2YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIGludGVnZXJQYXJ0OiBmdW5jdGlvbihvcHRzLCBlbXB0eUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNoZWNrID8gbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XCIpIDogbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XFxcXGQrXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZWdlck5QYXJ0OiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiW1xcXFxkXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvcikgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5wbGFjZWhvbGRlci5jaGFyQXQoMCkpICsgXCJdK1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIn5cIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzLCBpc1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBzdHJpY3QgPyBuZXcgUmVnRXhwKFwiWzAtOVwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpICsgXCJdXCIpLnRlc3QoY2hycykgOiBuZXcgUmVnRXhwKFwiWzAtOV1cIikudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gb3B0cy5udW1lcmljSW5wdXQgJiYgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgXCJ+XCIgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5tYXRjaC5kZWYgJiYgIWlzU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzVmFsdWUgPSBtYXNrc2V0LmJ1ZmZlci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwdlJhZGl4U3BsaXQgPSBwcm9jZXNzVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZSYWRpeFNwbGl0Lmxlbmd0aCA+IDEgJiYgKHB2UmFkaXhTcGxpdFsxXSA9IHB2UmFkaXhTcGxpdFsxXS5yZXBsYWNlKC8wL2csIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIiA9PT0gcHZSYWRpeFNwbGl0WzBdICYmIChwdlJhZGl4U3BsaXRbMF0gPSBwdlJhZGl4U3BsaXRbMF0ucmVwbGFjZSgvMC9nLCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHZSYWRpeFNwbGl0WzBdICsgb3B0cy5yYWRpeFBvaW50ICsgcHZSYWRpeFNwbGl0WzFdIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZW1wbGF0ZSA9IG1hc2tzZXQuX2J1ZmZlci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb2Nlc3NWYWx1ZSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChwcm9jZXNzVmFsdWUgPSBidWZmZXJUZW1wbGF0ZSk7IG51bGwgPT09IHByb2Nlc3NWYWx1ZS5tYXRjaChJbnB1dG1hc2suZXNjYXBlUmVnZXgoYnVmZmVyVGVtcGxhdGUpICsgXCIkXCIpOyApIGJ1ZmZlclRlbXBsYXRlID0gYnVmZmVyVGVtcGxhdGUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKGJ1ZmZlclRlbXBsYXRlLCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHByb2Nlc3NWYWx1ZVtwb3NdID09PSB1bmRlZmluZWQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBzdHJpY3QgfHwgY2hycyAhPT0gb3B0cy5yYWRpeFBvaW50IHx8IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0gIT09IHVuZGVmaW5lZCB8fCAobWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIrXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiAoXCItXCIgPT09IGNocnMgfHwgY2hycyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiBjaHJzID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI6XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4ID0gXCJbXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSArIFwiXVwiLCBpc1ZhbGlkID0gbmV3IFJlZ0V4cChyYWRpeCkudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10ubWF0Y2gucGxhY2Vob2xkZXIgPT09IG9wdHMucmFkaXhQb2ludCAmJiAoaXNWYWxpZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogcG9zICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24obWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gdW5tYXNrZWRWYWx1ZSAmJiAhMCA9PT0gb3B0cy5udWxsYWJsZSkgcmV0dXJuIHVubWFza2VkVmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NWYWx1ZSA9IG1hc2tlZFZhbHVlLnJlcGxhY2Uob3B0cy5wcmVmaXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShvcHRzLnN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSwgXCJnXCIpLCBcIjBcIikpLCBcbiAgICAgICAgICAgICAgICBvcHRzLnVubWFza0FzTnVtYmVyID8gKFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAtMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgb3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSksIFwiLVwiKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIE51bWJlcihwcm9jZXNzVmFsdWUpKSA6IHByb2Nlc3NWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFza2VkVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLnNsaWNlKCkuam9pbihcIlwiKSAhPT0gbWFza2VkVmFsdWUpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZShvcHRzLnByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG9wdHMuc3VmZml4LCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLnJhZGl4UG9pbnQpLCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICBpc0Zpbml0ZShwcm9jZXNzVmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oaW5pdGlhbFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSA9IHVuZGVmaW5lZCwgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuY2hhckF0KGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA9PT0gb3B0cy5yYWRpeFBvaW50ID8gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA6IGluaXRpYWxWYWx1ZS50b1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgaXNGaW5pdGUoaW5pdGlhbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdnMgPSBpbml0aWFsVmFsdWUuc3BsaXQoXCIuXCIpLCBncm91cFNpemUgPSBcIlwiICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yID8gcGFyc2VJbnQob3B0cy5ncm91cFNpemUpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgMiA9PT0gdnMubGVuZ3RoICYmICh2c1swXS5sZW5ndGggPiBncm91cFNpemUgfHwgdnNbMV0ubGVuZ3RoID4gZ3JvdXBTaXplIHx8IHZzWzBdLmxlbmd0aCA8PSBncm91cFNpemUgJiYgdnNbMV0ubGVuZ3RoIDwgZ3JvdXBTaXplKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIga29tbWFNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC8sL2cpLCBkb3RNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC9cXC4vZyk7XG4gICAgICAgICAgICAgICAgaWYgKGRvdE1hdGNoZXMgJiYga29tbWFNYXRjaGVzID8gZG90TWF0Y2hlcy5sZW5ndGggPiBrb21tYU1hdGNoZXMubGVuZ3RoID8gKGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC9cXC4vZywgXCJcIiksIFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKFwiLFwiLCBvcHRzLnJhZGl4UG9pbnQpKSA6IGtvbW1hTWF0Y2hlcy5sZW5ndGggPiBkb3RNYXRjaGVzLmxlbmd0aCA/IChpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpIDwgaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIsXCIpID8gaW5pdGlhbFZhbHVlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSA6IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIDAgPT09IG9wdHMuZGlnaXRzICYmICgtMSAhPT0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpID8gaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIi5cIikpIDogLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKFwiLFwiKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIixcIikpKSksIFxuICAgICAgICAgICAgICAgIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiBpc0Zpbml0ZShvcHRzLmRpZ2l0cykgJiYgLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKG9wdHMucmFkaXhQb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUGFydHMgPSBpbml0aWFsVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KSwgZGVjUGFydCA9IHZhbHVlUGFydHNbMV0ubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxkKlwiKSlbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChvcHRzLmRpZ2l0cykgPCBkZWNQYXJ0LnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRzRmFjdG9yID0gTWF0aC5wb3coMTAsIHBhcnNlSW50KG9wdHMuZGlnaXRzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZShJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChpbml0aWFsVmFsdWUpICogZGlnaXRzRmFjdG9yKSAvIGRpZ2l0c0ZhY3RvciwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBvcHRzLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuQ2xlYXJQb3NpdGlvbjogZnVuY3Rpb24obWFza3NldCwgcG9zaXRpb24sIGx2cCwgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZwID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NpdGlvbl0sIGNhbkNsZWFyID0gdnAuaW5wdXQgIT09IG9wdHMucmFkaXhQb2ludCB8fCBudWxsICE9PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXS5tYXRjaC5mbiAmJiAhMSA9PT0gb3B0cy5kZWNpbWFsUHJvdGVjdCB8fCB2cC5pbnB1dCA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zaXRpb24gKyAxXSAmJiBudWxsID09PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uICsgMV0ubWF0Y2guZm4gfHwgaXNGaW5pdGUodnAuaW5wdXQpIHx8IHBvc2l0aW9uID09PSBsdnAgfHwgdnAuaW5wdXQgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaztcbiAgICAgICAgICAgICAgICByZXR1cm4gIWNhbkNsZWFyIHx8IFwiK1wiICE9PSB2cC5tYXRjaC5uYXRpdmVEZWYgJiYgXCItXCIgIT09IHZwLm1hdGNoLm5hdGl2ZURlZiB8fCAob3B0cy5pc05lZ2F0aXZlID0gITEpLCBcbiAgICAgICAgICAgICAgICBjYW5DbGVhcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBJbnB1dG1hc2sua2V5Q29kZS5VUDpcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgKyBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgSW5wdXRtYXNrLmtleUNvZGUuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgLSBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBwcmVmaXg6IFwiJCBcIixcbiAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIixcbiAgICAgICAgICAgIGF1dG9Hcm91cDogITAsXG4gICAgICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITEsXG4gICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITFcbiAgICAgICAgfSxcbiAgICAgICAgZGVjaW1hbDoge1xuICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiXG4gICAgICAgIH0sXG4gICAgICAgIGludGVnZXI6IHtcbiAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIGRpZ2l0czogMCxcbiAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudGFnZToge1xuICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICAgIGFsbG93TWludXM6ICExXG4gICAgICAgIH1cbiAgICB9KSwgSW5wdXRtYXNrO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n')
        }, function (module, exports, __webpack_require__) {
            eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n* inputmask.phone.extensions.js\n* https://github.com/RobinHerbots/Inputmask\n* Copyright (c) 2010 - 2017 Robin Herbots\n* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n* Version: 3.3.8\n*/\n\n!function(factory) {\n     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);\n}(function($, Inputmask) {\n    function maskSort(a, b) {\n        var maska = (a.mask || a).replace(/#/g, "9").replace(/\\)/, "9").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "9").replace(/\\)/, "9").replace(/[+()#-]/g, ""), maskas = (a.mask || a).split("#")[0], maskbs = (b.mask || b).split("#")[0];\n        return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);\n    }\n    var analyseMaskBase = Inputmask.prototype.analyseMask;\n    return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {\n        function reduceVariations(masks, previousVariation, previousmaskGroup) {\n            previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, \n            "" !== previousVariation && (previousmaskGroup[previousVariation] = {});\n            for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) mask = masks[i].mask || masks[i], \n            variation = mask.substr(0, 1), maskGroup[variation] = maskGroup[variation] || [], \n            maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);\n            for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);\n        }\n        function rebuild(maskGroup) {\n            var mask = "", submasks = [];\n            for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));\n            return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end, \n            mask;\n        }\n        var maskGroups = {};\n        return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (mask = mask.substr(1, mask.length - 2), \n        reduceVariations(mask.split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)), \n        mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\\\9")), analyseMaskBase.call(this, mask, regexMask, opts);\n    }, Inputmask.extendAliases({\n        abstractphone: {\n            groupmarker: {\n                start: "<",\n                end: ">"\n            },\n            countrycode: "",\n            phoneCodes: [],\n            mask: function(opts) {\n                return opts.definitions = {\n                    "#": Inputmask.prototype.definitions[9]\n                }, opts.phoneCodes.sort(maskSort);\n            },\n            keepStatic: !0,\n            onBeforeMask: function(value, opts) {\n                var processedValue = value.replace(/^0{1,2}/, "").replace(/[\\s]/g, "");\n                return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), \n                processedValue;\n            },\n            onUnMask: function(maskedValue, unmaskedValue, opts) {\n                return maskedValue.replace(/[()#-]/g, "");\n            },\n            inputmode: "tel"\n        }\n    }), Inputmask;\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5waG9uZS5leHRlbnNpb25zLmpzP2ZhYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGLGlJQUFpSSxRQUFRO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLHVEQUF1RCxJQUFJO0FBQzNEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBpbnB1dG1hc2sucGhvbmUuZXh0ZW5zaW9ucy5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cbiFmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiLCBcIi4vaW5wdXRtYXNrXCIgXSwgZmFjdG9yeSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliXCIpLCByZXF1aXJlKFwiLi9pbnB1dG1hc2tcIikpIDogZmFjdG9yeSh3aW5kb3cuZGVwZW5kZW5jeUxpYiB8fCBqUXVlcnksIHdpbmRvdy5JbnB1dG1hc2spO1xufShmdW5jdGlvbigkLCBJbnB1dG1hc2spIHtcbiAgICBmdW5jdGlvbiBtYXNrU29ydChhLCBiKSB7XG4gICAgICAgIHZhciBtYXNrYSA9IChhLm1hc2sgfHwgYSkucmVwbGFjZSgvIy9nLCBcIjlcIikucmVwbGFjZSgvXFwpLywgXCI5XCIpLnJlcGxhY2UoL1srKCkjLV0vZywgXCJcIiksIG1hc2tiID0gKGIubWFzayB8fCBiKS5yZXBsYWNlKC8jL2csIFwiOVwiKS5yZXBsYWNlKC9cXCkvLCBcIjlcIikucmVwbGFjZSgvWysoKSMtXS9nLCBcIlwiKSwgbWFza2FzID0gKGEubWFzayB8fCBhKS5zcGxpdChcIiNcIilbMF0sIG1hc2ticyA9IChiLm1hc2sgfHwgYikuc3BsaXQoXCIjXCIpWzBdO1xuICAgICAgICByZXR1cm4gMCA9PT0gbWFza2JzLmluZGV4T2YobWFza2FzKSA/IC0xIDogMCA9PT0gbWFza2FzLmluZGV4T2YobWFza2JzKSA/IDEgOiBtYXNrYS5sb2NhbGVDb21wYXJlKG1hc2tiKTtcbiAgICB9XG4gICAgdmFyIGFuYWx5c2VNYXNrQmFzZSA9IElucHV0bWFzay5wcm90b3R5cGUuYW5hbHlzZU1hc2s7XG4gICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUuYW5hbHlzZU1hc2sgPSBmdW5jdGlvbihtYXNrLCByZWdleE1hc2ssIG9wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVkdWNlVmFyaWF0aW9ucyhtYXNrcywgcHJldmlvdXNWYXJpYXRpb24sIHByZXZpb3VzbWFza0dyb3VwKSB7XG4gICAgICAgICAgICBwcmV2aW91c1ZhcmlhdGlvbiA9IHByZXZpb3VzVmFyaWF0aW9uIHx8IFwiXCIsIHByZXZpb3VzbWFza0dyb3VwID0gcHJldmlvdXNtYXNrR3JvdXAgfHwgbWFza0dyb3VwcywgXG4gICAgICAgICAgICBcIlwiICE9PSBwcmV2aW91c1ZhcmlhdGlvbiAmJiAocHJldmlvdXNtYXNrR3JvdXBbcHJldmlvdXNWYXJpYXRpb25dID0ge30pO1xuICAgICAgICAgICAgZm9yICh2YXIgdmFyaWF0aW9uID0gXCJcIiwgbWFza0dyb3VwID0gcHJldmlvdXNtYXNrR3JvdXBbcHJldmlvdXNWYXJpYXRpb25dIHx8IHByZXZpb3VzbWFza0dyb3VwLCBpID0gbWFza3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIG1hc2sgPSBtYXNrc1tpXS5tYXNrIHx8IG1hc2tzW2ldLCBcbiAgICAgICAgICAgIHZhcmlhdGlvbiA9IG1hc2suc3Vic3RyKDAsIDEpLCBtYXNrR3JvdXBbdmFyaWF0aW9uXSA9IG1hc2tHcm91cFt2YXJpYXRpb25dIHx8IFtdLCBcbiAgICAgICAgICAgIG1hc2tHcm91cFt2YXJpYXRpb25dLnVuc2hpZnQobWFzay5zdWJzdHIoMSkpLCBtYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBuZHggaW4gbWFza0dyb3VwKSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPiA1MDAgJiYgcmVkdWNlVmFyaWF0aW9ucyhtYXNrR3JvdXBbbmR4XS5zbGljZSgpLCBuZHgsIG1hc2tHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVidWlsZChtYXNrR3JvdXApIHtcbiAgICAgICAgICAgIHZhciBtYXNrID0gXCJcIiwgc3VibWFza3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIG5keCBpbiBtYXNrR3JvdXApICQuaXNBcnJheShtYXNrR3JvdXBbbmR4XSkgPyAxID09PSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPyBzdWJtYXNrcy5wdXNoKG5keCArIG1hc2tHcm91cFtuZHhdKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCArIG1hc2tHcm91cFtuZHhdLmpvaW4ob3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLmFsdGVybmF0b3JtYXJrZXIgKyBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0KSArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgcmVidWlsZChtYXNrR3JvdXBbbmR4XSkpO1xuICAgICAgICAgICAgcmV0dXJuIDEgPT09IHN1Ym1hc2tzLmxlbmd0aCA/IG1hc2sgKz0gc3VibWFza3NbMF0gOiBtYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgKyBzdWJtYXNrcy5qb2luKG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCkgKyBvcHRzLmdyb3VwbWFya2VyLmVuZCwgXG4gICAgICAgICAgICBtYXNrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXNrR3JvdXBzID0ge307XG4gICAgICAgIHJldHVybiBvcHRzLnBob25lQ29kZXMgJiYgKG9wdHMucGhvbmVDb2RlcyAmJiBvcHRzLnBob25lQ29kZXMubGVuZ3RoID4gMWUzICYmIChtYXNrID0gbWFzay5zdWJzdHIoMSwgbWFzay5sZW5ndGggLSAyKSwgXG4gICAgICAgIHJlZHVjZVZhcmlhdGlvbnMobWFzay5zcGxpdChvcHRzLmdyb3VwbWFya2VyLmVuZCArIG9wdHMuYWx0ZXJuYXRvcm1hcmtlciArIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpKSwgXG4gICAgICAgIG1hc2sgPSByZWJ1aWxkKG1hc2tHcm91cHMpKSwgbWFzayA9IG1hc2sucmVwbGFjZSgvOS9nLCBcIlxcXFw5XCIpKSwgYW5hbHlzZU1hc2tCYXNlLmNhbGwodGhpcywgbWFzaywgcmVnZXhNYXNrLCBvcHRzKTtcbiAgICB9LCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgIGFic3RyYWN0cGhvbmU6IHtcbiAgICAgICAgICAgIGdyb3VwbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiPFwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCI+XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3VudHJ5Y29kZTogXCJcIixcbiAgICAgICAgICAgIHBob25lQ29kZXM6IFtdLFxuICAgICAgICAgICAgbWFzazogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmRlZmluaXRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBcIiNcIjogSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9uc1s5XVxuICAgICAgICAgICAgICAgIH0sIG9wdHMucGhvbmVDb2Rlcy5zb3J0KG1hc2tTb3J0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZWVwU3RhdGljOiAhMCxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24odmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eMHsxLDJ9LywgXCJcIikucmVwbGFjZSgvW1xcc10vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcm9jZXNzZWRWYWx1ZS5pbmRleE9mKG9wdHMuY291bnRyeWNvZGUpID4gMSB8fCAtMSA9PT0gcHJvY2Vzc2VkVmFsdWUuaW5kZXhPZihvcHRzLmNvdW50cnljb2RlKSkgJiYgKHByb2Nlc3NlZFZhbHVlID0gXCIrXCIgKyBvcHRzLmNvdW50cnljb2RlICsgcHJvY2Vzc2VkVmFsdWUpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24obWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFza2VkVmFsdWUucmVwbGFjZSgvWygpIy1dL2csIFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJ0ZWxcIlxuICAgICAgICB9XG4gICAgfSksIElucHV0bWFzaztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2sucGhvbmUuZXh0ZW5zaW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n')
        }])
    }, 43: function (g, I, C) {
        var t = C(190), A = "object" == typeof self && self && self.Object === Object && self,
            e = t || A || Function("return this")();
        g.exports = e
    }, 52: function (g, I, C) {
        "use strict";
        var t = {
            name: "NoSsr",
            functional: !0,
            props: {placeholder: String, placeholderTag: {type: String, default: "div"}},
            render: function (g, I) {
                var C = I.parent, t = I.slots, A = I.props, e = t(), n = e.default;
                void 0 === n && (n = []);
                var i = e.placeholder;
                return C._isMounted ? n : (C.$once("hook:mounted", (function () {
                    C.$forceUpdate()
                })), A.placeholderTag && (A.placeholder || i) ? g(A.placeholderTag, {class: ["no-ssr-placeholder"]}, A.placeholder || i) : n.length > 0 ? n.map((function () {
                    return g(!1)
                })) : g(!1))
            }
        };
        g.exports = t
    }, 63: function (g, I, C) {
        var t = C(346), A = C(351);
        g.exports = function (g, I) {
            var C = A(g, I);
            return t(C) ? C : void 0
        }
    }, 89: function (g, I, C) {
        var t = C(189), A = C(347), e = C(348), n = t ? t.toStringTag : void 0;
        g.exports = function (g) {
            return null == g ? void 0 === g ? "[object Undefined]" : "[object Null]" : n && n in Object(g) ? A(g) : e(g)
        }
    }
}]);