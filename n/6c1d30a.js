(window.webpackJsonp = window.webpackJsonp || []).push([[27], {
    1071: function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, "default", (function () {
            return w
        }));
        var s = i(142), n = i(143), r = i(371), a = i(439), o = function () {
            function t(e) {
                Object(s.a)(this, t), this.container = e.container, this.canvas = e.canvas, this.app = void 0, this.bottomGradient = void 0, this.bottomGradientTexture = void 0
            }

            return Object(n.a)(t, [{
                key: "_setView", value: function () {
                    this.app && (this.app.renderer.resize(this.container.offsetWidth, this.container.offsetHeight), this.bottomGradient && (this.bottomGradient.position.set(.77 * this.app.screen.width, this.app.screen.height - .3 * this.app.screen.width), this.bottomGradient.width = .3 * this.app.screen.width, this.bottomGradient.height = .3 * this.app.screen.width))
                }
            }, {
                key: "_createBottomGradTexture", value: function () {
                    var t = 1e3, e = document.createElement("canvas");
                    e.width = t, e.height = t;
                    var i = e.getContext("2d"), s = i.createLinearGradient(t, t, 0, 0);
                    s.addColorStop(0, "#F67E52"), s.addColorStop(.1, "#EB4DCA"), s.addColorStop(.3, "#986DFB"), s.addColorStop(.5, "#63F2FC"), s.addColorStop(.51, "rgba(255,255,255, 0)"), i.fillStyle = s, i.fillRect(0, 0, t, t), this.bottomGradientTexture = a.g.from(e)
                }
            }, {
                key: "_addBottomGradient", value: function () {
                    this.bottomGradient = new a.d(this.bottomGradientTexture), this.bottomGradient.position.set(.7 * this.app.screen.width + 100, this.app.screen.height - .3 * this.app.screen.width + 100), this.bottomGradient.width = .3 * this.app.screen.width, this.bottomGradient.height = .3 * this.app.screen.width, this.bottomGradient.filters = [new a.i.BlurFilter(32, 8)], this.bottomGradient.alpha = .16, this.app.stage.addChild(this.bottomGradient)
                }
            }, {
                key: "animate", value: function () {
                    this.app.ticker.add(this._setView, this)
                }
            }, {
                key: "init", value: function () {
                    return this.app = new a.a({
                        autoResize: !0,
                        antialias: !0,
                        resolution: devicePixelRatio,
                        view: this.canvas,
                        transparent: !0
                    }), this.app.view.style.opacity = 0, this.container.appendChild(this.app.view), this._createBottomGradTexture(), this._addBottomGradient(), this.animate(), r.a.to(this.app.view, .6, {opacity: 1}).delay(.3), this.app
                }
            }]), t
        }(), h = (i(655), function () {
            function t(e) {
                Object(s.a)(this, t), this.App = e.App, this.DynamicApp = e.DynamicApp, this.year = e.year, this.textColor = e.textColor, this.yearNumber = e.year.id, this.range = e.range, this.offset = e.offset, this.index = e.index, this.text = void 0, this.scale = 0, this.alpha = 0, this.x = 0, this.y = 0, this.offsetY = 0, this.init()
            }

            return Object(n.a)(t, [{
                key: "_setYOffset", value: function () {
                    var t = this.App.screen.width / 1360;
                    this.offsetY = 247 * t / 2
                }
            }, {
                key: "init", value: function () {
                    this.container = new a.b, this.container.x = this.App.screen.width / 2, this.container.y = this.App.screen.height / 2, this.App.stage.addChild(this.container), this._setYOffset(), this._setText(), this.container.addChild(this.text)
                }
            }, {
                key: "draw", value: function (t) {
                    var e = (t - this.offset) / (1 * this.range);
                    this.visible = e >= -1 && e <= 1, this.container.visible = this.visible, this.visible && this._moveIt(e)
                }
            }, {
                key: "_setText", value: function () {
                    var t = new a.f({
                        fontFamily: "Roboto",
                        fontSize: .4 * this.DynamicApp.playground.offsetWidth,
                        fontWeight: 700,
                        fill: ["rgba(".concat(this.textColor, ",0)"), "rgb(".concat(this.textColor, ")"), "rgb(".concat(this.textColor, ")")],
                        fillGradientType: 1,
                        fillGradientStops: [0, .7, 1]
                    });
                    this.text = new a.e(this.yearNumber, t), this.text.x = -this.text.width / 2, this.text.y = -this.text.height / 2
                }
            }, {
                key: "_moveIt", value: function (t) {
                    t = t < 0 ? t - .2 * Math.abs(t) : t, this._setYOffset();
                    var e = this.App.screen.height, i = this.App.screen.width / 2, s = .5 * e,
                        n = this.App.screen.height / 4;
                    this.scale = .7 * Math.abs(t + 1), this.alpha = Math.abs(Math.abs(t) - 1), this.container.scale.set(this.scale), this.container.alpha = this.alpha, this.x = i + this.offsetY, this.y = s + n * t, this.container.x = this.x, this.container.y = this.y
                }
            }, {
                key: "changeColor", value: function (t) {
                    this.text.style.fill = ["rgba(".concat(t, ",0)"), "rgb(".concat(t, ")"), "rgb(".concat(t, ")")]
                }
            }]), t
        }()), l = i(425), c = function () {
            function t(e) {
                Object(s.a)(this, t), this.App = e.App, this.DynamicApp = e.DynamicApp, this.yearClass = e.yearClass, this.textColor = e.textColor || "255, 255, 255", this.borderColor = e.borderColor || "72, 92, 136", this.month = e.month, this.index = e.index, this.monthNumber = e.month.month, this.monthName = Object(l.d)(this.monthNumber), this.monthText = void 0, this.yearText = void 0, this.circle = void 0, this.range = e.monthRange, this.offset = e.offset, this.visible = !1, this.x = 0, this.y = 0, this.scale = 0, this.alpha = 0, this.circleScale = 1, this.tween = r.a, this.detailView = !1, this.active = !1, this.over = !1, this.offsetY = 0, this.init()
            }

            return Object(n.a)(t, [{
                key: "_setYOffset", value: function () {
                    var t = this.App.screen.width / 1360;
                    this.offsetY = 247 * t / 2
                }
            }, {
                key: "init", value: function () {
                    this.container = new a.b, this.container.interactive = !0, this.container.buttonMode = !0, this._setText(), this._addCircle(), this.App.stage.addChild(this.container), this._addListeners()
                }
            }, {
                key: "_overSignal", value: function (t) {
                    var e = this;
                    this.active || (this.DynamicApp.locked = !0, this.over = !0, this.tween.to(this.container, .3, {alpha: 1}), this.tween.to(this, .3, {
                        circleScale: 1.2,
                        onUpdate: function () {
                            e._setCircleProps()
                        }
                    }))
                }
            }, {
                key: "_outSignal", value: function (t) {
                    var e = this;
                    this.active || (this.DynamicApp.locked = !1, this.tween.to(this.container, .3, {alpha: this.alpha}), this.tween.to(this, .3, {
                        circleScale: 1,
                        onUpdate: function () {
                            e._setCircleProps()
                        },
                        onComplete: function () {
                            e.over = !1
                        }
                    }))
                }
            }, {
                key: "_clickSignal", value: function (t) {
                    this.DynamicApp.openPreview({
                        year: this.yearClass.yearNumber,
                        month: this.monthNumber
                    }), this.detailView && this.DynamicApp.moveTo(this.yearClass.offset + this.offset)
                }
            }, {
                key: "_addListeners", value: function () {
                    var t = this;
                    this.container.on("mouseover", (function (e) {
                        return t._overSignal(e)
                    })).on("mouseout", (function (e) {
                        return t._outSignal(e)
                    })).on("mousedown", (function (e) {
                        return t._clickSignal(e)
                    })).on("tap", (function (e) {
                        return t._clickSignal(e)
                    }))
                }
            }, {
                key: "_setText", value: function (t) {
                    var e = new a.f({
                        fontFamily: "Roboto",
                        fontSize: 24,
                        fontWeight: 400,
                        fill: ["rgb(".concat(this.textColor, ")")]
                    });
                    this.monthText = new a.e(this.monthName, e), this.monthText.x = -this.monthText.width / 2, this.monthText.y = -this.monthText.height, this.container.addChild(this.monthText);
                    var i = new a.f({
                        fontFamily: "Roboto",
                        fontSize: 24,
                        fontWeight: 400,
                        fill: ["rgb(".concat(this.textColor, ")")]
                    });
                    this.yearText = new a.e(this.yearClass.yearNumber, i), this.yearText.x = -this.yearText.width / 2, this.yearText.y = 0, this.container.addChild(this.yearText)
                }
            }, {
                key: "_setCircleProps", value: function () {
                    this.circle.clear(), this.circle.lineStyle(2, this.borderColor), this.circle.beginFill(this.borderColor, .001), this.circle.drawCircle(0, 0, 90 * this.circleScale), this.circle.endFill()
                }
            }, {
                key: "_addCircle", value: function (t) {
                    this.circle = new a.c, this._setCircleProps(), this.container.addChild(this.circle)
                }
            }, {
                key: "_moveList", value: function (t) {
                    var e = this.App.screen.width / 2 + this.offsetY, i = this.App.screen.height / 2,
                        s = .5 * this.App.screen.height, n = .3 * this.App.screen.width;
                    this.index % 2 && (n = -n), this.scale = .9 * Math.abs(t + 1), this.alpha = Math.abs(Math.abs(t) - 1), this.x = e + n * Math.abs(t + 1) * .5, this.y = i - s + s * Math.abs(t + 1) * .5, this.over || (this.container.alpha = this.alpha), this.container.scale.set(this.scale), this.tween.to(this.container, .5, {
                        x: this.x,
                        y: this.y
                    })
                }
            }, {
                key: "_moveLine", value: function (t) {
                    var e = .9 * this.App.screen.width, i = this.App.screen.height / 2, s = .5 * this.App.screen.height,
                        n = 200 * t;
                    this.scale = .6 * Math.abs(t + 1), this.alpha = Math.abs(Math.abs(t) - 1), this.x = e + n * Math.abs(t + 1), this.y = i - s + s * Math.abs(t + 1) * .5, this.active || this.over || this.tween.to(this.container, .5, {alpha: this.alpha}), this.container.scale.set(this.scale), this.tween.to(this.container, .5, {
                        x: this.x,
                        y: this.y
                    })
                }
            }, {
                key: "_setActive", value: function (t) {
                    var e = this;
                    this.active = !0, this.tween.to(this.container, .3, {alpha: 1}), this.tween.to(this, .3, {
                        circleScale: 1.3,
                        onUpdate: function () {
                            e._setCircleProps()
                        }
                    })
                }
            }, {
                key: "setUnActive", value: function (t) {
                    var e = this;
                    this.active = !1, this.tween.to(this, .3, {
                        circleScale: 1, onUpdate: function () {
                            e._setCircleProps()
                        }
                    })
                }
            }, {
                key: "draw", value: function (t) {
                    var e = (t - this.yearClass.offset - this.offset) / (2 * this.range), i = (this.detailView, 1);
                    this.visible = e >= -i && e <= i, this.container.visible = this.visible, this._setYOffset(), this.detailView && this._moveLine(e), this.detailView || this._moveList(e)
                }
            }, {
                key: "setDetail", value: function (t, e) {
                    var i = e.year, s = e.month, n = i === this.yearClass.yearNumber && s === this.monthNumber;
                    this.detailView = t, n && !this.active && this._setActive(), !n && this.active && this.setUnActive()
                }
            }, {
                key: "changeTextColor", value: function (t) {
                    this.monthText.style.fill = "rgb(".concat(t, ")"), this.yearText.style.fill = "rgb(".concat(t, ")")
                }
            }, {
                key: "changeBorderColor", value: function (t) {
                    this.borderColor = t, this._setCircleProps()
                }
            }]), t
        }(), d = (i(6), i(2)), p = (i(656), i(16), i(20), function () {
            function t(e) {
                Object(s.a)(this, t), this.App = e.App, this.parent = e.parent, this.index = e.index, this.props = e.props, this.container = void 0, this.preview = {
                    class: void 0,
                    ratio: 1,
                    diff: 1,
                    width: 0,
                    height: 0
                }, this.image = {
                    class: void 0,
                    ratio: 1,
                    diff: 1,
                    width: 0,
                    height: 0,
                    loading: !1
                }, this.hd = e.hd, this._init()
            }

            return Object(n.a)(t, [{
                key: "_setImageSize", value: function () {
                    if (this.image.class) {
                        var t = this.App.screen.height * this.hd;
                        this.image.ratio = this.image.width / this.image.height, this.image.diff = this.image.ratio > 1 ? t / this.image.height : t / this.image.width, this.image.class.width = this.image.width * this.image.diff, this.image.class.height = this.image.height * this.image.diff
                    }
                }
            }, {
                key: "_addImage", value: function (t) {
                    var e = this;
                    this.image.loading = !0;
                    var i = this.props.file_display, s = a.g.from(i);
                    Object(l.e)(i).then((function (t) {
                        var i, n, o;
                        n = (i = t).width, o = i.height, e.image.width = n, e.image.height = o, e.image.class = new a.d(s), e.image.class.anchor.set(.5), e._setImageSize(), e.image.class.x = 0, e.image.class.y = 0, e.image.class.alpha = 0, e.container.addChild(e.image.class), r.a.to(e.image.class, .3, {alpha: 1})
                    }))
                }
            }, {
                key: "_setPreviewSize", value: function () {
                    if (this.preview.class) {
                        var t = this.App.screen.height * this.hd;
                        this.preview.ratio = this.preview.width / this.preview.height, this.preview.diff = this.preview.ratio > 1 ? t / this.preview.height : t / this.preview.width, this.preview.class.width = this.preview.width * this.preview.diff, this.preview.class.height = this.preview.height * this.preview.diff
                    }
                }
            }, {
                key: "_addPreview", value: function () {
                    var t = this;
                    return new Promise((function (e) {
                        var i = t.props.file_preview, s = a.g.from(i);
                        Object(l.e)(i).then((function (i) {
                            var n, r, o;
                            r = (n = i).width, o = n.height, t.preview.width = r, t.preview.height = o, t.preview.class = new a.d(s), t.preview.class.anchor.set(.5), t._setPreviewSize(), t.preview.class.x = 0, t.preview.class.y = 0, t.container.addChild(t.preview.class), e()
                        }))
                    }))
                }
            }, {
                key: "_init", value: function () {
                    this.container = new a.b, this.parent.addChild(this.container), this._addPreview()
                }
            }, {
                key: "rerender", value: function () {
                    this._setPreviewSize(), this._setImageSize()
                }
            }, {
                key: "draw", value: function (t) {
                    t > .2 && !this.image.loading && this._addImage(), t !== this.container.alpha && r.a.to(this.container, .3, {alpha: t})
                }
            }]), t
        }()), u = i(379), f = Math.PI / 180, v = function () {
            function t(e) {
                Object(s.a)(this, t), this.MonthDetail = e.MonthDetail, this.album = e.album, this.index = e.index, this.last = e.last, this.parent = e.parent, this.container = void 0, this.mCircle = void 0, this.aCircle = void 0, this.progress = void 0, this.thumb = void 0, this.thumbImage = void 0, this.thumbImageMask = void 0, this.thumbCircle = void 0, this.timerCircle = void 0, this.timerAnimation = new u.a({repeat: 0}), this.timerProgress = 0, this.active = !1, this.hoverProgress = 0, this.activeProgress = 0, this._init()
            }

            return Object(n.a)(t, [{
                key: "_setThumbImageMask", value: function () {
                    this.thumbImageMask && (this.thumbImageMask.clear(), this.thumbImageMask.beginFill(), this.thumbImageMask.drawCircle(0, 0, 50 * this.hoverProgress), this.thumbImageMask.endFill())
                }
            }, {
                key: "_setThumbISize", value: function (t, e) {
                    var i = t / e > 1 ? 100 / e : 100 / t;
                    this.thumbImage.width = t * i, this.thumbImage.height = e * i
                }
            }, {
                key: "_addThumbImage", value: function () {
                    var t = this;
                    return new Promise((function (e) {
                        var i = t.album.file_thumb, s = a.g.from(i);
                        Object(l.e)(i).then((function (i) {
                            var n, r, o;
                            r = (n = i).width, o = n.height, t.thumbImage = new a.d(s), t.thumbImage.anchor.set(.5), t.thumb.addChild(t.thumbImage), t._setThumbISize(r, o), t.thumbImageMask = new a.c, t.thumb.addChild(t.thumbImageMask), t.thumbImage.mask = t.thumbImageMask, t._setThumbImageMask(), e()
                        }))
                    }))
                }
            }, {
                key: "_setThumbCircle", value: function () {
                    this.thumbCircle.clear(), this.thumbCircle.lineStyle(1, 16777215, 1), this.thumbCircle.beginFill(16777215, .01), this.thumbCircle.drawCircle(0, 0, 55 * this.hoverProgress), this.thumbCircle.endFill()
                }
            }, {
                key: "_addThumbCircle", value: function () {
                    this.thumbCircle = new a.c, this.thumb.addChild(this.thumbCircle), this._setThumbCircle()
                }
            }, {
                key: "_addThumb", value: function () {
                    this.thumb = new a.b, this.thumb.y = -70, this.container.addChild(this.thumb), this._addThumbCircle(), this._addThumbImage()
                }
            }, {
                key: "_addProgress", value: function () {
                    this.progress = new a.c, this.progress.beginFill(16777215), this.progress.drawRect(16, 0, 4, 2), this.progress.endFill(16777215), this.progress.beginFill(16777215), this.progress.drawRect(24, 0, 4, 2), this.progress.endFill(16777215), this.progress.beginFill(16777215), this.progress.drawRect(32, 0, 4, 2), this.progress.endFill(16777215), this.progress.beginFill(16777215), this.progress.drawRect(40, 0, 4, 2), this.progress.endFill(16777215), this.progress.beginFill(16777215), this.progress.drawRect(48, 0, 4, 2), this.progress.endFill(16777215), this.progress.beginFill(16777215), this.progress.drawRect(56, 0, 4, 2), this.progress.endFill(16777215), this.container.addChild(this.progress)
                }
            }, {
                key: "_setACircle", value: function () {
                    this.aCircle.clear(), this.aCircle.lineStyle(2, 16777215, .5), this.aCircle.beginFill(16777215, .01), this.aCircle.drawCircle(0, 0, 12 * this.activeProgress), this.aCircle.endFill(), this.aCircle.alpha = this.activeProgress
                }
            }, {
                key: "_addACircle", value: function () {
                    this.aCircle = new a.c, this._setACircle(), this.container.addChild(this.aCircle)
                }
            }, {
                key: "_setMCircle", value: function () {
                    this.mCircle.clear(), this.mCircle.lineStyle(1, 16777215, 1), this.mCircle.beginFill(16777215, .01), this.mCircle.drawCircle(0, 0, 6), this.mCircle.endFill()
                }
            }, {
                key: "_addMCircle", value: function () {
                    var t = this;
                    this.mCircle = new a.c, this.mCircle.interactive = !0, this.mCircle.buttonMode = !0, this.mCircle.on("mouseover", (function () {
                        return t._hover()
                    })).on("mouseout", (function () {
                        return t._unhover()
                    })).on("mousedown", (function () {
                        return t._click()
                    })), this._setMCircle(), this.container.addChild(this.mCircle)
                }
            }, {
                key: "_addTimerCircle", value: function () {
                    this.timerCircle = new a.c, this._setTimerCircle(), this.container.addChild(this.timerCircle)
                }
            }, {
                key: "_setTimerCircle", value: function () {
                    this.timerCircle.clear().lineStyle(1, 16777215).arc(0, 0, 12, -90 * f, (360 * this.timerProgress - 90) * f)
                }
            }, {
                key: "_startTimer", value: function () {
                    var t = this;
                    if (1 === this.timerProgress) return !1;
                    this.timerAnimation.clear(), this.timerAnimation.to(this, 7, {
                        timerProgress: 1,
                        onUpdate: function () {
                            t._setTimerCircle()
                        },
                        onComplete: function () {
                            return t.MonthDetail.goToAlbum(t.index + 1)
                        }
                    }), this.timerAnimation.play()
                }
            }, {
                key: "_stopTimer", value: function () {
                    var t = this;
                    if (0 === this.timerProgress) return !1;
                    this.timerAnimation.clear(), this.timerAnimation.to(this, .3, {
                        timerProgress: 0,
                        onUpdate: function () {
                            t._setTimerCircle()
                        }
                    }), this.timerAnimation.play()
                }
            }, {
                key: "_hover", value: function () {
                    var t = this;
                    r.a.to(this, .3, {
                        hoverProgress: 1, onUpdate: function () {
                            t._setThumbCircle(), t._setThumbImageMask()
                        }
                    })
                }
            }, {
                key: "_setActive", value: function () {
                    var t = this;
                    r.a.to(this, .3, {
                        activeProgress: 1, onUpdate: function () {
                            return t._setACircle()
                        }, onComplete: function () {
                            return t._startTimer()
                        }
                    })
                }
            }, {
                key: "_setUnActive", value: function () {
                    var t = this;
                    this._stopTimer(), r.a.to(this, .3, {
                        activeProgress: 0, onUpdate: function () {
                            return t._setACircle()
                        }
                    })
                }
            }, {
                key: "_unhover", value: function () {
                    var t = this;
                    r.a.to(this, .3, {
                        hoverProgress: 0, onUpdate: function () {
                            t._setThumbCircle(), t._setThumbImageMask()
                        }
                    })
                }
            }, {
                key: "_click", value: function () {
                    this.MonthDetail.goToAlbum(this.index)
                }
            }, {
                key: "_addContainer", value: function () {
                    this.container = new a.b, this.container.alpha = 0, this.container.x = 76 * this.index, this.parent.addChild(this.container), r.a.to(this.container, .4, {alpha: 1}).delay(1)
                }
            }, {
                key: "_init", value: function () {
                    this._addContainer(), this._addMCircle(), this._addACircle(), this._addThumb(), this._addTimerCircle(), this.last || this._addProgress()
                }
            }, {
                key: "setActive", value: function (t) {
                    this.active = this.index === t, this.active ? this._setActive() : this._setUnActive()
                }
            }, {
                key: "destroy", value: function () {
                    var t = this;
                    this.container.alpha = 1, r.a.to(this.container, .4, {
                        alpha: 0, onComplete: function () {
                            t.parent.removeChild(t.container)
                        }
                    })
                }
            }]), t
        }(), m = function () {
            function t(e) {
                Object(s.a)(this, t), this.App = e.App, this.MonthDetail = e.MonthDetail, this.albums = e.albums, this.container = e.App, this.pins = [], this.active = 0, this.ticker = a.h.shared, this._init()
            }

            return Object(n.a)(t, [{
                key: "setActive", value: function (t) {
                    this.active = t;
                    for (var e = 0; e < this.pins.length; e++) this.pins[e].setActive(t)
                }
            }, {
                key: "_setContainerPosition", value: function () {
                    this.container.y = this.App.screen.height - 142, this.container.x = this.App.screen.width / 1360 * 432
                }
            }, {
                key: "_addContainer", value: function () {
                    this.container = new a.b, this._setContainerPosition(), this.App.stage.addChild(this.container)
                }
            }, {
                key: "_addPins", value: function () {
                    for (var t = 0; t < this.albums.length; t++) {
                        var e = new v({
                            MonthDetail: this.MonthDetail,
                            parent: this.container,
                            index: t,
                            last: t === this.albums.length - 1,
                            album: this.albums[t]
                        });
                        this.pins.push(e)
                    }
                }
            }, {
                key: "_init", value: function () {
                    var t = this;
                    this._addContainer(), this._addPins(), this.ticker.add((function () {
                        t._setContainerPosition()
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.pins.forEach((function (t) {
                        return t.destroy()
                    }))
                }
            }]), t
        }(), g = function () {
            function t(e) {
                var i, n;
                Object(s.a)(this, t), this.url = e.url, this.month = void 0, this.images = [], this.slides = [], this.Month = e.Month, this.App = e.App, this.Dynamic = e.Dynamic, this.Pins = void 0, this.wrapper = void 0, this.content = void 0, this.glow = e.glow, this.container = e.container, this.planet = e.planet, this.mask = e.mask, this.previewContainer = e.previewContainer, this.preview = e.preview, this.image = e.image, this.slidesContainer = e.slidesContainer, this.overlay = e.overlay, this.inner = e.inner, this.active = 0, this.progress = 0, this.diff = this.App.screen.width / 1360, this.hd = this.diff < 1.1 ? 1.4 * this.diff : 1.4, this.initialHd = e.initialHd, this.initialX = this.App.screen.width / 2, this.initialY = this.App.screen.height / 2, this.x = this.App.screen.width - this.App.screen.height * (this.hd / 2) * .7, this.offset = 0, this.monthWidth = "Tablet" === (null === (i = window) || void 0 === i || null === (n = i.WURFL) || void 0 === n ? void 0 : n.form_factor) ? 60 : 500, this.touch = {
                    started: !1,
                    startedX: 0
                }
            }

            return Object(n.a)(t, [{
                key: "animate", value: function () {
                    this.App.ticker.add(this.update, this)
                }
            }, {
                key: "open", value: function () {
                    var t = this;
                    this.animate(), r.a.to(this, .4, {
                        progress: 1, onComplete: function () {
                            t._addSlides(), t._addListener()
                        }
                    })
                }
            }, {
                key: "close", value: function () {
                    var t = this;
                    r.a.to(this, .4, {
                        progress: 0, onComplete: function () {
                            t.App.ticker.remove(t.update, t), t.Dynamic.locked = !1, t.Dynamic.playground.removeEventListener("wheel", (function (e) {
                                t._onWheel(e)
                            })), t.App.ticker.remove(t._onWheelUpdates, t), t.Month.closeDetail(), t.Pins.destroy()
                        }
                    }), this._removeWrapper()
                }
            }, {
                key: "init", value: function () {
                    var t = this;
                    return new Promise(function () {
                        var e = Object(d.a)(regeneratorRuntime.mark((function e(i) {
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, window.$axios.$get("/api/progress/?year=".concat(t.Month.monthObject.year, "&month=").concat(t.Month.monthObject.month));
                                    case 2:
                                        t.month = e.sent, t._prepareSlides(), t._addWrapper(), t._addContent(), t.images.length > 1 && t._initPins(), i();
                                    case 8:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "_setGlowProps", value: function () {
                    var t = this.App.screen.height * (this.initialHd + (this.hd - this.initialHd) * this.progress) + 100;
                    this.glow.width = this.glow.height = t
                }
            }, {
                key: "_setContainerProps", value: function () {
                    var t = this.initialX + (this.x - this.initialX) * this.progress, e = this.initialY;
                    this.container.x = t, this.container.y = e
                }
            }, {
                key: "_setMaskProps", value: function () {
                    if (this.mask) {
                        var t = this.App.screen.height * (this.initialHd / 2 + (this.hd / 2 - this.initialHd / 2) * this.progress);
                        this.mask.clear().beginFill("rgba(0,0,0,0)").drawCircle(0, 0, t).endFill()
                    }
                }
            }, {
                key: "_setImageSize", value: function () {
                    var t = this.App.screen.height * (this.initialHd + (this.hd - this.initialHd) * this.progress);
                    this.image.ratio = this.image.width / this.image.height, this.image.diff = this.image.ratio > 1 ? t / this.image.height : t / this.image.width, this.image.class.width = this.image.width * this.image.diff, this.image.class.height = this.image.height * this.image.diff
                }
            }, {
                key: "_setPreviewSize", value: function () {
                    var t = this.App.screen.height * (this.hd - this.initialHd) * this.progress;
                    this.preview.ratio = this.preview.width / this.preview.height, this.preview.diff = this.preview.ratio > 1 ? t / this.preview.height : t / this.preview.width, this.preview.class.width = this.preview.width * this.preview.diff, this.preview.class.height = this.preview.height * this.preview.diff
                }
            }, {
                key: "_setInnerProps", value: function () {
                    var t = this.App.screen.height * (this.initialHd + (this.hd - this.initialHd) * this.progress);
                    this.inner.width = this.inner.height = t
                }
            }, {
                key: "_setOverlayProps", value: function () {
                    var t = this.App.screen.height * (this.initialHd + (this.hd - this.initialHd) * this.progress);
                    this.overlay.clear(), this.overlay.beginFill(0, .4), this.overlay.drawRect(-t / 2, -t / 2, t, t), this.overlay.endFill()
                }
            }, {
                key: "_prepareSlides", value: function () {
                    for (var t = 0; t < this.month.length; t++) for (var e = this.month[t], i = this.month[t].progressimage_set, s = 0; s < i.length; s++) i[s].date = e.date, this.images.push(i[s])
                }
            }, {
                key: "_addSlides", value: function () {
                    for (var t = 0; t < this.images.length; t++) {
                        var e = new p({
                            App: this.App,
                            parent: this.slidesContainer,
                            index: t,
                            props: this.images[t],
                            hd: this.hd
                        });
                        this.slides.push(e)
                    }
                    this.wrapWidth = this.slides.length * this.monthWidth
                }
            }, {
                key: "_onWheel", value: function (t) {
                    var e = this, i = this, s = (t = t || window.event).deltaY || t.detail || t.wheelDelta,
                        n = {value: 0};
                    r.a.to(n, .1, {
                        value: s, onUpdate: function () {
                            var t = i.offset + n.value;
                            t <= 0 ? i.offset = 0 : t > (e.slides.length - 1) * e.monthWidth ? i.offset = (e.slides.length - 1) * e.monthWidth : i.offset = t, r.a.to(e, 1, {offset: e.active * e.monthWidth})
                        }
                    }), t.preventDefault ? t.preventDefault() : t.returnValue = !1
                }
            }, {
                key: "_setActive", value: function (t) {
                    this.active = t, this.Pins.setActive(t), this._addContent()
                }
            }, {
                key: "_onWheelUpdates", value: function () {
                    var t = this.offset / this.monthWidth % 1 * 2, e = Math.abs(Math.abs(t - 1) - 1);
                    this.content && r.a.to(this.content, .1, {opacity: Math.abs(e - 1), x: 10 * Math.abs(e - 1)});
                    var i = Math.round(this.offset / this.monthWidth);
                    this.active !== i && this._setActive(i);
                    for (var s = 0; s < this.slides.length; s++) {
                        var n = (this.offset - s * this.monthWidth) / this.monthWidth + 1;
                        n < 0 && (n = 0), n > 1 && (n = 1), this.slides[s].draw(n)
                    }
                }
            }, {
                key: "_touchStart", value: function (t) {
                    1 === t.touches.length && (this.touch.started = !0, this.touch.startedX = t.touches[0].clientX)
                }
            }, {
                key: "_onTouchMove", value: function (t) {
                    var e = this, i = this, s = i.touch.startedX - t.touches[0].clientX;
                    i.touch.startedX = t.touches[0].clientX;
                    var n = {value: 0};
                    r.a.to(n, .1, {
                        value: s, onUpdate: function () {
                            var t = i.offset + n.value;
                            t <= 0 ? i.offset = 0 : t > (e.slides.length - 1) * e.monthWidth ? i.offset = (e.slides.length - 1) * e.monthWidth : i.offset = t, r.a.to(e, 1, {offset: e.active * e.monthWidth})
                        }
                    })
                }
            }, {
                key: "_addListener", value: function () {
                    var t = this;
                    this.Dynamic.playground.addEventListener("wheel", (function (e) {
                        t._onWheel(e)
                    })), this.Dynamic.playground.addEventListener("touchstart", (function (e) {
                        t._touchStart(e)
                    })), this.Dynamic.playground.addEventListener("touchmove", (function (e) {
                        t._onTouchMove(e)
                    })), this.Dynamic.playground.addEventListener("touchend", (function (e) {
                        t.touch.started = !1
                    })), this.App.ticker.add(this._onWheelUpdates, this)
                }
            }, {
                key: "_initPins", value: function () {
                    this.Pins = new m({App: this.App, MonthDetail: this, albums: this.images}), this.Pins.setActive(0)
                }
            }, {
                key: "goToAlbum", value: function (t) {
                    t > this.images.length - 1 && (t = 0), this.Pins.setActive(t);
                    var e = this.active < t ? (t - 1) * this.monthWidth : (t + 1) * this.monthWidth;
                    r.a.fromTo(this, .3, {offset: e}, {offset: t * this.monthWidth})
                }
            }, {
                key: "update", value: function () {
                    this.initialX = this.App.screen.width / 2, this.initialY = this.App.screen.height / 2, this.x = this.App.screen.width - this.App.screen.height * (this.hd / 2) * .8, this._setGlowProps(), this._setMaskProps(), this._setContainerProps(), this._setInnerProps(), this._setPreviewSize(), this._setImageSize();
                    for (var t = 0; t < this.slides.length; t++) this.slides[t].rerender()
                }
            }, {
                key: "_addWrapper", value: function () {
                    var t = this;
                    this.wrapper = Object(l.b)((function () {
                        return t.close()
                    })), this.Dynamic.playground.appendChild(this.wrapper)
                }
            }, {
                key: "_removeContent", value: function () {
                    this.content && this.wrapper.removeChild(this.content), this.content = void 0
                }
            }, {
                key: "_removeWrapper", value: function () {
                    this._removeContent(), this.Dynamic.playground.removeChild(this.wrapper)
                }
            }, {
                key: "_addContent", value: function () {
                    this._removeContent();
                    var t = new Date(this.images[this.active].date), e = t.getFullYear(), i = t.getMonth() + 1,
                        s = t.getDate();
                    this.content = Object(l.a)("".concat(s, " ").concat(Object(l.d)(i), " ").concat(e), this.images[this.active].title, this.images[this.active].description), this.content.style.opacity = 0, this.wrapper.appendChild(this.content)
                }
            }]), t
        }(), y = function () {
            function t(e) {
                Object(s.a)(this, t), this.App = e.App, this.DynamicApp = e.DynamicApp, this.year = e.year, this.monthObject = e.monthObject, this.container = void 0, this.planet = void 0, this.previewContainer = void 0, this.loader = void 0, this.preview = {
                    class: void 0,
                    ratio: 1,
                    diff: 1,
                    width: 0,
                    height: 0
                }, this.image = {
                    class: void 0,
                    ratio: 1,
                    diff: 1,
                    width: 0,
                    height: 0
                }, this.previewContent = void 0, this.mask = void 0, this.glow = void 0, this.slidesContainer = void 0, this.overlay = void 0, this.inner = void 0, this.direction = e.direction, this.x = 0, this.y = 0, this.diff = this.App.screen.width / 1360, this.hd = this.diff < 1.1 ? .9 * this.diff : .9, this.scale = .2, this.alpha = 0, this.progress = "prev" === this.direction ? -1 : 1, this.detail = void 0, this.tween = r.a, this._init(), this.locked = !1
            }

            var e;
            return Object(n.a)(t, [{
                key: "_generateContent", value: function () {
                    var t = this, e = this.monthObject;
                    this.previewContent = Object(l.c)("".concat(Object(l.d)(e.month), " ").concat(e.year), e.title, (function () {
                        return t._openDetail()
                    }), (function () {
                        return t.close(), void t.DynamicApp.closePreview()
                    }))
                }
            }, {
                key: "animate", value: function () {
                    this.App.ticker.add(this.update, this)
                }
            }, {
                key: "update", value: function () {
                    this._setContainerProps(), this._setMaskProps(), this._setPreviewSize(), this._setImageSize(), this._setOverlayProps(), this._setInnerProps()
                }
            }, {
                key: "_init", value: (e = Object(d.a)(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                this._addContainer(), this._addGlow(), this._addPlanet(), this._addMask(), this._addPreviewContainer(), this._addSlidesContainer(), this._addPreview(), this._addImage(), this._addOverlay(), this._addInner(), this.addContent(), this.animate();
                            case 12:
                            case"end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function () {
                    return e.apply(this, arguments)
                })
            }, {
                key: "_addContainer", value: function () {
                    this.container = new a.b, this.App.stage.addChild(this.container), this._setContainerProps()
                }
            }, {
                key: "_setContainerProps", value: function () {
                    this.container && (this.x = this.App.screen.width - this.App.screen.width / 2 * Math.cos(this.progress), this.y = this.App.screen.height / 2 - this.App.screen.width / 2 * Math.sin(-this.progress), this.container.x = this.x, this.container.y = this.y, this.container.scale.set(this.scale), this.container.alpha = this.alpha)
                }
            }, {
                key: "_addGlow", value: function () {
                    this.glow = new a.d(this._generateGlowGradient()), this.glow.anchor.set(.5), this._setGlowProps(), this.container.addChild(this.glow)
                }
            }, {
                key: "_generateGlowGradient", value: function () {
                    var t = 1e3, e = document.createElement("canvas");
                    e.width = t, e.height = t;
                    var i = e.getContext("2d"), s = i.createRadialGradient(500, 500, t / 2.2, 500, 500, 502);
                    return s.addColorStop(0, "rgba(3, 17, 23, .13)"), s.addColorStop(1, "rgba(3, 17, 23, 0)"), i.fillStyle = s, i.fillRect(0, 0, t, t), a.g.from(e)
                }
            }, {
                key: "_setGlowProps", value: function () {
                    var t = this.App.screen.height * this.hd + 100;
                    this.glow.position.set(0, 0), this.glow.width = this.glow.height = t
                }
            }, {
                key: "_addPlanet", value: function () {
                    var t = this;
                    this.planet = new a.b, this.planet.interactive = !0, this.planet.buttonMode = !0, this.planet.on("mousedown", (function (e) {
                        return t._openDetail()
                    })), this.container.addChild(this.planet)
                }
            }, {
                key: "_addMask", value: function () {
                    this.mask = new a.c, this._setMaskProps(), this.container.addChild(this.mask), this.planet.mask = this.mask
                }
            }, {
                key: "_setMaskProps", value: function () {
                    var t = this.App.screen.height * (this.hd / 2);
                    this.mask.clear().beginFill("rgba(0,0,0,0)").drawCircle(0, 0, t).endFill()
                }
            }, {
                key: "_addPreviewContainer", value: function () {
                    this.previewContainer = new a.b, this.planet.addChild(this.previewContainer)
                }
            }, {
                key: "_addSlidesContainer", value: function () {
                    this.slidesContainer = new a.b, this.planet.addChild(this.slidesContainer)
                }
            }, {
                key: "_addPreview", value: function () {
                    var t = this;
                    return new Promise((function (e) {
                        var i = t.monthObject.file_preview, s = a.g.from(i);
                        Object(l.e)(i).then((function (i) {
                            var n, r, o;
                            r = (n = i).width, o = n.height, t.preview.width = r, t.preview.height = o, t.preview.class = new a.d(s), t.preview.class.anchor.set(.5), t._setPreviewSize(), t.preview.class.x = 0, t.preview.class.y = 0, t.previewContainer.addChild(t.preview.class), e()
                        }))
                    }))
                }
            }, {
                key: "_setPreviewSize", value: function () {
                    if (this.preview.class) {
                        var t = this.App.screen.height * this.hd;
                        this.preview.ratio = this.preview.width / this.preview.height, this.preview.diff = this.preview.ratio > 1 ? t / this.preview.height : t / this.preview.width, this.preview.class.width = this.preview.width * this.preview.diff, this.preview.class.height = this.preview.height * this.preview.diff
                    }
                }
            }, {
                key: "_addImage", value: function () {
                    var t = this, e = this.monthObject.file_display, i = a.g.from(e);
                    Object(l.e)(e).then((function (e) {
                        var s, n, o;
                        n = (s = e).width, o = s.height, t.image.width = n, t.image.height = o, t.image.class = new a.d(i), t.image.class.anchor.set(.5), t._setImageSize(), t.image.class.x = 0, t.image.class.y = 0, t.image.class.alpha = 0, t.previewContainer.addChild(t.image.class), r.a.to(t.image.class, .6, {alpha: 1})
                    }))
                }
            }, {
                key: "_setImageSize", value: function () {
                    if (this.image.class) {
                        var t = this.App.screen.height * this.hd;
                        this.image.ratio = this.image.width / this.image.height, this.image.diff = this.image.ratio > 1 ? t / this.image.height : t / this.image.width, this.image.class.width = this.image.width * this.image.diff, this.image.class.height = this.image.height * this.image.diff
                    }
                }
            }, {
                key: "_addOverlay", value: function () {
                    this.overlay && this.overlay.destroy(), this.overlay = new a.c, this.planet.addChild(this.overlay), this._setOverlayProps()
                }
            }, {
                key: "_setOverlayProps", value: function () {
                    var t = this.App.screen.height * this.hd;
                    this.overlay.clear(), this.overlay.beginFill(0, 0), this.overlay.drawRect(-t / 2, -t / 2, t, t), this.overlay.endFill()
                }
            }, {
                key: "_addInner", value: function () {
                    this.inner = new a.d(this._generateInnerGradient()), this.inner.anchor.set(.5), this._setInnerProps(), this.planet.addChild(this.inner)
                }
            }, {
                key: "_generateInnerGradient", value: function () {
                    var t = 1e3, e = document.createElement("canvas");
                    e.width = t, e.height = t;
                    var i = e.getContext("2d"), s = i.createRadialGradient(500, 500, 0, 500, 500, 500);
                    s.addColorStop(.94, "rgba(0,0,0,0)"), s.addColorStop(1, "rgba(0,0,0,.4)"), i.fillStyle = s, i.fillRect(0, 0, t, t);
                    var n = i.createRadialGradient(500, 500, 0, 500, 500, 500);
                    n.addColorStop(.9, "rgba(54,204,255,0)"), n.addColorStop(1, "rgba(54,204,255,.1)"), i.fillStyle = n, i.fillRect(0, 0, t, t);
                    var r = i.createRadialGradient(500, 500, 0, 500, 500, 500);
                    return r.addColorStop(.94, "rgba(255,255,255,0)"), r.addColorStop(1, "rgba(255,255,255,.2)"), i.fillStyle = r, i.fillRect(0, 0, t, t), a.g.from(e)
                }
            }, {
                key: "_setInnerProps", value: function () {
                    var t = this.App.screen.height * this.hd;
                    this.inner.position.set(0, 0), this.inner.width = this.inner.height = t
                }
            }, {
                key: "_openDetail", value: function () {
                    var t = this;
                    this.locked || (this.DynamicApp.locked = this.locked = !0, this.removeContent(), this.App.ticker.remove(this.update, this), this.detail = new g({
                        Month: this,
                        App: this.App,
                        Dynamic: this.DynamicApp,
                        url: this.monthObject.url,
                        x: this.x,
                        y: this.y,
                        glow: this.glow,
                        container: this.container,
                        planet: this.planet,
                        mask: this.mask,
                        previewContainer: this.previewContainer,
                        preview: this.preview,
                        image: this.image,
                        slidesContainer: this.slidesContainer,
                        overlay: this.overlay,
                        inner: this.inner,
                        initialHd: this.hd
                    }), this.detail.init().then((function (e) {
                        t.detail.open()
                    })))
                }
            }, {
                key: "closeDetail", value: function () {
                    this.DynamicApp.locked = this.locked = !1, this.addContent(), this.App.ticker.add(this.update, this)
                }
            }, {
                key: "open", value: function (t) {
                    this.tween.fromTo(this, .4, {
                        scale: "next" === t ? 1.1 : .6,
                        alpha: 1,
                        progress: "next" === t ? 1 : -1
                    }, {scale: 1, alpha: 1, progress: 0})
                }
            }, {
                key: "close", value: function (t) {
                    var e = this;
                    this.tween.killAll(), this.removeContent(), this.tween.to(this, .4, {
                        scale: "next" === t ? .6 : 1.1,
                        alpha: 0,
                        progress: "next" === t ? -1 : 1,
                        onComplete: function () {
                            e.App.ticker.remove(e.update, e), e.container.destroy()
                        }
                    })
                }
            }, {
                key: "addContent", value: function () {
                    this._generateContent(), this.previewContent.style.opacity = 0, this.DynamicApp.playground.appendChild(this.previewContent), r.a.fromTo(this.previewContent, .4, {opacity: 0}, {opacity: 1}).delay(.4)
                }
            }, {
                key: "removeContent", value: function () {
                    var t = this;
                    this.previewContent && r.a.fromTo(this.previewContent, .4, {opacity: 1}, {
                        opacity: 0,
                        onComplete: function () {
                            t.DynamicApp.playground.removeChild(t.previewContent), t.previewContent = void 0
                        }
                    })
                }
            }]), t
        }(), b = function () {
            function t(e) {
                Object(s.a)(this, t), this.App = e.App, this.DynamicApp = e.DynamicApp, this.current = void 0
            }

            return Object(n.a)(t, [{
                key: "open", value: function (t) {
                    var e = t.year, i = t.month, s = t.direction;
                    this._openCurrent(e, i, s)
                }
            }, {
                key: "_openCurrent", value: function (t, e, i) {
                    var s = this;
                    this.current && this.current.close(i), setTimeout((function () {
                        var n = s.DynamicApp.yearList.filter((function (e) {
                            return e.id === t
                        }))[0].month_set.filter((function (t) {
                            return t.month === e
                        }))[0];
                        s.current = new y({
                            App: s.App,
                            DynamicApp: s.DynamicApp,
                            year: t,
                            monthObject: n,
                            direction: i
                        }), s.current.open(i)
                    }), 100)
                }
            }]), t
        }(), w = function () {
            function t(e) {
                var i, n;
                Object(s.a)(this, t), this.playground = e.playground || null, this.canvas = e.canvas || null, this.yearList = e.yearList || [], this.yearsColor = e.yearsColor || "34,55,101", this.monthTextColor = e.monthTextColor || "255,255,255", this.monthBorderColor = e.monthBorderColor || "72,92,136", this.appClass = void 0, this.app = void 0, this.yearApps = [], this.monthApps = [], this.MonthPreviewControl = void 0, this.currentOffset = 0, this.offsets = [], this.monthRange = "Tablet" === (null === (i = window) || void 0 === i || null === (n = i.WURFL) || void 0 === n ? void 0 : n.form_factor) ? 100 : 600, this.locked = !1, this.detail = {
                    year: void 0,
                    month: void 0
                }, this.touch = {started: !1, startedY: 0}, this._init()
            }

            return Object(n.a)(t, [{
                key: "_init", value: function () {
                    var t = this;
                    return this.playground || console.log("There's no place to play"), !!this.playground && (this.yearList.length || console.log("There's no years to add"), !!this.yearList.length && (this.appClass = new o({
                        container: this.playground,
                        canvas: this.canvas
                    }), this.app = this.appClass.init(), this._setYears(), this._setInitMonths(), this._startDraw(), this.MonthPreviewControl = new b({
                        App: this.app,
                        DynamicApp: this
                    }), this.playground.addEventListener("wheel", (function (e) {
                        t._onWheel(e)
                    })), this.playground.addEventListener("touchstart", (function (e) {
                        t._onTouchStart(e)
                    })), this.playground.addEventListener("touchmove", (function (e) {
                        t.touch.started && t._onTouchMove(e)
                    })), void this.playground.addEventListener("touchend", (function (e) {
                        t.touch.started = !1
                    }))))
                }
            }, {
                key: "_onTouchStart", value: function (t) {
                    this.locked || 1 === t.touches.length && (this.touch.started = !0, this.touch.startedY = t.touches[0].clientY)
                }
            }, {
                key: "_onTouchMove", value: function (t) {
                    if (!this.locked) {
                        var e = this;
                        e.currentOffset += e.touch.startedY - t.touches[0].clientY, e.touch.startedY = t.touches[0].clientY, e.currentOffset < 0 && (this.currentOffset = 0), e.currentOffset > e.offsets[e.offsets.length - 1] - e.monthRange && (e.currentOffset = e.offsets[e.offsets.length - 1] - e.monthRange)
                    }
                }
            }, {
                key: "_onWheel", value: function (t) {
                    var e = this, i = this;
                    if (!this.locked) {
                        var s = (t = t || window.event).deltaY || t.detail || t.wheelDelta, n = {value: 0};
                        r.a.to(n, .1, {
                            value: s / 4, onUpdate: function () {
                                i.currentOffset += n.value, i.currentOffset < 0 && (e.currentOffset = 0), i.currentOffset > i.offsets[i.offsets.length - 1] - i.monthRange && (i.currentOffset = i.offsets[i.offsets.length - 1] - i.monthRange)
                            }
                        })
                    }
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                }
            }, {
                key: "_setYears", value: function () {
                    for (var t = 0, e = 0; e < this.yearList.length; e++) {
                        var i, s = this.yearList[e];
                        i = s.month_set.length * this.monthRange;
                        var n = new h({
                            year: s,
                            index: e,
                            range: i,
                            offset: t,
                            App: this.app,
                            DynamicApp: this,
                            textColor: this.yearsColor
                        });
                        this.yearApps.push(n), s.month_set.length < 3 ? t = 2e3 : t += i, this.offsets.push(t)
                    }
                }
            }, {
                key: "_setInitMonths", value: function () {
                    for (var t = 0; t < this.yearApps.length; t++) for (var e = this.yearApps[t], i = e.year, s = 0, n = 0; n < i.month_set.length; n++) {
                        var r = i.month_set[n], a = new c({
                            month: r,
                            yearClass: e,
                            monthRange: this.monthRange,
                            offset: s,
                            index: n,
                            App: this.app,
                            DynamicApp: this,
                            textColor: this.monthTextColor,
                            borderColor: this.monthBorderColor
                        });
                        s += this.monthRange, this.monthApps.push(a)
                    }
                }
            }, {
                key: "_startDraw", value: function () {
                    var t = this;
                    t.app.ticker.add((function () {
                        for (var e = 0; e < t.yearApps.length; e++) t.yearApps[e].draw(t.currentOffset);
                        for (var i = 0; i < t.monthApps.length; i++) t.monthApps[i].draw(t.currentOffset)
                    }))
                }
            }, {
                key: "moveTo", value: function (t) {
                    var e = this;
                    if (!this.locked) {
                        var i = {value: this.currentOffset};
                        r.a.to(i, .3, {
                            value: t, onUpdate: function () {
                                e.currentOffset = i.value
                            }
                        })
                    }
                }
            }, {
                key: "openPreview", value: function (t) {
                    var e = this, i = t.year, s = t.month;
                    this.locked = !1;
                    var n = "prev";
                    this.detail.year && (n = i < this.detail.year ? "prev" : i > this.detail.year ? "next" : s < this.detail.month ? "prev" : "next"), i === this.detail.year && s === this.detail.month || setTimeout((function () {
                        e.detail.year = i, e.detail.month = s, e.MonthPreviewControl.open({
                            year: i,
                            month: s,
                            direction: n
                        });
                        for (var t = 0; t < e.monthApps.length; t++) e.monthApps[t].setDetail(!0, {year: i, month: s})
                    }), 400)
                }
            }, {
                key: "closePreview", value: function () {
                    for (var t = 0; t < this.monthApps.length; t++) this.detail.year = void 0, this.detail.month = void 0, this.monthApps[t].setUnActive(!1, {}), this.monthApps[t].detailView = !1
                }
            }, {
                key: "destroy", value: function () {
                    var t;
                    null == this || null === (t = this.app) || void 0 === t || t.destroy()
                }
            }, {
                key: "changeYearsColors", value: function (t) {
                    var e;
                    (null === (e = this.yearApps) || void 0 === e ? void 0 : e.length) && this.yearApps.forEach((function (e) {
                        e.changeColor(t)
                    }))
                }
            }, {
                key: "changeMonthsColors", value: function (t) {
                    var e;
                    (null === (e = this.monthApps) || void 0 === e ? void 0 : e.length) && this.monthApps.forEach((function (e) {
                        e.changeTextColor(t)
                    }))
                }
            }, {
                key: "changeMonthsBorders", value: function (t) {
                    var e;
                    (null === (e = this.monthApps) || void 0 === e ? void 0 : e.length) && this.monthApps.forEach((function (e) {
                        e.changeBorderColor(t)
                    }))
                }
            }]), t
        }()
    }, 1084: function (t, e, i) {
        "use strict";
        i.r(e);
        i(7), i(6), i(11), i(12);
        var s, n = i(2), r = i(68), a = i(5), o = (i(20), i(44), i(9), i(50), i(3));

        function h(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? h(Object(i), !0).forEach((function (e) {
                    Object(a.a)(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        s = i(1071);
        var c = {
            name: "ProgressDesktop", props: {
                years: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, data: function () {
                return {app: void 0, reversedYears: null}
            }, computed: l(l({}, Object(o.e)("global", ["isLightTheme"])), {}, {
                yearsColor: function () {
                    return this.isLightTheme ? "168,209,242" : "34,55,101"
                }, monthTextColor: function () {
                    return this.isLightTheme ? "134,175,207" : "255,255,255"
                }, monthBorderColor: function () {
                    return this.isLightTheme ? 13952499 : 4742280
                }
            }), watch: {
                isLightTheme: function (t) {
                    var e, i, s;
                    this.app && (null === (e = this.app) || void 0 === e || e.changeYearsColors(this.yearsColor), null === (i = this.app) || void 0 === i || i.changeMonthsColors(this.monthTextColor), null === (s = this.app) || void 0 === s || s.changeMonthsBorders(this.monthBorderColor))
                }
            }, mounted: function () {
                window.$axios = this.$axios, this.app = new s.default({
                    playground: this.$refs.playground,
                    canvas: this.$refs.canvas,
                    yearList: this.years,
                    yearsColor: this.yearsColor,
                    monthTextColor: this.monthTextColor,
                    monthBorderColor: this.monthBorderColor
                })
            }, beforeDestroy: function () {
                var t;
                null == this || null === (t = this.app) || void 0 === t || t.destroy()
            }
        }, d = (i(864), i(4)), p = Object(d.a)(c, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "playground",
                staticClass: "ProgressDesktop"
            }, [i("canvas", {ref: "canvas"}), t._v(" "), i("div", {staticClass: "scrollIcn"}, [i("svg", {
                attrs: {
                    width: "18",
                    height: "26",
                    viewBox: "0 0 18 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [i("rect", {
                attrs: {
                    x: "0.77124",
                    y: "0.780518",
                    width: "16.4571",
                    height: "24",
                    rx: "6",
                    stroke: "#D8D8D8"
                }
            }), t._v(" "), i("rect", {
                attrs: {
                    width: "2",
                    height: "3",
                    rx: "1",
                    transform: "matrix(-1 0 0 1 9.77124 4.78052)",
                    stroke: "#D8D8D8"
                }
            })])])])
        }), [], !1, null, null, null).exports, u = (i(141), i(435)), f = i.n(u);

        function v(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        var m = {
            name: "ProgressMonths", props: {
                years: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, data: function () {
                return {slider: void 0, activeYear: 0}
            }, computed: function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(i), !0).forEach((function (e) {
                        Object(a.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }({}, Object(o.e)("global", ["isLightTheme"])), mounted: function () {
                this.initSlider(), this.activeYear = Number(this.years[0].id)
            }, methods: {
                initSlider: function () {
                    var t = this;
                    this.slider = new f.a(this.$refs.slider, {
                        direction: "vertical",
                        speed: 500,
                        freeMode: !0,
                        freeModeSticky: !0
                    }), this.slider.on("slideChangeTransitionEnd", (function () {
                        var e = t.slider.slides[t.slider.activeIndex];
                        t.changeYear(Number(e.getAttribute("year")))
                    }))
                }, changeYear: function (t) {
                    this.activeYear !== t && (this.activeYear = t)
                }, onClickSignal: function (t, e) {
                    this.$emit("month-clicked", {year: t, month: e})
                }
            }
        }, g = m, y = i(866);
        var b, w = Object(d.a)(g, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {class: t.$style.ProgressMonths}, [i("h1", {class: t.$style.title}, [t._v("Ход строительства")]), t._v(" "), i("div", {
                ref: "slider",
                class: [t.$style.slider, {_light: t.isLightTheme}]
            }, [i("div", {staticClass: "swiper-wrapper"}, [t._l(t.years, (function (e) {
                return t._l(e.month_set, (function (e) {
                    return i("div", {
                        key: e.month + "_" + e.year,
                        staticClass: "swiper-slide",
                        class: t.$style.slide,
                        attrs: {year: e.year},
                        on: {
                            click: function (i) {
                                return t.onClickSignal(e.year, e.month)
                            }
                        }
                    }, [i("div", {class: [t.$style.month, {_light: t.isLightTheme}]}, [i("div", [t._v(t._s(t._f("monthByNumber")(e.month)))]), t._v(" "), i("div", [t._v(t._s(e.year))])])])
                }))
            }))], 2)]), t._v(" "), i("div", {class: [t.$style.year, {_light: t.isLightTheme}]}, [t._v(t._s(t.activeYear))]), t._v(" "), i("div", {class: t.$style.swipe}, [i("svg", {
                class: [t.$style.swipeIcn, {_light: t.isLightTheme}],
                attrs: {viewBox: "0 0 20 20"}
            }, [i("use", {attrs: {"xlink:href": "#ic-swipe-d"}})]), t._v(" "), i("div", {class: t.$style.swipeLabel}, [t._v("Свайпите вниз для смены годов")])])])
        }), [], !1, (function (t) {
            this.$style = y.default.locals || y.default
        }), null, null).exports, _ = (i(26), i(720)), k = i.n(_), x = i(144);

        function C(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        var O = {
            name: "ProgressSlide", props: {
                image: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, data: function () {
                return {slideHammer: void 0, infoOpened: !1}
            }, computed: function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? C(Object(i), !0).forEach((function (e) {
                        Object(a.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }({}, Object(o.e)("global", ["isLightTheme"])), mounted: function () {
                var t = this;
                b = i(868), this.slideHammer = new b(this.$refs.slide), this.slideHammer.get("swipe").set({direction: b.DIRECTION_ALL}), this.slideHammer.on("swipeup", (function () {
                    t.infoOpened = !0
                })), this.slideHammer.on("swipedown", (function () {
                    t.infoOpened = !1
                }))
            }
        }, A = O, P = i(869);

        function j(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        var D = {
            name: "ProgressAlbum", components: {
                ProgressSlide: Object(d.a)(A, (function () {
                    var t = this, e = t.$createElement, i = t._self._c || e;
                    return i("div", {
                        ref: "slide",
                        class: t.$style.ProgressSlide,
                        style: {backgroundImage: "url(" + t.image.file_preview + ")"}
                    }, [i("div", {
                        staticClass: "swiper-lazy",
                        class: t.$style.imageOrigin,
                        attrs: {"data-background": t.image.file_display}
                    }), t._v(" "), i("div", {
                        class: [t.$style.info, {
                            _active: t.infoOpened,
                            _light: t.isLightTheme
                        }]
                    }, [i("div", {
                        class: t.$style.title,
                        domProps: {innerHTML: t._s(t.image.title)}
                    }), t._v(" "), t.image.description ? i("div", {
                        class: t.$style.description,
                        domProps: {innerHTML: t._s(t.image.description)}
                    }) : t._e()])])
                }), [], !1, (function (t) {
                    this.$style = P.default.locals || P.default
                }), null, null).exports, BackwardLink: x.a
            }, props: {
                albums: {
                    type: Array, default: function () {
                        return []
                    }
                }, year: {type: [Number, String], default: null}, month: {type: [Number, String], default: null}
            }, data: function () {
                return {slider: void 0, tween: k.a, opened: !1}
            }, computed: function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? j(Object(i), !0).forEach((function (e) {
                        Object(a.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : j(Object(i)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }({}, Object(o.e)("global", ["isLightTheme"])), mounted: function () {
                var t = this;
                this.$nextTick((function () {
                    t.open(), t.preventScroll()
                }))
            }, methods: {
                open: function () {
                    var t = this;
                    this.tween.to(this.$refs.container, .4, {
                        css: {maxHeight: 1e3}, onComplete: function () {
                            t.tween.to([t.$refs.backlink, t.$refs.name, t.$refs.swipe], .4, {
                                opacity: .4,
                                y: 0
                            }), t.tween.to(t.$refs.slider, .4, {
                                opacity: 1, onComplete: function () {
                                    t.opened = !0, t.initSlider()
                                }
                            })
                        }
                    })
                }, close: function () {
                    var t = this;
                    this.opened = !1, this.tween.set(this.$refs.container, {
                        top: "auto",
                        bottom: 0
                    }), this.tween.to([this.$refs.backlink, this.$refs.name, this.$refs.swipe], .4, {
                        opacity: 0,
                        y: 10
                    }), this.tween.to(this.$refs.slider, .4, {
                        opacity: 0, onComplete: function () {
                            t.tween.to(t.$refs.container, .4, {
                                css: {maxHeight: 0, padding: 0},
                                onComplete: function () {
                                    t.$emit("close-album")
                                }
                            })
                        }
                    })
                }, initSlider: function () {
                    this.slider = new f.a(this.$refs.slider, {speed: 500, lazy: {loadPrevNext: !0}})
                }, preventScroll: function () {
                    var t = {passive: !1};

                    function e(t) {
                        t.preventDefault()
                    }

                    function i() {
                        window.removeEventListener("touchmove", e, t), window.removeEventListener("touchend", i, t)
                    }

                    this.$refs.container.addEventListener("touchstart", (function (s) {
                        window.addEventListener("touchmove", e, t), window.addEventListener("touchend", i, t)
                    }), t)
                }
            }
        }, T = D, M = i(871);
        var S = Object(d.a)(T, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "container",
                class: [t.$style.ProgressAlbum, {_active: t.opened, _light: t.isLightTheme}]
            }, [i("div", {
                ref: "backlink",
                class: t.$style.back
            }, [i("backward-link", {
                attrs: {"is-white": !t.isLightTheme, text: "Вернуться к выбору альбомов"},
                nativeOn: {
                    click: function (e) {
                        return e.preventDefault(), t.close.apply(null, arguments)
                    }
                }
            })], 1), t._v(" "), i("div", {
                ref: "name",
                class: t.$style.name
            }, [t._v(t._s(t._f("monthByNumber")(t.month)) + " " + t._s(t.year) + "\n    ")]), t._v(" "), i("div", {
                ref: "slider",
                class: [t.$style.slider, {_light: t.isLightTheme}]
            }, [i("div", {staticClass: "swiper-wrapper"}, [t._l(t.albums, (function (e) {
                return t._l(e.progressimage_set, (function (t) {
                    return i("progress-slide", {key: t.id, staticClass: "swiper-slide", attrs: {image: t}})
                }))
            }))], 2), t._v(" "), i("div", {
                ref: "swipe",
                class: t.$style.swipe
            }, [i("svg", {
                class: [t.$style.swipeIcn, {_light: t.isLightTheme}],
                attrs: {viewBox: "0 0 20 20"}
            }, [i("use", {attrs: {"xlink:href": "#ic-swipe-d"}})]), t._v(" "), i("div", {class: t.$style.swipeLabel}, [t._v("Свайпите вверх для информации")])])])])
        }), [], !1, (function (t) {
            this.$style = M.default.locals || M.default
        }), null, null);

        function I(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        var L = {
            name: "ProgressMobile",
            components: {ProgressAlbum: S.exports, ProgressMonths: w},
            props: {
                years: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            data: function () {
                return {albums: null, year: void 0, month: void 0, albumOpened: !1}
            },
            computed: function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(i), !0).forEach((function (e) {
                        Object(a.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : I(Object(i)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }({}, Object(o.e)("global", ["isLightTheme"])),
            methods: {
                monthClicked: function (t) {
                    var e = t.year, i = t.month;
                    this.loadAlbum(e, i)
                }, loadAlbum: function (t, e) {
                    var i = this;
                    return Object(n.a)(regeneratorRuntime.mark((function s() {
                        return regeneratorRuntime.wrap((function (s) {
                            for (; ;) switch (s.prev = s.next) {
                                case 0:
                                    return s.next = 2, i.$axios.$get("".concat(i.$api.progress.list, "?year=").concat(t, "&month=").concat(e));
                                case 2:
                                    i.albums = s.sent, i.year = t, i.month = e, i.albumOpened = !0;
                                case 6:
                                case"end":
                                    return s.stop()
                            }
                        }), s)
                    })))()
                }, closeAlbum: function () {
                    var t = this;
                    setTimeout((function () {
                        t.albums = null, t.year = void 0, t.month = void 0, t.albumOpened = !1
                    }), 100)
                }
            }
        }, z = L, $ = i(873);

        function E(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, s)
            }
            return i
        }

        function R(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? E(Object(i), !0).forEach((function (e) {
                    Object(a.a)(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : E(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        var W = {
            components: {
                ProgressMobile: Object(d.a)(z, (function () {
                    var t = this, e = t.$createElement, i = t._self._c || e;
                    return i("div", {class: t.$style.ProgressMobile}, [i("progress-months", {
                        attrs: {years: t.years},
                        on: {"month-clicked": t.monthClicked}
                    }), t._v(" "), t.albums ? i("progress-album", {
                        attrs: {
                            albums: t.albums,
                            year: t.year,
                            month: t.month
                        }, on: {"close-album": t.closeAlbum}
                    }) : t._e()], 1)
                }), [], !1, (function (t) {
                    this.$style = $.default.locals || $.default
                }), null, null).exports, ProgressDesktop: p
            }, data: function () {
                return {app: void 0}
            }, computed: R(R({}, Object(o.e)("global", ["isLightTheme"])), {}, {
                yearList: function () {
                    var t = this, e = [];
                    return Object.keys(this.years).map((function (i) {
                        e.push({id: i, month_set: t.years[i]})
                    })), e
                }, reverseYears: function () {
                    return Object(r.a)(this.yearList).reverse()
                }, isMobile: function () {
                    return !["tab", "lap", "xl"].includes(this.$mq)
                }
            }), asyncData: function (t) {
                return Object(n.a)(regeneratorRuntime.mark((function e() {
                    var i, s, n;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return i = t.app, s = t.store, "/api/progress/years/", e.next = 4, i.$axios.$get("/api/progress/years/");
                            case 4:
                                return n = e.sent, e.abrupt("return", {site: s.state.global.site, years: n});
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))()
            }, mounted: function () {
                this.isMobile || this.HIDE_FOOTER_BORDER(!0), document.body.style.overflow = "hidden"
            }, destroyed: function () {
                document.body.style.overflow = "", this.HIDE_FOOTER_BORDER(!1)
            }, methods: R({}, Object(o.d)(["HIDE_FOOTER_BORDER"]))
        }, G = i(875);
        var Y = Object(d.a)(W, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {class: [t.$style.Dynamic, {_light: t.isLightTheme}]}, [t.isMobile ? i("progress-mobile", {attrs: {years: t.reverseYears}}) : i("progress-desktop", {attrs: {years: t.reverseYears}})], 1)
        }), [], !1, (function (t) {
            this.$style = G.default.locals || G.default
        }), null, null);
        e.default = Y.exports
    }, 425: function (t, e, i) {
        "use strict";
        i.d(e, "d", (function () {
            return s
        })), i.d(e, "e", (function () {
            return n
        })), i.d(e, "c", (function () {
            return a
        })), i.d(e, "b", (function () {
            return o
        })), i.d(e, "a", (function () {
            return h
        }));
        i(16);
        var s = function (t) {
            return {
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
            }[t]
        }, n = function (t) {
            return new Promise((function (e, i) {
                var s, n, r;
                s = t, n = function (t, i) {
                    e({width: i.naturalWidth, height: i.naturalHeight})
                }, (r = new Image).onload = function () {
                    n(s, r)
                }, r.src = s
            }))
        }, r = function (t) {
            var e = document.createElement("DIV");
            return e.classList.add(t), e.innerHTML = '<div class="close-icn"><div class="close-icn__block"><svg viewBox="0 0 24 24" class="close-icn__svg"><use xlink:href="#ic-cross"></use></svg></div></div>', e
        }, a = function (t, e, i, s) {
            var n = document.createElement("DIV");
            n.classList.add("d-preview"), n.innerHTML = '\n            <div class="d-preview__date">'.concat(t, '</div>\n            <div class="d-preview__title">').concat(e, "</div>");
            var a = document.createElement("DIV");
            a.classList.add("d-preview__btn", "button"), a.innerHTML = "Смотреть все фото", n.appendChild(a), a.addEventListener("click", (function () {
                i()
            }));
            var o = r("d-preview__close");
            return n.appendChild(o), o.addEventListener("click", (function () {
                s()
            })), n
        }, o = function (t) {
            var e = document.createElement("DIV");
            e.classList.add("d-detail");
            var i = r("d-detail__close");
            return e.appendChild(i), i.addEventListener("click", (function () {
                t()
            })), e
        }, h = function (t, e, i) {
            var s = document.createElement("DIV");
            s.classList.add("d-detail__content");
            var n = '\n            <div class="d-detail__date">'.concat(t, '</div>\n            <div class="d-detail__title">').concat(e, "</div>");
            return i && (n += '<div class="d-detail__description">'.concat(i, "</div>")), s.innerHTML = n, s
        }
    }, 510: function (t, e, i) {
        var s = i(867);
        s.__esModule && (s = s.default), "string" == typeof s && (s = [[t.i, s, ""]]), s.locals && (t.exports = s.locals);
        (0, i(15).default)("20ed3960", s, !0, {sourceMap: !1})
    }, 511: function (t, e, i) {
        var s = i(870);
        s.__esModule && (s = s.default), "string" == typeof s && (s = [[t.i, s, ""]]), s.locals && (t.exports = s.locals);
        (0, i(15).default)("0e7a5222", s, !0, {sourceMap: !1})
    }, 512: function (t, e, i) {
        var s = i(872);
        s.__esModule && (s = s.default), "string" == typeof s && (s = [[t.i, s, ""]]), s.locals && (t.exports = s.locals);
        (0, i(15).default)("0087f41e", s, !0, {sourceMap: !1})
    }, 513: function (t, e, i) {
        var s = i(874);
        s.__esModule && (s = s.default), "string" == typeof s && (s = [[t.i, s, ""]]), s.locals && (t.exports = s.locals);
        (0, i(15).default)("4925d5f0", s, !0, {sourceMap: !1})
    }, 514: function (t, e, i) {
        var s = i(876);
        s.__esModule && (s = s.default), "string" == typeof s && (s = [[t.i, s, ""]]), s.locals && (t.exports = s.locals);
        (0, i(15).default)("ea4b6d94", s, !0, {sourceMap: !1})
    }, 719: function (t, e, i) {
        var s = i(865);
        s.__esModule && (s = s.default), "string" == typeof s && (s = [[t.i, s, ""]]), s.locals && (t.exports = s.locals);
        (0, i(15).default)("5dec49af", s, !0, {sourceMap: !1})
    }, 864: function (t, e, i) {
        "use strict";
        i(719)
    }, 865: function (t, e, i) {
        var s = i(14)(!1);
        s.push([t.i, '.ProgressDesktop{position:absolute;top:0;right:0;display:block;width:100vw;height:100vh}.scrollIcn{position:absolute;bottom:80px;left:calc(50% + 14.7rem);z-index:3;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);width:16px}.scrollIcn svg{display:block;width:100%}.d-preview{position:absolute;top:50%;left:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:49.26471vw;height:49.26471vw;color:#fff;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.d-preview__date{font-size:1.2rem}.d-preview__title{width:80%;margin-top:2.6rem;font-size:4rem}.d-preview__btn{margin-top:2.6rem}.d-preview__close{position:absolute;top:7vh;right:7vh}.d-detail{position:absolute;top:0;right:0;z-index:2;width:75%;height:100%;color:#fff;pointer-events:none}.d-detail:before{content:"";position:absolute;top:50%;left:15%;z-index:-1;width:43.6rem;height:43.6rem;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:rgba(75,6,221,.7);-webkit-filter:blur(42px);filter:blur(42px);border-radius:50%;opacity:0;-webkit-animation:appear 1s linear .4s forwards;animation:appear 1s linear .4s forwards}.d-detail__close{position:absolute;top:50%;right:32px;z-index:2;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);pointer-events:all}.d-detail__content{position:relative;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;max-width:80rem}.d-detail__date{font-size:1.2rem}.d-detail__title{width:40%;margin-top:2.6rem;font-size:4rem}.d-detail__description{width:40%;margin-top:3rem;font-size:1.6rem;line-height:1.8;font-weight:300}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}', ""]), t.exports = s
    }, 866: function (t, e, i) {
        "use strict";
        var s = i(510), n = i.n(s);
        i.d(e, "default", (function () {
            return n.a
        }))
    }, 867: function (t, e, i) {
        var s = i(14)(!1);
        s.push([t.i, '.ProgressMonths_BSNK0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding-top:84px}.title_PicOA{margin:0;text-align:center;font-size:26px;line-height:1;font-weight:100;color:#6a7894}.slider_KA-Px{position:relative;height:calc(100vh - 250px);overflow:hidden;z-index:1}.slider_KA-Px._light:before{background:-webkit-gradient(linear,left top,left bottom,from(#dfeffc),to(rgba(223,239,252,0)));background:linear-gradient(180deg,#dfeffc,rgba(223,239,252,0))}.slider_KA-Px:before{content:"";position:absolute;top:0;left:0;z-index:3;display:block;width:100%;height:22px;background:-webkit-gradient(linear,left top,left bottom,from(#141924),to(rgba(20,25,36,0)));background:linear-gradient(180deg,#141924,rgba(20,25,36,0))}.slide_vVSvr{position:relative}.month_iG9wr,.slide_vVSvr{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.month_iG9wr{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:132px;height:132px;margin-top:46px;border:1px solid #6a7894;border-radius:50%;font-size:18px;font-weight:300;line-height:1.8}.month_iG9wr._light{border-color:#d4e5f3}.year_vc4tg{position:absolute;left:50%;bottom:154px;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);font-size:160px;font-weight:700;color:#6a7894;line-height:.8;opacity:.2}.year_vc4tg._light{color:#a8d1f2}.swipe_oD-Wz{position:absolute;bottom:100px;left:50%;z-index:2;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:.4}.swipeIcn_uw9nS{display:block;width:20px;fill:#fff}.swipeIcn_uw9nS._light{fill:#222326}.swipeLabel_6wJlD{width:100vw;margin-top:14px;text-align:center;font-size:11px;font-weight:300}', ""]), s.locals = {
            ProgressMonths: "ProgressMonths_BSNK0",
            title: "title_PicOA",
            slider: "slider_KA-Px",
            slide: "slide_vVSvr",
            month: "month_iG9wr",
            year: "year_vc4tg",
            swipe: "swipe_oD-Wz",
            swipeIcn: "swipeIcn_uw9nS",
            swipeLabel: "swipeLabel_6wJlD"
        }, t.exports = s
    }, 869: function (t, e, i) {
        "use strict";
        var s = i(511), n = i.n(s);
        i.d(e, "default", (function () {
            return n.a
        }))
    }, 870: function (t, e, i) {
        var s = i(14)(!1);
        s.push([t.i, ".ProgressSlide_ThAkZ{position:relative;overflow:hidden}.imageOrigin_bZHx0,.ProgressSlide_ThAkZ{display:block;background-repeat:no-repeat;background-position:50%;background-size:cover}.imageOrigin_bZHx0{width:100%;height:100%;opacity:0;-webkit-transition:opacity .4s cubic-bezier(.165,.84,.44,1) .2s;transition:opacity .4s cubic-bezier(.165,.84,.44,1) .2s}.imageOrigin_bZHx0.swiper-lazy-loaded{opacity:1}.info_IQmNA{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;padding:18px 20px;background-color:#141924;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:-webkit-transform .4s ease .4s;transition:-webkit-transform .4s ease .4s;transition:transform .4s ease .4s;transition:transform .4s ease .4s,-webkit-transform .4s ease .4s}.info_IQmNA._active{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .4s ease;transition:-webkit-transform .4s ease;transition:transform .4s ease;transition:transform .4s ease,-webkit-transform .4s ease}.info_IQmNA._active .description_25Wuc,.info_IQmNA._active .title_Yh3-f{opacity:1;-webkit-transition:-webkit-transform .4s ease .4s;transition:-webkit-transform .4s ease .4s;transition:transform .4s ease .4s;transition:transform .4s ease .4s,-webkit-transform .4s ease .4s}.info_IQmNA._light{background-color:#dfeffc}.title_Yh3-f{font-size:22px;font-weight:300}.description_25Wuc,.title_Yh3-f{opacity:0;-webkit-transition:opacity .4s ease;transition:opacity .4s ease}.description_25Wuc{margin-top:32px;font-size:14px;line-height:1.875;font-weight:100}", ""]), s.locals = {
            ProgressSlide: "ProgressSlide_ThAkZ",
            imageOrigin: "imageOrigin_bZHx0",
            info: "info_IQmNA",
            description: "description_25Wuc",
            title: "title_Yh3-f"
        }, t.exports = s
    }, 871: function (t, e, i) {
        "use strict";
        var s = i(512), n = i.n(s);
        i.d(e, "default", (function () {
            return n.a
        }))
    }, 872: function (t, e, i) {
        var s = i(14)(!1);
        s.push([t.i, '.ProgressAlbum_eX\\+6d{position:absolute;top:0;left:0;z-index:2;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;max-height:0;padding-top:84px;background-color:#141924;-webkit-transform:translateZ(0);transform:translateZ(0);-ms-touch-action:none;touch-action:none}.ProgressAlbum_eX\\+6d._light{background:#dfeffc}.ProgressAlbum_eX\\+6d:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:28vh;background-image:url(/assets/common/footer-gradient-mobile.png);background-repeat:no-repeat;background-position:100% 0;background-size:cover;z-index:0;opacity:0;-webkit-transition:opacity .4s;transition:opacity .4s}.ProgressAlbum_eX\\+6d._active:after{opacity:1;-webkit-transition:opacity .4s ease .4s;transition:opacity .4s ease .4s}.back_h3JTG,.name_ymdNC{opacity:0;-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}.name_ymdNC{margin-top:20px;font-size:18px;font-weight:100}.slider_xeWAq{position:relative;width:100vw;margin-top:18px;opacity:0}.slider_xeWAq .swiper-wrapper{position:relative;z-index:1;height:calc(100vh - 280px)}.slider_xeWAq._light:after{background:-webkit-gradient(linear,left bottom,left top,from(#dfeffc),to(rgba(223,239,252,0)));background:linear-gradient(0deg,#dfeffc,rgba(223,239,252,0))}.slider_xeWAq:after{content:"";bottom:-2px;left:0;width:100%;height:110px;background:-webkit-gradient(linear,left bottom,left top,from(#141924),to(rgba(20,25,36,0)));background:linear-gradient(0deg,#141924,rgba(20,25,36,0));z-index:1}.slider_xeWAq:after,.swipe_zeCGP{position:absolute;pointer-events:none}.swipe_zeCGP{bottom:16px;left:50%;z-index:2;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.swipeIcn_zUt8z{display:block;width:20px;fill:#fff}.swipeIcn_zUt8z._light{fill:#222326}.swipeLabel_VMtTY{width:100vw;margin-top:14px;text-align:center;font-size:11px;font-weight:300}', ""]), s.locals = {
            ProgressAlbum: "ProgressAlbum_eX+6d",
            back: "back_h3JTG",
            name: "name_ymdNC",
            slider: "slider_xeWAq",
            swipe: "swipe_zeCGP",
            swipeIcn: "swipeIcn_zUt8z",
            swipeLabel: "swipeLabel_VMtTY"
        }, t.exports = s
    }, 873: function (t, e, i) {
        "use strict";
        var s = i(513), n = i.n(s);
        i.d(e, "default", (function () {
            return n.a
        }))
    }, 874: function (t, e, i) {
        var s = i(14)(!1);
        s.push([t.i, '.ProgressMobile_gg\\+qx{display:block}.ProgressMobile_gg\\+qx:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:60vh;background-image:url(/assets/common/footer-gradient-mobile.png);background-repeat:no-repeat;background-position:0 0;background-size:cover;z-index:0}', ""]), s.locals = {ProgressMobile: "ProgressMobile_gg+qx"}, t.exports = s
    }, 875: function (t, e, i) {
        "use strict";
        var s = i(514), n = i.n(s);
        i.d(e, "default", (function () {
            return n.a
        }))
    }, 876: function (t, e, i) {
        var s = i(14)(!1);
        s.push([t.i, '.Dynamic_8UQqs{z-index:1;width:100%}.Dynamic_8UQqs._light:before{background-image:linear-gradient(135deg,#dfeffc,rgba(223,239,252,0) 70%)}.Dynamic_8UQqs:before{content:"";position:absolute;z-index:-1;top:0;left:0;display:block;width:100%;height:100vw;background-image:linear-gradient(135deg,#0c1f48,rgba(12,31,72,0) 70%)}@media only screen and (max-width:920px){.Dynamic_8UQqs:before{display:none}}', ""]), s.locals = {Dynamic: "Dynamic_8UQqs"}, t.exports = s
    }
}]);