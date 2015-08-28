/*!
 * Metro UI CSS v3.0.0 (http://metroui.org.ua)
 * Copyright 2012-2015 Sergey Pimenov
 * Licensed under MIT (http://metroui.org.ua/license.html)
 */
function addTouchEvents(a) {
    hasTouch && (a.addEventListener("touchstart", touch2Mouse, !0), a.addEventListener("touchmove", touch2Mouse, !0), a.addEventListener("touchend", touch2Mouse, !0))
}
function touch2Mouse(a) {
    var b, c = a.changedTouches[0];
    switch (a.type) {
        case"touchstart":
            b = "mousedown";
            break;
        case"touchend":
            b = "mouseup";
            break;
        case"touchmove":
            b = "mousemove";
            break;
        default:
            return
    }
    "mousedown" == b && (eventTimer = (new Date).getTime(), startX = c.clientX, startY = c.clientY, mouseDown = !0), "mouseup" == b && ((new Date).getTime() - eventTimer <= 500 ? b = "click" : (new Date).getTime() - eventTimer > 1e3 && (b = "longclick"), eventTimer = 0, mouseDown = !1), "mousemove" == b && mouseDown && (deltaX = c.clientX - startX, deltaY = c.clientY - startY, moveDirection = deltaX > deltaY ? "horizontal" : "vertical");
    var d = document.createEvent("MouseEvent");
    d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(d), a.preventDefault()
}
if ("undefined" == typeof jQuery)
    throw new Error("Metro's JavaScript requires jQuery");
window.METRO_VERSION = "3.0.0", window.METRO_AUTO_REINIT = !0, window.METRO_LANGUAGE = "en", window.METRO_LOCALE = "EN_en", window.METRO_CURRENT_LOCALE = "en", window.METRO_SHOW_TYPE = "slide", window.METRO_DEBUG = !0, window.canObserveMutation = "MutationObserver"in window, String.prototype.isUrl = function() {
    "use strict";
    var a = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return a.test(this)
}, String.prototype.isColor = function() {
    "use strict";
    return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this)
}, window.uniqueId = function(a) {
    "use strict";
    return(a || "id") + (new Date).getTime()
};
var dateFormat = function() {
    "use strict";
    var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, c = /[^-+\dA-Z]/g, d = function(a, b) {
        for (a = String(a), b = b || 2; a.length < b; )
            a = "0" + a;
        return a
    };
    return function(e, f, g) {
        var h = dateFormat;
        1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(e) || /\d/.test(e) || (f = e, e = void 0), e = e ? new Date(e) : new Date, f = String(h.masks[f] || f || h.masks["default"]), "UTC:" === f.slice(0, 4) && (f = f.slice(4), g = !0);
        var i = window.METRO_CURRENT_LOCALE || "en", j = g ? "getUTC" : "get", k = e[j + "Date"](), l = e[j + "Day"](), m = e[j + "Month"](), n = e[j + "FullYear"](), o = e[j + "Hours"](), p = e[j + "Minutes"](), q = e[j + "Seconds"](), r = e[j + "Milliseconds"](), s = g ? 0 : e.getTimezoneOffset(), t = {d: k, dd: d(k), ddd: window.METRO_LOCALES[i].days[l], dddd: window.METRO_LOCALES[i].days[l + 7], m: m + 1, mm: d(m + 1), mmm: window.METRO_LOCALES[i].months[m], mmmm: window.METRO_LOCALES[i].months[m + 12], yy: String(n).slice(2), yyyy: n, h: o % 12 || 12, hh: d(o % 12 || 12), H: o, HH: d(o), M: p, MM: d(p), s: q, ss: d(q), l: d(r, 3), L: d(r > 99 ? Math.round(r / 10) : r), t: 12 > o ? "a" : "p", tt: 12 > o ? "am" : "pm", T: 12 > o ? "A" : "P", TT: 12 > o ? "AM" : "PM", Z: g ? "UTC" : (String(e).match(b) || [""]).pop().replace(c, ""), o: (s > 0 ? "-" : "+") + d(100 * Math.floor(Math.abs(s) / 60) + Math.abs(s) % 60, 4), S: ["th", "st", "nd", "rd"][k % 10 > 3 ? 0 : (k % 100 - k % 10 !== 10) * k % 10]};
        return f.replace(a, function(a) {
            return a in t ? t[a] : a.slice(1, a.length - 1)
        })
    }
}();
dateFormat.masks = {"default": "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:ss", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"}, Date.prototype.format = function(a, b) {
    "use strict";
    return dateFormat(this, a, b)
}, function(a) {
    "use strict";
    a.fn.reverse = Array.prototype.reverse, a.Metro = function(b) {
        b = a.extend({}, b)
    }, a.Metro.initWidgets = function() {
        var b;
        b = a("[data-role]"), a.each(b, function() {
            var b = a(this), c = b.data("role").split(/\s*,\s*/);
            c.map(function(c) {
                try {
                    void 0 !== a.fn[c] && a.fn[c].call(b)
                } catch (d) {
                    window.METRO_DEBUG && console.log(d.message, d.stack)
                }
            })
        })
    }
}(jQuery), $(function() {
    "use strict";
    if ($.Metro.initWidgets(), window.METRO_AUTO_REINIT)
        if (window.canObserveMutation) {
            var a, b, c;
            b = {childList: !0, subtree: !0}, c = function(a) {
                a.map(function(a) {
                    if (a.addedNodes)
                        for (var b, c, d, e = 0, f = a.addedNodes.length; f > e; e++)
                            b = $(a.addedNodes[e]), d = b.find("[data-role]"), c = void 0 !== b.data("role") ? $.merge(d, b) : d, c.length && $.each(c, function() {
                                var a = $(this), b = a.data("role").split(/\s*,\s*/);
                                b.map(function(b) {
                                    try {
                                        void 0 !== $.fn[b] && $.fn[b].call(a)
                                    } catch (c) {
                                        window.METRO_DEBUG && console.log(c.message, c.stack)
                                    }
                                })
                            })
                })
            }, a = new MutationObserver(c), a.observe(document, b)
        } else {
            var d, e = $("body").html();
            setInterval(function() {
                d = $("body").html(), e !== d && (e = d, $.Metro.initWidgets())
            }, 100)
        }
}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = 0, c = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++)
                try {
                    d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {
                }
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return!!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {version: d.version, _proto: a.extend({}, d), _childConstructors: []}), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void(i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments)
                }, e = function(a) {
                    return c.prototype[b].apply(this, a)
                };
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void(i[b] = d)
        }), g.prototype = a.widget.extend(h, {widgetEventPrefix: f ? h.widgetEventPrefix || b : b}, i, {constructor: g, namespace: j, widgetName: b, widgetFullName: e}), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; h > g; g++)
            for (d in f[g])
                e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (b[d] = a.isPlainObject(e) ? a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f, h = c.call(arguments, 1), i = this;
            return g ? this.each(function() {
                var c, d = a.data(this, e);
                return"instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            })), i
        }
    }, a.Widget = function() {
    }, a.Widget._childConstructors = [], a.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {remove: function(a) {
                    a.target === d && this.destroy()
                }}), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: a.noop, _getCreateEventData: a.noop, _create: a.noop, _init: a.noop, destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        }, _destroy: a.noop, widget: function() {
            return this.element
        }, option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length)
                return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++)
                        e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                    if (b = d.pop(), 1 === arguments.length)
                        return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g), this
        }, _setOptions: function(a) {
            var b;
            for (b in a)
                this._setOption(b, a[b]);
            return this
        }, _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        }, enable: function() {
            return this._setOptions({disabled: !1})
        }, disable: function() {
            return this._setOptions({disabled: !0})
        }, _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        }, _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        }, _delay: function(a, b) {
            function c() {
                return("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        }, _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }})
        }, _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                }, focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }})
        }, _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f)
                    e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }}, a.each({show: "fadeIn", hide: "fadeOut"}, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {effect: e});
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    });
    a.widget
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    }, easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    }, easeOutQuad: function(a, b, c, d, e) {
        return-d * (b /= e) * (b - 2) + c
    }, easeInOutQuad: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    }, easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    }, easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    }, easeInOutCubic: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    }, easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    }, easeOutQuart: function(a, b, c, d, e) {
        return-d * ((b = b / e - 1) * b * b * b - 1) + c
    }, easeInOutQuart: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    }, easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    }, easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    }, easeInOutQuint: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    }, easeInSine: function(a, b, c, d, e) {
        return-d * Math.cos(b / e * (Math.PI / 2)) + d + c
    }, easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    }, easeInOutSine: function(a, b, c, d, e) {
        return-d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    }, easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    }, easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    }, easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    }, easeInCirc: function(a, b, c, d, e) {
        return-d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    }, easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    }, easeInOutCirc: function(a, b, c, d, e) {
        return(b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    }, easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return-(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
    }, easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (1 == (b /= e))
            return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
    }, easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)
            return c;
        if (2 == (b /= e / 2))
            return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else
            var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
    }, easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    }, easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    }, easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    }, easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    }, easeOutBounce: function(a, b, c, d, e) {
        return(b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    }, easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }}), function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var e, f = b || window.event, g = [].slice.call(arguments, 1), h = 0, i = 0, j = 0, k = 0, l = 0;
        return b = a.event.fix(f), b.type = "mousewheel", f.wheelDelta && (h = f.wheelDelta), f.detail && (h = -1 * f.detail), f.deltaY && (j = -1 * f.deltaY, h = j), f.deltaX && (i = f.deltaX, h = -1 * i), void 0 !== f.wheelDeltaY && (j = f.wheelDeltaY), void 0 !== f.wheelDeltaX && (i = -1 * f.wheelDeltaX), k = Math.abs(h), (!c || c > k) && (c = k), l = Math.max(Math.abs(j), Math.abs(i)), (!d || d > l) && (d = l), e = h > 0 ? "floor" : "ceil", h = Math[e](h / c), i = Math[e](i / d), j = Math[e](j / d), g.unshift(b, h, i, j), (a.event.dispatch || a.event.handle).apply(this, g)
    }
    var c, d, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], f = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (a.event.fixHooks)
        for (var g = e.length; g; )
            a.event.fixHooks[e[--g]] = a.event.mouseHooks;
    a.event.special.mousewheel = {setup: function() {
            if (this.addEventListener)
                for (var a = f.length; a; )
                    this.addEventListener(f[--a], b, !1);
            else
                this.onmousewheel = b
        }, teardown: function() {
            if (this.removeEventListener)
                for (var a = f.length; a; )
                    this.removeEventListener(f[--a], b, !1);
            else
                this.onmousewheel = null
        }}, a.fn.extend({mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }})
}), function() {
    function a(a) {
        var b = Array.prototype.slice.call(document.querySelectorAll(a), 0);
        b.forEach(function(a) {
            var b = a.textContent.replace(/^[\r\n]+/, "").replace(/\s+$/g, "");
            if (/^\S/gm.test(b))
                return void(a.textContent = b);
            for (var c, d, e, f = /^[\t ]+/gm, g = 1e3; c = f.exec(b); )
                e = c[0].length, g > e && (g = e, d = c[0]);
            1e3 != g && (a.textContent = b.replace(new RegExp("^" + d, "gm"), ""))
        })
    }
    document.addEventListener("DOMContentLoaded", function() {
        a("pre code, textarea")
    }, !1)
}();
var hasTouch = "ontouchend"in window, eventTimer, moveDirection = "undefined", startX, startY, deltaX, deltaY, mouseDown = !1;
!function(a) {
    "use strict";
    a.widget("metro.accordion", {version: "3.0.0", options: {closeAny: !1, speed: "fast", onFrameOpen: function() {
                return!0
            }, onFrameOpened: function() {
            }, onFrameClose: function() {
                return!0
            }, onFrameClosed: function() {
            }}, init: function() {
            var b = this, c = this.element;
            c.on("click", ".heading", function(c) {
                var d = a(this).parent();
                return d.hasClass("disabled") ? !1 : (d.hasClass("active") ? b._closeFrame(d) : b._openFrame(d), c.preventDefault(), void c.stopPropagation())
            })
        }, _closeAllFrames: function() {
            var b = this, c = this.element.children(".frame.active");
            a.each(c, function() {
                b._closeFrame(a(this))
            })
        }, _openFrame: function(a) {
            var b = this.options, c = a.children(".content");
            if ("string" == typeof b.onFrameOpen) {
                if (!window[b.onFrameOpen](a))
                    return!1
            } else if (!b.onFrameOpen(a))
                return!1;
            b.closeAny && this._closeAllFrames(), c.slideDown(b.speed), a.addClass("active"), "string" == typeof b.onFrameOpened ? window[b.onFrameOpened](a) : b.onFrameOpened(a)
        }, _closeFrame: function(a) {
            var b = this.options, c = a.children(".content");
            if ("string" == typeof b.onFrameClose) {
                if (!window[b.onFrameClose](a))
                    return!1
            } else if (!b.onFrameClose(a))
                return!1;
            c.slideUp(b.speed, function() {
                a.removeClass("active")
            }), "string" == typeof b.onFrameClosed ? window[b.onFrameClosed](a) : b.onFrameClosed(a)
        }, _create: function() {
            var a = this, b = (this.options, this.element);
            this._setOptionsData(), a.init(), b.data("accordion", this)
        }, _setOptionsData: function() {
            var b = this.options;
            a.each(this.element.data(), function(c, d) {
                if (c in b)
                    try {
                        b[c] = a.parseJSON(d)
                    } catch (e) {
                        b[c] = d
                    }
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.appbar", {version: "3.0.0", options: {}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), this._initBar(), b.data("appbar", this)
        }, _initBar: function() {
            var b = this.element, c = (this.options, a(b).find(".app-bar-pull")), d = a(b).find(".app-bar-menu");
            0 === d.length && c.hide(), c.length > 0 && c.on("click", function(a) {
                d.slideToggle("fast"), a.preventDefault(), a.stopPropagation()
            }), d.length > 0 && a(window).resize(function() {
                var b = window.innerWidth > 0 ? window.innerWidth : screen.width;
                b > 800 ? a(".app-bar:not(.no-responsive-future) .app-bar-menu").show() : a(".app-bar:not(.no-responsive-future) .app-bar-menu").hide()
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.buttonGroup", {version: "3.0.0", options: {groupType: "one-state", buttonStyle: !1, onChange: function() {
                return!0
            }, onChanged: function() {
            }}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), b.hasClass("group-of-buttons") || b.addClass("group-of-buttons");
            for (var d = b.find(".button, .toolbar-button"), e = 0; e < d.length; e++)
                a(d[e]).data("index", e);
            c.buttonStyle !== !1 && d.addClass(c.buttonStyle), b.on("click", ".button, .toolbar-button", function() {
                if ("string" == typeof c.onChange) {
                    if (!window[c.onChange](a(this).data("index"), this))
                        return!1
                } else if (!c.onChange(a(this).data("index"), this))
                    return!1;
                "one-state" === c.groupType ? (d.removeClass("active"), a(this).addClass("active")) : a(this).toggleClass("active"), "string" == typeof c.onChanged ? window[c.onChanged](a(this).data("index"), this) : c.onChanged(a(this).data("index"), this)
            }), b.data("buttonGroup", this)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), window.METRO_CALENDAR_WEEK_START = 0, window.METRO_LOCALES = {en: {months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], buttons: ["Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"]}, fr: {months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre", "Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"], days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], buttons: ["Aujourd'hui", "Effacer", "Annuler", "Aide", "Précedent", "Suivant", "Fin"]}, nl: {months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December", "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"], buttons: ["Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"]}, ua: {months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень", "Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"], days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], buttons: ["Сьогодні", "Очистити", "Скасувати", "Допомога", "Назад", "Вперед", "Готово"]}, ru: {months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], buttons: ["Сегодня", "Очистить", "Отменить", "Помощь", "Назад", "Вперед", "Готово"]}, zhCN: {months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "日", "一", "二", "三", "四", "五", "六"], buttons: ["今日", "清除", "Cancel", "Help", "Prior", "Next", "Finish"]}, it: {months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre", "Gen", " Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"], buttons: ["Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"]}, de: {months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], buttons: ["Heute", "Zurücksetzen", "Abbrechen", "Hilfe", "Früher", "Später", "Fertig"]}, es: {months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"], days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"], buttons: ["Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"]}, pt: {months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"], buttons: ["Hoje", "Limpar", "Cancelar", "Ajuda", "Anterior", "Seguinte", "Terminar"]}, pl: {months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień", "Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"], days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"], buttons: ["Dzisiaj", "Wyczyść", "Anuluj", "Pomoc", "Poprzedni", "Następny", "Koniec"]}, cs: {months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec", "Led", "Ún", "Bř", "Dub", "Kvě", "Če", "Čer", "Srp", "Zá", "Ří", "Li", "Pro"], days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Ne", "Po", "Út", "St", "Čt", "Pá", "So"], buttons: ["Dnes", "Vyčistit", "Zrušit", "Pomoc", "Předešlý", "Další", "Dokončit"]}}, function(a) {
    "use strict";
    a.widget("metro.calendar", {version: "3.0.0", options: {format: "yyyy-mm-dd", multiSelect: !1, startMode: "day", weekStart: window.METRO_CALENDAR_WEEK_START, otherDays: !0, date: new Date, minDate: !1, preset: !1, exclude: !1, buttons: !0, buttonToday: !0, buttonClear: !0, locale: "en", actions: !0, condensedGrid: !1, getDates: function() {
            }, dayClick: function() {
            }}, _year: 0, _month: 0, _day: 0, _today: new Date, _event: "", _mode: "day", _distance: 0, _events: [], _create: function() {
            var b = this, c = this.element, d = this.options;
            a.each(c.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            }), "string" == typeof d.date && (d.date = new Date(d.date)), d.minDate !== !1 && "string" == typeof d.minDate && (d.minDate = new Date(d.minDate)), this.locales = window.METRO_LOCALES, this._year = d.date.getFullYear(), this._distance = d.date.getFullYear() - 4, this._month = d.date.getMonth(), this._day = d.date.getDate(), this._mode = d.startMode, c.data("_storage", []), c.data("_exclude", []), c.hasClass("calendar") || c.addClass("calendar");
            var e, f;
            d.preset && (e = /\s*,\s*/, f = d.preset.split(e), a.each(f, function() {
                void 0 !== new Date(this) && b.setDate(this)
            })), d.exclude && (e = /\s*,\s*/, f = d.exclude.split(e), a.each(f, function() {
                void 0 !== new Date(this) && b.setDateExclude(this)
            })), this._renderCalendar(), c.data("calendar", this)
        }, _renderButtons: function(b) {
            var c, d, e = this.options;
            if (this.options.buttons) {
                var f = e.buttonToday ? "<button class='button calendar-btn-today small-button success'>" + this.locales[e.locale].buttons[0] + "</button>" : "", g = e.buttonClear ? "<button class='button calendar-btn-clear small-button warning'>" + this.locales[e.locale].buttons[1] + "</button>" : "";
                c = a("<div/>").addClass("calendar-row calendar-actions"), d = a("<div/>").addClass("align-center").html(f + g), d.appendTo(c), c.appendTo(b)
            }
        }, _renderMonth: function() {
            var b = this.options, c = this._year, d = this._month, e = (this._day, this._event, 28);
            1 === d && (c % 100 !== 0 && c % 4 === 0 || c % 400 === 0) && (e = 29);
            var f, g, h, i, j, k = ["31", "" + e, "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"], l = k[d], m = new Date(c, d, 1).getDay();
            this.element.html(""), f = a("<div/>").addClass("calendar-grid"), b.condensedGrid && f.addClass("condensed no-border"), g = a("<div/>").addClass("calendar-row no-margin"), a("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(g), a("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-month' href='#'>&#12296;</a>").appendTo(g), a("<div/>").addClass("calendar-cell sel-month align-center").html("<a class='btn-select-month' href='#'>" + this.locales[b.locale].months[d] + " " + c + "</a>").appendTo(g), a("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-month' href='#'>&#12297;</a>").appendTo(g), a("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(g), g.addClass("calendar-header").appendTo(f);
            var n;
            for (g = a("<div/>").addClass("calendar-row week-days"), i = 0; 7 > i; i++)
                b.weekStart ? (n = i + 1, 7 === n && (n = 0), h = a("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(g), j = a("<div/>").html(this.locales[b.locale].days[n + 7]).appendTo(h)) : (h = a("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(g), j = a("<div/>").html(this.locales[b.locale].days[i + 7]).appendTo(h));
            g.addClass("calendar-subheader").appendTo(f);
            var o = this._month - 1;
            0 > o && (o = 11);
            var p = k[o], q = (b.weekStart ? m + 6 : m) % 7, r = "";
            for (g = a("<div/>").addClass("calendar-row"), i = 0; q > i; i++)
                b.otherDays && (r = p - (q - i - 1)), h = a("<div/>").addClass("calendar-cell empty").appendTo(g), j = a("<div/>").addClass("other-day").html(r).appendTo(h), b.otherDays || j.css("visibility", "hidden");
            var s, t, u, v = (b.weekStart ? m + 6 : m) % 7;
            for (i = 1; l >= i; i++)
                v %= 7, 0 === v && (g.appendTo(f), g = a("<div/>").addClass("calendar-row")), h = a("<div/>").addClass("calendar-cell align-center day"), j = a("<div/>").appendTo(h), b.minDate !== !1 && new Date(c, d, i) < b.minDate ? (h.removeClass("day"), j.addClass("other-day"), u = i) : u = "<a href='#'>" + i + "</a>", j.html(u), c === this._today.getFullYear() && d === this._today.getMonth() && this._today.getDate() === i && h.addClass("today"), s = new Date(this._year, this._month, i).format("yyyy-mm-dd"), this.element.data("_storage").indexOf(s) >= 0 && (t = h.find("a"), t.parent().parent().addClass("selected")), this.element.data("_exclude").indexOf(s) >= 0 && (t = h.find("a"), t.parent().parent().addClass("exclude")), h.appendTo(g), v++;
            var w = "";
            for (i = v + 1; 7 >= i; i++)
                b.otherDays && (w = i - v), h = a("<div/>").addClass("calendar-cell empty").appendTo(g), j = a("<div/>").addClass("other-day").html(w).appendTo(h), b.otherDays || j.css("visibility", "hidden");
            g.appendTo(f), this._renderButtons(f), f.appendTo(this.element)
        }, _renderMonths: function() {
            var b, c, d, e, f;
            for (this.element.html(""), b = a("<div/>").addClass("calendar-grid"), this.options.condensedGrid && b.addClass("condensed no-border"), c = a("<div/>").addClass("calendar-row"), a("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(c), a("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-select-year' href='#'>" + this._year + "</a>").appendTo(c), a("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(c), c.addClass("calendar-header").appendTo(b), c = a("<div/>").addClass("calendar-row"), f = 0, e = 0; 12 > e; e++)
                d = a("<div/>").addClass("calendar-cell month-cell align-center month").html("<a href='#' data-month='" + e + "'>" + this.locales[this.options.locale].months[e + 12] + "</a>"), this._month === e && (new Date).getFullYear() === this._year && d.addClass("today"), d.appendTo(c), (f + 1) % 4 === 0 && (c.appendTo(b), c = a("<div/>").addClass("calendar-row")), f += 1;
            this._renderButtons(b), b.appendTo(this.element)
        }, _renderYears: function() {
            var b, c, d, e, f;
            for (this.element.html(""), b = a("<div/>").addClass("calendar-grid"), this.options.condensedGrid && b.addClass("condensed no-border"), c = a("<div/>").addClass("calendar-row cells4"), a("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(c), a("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-none-btn'>" + this._distance + "-" + (this._distance + 11) + "</a>").appendTo(c), a("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(c), c.addClass("calendar-header").appendTo(b), c = a("<div/>").addClass("calendar-row"), f = 0, e = this._distance; e < this._distance + 12; e++)
                d = a("<div/>").addClass("calendar-cell year-cell align-center year").html("<a href='#' data-year='" + e + "'>" + e + "</a>"), (new Date).getFullYear() === e && d.addClass("today"), d.appendTo(c), (f + 1) % 4 === 0 && (c.appendTo(b), c = a("<div/>").addClass("calendar-row")), f += 1;
            this._renderButtons(b), b.appendTo(this.element)
        }, _renderCalendar: function() {
            switch (this._mode) {
                case"year":
                    this._renderYears();
                    break;
                case"month":
                    this._renderMonths();
                    break;
                default:
                    this._renderMonth()
            }
            this._initButtons()
        }, _initButtons: function() {
            var b = this, c = this.options, d = this.element.find(".calendar-grid");
            "day" === this._mode ? (d.find(".btn-select-month").on("click", function(a) {
                a.preventDefault(), a.stopPropagation(), b._mode = "month", b._renderCalendar()
            }), d.find(".btn-previous-month").on("click", function(a) {
                b._event = "eventPrevious", a.preventDefault(), a.stopPropagation(), b._month -= 1, b._month < 0 && (b._year -= 1, b._month = 11), b._renderCalendar()
            }), d.find(".btn-next-month").on("click", function(a) {
                b._event = "eventNext", a.preventDefault(), a.stopPropagation(), b._month += 1, 12 === b._month && (b._year += 1, b._month = 0), b._renderCalendar();

            }), d.find(".btn-previous-year").on("click", function(a) {
                b._event = "eventPrevious", a.preventDefault(), a.stopPropagation(), b._year -= 1, b._renderCalendar()
            }), d.find(".btn-next-year").on("click", function(a) {
                b._event = "eventNext", a.preventDefault(), a.stopPropagation(), b._year += 1, b._renderCalendar()
            }), d.find(".day a").on("click", function(e) {
                if (e.preventDefault(), e.stopPropagation(), a(this).parent().parent().hasClass("exclude"))
                    return!1;
                var f = new Date(b._year, b._month, parseInt(a(this).html())).format(b.options.format, null), g = new Date(b._year, b._month, parseInt(a(this).html()));
                b.options.multiSelect ? (a(this).parent().parent().toggleClass("selected"), a(this).parent().parent().hasClass("selected") ? b._addDate(f) : b._removeDate(f)) : (d.find(".day a").parent().parent().removeClass("selected"), a(this).parent().parent().addClass("selected"), b.element.data("_storage", []), b._addDate(f)), "string" == typeof c.dayClick ? window[c.dayClick](f, g) : c.dayClick(f, g)
            })) : "month" === this._mode ? (d.find(".month a").on("click", function(c) {
                b._event = "eventNext", c.preventDefault(), c.stopPropagation(), b._month = parseInt(a(this).data("month")), b._mode = "day", b._renderCalendar()
            }), d.find(".btn-previous-year").on("click", function(a) {
                b._event = "eventPrevious", a.preventDefault(), a.stopPropagation(), b._year -= 1, b._renderCalendar()
            }), d.find(".btn-next-year").on("click", function(a) {
                b._event = "eventNext", a.preventDefault(), a.stopPropagation(), b._year += 1, b._renderCalendar()
            }), d.find(".btn-select-year").on("click", function(a) {
                b._event = "eventNext", a.preventDefault(), a.stopPropagation(), b._mode = "year", b._renderCalendar()
            })) : (d.find(".year a").on("click", function(c) {
                b._event = "eventNext", c.preventDefault(), c.stopPropagation(), b._year = parseInt(a(this).data("year")), b._mode = "month", b._renderCalendar()
            }), d.find(".btn-previous-year").on("click", function(a) {
                b._event = "eventPrevious", a.preventDefault(), a.stopPropagation(), b._distance -= 10, b._renderCalendar()
            }), d.find(".btn-next-year").on("click", function(a) {
                b._event = "eventNext", a.preventDefault(), a.stopPropagation(), b._distance += 10, b._renderCalendar()
            })), d.find(".calendar-btn-today").on("click", function(a) {
                a.preventDefault(), a.stopPropagation(), b._mode = b.options.startMode, b.options.date = new Date, b._year = b.options.date.getFullYear(), b._month = b.options.date.getMonth(), b._day = b.options.date.getDate(), b._renderCalendar()
            }), d.find(".calendar-btn-clear").on("click", function(a) {
                a.preventDefault(), a.stopPropagation(), b.options.date = new Date, b._year = b.options.date.getFullYear(), b._month = b.options.date.getMonth(), b._day = b.options.date.getDate(), b.element.data("_storage", []), b._renderCalendar()
            })
        }, _addDate: function(a) {
            var b = this.element.data("_storage").indexOf(a);
            0 > b && this.element.data("_storage").push(a)
        }, _removeDate: function(a) {
            var b = this.element.data("_storage").indexOf(a);
            this.element.data("_storage").splice(b, 1)
        }, _addDateExclude: function(a) {
            var b = this.element.data("_exclude").indexOf(a);
            0 > b && this.element.data("_exclude").push(a)
        }, _removeDateExclude: function(a) {
            var b = this.element.data("_exclude").indexOf(a);
            this.element.data("_exclude").splice(b, 1)
        }, setDate: function(a) {
            var b;
            a = new Date(a), b = new Date(a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate()).format("yyyy-mm-dd"), this._addDate(b), this._renderCalendar()
        }, setDateExclude: function(a) {
            var b;
            a = new Date(a), b = new Date(a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate()).format("yyyy-mm-dd"), this._addDateExclude(b), this._renderCalendar()
        }, getDate: function(a) {
            return new Date(void 0 !== a ? this.element.data("_storage")[a] : this.element.data("_storage")[0]).format(this.options.format)
        }, getDates: function() {
            return this.element.data("_storage")
        }, unsetDate: function(a) {
            var b;
            a = new Date(a), b = new Date(a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()).format("yyyy-mm-dd"), this._removeDate(b), this._renderCalendar()
        }, unsetDateExclude: function(a) {
            var b;
            a = new Date(a), b = new Date(a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()).format("yyyy-mm-dd"), this._removeDateExclude(b), this._renderCalendar()
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.carousel", {version: "3.0.0", options: {auto: !0, period: 5e3, duration: 1e3, effect: "slide", effectFunc: "linear", direction: "left", controls: !0, controlNext: !1, controlPrev: !1, markers: !0, stop: !0, width: "100%", height: !1, _slides: {}, _currentIndex: 0, _interval: 0, _outPosition: 0}, _create: function() {
            var b = this, c = this.options, d = this.element;
            a.each(d.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), c._slides = d.find(".slide");
            var e = 0;
            a.each(c._slides, function() {
                var b, c = a(this);
                b = c.outerHeight(), b > e && (e = b)
            }), d.find(".slide").hide(), d.find(".slide:nth-child(1)").show(), d.css({width: c.width, height: c.height ? c.height : e}), c._slides.length <= 1 || (c.markers && this._markers(), c.controls && this._controls(), c.stop && d.on("mouseenter", function() {
                clearInterval(c._interval)
            }).on("mouseleave", function() {
                b.options.auto && b._autoStart()
            }), c.auto && this._autoStart(), d.data("carousel", this))
        }, _autoStart: function() {
            var a = this, b = this.options;
            b._interval = setInterval(function() {
                a._slideTo("left" === b.direction ? "next" : "prior")
            }, b.period)
        }, _slideTo: function(b) {
            var c, d = this.element, e = this.options, f = e._slides[e._currentIndex];
            switch (void 0 === b && (b = "next"), "prior" === b ? (e._currentIndex -= 1, e._currentIndex < 0 && (e._currentIndex = e._slides.length - 1), e._outPosition = this.element.width()) : "next" === b && (e._currentIndex += 1, e._currentIndex >= e._slides.length && (e._currentIndex = 0), e._outPosition = -this.element.width()), c = e._slides[e._currentIndex], this.options.effect) {
                case"switch":
                    this._effectSwitch(f, c);
                    break;
                case"slowdown":
                    this._effectSlowdown(f, c, this.options.duration);
                    break;
                case"fade":
                    this._effectFade(f, c, this.options.duration);
                    break;
                default:
                    this._effectSlide(f, c, this.options.duration)
            }
            d.find(".carousel-bullets a").each(function() {
                var b = a(this).data("num");
                b === e._currentIndex ? a(this).addClass("bullet-on") : a(this).removeClass("bullet-on")
            })
        }, _slideToSlide: function(a) {
            var b = this.options, c = b._slides[b._currentIndex], d = b._slides[a];
            switch (b._outPosition = a > b._currentIndex ? -this.element.width() : this.element.width(), this.options.effect) {
                case"switch":
                    this._effectSwitch(c, d);
                    break;
                case"slowdown":
                    this._effectSlowdown(c, d);
                    break;
                case"fade":
                    this._effectFade(c, d);
                    break;
                default:
                    this._effectSlide(c, d)
            }
            b._currentIndex = a
        }, _controls: function() {
            var b, c, d = this, e = this.element, f = this.options;
            b = a("<span/>").addClass("carousel-switch-next").html("&gt;"), c = a("<span/>").addClass("carousel-switch-prev").html("&lt;"), f.controlNext && b.html(f.controlNext), f.controlPrev && c.html(f.controlPrev), b.appendTo(e), c.appendTo(e), f._slides.length > 1 ? (c.on("click", function() {
                d._slideTo("prior")
            }), b.on("click", function() {
                d._slideTo("next")
            })) : (b.hide(), c.hide())
        }, _markers: function() {
            var b, c, d, e = this, f = this.options;
            for (b = a('<div class="carousel-bullets" />'), d = 0; d < f._slides.length; d++)
                c = a('<a class="carousel-bullet" href="javascript:void(0)" data-num="' + d + '"></a>'), 0 === d && c.addClass("bullet-on"), c.appendTo(b);
            b.find("a").on("click", function(c) {
                var d = a(this), g = d.data("num");
                return b.find("a").removeClass("bullet-on"), d.addClass("bullet-on"), g === f._currentIndex ? !1 : (e._slideToSlide(g), c.preventDefault(), void c.stopPropagation())
            }), b.appendTo(this.element)
        }, _effectSwitch: function(b, c) {
            a(b).hide(), a(c).css({left: 0}).show(), this.element.css({height: a(c).outerHeight()})
        }, _effectSlide: function(b, c) {
            var d = this.options;
            a(b).animate({left: d._outPosition}, d.duration, d.effectFunc), a(c).css("left", -1 * d._outPosition).show(), this.element.css({height: a(c).outerHeight()}), a(c).animate({left: 0}, d.duration, d.effectFunc)
        }, _effectSlowdown: function(b, c) {
            var d = this.options, e = {duration: d.duration, easing: "doubleSqrt"};
            a.easing.doubleSqrt = function(a) {
                return Math.sqrt(Math.sqrt(a))
            }, a(b).animate({left: d._outPosition}, e), a(c).css("left", -1 * d._outPosition).show(), this.element.css({height: a(c).outerHeight()}), a(c).animate({left: 0}, e)
        }, _effectFade: function(b, c) {
            var d = this.options;
            a(b).fadeOut(d.duration), a(c).css({left: 0}).fadeIn(d.duration), this.element.css({height: a(c).outerHeight()})
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.countdown", {version: "3.0.0", options: {stop: !1, days: !1, hours: !1, minutes: !1, seconds: !1, backgroundColor: "bg-cyan", digitColor: "fg-white", dividerColor: "fg-dark", labelColor: "fg-grayLight", labels: {days: "days", hours: "hours", minutes: "mins", seconds: "secs"}, onTick: function() {
            }, onStop: function() {
            }}, _interval: 0, _interval2: 0, _alarmOn: void 0, _create: function() {
            var b = this, c = this.element, d = this.options;
            a.each(c.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            }), this._alarmOn = new Date, d.stop !== !1 && (this._alarmOn = new Date(d.stop));
            var e = 864e5, f = 36e5, g = 6e4, h = 1e3;
            d.days !== !1 && ("object" == typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()), this._alarmOn = this._alarmOn + d.days * e), d.hours !== !1 && ("object" == typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()), this._alarmOn = this._alarmOn + d.hours * f), d.minutes !== !1 && ("object" == typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()), this._alarmOn = this._alarmOn + d.minutes * g), d.seconds !== !1 && ("object" == typeof this._alarmOn && (this._alarmOn = this._alarmOn.getTime()), this._alarmOn = this._alarmOn + d.seconds * h), this._createDigits(), c.find(".digit").text("0"), b._tick(), c.data("countdown", this)
        }, _createDigits: function() {
            var b, c, d = this.element, e = this.options, f = ["days", "hours", "minutes", "seconds"];
            f.map(function(f) {
                b = a("<div/>").addClass("part " + f).attr("data-day-text", e.labels[f]).appendTo(d), a("<div/>").addClass("digit").appendTo(b), a("<div/>").addClass("digit").appendTo(b), e.labelColor.isColor() ? b.css({color: e.labelColor}) : b.addClass(e.labelColor), e.backgroundColor.isColor() ? b.find(".digit").css({background: e.backgroundColor}) : b.find(".digit").addClass(e.backgroundColor), e.digitColor.isColor() ? b.find(".digit").css({color: e.digitColor}) : b.find(".digit").addClass(e.digitColor), "seconds" !== f && (c = a("<div/>").addClass("divider").text(":").appendTo(d), e.dividerColor.isColor() ? c.css({color: e.dividerColor}) : c.addClass(e.dividerColor))
            })
        }, _blink: function() {
            this.element.toggleClass("tick")
        }, _tick: function() {
            var a, b, c, d, e, f = this, g = this.options, h = this.element, i = 86400, j = 3600, k = 60;
            this._interval2 = setInterval(function() {
                f._blink()
            }, 500), this._interval = setInterval(function() {
                a = Math.floor((f._alarmOn - new Date) / 1e3), 0 > a && (a = 0), b = Math.floor(a / i), a -= b * i, f._update("days", b), 0 === b && h.find(".part.days").addClass("disabled"), c = Math.floor(a / j), a -= c * j, f._update("hours", c), 0 === b && 0 === c && h.find(".part.hours").addClass("disabled"), d = Math.floor(a / k), a -= d * k, f._update("minutes", d), 0 === b && 0 === c && 0 === d && h.find(".part.minutes").addClass("disabled"), e = a, f._update("seconds", e), "string" == typeof g.onTick ? window[g.onTick](b, c, d, e) : g.onTick(b, c, d, e), 0 === b && 0 === c && 0 === d && 0 === e && (h.find(".part").addClass("disabled"), "string" == typeof g.onStop ? window[g.onStop]() : g.onStop(), f._stop("all"), f._trigger("alarm"), clearInterval(f._interval))
            }, 1e3)
        }, _update: function(a, b) {
            var c, d, e = this.element, f = Math.floor(b / 10) % 10, g = b % 10;
            c = e.find("." + a + " .digit:eq(0)"), d = e.find("." + a + " .digit:eq(1)"), g !== parseInt(d.text()) && (d.toggleClass("scaleIn"), setTimeout(function() {
                d.text(g).toggleClass("scaleIn")
            }, 500)), f !== parseInt(c.text()) && (c.toggleClass("scaleIn"), setTimeout(function() {
                c.text(f).toggleClass("scaleIn")
            }, 500))
        }, _stop: function() {
            clearInterval(this._interval), clearInterval(this._interval2)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.datatable", {version: "3.0.0", options: {}, _create: function() {
            var b = this.element, c = this.options;
            if (a.each(b.data(), function(b, d) {
                try {
                    c[b] = a.parseJSON(d)
                } catch (e) {
                    c[b] = d
                }
            }), jQuery().dataTable)
                try {
                    b.dataTable(c)
                } catch (d) {
                }
            else
                alert("dataTable plugin required");
            b.data("datatable", this)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.datepicker", {version: "3.0.0", options: {format: "yyyy.mm.dd", preset: !1, minDate: !1, effect: "fade", position: "bottom", locale: window.METRO_CURRENT_LOCALE, weekStart: window.METRO_CALENDAR_WEEK_START, otherDays: !1, exclude: !1, buttons: !1, buttonToday: !0, buttonClear: !0, condensedGrid: !1, selected: function() {
            }}, _calendar: void 0, _create: function() {
            var b = this, c = this.element, d = this.options, e = c.children("input"), f = c.children("button");
            a.each(c.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            }), this._createCalendar(), e.attr("readonly", !0), f.attr("type", "button"), f.on("click", function(a) {
                a.stopPropagation(), "none" === b._calendar.css("display") ? b._show() : b._hide()
            }), c.on("click", function(a) {
                a.stopPropagation(), "none" === b._calendar.css("display") ? b._show() : b._hide()
            }), a("html").on("click", function() {
                a(".calendar-dropdown").hide()
            }), c.data("datepicker", this)
        }, _createCalendar: function() {
            var b, c = this, d = this.element, e = this.options;
            switch (b = a("<div/>").css( {
                    position: "absolute", display: "none", "max-width": 220, "z-index": 1e3}).addClass("calendar calendar-dropdown").appendTo(d), b.calendar({multiSelect: !1, format: e.format, buttons: !1, buttonToday: !1, buttonClear: !1, locale: e.locale, otherDays: e.otherDays, weekStart: e.weekStart, condensedGrid: e.condensedGrid, exclude: e.exclude, date: e.preset ? e.preset : new Date, minDate: e.minDate, dayClick: function(a, d) {
                        b.calendar("setDate", d), c.element.children("input[type=text]").val(a), c.options.selected(a, d), c._hide()
                    }}), e.preset !== !1 && (b.calendar("setDate", e.preset), d.find("input, .datepicker-output").val(b.calendar("getDate"))), this.options.position){case"top":
                    b.css({top: 0 - b.height(), left: 0});
                    break;
                default:
                    b.css({top: "100%", left: 0})
            }
            this._calendar = b
        }, _show: function() {
            "slide" === this.options.effect ? (a(".calendar-dropdown").slideUp("fast"), this._calendar.slideDown("fast")) : "fade" === this.options.effect ? (a(".calendar-dropdown").fadeOut("fast"), this._calendar.fadeIn("fast")) : (a(".calendar-dropdown").hide(), this._calendar.show())
        }, _hide: function() {
            "slide" === this.options.effect ? this._calendar.slideUp("fast") : "fade" === this.options.effect ? this._calendar.fadeOut("fast") : this._calendar.hide()
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.dialog", {version: "3.0.0", options: {modal: !1, overlay: !1, overlayColor: "default", type: "default", place: "center", position: "default", content: !1, hide: !1, width: "auto", height: "auto", background: "default", color: "default", closeButton: !1, windowsStyle: !1, _interval: void 0, _overlay: void 0, onDialogOpen: function() {
            }, onDialogClose: function() {
            }}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), c.overlay && this._createOverlay(), this._createDialog(), b.data("dialog", this)
        }, _createOverlay: function() {
            var b = (this.element, this.options), c = a("body").find(".dialog-overlay");
            0 === c.length && (c = a("<div/>").addClass("dialog-overlay")), b.overlayColor && (b.overlayColor.isColor() ? c.css({background: b.overlayColor}) : c.addClass(b.overlayColor)), b._overlay = c
        }, _createDialog: function() {
            var b = this, c = this.element, d = this.options;
            c.addClass("dialog"), "default" !== d.type && c.addClass(d.type), d.windowsStyle && (d.width = "auto", c.css({left: 0, right: 0})), "default" !== d.background && (d.background.isColor() ? c.css({background: d.background}) : c.addClass(d.background)), "default" !== d.color && (d.color.isColor() ? c.css({color: d.color}) : c.addClass(d.color)), c.css({width: d.width, height: d.height}), d.closeButton && a("<span/>").addClass("dialog-close-button").appendTo(c).on("click", function() {
                b.close()
            }), c.hide()
        }, _setPosition: function() {
            var b = this.element, c = this.options, d = b.width(), e = b.height();
            b.css({left: c.windowsStyle === !1 ? (a(window).width() - d) / 2 : 0, top: (a(window).height() - e) / 2})
        }, open: function() {
            var a, b = this, c = this.element, d = this.options;
            this._setPosition(), c.data("opened", !0), d.overlay && (a = d._overlay, a.appendTo("body").show()), c.fadeIn(), "string" == typeof d.onDialogOpen ? window[d.onDialogOpen](c) : d.onDialogOpen(c), d.hide && parseInt(d.hide) > 0 && (d._interval = setTimeout(function() {
                b.close()
            }, parseInt(d.hide)))
        }, close: function() {
            var b = this.element, c = this.options;
            clearInterval(c._interval), c.overlay && a("body").find(".dialog-overlay").remove(), b.data("opened", !1), b.fadeOut(), "string" == typeof c.onDialogClose ? window[c.onDialogClose](b) : c.onDialogClose(b)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.dropdown", {version: "3.0.0", options: {effect: window.METRO_SHOW_TYPE, toggleElement: !1, noClose: !1}, _create: function() {
            var b, c = this, d = this.element, e = this.options, f = this.element, g = this.name, h = this.element.parent();
            a.each(d.data(), function(b, c) {
                if (b in e)
                    try {
                        e[b] = a.parseJSON(c)
                    } catch (d) {
                        e[b] = c
                    }
            }), b = e.toggleElement ? a(e.toggleElement) : h.children(h.children(".dropdown-toggle").length > 0 ? ".dropdown-toggle" : "a:nth-child(1"), void 0 !== METRO_SHOW_TYPE && (this.options.effect = METRO_SHOW_TYPE), b.on("click." + g, function(b) {
                if (h.siblings(h[0].tagName).removeClass("active-container"), a(".active-container").removeClass("active-container"), "block" !== f.css("display") || f.hasClass("keep-open")) {
                    if (a("[data-role=dropdown]").each(function(b, d) {
                        f.parents("[data-role=dropdown]").is(d) || a(d).hasClass("keep-open") || "block" !== a(d).css("display") || c._close(d)
                    }), f.hasClass("horizontal")) {
                        f.css({visibility: "hidden", display: "block"});
                        var d = a(f.children("li")[0]).outerWidth();
                        f.css({visibility: "visible", display: "none"});
                        var e = f.children("li").length * d + (f.children("li").length - 1);
                        f.css("width", e)
                    }
                    c._open(f), h.addClass("active-container")
                } else
                    c._close(f);
                b.preventDefault(), b.stopPropagation()
            }), e.noClose === !0 && d.on("click", function(a) {
                a.stopPropagation()
            }), a(f).find("li.disabled a").on("click", function(a) {
                a.preventDefault()
            }), a(document).on("click", function() {
                a("[data-role=dropdown]").each(function(b, c) {
                    a(c).hasClass("keep-open") || "block" !== a(c).css("display") || a(c).hide()
                })
            }), d.data("dropdown", this)
        }, _open: function(b) {
            switch (this.options.effect) {
                case"fade":
                    a(b).fadeIn("fast");
                    break;
                case"slide":
                    a(b).slideDown("fast");
                    break;
                default:
                    a(b).show()
            }
            this._trigger("onOpen", null, b)
        }, _close: function(b) {
            switch (this.options.effect) {
                case"fade":
                    a(b).fadeOut("fast");
                    break;
                case"slide":
                    a(b).slideUp("fast");
                    break;
                default:
                    a(b).hide()
            }
            this._trigger("onClose", null, b)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.fitImage", {version: "3.0.0", options: {shadow: !1, overlay: !1, type: "default", frameColor: "default", format: "hd"}, _create: function() {
            var b, c, d, e, f, g = this.element, h = this.options, i = g.parent(), j = g.attr("src");
            a.each(g.data(), function(b, c) {
                if (b in h)
                    try {
                        h[b] = a.parseJSON(c)
                    } catch (d) {
                        h[b] = c
                    }
            }), a("<img/>").attr("src", j).load(function() {
                b = this.width, c = this.height
            }).remove();
            var k = a("<div/>").addClass("image-container").css("width", "100%").appendTo(i), l = a("<div/>").addClass("frame").appendTo(k);
            switch (d = l.innerWidth(), e = l.innerHeight(), h.format) {
                case"sd":
                    e = 3 * d / 4;
                    break;
                case"square":
                    e = d;
                    break;
                case"cycle":
                    e = d;
                    break;
                case"fill-h":
                    e = "100%", k.css("height", "100%");
                    break;
                case"fill":
                    e = "100%", k.css("height", "100%");
                    break;
                default:
                    e = 9 * d / 16
            }
            if (f = a("<div/>").css({width: "100%", height: e, "background-image": "url(" + j + ")", "background-size": "cover", "background-repeat": "no-repeat", "border-radius": "cycle" === h.format ? "50%" : "0"}), "default" !== h.frameColor && (h.frameColor.isUrl() ? l.css("background-color", h.frameColor) : l.addClass(h.frameColor)), h.overlay !== !1) {
                a("<div/>").addClass("image-overlay").html(h.overlay).appendTo(k)
            }
            switch (h.shadow !== !1 && k.addClass("block-shadow"), f.appendTo(l), h.type) {
                case"diamond":
                    k.addClass("diamond"), f.addClass("image-replacer");
                    break;
                case"bordered":
                    k.addClass("bordered");
                    break;
                case"polaroid":
                    k.addClass("polaroid");
                    break;
                case"handing":
                    k.addClass("handing");
                    break;
                case"handing-ani":
                    k.addClass("handing ani");
                    break;
                case"handing-ani-hover":
                    k.addClass("handing ani-hover")
            }
            k.addClass("image-format-" + h.format), g.remove()
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.hint", {version: "3.0.0", options: {hintPosition: "auto", hintBackground: "#FFFCC0", hintColor: "#000000", hintMaxSize: 200, hintMode: "default", _hint: void 0}, _create: function() {
            var b = this, c = (this.element, this.options);
            this.element.on("mouseenter", function(d) {
                a(".hint, .hint2").remove(), b.createHint(), c._hint.show(), d.preventDefault()
            }), this.element.on("mouseleave", function(a) {
                c._hint.hide().remove(), a.preventDefault()
            })
        }, createHint: function() {
            var b, c = this.element, d = c.data("hint").split("|"), e = this.options;
            if (a.each(c.data(), function(b, c) {
                if (b in e)
                    try {
                        e[b] = a.parseJSON(c)
                    } catch (d) {
                        e[b] = c
                    }
            }), "TD" === c[0].tagName || "TH" === c[0].tagName) {
                var f = a("<div/>").css("display", "inline-block").html(c.html());
                c.html(f), c = f
            }
            var g = d.length > 1 ? d[0] : !1, h = d.length > 1 ? d[1] : d[0];
            b = a("<div/>").appendTo("body"), b.addClass(2 === e.hintMode ? "hint2" : "hint"), g && a("<div/>").addClass("hint-title").html(g).appendTo(b), a("<div/>").addClass("hint-text").html(h).appendTo(b), b.addClass(e.position), e.hintShadow && b.addClass("shadow"), e.hintBackground && (e.hintBackground.isColor() ? b.css("background-color", e.hintBackground) : b.addClass(e.hintBackground)), e.hintColor && (e.hintColor.isColor() ? b.css("color", e.hintColor) : b.addClass(e.hintColor)), e.hintMaxSize > 0 && b.css({"max-width": e.hintMaxSize}), "top" === e.hintPosition ? (b.addClass("top"), b.css({top: c.offset().top - a(window).scrollTop() - b.outerHeight() - 20, left: 2 === e.hintMode ? c.offset().left + c.outerWidth() / 2 - b.outerWidth() / 2 - a(window).scrollLeft() : c.offset().left - a(window).scrollLeft()})) : "right" === e.hintPosition ? (b.addClass("right"), b.css({top: 2 === e.hintMode ? c.offset().top + c.outerHeight() / 2 - b.outerHeight() / 2 - a(window).scrollTop() - 10 : c.offset().top - 10 - a(window).scrollTop(), left: c.offset().left + c.outerWidth() + 15 - a(window).scrollLeft()})) : "left" === e.hintPosition ? (b.addClass("left"), b.css({top: 2 === e.hintMode ? c.offset().top + c.outerHeight() / 2 - b.outerHeight() / 2 - a(window).scrollTop() - 10 : c.offset().top - 10 - a(window).scrollTop(), left: c.offset().left - b.outerWidth() - 10 - a(window).scrollLeft()})) : (b.addClass("bottom"), b.css({top: c.offset().top - a(window).scrollTop() + c.outerHeight(), left: 2 === e.hintMode ? c.offset().left + c.outerWidth() / 2 - b.outerWidth() / 2 - a(window).scrollLeft() : c.offset().left - a(window).scrollLeft()}), console.log(c.offset().left)), e._hint = b
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.input", {version: "3.0.0", options: {showLabelOnValue: !1}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), b.hasClass("file") && this._createInputFile(), b.hasClass("text") && this._createInputText(), b.hasClass("password") && this._createInputText(), b.hasClass("select") && this._createInputSelect(), b.hasClass("textarea") && this._createInputTextarea(), b.hasClass("modern") && this._createInputModern(), b.data("input", this)
        }, _createInputModern: function() {
            var a = this.element, b = a.find("input"), c = a.find(".placeholder");
            b.on("blur", function() {
                c.css("" !== b.val() ? {display: "none"} : {display: "block"})
            })
        }, _createInputFile: function() {
            var b, c, d, e = this.element;
            b = a("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>"), c = e.children(".button"), d = e.children('input[type="file"]'), d.css("z-index", 0), b.insertAfter(d), d.attr("tabindex", "-1"), c.attr("type", "button"), d.on("change", function() {
                var c = a(this).val();
                "" !== c && (b.val(c.replace(/.+[\\\/]/, "")), b.attr("title", c.replace(/.+[\\\/]/, "")))
            }), e.on("click", ".button, .input-file-wrapper", function() {
                d.trigger("click")
            })
        }, _createInputText: function() {
            var b = this.element, c = b.find(".helper-button.clear"), d = b.find(".helper-button.reveal"), e = b.find("input"), f = b.find(".helper-button"), g = b.find(".button"), h = 0;
            a.each(g, function() {
                var b = a(this);
                h += b.outerWidth()
            }), e.css({"padding-right": h + 5}), f.attr("tabindex", -1).attr("type", "button"), c && c.on("click", function() {
                e.val("").focus()
            }), d && b.hasClass("password") && d.on("mousedown", function() {
                e.attr("type", "text")
            }).on("mouseup", function() {
                e.attr("type", "password").focus()
            })
        }, _createInputSelect: function() {
        }, _createInputTextarea: function() {
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.listview", {version: "3.0.0", options: {onExpand: function() {
            }, onCollapse: function() {
            }, onActivate: function() {
            }}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), this._initList(), this._createEvents(), b.data("listview", this)
        }, _initList: function() {
            var b = this.element, c = (this.options, b.find(".list-group"));
            a.each(c, function() {
                var b = a(this);
                b.hasClass("collapsed") && b.find(".list-group-content").hide()
            })
        }, _createEvents: function() {
            var b = this.element, c = this.options;
            b.on("click", ".list-group-toggle", function(b) {
                var d = a(this), e = d.parent();
                d.parent().hasClass("keep-open") || (e.toggleClass("collapsed"), e.hasClass("collapsed") ? (d.siblings(".list-group-content").slideUp("fast"), "string" == typeof c.onCollapse ? window[c.onCollapse](e) : c.onCollapse(e)) : (d.siblings(".list-group-content").slideDown("fast"), "string" == typeof c.onExpand ? window[c.onExpand](e) : c.onExpand(e)), b.preventDefault(), b.stopPropagation())
            }), b.on("click", ".list", function(d) {
                var e = a(this);
                b.find(".list").removeClass("active"), e.addClass("active"), "string" == typeof c.onActivate ? window[c.onActivate](e) : c.onActivate(e), d.preventDefault(), d.stopPropagation()
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    var b = !1, c = [], d = {_container: null, _notify: null, _timer: null, version: "3.0.0", options: {icon: "", caption: "", content: "", shadow: !0, width: "auto", height: "auto", style: !1, position: "right", timeout: 3e3, keepOpen: !1, type: "default"}, init: function(b) {
            return this.options = a.extend({}, this.options, b), this._build(), this
        }, _build: function() {
            var d = this, e = this.options;
            if (this._container = b || a("<div/>").addClass("notify-container").appendTo("body"), b = this._container, "" === e.content || void 0 === e.content)
                return!1;
            if (this._notify = a("<div/>").addClass("notify"), "default" !== e.type && this._notify.addClass(e.type), e.shadow && this._notify.addClass("shadow"), e.style && void 0 !== e.style.background && this._notify.css("background-color", e.style.background), e.style && void 0 !== e.style.color && this._notify.css("color", e.style.color), "" !== e.icon) {
                a(e.icon).addClass("notify-icon").appendTo(this._notify)
            }
            "" !== e.caption && void 0 !== e.caption && a("<div/>").addClass("notify-title").html(e.caption).appendTo(this._notify), "" !== e.content && void 0 !== e.content && a("<div/>").addClass("notify-text").html(e.content).appendTo(this._notify);
            var f = a("<span/>").addClass("notify-closer").appendTo(this._notify);
            f.on("click", function() {
                d.close(0)
            }), "auto" !== e.width && this._notify.css("min-width", e.width), "auto" !== e.height && this._notify.css("min-height", e.height), this._notify.hide().appendTo(this._container).fadeIn("slow"), c.push(this._notify), e.keepOpen || this.close(e.timeout)
        }, close: function(a) {
            var b = this;
            return void 0 === a ? this._hide() : (setTimeout(function() {
                b._hide()
            }, a), this)
        }, _hide: function() {
            var b = this;
            return void 0 !== this._notify ? (this._notify.fadeOut("slow", function() {
                a(this).remove(), c.splice(c.indexOf(b._notify), 1)
            }), this) : !1
        }, closeAll: function() {
            return c.forEach(function(a) {
                a.hide("slow", function() {
                    a.remove(), c.splice(c.indexOf(a), 1)
                })
            }), this
        }};
    a.Notify = function(a) {
        return Object.create(d).init(a)
    }, a.Notify.show = function(b, c, d) {
        return a.Notify({content: b, caption: c, icon: d})
    }
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.panel", {version: "3.0.0", options: {}, _create: function() {
            var b = this.element, c = this.options;
            if (a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), b.hasClass("collapsible") || b.addClass("collapsible"), b.hasClass("collapsible")) {
                var d = b.children(".heading"), e = b.children(".content");
                d.on("click", function() {
                    b.hasClass("collapsed") ? e.slideDown("fast", function() {
                        b.removeClass("collapsed")
                    }) : e.slideUp("fast", function() {
                        b.addClass("collapsed")
                    })
                })
            }
            b.data("panel", this)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.widget", {version: "3.0.0", options: {someValue: null}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), b.data("widget", this)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.popover", {version: "3.0.0", options: {popoverText: "", popoverTimeout: 3e3, popoverPosition: "top", popoverBackground: "bg-cyan", popoverColor: "fg-white", popoverMode: "none", popoverShadow: !0}, popover: {}, _create: function() {
            var a = this.element;
            this.createPopover(), a.data("popover", this)
        }, createPopover: function() {
            var b, c = this, d = this.options;
            b = this.element, a.each(b.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            });
            var e, f;
            switch (e = a("<div/>").addClass("popover").appendTo("body").hide(), a("<div/>").appendTo(e), d.popoverShadow && e.addClass("popover-shadow"), d.popoverBackground && ("#" === d.popoverBackground[0] ? e.css("background-color", d.popoverBackground) : e.addClass(d.popoverBackground)), d.popoverColor && ("#" === d.popoverColor[0] ? e.css("color", d.popoverColor) : e.addClass(d.popoverColor)), d.popoverPosition) {
                case"left":
                    f = "marker-on-right";
                    break;
                case"right":
                    f = "marker-on-left";
                    break;
                case"bottom":
                    f = "marker-on-top";
                    break;
                default:
                    f = "marker-on-bottom"
            }
            e.css({position: "fixed"}), e.addClass(f), this.popover = e, this.setText(d.popoverText), b.on(d.popoverMode, function() {
                e.data("visible") || c.show()
            }), a(window).scroll(function() {
                c.popover.data("visible") && c.setPosition()
            })
        }, setPosition: function() {
            var b = this.options, c = this.popover, d = this.element;
            return"top" === b.popoverPosition ? c.css({top: d.offset().top - a(window).scrollTop() - c.outerHeight() - 10, left: d.offset().left + d.outerWidth() / 2 - c.outerWidth() / 2 - a(window).scrollLeft()}) : "bottom" === b.popoverPosition ? c.css({top: d.offset().top - a(window).scrollTop() + d.outerHeight() + 10, left: d.offset().left + d.outerWidth() / 2 - c.outerWidth() / 2 - a(window).scrollLeft()}) : "right" === b.popoverPosition ? c.css({top: d.offset().top + d.outerHeight() / 2 - c.outerHeight() / 2 - a(window).scrollTop(), left: d.offset().left + d.outerWidth() - a(window).scrollLeft() + 10}) : "left" === b.popoverPosition && c.css({top: d.offset().top + d.outerHeight() / 2 - c.outerHeight() / 2 - a(window).scrollTop(), left: d.offset().left - c.outerWidth() - a(window).scrollLeft() - 10}), this
        }, setText: function(a) {
            this.popover.children("div").html(a)
        }, show: function() {
            var a = this.options, b = this.popover;
            this.setPosition(), b.fadeIn(function() {
                b.data("visible", !0), setTimeout(function() {
                    b.fadeOut(function() {
                        b.data("visible", !1)
                    })
                }, a.popoverTimeout)
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.preloader", {version: "3.0.0", options: {type: "ring", style: "light"}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), this._createStructure(), b.data("preloader", this)
        }, _createRing: function() {
            {
                var b, c, d, e = this.element;
                this.options
            }
            for (b = 0; 5 > b; b++)
                c = a("<div/>").addClass("wrap").appendTo(e), d = a("<div/>").addClass("circle").appendTo(c)
        }, _createMetro: function() {
            {
                var b, c, d = this.element;
                this.options
            }
            for (b = 0; 5 > b; b++)
                c = a("<div/>").addClass("circle").appendTo(d)
        }, _createStructure: function() {
            var a = this.element, b = this.options;
            switch (a.addClass("preloader-" + b.type), "light" !== b.style && a.addClass(b.style + "-style"), a.html(""), b.type) {
                case"ring":
                    this._createRing();
                    break;
                case"metro":
                    this._createMetro()
            }
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.presenter", {version: "3.0.0", options: {someValue: null}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d);

                    } catch (e) {
                        c[b] = d
                    }
            }), b.data("presenter", this)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.progressBar", {version: "3.0.0", options: {color: "default", colors: !1, value: 0}, colorsDim: {}, _create: function() {
            var b = this, c = this.element, d = this.options, e = c.children(".bar:last-child");
            if (a.each(c.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            }), 0 === e.length && (e = a("<div/>").addClass("bar").appendTo(c)), d.colors) {
                var f = 0;
                a.each(d.colors, function(a, c) {
                    b.colorsDim[a] = [f, c], f = c + 1
                })
            }
            this.progress(d.value), this.color(d.color), c.data("progressBar", this)
        }, color: function(a) {
            var b = this.element, c = this.options, d = b.children(".bar:last-child"), e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
            e ? d.css({"background-color": a}) : d.removeClass(function(a, b) {
                return(b.match(/(^|\s)bg-\S+/g) || []).join(" ")
            }).addClass(a), c.color = a
        }, progress: function(b) {
            if (void 0 === b)
                return this.options.value;
            var c = this.element, d = this.options, e = this.colorsDim, f = c.children(".bar:last-child"), g = this;
            parseInt(b) < 0 || (d.colors && a.each(e, function(a, c) {
                return b >= c[0] && b <= c[1] ? (g.color(a), !0) : void 0
            }), d.value = b, f.animate({width: d.value + "%"}, 100))
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.rating", {version: "3.0.0", options: {stars: 5, value: 0, half: !0, "static": !1, showScore: !0, scoreTitle: "Current: ", size: "default", colorRate: !1, onRate: function() {
                return!0
            }, onRated: function() {
            }}, _value: 0, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), this._value = parseFloat(c.value), this._createRating(), this._createEvents(), this._setValue(this._value), this._setScore(this._value), b.data("rating", this)
        }, _createRating: function() {
            var b, c, d, e = this.element, f = this.options;
            switch (e.hasClass("rating") || e.addClass("rating"), f.size) {
                case"small":
                    e.addClass("small");
                    break;
                case"large":
                    e.addClass("large")
            }
            for (f["static"] && e.addClass("static"), b = 0; b < f.stars; b++)
                c = a("<span/>").addClass("star").appendTo(e).data("star-value", b + 1);
            f.showScore && (d = a("<span/>").addClass("score").appendTo(e))
        }, _createEvents: function() {
            var b, c = this, d = this.element, e = this.options;
            b = d.find(".star"), b.on("click", function(b) {
                if ("string" == typeof e.onRate) {
                    if (!window[e.onRate](a(this).data("star-value"), this, c))
                        return!1
                } else if (!e.onRate(a(this).data("star-value"), this, c))
                    return!1;
                "string" == typeof e.onRated ? window[e.onRated](a(this).data("star-value"), this, c) : e.onRated(a(this).data("star-value"), this, c), c._value = a(this).data("star-value"), c._setValue(), c._setScore(), b.preventDefault(), b.stopPropagation()
            })
        }, _setValue: function() {
            var b, c = this.options, d = this.element;
            if (c.stars) {
                b = d.find(".star").removeClass("on half");
                var e = Math.floor(this._value) - 1, f = 10 * (this._value - Math.floor(this._value)) > 0;
                a(b[e]).addClass("on"), a(b[e]).prevAll().addClass("on"), f && a(b[e]).next().addClass("on half")
            }
            c.colorRate && (d.removeClass("poor regular good"), this._value <= 2 ? d.addClass("poor") : this._value > 2 && this._value <= 4 ? d.addClass("regular") : this._value > 4 && d.addClass("good"))
        }, _setScore: function() {
            var a = this._value, b = this.element, c = this.options;
            void 0 !== a && b.find(".score").html(c.scoreTitle + a)
        }, value: function(a) {
            return void 0 === a ? this._value : (this._setValue(), void this._setScore())
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.select", {version: "3.0.0", options: {}, _create: function() {
            var b = this.element, c = this.options, d = ["templateResult", "templateSelection", "matcher", "initSelection", "query"];
            if (a.each(b.data(), function(b, d) {
                try {
                    c[b] = a.parseJSON(d)
                } catch (e) {
                    c[b] = d
                }
            }), d.map(function(a) {
                void 0 !== c[a] && (c[a] = window[c[a]])
            }), void 0 !== c.dropdownParent && (c.dropdownParent = a(c.dropdownParent)), jQuery().select2)
                try {
                    b.find("select").select2(c)
                } catch (e) {
                }
            else
                alert("Select2 plugin required");
            b.data("select", this)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.slider", {version: "3.0.0", options: {position: 0, accuracy: 0, color: "default", completeColor: "default", markerColor: "default", colors: !1, showHint: !1, permanentHint: !1, hintPosition: "top", vertical: !1, min: 0, max: 100, animate: !0, minValue: 0, maxValue: 100, currValue: 0, returnType: "value", target: !1, onChange: function() {
            }, onChanged: function() {
            }, _slider: {vertical: !1, offset: 0, length: 0, marker: 0, ppp: 0, start: 0, stop: 0}}, _create: function() {
            var b = this, c = this.element, d = this.options, e = d._slider;
            a.each(c.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            }), d.accuracy = d.accuracy < 0 ? 0 : d.accuracy, d.min = d.min < 0 ? 0 : d.min, d.min = d.min > d.max ? d.max : d.min, d.max = d.max > 100 ? 100 : d.max, d.max = d.max < d.min ? d.min : d.max, d.position = this._correctValue(c.data("position") > d.min ? c.data("position") > d.max ? d.max : c.data("position") : d.min), d.colors = d.colors ? d.colors.split(",") : !1, e.vertical = d.vertical, d.vertical && !c.hasClass("vertical") && c.addClass("vertical"), d.permanentHint && !c.hasClass("permanent-hint") && c.addClass("permanent-hint"), d.vertical || "bottom" !== d.hintPosition || c.addClass("hint-bottom"), d.vertical && "left" === d.hintPosition && c.addClass("hint-left"), this._createSlider(), this._initPoints(), this._placeMarker(d.position), addTouchEvents(c[0]), c.children(".marker").on("mousedown", function(a) {
                a.preventDefault(), b._startMoveMarker(a)
            }), c.on("mousedown", function(a) {
                a.preventDefault(), b._startMoveMarker(a)
            }), c.data("slider", this)
        }, _startMoveMarker: function(b) {
            var c, d = this.element, e = this.options, f = this, g = d.children(".slider-hint");
            a(d).on("mousemove", function(a) {
                f._movingMarker(a), d.hasClass("permanent-hint") || g.css("display", "block")
            }), a(d).on("mouseup mouseleave", function() {
                a(d).off("mousemove"), a(d).off("mouseup"), d.data("value", e.position), d.trigger("changed", e.position), c = "value" === e.returnType ? f._valueToRealValue(e.position) : e.position, "string" == typeof e.onChanged ? window[e.onChanged](c, d) : e.onChanged(c, d), d.hasClass("permanent-hint") || g.css("display", "none")
            }), this._initPoints(), this._movingMarker(b)
        }, _movingMarker: function(b) {
            var c, d, e, f = this.element, g = this.options, h = g._slider.vertical, i = g._slider.offset, j = g._slider.start, k = g._slider.stop, l = g._slider.length, m = g._slider.marker;
            c = h ? b.pageY - i : b.pageX - i, j > c ? c = j : c > k && (c = k), e = h ? l - c - m / 2 : c - m / 2, d = this._pixToPerc(e), this._placeMarker(d), g.currValue = this._valueToRealValue(d), g.position = d;
            var n = "value" === g.returnType ? this._valueToRealValue(g.position) : g.position;
            g.target && a(g.target).val(n), "string" == typeof g.onChange ? window[g.onChange](n, f) : g.onChange(n, f)
        }, _placeMarker: function(a) {
            var b, c, d, e, f, g = this.options, h = 0, i = this.element, j = this.element.children(".marker"), k = this.element.children(".complete"), l = this.element.children(".slider-hint"), m = this._percToPix(g.position);
            if (d = g.colors.length, e = g._slider.length / d, g._slider.vertical) {
                var n = this._percToPix(g.position) + g._slider.marker, o = g._slider.length - n;
                b = this._percToPix(a) + g._slider.marker, c = g._slider.length - b, this._animate(j.css("top", o), {top: c}), this._animate(k.css("height", n), {height: b}), d && (h = Math.round(b / e) - 1, k.css("background-color", g.colors[0 > h ? 0 : h])), g.showHint && (f = this._valueToRealValue(a), l.html(f).css("top", c - l.height() / 2 + (i.hasClass("large") ? 8 : 0)))
            } else
                b = this._percToPix(a), this._animate(j.css("left", m), {left: b}), this._animate(k.css("width", m), {width: b}), d && (h = Math.round(b / e) - 1, k.css("background-color", g.colors[0 > h ? 0 : h])), g.showHint && (f = this._valueToRealValue(a), l.html(f).css({left: b - l.width() / 2 + (i.hasClass("large") ? 6 : 0)}))
        }, _valueToRealValue: function(a) {
            var b, c = this.options, d = (c.maxValue - c.minValue) / 100;
            return b = a * d + c.minValue, Math.round(b)
        }, _animate: function(a, b) {
            var c = this.options;
            c.animate ? a.stop(!0).animate(b) : a.css(b)
        }, _pixToPerc: function(a) {
            var b;
            return b = a * this.options._slider.ppp, Math.round(this._correctValue(b))
        }, _percToPix: function(a) {
            return 0 === this.options._slider.ppp ? 0 : Math.round(a / this.options._slider.ppp)
        }, _correctValue: function(a) {
            var b = this.options, c = b.accuracy, d = b.max, e = b.min;
            return 0 === c ? a : a === d ? d : a === e ? e : (a = Math.floor(a / c) * c + Math.round(a % c / c) * c, a > d ? d : e > a ? e : a)
        }, _initPoints: function() {
            var a = this.options, b = a._slider, c = this.element;
            b.vertical ? (b.offset = c.offset().top, b.length = c.height(), b.marker = c.children(".marker").height()) : (b.offset = c.offset().left, b.length = c.width(), b.marker = c.children(".marker").width()), b.ppp = a.max / (b.length - b.marker), b.start = b.marker / 2, b.stop = b.length - b.marker / 2
        }, _createSlider: function() {
            var b, c, d, e = this.element, f = this.options;
            e.html(""), b = a("<div/>").addClass("complete").appendTo(e), c = a("<a/>").addClass("marker").appendTo(e), f.showHint && (d = a("<span/>").addClass("slider-hint").appendTo(e)), "default" !== f.color && (f.color.isColor() ? e.css("background-color", f.color) : e.addClass(f.color)), "default" !== f.completeColor && (f.completeColor.isColor() ? b.css("background-color", f.completeColor) : b.addClass(f.completeColor)), "default" !== f.markerColor && (f.markerColor.isColor() ? c.css("background-color", f.markerColor) : c.addClass(f.markerColor))
        }, value: function(a) {
            var b, c = this.options;
            return"undefined" != typeof a ? (a = a > c.max ? c.max : a, a = a < c.min ? c.min : a, this._placeMarker(parseInt(a)), c.position = parseInt(a), b = "value" === c.returnType ? this._valueToRealValue(c.position) : c.position, "string" == typeof c.onChange ? window[c.onChange](b, this.element) : c.onChange(b, this.element), this) : b = "value" === c.returnType ? this._valueToRealValue(c.position) : c.position
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.stepper", {version: "3.0.0", options: {steps: 3, start: 1, type: "default", clickable: !0, onStep: function() {
            }, onStepClick: function() {
            }}, _create: function() {
            var b = this.element, c = this.options, d = b.attr("id");
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), b.hasClass("stepper") || b.addClass("stepper"), void 0 === d && (d = window.uniqueId(this.widgetName + "_"), b.attr("id", d)), this._createStepper(), c.clickable && this._createEvents(), this._positioningSteps(), this._stepTo(c.start), b.data("stepper", this)
        }, _createEvents: function() {
            var b = this.element, c = this.options;
            b.on("click", "li", function() {
                var d = a(this).data("step");
                "string" == typeof c.onStepClick ? window[c.onStepClick](d - 1, d) : c.onStepClick(d - 1, d), b.trigger("stepclick", d)
            })
        }, _createStepper: function() {
            var b, c, d, e = this.element, f = this.options;
            switch (c = a("<ul/>"), f.type) {
                case"diamond":
                    e.addClass("diamond");
                    break;
                case"cycle":
                    e.addClass("cycle")
            }
            for (b = 0; b < f.steps; b++)
                d = a("<li/>").data("step", b + 1).appendTo(c);
            c.appendTo(e)
        }, _positioningSteps: function() {
            var b = this.element, c = (this.options, b.find("li")), d = b.width(), e = c.length - 1, f = a(c[0]).width();
            a.each(c, function(b, c) {
                var g = 0 === b ? 0 : (d - f) / e * b;
                a(c).animate({left: g})
            })
        }, _stepTo: function(b) {
            var c = this.element, d = this.options, e = c.find("li");
            e.removeClass("current").removeClass("complete"), a.each(e, function(c, e) {
                b - 1 > c && a(e).addClass("complete"), c === b - 1 && (a(e).addClass("current"), "string" == typeof d.onStep ? window[d.onStep](c + 1, e) : d.onStep(c + 1, e))
            })
        }, stepTo: function(a) {
            this._stepTo(a)
        }, first: function() {
            var a = this.options;
            a.start = 1, this._stepTo(a.start)
        }, last: function() {
            var a = this.element, b = this.options, c = a.find("li");
            b.start = c.length, this._stepTo(b.start)
        }, next: function() {
            var a = this.element, b = this.options, c = a.find("li");
            b.start + 1 > c.length || (b.start++, this._stepTo(b.start))
        }, prior: function() {
            var a = this.options;
            a.start - 1 !== 0 && (a.start--, this._stepTo(a.start))
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    a.widget("metro.streamer", {version: "3.0.0", options: {scrollBar: !1, meterStart: 9, meterStop: 19, meterInterval: 20, slideToTime: "default", slideSleep: 1e3, slideSpeed: 1e3, onClick: function() {
            }, onLongClick: function() {
            }}, _create: function() {
            var b = this.element, c = this.options, d = b.find(".stream"), e = b.find(".event"), f = b.find(".events"), g = b.find(".events-area"), h = b.find(".event-group"), i = b.find(".event-stream");
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), b.data("streamSelect", -1);
            var j, k, l, m = a("<ul/>").addClass("meter"), n = c.meterStart, o = c.meterStop, p = c.meterInterval, q = [];
            for (j = n; o > j; j++)
                for (k = 0; 60 > k; k += p)
                    l = (10 > j ? "0" + j : j) + ":" + (10 > k ? "0" + k : k), a("<li/>").addClass("js-interval-" + l.replace(":", "-")).html("<em>" + l + "</em>").appendTo(m), q.push(l);
            b.data("intervals", q), m.insertBefore(b.find(".events-grid")), b.find(".event-stream").each(function(b, c) {
                var e = 0, f = a(c).find(".event");
                f.each(function(b, c) {
                    e += a(c).outerWidth() + parseInt(a(c).css("margin-left"))
                }), a(c).css({width: e + 2 * (f.length - 1) + 1}), a(c).find(".time").css("background-color", a(d[b]).css("background-color"))
            }), f.css({"overflow-x": c.scrollBar ? "scroll" : "hidden"}), b.css({height: b.find(".streams").outerHeight() + (c.scrollBar ? 20 : 0)});
            var r = 0;
            h.each(function(b, c) {
                r += a(c).outerWidth()
            }), r += 2 * (h.length - 1) + 10, g.css("width", r), e.each(function(a, b) {
                addTouchEvents(b)
            }), b.mousewheel(function(a, b) {
                var c = 50 * b;
                return f.scrollLeft(f.scrollLeft() - c), !1
            }), d.each(function(c, d) {
                a(d).mousedown(function() {
                    b.data("streamSelect") == c ? (e.removeClass("event-disable"), b.data("streamSelect", -1)) : (b.data("streamSelect", c), e.addClass("event-disable"), a(i[c]).find(".event").removeClass("event-disable"))
                })
            }), this._createEvents(), this.slideToTime(c.slideToTime, c.slideSleep, c.slideSpeed), b.data("streamer", this)
        }, _createEvents: function() {
            var b = this, c = this.element, d = this.options, e = c.find(".event");
            e.on("click", function(b) {
                b.ctrlKey && a(this).toggleClass("selected"), b.preventDefault(), d.onClick(a(this))
            }), c.find(".js-go-previous-time").on("click", function() {
                var a = c.data("intervals").indexOf(c.data("current-time"));
                if (0 != a) {
                    a--;
                    var e = c.data("intervals")[a];
                    b.slideToTime(e, 0, d.slideSpeed)
                }
            }), c.find(".js-go-next-time").on("click", function() {
                var a = c.data("intervals").indexOf(c.data("current-time"));
                if (a != c.data("intervals").length - 1) {
                    a++;
                    var e = c.data("intervals")[a];
                    b.slideToTime(e, 0, d.slideSpeed)
                }
            }), c.find(".js-show-all-streams").on("click", function(a) {
                c.find(".event").removeClass("event-disable"), c.data("streamSelect", -1), a.preventDefault()
            }), c.find(".js-schedule-mode").on("click", function(b) {
                a(this).toggleClass("active"), c.data("schedule-mode", a(this).hasClass("inverse")), b.preventDefault()
            })
        }, slideToTime: function(a, b, c) {
            var d, e, f = this, g = this.element;
            "default" === a ? (d = g.find(".meter li")[0], a = d.className.replace("js-interval-", "").replace("-", ":")) : (e = a.split(":"), 1 === e[0].length && (a = "0" + a)), d = g.find(".meter li.js-interval-" + a.replace(":", "-"))[0], setTimeout(function() {
                g.find(".events").animate({scrollLeft: d.offsetLeft}, c, function() {
                    f._afterSlide()
                })
            }, b), g.data("current-time", a)
        }, _afterSlide: function() {
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.tabControl", {version: "3.0.0", options: {openTarget: !1, saveState: !1, onTabClick: function() {
                return!0
            }, onTabChanged: function() {
            }, _current: {tab: !1, frame: !1}}, _create: function() {
            {
                var b, c, d, e = this.element, f = this.options, g = e.children(".tabs").find("li").children("a");
                e.children(".frames").children("div")
            }
            if (a.each(e.data(), function(b, c) {
                if (b in f)
                    try {
                        f[b] = a.parseJSON(c)
                    } catch (d) {
                        f[b] = c
                    }
            }), f.saveState && void 0 !== e.attr("id") && "" !== e.attr("id").trim()) {
                var h = window.localStorage.getItem(e.attr("id") + "-stored-tab");
                h && "undefined" !== h && (b = e.find("a[href='" + h + "']"), b && (c = b.attr("href"), d = c && c.isUrl() ? !1 : a(c), f._current.tab = b, f._current.frame = d))
            }
            if (f._current.tab || f.openTarget === !1 || (b = e.find("a[href='" + f.openTarget + "']"), b && (c = b.attr("href"), d = c && c.isUrl() ? !1 : a(c), f._current.tab = b, f._current.frame = d)), f._current.tab || a.each(g, function(b, c) {
                var d = a(c), e = d.attr("href"), g = e.isUrl() ? !1 : a(e);
                d.parent().hasClass("active") && !d.parent().hasClass("disabled") && g !== !1 && (f._current.tab = d, f._current.frame = g)
            }), !f._current.tab)
                for (var i = 0; i < g.length; i++)
                    if (!a(g[i]).attr("href").isUrl() && !a(g[i]).parent().hasClass("disabled")) {
                        f._current.tab = a(g[i]), f._current.frame = a(a(g[i]).attr("href"));
                        break
                    }
            this._createEvents(), this._openTab(), e.data("tabControl", this)
        }, _hideTabs: function() {
            var b = this.element, c = b.outerWidth(), d = b.children(".tabs").find("li:not(.non-visible-tabs)"), e = b.children(".tabs").find(".non-visible-tabs").children(".d-menu");
            a.each(d, function() {
                var b = a(this), d = this;
                if (d.offsetLeft + d.offsetWidth + 30 > c) {
                    var f = b.clone(!0);
                    f.appendTo(e), b.remove()
                }
            })
        }, _openTab: function() {
            var a = this.element, b = this.options, c = a.children(".tabs").find("li").children("a"), d = a.children(".frames").children("div");
            c.parent().removeClass("active"), d.hide(), b._current.tab.parent().addClass("active"), b._current.frame.show(), b.saveState && void 0 !== a.attr("id") && "" !== a.attr("id").trim() && window.localStorage.setItem(a.attr("id") + "-stored-tab", b._current.tab.attr("href"))
        }, _createEvents: function() {
            {
                var b = this, c = this.element, d = this.options;
                c.children(".tabs").find("li").children("a"), c.children(".frames").children("div")
            }
            c.on("click", ".tabs > li > a", function(c) {
                var e = a(this), f = e.attr("href"), g = a(f);
                if (e.parent().hasClass("disabled"))
                    return!1;
                if ("string" == typeof d.onTabClick) {
                    if (!window[d.onTabClick](e))
                        return!1
                } else if (!d.onTabClick(e))
                    return!1;
                return f.isUrl() ? (window.location.href = f, !0) : (d._current.tab = e, d._current.frame = g, b._openTab(), "string" == typeof d.onTabChanged ? window[d.onTabChanged](e) : d.onTabChanged(e), c.preventDefault(), void c.stopPropagation())
            })
        }, hideTab: function() {
        }, showTab: function() {
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.tile", {version: "3.0.0", options: {effect: "slideLeft", period: 4e3, duration: 700, easing: "doubleSqrt"}, _frames: {}, _currentIndex: 0, _interval: 0, _outPosition: 0, _size: {}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), this._createTransformTile(), this._createLiveTile(), b.data("tile", this)
        }, _createLiveTile: function() {
            {
                var b = this, c = this.element;
                this.options
            }
            return this._frames = c.find(".live-slide"), this._frames.length <= 1 ? !1 : (a.easing.doubleSqrt = function(a) {
                return Math.sqrt(Math.sqrt(a))
            }, this._size = {width: c.width(), height: c.height()}, c.on("mouseenter", function() {
                b.stop()
            }), c.on("mouseleave", function() {
                b.start()
            }), void this.start())
        }, start: function() {
            var a = this;
            this._interval = setInterval(function() {
                a._animate()
            }, this.options.period)
        }, stop: function() {
            clearInterval(this._interval)
        }, _animate: function() {
            var a, b = this._frames[this._currentIndex];
            switch (this._currentIndex += 1, this._currentIndex >= this._frames.length && (this._currentIndex = 0), a = this._frames[this._currentIndex], this.options.effect) {
                case"slideLeft":
                    this._effectSlideLeft(b, a);
                    break;
                case"slideRight":
                    this._effectSlideRight(b, a);
                    break;
                case"slideDown":
                    this._effectSlideDown(b, a);
                    break;
                case"slideUpDown":
                    this._effectSlideUpDown(b, a);
                    break;
                case"slideLeftRight":
                    this._effectSlideLeftRight(b, a);
                    break;
                default:
                    this._effectSlideUp(b, a)
            }
        }, _effectSlideLeftRight: function(a, b) {
            this._currentIndex % 2 === 0 ? this._effectSlideLeft(a, b) : this._effectSlideRight(a, b)
        }, _effectSlideUpDown: function(a, b) {
            this._currentIndex % 2 === 0 ? this._effectSlideUp(a, b) : this._effectSlideDown(a, b)
        }, _effectSlideUp: function(b, c) {
            var d = this._size.height, e = {duration: this.options.duration, easing: this.options.easing};
            a(b).animate({top: -d}, e), a(c).css({top: d}).show().animate({top: 0}, e)
        }, _effectSlideDown: function(b, c) {
            var d = this._size.height, e = {duration: this.options.duration, easing: this.options.easing};
            a(b).animate({top: d}, e), a(c).css({top: -d}).show().animate({top: 0}, e)
        }, _effectSlideLeft: function(b, c) {
            var d = this._size.width, e = {duration: this.options.duration, easing: this.options.easing};
            a(b).animate({left: -1 * d}, e), a(c).css({left: d}).show().animate({left: 0}, e)
        }, _effectSlideRight: function(b, c) {
            var d = this._size.width, e = {duration: this.options.duration, easing: this.options.easing};
            a(b).animate({left: d}, e), a(c).css({left: -d}).show().animate({left: 0}, e)
        }, _createTransformTile: function() {
            var b = this.element, c = (this.options, {w: b.width(), h: b.height()});
            b.on("mousedown", function(d) {
                var e = d.pageX - a(this).offset().left, f = d.pageY - a(this).offset().top, g = "top";
                e < 1 * c.w / 3 && (f < 1 * c.h / 2 || f > 1 * c.h / 2) ? g = "left" : e > 2 * c.w / 3 && (f < 1 * c.h / 2 || f > 1 * c.h / 2) ? g = "right" : e > 1 * c.w / 3 && e < 2 * c.w / 3 && f > c.h / 2 && (g = "bottom"), a(this).addClass("tile-transform-" + g), console.log(g), "A" === b[0].tagName && b.attr("href") && setTimeout(function() {
                    document.location.href = b.attr("href")
                }, 500)
            }), b.on("mouseup", function() {
                a(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")
            }), b.on("mouseleave", function() {
                a(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")
            })
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.treeview", {version: "3.0.0", options: {doubleClick: !0, onClick: function() {
            }, onExpand: function() {
            }, onCollapse: function() {
            }}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), this._initTree(), this._createEvents(), b.data("treeview", this)
        }, _createCheckbox: function(b, c) {
            var d, e, f;
            d = a("<label/>").addClass("input-control checkbox small-check").insertBefore(b), e = a("<input/>").attr("type", "checkbox").appendTo(d), f = a("<span/>").addClass("check").appendTo(d), void 0 !== c.data("name") && e.attr("name", c.data("name")), void 0 !== c.data("id") && e.attr("id", c.data("id")), void 0 !== c.data("checked") && e.prop("checked", c.data("checked")), void 0 !== c.data("readonly") && e.prop("disabled", c.data("readonly")), void 0 !== c.data("disabled") && (e.prop("disabled", c.data("disabled")), c.data("disabled") === !0 && c.addClass("disabled"))
        }, _createRadio: function(b, c) {
            var d, e, f;
            d = a("<label/>").addClass("input-control radio small-check").insertBefore(b), e = a("<input/>").attr("type", "radio").appendTo(d), f = a("<span/>").addClass("check").appendTo(d), void 0 !== c.data("name") && e.attr("name", c.data("name")), void 0 !== c.data("id") && e.attr("id", c.data("id")), void 0 !== c.data("checked") && e.prop("checked", c.data("checked")), void 0 !== c.data("readonly") && e.prop("disabled", c.data("readonly")), void 0 !== c.data("disabled") && (e.prop("disabled", c.data("disabled")), c.data("disabled") === !0 && c.addClass("disabled"))
        }, _initTree: function() {
            var b = this, c = this.element, d = (this.options, c.find(".leaf"));
            a.each(d, function() {
                {
                    var c = a(this), d = c.parent("li"), e = c.siblings("ul");
                    a(c.parents(".node")[0])
                }
                "checkbox" === d.data("mode") && b._createCheckbox(c, d), "radio" === d.data("mode") && b._createRadio(c, d), e.length > 0 && (d.hasClass("node") || d.addClass("node")), d.hasClass("collapsed") && e.hide()
            })
        }, _renderChecks: function(b) {
            var c = this.element, d = (this.options, b.is(":checked")), e = a(b.parent().parent()), f = e.children("ul").find('[type="checkbox"]');
            f.prop("checked", d).removeClass("indeterminate"), a.each(c.find(".node[data-mode=checkbox]").reverse(), function() {
                var b = a(this), c = b.children(".input-control").find('[type="checkbox"]'), d = b.children("ul").find('[type="checkbox"]'), e = b.children("ul").find('[type="checkbox"]:checked');
                c.removeClass("indeterminate"), 0 === e.length ? (c.prop("checked", !1), c.removeClass("indeterminate")) : e.length > 0 && d.length > e.length && (c.prop("checked", !0), c.addClass("indeterminate"))
            })
        }, _createEvents: function() {
            var b = this, c = this.element, d = this.options;
            c.on("change", "input:checkbox", function() {
                b._renderChecks(a(this))
            }), c.on("click", "input", function() {
                var c, e, f = a(this), g = a(f.parents(".node")[0]), h = f.parent("li"), i = f.siblings(".input-control").find("input:checkbox"), j = f.siblings(".input-control").find("input:radio");
                i.length > 0 && (c = !i.is(":checked"), e = i.is(":disabled"), e || i.prop("checked", c), b._renderChecks(i)), j.length > 0 && (e = j.is(":disabled"), e || j.prop("checked", !0)), "string" == typeof d.onClick ? window[d.onClick](f, h, g, b) : d.onClick(f, h, g, b)
            }), c.on("click", ".leaf", function() {
                var e = a(this), f = a(e.parents(".node")[0]), g = e.parent("li");
                c.find(".leaf").parent("li").removeClass("active"), g.addClass("active"), "string" == typeof d.onClick ? window[d.onClick](e, g, f, b) : d.onClick(e, g, f, b)
            }), d.doubleClick && c.on("dblclick", ".leaf", function(c) {
                var e = a(this), f = e.parent("li"), g = a(e.parents(".node")[0]);
                return f.hasClass("keep-open") ? !1 : (f.toggleClass("collapsed"), f.hasClass("collapsed") ? (f.children("ul").slideUp("fast"), "string" == typeof d.onCollapse ? window[d.onCollapse](e, f, g, b) : d.onCollapse(e, f, g, b)) : (f.children("ul").slideDown("fast"), "string" == typeof d.onExpand ? window[d.onExpand](f, e, g) : d.onExpand(f, e, g)), c.stopPropagation(), void c.preventDefault())
            }), c.on("click", ".node-toggle", function(c) {
                var e = a(this).siblings(".leaf"), f = a(this).parent("li"), g = a(e.parents(".node")[0]);
                return f.hasClass("keep-open") ? !1 : (f.toggleClass("collapsed"), f.hasClass("collapsed") ? (f.children("ul").slideUp("fast"), "string" == typeof d.onCollapse ? window[d.onCollapse](e, f, g, b) : d.onCollapse(e, f, g, b)) : (f.children("ul").slideDown("fast"), "string" == typeof d.onExpand ? window[d.onExpand](e, f, g, b) : d.onExpand(e, f, g, b)), c.stopPropagation(), void c.preventDefault())
            })
        }, addLeaf: function(b, c, d) {
            var e, f, g, h = this.element;
            if (b && ("LI" === b[0].tagName && b.addClass("node"), 0 === b.children(".node-toggle").length && a("<span/>").addClass("node-toggle").appendTo(b)), g = b ? a(b).children("ul") : h.children("ul"), 0 === g.length && (g = a("<ul/>").appendTo(b ? b : h)), f = a("<li/>").appendTo(g), e = void 0 !== d && void 0 !== d.tagName ? a("<" + d.tagName + "/>").addClass("leaf").appendTo(f) : a("<span/>").addClass("leaf").appendTo(f), e.html(c), void 0 !== d && (a.each(d, function(a, b) {
                f.attr("data-" + a, b)
            }), void 0 !== d.mode))
                switch (d.mode) {
                    case"checkbox":
                        this._createCheckbox(e, f);
                        break;
                    case"radio":
                        this._createRadio(e, f)
                }
            return this
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.window", {version: "3.0.0", options: {parent: "default", captionStyle: !1, contentStyle: !1, buttons: {btnMin: !1, btnMax: !1, btnClose: !1}, title: !1, content: !1, icon: !1, type: "default", size: !1, onBtnMinClick: function(a) {
                a.preventDefault()
            }, onBtnMaxClick: function(a) {
                a.preventDefault()
            }, onBtnCloseClick: function(a) {
                a.preventDefault()
            }, onShow: function(a) {
                a.preventDefault()
            }, onHide: function(a) {
                a.preventDefault()
            }}, _create: function() {
            var b = this.element, c = this.options;
            a.each(b.data(), function(b, d) {
                if (b in c)
                    try {
                        c[b] = a.parseJSON(d)
                    } catch (e) {
                        c[b] = d
                    }
            }), this._createWindow(), b.data("window", this)
        }, _createWindow: function() {
            var b, c, d = this.element, e = this.options, f = d;
            f.addClass("window"), b = a("<div/>").addClass("window-caption"), c = a("<div/>").addClass("window-content"), (e.icon || e.title) && b.appendTo(f), c.appendTo(f), "object" == typeof e.size && a.each(e.size, function(a, b) {
                c.css(a, b)
            }), e.captionStyle && "object" == typeof e.captionStyle && a.each(e.captionStyle, function(a, c) {
                c.isColor() ? b.css(a, c + " !important") : b.addClass(c)
            }), e.contentStyle && "object" == typeof e.contentStyle && a.each(e.contentStyle, function(a, b) {
                b.isColor() ? c.css(a, b + " !important") : c.addClass(b)
            }), f.appendTo("default" !== e.parent ? e.parent : d.parent()), this.icon(), this.title(), this.buttons(), this.content()
        }, icon: function() {
            var b = this.options, c = this.element.children(".window-caption"), d = c.find(".window-caption-icon");
            b.icon && (0 === d.length ? a("<span/>").addClass("window-caption-icon").html(b.icon).appendTo(c) : d.html(b.icon))
        }, title: function() {
            var b = this.options, c = this.element.children(".window-caption"), d = c.find(".window-caption-title");
            b.title && (0 === d.length ? a("<span/>").addClass("window-caption-title").html(b.title).appendTo(c) : d.html(b.title))
        }, buttons: function() {
            var b, c, d, f = this.options, g = this.element.children(".window-caption");
            if (0 !== g.length && f.buttons) {
                var h = f.buttons.btnMin, i = f.buttons.btnMax, j = f.buttons.btnClose;
                if (h && h !== !1)
                    if (b = a("<span/>").addClass("btn-min").appendTo(g), "object" == typeof h && b.css(h), "string" == typeof f.onBtnMinClick) {
                        var k = window[f.onBtnMinClick];
                        b.on("click", k)
                    } else
                        b.on("click", f.onBtnMinClick(e));
                if (i && i !== !1)
                    if (c = a("<span/>").addClass("btn-max").appendTo(g), "object" == typeof i && c.css(i), "string" == typeof f.onBtnMaxClick) {
                        var l = window[f.onBtnMaxClick];
                        c.on("click", l)
                    } else
                        c.on("click", f.onBtnMaxClick(e));
                if (j && j !== !1)
                    if (d = a("<span/>").addClass("btn-close").appendTo(g), "object" == typeof j && d.css(j), "string" == typeof f.onBtnCloseClick) {
                        var m = window[f.onBtnCloseClick];
                        d.on("click", m)
                    } else
                        d.on("click", f.onBtnCloseClick(e))
            }
        }, content: function() {
            var b = this.options, c = b.content, d = this.element.children(".window-content");
            if (c)
                if (c.isUrl()) {
                    if (c.indexOf("youtube") > -1) {
                        var e = a("<iframe>"), f = a("<div/>").addClass("video-container").appendTo(d);
                        e.attr("src", c).attr("frameborder", "0"), e.appendTo(f)
                    }
                } else
                    d.html(c)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.wizard", {version: "3.0.0", options: {stepper: !0, stepperType: "default", stepperClickable: !1, startPage: "default", finishStep: "default", locale: window.METRO_CURRENT_LOCALE, buttons: {cancel: !0, help: !0, prior: !0, next: !0, finish: !0}, onCancel: function() {
            }, onHelp: function() {
            }, onPrior: function() {
                return!0
            }, onNext: function() {
                return!0
            }, onFinish: function() {
            }, onPage: function() {
            }, onStepClick: function() {
            }}, _stepper: void 0, _currentStep: 0, _steps: void 0, _create: function() {
            var b = this, c = this.element, d = this.options, e = c.find(".step");
            a.each(c.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            }), this._steps = e, d.stepper && (this._stepper = this._createStepper(e.length).insertBefore(c.find(".steps")).stepper({clickable: d.stepperClickable}).on("stepclick", function(a, c) {
                b.stepTo(c), "string" == typeof d.onStepClick ? window[d.onStepClick](c) : d.onStepClick(c)
            })), void 0 !== c.data("locale") && (d.locale = c.data("locale")), this._createEvents();
            var f = "default" !== d.startPage && parseInt(d.startPage) > 1 ? d.startPage : 1;
            this.stepTo(f), "string" == typeof d.onPage ? window[d.onPage](this._currentStep + 1, c) : d.onPage(this._currentStep + 1, c), c.data("wizard", this)
        }, _createStepper: function(b) {
            var c, d = this.options;
            return c = a("<div/>").addClass("stepper").attr("data-role", "stepper").attr("data-steps", b), "default" !== d.stepperType && c.addClass(d.stepperType), c
        }, _createEvents: function() {
            var b = this, c = this.element, d = this.options;
            if (d.buttons) {
                var e, f, g, h, i, j = a("<div/>").addClass("actions").appendTo(c), k = a("<div/>").addClass("group-left").appendTo(j), l = a("<div/>").addClass("group-right").appendTo(j);
                d.buttons.cancel && (e = a("<button type='button'/>").addClass("btn-cancel").html(window.METRO_LOCALES[d.locale].buttons[2]), "boolean" == typeof d.buttons.cancel ? e.appendTo(k) : (d.buttons.cancel.title && e.html(d.buttons.cancel.title), d.buttons.cancel.cls && e.addClass(d.buttons.cancel.cls), e.appendTo(d.buttons.cancel.group && "left" !== d.buttons.cancel.group ? l : k)), e.on("click", function() {
                    "string" == typeof d.onCancel ? window[d.onCancel](b._currentStep + 1, c) : d.onCancel(b._currentStep + 1, c)
                })), d.buttons.help && (f = a("<button type='button'/>").addClass("btn-help").html(window.METRO_LOCALES[d.locale].buttons[3]), "boolean" == typeof d.buttons.help ? f.appendTo(l) : (d.buttons.help.title && f.html(d.buttons.help.title), d.buttons.help.cls && f.addClass(d.buttons.help.cls), f.appendTo(d.buttons.help.group && "left" !== d.buttons.help.group ? l : k)), f.on("click", function() {
                    "string" == typeof d.onHelp ? window[d.onHelp](b._currentStep + 1, c) : d.onHelp(b._currentStep + 1, c)
                })), d.buttons.prior && (g = a("<button type='button'/>").addClass("btn-prior").html(window.METRO_LOCALES[d.locale].buttons[4]), "boolean" == typeof d.buttons.prior ? g.appendTo(l) : (d.buttons.prior.title && g.html(d.buttons.prior.title), d.buttons.prior.cls && g.addClass(d.buttons.prior.cls), g.appendTo(d.buttons.prior.group && "left" !== d.buttons.prior.group ? l : k)), g.on("click", function() {
                    "string" == typeof d.onPrior ? window[d.onPrior](b._currentStep + 1, c) && b.prior() : d.onPrior(b._currentStep + 1, c) && b.prior()
                })), d.buttons.next && (h = a("<button type='button'/>").addClass("btn-next").html(window.METRO_LOCALES[d.locale].buttons[5]), "boolean" == typeof d.buttons.next ? h.appendTo(l) : (d.buttons.next.title && h.html(d.buttons.next.title), d.buttons.next.cls && h.addClass(d.buttons.next.cls), h.appendTo(d.buttons.next.group && "left" !== d.buttons.next.group ? l : k)), h.on("click", function() {
                    "string" == typeof d.onNext ? window[d.onNext](b._currentStep + 1, c) && b.next() : d.onNext(b._currentStep + 1, c) && b.next();

                })), d.buttons.finish && (i = a("<button type='button'/>").addClass("btn-finish").html(window.METRO_LOCALES[d.locale].buttons[6]), "boolean" == typeof d.buttons.finish ? i.appendTo(l) : (d.buttons.finish.title && i.html(d.buttons.finish.title), d.buttons.finish.cls && i.addClass(d.buttons.finish.cls), i.appendTo(d.buttons.finish.group && "left" !== d.buttons.finish.group ? l : k)), i.on("click", function() {
                    "string" == typeof d.onFinish ? window[d.onFinish](b._currentStep + 1, c) : d.onFinish(b._currentStep + 1, c)
                }))
            }
        }, next: function() {
            var b = this.options, c = this._currentStep + 1;
            if (c === this._steps.length)
                return!1;
            this._currentStep = c, this._steps.hide(), a(this._steps[c]).show(), "string" == typeof b.onPage ? window[b.onPage](this._currentStep + 1, this.element) : b.onPage(this._currentStep + 1, this.element), void 0 !== this._stepper && this._stepper.stepper("stepTo", this._currentStep + 1);
            var d = "default" === b.finishStep ? this._steps.length - 1 : b.finishStep;
            return c === d ? this.element.find(".btn-finish").attr("disabled", !1) : this.element.find(".btn-finish").attr("disabled", !0), c === this._steps.length - 1 ? this.element.find(".btn-next").attr("disabled", !0) : this.element.find(".btn-next").attr("disabled", !1), c > 0 && this.element.find(".btn-prior").attr("disabled", !1), !0
        }, prior: function() {
            var b = this._currentStep - 1, c = this.options;
            if (0 > b)
                return!1;
            this._currentStep = b, this._steps.hide(), a(this._steps[b]).show(), "string" == typeof c.onPage ? window[c.onPage](this._currentStep + 1, this.element) : c.onPage(this._currentStep + 1, this.element), void 0 !== this._stepper && this._stepper.stepper("stepTo", this._currentStep + 1);
            var d = "default" === c.finishStep ? this._steps.length - 1 : c.finishStep;
            return b === d ? this.element.find(".btn-finish").attr("disabled", !1) : this.element.find(".btn-finish").attr("disabled", !0), 0 === b ? this.element.find(".btn-prior").attr("disabled", !0) : this.element.find(".btn-prior").attr("disabled", !1), d > b && this.element.find(".btn-next").attr("disabled", !1), !0
        }, stepTo: function(b) {
            var c = b - 1, d = this.options;
            if (0 > c)
                return!1;
            this._currentStep = c, this._steps.hide(), a(this._steps[c]).show(), "string" == typeof d.onPage ? window[d.onPage](this._currentStep + 1, this.element) : d.onPage(this._currentStep + 1, this.element), void 0 !== this._stepper && this._stepper.stepper("stepTo", b);
            var e = "default" === d.finishStep ? this._steps.length - 1 : d.finishStep;
            return c === e ? this.element.find(".btn-finish").attr("disabled", !1) : this.element.find(".btn-finish").attr("disabled", !0), this.element.find(".btn-next").attr("disabled", c >= e), this.element.find(".btn-prior").attr("disabled", 0 >= c), !0
        }, stepper: function() {
            return this._stepper
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery), function(a) {
    "use strict";
    a.widget("metro.wizard2", {version: "3.0.0", options: {start: 1, finish: "default", buttonLabels: {prev: "&lt;", next: "&gt;", finish: "OK", help: "?"}, onPrevClick: function() {
                return!0
            }, onNextClick: function() {
                return!0
            }, onFinishClick: function() {
            }, onHelpClick: function() {
            }}, _step: 1, _steps: void 0, _create: function() {
            var b = this, c = this.element, d = this.options;
            a.each(c.data(), function(b, c) {
                if (b in d)
                    try {
                        d[b] = a.parseJSON(c)
                    } catch (e) {
                        d[b] = c
                    }
            }), this._step = d.start, this._steps = c.children(".step"), this._height = 0, this._width = 0, "default" === d.finish && (d.finish = this._steps.length), a.each(this._steps, function(c, d) {
                a(d).outerHeight() > b._height && (b._height = a(d).outerHeight()), a(d).hasClass("active") && (b._step = c + 1)
            }), this._width = c.innerWidth() - (24 * (this._steps.length - 1) + this._steps.length), c.children(".step").css({height: this._height + 48}), a(window).resize(function() {
                b._width = c.innerWidth() - (24 * (b._steps.length - 1) + b._steps.length), b.step(b._step)
            }), this._createActionBar(), this.step(d.start), this._placeActionBar(), c.data("wizard2", this)
        }, _createActionBar: function() {
            var b, c, d, e, f = this, g = this.element, h = this.options, i = a("<div/>").addClass("action-bar").appendTo(g);
            d = a("<button/>").html(h.buttonLabels.help).addClass("button cycle-button medium-button wiz-btn-help place-left").appendTo(i), e = a("<button/>").html(h.buttonLabels.finish).addClass("button cycle-button medium-button wiz-btn-finish place-right").appendTo(i), c = a("<button/>").html(h.buttonLabels.next).addClass("button cycle-button medium-button wiz-btn-next place-right").appendTo(i), b = a("<button/>").html(h.buttonLabels.prev).addClass("button cycle-button medium-button wiz-btn-prev place-right").appendTo(i), d.on("click", function() {
                "string" == typeof h.onHelpClick ? window[h.onHelpClick](f._step) : h.onHelpClick(f._step)
            }), e.on("click", function() {
                "string" == typeof h.onFinishClick ? window[h.onFinishClick](f._step) : h.onFinishClick(f._step)
            }), b.on("click", function() {
                "string" == typeof h.onPrevClick ? window[h.onPrevClick](f._step) && f.prev() : h.onPrevClick(f._step) && f.prev()
            }), c.on("click", function() {
                "string" == typeof h.onNextClick ? window[h.onNextClick](f._step) && f.next() : h.onNextClick(f._step) && f.next()
            })
        }, _placeActionBar: function() {
            var a = this.element, b = (this.options, a.find(".action-bar")), c = a.find(".step.active"), d = c.position().left, e = c.innerWidth();
            b.css({left: d, width: e})
        }, step: function(b) {
            var c = this.options;
            this.element.children(".step").removeClass("active prev next"), a(this.element.children(".step")[b - 1]).addClass("active").css("width", this._width), this.element.children(".step.active").prevAll().addClass("prev").css("width", 0), this.element.children(".step.active").nextAll().addClass("next").css("width", 0), this._placeActionBar(), 1 === b ? this.element.find(".wiz-btn-prev").hide() : this.element.find(".wiz-btn-prev").show(), b === this._steps.length ? this.element.find(".wiz-btn-next").hide() : this.element.find(".wiz-btn-next").show(), b !== c.finish ? this.element.find(".wiz-btn-finish").hide() : this.element.find(".wiz-btn-finish").show()
        }, prev: function() {
            var a = this._step - 1;
            return 0 >= a ? !1 : (this._step = a, this.step(a), !0)
        }, next: function() {
            var a = this._step + 1;
            return a > this._steps.length ? !1 : (this._step = a, this.step(a), !0)
        }, _destroy: function() {
        }, _setOption: function(a, b) {
            this._super("_setOption", a, b)
        }})
}(jQuery);

/*!
 DataTables 1.10.8
 Â©2008-2014 SpryMedia Ltd - datatables.net/license
*/
(function (Fa, T, k) {
    var S = function (g) {
        function X(a) { var b, c, d = {}; g.each(a, function (e) { if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && X(a[e]) }); a._hungarianMap = d } function I(a, b, c) { a._hungarianMap || X(a); var d; g.each(b, function (e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), g.extend(!0, b[d], b[e]), I(a[d], b[d], c)) : b[d] = b[e] }) } function S(a) {
            var b = m.defaults.oLanguage, c = a.sZeroRecords;
            !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable"); !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords"); a.sInfoThousands && (a.sThousands = a.sInfoThousands); (a = a.sDecimal) && db(a)
        } function eb(a) {
            B(a, "ordering", "bSort"); B(a, "orderMulti", "bSortMulti"); B(a, "orderClasses", "bSortClasses"); B(a, "orderCellsTop", "bSortCellsTop"); B(a, "order", "aaSorting"); B(a, "orderFixed", "aaSortingFixed"); B(a, "paging", "bPaginate");
            B(a, "pagingType", "sPaginationType"); B(a, "pageLength", "iDisplayLength"); B(a, "searching", "bFilter"); "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : ""); if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) a[b] && I(m.models.oSearch, a[b])
        } function fb(a) { B(a, "orderable", "bSortable"); B(a, "orderData", "aDataSort"); B(a, "orderSequence", "asSorting"); B(a, "orderDataType", "sortDataType"); var b = a.aDataSort; b && !g.isArray(b) && (a.aDataSort = [b]) } function gb(a) {
            var a = a.oBrowser, b = g("<div/>").css({
                position: "fixed",
                top: 0, left: 0, height: 1, width: 1, overflow: "hidden"
            }).append(g("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(g('<div class="test"/>').css({ width: "100%", height: 10 }))).appendTo("body"), c = b.find(".test"); a.bScrollOversize = 100 === c[0].offsetWidth; a.bScrollbarLeft = 1 !== Math.round(c.offset().left); a.bBounding = b[0].getBoundingClientRect().width ? !0 : !1; b.remove()
        } function hb(a, b, c, d, e, f) {
            var h, i = !1; c !== k && (h = c, i = !0); for (; d !== e;) a.hasOwnProperty(d) && (h = i ? b(h, a[d], d, a) : a[d],
            i = !0, d += f); return h
        } function Ga(a, b) { var c = m.defaults.column, d = a.aoColumns.length, c = g.extend({}, m.models.oColumn, c, { nTh: b ? b : T.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d }); a.aoColumns.push(c); c = a.aoPreSearchCols; c[d] = g.extend({}, m.models.oSearch, c[d]); ka(a, d, g(b).data()) } function ka(a, b, c) {
            var b = a.aoColumns[b], d = a.oClasses, e = g(b.nTh); if (!b.sWidthOrig) {
                b.sWidthOrig = e.attr("width") || null; var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                f && (b.sWidthOrig = f[1])
            } c !== k && null !== c && (fb(c), I(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), g.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort")); var h = b.mData, i = P(h), j = b.mRender ? P(b.mRender) : null, c = function (a) { return "string" === typeof a && -1 !== a.indexOf("@") }; b._bAttrSrc = g.isPlainObject(h) && (c(h.sort) || c(h.type) || c(h.filter)); b.fnGetData =
            function (a, b, c) { var d = i(a, b, k, c); return j && b ? j(d, b, a, c) : d }; b.fnSetData = function (a, b, c) { return Q(h)(a, b, c) }; "number" !== typeof h && (a._rowReadObject = !0); a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone)); a = -1 !== g.inArray("asc", b.asSorting); c = -1 !== g.inArray("desc", b.asSorting); !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI =
            d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
        } function Y(a) { if (!1 !== a.oFeatures.bAutoWidth) { var b = a.aoColumns; Ha(a); for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth } b = a.oScroll; ("" !== b.sY || "" !== b.sX) && Z(a); w(a, null, "column-sizing", [a]) } function la(a, b) { var c = $(a, "bVisible"); return "number" === typeof c[b] ? c[b] : null } function aa(a, b) { var c = $(a, "bVisible"), c = g.inArray(b, c); return -1 !== c ? c : null } function ba(a) { return $(a, "bVisible").length } function $(a, b) {
            var c =
            []; g.map(a.aoColumns, function (a, e) { a[b] && c.push(e) }); return c
        } function Ia(a) { var b = a.aoColumns, c = a.aoData, d = m.ext.type.detect, e, f, h, i, j, g, l, r, q; e = 0; for (f = b.length; e < f; e++) if (l = b[e], q = [], !l.sType && l._sManualType) l.sType = l._sManualType; else if (!l.sType) { h = 0; for (i = d.length; h < i; h++) { j = 0; for (g = c.length; j < g; j++) { q[j] === k && (q[j] = y(a, j, e, "type")); r = d[h](q[j], a); if (!r && h !== d.length - 1) break; if ("html" === r) break } if (r) { l.sType = r; break } } l.sType || (l.sType = "string") } } function ib(a, b, c, d) {
            var e, f, h, i, j, n, l = a.aoColumns;
            if (b) for (e = b.length - 1; 0 <= e; e--) { n = b[e]; var r = n.targets !== k ? n.targets : n.aTargets; g.isArray(r) || (r = [r]); f = 0; for (h = r.length; f < h; f++) if ("number" === typeof r[f] && 0 <= r[f]) { for (; l.length <= r[f];) Ga(a); d(r[f], n) } else if ("number" === typeof r[f] && 0 > r[f]) d(l.length + r[f], n); else if ("string" === typeof r[f]) { i = 0; for (j = l.length; i < j; i++) ("_all" == r[f] || g(l[i].nTh).hasClass(r[f])) && d(i, n) } } if (c) { e = 0; for (a = c.length; e < a; e++) d(e, c[e]) }
        } function L(a, b, c, d) {
            var e = a.aoData.length, f = g.extend(!0, {}, m.models.oRow, {
                src: c ? "dom" :
                "data", idx: e
            }); f._aData = b; a.aoData.push(f); for (var h = a.aoColumns, i = 0, j = h.length; i < j; i++) c && Ja(a, e, i, y(a, e, i)), h[i].sType = null; a.aiDisplayMaster.push(e); b = a.rowIdFn(b); b !== k && (a.aIds[b] = f); (c || !a.oFeatures.bDeferRender) && Ka(a, e, c, d); return e
        } function ma(a, b) { var c; b instanceof g || (b = g(b)); return b.map(function (b, e) { c = na(a, e); return L(a, c.data, e, c.cells) }) } function y(a, b, c, d) {
            var e = a.iDraw, f = a.aoColumns[c], h = a.aoData[b]._aData, i = f.sDefaultContent, c = f.fnGetData(h, d, { settings: a, row: b, col: c }); if (c === k) return a.iDrawError !=
            e && null === i && (J(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b, 4), a.iDrawError = e), i; if ((c === h || null === c) && null !== i) c = i; else if ("function" === typeof c) return c.call(h); return null === c && "display" == d ? "" : c
        } function Ja(a, b, c, d) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c }) } function La(a) { return g.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) { return a.replace(/\\./g, ".") }) } function P(a) {
            if (g.isPlainObject(a)) {
                var b = {};
                g.each(a, function (a, c) { c && (b[a] = P(c)) }); return function (a, c, f, h) { var i = b[c] || b._; return i !== k ? i(a, c, f, h) : a }
            } if (null === a) return function (a) { return a }; if ("function" === typeof a) return function (b, c, f, h) { return a(b, c, f, h) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var c = function (a, b, f) {
                    var h, i; if ("" !== f) {
                        i = La(f); for (var j = 0, g = i.length; j < g; j++) {
                            f = i[j].match(ca); h = i[j].match(U); if (f) {
                                i[j] = i[j].replace(ca, ""); "" !== i[j] && (a = a[i[j]]); h = []; i.splice(0, j + 1); i = i.join(".");
                                j = 0; for (g = a.length; j < g; j++) h.push(c(a[j], b, i)); a = f[0].substring(1, f[0].length - 1); a = "" === a ? h : h.join(a); break
                            } else if (h) { i[j] = i[j].replace(U, ""); a = a[i[j]](); continue } if (null === a || a[i[j]] === k) return k; a = a[i[j]]
                        }
                    } return a
                }; return function (b, e) { return c(b, e, a) }
            } return function (b) { return b[a] }
        } function Q(a) {
            if (g.isPlainObject(a)) return Q(a._); if (null === a) return function () { }; if ("function" === typeof a) return function (b, d, e) { a(b, "set", d, e) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") ||
            -1 !== a.indexOf("("))) { var b = function (a, d, e) { var e = La(e), f; f = e[e.length - 1]; for (var h, i, j = 0, g = e.length - 1; j < g; j++) { h = e[j].match(ca); i = e[j].match(U); if (h) { e[j] = e[j].replace(ca, ""); a[e[j]] = []; f = e.slice(); f.splice(0, j + 1); h = f.join("."); i = 0; for (g = d.length; i < g; i++) f = {}, b(f, d[i], h), a[e[j]].push(f); return } i && (e[j] = e[j].replace(U, ""), a = a[e[j]](d)); if (null === a[e[j]] || a[e[j]] === k) a[e[j]] = {}; a = a[e[j]] } if (f.match(U)) a[f.replace(U, "")](d); else a[f.replace(ca, "")] = d }; return function (c, d) { return b(c, d, a) } } return function (b,
            d) { b[a] = d }
        } function Ma(a) { return D(a.aoData, "_aData") } function oa(a) { a.aoData.length = 0; a.aiDisplayMaster.length = 0; a.aiDisplay.length = 0 } function pa(a, b, c) { for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; -1 != d && c === k && a.splice(d, 1) } function da(a, b, c, d) {
            var e = a.aoData[b], f, h = function (c, f) { for (; c.childNodes.length;) c.removeChild(c.firstChild); c.innerHTML = y(a, b, f, "display") }; if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = na(a, e, d, d === k ? k : e._aData).data; else {
                var i = e.anCells; if (i) if (d !==
                k) h(i[d], d); else { c = 0; for (f = i.length; c < f; c++) h(i[c], c) }
            } e._aSortData = null; e._aFilterData = null; h = a.aoColumns; if (d !== k) h[d].sType = null; else { c = 0; for (f = h.length; c < f; c++) h[c].sType = null; Na(a, e) }
        } function na(a, b, c, d) {
            var e = [], f = b.firstChild, h, i, j = 0, n, l = a.aoColumns, r = a._rowReadObject, d = d || r ? {} : [], q = function (a, b) { if ("string" === typeof a) { var c = a.indexOf("@"); -1 !== c && (c = a.substring(c + 1), Q(a)(d, b.getAttribute(c))) } }, jb = function (a) {
                if (c === k || c === j) i = l[j], n = g.trim(a.innerHTML), i && i._bAttrSrc ? (Q(i.mData._)(d, n),
                q(i.mData.sort, a), q(i.mData.type, a), q(i.mData.filter, a)) : r ? (i._setter || (i._setter = Q(i.mData)), i._setter(d, n)) : d[j] = n; j++
            }; if (f) for (; f;) { h = f.nodeName.toUpperCase(); if ("TD" == h || "TH" == h) jb(f), e.push(f); f = f.nextSibling } else { e = b.anCells; f = 0; for (h = e.length; f < h; f++) jb(e[f]) } (b = b.getAttribute("id")) && Q(a.rowId)(d, b); return { data: d, cells: e }
        } function Ka(a, b, c, d) {
            var e = a.aoData[b], f = e._aData, h = [], i, j, g, l, r; if (null === e.nTr) {
                i = c || T.createElement("tr"); e.nTr = i; e.anCells = h; i._DT_RowIndex = b; Na(a, e); l = 0; for (r = a.aoColumns.length; l <
                r; l++) { g = a.aoColumns[l]; j = c ? d[l] : T.createElement(g.sCellType); h.push(j); if (!c || g.mRender || g.mData !== l) j.innerHTML = y(a, b, l, "display"); g.sClass && (j.className += " " + g.sClass); g.bVisible && !c ? i.appendChild(j) : !g.bVisible && c && j.parentNode.removeChild(j); g.fnCreatedCell && g.fnCreatedCell.call(a.oInstance, j, y(a, b, l), f, b, l) } w(a, "aoRowCreatedCallback", null, [i, f, b])
            } e.nTr.setAttribute("role", "row")
        } function Na(a, b) {
            var c = b.nTr, d = b._aData; if (c) {
                var e = a.rowIdFn(d); e && (c.id = e); d.DT_RowClass && (e = d.DT_RowClass.split(" "),
                b.__rowc = b.__rowc ? Oa(b.__rowc.concat(e)) : e, g(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass)); d.DT_RowAttr && g(c).attr(d.DT_RowAttr); d.DT_RowData && g(c).data(d.DT_RowData)
            }
        } function kb(a) {
            var b, c, d, e, f, h = a.nTHead, i = a.nTFoot, j = 0 === g("th, td", h).length, n = a.oClasses, l = a.aoColumns; j && (e = g("<tr/>").appendTo(h)); b = 0; for (c = l.length; b < c; b++) f = l[b], d = g(f.nTh).addClass(f.sClass), j && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls",
            a.sTableId), Pa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Qa(a, "header")(a, d, f, n); j && ea(a.aoHeader, h); g(h).find(">tr").attr("role", "row"); g(h).find(">tr>th, >tr>td").addClass(n.sHeaderTH); g(i).find(">tr>th, >tr>td").addClass(n.sFooterTH); if (null !== i) { a = a.aoFooter[0]; b = 0; for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && g(f.nTf).addClass(f.sClass) }
        } function fa(a, b, c) {
            var d, e, f, h = [], i = [], j = a.aoColumns.length, n; if (b) {
                c === k && (c = !1); d = 0; for (e = b.length; d < e; d++) {
                    h[d] = b[d].slice(); h[d].nTr =
                    b[d].nTr; for (f = j - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && h[d].splice(f, 1); i.push([])
                } d = 0; for (e = h.length; d < e; d++) { if (a = h[d].nTr) for (; f = a.firstChild;) a.removeChild(f); f = 0; for (b = h[d].length; f < b; f++) if (n = j = 1, i[d][f] === k) { a.appendChild(h[d][f].cell); for (i[d][f] = 1; h[d + j] !== k && h[d][f].cell == h[d + j][f].cell;) i[d + j][f] = 1, j++; for (; h[d][f + n] !== k && h[d][f].cell == h[d][f + n].cell;) { for (c = 0; c < j; c++) i[d + c][f + n] = 1; n++ } g(h[d][f].cell).attr("rowspan", j).attr("colspan", n) } }
            }
        } function M(a) {
            var b = w(a, "aoPreDrawCallback",
            "preDraw", [a]); if (-1 !== g.inArray(!1, b)) C(a, !1); else {
                var b = [], c = 0, d = a.asStripeClasses, e = d.length, f = a.oLanguage, h = a.iInitDisplayStart, i = "ssp" == z(a), j = a.aiDisplay; a.bDrawing = !0; h !== k && -1 !== h && (a._iDisplayStart = i ? h : h >= a.fnRecordsDisplay() ? 0 : h, a.iInitDisplayStart = -1); var h = a._iDisplayStart, n = a.fnDisplayEnd(); if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1); else if (i) { if (!a.bDestroying && !lb(a)) return } else a.iDraw++; if (0 !== j.length) {
                    f = i ? a.aoData.length : n; for (i = i ? 0 : h; i < f; i++) {
                        var l = j[i], r = a.aoData[l];
                        null === r.nTr && Ka(a, l); l = r.nTr; if (0 !== e) { var q = d[c % e]; r._sRowStripe != q && (g(l).removeClass(r._sRowStripe).addClass(q), r._sRowStripe = q) } w(a, "aoRowCallback", null, [l, r._aData, c, i]); b.push(l); c++
                    }
                } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == z(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = g("<tr/>", { "class": e ? d[0] : "" }).append(g("<td />", { valign: "top", colSpan: ba(a), "class": a.oClasses.sRowEmpty }).html(c))[0]; w(a, "aoHeaderCallback", "header", [g(a.nTHead).children("tr")[0],
                Ma(a), h, n, j]); w(a, "aoFooterCallback", "footer", [g(a.nTFoot).children("tr")[0], Ma(a), h, n, j]); d = g(a.nTBody); d.children().detach(); d.append(g(b)); w(a, "aoDrawCallback", "draw", [a]); a.bSorted = !1; a.bFiltered = !1; a.bDrawing = !1
            }
        } function R(a, b) { var c = a.oFeatures, d = c.bFilter; c.bSort && mb(a); d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(); !0 !== b && (a._iDisplayStart = 0); a._drawHold = b; M(a); a._drawHold = !1 } function nb(a) {
            var b = a.oClasses, c = g(a.nTable), c = g("<div/>").insertBefore(c), d = a.oFeatures, e = g("<div/>",
            { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) }); a.nHolding = c[0]; a.nTableWrapper = e[0]; a.nTableReinsertBefore = a.nTable.nextSibling; for (var f = a.sDom.split(""), h, i, j, n, l, r, q = 0; q < f.length; q++) {
                h = null; i = f[q]; if ("<" == i) {
                    j = g("<div/>")[0]; n = f[q + 1]; if ("'" == n || '"' == n) {
                        l = ""; for (r = 2; f[q + r] != n;) l += f[q + r], r++; "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); -1 != l.indexOf(".") ? (n = l.split("."), j.id = n[0].substr(1, n[0].length - 1), j.className = n[1]) : "#" == l.charAt(0) ? j.id = l.substr(1, l.length -
                        1) : j.className = l; q += r
                    } e.append(j); e = g(j)
                } else if (">" == i) e = e.parent(); else if ("l" == i && d.bPaginate && d.bLengthChange) h = ob(a); else if ("f" == i && d.bFilter) h = pb(a); else if ("r" == i && d.bProcessing) h = qb(a); else if ("t" == i) h = rb(a); else if ("i" == i && d.bInfo) h = sb(a); else if ("p" == i && d.bPaginate) h = tb(a); else if (0 !== m.ext.feature.length) { j = m.ext.feature; r = 0; for (n = j.length; r < n; r++) if (i == j[r].cFeature) { h = j[r].fnInit(a); break } } h && (j = a.aanFeatures, j[i] || (j[i] = []), j[i].push(h), e.append(h))
            } c.replaceWith(e); a.nHolding = null
        }
        function ea(a, b) { var c = g(b).children("tr"), d, e, f, h, i, j, n, l, r, q; a.splice(0, a.length); f = 0; for (j = c.length; f < j; f++) a.push([]); f = 0; for (j = c.length; f < j; f++) { d = c[f]; for (e = d.firstChild; e;) { if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) { l = 1 * e.getAttribute("colspan"); r = 1 * e.getAttribute("rowspan"); l = !l || 0 === l || 1 === l ? 1 : l; r = !r || 0 === r || 1 === r ? 1 : r; h = 0; for (i = a[f]; i[h];) h++; n = h; q = 1 === l ? !0 : !1; for (i = 0; i < l; i++) for (h = 0; h < r; h++) a[f + h][n + i] = { cell: e, unique: q }, a[f + h].nTr = d } e = e.nextSibling } } } function qa(a,
        b, c) { var d = []; c || (c = a.aoHeader, b && (c = [], ea(c, b))); for (var b = 0, e = c.length; b < e; b++) for (var f = 0, h = c[b].length; f < h; f++) if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell; return d } function ra(a, b, c) {
            w(a, "aoServerParams", "serverParams", [b]); if (b && g.isArray(b)) { var d = {}, e = /(.*?)\[\]$/; g.each(b, function (a, b) { var c = b.name.match(e); c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value }); b = d } var f, h = a.ajax, i = a.oInstance, j = function (b) { w(a, null, "xhr", [a, b, a.jqXHR]); c(b) }; if (g.isPlainObject(h) &&
            h.data) { f = h.data; var n = g.isFunction(f) ? f(b, a) : f, b = g.isFunction(f) && n ? n : g.extend(!0, b, n); delete h.data } n = { data: b, success: function (b) { var c = b.error || b.sError; c && J(a, 0, c); a.json = b; j(b) }, dataType: "json", cache: !1, type: a.sServerMethod, error: function (b, c) { var f = w(a, null, "xhr", [a, null, a.jqXHR]); -1 === g.inArray(!0, f) && ("parsererror" == c ? J(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && J(a, 0, "Ajax error", 7)); C(a, !1) } }; a.oAjaxData = b; w(a, null, "preXhr", [a, b]); a.fnServerData ? a.fnServerData.call(i, a.sAjaxSource,
            g.map(b, function (a, b) { return { name: b, value: a } }), j, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = g.ajax(g.extend(n, { url: h || a.sAjaxSource })) : g.isFunction(h) ? a.jqXHR = h.call(i, b, j, a) : (a.jqXHR = g.ajax(g.extend(n, h)), h.data = f)
        } function lb(a) { return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ra(a, ub(a), function (b) { vb(a, b) }), !1) : !0 } function ub(a) {
            var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, h, i = [], j, n, l, r = V(a); h = a._iDisplayStart; j = !1 !== d.bPaginate ? a._iDisplayLength : -1; var q = function (a,
            b) { i.push({ name: a, value: b }) }; q("sEcho", a.iDraw); q("iColumns", c); q("sColumns", D(b, "sName").join(",")); q("iDisplayStart", h); q("iDisplayLength", j); var k = { draw: a.iDraw, columns: [], order: [], start: h, length: j, search: { value: e.sSearch, regex: e.bRegex } }; for (h = 0; h < c; h++) n = b[h], l = f[h], j = "function" == typeof n.mData ? "function" : n.mData, k.columns.push({ data: j, name: n.sName, searchable: n.bSearchable, orderable: n.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), q("mDataProp_" + h, j), d.bFilter && (q("sSearch_" + h, l.sSearch),
            q("bRegex_" + h, l.bRegex), q("bSearchable_" + h, n.bSearchable)), d.bSort && q("bSortable_" + h, n.bSortable); d.bFilter && (q("sSearch", e.sSearch), q("bRegex", e.bRegex)); d.bSort && (g.each(r, function (a, b) { k.order.push({ column: b.col, dir: b.dir }); q("iSortCol_" + a, b.col); q("sSortDir_" + a, b.dir) }), q("iSortingCols", r.length)); b = m.ext.legacy.ajax; return null === b ? a.sAjaxSource ? i : k : b ? i : k
        } function vb(a, b) {
            var c = sa(a, b), d = b.sEcho !== k ? b.sEcho : b.draw, e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal, f = b.iTotalDisplayRecords !==
            k ? b.iTotalDisplayRecords : b.recordsFiltered; if (d) { if (1 * d < a.iDraw) return; a.iDraw = 1 * d } oa(a); a._iRecordsTotal = parseInt(e, 10); a._iRecordsDisplay = parseInt(f, 10); d = 0; for (e = c.length; d < e; d++) L(a, c[d]); a.aiDisplay = a.aiDisplayMaster.slice(); a.bAjaxDataGet = !1; M(a); a._bInitComplete || ta(a, b); a.bAjaxDataGet = !0; C(a, !1)
        } function sa(a, b) { var c = g.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp; return "data" === c ? b.aaData || b[c] : "" !== c ? P(c)(b) : b } function pb(a) {
            var b = a.oClasses, c = a.sTableId, d = a.oLanguage,
            e = a.oPreviousSearch, f = a.aanFeatures, h = '<input type="search" class="' + b.sFilterInput + '"/>', i = d.sSearch, i = i.match(/_INPUT_/) ? i.replace("_INPUT_", h) : i + h, b = g("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(g("<label/>").append(i)), f = function () { var b = !this.value ? "" : this.value; b != e.sSearch && (ga(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, M(a)) }, h = null !== a.searchDelay ? a.searchDelay : "ssp" === z(a) ? 400 : 0, j = g("input", b).val(e.sSearch).attr("placeholder",
            d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", h ? ua(f, h) : f).bind("keypress.DT", function (a) { if (13 == a.keyCode) return !1 }).attr("aria-controls", c); g(a.nTable).on("search.dt.DT", function (b, c) { if (a === c) try { j[0] !== T.activeElement && j.val(e.sSearch) } catch (f) { } }); return b[0]
        } function ga(a, b, c) {
            var d = a.oPreviousSearch, e = a.aoPreSearchCols, f = function (a) { d.sSearch = a.sSearch; d.bRegex = a.bRegex; d.bSmart = a.bSmart; d.bCaseInsensitive = a.bCaseInsensitive }; Ia(a); if ("ssp" != z(a)) {
                wb(a, b.sSearch,
                c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive); f(b); for (b = 0; b < e.length; b++) xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive); yb(a)
            } else f(b); a.bFiltered = !0; w(a, null, "search", [a])
        } function yb(a) { for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, h = b.length; f < h; f++) { for (var i = [], j = 0, g = c.length; j < g; j++) e = c[j], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, j) && i.push(e); c.length = 0; c.push.apply(c, i) } } function xb(a, b, c, d, e,
        f) { if ("" !== b) for (var h = a.aiDisplay, d = Ra(b, d, e, f), e = h.length - 1; 0 <= e; e--) b = a.aoData[h[e]]._aFilterData[c], d.test(b) || h.splice(e, 1) } function wb(a, b, c, d, e, f) { var d = Ra(b, d, e, f), e = a.oPreviousSearch.sSearch, f = a.aiDisplayMaster, h; 0 !== m.ext.search.length && (c = !0); h = zb(a); if (0 >= b.length) a.aiDisplay = f.slice(); else { if (h || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted) a.aiDisplay = f.slice(); b = a.aiDisplay; for (c = b.length - 1; 0 <= c; c--) d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1) } } function Ra(a, b, c, d) {
            a = b ? a : va(a);
            c && (a = "^(?=.*?" + g.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) { if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/), a = b ? b[1] : a; return a.replace('"', "") }).join(")(?=.*?") + ").*$"); return RegExp(a, d ? "i" : "")
        } function va(a) { return a.replace(Zb, "\\$1") } function zb(a) {
            var b = a.aoColumns, c, d, e, f, h, i, j, g, l = m.ext.type.search; c = !1; d = 0; for (f = a.aoData.length; d < f; d++) if (g = a.aoData[d], !g._aFilterData) {
                i = []; e = 0; for (h = b.length; e < h; e++) c = b[e], c.bSearchable ? (j = y(a, d, e, "filter"), l[c.sType] && (j = l[c.sType](j)), null === j && (j =
                ""), "string" !== typeof j && j.toString && (j = j.toString())) : j = "", j.indexOf && -1 !== j.indexOf("&") && (wa.innerHTML = j, j = $b ? wa.textContent : wa.innerText), j.replace && (j = j.replace(/[\r\n]/g, "")), i.push(j); g._aFilterData = i; g._sFilterRow = i.join("  "); c = !0
            } return c
        } function Ab(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } } function Bb(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } } function sb(a) {
            var b = a.sTableId, c = a.aanFeatures.i,
            d = g("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null }); c || (a.aoDrawCallback.push({ fn: Cb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), g(a.nTable).attr("aria-describedby", b + "_info")); return d[0]
        } function Cb(a) {
            var b = a.aanFeatures.i; if (0 !== b.length) {
                var c = a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(), h = a.fnRecordsDisplay(), i = h ? c.sInfo : c.sInfoEmpty; h !== f && (i += " " + c.sInfoFiltered); i += c.sInfoPostFix; i = Db(a, i); c = c.fnInfoCallback; null !== c && (i =
                c.call(a.oInstance, a, d, e, f, h, i)); g(b).html(i)
            }
        } function Db(a, b) { var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), h = -1 === e; return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, h ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, h ? 1 : Math.ceil(f / e))) } function ha(a) {
            var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f; c = a.oFeatures; var h =
            a.bDeferLoading; if (a.bInitialised) { nb(a); kb(a); fa(a, a.aoHeader); fa(a, a.aoFooter); C(a, !0); c.bAutoWidth && Ha(a); b = 0; for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = u(f.sWidth)); w(a, null, "preInit", [a]); R(a); e = z(a); if ("ssp" != e || h) "ajax" == e ? ra(a, [], function (c) { var f = sa(a, c); for (b = 0; b < f.length; b++) L(a, f[b]); a.iInitDisplayStart = d; R(a); C(a, !1); ta(a, c) }, a) : (C(a, !1), ta(a)) } else setTimeout(function () { ha(a) }, 200)
        } function ta(a, b) {
            a._bInitComplete = !0; (b || a.oInit.aaData) && Y(a); w(a, "aoInitComplete", "init",
            [a, b])
        } function Sa(a, b) { var c = parseInt(b, 10); a._iDisplayLength = c; Ta(a); w(a, null, "length", [a, c]) } function ob(a) {
            for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = g.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = g("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), h = 0, i = f.length; h < i; h++) e[0][h] = new Option(d[h], f[h]); var j = g("<div><label/></div>").addClass(b.sLength); a.aanFeatures.l || (j[0].id = c + "_length"); j.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)); g("select",
            j).val(a._iDisplayLength).bind("change.DT", function () { Sa(a, g(this).val()); M(a) }); g(a.nTable).bind("length.dt.DT", function (b, c, f) { a === c && g("select", j).val(f) }); return j[0]
        } function tb(a) {
            var b = a.sPaginationType, c = m.ext.pager[b], d = "function" === typeof c, e = function (a) { M(a) }, b = g("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures; d || c.fnInit(a, b, e); f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
                fn: function (a) {
                    if (d) {
                        var b = a._iDisplayStart, g = a._iDisplayLength, n = a.fnRecordsDisplay(), l = -1 ===
                        g, b = l ? 0 : Math.ceil(b / g), g = l ? 1 : Math.ceil(n / g), n = c(b, g), k, l = 0; for (k = f.p.length; l < k; l++) Qa(a, "pageButton")(a, f.p[l], l, n, b, g)
                    } else c.fnUpdate(a, e)
                }, sName: "pagination"
            })); return b
        } function Ua(a, b, c) {
            var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay(); 0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : J(a, 0, "Unknown paging action: " + b, 5); b = a._iDisplayStart !== d; a._iDisplayStart =
            d; b && (w(a, null, "page", [a]), c && M(a)); return b
        } function qb(a) { return g("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] } function C(a, b) { a.oFeatures.bProcessing && g(a.aanFeatures.r).css("display", b ? "block" : "none"); w(a, null, "processing", [a, b]) } function rb(a) {
            var b = g(a.nTable); b.attr("role", "grid"); var c = a.oScroll; if ("" === c.sX && "" === c.sY) return a.nTable; var d = c.sX, e = c.sY, f = a.oClasses, h = b.children("caption"),
            i = h.length ? h[0]._captionSide : null, j = g(b[0].cloneNode(!1)), n = g(b[0].cloneNode(!1)), l = b.children("tfoot"); c.sX && "100%" === b.attr("width") && b.removeAttr("width"); l.length || (l = null); j = g("<div/>", { "class": f.sScrollWrapper }).append(g("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: d ? !d ? null : u(d) : "100%" }).append(g("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(j.removeAttr("id").css("margin-left", 0).append("top" ===
            i ? h : null).append(b.children("thead"))))).append(g("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : u(d) }).append(b)); l && j.append(g("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : u(d) : "100%" }).append(g("<div/>", { "class": f.sScrollFootInner }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === i ? h : null).append(b.children("tfoot"))))); var b = j.children(), k = b[0], f = b[1], q = l ? b[2] : null; if (d) g(f).on("scroll.DT", function () {
                var a =
                this.scrollLeft; k.scrollLeft = a; l && (q.scrollLeft = a)
            }); g(f).css(e && c.bCollapse ? "max-height" : "height", e); a.nScrollHead = k; a.nScrollBody = f; a.nScrollFoot = q; a.aoDrawCallback.push({ fn: Z, sName: "scrolling" }); return j[0]
        } function Z(a) {
            var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, b = b.iBarWidth, f = g(a.nScrollHead), h = f[0].style, i = f.children("div"), j = i[0].style, n = i.children("table"), i = a.nScrollBody, l = g(i), k = i.style, q = g(a.nScrollFoot).children("div"), m = q.children("table"), o = g(a.nTHead), E = g(a.nTable), p = E[0], t = p.style,
            N = a.nTFoot ? g(a.nTFoot) : null, Eb = a.oBrowser, w = Eb.bScrollOversize, s, v, O, x, y = [], z = [], A = [], B, C = function (a) { a = a.style; a.paddingTop = "0"; a.paddingBottom = "0"; a.borderTopWidth = "0"; a.borderBottomWidth = "0"; a.height = 0 }; E.children("thead, tfoot").remove(); x = o.clone().prependTo(E); o = o.find("tr"); v = x.find("tr"); x.find("th, td").removeAttr("tabindex"); N && (O = N.clone().prependTo(E), s = N.find("tr"), O = O.find("tr")); c || (k.width = "100%", f[0].style.width = "100%"); g.each(qa(a, x), function (b, c) { B = la(a, b); c.style.width = a.aoColumns[B].sWidth });
            N && H(function (a) { a.style.width = "" }, O); f = E.outerWidth(); if ("" === c) { t.width = "100%"; if (w && (E.find("tbody").height() > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(E.outerWidth() - b); f = E.outerWidth() } else "" !== d && (t.width = u(d), f = E.outerWidth()); H(C, v); H(function (a) { A.push(a.innerHTML); y.push(u(g(a).css("width"))) }, v); H(function (a, b) { a.style.width = y[b] }, o); g(v).height(0); N && (H(C, O), H(function (a) { z.push(u(g(a).css("width"))) }, O), H(function (a, b) { a.style.width = z[b] }, s), g(O).height(0)); H(function (a,
            b) { a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>"; a.style.width = y[b] }, v); N && H(function (a, b) { a.innerHTML = ""; a.style.width = z[b] }, O); if (E.outerWidth() < f) { s = i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f; if (w && (i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(s - b); ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6) } else s = "100%"; k.width = u(s); h.width = u(s); N && (a.nScrollFoot.style.width = u(s)); !e && w && (k.height =
            u(p.offsetHeight + b)); c = E.outerWidth(); n[0].style.width = u(c); j.width = u(c); d = E.height() > i.clientHeight || "scroll" == l.css("overflow-y"); e = "padding" + (Eb.bScrollbarLeft ? "Left" : "Right"); j[e] = d ? b + "px" : "0px"; N && (m[0].style.width = u(c), q[0].style.width = u(c), q[0].style[e] = d ? b + "px" : "0px"); l.scroll(); if ((a.bSorted || a.bFiltered) && !a._drawHold) i.scrollTop = 0
        } function H(a, b, c) {
            for (var d = 0, e = 0, f = b.length, h, i; e < f;) {
                h = b[e].firstChild; for (i = c ? c[e].firstChild : null; h;) 1 === h.nodeType && (c ? a(h, i, d) : a(h, d), d++), h = h.nextSibling,
                i = c ? i.nextSibling : null; e++
            }
        } function Ha(a) {
            var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, f = d.sX, h = d.sXInner, i = c.length, j = $(a, "bVisible"), n = g("th", a.nTHead), l = b.getAttribute("width"), k = b.parentNode, q = !1, m, o, p; p = a.oBrowser; d = p.bScrollOversize; (m = b.style.width) && -1 !== m.indexOf("%") && (l = m); for (m = 0; m < j.length; m++) o = c[j[m]], null !== o.sWidth && (o.sWidth = Fb(o.sWidthOrig, k), q = !0); if (d || !q && !f && !e && i == ba(a) && i == n.length) for (m = 0; m < i; m++) c[m].sWidth = u(n.eq(m).width()); else {
                i = g(b).clone().css("visibility", "hidden").removeAttr("id");
                i.find("tbody tr").remove(); var t = g("<tr/>").appendTo(i.find("tbody")); i.find("thead, tfoot").remove(); i.append(g(a.nTHead).clone()).append(g(a.nTFoot).clone()); i.find("tfoot th, tfoot td").css("width", ""); n = qa(a, i.find("thead")[0]); for (m = 0; m < j.length; m++) o = c[j[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? u(o.sWidthOrig) : ""; if (a.aoData.length) for (m = 0; m < j.length; m++) q = j[m], o = c[q], g(Gb(a, q)).clone(!1).append(o.sContentPadding).appendTo(t); q = g("<div/>").css(f || e ? {
                    position: "absolute", top: 0,
                    left: 0, height: 1, right: 0, overflow: "hidden"
                } : {}).append(i).appendTo(k); f && h ? i.width(h) : f ? (i.css("width", "auto"), i.width() < k.clientWidth && i.width(k.clientWidth)) : e ? i.width(k.clientWidth) : l && i.width(l); if (f) { for (m = h = 0; m < j.length; m++) o = c[j[m]], e = p.bBounding ? n[m].getBoundingClientRect().width : g(n[m]).outerWidth(), h += null === o.sWidthOrig ? e : parseInt(o.sWidth, 10) + e - g(n[m]).width(); i.width(u(h)); b.style.width = u(h) } for (m = 0; m < j.length; m++) if (o = c[j[m]], p = g(n[m]).width()) o.sWidth = u(p); b.style.width = u(i.css("width"));
                q.remove()
            } l && (b.style.width = u(l)); if ((l || f) && !a._reszEvt) b = function () { g(Fa).bind("resize.DT-" + a.sInstance, ua(function () { Y(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
        } function ua(a, b) { var c = b !== k ? b : 200, d, e; return function () { var b = this, h = +new Date, i = arguments; d && h < d + c ? (clearTimeout(e), e = setTimeout(function () { d = k; a.apply(b, i) }, c)) : (d = h, a.apply(b, i)) } } function Fb(a, b) { if (!a) return 0; var c = g("<div/>").css("width", u(a)).appendTo(b || T.body), d = c[0].offsetWidth; c.remove(); return d } function Gb(a, b) {
            var c =
            Hb(a, b); if (0 > c) return null; var d = a.aoData[c]; return !d.nTr ? g("<td/>").html(y(a, c, b, "display"))[0] : d.anCells[b]
        } function Hb(a, b) { for (var c, d = -1, e = -1, f = 0, h = a.aoData.length; f < h; f++) c = y(a, f, b, "display") + "", c = c.replace(ac, ""), c.length > d && (d = c.length, e = f); return e } function u(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a } function Ib() {
            var a = m.__scrollbarWidth; if (a === k) {
                var b = g("<p/>").css({
                    position: "absolute", top: 0, left: 0, width: "100%", height: 150, padding: 0, overflow: "scroll",
                    visibility: "hidden"
                }).appendTo("body"), a = b[0].offsetWidth - b[0].clientWidth; m.__scrollbarWidth = a; b.remove()
            } return a
        } function V(a) {
            var b, c, d = [], e = a.aoColumns, f, h, i, j; b = a.aaSortingFixed; c = g.isPlainObject(b); var n = []; f = function (a) { a.length && !g.isArray(a[0]) ? n.push(a) : n.push.apply(n, a) }; g.isArray(b) && f(b); c && b.pre && f(b.pre); f(a.aaSorting); c && b.post && f(b.post); for (a = 0; a < n.length; a++) {
                j = n[a][0]; f = e[j].aDataSort; b = 0; for (c = f.length; b < c; b++) h = f[b], i = e[h].sType || "string", n[a]._idx === k && (n[a]._idx = g.inArray(n[a][1],
                e[h].asSorting)), d.push({ src: j, col: h, dir: n[a][1], index: n[a]._idx, type: i, formatter: m.ext.type.order[i + "-pre"] })
            } return d
        } function mb(a) {
            var b, c, d = [], e = m.ext.type.order, f = a.aoData, h = 0, i, g = a.aiDisplayMaster, n; Ia(a); n = V(a); b = 0; for (c = n.length; b < c; b++) i = n[b], i.formatter && h++, Jb(a, i.col); if ("ssp" != z(a) && 0 !== n.length) {
                b = 0; for (c = g.length; b < c; b++) d[g[b]] = b; h === n.length ? g.sort(function (a, b) {
                    var c, e, h, i, g = n.length, j = f[a]._aSortData, k = f[b]._aSortData; for (h = 0; h < g; h++) if (i = n[h], c = j[i.col], e = k[i.col], c = c < e ? -1 : c >
                    e ? 1 : 0, 0 !== c) return "asc" === i.dir ? c : -c; c = d[a]; e = d[b]; return c < e ? -1 : c > e ? 1 : 0
                }) : g.sort(function (a, b) { var c, h, i, g, j = n.length, k = f[a]._aSortData, m = f[b]._aSortData; for (i = 0; i < j; i++) if (g = n[i], c = k[g.col], h = m[g.col], g = e[g.type + "-" + g.dir] || e["string-" + g.dir], c = g(c, h), 0 !== c) return c; c = d[a]; h = d[b]; return c < h ? -1 : c > h ? 1 : 0 })
            } a.bSorted = !0
        } function Kb(a) {
            for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, h = d.length; f < h; f++) {
                c = d[f]; var i = c.asSorting; b = c.sTitle.replace(/<.*?>/g, ""); var g = c.nTh; g.removeAttribute("aria-sort");
                c.bSortable && (0 < e.length && e[0].col == f ? (g.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = i[e[0].index + 1] || i[0]) : c = i[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending); g.setAttribute("aria-label", b)
            }
        } function Va(a, b, c, d) {
            var e = a.aaSorting, f = a.aoColumns[b].asSorting, h = function (a, b) { var c = a._idx; c === k && (c = g.inArray(a[1], f)); return c + 1 < f.length ? c + 1 : b ? null : 0 }; "number" === typeof e[0] && (e = a.aaSorting = [e]); c && a.oFeatures.bSortMulti ? (c = g.inArray(b, D(e, "0")), -1 !== c ? (b = h(e[c], !0), null ===
            b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = h(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0); R(a); "function" == typeof d && d(a)
        } function Pa(a, b, c, d) { var e = a.aoColumns[c]; Wa(b, {}, function (b) { !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () { Va(a, c, b.shiftKey, d); "ssp" !== z(a) && C(a, !1) }, 0)) : Va(a, c, b.shiftKey, d)) }) } function xa(a) {
            var b = a.aLastSort,
            c = a.oClasses.sSortColumn, d = V(a), e = a.oFeatures, f, h; if (e.bSort && e.bSortClasses) { e = 0; for (f = b.length; e < f; e++) h = b[e].src, g(D(a.aoData, "anCells", h)).removeClass(c + (2 > e ? e + 1 : 3)); e = 0; for (f = d.length; e < f; e++) h = d[e].src, g(D(a.aoData, "anCells", h)).addClass(c + (2 > e ? e + 1 : 3)) } a.aLastSort = d
        } function Jb(a, b) {
            var c = a.aoColumns[b], d = m.ext.order[c.sSortDataType], e; d && (e = d.call(a.oInstance, a, b, aa(a, b))); for (var f, h = m.ext.type.order[c.sType + "-pre"], i = 0, g = a.aoData.length; i < g; i++) if (c = a.aoData[i], c._aSortData || (c._aSortData =
            []), !c._aSortData[b] || d) f = d ? e[i] : y(a, i, b, "sort"), c._aSortData[b] = h ? h(f) : f
        } function ya(a) { if (a.oFeatures.bStateSave && !a.bDestroying) { var b = { time: +new Date, start: a._iDisplayStart, length: a._iDisplayLength, order: g.extend(!0, [], a.aaSorting), search: Ab(a.oPreviousSearch), columns: g.map(a.aoColumns, function (b, d) { return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) } }) }; w(a, "aoStateSaveParams", "stateSaveParams", [a, b]); a.oSavedState = b; a.fnStateSaveCallback.call(a.oInstance, a, b) } } function Lb(a) {
            var b, c, d =
            a.aoColumns; if (a.oFeatures.bStateSave) {
                var e = a.fnStateLoadCallback.call(a.oInstance, a); if (e && e.time && (b = w(a, "aoStateLoadParams", "stateLoadParams", [a, e]), -1 === g.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
                    a.oLoadedState = g.extend(!0, {}, e); e.start !== k && (a._iDisplayStart = e.start, a.iInitDisplayStart = e.start); e.length !== k && (a._iDisplayLength = e.length); e.order !== k && (a.aaSorting = [], g.each(e.order, function (b, c) {
                        a.aaSorting.push(c[0] >= d.length ? [0, c[1]] :
                        c)
                    })); e.search !== k && g.extend(a.oPreviousSearch, Bb(e.search)); b = 0; for (c = e.columns.length; b < c; b++) { var f = e.columns[b]; f.visible !== k && (d[b].bVisible = f.visible); f.search !== k && g.extend(a.aoPreSearchCols[b], Bb(f.search)) } w(a, "aoStateLoaded", "stateLoaded", [a, e])
                }
            }
        } function za(a) { var b = m.settings, a = g.inArray(a, D(b, "nTable")); return -1 !== a ? b[a] : null } function J(a, b, c, d) {
            c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c; d && (c += ". For more information about this error, please see http://datatables.net/tn/" +
            d); if (b) Fa.console && console.log && console.log(c); else if (b = m.ext, b = b.sErrMode || b.errMode, a && w(a, null, "error", [a, d, c]), "alert" == b) alert(c); else { if ("throw" == b) throw Error(c); "function" == typeof b && b(a, d, c) }
        } function F(a, b, c, d) { g.isArray(c) ? g.each(c, function (c, f) { g.isArray(f) ? F(a, b, f[0], f[1]) : F(a, b, f) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c])) } function Mb(a, b, c) {
            var d, e; for (e in b) b.hasOwnProperty(e) && (d = b[e], g.isPlainObject(d) ? (g.isPlainObject(a[e]) || (a[e] = {}), g.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !==
            e && g.isArray(d) ? d.slice() : d); return a
        } function Wa(a, b, c) { g(a).bind("click.DT", b, function (b) { a.blur(); c(b) }).bind("keypress.DT", b, function (a) { 13 === a.which && (a.preventDefault(), c(a)) }).bind("selectstart.DT", function () { return !1 }) } function A(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) } function w(a, b, c, d) { var e = []; b && (e = g.map(a[b].slice().reverse(), function (b) { return b.fn.apply(a.oInstance, d) })); null !== c && (b = g.Event(c + ".dt"), g(a.nTable).trigger(b, d), e.push(b.result)); return e } function Ta(a) {
            var b = a._iDisplayStart,
            c = a.fnDisplayEnd(), d = a._iDisplayLength; b >= c && (b = c - d); b -= b % d; if (-1 === d || 0 > b) b = 0; a._iDisplayStart = b
        } function Qa(a, b) { var c = a.renderer, d = m.ext.renderer[b]; return g.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._ } function z(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" } function Aa(a, b) {
            var c = [], c = Nb.numbers_length, d = Math.floor(c / 2); b <= c ? c = W(0, b) : a <= d ? (c = W(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), c.push("ellipsis"),
            c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)); c.DT_el = "span"; return c
        } function db(a) { g.each({ num: function (b) { return Ba(b, a) }, "num-fmt": function (b) { return Ba(b, a, Xa) }, "html-num": function (b) { return Ba(b, a, Ca) }, "html-num-fmt": function (b) { return Ba(b, a, Ca, Xa) } }, function (b, c) { v.type.order[b + a + "-pre"] = c; b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html) }) } function Ob(a) {
            return function () {
                var b = [za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return m.ext.internal[a].apply(this,
                b)
            }
        } var m, v, t, p, s, Ya = {}, Pb = /[\r\n]/g, Ca = /<.*?>/g, bc = /^[\w\+\-]/, cc = /[\w\+\-]$/, Zb = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), Xa = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi, K = function (a) { return !a || !0 === a || "-" === a ? !0 : !1 }, Qb = function (a) { var b = parseInt(a, 10); return !isNaN(b) && isFinite(a) ? b : null }, Rb = function (a, b) { Ya[b] || (Ya[b] = RegExp(va(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Ya[b], ".") : a }, Za = function (a, b, c) {
            var d = "string" === typeof a;
            if (K(a)) return !0; b && d && (a = Rb(a, b)); c && d && (a = a.replace(Xa, "")); return !isNaN(parseFloat(a)) && isFinite(a)
        }, Sb = function (a, b, c) { return K(a) ? !0 : !(K(a) || "string" === typeof a) ? null : Za(a.replace(Ca, ""), b, c) ? !0 : null }, D = function (a, b, c) { var d = [], e = 0, f = a.length; if (c !== k) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e < f; e++) a[e] && d.push(a[e][b]); return d }, ia = function (a, b, c, d) { var e = [], f = 0, h = b.length; if (d !== k) for (; f < h; f++) a[b[f]][c] && e.push(a[b[f]][c][d]); else for (; f < h; f++) e.push(a[b[f]][c]); return e },
        W = function (a, b) { var c = [], d; b === k ? (b = 0, d = a) : (d = b, b = a); for (var e = b; e < d; e++) c.push(e); return c }, Tb = function (a) { for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]); return b }, Oa = function (a) { var b = [], c, d, e = a.length, f, h = 0; d = 0; a: for (; d < e; d++) { c = a[d]; for (f = 0; f < h; f++) if (b[f] === c) continue a; b.push(c); h++ } return b }, B = function (a, b, c) { a[b] !== k && (a[c] = a[b]) }, ca = /\[.*?\]$/, U = /\(\)$/, wa = g("<div>")[0], $b = wa.textContent !== k, ac = /<.*?>/g; m = function (a) {
            this.$ = function (a, b) { return this.api(!0).$(a, b) }; this._ = function (a,
            b) { return this.api(!0).rows(a, b).data() }; this.api = function (a) { return a ? new t(za(this[v.iApiIndex])) : new t(this) }; this.fnAddData = function (a, b) { var c = this.api(!0), d = g.isArray(a) && (g.isArray(a[0]) || g.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a); (b === k || b) && c.draw(); return d.flatten().toArray() }; this.fnAdjustColumnSizing = function (a) { var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll; a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && Z(c) }; this.fnClearTable = function (a) {
                var b = this.api(!0).clear();
                (a === k || a) && b.draw()
            }; this.fnClose = function (a) { this.api(!0).row(a).child.hide() }; this.fnDeleteRow = function (a, b, c) { var d = this.api(!0), a = d.rows(a), e = a.settings()[0], g = e.aoData[a[0][0]]; a.remove(); b && b.call(this, e, g); (c === k || c) && d.draw(); return g }; this.fnDestroy = function (a) { this.api(!0).destroy(a) }; this.fnDraw = function (a) { this.api(!0).draw(a) }; this.fnFilter = function (a, b, c, d, e, g) { e = this.api(!0); null === b || b === k ? e.search(a, c, d, g) : e.column(b).search(a, c, d, g); e.draw() }; this.fnGetData = function (a, b) {
                var c =
                this.api(!0); if (a !== k) { var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null } return c.data().toArray()
            }; this.fnGetNodes = function (a) { var b = this.api(!0); return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray() }; this.fnGetPosition = function (a) { var b = this.api(!0), c = a.nodeName.toUpperCase(); return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null }; this.fnIsOpen = function (a) { return this.api(!0).row(a).child.isShown() };
            this.fnOpen = function (a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] }; this.fnPageChange = function (a, b) { var c = this.api(!0).page(a); (b === k || b) && c.draw(!1) }; this.fnSetColumnVis = function (a, b, c) { a = this.api(!0).column(a).visible(b); (c === k || c) && a.columns.adjust().draw() }; this.fnSettings = function () { return za(this[v.iApiIndex]) }; this.fnSort = function (a) { this.api(!0).order(a).draw() }; this.fnSortListener = function (a, b, c) { this.api(!0).order.listener(a, b, c) }; this.fnUpdate = function (a, b, c, d, e) {
                var g =
                this.api(!0); c === k || null === c ? g.row(b).data(a) : g.cell(b, c).data(a); (e === k || e) && g.columns.adjust(); (d === k || d) && g.draw(); return 0
            }; this.fnVersionCheck = v.fnVersionCheck; var b = this, c = a === k, d = this.length; c && (a = {}); this.oApi = this.internal = v.internal; for (var e in m.ext.internal) e && (this[e] = Ob(e)); this.each(function () {
                var f = {}, f = 1 < d ? Mb(f, a, !0) : a, e = 0, i, j = this.getAttribute("id"), n = !1, l = m.defaults, r = g(this); if ("table" != this.nodeName.toLowerCase()) J(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    eb(l); fb(l.column); I(l, l, !0); I(l.column, l.column, !0); I(l, g.extend(f, r.data())); var q = m.settings, e = 0; for (i = q.length; e < i; e++) { var p = q[e]; if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) { e = f.bRetrieve !== k ? f.bRetrieve : l.bRetrieve; if (c || e) return p.oInstance; if (f.bDestroy !== k ? f.bDestroy : l.bDestroy) { p.oInstance.fnDestroy(); break } else { J(p, 0, "Cannot reinitialise DataTable", 3); return } } if (p.sTableId == this.id) { q.splice(e, 1); break } } if (null === j || "" === j) this.id = j = "DataTables_Table_" +
                    m.ext._unique++; var o = g.extend(!0, {}, m.models.oSettings, { sDestroyWidth: r[0].style.width, sInstance: j, sTableId: j }); o.nTable = this; o.oApi = b.internal; o.oInit = f; q.push(o); o.oInstance = 1 === b.length ? b : r.dataTable(); eb(f); f.oLanguage && S(f.oLanguage); f.aLengthMenu && !f.iDisplayLength && (f.iDisplayLength = g.isArray(f.aLengthMenu[0]) ? f.aLengthMenu[0][0] : f.aLengthMenu[0]); f = Mb(g.extend(!0, {}, l), f); F(o.oFeatures, f, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    F(o, f, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]); F(o.oScroll, f, [["sScrollX", "sX"], ["sScrollXInner",
                    "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]); F(o.oLanguage, f, "fnInfoCallback"); A(o, "aoDrawCallback", f.fnDrawCallback, "user"); A(o, "aoServerParams", f.fnServerParams, "user"); A(o, "aoStateSaveParams", f.fnStateSaveParams, "user"); A(o, "aoStateLoadParams", f.fnStateLoadParams, "user"); A(o, "aoStateLoaded", f.fnStateLoaded, "user"); A(o, "aoRowCallback", f.fnRowCallback, "user"); A(o, "aoRowCreatedCallback", f.fnCreatedRow, "user"); A(o, "aoHeaderCallback", f.fnHeaderCallback, "user"); A(o, "aoFooterCallback",
                    f.fnFooterCallback, "user"); A(o, "aoInitComplete", f.fnInitComplete, "user"); A(o, "aoPreDrawCallback", f.fnPreDrawCallback, "user"); o.rowIdFn = P(f.rowId); j = o.oClasses; f.bJQueryUI ? (g.extend(j, m.ext.oJUIClasses, f.oClasses), f.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? g.isPlainObject(o.renderer) && !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : g.extend(j, m.ext.classes, f.oClasses); r.addClass(j.sTable); if ("" !== o.oScroll.sX || "" !== o.oScroll.sY) o.oScroll.iBarWidth =
                    Ib(); o.iInitDisplayStart === k && (o.iInitDisplayStart = f.iDisplayStart, o._iDisplayStart = f.iDisplayStart); null !== f.iDeferLoading && (o.bDeferLoading = !0, e = g.isArray(f.iDeferLoading), o._iRecordsDisplay = e ? f.iDeferLoading[0] : f.iDeferLoading, o._iRecordsTotal = e ? f.iDeferLoading[1] : f.iDeferLoading); var t = o.oLanguage; g.extend(!0, t, f.oLanguage); "" !== t.sUrl && (g.ajax({ dataType: "json", url: t.sUrl, success: function (a) { S(a); I(l.oLanguage, a); g.extend(true, t, a); ha(o) }, error: function () { ha(o) } }), n = !0); null === f.asStripeClasses &&
                    (o.asStripeClasses = [j.sStripeOdd, j.sStripeEven]); var e = o.asStripeClasses, s = r.children("tbody").find("tr").eq(0); -1 !== g.inArray(!0, g.map(e, function (a) { return s.hasClass(a) })) && (g("tbody tr", this).removeClass(e.join(" ")), o.asDestroyStripes = e.slice()); q = []; e = this.getElementsByTagName("thead"); 0 !== e.length && (ea(o.aoHeader, e[0]), q = qa(o)); if (null === f.aoColumns) { p = []; e = 0; for (i = q.length; e < i; e++) p.push(null) } else p = f.aoColumns; e = 0; for (i = p.length; e < i; e++) Ga(o, q ? q[e] : null); ib(o, f.aoColumnDefs, p, function (a,
                    b) { ka(o, a, b) }); if (s.length) { var u = function (a, b) { return a.getAttribute("data-" + b) !== null ? b : null }; g.each(na(o, s[0]).cells, function (a, b) { var c = o.aoColumns[a]; if (c.mData === a) { var d = u(b, "sort") || u(b, "order"), e = u(b, "filter") || u(b, "search"); if (d !== null || e !== null) { c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k }; ka(o, a) } } }) } var v = o.oFeatures; f.bStateSave && (v.bStateSave = !0, Lb(o, f), A(o, "aoDrawCallback", ya, "state_save")); if (f.aaSorting === k) {
                        q =
                        o.aaSorting; e = 0; for (i = q.length; e < i; e++) q[e][1] = o.aoColumns[e].asSorting[0]
                    } xa(o); v.bSort && A(o, "aoDrawCallback", function () { if (o.bSorted) { var a = V(o), b = {}; g.each(a, function (a, c) { b[c.src] = c.dir }); w(o, null, "order", [o, a, b]); Kb(o) } }); A(o, "aoDrawCallback", function () { (o.bSorted || z(o) === "ssp" || v.bDeferRender) && xa(o) }, "sc"); gb(o); e = r.children("caption").each(function () { this._captionSide = r.css("caption-side") }); i = r.children("thead"); 0 === i.length && (i = g("<thead/>").appendTo(this)); o.nTHead = i[0]; i = r.children("tbody");
                    0 === i.length && (i = g("<tbody/>").appendTo(this)); o.nTBody = i[0]; i = r.children("tfoot"); if (0 === i.length && 0 < e.length && ("" !== o.oScroll.sX || "" !== o.oScroll.sY)) i = g("<tfoot/>").appendTo(this); 0 === i.length || 0 === i.children().length ? r.addClass(j.sNoFooter) : 0 < i.length && (o.nTFoot = i[0], ea(o.aoFooter, o.nTFoot)); if (f.aaData) for (e = 0; e < f.aaData.length; e++) L(o, f.aaData[e]); else (o.bDeferLoading || "dom" == z(o)) && ma(o, g(o.nTBody).children("tr")); o.aiDisplay = o.aiDisplayMaster.slice(); o.bInitialised = !0; !1 === n && ha(o)
                }
            }); b = null;
            return this
        }; var Ub = [], x = Array.prototype, dc = function (a) { var b, c, d = m.settings, e = g.map(d, function (a) { return a.nTable }); if (a) { if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = g.inArray(a, e), -1 !== b ? [d[b]] : null; if (a && "function" === typeof a.settings) return a.settings().toArray(); "string" === typeof a ? c = g(a) : a instanceof g && (c = a) } else return []; if (c) return c.map(function () { b = g.inArray(this, e); return -1 !== b ? d[b] : null }).toArray() }; t = function (a, b) {
            if (!(this instanceof t)) return new t(a,
            b); var c = [], d = function (a) { (a = dc(a)) && c.push.apply(c, a) }; if (g.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]); else d(a); this.context = Oa(c); b && this.push.apply(this, b.toArray ? b.toArray() : b); this.selector = { rows: null, cols: null, opts: null }; t.extend(this, this, Ub)
        }; m.Api = t; t.prototype = {
            any: function () { return 0 !== this.count() }, concat: x.concat, context: [], count: function () { return this.flatten().length }, each: function (a) { for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this); return this }, eq: function (a) {
                var b =
                this.context; return b.length > a ? new t(b[a], this[a]) : null
            }, filter: function (a) { var b = []; if (x.filter) b = x.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]); return new t(this.context, b) }, flatten: function () { var a = []; return new t(this.context, a.concat.apply(a, this.toArray())) }, join: x.join, indexOf: x.indexOf || function (a, b) { for (var c = b || 0, d = this.length; c < d; c++) if (this[c] === a) return c; return -1 }, iterator: function (a, b, c, d) {
                var e = [], f, h, g, j, n, l = this.context,
                m, q, p = this.selector; "string" === typeof a && (d = c, c = b, b = a, a = !1); h = 0; for (g = l.length; h < g; h++) { var o = new t(l[h]); if ("table" === b) f = c.call(o, l[h], h), f !== k && e.push(f); else if ("columns" === b || "rows" === b) f = c.call(o, l[h], this[h], h), f !== k && e.push(f); else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) { q = this[h]; "column-rows" === b && (m = Da(l[h], p.opts)); j = 0; for (n = q.length; j < n; j++) f = q[j], f = "cell" === b ? c.call(o, l[h], f.row, f.column, h, j) : c.call(o, l[h], f, h, j, m), f !== k && e.push(f) } } return e.length || d ? (a = new t(l, a ?
                e.concat.apply([], e) : e), b = a.selector, b.rows = p.rows, b.cols = p.cols, b.opts = p.opts, a) : this
            }, lastIndexOf: x.lastIndexOf || function (a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0, map: function (a) { var b = []; if (x.map) b = x.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c)); return new t(this.context, b) }, pluck: function (a) { return this.map(function (b) { return b[a] }) }, pop: x.pop, push: x.push, reduce: x.reduce || function (a, b) {
                return hb(this, a, b, 0, this.length,
                1)
            }, reduceRight: x.reduceRight || function (a, b) { return hb(this, a, b, this.length - 1, -1, -1) }, reverse: x.reverse, selector: null, shift: x.shift, sort: x.sort, splice: x.splice, toArray: function () { return x.slice.call(this) }, to$: function () { return g(this) }, toJQuery: function () { return g(this) }, unique: function () { return new t(this.context, Oa(this)) }, unshift: x.unshift
        }; t.extend = function (a, b, c) {
            if (c.length && b && (b instanceof t || b.__dt_wrapper)) {
                var d, e, f, h = function (a, b, c) {
                    return function () {
                        var d = b.apply(a, arguments); t.extend(d,
                        d, c.methodExt); return d
                    }
                }; d = 0; for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? h(a, f.val, f) : g.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt)
            }
        }; t.register = p = function (a, b) {
            if (g.isArray(a)) for (var c = 0, d = a.length; c < d; c++) t.register(a[c], b); else for (var e = a.split("."), f = Ub, h, i, c = 0, d = e.length; c < d; c++) {
                h = (i = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c]; var j; a: { j = 0; for (var n = f.length; j < n; j++) if (f[j].name === h) { j = f[j]; break a } j = null } j || (j = {
                    name: h,
                    val: {}, methodExt: [], propExt: []
                }, f.push(j)); c === d - 1 ? j.val = b : f = i ? j.methodExt : j.propExt
            }
        }; t.registerPlural = s = function (a, b, c) { t.register(a, c); t.register(b, function () { var a = c.apply(this, arguments); return a === this ? this : a instanceof t ? a.length ? g.isArray(a[0]) ? new t(a.context, a[0]) : a[0] : k : a }) }; p("tables()", function (a) {
            var b; if (a) {
                b = t; var c = this.context; if ("number" === typeof a) a = [c[a]]; else var d = g.map(c, function (a) { return a.nTable }), a = g(d).filter(a).map(function () { var a = g.inArray(this, d); return c[a] }).toArray();
                b = new b(a)
            } else b = this; return b
        }); p("table()", function (a) { var a = this.tables(a), b = a.context; return b.length ? new t(b[0]) : a }); s("tables().nodes()", "table().node()", function () { return this.iterator("table", function (a) { return a.nTable }, 1) }); s("tables().body()", "table().body()", function () { return this.iterator("table", function (a) { return a.nTBody }, 1) }); s("tables().header()", "table().header()", function () { return this.iterator("table", function (a) { return a.nTHead }, 1) }); s("tables().footer()", "table().footer()",
        function () { return this.iterator("table", function (a) { return a.nTFoot }, 1) }); s("tables().containers()", "table().container()", function () { return this.iterator("table", function (a) { return a.nTableWrapper }, 1) }); p("draw()", function (a) { return this.iterator("table", function (b) { "page" === a ? M(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), R(b, !1 === a)) }) }); p("page()", function (a) { return a === k ? this.page.info().page : this.iterator("table", function (b) { Ua(b, a) }) }); p("page.info()", function () {
            if (0 === this.context.length) return k;
            var a = this.context[0], b = a._iDisplayStart, c = a._iDisplayLength, d = a.fnRecordsDisplay(), e = -1 === c; return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === z(a) }
        }); p("page.len()", function (a) { return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) { Sa(b, a) }) }); var Vb = function (a, b, c) {
            if (c) { var d = new t(a); d.one("draw", function () { c(d.ajax.json()) }) } if ("ssp" ==
            z(a)) R(a, b); else { C(a, !0); var e = a.jqXHR; e && 4 !== e.readyState && e.abort(); ra(a, [], function (c) { oa(a); for (var c = sa(a, c), d = 0, e = c.length; d < e; d++) L(a, c[d]); R(a, b); C(a, !1) }) }
        }; p("ajax.json()", function () { var a = this.context; if (0 < a.length) return a[0].json }); p("ajax.params()", function () { var a = this.context; if (0 < a.length) return a[0].oAjaxData }); p("ajax.reload()", function (a, b) { return this.iterator("table", function (c) { Vb(c, !1 === b, a) }) }); p("ajax.url()", function (a) {
            var b = this.context; if (a === k) {
                if (0 === b.length) return k;
                b = b[0]; return b.ajax ? g.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
            } return this.iterator("table", function (b) { g.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a })
        }); p("ajax.url().load()", function (a, b) { return this.iterator("table", function (c) { Vb(c, !1 === b, a) }) }); var $a = function (a, b, c, d, e) {
            var f = [], h, i, j, n, l, m; j = typeof b; if (!b || "string" === j || "function" === j || b.length === k) b = [b]; j = 0; for (n = b.length; j < n; j++) {
                i = b[j] && b[j].split ? b[j].split(",") : [b[j]]; l = 0; for (m = i.length; l < m; l++) (h = c("string" === typeof i[l] ?
                g.trim(i[l]) : i[l])) && h.length && f.push.apply(f, h)
            } a = v.selector[a]; if (a.length) { j = 0; for (n = a.length; j < n; j++) f = a[j](d, e, f) } return f
        }, ab = function (a) { a || (a = {}); a.filter && a.search === k && (a.search = a.filter); return g.extend({ search: "none", order: "current", page: "all" }, a) }, bb = function (a) { for (var b = 0, c = a.length; b < c; b++) if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a; a.length = 0; return a }, Da = function (a, b) {
            var c, d, e, f = [], h = a.aiDisplay; c = a.aiDisplayMaster; var i = b.search; d = b.order;
            e = b.page; if ("ssp" == z(a)) return "removed" === i ? [] : W(0, c.length); if ("current" == e) { c = a._iDisplayStart; for (d = a.fnDisplayEnd() ; c < d; c++) f.push(h[c]) } else if ("current" == d || "applied" == d) f = "none" == i ? c.slice() : "applied" == i ? h.slice() : g.map(c, function (a) { return -1 === g.inArray(a, h) ? a : null }); else if ("index" == d || "original" == d) { c = 0; for (d = a.aoData.length; c < d; c++) "none" == i ? f.push(c) : (e = g.inArray(c, h), (-1 === e && "removed" == i || 0 <= e && "applied" == i) && f.push(c)) } return f
        }; p("rows()", function (a, b) {
            a === k ? a = "" : g.isPlainObject(a) &&
            (b = a, a = ""); var b = ab(b), c = this.iterator("table", function (c) {
                var e = b; return $a("row", a, function (a) { var b = Qb(a); if (b !== null && !e) return [b]; var i = Da(c, e); if (b !== null && g.inArray(b, i) !== -1) return [b]; if (!a) return i; if (typeof a === "function") return g.map(i, function (b) { var e = c.aoData[b]; return a(b, e._aData, e.nTr) ? b : null }); b = Tb(ia(c.aoData, i, "nTr")); if (a.nodeName && g.inArray(a, b) !== -1) return [a._DT_RowIndex]; if (typeof a === "string" && a.charAt(0) === "#") { i = c.aIds[a.replace(/^#/, "")]; if (i !== k) return [i.idx] } return g(b).filter(a).map(function () { return this._DT_RowIndex }).toArray() },
                c, e)
            }, 1); c.selector.rows = a; c.selector.opts = b; return c
        }); p("rows().nodes()", function () { return this.iterator("row", function (a, b) { return a.aoData[b].nTr || k }, 1) }); p("rows().data()", function () { return this.iterator(!0, "rows", function (a, b) { return ia(a.aoData, b, "_aData") }, 1) }); s("rows().cache()", "row().cache()", function (a) { return this.iterator("row", function (b, c) { var d = b.aoData[c]; return "search" === a ? d._aFilterData : d._aSortData }, 1) }); s("rows().invalidate()", "row().invalidate()", function (a) {
            return this.iterator("row",
            function (b, c) { da(b, c, a) })
        }); s("rows().indexes()", "row().index()", function () { return this.iterator("row", function (a, b) { return b }, 1) }); s("rows().ids()", "row().id()", function (a) { for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) for (var f = 0, g = this[d].length; f < g; f++) { var i = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData); b.push((!0 === a ? "#" : "") + i) } return new t(c, b) }); s("rows().remove()", "row().remove()", function () {
            var a = this; this.iterator("row", function (b, c, d) {
                var e = b.aoData; e.splice(c, 1); for (var f = 0, g = e.length; f <
                g; f++) null !== e[f].nTr && (e[f].nTr._DT_RowIndex = f); pa(b.aiDisplayMaster, c); pa(b.aiDisplay, c); pa(a[d], c, !1); Ta(b)
            }); this.iterator("table", function (a) { for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c }); return this
        }); p("rows.add()", function (a) { var b = this.iterator("table", function (b) { var c, f, g, i = []; f = 0; for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? i.push(ma(b, c)[0]) : i.push(L(b, c)); return i }, 1), c = this.rows(-1); c.pop(); c.push.apply(c, b.toArray()); return c }); p("row()", function (a,
        b) { return bb(this.rows(a, b)) }); p("row().data()", function (a) { var b = this.context; if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k; b[0].aoData[this[0]]._aData = a; da(b[0], this[0], "data"); return this }); p("row().node()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null }); p("row.add()", function (a) {
            a instanceof g && a.length && (a = a[0]); var b = this.iterator("table", function (b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : L(b, a) });
            return this.row(b[0])
        }); var cb = function (a, b) { var c = a.context; if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k }, Wb = function (a, b) {
            var c = a.context; if (c.length && a.length) {
                var d = c[0].aoData[a[0]]; if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach(); var e = c[0], f = new t(e), g = e.aoData; f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"); 0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a,
                    b) { e === b && f.rows({ page: "current" }).eq(0).each(function (a) { a = g[a]; a._detailsShow && a._details.insertAfter(a.nTr) }) }), f.on("column-visibility.dt.DT_details", function (a, b) { if (e === b) for (var c, d = ba(b), f = 0, k = g.length; f < k; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d) }), f.on("destroy.dt.DT_details", function (a, b) { if (e === b) for (var c = 0, d = g.length; c < d; c++) g[c]._details && cb(f, c) }))
                }
            }
        }; p("row().child()", function (a, b) {
            var c = this.context; if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details :
            k; if (!0 === a) this.child.show(); else if (!1 === a) cb(this); else if (c.length && this.length) { var d = c[0], c = c[0].aoData[this[0]], e = [], f = function (a, b) { if (g.isArray(a) || a instanceof g) for (var c = 0, k = a.length; c < k; c++) f(a[c], b); else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = g("<tr><td/></tr>").addClass(b), g("td", c).addClass(b).html(a)[0].colSpan = ba(d), e.push(c[0])) }; f(a, b); c._details && c._details.remove(); c._details = g(e); c._detailsShow && c._details.insertAfter(c.nTr) } return this
        }); p(["row().child.show()",
        "row().child().show()"], function () { Wb(this, !0); return this }); p(["row().child.hide()", "row().child().hide()"], function () { Wb(this, !1); return this }); p(["row().child.remove()", "row().child().remove()"], function () { cb(this); return this }); p("row().child.isShown()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 }); var ec = /^(.+):(name|visIdx|visible)$/, Xb = function (a, b, c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++) c.push(y(a, e[d], b)); return c }; p("columns()",
        function (a, b) {
            a === k ? a = "" : g.isPlainObject(a) && (b = a, a = ""); var b = ab(b), c = this.iterator("table", function (c) {
                var e = a, f = b, h = c.aoColumns, i = D(h, "sName"), j = D(h, "nTh"); return $a("column", e, function (a) {
                    var b = Qb(a); if (a === "") return W(h.length); if (b !== null) return [b >= 0 ? b : h.length + b]; if (typeof a === "function") { var e = Da(c, f); return g.map(h, function (b, f) { return a(f, Xb(c, f, 0, 0, e), j[f]) ? f : null }) } var k = typeof a === "string" ? a.match(ec) : ""; if (k) switch (k[2]) {
                        case "visIdx": case "visible": b = parseInt(k[1], 10); if (b < 0) {
                            var m =
                            g.map(h, function (a, b) { return a.bVisible ? b : null }); return [m[m.length + b]]
                        } return [la(c, b)]; case "name": return g.map(i, function (a, b) { return a === k[1] ? b : null })
                    } else return g(j).filter(a).map(function () { return g.inArray(this, j) }).toArray()
                }, c, f)
            }, 1); c.selector.cols = a; c.selector.opts = b; return c
        }); s("columns().header()", "column().header()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTh }, 1) }); s("columns().footer()", "column().footer()", function () {
            return this.iterator("column",
            function (a, b) { return a.aoColumns[b].nTf }, 1)
        }); s("columns().data()", "column().data()", function () { return this.iterator("column-rows", Xb, 1) }); s("columns().dataSrc()", "column().dataSrc()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].mData }, 1) }); s("columns().cache()", "column().cache()", function (a) { return this.iterator("column-rows", function (b, c, d, e, f) { return ia(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) }); s("columns().nodes()", "column().nodes()", function () {
            return this.iterator("column-rows",
            function (a, b, c, d, e) { return ia(a.aoData, e, "anCells", b) }, 1)
        }); s("columns().visible()", "column().visible()", function (a, b) {
            return this.iterator("column", function (c, d) {
                if (a === k) return c.aoColumns[d].bVisible; var e = c.aoColumns, f = e[d], h = c.aoData, i, j, n; if (a !== k && f.bVisible !== a) {
                    if (a) { var l = g.inArray(!0, D(e, "bVisible"), d + 1); i = 0; for (j = h.length; i < j; i++) n = h[i].nTr, e = h[i].anCells, n && n.insertBefore(e[d], e[l] || null) } else g(D(c.aoData, "anCells", d)).detach(); f.bVisible = a; fa(c, c.aoHeader); fa(c, c.aoFooter); if (b === k ||
                    b) Y(c), (c.oScroll.sX || c.oScroll.sY) && Z(c); w(c, null, "column-visibility", [c, d, a]); ya(c)
                }
            })
        }); s("columns().indexes()", "column().index()", function (a) { return this.iterator("column", function (b, c) { return "visible" === a ? aa(b, c) : c }, 1) }); p("columns.adjust()", function () { return this.iterator("table", function (a) { Y(a) }, 1) }); p("column.index()", function (a, b) { if (0 !== this.context.length) { var c = this.context[0]; if ("fromVisible" === a || "toData" === a) return la(c, b); if ("fromData" === a || "toVisible" === a) return aa(c, b) } }); p("column()",
        function (a, b) { return bb(this.columns(a, b)) }); p("cells()", function (a, b, c) {
            g.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null)); g.isPlainObject(b) && (c = b, b = null); if (null === b || b === k) return this.iterator("table", function (b) {
                var d = a, e = ab(c), f = b.aoData, h = Da(b, e), i = Tb(ia(f, h, "anCells")), j = g([].concat.apply([], i)), l, n = b.aoColumns.length, m, p, t, s, u, v; return $a("cell", d, function (a) {
                    var c = typeof a === "function"; if (a === null || a === k || c) {
                        m = []; p = 0; for (t = h.length; p < t; p++) {
                            l = h[p]; for (s = 0; s < n; s++) {
                                u = { row: l, column: s };
                                if (c) { v = b.aoData[l]; a(u, y(b, l, s), v.anCells ? v.anCells[s] : null) && m.push(u) } else m.push(u)
                            }
                        } return m
                    } return g.isPlainObject(a) ? [a] : j.filter(a).map(function (a, b) { l = b.parentNode._DT_RowIndex; return { row: l, column: g.inArray(b, f[l].anCells) } }).toArray()
                }, b, e)
            }); var d = this.columns(b, c), e = this.rows(a, c), f, h, i, j, n, l = this.iterator("table", function (a, b) { f = []; h = 0; for (i = e[b].length; h < i; h++) { j = 0; for (n = d[b].length; j < n; j++) f.push({ row: e[b][h], column: d[b][j] }) } return f }, 1); g.extend(l.selector, { cols: b, rows: a, opts: c });
            return l
        }); s("cells().nodes()", "cell().node()", function () { return this.iterator("cell", function (a, b, c) { return (a = a.aoData[b].anCells) ? a[c] : k }, 1) }); p("cells().data()", function () { return this.iterator("cell", function (a, b, c) { return y(a, b, c) }, 1) }); s("cells().cache()", "cell().cache()", function (a) { a = "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function (b, c, d) { return b.aoData[c][a][d] }, 1) }); s("cells().render()", "cell().render()", function (a) {
            return this.iterator("cell", function (b, c, d) {
                return y(b,
                c, d, a)
            }, 1)
        }); s("cells().indexes()", "cell().index()", function () { return this.iterator("cell", function (a, b, c) { return { row: b, column: c, columnVisible: aa(a, c) } }, 1) }); s("cells().invalidate()", "cell().invalidate()", function (a) { return this.iterator("cell", function (b, c, d) { da(b, c, a, d) }) }); p("cell()", function (a, b, c) { return bb(this.cells(a, b, c)) }); p("cell().data()", function (a) {
            var b = this.context, c = this[0]; if (a === k) return b.length && c.length ? y(b[0], c[0].row, c[0].column) : k; Ja(b[0], c[0].row, c[0].column, a); da(b[0], c[0].row,
            "data", c[0].column); return this
        }); p("order()", function (a, b) { var c = this.context; if (a === k) return 0 !== c.length ? c[0].aaSorting : k; "number" === typeof a ? a = [[a, b]] : g.isArray(a[0]) || (a = Array.prototype.slice.call(arguments)); return this.iterator("table", function (b) { b.aaSorting = a.slice() }) }); p("order.listener()", function (a, b, c) { return this.iterator("table", function (d) { Pa(d, a, b, c) }) }); p(["columns().order()", "column().order()"], function (a) {
            var b = this; return this.iterator("table", function (c, d) {
                var e = []; g.each(b[d],
                function (b, c) { e.push([c, a]) }); c.aaSorting = e
            })
        }); p("search()", function (a, b, c, d) { var e = this.context; return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) { e.oFeatures.bFilter && ga(e, g.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1) }) }); s("columns().search()", "column().search()", function (a, b, c, d) {
            return this.iterator("column", function (e, f) {
                var h = e.aoPreSearchCols; if (a === k) return h[f].sSearch; e.oFeatures.bFilter &&
                (g.extend(h[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ga(e, e.oPreviousSearch, 1))
            })
        }); p("state()", function () { return this.context.length ? this.context[0].oSavedState : null }); p("state.clear()", function () { return this.iterator("table", function (a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) }); p("state.loaded()", function () { return this.context.length ? this.context[0].oLoadedState : null }); p("state.save()", function () { return this.iterator("table", function (a) { ya(a) }) });
        m.versionCheck = m.fnVersionCheck = function (a) { for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d; return !0 }; m.isDataTable = m.fnIsDataTable = function (a) { var b = g(a).get(0), c = !1; g.each(m.settings, function (a, e) { var f = e.nScrollHead ? g("table", e.nScrollHead)[0] : null, h = e.nScrollFoot ? g("table", e.nScrollFoot)[0] : null; if (e.nTable === b || f === b || h === b) c = !0 }); return c }; m.tables = m.fnTables = function (a) {
            var b = !1; g.isPlainObject(a) && (b =
            a.api, a = a.visible); var c = g.map(m.settings, function (b) { if (!a || a && g(b.nTable).is(":visible")) return b.nTable }); return b ? new t(c) : c
        }; m.util = { throttle: ua, escapeRegex: va }; m.camelToHungarian = I; p("$()", function (a, b) { var c = this.rows(b).nodes(), c = g(c); return g([].concat(c.filter(a).toArray(), c.find(a).toArray())) }); g.each(["on", "one", "off"], function (a, b) { p(b + "()", function () { var a = Array.prototype.slice.call(arguments); a[0].match(/\.dt\b/) || (a[0] += ".dt"); var d = g(this.tables().nodes()); d[b].apply(d, a); return this }) });
        p("clear()", function () { return this.iterator("table", function (a) { oa(a) }) }); p("settings()", function () { return new t(this.context, this.context) }); p("init()", function () { var a = this.context; return a.length ? a[0].oInit : null }); p("data()", function () { return this.iterator("table", function (a) { return D(a.aoData, "_aData") }).flatten() }); p("destroy()", function (a) {
            a = a || !1; return this.iterator("table", function (b) {
                var c = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, h = b.nTHead, i = b.nTFoot, j = g(e), f = g(f),
                k = g(b.nTableWrapper), l = g.map(b.aoData, function (a) { return a.nTr }), p; b.bDestroying = !0; w(b, "aoDestroyCallback", "destroy", [b]); a || (new t(b)).columns().visible(!0); k.unbind(".DT").find(":not(tbody *)").unbind(".DT"); g(Fa).unbind(".DT-" + b.sInstance); e != h.parentNode && (j.children("thead").detach(), j.append(h)); i && e != i.parentNode && (j.children("tfoot").detach(), j.append(i)); b.aaSorting = []; b.aaSortingFixed = []; xa(b); g(l).removeClass(b.asStripeClasses.join(" ")); g("th, td", h).removeClass(d.sSortable + " " + d.sSortableAsc +
                " " + d.sSortableDesc + " " + d.sSortableNone); b.bJUI && (g("th span." + d.sSortIcon + ", td span." + d.sSortIcon, h).detach(), g("th, td", h).each(function () { var a = g("div." + d.sSortJUIWrapper, this); g(this).append(a.contents()); a.detach() })); f.children().detach(); f.append(l); h = a ? "remove" : "detach"; j[h](); k[h](); !a && c && (c.insertBefore(e, b.nTableReinsertBefore), j.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function (a) { g(this).addClass(b.asDestroyStripes[a % p]) }));
                c = g.inArray(b, m.settings); -1 !== c && m.settings.splice(c, 1)
            })
        }); g.each(["column", "row", "cell"], function (a, b) { p(b + "s().every()", function (a) { return this.iterator(b, function (d, e, f, g, i) { a.call((new t(d))[b](e, "cell" === b ? f : k), e, f, g, i) }) }) }); p("i18n()", function (a, b, c) { var d = this.context[0], a = P(a)(d.oLanguage); a === k && (a = b); c !== k && g.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._); return a.replace("%d", c) }); m.version = "1.10.8"; m.settings = []; m.models = {}; m.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };
        m.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }; m.models.oColumn = {
            idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null,
            sWidth: null, sWidthOrig: null
        }; m.defaults = {
            aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bJQueryUI: !1, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function (a) {
                return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                this.oLanguage.sThousands)
            }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function (a) { try { return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname)) } catch (b) { } }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function (a, b) {
                try {
                    (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance +
                    "_" + location.pathname, JSON.stringify(b))
                } catch (c) { }
            }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: {
                oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found"
            }, oSearch: g.extend({}, m.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId"
        };
        X(m.defaults); m.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }; X(m.defaults.column); m.models.oSettings = {
            oFeatures: {
                bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null,
                bSortClasses: null, bStateSave: null
            }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [],
            aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: k, oAjaxData: k, fnServerData: null, aoServerParams: [],
            sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, bJUI: null, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function () { return "ssp" == z(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length }, fnRecordsDisplay: function () { return "ssp" == z(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function () {
                var a = this._iDisplayLength,
                b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate; return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
            }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null
        }; m.ext = v = {
            buttons: {}, classes: {}, errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: {
                detect: [],
                search: {}, order: {}
            }, _unique: 0, fnVersionCheck: m.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: m.version
        }; g.extend(v, { afnFiltering: v.search, aTypes: v.type.detect, ofnSearch: v.type.search, oSort: v.type.order, afnSortData: v.order, aoFeatures: v.feature, oApi: v.internal, oStdClasses: v.classes, oPagination: v.pager }); g.extend(m.ext.classes, {
            sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: ""
        }); var Ea = "", Ea = "", G = Ea + "ui-state-default", ja = Ea + "css_right ui-icon ui-icon-", Yb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix"; g.extend(m.ext.oJUIClasses, m.ext.classes, {
            sPageButton: "fg-button ui-button " +
            G, sPageButtonActive: "ui-state-disabled", sPageButtonDisabled: "ui-state-disabled", sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_", sSortAsc: G + " sorting_asc", sSortDesc: G + " sorting_desc", sSortable: G + " sorting", sSortableAsc: G + " sorting_asc_disabled", sSortableDesc: G + " sorting_desc_disabled", sSortableNone: G + " sorting_disabled", sSortJUIAsc: ja + "triangle-1-n", sSortJUIDesc: ja + "triangle-1-s", sSortJUI: ja + "carat-2-n-s", sSortJUIAscAllowed: ja + "carat-1-n", sSortJUIDescAllowed: ja +
            "carat-1-s", sSortJUIWrapper: "DataTables_sort_wrapper", sSortIcon: "DataTables_sort_icon", sScrollHead: "dataTables_scrollHead " + G, sScrollFoot: "dataTables_scrollFoot " + G, sHeaderTH: G, sFooterTH: G, sJUIHeader: Yb + " ui-corner-tl ui-corner-tr", sJUIFooter: Yb + " ui-corner-bl ui-corner-br"
        }); var Nb = m.ext.pager; g.extend(Nb, {
            simple: function () { return ["previous", "next"] }, full: function () { return ["first", "previous", "next", "last"] }, numbers: function (a, b) { return [Aa(a, b)] }, simple_numbers: function (a, b) {
                return ["previous", Aa(a,
                b), "next"]
            }, full_numbers: function (a, b) { return ["first", "previous", Aa(a, b), "next", "last"] }, _numbers: Aa, numbers_length: 7
        }); g.extend(!0, m.ext.renderer, {
            pageButton: {
                _: function (a, b, c, d, e, f) {
                    var h = a.oClasses, i = a.oLanguage.oPaginate, j, k, l = 0, m = function (b, d) {
                        var p, q, t, s, u = function (b) { Ua(a, b.data.action, true) }; p = 0; for (q = d.length; p < q; p++) {
                            s = d[p]; if (g.isArray(s)) { t = g("<" + (s.DT_el || "div") + "/>").appendTo(b); m(t, s) } else {
                                j = null; k = ""; switch (s) {
                                    case "ellipsis": b.append('<span class="ellipsis">&#x2026;</span>'); break;
                                    case "first": j = i.sFirst; k = s + (e > 0 ? "" : " " + h.sPageButtonDisabled); break; case "previous": j = i.sPrevious; k = s + (e > 0 ? "" : " " + h.sPageButtonDisabled); break; case "next": j = i.sNext; k = s + (e < f - 1 ? "" : " " + h.sPageButtonDisabled); break; case "last": j = i.sLast; k = s + (e < f - 1 ? "" : " " + h.sPageButtonDisabled); break; default: j = s + 1; k = e === s ? h.sPageButtonActive : ""
                                } if (j !== null) {
                                    t = g("<a>", { "class": h.sPageButton + " " + k, "aria-controls": a.sTableId, "data-dt-idx": l, tabindex: a.iTabIndex, id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null }).html(j).appendTo(b);
                                    Wa(t, { action: s }, u); l++
                                }
                            }
                        }
                    }, p; try { p = g(b).find(T.activeElement).data("dt-idx") } catch (t) { } m(g(b).empty(), d); p && g(b).find("[data-dt-idx=" + p + "]").focus()
                }
            }
        }); g.extend(m.ext.type.detect, [function (a, b) { var c = b.oLanguage.sDecimal; return Za(a, c) ? "num" + c : null }, function (a) { if (a && !(a instanceof Date) && (!bc.test(a) || !cc.test(a))) return null; var b = Date.parse(a); return null !== b && !isNaN(b) || K(a) ? "date" : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Za(a, c, !0) ? "num-fmt" + c : null }, function (a, b) {
            var c = b.oLanguage.sDecimal;
            return Sb(a, c) ? "html-num" + c : null
        }, function (a, b) { var c = b.oLanguage.sDecimal; return Sb(a, c, !0) ? "html-num-fmt" + c : null }, function (a) { return K(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null }]); g.extend(m.ext.type.search, { html: function (a) { return K(a) ? a : "string" === typeof a ? a.replace(Pb, " ").replace(Ca, "") : "" }, string: function (a) { return K(a) ? a : "string" === typeof a ? a.replace(Pb, " ") : a } }); var Ba = function (a, b, c, d) {
            if (0 !== a && (!a || "-" === a)) return -Infinity; b && (a = Rb(a, b)); a.replace && (c && (a = a.replace(c, "")),
            d && (a = a.replace(d, ""))); return 1 * a
        }; g.extend(v.type.order, { "date-pre": function (a) { return Date.parse(a) || 0 }, "html-pre": function (a) { return K(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" }, "string-pre": function (a) { return K(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() }, "string-asc": function (a, b) { return a < b ? -1 : a > b ? 1 : 0 }, "string-desc": function (a, b) { return a < b ? 1 : a > b ? -1 : 0 } }); db(""); g.extend(!0, m.ext.renderer, {
            header: {
                _: function (a, b, c, d) {
                    g(a.nTable).on("order.dt.DT", function (e,
                    f, g, i) { if (a === f) { e = c.idx; b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(i[e] == "asc" ? d.sSortAsc : i[e] == "desc" ? d.sSortDesc : c.sSortingClass) } })
                }, jqueryui: function (a, b, c, d) {
                    g("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(g("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b); g(a.nTable).on("order.dt.DT", function (e, f, g, i) {
                        if (a === f) {
                            e = c.idx; b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(i[e] == "asc" ? d.sSortAsc : i[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                            b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(i[e] == "asc" ? d.sSortJUIAsc : i[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                        }
                    })
                }
            }
        }); m.render = {
            number: function (a, b, c, d, e) {
                return {
                    display: function (f) {
                        if ("number" !== typeof f && "string" !== typeof f) return f; var g = 0 > f ? "-" : "", f = Math.abs(parseFloat(f)), i = parseInt(f, 10), f = c ? b + (f - i).toFixed(c).substring(2) : ""; return g + (d || "") + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                        a) + f + (e || "")
                    }
                }
            }
        }; g.extend(m.ext.internal, {
            _fnExternApiFunc: Ob, _fnBuildAjax: ra, _fnAjaxUpdate: lb, _fnAjaxParameters: ub, _fnAjaxUpdateDraw: vb, _fnAjaxDataSrc: sa, _fnAddColumn: Ga, _fnColumnOptions: ka, _fnAdjustColumnSizing: Y, _fnVisibleToColumnIndex: la, _fnColumnIndexToVisible: aa, _fnVisbleColumns: ba, _fnGetColumns: $, _fnColumnTypes: Ia, _fnApplyColumnDefs: ib, _fnHungarianMap: X, _fnCamelToHungarian: I, _fnLanguageCompat: S, _fnBrowserDetect: gb, _fnAddData: L, _fnAddTr: ma, _fnNodeToDataIndex: function (a, b) {
                return b._DT_RowIndex !==
                k ? b._DT_RowIndex : null
            }, _fnNodeToColumnIndex: function (a, b, c) { return g.inArray(c, a.aoData[b].anCells) }, _fnGetCellData: y, _fnSetCellData: Ja, _fnSplitObjNotation: La, _fnGetObjectDataFn: P, _fnSetObjectDataFn: Q, _fnGetDataMaster: Ma, _fnClearTable: oa, _fnDeleteIndex: pa, _fnInvalidate: da, _fnGetRowElements: na, _fnCreateTr: Ka, _fnBuildHead: kb, _fnDrawHead: fa, _fnDraw: M, _fnReDraw: R, _fnAddOptionsHtml: nb, _fnDetectHeader: ea, _fnGetUniqueThs: qa, _fnFeatureHtmlFilter: pb, _fnFilterComplete: ga, _fnFilterCustom: yb, _fnFilterColumn: xb,
            _fnFilter: wb, _fnFilterCreateSearch: Ra, _fnEscapeRegex: va, _fnFilterData: zb, _fnFeatureHtmlInfo: sb, _fnUpdateInfo: Cb, _fnInfoMacros: Db, _fnInitialise: ha, _fnInitComplete: ta, _fnLengthChange: Sa, _fnFeatureHtmlLength: ob, _fnFeatureHtmlPaginate: tb, _fnPageChange: Ua, _fnFeatureHtmlProcessing: qb, _fnProcessingDisplay: C, _fnFeatureHtmlTable: rb, _fnScrollDraw: Z, _fnApplyToChildren: H, _fnCalculateColumnWidths: Ha, _fnThrottle: ua, _fnConvertToWidth: Fb, _fnGetWidestNode: Gb, _fnGetMaxLenString: Hb, _fnStringToCss: u, _fnScrollBarWidth: Ib,
            _fnSortFlatten: V, _fnSort: mb, _fnSortAria: Kb, _fnSortListener: Va, _fnSortAttachListener: Pa, _fnSortingClasses: xa, _fnSortData: Jb, _fnSaveState: ya, _fnLoadState: Lb, _fnSettingsFromNode: za, _fnLog: J, _fnMap: F, _fnBindAction: Wa, _fnCallbackReg: A, _fnCallbackFire: w, _fnLengthOverflow: Ta, _fnRenderer: Qa, _fnDataSource: z, _fnRowAttributes: Na, _fnCalculateEnd: function () { }
        }); g.fn.dataTable = m; g.fn.dataTableSettings = m.settings; g.fn.dataTableExt = m.ext; g.fn.DataTable = function (a) { return g(this).dataTable(a).api() }; g.each(m, function (a,
        b) { g.fn.DataTable[a] = b }); return g.fn.dataTable
    }; "function" === typeof define && define.amd ? define("datatables", ["jquery"], S) : "object" === typeof exports ? module.exports = S(require("jquery")) : jQuery && !jQuery.fn.dataTable && S(jQuery)
})(window, document);