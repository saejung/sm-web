!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var n;
        "undefined" != typeof window ? n = window : "undefined" != typeof global ? n = global : "undefined" != typeof self && (n = self), 
        n.virtualDom = e();
    }
}(function() {
    return function e(n, t, r) {
        function o(s, u) {
            if (!t[s]) {
                if (!n[s]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) return a(s, !0);
                    if (i) return i(s, !0);
                    var f = new Error("Cannot find module '" + s + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var v = t[s] = {
                    exports: {}
                };
                n[s][0].call(v.exports, function(e) {
                    var t = n[s][1][e];
                    return o(t || e);
                }, v, v.exports, e, n, t, r);
            }
            return t[s].exports;
        }
        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
        return o;
    }({
        1: [ function(e, n, t) {
            var r = e("./vdom/create-element.js");
            n.exports = r;
        }, {
            "./vdom/create-element.js": 15
        } ],
        2: [ function(e, n, t) {
            var r = e("./vtree/diff.js");
            n.exports = r;
        }, {
            "./vtree/diff.js": 35
        } ],
        3: [ function(e, n, t) {
            var r = e("./virtual-hyperscript/index.js");
            n.exports = r;
        }, {
            "./virtual-hyperscript/index.js": 22
        } ],
        4: [ function(e, n, t) {
            var r = e("./diff.js"), o = e("./patch.js"), i = e("./h.js"), s = e("./create-element.js"), u = e("./vnode/vnode.js"), a = e("./vnode/vtext.js");
            n.exports = {
                diff: r,
                patch: o,
                h: i,
                create: s,
                VNode: u,
                VText: a
            };
        }, {
            "./create-element.js": 1,
            "./diff.js": 2,
            "./h.js": 3,
            "./patch.js": 13,
            "./vnode/vnode.js": 31,
            "./vnode/vtext.js": 33
        } ],
        5: [ function(e, n, t) {
            n.exports = function(e) {
                var n = String.prototype.split, t = /()??/.exec("")[1] === e;
                return function(r, o, i) {
                    if ("[object RegExp]" !== Object.prototype.toString.call(o)) return n.call(r, o, i);
                    var s, u, a, f, v = [], c = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.extended ? "x" : "") + (o.sticky ? "y" : ""), d = 0, o = new RegExp(o.source, c + "g");
                    for (r += "", t || (s = new RegExp("^" + o.source + "$(?!\\s)", c)), i = i === e ? -1 >>> 0 : i >>> 0; (u = o.exec(r)) && !((a = u.index + u[0].length) > d && (v.push(r.slice(d, u.index)), 
                    !t && u.length > 1 && u[0].replace(s, function() {
                        for (var n = 1; n < arguments.length - 2; n++) arguments[n] === e && (u[n] = e);
                    }), u.length > 1 && u.index < r.length && Array.prototype.push.apply(v, u.slice(1)), 
                    f = u[0].length, d = a, v.length >= i)); ) o.lastIndex === u.index && o.lastIndex++;
                    return d === r.length ? !f && o.test("") || v.push("") : v.push(r.slice(d)), v.length > i ? v.slice(0, i) : v;
                };
            }();
        }, {} ],
        6: [ function(e, n, t) {}, {} ],
        7: [ function(e, n, t) {
            "use strict";
            e("individual/one-version")("ev-store", "7");
            var r = "__EV_STORE_KEY@7";
            n.exports = function(e) {
                var n = e[r];
                return n || (n = e[r] = {}), n;
            };
        }, {
            "individual/one-version": 9
        } ],
        8: [ function(e, n, t) {
            (function(e) {
                "use strict";
                var t = "undefined" != typeof window ? window : void 0 !== e ? e : {};
                n.exports = function(e, n) {
                    return e in t ? t[e] : (t[e] = n, n);
                };
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {} ],
        9: [ function(e, n, t) {
            "use strict";
            var r = e("./index.js");
            n.exports = function(e, n, t) {
                var o = "__INDIVIDUAL_ONE_VERSION_" + e, i = r(o + "_ENFORCE_SINGLETON", n);
                if (i !== n) throw new Error("Can only have one copy of " + e + ".\nYou already have version " + i + " installed.\nThis means you cannot install version " + n);
                return r(o, t);
            };
        }, {
            "./index.js": 8
        } ],
        10: [ function(e, n, t) {
            (function(t) {
                var r = void 0 !== t ? t : "undefined" != typeof window ? window : {}, o = e("min-document");
                if ("undefined" != typeof document) n.exports = document; else {
                    var i = r["__GLOBAL_DOCUMENT_CACHE@4"];
                    i || (i = r["__GLOBAL_DOCUMENT_CACHE@4"] = o), n.exports = i;
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {
            "min-document": 6
        } ],
        11: [ function(e, n, t) {
            "use strict";
            n.exports = function(e) {
                return "object" == typeof e && null !== e;
            };
        }, {} ],
        12: [ function(e, n, t) {
            var r = Array.isArray, o = Object.prototype.toString;
            n.exports = r || function(e) {
                return "[object Array]" === o.call(e);
            };
        }, {} ],
        13: [ function(e, n, t) {
            var r = e("./vdom/patch.js");
            n.exports = r;
        }, {
            "./vdom/patch.js": 18
        } ],
        14: [ function(e, n, t) {
            function r(e, n, t, r) {
                if (r) {
                    var o = r[n];
                    if (u(o)) o.unhook && o.unhook(e, n, t); else if ("attributes" === n) for (var i in o) e.removeAttribute(i); else if ("style" === n) for (var s in o) e.style[s] = ""; else e[n] = "string" == typeof o ? "" : null;
                }
            }
            function o(e, n, t, r, o) {
                var u = t ? t[r] : void 0;
                if ("attributes" !== r) if (u && s(u) && i(u) !== i(o)) e[r] = o; else {
                    s(e[r]) || (e[r] = {});
                    var a = "style" === r ? "" : void 0;
                    for (var f in o) {
                        var v = o[f];
                        e[r][f] = void 0 === v ? a : v;
                    }
                } else for (var c in o) {
                    var d = o[c];
                    void 0 === d ? e.removeAttribute(c) : e.setAttribute(c, d);
                }
            }
            function i(e) {
                return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0;
            }
            var s = e("is-object"), u = e("../vnode/is-vhook.js");
            n.exports = function(e, n, t) {
                for (var i in n) {
                    var a = n[i];
                    void 0 === a ? r(e, i, a, t) : u(a) ? (r(e, i, a, t), a.hook && a.hook(e, i, t ? t[i] : void 0)) : s(a) ? o(e, 0, t, i, a) : e[i] = a;
                }
            };
        }, {
            "../vnode/is-vhook.js": 26,
            "is-object": 11
        } ],
        15: [ function(e, n, t) {
            function r(e, n) {
                var t = n ? n.document || o : o, v = n ? n.warn : null;
                if (e = f(e).a, a(e)) return e.init();
                if (u(e)) return t.createTextNode(e.text);
                if (!s(e)) return v && v("Item is not a valid virtual dom node", e), null;
                var c = null === e.namespace ? t.createElement(e.tagName) : t.createElementNS(e.namespace, e.tagName), d = e.properties;
                i(c, d);
                for (var l = e.children, p = 0; p < l.length; p++) {
                    var h = r(l[p], n);
                    h && c.appendChild(h);
                }
                return c;
            }
            var o = e("global/document"), i = e("./apply-properties"), s = e("../vnode/is-vnode.js"), u = e("../vnode/is-vtext.js"), a = e("../vnode/is-widget.js"), f = e("../vnode/handle-thunk.js");
            n.exports = r;
        }, {
            "../vnode/handle-thunk.js": 24,
            "../vnode/is-vnode.js": 27,
            "../vnode/is-vtext.js": 28,
            "../vnode/is-widget.js": 29,
            "./apply-properties": 14,
            "global/document": 10
        } ],
        16: [ function(e, n, t) {
            function r(e, n, t, i, u) {
                if (i = i || {}, e) {
                    o(t, u, u) && (i[u] = e);
                    var a = n.children;
                    if (a) for (var f = e.childNodes, v = 0; v < n.children.length; v++) {
                        u += 1;
                        var c = a[v] || s, d = u + (c.count || 0);
                        o(t, u, d) && r(f[v], c, t, i, u), u = d;
                    }
                }
                return i;
            }
            function o(e, n, t) {
                if (0 === e.length) return !1;
                for (var r, o, i = 0, s = e.length - 1; i <= s; ) {
                    if (r = (s + i) / 2 >> 0, o = e[r], i === s) return o >= n && o <= t;
                    if (o < n) i = r + 1; else {
                        if (!(o > t)) return !0;
                        s = r - 1;
                    }
                }
                return !1;
            }
            function i(e, n) {
                return e > n ? 1 : -1;
            }
            var s = {};
            n.exports = function(e, n, t, o) {
                return t && 0 !== t.length ? (t.sort(i), r(e, n, t, o, 0)) : {};
            };
        }, {} ],
        17: [ function(e, n, t) {
            function r(e, n) {
                var t = e.parentNode;
                return t && t.removeChild(e), a(e, n), null;
            }
            function o(e, n, t) {
                var r = t.render(n, t);
                return e && e.appendChild(r), e;
            }
            function i(e, n, t, r) {
                var o;
                if (3 === e.nodeType) e.replaceData(0, e.length, t.text), o = e; else {
                    var i = e.parentNode;
                    o = r.render(t, r), i && o !== e && i.replaceChild(o, e);
                }
                return o;
            }
            function s(e, n, t, r) {
                var o, i = p(n, t);
                o = i ? t.update(n, e) || e : r.render(t, r);
                var s = e.parentNode;
                return s && o !== e && s.replaceChild(o, e), i || a(e, n), o;
            }
            function u(e, n, t, r) {
                var o = e.parentNode, i = r.render(t, r);
                return o && i !== e && o.replaceChild(i, e), i;
            }
            function a(e, n) {
                "function" == typeof n.destroy && d(n) && n.destroy(e);
            }
            function f(e, n) {
                for (var t, r, o, i = e.childNodes, s = {}, u = 0; u < n.removes.length; u++) t = i[(r = n.removes[u]).from], 
                r.key && (s[r.key] = t), e.removeChild(t);
                for (var a = i.length, f = 0; f < n.inserts.length; f++) t = s[(o = n.inserts[f]).key], 
                e.insertBefore(t, o.to >= a++ ? null : i[o.to]);
            }
            function v(e, n) {
                return e && n && e !== n && e.parentNode && e.parentNode.replaceChild(n, e), n;
            }
            var c = e("./apply-properties"), d = e("../vnode/is-widget.js"), l = e("../vnode/vpatch.js"), p = e("./update-widget");
            n.exports = function(e, n, t) {
                var a = e.type, d = e.vNode, p = e.patch;
                switch (a) {
                  case l.REMOVE:
                    return r(n, d);

                  case l.INSERT:
                    return o(n, p, t);

                  case l.VTEXT:
                    return i(n, 0, p, t);

                  case l.WIDGET:
                    return s(n, d, p, t);

                  case l.VNODE:
                    return u(n, 0, p, t);

                  case l.ORDER:
                    return f(n, p), n;

                  case l.PROPS:
                    return c(n, p, d.properties), n;

                  case l.THUNK:
                    return v(n, t.patch(n, p, t));

                  default:
                    return n;
                }
            };
        }, {
            "../vnode/is-widget.js": 29,
            "../vnode/vpatch.js": 32,
            "./apply-properties": 14,
            "./update-widget": 19
        } ],
        18: [ function(e, n, t) {
            function r(e, n, t) {
                return t = t || {}, t.patch = t.patch && t.patch !== r ? t.patch : o, t.render = t.render || f, 
                t.patch(e, n, t);
            }
            function o(e, n, t) {
                var r = s(n);
                if (0 === r.length) return e;
                var o = v(e, n.a, r), a = e.ownerDocument;
                t.document || a === u || (t.document = a);
                for (var f = 0; f < r.length; f++) {
                    var c = r[f];
                    e = i(e, o[c], n[c], t);
                }
                return e;
            }
            function i(e, n, t, r) {
                if (!n) return e;
                var o;
                if (a(t)) for (var i = 0; i < t.length; i++) o = c(t[i], n, r), n === e && (e = o); else o = c(t, n, r), 
                n === e && (e = o);
                return e;
            }
            function s(e) {
                var n = [];
                for (var t in e) "a" !== t && n.push(Number(t));
                return n;
            }
            var u = e("global/document"), a = e("x-is-array"), f = e("./create-element"), v = e("./dom-index"), c = e("./patch-op");
            n.exports = r;
        }, {
            "./create-element": 15,
            "./dom-index": 16,
            "./patch-op": 17,
            "global/document": 10,
            "x-is-array": 12
        } ],
        19: [ function(e, n, t) {
            var r = e("../vnode/is-widget.js");
            n.exports = function(e, n) {
                return !(!r(e) || !r(n)) && ("name" in e && "name" in n ? e.id === n.id : e.init === n.init);
            };
        }, {
            "../vnode/is-widget.js": 29
        } ],
        20: [ function(e, n, t) {
            "use strict";
            function r(e) {
                if (!(this instanceof r)) return new r(e);
                this.value = e;
            }
            var o = e("ev-store");
            n.exports = r, r.prototype.hook = function(e, n) {
                o(e)[n.substr(3)] = this.value;
            }, r.prototype.unhook = function(e, n) {
                o(e)[n.substr(3)] = void 0;
            };
        }, {
            "ev-store": 7
        } ],
        21: [ function(e, n, t) {
            "use strict";
            function r(e) {
                if (!(this instanceof r)) return new r(e);
                this.value = e;
            }
            n.exports = r, r.prototype.hook = function(e, n) {
                e[n] !== this.value && (e[n] = this.value);
            };
        }, {} ],
        22: [ function(e, n, t) {
            "use strict";
            function r(e, n, t, o) {
                if ("string" == typeof e) n.push(new c(e)); else if ("number" == typeof e) n.push(new c(String(e))); else if (i(e)) n.push(e); else {
                    if (!f(e)) {
                        if (null === e || void 0 === e) return;
                        throw u({
                            foreignObject: e,
                            parentVnode: {
                                tagName: t,
                                properties: o
                            }
                        });
                    }
                    for (var s = 0; s < e.length; s++) r(e[s], n, t, o);
                }
            }
            function o(e) {
                for (var n in e) if (e.hasOwnProperty(n)) {
                    var t = e[n];
                    if (h(t)) continue;
                    "ev-" === n.substr(0, 3) && (e[n] = x(t));
                }
            }
            function i(e) {
                return d(e) || l(e) || p(e) || y(e);
            }
            function s(e) {
                return "string" == typeof e || f(e) || i(e);
            }
            function u(e) {
                var n = new Error();
                return n.type = "virtual-hyperscript.unexpected.virtual-element", n.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + a(e.foreignObject) + ".\nThe parent vnode is:\n" + a(e.parentVnode), 
                n.foreignObject = e.foreignObject, n.parentVnode = e.parentVnode, n;
            }
            function a(e) {
                try {
                    return JSON.stringify(e, null, "    ");
                } catch (n) {
                    return String(e);
                }
            }
            var f = e("x-is-array"), v = e("../vnode/vnode.js"), c = e("../vnode/vtext.js"), d = e("../vnode/is-vnode"), l = e("../vnode/is-vtext"), p = e("../vnode/is-widget"), h = e("../vnode/is-vhook"), y = e("../vnode/is-thunk"), g = e("./parse-tag.js"), k = e("./hooks/soft-set-hook.js"), x = e("./hooks/ev-hook.js");
            n.exports = function(e, n, t) {
                var i, u, a, f, c = [];
                return !t && s(n) && (t = n, u = {}), u = u || n || {}, i = g(e, u), u.hasOwnProperty("key") && (a = u.key, 
                u.key = void 0), u.hasOwnProperty("namespace") && (f = u.namespace, u.namespace = void 0), 
                "INPUT" !== i || f || !u.hasOwnProperty("value") || void 0 === u.value || h(u.value) || (u.value = k(u.value)), 
                o(u), void 0 !== t && null !== t && r(t, c, i, u), new v(i, u, c, a, f);
            };
        }, {
            "../vnode/is-thunk": 25,
            "../vnode/is-vhook": 26,
            "../vnode/is-vnode": 27,
            "../vnode/is-vtext": 28,
            "../vnode/is-widget": 29,
            "../vnode/vnode.js": 31,
            "../vnode/vtext.js": 33,
            "./hooks/ev-hook.js": 20,
            "./hooks/soft-set-hook.js": 21,
            "./parse-tag.js": 23,
            "x-is-array": 12
        } ],
        23: [ function(e, n, t) {
            "use strict";
            var r = e("browser-split"), o = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/, i = /^\.|#/;
            n.exports = function(e, n) {
                if (!e) return "DIV";
                var t = !n.hasOwnProperty("id"), s = r(e, o), u = null;
                i.test(s[1]) && (u = "DIV");
                var a, f, v, c;
                for (c = 0; c < s.length; c++) (f = s[c]) && (v = f.charAt(0), u ? "." === v ? (a = a || []).push(f.substring(1, f.length)) : "#" === v && t && (n.id = f.substring(1, f.length)) : u = f);
                return a && (n.className && a.push(n.className), n.className = a.join(" ")), n.namespace ? u : u.toUpperCase();
            };
        }, {
            "browser-split": 5
        } ],
        24: [ function(e, n, t) {
            function r(e, n) {
                var t = e.vnode;
                if (t || (t = e.vnode = e.render(n)), !(o(t) || i(t) || s(t))) throw new Error("thunk did not return a valid node");
                return t;
            }
            var o = e("./is-vnode"), i = e("./is-vtext"), s = e("./is-widget"), u = e("./is-thunk");
            n.exports = function(e, n) {
                var t = e, o = n;
                return u(n) && (o = r(n, e)), u(e) && (t = r(e, null)), {
                    a: t,
                    b: o
                };
            };
        }, {
            "./is-thunk": 25,
            "./is-vnode": 27,
            "./is-vtext": 28,
            "./is-widget": 29
        } ],
        25: [ function(e, n, t) {
            n.exports = function(e) {
                return e && "Thunk" === e.type;
            };
        }, {} ],
        26: [ function(e, n, t) {
            n.exports = function(e) {
                return e && ("function" == typeof e.hook && !e.hasOwnProperty("hook") || "function" == typeof e.unhook && !e.hasOwnProperty("unhook"));
            };
        }, {} ],
        27: [ function(e, n, t) {
            var r = e("./version");
            n.exports = function(e) {
                return e && "VirtualNode" === e.type && e.version === r;
            };
        }, {
            "./version": 30
        } ],
        28: [ function(e, n, t) {
            var r = e("./version");
            n.exports = function(e) {
                return e && "VirtualText" === e.type && e.version === r;
            };
        }, {
            "./version": 30
        } ],
        29: [ function(e, n, t) {
            n.exports = function(e) {
                return e && "Widget" === e.type;
            };
        }, {} ],
        30: [ function(e, n, t) {
            n.exports = "2";
        }, {} ],
        31: [ function(e, n, t) {
            function r(e, n, t, r, o) {
                this.tagName = e, this.properties = n || f, this.children = t || v, this.key = null != r ? String(r) : void 0, 
                this.namespace = "string" == typeof o ? o : null;
                var c, d = t && t.length || 0, l = 0, p = !1, h = !1, y = !1;
                for (var g in n) if (n.hasOwnProperty(g)) {
                    var k = n[g];
                    a(k) && k.unhook && (c || (c = {}), c[g] = k);
                }
                for (var x = 0; x < d; x++) {
                    var m = t[x];
                    i(m) ? (l += m.count || 0, !p && m.hasWidgets && (p = !0), !h && m.hasThunks && (h = !0), 
                    y || !m.hooks && !m.descendantHooks || (y = !0)) : !p && s(m) ? "function" == typeof m.destroy && (p = !0) : !h && u(m) && (h = !0);
                }
                this.count = d + l, this.hasWidgets = p, this.hasThunks = h, this.hooks = c, this.descendantHooks = y;
            }
            var o = e("./version"), i = e("./is-vnode"), s = e("./is-widget"), u = e("./is-thunk"), a = e("./is-vhook");
            n.exports = r;
            var f = {}, v = [];
            r.prototype.version = o, r.prototype.type = "VirtualNode";
        }, {
            "./is-thunk": 25,
            "./is-vhook": 26,
            "./is-vnode": 27,
            "./is-widget": 29,
            "./version": 30
        } ],
        32: [ function(e, n, t) {
            function r(e, n, t) {
                this.type = Number(e), this.vNode = n, this.patch = t;
            }
            var o = e("./version");
            r.NONE = 0, r.VTEXT = 1, r.VNODE = 2, r.WIDGET = 3, r.PROPS = 4, r.ORDER = 5, r.INSERT = 6, 
            r.REMOVE = 7, r.THUNK = 8, n.exports = r, r.prototype.version = o, r.prototype.type = "VirtualPatch";
        }, {
            "./version": 30
        } ],
        33: [ function(e, n, t) {
            function r(e) {
                this.text = String(e);
            }
            var o = e("./version");
            n.exports = r, r.prototype.version = o, r.prototype.type = "VirtualText";
        }, {
            "./version": 30
        } ],
        34: [ function(e, n, t) {
            function r(e, n) {
                var t;
                for (var u in e) {
                    u in n || ((t = t || {})[u] = void 0);
                    var a = e[u], f = n[u];
                    if (a !== f) if (i(a) && i(f)) if (o(f) !== o(a)) (t = t || {})[u] = f; else if (s(f)) (t = t || {})[u] = f; else {
                        var v = r(a, f);
                        v && ((t = t || {})[u] = v);
                    } else (t = t || {})[u] = f;
                }
                for (var c in n) c in e || ((t = t || {})[c] = n[c]);
                return t;
            }
            function o(e) {
                return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0;
            }
            var i = e("is-object"), s = e("../vnode/is-vhook");
            n.exports = r;
        }, {
            "../vnode/is-vhook": 26,
            "is-object": 11
        } ],
        35: [ function(e, n, t) {
            function r(e, n) {
                var t = {
                    a: e
                };
                return o(e, n, t, 0), t;
            }
            function o(e, n, t, r) {
                if (e !== n) {
                    var o = t[r], u = !1;
                    if (w(e) || w(n)) a(e, n, t, r); else if (null == n) m(e) || (s(e, t, r), o = t[r]), 
                    o = h(o, new g(g.REMOVE, e, n)); else if (k(n)) if (k(e)) if (e.tagName === n.tagName && e.namespace === n.namespace && e.key === n.key) {
                        var f = O(e.properties, n.properties);
                        f && (o = h(o, new g(g.PROPS, e, f))), o = i(e, n, t, o, r);
                    } else o = h(o, new g(g.VNODE, e, n)), u = !0; else o = h(o, new g(g.VNODE, e, n)), 
                    u = !0; else x(n) ? x(e) ? e.text !== n.text && (o = h(o, new g(g.VTEXT, e, n))) : (o = h(o, new g(g.VTEXT, e, n)), 
                    u = !0) : m(n) && (m(e) || (u = !0), o = h(o, new g(g.WIDGET, e, n)));
                    o && (t[r] = o), u && s(e, t, r);
                }
            }
            function i(e, n, t, r, i) {
                for (var s = e.children, u = d(s, n.children), a = u.children, f = s.length, v = a.length, c = f > v ? f : v, l = 0; l < c; l++) {
                    var p = s[l], y = a[l];
                    i += 1, p ? o(p, y, t, i) : y && (r = h(r, new g(g.INSERT, null, y))), k(p) && p.count && (i += p.count);
                }
                return u.moves && (r = h(r, new g(g.ORDER, e, u.moves))), r;
            }
            function s(e, n, t) {
                v(e, n, t), u(e, n, t);
            }
            function u(e, n, t) {
                if (m(e)) "function" == typeof e.destroy && (n[t] = h(n[t], new g(g.REMOVE, e, null))); else if (k(e) && (e.hasWidgets || e.hasThunks)) for (var r = e.children, o = r.length, i = 0; i < o; i++) {
                    var s = r[i];
                    u(s, n, t += 1), k(s) && s.count && (t += s.count);
                } else w(e) && a(e, null, n, t);
            }
            function a(e, n, t, o) {
                var i = j(e, n), s = r(i.a, i.b);
                f(s) && (t[o] = new g(g.THUNK, null, s));
            }
            function f(e) {
                for (var n in e) if ("a" !== n) return !0;
                return !1;
            }
            function v(e, n, t) {
                if (k(e)) {
                    if (e.hooks && (n[t] = h(n[t], new g(g.PROPS, e, c(e.hooks)))), e.descendantHooks || e.hasThunks) for (var r = e.children, o = r.length, i = 0; i < o; i++) {
                        var s = r[i];
                        v(s, n, t += 1), k(s) && s.count && (t += s.count);
                    }
                } else w(e) && a(e, null, n, t);
            }
            function c(e) {
                var n = {};
                for (var t in e) n[t] = void 0;
                return n;
            }
            function d(e, n) {
                var t = p(n), r = t.keys, o = t.free;
                if (o.length === n.length) return {
                    children: n,
                    moves: null
                };
                var i = p(e), s = i.keys;
                if (i.free.length === e.length) return {
                    children: n,
                    moves: null
                };
                for (var u = [], a = 0, f = o.length, v = 0, c = 0; c < e.length; c++) {
                    var d, h = e[c];
                    h.key ? r.hasOwnProperty(h.key) ? (d = r[h.key], u.push(n[d])) : (d = c - v++, u.push(null)) : a < f ? (d = o[a++], 
                    u.push(n[d])) : (d = c - v++, u.push(null));
                }
                for (var y = a >= o.length ? n.length : o[a], g = 0; g < n.length; g++) {
                    var k = n[g];
                    k.key ? s.hasOwnProperty(k.key) || u.push(k) : g >= y && u.push(k);
                }
                for (var x, m = u.slice(), w = 0, j = [], O = [], N = 0; N < n.length; ) {
                    var E = n[N];
                    for (x = m[w]; null === x && m.length; ) j.push(l(m, w, null)), x = m[w];
                    x && x.key === E.key ? (w++, N++) : E.key ? (x && x.key && r[x.key] !== N + 1 ? (j.push(l(m, w, x.key)), 
                    (x = m[w]) && x.key === E.key ? w++ : O.push({
                        key: E.key,
                        to: N
                    })) : O.push({
                        key: E.key,
                        to: N
                    }), N++) : x && x.key && j.push(l(m, w, x.key));
                }
                for (;w < m.length; ) x = m[w], j.push(l(m, w, x && x.key));
                return j.length !== v || O.length ? {
                    children: u,
                    moves: {
                        removes: j,
                        inserts: O
                    }
                } : {
                    children: u,
                    moves: null
                };
            }
            function l(e, n, t) {
                return e.splice(n, 1), {
                    from: n,
                    key: t
                };
            }
            function p(e) {
                for (var n = {}, t = [], r = e.length, o = 0; o < r; o++) {
                    var i = e[o];
                    i.key ? n[i.key] = o : t.push(o);
                }
                return {
                    keys: n,
                    free: t
                };
            }
            function h(e, n) {
                return e ? (y(e) ? e.push(n) : e = [ e, n ], e) : n;
            }
            var y = e("x-is-array"), g = e("../vnode/vpatch"), k = e("../vnode/is-vnode"), x = e("../vnode/is-vtext"), m = e("../vnode/is-widget"), w = e("../vnode/is-thunk"), j = e("../vnode/handle-thunk"), O = e("./diff-props");
            n.exports = r;
        }, {
            "../vnode/handle-thunk": 24,
            "../vnode/is-thunk": 25,
            "../vnode/is-vnode": 27,
            "../vnode/is-vtext": 28,
            "../vnode/is-widget": 29,
            "../vnode/vpatch": 32,
            "./diff-props": 34,
            "x-is-array": 12
        } ]
    }, {}, [ 4 ])(4);
});
(function() {
    function n(n) {
        function r(r, t, e, u, i, o) {
            for (;i >= 0 && i < o; i += n) {
                var a = u ? u[i] : i;
                e = t(e, r[a], a, r);
            }
            return e;
        }
        return function(t, e, u, i) {
            e = b(e, i, 4);
            var o = !k(t) && m.keys(t), a = (o || t).length, c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = t[o ? o[c] : c], c += n), r(t, e, u, o, c, a);
        };
    }
    function r(n) {
        return function(r, t, e) {
            t = x(t, e);
            for (var u = O(r), i = n > 0 ? 0 : u - 1; i >= 0 && i < u; i += n) if (t(r[i], i, r)) return i;
            return -1;
        };
    }
    function t(n, r, t) {
        return function(e, u, i) {
            var o = 0, a = O(e);
            if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (t && i && a) return i = t(e, u), 
            e[i] === u ? i : -1;
            if (u !== u) return (i = r(l.call(e, o, a), m.isNaN)) >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && i < a; i += n) if (e[i] === u) return i;
            return -1;
        };
    }
    function e(n, r) {
        var t = I.length, e = n.constructor, u = m.isFunction(e) && e.prototype || a, i = "constructor";
        for (m.has(n, i) && !m.contains(r, i) && r.push(i); t--; ) (i = I[t]) in n && n[i] !== u[i] && !m.contains(r, i) && r.push(i);
    }
    var u = this, i = u._, o = Array.prototype, a = Object.prototype, c = Function.prototype, f = o.push, l = o.slice, s = a.toString, p = a.hasOwnProperty, h = Array.isArray, v = Object.keys, y = c.bind, d = Object.create, g = function() {}, m = function(n) {
        return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), 
    exports._ = m) : u._ = m, m.VERSION = "1.8.3";
    var b = function(n, r, t) {
        if (void 0 === r) return n;
        switch (null == t ? 3 : t) {
          case 1:
            return function(t) {
                return n.call(r, t);
            };

          case 2:
            return function(t, e) {
                return n.call(r, t, e);
            };

          case 3:
            return function(t, e, u) {
                return n.call(r, t, e, u);
            };

          case 4:
            return function(t, e, u, i) {
                return n.call(r, t, e, u, i);
            };
        }
        return function() {
            return n.apply(r, arguments);
        };
    }, x = function(n, r, t) {
        return null == n ? m.identity : m.isFunction(n) ? b(n, r, t) : m.isObject(n) ? m.matcher(n) : m.property(n);
    };
    m.iteratee = function(n, r) {
        return x(n, r, 1 / 0);
    };
    var _ = function(n, r) {
        return function(t) {
            var e = arguments.length;
            if (e < 2 || null == t) return t;
            for (var u = 1; u < e; u++) for (var i = arguments[u], o = n(i), a = o.length, c = 0; c < a; c++) {
                var f = o[c];
                r && void 0 !== t[f] || (t[f] = i[f]);
            }
            return t;
        };
    }, j = function(n) {
        if (!m.isObject(n)) return {};
        if (d) return d(n);
        g.prototype = n;
        var r = new g();
        return g.prototype = null, r;
    }, w = function(n) {
        return function(r) {
            return null == r ? void 0 : r[n];
        };
    }, A = Math.pow(2, 53) - 1, O = w("length"), k = function(n) {
        var r = O(n);
        return "number" == typeof r && r >= 0 && r <= A;
    };
    m.each = m.forEach = function(n, r, t) {
        r = b(r, t);
        var e, u;
        if (k(n)) for (e = 0, u = n.length; e < u; e++) r(n[e], e, n); else {
            var i = m.keys(n);
            for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n);
        }
        return n;
    }, m.map = m.collect = function(n, r, t) {
        r = x(r, t);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n);
        }
        return i;
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, r, t) {
        var e;
        if (void 0 !== (e = k(n) ? m.findIndex(n, r, t) : m.findKey(n, r, t)) && -1 !== e) return n[e];
    }, m.filter = m.select = function(n, r, t) {
        var e = [];
        return r = x(r, t), m.each(n, function(n, t, u) {
            r(n, t, u) && e.push(n);
        }), e;
    }, m.reject = function(n, r, t) {
        return m.filter(n, m.negate(x(r)), t);
    }, m.every = m.all = function(n, r, t) {
        r = x(r, t);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (!r(n[o], o, n)) return !1;
        }
        return !0;
    }, m.some = m.any = function(n, r, t) {
        r = x(r, t);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (r(n[o], o, n)) return !0;
        }
        return !1;
    }, m.contains = m.includes = m.include = function(n, r, t, e) {
        return k(n) || (n = m.values(n)), ("number" != typeof t || e) && (t = 0), m.indexOf(n, r, t) >= 0;
    }, m.invoke = function(n, r) {
        var t = l.call(arguments, 2), e = m.isFunction(r);
        return m.map(n, function(n) {
            var u = e ? r : n[r];
            return null == u ? u : u.apply(n, t);
        });
    }, m.pluck = function(n, r) {
        return m.map(n, m.property(r));
    }, m.where = function(n, r) {
        return m.filter(n, m.matcher(r));
    }, m.findWhere = function(n, r) {
        return m.find(n, m.matcher(r));
    }, m.max = function(n, r, t) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null == r && null != n) for (var a = 0, c = (n = k(n) ? n : m.values(n)).length; a < c; a++) (e = n[a]) > i && (i = e); else r = x(r, t), 
        m.each(n, function(n, t, e) {
            ((u = r(n, t, e)) > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u);
        });
        return i;
    }, m.min = function(n, r, t) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null == r && null != n) for (var a = 0, c = (n = k(n) ? n : m.values(n)).length; a < c; a++) (e = n[a]) < i && (i = e); else r = x(r, t), 
        m.each(n, function(n, t, e) {
            ((u = r(n, t, e)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u);
        });
        return i;
    }, m.shuffle = function(n) {
        for (var r, t = k(n) ? n : m.values(n), e = t.length, u = Array(e), i = 0; i < e; i++) (r = m.random(0, i)) !== i && (u[i] = u[r]), 
        u[r] = t[i];
        return u;
    }, m.sample = function(n, r, t) {
        return null == r || t ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, r));
    }, m.sortBy = function(n, r, t) {
        return r = x(r, t), m.pluck(m.map(n, function(n, t, e) {
            return {
                value: n,
                index: t,
                criteria: r(n, t, e)
            };
        }).sort(function(n, r) {
            var t = n.criteria, e = r.criteria;
            if (t !== e) {
                if (t > e || void 0 === t) return 1;
                if (t < e || void 0 === e) return -1;
            }
            return n.index - r.index;
        }), "value");
    };
    var F = function(n) {
        return function(r, t, e) {
            var u = {};
            return t = x(t, e), m.each(r, function(e, i) {
                var o = t(e, i, r);
                n(u, e, o);
            }), u;
        };
    };
    m.groupBy = F(function(n, r, t) {
        m.has(n, t) ? n[t].push(r) : n[t] = [ r ];
    }), m.indexBy = F(function(n, r, t) {
        n[t] = r;
    }), m.countBy = F(function(n, r, t) {
        m.has(n, t) ? n[t]++ : n[t] = 1;
    }), m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : [];
    }, m.size = function(n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length;
    }, m.partition = function(n, r, t) {
        r = x(r, t);
        var e = [], u = [];
        return m.each(n, function(n, t, i) {
            (r(n, t, i) ? e : u).push(n);
        }), [ e, u ];
    }, m.first = m.head = m.take = function(n, r, t) {
        if (null != n) return null == r || t ? n[0] : m.initial(n, n.length - r);
    }, m.initial = function(n, r, t) {
        return l.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
    }, m.last = function(n, r, t) {
        if (null != n) return null == r || t ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - r));
    }, m.rest = m.tail = m.drop = function(n, r, t) {
        return l.call(n, null == r || t ? 1 : r);
    }, m.compact = function(n) {
        return m.filter(n, m.identity);
    };
    var S = function(n, r, t, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); o < a; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                r || (c = S(c, r, t));
                var f = 0, l = c.length;
                for (u.length += l; f < l; ) u[i++] = c[f++];
            } else t || (u[i++] = c);
        }
        return u;
    };
    m.flatten = function(n, r) {
        return S(n, r, !1);
    }, m.without = function(n) {
        return m.difference(n, l.call(arguments, 1));
    }, m.uniq = m.unique = function(n, r, t, e) {
        m.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = x(t, e));
        for (var u = [], i = [], o = 0, a = O(n); o < a; o++) {
            var c = n[o], f = t ? t(c, o, n) : c;
            r ? (o && i === f || u.push(c), i = f) : t ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c);
        }
        return u;
    }, m.union = function() {
        return m.uniq(S(arguments, !0, !0));
    }, m.intersection = function(n) {
        for (var r = [], t = arguments.length, e = 0, u = O(n); e < u; e++) {
            var i = n[e];
            if (!m.contains(r, i)) {
                for (var o = 1; o < t && m.contains(arguments[o], i); o++) ;
                o === t && r.push(i);
            }
        }
        return r;
    }, m.difference = function(n) {
        var r = S(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(r, n);
        });
    }, m.zip = function() {
        return m.unzip(arguments);
    }, m.unzip = function(n) {
        for (var r = n && m.max(n, O).length || 0, t = Array(r), e = 0; e < r; e++) t[e] = m.pluck(n, e);
        return t;
    }, m.object = function(n, r) {
        for (var t = {}, e = 0, u = O(n); e < u; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
        return t;
    }, m.findIndex = r(1), m.findLastIndex = r(-1), m.sortedIndex = function(n, r, t, e) {
        for (var u = (t = x(t, e, 1))(r), i = 0, o = O(n); i < o; ) {
            var a = Math.floor((i + o) / 2);
            t(n[a]) < u ? i = a + 1 : o = a;
        }
        return i;
    }, m.indexOf = t(1, m.findIndex, m.sortedIndex), m.lastIndexOf = t(-1, m.findLastIndex), 
    m.range = function(n, r, t) {
        null == r && (r = n || 0, n = 0), t = t || 1;
        for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, 
        n += t) u[i] = n;
        return u;
    };
    var E = function(n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = j(n.prototype), o = n.apply(i, u);
        return m.isObject(o) ? o : i;
    };
    m.bind = function(n, r) {
        if (y && n.bind === y) return y.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var t = l.call(arguments, 2), e = function() {
            return E(n, e, r, this, t.concat(l.call(arguments)));
        };
        return e;
    }, m.partial = function(n) {
        var r = l.call(arguments, 1), t = function() {
            for (var e = 0, u = r.length, i = Array(u), o = 0; o < u; o++) i[o] = r[o] === m ? arguments[e++] : r[o];
            for (;e < arguments.length; ) i.push(arguments[e++]);
            return E(n, t, this, this, i);
        };
        return t;
    }, m.bindAll = function(n) {
        var r, t, e = arguments.length;
        if (e <= 1) throw new Error("bindAll must be passed function names");
        for (r = 1; r < e; r++) n[t = arguments[r]] = m.bind(n[t], n);
        return n;
    }, m.memoize = function(n, r) {
        var t = function(e) {
            var u = t.cache, i = "" + (r ? r.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
        };
        return t.cache = {}, t;
    }, m.delay = function(n, r) {
        var t = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, t);
        }, r);
    }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, r, t) {
        var e, u, i, o = null, a = 0;
        t || (t = {});
        var c = function() {
            a = !1 === t.leading ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null);
        };
        return function() {
            var f = m.now();
            a || !1 !== t.leading || (a = f);
            var l = r - (f - a);
            return e = this, u = arguments, l <= 0 || l > r ? (o && (clearTimeout(o), o = null), 
            a = f, i = n.apply(e, u), o || (e = u = null)) : o || !1 === t.trailing || (o = setTimeout(c, l)), 
            i;
        };
    }, m.debounce = function(n, r, t) {
        var e, u, i, o, a, c = function() {
            var f = m.now() - o;
            f < r && f >= 0 ? e = setTimeout(c, r - f) : (e = null, t || (a = n.apply(i, u), 
            e || (i = u = null)));
        };
        return function() {
            i = this, u = arguments, o = m.now();
            var f = t && !e;
            return e || (e = setTimeout(c, r)), f && (a = n.apply(i, u), i = u = null), a;
        };
    }, m.wrap = function(n, r) {
        return m.partial(r, n);
    }, m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments);
        };
    }, m.compose = function() {
        var n = arguments, r = n.length - 1;
        return function() {
            for (var t = r, e = n[r].apply(this, arguments); t--; ) e = n[t].call(this, e);
            return e;
        };
    }, m.after = function(n, r) {
        return function() {
            if (--n < 1) return r.apply(this, arguments);
        };
    }, m.before = function(n, r) {
        var t;
        return function() {
            return --n > 0 && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
        };
    }, m.once = m.partial(m.before, 2);
    var M = !{
        toString: null
    }.propertyIsEnumerable("toString"), I = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    m.keys = function(n) {
        if (!m.isObject(n)) return [];
        if (v) return v(n);
        var r = [];
        for (var t in n) m.has(n, t) && r.push(t);
        return M && e(n, r), r;
    }, m.allKeys = function(n) {
        if (!m.isObject(n)) return [];
        var r = [];
        for (var t in n) r.push(t);
        return M && e(n, r), r;
    }, m.values = function(n) {
        for (var r = m.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]];
        return e;
    }, m.mapObject = function(n, r, t) {
        r = x(r, t);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; a < i; a++) o[e = u[a]] = r(n[e], e, n);
        return o;
    }, m.pairs = function(n) {
        for (var r = m.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [ r[u], n[r[u]] ];
        return e;
    }, m.invert = function(n) {
        for (var r = {}, t = m.keys(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e];
        return r;
    }, m.functions = m.methods = function(n) {
        var r = [];
        for (var t in n) m.isFunction(n[t]) && r.push(t);
        return r.sort();
    }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function(n, r, t) {
        r = x(r, t);
        for (var e, u = m.keys(n), i = 0, o = u.length; i < o; i++) if (e = u[i], r(n[e], e, n)) return e;
    }, m.pick = function(n, r, t) {
        var e, u, i = {}, o = n;
        if (null == o) return i;
        m.isFunction(r) ? (u = m.allKeys(o), e = b(r, t)) : (u = S(arguments, !1, !1, 1), 
        e = function(n, r, t) {
            return r in t;
        }, o = Object(o));
        for (var a = 0, c = u.length; a < c; a++) {
            var f = u[a], l = o[f];
            e(l, f, o) && (i[f] = l);
        }
        return i;
    }, m.omit = function(n, r, t) {
        if (m.isFunction(r)) r = m.negate(r); else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            r = function(n, r) {
                return !m.contains(e, r);
            };
        }
        return m.pick(n, r, t);
    }, m.defaults = _(m.allKeys, !0), m.create = function(n, r) {
        var t = j(n);
        return r && m.extendOwn(t, r), t;
    }, m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n;
    }, m.tap = function(n, r) {
        return r(n), n;
    }, m.isMatch = function(n, r) {
        var t = m.keys(r), e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
            var o = t[i];
            if (r[o] !== u[o] || !(o in u)) return !1;
        }
        return !0;
    };
    var N = function(n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r) return n === r;
        n instanceof m && (n = n._wrapped), r instanceof m && (r = r._wrapped);
        var u = s.call(n);
        if (u !== s.call(r)) return !1;
        switch (u) {
          case "[object RegExp]":
          case "[object String]":
            return "" + n == "" + r;

          case "[object Number]":
            return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;

          case "[object Date]":
          case "[object Boolean]":
            return +n == +r;
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof r) return !1;
            var o = n.constructor, a = r.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in r) return !1;
        }
        t = t || [], e = e || [];
        for (var c = t.length; c--; ) if (t[c] === n) return e[c] === r;
        if (t.push(n), e.push(r), i) {
            if ((c = n.length) !== r.length) return !1;
            for (;c--; ) if (!N(n[c], r[c], t, e)) return !1;
        } else {
            var f, l = m.keys(n);
            if (c = l.length, m.keys(r).length !== c) return !1;
            for (;c--; ) if (f = l[c], !m.has(r, f) || !N(n[f], r[f], t, e)) return !1;
        }
        return t.pop(), e.pop(), !0;
    };
    m.isEqual = function(n, r) {
        return N(n, r);
    }, m.isEmpty = function(n) {
        return null == n || (k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length);
    }, m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType);
    }, m.isArray = h || function(n) {
        return "[object Array]" === s.call(n);
    }, m.isObject = function(n) {
        var r = typeof n;
        return "function" === r || "object" === r && !!n;
    }, m.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(n) {
        m["is" + n] = function(r) {
            return s.call(r) === "[object " + n + "]";
        };
    }), m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee");
    }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1;
    }), m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    }, m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n;
    }, m.isBoolean = function(n) {
        return !0 === n || !1 === n || "[object Boolean]" === s.call(n);
    }, m.isNull = function(n) {
        return null === n;
    }, m.isUndefined = function(n) {
        return void 0 === n;
    }, m.has = function(n, r) {
        return null != n && p.call(n, r);
    }, m.noConflict = function() {
        return u._ = i, this;
    }, m.identity = function(n) {
        return n;
    }, m.constant = function(n) {
        return function() {
            return n;
        };
    }, m.noop = function() {}, m.property = w, m.propertyOf = function(n) {
        return null == n ? function() {} : function(r) {
            return n[r];
        };
    }, m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n), function(r) {
            return m.isMatch(r, n);
        };
    }, m.times = function(n, r, t) {
        var e = Array(Math.max(0, n));
        r = b(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e;
    }, m.random = function(n, r) {
        return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1));
    }, m.now = Date.now || function() {
        return new Date().getTime();
    };
    var B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, T = m.invert(B), R = function(n) {
        var r = function(r) {
            return n[r];
        }, t = "(?:" + m.keys(n).join("|") + ")", e = RegExp(t), u = RegExp(t, "g");
        return function(n) {
            return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n;
        };
    };
    m.escape = R(B), m.unescape = R(T), m.result = function(n, r, t) {
        var e = null == n ? void 0 : n[r];
        return void 0 === e && (e = t), m.isFunction(e) ? e.call(n) : e;
    };
    var q = 0;
    m.uniqueId = function(n) {
        var r = ++q + "";
        return n ? n + r : r;
    }, m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var K = /(.)^/, z = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\u2028|\u2029/g, L = function(n) {
        return "\\" + z[n];
    };
    m.template = function(n, r, t) {
        !r && t && (r = t), r = m.defaults({}, r, m.templateSettings);
        var e = RegExp([ (r.escape || K).source, (r.interpolate || K).source, (r.evaluate || K).source ].join("|") + "|$", "g"), u = 0, i = "__p+='";
        n.replace(e, function(r, t, e, o, a) {
            return i += n.slice(u, a).replace(D, L), u = a + r.length, t ? i += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), 
            r;
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(r.variable || "obj", "_", i);
        } catch (n) {
            throw n.source = i, n;
        }
        var a = function(n) {
            return o.call(this, n, m);
        }, c = r.variable || "obj";
        return a.source = "function(" + c + "){\n" + i + "}", a;
    }, m.chain = function(n) {
        var r = m(n);
        return r._chain = !0, r;
    };
    var P = function(n, r) {
        return n._chain ? m(r).chain() : r;
    };
    m.mixin = function(n) {
        m.each(m.functions(n), function(r) {
            var t = m[r] = n[r];
            m.prototype[r] = function() {
                var n = [ this._wrapped ];
                return f.apply(n, arguments), P(this, t.apply(m, n));
            };
        });
    }, m.mixin(m), m.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(n) {
        var r = o[n];
        m.prototype[n] = function() {
            var t = this._wrapped;
            return r.apply(t, arguments), "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0], 
            P(this, t);
        };
    }), m.each([ "concat", "join", "slice" ], function(n) {
        var r = o[n];
        m.prototype[n] = function() {
            return P(this, r.apply(this._wrapped, arguments));
        };
    }), m.prototype.value = function() {
        return this._wrapped;
    }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return m;
    });
}).call(this);
!function(e, a) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : e.moment = a();
}(this, function() {
    "use strict";
    function e() {
        return nt.apply(null, arguments);
    }
    function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
    }
    function t(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e);
    }
    function s(e) {
        var a;
        for (a in e) return !1;
        return !0;
    }
    function n(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
    }
    function r(e, a) {
        var t, s = [];
        for (t = 0; t < e.length; ++t) s.push(a(e[t], t));
        return s;
    }
    function _(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
    }
    function d(e, a) {
        for (var t in a) _(a, t) && (e[t] = a[t]);
        return _(a, "toString") && (e.toString = a.toString), _(a, "valueOf") && (e.valueOf = a.valueOf), 
        e;
    }
    function i(e, a, t, s) {
        return We(e, a, t, s, !0).utc();
    }
    function o() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        };
    }
    function m(e) {
        return null == e._pf && (e._pf = o()), e._pf;
    }
    function u(e) {
        if (null == e._isValid) {
            var a = m(e), t = rt.call(a.parsedDateParts, function(e) {
                return null != e;
            }), s = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
            if (e._strict && (s = s && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), 
            null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s;
        }
        return e._isValid;
    }
    function l(e) {
        var a = i(NaN);
        return null != e ? d(m(a), e) : m(a).userInvalidated = !0, a;
    }
    function M(e) {
        return void 0 === e;
    }
    function h(e, a) {
        var t, s, n;
        if (M(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), M(a._i) || (e._i = a._i), 
        M(a._f) || (e._f = a._f), M(a._l) || (e._l = a._l), M(a._strict) || (e._strict = a._strict), 
        M(a._tzm) || (e._tzm = a._tzm), M(a._isUTC) || (e._isUTC = a._isUTC), M(a._offset) || (e._offset = a._offset), 
        M(a._pf) || (e._pf = m(a)), M(a._locale) || (e._locale = a._locale), _t.length > 0) for (t in _t) M(n = a[s = _t[t]]) || (e[s] = n);
        return e;
    }
    function L(a) {
        h(this, a), this._d = new Date(null != a._d ? a._d.getTime() : NaN), !1 === dt && (dt = !0, 
        e.updateOffset(this), dt = !1);
    }
    function c(e) {
        return e instanceof L || null != e && null != e._isAMomentObject;
    }
    function Y(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function y(e) {
        var a = +e, t = 0;
        return 0 !== a && isFinite(a) && (t = Y(a)), t;
    }
    function p(e, a, t) {
        var s, n = Math.min(e.length, a.length), r = Math.abs(e.length - a.length), _ = 0;
        for (s = 0; s < n; s++) (t && e[s] !== a[s] || !t && y(e[s]) !== y(a[s])) && _++;
        return _ + r;
    }
    function f(a) {
        !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a);
    }
    function k(a, t) {
        var s = !0;
        return d(function() {
            if (null != e.deprecationHandler && e.deprecationHandler(null, a), s) {
                for (var n, r = [], _ = 0; _ < arguments.length; _++) {
                    if (n = "", "object" == typeof arguments[_]) {
                        n += "\n[" + _ + "] ";
                        for (var d in arguments[0]) n += d + ": " + arguments[0][d] + ", ";
                        n = n.slice(0, -2);
                    } else n = arguments[_];
                    r.push(n);
                }
                f(a + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + new Error().stack), 
                s = !1;
            }
            return t.apply(this, arguments);
        }, t);
    }
    function D(a, t) {
        null != e.deprecationHandler && e.deprecationHandler(a, t), it[a] || (f(t), it[a] = !0);
    }
    function T(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
    }
    function g(e, a) {
        var s, n = d({}, e);
        for (s in a) _(a, s) && (t(e[s]) && t(a[s]) ? (n[s] = {}, d(n[s], e[s]), d(n[s], a[s])) : null != a[s] ? n[s] = a[s] : delete n[s]);
        for (s in e) _(e, s) && !_(a, s) && t(e[s]) && (n[s] = d({}, n[s]));
        return n;
    }
    function w(e) {
        null != e && this.set(e);
    }
    function v(e, a) {
        var t = e.toLowerCase();
        Lt[t] = Lt[t + "s"] = Lt[a] = e;
    }
    function S(e) {
        return "string" == typeof e ? Lt[e] || Lt[e.toLowerCase()] : void 0;
    }
    function H(e) {
        var a, t, s = {};
        for (t in e) _(e, t) && (a = S(t)) && (s[a] = e[t]);
        return s;
    }
    function b(e, a) {
        ct[e] = a;
    }
    function j(e) {
        var a = [];
        for (var t in e) a.push({
            unit: t,
            priority: ct[t]
        });
        return a.sort(function(e, a) {
            return e.priority - a.priority;
        }), a;
    }
    function x(a, t) {
        return function(s) {
            return null != s ? (W(this, a, s), e.updateOffset(this, t), this) : P(this, a);
        };
    }
    function P(e, a) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN;
    }
    function W(e, a, t) {
        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + a](t);
    }
    function A(e, a, t) {
        var s = "" + Math.abs(e), n = a - s.length;
        return (e >= 0 ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
    }
    function E(e, a, t, s) {
        var n = s;
        "string" == typeof s && (n = function() {
            return this[s]();
        }), e && (ft[e] = n), a && (ft[a[0]] = function() {
            return A(n.apply(this, arguments), a[1], a[2]);
        }), t && (ft[t] = function() {
            return this.localeData().ordinal(n.apply(this, arguments), e);
        });
    }
    function F(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
    }
    function z(e) {
        var a, t, s = e.match(Yt);
        for (a = 0, t = s.length; a < t; a++) ft[s[a]] ? s[a] = ft[s[a]] : s[a] = F(s[a]);
        return function(a) {
            var n, r = "";
            for (n = 0; n < t; n++) r += s[n] instanceof Function ? s[n].call(a, e) : s[n];
            return r;
        };
    }
    function O(e, a) {
        return e.isValid() ? (a = J(a, e.localeData()), pt[a] = pt[a] || z(a), pt[a](e)) : e.localeData().invalidDate();
    }
    function J(e, a) {
        var t = 5;
        for (yt.lastIndex = 0; t >= 0 && yt.test(e); ) e = e.replace(yt, function(e) {
            return a.longDateFormat(e) || e;
        }), yt.lastIndex = 0, t -= 1;
        return e;
    }
    function R(e, a, t) {
        Ot[e] = T(a) ? a : function(e, s) {
            return e && t ? t : a;
        };
    }
    function C(e, a) {
        return _(Ot, e) ? Ot[e](a._strict, a._locale) : new RegExp(G(e));
    }
    function G(e) {
        return I(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, a, t, s, n) {
            return a || t || s || n;
        }));
    }
    function I(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function N(e, a) {
        var t, s = a;
        for ("string" == typeof e && (e = [ e ]), "number" == typeof a && (s = function(e, t) {
            t[a] = y(e);
        }), t = 0; t < e.length; t++) Jt[e[t]] = s;
    }
    function U(e, a) {
        N(e, function(e, t, s, n) {
            s._w = s._w || {}, a(e, s._w, s, n);
        });
    }
    function V(e, a, t) {
        null != a && _(Jt, e) && Jt[e](a, t._a, t, e);
    }
    function $(e, a) {
        return new Date(Date.UTC(e, a + 1, 0)).getUTCDate();
    }
    function K(e, a, t) {
        var s, n, r, _ = e.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
        this._shortMonthsParse = [], s = 0; s < 12; ++s) r = i([ 2e3, s ]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), 
        this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
        return t ? "MMM" === a ? -1 !== (n = mt.call(this._shortMonthsParse, _)) ? n : null : -1 !== (n = mt.call(this._longMonthsParse, _)) ? n : null : "MMM" === a ? -1 !== (n = mt.call(this._shortMonthsParse, _)) ? n : -1 !== (n = mt.call(this._longMonthsParse, _)) ? n : null : -1 !== (n = mt.call(this._longMonthsParse, _)) ? n : -1 !== (n = mt.call(this._shortMonthsParse, _)) ? n : null;
    }
    function Z(e, a) {
        var t;
        if (!e.isValid()) return e;
        if ("string" == typeof a) if (/^\d+$/.test(a)) a = y(a); else if ("number" != typeof (a = e.localeData().monthsParse(a))) return e;
        return t = Math.min(e.date(), $(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t), 
        e;
    }
    function q(a) {
        return null != a ? (Z(this, a), e.updateOffset(this, !0), this) : P(this, "Month");
    }
    function B() {
        function e(e, a) {
            return a.length - e.length;
        }
        var a, t, s = [], n = [], r = [];
        for (a = 0; a < 12; a++) t = i([ 2e3, a ]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), 
        r.push(this.months(t, "")), r.push(this.monthsShort(t, ""));
        for (s.sort(e), n.sort(e), r.sort(e), a = 0; a < 12; a++) s[a] = I(s[a]), n[a] = I(n[a]);
        for (a = 0; a < 24; a++) r[a] = I(r[a]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
        this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
    }
    function Q(e) {
        return X(e) ? 366 : 365;
    }
    function X(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    }
    function ee(e, a, t, s, n, r, _) {
        var d = new Date(e, a, t, s, n, r, _);
        return e < 100 && e >= 0 && isFinite(d.getFullYear()) && d.setFullYear(e), d;
    }
    function ae(e) {
        var a = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e), 
        a;
    }
    function te(e, a, t) {
        var s = 7 + a - t;
        return -((7 + ae(e, 0, s).getUTCDay() - a) % 7) + s - 1;
    }
    function se(e, a, t, s, n) {
        var r, _, d = 1 + 7 * (a - 1) + (7 + t - s) % 7 + te(e, s, n);
        return d <= 0 ? _ = Q(r = e - 1) + d : d > Q(e) ? (r = e + 1, _ = d - Q(e)) : (r = e, 
        _ = d), {
            year: r,
            dayOfYear: _
        };
    }
    function ne(e, a, t) {
        var s, n, r = te(e.year(), a, t), _ = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return _ < 1 ? s = _ + re(n = e.year() - 1, a, t) : _ > re(e.year(), a, t) ? (s = _ - re(e.year(), a, t), 
        n = e.year() + 1) : (n = e.year(), s = _), {
            week: s,
            year: n
        };
    }
    function re(e, a, t) {
        var s = te(e, a, t), n = te(e + 1, a, t);
        return (Q(e) - s + n) / 7;
    }
    function _e(e, a) {
        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = a.weekdaysParse(e)) ? e : null : parseInt(e, 10);
    }
    function de(e, a) {
        return "string" == typeof e ? a.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
    }
    function ie(e, a, t) {
        var s, n, r, _ = e.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
        this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = i([ 2e3, 1 ]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), 
        this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
        return t ? "dddd" === a ? -1 !== (n = mt.call(this._weekdaysParse, _)) ? n : null : "ddd" === a ? -1 !== (n = mt.call(this._shortWeekdaysParse, _)) ? n : null : -1 !== (n = mt.call(this._minWeekdaysParse, _)) ? n : null : "dddd" === a ? -1 !== (n = mt.call(this._weekdaysParse, _)) ? n : -1 !== (n = mt.call(this._shortWeekdaysParse, _)) ? n : -1 !== (n = mt.call(this._minWeekdaysParse, _)) ? n : null : "ddd" === a ? -1 !== (n = mt.call(this._shortWeekdaysParse, _)) ? n : -1 !== (n = mt.call(this._weekdaysParse, _)) ? n : -1 !== (n = mt.call(this._minWeekdaysParse, _)) ? n : null : -1 !== (n = mt.call(this._minWeekdaysParse, _)) ? n : -1 !== (n = mt.call(this._weekdaysParse, _)) ? n : -1 !== (n = mt.call(this._shortWeekdaysParse, _)) ? n : null;
    }
    function oe() {
        function e(e, a) {
            return a.length - e.length;
        }
        var a, t, s, n, r, _ = [], d = [], o = [], m = [];
        for (a = 0; a < 7; a++) t = i([ 2e3, 1 ]).day(a), s = this.weekdaysMin(t, ""), n = this.weekdaysShort(t, ""), 
        r = this.weekdays(t, ""), _.push(s), d.push(n), o.push(r), m.push(s), m.push(n), 
        m.push(r);
        for (_.sort(e), d.sort(e), o.sort(e), m.sort(e), a = 0; a < 7; a++) d[a] = I(d[a]), 
        o[a] = I(o[a]), m[a] = I(m[a]);
        this._weekdaysRegex = new RegExp("^(" + m.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
        this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), 
        this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + _.join("|") + ")", "i");
    }
    function me() {
        return this.hours() % 12 || 12;
    }
    function ue(e, a) {
        E(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), a);
        });
    }
    function le(e, a) {
        return a._meridiemParse;
    }
    function Me(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
    }
    function he(e) {
        for (var a, t, s, n, r = 0; r < e.length; ) {
            for (a = (n = Me(e[r]).split("-")).length, t = (t = Me(e[r + 1])) ? t.split("-") : null; a > 0; ) {
                if (s = Le(n.slice(0, a).join("-"))) return s;
                if (t && t.length >= a && p(n, t, !0) >= a - 1) break;
                a--;
            }
            r++;
        }
        return null;
    }
    function Le(e) {
        var a = null;
        if (!ls[e] && "undefined" != typeof module && module && module.exports) try {
            a = is._abbr, require("./locale/" + e), ce(a);
        } catch (e) {}
        return ls[e];
    }
    function ce(e, a) {
        var t;
        return e && (t = M(a) ? ye(e) : Ye(e, a)) && (is = t), is._abbr;
    }
    function Ye(e, a) {
        if (null !== a) {
            var t = us;
            return a.abbr = e, null != ls[e] ? (D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
            t = ls[e]._config) : null != a.parentLocale && (null != ls[a.parentLocale] ? t = ls[a.parentLocale]._config : D("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), 
            ls[e] = new w(g(t, a)), ce(e), ls[e];
        }
        return delete ls[e], null;
    }
    function ye(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return is;
        if (!a(e)) {
            if (t = Le(e)) return t;
            e = [ e ];
        }
        return he(e);
    }
    function pe(e) {
        var a, t = e._a;
        return t && -2 === m(e).overflow && (a = t[Ct] < 0 || t[Ct] > 11 ? Ct : t[Gt] < 1 || t[Gt] > $(t[Rt], t[Ct]) ? Gt : t[It] < 0 || t[It] > 24 || 24 === t[It] && (0 !== t[Nt] || 0 !== t[Ut] || 0 !== t[Vt]) ? It : t[Nt] < 0 || t[Nt] > 59 ? Nt : t[Ut] < 0 || t[Ut] > 59 ? Ut : t[Vt] < 0 || t[Vt] > 999 ? Vt : -1, 
        m(e)._overflowDayOfYear && (a < Rt || a > Gt) && (a = Gt), m(e)._overflowWeeks && -1 === a && (a = $t), 
        m(e)._overflowWeekday && -1 === a && (a = Kt), m(e).overflow = a), e;
    }
    function fe(e) {
        var a, t, s, n, r, _, d = e._i, i = Ms.exec(d) || hs.exec(d);
        if (i) {
            for (m(e).iso = !0, a = 0, t = cs.length; a < t; a++) if (cs[a][1].exec(i[1])) {
                n = cs[a][0], s = !1 !== cs[a][2];
                break;
            }
            if (null == n) return void (e._isValid = !1);
            if (i[3]) {
                for (a = 0, t = Ys.length; a < t; a++) if (Ys[a][1].exec(i[3])) {
                    r = (i[2] || " ") + Ys[a][0];
                    break;
                }
                if (null == r) return void (e._isValid = !1);
            }
            if (!s && null != r) return void (e._isValid = !1);
            if (i[4]) {
                if (!Ls.exec(i[4])) return void (e._isValid = !1);
                _ = "Z";
            }
            e._f = n + (r || "") + (_ || ""), ve(e);
        } else e._isValid = !1;
    }
    function ke(a) {
        var t = ys.exec(a._i);
        null === t ? (fe(a), !1 === a._isValid && (delete a._isValid, e.createFromInputFallback(a))) : a._d = new Date(+t[1]);
    }
    function De(e, a, t) {
        return null != e ? e : null != a ? a : t;
    }
    function Te(a) {
        var t = new Date(e.now());
        return a._useUTC ? [ t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() ] : [ t.getFullYear(), t.getMonth(), t.getDate() ];
    }
    function ge(e) {
        var a, t, s, n, r = [];
        if (!e._d) {
            for (s = Te(e), e._w && null == e._a[Gt] && null == e._a[Ct] && we(e), e._dayOfYear && (n = De(e._a[Rt], s[Rt]), 
            e._dayOfYear > Q(n) && (m(e)._overflowDayOfYear = !0), t = ae(n, 0, e._dayOfYear), 
            e._a[Ct] = t.getUTCMonth(), e._a[Gt] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) e._a[a] = r[a] = s[a];
            for (;a < 7; a++) e._a[a] = r[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
            24 === e._a[It] && 0 === e._a[Nt] && 0 === e._a[Ut] && 0 === e._a[Vt] && (e._nextDay = !0, 
            e._a[It] = 0), e._d = (e._useUTC ? ae : ee).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), 
            e._nextDay && (e._a[It] = 24);
        }
    }
    function we(e) {
        var a, t, s, n, r, _, d, i;
        null != (a = e._w).GG || null != a.W || null != a.E ? (r = 1, _ = 4, t = De(a.GG, e._a[Rt], ne(Ae(), 1, 4).year), 
        s = De(a.W, 1), ((n = De(a.E, 1)) < 1 || n > 7) && (i = !0)) : (r = e._locale._week.dow, 
        _ = e._locale._week.doy, t = De(a.gg, e._a[Rt], ne(Ae(), r, _).year), s = De(a.w, 1), 
        null != a.d ? ((n = a.d) < 0 || n > 6) && (i = !0) : null != a.e ? (n = a.e + r, 
        (a.e < 0 || a.e > 6) && (i = !0)) : n = r), s < 1 || s > re(t, r, _) ? m(e)._overflowWeeks = !0 : null != i ? m(e)._overflowWeekday = !0 : (d = se(t, s, n, r, _), 
        e._a[Rt] = d.year, e._dayOfYear = d.dayOfYear);
    }
    function ve(a) {
        if (a._f !== e.ISO_8601) {
            a._a = [], m(a).empty = !0;
            var t, s, n, r, _, d = "" + a._i, i = d.length, o = 0;
            for (n = J(a._f, a._locale).match(Yt) || [], t = 0; t < n.length; t++) r = n[t], 
            (s = (d.match(C(r, a)) || [])[0]) && ((_ = d.substr(0, d.indexOf(s))).length > 0 && m(a).unusedInput.push(_), 
            d = d.slice(d.indexOf(s) + s.length), o += s.length), ft[r] ? (s ? m(a).empty = !1 : m(a).unusedTokens.push(r), 
            V(r, s, a)) : a._strict && !s && m(a).unusedTokens.push(r);
            m(a).charsLeftOver = i - o, d.length > 0 && m(a).unusedInput.push(d), a._a[It] <= 12 && !0 === m(a).bigHour && a._a[It] > 0 && (m(a).bigHour = void 0), 
            m(a).parsedDateParts = a._a.slice(0), m(a).meridiem = a._meridiem, a._a[It] = Se(a._locale, a._a[It], a._meridiem), 
            ge(a), pe(a);
        } else fe(a);
    }
    function Se(e, a, t) {
        var s;
        return null == t ? a : null != e.meridiemHour ? e.meridiemHour(a, t) : null != e.isPM ? ((s = e.isPM(t)) && a < 12 && (a += 12), 
        s || 12 !== a || (a = 0), a) : a;
    }
    function He(e) {
        var a, t, s, n, r;
        if (0 === e._f.length) return m(e).invalidFormat = !0, void (e._d = new Date(NaN));
        for (n = 0; n < e._f.length; n++) r = 0, a = h({}, e), null != e._useUTC && (a._useUTC = e._useUTC), 
        a._f = e._f[n], ve(a), u(a) && (r += m(a).charsLeftOver, r += 10 * m(a).unusedTokens.length, 
        m(a).score = r, (null == s || r < s) && (s = r, t = a));
        d(e, t || a);
    }
    function be(e) {
        if (!e._d) {
            var a = H(e._i);
            e._a = r([ a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond ], function(e) {
                return e && parseInt(e, 10);
            }), ge(e);
        }
    }
    function je(e) {
        var a = new L(pe(xe(e)));
        return a._nextDay && (a.add(1, "d"), a._nextDay = void 0), a;
    }
    function xe(e) {
        var t = e._i, s = e._f;
        return e._locale = e._locale || ye(e._l), null === t || void 0 === s && "" === t ? l({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), c(t) ? new L(pe(t)) : (a(s) ? He(e) : n(t) ? e._d = t : s ? ve(e) : Pe(e), 
        u(e) || (e._d = null), e));
    }
    function Pe(t) {
        var s = t._i;
        void 0 === s ? t._d = new Date(e.now()) : n(s) ? t._d = new Date(s.valueOf()) : "string" == typeof s ? ke(t) : a(s) ? (t._a = r(s.slice(0), function(e) {
            return parseInt(e, 10);
        }), ge(t)) : "object" == typeof s ? be(t) : "number" == typeof s ? t._d = new Date(s) : e.createFromInputFallback(t);
    }
    function We(e, n, r, _, d) {
        var i = {};
        return "boolean" == typeof r && (_ = r, r = void 0), (t(e) && s(e) || a(e) && 0 === e.length) && (e = void 0), 
        i._isAMomentObject = !0, i._useUTC = i._isUTC = d, i._l = r, i._i = e, i._f = n, 
        i._strict = _, je(i);
    }
    function Ae(e, a, t, s) {
        return We(e, a, t, s, !1);
    }
    function Ee(e, t) {
        var s, n;
        if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return Ae();
        for (s = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](s) || (s = t[n]);
        return s;
    }
    function Fe(e) {
        var a = H(e), t = a.year || 0, s = a.quarter || 0, n = a.month || 0, r = a.week || 0, _ = a.day || 0, d = a.hour || 0, i = a.minute || 0, o = a.second || 0, m = a.millisecond || 0;
        this._milliseconds = +m + 1e3 * o + 6e4 * i + 1e3 * d * 60 * 60, this._days = +_ + 7 * r, 
        this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = ye(), this._bubble();
    }
    function ze(e) {
        return e instanceof Fe;
    }
    function Oe(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function Je(e, a) {
        E(e, 0, 0, function() {
            var e = this.utcOffset(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + A(~~(e / 60), 2) + a + A(~~e % 60, 2);
        });
    }
    function Re(e, a) {
        var t = (a || "").match(e) || [], s = ((t[t.length - 1] || []) + "").match(ks) || [ "-", 0, 0 ], n = 60 * s[1] + y(s[2]);
        return "+" === s[0] ? n : -n;
    }
    function Ce(a, t) {
        var s, r;
        return t._isUTC ? (s = t.clone(), r = (c(a) || n(a) ? a.valueOf() : Ae(a).valueOf()) - s.valueOf(), 
        s._d.setTime(s._d.valueOf() + r), e.updateOffset(s, !1), s) : Ae(a).local();
    }
    function Ge(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
    }
    function Ie() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset);
    }
    function Ne(e, a) {
        var t, s, n, r = e, d = null;
        return ze(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (r = {}, a ? r[a] = e : r.milliseconds = e) : (d = Ds.exec(e)) ? (t = "-" === d[1] ? -1 : 1, 
        r = {
            y: 0,
            d: y(d[Gt]) * t,
            h: y(d[It]) * t,
            m: y(d[Nt]) * t,
            s: y(d[Ut]) * t,
            ms: y(Oe(1e3 * d[Vt])) * t
        }) : (d = Ts.exec(e)) ? (t = "-" === d[1] ? -1 : 1, r = {
            y: Ue(d[2], t),
            M: Ue(d[3], t),
            w: Ue(d[4], t),
            d: Ue(d[5], t),
            h: Ue(d[6], t),
            m: Ue(d[7], t),
            s: Ue(d[8], t)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (n = $e(Ae(r.from), Ae(r.to)), 
        (r = {}).ms = n.milliseconds, r.M = n.months), s = new Fe(r), ze(e) && _(e, "_locale") && (s._locale = e._locale), 
        s;
    }
    function Ue(e, a) {
        var t = e && parseFloat(e.replace(",", "."));
        return (isNaN(t) ? 0 : t) * a;
    }
    function Ve(e, a) {
        var t = {
            milliseconds: 0,
            months: 0
        };
        return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, "M").isAfter(a) && --t.months, 
        t.milliseconds = +a - +e.clone().add(t.months, "M"), t;
    }
    function $e(e, a) {
        var t;
        return e.isValid() && a.isValid() ? (a = Ce(a, e), e.isBefore(a) ? t = Ve(e, a) : ((t = Ve(a, e)).milliseconds = -t.milliseconds, 
        t.months = -t.months), t) : {
            milliseconds: 0,
            months: 0
        };
    }
    function Ke(e, a) {
        return function(t, s) {
            var n, r;
            return null === s || isNaN(+s) || (D(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
            r = t, t = s, s = r), t = "string" == typeof t ? +t : t, n = Ne(t, s), Ze(this, n, e), 
            this;
        };
    }
    function Ze(a, t, s, n) {
        var r = t._milliseconds, _ = Oe(t._days), d = Oe(t._months);
        a.isValid() && (n = null == n || n, r && a._d.setTime(a._d.valueOf() + r * s), _ && W(a, "Date", P(a, "Date") + _ * s), 
        d && Z(a, P(a, "Month") + d * s), n && e.updateOffset(a, _ || d));
    }
    function qe(e, a) {
        var t, s = 12 * (a.year() - e.year()) + (a.month() - e.month()), n = e.clone().add(s, "months");
        return t = a - n < 0 ? (a - n) / (n - e.clone().add(s - 1, "months")) : (a - n) / (e.clone().add(s + 1, "months") - n), 
        -(s + t) || 0;
    }
    function Be(e) {
        var a;
        return void 0 === e ? this._locale._abbr : (null != (a = ye(e)) && (this._locale = a), 
        this);
    }
    function Qe() {
        return this._locale;
    }
    function Xe(e, a) {
        E(0, [ e, e.length ], 0, a);
    }
    function ea(e, a, t, s, n) {
        var r;
        return null == e ? ne(this, s, n).year : (r = re(e, s, n), a > r && (a = r), aa.call(this, e, a, t, s, n));
    }
    function aa(e, a, t, s, n) {
        var r = se(e, a, t, s, n), _ = ae(r.year, 0, r.dayOfYear);
        return this.year(_.getUTCFullYear()), this.month(_.getUTCMonth()), this.date(_.getUTCDate()), 
        this;
    }
    function ta(e) {
        return e;
    }
    function sa(e, a, t, s) {
        var n = ye(), r = i().set(s, a);
        return n[t](r, e);
    }
    function na(e, a, t) {
        if ("number" == typeof e && (a = e, e = void 0), e = e || "", null != a) return sa(e, a, t, "month");
        var s, n = [];
        for (s = 0; s < 12; s++) n[s] = sa(e, s, t, "month");
        return n;
    }
    function ra(e, a, t, s) {
        "boolean" == typeof e ? ("number" == typeof a && (t = a, a = void 0), a = a || "") : (t = a = e, 
        e = !1, "number" == typeof a && (t = a, a = void 0), a = a || "");
        var n = ye(), r = e ? n._week.dow : 0;
        if (null != t) return sa(a, (t + r) % 7, s, "day");
        var _, d = [];
        for (_ = 0; _ < 7; _++) d[_] = sa(a, (_ + r) % 7, s, "day");
        return d;
    }
    function _a(e, a, t, s) {
        var n = Ne(a, t);
        return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, 
        e._bubble();
    }
    function da(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function ia(e) {
        return 4800 * e / 146097;
    }
    function oa(e) {
        return 146097 * e / 4800;
    }
    function ma(e) {
        return function() {
            return this.as(e);
        };
    }
    function ua(e) {
        return function() {
            return this._data[e];
        };
    }
    function la(e, a, t, s, n) {
        return n.relativeTime(a || 1, !!t, e, s);
    }
    function Ma(e, a, t) {
        var s = Ne(e).abs(), n = Bs(s.as("s")), r = Bs(s.as("m")), _ = Bs(s.as("h")), d = Bs(s.as("d")), i = Bs(s.as("M")), o = Bs(s.as("y")), m = n < Qs.s && [ "s", n ] || r <= 1 && [ "m" ] || r < Qs.m && [ "mm", r ] || _ <= 1 && [ "h" ] || _ < Qs.h && [ "hh", _ ] || d <= 1 && [ "d" ] || d < Qs.d && [ "dd", d ] || i <= 1 && [ "M" ] || i < Qs.M && [ "MM", i ] || o <= 1 && [ "y" ] || [ "yy", o ];
        return m[2] = a, m[3] = +e > 0, m[4] = t, la.apply(null, m);
    }
    function ha() {
        var e, a, t, s = Xs(this._milliseconds) / 1e3, n = Xs(this._days), r = Xs(this._months);
        a = Y((e = Y(s / 60)) / 60), s %= 60, e %= 60;
        var _ = t = Y(r / 12), d = r %= 12, i = n, o = a, m = e, u = s, l = this.asSeconds();
        return l ? (l < 0 ? "-" : "") + "P" + (_ ? _ + "Y" : "") + (d ? d + "M" : "") + (i ? i + "D" : "") + (o || m || u ? "T" : "") + (o ? o + "H" : "") + (m ? m + "M" : "") + (u ? u + "S" : "") : "P0D";
    }
    function La(e, a) {
        var t = e.split("_");
        return a % 10 == 1 && a % 100 != 11 ? t[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? t[1] : t[2];
    }
    function ca(e, a, t) {
        var s = {
            mm: a ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: a ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
        };
        return "m" === t ? a ? "хвіліна" : "хвіліну" : "h" === t ? a ? "гадзіна" : "гадзіну" : e + " " + La(s[t], +e);
    }
    function Ya(e, a, t) {
        return e + " " + pa({
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        }[t], e);
    }
    function ya(e) {
        return e > 9 ? ya(e % 10) : e;
    }
    function pa(e, a) {
        return 2 === a ? fa(e) : e;
    }
    function fa(e) {
        var a = {
            m: "v",
            b: "v",
            d: "z"
        };
        return void 0 === a[e.charAt(0)] ? e : a[e.charAt(0)] + e.substring(1);
    }
    function ka(e, a, t) {
        var s = e + " ";
        switch (t) {
          case "m":
            return a ? "jedna minuta" : "jedne minute";

          case "mm":
            return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";

          case "h":
            return a ? "jedan sat" : "jednog sata";

          case "hh":
            return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";

          case "dd":
            return s += 1 === e ? "dan" : "dana";

          case "MM":
            return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";

          case "yy":
            return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";
        }
    }
    function Da(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function Ta(e, a, t, s) {
        var n = e + " ";
        switch (t) {
          case "s":
            return a || s ? "pár sekund" : "pár sekundami";

          case "m":
            return a ? "minuta" : s ? "minutu" : "minutou";

          case "mm":
            return a || s ? n + (Da(e) ? "minuty" : "minut") : n + "minutami";

          case "h":
            return a ? "hodina" : s ? "hodinu" : "hodinou";

          case "hh":
            return a || s ? n + (Da(e) ? "hodiny" : "hodin") : n + "hodinami";

          case "d":
            return a || s ? "den" : "dnem";

          case "dd":
            return a || s ? n + (Da(e) ? "dny" : "dní") : n + "dny";

          case "M":
            return a || s ? "měsíc" : "měsícem";

          case "MM":
            return a || s ? n + (Da(e) ? "měsíce" : "měsíců") : n + "měsíci";

          case "y":
            return a || s ? "rok" : "rokem";

          case "yy":
            return a || s ? n + (Da(e) ? "roky" : "let") : n + "lety";
        }
    }
    function ga(e, a, t, s) {
        var n = {
            m: [ "eine Minute", "einer Minute" ],
            h: [ "eine Stunde", "einer Stunde" ],
            d: [ "ein Tag", "einem Tag" ],
            dd: [ e + " Tage", e + " Tagen" ],
            M: [ "ein Monat", "einem Monat" ],
            MM: [ e + " Monate", e + " Monaten" ],
            y: [ "ein Jahr", "einem Jahr" ],
            yy: [ e + " Jahre", e + " Jahren" ]
        };
        return a ? n[t][0] : n[t][1];
    }
    function wa(e, a, t, s) {
        var n = {
            m: [ "eine Minute", "einer Minute" ],
            h: [ "eine Stunde", "einer Stunde" ],
            d: [ "ein Tag", "einem Tag" ],
            dd: [ e + " Tage", e + " Tagen" ],
            M: [ "ein Monat", "einem Monat" ],
            MM: [ e + " Monate", e + " Monaten" ],
            y: [ "ein Jahr", "einem Jahr" ],
            yy: [ e + " Jahre", e + " Jahren" ]
        };
        return a ? n[t][0] : n[t][1];
    }
    function va(e, a, t, s) {
        var n = {
            s: [ "mõne sekundi", "mõni sekund", "paar sekundit" ],
            m: [ "ühe minuti", "üks minut" ],
            mm: [ e + " minuti", e + " minutit" ],
            h: [ "ühe tunni", "tund aega", "üks tund" ],
            hh: [ e + " tunni", e + " tundi" ],
            d: [ "ühe päeva", "üks päev" ],
            M: [ "kuu aja", "kuu aega", "üks kuu" ],
            MM: [ e + " kuu", e + " kuud" ],
            y: [ "ühe aasta", "aasta", "üks aasta" ],
            yy: [ e + " aasta", e + " aastat" ]
        };
        return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1];
    }
    function Sa(e, a, t, s) {
        var n = "";
        switch (t) {
          case "s":
            return s ? "muutaman sekunnin" : "muutama sekunti";

          case "m":
            return s ? "minuutin" : "minuutti";

          case "mm":
            n = s ? "minuutin" : "minuuttia";
            break;

          case "h":
            return s ? "tunnin" : "tunti";

          case "hh":
            n = s ? "tunnin" : "tuntia";
            break;

          case "d":
            return s ? "päivän" : "päivä";

          case "dd":
            n = s ? "päivän" : "päivää";
            break;

          case "M":
            return s ? "kuukauden" : "kuukausi";

          case "MM":
            n = s ? "kuukauden" : "kuukautta";
            break;

          case "y":
            return s ? "vuoden" : "vuosi";

          case "yy":
            n = s ? "vuoden" : "vuotta";
        }
        return n = Ha(e, s) + " " + n;
    }
    function Ha(e, a) {
        return e < 10 ? a ? Pn[e] : xn[e] : e;
    }
    function ba(e, a, t) {
        var s = e + " ";
        switch (t) {
          case "m":
            return a ? "jedna minuta" : "jedne minute";

          case "mm":
            return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";

          case "h":
            return a ? "jedan sat" : "jednog sata";

          case "hh":
            return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";

          case "dd":
            return s += 1 === e ? "dan" : "dana";

          case "MM":
            return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";

          case "yy":
            return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";
        }
    }
    function ja(e, a, t, s) {
        var n = e;
        switch (t) {
          case "s":
            return s || a ? "néhány másodperc" : "néhány másodperce";

          case "m":
            return "egy" + (s || a ? " perc" : " perce");

          case "mm":
            return n + (s || a ? " perc" : " perce");

          case "h":
            return "egy" + (s || a ? " óra" : " órája");

          case "hh":
            return n + (s || a ? " óra" : " órája");

          case "d":
            return "egy" + (s || a ? " nap" : " napja");

          case "dd":
            return n + (s || a ? " nap" : " napja");

          case "M":
            return "egy" + (s || a ? " hónap" : " hónapja");

          case "MM":
            return n + (s || a ? " hónap" : " hónapja");

          case "y":
            return "egy" + (s || a ? " év" : " éve");

          case "yy":
            return n + (s || a ? " év" : " éve");
        }
        return "";
    }
    function xa(e) {
        return (e ? "" : "[múlt] ") + "[" + Gn[this.day()] + "] LT[-kor]";
    }
    function Pa(e) {
        return e % 100 == 11 || e % 10 != 1;
    }
    function Wa(e, a, t, s) {
        var n = e + " ";
        switch (t) {
          case "s":
            return a || s ? "nokkrar sekúndur" : "nokkrum sekúndum";

          case "m":
            return a ? "mínúta" : "mínútu";

          case "mm":
            return Pa(e) ? n + (a || s ? "mínútur" : "mínútum") : a ? n + "mínúta" : n + "mínútu";

          case "hh":
            return Pa(e) ? n + (a || s ? "klukkustundir" : "klukkustundum") : n + "klukkustund";

          case "d":
            return a ? "dagur" : s ? "dag" : "degi";

          case "dd":
            return Pa(e) ? a ? n + "dagar" : n + (s ? "daga" : "dögum") : a ? n + "dagur" : n + (s ? "dag" : "degi");

          case "M":
            return a ? "mánuður" : s ? "mánuð" : "mánuði";

          case "MM":
            return Pa(e) ? a ? n + "mánuðir" : n + (s ? "mánuði" : "mánuðum") : a ? n + "mánuður" : n + (s ? "mánuð" : "mánuði");

          case "y":
            return a || s ? "ár" : "ári";

          case "yy":
            return Pa(e) ? n + (a || s ? "ár" : "árum") : n + (a || s ? "ár" : "ári");
        }
    }
    function Aa(e, a, t, s) {
        var n = {
            m: [ "eng Minutt", "enger Minutt" ],
            h: [ "eng Stonn", "enger Stonn" ],
            d: [ "een Dag", "engem Dag" ],
            M: [ "ee Mount", "engem Mount" ],
            y: [ "ee Joer", "engem Joer" ]
        };
        return a ? n[t][0] : n[t][1];
    }
    function Ea(e) {
        if (e = parseInt(e, 10), isNaN(e)) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
            var a = e % 10, t = e / 10;
            return Ea(0 === a ? t : a);
        }
        if (e < 1e4) {
            for (;e >= 10; ) e /= 10;
            return Ea(e);
        }
        return e /= 1e3, Ea(e);
    }
    function Fa(e, a, t, s) {
        return a ? Oa(t)[0] : s ? Oa(t)[1] : Oa(t)[2];
    }
    function za(e) {
        return e % 10 == 0 || e > 10 && e < 20;
    }
    function Oa(e) {
        return Un[e].split("_");
    }
    function Ja(e, a, t, s) {
        var n = e + " ";
        return 1 === e ? n + Fa(e, a, t[0], s) : a ? n + (za(e) ? Oa(t)[1] : Oa(t)[0]) : s ? n + Oa(t)[1] : n + (za(e) ? Oa(t)[1] : Oa(t)[2]);
    }
    function Ra(e, a, t) {
        return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1];
    }
    function Ca(e, a, t) {
        return e + " " + Ra(Vn[t], e, a);
    }
    function Ga(e, a, t) {
        return Ra(Vn[t], e, a);
    }
    function Ia(e, a, t, s) {
        var n = "";
        if (a) switch (t) {
          case "s":
            n = "काही सेकंद";
            break;

          case "m":
            n = "एक मिनिट";
            break;

          case "mm":
            n = "%d मिनिटे";
            break;

          case "h":
            n = "एक तास";
            break;

          case "hh":
            n = "%d तास";
            break;

          case "d":
            n = "एक दिवस";
            break;

          case "dd":
            n = "%d दिवस";
            break;

          case "M":
            n = "एक महिना";
            break;

          case "MM":
            n = "%d महिने";
            break;

          case "y":
            n = "एक वर्ष";
            break;

          case "yy":
            n = "%d वर्षे";
        } else switch (t) {
          case "s":
            n = "काही सेकंदां";
            break;

          case "m":
            n = "एका मिनिटा";
            break;

          case "mm":
            n = "%d मिनिटां";
            break;

          case "h":
            n = "एका तासा";
            break;

          case "hh":
            n = "%d तासां";
            break;

          case "d":
            n = "एका दिवसा";
            break;

          case "dd":
            n = "%d दिवसां";
            break;

          case "M":
            n = "एका महिन्या";
            break;

          case "MM":
            n = "%d महिन्यां";
            break;

          case "y":
            n = "एका वर्षा";
            break;

          case "yy":
            n = "%d वर्षां";
        }
        return n.replace(/%d/i, e);
    }
    function Na(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
    }
    function Ua(e, a, t) {
        var s = e + " ";
        switch (t) {
          case "m":
            return a ? "minuta" : "minutę";

          case "mm":
            return s + (Na(e) ? "minuty" : "minut");

          case "h":
            return a ? "godzina" : "godzinę";

          case "hh":
            return s + (Na(e) ? "godziny" : "godzin");

          case "MM":
            return s + (Na(e) ? "miesiące" : "miesięcy");

          case "yy":
            return s + (Na(e) ? "lata" : "lat");
        }
    }
    function Va(e, a, t) {
        var s = {
            mm: "minute",
            hh: "ore",
            dd: "zile",
            MM: "luni",
            yy: "ani"
        }, n = " ";
        return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "), e + n + s[t];
    }
    function $a(e, a) {
        var t = e.split("_");
        return a % 10 == 1 && a % 100 != 11 ? t[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? t[1] : t[2];
    }
    function Ka(e, a, t) {
        var s = {
            mm: a ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        };
        return "m" === t ? a ? "минута" : "минуту" : e + " " + $a(s[t], +e);
    }
    function Za(e) {
        return e > 1 && e < 5;
    }
    function qa(e, a, t, s) {
        var n = e + " ";
        switch (t) {
          case "s":
            return a || s ? "pár sekúnd" : "pár sekundami";

          case "m":
            return a ? "minúta" : s ? "minútu" : "minútou";

          case "mm":
            return a || s ? n + (Za(e) ? "minúty" : "minút") : n + "minútami";

          case "h":
            return a ? "hodina" : s ? "hodinu" : "hodinou";

          case "hh":
            return a || s ? n + (Za(e) ? "hodiny" : "hodín") : n + "hodinami";

          case "d":
            return a || s ? "deň" : "dňom";

          case "dd":
            return a || s ? n + (Za(e) ? "dni" : "dní") : n + "dňami";

          case "M":
            return a || s ? "mesiac" : "mesiacom";

          case "MM":
            return a || s ? n + (Za(e) ? "mesiace" : "mesiacov") : n + "mesiacmi";

          case "y":
            return a || s ? "rok" : "rokom";

          case "yy":
            return a || s ? n + (Za(e) ? "roky" : "rokov") : n + "rokmi";
        }
    }
    function Ba(e, a, t, s) {
        var n = e + " ";
        switch (t) {
          case "s":
            return a || s ? "nekaj sekund" : "nekaj sekundami";

          case "m":
            return a ? "ena minuta" : "eno minuto";

          case "mm":
            return n += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami";

          case "h":
            return a ? "ena ura" : "eno uro";

          case "hh":
            return n += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami";

          case "d":
            return a || s ? "en dan" : "enim dnem";

          case "dd":
            return n += 1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi";

          case "M":
            return a || s ? "en mesec" : "enim mesecem";

          case "MM":
            return n += 1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci";

          case "y":
            return a || s ? "eno leto" : "enim letom";

          case "yy":
            return n += 1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti";
        }
    }
    function Qa(e, a, t, s) {
        var n = Xa(e);
        switch (t) {
          case "mm":
            return n + " tup";

          case "hh":
            return n + " rep";

          case "dd":
            return n + " jaj";

          case "MM":
            return n + " jar";

          case "yy":
            return n + " DIS";
        }
    }
    function Xa(e) {
        var a = Math.floor(e % 1e3 / 100), t = Math.floor(e % 100 / 10), s = e % 10, n = "";
        return a > 0 && (n += Lr[a] + "vatlh"), t > 0 && (n += ("" !== n ? " " : "") + Lr[t] + "maH"), 
        s > 0 && (n += ("" !== n ? " " : "") + Lr[s]), "" === n ? "pagh" : n;
    }
    function et(e, a, t, s) {
        var n = {
            s: [ "viensas secunds", "'iensas secunds" ],
            m: [ "'n míut", "'iens míut" ],
            mm: [ e + " míuts", e + " míuts" ],
            h: [ "'n þora", "'iensa þora" ],
            hh: [ e + " þoras", e + " þoras" ],
            d: [ "'n ziua", "'iensa ziua" ],
            dd: [ e + " ziuas", e + " ziuas" ],
            M: [ "'n mes", "'iens mes" ],
            MM: [ e + " mesen", e + " mesen" ],
            y: [ "'n ar", "'iens ar" ],
            yy: [ e + " ars", e + " ars" ]
        };
        return s ? n[t][0] : a ? n[t][0] : n[t][1];
    }
    function at(e, a) {
        var t = e.split("_");
        return a % 10 == 1 && a % 100 != 11 ? t[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? t[1] : t[2];
    }
    function tt(e, a, t) {
        var s = {
            mm: a ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: a ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
        };
        return "m" === t ? a ? "хвилина" : "хвилину" : "h" === t ? a ? "година" : "годину" : e + " " + at(s[t], +e);
    }
    function st(e) {
        return function() {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
        };
    }
    var nt, rt;
    rt = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var a = Object(this), t = a.length >>> 0, s = 0; s < t; s++) if (s in a && e.call(this, a[s], s, a)) return !0;
        return !1;
    };
    var _t = e.momentProperties = [], dt = !1, it = {};
    e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
    var ot;
    ot = Object.keys ? Object.keys : function(e) {
        var a, t = [];
        for (a in e) _(e, a) && t.push(a);
        return t;
    };
    var mt, ut = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, lt = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Mt = /\d{1,2}/, ht = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Lt = {}, ct = {}, Yt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, yt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, pt = {}, ft = {}, kt = /\d/, Dt = /\d\d/, Tt = /\d{3}/, gt = /\d{4}/, wt = /[+-]?\d{6}/, vt = /\d\d?/, St = /\d\d\d\d?/, Ht = /\d\d\d\d\d\d?/, bt = /\d{1,3}/, jt = /\d{1,4}/, xt = /[+-]?\d{1,6}/, Pt = /\d+/, Wt = /[+-]?\d+/, At = /Z|[+-]\d\d:?\d\d/gi, Et = /Z|[+-]\d\d(?::?\d\d)?/gi, Ft = /[+-]?\d+(\.\d{1,3})?/, zt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ot = {}, Jt = {}, Rt = 0, Ct = 1, Gt = 2, It = 3, Nt = 4, Ut = 5, Vt = 6, $t = 7, Kt = 8;
    mt = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var a;
        for (a = 0; a < this.length; ++a) if (this[a] === e) return a;
        return -1;
    }, E("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), E("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e);
    }), E("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e);
    }), v("month", "M"), b("month", 8), R("M", vt), R("MM", vt, Dt), R("MMM", function(e, a) {
        return a.monthsShortRegex(e);
    }), R("MMMM", function(e, a) {
        return a.monthsRegex(e);
    }), N([ "M", "MM" ], function(e, a) {
        a[Ct] = y(e) - 1;
    }), N([ "MMM", "MMMM" ], function(e, a, t, s) {
        var n = t._locale.monthsParse(e, s, t._strict);
        null != n ? a[Ct] = n : m(t).invalidMonth = e;
    });
    var Zt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, qt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Bt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Qt = zt, Xt = zt;
    E("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e;
    }), E(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), E(0, [ "YYYY", 4 ], 0, "year"), E(0, [ "YYYYY", 5 ], 0, "year"), E(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    v("year", "y"), b("year", 1), R("Y", Wt), R("YY", vt, Dt), R("YYYY", jt, gt), R("YYYYY", xt, wt), 
    R("YYYYYY", xt, wt), N([ "YYYYY", "YYYYYY" ], Rt), N("YYYY", function(a, t) {
        t[Rt] = 2 === a.length ? e.parseTwoDigitYear(a) : y(a);
    }), N("YY", function(a, t) {
        t[Rt] = e.parseTwoDigitYear(a);
    }), N("Y", function(e, a) {
        a[Rt] = parseInt(e, 10);
    }), e.parseTwoDigitYear = function(e) {
        return y(e) + (y(e) > 68 ? 1900 : 2e3);
    };
    var es = x("FullYear", !0);
    E("w", [ "ww", 2 ], "wo", "week"), E("W", [ "WW", 2 ], "Wo", "isoWeek"), v("week", "w"), 
    v("isoWeek", "W"), b("week", 5), b("isoWeek", 5), R("w", vt), R("ww", vt, Dt), R("W", vt), 
    R("WW", vt, Dt), U([ "w", "ww", "W", "WW" ], function(e, a, t, s) {
        a[s.substr(0, 1)] = y(e);
    });
    var as = {
        dow: 0,
        doy: 6
    };
    E("d", 0, "do", "day"), E("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e);
    }), E("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e);
    }), E("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e);
    }), E("e", 0, 0, "weekday"), E("E", 0, 0, "isoWeekday"), v("day", "d"), v("weekday", "e"), 
    v("isoWeekday", "E"), b("day", 11), b("weekday", 11), b("isoWeekday", 11), R("d", vt), 
    R("e", vt), R("E", vt), R("dd", function(e, a) {
        return a.weekdaysMinRegex(e);
    }), R("ddd", function(e, a) {
        return a.weekdaysShortRegex(e);
    }), R("dddd", function(e, a) {
        return a.weekdaysRegex(e);
    }), U([ "dd", "ddd", "dddd" ], function(e, a, t, s) {
        var n = t._locale.weekdaysParse(e, s, t._strict);
        null != n ? a.d = n : m(t).invalidWeekday = e;
    }), U([ "d", "e", "E" ], function(e, a, t, s) {
        a[s] = y(e);
    });
    var ts = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ss = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ns = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), rs = zt, _s = zt, ds = zt;
    E("H", [ "HH", 2 ], 0, "hour"), E("h", [ "hh", 2 ], 0, me), E("k", [ "kk", 2 ], 0, function() {
        return this.hours() || 24;
    }), E("hmm", 0, 0, function() {
        return "" + me.apply(this) + A(this.minutes(), 2);
    }), E("hmmss", 0, 0, function() {
        return "" + me.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2);
    }), E("Hmm", 0, 0, function() {
        return "" + this.hours() + A(this.minutes(), 2);
    }), E("Hmmss", 0, 0, function() {
        return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2);
    }), ue("a", !0), ue("A", !1), v("hour", "h"), b("hour", 13), R("a", le), R("A", le), 
    R("H", vt), R("h", vt), R("HH", vt, Dt), R("hh", vt, Dt), R("hmm", St), R("hmmss", Ht), 
    R("Hmm", St), R("Hmmss", Ht), N([ "H", "HH" ], It), N([ "a", "A" ], function(e, a, t) {
        t._isPm = t._locale.isPM(e), t._meridiem = e;
    }), N([ "h", "hh" ], function(e, a, t) {
        a[It] = y(e), m(t).bigHour = !0;
    }), N("hmm", function(e, a, t) {
        var s = e.length - 2;
        a[It] = y(e.substr(0, s)), a[Nt] = y(e.substr(s)), m(t).bigHour = !0;
    }), N("hmmss", function(e, a, t) {
        var s = e.length - 4, n = e.length - 2;
        a[It] = y(e.substr(0, s)), a[Nt] = y(e.substr(s, 2)), a[Ut] = y(e.substr(n)), m(t).bigHour = !0;
    }), N("Hmm", function(e, a, t) {
        var s = e.length - 2;
        a[It] = y(e.substr(0, s)), a[Nt] = y(e.substr(s));
    }), N("Hmmss", function(e, a, t) {
        var s = e.length - 4, n = e.length - 2;
        a[It] = y(e.substr(0, s)), a[Nt] = y(e.substr(s, 2)), a[Ut] = y(e.substr(n));
    });
    var is, os = /[ap]\.?m?\.?/i, ms = x("Hours", !0), us = {
        calendar: ut,
        longDateFormat: lt,
        invalidDate: "Invalid date",
        ordinal: "%d",
        ordinalParse: Mt,
        relativeTime: ht,
        months: qt,
        monthsShort: Bt,
        week: as,
        weekdays: ts,
        weekdaysMin: ns,
        weekdaysShort: ss,
        meridiemParse: os
    }, ls = {}, Ms = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, hs = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Ls = /Z|[+-]\d\d(?::?\d\d)?/, cs = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Ys = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], ys = /^\/?Date\((\-?\d+)/i;
    e.createFromInputFallback = k("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }), e.ISO_8601 = function() {};
    var ps = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Ae.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : l();
    }), fs = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Ae.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : l();
    });
    Je("Z", ":"), Je("ZZ", ""), R("Z", Et), R("ZZ", Et), N([ "Z", "ZZ" ], function(e, a, t) {
        t._useUTC = !0, t._tzm = Re(Et, e);
    });
    var ks = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {};
    var Ds = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Ts = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Ne.fn = Fe.prototype;
    var gs = Ke(1, "add"), ws = Ke(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var vs = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e);
    });
    E(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), E(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), Xe("gggg", "weekYear"), Xe("ggggg", "weekYear"), Xe("GGGG", "isoWeekYear"), 
    Xe("GGGGG", "isoWeekYear"), v("weekYear", "gg"), v("isoWeekYear", "GG"), b("weekYear", 1), 
    b("isoWeekYear", 1), R("G", Wt), R("g", Wt), R("GG", vt, Dt), R("gg", vt, Dt), R("GGGG", jt, gt), 
    R("gggg", jt, gt), R("GGGGG", xt, wt), R("ggggg", xt, wt), U([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(e, a, t, s) {
        a[s.substr(0, 2)] = y(e);
    }), U([ "gg", "GG" ], function(a, t, s, n) {
        t[n] = e.parseTwoDigitYear(a);
    }), E("Q", 0, "Qo", "quarter"), v("quarter", "Q"), b("quarter", 7), R("Q", kt), 
    N("Q", function(e, a) {
        a[Ct] = 3 * (y(e) - 1);
    }), E("D", [ "DD", 2 ], "Do", "date"), v("date", "D"), b("date", 9), R("D", vt), 
    R("DD", vt, Dt), R("Do", function(e, a) {
        return e ? a._ordinalParse : a._ordinalParseLenient;
    }), N([ "D", "DD" ], Gt), N("Do", function(e, a) {
        a[Gt] = y(e.match(vt)[0], 10);
    });
    var Ss = x("Date", !0);
    E("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), v("dayOfYear", "DDD"), b("dayOfYear", 4), 
    R("DDD", bt), R("DDDD", Tt), N([ "DDD", "DDDD" ], function(e, a, t) {
        t._dayOfYear = y(e);
    }), E("m", [ "mm", 2 ], 0, "minute"), v("minute", "m"), b("minute", 14), R("m", vt), 
    R("mm", vt, Dt), N([ "m", "mm" ], Nt);
    var Hs = x("Minutes", !1);
    E("s", [ "ss", 2 ], 0, "second"), v("second", "s"), b("second", 15), R("s", vt), 
    R("ss", vt, Dt), N([ "s", "ss" ], Ut);
    var bs = x("Seconds", !1);
    E("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), E(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), E(0, [ "SSS", 3 ], 0, "millisecond"), E(0, [ "SSSS", 4 ], 0, function() {
        return 10 * this.millisecond();
    }), E(0, [ "SSSSS", 5 ], 0, function() {
        return 100 * this.millisecond();
    }), E(0, [ "SSSSSS", 6 ], 0, function() {
        return 1e3 * this.millisecond();
    }), E(0, [ "SSSSSSS", 7 ], 0, function() {
        return 1e4 * this.millisecond();
    }), E(0, [ "SSSSSSSS", 8 ], 0, function() {
        return 1e5 * this.millisecond();
    }), E(0, [ "SSSSSSSSS", 9 ], 0, function() {
        return 1e6 * this.millisecond();
    }), v("millisecond", "ms"), b("millisecond", 16), R("S", bt, kt), R("SS", bt, Dt), 
    R("SSS", bt, Tt);
    var js;
    for (js = "SSSS"; js.length <= 9; js += "S") R(js, Pt);
    for (js = "S"; js.length <= 9; js += "S") N(js, function(e, a) {
        a[Vt] = y(1e3 * ("0." + e));
    });
    var xs = x("Milliseconds", !1);
    E("z", 0, 0, "zoneAbbr"), E("zz", 0, 0, "zoneName");
    var Ps = L.prototype;
    Ps.add = gs, Ps.calendar = function(a, t) {
        var s = a || Ae(), n = Ce(s, this).startOf("day"), r = e.calendarFormat(this, n) || "sameElse", _ = t && (T(t[r]) ? t[r].call(this, s) : t[r]);
        return this.format(_ || this.localeData().calendar(r, this, Ae(s)));
    }, Ps.clone = function() {
        return new L(this);
    }, Ps.diff = function(e, a, t) {
        var s, n, r, _;
        return this.isValid() && (s = Ce(e, this)).isValid() ? (n = 6e4 * (s.utcOffset() - this.utcOffset()), 
        "year" === (a = S(a)) || "month" === a || "quarter" === a ? (_ = qe(this, s), "quarter" === a ? _ /= 3 : "year" === a && (_ /= 12)) : (r = this - s, 
        _ = "second" === a ? r / 1e3 : "minute" === a ? r / 6e4 : "hour" === a ? r / 36e5 : "day" === a ? (r - n) / 864e5 : "week" === a ? (r - n) / 6048e5 : r), 
        t ? _ : Y(_)) : NaN;
    }, Ps.endOf = function(e) {
        return void 0 === (e = S(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), 
        this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
    }, Ps.format = function(a) {
        a || (a = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
        var t = O(this, a);
        return this.localeData().postformat(t);
    }, Ps.from = function(e, a) {
        return this.isValid() && (c(e) && e.isValid() || Ae(e).isValid()) ? Ne({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
    }, Ps.fromNow = function(e) {
        return this.from(Ae(), e);
    }, Ps.to = function(e, a) {
        return this.isValid() && (c(e) && e.isValid() || Ae(e).isValid()) ? Ne({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
    }, Ps.toNow = function(e) {
        return this.to(Ae(), e);
    }, Ps.get = function(e) {
        return e = S(e), T(this[e]) ? this[e]() : this;
    }, Ps.invalidAt = function() {
        return m(this).overflow;
    }, Ps.isAfter = function(e, a) {
        var t = c(e) ? e : Ae(e);
        return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = S(M(a) ? "millisecond" : a)) ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf());
    }, Ps.isBefore = function(e, a) {
        var t = c(e) ? e : Ae(e);
        return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = S(M(a) ? "millisecond" : a)) ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf());
    }, Ps.isBetween = function(e, a, t, s) {
        return ("(" === (s = s || "()")[0] ? this.isAfter(e, t) : !this.isBefore(e, t)) && (")" === s[1] ? this.isBefore(a, t) : !this.isAfter(a, t));
    }, Ps.isSame = function(e, a) {
        var t, s = c(e) ? e : Ae(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = S(a || "millisecond")) ? this.valueOf() === s.valueOf() : (t = s.valueOf(), 
        this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()));
    }, Ps.isSameOrAfter = function(e, a) {
        return this.isSame(e, a) || this.isAfter(e, a);
    }, Ps.isSameOrBefore = function(e, a) {
        return this.isSame(e, a) || this.isBefore(e, a);
    }, Ps.isValid = function() {
        return u(this);
    }, Ps.lang = vs, Ps.locale = Be, Ps.localeData = Qe, Ps.max = fs, Ps.min = ps, Ps.parsingFlags = function() {
        return d({}, m(this));
    }, Ps.set = function(e, a) {
        if ("object" == typeof e) for (var t = j(e = H(e)), s = 0; s < t.length; s++) this[t[s].unit](e[t[s].unit]); else if (e = S(e), 
        T(this[e])) return this[e](a);
        return this;
    }, Ps.startOf = function(e) {
        switch (e = S(e)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }, Ps.subtract = ws, Ps.toArray = function() {
        var e = this;
        return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
    }, Ps.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        };
    }, Ps.toDate = function() {
        return new Date(this.valueOf());
    }, Ps.toISOString = function() {
        var e = this.clone().utc();
        return 0 < e.year() && e.year() <= 9999 ? T(Date.prototype.toISOString) ? this.toDate().toISOString() : O(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : O(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }, Ps.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
    }, Ps.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }, Ps.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
    }, Ps.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }, Ps.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }, Ps.year = es, Ps.isLeapYear = function() {
        return X(this.year());
    }, Ps.weekYear = function(e) {
        return ea.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }, Ps.isoWeekYear = function(e) {
        return ea.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }, Ps.quarter = Ps.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
    }, Ps.month = q, Ps.daysInMonth = function() {
        return $(this.year(), this.month());
    }, Ps.week = Ps.weeks = function(e) {
        var a = this.localeData().week(this);
        return null == e ? a : this.add(7 * (e - a), "d");
    }, Ps.isoWeek = Ps.isoWeeks = function(e) {
        var a = ne(this, 1, 4).week;
        return null == e ? a : this.add(7 * (e - a), "d");
    }, Ps.weeksInYear = function() {
        var e = this.localeData()._week;
        return re(this.year(), e.dow, e.doy);
    }, Ps.isoWeeksInYear = function() {
        return re(this.year(), 1, 4);
    }, Ps.date = Ss, Ps.day = Ps.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var a = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = _e(e, this.localeData()), this.add(e - a, "d")) : a;
    }, Ps.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? a : this.add(e - a, "d");
    }, Ps.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            var a = de(e, this.localeData());
            return this.day(this.day() % 7 ? a : a - 7);
        }
        return this.day() || 7;
    }, Ps.dayOfYear = function(e) {
        var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? a : this.add(e - a, "d");
    }, Ps.hour = Ps.hours = ms, Ps.minute = Ps.minutes = Hs, Ps.second = Ps.seconds = bs, 
    Ps.millisecond = Ps.milliseconds = xs, Ps.utcOffset = function(a, t) {
        var s, n = this._offset || 0;
        return this.isValid() ? null != a ? ("string" == typeof a ? a = Re(Et, a) : Math.abs(a) < 16 && (a *= 60), 
        !this._isUTC && t && (s = Ge(this)), this._offset = a, this._isUTC = !0, null != s && this.add(s, "m"), 
        n !== a && (!t || this._changeInProgress ? Ze(this, Ne(a - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
        e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? n : Ge(this) : null != a ? this : NaN;
    }, Ps.utc = function(e) {
        return this.utcOffset(0, e);
    }, Ps.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ge(this), "m")), 
        this;
    }, Ps.parseZone = function() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && (0 === Re(At, this._i) ? this.utcOffset(0, !0) : this.utcOffset(Re(At, this._i))), 
        this;
    }, Ps.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Ae(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
    }, Ps.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }, Ps.isLocal = function() {
        return !!this.isValid() && !this._isUTC;
    }, Ps.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC;
    }, Ps.isUtc = Ie, Ps.isUTC = Ie, Ps.zoneAbbr = function() {
        return this._isUTC ? "UTC" : "";
    }, Ps.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }, Ps.dates = k("dates accessor is deprecated. Use date instead.", Ss), Ps.months = k("months accessor is deprecated. Use month instead", q), 
    Ps.years = k("years accessor is deprecated. Use year instead", es), Ps.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, a) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset();
    }), Ps.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!M(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (h(e, this), (e = xe(e))._a) {
            var a = e._isUTC ? i(e._a) : Ae(e._a);
            this._isDSTShifted = this.isValid() && p(e._a, a.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    });
    var Ws = Ps, As = w.prototype;
    As.calendar = function(e, a, t) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return T(s) ? s.call(a, t) : s;
    }, As.longDateFormat = function(e) {
        var a = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()];
        return a || !t ? a : (this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1);
        }), this._longDateFormat[e]);
    }, As.invalidDate = function() {
        return this._invalidDate;
    }, As.ordinal = function(e) {
        return this._ordinal.replace("%d", e);
    }, As.preparse = ta, As.postformat = ta, As.relativeTime = function(e, a, t, s) {
        var n = this._relativeTime[t];
        return T(n) ? n(e, a, t, s) : n.replace(/%d/i, e);
    }, As.pastFuture = function(e, a) {
        var t = this._relativeTime[e > 0 ? "future" : "past"];
        return T(t) ? t(a) : t.replace(/%s/i, a);
    }, As.set = function(e) {
        var a, t;
        for (t in e) T(a = e[t]) ? this[t] = a : this["_" + t] = a;
        this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
    }, As.months = function(e, t) {
        return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Zt).test(t) ? "format" : "standalone"][e.month()] : this._months;
    }, As.monthsShort = function(e, t) {
        return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Zt.test(t) ? "format" : "standalone"][e.month()] : this._monthsShort;
    }, As.monthsParse = function(e, a, t) {
        var s, n, r;
        if (this._monthsParseExact) return K.call(this, e, a, t);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        s = 0; s < 12; s++) {
            if (n = i([ 2e3, s ]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), 
            t || this._monthsParse[s] || (r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), 
            this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), t && "MMMM" === a && this._longMonthsParse[s].test(e)) return s;
            if (t && "MMM" === a && this._shortMonthsParse[s].test(e)) return s;
            if (!t && this._monthsParse[s].test(e)) return s;
        }
    }, As.monthsRegex = function(e) {
        return this._monthsParseExact ? (_(this, "_monthsRegex") || B.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (_(this, "_monthsRegex") || (this._monthsRegex = Xt), 
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
    }, As.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (_(this, "_monthsRegex") || B.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (_(this, "_monthsShortRegex") || (this._monthsShortRegex = Qt), 
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }, As.week = function(e) {
        return ne(e, this._week.dow, this._week.doy).week;
    }, As.firstDayOfYear = function() {
        return this._week.doy;
    }, As.firstDayOfWeek = function() {
        return this._week.dow;
    }, As.weekdays = function(e, t) {
        return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : this._weekdays;
    }, As.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }, As.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }, As.weekdaysParse = function(e, a, t) {
        var s, n, r;
        if (this._weekdaysParseExact) return ie.call(this, e, a, t);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
        this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (n = i([ 2e3, 1 ]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", ".?") + "$", "i"), 
            this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", ".?") + "$", "i"), 
            this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", ".?") + "$", "i")), 
            this._weekdaysParse[s] || (r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), 
            this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), t && "dddd" === a && this._fullWeekdaysParse[s].test(e)) return s;
            if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e)) return s;
            if (t && "dd" === a && this._minWeekdaysParse[s].test(e)) return s;
            if (!t && this._weekdaysParse[s].test(e)) return s;
        }
    }, As.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || oe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (_(this, "_weekdaysRegex") || (this._weekdaysRegex = rs), 
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }, As.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || oe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (_(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = _s), 
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }, As.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || oe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (_(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ds), 
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }, As.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
    }, As.meridiem = function(e, a, t) {
        return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM";
    }, ce("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 === y(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
        }
    }), e.lang = k("moment.lang is deprecated. Use moment.locale instead.", ce), e.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ye);
    var Es = Math.abs, Fs = ma("ms"), zs = ma("s"), Os = ma("m"), Js = ma("h"), Rs = ma("d"), Cs = ma("w"), Gs = ma("M"), Is = ma("y"), Ns = ua("milliseconds"), Us = ua("seconds"), Vs = ua("minutes"), $s = ua("hours"), Ks = ua("days"), Zs = ua("months"), qs = ua("years"), Bs = Math.round, Qs = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, Xs = Math.abs, en = Fe.prototype;
    en.abs = function() {
        var e = this._data;
        return this._milliseconds = Es(this._milliseconds), this._days = Es(this._days), 
        this._months = Es(this._months), e.milliseconds = Es(e.milliseconds), e.seconds = Es(e.seconds), 
        e.minutes = Es(e.minutes), e.hours = Es(e.hours), e.months = Es(e.months), e.years = Es(e.years), 
        this;
    }, en.add = function(e, a) {
        return _a(this, e, a, 1);
    }, en.subtract = function(e, a) {
        return _a(this, e, a, -1);
    }, en.as = function(e) {
        var a, t, s = this._milliseconds;
        if ("month" === (e = S(e)) || "year" === e) return a = this._days + s / 864e5, t = this._months + ia(a), 
        "month" === e ? t : t / 12;
        switch (a = this._days + Math.round(oa(this._months)), e) {
          case "week":
            return a / 7 + s / 6048e5;

          case "day":
            return a + s / 864e5;

          case "hour":
            return 24 * a + s / 36e5;

          case "minute":
            return 1440 * a + s / 6e4;

          case "second":
            return 86400 * a + s / 1e3;

          case "millisecond":
            return Math.floor(864e5 * a) + s;

          default:
            throw new Error("Unknown unit " + e);
        }
    }, en.asMilliseconds = Fs, en.asSeconds = zs, en.asMinutes = Os, en.asHours = Js, 
    en.asDays = Rs, en.asWeeks = Cs, en.asMonths = Gs, en.asYears = Is, en.valueOf = function() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12);
    }, en._bubble = function() {
        var e, a, t, s, n, r = this._milliseconds, _ = this._days, d = this._months, i = this._data;
        return r >= 0 && _ >= 0 && d >= 0 || r <= 0 && _ <= 0 && d <= 0 || (r += 864e5 * da(oa(d) + _), 
        _ = 0, d = 0), i.milliseconds = r % 1e3, e = Y(r / 1e3), i.seconds = e % 60, a = Y(e / 60), 
        i.minutes = a % 60, t = Y(a / 60), i.hours = t % 24, _ += Y(t / 24), n = Y(ia(_)), 
        d += n, _ -= da(oa(n)), s = Y(d / 12), d %= 12, i.days = _, i.months = d, i.years = s, 
        this;
    }, en.get = function(e) {
        return e = S(e), this[e + "s"]();
    }, en.milliseconds = Ns, en.seconds = Us, en.minutes = Vs, en.hours = $s, en.days = Ks, 
    en.weeks = function() {
        return Y(this.days() / 7);
    }, en.months = Zs, en.years = qs, en.humanize = function(e) {
        var a = this.localeData(), t = Ma(this, !e, a);
        return e && (t = a.pastFuture(+this, t)), a.postformat(t);
    }, en.toISOString = ha, en.toString = ha, en.toJSON = ha, en.locale = Be, en.localeData = Qe, 
    en.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ha), 
    en.lang = vs, E("X", 0, 0, "unix"), E("x", 0, 0, "valueOf"), R("x", Wt), R("X", Ft), 
    N("X", function(e, a, t) {
        t._d = new Date(1e3 * parseFloat(e, 10));
    }), N("x", function(e, a, t) {
        t._d = new Date(y(e));
    }), e.version = "2.15.2", function(e) {
        nt = e;
    }(Ae), e.fn = Ws, e.min = function() {
        return Ee("isBefore", [].slice.call(arguments, 0));
    }, e.max = function() {
        return Ee("isAfter", [].slice.call(arguments, 0));
    }, e.now = function() {
        return Date.now ? Date.now() : +new Date();
    }, e.utc = i, e.unix = function(e) {
        return Ae(1e3 * e);
    }, e.months = function(e, a) {
        return na(e, a, "months");
    }, e.isDate = n, e.locale = ce, e.invalid = l, e.duration = Ne, e.isMoment = c, 
    e.weekdays = function(e, a, t) {
        return ra(e, a, t, "weekdays");
    }, e.parseZone = function() {
        return Ae.apply(null, arguments).parseZone();
    }, e.localeData = ye, e.isDuration = ze, e.monthsShort = function(e, a) {
        return na(e, a, "monthsShort");
    }, e.weekdaysMin = function(e, a, t) {
        return ra(e, a, t, "weekdaysMin");
    }, e.defineLocale = Ye, e.updateLocale = function(e, a) {
        if (null != a) {
            var t, s = us;
            null != ls[e] && (s = ls[e]._config), (t = new w(a = g(s, a))).parentLocale = ls[e], 
            ls[e] = t, ce(e);
        } else null != ls[e] && (null != ls[e].parentLocale ? ls[e] = ls[e].parentLocale : null != ls[e] && delete ls[e]);
        return ls[e];
    }, e.locales = function() {
        return ot(ls);
    }, e.weekdaysShort = function(e, a, t) {
        return ra(e, a, t, "weekdaysShort");
    }, e.normalizeUnits = S, e.relativeTimeRounding = function(e) {
        return void 0 === e ? Bs : "function" == typeof e && (Bs = e, !0);
    }, e.relativeTimeThreshold = function(e, a) {
        return void 0 !== Qs[e] && (void 0 === a ? Qs[e] : (Qs[e] = a, !0));
    }, e.calendarFormat = function(e, a) {
        var t = e.diff(a, "days", !0);
        return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
    }, e.prototype = Ws;
    var an = e, tn = (an.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function(e) {
            return /^nm$/i.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM";
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0"
    }), sn = function(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
    }, nn = {
        s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
        m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
        h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
        d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
        M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
        y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
    }, rn = function(e) {
        return function(a, t, s, n) {
            var r = sn(a), _ = nn[e][sn(a)];
            return 2 === r && (_ = _[t ? 0 : 1]), _.replace(/%d/i, a);
        };
    }, _n = [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" ], dn = (an.defineLocale("ar-ly", {
        months: _n,
        monthsShort: _n,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
            return "م" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "ص" : "م";
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: rn("s"),
            m: rn("m"),
            mm: rn("m"),
            h: rn("h"),
            hh: rn("h"),
            d: rn("d"),
            dd: rn("d"),
            M: rn("M"),
            MM: rn("M"),
            y: rn("y"),
            yy: rn("y")
        },
        preparse: function(e) {
            return e.replace(/\u200f/g, "").replace(/،/g, ",");
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return tn[e];
            }).replace(/,/g, "،");
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), an.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), {
        "1": "١",
        "2": "٢",
        "3": "٣",
        "4": "٤",
        "5": "٥",
        "6": "٦",
        "7": "٧",
        "8": "٨",
        "9": "٩",
        "0": "٠"
    }), on = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    }, mn = (an.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
            return "م" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "ص" : "م";
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        preparse: function(e) {
            return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return on[e];
            }).replace(/،/g, ",");
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return dn[e];
            }).replace(/,/g, "،");
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), an.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        "1": "١",
        "2": "٢",
        "3": "٣",
        "4": "٤",
        "5": "٥",
        "6": "٦",
        "7": "٧",
        "8": "٨",
        "9": "٩",
        "0": "٠"
    }), un = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    }, ln = function(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
    }, Mn = {
        s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
        m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
        h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
        d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
        M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
        y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
    }, hn = function(e) {
        return function(a, t, s, n) {
            var r = ln(a), _ = Mn[e][ln(a)];
            return 2 === r && (_ = _[t ? 0 : 1]), _.replace(/%d/i, a);
        };
    }, Ln = [ "كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر" ], cn = (an.defineLocale("ar", {
        months: Ln,
        monthsShort: Ln,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
            return "م" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "ص" : "م";
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: hn("s"),
            m: hn("m"),
            mm: hn("m"),
            h: hn("h"),
            hh: hn("h"),
            d: hn("d"),
            dd: hn("d"),
            M: hn("M"),
            MM: hn("M"),
            y: hn("y"),
            yy: hn("y")
        },
        preparse: function(e) {
            return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return un[e];
            }).replace(/،/g, ",");
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return mn[e];
            }).replace(/,/g, "،");
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
    }), Yn = (an.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birneçə saniyyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function(e) {
            return /^(gündüz|axşam)$/.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam";
        },
        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function(e) {
            if (0 === e) return e + "-ıncı";
            var a = e % 10, t = e % 100 - a, s = e >= 100 ? 100 : null;
            return e + (cn[a] || cn[t] || cn[s]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("be", {
        months: {
            format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
            standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
            format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
            standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function() {
                return "[У] dddd [ў] LT";
            },
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return "[У мінулую] dddd [ў] LT";

                  case 1:
                  case 2:
                  case 4:
                    return "[У мінулы] dddd [ў] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: ca,
            mm: ca,
            h: ca,
            hh: ca,
            d: "дзень",
            dd: ca,
            M: "месяц",
            MM: ca,
            y: "год",
            yy: ca
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function(e) {
            return /^(дня|вечара)$/.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
        },
        ordinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function(e, a) {
            switch (a) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";

              case "D":
                return e + "-га";

              default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[В изминалата] dddd [в] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[В изминалия] dddd [в] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дни",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(e) {
            var a = e % 10, t = e % 100;
            return 0 === e ? e + "-ев" : 0 === t ? e + "-ен" : t > 10 && t < 20 ? e + "-ти" : 1 === a ? e + "-ви" : 2 === a ? e + "-ри" : 7 === a || 8 === a ? e + "-ми" : e + "-ти";
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), {
        "1": "১",
        "2": "২",
        "3": "৩",
        "4": "৪",
        "5": "৫",
        "6": "৬",
        "7": "৭",
        "8": "৮",
        "9": "৯",
        "0": "০"
    }), yn = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
    }, pn = (an.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
        longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর"
        },
        preparse: function(e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                return yn[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Yn[e];
            });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "রাত" === a && e >= 4 || "দুপুর" === a && e < 5 || "বিকাল" === a ? e + 12 : e;
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), {
        "1": "༡",
        "2": "༢",
        "3": "༣",
        "4": "༤",
        "5": "༥",
        "6": "༦",
        "7": "༧",
        "8": "༨",
        "9": "༩",
        "0": "༠"
    }), fn = {
        "༡": "1",
        "༢": "2",
        "༣": "3",
        "༤": "4",
        "༥": "5",
        "༦": "6",
        "༧": "7",
        "༨": "8",
        "༩": "9",
        "༠": "0"
    }, kn = (an.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ"
        },
        preparse: function(e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                return fn[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return pn[e];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "མཚན་མོ" === a && e >= 4 || "ཉིན་གུང" === a && e < 5 || "དགོང་དག" === a ? e + 12 : e;
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), an.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            m: "ur vunutenn",
            mm: Ya,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: Ya,
            M: "ur miz",
            MM: Ya,
            y: "ur bloaz",
            yy: function(e) {
                switch (ya(e)) {
                  case 1:
                  case 3:
                  case 4:
                  case 5:
                  case 9:
                    return e + " bloaz";

                  default:
                    return e + " vloaz";
                }
            }
        },
        ordinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function(e) {
            return e + (1 === e ? "añ" : "vet");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";

                  case 3:
                    return "[u] [srijedu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";

                  case 6:
                    return "[prošle] [subote] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: ka,
            mm: ka,
            h: ka,
            hh: ka,
            d: "dan",
            dd: ka,
            M: "mjesec",
            MM: ka,
            y: "godinu",
            yy: ka
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("ca", {
        months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextDay: function() {
                return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastDay: function() {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "fa %s",
            s: "uns segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(e, a) {
            var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
            return "w" !== a && "W" !== a || (t = "a"), e + t;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")), Dn = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), Tn = (an.defineLocale("cs", {
        months: kn,
        monthsShort: Dn,
        monthsParse: function(e, a) {
            var t, s = [];
            for (t = 0; t < 12; t++) s[t] = new RegExp("^" + e[t] + "$|^" + a[t] + "$", "i");
            return s;
        }(kn, Dn),
        shortMonthsParse: function(e) {
            var a, t = [];
            for (a = 0; a < 12; a++) t[a] = new RegExp("^" + e[a] + "$", "i");
            return t;
        }(Dn),
        longMonthsParse: function(e) {
            var a, t = [];
            for (a = 0; a < 12; a++) t[a] = new RegExp("^" + e[a] + "$", "i");
            return t;
        }(kn),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[v neděli v] LT";

                  case 1:
                  case 2:
                    return "[v] dddd [v] LT";

                  case 3:
                    return "[ve středu v] LT";

                  case 4:
                    return "[ve čtvrtek v] LT";

                  case 5:
                    return "[v pátek v] LT";

                  case 6:
                    return "[v sobotu v] LT";
                }
            },
            lastDay: "[včera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[minulou neděli v] LT";

                  case 1:
                  case 2:
                    return "[minulé] dddd [v] LT";

                  case 3:
                    return "[minulou středu v] LT";

                  case 4:
                  case 5:
                    return "[minulý] dddd [v] LT";

                  case 6:
                    return "[minulou sobotu v] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "před %s",
            s: Ta,
            m: Ta,
            mm: Ta,
            h: Ta,
            hh: Ta,
            d: Ta,
            dd: Ta,
            M: Ta,
            MM: Ta,
            y: Ta,
            yy: Ta
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран");
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул"
        },
        ordinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        },
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(e) {
            var a = e, t = "", s = [ "", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed" ];
            return a > 20 ? t = 40 === a || 50 === a || 60 === a || 80 === a || 100 === a ? "fed" : "ain" : a > 0 && (t = s[a]), 
            e + t;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[I dag kl.] LT",
            nextDay: "[I morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[I går kl.] LT",
            lastWeek: "[sidste] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: ga,
            mm: "%d Minuten",
            h: ga,
            hh: "%d Stunden",
            d: ga,
            dd: ga,
            M: ga,
            MM: ga,
            y: ga,
            yy: ga
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: wa,
            mm: "%d Minuten",
            h: wa,
            hh: "%d Stunden",
            d: wa,
            dd: wa,
            M: wa,
            MM: wa,
            y: wa,
            yy: wa
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), [ "ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު" ]), gn = [ "އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު" ], wn = (an.defineLocale("dv", {
        months: Tn,
        monthsShort: Tn,
        weekdays: gn,
        weekdaysShort: gn,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function(e) {
            return "މފ" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "މކ" : "މފ";
        },
        calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d"
        },
        preparse: function(e) {
            return e.replace(/،/g, ",");
        },
        postformat: function(e) {
            return e.replace(/,/g, "،");
        },
        week: {
            dow: 7,
            doy: 12
        }
    }), an.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function(e, a) {
            return /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()];
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function(e, a, t) {
            return e > 11 ? t ? "μμ" : "ΜΜ" : t ? "πμ" : "ΠΜ";
        },
        isPM: function(e) {
            return "μ" === (e + "").toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 6:
                    return "[το προηγούμενο] dddd [{}] LT";

                  default:
                    return "[την προηγούμενη] dddd [{}] LT";
                }
            },
            sameElse: "L"
        },
        calendar: function(e, a) {
            var t = this._calendarEl[e], s = a && a.hours();
            return T(t) && (t = t.apply(a)), t.replace("{}", s % 12 == 1 ? "στη" : "στις");
        },
        relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
        },
        ordinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
        }
    }), an.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
        weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-an de] MMMM, YYYY",
            LLL: "D[-an de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(e) {
            return "p" === e.charAt(0).toLowerCase();
        },
        meridiem: function(e, a, t) {
            return e > 11 ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M.";
        },
        calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "je %s",
            past: "antaŭ %s",
            s: "sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        },
        ordinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
            dow: 1,
            doy: 7
        }
    }), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")), vn = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Sn = (an.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(e, a) {
            return /-MMM-/.test(a) ? vn[e.month()] : wn[e.month()];
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function() {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")), Hn = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), bn = (an.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(e, a) {
            return /-MMM-/.test(a) ? Hn[e.month()] : Sn[e.month()];
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function() {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: va,
            m: va,
            mm: va,
            h: va,
            hh: va,
            d: va,
            dd: "%d päeva",
            M: va,
            MM: va,
            y: va,
            yy: va
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: !0,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), {
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
        "0": "۰"
    }), jn = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0"
    }, xn = (an.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function(e) {
            return /بعد از ظهر/.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
        },
        calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چندین ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
        },
        preparse: function(e) {
            return e.replace(/[۰-۹]/g, function(e) {
                return jn[e];
            }).replace(/،/g, ",");
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return bn[e];
            }).replace(/,/g, "،");
        },
        ordinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {
            dow: 6,
            doy: 12
        }
    }), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")), Pn = [ "nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", xn[7], xn[8], xn[9] ], Wn = (an.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: Sa,
            m: Sa,
            mm: Sa,
            h: Sa,
            hh: Sa,
            d: Sa,
            dd: Sa,
            M: Sa,
            MM: Sa,
            y: Sa,
            yy: Sa
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            m: "ein minutt",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaði",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e) {
            return e + (1 === e ? "er" : "e");
        }
    }), an.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e) {
            return e + (1 === e ? "er" : "e");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal: function(e) {
            return e + (1 === e ? "er" : "");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")), An = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), En = (an.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function(e, a) {
            return /-MMM-/.test(a) ? An[e.month()] : Wn[e.month()];
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), [ "Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd" ]), Fn = [ "Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh" ], zn = [ "Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne" ], On = [ "Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis" ], Jn = [ "Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa" ], Rn = (an.defineLocale("gd", {
        months: En,
        monthsShort: Fn,
        monthsParseExact: !0,
        weekdays: zn,
        weekdaysShort: On,
        weekdaysMin: Jn,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna"
        },
        ordinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(e) {
            return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextDay: function() {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextWeek: function() {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
            },
            lastDay: function() {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
            },
            lastWeek: function() {
                return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return 0 === e.indexOf("un") ? "n" + e : "en " + e;
            },
            past: "hai %s",
            s: "uns segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function(e) {
                return 2 === e ? "שעתיים" : e + " שעות";
            },
            d: "יום",
            dd: function(e) {
                return 2 === e ? "יומיים" : e + " ימים";
            },
            M: "חודש",
            MM: function(e) {
                return 2 === e ? "חודשיים" : e + " חודשים";
            },
            y: "שנה",
            yy: function(e) {
                return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים";
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function(e) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? t ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? t ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
        }
    }), {
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९",
        "0": "०"
    }), Cn = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    }, Gn = (an.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
        },
        preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
                return Cn[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Rn[e];
            });
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "रात" === a ? e < 4 ? e : e + 12 : "सुबह" === a ? e : "दोपहर" === a ? e >= 10 ? e : e + 12 : "शाम" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), an.defineLocale("hr", {
        months: {
            format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";

                  case 3:
                    return "[u] [srijedu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";

                  case 6:
                    return "[prošle] [subote] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: ba,
            mm: ba,
            h: ba,
            hh: ba,
            d: "dan",
            dd: ba,
            M: "mjesec",
            MM: ba,
            y: "godinu",
            yy: ba
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")), In = (an.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function(e) {
            return "u" === e.charAt(1).toLowerCase();
        },
        meridiem: function(e, a, t) {
            return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU";
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
                return xa.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
                return xa.call(this, !1);
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: ja,
            m: ja,
            mm: ja,
            h: ja,
            hh: ja,
            d: ja,
            dd: ja,
            M: ja,
            MM: ja,
            y: ja,
            yy: ja
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("hy-am", {
        months: {
            format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
            standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function() {
                return "dddd [օրը ժամը] LT";
            },
            lastWeek: function() {
                return "[անցած] dddd [օրը ժամը] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function(e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e);
        },
        meridiem: function(e) {
            return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան";
        },
        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function(e, a) {
            switch (a) {
              case "DDD":
              case "w":
              case "W":
              case "DDDo":
                return 1 === e ? e + "-ին" : e + "-րդ";

              default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "pagi" === a ? e : "siang" === a ? e >= 11 ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: Wa,
            m: Wa,
            mm: Wa,
            h: "klukkustund",
            hh: Wa,
            d: Wa,
            dd: Wa,
            M: Wa,
            MM: Wa,
            y: Wa,
            yy: Wa
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
        weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
        weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[la scorsa] dddd [alle] LT";

                  default:
                    return "[lo scorso] dddd [alle] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
            },
            past: "%s fa",
            s: "alcuni secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
            LT: "Ah時m分",
            LTS: "Ah時m分s秒",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah時m分",
            LLLL: "YYYY年M月D日Ah時m分 dddd"
        },
        meridiemParse: /午前|午後/i,
        isPM: function(e) {
            return "午後" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "午前" : "午後";
        },
        calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: "[来週]dddd LT",
            lastDay: "[昨日] LT",
            lastWeek: "[前週]dddd LT",
            sameElse: "L"
        },
        ordinalParse: /\d{1,2}日/,
        ordinal: function(e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";

              default:
                return e;
            }
        },
        relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
        }
    }), an.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "enjing" === a ? e : "siyang" === a ? e >= 11 ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
        },
        calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("ka", {
        months: {
            standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
            format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
            standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
            format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში";
            },
            past: function(e) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0;
            },
            s: "რამდენიმე წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
        },
        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function(e) {
            return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე";
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
    }), Nn = (an.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл"
        },
        ordinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function(e) {
            var a = e % 10, t = e >= 100 ? 100 : null;
            return e + (In[e] || In[a] || In[t]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
            LT: "A h시 m분",
            LTS: "A h시 m분 s초",
            L: "YYYY.MM.DD",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h시 m분",
            LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
        },
        calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "일분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년"
        },
        ordinalParse: /\d{1,2}일/,
        ordinal: "%d일",
        meridiemParse: /오전|오후/,
        isPM: function(e) {
            return "오후" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "오전" : "오후";
        }
    }), {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
    }), Un = (an.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгүн саат] LT",
            nextDay: "[Эртең саат] LT",
            nextWeek: "dddd [саат] LT",
            lastDay: "[Кече саат] LT",
            lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ичинде",
            past: "%s мурун",
            s: "бирнече секунд",
            m: "бир мүнөт",
            mm: "%d мүнөт",
            h: "бир саат",
            hh: "%d саат",
            d: "бир күн",
            dd: "%d күн",
            M: "бир ай",
            MM: "%d ай",
            y: "бир жыл",
            yy: "%d жыл"
        },
        ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function(e) {
            var a = e % 10, t = e >= 100 ? 100 : null;
            return e + (Nn[e] || Nn[a] || Nn[t]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 2:
                  case 4:
                    return "[Leschten] dddd [um] LT";

                  default:
                    return "[Leschte] dddd [um] LT";
                }
            }
        },
        relativeTime: {
            future: function(e) {
                return Ea(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
            },
            past: function(e) {
                return Ea(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
            },
            s: "e puer Sekonnen",
            m: Aa,
            mm: "%d Minutten",
            h: Aa,
            hh: "%d Stonnen",
            d: Aa,
            dd: "%d Deeg",
            M: Aa,
            MM: "%d Méint",
            y: Aa,
            yy: "%d Joer"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function(e) {
            return "ຕອນແລງ" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
        },
        calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ"
        },
        ordinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function(e) {
            return "ທີ່" + e;
        }
    }), {
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
    }), Vn = (an.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: function(e, a, t, s) {
                return a ? "kelios sekundės" : s ? "kelių sekundžių" : "kelias sekundes";
            },
            m: Fa,
            mm: Ja,
            h: Fa,
            hh: Ja,
            d: Fa,
            dd: Ja,
            M: Fa,
            MM: Ja,
            y: Fa,
            yy: Ja
        },
        ordinalParse: /\d{1,2}-oji/,
        ordinal: function(e) {
            return e + "-oji";
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
    }), $n = (an.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: function(e, a) {
                return a ? "dažas sekundes" : "dažām sekundēm";
            },
            m: Ga,
            mm: Ca,
            h: Ga,
            hh: Ca,
            d: Ga,
            dd: Ca,
            M: Ga,
            MM: Ca,
            y: Ga,
            yy: Ca
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        words: {
            m: [ "jedan minut", "jednog minuta" ],
            mm: [ "minut", "minuta", "minuta" ],
            h: [ "jedan sat", "jednog sata" ],
            hh: [ "sat", "sata", "sati" ],
            dd: [ "dan", "dana", "dana" ],
            MM: [ "mjesec", "mjeseca", "mjeseci" ],
            yy: [ "godina", "godine", "godina" ]
        },
        correctGrammaticalCase: function(e, a) {
            return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2];
        },
        translate: function(e, a, t) {
            var s = $n.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + " " + $n.correctGrammaticalCase(e, s);
        }
    }), Kn = (an.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";

                  case 3:
                    return "[u] [srijedu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                return [ "[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ][this.day()];
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            m: $n.translate,
            mm: $n.translate,
            h: $n.translate,
            hh: $n.translate,
            d: "dan",
            dd: $n.translate,
            M: "mjesec",
            MM: $n.translate,
            y: "godinu",
            yy: $n.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Изминатата] dddd [во] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Изминатиот] dddd [во] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "после %s",
            past: "пред %s",
            s: "неколку секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            M: "месец",
            MM: "%d месеци",
            y: "година",
            yy: "%d години"
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(e) {
            var a = e % 10, t = e % 100;
            return 0 === e ? e + "-ев" : 0 === t ? e + "-ен" : t > 10 && t < 20 ? e + "-ти" : 1 === a ? e + "-ви" : 2 === a ? e + "-ри" : 7 === a || 8 === a ? e + "-ми" : e + "-ти";
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: !0,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "രാത്രി" === a && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === a || "വൈകുന്നേരം" === a ? e + 12 : e;
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി";
        }
    }), {
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९",
        "0": "०"
    }), Zn = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    }, qn = (an.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: Ia,
            m: Ia,
            mm: Ia,
            h: Ia,
            hh: Ia,
            d: Ia,
            dd: Ia,
            M: Ia,
            MM: Ia,
            y: Ia,
            yy: Ia
        },
        preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
                return Zn[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Kn[e];
            });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "रात्री" === a ? e < 4 ? e : e + 12 : "सकाळी" === a ? e : "दुपारी" === a ? e >= 10 ? e : e + 12 : "सायंकाळी" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), an.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), {
        "1": "၁",
        "2": "၂",
        "3": "၃",
        "4": "၄",
        "5": "၅",
        "6": "၆",
        "7": "၇",
        "8": "၈",
        "9": "၉",
        "0": "၀"
    }), Bn = {
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        "၀": "0"
    }, Qn = (an.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L"
        },
        relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်"
        },
        preparse: function(e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                return Bn[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return qn[e];
            });
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९",
        "0": "०"
    }), Xn = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    }, er = (an.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
                return Xn[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Qn[e];
            });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "राति" === a ? e < 4 ? e : e + 12 : "बिहान" === a ? e : "दिउँसो" === a ? e >= 10 ? e : e + 12 : "साँझ" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति";
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")), ar = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), tr = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ], sr = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, nr = (an.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(e, a) {
            return /-MMM-/.test(a) ? ar[e.month()] : er[e.month()];
        },
        monthsRegex: sr,
        monthsShortRegex: sr,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: tr,
        longMonthsParse: tr,
        shortMonthsParse: tr,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        "1": "੧",
        "2": "੨",
        "3": "੩",
        "4": "੪",
        "5": "੫",
        "6": "੬",
        "7": "੭",
        "8": "੮",
        "9": "੯",
        "0": "੦"
    }), rr = {
        "੧": "1",
        "੨": "2",
        "੩": "3",
        "੪": "4",
        "੫": "5",
        "੬": "6",
        "੭": "7",
        "੮": "8",
        "੯": "9",
        "੦": "0"
    }, _r = (an.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
            LT: "A h:mm ਵਜੇ",
            LTS: "A h:mm:ss ਵਜੇ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
            LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
            sameDay: "[ਅਜ] LT",
            nextDay: "[ਕਲ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ਕਲ] LT",
            lastWeek: "[ਪਿਛਲੇ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ਵਿੱਚ",
            past: "%s ਪਿਛਲੇ",
            s: "ਕੁਝ ਸਕਿੰਟ",
            m: "ਇਕ ਮਿੰਟ",
            mm: "%d ਮਿੰਟ",
            h: "ਇੱਕ ਘੰਟਾ",
            hh: "%d ਘੰਟੇ",
            d: "ਇੱਕ ਦਿਨ",
            dd: "%d ਦਿਨ",
            M: "ਇੱਕ ਮਹੀਨਾ",
            MM: "%d ਮਹੀਨੇ",
            y: "ਇੱਕ ਸਾਲ",
            yy: "%d ਸਾਲ"
        },
        preparse: function(e) {
            return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                return rr[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return nr[e];
            });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "ਰਾਤ" === a ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === a ? e : "ਦੁਪਹਿਰ" === a ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")), dr = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), ir = (an.defineLocale("pl", {
        months: function(e, a) {
            return "" === a ? "(" + dr[e.month()] + "|" + _r[e.month()] + ")" : /D MMMM/.test(a) ? dr[e.month()] : _r[e.month()];
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[W zeszłą niedzielę o] LT";

                  case 3:
                    return "[W zeszłą środę o] LT";

                  case 6:
                    return "[W zeszłą sobotę o] LT";

                  default:
                    return "[W zeszły] dddd [o] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: Ua,
            mm: Ua,
            h: Ua,
            hh: Ua,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: Ua,
            y: "rok",
            yy: Ua
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "%s atrás",
            s: "poucos segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº"
    }), an.defineLocale("pt", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            m: "un minut",
            mm: Va,
            h: "o oră",
            hh: Va,
            d: "o zi",
            dd: Va,
            M: "o lună",
            MM: Va,
            y: "un an",
            yy: Va
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ]), or = (an.defineLocale("ru", {
        months: {
            format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
            standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
            standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
            standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: ir,
        longMonthsParse: ir,
        shortMonthsParse: ir,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function(e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В следующее] dddd [в] LT";

                  case 1:
                  case 2:
                  case 4:
                    return "[В следующий] dddd [в] LT";

                  case 3:
                  case 5:
                  case 6:
                    return "[В следующую] dddd [в] LT";
                }
            },
            lastWeek: function(e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В прошлое] dddd [в] LT";

                  case 1:
                  case 2:
                  case 4:
                    return "[В прошлый] dddd [в] LT";

                  case 3:
                  case 5:
                  case 6:
                    return "[В прошлую] dddd [в] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: Ka,
            mm: Ka,
            h: "час",
            hh: Ka,
            d: "день",
            dd: Ka,
            M: "месяц",
            MM: Ka,
            y: "год",
            yy: Ka
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(e) {
            return /^(дня|вечера)$/.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
        },
        ordinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(e, a) {
            switch (a) {
              case "M":
              case "d":
              case "DDD":
                return e + "-й";

              case "D":
                return e + "-го";

              case "w":
              case "W":
                return e + "-я";

              default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d"
        },
        ordinalParse: /\d{1,2} වැනි/,
        ordinal: function(e) {
            return e + " වැනි";
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function(e) {
            return "ප.ව." === e || "පස් වරු" === e;
        },
        meridiem: function(e, a, t) {
            return e > 11 ? t ? "ප.ව." : "පස් වරු" : t ? "පෙ.ව." : "පෙර වරු";
        }
    }), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")), mr = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), ur = (an.defineLocale("sk", {
        months: or,
        monthsShort: mr,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[v nedeľu o] LT";

                  case 1:
                  case 2:
                    return "[v] dddd [o] LT";

                  case 3:
                    return "[v stredu o] LT";

                  case 4:
                    return "[vo štvrtok o] LT";

                  case 5:
                    return "[v piatok o] LT";

                  case 6:
                    return "[v sobotu o] LT";
                }
            },
            lastDay: "[včera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[minulú nedeľu o] LT";

                  case 1:
                  case 2:
                    return "[minulý] dddd [o] LT";

                  case 3:
                    return "[minulú stredu o] LT";

                  case 4:
                  case 5:
                    return "[minulý] dddd [o] LT";

                  case 6:
                    return "[minulú sobotu o] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: qa,
            m: qa,
            mm: qa,
            h: qa,
            hh: qa,
            d: qa,
            dd: qa,
            M: qa,
            MM: qa,
            y: qa,
            yy: qa
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[v] [nedeljo] [ob] LT";

                  case 3:
                    return "[v] [sredo] [ob] LT";

                  case 6:
                    return "[v] [soboto] [ob] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[v] dddd [ob] LT";
                }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[prejšnjo] [nedeljo] [ob] LT";

                  case 3:
                    return "[prejšnjo] [sredo] [ob] LT";

                  case 6:
                    return "[prejšnjo] [soboto] [ob] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prejšnji] dddd [ob] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: Ba,
            m: Ba,
            mm: Ba,
            h: Ba,
            hh: Ba,
            d: Ba,
            dd: Ba,
            M: Ba,
            MM: Ba,
            y: Ba,
            yy: Ba
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function(e) {
            return "M" === e.charAt(0);
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "PD" : "MD";
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        words: {
            m: [ "један минут", "једне минуте" ],
            mm: [ "минут", "минуте", "минута" ],
            h: [ "један сат", "једног сата" ],
            hh: [ "сат", "сата", "сати" ],
            dd: [ "дан", "дана", "дана" ],
            MM: [ "месец", "месеца", "месеци" ],
            yy: [ "година", "године", "година" ]
        },
        correctGrammaticalCase: function(e, a) {
            return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2];
        },
        translate: function(e, a, t) {
            var s = ur.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + " " + ur.correctGrammaticalCase(e, s);
        }
    }), lr = (an.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[у] [недељу] [у] LT";

                  case 3:
                    return "[у] [среду] [у] LT";

                  case 6:
                    return "[у] [суботу] [у] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[у] dddd [у] LT";
                }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function() {
                return [ "[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT" ][this.day()];
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            m: ur.translate,
            mm: ur.translate,
            h: ur.translate,
            hh: ur.translate,
            d: "дан",
            dd: ur.translate,
            M: "месец",
            MM: ur.translate,
            y: "годину",
            yy: ur.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), {
        words: {
            m: [ "jedan minut", "jedne minute" ],
            mm: [ "minut", "minute", "minuta" ],
            h: [ "jedan sat", "jednog sata" ],
            hh: [ "sat", "sata", "sati" ],
            dd: [ "dan", "dana", "dana" ],
            MM: [ "mesec", "meseca", "meseci" ],
            yy: [ "godina", "godine", "godina" ]
        },
        correctGrammaticalCase: function(e, a) {
            return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2];
        },
        translate: function(e, a, t) {
            var s = lr.words[t];
            return 1 === t.length ? a ? s[0] : s[1] : e + " " + lr.correctGrammaticalCase(e, s);
        }
    }), Mr = (an.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedelju] [u] LT";

                  case 3:
                    return "[u] [sredu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                return [ "[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ][this.day()];
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            m: lr.translate,
            mm: lr.translate,
            h: lr.translate,
            hh: lr.translate,
            d: "dan",
            dd: lr.translate,
            M: "mesec",
            MM: lr.translate,
            y: "godinu",
            yy: lr.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(e, a, t) {
            return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
        },
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "ekuseni" === a ? e : "emini" === a ? e >= 11 ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0;
        },
        ordinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === a ? "a" : 2 === a ? "a" : "e");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), {
        "1": "௧",
        "2": "௨",
        "3": "௩",
        "4": "௪",
        "5": "௫",
        "6": "௬",
        "7": "௭",
        "8": "௮",
        "9": "௯",
        "0": "௦"
    }), hr = {
        "௧": "1",
        "௨": "2",
        "௩": "3",
        "௪": "4",
        "௫": "5",
        "௬": "6",
        "௭": "7",
        "௮": "8",
        "௯": "9",
        "௦": "0"
    }, Lr = (an.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்"
        },
        ordinalParse: /\d{1,2}வது/,
        ordinal: function(e) {
            return e + "வது";
        },
        preparse: function(e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                return hr[e];
            });
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Mr[e];
            });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function(e, a, t) {
            return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்";
        },
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "யாமம்" === a ? e < 2 ? e : e + 12 : "வைகறை" === a || "காலை" === a ? e : "நண்பகல்" === a && e >= 10 ? e : e + 12;
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), an.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: !0,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు"
        },
        ordinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "రాత్రి" === a ? e < 4 ? e : e + 12 : "ఉదయం" === a ? e : "మధ్యాహ్నం" === a ? e >= 10 ? e : e + 12 : "సాయంత్రం" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), an.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY/MM/DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function(e) {
            return "หลังเที่ยง" === e;
        },
        meridiem: function(e, a, t) {
            return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
        },
        calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
        }
    }), an.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Ngayon sa] LT",
            nextDay: "[Bukas sa] LT",
            nextWeek: "dddd [sa] LT",
            lastDay: "[Kahapon sa] LT",
            lastWeek: "dddd [huling linggo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function(e) {
            return e;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")), cr = (an.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                var a = e;
                return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq";
            },
            past: function(e) {
                var a = e;
                return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret";
            },
            s: "puS lup",
            m: "wa’ tup",
            mm: Qa,
            h: "wa’ rep",
            hh: Qa,
            d: "wa’ jaj",
            dd: Qa,
            M: "wa’ jar",
            MM: Qa,
            y: "wa’ DIS",
            yy: Qa
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
    }), Yr = (an.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[haftaya] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen hafta] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl"
        },
        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: function(e) {
            if (0 === e) return e + "'ıncı";
            var a = e % 10, t = e % 100 - a, s = e >= 100 ? 100 : null;
            return e + (cr[a] || cr[t] || cr[s]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function(e) {
            return "d'o" === e.toLowerCase();
        },
        meridiem: function(e, a, t) {
            return e > 11 ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A";
        },
        calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: et,
            m: et,
            mm: et,
            h: et,
            hh: et,
            d: et,
            dd: et,
            M: et,
            MM: et,
            y: et,
            yy: et
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), an.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), an.defineLocale("uk", {
        months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function(e, a) {
            return {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }[/(\[[ВвУу]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()];
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
            sameDay: st("[Сьогодні "),
            nextDay: st("[Завтра "),
            lastDay: st("[Вчора "),
            nextWeek: st("[У] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return st("[Минулої] dddd [").call(this);

                  case 1:
                  case 2:
                  case 4:
                    return st("[Минулого] dddd [").call(this);
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            m: tt,
            mm: tt,
            h: "годину",
            hh: tt,
            d: "день",
            dd: tt,
            M: "місяць",
            MM: tt,
            y: "рік",
            yy: tt
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(e) {
            return /^(дня|вечора)$/.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
        },
        ordinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(e, a) {
            switch (a) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return e + "-й";

              case "D":
                return e + "-го";

              default:
                return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), an.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function(e) {
            return /^ch$/i.test(e);
        },
        meridiem: function(e, a, t) {
            return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH";
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần rồi lúc] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function(e) {
            return e;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: !0,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs"
        },
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var a = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah点mm分",
            LTS: "Ah点m分s秒",
            L: "YYYY-MM-DD",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah点mm分",
            LLLL: "YYYY年MMMD日ddddAh点mm分",
            l: "YYYY-MM-DD",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah点mm分",
            llll: "YYYY年MMMD日ddddAh点mm分"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "凌晨" === a || "早上" === a || "上午" === a ? e : "下午" === a || "晚上" === a ? e + 12 : e >= 11 ? e : e + 12;
        },
        meridiem: function(e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1130 ? "上午" : s < 1230 ? "中午" : s < 1800 ? "下午" : "晚上";
        },
        calendar: {
            sameDay: function() {
                return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT";
            },
            nextDay: function() {
                return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT";
            },
            lastDay: function() {
                return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT";
            },
            nextWeek: function() {
                var e, a;
                return e = an().startOf("week"), a = this.diff(e, "days") >= 7 ? "[下]" : "[本]", 
                0 === this.minutes() ? a + "dddAh点整" : a + "dddAh点mm";
            },
            lastWeek: function() {
                var e, a;
                return e = an().startOf("week"), a = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? a + "dddAh点整" : a + "dddAh点mm";
            },
            sameElse: "LL"
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";

              case "M":
                return e + "月";

              case "w":
              case "W":
                return e + "周";

              default:
                return e;
            }
        },
        relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), an.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah點mm分",
            LTS: "Ah點m分s秒",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah點mm分",
            LLLL: "YYYY年MMMD日ddddAh點mm分",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah點mm分",
            llll: "YYYY年MMMD日ddddAh點mm分"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "凌晨" === a || "早上" === a || "上午" === a ? e : "中午" === a ? e >= 11 ? e : e + 12 : "下午" === a || "晚上" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1130 ? "上午" : s < 1230 ? "中午" : s < 1800 ? "下午" : "晚上";
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";

              case "M":
                return e + "月";

              case "w":
              case "W":
                return e + "週";

              default:
                return e;
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    }), an.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah點mm分",
            LTS: "Ah點m分s秒",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah點mm分",
            LLLL: "YYYY年MMMD日ddddAh點mm分",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah點mm分",
            llll: "YYYY年MMMD日ddddAh點mm分"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, a) {
            return 12 === e && (e = 0), "凌晨" === a || "早上" === a || "上午" === a ? e : "中午" === a ? e >= 11 ? e : e + 12 : "下午" === a || "晚上" === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, t) {
            var s = 100 * e + a;
            return s < 600 ? "凌晨" : s < 900 ? "早上" : s < 1130 ? "上午" : s < 1230 ? "中午" : s < 1800 ? "下午" : "晚上";
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";

              case "M":
                return e + "月";

              case "w":
              case "W":
                return e + "週";

              default:
                return e;
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    }), an);
    return Yr.locale("en"), Yr;
});
(function() {
    function e(e) {
        this._value = e;
    }
    function n(e, n, t, r) {
        var i, a, u = Math.pow(10, n);
        return a = (t(e * u) / u).toFixed(n), r && (i = new RegExp("0{1," + r + "}$"), a = a.replace(i, "")), 
        a;
    }
    function t(e, n, t) {
        return n.indexOf("$") > -1 ? i(e, n, t) : n.indexOf("%") > -1 ? a(e, n, t) : n.indexOf(":") > -1 ? u(e) : o(e._value, n, t);
    }
    function r(e, n) {
        var t, r, i, a, u, o = n, c = [ "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ], f = !1;
        if (n.indexOf(":") > -1) e._value = l(n); else if (n === v) e._value = 0; else {
            for ("." !== d[p].delimiters.decimal && (n = n.replace(/\./g, "").replace(d[p].delimiters.decimal, ".")), 
            t = new RegExp("[^a-zA-Z]" + d[p].abbreviations.thousand + "(?:\\)|(\\" + d[p].currency.symbol + ")?(?:\\))?)?$"), 
            r = new RegExp("[^a-zA-Z]" + d[p].abbreviations.million + "(?:\\)|(\\" + d[p].currency.symbol + ")?(?:\\))?)?$"), 
            i = new RegExp("[^a-zA-Z]" + d[p].abbreviations.billion + "(?:\\)|(\\" + d[p].currency.symbol + ")?(?:\\))?)?$"), 
            a = new RegExp("[^a-zA-Z]" + d[p].abbreviations.trillion + "(?:\\)|(\\" + d[p].currency.symbol + ")?(?:\\))?)?$"), 
            u = 0; u <= c.length && !(f = n.indexOf(c[u]) > -1 && Math.pow(1024, u + 1)); u++) ;
            e._value = (f || 1) * (o.match(t) ? Math.pow(10, 3) : 1) * (o.match(r) ? Math.pow(10, 6) : 1) * (o.match(i) ? Math.pow(10, 9) : 1) * (o.match(a) ? Math.pow(10, 12) : 1) * (n.indexOf("%") > -1 ? .01 : 1) * ((n.split("-").length + Math.min(n.split("(").length - 1, n.split(")").length - 1)) % 2 ? 1 : -1) * Number(n.replace(/[^0-9\.]+/g, "")), 
            e._value = f ? Math.ceil(e._value) : e._value;
        }
        return e._value;
    }
    function i(e, n, t) {
        var r, i, a = n.indexOf("$"), u = n.indexOf("("), l = n.indexOf("-"), c = "";
        return n.indexOf(" $") > -1 ? (c = " ", n = n.replace(" $", "")) : n.indexOf("$ ") > -1 ? (c = " ", 
        n = n.replace("$ ", "")) : n = n.replace("$", ""), i = o(e._value, n, t), a <= 1 ? i.indexOf("(") > -1 || i.indexOf("-") > -1 ? (i = i.split(""), 
        r = 1, (a < u || a < l) && (r = 0), i.splice(r, 0, d[p].currency.symbol + c), i = i.join("")) : i = d[p].currency.symbol + c + i : i.indexOf(")") > -1 ? ((i = i.split("")).splice(-1, 0, c + d[p].currency.symbol), 
        i = i.join("")) : i = i + c + d[p].currency.symbol, i;
    }
    function a(e, n, t) {
        var r, i = "", a = 100 * e._value;
        return n.indexOf(" %") > -1 ? (i = " ", n = n.replace(" %", "")) : n = n.replace("%", ""), 
        (r = o(a, n, t)).indexOf(")") > -1 ? ((r = r.split("")).splice(-1, 0, i + "%"), 
        r = r.join("")) : r = r + i + "%", r;
    }
    function u(e) {
        var n = Math.floor(e._value / 60 / 60), t = Math.floor((e._value - 60 * n * 60) / 60), r = Math.round(e._value - 60 * n * 60 - 60 * t);
        return n + ":" + (t < 10 ? "0" + t : t) + ":" + (r < 10 ? "0" + r : r);
    }
    function l(e) {
        var n = e.split(":"), t = 0;
        return 3 === n.length ? (t += 60 * Number(n[0]) * 60, t += 60 * Number(n[1]), t += Number(n[2])) : 2 === n.length && (t += 60 * Number(n[0]), 
        t += Number(n[1])), Number(t);
    }
    function o(e, t, r) {
        var i, a, u, l, o, c, f = !1, s = !1, h = !1, b = "", m = !1, y = !1, g = !1, x = !1, w = !1, O = "", M = "", _ = Math.abs(e), B = [ "B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ], N = "", $ = !1;
        if (0 === e && null !== v) return v;
        if (t.indexOf("(") > -1 ? (f = !0, t = t.slice(1, -1)) : t.indexOf("+") > -1 && (s = !0, 
        t = t.replace(/\+/g, "")), t.indexOf("a") > -1 && (m = t.indexOf("aK") >= 0, y = t.indexOf("aM") >= 0, 
        g = t.indexOf("aB") >= 0, x = t.indexOf("aT") >= 0, w = m || y || g || x, t.indexOf(" a") > -1 ? (b = " ", 
        t = t.replace(" a", "")) : t = t.replace("a", ""), _ >= Math.pow(10, 12) && !w || x ? (b += d[p].abbreviations.trillion, 
        e /= Math.pow(10, 12)) : _ < Math.pow(10, 12) && _ >= Math.pow(10, 9) && !w || g ? (b += d[p].abbreviations.billion, 
        e /= Math.pow(10, 9)) : _ < Math.pow(10, 9) && _ >= Math.pow(10, 6) && !w || y ? (b += d[p].abbreviations.million, 
        e /= Math.pow(10, 6)) : (_ < Math.pow(10, 6) && _ >= Math.pow(10, 3) && !w || m) && (b += d[p].abbreviations.thousand, 
        e /= Math.pow(10, 3))), t.indexOf("b") > -1) for (t.indexOf(" b") > -1 ? (O = " ", 
        t = t.replace(" b", "")) : t = t.replace("b", ""), u = 0; u <= B.length; u++) if (i = Math.pow(1024, u), 
        a = Math.pow(1024, u + 1), e >= i && e < a) {
            O += B[u], i > 0 && (e /= i);
            break;
        }
        return t.indexOf("o") > -1 && (t.indexOf(" o") > -1 ? (M = " ", t = t.replace(" o", "")) : t = t.replace("o", ""), 
        M += d[p].ordinal(e)), t.indexOf("[.]") > -1 && (h = !0, t = t.replace("[.]", ".")), 
        l = e.toString().split(".")[0], o = t.split(".")[1], c = t.indexOf(","), o ? (l = (N = o.indexOf("[") > -1 ? n(e, (o = (o = o.replace("]", "")).split("["))[0].length + o[1].length, r, o[1].length) : n(e, o.length, r)).split(".")[0], 
        N = N.split(".")[1].length ? d[p].delimiters.decimal + N.split(".")[1] : "", h && 0 === Number(N.slice(1)) && (N = "")) : l = n(e, null, r), 
        l.indexOf("-") > -1 && (l = l.slice(1), $ = !0), c > -1 && (l = l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + d[p].delimiters.thousands)), 
        0 === t.indexOf(".") && (l = ""), (f && $ ? "(" : "") + (!f && $ ? "-" : "") + (!$ && s ? "+" : "") + l + N + (M || "") + (b || "") + (O || "") + (f && $ ? ")" : "");
    }
    function c(e, n) {
        d[e] = n;
    }
    function f(e) {
        var n = e.toString().split(".");
        return n.length < 2 ? 1 : Math.pow(10, n[1].length);
    }
    function s() {
        return Array.prototype.slice.call(arguments).reduce(function(e, n) {
            var t = f(e), r = f(n);
            return t > r ? t : r;
        }, -1 / 0);
    }
    var h, d = {}, p = "en", v = null, b = "0,0", m = "undefined" != typeof module && module.exports;
    (h = function(n) {
        return h.isNumeral(n) ? n = n.value() : 0 === n || void 0 === n ? n = 0 : Number(n) || (n = h.fn.unformat(n)), 
        new e(Number(n));
    }).version = "1.5.3", h.isNumeral = function(n) {
        return n instanceof e;
    }, h.language = function(e, n) {
        if (!e) return p;
        if (e && !n) {
            if (!d[e]) throw new Error("Unknown language : " + e);
            p = e;
        }
        return !n && d[e] || c(e, n), h;
    }, h.languageData = function(e) {
        if (!e) return d[p];
        if (!d[e]) throw new Error("Unknown language : " + e);
        return d[e];
    }, h.language("en", {
        delimiters: {
            thousands: ",",
            decimal: "."
        },
        abbreviations: {
            thousand: "k",
            million: "m",
            billion: "b",
            trillion: "t"
        },
        ordinal: function(e) {
            var n = e % 10;
            return 1 == ~~(e % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th";
        },
        currency: {
            symbol: "$"
        }
    }), h.zeroFormat = function(e) {
        v = "string" == typeof e ? e : null;
    }, h.defaultFormat = function(e) {
        b = "string" == typeof e ? e : "0.0";
    }, "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(e, n) {
        "use strict";
        if (null === this || void 0 === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        var t, r, i = this.length >>> 0, a = !1;
        for (1 < arguments.length && (r = n, a = !0), t = 0; i > t; ++t) this.hasOwnProperty(t) && (a ? r = e(r, this[t], t, this) : (r = this[t], 
        a = !0));
        if (!a) throw new TypeError("Reduce of empty array with no initial value");
        return r;
    }), h.fn = e.prototype = {
        clone: function() {
            return h(this);
        },
        format: function(e, n) {
            return t(this, e || b, void 0 !== n ? n : Math.round);
        },
        unformat: function(e) {
            return "[object Number]" === Object.prototype.toString.call(e) ? e : r(this, e || b);
        },
        value: function() {
            return this._value;
        },
        valueOf: function() {
            return this._value;
        },
        set: function(e) {
            return this._value = Number(e), this;
        },
        add: function(e) {
            var n = s.call(null, this._value, e);
            return this._value = [ this._value, e ].reduce(function(e, t, r, i) {
                return e + n * t;
            }, 0) / n, this;
        },
        subtract: function(e) {
            var n = s.call(null, this._value, e);
            return this._value = [ e ].reduce(function(e, t, r, i) {
                return e - n * t;
            }, this._value * n) / n, this;
        },
        multiply: function(e) {
            return this._value = [ this._value, e ].reduce(function(e, n, t, r) {
                var i = s(e, n);
                return e * i * (n * i) / (i * i);
            }, 1), this;
        },
        divide: function(e) {
            return this._value = [ this._value, e ].reduce(function(e, n, t, r) {
                var i = s(e, n);
                return e * i / (n * i);
            }), this;
        },
        difference: function(e) {
            return Math.abs(h(this._value).subtract(e).value());
        }
    }, m && (module.exports = h), "undefined" == typeof ender && (this.numeral = h), 
    "function" == typeof define && define.amd && define([], function() {
        return h;
    });
}).call(this);
!function(r) {
    "use strict";
    function e(r, e) {
        var t, n, i, o, s, u, f, c, l = r.constructor, d = l.precision;
        if (!r.s || !e.s) return e.s || (e = new l(r)), E ? h(e, d) : e;
        if (f = r.d, c = e.d, s = r.e, i = e.e, f = f.slice(), o = s - i) {
            for (o < 0 ? (n = f, o = -o, u = c.length) : (n = c, i = s, u = f.length), o > (u = (s = Math.ceil(d / y)) > u ? s + 1 : u + 1) && (o = u, 
            n.length = 1), n.reverse(); o--; ) n.push(0);
            n.reverse();
        }
        for ((u = f.length) - (o = c.length) < 0 && (o = u, n = c, c = f, f = n), t = 0; o; ) t = (f[--o] = f[o] + c[o] + t) / q | 0, 
        f[o] %= q;
        for (t && (f.unshift(t), ++i), u = f.length; 0 == f[--u]; ) f.pop();
        return e.d = f, e.e = i, E ? h(e, d) : e;
    }
    function t(r, e, t) {
        if (r !== ~~r || r < e || r > t) throw Error(x + r);
    }
    function n(r) {
        var e, t, n, i = r.length - 1, o = "", s = r[0];
        if (i > 0) {
            for (o += s, e = 1; e < i; e++) n = r[e] + "", (t = y - n.length) && (o += u(t)), 
            o += n;
            s = r[e], (t = y - (n = s + "").length) && (o += u(t));
        } else if (0 === s) return "0";
        for (;s % 10 == 0; ) s /= 10;
        return o + s;
    }
    function i(r, e) {
        var t, i, s, u, f, c = 0, l = 0, d = r.constructor, a = d.precision;
        if (o(r) > 16) throw Error(O + o(r));
        if (!r.s) return new d(v);
        for (null == e ? (E = !1, f = a) : f = e, u = new d(.03125); r.abs().gte(.1); ) r = r.times(u), 
        l += 5;
        for (f += Math.log(L(2, l)) / Math.LN10 * 2 + 5 | 0, t = i = s = new d(v), d.precision = f; ;) {
            if (i = h(i.times(r), f), t = t.times(++c), u = s.plus(A(i, t, f)), n(u.d).slice(0, f) === n(s.d).slice(0, f)) {
                for (;l--; ) s = h(s.times(s), f);
                return d.precision = a, null == e ? (E = !0, h(s, a)) : s;
            }
            s = u;
        }
    }
    function o(r) {
        for (var e = 1, t = r.d[0]; t >= 10; t /= 10) e++;
        return e + r.e * y - 1;
    }
    function s(r, e, t) {
        if (e > r.LN10.sd()) throw E = !0, t && (r.precision = t), Error(N + "LN10 precision limit exceeded");
        return h(new r(r.LN10), e);
    }
    function u(r) {
        for (var e = ""; r--; ) e += "0";
        return e;
    }
    function f(r, e) {
        var t, i, u, c, l, d, a, g, p, w = 1, m = r, x = m.d, O = m.constructor, b = O.precision;
        if (m.s < 1) throw Error(N + (m.s ? "NaN" : "-Infinity"));
        if (m.eq(v)) return new O(0);
        if (null == e ? (E = !1, g = b) : g = e, m.eq(10)) return null == e && (E = !0), 
        s(O, g);
        if (g += 10, O.precision = g, t = n(x), i = t.charAt(0), c = o(m), !(Math.abs(c) < 15e14)) return a = s(O, g + 2, b).times(c + ""), 
        m = f(new O(i + "." + t.slice(1)), g - 10).plus(a), O.precision = b, null == e ? (E = !0, 
        h(m, b)) : m;
        for (;i < 7 && 1 != i || 1 == i && t.charAt(1) > 3; ) i = (t = n((m = m.times(r)).d)).charAt(0), 
        w++;
        for (c = o(m), i > 1 ? (m = new O("0." + t), c++) : m = new O(i + "." + t.slice(1)), 
        d = l = m = A(m.minus(v), m.plus(v), g), p = h(m.times(m), g), u = 3; ;) {
            if (l = h(l.times(p), g), a = d.plus(A(l, new O(u), g)), n(a.d).slice(0, g) === n(d.d).slice(0, g)) return d = d.times(2), 
            0 !== c && (d = d.plus(s(O, g + 2, b).times(c + ""))), d = A(d, new O(w), g), O.precision = b, 
            null == e ? (E = !0, h(d, b)) : d;
            d = a, u += 2;
        }
    }
    function c(r, e) {
        var t, n, i;
        for ((t = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (t < 0 && (t = n), 
        t += +e.slice(n + 1), e = e.substring(0, n)) : t < 0 && (t = e.length), n = 0; 48 === e.charCodeAt(n); ) ++n;
        for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
        if (e = e.slice(n, i)) {
            if (i -= n, t = t - n - 1, r.e = b(t / y), r.d = [], n = (t + 1) % y, t < 0 && (n += y), 
            n < i) {
                for (n && r.d.push(+e.slice(0, n)), i -= y; n < i; ) r.d.push(+e.slice(n, n += y));
                e = e.slice(n), n = y - e.length;
            } else n -= i;
            for (;n--; ) e += "0";
            if (r.d.push(+e), E && (r.e > M || r.e < -M)) throw Error(O + t);
        } else r.s = 0, r.e = 0, r.d = [ 0 ];
        return r;
    }
    function h(r, e, t) {
        var n, i, s, u, f, c, h, l, d = r.d;
        for (u = 1, s = d[0]; s >= 10; s /= 10) u++;
        if ((n = e - u) < 0) n += y, i = e, h = d[l = 0]; else {
            if (l = Math.ceil((n + 1) / y), s = d.length, l >= s) return r;
            for (h = s = d[l], u = 1; s >= 10; s /= 10) u++;
            i = (n %= y) - y + u;
        }
        if (void 0 !== t && (f = h / (s = L(10, u - i - 1)) % 10 | 0, c = e < 0 || void 0 !== d[l + 1] || h % s, 
        c = t < 4 ? (f || c) && (0 == t || t == (r.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == t || c || 6 == t && (n > 0 ? i > 0 ? h / L(10, u - i) : 0 : d[l - 1]) % 10 & 1 || t == (r.s < 0 ? 8 : 7))), 
        e < 1 || !d[0]) return c ? (s = o(r), d.length = 1, e = e - s - 1, d[0] = L(10, (y - e % y) % y), 
        r.e = b(-e / y) || 0) : (d.length = 1, d[0] = r.e = r.s = 0), r;
        if (0 == n ? (d.length = l, s = 1, l--) : (d.length = l + 1, s = L(10, y - n), d[l] = i > 0 ? (h / L(10, u - i) % L(10, i) | 0) * s : 0), 
        c) for (;;) {
            if (0 == l) {
                (d[0] += s) == q && (d[0] = 1, ++r.e);
                break;
            }
            if (d[l] += s, d[l] != q) break;
            d[l--] = 0, s = 1;
        }
        for (n = d.length; 0 === d[--n]; ) d.pop();
        if (E && (r.e > M || r.e < -M)) throw Error(O + o(r));
        return r;
    }
    function l(r, e) {
        var t, n, i, o, s, u, f, c, l, d, a = r.constructor, g = a.precision;
        if (!r.s || !e.s) return e.s ? e.s = -e.s : e = new a(r), E ? h(e, g) : e;
        if (f = r.d, d = e.d, n = e.e, c = r.e, f = f.slice(), s = c - n) {
            for ((l = s < 0) ? (t = f, s = -s, u = d.length) : (t = d, n = c, u = f.length), 
            s > (i = Math.max(Math.ceil(g / y), u) + 2) && (s = i, t.length = 1), t.reverse(), 
            i = s; i--; ) t.push(0);
            t.reverse();
        } else {
            for ((l = (i = f.length) < (u = d.length)) && (u = i), i = 0; i < u; i++) if (f[i] != d[i]) {
                l = f[i] < d[i];
                break;
            }
            s = 0;
        }
        for (l && (t = f, f = d, d = t, e.s = -e.s), u = f.length, i = d.length - u; i > 0; --i) f[u++] = 0;
        for (i = d.length; i > s; ) {
            if (f[--i] < d[i]) {
                for (o = i; o && 0 === f[--o]; ) f[o] = q - 1;
                --f[o], f[i] += q;
            }
            f[i] -= d[i];
        }
        for (;0 === f[--u]; ) f.pop();
        for (;0 === f[0]; f.shift()) --n;
        return f[0] ? (e.d = f, e.e = n, E ? h(e, g) : e) : new a(0);
    }
    function d(r, e, t) {
        var i, s = o(r), f = n(r.d), c = f.length;
        return e ? (t && (i = t - c) > 0 ? f = f.charAt(0) + "." + f.slice(1) + u(i) : c > 1 && (f = f.charAt(0) + "." + f.slice(1)), 
        f = f + (s < 0 ? "e" : "e+") + s) : s < 0 ? (f = "0." + u(-s - 1) + f, t && (i = t - c) > 0 && (f += u(i))) : s >= c ? (f += u(s + 1 - c), 
        t && (i = t - s - 1) > 0 && (f = f + "." + u(i))) : ((i = s + 1) < c && (f = f.slice(0, i) + "." + f.slice(i)), 
        t && (i = t - c) > 0 && (s + 1 === c && (f += "."), f += u(i))), r.s < 0 ? "-" + f : f;
    }
    function a(r, e) {
        if (r.length > e) return r.length = e, !0;
    }
    function g(r) {
        function e(r) {
            var t = this;
            if (!(t instanceof e)) return new e(r);
            if (t.constructor = e, r instanceof e) return t.s = r.s, t.e = r.e, void (t.d = (r = r.d) ? r.slice() : r);
            if ("number" == typeof r) {
                if (0 * r != 0) throw Error(x + r);
                if (r > 0) t.s = 1; else {
                    if (!(r < 0)) return t.s = 0, t.e = 0, void (t.d = [ 0 ]);
                    r = -r, t.s = -1;
                }
                return r === ~~r && r < 1e7 ? (t.e = 0, void (t.d = [ r ])) : c(t, r.toString());
            }
            if ("string" != typeof r) throw Error(x + r);
            if (45 === r.charCodeAt(0) ? (r = r.slice(1), t.s = -1) : t.s = 1, !D.test(r)) throw Error(x + r);
            c(t, r);
        }
        var t, n, i;
        if (e.prototype = _, e.ROUND_UP = 0, e.ROUND_DOWN = 1, e.ROUND_CEIL = 2, e.ROUND_FLOOR = 3, 
        e.ROUND_HALF_UP = 4, e.ROUND_HALF_DOWN = 5, e.ROUND_HALF_EVEN = 6, e.ROUND_HALF_CEIL = 7, 
        e.ROUND_HALF_FLOOR = 8, e.clone = g, e.config = e.set = p, void 0 === r && (r = {}), 
        r) for (i = [ "precision", "rounding", "toExpNeg", "toExpPos", "LN10" ], t = 0; t < i.length; ) r.hasOwnProperty(n = i[t++]) || (r[n] = this[n]);
        return e.config(r), e;
    }
    function p(r) {
        if (!r || "object" != typeof r) throw Error(N + "Object expected");
        var e, t, n, i = [ "precision", 1, w, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0 ];
        for (e = 0; e < i.length; e += 3) if (void 0 !== (n = r[t = i[e]])) {
            if (!(b(n) === n && n >= i[e + 1] && n <= i[e + 2])) throw Error(x + t + ": " + n);
            this[t] = n;
        }
        if (void 0 !== (n = r[t = "LN10"])) {
            if (n != Math.LN10) throw Error(x + t + ": " + n);
            this[t] = new this(n);
        }
        return this;
    }
    var v, w = 1e9, m = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    }, E = !0, N = "[DecimalError] ", x = N + "Invalid argument: ", O = N + "Exponent out of range: ", b = Math.floor, L = Math.pow, D = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, q = 1e7, y = 7, M = b(9007199254740991 / y), _ = {};
    _.absoluteValue = _.abs = function() {
        var r = new this.constructor(this);
        return r.s && (r.s = 1), r;
    }, _.comparedTo = _.cmp = function(r) {
        var e, t, n, i, o = this;
        if (r = new o.constructor(r), o.s !== r.s) return o.s || -r.s;
        if (o.e !== r.e) return o.e > r.e ^ o.s < 0 ? 1 : -1;
        for (e = 0, t = (n = o.d.length) < (i = r.d.length) ? n : i; e < t; ++e) if (o.d[e] !== r.d[e]) return o.d[e] > r.d[e] ^ o.s < 0 ? 1 : -1;
        return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
    }, _.decimalPlaces = _.dp = function() {
        var r = this, e = r.d.length - 1, t = (e - r.e) * y;
        if (e = r.d[e]) for (;e % 10 == 0; e /= 10) t--;
        return t < 0 ? 0 : t;
    }, _.dividedBy = _.div = function(r) {
        return A(this, new this.constructor(r));
    }, _.dividedToIntegerBy = _.idiv = function(r) {
        var e = this, t = e.constructor;
        return h(A(e, new t(r), 0, 1), t.precision);
    }, _.equals = _.eq = function(r) {
        return !this.cmp(r);
    }, _.greaterThan = _.gt = function(r) {
        return this.cmp(r) > 0;
    }, _.greaterThanOrEqualTo = _.gte = function(r) {
        return this.cmp(r) >= 0;
    }, _.isInteger = _.isint = function() {
        return this.e > this.d.length - 2;
    }, _.isNegative = _.isneg = function() {
        return this.s < 0;
    }, _.isPositive = _.ispos = function() {
        return this.s > 0;
    }, _.isZero = function() {
        return 0 === this.s;
    }, _.lessThan = _.lt = function(r) {
        return this.cmp(r) < 0;
    }, _.lessThanOrEqualTo = _.lte = function(r) {
        return this.cmp(r) < 1;
    }, _.logarithm = _.log = function(r) {
        var e, t = this, n = t.constructor, i = n.precision, o = i + 5;
        if (void 0 === r) r = new n(10); else if ((r = new n(r)).s < 1 || r.eq(v)) throw Error(N + "NaN");
        if (t.s < 1) throw Error(N + (t.s ? "NaN" : "-Infinity"));
        return t.eq(v) ? new n(0) : (E = !1, e = A(f(t, o), f(r, o), o), E = !0, h(e, i));
    }, _.minus = _.sub = function(r) {
        var t = this;
        return r = new t.constructor(r), t.s == r.s ? l(t, r) : e(t, (r.s = -r.s, r));
    }, _.modulo = _.mod = function(r) {
        var e, t = this, n = t.constructor, i = n.precision;
        if (!(r = new n(r)).s) throw Error(N + "NaN");
        return t.s ? (E = !1, e = A(t, r, 0, 1).times(r), E = !0, t.minus(e)) : h(new n(t), i);
    }, _.naturalExponential = _.exp = function() {
        return i(this);
    }, _.naturalLogarithm = _.ln = function() {
        return f(this);
    }, _.negated = _.neg = function() {
        var r = new this.constructor(this);
        return r.s = -r.s || 0, r;
    }, _.plus = _.add = function(r) {
        var t = this;
        return r = new t.constructor(r), t.s == r.s ? e(t, r) : l(t, (r.s = -r.s, r));
    }, _.precision = _.sd = function(r) {
        var e, t, n, i = this;
        if (void 0 !== r && r !== !!r && 1 !== r && 0 !== r) throw Error(x + r);
        if (e = o(i) + 1, n = i.d.length - 1, t = n * y + 1, n = i.d[n]) {
            for (;n % 10 == 0; n /= 10) t--;
            for (n = i.d[0]; n >= 10; n /= 10) t++;
        }
        return r && e > t ? e : t;
    }, _.squareRoot = _.sqrt = function() {
        var r, e, t, i, s, u, f, c = this, l = c.constructor;
        if (c.s < 1) {
            if (!c.s) return new l(0);
            throw Error(N + "NaN");
        }
        for (r = o(c), E = !1, 0 == (s = Math.sqrt(+c)) || s == 1 / 0 ? (((e = n(c.d)).length + r) % 2 == 0 && (e += "0"), 
        s = Math.sqrt(e), r = b((r + 1) / 2) - (r < 0 || r % 2), i = new l(e = s == 1 / 0 ? "1e" + r : (e = s.toExponential()).slice(0, e.indexOf("e") + 1) + r)) : i = new l(s.toString()), 
        s = f = (t = l.precision) + 3; ;) if (u = i, i = u.plus(A(c, u, f + 2)).times(.5), 
        n(u.d).slice(0, f) === (e = n(i.d)).slice(0, f)) {
            if (e = e.slice(f - 3, f + 1), s == f && "4999" == e) {
                if (h(u, t + 1, 0), u.times(u).eq(c)) {
                    i = u;
                    break;
                }
            } else if ("9999" != e) break;
            f += 4;
        }
        return E = !0, h(i, t);
    }, _.times = _.mul = function(r) {
        var e, t, n, i, o, s, u, f, c, l = this, d = l.constructor, a = l.d, g = (r = new d(r)).d;
        if (!l.s || !r.s) return new d(0);
        for (r.s *= l.s, t = l.e + r.e, (f = a.length) < (c = g.length) && (o = a, a = g, 
        g = o, s = f, f = c, c = s), o = [], n = s = f + c; n--; ) o.push(0);
        for (n = c; --n >= 0; ) {
            for (e = 0, i = f + n; i > n; ) u = o[i] + g[n] * a[i - n - 1] + e, o[i--] = u % q | 0, 
            e = u / q | 0;
            o[i] = (o[i] + e) % q | 0;
        }
        for (;!o[--s]; ) o.pop();
        for (e ? ++t : o.shift(), n = o.length; !o[--n]; ) o.pop();
        return r.d = o, r.e = t, E ? h(r, d.precision) : r;
    }, _.toDecimalPlaces = _.todp = function(r, e) {
        var n = this, i = n.constructor;
        return n = new i(n), void 0 === r ? n : (t(r, 0, w), void 0 === e ? e = i.rounding : t(e, 0, 8), 
        h(n, r + o(n) + 1, e));
    }, _.toExponential = function(r, e) {
        var n, i = this, o = i.constructor;
        return void 0 === r ? n = d(i, !0) : (t(r, 0, w), void 0 === e ? e = o.rounding : t(e, 0, 8), 
        n = d(i = h(new o(i), r + 1, e), !0, r + 1)), n;
    }, _.toFixed = function(r, e) {
        var n, i, s = this, u = s.constructor;
        return void 0 === r ? d(s) : (t(r, 0, w), void 0 === e ? e = u.rounding : t(e, 0, 8), 
        i = h(new u(s), r + o(s) + 1, e), n = d(i.abs(), !1, r + o(i) + 1), s.isneg() && !s.isZero() ? "-" + n : n);
    }, _.toInteger = _.toint = function() {
        var r = this, e = r.constructor;
        return h(new e(r), o(r) + 1, e.rounding);
    }, _.toNumber = function() {
        return +this;
    }, _.toPower = _.pow = function(r) {
        var e, t, n, o, s, u, c = this, l = c.constructor, d = +(r = new l(r));
        if (!r.s) return new l(v);
        if (!(c = new l(c)).s) {
            if (r.s < 1) throw Error(N + "Infinity");
            return c;
        }
        if (c.eq(v)) return c;
        if (n = l.precision, r.eq(v)) return h(c, n);
        if (e = r.e, t = r.d.length - 1, u = e >= t, s = c.s, u) {
            if ((t = d < 0 ? -d : d) <= 9007199254740991) {
                for (o = new l(v), e = Math.ceil(n / y + 4), E = !1; t % 2 && a((o = o.times(c)).d, e), 
                0 !== (t = b(t / 2)); ) a((c = c.times(c)).d, e);
                return E = !0, r.s < 0 ? new l(v).div(o) : h(o, n);
            }
        } else if (s < 0) throw Error(N + "NaN");
        return s = s < 0 && 1 & r.d[Math.max(e, t)] ? -1 : 1, c.s = 1, E = !1, o = r.times(f(c, n + 12)), 
        E = !0, o = i(o), o.s = s, o;
    }, _.toPrecision = function(r, e) {
        var n, i, s = this, u = s.constructor;
        return void 0 === r ? i = d(s, (n = o(s)) <= u.toExpNeg || n >= u.toExpPos) : (t(r, 1, w), 
        void 0 === e ? e = u.rounding : t(e, 0, 8), i = d(s = h(new u(s), r, e), r <= (n = o(s)) || n <= u.toExpNeg, r)), 
        i;
    }, _.toSignificantDigits = _.tosd = function(r, e) {
        var n = this, i = n.constructor;
        return void 0 === r ? (r = i.precision, e = i.rounding) : (t(r, 1, w), void 0 === e ? e = i.rounding : t(e, 0, 8)), 
        h(new i(n), r, e);
    }, _.toString = _.valueOf = _.val = _.toJSON = function() {
        var r = this, e = o(r), t = r.constructor;
        return d(r, e <= t.toExpNeg || e >= t.toExpPos);
    };
    var A = function() {
        function r(r, e) {
            var t, n = 0, i = r.length;
            for (r = r.slice(); i--; ) t = r[i] * e + n, r[i] = t % q | 0, n = t / q | 0;
            return n && r.unshift(n), r;
        }
        function e(r, e, t, n) {
            var i, o;
            if (t != n) o = t > n ? 1 : -1; else for (i = o = 0; i < t; i++) if (r[i] != e[i]) {
                o = r[i] > e[i] ? 1 : -1;
                break;
            }
            return o;
        }
        function t(r, e, t) {
            for (var n = 0; t--; ) r[t] -= n, n = r[t] < e[t] ? 1 : 0, r[t] = n * q + r[t] - e[t];
            for (;!r[0] && r.length > 1; ) r.shift();
        }
        return function(n, i, s, u) {
            var f, c, l, d, a, g, p, v, w, m, E, x, O, b, L, D, M, _, A = n.constructor, P = n.s == i.s ? 1 : -1, R = n.d, U = i.d;
            if (!n.s) return new A(n);
            if (!i.s) throw Error(N + "Division by zero");
            for (c = n.e - i.e, M = U.length, L = R.length, v = (p = new A(P)).d = [], l = 0; U[l] == (R[l] || 0); ) ++l;
            if (U[l] > (R[l] || 0) && --c, (x = null == s ? s = A.precision : u ? s + (o(n) - o(i)) + 1 : s) < 0) return new A(0);
            if (x = x / y + 2 | 0, l = 0, 1 == M) for (d = 0, U = U[0], x++; (l < L || d) && x--; l++) O = d * q + (R[l] || 0), 
            v[l] = O / U | 0, d = O % U | 0; else {
                for ((d = q / (U[0] + 1) | 0) > 1 && (U = r(U, d), R = r(R, d), M = U.length, L = R.length), 
                b = M, m = (w = R.slice(0, M)).length; m < M; ) w[m++] = 0;
                (_ = U.slice()).unshift(0), D = U[0], U[1] >= q / 2 && ++D;
                do {
                    d = 0, (f = e(U, w, M, m)) < 0 ? (E = w[0], M != m && (E = E * q + (w[1] || 0)), 
                    (d = E / D | 0) > 1 ? (d >= q && (d = q - 1), 1 == (f = e(a = r(U, d), w, g = a.length, m = w.length)) && (d--, 
                    t(a, M < g ? _ : U, g))) : (0 == d && (f = d = 1), a = U.slice()), (g = a.length) < m && a.unshift(0), 
                    t(w, a, m), -1 == f && (f = e(U, w, M, m = w.length)) < 1 && (d++, t(w, M < m ? _ : U, m)), 
                    m = w.length) : 0 === f && (d++, w = [ 0 ]), v[l++] = d, f && w[0] ? w[m++] = R[b] || 0 : (w = [ R[b] ], 
                    m = 1);
                } while ((b++ < L || void 0 !== w[0]) && x--);
            }
            return v[0] || v.shift(), p.e = c, h(p, u ? s + o(p) + 1 : s);
        };
    }();
    m = g(m), v = new m(1), "function" == typeof define && define.amd ? define(function() {
        return m;
    }) : "undefined" != typeof module && module.exports ? module.exports = m.default = m.Decimal = m : (r || (r = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()), 
    r.Decimal = m);
}(this);
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e();
}(this, function() {
    "use strict";
    function t(t) {
        return "function" == typeof t || "object" == typeof t && null !== t;
    }
    function e(t) {
        return "function" == typeof t;
    }
    function n() {
        return void 0 !== F ? function() {
            F(o);
        } : r();
    }
    function r() {
        var t = setTimeout;
        return function() {
            return t(o, 1);
        };
    }
    function o() {
        for (var t = 0; t < q; t += 2) (0, B[t])(B[t + 1]), B[t] = void 0, B[t + 1] = void 0;
        q = 0;
    }
    function i(t, e) {
        var n = arguments, r = this, o = new this.constructor(u);
        void 0 === o[H] && T(o);
        var i = r._state;
        return i ? function() {
            var t = n[i - 1];
            K(function() {
                return S(i, o, t, r._result);
            });
        }() : b(r, o, t, e), o;
    }
    function s(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e) return t;
        var n = new e(u);
        return d(n, t), n;
    }
    function u() {}
    function c() {
        return new TypeError("You cannot resolve a promise with itself");
    }
    function a() {
        return new TypeError("A promises callback cannot return that same promise.");
    }
    function f(t) {
        try {
            return t.then;
        } catch (t) {
            return R.error = t, R;
        }
    }
    function l(t, e, n, r) {
        try {
            t.call(e, n, r);
        } catch (t) {
            return t;
        }
    }
    function h(t, e, n) {
        K(function(t) {
            var r = !1, o = l(n, e, function(n) {
                r || (r = !0, e !== n ? d(t, n) : y(t, n));
            }, function(e) {
                r || (r = !0, m(t, e));
            }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, m(t, o));
        }, t);
    }
    function p(t, e) {
        e._state === J ? y(t, e._result) : e._state === Q ? m(t, e._result) : b(e, void 0, function(e) {
            return d(t, e);
        }, function(e) {
            return m(t, e);
        });
    }
    function v(t, n, r) {
        n.constructor === t.constructor && r === i && n.constructor.resolve === s ? p(t, n) : r === R ? (m(t, R.error), 
        R.error = null) : void 0 === r ? y(t, n) : e(r) ? h(t, n, r) : y(t, n);
    }
    function d(e, n) {
        e === n ? m(e, c()) : t(n) ? v(e, n, f(n)) : y(e, n);
    }
    function _(t) {
        t._onerror && t._onerror(t._result), w(t);
    }
    function y(t, e) {
        t._state === I && (t._result = e, t._state = J, 0 !== t._subscribers.length && K(w, t));
    }
    function m(t, e) {
        t._state === I && (t._state = Q, t._result = e, K(_, t));
    }
    function b(t, e, n, r) {
        var o = t._subscribers, i = o.length;
        t._onerror = null, o[i] = e, o[i + J] = n, o[i + Q] = r, 0 === i && t._state && K(w, t);
    }
    function w(t) {
        var e = t._subscribers, n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], 
            o = e[s + n], r ? S(n, r, o, i) : o(i);
            t._subscribers.length = 0;
        }
    }
    function g() {
        this.error = null;
    }
    function A(t, e) {
        try {
            return t(e);
        } catch (t) {
            return V.error = t, V;
        }
    }
    function S(t, n, r, o) {
        var i = e(r), s = void 0, u = void 0, c = void 0, f = void 0;
        if (i) {
            if ((s = A(r, o)) === V ? (f = !0, u = s.error, s.error = null) : c = !0, n === s) return void m(n, a());
        } else s = o, c = !0;
        n._state !== I || (i && c ? d(n, s) : f ? m(n, u) : t === J ? y(n, s) : t === Q && m(n, s));
    }
    function j(t, e) {
        try {
            e(function(e) {
                d(t, e);
            }, function(e) {
                m(t, e);
            });
        } catch (e) {
            m(t, e);
        }
    }
    function E() {
        return X++;
    }
    function T(t) {
        t[H] = X++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }
    function M(t, e) {
        this._instanceConstructor = t, this.promise = new t(u), this.promise[H] || T(this.promise), 
        Y(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 
        0 === this.length ? y(this.promise, this._result) : (this.length = this.length || 0, 
        this._enumerate(), 0 === this._remaining && y(this.promise, this._result))) : m(this.promise, P());
    }
    function P() {
        return new Error("Array Methods must be provided an Array");
    }
    function x() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }
    function C() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    function O(t) {
        this[H] = E(), this._result = this._state = void 0, this._subscribers = [], u !== t && ("function" != typeof t && x(), 
        this instanceof O ? j(this, t) : C());
    }
    var k = void 0, Y = k = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }, q = 0, F = void 0, D = void 0, K = function(t, e) {
        B[q] = t, B[q + 1] = e, 2 === (q += 2) && (D ? D(o) : G());
    }, L = "undefined" != typeof window ? window : void 0, N = L || {}, U = N.MutationObserver || N.WebKitMutationObserver, W = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, B = new Array(1e3), G = void 0;
    G = W ? function() {
        return process.nextTick(o);
    } : U ? function() {
        var t = 0, e = new U(o), n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }), function() {
            n.data = t = ++t % 2;
        };
    }() : z ? function() {
        var t = new MessageChannel();
        return t.port1.onmessage = o, function() {
            return t.port2.postMessage(0);
        };
    }() : void 0 === L && "function" == typeof require ? function() {
        try {
            var t = require("vertx");
            return F = t.runOnLoop || t.runOnContext, n();
        } catch (t) {
            return r();
        }
    }() : r();
    var H = Math.random().toString(36).substring(16), I = void 0, J = 1, Q = 2, R = new g(), V = new g(), X = 0;
    return M.prototype._enumerate = function() {
        for (var t = this.length, e = this._input, n = 0; this._state === I && n < t; n++) this._eachEntry(e[n], n);
    }, M.prototype._eachEntry = function(t, e) {
        var n = this._instanceConstructor, r = n.resolve;
        if (r === s) {
            var o = f(t);
            if (o === i && t._state !== I) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, 
            this._result[e] = t; else if (n === O) {
                var c = new n(u);
                v(c, t, o), this._willSettleAt(c, e);
            } else this._willSettleAt(new n(function(e) {
                return e(t);
            }), e);
        } else this._willSettleAt(r(t), e);
    }, M.prototype._settledAt = function(t, e, n) {
        var r = this.promise;
        r._state === I && (this._remaining--, t === Q ? m(r, n) : this._result[e] = n), 
        0 === this._remaining && y(r, this._result);
    }, M.prototype._willSettleAt = function(t, e) {
        var n = this;
        b(t, void 0, function(t) {
            return n._settledAt(J, e, t);
        }, function(t) {
            return n._settledAt(Q, e, t);
        });
    }, O.all = function(t) {
        return new M(this, t).promise;
    }, O.race = function(t) {
        var e = this;
        return new e(Y(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r);
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."));
        });
    }, O.resolve = s, O.reject = function(t) {
        var e = new this(u);
        return m(e, t), e;
    }, O._setScheduler = function(t) {
        D = t;
    }, O._setAsap = function(t) {
        K = t;
    }, O._asap = K, O.prototype = {
        constructor: O,
        then: i,
        catch: function(t) {
            return this.then(null, t);
        }
    }, O.polyfill = function() {
        var t = void 0;
        if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try {
            t = Function("return this")();
        } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var e = t.Promise;
        if (e) {
            var n = null;
            try {
                n = Object.prototype.toString.call(e.resolve());
            } catch (t) {}
            if ("[object Promise]" === n && !e.cast) return;
        }
        t.Promise = O;
    }, O.Promise = O, O.polyfill(), O;
});
var $namespace = function(e, t, a) {
    var r, n, i = e.split(t || "."), o = a || window;
    for (r = 0, n = i.length; r < n; r++) o = o[i[r]] = o[i[r]] || {};
    return o;
}, $type = function(e, t) {
    if (!e instanceof t) throw new SyntaxError();
};

if (!$) var $ = function(e) {
    return document.getElementById(e);
};

if (Array.prototype.each || (Array.prototype.each = function(e) {
    if ("function" != typeof e) throw "Illegal Argument for Array.each";
    for (var t = 0; t < this.length; t++) e(this[t]);
}), Array.prototype.contains || (Array.prototype.contains = function(e) {
    var t = !1;
    return this.each(function(a) {
        (e.equals && e.equals(a) || a == e) && (t = !0);
    }), t;
}), Array.prototype.containsKey || (Array.prototype.containsKey = function(e) {
    for (var t in this) if (t.toLowerCase() == e.toLowerCase()) return !0;
    return !1;
}), Array.prototype.getCaseInsensitive || (Array.prototype.getCaseInsensitive = function(e) {
    for (var t in this) if (t.toLowerCase() == e.toLowerCase()) return this[t];
    return null;
}), String.prototype.charCodeAt || (String.prototype.charCodeAt = function(e) {
    for (var t = this.charAt(e), a = 0; a < 65536; a++) if (String.fromCharCode(a) == t) return a;
    return 0;
}), String.prototype.endsWith || (String.prototype.endsWith = function(e) {
    return this.substr(this.length - e.length, e.length) == e;
}), !Exception) {
    var Exception = function(e, t) {
        this.cause = t, this.errorMessage = e;
    };
    Exception.prototype = Error.prototype, Exception.prototype.getCause = function() {
        return this.cause;
    }, Exception.prototype.getMessage = function() {
        return this.message;
    }, Exception.prototype.getStackTrace = function() {
        if (this.callstack) return this.callstack;
        if (this.stack) {
            for (var e = 0, t = (a = stack.split("\n")).length; e < t; e++) a[e].match(/^\s*[A-Za-z0-9\=+\$]+\(/) && this.callstack.push(a[e]);
            return this.callstack.shift(), this.callstack;
        }
        if (window.opera && this.message) {
            for (var a = this.message.split("\n"), e = 0, t = a.length; e < t; e++) if (a[e].match(/^\s*[A-Za-z0-9\=+\$]+\(/)) {
                var r = a[e];
                a[e + 1] && (r += " at " + a[e + 1], e++), this.callstack.push(r);
            }
            return this.callstack.shift(), this.callstack;
        }
        for (var n = arguments.callee.caller; n; ) {
            var i = n.toString(), o = i.substring(i.indexOf("function") + 8, i.indexOf("(")) || "anonymous";
            this.callstack.push(o), n = n.caller;
        }
        return this.callstack;
    }, Exception.prototype.printStackTrace = function(e) {
        var t = this.getMessage() + "|||" + this.getStackTrace().join("|||");
        if (this.cause && this.cause.printStackTrace && (t += "||||||Caused by " + this.cause.printStackTrace().replace("\n", "|||")), 
        !e) return e.replace("|||", "\n");
        e.value ? e.value = t.replace("|||", "\n") : e.writeln ? e.writeln(t.replace("|||", "\n")) : e.innerHTML ? e.innerHTML = t.replace("|||", "<br/>") : e.innerText ? e.innerText = t.replace("|||", "<br/>") : e.append ? e.append(t.replace("|||", "\n")) : e instanceof Function && e(t.replace("|||", "\n"));
    };
}

if (!RuntimeException) var RuntimeException = Exception;

if (!IllegalArgumentException) var IllegalArgumentException = Exception;

if (!DateFormat) {
    var DateFormat = function(e) {
        var t = e, a = {
            longMonths: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            longDays: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            d: function(e) {
                return (e.getDate() < 10 ? "0" : "") + e.getDate();
            },
            D: function(e) {
                return a.shortDays[e.getDay()];
            },
            j: function(e) {
                return e.getDate();
            },
            l: function(e) {
                return a.longDays[e.getDay()];
            },
            N: function(e) {
                return e.getDay() + 1;
            },
            S: function(e) {
                return e.getDate() % 10 == 1 && 11 != e.getDate() ? "st" : e.getDate() % 10 == 2 && 12 != e.getDate() ? "nd" : e.getDate() % 10 == 3 && 13 != e.getDate() ? "rd" : "th";
            },
            w: function(e) {
                return e.getDay();
            },
            z: function(e) {
                return "Not Yet Supported";
            },
            W: function(e) {
                return "Not Yet Supported";
            },
            F: function(e) {
                return a.longMonths[e.getMonth()];
            },
            m: function(e) {
                return (e.getMonth() < 9 ? "0" : "") + (e.getMonth() + 1);
            },
            M: function(e) {
                return a.shortMonths[e.getMonth()];
            },
            n: function(e) {
                return e.getMonth() + 1;
            },
            t: function(e) {
                return "Not Yet Supported";
            },
            L: function(e) {
                return e.getFullYear() % 4 == 0 && e.getFullYear() % 100 != 0 || e.getFullYear() % 400 == 0 ? "1" : "0";
            },
            o: function(e) {
                return "Not Supported";
            },
            Y: function(e) {
                return e.getFullYear();
            },
            y: function(e) {
                return ("" + e.getFullYear()).substr(2);
            },
            a: function(e) {
                return e.getHours() < 12 ? "am" : "pm";
            },
            A: function(e) {
                return e.getHours() < 12 ? "AM" : "PM";
            },
            B: function(e) {
                return "Not Yet Supported";
            },
            g: function(e) {
                return e.getHours() % 12 || 12;
            },
            G: function(e) {
                return e.getHours();
            },
            h: function(e) {
                return ((e.getHours() % 12 || 12) < 10 ? "0" : "") + (e.getHours() % 12 || 12);
            },
            H: function(e) {
                return (e.getHours() < 10 ? "0" : "") + e.getHours();
            },
            i: function(e) {
                return (e.getMinutes() < 10 ? "0" : "") + e.getMinutes();
            },
            s: function(e) {
                return (e.getSeconds() < 10 ? "0" : "") + e.getSeconds();
            },
            e: function(e) {
                return "Not Yet Supported";
            },
            I: function(e) {
                return "Not Supported";
            },
            O: function(e) {
                return (-e.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(e.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(e.getTimezoneOffset() / 60) + "00";
            },
            P: function(e) {
                return (-e.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(e.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(e.getTimezoneOffset() / 60) + ":" + (Math.abs(e.getTimezoneOffset() % 60) < 10 ? "0" : "") + Math.abs(e.getTimezoneOffset() % 60);
            },
            T: function(e) {
                var t = e.getMonth();
                e.setMonth(0);
                var a = e.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, "$1");
                return e.setMonth(t), a;
            },
            Z: function(e) {
                return 60 * -e.getTimezoneOffset();
            },
            c: function(e) {
                return e.format("Y-m-d") + "T" + e.format("H:i:sP");
            },
            r: function(e) {
                return e.toString();
            },
            U: function(e) {
                return e.getTime() / 1e3;
            }
        };
        return {
            format: function(e) {
                for (var r = "", n = 0; n < t.length; n++) {
                    var i = t.charAt(n);
                    a[i] ? r += a[i].call(e) : r += i;
                }
                return r;
            }
        };
    };
    DateFormat.getDateInstance = function() {
        return new DateFormat("M/d/y h:i a");
    };
}

$namespace("org.owasp.esapi"), org.owasp.esapi.ESAPI = function(e) {
    var t = e;
    if (!t) throw new RuntimeException("Configuration Error - Unable to load $ESAPI_Properties Object");
    var a = null, r = null, n = null, i = null, o = null;
    return {
        properties: t,
        encoder: function() {
            if (!a) {
                if (!t.encoder.Implementation) throw new RuntimeException("Configuration Error - $ESAPI.properties.encoder.Implementation object not found.");
                a = new t.encoder.Implementation();
            }
            return a;
        },
        logFactory: function() {
            if (!n) {
                if (!t.logging.Implementation) throw new RuntimeException("Configuration Error - $ESAPI.properties.logging.Implementation object not found.");
                n = new t.logging.Implementation();
            }
            return n;
        },
        logger: function(e) {
            return this.logFactory().getLogger(e);
        },
        locale: function() {
            return org.owasp.esapi.i18n.Locale.getLocale(t.localization.DefaultLocale);
        },
        resourceBundle: function() {
            if (!i) {
                if (!t.localization.StandardResourceBundle) throw new RuntimeException("Configuration Error - $ESAPI.properties.localization.StandardResourceBundle not found.");
                i = new org.owasp.esapi.i18n.ObjectResourceBundle(t.localization.StandardResourceBundle);
            }
            return i;
        },
        validator: function() {
            if (!r) {
                if (!t.validation.Implementation) throw new RuntimeException("Configuration Error - $ESAPI.properties.validation.Implementation object not found.");
                r = new t.validation.Implementation();
            }
            return r;
        },
        httpUtilities: function() {
            return o || (o = new org.owasp.esapi.HTTPUtilities()), o;
        }
    };
};

var $ESAPI = null;

with (org.owasp.esapi.ESAPI.initialize = function() {
    $ESAPI = new org.owasp.esapi.ESAPI(Base.esapi.properties);
}, $namespace("org.owasp.esapi"), org.owasp.esapi.Encoder = function() {}, $namespace("org.owasp.esapi"), 
org.owasp.esapi.EncoderConstants = {
    CHAR_LOWERS: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ],
    CHAR_UPPERS: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
    CHAR_DIGITS: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
    CHAR_SPECIALS: [ "!", "$", "*", "+", "-", ".", "=", "?", "@", "^", "_", "|", "~" ],
    CHAR_LETTERS: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
    CHAR_ALNUM: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
}, $namespace("org.owasp.esapi"), org.owasp.esapi.EnterpriseSecurityException = function(e, t, a) {
    var r = t, n = new Exception(e, a);
    return {
        getMessage: n.getMessage,
        getUserMessage: n.getMessage,
        getLogMessage: function() {
            return r;
        },
        getStackTrace: n.getStackTrace,
        printStackTrace: n.printStackTrace
    };
}, $namespace("org.owasp.esapi"), org.owasp.esapi.HTTPUtilities = function() {
    var e = $ESAPI.logger("HTTPUtilities"), t = $ESAPI.resourceBundle(), a = org.owasp.esapi.Logger.EventType;
    return {
        addCookie: function(r) {
            if ($type(r, org.owasp.esapi.net.Cookie), "http:" != window.top.location.protocol || "https:" != window.top.location.protocol) throw new RuntimeException(t.getString("HTTPUtilities.Cookie.Protocol", {
                protocol: window.top.location.protocol
            }));
            var n = r.getName(), i = r.getValue(), o = r.getMaxAge(), c = r.getDomain(), s = r.getPath(), u = r.getSecure(), l = new org.owasp.esapi.ValidationErrorList();
            $ESAPI.validator().getValidInput("cookie name", n, "HttpCookieName", 50, !1, l), 
            $ESAPI.validator().getValidInput("cookie value", i, "HttpCookieValue", 5e3, !1, l);
            if (0 == l.size()) {
                var p = n + "=" + escape(i);
                p += o ? ";expires=" + new Date(new Date().getTime() + 1e3 * o).toGMTString() : "", 
                p += s ? ";path=" + s : "", p += c ? ";domain=" + c : "", p += u || $ESAPI.properties.httputilities.cookies.ForceSecure ? ";secure" : "", 
                document.cookie = p;
            } else e.warning(a.SECURITY_FAILURE, t.getString("HTTPUtilities.Cookie.UnsafeData", {
                name: n,
                value: i
            }));
        },
        getCookie: function(e) {
            for (var t = document.cookie.split("; "), a = 0, r = t.length; a < r; a++) {
                var n = t[a].split("=");
                if (n[0] == escape(e)) return new org.owasp.esapi.net.Cookie(e, n[1] ? unescape(n[1]) : "");
            }
            return null;
        },
        killAllCookies: function() {
            for (var e = document.cookie.split("; "), a = 0, r = e.length; a < r; a++) {
                var n = e[a].split("="), i = unescape(n[0]);
                if (!this.killCookie(i)) throw new RuntimeException(t.getString("HTTPUtilities.Cookie.CantKill", {
                    name: i
                }));
            }
        },
        killCookie: function(e) {
            var a = this.getCookie(e);
            if (a) {
                if (a.setMaxAge(-10), this.addCookie(a), this.getCookie(e)) throw new RuntimeException(t.getString("HTTPUtilities.Cookie.CantKill", {
                    name: e
                }));
                return !0;
            }
            return !1;
        },
        getRequestParameter: function(e) {
            var t = window.top.location.search.substring(1), a = t.indexOf(e);
            if (a < 0) return null;
            a += e.length;
            var r = t.indexOf("&", a);
            return r < 0 && (r = t.length), unescape(t.substring(a, r));
        }
    };
}, $namespace("org.owasp.esapi"), org.owasp.esapi.IntrusionException = function(e, t, a) {
    var r = new org.owasp.esapi.EnterpriseSecurityException(e, t, a);
    return {
        getMessage: r.getMessage,
        getUserMessage: r.getMessage,
        getLogMessage: r.getLogMessage,
        getStackTrace: r.getStackTrace,
        printStackTrace: r.printStackTrace
    };
}, $namespace("org.owasp.esapi"), org.owasp.esapi.LogFactory = function() {
    return {
        getLogger: !1
    };
}, $namespace("org.owasp.esapi"), org.owasp.esapi.Logger = function() {
    return {
        setLevel: !1,
        fatal: !1,
        error: !1,
        isErrorEnabled: !1,
        warning: !1,
        isWarningEnabled: !1,
        info: !1,
        isInfoEnabled: !1,
        debug: !1,
        isDebugEnabled: !1,
        trace: !1,
        isTraceEnabled: !1
    };
}, org.owasp.esapi.Logger.EventType = function(e, t) {
    var a = e, r = t;
    return {
        isSuccess: function() {
            return r;
        },
        toString: function() {
            return a;
        }
    };
}, org.owasp.esapi.Logger) EventType.SECURITY_SUCCESS = new EventType("SECURITY SUCCESS", !0), 
EventType.SECURITY_FAILURE = new EventType("SECURITY FAILURE", !1), EventType.EVENT_SUCCESS = new EventType("EVENT SUCCESS", !0), 
EventType.EVENT_FAILURE = new EventType("EVENT FAILURE", !1), OFF = Number.MAX_VALUE, 
FATAL = 1e3, ERROR = 800, WARNING = 600, INFO = 400, DEBUG = 200, TRACE = 100, ALL = Number.MIN_VALUE;

$namespace("org.owasp.esapi"), org.owasp.esapi.PreparedString = function(e, t, a) {
    var r = [], n = [];
    return a || (a = "?"), function(e) {
        for (var t = 0, i = 0, o = 0; o < e.length; o++) e.charAt(o) == a && (i++, r.push(e.substr(t, o)), 
        t = o + 1);
        r.push(e.substr(t)), n = new Array(i);
    }(e), {
        set: function(e, a, r) {
            if (e < 1 || e > n.length) throw new IllegalArgumentException("Attempt to set parameter: " + e + " on a PreparedString with only " + n.length + " placeholders");
            r || (r = t), n[e - 1] = r.encode([], a);
        },
        toString: function() {
            for (var e = 0; e < n.length; e++) if (null == n[e]) throw new RuntimeException("Attempt to render PreparedString without setting parameter " + (e + 1));
            for (var t = "", a = 0, i = 0; i < r.length; i++) t += r[i], a < n.length && (t += n[a++]);
            return t;
        }
    };
}, $namespace("org.owasp.esapi"), org.owasp.esapi.ValidationErrorList = function() {
    var e = Array();
    return {
        addError: function(t, a) {
            if (null == t) throw new RuntimeException("Context cannot be null: " + a.getLogMessage(), a);
            if (null == a) throw new RuntimeException("Context (" + t + ") - Error cannot be null");
            if (e[t]) throw new RuntimeException("Context (" + t + ") already exists. must be unique.");
            e[t] = a;
        },
        errors: function() {
            return e;
        },
        isEmpty: function() {
            return 0 == e.length;
        },
        size: function() {
            return e.length;
        }
    };
}, $namespace("org.owasp.esapi"), org.owasp.esapi.ValidationRule = function() {
    return {
        getValid: !1,
        setAllowNull: !1,
        getTypeName: !1,
        setTypeName: !1,
        setEncoder: !1,
        assertValid: !1,
        getSafe: !1,
        isValid: !1,
        whitelist: !1
    };
}, $namespace("org.owasp.esapi"), org.owasp.esapi.Validator = function() {
    return {
        addRule: !1,
        getRule: !1,
        getValidInput: !1,
        isValidDate: !1,
        getValidDate: !1,
        isValidSafeHTML: !1,
        getValidSafeHTML: !1,
        isValidCreditCard: !1,
        getValidCreditCard: !1,
        isValidFilename: !1,
        getValidFilename: !1,
        isValidNumber: !1,
        getValidNumber: !1,
        isValidPrintable: !1,
        getValidPrintable: !1
    };
}, $namespace("org.owasp.esapi.codecs.Base64"), org.owasp.esapi.codecs.Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        if (!e) return null;
        for (var t, a, r, n, i, o, c, s = "", u = 0, l = org.owasp.esapi.codecs.UTF8.encode(e); u < l.length; ) n = (t = l.charCodeAt(u++)) >> 2, 
        i = (3 & t) << 4 | (a = l.charCodeAt(u++)) >> 4, o = (15 & a) << 2 | (r = l.charCodeAt(u++)) >> 6, 
        c = 63 & r, isNaN(a) ? o = c = 64 : isNaN(r) && (c = 64), s += this._keyStr.charAt(n) + this._keyStr.charAt(i) + this._keyStr.charAt(o) + this._keyStr.charAt(c);
        return s;
    },
    decode: function(e) {
        if (!e) return null;
        for (var t, a, r, n, i, o, c = "", s = 0, u = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); s < u.length; ) t = this._keyStr.indexOf(u.charAt(s++)) << 2 | (n = this._keyStr.indexOf(u.charAt(s++))) >> 4, 
        a = (15 & n) << 4 | (i = this._keyStr.indexOf(u.charAt(s++))) >> 2, r = (3 & i) << 6 | (o = this._keyStr.indexOf(u.charAt(s++))), 
        c += String.fromCharCode(t), 64 != i && (c += String.fromCharCode(a)), 64 != o && (c += String.fromCharCode(r));
        return c = org.owasp.esapi.codecs.UTF8.decode(c);
    }
}, $namespace("org.owasp.esapi.codecs"), org.owasp.esapi.codecs.CSSCodec = function() {
    var e = new org.owasp.esapi.codecs.Codec();
    return {
        encode: e.encode,
        decode: e.decode,
        encodeCharacter: function(e, t) {
            if (e.contains(t)) return t;
            var a = org.owasp.esapi.codecs.Codec.getHexForNonAlphanumeric(t);
            return null == a ? t : "\\" + a + " ";
        },
        decodeCharacter: function(e) {
            e.mark();
            var t = e.next();
            if (null == t) return e.reset(), null;
            if ("\\" != t) return e.reset(), null;
            var a = e.next();
            if (null == a) return e.reset(), null;
            if (e.isHexDigit(a)) {
                for (var r = a, n = 0; n < 6; n++) {
                    var i = e.next();
                    if (null == i || 32 == i.charCodeAt(0)) break;
                    if (!e.isHexDigit(i)) {
                        input.pushback(i);
                        break;
                    }
                    r += i;
                }
                try {
                    var o = parseInt(r, 16);
                    return String.fromCharCode(o);
                } catch (t) {
                    return e.reset(), null;
                }
            }
            return a;
        }
    };
}, $namespace("org.owasp.esapi.codecs"), org.owasp.esapi.codecs.Codec = function() {
    return {
        encode: function(e, t) {
            for (var a = "", r = 0; r < t.length; r++) {
                var n = t.charAt(r);
                a += this.encodeCharacter(e, n);
            }
            return a;
        },
        encodeCharacter: function(e, t) {
            return t;
        },
        decode: function(e) {
            for (var t = "", a = new org.owasp.esapi.codecs.PushbackString(e); a.hasNext(); ) {
                var r = this.decodeCharacter(a);
                t += null != r ? r : a.next();
            }
            return t;
        },
        decodeCharacter: function(e) {
            return e.next();
        }
    };
}, org.owasp.esapi.codecs.Codec.getHexForNonAlphanumeric = function(e) {
    return e.charCodeAt(0) < 256 ? org.owasp.esapi.codecs.Codec.hex[e.charCodeAt(0)] : e.charCodeAt(0).toString(16);
}, org.owasp.esapi.codecs.Codec.hex = [];

for (var c = 0; c < 255; c++) org.owasp.esapi.codecs.Codec.hex[c] = c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 ? null : c.toString(16);

var entityToCharacterMap = [];

entityToCharacterMap["&quot"] = "34", entityToCharacterMap["&amp"] = "38", entityToCharacterMap["&lt"] = "60", 
entityToCharacterMap["&gt"] = "62", entityToCharacterMap["&nbsp"] = "160", entityToCharacterMap["&iexcl"] = "161", 
entityToCharacterMap["&cent"] = "162", entityToCharacterMap["&pound"] = "163", entityToCharacterMap["&curren"] = "164", 
entityToCharacterMap["&yen"] = "165", entityToCharacterMap["&brvbar"] = "166", entityToCharacterMap["&sect"] = "167", 
entityToCharacterMap["&uml"] = "168", entityToCharacterMap["&copy"] = "169", entityToCharacterMap["&ordf"] = "170", 
entityToCharacterMap["&laquo"] = "171", entityToCharacterMap["&not"] = "172", entityToCharacterMap["&shy"] = "173", 
entityToCharacterMap["&reg"] = "174", entityToCharacterMap["&macr"] = "175", entityToCharacterMap["&deg"] = "176", 
entityToCharacterMap["&plusmn"] = "177", entityToCharacterMap["&sup2"] = "178", 
entityToCharacterMap["&sup3"] = "179", entityToCharacterMap["&acute"] = "180", entityToCharacterMap["&micro"] = "181", 
entityToCharacterMap["&para"] = "182", entityToCharacterMap["&middot"] = "183", 
entityToCharacterMap["&cedil"] = "184", entityToCharacterMap["&sup1"] = "185", entityToCharacterMap["&ordm"] = "186", 
entityToCharacterMap["&raquo"] = "187", entityToCharacterMap["&frac14"] = "188", 
entityToCharacterMap["&frac12"] = "189", entityToCharacterMap["&frac34"] = "190", 
entityToCharacterMap["&iquest"] = "191", entityToCharacterMap["&Agrave"] = "192", 
entityToCharacterMap["&Aacute"] = "193", entityToCharacterMap["&Acirc"] = "194", 
entityToCharacterMap["&Atilde"] = "195", entityToCharacterMap["&Auml"] = "196", 
entityToCharacterMap["&Aring"] = "197", entityToCharacterMap["&AElig"] = "198", 
entityToCharacterMap["&Ccedil"] = "199", entityToCharacterMap["&Egrave"] = "200", 
entityToCharacterMap["&Eacute"] = "201", entityToCharacterMap["&Ecirc"] = "202", 
entityToCharacterMap["&Euml"] = "203", entityToCharacterMap["&Igrave"] = "204", 
entityToCharacterMap["&Iacute"] = "205", entityToCharacterMap["&Icirc"] = "206", 
entityToCharacterMap["&Iuml"] = "207", entityToCharacterMap["&ETH"] = "208", entityToCharacterMap["&Ntilde"] = "209", 
entityToCharacterMap["&Ograve"] = "210", entityToCharacterMap["&Oacute"] = "211", 
entityToCharacterMap["&Ocirc"] = "212", entityToCharacterMap["&Otilde"] = "213", 
entityToCharacterMap["&Ouml"] = "214", entityToCharacterMap["&times"] = "215", entityToCharacterMap["&Oslash"] = "216", 
entityToCharacterMap["&Ugrave"] = "217", entityToCharacterMap["&Uacute"] = "218", 
entityToCharacterMap["&Ucirc"] = "219", entityToCharacterMap["&Uuml"] = "220", entityToCharacterMap["&Yacute"] = "221", 
entityToCharacterMap["&THORN"] = "222", entityToCharacterMap["&szlig"] = "223", 
entityToCharacterMap["&agrave"] = "224", entityToCharacterMap["&aacute"] = "225", 
entityToCharacterMap["&acirc"] = "226", entityToCharacterMap["&atilde"] = "227", 
entityToCharacterMap["&auml"] = "228", entityToCharacterMap["&aring"] = "229", entityToCharacterMap["&aelig"] = "230", 
entityToCharacterMap["&ccedil"] = "231", entityToCharacterMap["&egrave"] = "232", 
entityToCharacterMap["&eacute"] = "233", entityToCharacterMap["&ecirc"] = "234", 
entityToCharacterMap["&euml"] = "235", entityToCharacterMap["&igrave"] = "236", 
entityToCharacterMap["&iacute"] = "237", entityToCharacterMap["&icirc"] = "238", 
entityToCharacterMap["&iuml"] = "239", entityToCharacterMap["&eth"] = "240", entityToCharacterMap["&ntilde"] = "241", 
entityToCharacterMap["&ograve"] = "242", entityToCharacterMap["&oacute"] = "243", 
entityToCharacterMap["&ocirc"] = "244", entityToCharacterMap["&otilde"] = "245", 
entityToCharacterMap["&ouml"] = "246", entityToCharacterMap["&divide"] = "247", 
entityToCharacterMap["&oslash"] = "248", entityToCharacterMap["&ugrave"] = "249", 
entityToCharacterMap["&uacute"] = "250", entityToCharacterMap["&ucirc"] = "251", 
entityToCharacterMap["&uuml"] = "252", entityToCharacterMap["&yacute"] = "253", 
entityToCharacterMap["&thorn"] = "254", entityToCharacterMap["&yuml"] = "255", entityToCharacterMap["&OElig"] = "338", 
entityToCharacterMap["&oelig"] = "339", entityToCharacterMap["&Scaron"] = "352", 
entityToCharacterMap["&scaron"] = "353", entityToCharacterMap["&Yuml"] = "376", 
entityToCharacterMap["&fnof"] = "402", entityToCharacterMap["&circ"] = "710", entityToCharacterMap["&tilde"] = "732", 
entityToCharacterMap["&Alpha"] = "913", entityToCharacterMap["&Beta"] = "914", entityToCharacterMap["&Gamma"] = "915", 
entityToCharacterMap["&Delta"] = "916", entityToCharacterMap["&Epsilon"] = "917", 
entityToCharacterMap["&Zeta"] = "918", entityToCharacterMap["&Eta"] = "919", entityToCharacterMap["&Theta"] = "920", 
entityToCharacterMap["&Iota"] = "921", entityToCharacterMap["&Kappa"] = "922", entityToCharacterMap["&Lambda"] = "923", 
entityToCharacterMap["&Mu"] = "924", entityToCharacterMap["&Nu"] = "925", entityToCharacterMap["&Xi"] = "926", 
entityToCharacterMap["&Omicron"] = "927", entityToCharacterMap["&Pi"] = "928", entityToCharacterMap["&Rho"] = "929", 
entityToCharacterMap["&Sigma"] = "931", entityToCharacterMap["&Tau"] = "932", entityToCharacterMap["&Upsilon"] = "933", 
entityToCharacterMap["&Phi"] = "934", entityToCharacterMap["&Chi"] = "935", entityToCharacterMap["&Psi"] = "936", 
entityToCharacterMap["&Omega"] = "937", entityToCharacterMap["&alpha"] = "945", 
entityToCharacterMap["&beta"] = "946", entityToCharacterMap["&gamma"] = "947", entityToCharacterMap["&delta"] = "948", 
entityToCharacterMap["&epsilon"] = "949", entityToCharacterMap["&zeta"] = "950", 
entityToCharacterMap["&eta"] = "951", entityToCharacterMap["&theta"] = "952", entityToCharacterMap["&iota"] = "953", 
entityToCharacterMap["&kappa"] = "954", entityToCharacterMap["&lambda"] = "955", 
entityToCharacterMap["&mu"] = "956", entityToCharacterMap["&nu"] = "957", entityToCharacterMap["&xi"] = "958", 
entityToCharacterMap["&omicron"] = "959", entityToCharacterMap["&pi"] = "960", entityToCharacterMap["&rho"] = "961", 
entityToCharacterMap["&sigmaf"] = "962", entityToCharacterMap["&sigma"] = "963", 
entityToCharacterMap["&tau"] = "964", entityToCharacterMap["&upsilon"] = "965", 
entityToCharacterMap["&phi"] = "966", entityToCharacterMap["&chi"] = "967", entityToCharacterMap["&psi"] = "968", 
entityToCharacterMap["&omega"] = "969", entityToCharacterMap["&thetasym"] = "977", 
entityToCharacterMap["&upsih"] = "978", entityToCharacterMap["&piv"] = "982", entityToCharacterMap["&ensp"] = "8194", 
entityToCharacterMap["&emsp"] = "8195", entityToCharacterMap["&thinsp"] = "8201", 
entityToCharacterMap["&zwnj"] = "8204", entityToCharacterMap["&zwj"] = "8205", entityToCharacterMap["&lrm"] = "8206", 
entityToCharacterMap["&rlm"] = "8207", entityToCharacterMap["&ndash"] = "8211", 
entityToCharacterMap["&mdash"] = "8212", entityToCharacterMap["&lsquo"] = "8216", 
entityToCharacterMap["&rsquo"] = "8217", entityToCharacterMap["&sbquo"] = "8218", 
entityToCharacterMap["&ldquo"] = "8220", entityToCharacterMap["&rdquo"] = "8221", 
entityToCharacterMap["&bdquo"] = "8222", entityToCharacterMap["&dagger"] = "8224", 
entityToCharacterMap["&Dagger"] = "8225", entityToCharacterMap["&bull"] = "8226", 
entityToCharacterMap["&hellip"] = "8230", entityToCharacterMap["&permil"] = "8240", 
entityToCharacterMap["&prime"] = "8242", entityToCharacterMap["&Prime"] = "8243", 
entityToCharacterMap["&lsaquo"] = "8249", entityToCharacterMap["&rsaquo"] = "8250", 
entityToCharacterMap["&oline"] = "8254", entityToCharacterMap["&frasl"] = "8260", 
entityToCharacterMap["&euro"] = "8364", entityToCharacterMap["&image"] = "8365", 
entityToCharacterMap["&weierp"] = "8472", entityToCharacterMap["&real"] = "8476", 
entityToCharacterMap["&trade"] = "8482", entityToCharacterMap["&alefsym"] = "8501", 
entityToCharacterMap["&larr"] = "8592", entityToCharacterMap["&uarr"] = "8593", 
entityToCharacterMap["&rarr"] = "8594", entityToCharacterMap["&darr"] = "8595", 
entityToCharacterMap["&harr"] = "8596", entityToCharacterMap["&crarr"] = "8629", 
entityToCharacterMap["&lArr"] = "8656", entityToCharacterMap["&uArr"] = "8657", 
entityToCharacterMap["&rArr"] = "8658", entityToCharacterMap["&dArr"] = "8659", 
entityToCharacterMap["&hArr"] = "8660", entityToCharacterMap["&forall"] = "8704", 
entityToCharacterMap["&part"] = "8706", entityToCharacterMap["&exist"] = "8707", 
entityToCharacterMap["&empty"] = "8709", entityToCharacterMap["&nabla"] = "8711", 
entityToCharacterMap["&isin"] = "8712", entityToCharacterMap["&notin"] = "8713", 
entityToCharacterMap["&ni"] = "8715", entityToCharacterMap["&prod"] = "8719", entityToCharacterMap["&sum"] = "8721", 
entityToCharacterMap["&minus"] = "8722", entityToCharacterMap["&lowast"] = "8727", 
entityToCharacterMap["&radic"] = "8730", entityToCharacterMap["&prop"] = "8733", 
entityToCharacterMap["&infin"] = "8734", entityToCharacterMap["&ang"] = "8736", 
entityToCharacterMap["&and"] = "8743", entityToCharacterMap["&or"] = "8744", entityToCharacterMap["&cap"] = "8745", 
entityToCharacterMap["&cup"] = "8746", entityToCharacterMap["&int"] = "8747", entityToCharacterMap["&there4"] = "8756", 
entityToCharacterMap["&sim"] = "8764", entityToCharacterMap["&cong"] = "8773", entityToCharacterMap["&asymp"] = "8776", 
entityToCharacterMap["&ne"] = "8800", entityToCharacterMap["&equiv"] = "8801", entityToCharacterMap["&le"] = "8804", 
entityToCharacterMap["&ge"] = "8805", entityToCharacterMap["&sub"] = "8834", entityToCharacterMap["&sup"] = "8835", 
entityToCharacterMap["&nsub"] = "8836", entityToCharacterMap["&sube"] = "8838", 
entityToCharacterMap["&supe"] = "8839", entityToCharacterMap["&oplus"] = "8853", 
entityToCharacterMap["&otimes"] = "8855", entityToCharacterMap["&perp"] = "8869", 
entityToCharacterMap["&sdot"] = "8901", entityToCharacterMap["&lceil"] = "8968", 
entityToCharacterMap["&rceil"] = "8969", entityToCharacterMap["&lfloor"] = "8970", 
entityToCharacterMap["&rfloor"] = "8971", entityToCharacterMap["&lang"] = "9001", 
entityToCharacterMap["&rang"] = "9002", entityToCharacterMap["&loz"] = "9674", entityToCharacterMap["&spades"] = "9824", 
entityToCharacterMap["&clubs"] = "9827", entityToCharacterMap["&hearts"] = "9829", 
entityToCharacterMap["&diams"] = "9830";

var characterToEntityMap = [];

for (var entity in entityToCharacterMap) characterToEntityMap[entityToCharacterMap[entity]] = entity;

$namespace("org.owasp.esapi.codecs"), org.owasp.esapi.codecs.HTMLEntityCodec = function() {
    var e = new org.owasp.esapi.codecs.Codec(), t = function(e) {
        var t = e.peek();
        return null == t ? null : "x" == t || "X" == t ? (e.next(), r(e)) : a(e);
    }, a = function(e) {
        for (var t = ""; e.hasNext(); ) {
            var a = e.peek();
            if (!a.match(/[0-9]/)) {
                if (";" == a) {
                    e.next();
                    break;
                }
                break;
            }
            t += a, e.next();
        }
        try {
            return parseInt(t);
        } catch (e) {
            return null;
        }
    }, r = function(e) {
        for (var t = ""; e.hasNext(); ) {
            var a = e.peek();
            if (!a.match(/[0-9A-Fa-f]/)) {
                if (";" == a) {
                    e.next();
                    break;
                }
                break;
            }
            t += a, e.next();
        }
        try {
            return parseInt(t, 16);
        } catch (e) {
            return null;
        }
    }, n = function(e) {
        for (var t = ""; e.hasNext(); ) {
            var a = e.peek();
            if (a.match(/[A-Za-z]/)) {
                if (t += a, e.next(), entityToCharacterMap.containsKey("&" + t)) {
                    e.peek(";") && e.next();
                    break;
                }
            } else {
                if (";" != a) break;
                e.next();
            }
        }
        return String.fromCharCode(entityToCharacterMap.getCaseInsensitive("&" + t));
    };
    return {
        encode: e.encode,
        decode: e.decode,
        encodeCharacter: function(e, t) {
            if (e.contains(t)) return t;
            var a = org.owasp.esapi.codecs.Codec.getHexForNonAlphanumeric(t);
            if (null == a) return t;
            var r = t.charCodeAt(0);
            if (r <= 31 && "\t" != t && "\n" != t && "\r" != t || r >= 127 && r <= 159 || " " == t) return " ";
            var n = characterToEntityMap[r];
            return null != n ? n + ";" : "&#x" + a + ";";
        },
        decodeCharacter: function(e) {
            var a = e;
            a.mark();
            var r = a.next();
            if (null == r || "&" != r) return a.reset(), null;
            var i = a.next();
            if (null == i) return a.reset(), null;
            if ("#" == i) {
                var o = t(a);
                if (null != o) return o;
            } else if (i.match(/[A-Za-z]/) && (a.pushback(i), null != (o = n(a)))) return o;
            return a.reset(), null;
        }
    };
}, $namespace("org.owasp.esapi.codecs"), org.owasp.esapi.codecs.JavascriptCodec = function() {
    return {
        encode: function(e, t) {
            for (var a = "", r = 0; r < t.length; r++) {
                var n = t.charAt(r);
                if (e.contains(n)) a += n; else if (null == org.owasp.esapi.codecs.Codec.getHexForNonAlphanumeric(n)) a += n; else {
                    var i = n.charCodeAt(0).toString(16);
                    if (n.charCodeAt(0) < 256) {
                        var o = "00".substr(i.length);
                        a += "\\x" + o + i.toUpperCase();
                    } else a += "\\u" + (o = "0000".substr(i.length)) + i.toUpperCase();
                }
            }
            return a;
        },
        decode: new org.owasp.esapi.codecs.Codec().decode,
        decodeCharacter: function(e) {
            e.mark();
            var t = e.next();
            if (null == t) return e.reset(), null;
            if ("\\" != t) return e.reset(), null;
            var a = e.next();
            if (null == a) return e.reset(), null;
            if ("b" == a) return 8;
            if ("t" == a) return 9;
            if ("n" == a) return 10;
            if ("v" == a) return 11;
            if ("f" == a) return 12;
            if ("r" == a) return 13;
            if ('"' == a) return 34;
            if ("'" == a) return 39;
            if ("\\" == a) return 92;
            if ("x" == a.toLowerCase()) {
                o = "";
                for (var r = 0; r < 2; r++) {
                    var n = e.nextHex();
                    if (null == n) return input.reset(), null;
                    o += n;
                }
                try {
                    return i = parseInt(o, 16), String.fromCharCode(i);
                } catch (t) {
                    return e.reset(), null;
                }
            } else if ("u" == a.toLowerCase()) {
                for (o = "", r = 0; r < 4; r++) {
                    if (null == (n = e.nextHex())) return input.reset(), null;
                    o += n;
                }
                try {
                    var i = parseInt(o, 16);
                    return String.fromCharCode(i);
                } catch (t) {
                    return e.reset(), null;
                }
            } else if (e.isOctalDigit(a)) {
                var o = a, c = e.next();
                if (e.isOctalDigit(c)) {
                    o += c;
                    var s = e.next();
                    e.isOctalDigit(s) ? o += s : e.pushback(s);
                } else e.pushback(c);
                try {
                    return i = parseInt(o, 8), String.fromCharCode(i);
                } catch (t) {
                    return e.reset(), null;
                }
            }
            return a;
        }
    };
}, $namespace("org.owasp.esapi.codecs"), org.owasp.esapi.codecs.PercentCodec = function() {
    var e = new org.owasp.esapi.codecs.Codec(), t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", a = function(e) {
        var t = "";
        if (e < -128 || e > 127) throw new IllegalArgumentException("b is not a byte (was " + e + ")");
        return (e &= 255) < 16 && (t += "0"), t + e.toString(16).toUpperCase();
    };
    return {
        encode: e.encode,
        decode: e.decode,
        encodeCharacter: function(e, r) {
            if (t.indexOf(r) > -1) return r;
            for (var n = org.owasp.esapi.codecs.UTF8.encode(r), i = "", o = 0; o < n.length; o++) i += "%" + a(n.charCodeAt(o));
            return i;
        },
        decodeCharacter: function(e) {
            e.mark();
            var t = e.next();
            if (null == t || "%" != t) return e.reset(), null;
            for (var a = "", r = 0; r < 2; r++) {
                var n = e.nextHex();
                null != n && (a += n);
            }
            if (2 == a.length) try {
                var i = parseInt(a, 16);
                return String.fromCharCode(i);
            } catch (e) {}
            return e.reset(), null;
        }
    };
}, $namespace("org.owasp.esapi.codecs"), org.owasp.esapi.codecs.PushbackString = function(e) {
    var t = e, a = "", r = "", n = 0, i = 0;
    return {
        pushback: function(e) {
            a = e;
        },
        index: function() {
            return n;
        },
        hasNext: function() {
            return null != a || !(null == t || 0 == t.length || n >= t.length);
        },
        next: function() {
            if (null != a) {
                var e = a;
                return a = null, e;
            }
            return null == t || 0 == t.length || n >= t.length ? null : t.charAt(n++);
        },
        nextHex: function() {
            var e = this.next();
            return this.isHexDigit(e) ? e : null;
        },
        nextOctal: function() {
            var e = this.next();
            return this.isOctalDigit(e) ? e : null;
        },
        isHexDigit: function(e) {
            return null != e && (e >= "0" && e <= "9" || e >= "a" && e <= "f" || e >= "A" && e <= "F");
        },
        isOctalDigit: function(e) {
            return null != e && e >= "0" && e <= "7";
        },
        peek: function(e) {
            return e ? null != a && a == e || !(null == t || 0 == t.length || n >= t.length) && t.charAt(n) == e : null != a ? a : null == t || 0 == t.length || n >= t.length ? null : t.charAt(n);
        },
        mark: function() {
            r = a, i = n;
        },
        reset: function() {
            a = r, n = i;
        },
        remainder: function() {
            var e = t.substr(n);
            return null != a && (e = a + e), e;
        }
    };
}, $namespace("org.owasp.esapi.codecs"), org.owasp.esapi.codecs.UTF8 = {
    encode: function(e) {
        for (var t = e.replace(/\r\n/g, "\n"), a = "", r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r);
            n < 128 ? a += String.fromCharCode(n) : n > 127 && n < 2048 ? (a += String.fromCharCode(n >> 6 | 192), 
            a += String.fromCharCode(63 & n | 128)) : (a += String.fromCharCode(n >> 12 | 224), 
            a += String.fromCharCode(n >> 6 & 63 | 128), a += String.fromCharCode(63 & n | 128));
        }
        return a;
    },
    decode: function(e) {
        for (var t = "", a = c = c1 = c2 = 0; a < e.length; ) (c = e.charCodeAt(a)) < 128 ? (t += String.fromCharCode(c), 
        a++) : c > 191 && c < 224 ? (c2 = e.charCodeAt(a + 1), t += String.fromCharCode((31 & c) << 6 | 63 & c2), 
        a += 2) : (c2 = utftext.charCodeAt(a + 1), c3 = utftext.charCodeAt(a + 2), string += String.fromCharCode((15 & c) << 12 | (63 & c2) << 6 | 63 & c3), 
        a += 3);
        return t;
    }
}, $namespace("org.owasp.esapi.i18n"), org.owasp.esapi.i18n.ArrayResourceBundle = function(sName, oLocale, aMessages, oParent) {
    with (org.owasp.esapi.i18n) var _super = new ResourceBundle(sName, oLocale, oParent);
    var messages = aMessages;
    return {
        getParent: _super.getParent,
        getLocale: _super.getLocale,
        getName: _super.getName,
        getString: _super.getString,
        getMessage: function(e) {
            return messages[e];
        }
    };
}, $namespace("org.owasp.esapi.i18n"), org.owasp.esapi.i18n.Locale = function(e, t, a) {
    var r = e, n = t, i = a;
    return {
        getLanguage: function() {
            return r;
        },
        getCountry: function() {
            return n;
        },
        getVariant: function() {
            return i;
        },
        toString: function() {
            return r + (n ? "-" + n + (i ? "-" + i : "") : "");
        }
    };
}, org.owasp.esapi.i18n.Locale.US = new org.owasp.esapi.i18n.Locale("en", "US"), 
org.owasp.esapi.i18n.Locale.GB = new org.owasp.esapi.i18n.Locale("en", "GB"), org.owasp.esapi.i18n.Locale.getLocale = function(e) {
    var t = e.split("-");
    return new org.owasp.esapi.i18n.Locale(t[0], t.length > 1 ? t[1] : "", t.length > 2 ? t.length[2] : "");
}, org.owasp.esapi.i18n.Locale.getDefault = function() {
    var e = (navigator.language ? navigator.language : navigator.userLanguage ? navigator.userLanguage : "en-US").split("-");
    return new org.owasp.esapi.i18n.Locale(e[0], e.length > 1 ? e[1] : "", e.length > 2 ? e.length[2] : "");
}, $namespace("org.owasp.esapi.i18n"), org.owasp.esapi.i18n.ObjectResourceBundle = function(e, t) {
    var a = new org.owasp.esapi.i18n.ResourceBundle(e.name, org.owasp.esapi.i18n.Locale.getLocale(e.locale), t), r = e.messages;
    return {
        getParent: a.getParent,
        getLocale: a.getLocale,
        getName: a.getName,
        getString: a.getString,
        getMessage: function(e) {
            return r[e];
        }
    };
}, $namespace("org.owasp.esapi.i18n"), org.owasp.esapi.i18n.ResourceBundle = function(e, t, a) {
    var r = a, n = t, i = e;
    if (!i) throw new SyntaxError("Name required for implementations of org.owasp.esapi.i18n.ResourceBundle");
    if (!n) throw new SyntaxError("Locale required for implementations of org.owasp.esapi.i18n.ResourceBundle");
    return {
        getParent: function() {
            return r;
        },
        getLocale: function() {
            return n;
        },
        getName: function() {
            return i;
        },
        getMessage: function(e) {
            return e;
        },
        getString: function(e, t) {
            if (arguments.length < 1) throw new IllegalArgumentException("No key passed to getString");
            var a = this.getMessage(e);
            if (!a) return r ? r.getString(e, t) : e;
            if (!a.match(/\{([A-Za-z]+)\}/) || !t) return a;
            for (var n = "", i = 0; ;) {
                var o = a.indexOf("{", i), c = a.indexOf("}", o);
                if (o < 0) {
                    n += a.substr(i, a.length - i);
                    break;
                }
                if (o >= 0 && c < -1) throw new SyntaxError("Invalid Message - Unclosed Context Reference: " + a);
                n += a.substring(i, o);
                var s = a.substring(o + 1, c);
                t[s] ? n += t[s] : n += a.substring(o, c + 1), i = c + 1;
            }
            return n;
        }
    };
}, org.owasp.esapi.i18n.ResourceBundle.getResourceBundle = function(sResource, oLocale) {
    var classname = sResource + "_" + oLocale.toString().replace("-", "_");
    with (org.owasp.esapi.i18n) return ResourceBundle[classname] instanceof Object ? ResourceBundle[classname] : new ResourceBundle[classname]();
}, $namespace("org.owasp.esapi.net"), org.owasp.esapi.net.Cookie = function(e, t) {
    var a, r, n, i, o, c, s, u, l = $ESAPI.resourceBundle();
    if (!function(e) {
        for (var t = 0, a = e.length; t < a; t++) {
            var r = e.charCodeAt(t), n = e.charAt(t);
            if (r < 32 || r >= 127 || -1 != ",; ".indexOf(n)) return !1;
        }
        return !0;
    }(e) || "comment" == e.toLowerCase() || "discard" == e.toLowerCase() || "domain" == e.toLowerCase() || "expires" == e.toLowerCase() || "max-age" == e.toLowerCase() || "path" == e.toLowerCase() || "secure" == e.toLowerCase() || "version" == e.toLowerCase() || "$" == e.charAt(0)) {
        var p = l.getString("Cookie.Name", {
            name: e
        });
        throw new IllegalArgumentException(p);
    }
    return a = e, r = t, {
        setComment: function(e) {
            n = e;
        },
        getComment: function() {
            return n;
        },
        setDomain: function(e) {
            i = e.toLowerCase();
        },
        getDomain: function() {
            return i;
        },
        setMaxAge: function(e) {
            o = e;
        },
        getMaxAge: function() {
            return o;
        },
        setPath: function(e) {
            c = e;
        },
        getPath: function() {
            return c;
        },
        setSecure: function(e) {
            s = e;
        },
        getSecure: function() {
            return s;
        },
        getName: function() {
            return a;
        },
        setValue: function(e) {
            r = e;
        },
        getValue: function() {
            return r;
        },
        setVersion: function(e) {
            if (e < 0 || e > 1) throw new IllegalArgumentException(l.getString("Cookie.Version", {
                version: e
            }));
            u = e;
        },
        getVersion: function() {
            return u;
        }
    };
}, $namespace("org.owasp.esapi.reference.encoding"), org.owasp.esapi.reference.encoding.DefaultEncoder = function(e) {
    var t = [], a = new org.owasp.esapi.codecs.HTMLEntityCodec(), r = new org.owasp.esapi.codecs.JavascriptCodec(), n = new org.owasp.esapi.codecs.CSSCodec(), i = new org.owasp.esapi.codecs.PercentCodec();
    e ? t = e : (t.push(a), t.push(r), t.push(n), t.push(i));
    var o = new Array(",", ".", "-", "_", " "), c = new Array(",", ".", "-", "_"), s = new Array(), u = new Array(",", ".", "_");
    return {
        cananicalize: function(e, a) {
            if (!e) return null;
            for (var r = e, n = null, i = 1, o = 0, c = !1; !c; ) c = !0, t.each(function(e) {
                r != (r = e.decode(r)) && (null != n && n != e && i++, n = e, c && o++, c = !1);
            });
            if (o >= 2 && i > 1) {
                if (a) throw new org.owasp.esapi.IntrusionException("Input validation failure", "Multiple (" + o + "x) and mixed encoding (" + i + "x) detected in " + e);
            } else if (o >= 2) {
                if (a) throw new org.owasp.esapi.IntrusionException("Input validation failure", "Multiple (" + o + "x) encoding detected in " + e);
            } else if (i > 1 && a) throw new org.owasp.esapi.IntrusionException("Input validation failure", "Mixed (" + i + "x) encoding detected in " + e);
            return r;
        },
        normalize: function(e) {
            return e.replace(/[^\x00-\x7F]/g, "");
        },
        encodeForHTML: function(e) {
            return e ? a.encode(o, e) : null;
        },
        decodeForHTML: function(e) {
            return e ? a.decode(e) : null;
        },
        encodeForHTMLAttribute: function(e) {
            return e ? a.encode(c, e) : null;
        },
        encodeForCSS: function(e) {
            return e ? n.encode(s, e) : null;
        },
        encodeForJavaScript: function(e) {
            return e ? r.encode(u, e) : null;
        },
        encodeForJavascript: this.encodeForJavaScript,
        encodeForURL: function(e) {
            return e ? escape(e) : null;
        },
        decodeFromURL: function(e) {
            return e ? unescape(e) : null;
        },
        encodeForBase64: function(e) {
            return e ? org.owasp.esapi.codecs.Base64.encode(e) : null;
        },
        decodeFromBase64: function(e) {
            return e ? org.owasp.esapi.codecs.Base64.decode(e) : null;
        }
    };
}, $namespace("org.owasp.esapi.reference.logging"), org.owasp.esapi.reference.logging.Log4JSLogFactory = function() {
    Array();
    var e = {
        TRACE: 10,
        DEBUG: 20,
        INFO: 30,
        WARN: 40,
        ERROR: 50,
        FATAL: 60
    }, t = function(t) {
        return {
            setLevel: function(e) {},
            trace: function(t, a, r) {
                this.log(e.TRACE, t, a, r);
            },
            debug: function(t, a, r) {
                this.log(e.DEBUG, t, a, r);
            },
            info: function(t, a, r) {
                this.log(e.INFO, t, a, r);
            },
            warning: function(t, a, r) {
                this.log(e.WARN, t, a, r);
            },
            error: function(t, a, r) {
                this.log(e.ERROR, t, a, r);
            },
            fatal: function(t, a, r) {
                this.log(e.FATAL, t, a, r);
            },
            log: function(e, t, a, r) {},
            addAppender: function(e) {},
            isLogUrl: function() {},
            setLogUrl: function(e) {},
            isLogApplicationName: function() {},
            setLogApplicationName: function(e) {},
            isEncodingRequired: function() {},
            setEncodingRequired: function(e) {},
            setEncodingFunction: function(e) {},
            isDebugEnabled: function() {},
            isErrorEnabled: function() {},
            isFatalEnabled: function() {},
            isInfoEnabled: function() {},
            isTraceEnabled: function() {},
            isWarningEnabled: function() {}
        };
    };
    return {
        getLogger: function(e) {
            var a = "string" == typeof e ? e : e.constructor.toString();
            return new t(a);
        }
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.BaseValidationRule = function(e, t, a) {
    var r, n = $ESAPI.logger("Validation"), i = org.owasp.esapi.Logger.EventType, o = e, c = t || $ESAPI.encoder(), s = !1, u = org.owasp.esapi.i18n.ResourceBundle, l = a || $ESAPI.locale();
    return $ESAPI.properties.validation.ResourceBundle && (r = u.getResourceBundle($ESAPI.properties.validation.ResourceBundle, l)), 
    r || (r = $ESAPI.resourceBundle(), n.info(i.EVENT_FAILURE, "No Validation ResourceBundle - Defaulting to " + r.getName() + "(" + r.getLocale().toString() + ")")), 
    n.info(i.EVENT_SUCCESS, "Validation Rule Initialized with ResourceBundle: " + r.getName()), 
    {
        setAllowNull: function(e) {
            s = e;
        },
        isAllowNull: function() {
            return s;
        },
        getTypeName: function() {
            return o;
        },
        setTypeName: function(e) {
            o = e;
        },
        setEncoder: function(e) {
            c = e;
        },
        getEncoder: function() {
            return c;
        },
        assertValid: function(e, t) {
            this.getValid(e, t);
        },
        getValid: function(e, t, a) {
            var r = null;
            try {
                r = this.getValidInput(e, t);
            } catch (a) {
                return this.sanitize(e, t);
            }
            return r;
        },
        getValidInput: function(e, t) {
            return t;
        },
        getSafe: function(e, t) {
            var a = null;
            try {
                a = this.getValidInput(e, t);
            } catch (a) {
                return this.sanitize(e, t);
            }
            return a;
        },
        sanitize: function(e, t) {
            return t;
        },
        isValid: function(e, t) {
            var a = !1;
            try {
                this.getValidInput(e, t), a = !0;
            } catch (e) {
                return !1;
            }
            return a;
        },
        whitelist: function(e, t) {
            for (var a = "", r = 0; r < e.length; r++) {
                var n = e.charAt(r);
                t.contains(n) && (a += n);
            }
            return a;
        },
        getUserMessage: function(e, t, a) {
            return this.getMessage(e + ".Usr", t + ".Usr", a);
        },
        getLogMessage: function(e, t, a) {
            return this.getMessage(e + ".Log", t + ".Log", a);
        },
        getMessage: function(e, t, a) {
            return r.getString(e, a) ? r.getString(e, a) : r.getString(t, a);
        },
        validationException: function(e, t, a, r) {
            throw new org.owasp.esapi.reference.validation.ValidationException(this.getUserMessage(e + "." + a, t + "." + a, r), this.getLogMessage(e + "." + a, t + "." + a, r), e);
        }
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.CreditCardValidationRule = function(e, t, a) {
    var r = new org.owasp.esapi.reference.validation.BaseValidationRule(e, t, a), n = 19;
    ccRule = function() {
        var e = new RegExp($ESAPI.properties.validation.CreditCard), t = new org.owasp.esapi.reference.validation.StringValidationRule("ccrule", r.getEncoder(), a, e);
        return t.setMaxLength(n), t.setAllowNull(!1), t;
    }();
    var i = function(e) {
        for (var t, a = "", r = 0; o < e.length; r++) (t = e.charAt(r)).match(/[0-9]/) && (a += t);
        for (var n = 0, i = 0, c = 0, s = !1, u = a.length - 1; u >= 0; u--) i = parseInt(a.substring(u, r + 1)), 
        s ? (c = 2 * i) > 9 && (c -= 9) : c = i, n += c, s = !s;
        return n % 10 == 0;
    };
    return {
        getMaxCardLength: function() {
            return n;
        },
        setMaxCardLength: function(e) {
            n = e;
        },
        setAllowNull: r.setAllowNull,
        isAllowNull: r.isAllowNull,
        getTypeName: r.getTypeName,
        setTypeName: r.setTypeName,
        setEncoder: r.setEncoder,
        getEncoder: r.getEncoder,
        assertValid: r.assertValid,
        getValid: r.getValid,
        getValidInput: function(e, t) {
            if (!t || "" == t.trim()) {
                if (this.isAllowNull()) return null;
                r.validationException(e, "CreditCard", "Required", {
                    context: e,
                    input: t
                });
            }
            var a = (void 0).getValid(e, t);
            return i(a) || r.validationException(e, "CreditCard", "Invalid", {
                context: e,
                input: t
            }), a;
        },
        getSafe: r.getSafe,
        sanitize: function(e, t) {
            return this.whitelist(t, org.owasp.esapi.EncoderConstants.CHAR_DIGITS);
        },
        isValid: r.isValid,
        whitelist: r.whitelist
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.DateValidationRule = function(e, t, a) {
    var r = new org.owasp.esapi.reference.validation.BaseValidationRule(e, t, a), n = DateFormat.getDateInstance(), i = function(e, t) {
        if (!e || "" == e.trim()) {
            if (r.isAllowNull()) return null;
            r.validationException(e, "Date", "Required", {
                context: e,
                input: t,
                format: n
            });
        }
        var a = r.getEncoder().cananicalize(t);
        try {
            return n.parse(a);
        } catch (a) {
            r.validationException(e, "Date", "Invalid", {
                context: e,
                input: t,
                format: n
            });
        }
    };
    return {
        setDateFormat: function(e) {
            if (!e) throw new IllegalArgumentException("DateValidationRule.setDateFormat requires a non-null DateFormat");
            n = e;
        },
        setAllowNull: r.setAllowNull,
        isAllowNull: r.isAllowNull,
        getTypeName: r.getTypeName,
        setTypeName: r.setTypeName,
        setEncoder: r.setEncoder,
        getEncoder: r.getEncoder,
        assertValid: r.assertValid,
        getValid: r.getValid,
        getValidInput: function(e, t) {
            return i(e, t);
        },
        getSafe: r.getSafe,
        sanitize: function(e, t) {
            var a = new Date(0);
            try {
                a = i(e, t);
            } catch (e) {}
            return a;
        },
        isValid: r.isValid,
        whitelist: r.whitelist
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.DefaultValidator = function(e, t) {
    var a = Array(), r = e || $ESAPI.encoder(), n = t || org.owasp.esapi.i18n.Locale.getDefault(), i = org.owasp.esapi.reference.validation;
    return {
        addRule: function(e) {
            a[e.getName()] = e;
        },
        getRule: function(e) {
            return a[e];
        },
        isValidInput: function(e, t, a, r, n) {
            try {
                return this.getValidInput(e, t, a, r, n), !0;
            } catch (e) {
                return !1;
            }
        },
        getValidInput: function(e, t, a, i, o, c) {
            var s = new org.owasp.esapi.reference.validation.StringValidationRule(a, r, n), u = new RegExp($ESAPI.properties.validation[a]);
            if (!(u && u instanceof RegExp)) throw new IllegalArgumentException("Invalid Type: " + a + " not found.");
            s.addWhitelistPattern(u), s.setMaxLength(i), s.setAllowNull(o);
            try {
                return s.getValid(e, t);
            } catch (t) {
                throw t instanceof u.ValidationErrorList && c && c.addError(e, t), t;
            }
        },
        isValidDate: function(e, t, a, r) {
            try {
                return this.getValidDate(e, t, a, r), !0;
            } catch (e) {
                return !1;
            }
        },
        getValidDate: function(e, t, a, o, c) {
            var s = new i.DateValidationRule(e, r, n);
            s.setAllowNull(o), s.setDateFormat(a);
            try {
                return s.getValid(e, t);
            } catch (t) {
                throw t instanceof i.ValidationErrorList && c && c.addError(e, t), t;
            }
        },
        getValidCreditCard: function(e, t, a, o) {
            var c = new i.CreditCardValidationRule(e, r, n);
            c.setAllowNull(a);
            try {
                return c.getValid(e, t);
            } catch (t) {
                throw t instanceof i.ValidationErrorList && o && o.addError(e, t), t;
            }
        },
        isValidCreditCard: function(e, t, a) {
            try {
                return this.getValidCreditCard(e, t, a), !0;
            } catch (e) {
                return !1;
            }
        },
        getValidNumber: function(e, t, a, o, c, s) {
            var u = new i.NumberValidationRule(e, r, n, o, c);
            u.setAllowNull(a);
            try {
                return u.getValid(e, t);
            } catch (t) {
                throw t instanceof i.ValidationErrorList && s && s.addError(e, t), t;
            }
        },
        isValidNumber: function(e, t, a, r, n) {
            try {
                return this.getValidNumber(e, t, a, r, n), !0;
            } catch (e) {
                return !1;
            }
        },
        getValidInteger: function(e, t, a, o, c, s) {
            var u = new i.IntegerValidationRule(e, r, n, o, c);
            u.setAllowNull(a);
            try {
                return u.getValid(e, t);
            } catch (t) {
                throw t instanceof i.ValidationErrorList && s && s.addError(e, t), t;
            }
        },
        isValidInteger: function(e, t, a, r, n) {
            try {
                return this.getValidInteger(e, t, a, r, n), !0;
            } catch (e) {
                return !1;
            }
        }
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.IntegerValidationRule = function(e, t, a, r, n) {
    var i = new org.owasp.esapi.reference.validation.BaseValidationRule(e, t, a), o = r || Number.MIN_VALUE, c = n || Number.MAX_VALUE;
    if (o >= c) throw new IllegalArgumentException("minValue must be less than maxValue");
    var s = function(e, t) {
        if (!t || "" == t.trim()) {
            if (i.allowNull()) return null;
            i.validationException(e, "Integer", "Required", {
                context: e,
                input: t,
                minValue: o,
                maxValue: c
            });
        }
        var a = i.getEncoder().cananicalize(t), r = parseInt(a);
        return "NaN" == r && i.validationException(e, "Integer", "NaN", {
            context: e,
            input: t,
            minValue: o,
            maxValue: c
        }), r < o && i.validationException(e, "Integer", "MinValue", {
            context: e,
            input: t,
            minValue: o,
            maxValue: c
        }), r > c && i.validationException(e, "Integer", "MaxValue", {
            context: e,
            input: t,
            minValue: o,
            maxValue: c
        }), r;
    };
    return {
        setMinValue: function(e) {
            o = e;
        },
        getMinValue: function() {
            return o;
        },
        setMaxValue: function(e) {
            c = e;
        },
        getMaxValue: function() {
            return c;
        },
        setAllowNull: i.setAllowNull,
        isAllowNull: i.isAllowNull,
        getTypeName: i.getTypeName,
        setTypeName: i.setTypeName,
        setEncoder: i.setEncoder,
        getEncoder: i.getEncoder,
        assertValid: i.assertValid,
        getValid: i.getValid,
        getValidInput: function(e, t) {
            return s(e, t);
        },
        getSafe: i.getSafe,
        sanitize: function(e, t) {
            var a = 0;
            try {
                a = s(e, t);
            } catch (e) {}
            return a;
        },
        isValid: i.isValid,
        whitelist: i.whitelist
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.NumberValidationRule = function(e, t, a, r, n) {
    var i = new org.owasp.esapi.reference.validation.BaseValidationRule(e, t, a), o = r || Number.MIN_VALUE, c = n || Number.MAX_VALUE;
    if (o >= c) throw new IllegalArgumentException("MinValue must be less that MaxValue");
    var s = function(e, t) {
        if (!t || "" == t.trim()) {
            if (i.isAllowNull()) return null;
            i.validationException(e, "Number", "Required", {
                context: e,
                input: t,
                minValue: o,
                maxValue: c
            });
        }
        var a = i.getEncoder().cananicalize(t), r = 0;
        try {
            r = parseFloat(a);
        } catch (a) {
            i.validationException(e, "Number", "Invalid", {
                context: e,
                input: t,
                minValue: o,
                maxValue: c
            });
        }
        return "NaN" == r && i.validationException(e, "Number", "NaN", {
            context: e,
            input: t,
            minValue: o,
            maxValue: c
        }), r < o && i.validationException(e, "Number", "MinValue", {
            context: e,
            input: t,
            minValue: o,
            maxValue: c
        }), r > c && i.validationException(e, "Number", "MaxValue", {
            context: e,
            input: t,
            minValue: o,
            maxValue: c
        }), r;
    };
    return {
        setMinValue: function(e) {
            o = e;
        },
        getMinValue: function() {
            return o;
        },
        setMaxValue: function(e) {
            c = e;
        },
        getMaxValue: function() {
            return c;
        },
        setAllowNull: i.setAllowNull,
        isAllowNull: i.isAllowNull,
        getTypeName: i.getTypeName,
        setTypeName: i.setTypeName,
        setEncoder: i.setEncoder,
        getEncoder: i.getEncoder,
        assertValid: i.assertValid,
        getValid: i.getValid,
        getValidInput: function(e, t) {
            return s(e, t);
        },
        getSafe: i.getSafe,
        sanitize: function(e, t) {
            var a = 0;
            try {
                a = s(e, t);
            } catch (e) {}
            return a;
        },
        isValid: i.isValid,
        whitelist: i.whitelist
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.StringValidationRule = function(e, t, a, r) {
    var n = new org.owasp.esapi.reference.validation.BaseValidationRule(e, t, a), i = Array(), o = Array(), c = 0, s = Number.MAX_VALUE, u = !0;
    if (r) if (r instanceof String) i.push(new RegExp(r)); else {
        if (!(r instanceof RegExp)) throw new IllegalArgumentException("sWhiteListPattern must be a string containing RegExp or a RegExp Object");
        i.push(r);
    }
    var l = function(e, t, a) {
        i.each(function(r) {
            t.match(r) && n.validationException(e, "String", "Whitelist", {
                context: e,
                input: t,
                orig: a,
                pattern: r.toString(),
                minLength: c,
                maxLength: s,
                validateInputAndCanonical: u
            });
        });
    }, p = function(e, t, a) {
        o.each(function(r) {
            t.match(r) && n.validationException(e, "String", "Blacklist", {
                context: e,
                input: t,
                orig: a,
                pattern: r.toString(),
                minLength: c,
                maxLength: s,
                validateInputAndCanonical: u
            });
        });
    }, g = function(e, t, a) {
        return t.length < c && n.validationException(e, "String", "MinLength", {
            context: e,
            input: t,
            orig: a,
            minLength: c,
            maxLength: s,
            validateInputAndCanonical: u
        }), t.length > s && n.validationException(e, "String", "MaxLength", {
            context: e,
            input: t,
            orig: a,
            minLength: c,
            maxLength: s,
            validateInputAndCanonical: u
        }), t;
    }, h = function(e, t, a) {
        if (!t || "" == t.trim()) {
            if (n.isAllowNull()) return null;
            n.validationException(e, "String", "Required", {
                context: e,
                input: t,
                orig: a,
                minLength: c,
                maxLength: s,
                validateInputAndCanonical: u
            });
        }
    };
    return {
        addWhitelistPattern: function(e) {
            if (e instanceof String) i.push(new RegExp(e)); else {
                if (!(e instanceof RegExp)) throw new IllegalArgumentException("p must be a string containing RegExp or a RegExp Object");
                i.push(e);
            }
        },
        addBlacklistPattern: function(e) {
            if (e instanceof String) o.push(new RegExp(e)); else {
                if (!(e instanceof RegExp)) throw new IllegalArgumentException("p must be a string containing RegExp or a RegExp Object");
                o.push(e);
            }
        },
        setMinLength: function(e) {
            c = e;
        },
        getMinLength: function() {
            return c;
        },
        setMaxLength: function(e) {
            s = e;
        },
        getMaxLength: function() {
            return s;
        },
        setValidateInputAndCanonical: function(e) {
            u = e;
        },
        isValidateInputAndCanonical: function() {
            return u;
        },
        setAllowNull: n.setAllowNull,
        isAllowNull: n.isAllowNull,
        getTypeName: n.getTypeName,
        setTypeName: n.setTypeName,
        setEncoder: n.setEncoder,
        getEncoder: n.getEncoder,
        assertValid: n.assertValid,
        getValid: n.getValid,
        getValidInput: function(e, t) {
            var a = null;
            return null == h(e, t) ? null : (u && (g(e, t), l(e, t), p(e, t)), a = this.getEncoder().cananicalize(t), 
            null == h(e, a, t) ? null : (g(e, a, t), l(e, a, t), p(e, a, t), a));
        },
        getSafe: n.getSafe,
        sanitize: function(e, t) {
            return this.whitelist(t, org.owasp.esapi.EncoderConstants.CHAR_ALNUM);
        },
        isValid: n.isValid,
        whitelist: n.whitelist
    };
}, $namespace("org.owasp.esapi.reference.validation"), org.owasp.esapi.reference.validation.ValidationException = function(e, t) {
    var a, r;
    arguments[2] && arguments[2] instanceof Exception ? (a = arguments[2], arguments[3] && arguments[3] instanceof String && (r = arguments[3])) : arguments[2] && arguments[2] instanceof String && (r = arguments[2]);
    var n = new org.owasp.esapi.EnterpriseSecurityException(e, t, a);
    return {
        setContext: function(e) {
            r = e;
        },
        getContext: function() {
            return r;
        },
        getMessage: n.getMessage,
        getUserMessage: n.getMessage,
        getLogMessage: n.getLogMessage,
        getStackTrace: n.getStackTrace,
        printStackTrace: n.printStackTrace
    };
};
var ESAPI_Standard_en_US = {
    name: "ESAPI Standard Messages - US English",
    locale: "en-US",
    messages: {
        Test: "This is test #{testnumber}",
        "CreditCard.Required.Usr": "{context}: Input credit card required",
        "CreditCard.Required.Log": "Input credit card required: context={context}, input={input}",
        "CreditCard.Invalid.Usr": "{context}: Invalid credit card input",
        "CreditCard.Invalid.Log": "Invalid credit card input: context={context}, input={input}",
        "Date.Required.Usr": "{context}: Input date required in {format} format",
        "Date.Required.Log": "Date required: context={context}, input={input}, format={format}",
        "Date.Invalid.Usr": "{context}: Invalid date, please use {format} format",
        "Date.Invalid.Log": "Invalid date: context={context}, input={input}, format={format}",
        "Integer.Required.Usr": "{context}: Input number required",
        "Integer.Required.Log": "Input number required: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "Integer.NaN.Usr": "{context}: Invalid number",
        "Integer.NaN.Log": "Invalid number: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "Integer.MinValue.Usr": "{context}: Invalid number - Must be greater than {minValue}",
        "Integer.MinValue.Log": "Invalid number: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "Integer.MaxValue.Usr": "{context}: Invalid number - Must be less than {maxValue}",
        "Integer.MaxValue.Log": "Invalid number: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "Number.Required.Usr": "{context}: Input number required",
        "Number.Required.Log": "Input number required: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "Number.NaN.Usr": "{context}: Invalid number",
        "Number.NaN.Log": "Invalid number: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "Number.MinValue.Usr": "{context}: Invalid number - Must be greater than {minValue}",
        "Number.MinValue.Log": "Invalid number: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "Number.MaxValue.Usr": "{context}: Invalid number - Must be less than {maxValue}",
        "Number.MaxValue.Log": "Invalid number: context={context}, input={input}, minValue={minValue}, maxValue={maxValue}",
        "String.Required.Usr": "{context}: Input required",
        "String.Required.Log": "Input required: context={context}, input={input}, original={orig}",
        "String.Whitelist.Usr": "{context}: Invalid input - Conform to regex {pattern}",
        "String.Whitelist.Log": "Invalid input - Whitelist validation failed: context={context}, input={input}, original={orig}, pattern={pattern}",
        "String.Blacklist.Usr": "{context}: Invalid input - Dangerous input matching {pattern} detected",
        "String.Blacklist.Log": "Invalid input - Blacklist validation failed: context={context}, input={input}, original={orig}, pattern={pattern}",
        "String.MinLength.Usr": "{context}: Invalid input - Minimum length is {minLength}",
        "String.MinLength.Log": "Invalid input - Too short: context={context}, input={input}, original={orig}, minLength={minLength}",
        "String.MaxLength.Usr": "{context}: Invalid input - Maximum length is {maxLength}",
        "String.MaxLength.Log": "Invalid input - Too long: context={context}, input={input}, original={orig}, maxLength={maxLength}",
        "HTTPUtilities.Cookie.Protocol": "Cookies disallowed on non http[s] requests. Current protocol: {protocol}",
        "HTTPUtilities.Cookie.UnsafeData": "Attempt to add unsafe data to cookie (skip mode) - Cookie: {name}={value}",
        "HTTPUtilities.Cookie.CantKill": "Unable to kill cookie named {name}",
        "Cookie.Name": 'Cookie name "{name}" is a reserved token',
        "Cookie.Version": 'Cookie version "{version}" is not a valid version. Version must be 0 or 1.'
    }
};
$namespace("Base.esapi.properties"), Base.esapi.properties = {
    application: {
        Name: "ESAPI4JS Base Application"
    },
    httputilities: {
        cookies: {
            ForceSecure: !0
        }
    },
    logging: {
        Implementation: org.owasp.esapi.reference.logging.Log4JSLogFactory,
        Level: org.owasp.esapi.Logger.ERROR,
        Appenders: [],
        LogUrl: !1,
        LogApplicationName: !1,
        EncodingRequired: !0
    },
    encoder: {
        Implementation: org.owasp.esapi.reference.encoding.DefaultEncoder,
        AllowMultipleEncoding: !1
    },
    localization: {
        StandardResourceBundle: ESAPI_Standard_en_US,
        DefaultLocale: "en-US"
    },
    validation: {
        Implementation: org.owasp.esapi.reference.validation.DefaultValidator,
        AccountName: "^[a-zA-Z0-9]{3,20}$",
        SafeString: "[a-zA-Z0-9\\-_+]*",
        Email: "^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[a-zA-Z]{2,4}$",
        IPAddress: "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
        URL: "^(ht|f)tp(s?)\\:\\/\\/[0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])*(:(0-9)*)*(\\/?)([a-zA-Z0-9\\-\\.\\?\\,\\:\\'\\/\\\\\\+=&amp;%\\$#_]*)?$",
        CreditCard: "^(\\d{4}[- ]?){3}\\d{4}$",
        SSN: "^(?!000)([0-6]\\d{2}|7([0-6]\\d|7[012]))([ -]?)(?!00)\\d\\d\\3(?!0000)\\d{4}$",
        HttpScheme: "^(http|https)$",
        HttpServerName: "^[a-zA-Z0-9_.\\-]*$",
        HttpParameterName: "^[a-zA-Z0-9_]{1,32}$",
        HttpParameterValue: "^[a-zA-Z0-9.\\-\\/+=_ ]*$",
        HttpCookieName: "^[a-zA-Z0-9\\-_]{1,32}$",
        HttpCookieValue: "^[a-zA-Z0-9\\-\\/+=_ ]*$"
    }
};
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.browserDetect = t();
}(this, function() {
    "use strict";
    function e(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports;
    }
    var t = Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
        return e;
    }, r = [ [ "firefox", /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ "opera", /Opera\/([0-9\.]+)(?:\s|$)/ ], [ "opera", /OPR\/([0-9\.]+)(:?\s|$)$/ ], [ "edge", /Edge\/([0-9\._]+)/ ], [ "ie", /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/ ], [ "ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ "ie", /MSIE\s(7\.0)/ ], [ "safari", /Version\/([0-9\._]+).*Safari/ ], [ "chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ "bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ "android", /Android\s([0-9\.]+)/ ], [ "ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ "yandexbrowser", /YaBrowser\/([0-9\._]+)/ ], [ "crios", /CriOS\/([0-9\.]+)(:?\s|$)/ ] ], n = [ "Windows Phone", "Android", "CentOS", {
        name: "Chrome OS",
        pattern: "CrOS"
    }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows " ], o = {
        "10.0": "10",
        "6.4": "10 Technical Preview",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "Server 2008 R2 / 7",
        "6.0": "Server 2008 / Vista",
        "5.2": "Server 2003 / XP 64-bit",
        "5.1": "XP",
        "5.01": "2000 SP1",
        "5.0": "2000",
        "4.0": "NT",
        "4.90": "ME"
    }, i = new RegExp([ "(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|", "compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|", "midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)", "\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|", "wap|windows ce|xda|xiino" ].join(""), "i"), a = new RegExp([ "1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|", "ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|", "avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|", "cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|", "ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|", "g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|", "hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|", "i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|", "kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])", "|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|", "mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|", "n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|", "op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|", "po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|", "raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|", "se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|", "so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|", "tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|", "veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|", "w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-" ].join(""), "i"), c = function() {
        function e(e, t, r) {
            this.navigator = t, this.process = r, this.userAgent = e || (this.navigator ? t.userAgent || t.vendor : "");
        }
        return e.prototype.detect = function() {
            if (this.process && !this.userAgent) {
                var e = this.process.version.slice(1).split(".").slice(0, 3), r = Array.prototype.slice.call(e, 1).join("") || "0";
                return {
                    name: "node",
                    version: e.join("."),
                    versionNumber: parseFloat(e[0] + "." + r),
                    mobile: !1,
                    os: this.process.platform
                };
            }
            return this.userAgent || this.handleMissingError(), t({}, this.checkBrowser(), this.checkMobile(), this.checkOs());
        }, e.prototype.checkBrowser = function() {
            var e = this;
            return r.filter(function(t) {
                return t[1].test(e.userAgent);
            }).map(function(t) {
                var r = t[1].exec(e.userAgent), n = r && r[1].split(/[._]/).slice(0, 3), o = Array.prototype.slice.call(n, 1).join("") || "0";
                return n && n.length < 3 && Array.prototype.push.apply(n, 1 === n.length ? [ 0, 0 ] : [ 0 ]), 
                {
                    name: String(t[0]),
                    version: n.join("."),
                    versionNumber: Number(n[0] + "." + o)
                };
            }).shift();
        }, e.prototype.checkMobile = function() {
            var e = this.userAgent.substr(0, 4);
            return {
                mobile: i.test(this.userAgent) || a.test(e)
            };
        }, e.prototype.checkOs = function() {
            var e = this;
            return n.map(function(t) {
                var r = t.name || t, n = e.getOsPattern(t);
                return {
                    name: r,
                    pattern: n,
                    value: RegExp("\\b" + n.replace(/([ -])(?!$)/g, "$1?") + "(?:x?[\\d._]+|[ \\w.]*)", "i").exec(e.userAgent)
                };
            }).filter(function(e) {
                return e.value;
            }).map(function(e) {
                var t, r = e.value[0] || "";
                return e.pattern && e.name && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (t = o[r.replace(/[^\d.]/g, "")]) && (r = "Windows " + t), 
                e.pattern && e.name && (r = r.replace(RegExp(e.pattern, "i"), e.name)), r = r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0].trim(), 
                r = /^(?:webOS|i(?:OS|P))/.test(r) ? r : r.charAt(0).toUpperCase() + r.slice(1), 
                {
                    os: r
                };
            }).shift();
        }, e.prototype.getOsPattern = function(e) {
            var t = e;
            return ("string" == typeof e ? e : void 0) || t.pattern || t.name;
        }, e.prototype.handleMissingError = function() {
            throw new Error("Please give user-agent.\n> browser(navigator.userAgent or res.headers['user-agent']).");
        }, e;
    }(), u = e(function(e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t);
    }), s = e(function(e) {
        var t = e.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = t);
    }), p = (s.version, function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
    }), f = function(e) {
        if (!p(e)) throw TypeError(e + " is not an object!");
        return e;
    }, l = function(e) {
        try {
            return !!e();
        } catch (e) {
            return !0;
        }
    }, d = !l(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), m = u.document, h = p(m) && p(m.createElement), v = function(e) {
        return h ? m.createElement(e) : {};
    }, b = !d && !l(function() {
        return 7 != Object.defineProperty(v("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    }), g = function(e, t) {
        if (!p(e)) return e;
        var r, n;
        if (t && "function" == typeof (r = e.toString) && !p(n = r.call(e))) return n;
        if ("function" == typeof (r = e.valueOf) && !p(n = r.call(e))) return n;
        if (!t && "function" == typeof (r = e.toString) && !p(n = r.call(e))) return n;
        throw TypeError("Can't convert object to primitive value");
    }, y = Object.defineProperty, w = {
        f: d ? Object.defineProperty : function(e, t, r) {
            if (f(e), t = g(t, !0), f(r), b) try {
                return y(e, t, r);
            } catch (e) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (e[t] = r.value), e;
        }
    }, S = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    }, x = d ? function(e, t, r) {
        return w.f(e, t, S(1, r));
    } : function(e, t, r) {
        return e[t] = r, e;
    }, O = {}.hasOwnProperty, k = function(e, t) {
        return O.call(e, t);
    }, _ = 0, j = Math.random(), P = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++_ + j).toString(36));
    }, A = e(function(e) {
        var t = P("src"), r = Function.toString, n = ("" + r).split("toString");
        s.inspectSource = function(e) {
            return r.call(e);
        }, (e.exports = function(e, r, o, i) {
            var a = "function" == typeof o;
            a && (k(o, "name") || x(o, "name", r)), e[r] !== o && (a && (k(o, t) || x(o, t, e[r] ? "" + e[r] : n.join(String(r)))), 
            e === u ? e[r] = o : i ? e[r] ? e[r] = o : x(e, r, o) : (delete e[r], x(e, r, o)));
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[t] || r.call(this);
        });
    }), E = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
    }, M = function(e, t, r) {
        if (E(e), void 0 === t) return e;
        switch (r) {
          case 1:
            return function(r) {
                return e.call(t, r);
            };

          case 2:
            return function(r, n) {
                return e.call(t, r, n);
            };

          case 3:
            return function(r, n, o) {
                return e.call(t, r, n, o);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    }, $ = function(e, t, r) {
        var n, o, i, a, c = e & $.F, p = e & $.G, f = e & $.S, l = e & $.P, d = e & $.B, m = p ? u : f ? u[t] || (u[t] = {}) : (u[t] || {}).prototype, h = p ? s : s[t] || (s[t] = {}), v = h.prototype || (h.prototype = {});
        p && (r = t);
        for (n in r) i = ((o = !c && m && void 0 !== m[n]) ? m : r)[n], a = d && o ? M(i, u) : l && "function" == typeof i ? M(Function.call, i) : i, 
        m && A(m, n, i, e & $.U), h[n] != i && x(h, n, a), l && v[n] != i && (v[n] = i);
    };
    u.core = s, $.F = 1, $.G = 2, $.S = 4, $.P = 8, $.B = 16, $.W = 32, $.U = 64, $.R = 128;
    var C = $, z = {}.toString, F = function(e) {
        return z.call(e).slice(8, -1);
    }, T = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == F(e) ? e.split("") : Object(e);
    }, R = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e;
    }, B = function(e) {
        return Object(R(e));
    }, W = Math.ceil, N = Math.floor, X = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? N : W)(e);
    }, q = Math.min, D = function(e) {
        return e > 0 ? q(X(e), 9007199254740991) : 0;
    }, G = Array.isArray || function(e) {
        return "Array" == F(e);
    }, U = e(function(e) {
        var t = u["__core-js_shared__"] || (u["__core-js_shared__"] = {});
        (e.exports = function(e, r) {
            return t[e] || (t[e] = void 0 !== r ? r : {});
        })("versions", []).push({
            version: s.version,
            mode: "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    }), V = e(function(e) {
        var t = U("wks"), r = u.Symbol, n = "function" == typeof r;
        (e.exports = function(e) {
            return t[e] || (t[e] = n && r[e] || (n ? r : P)("Symbol." + e));
        }).store = t;
    })("species"), I = function(e) {
        var t;
        return G(e) && ("function" != typeof (t = e.constructor) || t !== Array && !G(t.prototype) || (t = void 0), 
        p(t) && null === (t = t[V]) && (t = void 0)), void 0 === t ? Array : t;
    }, H = function(e, t) {
        return new (I(e))(t);
    }, L = function(e, t) {
        var r = 1 == e, n = 2 == e, o = 3 == e, i = 4 == e, a = 6 == e, c = 5 == e || a, u = t || H;
        return function(t, s, p) {
            for (var f, l, d = B(t), m = T(d), h = M(s, p, 3), v = D(m.length), b = 0, g = r ? u(t, v) : n ? u(t, 0) : void 0; v > b; b++) if ((c || b in m) && (f = m[b], 
            l = h(f, b, d), e)) if (r) g[b] = l; else if (l) switch (e) {
              case 3:
                return !0;

              case 5:
                return f;

              case 6:
                return b;

              case 2:
                g.push(f);
            } else if (i) return !1;
            return a ? -1 : o || i ? i : g;
        };
    }, K = function(e, t) {
        return !!e && l(function() {
            t ? e.call(null, function() {}, 1) : e.call(null);
        });
    }, Y = L(2);
    C(C.P + C.F * !K([].filter, !0), "Array", {
        filter: function(e) {
            return Y(this, e, arguments[1]);
        }
    });
    s.Array.filter;
    var J = L(1);
    C(C.P + C.F * !K([].map, !0), "Array", {
        map: function(e) {
            return J(this, e, arguments[1]);
        }
    });
    s.Array.map;
    var Q = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff", Z = "[" + Q + "]", ee = RegExp("^" + Z + Z + "*"), te = RegExp(Z + Z + "*$"), re = function(e, t, r) {
        var n = {}, o = l(function() {
            return !!Q[e]() || "​" != "​"[e]();
        }), i = n[e] = o ? t(ne) : Q[e];
        r && (n[r] = i), C(C.P + C.F * o, "String", n);
    }, ne = re.trim = function(e, t) {
        return e = String(R(e)), 1 & t && (e = e.replace(ee, "")), 2 & t && (e = e.replace(te, "")), 
        e;
    };
    re("trim", function(e) {
        return function() {
            return e(this, 3);
        };
    });
    s.String.trim;
    var oe = "undefined" != typeof window ? window.navigator : void 0, ie = "undefined" != typeof process ? process : void 0;
    return function(e) {
        return new c(e, oe, ie).detect();
    };
});
console.log("Cleopatra runtime version: 1.0.919");
!function(t) {
    "use strict";
    function r(t, e, n, c) {
        this.message = t, this.expected = e, this.found = n, this.location = c, this.name = "SyntaxError", 
        "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, r);
    }
    !function(t, r) {
        function e() {
            this.constructor = t;
        }
        e.prototype = r.prototype, t.prototype = new e();
    }(r, Error), r.buildMessage = function(t, r) {
        function e(t) {
            return t.charCodeAt(0).toString(16).toUpperCase();
        }
        function n(t) {
            return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) {
                return "\\x0" + e(t);
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) {
                return "\\x" + e(t);
            });
        }
        function c(t) {
            return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(t) {
                return "\\x0" + e(t);
            }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(t) {
                return "\\x" + e(t);
            });
        }
        function u(t) {
            return a[t.type](t);
        }
        var a = {
            literal: function(t) {
                return '"' + n(t.text) + '"';
            },
            class: function(t) {
                var r, e = "";
                for (r = 0; r < t.parts.length; r++) e += t.parts[r] instanceof Array ? c(t.parts[r][0]) + "-" + c(t.parts[r][1]) : c(t.parts[r]);
                return "[" + (t.inverted ? "^" : "") + e + "]";
            },
            any: function(t) {
                return "any character";
            },
            end: function(t) {
                return "end of input";
            },
            other: function(t) {
                return t.description;
            }
        };
        return "Expected " + function(t) {
            var r, e, n = new Array(t.length);
            for (r = 0; r < t.length; r++) n[r] = u(t[r]);
            if (n.sort(), n.length > 0) {
                for (r = 1, e = 1; r < n.length; r++) n[r - 1] !== n[r] && (n[e] = n[r], e++);
                n.length = e;
            }
            switch (n.length) {
              case 1:
                return n[0];

              case 2:
                return n[0] + " or " + n[1];

              default:
                return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1];
            }
        }(t) + " but " + function(t) {
            return t ? '"' + n(t) + '"' : "end of input";
        }(r) + " found.";
    }, t.cpr = t.cpr || {}, t.cpr.core = t.cpr.core || {}, t.cpr.core.ParseKit = {
        SyntaxError: r,
        parse: function(t, e) {
            function n() {
                return t.substring(tn, Ze);
            }
            function c(t, r) {
                return {
                    type: "literal",
                    text: t,
                    ignoreCase: r
                };
            }
            function u(t, r, e) {
                return {
                    type: "class",
                    parts: t,
                    inverted: r,
                    ignoreCase: e
                };
            }
            function a(r) {
                var e, n = rn[r];
                if (n) return n;
                for (e = r - 1; !rn[e]; ) e--;
                for (n = {
                    line: (n = rn[e]).line,
                    column: n.column
                }; e < r; ) 10 === t.charCodeAt(e) ? (n.line++, n.column = 1) : n.column++, e++;
                return rn[r] = n, n;
            }
            function o(t, r) {
                var e = a(t), n = a(r);
                return {
                    start: {
                        offset: t,
                        line: e.line,
                        column: e.column
                    },
                    end: {
                        offset: r,
                        line: n.line,
                        column: n.column
                    }
                };
            }
            function i(t) {
                Ze < en || (Ze > en && (en = Ze, nn = []), nn.push(t));
            }
            function s(t, e, n) {
                return new r(r.buildMessage(t, e), t, e, n);
            }
            function h() {
                var r, e, n, c, u, a;
                if (r = Ze, N() !== J) if ((e = f()) !== J) {
                    for (n = [], c = Ze, N() !== J ? (44 === t.charCodeAt(Ze) ? (u = X, Ze++) : (u = J, 
                    0 === cn && i(Y)), u !== J && N() !== J && (a = f()) !== J ? (tn = c, c = Z(e, a)) : (Ze = c, 
                    c = J)) : (Ze = c, c = J); c !== J; ) n.push(c), c = Ze, N() !== J ? (44 === t.charCodeAt(Ze) ? (u = X, 
                    Ze++) : (u = J, 0 === cn && i(Y)), u !== J && N() !== J && (a = f()) !== J ? (tn = c, 
                    c = Z(e, a)) : (Ze = c, c = J)) : (Ze = c, c = J);
                    n !== J ? (tn = r, r = tt(e, n)) : (Ze = r, r = J);
                } else Ze = r, r = J; else Ze = r, r = J;
                return r;
            }
            function f() {
                var t, r, e;
                return t = Ze, (r = l()) !== J && N() !== J ? ((e = D()) === J && (e = null), e !== J ? (tn = t, 
                t = r = rt(r, e)) : (Ze = t, t = J)) : (Ze = t, t = J), t;
            }
            function l() {
                var r, e, n, c, u, a;
                return r = Ze, (e = A()) !== J && N() !== J ? (63 === t.charCodeAt(Ze) ? (n = et, 
                Ze++) : (n = J, 0 === cn && i(nt)), n !== J && N() !== J && (c = l()) !== J && N() !== J ? (58 === t.charCodeAt(Ze) ? (u = ct, 
                Ze++) : (u = J, 0 === cn && i(ut)), u !== J && N() !== J && (a = l()) !== J ? (tn = r, 
                r = e = at(e, c, a)) : (Ze = r, r = J)) : (Ze = r, r = J)) : (Ze = r, r = J), r === J && (r = A()), 
                r;
            }
            function A() {
                var r, e, n, c, u, a, o, s, h;
                if (r = Ze, (e = p()) !== J) {
                    for (n = [], c = Ze, (u = N()) !== J ? (a = Ze, t.substr(Ze, 2) === ot ? (o = ot, 
                    Ze += 2) : (o = J, 0 === cn && i(it)), o === J && (o = Ze, st.test(t.charAt(Ze)) ? (s = t.charAt(Ze), 
                    Ze++) : (s = J, 0 === cn && i(ht)), s !== J ? (ft.test(t.charAt(Ze)) ? (h = t.charAt(Ze), 
                    Ze++) : (h = J, 0 === cn && i(lt)), h !== J ? o = s = [ s, h ] : (Ze = o, o = J)) : (Ze = o, 
                    o = J)), o !== J && (tn = a, o = At(e)), (a = o) !== J && (o = N()) !== J && (s = p()) !== J ? c = u = [ u, a, o, s ] : (Ze = c, 
                    c = J)) : (Ze = c, c = J); c !== J; ) n.push(c), c = Ze, (u = N()) !== J ? (a = Ze, 
                    t.substr(Ze, 2) === ot ? (o = ot, Ze += 2) : (o = J, 0 === cn && i(it)), o === J && (o = Ze, 
                    st.test(t.charAt(Ze)) ? (s = t.charAt(Ze), Ze++) : (s = J, 0 === cn && i(ht)), s !== J ? (ft.test(t.charAt(Ze)) ? (h = t.charAt(Ze), 
                    Ze++) : (h = J, 0 === cn && i(lt)), h !== J ? o = s = [ s, h ] : (Ze = o, o = J)) : (Ze = o, 
                    o = J)), o !== J && (tn = a, o = At(e)), (a = o) !== J && (o = N()) !== J && (s = p()) !== J ? c = u = [ u, a, o, s ] : (Ze = c, 
                    c = J)) : (Ze = c, c = J);
                    n !== J ? (tn = r, r = e = pt(e, n)) : (Ze = r, r = J);
                } else Ze = r, r = J;
                return r;
            }
            function p() {
                var r, e, n, c, u, a, o, s, h, f;
                if (r = Ze, (e = d()) !== J) {
                    for (n = [], c = Ze, (u = N()) !== J ? (a = Ze, t.substr(Ze, 2) === dt ? (o = dt, 
                    Ze += 2) : (o = J, 0 === cn && i(Ct)), o === J && (o = Ze, vt.test(t.charAt(Ze)) ? (s = t.charAt(Ze), 
                    Ze++) : (s = J, 0 === cn && i(yt)), s !== J ? (gt.test(t.charAt(Ze)) ? (h = t.charAt(Ze), 
                    Ze++) : (h = J, 0 === cn && i(xt)), h !== J ? (bt.test(t.charAt(Ze)) ? (f = t.charAt(Ze), 
                    Ze++) : (f = J, 0 === cn && i(mt)), f !== J ? o = s = [ s, h, f ] : (Ze = o, o = J)) : (Ze = o, 
                    o = J)) : (Ze = o, o = J)), o !== J && (tn = a, o = Et(e)), (a = o) !== J && (o = N()) !== J && (s = d()) !== J ? c = u = [ u, a, o, s ] : (Ze = c, 
                    c = J)) : (Ze = c, c = J); c !== J; ) n.push(c), c = Ze, (u = N()) !== J ? (a = Ze, 
                    t.substr(Ze, 2) === dt ? (o = dt, Ze += 2) : (o = J, 0 === cn && i(Ct)), o === J && (o = Ze, 
                    vt.test(t.charAt(Ze)) ? (s = t.charAt(Ze), Ze++) : (s = J, 0 === cn && i(yt)), s !== J ? (gt.test(t.charAt(Ze)) ? (h = t.charAt(Ze), 
                    Ze++) : (h = J, 0 === cn && i(xt)), h !== J ? (bt.test(t.charAt(Ze)) ? (f = t.charAt(Ze), 
                    Ze++) : (f = J, 0 === cn && i(mt)), f !== J ? o = s = [ s, h, f ] : (Ze = o, o = J)) : (Ze = o, 
                    o = J)) : (Ze = o, o = J)), o !== J && (tn = a, o = Et(e)), (a = o) !== J && (o = N()) !== J && (s = d()) !== J ? c = u = [ u, a, o, s ] : (Ze = c, 
                    c = J)) : (Ze = c, c = J);
                    n !== J ? (tn = r, r = e = pt(e, n)) : (Ze = r, r = J);
                } else Ze = r, r = J;
                return r;
            }
            function d() {
                var t, r, e, n, c, u, a, o;
                if (t = Ze, (r = v()) !== J) {
                    for (e = [], n = Ze, (c = N()) !== J && (u = C()) !== J && (a = N()) !== J && (o = v()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J); n !== J; ) e.push(n), n = Ze, (c = N()) !== J && (u = C()) !== J && (a = N()) !== J && (o = v()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J);
                    e !== J ? (tn = t, t = r = wt(r, e)) : (Ze = t, t = J);
                } else Ze = t, t = J;
                return t;
            }
            function C() {
                var r;
                return t.substr(Ze, 3) === Lt ? (r = Lt, Ze += 3) : (r = J, 0 === cn && i(Ft)), 
                r === J && (t.substr(Ze, 3) === St ? (r = St, Ze += 3) : (r = J, 0 === cn && i(Mt)), 
                r === J && (t.substr(Ze, 2) === Tt ? (r = Tt, Ze += 2) : (r = J, 0 === cn && i(zt)), 
                r === J && (t.substr(Ze, 2) === Rt ? (r = Rt, Ze += 2) : (r = J, 0 === cn && i(jt))))), 
                r;
            }
            function v() {
                var t, r, e, n, c, u, a, o;
                if (t = Ze, (r = x()) !== J) {
                    for (e = [], n = Ze, (c = N()) !== J && (u = g()) !== J && (a = N()) !== J && (o = x()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J); n !== J; ) e.push(n), n = Ze, (c = N()) !== J && (u = g()) !== J && (a = N()) !== J && (o = x()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J);
                    e !== J ? (tn = t, t = r = wt(r, e)) : (Ze = t, t = J);
                } else Ze = t, t = J;
                return t;
            }
            function y() {
                var t;
                return (t = L()) === J && (t = F()), t;
            }
            function g() {
                var r;
                return t.substr(Ze, 2) === kt ? (r = kt, Ze += 2) : (r = J, 0 === cn && i(Bt)), 
                r === J && (t.substr(Ze, 2) === Pt ? (r = Pt, Ze += 2) : (r = J, 0 === cn && i(Nt)), 
                r === J && (60 === t.charCodeAt(Ze) ? (r = Ot, Ze++) : (r = J, 0 === cn && i(Ut)), 
                r === J && (62 === t.charCodeAt(Ze) ? (r = $t, Ze++) : (r = J, 0 === cn && i(_t)), 
                r === J && (t.substr(Ze, 2) === qt ? (r = qt, Ze += 2) : (r = J, 0 === cn && i(Ht)), 
                r === J && (t.substr(Ze, 2) === It ? (r = It, Ze += 2) : (r = J, 0 === cn && i(Kt)), 
                r === J && (t.substr(Ze, 2) === Wt ? (r = Wt, Ze += 2) : (r = J, 0 === cn && i(Dt)))))))), 
                r;
            }
            function x() {
                var t, r, e, n, c, u, a, o;
                if (t = Ze, (r = m()) !== J) {
                    for (e = [], n = Ze, (c = N()) !== J && (u = b()) !== J && (a = N()) !== J && (o = m()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J); n !== J; ) e.push(n), n = Ze, (c = N()) !== J && (u = b()) !== J && (a = N()) !== J && (o = m()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J);
                    e !== J ? (tn = t, t = r = wt(r, e)) : (Ze = t, t = J);
                } else Ze = t, t = J;
                return t;
            }
            function b() {
                var r;
                return 43 === t.charCodeAt(Ze) ? (r = Gt, Ze++) : (r = J, 0 === cn && i(Jt)), r === J && (45 === t.charCodeAt(Ze) ? (r = Qt, 
                Ze++) : (r = J, 0 === cn && i(Vt))), r;
            }
            function m() {
                var t, r, e, n, c, u, a, o;
                if (t = Ze, (r = E()) !== J) {
                    for (e = [], n = Ze, (c = N()) !== J && (u = w()) !== J && (a = N()) !== J && (o = E()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J); n !== J; ) e.push(n), n = Ze, (c = N()) !== J && (u = w()) !== J && (a = N()) !== J && (o = E()) !== J ? n = c = [ c, u, a, o ] : (Ze = n, 
                    n = J);
                    e !== J ? (tn = t, t = r = wt(r, e)) : (Ze = t, t = J);
                } else Ze = t, t = J;
                return t;
            }
            function E() {
                var r, e, n;
                return (r = y()) === J && (r = Ze, 33 === t.charCodeAt(Ze) ? (e = Xt, Ze++) : (e = J, 
                0 === cn && i(Yt)), e !== J && N() !== J && (n = E()) !== J ? (tn = r, r = e = Zt(e, n)) : (Ze = r, 
                r = J)), r;
            }
            function w() {
                var r;
                return 42 === t.charCodeAt(Ze) ? (r = tr, Ze++) : (r = J, 0 === cn && i(rr)), r === J && (47 === t.charCodeAt(Ze) ? (r = er, 
                Ze++) : (r = J, 0 === cn && i(nr)), r === J && (37 === t.charCodeAt(Ze) ? (r = cr, 
                Ze++) : (r = J, 0 === cn && i(ur)))), r;
            }
            function L() {
                var r, e, n, c, u, a, o, s;
                if (r = Ze, e = Ze, (n = F()) !== J && (c = N()) !== J && (u = S()) !== J ? (tn = e, 
                e = n = ar(n, u)) : (Ze = e, e = J), e !== J) {
                    for (n = [], c = Ze, (u = N()) !== J && (a = S()) !== J ? (tn = c, c = u = or(e, a)) : (Ze = c, 
                    c = J), c === J && (c = Ze, (u = N()) !== J ? (91 === t.charCodeAt(Ze) ? (a = ir, 
                    Ze++) : (a = J, 0 === cn && i(sr)), a !== J && N() !== J && (o = f()) !== J && N() !== J ? (93 === t.charCodeAt(Ze) ? (s = hr, 
                    Ze++) : (s = J, 0 === cn && i(fr)), s !== J ? (tn = c, c = u = lr(e, o)) : (Ze = c, 
                    c = J)) : (Ze = c, c = J)) : (Ze = c, c = J), c === J && (c = Ze, (u = N()) !== J ? (46 === t.charCodeAt(Ze) ? (a = Ar, 
                    Ze++) : (a = J, 0 === cn && i(pr)), a !== J && N() !== J && (o = _()) !== J ? (tn = c, 
                    c = u = dr(e, o)) : (Ze = c, c = J)) : (Ze = c, c = J))); c !== J; ) n.push(c), 
                    c = Ze, (u = N()) !== J && (a = S()) !== J ? (tn = c, c = u = or(e, a)) : (Ze = c, 
                    c = J), c === J && (c = Ze, (u = N()) !== J ? (91 === t.charCodeAt(Ze) ? (a = ir, 
                    Ze++) : (a = J, 0 === cn && i(sr)), a !== J && N() !== J && (o = f()) !== J && N() !== J ? (93 === t.charCodeAt(Ze) ? (s = hr, 
                    Ze++) : (s = J, 0 === cn && i(fr)), s !== J ? (tn = c, c = u = lr(e, o)) : (Ze = c, 
                    c = J)) : (Ze = c, c = J)) : (Ze = c, c = J), c === J && (c = Ze, (u = N()) !== J ? (46 === t.charCodeAt(Ze) ? (a = Ar, 
                    Ze++) : (a = J, 0 === cn && i(pr)), a !== J && N() !== J && (o = _()) !== J ? (tn = c, 
                    c = u = dr(e, o)) : (Ze = c, c = J)) : (Ze = c, c = J)));
                    n !== J ? (tn = r, r = e = Cr(e, n)) : (Ze = r, r = J);
                } else Ze = r, r = J;
                return r;
            }
            function F() {
                var r, e, n, c, u, a, o;
                if (r = Ze, (e = T()) !== J) {
                    for (n = [], c = Ze, N() !== J ? (91 === t.charCodeAt(Ze) ? (u = ir, Ze++) : (u = J, 
                    0 === cn && i(sr)), u !== J && N() !== J && (a = f()) !== J && N() !== J ? (93 === t.charCodeAt(Ze) ? (o = hr, 
                    Ze++) : (o = J, 0 === cn && i(fr)), o !== J ? (tn = c, c = vr(e, a)) : (Ze = c, 
                    c = J)) : (Ze = c, c = J)) : (Ze = c, c = J), c === J && (c = Ze, N() !== J ? (46 === t.charCodeAt(Ze) ? (u = Ar, 
                    Ze++) : (u = J, 0 === cn && i(pr)), u !== J && N() !== J && (a = _()) !== J ? (tn = c, 
                    c = yr(e, a)) : (Ze = c, c = J)) : (Ze = c, c = J)); c !== J; ) n.push(c), c = Ze, 
                    N() !== J ? (91 === t.charCodeAt(Ze) ? (u = ir, Ze++) : (u = J, 0 === cn && i(sr)), 
                    u !== J && N() !== J && (a = f()) !== J && N() !== J ? (93 === t.charCodeAt(Ze) ? (o = hr, 
                    Ze++) : (o = J, 0 === cn && i(fr)), o !== J ? (tn = c, c = vr(e, a)) : (Ze = c, 
                    c = J)) : (Ze = c, c = J)) : (Ze = c, c = J), c === J && (c = Ze, N() !== J ? (46 === t.charCodeAt(Ze) ? (u = Ar, 
                    Ze++) : (u = J, 0 === cn && i(pr)), u !== J && N() !== J && (a = _()) !== J ? (tn = c, 
                    c = yr(e, a)) : (Ze = c, c = J)) : (Ze = c, c = J));
                    n !== J ? (tn = r, r = e = gr(e, n)) : (Ze = r, r = J);
                } else Ze = r, r = J;
                return r;
            }
            function S() {
                var r, e, n, c, u;
                return r = Ze, 40 === t.charCodeAt(Ze) ? (e = xr, Ze++) : (e = J, 0 === cn && i(br)), 
                e !== J && N() !== J ? (n = Ze, (c = M()) !== J && (u = N()) !== J ? n = c = [ c, u ] : (Ze = n, 
                n = J), n === J && (n = null), n !== J ? (41 === t.charCodeAt(Ze) ? (c = mr, Ze++) : (c = J, 
                0 === cn && i(Er)), c !== J ? (tn = r, r = e = wr(n)) : (Ze = r, r = J)) : (Ze = r, 
                r = J)) : (Ze = r, r = J), r;
            }
            function M() {
                var r, e, n, c, u, a, o, s;
                if (r = Ze, (e = l()) !== J) {
                    for (n = [], c = Ze, (u = N()) !== J ? (44 === t.charCodeAt(Ze) ? (a = X, Ze++) : (a = J, 
                    0 === cn && i(Y)), a !== J && (o = N()) !== J && (s = l()) !== J ? c = u = [ u, a, o, s ] : (Ze = c, 
                    c = J)) : (Ze = c, c = J); c !== J; ) n.push(c), c = Ze, (u = N()) !== J ? (44 === t.charCodeAt(Ze) ? (a = X, 
                    Ze++) : (a = J, 0 === cn && i(Y)), a !== J && (o = N()) !== J && (s = l()) !== J ? c = u = [ u, a, o, s ] : (Ze = c, 
                    c = J)) : (Ze = c, c = J);
                    n !== J ? (tn = r, r = e = Lr(e, n)) : (Ze = r, r = J);
                } else Ze = r, r = J;
                return r;
            }
            function T() {
                var r, e, n, c;
                return (r = z()) === J && (r = Ze, t.substr(Ze, 4) === Fr ? (e = Fr, Ze += 4) : (e = J, 
                0 === cn && i(Sr)), e !== J && (tn = r, e = Mr()), (r = e) === J && (r = U()) === J && (r = P()) === J && (r = Ze, 
                40 === t.charCodeAt(Ze) ? (e = xr, Ze++) : (e = J, 0 === cn && i(br)), e !== J && N() !== J && (n = f()) !== J && N() !== J ? (41 === t.charCodeAt(Ze) ? (c = mr, 
                Ze++) : (c = J, 0 === cn && i(Er)), c !== J ? (tn = r, r = e = Tr(n)) : (Ze = r, 
                r = J)) : (Ze = r, r = J))), r;
            }
            function z() {
                var r, e, n, c, u, a, o, s, h, l, A, p, d;
                if (r = Ze, t.substr(Ze, 6) === zr ? (e = zr, Ze += 6) : (e = J, 0 === cn && i(Rr)), 
                e !== J) if (N() !== J) if (n = Ze, 40 === t.charCodeAt(Ze) ? (c = xr, Ze++) : (c = J, 
                0 === cn && i(br)), c !== J && (u = N()) !== J && (a = f()) !== J && (o = N()) !== J ? (41 === t.charCodeAt(Ze) ? (s = mr, 
                Ze++) : (s = J, 0 === cn && i(Er)), s !== J ? (tn = n, n = c = jr(a)) : (Ze = n, 
                n = J)) : (Ze = n, n = J), n === J && (n = null), n !== J) if ((c = N()) !== J) if (123 === t.charCodeAt(Ze) ? (u = kr, 
                Ze++) : (u = J, 0 === cn && i(Br)), u !== J) if ((a = N()) !== J) if ((o = R()) === J && (o = null), 
                o !== J) {
                    for (s = [], h = Ze, (l = N()) !== J && (A = R()) !== J ? h = l = [ l, A ] : (Ze = h, 
                    h = J); h !== J; ) s.push(h), h = Ze, (l = N()) !== J && (A = R()) !== J ? h = l = [ l, A ] : (Ze = h, 
                    h = J);
                    s !== J ? (h = Ze, t.substr(Ze, 7) === Pr ? (l = Pr, Ze += 7) : (l = J, 0 === cn && i(Nr)), 
                    l !== J && (A = N()) !== J ? (58 === t.charCodeAt(Ze) ? (p = ct, Ze++) : (p = J, 
                    0 === cn && i(ut)), p !== J && N() !== J && (d = f()) !== J ? (tn = h, h = l = Or(n, o, s, d)) : (Ze = h, 
                    h = J)) : (Ze = h, h = J), h === J && (h = null), h !== J ? (125 === t.charCodeAt(Ze) ? (l = Ur, 
                    Ze++) : (l = J, 0 === cn && i($r)), l !== J ? (tn = r, r = e = _r(n, o, s, h)) : (Ze = r, 
                    r = J)) : (Ze = r, r = J)) : (Ze = r, r = J);
                } else Ze = r, r = J; else Ze = r, r = J; else Ze = r, r = J; else Ze = r, r = J; else Ze = r, 
                r = J; else Ze = r, r = J; else Ze = r, r = J;
                return r;
            }
            function R() {
                var r, e, n, c, u, a, o, s;
                if (r = Ze, (e = j()) === J && (e = null), e !== J) {
                    for (n = [], c = Ze, (u = N()) !== J ? (44 === t.charCodeAt(Ze) ? (a = X, Ze++) : (a = J, 
                    0 === cn && i(Y)), a !== J && (o = N()) !== J && (s = j()) !== J ? (tn = c, c = u = qr(e, s)) : (Ze = c, 
                    c = J)) : (Ze = c, c = J); c !== J; ) n.push(c), c = Ze, (u = N()) !== J ? (44 === t.charCodeAt(Ze) ? (a = X, 
                    Ze++) : (a = J, 0 === cn && i(Y)), a !== J && (o = N()) !== J && (s = j()) !== J ? (tn = c, 
                    c = u = qr(e, s)) : (Ze = c, c = J)) : (Ze = c, c = J);
                    n !== J && (c = N()) !== J ? (58 === t.charCodeAt(Ze) ? (u = ct, Ze++) : (u = J, 
                    0 === cn && i(ut)), u !== J && (a = N()) !== J && (o = f()) !== J && (s = N()) !== J ? (tn = r, 
                    r = e = Hr(e, n, o)) : (Ze = r, r = J)) : (Ze = r, r = J);
                } else Ze = r, r = J;
                return r;
            }
            function j() {
                var t;
                return (t = k()) === J && (t = B()), t;
            }
            function k() {
                var r, e, n;
                return r = Ze, t.substr(Ze, 5) === Ir ? (e = Ir, Ze += 5) : (e = J, 0 === cn && i(Kr)), 
                e !== J && N() !== J && (n = f()) !== J && N() !== J ? (tn = r, r = e = Wr(n)) : (Ze = r, 
                r = J), r;
            }
            function B() {
                var r, e, n;
                return r = Ze, t.substr(Ze, 4) === Dr ? (e = Dr, Ze += 4) : (e = J, 0 === cn && i(Gr)), 
                e !== J && N() !== J && (n = f()) !== J && N() !== J ? (tn = r, r = e = Jr(n)) : (Ze = r, 
                r = J), r;
            }
            function P() {
                var t, r;
                return t = Ze, (r = _()) !== J && (tn = t, r = Qr(r)), t = r;
            }
            function N() {
                var t, r;
                for (t = [], (r = O()) === J && (r = I()); r !== J; ) t.push(r), (r = O()) === J && (r = I());
                return t;
            }
            function O() {
                var r, e;
                if (r = [], Vr.test(t.charAt(Ze)) ? (e = t.charAt(Ze), Ze++) : (e = J, 0 === cn && i(Xr)), 
                e !== J) for (;e !== J; ) r.push(e), Vr.test(t.charAt(Ze)) ? (e = t.charAt(Ze), 
                Ze++) : (e = J, 0 === cn && i(Xr)); else r = J;
                return r;
            }
            function U() {
                var t, r;
                return t = Ze, (r = $()) === J && (r = q()) === J && (r = H()), r !== J && (tn = t, 
                r = Yr(r)), t = r;
            }
            function $() {
                var r, e, n, c, u;
                if (r = Ze, e = Ze, 34 === t.charCodeAt(Ze) ? (n = Zr, Ze++) : (n = J, 0 === cn && i(te)), 
                n !== J) {
                    for (c = [], t.substr(Ze, 2) === re ? (u = re, Ze += 2) : (u = J, 0 === cn && i(ee)), 
                    u === J && (ne.test(t.charAt(Ze)) ? (u = t.charAt(Ze), Ze++) : (u = J, 0 === cn && i(ce))); u !== J; ) c.push(u), 
                    t.substr(Ze, 2) === re ? (u = re, Ze += 2) : (u = J, 0 === cn && i(ee)), u === J && (ne.test(t.charAt(Ze)) ? (u = t.charAt(Ze), 
                    Ze++) : (u = J, 0 === cn && i(ce)));
                    c !== J ? (34 === t.charCodeAt(Ze) ? (u = Zr, Ze++) : (u = J, 0 === cn && i(te)), 
                    u !== J ? e = n = [ n, c, u ] : (Ze = e, e = J)) : (Ze = e, e = J);
                } else Ze = e, e = J;
                if (e === J) if (e = Ze, 39 === t.charCodeAt(Ze) ? (n = ue, Ze++) : (n = J, 0 === cn && i(ae)), 
                n !== J) {
                    for (c = [], t.substr(Ze, 2) === oe ? (u = oe, Ze += 2) : (u = J, 0 === cn && i(ie)), 
                    u === J && (se.test(t.charAt(Ze)) ? (u = t.charAt(Ze), Ze++) : (u = J, 0 === cn && i(he))); u !== J; ) c.push(u), 
                    t.substr(Ze, 2) === oe ? (u = oe, Ze += 2) : (u = J, 0 === cn && i(ie)), u === J && (se.test(t.charAt(Ze)) ? (u = t.charAt(Ze), 
                    Ze++) : (u = J, 0 === cn && i(he)));
                    c !== J ? (39 === t.charCodeAt(Ze) ? (u = ue, Ze++) : (u = J, 0 === cn && i(ae)), 
                    u !== J ? e = n = [ n, c, u ] : (Ze = e, e = J)) : (Ze = e, e = J);
                } else Ze = e, e = J;
                return e !== J && (tn = r, e = fe()), r = e;
            }
            function _() {
                var r, e, n, c, u;
                if (r = Ze, le.test(t.charAt(Ze)) ? (e = t.charAt(Ze), Ze++) : (e = J, 0 === cn && i(Ae)), 
                e === J && (e = null), e !== J) if (pe.test(t.charAt(Ze)) ? (n = t.charAt(Ze), Ze++) : (n = J, 
                0 === cn && i(de)), n !== J) {
                    for (c = [], Ce.test(t.charAt(Ze)) ? (u = t.charAt(Ze), Ze++) : (u = J, 0 === cn && i(ve)); u !== J; ) c.push(u), 
                    Ce.test(t.charAt(Ze)) ? (u = t.charAt(Ze), Ze++) : (u = J, 0 === cn && i(ve));
                    c !== J ? (tn = r, r = e = ye()) : (Ze = r, r = J);
                } else Ze = r, r = J; else Ze = r, r = J;
                return r;
            }
            function q() {
                var r, e, n, c, u, a, o, s;
                if (r = Ze, ge.test(t.charAt(Ze)) ? (e = t.charAt(Ze), Ze++) : (e = J, 0 === cn && i(xe)), 
                e === J && (e = null), e !== J) {
                    for (n = Ze, c = [], be.test(t.charAt(Ze)) ? (u = t.charAt(Ze), Ze++) : (u = J, 
                    0 === cn && i(me)); u !== J; ) c.push(u), be.test(t.charAt(Ze)) ? (u = t.charAt(Ze), 
                    Ze++) : (u = J, 0 === cn && i(me));
                    if (c !== J) if (46 === t.charCodeAt(Ze) ? (u = Ar, Ze++) : (u = J, 0 === cn && i(pr)), 
                    u !== J) {
                        if (a = [], be.test(t.charAt(Ze)) ? (o = t.charAt(Ze), Ze++) : (o = J, 0 === cn && i(me)), 
                        o !== J) for (;o !== J; ) a.push(o), be.test(t.charAt(Ze)) ? (o = t.charAt(Ze), 
                        Ze++) : (o = J, 0 === cn && i(me)); else a = J;
                        a !== J ? n = c = [ c, u, a ] : (Ze = n, n = J);
                    } else Ze = n, n = J; else Ze = n, n = J;
                    if (n === J) if (n = [], be.test(t.charAt(Ze)) ? (c = t.charAt(Ze), Ze++) : (c = J, 
                    0 === cn && i(me)), c !== J) for (;c !== J; ) n.push(c), be.test(t.charAt(Ze)) ? (c = t.charAt(Ze), 
                    Ze++) : (c = J, 0 === cn && i(me)); else n = J;
                    if (n !== J) {
                        if (c = Ze, 101 === t.charCodeAt(Ze) ? (u = Ee, Ze++) : (u = J, 0 === cn && i(we)), 
                        u !== J) if (ge.test(t.charAt(Ze)) ? (a = t.charAt(Ze), Ze++) : (a = J, 0 === cn && i(xe)), 
                        a === J && (a = null), a !== J) {
                            if (o = [], be.test(t.charAt(Ze)) ? (s = t.charAt(Ze), Ze++) : (s = J, 0 === cn && i(me)), 
                            s !== J) for (;s !== J; ) o.push(s), be.test(t.charAt(Ze)) ? (s = t.charAt(Ze), 
                            Ze++) : (s = J, 0 === cn && i(me)); else o = J;
                            o !== J ? c = u = [ u, a, o ] : (Ze = c, c = J);
                        } else Ze = c, c = J; else Ze = c, c = J;
                        c === J && (c = null), c !== J ? (tn = r, r = e = Le()) : (Ze = r, r = J);
                    } else Ze = r, r = J;
                } else Ze = r, r = J;
                return r;
            }
            function H() {
                var r, e, n, c, u, a;
                return r = Ze, Fe.test(t.charAt(Ze)) ? (e = t.charAt(Ze), Ze++) : (e = J, 0 === cn && i(Se)), 
                e !== J ? (ft.test(t.charAt(Ze)) ? (n = t.charAt(Ze), Ze++) : (n = J, 0 === cn && i(lt)), 
                n !== J ? (Me.test(t.charAt(Ze)) ? (c = t.charAt(Ze), Ze++) : (c = J, 0 === cn && i(Te)), 
                c !== J ? (ze.test(t.charAt(Ze)) ? (u = t.charAt(Ze), Ze++) : (u = J, 0 === cn && i(Re)), 
                u !== J ? (tn = r, r = e = je()) : (Ze = r, r = J)) : (Ze = r, r = J)) : (Ze = r, 
                r = J)) : (Ze = r, r = J), r === J && (r = Ze, ke.test(t.charAt(Ze)) ? (e = t.charAt(Ze), 
                Ze++) : (e = J, 0 === cn && i(Be)), e !== J ? (vt.test(t.charAt(Ze)) ? (n = t.charAt(Ze), 
                Ze++) : (n = J, 0 === cn && i(yt)), n !== J ? (Pe.test(t.charAt(Ze)) ? (c = t.charAt(Ze), 
                Ze++) : (c = J, 0 === cn && i(Ne)), c !== J ? (Oe.test(t.charAt(Ze)) ? (u = t.charAt(Ze), 
                Ze++) : (u = J, 0 === cn && i(Ue)), u !== J ? (ze.test(t.charAt(Ze)) ? (a = t.charAt(Ze), 
                Ze++) : (a = J, 0 === cn && i(Re)), a !== J ? (tn = r, r = e = $e()) : (Ze = r, 
                r = J)) : (Ze = r, r = J)) : (Ze = r, r = J)) : (Ze = r, r = J)) : (Ze = r, r = J)), 
                r;
            }
            function I() {
                var t;
                return (t = K()) === J && (t = W()), t;
            }
            function K() {
                var r, e, n, c;
                if (r = Ze, t.substr(Ze, 2) === _e ? (e = _e, Ze += 2) : (e = J, 0 === cn && i(qe)), 
                e !== J) {
                    for (n = [], He.test(t.charAt(Ze)) ? (c = t.charAt(Ze), Ze++) : (c = J, 0 === cn && i(Ie)); c !== J; ) n.push(c), 
                    He.test(t.charAt(Ze)) ? (c = t.charAt(Ze), Ze++) : (c = J, 0 === cn && i(Ie));
                    n !== J ? r = e = [ e, n ] : (Ze = r, r = J);
                } else Ze = r, r = J;
                return r;
            }
            function W() {
                var r, e, n, c, u, a, o, s, h, f;
                if (r = Ze, t.substr(Ze, 2) === Ke ? (e = Ke, Ze += 2) : (e = J, 0 === cn && i(We)), 
                e !== J) {
                    for (n = [], De.test(t.charAt(Ze)) ? (c = t.charAt(Ze), Ze++) : (c = J, 0 === cn && i(Ge)); c !== J; ) n.push(c), 
                    De.test(t.charAt(Ze)) ? (c = t.charAt(Ze), Ze++) : (c = J, 0 === cn && i(Ge));
                    if (n !== J) {
                        if (c = [], 42 === t.charCodeAt(Ze) ? (u = tr, Ze++) : (u = J, 0 === cn && i(rr)), 
                        u !== J) for (;u !== J; ) c.push(u), 42 === t.charCodeAt(Ze) ? (u = tr, Ze++) : (u = J, 
                        0 === cn && i(rr)); else c = J;
                        if (c !== J) {
                            if (u = [], a = Ze, Je.test(t.charAt(Ze)) ? (o = t.charAt(Ze), Ze++) : (o = J, 0 === cn && i(Qe)), 
                            o !== J) {
                                for (s = [], De.test(t.charAt(Ze)) ? (h = t.charAt(Ze), Ze++) : (h = J, 0 === cn && i(Ge)); h !== J; ) s.push(h), 
                                De.test(t.charAt(Ze)) ? (h = t.charAt(Ze), Ze++) : (h = J, 0 === cn && i(Ge));
                                if (s !== J) {
                                    if (h = [], 42 === t.charCodeAt(Ze) ? (f = tr, Ze++) : (f = J, 0 === cn && i(rr)), 
                                    f !== J) for (;f !== J; ) h.push(f), 42 === t.charCodeAt(Ze) ? (f = tr, Ze++) : (f = J, 
                                    0 === cn && i(rr)); else h = J;
                                    h !== J ? a = o = [ o, s, h ] : (Ze = a, a = J);
                                } else Ze = a, a = J;
                            } else Ze = a, a = J;
                            for (;a !== J; ) if (u.push(a), a = Ze, Je.test(t.charAt(Ze)) ? (o = t.charAt(Ze), 
                            Ze++) : (o = J, 0 === cn && i(Qe)), o !== J) {
                                for (s = [], De.test(t.charAt(Ze)) ? (h = t.charAt(Ze), Ze++) : (h = J, 0 === cn && i(Ge)); h !== J; ) s.push(h), 
                                De.test(t.charAt(Ze)) ? (h = t.charAt(Ze), Ze++) : (h = J, 0 === cn && i(Ge));
                                if (s !== J) {
                                    if (h = [], 42 === t.charCodeAt(Ze) ? (f = tr, Ze++) : (f = J, 0 === cn && i(rr)), 
                                    f !== J) for (;f !== J; ) h.push(f), 42 === t.charCodeAt(Ze) ? (f = tr, Ze++) : (f = J, 
                                    0 === cn && i(rr)); else h = J;
                                    h !== J ? a = o = [ o, s, h ] : (Ze = a, a = J);
                                } else Ze = a, a = J;
                            } else Ze = a, a = J;
                            u !== J ? (47 === t.charCodeAt(Ze) ? (a = er, Ze++) : (a = J, 0 === cn && i(nr)), 
                            a !== J ? r = e = [ e, n, c, u, a ] : (Ze = r, r = J)) : (Ze = r, r = J);
                        } else Ze = r, r = J;
                    } else Ze = r, r = J;
                } else Ze = r, r = J;
                return r;
            }
            function D() {
                var r, e, n, c, u, a;
                return r = Ze, e = Ze, vt.test(t.charAt(Ze)) ? (n = t.charAt(Ze), Ze++) : (n = J, 
                0 === cn && i(yt)), n !== J ? (Oe.test(t.charAt(Ze)) ? (c = t.charAt(Ze), Ze++) : (c = J, 
                0 === cn && i(Ue)), c !== J ? (Ve.test(t.charAt(Ze)) ? (u = t.charAt(Ze), Ze++) : (u = J, 
                0 === cn && i(Xe)), u !== J ? e = n = [ n, c, u ] : (Ze = e, e = J)) : (Ze = e, 
                e = J)) : (Ze = e, e = J), e === J && (e = Ze, bt.test(t.charAt(Ze)) ? (n = t.charAt(Ze), 
                Ze++) : (n = J, 0 === cn && i(mt)), n !== J ? (ze.test(t.charAt(Ze)) ? (c = t.charAt(Ze), 
                Ze++) : (c = J, 0 === cn && i(Re)), c !== J ? (Oe.test(t.charAt(Ze)) ? (u = t.charAt(Ze), 
                Ze++) : (u = J, 0 === cn && i(Ue)), u !== J ? (Ve.test(t.charAt(Ze)) ? (a = t.charAt(Ze), 
                Ze++) : (a = J, 0 === cn && i(Xe)), a !== J ? e = n = [ n, c, u, a ] : (Ze = e, 
                e = J)) : (Ze = e, e = J)) : (Ze = e, e = J)) : (Ze = e, e = J)), e !== J && (tn = r, 
                e = Ye(e)), r = e;
            }
            e = void 0 !== e ? e : {};
            var G, J = {}, Q = {
                Expressions: h
            }, V = h, X = ",", Y = c(",", !1), Z = function(t, r) {
                return r;
            }, tt = function(t, r) {
                return [ t ].concat(r);
            }, rt = function(t, r) {
                return r && (t.sortHint = r), t;
            }, et = "?", nt = c("?", !1), ct = ":", ut = c(":", !1), at = function(t, r, e) {
                return {
                    type: "ConditionalExpression",
                    test: t,
                    consequent: r,
                    alternate: e
                };
            }, ot = "||", it = c("||", !1), st = /^[o]/i, ht = u([ "o" ], !1, !0), ft = /^[r]/i, lt = u([ "r" ], !1, !0), At = function(t) {
                return "||";
            }, pt = function(t, r) {
                return un.buildLogicalExpression(t, r);
            }, dt = "&&", Ct = c("&&", !1), vt = /^[a]/i, yt = u([ "a" ], !1, !0), gt = /^[n]/i, xt = u([ "n" ], !1, !0), bt = /^[d]/i, mt = u([ "d" ], !1, !0), Et = function(t) {
                return "&&";
            }, wt = function(t, r) {
                return un.buildBinaryExpression(t, r);
            }, Lt = "===", Ft = c("===", !1), St = "!==", Mt = c("!==", !1), Tt = "==", zt = c("==", !1), Rt = "!=", jt = c("!=", !1), kt = "<=", Bt = c("<=", !1), Pt = ">=", Nt = c(">=", !1), Ot = "<", Ut = c("<", !1), $t = ">", _t = c(">", !1), qt = "*=", Ht = c("*=", !1), It = "^=", Kt = c("^=", !1), Wt = "$=", Dt = c("$=", !1), Gt = "+", Jt = c("+", !1), Qt = "-", Vt = c("-", !1), Xt = "!", Yt = c("!", !1), Zt = function(t, r) {
                return {
                    type: "UnaryExpression",
                    operator: t,
                    argument: r,
                    prefix: !0
                };
            }, tr = "*", rr = c("*", !1), er = "/", nr = c("/", !1), cr = "%", ur = c("%", !1), ar = function(t, r) {
                return {
                    type: "CallExpression",
                    callee: t,
                    arguments: r
                };
            }, or = function(t, r) {
                return {
                    type: "CallExpression",
                    arguments: r
                };
            }, ir = "[", sr = c("[", !1), hr = "]", fr = c("]", !1), lr = function(t, r) {
                return {
                    type: "MemberExpression",
                    property: r,
                    computed: !0
                };
            }, Ar = ".", pr = c(".", !1), dr = function(t, r) {
                return {
                    type: "MemberExpression",
                    property: r,
                    computed: !1
                };
            }, Cr = function(t, r) {
                return r.reduce(function(t, r) {
                    return r[un.typeToPropertyName(r.type)] = t, r;
                }, t);
            }, vr = function(t, r) {
                return {
                    property: r,
                    computed: !0
                };
            }, yr = function(t, r) {
                return {
                    property: r,
                    computed: !1
                };
            }, gr = function(t, r) {
                return r.reduce(function(t, r) {
                    return {
                        type: "MemberExpression",
                        object: t,
                        property: r.property,
                        computed: r.computed
                    };
                }, t);
            }, xr = "(", br = c("(", !1), mr = ")", Er = c(")", !1), wr = function(t) {
                return un.optionalList(un.extractOptional(t, 0));
            }, Lr = function(t, r) {
                return un.buildList(t, r, 3);
            }, Fr = "this", Sr = c("this", !1), Mr = function() {
                return {
                    type: "ThisExpression"
                };
            }, Tr = function(t) {
                return t.nested = !0, t;
            }, zr = "switch", Rr = c("switch", !1), jr = function(t) {
                return t;
            }, kr = "{", Br = c("{", !1), Pr = "default", Nr = c("default", !1), Or = function(t, r, e, n) {
                return n;
            }, Ur = "}", $r = c("}", !1), _r = function(t, r, e, n) {
                return {
                    type: "SwitchExpression",
                    input: t,
                    cases: un.buildList(r, e, 1),
                    fallback: n
                };
            }, qr = function(t, r) {
                return [ r ];
            }, Hr = function(t, r, e) {
                return {
                    type: "SwitchCase",
                    conditions: un.buildList(t, r, 0),
                    value: e
                };
            }, Ir = "case ", Kr = c("case ", !1), Wr = function(t) {
                return {
                    type: "CaseCondition",
                    condition: t
                };
            }, Dr = "when", Gr = c("when", !1), Jr = function(t) {
                return {
                    type: "WhenCondition",
                    condition: t
                };
            }, Qr = function(t) {
                return {
                    type: "Identifier",
                    name: t
                };
            }, Vr = /^[\r\n\t ]/, Xr = u([ "\r", "\n", "\t", " " ], !1, !1), Yr = function(t) {
                return {
                    type: "Literal",
                    value: t
                };
            }, Zr = '"', te = c('"', !1), re = '\\"', ee = c('\\"', !1), ne = /^[^"]/, ce = u([ '"' ], !0, !1), ue = "'", ae = c("'", !1), oe = "\\'", ie = c("\\'", !1), se = /^[^']/, he = u([ "'" ], !0, !1), fe = function() {
                return n();
            }, le = /^[#@]/, Ae = u([ "#", "@" ], !1, !1), pe = /^[a-z]/i, de = u([ [ "a", "z" ] ], !1, !0), Ce = /^[a-z0-9_]/i, ve = u([ [ "a", "z" ], [ "0", "9" ], "_" ], !1, !0), ye = function() {
                return n();
            }, ge = /^[+\-]/, xe = u([ "+", "-" ], !1, !1), be = /^[0-9]/, me = u([ [ "0", "9" ] ], !1, !1), Ee = "e", we = c("e", !1), Le = function() {
                return parseFloat(n());
            }, Fe = /^[t]/i, Se = u([ "t" ], !1, !0), Me = /^[u]/i, Te = u([ "u" ], !1, !0), ze = /^[e]/i, Re = u([ "e" ], !1, !0), je = function() {
                return !0;
            }, ke = /^[f]/i, Be = u([ "f" ], !1, !0), Pe = /^[l]/i, Ne = u([ "l" ], !1, !0), Oe = /^[s]/i, Ue = u([ "s" ], !1, !0), $e = function() {
                return !1;
            }, _e = "//", qe = c("//", !1), He = /^[^\n]/, Ie = u([ "\n" ], !0, !1), Ke = "/*", We = c("/*", !1), De = /^[^*]/, Ge = u([ "*" ], !0, !1), Je = /^[^\/*]/, Qe = u([ "/", "*" ], !0, !1), Ve = /^[c]/i, Xe = u([ "c" ], !1, !0), Ye = function(t) {
                return n();
            }, Ze = 0, tn = 0, rn = [ {
                line: 1,
                column: 1
            } ], en = 0, nn = [], cn = 0;
            if ("startRule" in e) {
                if (!(e.startRule in Q)) throw new Error("Can't start parsing from rule \"" + e.startRule + '".');
                V = Q[e.startRule];
            }
            var un = function() {
                function t(t, r) {
                    return t.map(function(t) {
                        return t[r];
                    });
                }
                var r = {
                    CallExpression: "callee",
                    MemberExpression: "object"
                };
                return {
                    filledArray: function(t, r) {
                        return Array.apply(null, new Array(t)).map(function() {
                            return r;
                        });
                    },
                    extractOptional: function(t, r) {
                        return t ? t[r] : null;
                    },
                    extractList: t,
                    buildList: function(r, e, n) {
                        return r ? [ r ].concat(t(e, n)) : t(e, n);
                    },
                    buildBinaryExpression: function(t, r) {
                        return r.reduce(function(t, r) {
                            return {
                                type: "BinaryExpression",
                                operator: r[1],
                                left: t,
                                right: r[3]
                            };
                        }, t);
                    },
                    buildLogicalExpression: function(t, r) {
                        return r.reduce(function(t, r) {
                            return {
                                type: "LogicalExpression",
                                operator: r[1],
                                left: t,
                                right: r[3]
                            };
                        }, t);
                    },
                    optionalList: function(t) {
                        return null !== t ? t : [];
                    },
                    typeToPropertyName: function(t) {
                        return r[t];
                    }
                };
            }();
            !function() {
                var t = [ {
                    children: []
                } ];
                t[0];
            }();
            if ((G = V()) !== J && Ze === t.length) return G;
            throw G !== J && Ze < t.length && i({
                type: "end"
            }), s(nn, en < t.length ? t.charAt(en) : null, en < t.length ? o(en, en + 1) : o(en, en));
        }
    };
}(this);
