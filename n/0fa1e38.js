(window.webpackJsonp = window.webpackJsonp || []).push([[20], {
    1080: function (e, t, i) {
        "use strict";
        i.r(t);
        i(9), i(7), i(6), i(11), i(12);
        var n = i(2), s = i(5), r = (i(20), i(3)), a = i(375);

        function o(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var l = {
            components: {LazyImage: a.a}, data: function () {
                return {}
            }, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"]))
        }, c = l, d = i(777), p = i(4);
        var m = Object(p.a)(c, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("section",
                {class: [e.$style.sFirst, {_light: e.isLightTheme}]},
                [n("div", {class: e.$style.sFirstInner},
                    [n("div", {class: e.$style.sFirstLeft},
                        [n("div", {class: [e.$style.decorWord, e.$style.decorWordTop, "stroke-word"]},
                            [e._v("\n                BONOLIT\n            ")]), e._v(" "),
                            n("div", {class: [e.$style.imageWrapper, "image-wrap"]},
                                [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(775)}})], 1)])]), e._v(" "),
                        n("div", {class: e.$style.sFirstRight}, [n("div", {class: e.$style.decor},
                            [n("svg", {
                                class: e.$style.pc,
                                attrs: {viewBox: "0 0 544 17", xmlns: "http://www.w3.org/2000/svg"}
                            }, [n("path", {
                class: e.$style.path1,
                attrs: {d: "M2067.33 1H21"}
            }), e._v(" "), n("path", {
                class: e.$style.path2,
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0 15C0 13.8954 0.89543 13 2 13H54C55.1046 13 56 13.8954 56 15C56 16.1046 55.1046 17 54 17H2C0.895431 17 0 16.1046 0 15Z"
                }
            })]), e._v(" "), n("svg", {
                class: e.$style.mob,
                attrs: {viewBox: "0 0 151 9", xmlns: "http://www.w3.org/2000/svg"}
            }, [n("path", {
                class: e.$style.path3,
                attrs: {d: "M2067.33 1H21"}
            }), e._v(" "), n("path", {
                class: e.$style.path4,
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0 7C0 5.89543 0.89543 5 2 5H54C55.1046 5 56 5.89543 56 7C56 8.10457 55.1046 9 54 9H2C0.895431 9 0 8.10457 0 7Z"
                }
            })])]), e._v(" "), n("div", {class: [e.$style.decorWord, e.$style.decorWordRight, "stroke-word"]},
                            ), e._v(" "), n("div", {class: [e.$style.imageWrapper, "image-wrap"]},
                            [n("div", {class: [e.$style.image, "image"]},
                                [n("lazy-image", {attrs: {image: i(776)}})], 1)]), e._v(" "),
                            n("div", {class: e.$style.content},
                                [n("div", {class: [e.$style.oneRow, "_light-40"]}, [e._v("\n                    Завод \n                ")]), e._v(" "),
                                    n("div", {class: [e.$style.twoRow, "_light-3f"]},
                                    [n("span", {staticClass: "_light-40"}, [e._v("Газоблок премиум-класса")])]
                                )])])])])
        }), [], !1, (function (e) {
            this.$style = d.default.locals || d.default
        }), null, null).exports;

        function f(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var g = {
            components: {LazyImage: a.a}, data: function () {
                return {
                    advantages: [{
                        title: "Уникальная архитектура",
                        text: "Большие площади, низкие подоконники и высокие потолки",
                        ico_dark: i(703),
                        ico_light: i(703)
                    }, {
                        title: "Дополнительный свет",
                        text: "Просторные квартиры с окнами на три стороны света",
                        ico_dark: i(704),
                        ico_light: i(704)
                    }, {
                        title: "Особая атмосфера",
                        text: "Небольшое количество квартир на этаже в каждой секции",
                        ico_dark: i(705),
                        ico_light: i(705)
                    }, {
                        title: "Мастер-спальни",
                        text: "Обладание собственным комфортом и гостевые пространства",
                        ico_dark: i(706),
                        ico_light: i(706)
                    }, {
                        title: "Инфраструктура",
                        text: "Город в городе: все рядом от супермаркета до Сколково",
                        ico_dark: i(707),
                        ico_light: i(707)
                    }, {
                        title: "Выбор отделки",
                        text: "Забота о вас, которая бережет время, ресурсы и силы",
                        ico_dark: i(708),
                        ico_light: i(708)
                    }]
                }
            }, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"]))
        }, b = g, u = i(782);
        var _ = Object(p.a)(b, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("section", {class: [e.$style.sAdvantage, {_light: e.isLightTheme}]}, [n("div", {class: e.$style.sAdvantageInner}, [n("div", {class: e.$style.sAdvantageLeft}, [n("div", {class: e.$style.decorOne}, [n("svg", {
                attrs: {
                    viewBox: "0 0 544 779",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M0.5 0.5H543.5V388.743L0.5 777.527V0.5Z",
                    stroke: "#FFEEC7"
                }
            })])]), e._v(" "), n("div", {class: e.$style.decorTwo}, [e.isLightTheme ? n("img", {attrs: {src: i(780)}}) : n("img", {attrs: {src: i(779)}})]), e._v(" "), n("div", {class: [e.$style.title, "_light-3f"]}, [e._v("\n                Новый взгляд. Новый уровень.\n            ")]), e._v(" "), n("div", {class: e.$style.text}, [e._v("\n                Третий корпус микро-города Stellar City обладает особенными архитектурными характеристиками. Новое увеличенное остекление квартир, до трех сторон света и видовые гардеробные — все для владения пространством, будучи частью города. Бронируйте уникальные форматы квартир с мастер-спальнями, а также квартиры с хоум-офисами и отличными видами из окна.\n            ")]), e._v(" "), n("div", {class: [e.$style.decorWord, "stroke-word"]}, [e._v("\n                NEW\n            ")]), e._v(" "), n("div", {class: [e.$style.imageWrapper, "image-wrap"]}, [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(781)}})], 1)])]), e._v(" "), n("div", {class: e.$style.sAdvantageRight}, [n("div", {class: e.$style.items}, e._l(e.advantages, (function (t, i) {
                return n("div", {
                    key: i,
                    class: e.$style.item
                }, [n("div", {class: e.$style.itemIco}, [n("img", {
                    attrs: {
                        src: t.ico_dark,
                        alt: ""
                    }
                })]), e._v(" "), n("div", {class: e.$style.itemContent}, [n("div", {class: [e.$style.itemTitle, "_light-66"]}, [e._v("\n                            " + e._s(t.title) + "\n                        ")]), e._v(" "), n("div", {class: e.$style.itemText}, [e._v("\n                            " + e._s(t.text) + "\n                        ")])])])
            })), 0)])])])
        }), [], !1, (function (e) {
            this.$style = u.default.locals || u.default
        }), null, null).exports, h = {}, v = (i(785), Object(p.a)(h, (function () {
            var e = this.$createElement;
            return (this._self._c || e)("div", {staticClass: "cross-decor"})
        }), [], !1, null, null, null).exports);

        function y(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var x = {
            components: {LazyImage: a.a, CrossDecor: v}, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : y(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"]))
        }, w = x, k = i(787);
        var O = Object(p.a)(w, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("section", {class: [e.$style.sSpace, {_light: e.isLightTheme}]}, [n("CrossDecor", {class: e.$style.crossDecor}), e._v(" "), n("div", {class: e.$style.sSpaceInner}, [n("div", {class: [e.$style.title, "_light-3f"]}, [n("span", [e._v("Свой космос ")]), e._v(" на орбите Москвы\n        ")]), e._v(" "), n("div", {class: e.$style.change}, [n("div", {class: [e.$style.buttonWrap]}, [n("nuxt-link", {
                class: [e.$style.button, "button button-bordered-2"],
                attrs: {to: "/filter"}
            }, [e._v("Выбрать квартиру")])], 1), e._v(" "), n("div", {class: [e.$style.imageWrapper, "image-wrap"]}, [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(784)}})], 1)])])])], 1)
        }), [], !1, (function (e) {
            this.$style = k.default.locals || k.default
        }), null, null).exports;

        function j(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var $ = {
            components: {LazyImage: a.a}, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : j(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"]))
        }, C = $, S = i(790);
        var R = Object(p.a)(C, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("section", {class: [e.$style.sUrban, {_light: e.isLightTheme}]}, [n("div", {class: e.$style.sUrbanInner}, [n("div", {class: e.$style.sUrbanLeft}, [n("div", {class: e.$style.inner}, [n("div", {class: [e.$style.title, "second-title _light-36"]}, [e._v("\n                    Правильное впечатление с первого шага\n                ")]), e._v(" "), n("div", {class: e.$style.text}, [e._v("\n                    Эргономичные, авторские входные группы станут отличным первым впечатлением гостей и будущих резидентов Stellar City. Выход на новый уровень ощущается с первого входа.\n                ")])])]), e._v(" "), n("div", {class: e.$style.sUrbanRight}, [n("div", {class: e.$style.buttonWrap}, [n("nuxt-link", {
                    class: [e.$style.button, "button button-bordered-2"],
                    attrs: {to: "/"}
                }, [e._v("Выбрать квартиру")])], 1), e._v(" "), n("div", {class: e.$style.text_2}, [e._v("\n                В дизайнерской отделке входных групп использован натуральный мрамор, керамогранит, полудрагоценный слэб, а умное зонирование комфортно разместит гостей резидентов.\n            ")]), e._v(" "),
                    n("div", {class: [e.$style.wrapper]}, [n("div", {class: [e.$style.decorWord, "stroke-word"]}, [e._v("\n                    ABOUT\n                ")]), e._v(" "), n("div", {class: [e.$style.imageWrapper, "image-wrap"]}, [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(789)}})], 1)])])])])])
            }), [], !1, (function (e) {
                this.$style = S.default.locals || S.default
            }), null, null).exports, F = i(698), P = i(597),
            I = {components: {LazyImage: a.a}, props: {image: {type: String, default: ""}}}, L = i(793);
        var A = Object(p.a)(I, (function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {
                class: [e.$style.gallery, "image-wrap"], on: {
                    click: function (t) {
                        return e.$emit("modal-show")
                    }
                }
            }, [i("div", {class: [e.$style.image, "image"]}, [i("lazy-image", {attrs: {image: e.image}})], 1), e._v(" "), i("div", {class: e.$style.galleryDesc}, [i("div", {class: e.$style.plus}), e._v(" "), i("div", {class: e.$style.galleryText}, [e._v("Открыть галерею")])])])
        }), [], !1, (function (e) {
            this.$style = L.default.locals || L.default
        }), null, null).exports, z = i(440);

        function T(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var W = {
            components: {LazyImage: a.a, CrossDecor: v, GalleryBlock: A, Modal: z.a}, data: function () {
                return {
                    images: [{file_preview: "", file_display: i(710)}, {
                        file_preview: "",
                        file_display: i(795)
                    }, {file_preview: "", file_display: i(796)}, {
                        file_preview: "",
                        file_display: i(797)
                    }, {file_preview: "", file_display: i(798)}], isModalActive: !1
                }
            }, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : T(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"])), methods: {
                onModalClose: function () {
                    this.isModalActive = !1
                }, onModalShow: function () {
                    this.isModalActive = !0, this.$store.dispatch("modal/SET_MODAL", !0)
                }
            }
        }, D = W, M = i(799);
        var E = Object(p.a)(D, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("section", {class: [e.$style.sInspiration, {_light: e.isLightTheme}]}, [n("CrossDecor", {class: e.$style.crossDecor}), e._v(" "), n("div", {class: e.$style.inspiration}, [n("div", {class: [e.$style.inspirationTitle, "first-title"]}, [e._v("\n            Зеленее двора только парки вокруг\n        ")]), e._v(" "), n("div", {class: [e.$style.inspirationImageWrapper, "image-wrap"]}, [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(792)}})], 1)])]), e._v(" "), n("div", {class: e.$style.planning}, [n("div", {class: e.$style.planningInner}, [n("div", {class: e.$style.planningLeft}, [n("div", {class: [e.$style.planningTitle, "second-title _light-48"]}, [e._v("\n                    Уникальные форматы, дополнительный комфорт\n                ")]), e._v(" "), n("div", {class: [e.$style.text_1, "_light-48"]}, [e._v("\n                    61 вариант планировки\n                ")]), e._v(" "), n("div", {class: e.$style.text_2}, [e._v("\n                    Инновационные планировки с возможностью кастомизации пространства: мастер-спальни с собственной ванной, видовые гардеробные, персональные кабинеты, кухни-гостиные до 30 м² и окна на три стороны света.\n                ")])]), e._v(" "), n("div", {class: e.$style.planningRight}, [n("GalleryBlock", {
                class: e.$style.gallery,
                attrs: {image: i(710)},
                on: {"modal-show": e.onModalShow}
            })], 1)])]), e._v(" "), n("modal", {
                attrs: {
                    "is-active": e.isModalActive,
                    images: e.images,
                    "custom-keys": {preview: "file_preview", image: "file_display"}
                }, on: {close: e.onModalClose}
            })], 1)
        }), [], !1, (function (e) {
            this.$style = M.default.locals || M.default
        }), null, null).exports;

        function Z(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var G = {
            components: {LazyImage: a.a}, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Z(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"]))
        }, N = G, U = i(803);
        var q = Object(p.a)(N, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("section", {class: [e.$style.sAtmosphere, {_light: e.isLightTheme}]}, [n("div", {class: e.$style.sAtmosphereInner}, [n("div", {class: [e.$style.title, "second-title _light-3f"]}, [e._v("\n            Отделка премиальными материалами\n        ")]), e._v(" "), n("div", {class: e.$style.imageWrapper}, [n("div", {class: [e.$style.imageWrapperLeft, "image-wrap"]}, [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(801)}})], 1)]), e._v(" "), n("div", {class: [e.$style.imageWrapperRight, "image-wrap"]}, [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(802)}})], 1)])])])])
        }), [], !1, (function (e) {
            this.$style = U.default.locals || U.default
        }), null, null).exports;

        function Y(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var K = {
            components: {GalleryBlock: A, Modal: z.a}, data: function () {
                return {
                    images: [{file_preview: "", file_display: i(808)}, {
                        file_preview: "",
                        file_display: i(809)
                    }, {file_preview: "", file_display: i(810)}, {
                        file_preview: "",
                        file_display: i(811)
                    }, {file_preview: "", file_display: i(812)}, {
                        file_preview: "",
                        file_display: i(813)
                    }, {file_preview: "", file_display: i(814)}, {file_preview: "", file_display: i(815)}],
                    isModalActive: !1
                }
            }, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Y(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"])), methods: {
                onModalClose: function () {
                    this.isModalActive = !1
                }, onModalShow: function () {
                    this.isModalActive = !0, this.$store.dispatch("modal/SET_MODAL", !0)
                }
            }
        }, B = K, H = i(816);
        var J = Object(p.a)(B, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("section", {class: [e.$style.sFinishing, {_light: e.isLightTheme}]}, [n("div", {class: e.$style.sFinishingInner}, [n("div", {class: e.$style.sFinishingLeft}, [n("div", {class: e.$style.decorOne}, [n("svg", {
                attrs: {
                    viewBox: "0 0 544 605",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M0.5 0.5H543.5V214.743L0.5 603.527V0.5Z",
                    stroke: "#FFEEC7"
                }
            })])]), e._v(" "), n("div", {class: e.$style.decorTwo}, [e.isLightTheme ? n("img", {attrs: {src: "tabS" === e.$mq ? i(711) : i(806)}}) : n("img", {attrs: {src: "tabS" === e.$mq ? i(711) : i(805)}})]), e._v(" "), n("div", {class: [e.$style.title, "second-title _light-3f"]}, [e._v("\n                Качество и мастерство\n            ")]), e._v(" "), n("div", {class: e.$style.text}, [e._v("\n                Полная персонализация пространства под стиль жизни: выбор квартиры с отделкой и без. Панорамные квартиры на высоких этажах с отделкой White Box.\n            ")])]), e._v(" "), n("div", {class: e.$style.sFinishingRight}, [n("GalleryBlock", {
                class: e.$style.gallery,
                attrs: {image: i(807)},
                on: {"modal-show": e.onModalShow}
            })], 1)]), e._v(" "), n("modal", {
                attrs: {
                    "is-active": e.isModalActive,
                    images: e.images,
                    "custom-keys": {preview: "file_preview", image: "file_display"}
                }, on: {close: e.onModalClose}
            })], 1)
        }), [], !1, (function (e) {
            this.$style = H.default.locals || H.default
        }), null, null).exports;

        function X(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var V = {
            components: {LazyImage: a.a}, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : X(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"]))
        }, Q = V, ee = i(819);
        var te = Object(p.a)(Q, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("section", {class: [e.$style.sChooseFinishing, {_light: e.isLightTheme}]}, [n("div", {class: e.$style.sChooseFinishingInner}, [n("div", {class: [e.$style.decorWord, "stroke-word"]}, [e._v("\n            NEW\n        ")]), e._v(" "), n("div", {class: [e.$style.title, "first-title _light-3f"]}, [e._v("\n            Выбирайте то, что нравится\n        ")]), e._v(" "), n("div", {class: [e.$style.imageWrapper, "image-wrap"]}, [n("div", {class: [e.$style.image, "image"]}, [n("lazy-image", {attrs: {image: i(818)}})], 1)])])])
        }), [], !1, (function (e) {
            this.$style = ee.default.locals || ee.default
        }), null, null).exports, ie = i(598), ne = i(396), se = {
            name: "AdvantageCard",
            components: {LazyImage: a.a},
            props: {
                link: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }
        }, re = i(821);
        var ae = {
            name: "PurchaseList", components: {
                AdvantageCard: Object(p.a)(se, (function () {
                    var e = this, t = e.$createElement, i = e._self._c || t;
                    return i("nuxt-link", {
                        class: e.$style.card,
                        attrs: {to: e.link.slug}
                    }, [i("div", {class: e.$style.typeImageWraper}, [i("LazyImage", {
                        class: e.$style.typeImage,
                        attrs: {preview: e.link.image_preview, image: e.link.image_display}
                    })], 1), e._v(" "), e.link.title ? i("h3", {class: e.$style.title}, [e._v("\n        " + e._s(e.link.title) + "\n    ")]) : e._e(), e._v(" "), i("div", {class: e.$style.plus})])
                }), [], !1, (function (e) {
                    this.$style = re.default.locals || re.default
                }), null, null).exports
            }, data: function () {
                return {
                    links: [{
                        image_display: i(712),
                        image_preview: "",
                        title: "Выбрать на генплане",
                        slug: "/#genplan"
                    }, {image_display: i(712), image_preview: "", title: "Подобрать по параметрам", slug: "/filter"}],
                    isHovered: !1
                }
            }, mounted: function () {
                setTimeout((function () {
                    Object(ne.a)()
                }), 300)
            }
        }, oe = i(823);
        var le = Object(p.a)(ae, (function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {class: [e.$style.list, {_hover: e.isHovered}]}, e._l(e.links, (function (t) {
                return i("div", {
                    key: t.id,
                    staticClass: "js-observe",
                    class: e.$style.card,
                    on: {
                        mouseenter: function (t) {
                            e.isHovered = !0
                        }, mouseleave: function (t) {
                            e.isHovered = !1
                        }
                    }
                }, [i("advantage-card", {class: e.$style.componentCard, attrs: {link: t}})], 1)
            })), 0)
        }), [], !1, (function (e) {
            this.$style = oe.default.locals || oe.default
        }), null, null).exports, ce = i(447), de = i(690);

        function pe(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var me = {
            components: {
                FirstSection: m,
                AdvantageSection: _,
                SpaceSection: O,
                UrbanSection: R,
                CrisisSection: F.a,
                IndexFinishes: P.a,
                InspirationSection: E,
                AtmosphereSection: q,
                FInishingSection: J,
                ChooseFinishingSection: te,
                SignUp: ie.a,
                ListSection: le,
                VModal: ce.a,
                NewForm: de.a
            }, data: function () {
                return {interiorData: null, isFormOpen: !1}
            }, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? pe(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : pe(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"])), mounted: function () {
                var e = this;
                this.$nextTick((function () {
                    e.getInterriorData()
                }))
            }, methods: {
                getInterriorData: function () {
                    var e = this;
                    return Object(n.a)(regeneratorRuntime.mark((function t() {
                        var i, n;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (null === (i = e.$api) || void 0 === i ? void 0 : i.interiorGallery) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 2:
                                    return t.next = 4, e.$axios.$get("".concat(e.$api.interiorGallery, "?show_on_index=true")).catch((function (e) {
                                        console.error("asyncData: Cant get enterior data")
                                    }));
                                case 4:
                                    if (n = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    e.interiorData = n;
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }
        }, fe = me, ge = i(829);
        var be = Object(p.a)(fe, (function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {class: ["wrapper", {_light: e.isLightTheme}]}, [i("FirstSection"), e._v(" "), i("AdvantageSection"), e._v(" "), i("SpaceSection"), e._v(" "), i("UrbanSection"), e._v(" "), i("CrisisSection", {
                class: e.$style.sCrisis,
                on: {
                    request: function (t) {
                        e.isFormOpen = !0
                    }
                }
            }), e._v(" "), e.interiorData && e.interiorData.length ? i("section", {
                class: [e.$style.finishes, "section"],
                attrs: {id: "finish"}
            }, [i("index-finishes", {
                attrs: {
                    "interior-list": e.interiorData,
                    title: "3D-туры по квартирам с отделкой"
                }
            })], 1) : e._e(), e._v(" "), i("InspirationSection"), e._v(" "), i("AtmosphereSection"), e._v(" "), i("FInishingSection"), e._v(" "), i("ChooseFinishingSection"), e._v(" "), i("section", {class: [e.$style.signup]}, [i("sign-up")], 1), e._v(" "), i("ListSection", {class: e.$style.list}), e._v(" "), i("v-modal", {
                attrs: {"is-visible": e.isFormOpen},
                on: {
                    close: function (t) {
                        e.isFormOpen = !1
                    }
                }
            }, [i("new-form", {
                on: {
                    success: function (t) {
                        e.isFormOpen = !1
                    }
                }
            })], 1)], 1)
        }), [], !1, (function (e) {
            this.$style = ge.default.locals || ge.default
        }), null, null);
        t.default = be.exports
    }, 396: function (e, t, i) {
        "use strict";
        i.d(t, "a", (function () {
            return r
        }));
        i(35), i(16), i(26), i(7), i(45), i(30), i(29);

        function n(e, t) {
            var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!i) {
                if (Array.isArray(e) || (i = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    i && (e = i);
                    var n = 0, r = function () {
                    };
                    return {
                        s: r, n: function () {
                            return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                        }, e: function (e) {
                            throw e
                        }, f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, o = !0, l = !1;
            return {
                s: function () {
                    i = i.call(e)
                }, n: function () {
                    var e = i.next();
                    return o = e.done, e
                }, e: function (e) {
                    l = !0, a = e
                }, f: function () {
                    try {
                        o || null == i.return || i.return()
                    } finally {
                        if (l) throw a
                    }
                }
            }
        }

        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }

        var r = function () {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .1,
                i = document.querySelectorAll(".js-observe"), s = {threshold: [t]},
                r = new IntersectionObserver((function (e, t) {
                    e.forEach((function (e) {
                        if (e.isIntersecting) {
                            var i = e.target;
                            i.classList.add("_visible"), i.classList.remove(".js-observe"), t.unobserve(i)
                        }
                    }))
                }), s), a = n(i);
            try {
                for (a.s(); !(e = a.n()).done;) {
                    var o = e.value;
                    r.observe(o)
                }
            } catch (l) {
                a.e(l)
            } finally {
                a.f()
            }
        }
    }, 397: function (e, t, i) {
        var n = i(8), s = i(210)(!1);
        n(n.S, "Object", {
            values: function (e) {
                return s(e)
            }
        })
    }, 407: function (e, t, i) {
        var n = i(621);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("42db7cf6", n, !0, {sourceMap: !1})
    }, 420: function (e, t, i) {
        var n = i(641);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("b0bf11da", n, !0, {sourceMap: !1})
    }, 486: function (e, t, i) {
        var n = i(778);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("2235ec0a", n, !0, {sourceMap: !1})
    }, 487: function (e, t, i) {
        var n = i(783);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("10c219c5", n, !0, {sourceMap: !1})
    }, 488: function (e, t, i) {
        var n = i(788);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("560500cf", n, !0, {sourceMap: !1})
    }, 489: function (e, t, i) {
        var n = i(791);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("11d4f937", n, !0, {sourceMap: !1})
    }, 490: function (e, t, i) {
        var n = i(794);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("1b98d987", n, !0, {sourceMap: !1})
    }, 491: function (e, t, i) {
        var n = i(800);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("3dfc6e72", n, !0, {sourceMap: !1})
    }, 492: function (e, t, i) {
        var n = i(804);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("250154b6", n, !0, {sourceMap: !1})
    }, 493: function (e, t, i) {
        var n = i(817);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("a7f33806", n, !0, {sourceMap: !1})
    }, 494: function (e, t, i) {
        var n = i(820);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("600771eb", n, !0, {sourceMap: !1})
    }, 495: function (e, t, i) {
        var n = i(822);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("e380b436", n, !0, {sourceMap: !1})
    }, 496: function (e, t, i) {
        var n = i(824);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("7a36ce36", n, !0, {sourceMap: !1})
    }, 499: function (e, t, i) {
        var n = i(830);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("65122066", n, !0, {sourceMap: !1})
    }, 616: function (e, t, i) {
        e.exports = i.p + "img/s-crisis-ico-1.e6991d5.svg"
    }, 617: function (e, t, i) {
        e.exports = i.p + "img/s-crisis-ico-2.cba7045.svg"
    }, 618: function (e, t, i) {
        e.exports = i.p + "img/s-crisis-ico-4.1674b94.svg"
    }, 619: function (e, t, i) {
        e.exports = i.p + "img/s-crisis-ico-3.bfa9b21.svg"
    }, 620: function (e, t, i) {
        "use strict";
        var n = i(407), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 621: function (e, t, i) {
        var n = i(14), s = i(208), r = i(622), a = i(623), o = n(!1), l = s(r), c = s(a);
        o.push([e.i, ".sCrisis_lb644{position:relative;padding:0 2rem}.sCrisis_lb644.type-two.type-two._light button,.sCrisis_lb644.type-two._light button{color:#222326}.sCrisis_lb644.type-two .tab_w\\+k\\+o{border:1px solid #858585}.sCrisis_lb644.type-two .tab_w\\+k\\+o:before{background:linear-gradient(245.79deg,#2f9ab9 -21.85%,#7251ef 65.51%)}.sCrisis_lb644.type-two .tabsPane_7w-ge .left_KeHBV .nums_8wP8q:after{background-image:url(" + l + ');-webkit-transform:translate(-50%,-72%);transform:translate(-50%,-72%)}.sCrisis_lb644.type-two .tabsPane_7w-ge .right_dSjD3{background:#fff}.sCrisis_lb644.type-two .tabsPane_7w-ge .right_dSjD3 .num_Hnip5{color:#7352f0}.sCrisis_lb644.type-two .tabsPane_7w-ge .right_dSjD3 .mark_ZfPlV{color:#3a3a3a}.sCrisis_lb644.type-two .textContent_93MvY{-ms-flex-item-align:end;align-self:flex-end}.sCrisis_lb644.type-two .textContent_93MvY br{display:none}.sCrisis_lb644.type-two .btnContent2_9bQqJ{display:block;padding-top:2rem}@media only screen and (max-width:920px){.sCrisis_lb644 .title_peLwP{text-align:center}}.sCrisis_lb644 .tabs_eeNZt{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:6rem}@media only screen and (max-width:920px){.sCrisis_lb644 .tabs_eeNZt{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.sCrisis_lb644 .tab_w\\+k\\+o{position:relative;padding:1rem 2rem 1rem 3rem;margin-right:4px;color:#fff;line-height:1;border:1px solid #d7c7aa;cursor:pointer;-webkit-transition:background .25s ease-in-out;transition:background .25s ease-in-out;overflow:hidden}.sCrisis_lb644 .tab_w\\+k\\+o:before{content:"";position:absolute;top:0;left:0;width:101%;height:101%;background:linear-gradient(245.79deg,#faa -21.85%,#bf95c8 65.51%);opacity:0;-webkit-transition:opacity .25s ease-in-out;transition:opacity .25s ease-in-out}@media only screen and (max-width:920px){.sCrisis_lb644 .tab_w\\+k\\+o{padding:1rem 2rem}}.sCrisis_lb644 .tab_w\\+k\\+o.active:before,.sCrisis_lb644 .tab_w\\+k\\+o:hover:before{opacity:1}.sCrisis_lb644 .tabText_dNMNJ{position:relative;font-weight:400;font-size:1.4rem;line-height:1.5;z-index:1}@media only screen and (max-width:920px){.sCrisis_lb644 .tabText_dNMNJ{font-size:1.3rem}}.sCrisis_lb644 .tabNum_OdwzM{position:relative;font-weight:700;font-size:2.4rem;z-index:1}@media only screen and (max-width:920px){.sCrisis_lb644 .tabNum_OdwzM{font-size:1.3rem}}.sCrisis_lb644 .content_B4ruM{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:7rem}@media only screen and (max-width:920px){.sCrisis_lb644 .content_B4ruM{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.sCrisis_lb644 .tabsPane_7w-ge{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:2.5rem}@media only screen and (max-width:920px){.sCrisis_lb644 .tabsPane_7w-ge{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media only screen and (max-width:920px){.sCrisis_lb644 .tabsPane_7w-ge .left_KeHBV{margin-bottom:20px}}.sCrisis_lb644 .tabsPane_7w-ge .left_KeHBV .nums_8wP8q{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-weight:700;text-transform:uppercase;font-size:1.8rem;letter-spacing:.02em;margin-bottom:1rem}@media only screen and (max-width:920px){.sCrisis_lb644 .tabsPane_7w-ge .left_KeHBV .nums_8wP8q{font-size:1.3rem}}.sCrisis_lb644 .tabsPane_7w-ge .left_KeHBV .nums_8wP8q:after{content:"";position:absolute;top:50%;left:50%;width:21.4rem;height:21.4rem;background-image:url(' + c + ");background-repeat:no-repeat;background-size:contain;-webkit-transform:translate(-45%,-52%);transform:translate(-45%,-52%)}.sCrisis_lb644 .tabsPane_7w-ge .left_KeHBV .numsLeft_DRIiq{position:relative;padding-right:10.4rem}.sCrisis_lb644 .tabsPane_7w-ge .left_KeHBV .mark_ZfPlV{font-size:1.4rem}.sCrisis_lb644 .tabsPane_7w-ge .right_dSjD3{background:#ffeec7;padding:1rem 2rem;margin-left:5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}@media only screen and (max-width:920px){.sCrisis_lb644 .tabsPane_7w-ge .right_dSjD3{margin-left:0;margin-bottom:2rem}}.sCrisis_lb644 .tabsPane_7w-ge .right_dSjD3 .num_Hnip5{color:#161616;font-size:3.6rem;font-weight:700}.sCrisis_lb644 .tabsPane_7w-ge .right_dSjD3 .mark_ZfPlV{font-size:1.2rem;color:#555}.sCrisis_lb644 .textContent_93MvY{font-size:1.4rem;margin-right:2.5rem}@media only screen and (max-width:920px){.sCrisis_lb644 .textContent_93MvY{text-align:center}.sCrisis_lb644 .textContent_93MvY br{display:none}}.sCrisis_lb644 .btnContent_-oK2L{margin-left:auto;display:block}@media only screen and (max-width:920px){.sCrisis_lb644 .btnContent_-oK2L{display:none}}.sCrisis_lb644 .featuresList_C668e{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.sCrisis_lb644 .featuresItem_iwabA{position:relative;display:block;width:25%;margin-bottom:2rem;padding-left:9rem}@media only screen and (max-width:920px){.sCrisis_lb644 .featuresItem_iwabA{width:80%;padding-left:0}}@media only screen and (max-width:920px){.sCrisis_lb644 .featuresItem_iwabA:nth-last-child(2){margin-left:20%}}@media only screen and (max-width:920px){.sCrisis_lb644 .featuresItem_iwabA:nth-last-child(3){margin-left:10%}}.sCrisis_lb644 .featuresItem_iwabA img{position:absolute;top:-3rem;left:-1rem;width:10rem}@media only screen and (max-width:920px){.sCrisis_lb644 .featuresItem_iwabA img{display:none}}.sCrisis_lb644 .featuresTitle_kvRyj{margin:0 0 3rem;font-size:1.6rem;font-weight:700;letter-spacing:.02em}.sCrisis_lb644 .featuresText_89yn3{font-size:1.4rem;line-height:1.7;font-weight:300;color:#fff;opacity:.7}.sCrisis_lb644 .btnContent2_9bQqJ{display:none}@media only screen and (max-width:920px){.sCrisis_lb644 .btnContent2_9bQqJ{padding-top:2rem;display:block;text-align:center}}.fade-enter-active_V5MOD,.fade-leave-active_zQLtt{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter_1Gnsf,.fade-leave-to_dcAAX{opacity:0}._light .featuresText_89yn3{color:#000}._light .tab_w\\+k\\+o{color:#414141}._light button{color:#ffce5f;border-color:#ffce5f}", ""]), o.locals = {
            sCrisis: "sCrisis_lb644",
            tab: "tab_w+k+o",
            tabsPane: "tabsPane_7w-ge",
            left: "left_KeHBV",
            nums: "nums_8wP8q",
            right: "right_dSjD3",
            num: "num_Hnip5",
            mark: "mark_ZfPlV",
            textContent: "textContent_93MvY",
            btnContent2: "btnContent2_9bQqJ",
            title: "title_peLwP",
            tabs: "tabs_eeNZt",
            tabText: "tabText_dNMNJ",
            tabNum: "tabNum_OdwzM",
            content: "content_B4ruM",
            numsLeft: "numsLeft_DRIiq",
            btnContent: "btnContent_-oK2L",
            featuresList: "featuresList_C668e",
            featuresItem: "featuresItem_iwabA",
            featuresTitle: "featuresTitle_kvRyj",
            featuresText: "featuresText_89yn3",
            "fade-enter-active": "fade-enter-active_V5MOD",
            "fade-leave-active": "fade-leave-active_zQLtt",
            "fade-enter": "fade-enter_1Gnsf",
            "fade-leave-to": "fade-leave-to_dcAAX"
        }, e.exports = o
    }, 622: function (e, t, i) {
        e.exports = i.p + "img/s-crisis-arrow-2.5d9e671.svg"
    }, 623: function (e, t, i) {
        e.exports = i.p + "img/s-crisis-arrow.f7ffa38.svg"
    }, 640: function (e, t, i) {
        "use strict";
        var n = i(420), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 641: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".form_SbT\\+w{position:relative;width:100%;padding:8.4rem 12.36rem;text-align:center}@media only screen and (max-width:920px){.form_SbT\\+w{width:100%;min-width:auto;padding:4rem 20px}}.input_0mCdI{margin-bottom:4rem}.input_0mCdI._last_6ZCCA{margin-bottom:3rem}.title_iAODD{margin:0 0 6rem;font-size:2.4rem;font-weight:300;line-height:1.2}.submit_o2iNt{width:100%}.condition_T4FSb{margin-bottom:5rem;font-size:1.2rem;line-height:1.8;color:#5f697c;text-align:left}.condition_T4FSb._light a{color:#222326}.condition_T4FSb a{color:#fff;-webkit-transition:opacity .28s ease;transition:opacity .28s ease}.condition_T4FSb a:hover{opacity:.7}", ""]), n.locals = {
            form: "form_SbT+w",
            input: "input_0mCdI",
            _last: "_last_6ZCCA",
            title: "title_iAODD",
            submit: "submit_o2iNt",
            condition: "condition_T4FSb"
        }, e.exports = n
    }, 690: function (e, t, i) {
        "use strict";
        i(7), i(6), i(11), i(12);
        var n = i(2), s = i(5), r = (i(20), i(9), i(44), i(397), i(3)), a = i(448), o = i(376), l = i(395);

        function c(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var d = {
            name: "MortgageForm",
            components: {VForm: a.a, InputComponent: o.a, InputComponentTel: l.a},
            data: function () {
                return {
                    showHelpers: !1,
                    success: null,
                    errors: ["Попробуйте отправить через несколько минут"],
                    name: "",
                    phone: ""
                }
            },
            computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(i), !0).forEach((function (t) {
                        Object(s.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(r.e)("global", ["isLightTheme"])),
            methods: {
                onInputChange: function (e, t) {
                    this[t] = e.target.value
                }, onInputPhoneChange: function (e) {
                    this.phone = e
                }, getResponse: function (e) {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function i() {
                        var n, s;
                        return regeneratorRuntime.wrap((function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    n = e.status, s = e.response, n ? (t.success = !0, t.$nextTick((function () {
                                        setTimeout((function () {
                                            return t.showHelpers = !0
                                        }), 100)
                                    })), setTimeout((function () {
                                        return t.$emit("success")
                                    }), 4e3)) : (Object.keys(s.data).length && (t.errors = Object.values(s.data).map((function (e) {
                                        return e[0]
                                    }))), t.success = !1, t.$nextTick((function () {
                                        setTimeout((function () {
                                            return t.showHelpers = !0
                                        }), 100)
                                    })), setTimeout((function () {
                                        t.success = null, t.showHelpers = !1
                                    }), 4e3));
                                case 2:
                                case"end":
                                    return i.stop()
                            }
                        }), i)
                    })))()
                }
            }
        }, p = d, m = i(640), f = i(4);
        var g = Object(f.a)(p, (function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("v-form", {
                class: e.$style.form,
                attrs: {
                    success: e.success,
                    "show-helpers": e.showHelpers,
                    errors: e.errors,
                    "push-name": "Инвестиции в недвижимость"
                },
                on: {"load-form": e.getResponse},
                scopedSlots: e._u([{
                    key: "form", fn: function () {
                        return [i("div", {class: e.$style.container}, [i("h3", {class: e.$style.title}, [e._v("Получите предложение для инвестиции")]), e._v(" "), i("input", {
                            attrs: {
                                type: "hidden",
                                name: "request_type",
                                value: "estate_investments"
                            }
                        }), e._v(" "), i("input-component", {
                            class: e.$style.input,
                            attrs: {value: e.name, name: "name", placeholder: "ФИО", "is-required": ""},
                            on: {
                                input: function (t) {
                                    return e.onInputChange(t, "name")
                                }
                            }
                        }), e._v(" "), i("input-component-tel", {
                            class: [e.$style.input, e.$style._last],
                            attrs: {name: "phone", placeholder: "Номер телефона", "is-required": ""},
                            on: {
                                input: function (t) {
                                    return e.onInputPhoneChange(t)
                                }
                            }
                        }), e._v(" "), i("div", {class: [e.$style.condition, {_light: e.isLightTheme}]}, [e._v("\n                Нажимая кнопку «Отправить заявку» вы подтверждаете свое согласие на\n                "), i("n-link", {
                            attrs: {
                                to: "/privacy/",
                                target: "_blank"
                            }
                        }, [e._v("обработку персональных данных")])], 1), e._v(" "), i("button", {
                            staticClass: "button",
                            class: e.$style.submit,
                            attrs: {type: "submit"}
                        }, [e._v("\n                Отправить заявку\n            ")])], 1)]
                    }, proxy: !0
                }])
            })
        }), [], !1, (function (e) {
            this.$style = m.default.locals || m.default
        }), null, null);
        t.a = g.exports
    }, 698: function (e, t, i) {
        "use strict";
        i(9), i(7), i(6), i(11), i(12);
        var n = i(5), s = i(3);

        function r(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        var a = {
            props: {typeTwo: {type: Boolean, default: !1}}, data: function () {
                return {
                    activeItem: "one",
                    features: [{
                        title: "Надежный застройщик",
                        text: "За более чем 20-летнюю историю группы компаний, мы ввели в эксплуатацию более 2.5 млн квадратных метров жилой и коммерческой недвижимости в России и за рубежом.",
                        icon: i(616)
                    }, {
                        title: "Безопасность сделки",
                        text: "Все сделки проводятся через эскроу-счета, а финансирование проекта собственными средствами является гарантом безопасности сделки.",
                        icon: i(617)
                    }, {
                        title: "Соблюдение законов",
                        text: "Строим объекты согласно 214 ФЗ, а значит все разрешения и документы получены и находятся в свободном доступе. Ежемесячно размещаем справку о ходе строительства.",
                        icon: i(618)
                    }, {
                        title: "Умное вложение",
                        text: "После завершения строительства квартиры в квартале Stellar City могут вырасти в цене до 45% от стоимости на старте продаж, особенно уникальные планировки с увеличенным и угловым остеклением.",
                        icon: i(619)
                    }]
                }
            }, computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(i), !0).forEach((function (t) {
                        Object(n.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }({}, Object(s.e)("global", ["isLightTheme"])), methods: {
                isActive: function (e) {
                    return this.activeItem === e
                }, setActive: function (e) {
                    this.activeItem = e
                }
            }
        }, o = a, l = i(620), c = i(4);
        var d = Object(c.a)(o, (function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("section", {
                class: [e.$style.sCrisis, {
                    _light: e.isLightTheme,
                    "type-two": e.typeTwo
                }]
            }, [i("div", {class: [e.$style.title, "second-title _light-3f"]}, [e._v("\n        Защита от кризиса\n    ")]), e._v(" "), i("div", {class: e.$style.tabs}, [i("div", {
                class: [e.$style.tab, {active: e.isActive("one")}],
                on: {
                    click: function (t) {
                        return e.setActive("one")
                    }
                }
            }, [i("div", {class: e.$style.tabText}, [e._v("\n                Бюджет\n            ")]), e._v(" "), i("div", {class: [e.$style.tabNum]}, [e._v("\n                7 млн ₽\n            ")])]), e._v(" "), i("div", {
                class: [e.$style.tab, {active: e.isActive("two")}],
                on: {
                    click: function (t) {
                        return e.setActive("two")
                    }
                }
            }, [i("div", {class: e.$style.tabText}, [e._v("\n                Бюджет\n            ")]), e._v(" "), i("div", {class: [e.$style.tabNum]}, [e._v("\n                12 млн ₽\n            ")])]), e._v(" "), i("div", {
                class: [e.$style.tab, {active: e.isActive("three")}],
                on: {
                    click: function (t) {
                        return e.setActive("three")
                    }
                }
            }, [i("div", {class: e.$style.tabText}, [e._v("\n                Бюджет\n            ")]), e._v(" "), i("div", {class: [e.$style.tabNum]}, [e._v("\n                22 млн ₽\n            ")])])]), e._v(" "), i("div", {class: e.$style.content}, [i("div", {class: e.$style.tabsContent}, [i("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [e.isActive("one") ? i("div", {
                key: "one",
                class: e.$style.tabsPane
            }, [i("div", {class: e.$style.left}, [i("div", {class: e.$style.nums}, [i("div", {class: e.$style.numsLeft}, [e._v("\n                                7 млн ₽                    \n                            ")]), e._v(" "), i("div", [e._v("\n                                10 млн ₽\n                            ")])]), e._v(" "), i("div", {class: e.$style.mark}, [e._v("\n                            * расчет носит ориентировочный характер\n                        ")])]), e._v(" "), i("div", {class: e.$style.right}, [i("span", {class: e.$style.num}, [e._v("+43%")]), e._v(" "), i("span", {class: e.$style.mark}, [e._v("через 2 года")])])]) : e._e(), e._v(" "), e.isActive("two") ? i("div", {
                key: "two",
                class: e.$style.tabsPane
            }, [i("div", {class: e.$style.left}, [i("div", {class: e.$style.nums}, [i("div", {class: e.$style.numsLeft}, [e._v("\n                                12 млн ₽                    \n                            ")]), e._v(" "), i("div", [e._v("\n                                16,2 млн ₽\n                            ")])]), e._v(" "), i("div", {class: e.$style.mark}, [e._v("\n                            * расчет носит ориентировочный характер\n                        ")])]), e._v(" "), i("div", {class: e.$style.right}, [i("span", {class: e.$style.num}, [e._v("+35%")]), e._v(" "), i("span", {class: e.$style.mark}, [e._v("через 2 года")])])]) : e._e(), e._v(" "), e.isActive("three") ? i("div", {
                key: "third",
                class: e.$style.tabsPane
            }, [i("div", {class: e.$style.left}, [i("div", {class: e.$style.nums}, [i("div", {class: e.$style.numsLeft}, [e._v("\n                                22 млн ₽                    \n                            ")]), e._v(" "), i("div", [e._v("\n                                28,2 млн ₽\n                            ")])]), e._v(" "), i("div", {class: e.$style.mark}, [e._v("\n                            * расчет носит ориентировочный характер\n                        ")])]), e._v(" "), i("div", {class: e.$style.right}, [i("span", {class: e.$style.num}, [e._v("+28%")]), e._v(" "), i("span", {class: e.$style.mark}, [e._v("через 2 года")])])]) : e._e()])], 1), e._v(" "), i("div", {class: e.$style.textContent}, [e._v("\n            Любоое "), i("br"), e._v(" предложение "), i("br"), e._v(" можно усилить\n        ")]), e._v(" "), e.typeTwo ? e._e() : i("div", {class: e.$style.btnContent}, [i("button", {
                staticClass: "button button-bordered-2",
                on: {
                    click: function (t) {
                        return e.$emit("request")
                    }
                }
            }, [e._v("\n                Получить предложение\n            ")])])]), e._v(" "), i("div", {class: e.$style.featuresList}, e._l(e.features, (function (t, n) {
                return i("div", {
                    key: n,
                    class: e.$style.featuresItem
                }, [i("img", {attrs: {src: t.icon}}), e._v(" "), i("h3", {class: e.$style.featuresTitle}, [e._v(e._s(t.title))]), e._v(" "), i("div", {class: e.$style.featuresText}, [e._v("\n                " + e._s(t.text) + "\n            ")])])
            })), 0), e._v(" "), i("div", {class: e.$style.btnContent2}, [i("button", {
                class: ["button", {"button-bordered-2": !e.typeTwo}],
                on: {
                    click: function (t) {
                        return e.$emit("request")
                    }
                }
            }, [e._v("\n            Получить предложение\n        ")])])])
        }), [], !1, (function (e) {
            this.$style = l.default.locals || l.default
        }), null, null);
        t.a = d.exports
    }, 703: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-ico-1.f6a5c47.svg"
    }, 704: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-ico-2.f1b6912.svg"
    }, 705: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-ico-3.9e18476.svg"
    }, 706: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-ico-4.8969155.svg"
    }, 707: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-ico-5.11b6d40.svg"
    }, 708: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-ico-6.eeab436.svg"
    }, 709: function (e, t, i) {
        var n = i(786);
        n.__esModule && (n = n.default), "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, i(15).default)("3f4264f6", n, !0, {sourceMap: !1})
    }, 710: function (e, t, i) {
        e.exports = i.p + "img/s-laying-out-1.28570e7.png"
    }, 711: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-1-1.59296ba.png"
    }, 712: function (e, t, i) {
        e.exports = i.p + "img/s-list.3a77df5.png"
    }, 775: function (e, t, i) {
        e.exports = i.p + "img/s-first-left.89dd942.png"
    }, 776: function (e, t, i) {
        e.exports = i.p + "img/s-first-right.caa586c.png"
    }, 777: function (e, t, i) {
        "use strict";
        var n = i(486), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 778: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".sFirstInner_66i4v{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media only screen and (max-width:920px){.sFirstInner_66i4v{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:80px 20px 0}}.sFirstLeft_aE4L-,.sFirstRight_h8ObG{position:relative;width:49%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:3rem}@media only screen and (max-width:920px){.sFirstLeft_aE4L-,.sFirstRight_h8ObG{width:100%;padding-bottom:0}}.sFirstLeft_aE4L- .imageWrapper_qsscL{padding-top:100%}.sFirstLeft_aE4L- .decorWordTop_K5i5\\+{padding-top:2rem;padding-bottom:2rem;-ms-flex-item-align:end;align-self:flex-end}.sFirstRight_h8ObG{padding-top:1rem}@media only screen and (max-width:920px){.sFirstRight_h8ObG{padding-top:1.3rem;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}}.sFirstRight_h8ObG .decor_qrFKi{position:absolute;bottom:0;right:0;z-index:3}.sFirstRight_h8ObG .decor_qrFKi .pc_GsV9m{display:block}@media only screen and (max-width:920px){.sFirstRight_h8ObG .decor_qrFKi .pc_GsV9m{display:none}}.sFirstRight_h8ObG .decor_qrFKi .mob_8yLKU{display:none}@media only screen and (max-width:920px){.sFirstRight_h8ObG .decor_qrFKi .mob_8yLKU{display:block}}.sFirstRight_h8ObG .decor_qrFKi svg{width:69.8rem;height:1.21rem}.sFirstRight_h8ObG .decor_qrFKi svg .path1_8xdHx{stroke:#909090}.sFirstRight_h8ObG .decor_qrFKi svg .path2_gwgq\\+{fill:#353535}@media only screen and (max-width:920px){.sFirstRight_h8ObG .decor_qrFKi{bottom:auto;top:2rem;right:-20px}.sFirstRight_h8ObG .decor_qrFKi svg{width:15.1rem;height:1rem}}.sFirstRight_h8ObG .imageWrapper_qsscL{padding-top:89%}.sFirstRight_h8ObG .decorWordRight_Qfepo{position:absolute;right:0;bottom:10rem;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);z-index:2}@media only screen and (max-width:920px){.sFirstRight_h8ObG .decorWordRight_Qfepo{bottom:8rem}}.sFirstRight_h8ObG .content_r8vma{margin-top:auto;margin-bottom:2rem}@media only screen and (max-width:920px){.sFirstRight_h8ObG .content_r8vma{margin-bottom:1.3rem}}.sFirstRight_h8ObG .oneRow_b4wbr{font-size:1.8rem;margin-bottom:.5rem}.sFirstRight_h8ObG .twoRow_RL-or{font-size:3.6rem}.sFirstRight_h8ObG .twoRow_RL-or span{font-weight:700;color:#fff9eb}@media only screen and (max-width:920px){.sFirst_YZTvP .decorWord_b68MD{display:none}}.sFirst_YZTvP._light svg .path1_8xdHx,.sFirst_YZTvP._light svg .path3_EAFgc{stroke:#ecc576}.sFirst_YZTvP._light svg .path2_gwgq\\+,.sFirst_YZTvP._light svg .path4_IsNfL{fill:#ecc576}", ""]), n.locals = {
            sFirstInner: "sFirstInner_66i4v",
            sFirstLeft: "sFirstLeft_aE4L-",
            sFirstRight: "sFirstRight_h8ObG",
            imageWrapper: "imageWrapper_qsscL",
            decorWordTop: "decorWordTop_K5i5+",
            decor: "decor_qrFKi",
            pc: "pc_GsV9m",
            mob: "mob_8yLKU",
            path1: "path1_8xdHx",
            path2: "path2_gwgq+",
            decorWordRight: "decorWordRight_Qfepo",
            content: "content_r8vma",
            oneRow: "oneRow_b4wbr",
            twoRow: "twoRow_RL-or",
            sFirst: "sFirst_YZTvP",
            decorWord: "decorWord_b68MD",
            path3: "path3_EAFgc",
            path4: "path4_IsNfL"
        }, e.exports = n
    }, 779: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-decor-two.855cd1b.png"
    }, 780: function (e, t, i) {
        e.exports = i.p + "img/s-adventage-decor-two-l.d74edf8.png"
    }, 781: function (e, t, i) {
        e.exports = i.p + "img/s-advantage.85b4d7b.png"
    }, 782: function (e, t, i) {
        "use strict";
        var n = i(487), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 783: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".sAdvantage_ROS5\\+{position:relative;padding-top:1rem}.sAdvantageInner_fXdD7{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media only screen and (max-width:920px){.sAdvantageInner_fXdD7{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}}.sAdvantageLeft_J38QZ,.sAdvantageRight_yqYS\\+{position:relative;width:49%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media only screen and (max-width:920px){.sAdvantageLeft_J38QZ,.sAdvantageRight_yqYS\\+{width:100%}}.sAdvantageLeft_J38QZ{padding:3.4rem 2.6rem 0}@media only screen and (max-width:920px){.sAdvantageLeft_J38QZ{padding:8rem 2rem 0}}.sAdvantage_ROS5\\+ .decorOne_6M58w{position:absolute;top:0;left:0;width:100%}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .decorOne_6M58w{top:5rem;width:calc(100% - 20px)}}.sAdvantage_ROS5\\+ .decorOne_6M58w svg{left:20px;width:100%}.sAdvantage_ROS5\\+ .decorTwo_wEgI8{position:absolute;bottom:0;right:0;width:100%}.sAdvantage_ROS5\\+ .decorTwo_wEgI8 img{width:100%}.sAdvantage_ROS5\\+ .title_Y5\\+Uf{color:#d1d1d1;font-size:1.8rem;font-weight:600;text-transform:uppercase;margin-bottom:3.7rem;text-align:right}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .title_Y5\\+Uf{position:absolute;left:20px;top:0;padding-right:20px;font-size:1.4rem;text-align:left}}.sAdvantage_ROS5\\+ .text_1zoEo{padding-left:15rem;margin-bottom:2.6rem;font-size:1.4rem;color:#848484;line-height:2.3rem;text-align:right}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .text_1zoEo{font-size:1.2rem;line-height:1.6;padding-left:5rem;padding-right:20px;margin-bottom:0}}.sAdvantage_ROS5\\+ .decorWord_i87XR{-ms-flex-item-align:end;align-self:flex-end}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .decorWord_i87XR{-ms-flex-item-align:start;align-self:flex-start;padding-left:20px}}.sAdvantage_ROS5\\+ .imageWrapper_EkvAz{margin:3.3rem 2rem 3rem 2.8rem;padding-top:115%}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .imageWrapper_EkvAz{margin:1rem -2rem 3rem 2rem}}.sAdvantageRight_yqYS\\+{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sAdvantage_ROS5\\+ .items_Eseil{padding:4rem}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .items_Eseil{padding:3rem 20px 5rem}}.sAdvantage_ROS5\\+ .item_EBcc1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sAdvantage_ROS5\\+ .item_EBcc1:not(:last-child){margin-bottom:5rem}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .item_EBcc1:not(:last-child){margin-bottom:4rem}}.sAdvantage_ROS5\\+ .itemIco_QywT2{position:relative;width:11rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;margin-right:3rem}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .itemIco_QywT2{width:7.4rem;margin-right:1rem}}.sAdvantage_ROS5\\+ .itemIco_QywT2 img{width:100%}.sAdvantage_ROS5\\+ .itemTitle_GzmM8{font-size:2rem;color:#bababa;font-weight:600;margin-bottom:1rem}@media only screen and (max-width:920px){.sAdvantage_ROS5\\+ .itemTitle_GzmM8{font-size:14px}}.sAdvantage_ROS5\\+ .itemText_YIviX{color:#8a8a8a;font-size:1.4rem;line-height:1.4}._light .decorOne_6M58w svg path{stroke:#ffd77c}", ""]), n.locals = {
            sAdvantage: "sAdvantage_ROS5+",
            sAdvantageInner: "sAdvantageInner_fXdD7",
            sAdvantageLeft: "sAdvantageLeft_J38QZ",
            sAdvantageRight: "sAdvantageRight_yqYS+",
            decorOne: "decorOne_6M58w",
            decorTwo: "decorTwo_wEgI8",
            title: "title_Y5+Uf",
            text: "text_1zoEo",
            decorWord: "decorWord_i87XR",
            imageWrapper: "imageWrapper_EkvAz",
            items: "items_Eseil",
            item: "item_EBcc1",
            itemIco: "itemIco_QywT2",
            itemTitle: "itemTitle_GzmM8",
            itemText: "itemText_YIviX"
        }, e.exports = n
    }, 784: function (e, t, i) {
        e.exports = i.p + "img/s-space.5b2c782.png"
    }, 785: function (e, t, i) {
        "use strict";
        i(709)
    }, 786: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, '.cross-decor{position:absolute;top:0;left:-2rem}@media only screen and (max-width:920px){.cross-decor{top:1rem;left:2rem}}.cross-decor:after,.cross-decor:before{content:"";display:block;position:absolute;z-index:1;width:1px;pointer-events:none;-webkit-transition:-webkit-transform .26s ease;transition:-webkit-transform .26s ease;transition:transform .26s ease;transition:transform .26s ease,-webkit-transform .26s ease;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(50%,#fff),to(hsla(0,0%,100%,0)));background-image:linear-gradient(hsla(0,0%,100%,0),#fff 50%,hsla(0,0%,100%,0))}.cross-decor:before{top:50%;left:0;height:37rem;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cross-decor:after{top:0;left:0;height:38.1rem;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}', ""]), e.exports = n
    }, 787: function (e, t, i) {
        "use strict";
        var n = i(488), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 788: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".sSpace_kZ6qJ{position:relative;padding-top:3rem}.sSpace_kZ6qJ .title_5GRvj{color:#ebebeb;margin-bottom:2rem;padding-left:4rem;font-size:3.6rem;font-weight:500}@media only screen and (max-width:920px){.sSpace_kZ6qJ .title_5GRvj{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;font-size:2.4rem;padding:0 20px}}.sSpace_kZ6qJ .title_5GRvj span{font-size:1.8rem;font-weight:400}@media only screen and (max-width:920px){.sSpace_kZ6qJ .title_5GRvj span{font-size:1.2rem}}.sSpace_kZ6qJ .change_OQZX\\+{position:relative}.sSpace_kZ6qJ .imageWrapper_agwWb{padding-top:33%}@media only screen and (max-width:920px){.sSpace_kZ6qJ .imageWrapper_agwWb{padding-top:50%}}.sSpace_kZ6qJ .buttonWrap_hJ0zY{position:absolute;top:3rem;left:20%;z-index:2}@media only screen and (max-width:920px){.sSpace_kZ6qJ .buttonWrap_hJ0zY{display:none}}.sSpace_kZ6qJ .button_p62wY{background:rgba(22,22,22,.5);border:1px solid #e4aea2}._light .lineDecor_14c4Y:after,._light .lineDecor_14c4Y:before{background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(50%,#3f3f3f),to(hsla(0,0%,100%,0)));background-image:linear-gradient(hsla(0,0%,100%,0),#3f3f3f 50%,hsla(0,0%,100%,0))}", ""]), n.locals = {
            sSpace: "sSpace_kZ6qJ",
            title: "title_5GRvj",
            change: "change_OQZX+",
            imageWrapper: "imageWrapper_agwWb",
            buttonWrap: "buttonWrap_hJ0zY",
            button: "button_p62wY",
            lineDecor: "lineDecor_14c4Y"
        }, e.exports = n
    }, 789: function (e, t, i) {
        e.exports = i.p + "img/s-urban.6ea7740.jpg"
    }, 790: function (e, t, i) {
        "use strict";
        var n = i(489), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 791: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, '.sUrban_Si9RN{position:relative}.sUrbanInner_SPe9r{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media only screen and (max-width:920px){.sUrbanInner_SPe9r{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.sUrbanLeft_9m16o,.sUrbanRight_kwfpu{width:49%}@media only screen and (max-width:920px){.sUrbanLeft_9m16o,.sUrbanRight_kwfpu{width:100%}}.sUrbanLeft_9m16o{position:relative;margin-bottom:13rem}@media only screen and (max-width:920px){.sUrbanLeft_9m16o{padding:0 20px;margin-bottom:0}}.sUrbanLeft_9m16o .inner_YfSwj{position:relative;padding:5.3rem 20rem 17rem 3.5rem;border:1px solid #ffeec7;border-top:none}@media only screen and (max-width:920px){.sUrbanLeft_9m16o .inner_YfSwj{padding:3rem 2rem}}.sUrbanLeft_9m16o .inner_YfSwj:before{content:"";position:absolute;top:0;left:0;width:100%;height:3rem;background-image:-webkit-gradient(linear,left top,right top,color-stop(-1.35%,#f0d4c2),color-stop(84.75%,transparent));background-image:linear-gradient(90deg,#f0d4c2 -1.35%,transparent 84.75%)}@media only screen and (max-width:920px){.sUrbanLeft_9m16o .inner_YfSwj:before{display:none}}.sUrbanRight_kwfpu{padding-top:3.5rem}@media only screen and (max-width:920px){.sUrbanRight_kwfpu{padding:3.5rem 2rem}}.sUrban_Si9RN .buttonWrap_X7Zq9{display:none}@media only screen and (max-width:920px){.sUrban_Si9RN .buttonWrap_X7Zq9{display:block;margin-bottom:3rem;text-align:center}}.sUrban_Si9RN .text_Mmh-G,.sUrban_Si9RN .text_2_ZH22e{font-size:1.6rem;color:#8a8a8a;font-weight:300;line-height:1.9}@media only screen and (max-width:920px){.sUrban_Si9RN .text_Mmh-G,.sUrban_Si9RN .text_2_ZH22e{max-width:30rem}}.sUrban_Si9RN .text_2_ZH22e{padding-right:22rem}@media only screen and (max-width:920px){.sUrban_Si9RN .text_2_ZH22e{padding-right:0}}.sUrban_Si9RN .wrapper_ARlKn{display: none; position:relative;margin-top:3rem;margin-left:5rem}.sUrban_Si9RN .imageWrapper_426dB{padding-top:83%}.sUrban_Si9RN .decorWord_3WXw1{position:absolute;top:0;left:-17rem;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:right top;transform-origin:right top}._light .sUrbanLeft_9m16o .inner_YfSwj{border-color:#ffd77c}._light .sUrbanLeft_9m16o .inner_YfSwj:before{background-image:-webkit-gradient(linear,left top,right top,color-stop(-1.35%,#ffd87f),color-stop(84.75%,rgba(240,212,194,0)));background-image:linear-gradient(90deg,#ffd87f -1.35%,rgba(240,212,194,0) 84.75%)}', ""]), n.locals = {
            sUrban: "sUrban_Si9RN",
            sUrbanInner: "sUrbanInner_SPe9r",
            sUrbanLeft: "sUrbanLeft_9m16o",
            sUrbanRight: "sUrbanRight_kwfpu",
            inner: "inner_YfSwj",
            buttonWrap: "buttonWrap_X7Zq9",
            text: "text_Mmh-G",
            text_2: "text_2_ZH22e",
            wrapper: "wrapper_ARlKn",
            imageWrapper: "imageWrapper_426dB",
            decorWord: "decorWord_3WXw1"
        }, e.exports = n
    }, 792: function (e, t, i) {
        e.exports = i.p + "img/s-inspiration-1.04e5beb.png"
    }, 793: function (e, t, i) {
        "use strict";
        var n = i(490), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 794: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, '.gallery_WyDRt{position:relative;cursor:pointer}.gallery_WyDRt:hover .galleryDesc_z\\+gS6{opacity:1}.galleryDesc_z\\+gS6{position:absolute;top:50%;left:50%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;font-size:1.6rem;line-height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;-webkit-transition:opacity .26s ease;transition:opacity .26s ease}.galleryText_OZq1s{color:#fff;font-size:1.6rem}.plus_9bRX8{position:relative;width:3rem;height:3rem;margin-bottom:2.3rem}.plus_9bRX8:after,.plus_9bRX8:before{content:"";position:absolute;left:50%;top:50%;width:100%;height:.2rem;background-color:#fff;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.plus_9bRX8:after{-webkit-transform:translate(-50%,-50%) rotate(90deg);transform:translate(-50%,-50%) rotate(90deg)}', ""]), n.locals = {
            gallery: "gallery_WyDRt",
            galleryDesc: "galleryDesc_z+gS6",
            galleryText: "galleryText_OZq1s",
            plus: "plus_9bRX8"
        }, e.exports = n
    }, 795: function (e, t, i) {
        e.exports = i.p + "img/s-laying-out-2.bbad779.png"
    }, 796: function (e, t, i) {
        e.exports = i.p + "img/s-laying-out-3.2da5951.png"
    }, 797: function (e, t, i) {
        e.exports = i.p + "img/s-laying-out-4.188e6d1.png"
    }, 798: function (e, t, i) {
        e.exports = i.p + "img/s-laying-out-5.ca6fbdf.png"
    }, 799: function (e, t, i) {
        "use strict";
        var n = i(491), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 800: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, '.sInspiration_M\\+IxB{position:relative;margin-top:1rem}@media only screen and (max-width:920px){.crossDecor_gBsaO{display:none}}.inspiration_J\\+TvJ{position:relative;overflow:hidden}.inspirationTitle_8no52{position:absolute;color:#fff;top:3.4rem;left:2.8rem;z-index:2}@media only screen and (max-width:920px){.inspirationTitle_8no52{position:relative;padding:0 20px;top:0;left:0;text-align:center}}.inspirationImageWrapper_XshNP{position:relative;padding-top:40%;overflow:hidden}.inspirationImageWrapper_XshNP:before{position:absolute;content:"";top:0;left:0;width:101%;height:101%;background:-webkit-gradient(linear,left top,right top,color-stop(37.14%,rgba(37,33,21,.65)),color-stop(115.22%,rgba(21,26,37,0)));background:linear-gradient(90deg,rgba(37,33,21,.65) 37.14%,rgba(21,26,37,0) 115.22%);-webkit-transform:matrix(-1,0,0,1,0,0);transform:matrix(-1,0,0,1,0,0);z-index:1}@media only screen and (max-width:920px){.inspirationImageWrapper_XshNP{padding-top:60%}}.planning_iZtYV{position:relative;padding-top:8rem;padding-bottom:8rem}@media only screen and (max-width:920px){.planning_iZtYV{padding-top:5rem;padding-bottom:3rem}}.planning_iZtYV:before{content:"";position:absolute;left:0;top:0;width:0;height:18rem;border-left:1px solid #ffeec7}@media only screen and (max-width:920px){.planning_iZtYV:before{display:none}}.planningInner_UYIZD{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media only screen and (max-width:920px){.planningInner_UYIZD{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.planningLeft_GYmiy{padding:0 2.7rem;width:35%}@media only screen and (max-width:920px){.planningLeft_GYmiy{padding:0 20px 40px;width:100%}}.planningRight_aXfFh{width:63%}@media only screen and (max-width:920px){.planningRight_aXfFh{width:100%;padding:0 20px}}.planning_iZtYV .text_1_dsfDi,.planning_iZtYV .text_2_1hr32{font-weight:300;font-size:1.6rem;color:#8a8a8a;line-height:1.9}.planning_iZtYV .text_1_dsfDi{color:#fff;margin-bottom:2rem}.planning_iZtYV .gallery_6KIkH{padding-top:57%}._light .planning_iZtYV:before{border-left:1px solid rgba(46,46,46,.5)}', ""]), n.locals = {
            sInspiration: "sInspiration_M+IxB",
            crossDecor: "crossDecor_gBsaO",
            inspiration: "inspiration_J+TvJ",
            inspirationTitle: "inspirationTitle_8no52",
            inspirationImageWrapper: "inspirationImageWrapper_XshNP",
            planning: "planning_iZtYV",
            planningInner: "planningInner_UYIZD",
            planningLeft: "planningLeft_GYmiy",
            planningRight: "planningRight_aXfFh",
            text_1: "text_1_dsfDi",
            text_2: "text_2_1hr32",
            gallery: "gallery_6KIkH"
        }, e.exports = n
    }, 801: function (e, t, i) {
        e.exports = i.p + "img/s-atmosphere-1.9ecdefd.png"
    }, 802: function (e, t, i) {
        e.exports = i.p + "img/s-atmosphere-2.b28325c.png"
    }, 803: function (e, t, i) {
        "use strict";
        var n = i(492), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 804: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".sAtmosphere_x7k-d{position:relative;border-top:1px solid rgba(255,238,199,.5);padding-top:2rem}.sAtmosphere_x7k-d .title_iILSj{padding:0 2rem}.sAtmosphere_x7k-d .imageWrapper_hOtBU{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:58rem}@media only screen and (max-width:920px){.sAtmosphere_x7k-d .imageWrapper_hOtBU{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto}}.sAtmosphere_x7k-d .imageWrapperLeft_TgSOX{width:65%}@media only screen and (max-width:920px){.sAtmosphere_x7k-d .imageWrapperLeft_TgSOX{width:100%;padding-top:72%;margin-bottom:1rem}}.sAtmosphere_x7k-d .imageWrapperRight_u21PY{width:34%}@media only screen and (max-width:920px){.sAtmosphere_x7k-d .imageWrapperRight_u21PY{width:100%;padding-top:72%}}", ""]), n.locals = {
            sAtmosphere: "sAtmosphere_x7k-d",
            title: "title_iILSj",
            imageWrapper: "imageWrapper_hOtBU",
            imageWrapperLeft: "imageWrapperLeft_TgSOX",
            imageWrapperRight: "imageWrapperRight_u21PY"
        }, e.exports = n
    }, 805: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-1.1894976.png"
    }, 806: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-2.c5efb2c.png"
    }, 807: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-3.a8482e2.jpg"
    }, 808: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-4.99df84c.jpg"
    }, 809: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-5.593e61c.jpg"
    }, 810: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-6.298932e.jpg"
    }, 811: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-7.e658772.jpg"
    }, 812: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-8.7ff61f4.jpg"
    }, 813: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-9.3a3c18d.jpg"
    }, 814: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-10.16d45eb.jpeg"
    }, 815: function (e, t, i) {
        e.exports = i.p + "img/s-finishing-11.c00f396.jpg"
    }, 816: function (e, t, i) {
        "use strict";
        var n = i(493), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 817: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".sFinishing_GKc80{position:relative;margin-top:8rem;margin-bottom:4rem}@media only screen and (max-width:920px){.sFinishing_GKc80{margin-top:5rem}}.sFinishingInner_WZvhb{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:102rem}@media only screen and (max-width:920px){.sFinishingInner_WZvhb{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto}}.sFinishingLeft_rGwpb,.sFinishingRight_o2kfp{position:relative;width:49%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media only screen and (max-width:920px){.sFinishingLeft_rGwpb,.sFinishingRight_o2kfp{width:100%}}.sFinishingLeft_rGwpb{padding:3.4rem 4rem}@media only screen and (max-width:920px){.sFinishingLeft_rGwpb{height:100vw}}.sFinishing_GKc80 .title_ke5Fg{position:relative;z-index:3}@media only screen and (max-width:920px){.sFinishing_GKc80 .title_ke5Fg{margin-bottom:2rem}}.sFinishing_GKc80 .text_7R6m2{position:relative;z-index:3;color:#8a8a8a;font-size:1.6rem;line-height:1.8;padding-right:22rem}@media only screen and (max-width:920px){.sFinishing_GKc80 .text_7R6m2{padding-right:0;max-width:20rem}}.sFinishing_GKc80 .decorOne_L0r7t{position:absolute;top:0;left:0;width:100%}@media only screen and (max-width:920px){.sFinishing_GKc80 .decorOne_L0r7t{left:20px;width:150%}}.sFinishing_GKc80 .decorOne_L0r7t svg{left:20px;width:100%}.sFinishing_GKc80 .decorTwo_NgaxK{position:absolute;bottom:0;right:0;width:105%}@media only screen and (max-width:920px){.sFinishing_GKc80 .decorTwo_NgaxK{bottom:-70%;z-index:3}}@media (max-width:400px){.sFinishing_GKc80 .decorTwo_NgaxK{bottom:-110%;z-index:0}}.sFinishing_GKc80 .decorTwo_NgaxK img{width:100%}.sFinishing_GKc80 .gallery_EAm3q{height:100%}@media only screen and (max-width:920px){.sFinishing_GKc80 .gallery_EAm3q{height:150vw;margin:0 20px}}._light .decorOne_L0r7t svg path{stroke:#ffd77c}", ""]), n.locals = {
            sFinishing: "sFinishing_GKc80",
            sFinishingInner: "sFinishingInner_WZvhb",
            sFinishingLeft: "sFinishingLeft_rGwpb",
            sFinishingRight: "sFinishingRight_o2kfp",
            title: "title_ke5Fg",
            text: "text_7R6m2",
            decorOne: "decorOne_L0r7t",
            decorTwo: "decorTwo_NgaxK",
            gallery: "gallery_EAm3q"
        }, e.exports = n
    }, 818: function (e, t, i) {
        e.exports = i.p + "img/s-choose-finishing.b3d6aec.png"
    }, 819: function (e, t, i) {
        "use strict";
        var n = i(494), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 820: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".sChooseFinishing_Nu\\+\\+v{position:relative;margin-top:-7rem}@media only screen and (max-width:920px){.sChooseFinishing_Nu\\+\\+v{margin-top:0}}.sChooseFinishing_Nu\\+\\+v .decorWord_LhIdO{padding-left:2rem;margin-bottom:5rem}@media only screen and (max-width:920px){.sChooseFinishing_Nu\\+\\+v .decorWord_LhIdO{margin-bottom:3rem}}.sChooseFinishing_Nu\\+\\+v .title_eSZDI{padding-left:2rem}.sChooseFinishing_Nu\\+\\+v .imageWrapper_I0Xpn{padding-top:41%}@media only screen and (max-width:920px){.sChooseFinishing_Nu\\+\\+v .imageWrapper_I0Xpn{padding-top:60%}}", ""]), n.locals = {
            sChooseFinishing: "sChooseFinishing_Nu++v",
            decorWord: "decorWord_LhIdO",
            title: "title_eSZDI",
            imageWrapper: "imageWrapper_I0Xpn"
        }, e.exports = n
    }, 821: function (e, t, i) {
        "use strict";
        var n = i(495), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 822: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, '.card_WE7eI{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;padding:0 6rem;color:#fff;border-radius:50%;-webkit-transition:opacity .6s cubic-bezier(.165,.84,.44,1),-webkit-box-shadow .6s;transition:opacity .6s cubic-bezier(.165,.84,.44,1),-webkit-box-shadow .6s;transition:opacity .6s cubic-bezier(.165,.84,.44,1),box-shadow .6s;transition:opacity .6s cubic-bezier(.165,.84,.44,1),box-shadow .6s,-webkit-box-shadow .6s;-webkit-box-shadow:0 0 7rem hsla(0,0%,78%,0);box-shadow:0 0 7rem hsla(0,0%,78%,0)}@media only screen and (max-width:920px){.card_WE7eI{position:absolute;padding:0;width:96%;height:96%}}.card_WE7eI:before{content:"";position:absolute;z-index:-1;top:50%;left:50%;height:1px;width:1px;border-radius:50%;-webkit-box-shadow:0 0 11.8rem 13.5rem #0c4b9b;box-shadow:0 0 11.8rem 13.5rem #0c4b9b;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.7);transform:translate(-50%,-50%) scale(.7);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:opacity .3s cubic-bezier(.165,.84,.44,1),-webkit-transform .3s cubic-bezier(.165,.84,.44,1);transition:opacity .3s cubic-bezier(.165,.84,.44,1),-webkit-transform .3s cubic-bezier(.165,.84,.44,1);transition:opacity .3s cubic-bezier(.165,.84,.44,1),transform .3s cubic-bezier(.165,.84,.44,1);transition:opacity .3s cubic-bezier(.165,.84,.44,1),transform .3s cubic-bezier(.165,.84,.44,1),-webkit-transform .3s cubic-bezier(.165,.84,.44,1)}@media only screen and (max-width:920px){.card_WE7eI:before{opacity:.5;-webkit-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8)}}.card_WE7eI:after{content:"";position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:.1rem solid #192747;border-radius:50%;-webkit-transition:-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:-webkit-transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1);transition:transform .6s cubic-bezier(.165,.84,.44,1),-webkit-transform .6s cubic-bezier(.165,.84,.44,1)}@media only screen and (max-width:920px){.card_WE7eI:after{-webkit-transform:scale(1.06);transform:scale(1.06)}}.card_WE7eI:hover{-webkit-box-shadow:0 0 7rem hsla(0,0%,78%,.3);box-shadow:0 0 7rem hsla(0,0%,78%,.3)}.card_WE7eI:hover:before{opacity:.5;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.card_WE7eI:hover:after{-webkit-transform:scale(1.08);transform:scale(1.08)}.card_WE7eI:hover .link_wALRN{opacity:.5}.card_WE7eI:hover .plus_xCjyM{opacity:1;visibility:visible;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.card_WE7eI:hover .typeImage_veD2r{opacity:1}.title_ldJ3S{position:relative;margin:0;font-size:2rem;font-weight:300;line-height:1.2;text-align:center}.plus_xCjyM{position:absolute;top:75%;left:50%;width:3.9rem;height:3.9rem;opacity:0;pointer-events:none;visibility:hidden;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:opacity .26s ease,visibility 0s linear .26s;transition:opacity .26s ease,visibility 0s linear .26s}@media only screen and (max-width:920px){.plus_xCjyM{width:28px;height:28px;opacity:1;visibility:visible}}.plus_xCjyM:after,.plus_xCjyM:before{content:"";position:absolute;left:50%;top:50%;width:100%;height:2px;background-color:#fff;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@media only screen and (max-width:920px){.plus_xCjyM:after,.plus_xCjyM:before{height:1px}}.plus_xCjyM:after{-webkit-transform:translate(-50%,-50%) rotate(90deg);transform:translate(-50%,-50%) rotate(90deg)}.typeImageWraper_mOF9l{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;pointer-events:none;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.typeImage_veD2r{position:relative;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:50%;opacity:0;-webkit-transition:opacity .26s ease;transition:opacity .26s ease}@media only screen and (max-width:920px){.typeImage_veD2r{opacity:1}}.typeImage_veD2r:after{content:"";position:absolute;top:50%;left:50%;width:101%;height:101%;background:rgba(20,25,37,.4);pointer-events:none;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}', ""]), n.locals = {
            card: "card_WE7eI",
            link: "link_wALRN",
            plus: "plus_xCjyM",
            typeImage: "typeImage_veD2r",
            title: "title_ldJ3S",
            typeImageWraper: "typeImageWraper_mOF9l"
        }, e.exports = n
    }, 823: function (e, t, i) {
        "use strict";
        var n = i(496), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 824: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, '.list_Z9dlJ{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width:920px){.list_Z9dlJ{margin-bottom:3rem;padding:0 20px}}.list_Z9dlJ._hover .componentCard_BxCUY{opacity:.5;-webkit-transition:opacity .6s cubic-bezier(.165,.84,.44,1);transition:opacity .6s cubic-bezier(.165,.84,.44,1)}.list_Z9dlJ._hover .componentCard_BxCUY:hover{opacity:1}.card_BHsdN{display:-webkit-box;display:-ms-flexbox;display:flex;width:39.8rem;height:39.8rem;margin-top:7rem;margin-right:6rem;opacity:0;-webkit-transform:translate3d(0,32px,0);transform:translate3d(0,32px,0);-webkit-transition:opacity .6s cubic-bezier(.165,.84,.44,1) .2s,-webkit-transform .6s cubic-bezier(.165,.84,.44,1) .2s;transition:opacity .6s cubic-bezier(.165,.84,.44,1) .2s,-webkit-transform .6s cubic-bezier(.165,.84,.44,1) .2s;transition:opacity .6s cubic-bezier(.165,.84,.44,1) .2s,transform .6s cubic-bezier(.165,.84,.44,1) .2s;transition:opacity .6s cubic-bezier(.165,.84,.44,1) .2s,transform .6s cubic-bezier(.165,.84,.44,1) .2s,-webkit-transform .6s cubic-bezier(.165,.84,.44,1) .2s}@media only screen and (max-width:920px){.card_BHsdN{width:100%;height:auto;margin:60px 0 0}.card_BHsdN:before{content:"";display:block;width:100%;padding-top:100%}.card_BHsdN>.aspect-content_16sWt{position:absolute;top:0;left:0;width:100%;height:100%}}.card_BHsdN:nth-child(2n){margin-right:0}.card_BHsdN:first-child{margin-top:0}.card_BHsdN:nth-child(2){-webkit-transition-delay:.4s;transition-delay:.4s}.card_BHsdN:nth-child(3){-webkit-transition-delay:.6s;transition-delay:.6s}.card_BHsdN:nth-child(4){-webkit-transition-delay:.4s;transition-delay:.4s}.card_BHsdN:nth-child(3n){margin-top:0}@media only screen and (max-width:920px){.card_BHsdN:nth-child(3n){margin-top:60px}}.card_BHsdN._visible{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}', ""]), n.locals = {
            list: "list_Z9dlJ",
            componentCard: "componentCard_BxCUY",
            card: "card_BHsdN",
            "aspect-content": "aspect-content_16sWt"
        }, e.exports = n
    }, 829: function (e, t, i) {
        "use strict";
        var n = i(499), s = i.n(n);
        i.d(t, "default", (function () {
            return s.a
        }))
    }, 830: function (e, t, i) {
        var n = i(14)(!1);
        n.push([e.i, ".sCrisis_k-p1t{padding:0 2rem 4rem}.signup_7JXeQ{margin:3.5rem 0}@media only screen and (max-width:920px){.signup_7JXeQ{margin:40px 0}}.finishes_kyC4p{margin:0 0 2rem}@media only screen and (max-width:920px){.finishes_kyC4p{margin:40px 0 55px}}", ""]), n.locals = {
            sCrisis: "sCrisis_k-p1t",
            signup: "signup_7JXeQ",
            finishes: "finishes_kyC4p"
        }, e.exports = n
    }
}]);