///#source 1 1 /Scripts/jquery.js
/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.3", n = function (a, b) { return new n.fn.init(a, b) }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return n.each(this, a, b) }, map: function (a) { return this.pushStack(n.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--) ; i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === n.type(a) }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { return !n.isArray(a) && a - parseFloat(a) + 1 >= 0 }, isPlainObject: function (a) { return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (a) { var b, c = eval; a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a)) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = s(a); if (c) { if (g) { for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : g.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = s(a), i = []; if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () { return a.apply(b || this, e.concat(d.call(arguments))) }, f.guid = a.guid = a.guid || n.guid++, f) : void 0 }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function s(a) { var b = a.length, c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function (a, b) { return a === b && (l = !0), 0 }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) { for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c; return -1 }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, eb = function () { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (fb) { H = { apply: E.length ? function (a, b) { G.apply(a, I.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function gb(a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d; if (!e && p) { if (11 !== k && (f = _.exec(a))) if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d } if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) { o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; while (l--) o[l] = s + rb(o[l]); w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",") } if (x) try { return H.apply(d, w.querySelectorAll(x)), d } catch (y) { } finally { r || b.removeAttribute("id") } } } return i(a.replace(R, "$1"), b, d, e) } function hb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ib(a) { return a[u] = !0, a } function jb(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function kb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function lb(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function mb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function nb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function ob(a) { return ib(function (b) { return b = +b, ib(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function pb(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = gb.support = {}, f = gb.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = gb.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = jb(function (a) { return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) { return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), jb(function (a) { var b = g.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b]; if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return lb(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) i.unshift(c); while (h[d] === i[d]) d++; return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0 }, g) : n }, gb.matches = function (a, b) { return gb(a, null, null, b) }, gb.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return gb(b, n, null, [a]).length > 0 }, gb.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, gb.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, gb.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, gb.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = gb.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = gb.selectors = { cacheLength: 50, createPseudo: ib, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = gb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ib(function (a) { var b = [], c = [], d = h(a.replace(R, "$1")); return d[u] ? ib(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ib(function (a) { return function (b) { return gb(a, b).length > 0 } }), contains: ib(function (a) { return a = a.replace(cb, db), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ib(function (a) { return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Z.test(a.nodeName) }, input: function (a) { return Y.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: ob(function () { return [0] }), last: ob(function (a, b) { return [b - 1] }), eq: ob(function (a, b, c) { return [0 > c ? c + b : c] }), even: ob(function (a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: ob(function (a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: ob(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: ob(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = mb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = nb(b); function qb() { } qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? gb.error(a) : z(a, i).slice(0) }; function rb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d } function sb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [w, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function tb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function ub(a, b, c) { for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c); return c } function vb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function wb(a, b, c, d, e, f) { return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = vb(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) } function xb(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) { return a === b }, h, !0), l = sb(function (a) { return J(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sb(tb(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break; return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a)) } m.push(c) } return tb(m) } function yb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length; for (k && (j = g !== n && g) ; q !== x && null != (l = u[q]) ; q++) { if (e && l) { m = 0; while (o = a[m++]) if (o(l, g, h)) { i.push(l); break } k && (w = v) } c && ((l = !o && l) && p--, f && r.push(l)) } if (p += q, c && q !== p) { m = 0; while (o = b[m++]) o(r, s, g, h); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i)); s = vb(s) } H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i) } return k && (w = v, j = t), r }; return c ? ib(f) : f } return h = gb.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = xb(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, yb(e, d)), f.selector = a } return f }, i = gb.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = X.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), jb(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || kb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && jb(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || kb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), jb(function (a) { return null == a.getAttribute("disabled") }) || kb(K, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), gb }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x(a, b, c) { if (n.isFunction(b)) return n.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (w.test(b)) return n.filter(b, a, c); b = n.filter(b, a) } return n.grep(a, function (a) { return g.call(b, a) >= 0 !== c }) } n.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function (a) { var b, c = this.length, d = [], e = this; if ("string" != typeof a) return this.pushStack(n(a).filter(function () { for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0 })); for (b = 0; c > b; b++) n.find(a, e[b], d); return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d }, filter: function (a) { return this.pushStack(x(this, a || [], !1)) }, not: function (a) { return this.pushStack(x(this, a || [], !0)) }, is: function (a) { return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length } }); var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }; A.prototype = n.fn, y = n(l); var B = /^(?:parents|prev(?:Until|All))/, C = { children: !0, contents: !0, next: !0, prev: !0 }; n.extend({ dir: function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && n(a).is(c)) break; d.push(a) } return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), n.fn.extend({ has: function (a) { var b = n(a, this), c = b.length; return this.filter(function () { for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? n.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(n.unique(n.merge(this.get(), n(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function D(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } n.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return n.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return n.dir(a, "parentNode", c) }, next: function (a) { return D(a, "nextSibling") }, prev: function (a) { return D(a, "previousSibling") }, nextAll: function (a) { return n.dir(a, "nextSibling") }, prevAll: function (a) { return n.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return n.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return n.dir(a, "previousSibling", c) }, siblings: function (a) { return n.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return n.sibling(a.firstChild) }, contents: function (a) { return a.contentDocument || n.merge([], a.childNodes) } }, function (a, b) { n.fn[a] = function (c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e) } }); var E = /\S+/g, F = {}; function G(a) { var b = F[a] = {}; return n.each(a.match(E) || [], function (a, c) { b[c] = !0 }), b } n.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) { b = !1; break } d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable()) }, k = { add: function () { if (h) { var c = h.length; !function g(b) { n.each(b, function (b, c) { var d = n.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c) }) }(arguments), d ? f = h.length : b && (e = c, j(b)) } return this }, remove: function () { return h && n.each(arguments, function (a, b) { var c; while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--) }), this }, has: function (a) { return a ? n.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], f = 0, this }, disable: function () { return h = i = b = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, b || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, b) { return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!c } }; return k }, n.extend({ Deferred: function (a) { var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return n.Deferred(function (c) { n.each(b, function (b, f) { var g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? n.extend(a, d) : d } }, e = {}; return d.pipe = d.then, n.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e) ; e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var H; n.fn.ready = function (a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? n.readyWait++ : n.ready(!0) }, ready: function (a) { (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready")))) } }); function I() { l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready() } n.ready.promise = function (b) { return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b) }, n.ready.promise(); var J = n.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) n.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(n(a), c) })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }; n.acceptData = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function K() { Object.defineProperty(this.cache = {}, 0, { get: function () { return {} } }), this.expando = n.expando + K.uid++ } K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function (a) { if (!K.accepts(a)) return 0; var b = {}, c = a[this.expando]; if (!c) { c = K.uid++; try { b[this.expando] = { value: c }, Object.defineProperties(a, b) } catch (d) { b[this.expando] = c, n.extend(a, b) } } return this.cache[c] || (this.cache[c] = {}), c }, set: function (a, b, c) { var d, e = this.key(a), f = this.cache[e]; if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d]; return f }, get: function (a, b) { var c = this.cache[this.key(a)]; return void 0 === b ? c : c[b] }, access: function (a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) { var c, d, e, f = this.key(a), g = this.cache[f]; if (void 0 === b) this.cache[f] = {}; else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length; while (c--) delete g[d[c]] } }, hasData: function (a) { return !n.isEmptyObject(this.cache[a[this.expando]] || {}) }, discard: function (a) { a[this.expando] && delete this.cache[a[this.expando]] } }; var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g; function P(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) { } M.set(a, b, c) } else c = void 0; return c } n.extend({
        hasData: function (a) { return M.hasData(a) || L.hasData(a) }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) { M.remove(a, b) }, _data: function (a, b, c) { return L.access(a, b, c) }, _removeData: function (a, b) { L.remove(a, b) }
    }), n.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]))); L.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { M.set(this, a) }) : J(this, function (b) { var c, d = n.camelCase(a); if (f && void 0 === b) { if (c = M.get(f, a), void 0 !== c) return c; if (c = M.get(f, d), void 0 !== c) return c; if (c = P(f, d, void 0), void 0 !== c) return c } else this.each(function () { var c = M.get(this, d); M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function (a) { return this.each(function () { M.remove(this, a) }) } }), n.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () { L.remove(a, [b + "queue", c]) }) }) } }), n.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = n.queue(this, a, b); n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { n.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) }, T = /^(?:checkbox|radio)$/i; !function () { var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var U = "undefined"; k.focusinBubbles = "onfocusin" in a; var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/; function Z() { return !0 } function $() { return !1 } function _() { try { return l.activeElement } catch (a) { } } n.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) { return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(E) || [""], j = b.length; while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a); if (r && (i = r.events)) { b = (b || "").match(E) || [""], j = b.length; while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]) } else for (o in i) n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : []; if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) { if (!e && !o.noBubble && !n.isWindow(d)) { for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode) ; g; g = g.parentNode) p.push(g), h = g; h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a) } f = 0; while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault()); return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result } }, dispatch: function (a) { a = n.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) { for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f); d.length && g.push({ elem: i, handlers: d }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, fix: function (a) { if (a[n.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function () { return this !== _() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function () { return this === _() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function (a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = n.extend(new n.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation() }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { n.event.simulate(b, a.target, n.event.fix(a), !0) }; n.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = L.access(d, b); e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = L.access(d, b) - 1; e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b)) } } }), n.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (g in a) this.on(g, b, c, a[g], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this; return 1 === e && (f = d, d = function (a) { return n().off(a), f.apply(this, arguments) }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () { n.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () { n.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { n.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }); var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td; function jb(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function kb(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function lb(a) { var b = gb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function mb(a, b) { for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval")) } function nb(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]) } M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i)) } } function ob(a, b) { var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c } function pb(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } n.extend({ clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a); if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]); if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]); else nb(a, h); return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) { f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0]; while (j--) f = f.lastChild; n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "" } else l.push(b.createTextNode(e)); k.textContent = "", m = 0; while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) { j = 0; while (e = f[j++]) fb.test(e.type || "") && c.push(e) } return k }, cleanData: function (a) { for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]) ; g++) { if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) { if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle); L.cache[e] && delete L.cache[e] } delete M.cache[c[M.expando]] } } }), n.fn.extend({ text: function (a) { return J(this, function (a) { return void 0 === a ? n.text(this) : this.empty().each(function () { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = jb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = jb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]) ; e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return n.clone(this, a, b) }) }, html: function (a) { return J(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(ab, "<$1></$2>"); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function (c) { var d = m.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) { for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j); if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, ""))) } return this } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { n.fn[a] = function (a) { for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get()); return this.pushStack(d) } }); var qb, rb = {}; function sb(b, c) { var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display"); return e.detach(), f } function tb(a) { var b = l, c = rb[a]; return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c } var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null) }; function xb(a, b, c) { var d, e, f, g, h = a.style; return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g } function yb(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div"); if (f.style) { f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f); function g() { f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e); var g = a.getComputedStyle(f, null); b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e) } a.getComputedStyle && n.extend(k, { pixelPosition: function () { return g(), b }, boxSizingReliable: function () { return null == c && g(), c }, reliableMarginRight: function () { var b, c = f.appendChild(l.createElement("div")); return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b } }) } }(), n.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = { position: "absolute", visibility: "hidden", display: "block" }, Db = { letterSpacing: "0", fontWeight: "400" }, Eb = ["Webkit", "O", "Moz", "ms"]; function Fb(a, b) { if (b in a) return b; var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; while (e--) if (b = Eb[e] + c, b in a) return b; return d } function Gb(a, b, c) { var d = Ab.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Hb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e))); return g } function Ib(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e; d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px" } function Jb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } n.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = xb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b), i = a.style; return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e } }), n.each(["height", "width"], function (a, b) { n.cssHooks[b] = { get: function (a, c, d) { return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () { return Ib(a, b, d) }) : Ib(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && wb(a); return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) { return b ? n.swap(a, { display: "inline-block" }, xb, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) { n.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, ub.test(a) || (n.cssHooks[a + b].set = Gb) }), n.fn.extend({ css: function (a, b) { return J(this, function (a, b, c) { var d, e, f = {}, g = 0; if (n.isArray(b)) { for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Jb(this, !0) }, hide: function () { return Jb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { S(this) ? n(this).show() : n(this).hide() }) } }); function Kb(a, b, c, d, e) { return new Kb.prototype.init(a, b, c, d, e) } n.Tween = Kb, Kb.prototype = { constructor: Kb, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function () { var a = Kb.propHooks[this.prop]; return a && a.get ? a.get(this) : Kb.propHooks._default.get(this) }, run: function (a) { var b, c = Kb.propHooks[this.prop]; return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this } }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, n.fx = Kb.prototype.init, n.fx.step = {}; var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function Sb() { return setTimeout(function () { Lb = void 0 }), Lb = n.now() } function Tb(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function Ub(a, b, c) { for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d } function Vb(a, b, c) { var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow"); c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, l.always(function () { l.always(function () { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], Nb.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue; p = !0 } m[d] = q && q[d] || n.style(a, d) } else j = void 0; if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else { q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () { n(a).hide() }), l.done(function () { var b; L.remove(a, "fxshow"); for (b in m) n.style(a, b, m[b]) }); for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function Wb(a, b) { var c, d, e, f, g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function Xb(a, b, c) { var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: Lb || Sb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (Wb(k, j.opts.specialEasing) ; g > f; f++) if (d = Qb[f].call(j, a, k, j.opts)) return d; return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } n.Animation = n.extend(Xb, { tweener: function (a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b) }, prefilter: function (a, b) { b ? Qb.unshift(a) : Qb.push(a) } }), n.speed = function (a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () { var b = Xb(this, n.extend({}, a), f); (e || L.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && n.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), n.each(["toggle", "show", "hide"], function (a, b) { var c = n.fn[b]; n.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e) } }), n.each({ slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function () { var a, b = 0, c = n.timers; for (Lb = n.now() ; b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || n.fx.stop(), Lb = void 0 }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function () { Mb || (Mb = setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function () { clearInterval(Mb), Mb = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) { return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option")); a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value }(); var Yb, Zb, $b = n.expr.attrHandle; n.fn.extend({ attr: function (a, b) { return J(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { n.removeAttr(this, a) }) } }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) }, attrHooks: { type: { set: function (a, b) { if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
    }), Zb = { set: function (a, b, c) { return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = $b[b] || n.find.attr; $b[b] = function (a, b, d) { var e, f; return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e } }); var _b = /^(?:input|select|textarea|button)$/i; n.fn.extend({ prop: function (a, b) { return J(this, n.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[n.propFix[a] || a] }) } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1 } } } }), k.optSelected || (n.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { n.propFix[this.toLowerCase()] = this }); var ac = /[\t\r\n\f]/g; n.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, this.className)) }); if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = n.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, this.className)) }); if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? n.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) { n(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = n(this), f = a.match(E) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0; return !1 } }); var bc = /\r/g; n.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function (a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = n.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), n.each(["radio", "checkbox"], function () { n.valHooks[this] = { set: function (a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0 } }, k.checkOn || (n.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var cc = n.now(), dc = /\?/; n.parseJSON = function (a) { return JSON.parse(a + "") }, n.parseXML = function (a) { var b, c; if (!a || "string" != typeof a) return null; try { c = new DOMParser, b = c.parseFromString(a, "text/xml") } catch (d) { b = void 0 } return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b }; var ec = /#.*$/, fc = /([?&])_=[^&]*/, gc = /^(.*?):[ \t]*([^\r\n]*)$/gm, hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ic = /^(?:GET|HEAD)$/, jc = /^\/\//, kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lc = {}, mc = {}, nc = "*/".concat("*"), oc = a.location.href, pc = kc.exec(oc.toLowerCase()) || []; function qc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function rc(a, b, c, d) { var e = {}, f = a === mc; function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function sc(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a } function tc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function uc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: oc, type: "GET", isLocal: hc.test(pc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a) }, ajaxPrefilter: qc(lc), ajaxTransport: qc(mc), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!f) { f = {}; while (b = gc.exec(e)) f[b[1].toLowerCase()] = b[2] } b = f[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? e : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return c && c.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rc(lc, k, b, v), 2 === t) return v; i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]); for (j in k.headers) v.setRequestHeader(j, k.headers[j]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]); if (c = rc(mc, k, b, v)) { v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, c.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, f, h) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return n.get(a, b, c, "json") }, getScript: function (a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function (a, b) { n[b] = function (a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), n._evalUrl = function (a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function (a) { var b; return n.isFunction(a) ? this.each(function (b) { n(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function (a) { return this.each(n.isFunction(a) ? function (b) { n(this).wrapInner(a.call(this, b)) } : function () { var b = n(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 }, n.expr.filters.visible = function (a) { return !n.expr.filters.hidden(a) }; var vc = /%20/g, wc = /\[\]$/, xc = /\r?\n/g, yc = /^(?:submit|button|image|reset|file)$/i, zc = /^(?:input|select|textarea|keygen)/i; function Ac(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function (b, e) { c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ac(a + "[" + e + "]", b[e], c, d) } n.param = function (a, b) { var c, d = [], e = function (a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () { e(this.name, this.value) }); else for (c in a) Ac(c, a[c], b, e); return d.join("&").replace(vc, "+") }, n.fn.extend({ serialize: function () { return n.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a)) }).map(function (a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function (a) { return { name: b.name, value: a.replace(xc, "\r\n") } }) : { name: b.name, value: c.replace(xc, "\r\n") } }).get() } }), n.ajaxSettings.xhr = function () { try { return new XMLHttpRequest } catch (a) { } }; var Bc = 0, Cc = {}, Dc = { 0: 200, 1223: 204 }, Ec = n.ajaxSettings.xhr(); a.attachEvent && a.attachEvent("onunload", function () { for (var a in Cc) Cc[a]() }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function (a) { var b; return k.cors || Ec && !a.crossDomain ? { send: function (c, d) { var e, f = a.xhr(), g = ++Bc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) f.setRequestHeader(e, c[e]); b = function (a) { return function () { b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders())) } }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort"); try { f.send(a.hasContent && a.data || null) } catch (h) { if (b) throw h } }, abort: function () { b && b() } } : void 0 }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), n.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (d, e) { b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type) }), l.head.appendChild(b[0]) }, abort: function () { c && c() } } } }); var Fc = [], Gc = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Fc.pop() || n.expando + "_" + cc++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || l; var d = v.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes)) }; var Hc = n.fn.load; n.fn.load = function (a, b, c) { if ("string" != typeof a && Hc) return Hc.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, f || [a.responseText, b, a]) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { n.fn[b] = function (a) { return this.on(b, a) } }), n.expr.filters.animated = function (a) { return n.grep(n.timers, function (b) { return a === b.elem }).length }; var Ic = a.document.documentElement; function Jc(a) { return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView } n.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { n.offset.setOffset(this, a, b) }); var b, c, d = this[0], e = { top: 0, left: 0 }, f = d && d.ownerDocument; if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jc(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e }, position: function () { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || Ic; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || Ic }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) { var d = "pageYOffset" === c; n.fn[b] = function (e) { return J(this, function (b, e, f) { var g = Jc(b); return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f) }, b, e, arguments.length, null) } }), n.each(["top", "left"], function (a, b) { n.cssHooks[b] = yb(k.pixelPosition, function (a, c) { return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function (a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { n.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return J(this, function (b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.size = function () { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return n }); var Kc = a.jQuery, Lc = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n }, typeof b === U && (a.jQuery = a.$ = n), n
});
///#source 1 1 /Scripts/jquery-ui.min.js
/*! jQuery UI - v1.11.2 - 2015-01-27
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, sortable.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return a=!o&&r.length?e.widget.extend.apply(null,[a].concat(r)):a,o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
}, _convertPositionTo: function (t, i) { i || (i = this.position); var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName); return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s } }, _generatePosition: function (t) { var i, s, n = this.options, a = t.pageX, o = t.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) } }, _rearrange: function (e, t, i, s) { i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var n = this.counter; this._delay(function () { n === this.counter && this.refreshPositions(!s) }) }, _clear: function (e, t) { function i(e, t, i) { return function (s) { i._trigger(e, s, t._uiHash(t)) } } this.reverting = !1; var s, n = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = ""); this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !t && n.push(function (e) { this._trigger("receive", e, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) { this._trigger("update", e, this._uiHash()) }), this !== this.currentContainer && (t || (n.push(function (e) { this._trigger("remove", e, this._uiHash()) }), n.push(function (e) { return function (t) { e._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function (e) { return function (t) { e._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) { for (s = 0; n.length > s; s++) n[s].call(this, e); this._trigger("stop", e, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function () { e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function (t) { var i = t || this; return { helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null } }
})
});

/*!
 DataTables 1.10.9
 ©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function (Fa, T, k) {
    var S = function (h) {
        function X(a) { var b, c, d = {}; h.each(a, function (e) { if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && X(a[e]) }); a._hungarianMap = d } function I(a, b, c) { a._hungarianMap || X(a); var d; h.each(b, function (e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), I(a[d], b[d], c)) : b[d] = b[e] }) } function S(a) {
            var b = m.defaults.oLanguage, c = a.sZeroRecords;
            !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable"); !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords"); a.sInfoThousands && (a.sThousands = a.sInfoThousands); (a = a.sDecimal) && cb(a)
        } function db(a) {
            A(a, "ordering", "bSort"); A(a, "orderMulti", "bSortMulti"); A(a, "orderClasses", "bSortClasses"); A(a, "orderCellsTop", "bSortCellsTop"); A(a, "order", "aaSorting"); A(a, "orderFixed", "aaSortingFixed"); A(a, "paging", "bPaginate");
            A(a, "pagingType", "sPaginationType"); A(a, "pageLength", "iDisplayLength"); A(a, "searching", "bFilter"); "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : ""); if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) a[b] && I(m.models.oSearch, a[b])
        } function eb(a) { A(a, "orderable", "bSortable"); A(a, "orderData", "aDataSort"); A(a, "orderSequence", "asSorting"); A(a, "orderDataType", "sortDataType"); var b = a.aDataSort; b && !h.isArray(b) && (a.aDataSort = [b]) } function fb(a) {
            if (!m.__browser) {
                var b = {}; m.__browser = b; var c =
                h("<div/>").css({ position: "fixed", top: 0, left: 0, height: 1, width: 1, overflow: "hidden" }).append(h("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"), d = c.children(), e = d.children(); b.barWidth = d[0].offsetWidth - d[0].clientWidth; b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth; b.bScrollbarLeft = 1 !== Math.round(e.offset().left); b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1; c.remove()
            } h.extend(a.oBrowser,
            m.__browser); a.oScroll.iBarWidth = m.__browser.barWidth
        } function gb(a, b, c, d, e, f) { var g, i = !1; c !== k && (g = c, i = !0); for (; d !== e;) a.hasOwnProperty(d) && (g = i ? b(g, a[d], d, a) : a[d], i = !0, d += f); return g } function Ga(a, b) {
            var c = m.defaults.column, d = a.aoColumns.length, c = h.extend({}, m.models.oColumn, c, { nTh: b ? b : T.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d }); a.aoColumns.push(c); c = a.aoPreSearchCols; c[d] = h.extend({}, m.models.oSearch, c[d]);
            la(a, d, h(b).data())
        } function la(a, b, c) {
            var b = a.aoColumns[b], d = a.oClasses, e = h(b.nTh); if (!b.sWidthOrig) { b.sWidthOrig = e.attr("width") || null; var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/); f && (b.sWidthOrig = f[1]) } c !== k && null !== c && (eb(c), I(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
            var g = b.mData, i = P(g), j = b.mRender ? P(b.mRender) : null, c = function (a) { return "string" === typeof a && -1 !== a.indexOf("@") }; b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter)); b.fnGetData = function (a, b, c) { var d = i(a, b, k, c); return j && b ? j(d, b, a, c) : d }; b.fnSetData = function (a, b, c) { return Q(g)(a, b, c) }; "number" !== typeof g && (a._rowReadObject = !0); a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone)); a = -1 !== h.inArray("asc", b.asSorting); c = -1 !== h.inArray("desc", b.asSorting); !b.bSortable || !a && !c ?
            (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
        } function Y(a) { if (!1 !== a.oFeatures.bAutoWidth) { var b = a.aoColumns; Ha(a); for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth } b = a.oScroll; ("" !== b.sY || "" !== b.sX) && Z(a); w(a, null, "column-sizing", [a]) } function $(a, b) {
            var c =
            aa(a, "bVisible"); return "number" === typeof c[b] ? c[b] : null
        } function ba(a, b) { var c = aa(a, "bVisible"), c = h.inArray(b, c); return -1 !== c ? c : null } function ca(a) { return aa(a, "bVisible").length } function aa(a, b) { var c = []; h.map(a.aoColumns, function (a, e) { a[b] && c.push(e) }); return c } function Ia(a) {
            var b = a.aoColumns, c = a.aoData, d = m.ext.type.detect, e, f, g, i, j, h, l, r, q; e = 0; for (f = b.length; e < f; e++) if (l = b[e], q = [], !l.sType && l._sManualType) l.sType = l._sManualType; else if (!l.sType) {
                g = 0; for (i = d.length; g < i; g++) {
                    j = 0; for (h = c.length; j <
                    h; j++) { q[j] === k && (q[j] = B(a, j, e, "type")); r = d[g](q[j], a); if (!r && g !== d.length - 1) break; if ("html" === r) break } if (r) { l.sType = r; break }
                } l.sType || (l.sType = "string")
            }
        } function hb(a, b, c, d) {
            var e, f, g, i, j, n, l = a.aoColumns; if (b) for (e = b.length - 1; 0 <= e; e--) {
                n = b[e]; var r = n.targets !== k ? n.targets : n.aTargets; h.isArray(r) || (r = [r]); f = 0; for (g = r.length; f < g; f++) if ("number" === typeof r[f] && 0 <= r[f]) { for (; l.length <= r[f];) Ga(a); d(r[f], n) } else if ("number" === typeof r[f] && 0 > r[f]) d(l.length + r[f], n); else if ("string" === typeof r[f]) {
                    i = 0;
                    for (j = l.length; i < j; i++) ("_all" == r[f] || h(l[i].nTh).hasClass(r[f])) && d(i, n)
                }
            } if (c) { e = 0; for (a = c.length; e < a; e++) d(e, c[e]) }
        } function L(a, b, c, d) { var e = a.aoData.length, f = h.extend(!0, {}, m.models.oRow, { src: c ? "dom" : "data", idx: e }); f._aData = b; a.aoData.push(f); for (var g = a.aoColumns, i = 0, j = g.length; i < j; i++) g[i].sType = null; a.aiDisplayMaster.push(e); b = a.rowIdFn(b); b !== k && (a.aIds[b] = f); (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d); return e } function ma(a, b) {
            var c; b instanceof h || (b = h(b)); return b.map(function (b, e) {
                c =
                Ka(a, e); return L(a, c.data, e, c.cells)
            })
        } function B(a, b, c, d) { var e = a.iDraw, f = a.aoColumns[c], g = a.aoData[b]._aData, i = f.sDefaultContent, c = f.fnGetData(g, d, { settings: a, row: b, col: c }); if (c === k) return a.iDrawError != e && null === i && (J(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b, 4), a.iDrawError = e), i; if ((c === g || null === c) && null !== i) c = i; else if ("function" === typeof c) return c.call(g); return null === c && "display" == d ? "" : c } function ib(a, b, c, d) {
            a.aoColumns[c].fnSetData(a.aoData[b]._aData,
            d, { settings: a, row: b, col: c })
        } function La(a) { return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) { return a.replace(/\\./g, ".") }) } function P(a) {
            if (h.isPlainObject(a)) { var b = {}; h.each(a, function (a, c) { c && (b[a] = P(c)) }); return function (a, c, f, g) { var i = b[c] || b._; return i !== k ? i(a, c, f, g) : a } } if (null === a) return function (a) { return a }; if ("function" === typeof a) return function (b, c, f, g) { return a(b, c, f, g) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var c = function (a, b,
                f) { var g, i; if ("" !== f) { i = La(f); for (var j = 0, n = i.length; j < n; j++) { f = i[j].match(da); g = i[j].match(U); if (f) { i[j] = i[j].replace(da, ""); "" !== i[j] && (a = a[i[j]]); g = []; i.splice(0, j + 1); i = i.join("."); if (h.isArray(a)) { j = 0; for (n = a.length; j < n; j++) g.push(c(a[j], b, i)) } a = f[0].substring(1, f[0].length - 1); a = "" === a ? g : g.join(a); break } else if (g) { i[j] = i[j].replace(U, ""); a = a[i[j]](); continue } if (null === a || a[i[j]] === k) return k; a = a[i[j]] } } return a }; return function (b, e) { return c(b, e, a) }
            } return function (b) { return b[a] }
        } function Q(a) {
            if (h.isPlainObject(a)) return Q(a._);
            if (null === a) return function () { }; if ("function" === typeof a) return function (b, d, e) { a(b, "set", d, e) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var b = function (a, d, e) {
                    var e = La(e), f; f = e[e.length - 1]; for (var g, i, j = 0, n = e.length - 1; j < n; j++) {
                        g = e[j].match(da); i = e[j].match(U); if (g) { e[j] = e[j].replace(da, ""); a[e[j]] = []; f = e.slice(); f.splice(0, j + 1); g = f.join("."); if (h.isArray(d)) { i = 0; for (n = d.length; i < n; i++) f = {}, b(f, d[i], g), a[e[j]].push(f) } else a[e[j]] = d; return } i && (e[j] = e[j].replace(U,
                        ""), a = a[e[j]](d)); if (null === a[e[j]] || a[e[j]] === k) a[e[j]] = {}; a = a[e[j]]
                    } if (f.match(U)) a[f.replace(U, "")](d); else a[f.replace(da, "")] = d
                }; return function (c, d) { return b(c, d, a) }
            } return function (b, d) { b[a] = d }
        } function Ma(a) { return D(a.aoData, "_aData") } function na(a) { a.aoData.length = 0; a.aiDisplayMaster.length = 0; a.aiDisplay.length = 0; a.aIds = {} } function oa(a, b, c) { for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; -1 != d && c === k && a.splice(d, 1) } function ea(a, b, c, d) {
            var e = a.aoData[b], f, g = function (c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = B(a, b, d, "display")
            }; if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data; else { var i = e.anCells; if (i) if (d !== k) g(i[d], d); else { c = 0; for (f = i.length; c < f; c++) g(i[c], c) } } e._aSortData = null; e._aFilterData = null; g = a.aoColumns; if (d !== k) g[d].sType = null; else { c = 0; for (f = g.length; c < f; c++) g[c].sType = null; Na(a, e) }
        } function Ka(a, b, c, d) {
            var e = [], f = b.firstChild, g, i, j = 0, n, l = a.aoColumns, r = a._rowReadObject, d = d !== k ? d : r ? {} : [], q = function (a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@");
                    -1 !== c && (c = a.substring(c + 1), Q(a)(d, b.getAttribute(c)))
                }
            }, jb = function (a) { if (c === k || c === j) i = l[j], n = h.trim(a.innerHTML), i && i._bAttrSrc ? (Q(i.mData._)(d, n), q(i.mData.sort, a), q(i.mData.type, a), q(i.mData.filter, a)) : r ? (i._setter || (i._setter = Q(i.mData)), i._setter(d, n)) : d[j] = n; j++ }; if (f) for (; f;) { g = f.nodeName.toUpperCase(); if ("TD" == g || "TH" == g) jb(f), e.push(f); f = f.nextSibling } else { e = b.anCells; g = 0; for (var o = e.length; g < o; g++) jb(e[g]) } if (b = f ? b : b.nTr) (b = b.getAttribute("id")) && Q(a.rowId)(d, b); return { data: d, cells: e }
        }
        function Ja(a, b, c, d) {
            var e = a.aoData[b], f = e._aData, g = [], i, j, h, l, r; if (null === e.nTr) {
                i = c || T.createElement("tr"); e.nTr = i; e.anCells = g; i._DT_RowIndex = b; Na(a, e); l = 0; for (r = a.aoColumns.length; l < r; l++) { h = a.aoColumns[l]; j = c ? d[l] : T.createElement(h.sCellType); g.push(j); if (!c || h.mRender || h.mData !== l) j.innerHTML = B(a, b, l, "display"); h.sClass && (j.className += " " + h.sClass); h.bVisible && !c ? i.appendChild(j) : !h.bVisible && c && j.parentNode.removeChild(j); h.fnCreatedCell && h.fnCreatedCell.call(a.oInstance, j, B(a, b, l), f, b, l) } w(a,
                "aoRowCreatedCallback", null, [i, f, b])
            } e.nTr.setAttribute("role", "row")
        } function Na(a, b) { var c = b.nTr, d = b._aData; if (c) { var e = a.rowIdFn(d); e && (c.id = e); d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? pa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass)); d.DT_RowAttr && h(c).attr(d.DT_RowAttr); d.DT_RowData && h(c).data(d.DT_RowData) } } function kb(a) {
            var b, c, d, e, f, g = a.nTHead, i = a.nTFoot, j = 0 === h("th, td", g).length, n = a.oClasses, l = a.aoColumns; j && (e = h("<tr/>").appendTo(g));
            b = 0; for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), j && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, n); j && fa(a.aoHeader, g); h(g).find(">tr").attr("role", "row"); h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH); h(i).find(">tr>th, >tr>td").addClass(n.sFooterTH); if (null !== i) {
                a = a.aoFooter[0]; b = 0; for (c = a.length; b <
                c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
            }
        } function ga(a, b, c) {
            var d, e, f, g = [], i = [], j = a.aoColumns.length, n; if (b) {
                c === k && (c = !1); d = 0; for (e = b.length; d < e; d++) { g[d] = b[d].slice(); g[d].nTr = b[d].nTr; for (f = j - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1); i.push([]) } d = 0; for (e = g.length; d < e; d++) {
                    if (a = g[d].nTr) for (; f = a.firstChild;) a.removeChild(f); f = 0; for (b = g[d].length; f < b; f++) if (n = j = 1, i[d][f] === k) {
                        a.appendChild(g[d][f].cell); for (i[d][f] = 1; g[d + j] !== k && g[d][f].cell == g[d + j][f].cell;) i[d +
                        j][f] = 1, j++; for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) { for (c = 0; c < j; c++) i[d + c][f + n] = 1; n++ } h(g[d][f].cell).attr("rowspan", j).attr("colspan", n)
                    }
                }
            }
        } function M(a) {
            var b = w(a, "aoPreDrawCallback", "preDraw", [a]); if (-1 !== h.inArray(!1, b)) C(a, !1); else {
                var b = [], c = 0, d = a.asStripeClasses, e = d.length, f = a.oLanguage, g = a.iInitDisplayStart, i = "ssp" == y(a), j = a.aiDisplay; a.bDrawing = !0; g !== k && -1 !== g && (a._iDisplayStart = i ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1); var g = a._iDisplayStart, n = a.fnDisplayEnd();
                if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1); else if (i) { if (!a.bDestroying && !lb(a)) return } else a.iDraw++; if (0 !== j.length) { f = i ? a.aoData.length : n; for (i = i ? 0 : g; i < f; i++) { var l = j[i], r = a.aoData[l]; null === r.nTr && Ja(a, l); l = r.nTr; if (0 !== e) { var q = d[c % e]; r._sRowStripe != q && (h(l).removeClass(r._sRowStripe).addClass(q), r._sRowStripe = q) } w(a, "aoRowCallback", null, [l, r._aData, c, i]); b.push(l); c++ } } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable),
                b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: ca(a), "class": a.oClasses.sRowEmpty }).html(c))[0]; w(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, n, j]); w(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, n, j]); d = h(a.nTBody); d.children().detach(); d.append(h(b)); w(a, "aoDrawCallback", "draw", [a]); a.bSorted = !1; a.bFiltered = !1; a.bDrawing = !1
            }
        } function R(a, b) {
            var c = a.oFeatures, d = c.bFilter; c.bSort && mb(a); d ? ha(a, a.oPreviousSearch) : a.aiDisplay =
            a.aiDisplayMaster.slice(); !0 !== b && (a._iDisplayStart = 0); a._drawHold = b; M(a); a._drawHold = !1
        } function nb(a) {
            var b = a.oClasses, c = h(a.nTable), c = h("<div/>").insertBefore(c), d = a.oFeatures, e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) }); a.nHolding = c[0]; a.nTableWrapper = e[0]; a.nTableReinsertBefore = a.nTable.nextSibling; for (var f = a.sDom.split(""), g, i, j, n, l, r, q = 0; q < f.length; q++) {
                g = null; i = f[q]; if ("<" == i) {
                    j = h("<div/>")[0]; n = f[q + 1]; if ("'" == n || '"' == n) {
                        l = ""; for (r = 2; f[q + r] != n;) l +=
                        f[q + r], r++; "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); -1 != l.indexOf(".") ? (n = l.split("."), j.id = n[0].substr(1, n[0].length - 1), j.className = n[1]) : "#" == l.charAt(0) ? j.id = l.substr(1, l.length - 1) : j.className = l; q += r
                    } e.append(j); e = h(j)
                } else if (">" == i) e = e.parent(); else if ("l" == i && d.bPaginate && d.bLengthChange) g = ob(a); else if ("f" == i && d.bFilter) g = pb(a); else if ("r" == i && d.bProcessing) g = qb(a); else if ("t" == i) g = rb(a); else if ("i" == i && d.bInfo) g = sb(a); else if ("p" == i && d.bPaginate) g = tb(a); else if (0 !== m.ext.feature.length) {
                    j =
                    m.ext.feature; r = 0; for (n = j.length; r < n; r++) if (i == j[r].cFeature) { g = j[r].fnInit(a); break }
                } g && (j = a.aanFeatures, j[i] || (j[i] = []), j[i].push(g), e.append(g))
            } c.replaceWith(e); a.nHolding = null
        } function fa(a, b) {
            var c = h(b).children("tr"), d, e, f, g, i, j, n, l, r, q; a.splice(0, a.length); f = 0; for (j = c.length; f < j; f++) a.push([]); f = 0; for (j = c.length; f < j; f++) {
                d = c[f]; for (e = d.firstChild; e;) {
                    if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                        l = 1 * e.getAttribute("colspan"); r = 1 * e.getAttribute("rowspan"); l = !l || 0 === l ||
                        1 === l ? 1 : l; r = !r || 0 === r || 1 === r ? 1 : r; g = 0; for (i = a[f]; i[g];) g++; n = g; q = 1 === l ? !0 : !1; for (i = 0; i < l; i++) for (g = 0; g < r; g++) a[f + g][n + i] = { cell: e, unique: q }, a[f + g].nTr = d
                    } e = e.nextSibling
                }
            }
        } function qa(a, b, c) { var d = []; c || (c = a.aoHeader, b && (c = [], fa(c, b))); for (var b = 0, e = c.length; b < e; b++) for (var f = 0, g = c[b].length; f < g; f++) if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell; return d } function ra(a, b, c) {
            w(a, "aoServerParams", "serverParams", [b]); if (b && h.isArray(b)) {
                var d = {}, e = /(.*?)\[\]$/; h.each(b, function (a, b) {
                    var c =
                    b.name.match(e); c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
                }); b = d
            } var f, g = a.ajax, i = a.oInstance, j = function (b) { w(a, null, "xhr", [a, b, a.jqXHR]); c(b) }; if (h.isPlainObject(g) && g.data) { f = g.data; var n = h.isFunction(f) ? f(b, a) : f, b = h.isFunction(f) && n ? n : h.extend(!0, b, n); delete g.data } n = {
                data: b, success: function (b) { var c = b.error || b.sError; c && J(a, 0, c); a.json = b; j(b) }, dataType: "json", cache: !1, type: a.sServerMethod, error: function (b, c) {
                    var d = w(a, null, "xhr", [a, null, a.jqXHR]); -1 === h.inArray(!0, d) && ("parsererror" ==
                    c ? J(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && J(a, 0, "Ajax error", 7)); C(a, !1)
                }
            }; a.oAjaxData = b; w(a, null, "preXhr", [a, b]); a.fnServerData ? a.fnServerData.call(i, a.sAjaxSource, h.map(b, function (a, b) { return { name: b, value: a } }), j, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, { url: g || a.sAjaxSource })) : h.isFunction(g) ? a.jqXHR = g.call(i, b, j, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
        } function lb(a) { return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ra(a, ub(a), function (b) { vb(a, b) }), !1) : !0 } function ub(a) {
            var b =
            a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, g, i = [], j, n, l, r = V(a); g = a._iDisplayStart; j = !1 !== d.bPaginate ? a._iDisplayLength : -1; var q = function (a, b) { i.push({ name: a, value: b }) }; q("sEcho", a.iDraw); q("iColumns", c); q("sColumns", D(b, "sName").join(",")); q("iDisplayStart", g); q("iDisplayLength", j); var k = { draw: a.iDraw, columns: [], order: [], start: g, length: j, search: { value: e.sSearch, regex: e.bRegex } }; for (g = 0; g < c; g++) n = b[g], l = f[g], j = "function" == typeof n.mData ? "function" : n.mData, k.columns.push({
                data: j,
                name: n.sName, searchable: n.bSearchable, orderable: n.bSortable, search: { value: l.sSearch, regex: l.bRegex }
            }), q("mDataProp_" + g, j), d.bFilter && (q("sSearch_" + g, l.sSearch), q("bRegex_" + g, l.bRegex), q("bSearchable_" + g, n.bSearchable)), d.bSort && q("bSortable_" + g, n.bSortable); d.bFilter && (q("sSearch", e.sSearch), q("bRegex", e.bRegex)); d.bSort && (h.each(r, function (a, b) { k.order.push({ column: b.col, dir: b.dir }); q("iSortCol_" + a, b.col); q("sSortDir_" + a, b.dir) }), q("iSortingCols", r.length)); b = m.ext.legacy.ajax; return null === b ? a.sAjaxSource ?
                i : k : b ? i : k
        } function vb(a, b) { var c = sa(a, b), d = b.sEcho !== k ? b.sEcho : b.draw, e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal, f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered; if (d) { if (1 * d < a.iDraw) return; a.iDraw = 1 * d } na(a); a._iRecordsTotal = parseInt(e, 10); a._iRecordsDisplay = parseInt(f, 10); d = 0; for (e = c.length; d < e; d++) L(a, c[d]); a.aiDisplay = a.aiDisplayMaster.slice(); a.bAjaxDataGet = !1; M(a); a._bInitComplete || ta(a, b); a.bAjaxDataGet = !0; C(a, !1) } function sa(a, b) {
            var c = h.isPlainObject(a.ajax) &&
            a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp; return "data" === c ? b.aaData || b[c] : "" !== c ? P(c)(b) : b
        } function pb(a) {
            var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, f = a.aanFeatures, g = '<input type="search" class="' + b.sFilterInput + '"/>', i = d.sSearch, i = i.match(/_INPUT_/) ? i.replace("_INPUT_", g) : i + g, b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(i)), f = function () {
                var b = !this.value ? "" : this.value; b != e.sSearch && (ha(a, {
                    sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart,
                    bCaseInsensitive: e.bCaseInsensitive
                }), a._iDisplayStart = 0, M(a))
            }, g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0, j = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", g ? ua(f, g) : f).bind("keypress.DT", function (a) { if (13 == a.keyCode) return !1 }).attr("aria-controls", c); h(a.nTable).on("search.dt.DT", function (b, c) { if (a === c) try { j[0] !== T.activeElement && j.val(e.sSearch) } catch (d) { } }); return b[0]
        } function ha(a, b, c) {
            var d = a.oPreviousSearch,
            e = a.aoPreSearchCols, f = function (a) { d.sSearch = a.sSearch; d.bRegex = a.bRegex; d.bSmart = a.bSmart; d.bCaseInsensitive = a.bCaseInsensitive }; Ia(a); if ("ssp" != y(a)) { wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive); f(b); for (b = 0; b < e.length; b++) xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive); yb(a) } else f(b); a.bFiltered = !0; w(a, null, "search", [a])
        } function yb(a) {
            for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f <
            g; f++) { for (var i = [], j = 0, n = c.length; j < n; j++) e = c[j], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, j) && i.push(e); c.length = 0; h.merge(c, i) }
        } function xb(a, b, c, d, e, f) { if ("" !== b) for (var g = a.aiDisplay, d = Qa(b, d, e, f), e = g.length - 1; 0 <= e; e--) b = a.aoData[g[e]]._aFilterData[c], d.test(b) || g.splice(e, 1) } function wb(a, b, c, d, e, f) {
            var d = Qa(b, d, e, f), e = a.oPreviousSearch.sSearch, f = a.aiDisplayMaster, g; 0 !== m.ext.search.length && (c = !0); g = zb(a); if (0 >= b.length) a.aiDisplay = f.slice(); else {
                if (g || c || e.length > b.length || 0 !== b.indexOf(e) ||
                a.bSorted) a.aiDisplay = f.slice(); b = a.aiDisplay; for (c = b.length - 1; 0 <= c; c--) d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
            }
        } function Qa(a, b, c, d) { a = b ? a : va(a); c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) { if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/), a = b ? b[1] : a; return a.replace('"', "") }).join(")(?=.*?") + ").*$"); return RegExp(a, d ? "i" : "") } function va(a) { return a.replace(Yb, "\\$1") } function zb(a) {
            var b = a.aoColumns, c, d, e, f, g, i, j, h, l = m.ext.type.search; c = !1; d = 0; for (f = a.aoData.length; d <
            f; d++) if (h = a.aoData[d], !h._aFilterData) { i = []; e = 0; for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (j = B(a, d, e, "filter"), l[c.sType] && (j = l[c.sType](j)), null === j && (j = ""), "string" !== typeof j && j.toString && (j = j.toString())) : j = "", j.indexOf && -1 !== j.indexOf("&") && (wa.innerHTML = j, j = Zb ? wa.textContent : wa.innerText), j.replace && (j = j.replace(/[\r\n]/g, "")), i.push(j); h._aFilterData = i; h._sFilterRow = i.join("  "); c = !0 } return c
        } function Ab(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } }
        function Bb(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } } function sb(a) { var b = a.sTableId, c = a.aanFeatures.i, d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null }); c || (a.aoDrawCallback.push({ fn: Cb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info")); return d[0] } function Cb(a) {
            var b = a.aanFeatures.i; if (0 !== b.length) {
                var c = a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(), i = g ? c.sInfo : c.sInfoEmpty; g !== f && (i += " " + c.sInfoFiltered); i += c.sInfoPostFix; i = Db(a, i); c = c.fnInfoCallback; null !== c && (i = c.call(a.oInstance, a, d, e, f, g, i)); h(b).html(i)
            }
        } function Db(a, b) {
            var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), g = -1 === e; return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d /
            e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
        } function ia(a) {
            var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f; c = a.oFeatures; var g = a.bDeferLoading; if (a.bInitialised) {
                nb(a); kb(a); ga(a, a.aoHeader); ga(a, a.aoFooter); C(a, !0); c.bAutoWidth && Ha(a); b = 0; for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = u(f.sWidth)); w(a, null, "preInit", [a]); R(a); e = y(a); if ("ssp" != e || g) "ajax" == e ? ra(a, [], function (c) { var f = sa(a, c); for (b = 0; b < f.length; b++) L(a, f[b]); a.iInitDisplayStart = d; R(a); C(a, !1); ta(a, c) }, a) : (C(a, !1),
                ta(a))
            } else setTimeout(function () { ia(a) }, 200)
        } function ta(a, b) { a._bInitComplete = !0; (b || a.oInit.aaData) && Y(a); w(a, "aoInitComplete", "init", [a, b]) } function Ra(a, b) { var c = parseInt(b, 10); a._iDisplayLength = c; Sa(a); w(a, null, "length", [a, c]) } function ob(a) {
            for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, i = f.length; g < i; g++) e[0][g] = new Option(d[g], f[g]); var j = h("<div><label/></div>").addClass(b.sLength);
            a.aanFeatures.l || (j[0].id = c + "_length"); j.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)); h("select", j).val(a._iDisplayLength).bind("change.DT", function () { Ra(a, h(this).val()); M(a) }); h(a.nTable).bind("length.dt.DT", function (b, c, d) { a === c && h("select", j).val(d) }); return j[0]
        } function tb(a) {
            var b = a.sPaginationType, c = m.ext.pager[b], d = "function" === typeof c, e = function (a) { M(a) }, b = h("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures; d || c.fnInit(a, b, e); f.p || (b.id = a.sTableId +
            "_paginate", a.aoDrawCallback.push({ fn: function (a) { if (d) { var b = a._iDisplayStart, j = a._iDisplayLength, h = a.fnRecordsDisplay(), l = -1 === j, b = l ? 0 : Math.ceil(b / j), j = l ? 1 : Math.ceil(h / j), h = c(b, j), k, l = 0; for (k = f.p.length; l < k; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, j) } else c.fnUpdate(a, e) }, sName: "pagination" })); return b
        } function Ta(a, b, c) {
            var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay(); 0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" ==
            b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : J(a, 0, "Unknown paging action: " + b, 5); b = a._iDisplayStart !== d; a._iDisplayStart = d; b && (w(a, null, "page", [a]), c && M(a)); return b
        } function qb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] } function C(a, b) { a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none"); w(a, null, "processing", [a, b]) } function rb(a) {
            var b = h(a.nTable); b.attr("role",
            "grid"); var c = a.oScroll; if ("" === c.sX && "" === c.sY) return a.nTable; var d = c.sX, e = c.sY, f = a.oClasses, g = b.children("caption"), i = g.length ? g[0]._captionSide : null, j = h(b[0].cloneNode(!1)), n = h(b[0].cloneNode(!1)), l = b.children("tfoot"); c.sX && "100%" === b.attr("width") && b.removeAttr("width"); l.length || (l = null); j = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: d ? !d ? null : u(d) : "100%" }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({
                "box-sizing": "content-box",
                width: c.sXInner || "100%"
            }).append(j.removeAttr("id").css("margin-left", 0).append("top" === i ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : u(d) }).append(b)); l && j.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : u(d) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === i ? g : null).append(b.children("tfoot")))));
            var b = j.children(), k = b[0], f = b[1], q = l ? b[2] : null; if (d) h(f).on("scroll.DT", function () { var a = this.scrollLeft; k.scrollLeft = a; l && (q.scrollLeft = a) }); h(f).css(e && c.bCollapse ? "max-height" : "height", e); a.nScrollHead = k; a.nScrollBody = f; a.nScrollFoot = q; a.aoDrawCallback.push({ fn: Z, sName: "scrolling" }); return j[0]
        } function Z(a) {
            var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, b = b.iBarWidth, f = h(a.nScrollHead), g = f[0].style, i = f.children("div"), j = i[0].style, n = i.children("table"), i = a.nScrollBody, l = h(i), k = i.style, q = h(a.nScrollFoot).children("div"),
            m = q.children("table"), o = h(a.nTHead), E = h(a.nTable), p = E[0], t = p.style, N = a.nTFoot ? h(a.nTFoot) : null, Eb = a.oBrowser, w = Eb.bScrollOversize, s, v, O, x, y = [], z = [], A = [], B, C = function (a) { a = a.style; a.paddingTop = "0"; a.paddingBottom = "0"; a.borderTopWidth = "0"; a.borderBottomWidth = "0"; a.height = 0 }; E.children("thead, tfoot").remove(); x = o.clone().prependTo(E); o = o.find("tr"); v = x.find("tr"); x.find("th, td").removeAttr("tabindex"); N && (O = N.clone().prependTo(E), s = N.find("tr"), O = O.find("tr")); c || (k.width = "100%", f[0].style.width = "100%");
            h.each(qa(a, x), function (b, c) { B = $(a, b); c.style.width = a.aoColumns[B].sWidth }); N && H(function (a) { a.style.width = "" }, O); f = E.outerWidth(); if ("" === c) { t.width = "100%"; if (w && (E.find("tbody").height() > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(E.outerWidth() - b); f = E.outerWidth() } else "" !== d && (t.width = u(d), f = E.outerWidth()); H(C, v); H(function (a) { A.push(a.innerHTML); y.push(u(h(a).css("width"))) }, v); H(function (a, b) { a.style.width = y[b] }, o); h(v).height(0); N && (H(C, O), H(function (a) { z.push(u(h(a).css("width"))) },
            O), H(function (a, b) { a.style.width = z[b] }, s), h(O).height(0)); H(function (a, b) { a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>"; a.style.width = y[b] }, v); N && H(function (a, b) { a.innerHTML = ""; a.style.width = z[b] }, O); if (E.outerWidth() < f) { s = i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f; if (w && (i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(s - b); ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6) } else s = "100%"; k.width =
            u(s); g.width = u(s); N && (a.nScrollFoot.style.width = u(s)); !e && w && (k.height = u(p.offsetHeight + b)); c = E.outerWidth(); n[0].style.width = u(c); j.width = u(c); d = E.height() > i.clientHeight || "scroll" == l.css("overflow-y"); e = "padding" + (Eb.bScrollbarLeft ? "Left" : "Right"); j[e] = d ? b + "px" : "0px"; N && (m[0].style.width = u(c), q[0].style.width = u(c), q[0].style[e] = d ? b + "px" : "0px"); l.scroll(); if ((a.bSorted || a.bFiltered) && !a._drawHold) i.scrollTop = 0
        } function H(a, b, c) {
            for (var d = 0, e = 0, f = b.length, g, i; e < f;) {
                g = b[e].firstChild; for (i = c ? c[e].firstChild :
                null; g;) 1 === g.nodeType && (c ? a(g, i, d) : a(g, d), d++), g = g.nextSibling, i = c ? i.nextSibling : null; e++
            }
        } function Ha(a) {
            var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, f = d.sX, g = d.sXInner, i = c.length, j = aa(a, "bVisible"), n = h("th", a.nTHead), l = b.getAttribute("width"), k = b.parentNode, q = !1, m, o, p; p = a.oBrowser; d = p.bScrollOversize; (m = b.style.width) && -1 !== m.indexOf("%") && (l = m); for (m = 0; m < j.length; m++) o = c[j[m]], null !== o.sWidth && (o.sWidth = Fb(o.sWidthOrig, k), q = !0); if (d || !q && !f && !e && i == ca(a) && i == n.length) for (m = 0; m < i; m++) {
                if (j =
                $(a, m)) c[j].sWidth = u(n.eq(m).width())
            } else {
                i = h(b).clone().css("visibility", "hidden").removeAttr("id"); i.find("tbody tr").remove(); var t = h("<tr/>").appendTo(i.find("tbody")); i.find("thead, tfoot").remove(); i.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone()); i.find("tfoot th, tfoot td").css("width", ""); n = qa(a, i.find("thead")[0]); for (m = 0; m < j.length; m++) o = c[j[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? u(o.sWidthOrig) : ""; if (a.aoData.length) for (m = 0; m < j.length; m++) q = j[m], o = c[q], h(Gb(a,
                q)).clone(!1).append(o.sContentPadding).appendTo(t); q = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(i).appendTo(k); f && g ? i.width(g) : f ? (i.css("width", "auto"), i.width() < k.clientWidth && i.width(k.clientWidth)) : e ? i.width(k.clientWidth) : l && i.width(l); if (f) {
                    for (m = g = 0; m < j.length; m++) o = c[j[m]], e = p.bBounding ? n[m].getBoundingClientRect().width : h(n[m]).outerWidth(), g += null === o.sWidthOrig ? e : parseInt(o.sWidth, 10) + e - h(n[m]).width(); i.width(u(g)); b.style.width =
                    u(g)
                } for (m = 0; m < j.length; m++) if (o = c[j[m]], p = h(n[m]).width()) o.sWidth = u(p); b.style.width = u(i.css("width")); q.remove()
            } l && (b.style.width = u(l)); if ((l || f) && !a._reszEvt) b = function () { h(Fa).bind("resize.DT-" + a.sInstance, ua(function () { Y(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
        } function ua(a, b) { var c = b !== k ? b : 200, d, e; return function () { var b = this, g = +new Date, i = arguments; d && g < d + c ? (clearTimeout(e), e = setTimeout(function () { d = k; a.apply(b, i) }, c)) : (d = g, a.apply(b, i)) } } function Fb(a, b) {
            if (!a) return 0; var c = h("<div/>").css("width",
            u(a)).appendTo(b || T.body), d = c[0].offsetWidth; c.remove(); return d
        } function Gb(a, b) { var c = Hb(a, b); if (0 > c) return null; var d = a.aoData[c]; return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b] } function Hb(a, b) { for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace($b, ""), c.length > d && (d = c.length, e = f); return e } function u(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a } function V(a) {
            var b, c, d = [], e = a.aoColumns, f, g, i, j; b = a.aaSortingFixed;
            c = h.isPlainObject(b); var n = []; f = function (a) { a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a) }; h.isArray(b) && f(b); c && b.pre && f(b.pre); f(a.aaSorting); c && b.post && f(b.post); for (a = 0; a < n.length; a++) { j = n[a][0]; f = e[j].aDataSort; b = 0; for (c = f.length; b < c; b++) g = f[b], i = e[g].sType || "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({ src: j, col: g, dir: n[a][1], index: n[a]._idx, type: i, formatter: m.ext.type.order[i + "-pre"] }) } return d
        } function mb(a) {
            var b, c, d = [], e = m.ext.type.order, f = a.aoData, g =
            0, i, j = a.aiDisplayMaster, h; Ia(a); h = V(a); b = 0; for (c = h.length; b < c; b++) i = h[b], i.formatter && g++, Ib(a, i.col); if ("ssp" != y(a) && 0 !== h.length) {
                b = 0; for (c = j.length; b < c; b++) d[j[b]] = b; g === h.length ? j.sort(function (a, b) { var c, e, g, i, j = h.length, k = f[a]._aSortData, m = f[b]._aSortData; for (g = 0; g < j; g++) if (i = h[g], c = k[i.col], e = m[i.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === i.dir ? c : -c; c = d[a]; e = d[b]; return c < e ? -1 : c > e ? 1 : 0 }) : j.sort(function (a, b) {
                    var c, g, i, j, k = h.length, m = f[a]._aSortData, p = f[b]._aSortData; for (i = 0; i < k; i++) if (j = h[i],
                    c = m[j.col], g = p[j.col], j = e[j.type + "-" + j.dir] || e["string-" + j.dir], c = j(c, g), 0 !== c) return c; c = d[a]; g = d[b]; return c < g ? -1 : c > g ? 1 : 0
                })
            } a.bSorted = !0
        } function Jb(a) {
            for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
                c = d[f]; var i = c.asSorting; b = c.sTitle.replace(/<.*?>/g, ""); var j = c.nTh; j.removeAttribute("aria-sort"); c.bSortable && (0 < e.length && e[0].col == f ? (j.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = i[e[0].index + 1] || i[0]) : c = i[0], b += "asc" === c ? a.sSortAscending :
                a.sSortDescending); j.setAttribute("aria-label", b)
            }
        } function Ua(a, b, c, d) {
            var e = a.aaSorting, f = a.aoColumns[b].asSorting, g = function (a, b) { var c = a._idx; c === k && (c = h.inArray(a[1], f)); return c + 1 < f.length ? c + 1 : b ? null : 0 }; "number" === typeof e[0] && (e = a.aaSorting = [e]); c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b],
            e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0); R(a); "function" == typeof d && d(a)
        } function Oa(a, b, c, d) { var e = a.aoColumns[c]; Va(b, {}, function (b) { !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () { Ua(a, c, b.shiftKey, d); "ssp" !== y(a) && C(a, !1) }, 0)) : Ua(a, c, b.shiftKey, d)) }) } function xa(a) {
            var b = a.aLastSort, c = a.oClasses.sSortColumn, d = V(a), e = a.oFeatures, f, g; if (e.bSort && e.bSortClasses) {
                e = 0; for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3)); e = 0;
                for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
            } a.aLastSort = d
        } function Ib(a, b) { var c = a.aoColumns[b], d = m.ext.order[c.sSortDataType], e; d && (e = d.call(a.oInstance, a, b, ba(a, b))); for (var f, g = m.ext.type.order[c.sType + "-pre"], i = 0, h = a.aoData.length; i < h; i++) if (c = a.aoData[i], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[i] : B(a, i, b, "sort"), c._aSortData[b] = g ? g(f) : f } function ya(a) {
            if (a.oFeatures.bStateSave && !a.bDestroying) {
                var b = {
                    time: +new Date, start: a._iDisplayStart,
                    length: a._iDisplayLength, order: h.extend(!0, [], a.aaSorting), search: Ab(a.oPreviousSearch), columns: h.map(a.aoColumns, function (b, d) { return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) } })
                }; w(a, "aoStateSaveParams", "stateSaveParams", [a, b]); a.oSavedState = b; a.fnStateSaveCallback.call(a.oInstance, a, b)
            }
        } function Kb(a) {
            var b, c, d = a.aoColumns; if (a.oFeatures.bStateSave) {
                var e = a.fnStateLoadCallback.call(a.oInstance, a); if (e && e.time && (b = w(a, "aoStateLoadParams", "stateLoadParams", [a, e]), -1 === h.inArray(!1, b) && (b =
                a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
                    a.oLoadedState = h.extend(!0, {}, e); e.start !== k && (a._iDisplayStart = e.start, a.iInitDisplayStart = e.start); e.length !== k && (a._iDisplayLength = e.length); e.order !== k && (a.aaSorting = [], h.each(e.order, function (b, c) { a.aaSorting.push(c[0] >= d.length ? [0, c[1]] : c) })); e.search !== k && h.extend(a.oPreviousSearch, Bb(e.search)); b = 0; for (c = e.columns.length; b < c; b++) {
                        var f = e.columns[b]; f.visible !== k && (d[b].bVisible = f.visible); f.search !== k && h.extend(a.aoPreSearchCols[b],
                        Bb(f.search))
                    } w(a, "aoStateLoaded", "stateLoaded", [a, e])
                }
            }
        } function za(a) { var b = m.settings, a = h.inArray(a, D(b, "nTable")); return -1 !== a ? b[a] : null } function J(a, b, c, d) {
            c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c; d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d); if (b) Fa.console && console.log && console.log(c); else if (b = m.ext, b = b.sErrMode || b.errMode, a && w(a, null, "error", [a, d, c]), "alert" == b) alert(c); else {
                if ("throw" == b) throw Error(c); "function" == typeof b &&
                b(a, d, c)
            }
        } function F(a, b, c, d) { h.isArray(c) ? h.each(c, function (c, d) { h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c])) } function Lb(a, b, c) { var d, e; for (e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d); return a } function Va(a, b, c) {
            h(a).bind("click.DT", b, function (b) { a.blur(); c(b) }).bind("keypress.DT", b, function (a) { 13 === a.which && (a.preventDefault(), c(a)) }).bind("selectstart.DT",
            function () { return !1 })
        } function z(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) } function w(a, b, c, d) { var e = []; b && (e = h.map(a[b].slice().reverse(), function (b) { return b.fn.apply(a.oInstance, d) })); null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result)); return e } function Sa(a) { var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength; b >= c && (b = c - d); b -= b % d; if (-1 === d || 0 > b) b = 0; a._iDisplayStart = b } function Pa(a, b) {
            var c = a.renderer, d = m.ext.renderer[b]; return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" ===
            typeof c ? d[c] || d._ : d._
        } function y(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" } function Aa(a, b) { var c = [], c = Mb.numbers_length, d = Math.floor(c / 2); b <= c ? c = W(0, b) : a <= d ? (c = W(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)); c.DT_el = "span"; return c } function cb(a) {
            h.each({
                num: function (b) { return Ba(b, a) }, "num-fmt": function (b) { return Ba(b, a, Wa) }, "html-num": function (b) {
                    return Ba(b,
                    a, Ca)
                }, "html-num-fmt": function (b) { return Ba(b, a, Ca, Wa) }
            }, function (b, c) { v.type.order[b + a + "-pre"] = c; b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html) })
        } function Nb(a) { return function () { var b = [za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return m.ext.internal[a].apply(this, b) } } var m, v, t, p, s, Xa = {}, Ob = /[\r\n]/g, Ca = /<.*?>/g, ac = /^[\w\+\-]/, bc = /[\w\+\-]$/, Yb = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), Wa = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
        K = function (a) { return !a || !0 === a || "-" === a ? !0 : !1 }, Pb = function (a) { var b = parseInt(a, 10); return !isNaN(b) && isFinite(a) ? b : null }, Qb = function (a, b) { Xa[b] || (Xa[b] = RegExp(va(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Xa[b], ".") : a }, Ya = function (a, b, c) { var d = "string" === typeof a; if (K(a)) return !0; b && d && (a = Qb(a, b)); c && d && (a = a.replace(Wa, "")); return !isNaN(parseFloat(a)) && isFinite(a) }, Rb = function (a, b, c) { return K(a) ? !0 : !(K(a) || "string" === typeof a) ? null : Ya(a.replace(Ca, ""), b, c) ? !0 : null }, D = function (a,
        b, c) { var d = [], e = 0, f = a.length; if (c !== k) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e < f; e++) a[e] && d.push(a[e][b]); return d }, ja = function (a, b, c, d) { var e = [], f = 0, g = b.length; if (d !== k) for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]); else for (; f < g; f++) e.push(a[b[f]][c]); return e }, W = function (a, b) { var c = [], d; b === k ? (b = 0, d = a) : (d = b, b = a); for (var e = b; e < d; e++) c.push(e); return c }, Sb = function (a) { for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]); return b }, pa = function (a) {
            var b = [], c, d, e = a.length, f, g = 0;
            d = 0; a: for (; d < e; d++) { c = a[d]; for (f = 0; f < g; f++) if (b[f] === c) continue a; b.push(c); g++ } return b
        }, A = function (a, b, c) { a[b] !== k && (a[c] = a[b]) }, da = /\[.*?\]$/, U = /\(\)$/, wa = h("<div>")[0], Zb = wa.textContent !== k, $b = /<.*?>/g; m = function (a) {
            this.$ = function (a, b) { return this.api(!0).$(a, b) }; this._ = function (a, b) { return this.api(!0).rows(a, b).data() }; this.api = function (a) { return a ? new t(za(this[v.iApiIndex])) : new t(this) }; this.fnAddData = function (a, b) {
                var c = this.api(!0), d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ?
                c.rows.add(a) : c.row.add(a); (b === k || b) && c.draw(); return d.flatten().toArray()
            }; this.fnAdjustColumnSizing = function (a) { var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll; a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && Z(c) }; this.fnClearTable = function (a) { var b = this.api(!0).clear(); (a === k || a) && b.draw() }; this.fnClose = function (a) { this.api(!0).row(a).child.hide() }; this.fnDeleteRow = function (a, b, c) {
                var d = this.api(!0), a = d.rows(a), e = a.settings()[0], h = e.aoData[a[0][0]]; a.remove(); b && b.call(this, e, h);
                (c === k || c) && d.draw(); return h
            }; this.fnDestroy = function (a) { this.api(!0).destroy(a) }; this.fnDraw = function (a) { this.api(!0).draw(a) }; this.fnFilter = function (a, b, c, d, e, h) { e = this.api(!0); null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h); e.draw() }; this.fnGetData = function (a, b) { var c = this.api(!0); if (a !== k) { var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null } return c.data().toArray() }; this.fnGetNodes = function (a) {
                var b = this.api(!0);
                return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            }; this.fnGetPosition = function (a) { var b = this.api(!0), c = a.nodeName.toUpperCase(); return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null }; this.fnIsOpen = function (a) { return this.api(!0).row(a).child.isShown() }; this.fnOpen = function (a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] }; this.fnPageChange = function (a, b) { var c = this.api(!0).page(a); (b === k || b) && c.draw(!1) }; this.fnSetColumnVis =
            function (a, b, c) { a = this.api(!0).column(a).visible(b); (c === k || c) && a.columns.adjust().draw() }; this.fnSettings = function () { return za(this[v.iApiIndex]) }; this.fnSort = function (a) { this.api(!0).order(a).draw() }; this.fnSortListener = function (a, b, c) { this.api(!0).order.listener(a, b, c) }; this.fnUpdate = function (a, b, c, d, e) { var h = this.api(!0); c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a); (e === k || e) && h.columns.adjust(); (d === k || d) && h.draw(); return 0 }; this.fnVersionCheck = v.fnVersionCheck; var b = this, c = a === k, d = this.length;
            c && (a = {}); this.oApi = this.internal = v.internal; for (var e in m.ext.internal) e && (this[e] = Nb(e)); this.each(function () {
                var e = {}, e = 1 < d ? Lb(e, a, !0) : a, g = 0, i, j = this.getAttribute("id"), n = !1, l = m.defaults, r = h(this); if ("table" != this.nodeName.toLowerCase()) J(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else {
                    db(l); eb(l.column); I(l, l, !0); I(l.column, l.column, !0); I(l, h.extend(e, r.data())); var q = m.settings, g = 0; for (i = q.length; g < i; g++) {
                        var p = q[g]; if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot &&
                        p.nTFoot.parentNode == this) { g = e.bRetrieve !== k ? e.bRetrieve : l.bRetrieve; if (c || g) return p.oInstance; if (e.bDestroy !== k ? e.bDestroy : l.bDestroy) { p.oInstance.fnDestroy(); break } else { J(p, 0, "Cannot reinitialise DataTable", 3); return } } if (p.sTableId == this.id) { q.splice(g, 1); break }
                    } if (null === j || "" === j) this.id = j = "DataTables_Table_" + m.ext._unique++; var o = h.extend(!0, {}, m.models.oSettings, { sDestroyWidth: r[0].style.width, sInstance: j, sTableId: j }); o.nTable = this; o.oApi = b.internal; o.oInit = e; q.push(o); o.oInstance = 1 === b.length ?
                        b : r.dataTable(); db(e); e.oLanguage && S(e.oLanguage); e.aLengthMenu && !e.iDisplayLength && (e.iDisplayLength = h.isArray(e.aLengthMenu[0]) ? e.aLengthMenu[0][0] : e.aLengthMenu[0]); e = Lb(h.extend(!0, {}, l), e); F(o.oFeatures, e, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")); F(o, e, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp",
                        "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]); F(o.oScroll, e, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]); F(o.oLanguage, e, "fnInfoCallback"); z(o, "aoDrawCallback", e.fnDrawCallback, "user"); z(o, "aoServerParams",
                        e.fnServerParams, "user"); z(o, "aoStateSaveParams", e.fnStateSaveParams, "user"); z(o, "aoStateLoadParams", e.fnStateLoadParams, "user"); z(o, "aoStateLoaded", e.fnStateLoaded, "user"); z(o, "aoRowCallback", e.fnRowCallback, "user"); z(o, "aoRowCreatedCallback", e.fnCreatedRow, "user"); z(o, "aoHeaderCallback", e.fnHeaderCallback, "user"); z(o, "aoFooterCallback", e.fnFooterCallback, "user"); z(o, "aoInitComplete", e.fnInitComplete, "user"); z(o, "aoPreDrawCallback", e.fnPreDrawCallback, "user"); o.rowIdFn = P(e.rowId); fb(o); j = o.oClasses;
                    e.bJQueryUI ? (h.extend(j, m.ext.oJUIClasses, e.oClasses), e.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) && !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : h.extend(j, m.ext.classes, e.oClasses); r.addClass(j.sTable); o.iInitDisplayStart === k && (o.iInitDisplayStart = e.iDisplayStart, o._iDisplayStart = e.iDisplayStart); null !== e.iDeferLoading && (o.bDeferLoading = !0, g = h.isArray(e.iDeferLoading), o._iRecordsDisplay = g ? e.iDeferLoading[0] : e.iDeferLoading,
                    o._iRecordsTotal = g ? e.iDeferLoading[1] : e.iDeferLoading); var t = o.oLanguage; h.extend(!0, t, e.oLanguage); "" !== t.sUrl && (h.ajax({ dataType: "json", url: t.sUrl, success: function (a) { S(a); I(l.oLanguage, a); h.extend(true, t, a); ia(o) }, error: function () { ia(o) } }), n = !0); null === e.asStripeClasses && (o.asStripeClasses = [j.sStripeOdd, j.sStripeEven]); var g = o.asStripeClasses, s = r.children("tbody").find("tr").eq(0); -1 !== h.inArray(!0, h.map(g, function (a) { return s.hasClass(a) })) && (h("tbody tr", this).removeClass(g.join(" ")), o.asDestroyStripes =
                    g.slice()); q = []; g = this.getElementsByTagName("thead"); 0 !== g.length && (fa(o.aoHeader, g[0]), q = qa(o)); if (null === e.aoColumns) { p = []; g = 0; for (i = q.length; g < i; g++) p.push(null) } else p = e.aoColumns; g = 0; for (i = p.length; g < i; g++) Ga(o, q ? q[g] : null); hb(o, e.aoColumnDefs, p, function (a, b) { la(o, a, b) }); if (s.length) {
                        var u = function (a, b) { return a.getAttribute("data-" + b) !== null ? b : null }; h(s[0]).children("th, td").each(function (a, b) {
                            var c = o.aoColumns[a]; if (c.mData === a) {
                                var d = u(b, "sort") || u(b, "order"), e = u(b, "filter") || u(b, "search");
                                if (d !== null || e !== null) { c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k }; la(o, a) }
                            }
                        })
                    } var v = o.oFeatures; e.bStateSave && (v.bStateSave = !0, Kb(o, e), z(o, "aoDrawCallback", ya, "state_save")); if (e.aaSorting === k) { q = o.aaSorting; g = 0; for (i = q.length; g < i; g++) q[g][1] = o.aoColumns[g].asSorting[0] } xa(o); v.bSort && z(o, "aoDrawCallback", function () { if (o.bSorted) { var a = V(o), b = {}; h.each(a, function (a, c) { b[c.src] = c.dir }); w(o, null, "order", [o, a, b]); Jb(o) } }); z(o,
                    "aoDrawCallback", function () { (o.bSorted || y(o) === "ssp" || v.bDeferRender) && xa(o) }, "sc"); g = r.children("caption").each(function () { this._captionSide = r.css("caption-side") }); i = r.children("thead"); 0 === i.length && (i = h("<thead/>").appendTo(this)); o.nTHead = i[0]; i = r.children("tbody"); 0 === i.length && (i = h("<tbody/>").appendTo(this)); o.nTBody = i[0]; i = r.children("tfoot"); if (0 === i.length && 0 < g.length && ("" !== o.oScroll.sX || "" !== o.oScroll.sY)) i = h("<tfoot/>").appendTo(this); 0 === i.length || 0 === i.children().length ? r.addClass(j.sNoFooter) :
                    0 < i.length && (o.nTFoot = i[0], fa(o.aoFooter, o.nTFoot)); if (e.aaData) for (g = 0; g < e.aaData.length; g++) L(o, e.aaData[g]); else (o.bDeferLoading || "dom" == y(o)) && ma(o, h(o.nTBody).children("tr")); o.aiDisplay = o.aiDisplayMaster.slice(); o.bInitialised = !0; !1 === n && ia(o)
                }
            }); b = null; return this
        }; var Tb = [], x = Array.prototype, cc = function (a) {
            var b, c, d = m.settings, e = h.map(d, function (a) { return a.nTable }); if (a) {
                if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] :
                null; if (a && "function" === typeof a.settings) return a.settings().toArray(); "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
            } else return []; if (c) return c.map(function () { b = h.inArray(this, e); return -1 !== b ? d[b] : null }).toArray()
        }; t = function (a, b) { if (!(this instanceof t)) return new t(a, b); var c = [], d = function (a) { (a = cc(a)) && (c = c.concat(a)) }; if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]); else d(a); this.context = pa(c); b && h.merge(this, b); this.selector = { rows: null, cols: null, opts: null }; t.extend(this, this, Tb) };
        m.Api = t; h.extend(t.prototype, {
            any: function () { return 0 !== this.count() }, concat: x.concat, context: [], count: function () { return this.flatten().length }, each: function (a) { for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this); return this }, eq: function (a) { var b = this.context; return b.length > a ? new t(b[a], this[a]) : null }, filter: function (a) { var b = []; if (x.filter) b = x.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]); return new t(this.context, b) }, flatten: function () {
                var a =
                []; return new t(this.context, a.concat.apply(a, this.toArray()))
            }, join: x.join, indexOf: x.indexOf || function (a, b) { for (var c = b || 0, d = this.length; c < d; c++) if (this[c] === a) return c; return -1 }, iterator: function (a, b, c, d) {
                var e = [], f, g, h, j, n, l = this.context, m, q, p = this.selector; "string" === typeof a && (d = c, c = b, b = a, a = !1); g = 0; for (h = l.length; g < h; g++) {
                    var o = new t(l[g]); if ("table" === b) f = c.call(o, l[g], g), f !== k && e.push(f); else if ("columns" === b || "rows" === b) f = c.call(o, l[g], this[g], g), f !== k && e.push(f); else if ("column" === b || "column-rows" ===
                    b || "row" === b || "cell" === b) { q = this[g]; "column-rows" === b && (m = Da(l[g], p.opts)); j = 0; for (n = q.length; j < n; j++) f = q[j], f = "cell" === b ? c.call(o, l[g], f.row, f.column, g, j) : c.call(o, l[g], f, g, j, m), f !== k && e.push(f) }
                } return e.length || d ? (a = new t(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = p.rows, b.cols = p.cols, b.opts = p.opts, a) : this
            }, lastIndexOf: x.lastIndexOf || function (a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0, map: function (a) {
                var b = []; if (x.map) b = x.map.call(this, a, this); else for (var c =
                0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c)); return new t(this.context, b)
            }, pluck: function (a) { return this.map(function (b) { return b[a] }) }, pop: x.pop, push: x.push, reduce: x.reduce || function (a, b) { return gb(this, a, b, 0, this.length, 1) }, reduceRight: x.reduceRight || function (a, b) { return gb(this, a, b, this.length - 1, -1, -1) }, reverse: x.reverse, selector: null, shift: x.shift, sort: x.sort, splice: x.splice, toArray: function () { return x.slice.call(this) }, to$: function () { return h(this) }, toJQuery: function () { return h(this) },
            unique: function () { return new t(this.context, pa(this)) }, unshift: x.unshift
        }); t.extend = function (a, b, c) { if (c.length && b && (b instanceof t || b.__dt_wrapper)) { var d, e, f, g = function (a, b, c) { return function () { var d = b.apply(a, arguments); t.extend(d, d, c.methodExt); return d } }; d = 0; for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt) } }; t.register = p = function (a, b) {
            if (h.isArray(a)) for (var c = 0, d = a.length; c <
            d; c++) t.register(a[c], b); else for (var e = a.split("."), f = Tb, g, i, c = 0, d = e.length; c < d; c++) { g = (i = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c]; var j; a: { j = 0; for (var n = f.length; j < n; j++) if (f[j].name === g) { j = f[j]; break a } j = null } j || (j = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(j)); c === d - 1 ? j.val = b : f = i ? j.methodExt : j.propExt }
        }; t.registerPlural = s = function (a, b, c) {
            t.register(a, c); t.register(b, function () {
                var a = c.apply(this, arguments); return a === this ? this : a instanceof t ? a.length ? h.isArray(a[0]) ? new t(a.context,
                a[0]) : a[0] : k : a
            })
        }; p("tables()", function (a) { var b; if (a) { b = t; var c = this.context; if ("number" === typeof a) a = [c[a]]; else var d = h.map(c, function (a) { return a.nTable }), a = h(d).filter(a).map(function () { var a = h.inArray(this, d); return c[a] }).toArray(); b = new b(a) } else b = this; return b }); p("table()", function (a) { var a = this.tables(a), b = a.context; return b.length ? new t(b[0]) : a }); s("tables().nodes()", "table().node()", function () { return this.iterator("table", function (a) { return a.nTable }, 1) }); s("tables().body()", "table().body()",
        function () { return this.iterator("table", function (a) { return a.nTBody }, 1) }); s("tables().header()", "table().header()", function () { return this.iterator("table", function (a) { return a.nTHead }, 1) }); s("tables().footer()", "table().footer()", function () { return this.iterator("table", function (a) { return a.nTFoot }, 1) }); s("tables().containers()", "table().container()", function () { return this.iterator("table", function (a) { return a.nTableWrapper }, 1) }); p("draw()", function (a) {
            return this.iterator("table", function (b) {
                "page" ===
                a ? M(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), R(b, !1 === a))
            })
        }); p("page()", function (a) { return a === k ? this.page.info().page : this.iterator("table", function (b) { Ta(b, a) }) }); p("page.info()", function () { if (0 === this.context.length) return k; var a = this.context[0], b = a._iDisplayStart, c = a._iDisplayLength, d = a.fnRecordsDisplay(), e = -1 === c; return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === y(a) } });
        p("page.len()", function (a) { return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) { Ra(b, a) }) }); var Ub = function (a, b, c) { if (c) { var d = new t(a); d.one("draw", function () { c(d.ajax.json()) }) } if ("ssp" == y(a)) R(a, b); else { C(a, !0); var e = a.jqXHR; e && 4 !== e.readyState && e.abort(); ra(a, [], function (c) { na(a); for (var c = sa(a, c), d = 0, e = c.length; d < e; d++) L(a, c[d]); R(a, b); C(a, !1) }) } }; p("ajax.json()", function () { var a = this.context; if (0 < a.length) return a[0].json }); p("ajax.params()",
        function () { var a = this.context; if (0 < a.length) return a[0].oAjaxData }); p("ajax.reload()", function (a, b) { return this.iterator("table", function (c) { Ub(c, !1 === b, a) }) }); p("ajax.url()", function (a) { var b = this.context; if (a === k) { if (0 === b.length) return k; b = b[0]; return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource } return this.iterator("table", function (b) { h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a }) }); p("ajax.url().load()", function (a, b) { return this.iterator("table", function (c) { Ub(c, !1 === b, a) }) });
        var Za = function (a, b, c, d, e) { var f = [], g, i, j, n, l, m; j = typeof b; if (!b || "string" === j || "function" === j || b.length === k) b = [b]; j = 0; for (n = b.length; j < n; j++) { i = b[j] && b[j].split ? b[j].split(",") : [b[j]]; l = 0; for (m = i.length; l < m; l++) (g = c("string" === typeof i[l] ? h.trim(i[l]) : i[l])) && g.length && (f = f.concat(g)) } a = v.selector[a]; if (a.length) { j = 0; for (n = a.length; j < n; j++) f = a[j](d, e, f) } return pa(f) }, $a = function (a) { a || (a = {}); a.filter && a.search === k && (a.search = a.filter); return h.extend({ search: "none", order: "current", page: "all" }, a) },
        ab = function (a) { for (var b = 0, c = a.length; b < c; b++) if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a; a.length = 0; return a }, Da = function (a, b) {
            var c, d, e, f = [], g = a.aiDisplay; c = a.aiDisplayMaster; var i = b.search; d = b.order; e = b.page; if ("ssp" == y(a)) return "removed" === i ? [] : W(0, c.length); if ("current" == e) { c = a._iDisplayStart; for (d = a.fnDisplayEnd() ; c < d; c++) f.push(g[c]) } else if ("current" == d || "applied" == d) f = "none" == i ? c.slice() : "applied" == i ? g.slice() : h.map(c, function (a) {
                return -1 === h.inArray(a,
                g) ? a : null
            }); else if ("index" == d || "original" == d) { c = 0; for (d = a.aoData.length; c < d; c++) "none" == i ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == i || 0 <= e && "applied" == i) && f.push(c)) } return f
        }; p("rows()", function (a, b) {
            a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = $a(b), c = this.iterator("table", function (c) {
                var e = b; return Za("row", a, function (a) {
                    var b = Pb(a); if (b !== null && !e) return [b]; var i = Da(c, e); if (b !== null && h.inArray(b, i) !== -1) return [b]; if (!a) return i; if (typeof a === "function") return h.map(i, function (b) {
                        var e =
                        c.aoData[b]; return a(b, e._aData, e.nTr) ? b : null
                    }); b = Sb(ja(c.aoData, i, "nTr")); if (a.nodeName && h.inArray(a, b) !== -1) return [a._DT_RowIndex]; if (typeof a === "string" && a.charAt(0) === "#") { i = c.aIds[a.replace(/^#/, "")]; if (i !== k) return [i.idx] } return h(b).filter(a).map(function () { return this._DT_RowIndex }).toArray()
                }, c, e)
            }, 1); c.selector.rows = a; c.selector.opts = b; return c
        }); p("rows().nodes()", function () { return this.iterator("row", function (a, b) { return a.aoData[b].nTr || k }, 1) }); p("rows().data()", function () {
            return this.iterator(!0,
            "rows", function (a, b) { return ja(a.aoData, b, "_aData") }, 1)
        }); s("rows().cache()", "row().cache()", function (a) { return this.iterator("row", function (b, c) { var d = b.aoData[c]; return "search" === a ? d._aFilterData : d._aSortData }, 1) }); s("rows().invalidate()", "row().invalidate()", function (a) { return this.iterator("row", function (b, c) { ea(b, c, a) }) }); s("rows().indexes()", "row().index()", function () { return this.iterator("row", function (a, b) { return b }, 1) }); s("rows().ids()", "row().id()", function (a) {
            for (var b = [], c = this.context,
            d = 0, e = c.length; d < e; d++) for (var f = 0, g = this[d].length; f < g; f++) { var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData); b.push((!0 === a ? "#" : "") + h) } return new t(c, b)
        }); s("rows().remove()", "row().remove()", function () {
            var a = this; this.iterator("row", function (b, c, d) { var e = b.aoData, f = e[c]; e.splice(c, 1); for (var g = 0, h = e.length; g < h; g++) null !== e[g].nTr && (e[g].nTr._DT_RowIndex = g); oa(b.aiDisplayMaster, c); oa(b.aiDisplay, c); oa(a[d], c, !1); Sa(b); c = b.rowIdFn(f._aData); c !== k && delete b.aIds[c] }); this.iterator("table", function (a) {
                for (var c =
                0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
            }); return this
        }); p("rows.add()", function (a) { var b = this.iterator("table", function (b) { var c, f, g, h = []; f = 0; for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(L(b, c)); return h }, 1), c = this.rows(-1); c.pop(); h.merge(c, b); return c }); p("row()", function (a, b) { return ab(this.rows(a, b)) }); p("row().data()", function (a) {
            var b = this.context; if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k; b[0].aoData[this[0]]._aData =
            a; ea(b[0], this[0], "data"); return this
        }); p("row().node()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null }); p("row.add()", function (a) { a instanceof h && a.length && (a = a[0]); var b = this.iterator("table", function (b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : L(b, a) }); return this.row(b[0]) }); var bb = function (a, b) { var c = a.context; if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k }, Vb = function (a,
        b) {
            var c = a.context; if (c.length && a.length) {
                var d = c[0].aoData[a[0]]; if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach(); var e = c[0], f = new t(e), g = e.aoData; f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"); 0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) { e === b && f.rows({ page: "current" }).eq(0).each(function (a) { a = g[a]; a._detailsShow && a._details.insertAfter(a.nTr) }) }), f.on("column-visibility.dt.DT_details", function (a, b) {
                        if (e ===
                        b) for (var c, d = ca(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
                    }), f.on("destroy.dt.DT_details", function (a, b) { if (e === b) for (var c = 0, d = g.length; c < d; c++) g[c]._details && bb(f, c) }))
                }
            }
        }; p("row().child()", function (a, b) {
            var c = this.context; if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k; if (!0 === a) this.child.show(); else if (!1 === a) bb(this); else if (c.length && this.length) {
                var d = c[0], c = c[0].aoData[this[0]], e = [], f = function (a, b) {
                    if (h.isArray(a) ||
                    a instanceof h) for (var c = 0, k = a.length; c < k; c++) f(a[c], b); else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ca(d), e.push(c[0]))
                }; f(a, b); c._details && c._details.remove(); c._details = h(e); c._detailsShow && c._details.insertAfter(c.nTr)
            } return this
        }); p(["row().child.show()", "row().child().show()"], function () { Vb(this, !0); return this }); p(["row().child.hide()", "row().child().hide()"], function () { Vb(this, !1); return this }); p(["row().child.remove()",
        "row().child().remove()"], function () { bb(this); return this }); p("row().child.isShown()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 }); var dc = /^(.+):(name|visIdx|visible)$/, Wb = function (a, b, c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b)); return c }; p("columns()", function (a, b) {
            a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = $a(b), c = this.iterator("table", function (c) {
                var e = a, f = b, g = c.aoColumns, i = D(g, "sName"), j = D(g, "nTh"); return Za("column",
                e, function (a) {
                    var b = Pb(a); if (a === "") return W(g.length); if (b !== null) return [b >= 0 ? b : g.length + b]; if (typeof a === "function") { var e = Da(c, f); return h.map(g, function (b, f) { return a(f, Wb(c, f, 0, 0, e), j[f]) ? f : null }) } var k = typeof a === "string" ? a.match(dc) : ""; if (k) switch (k[2]) { case "visIdx": case "visible": b = parseInt(k[1], 10); if (b < 0) { var m = h.map(g, function (a, b) { return a.bVisible ? b : null }); return [m[m.length + b]] } return [$(c, b)]; case "name": return h.map(i, function (a, b) { return a === k[1] ? b : null }) } else return h(j).filter(a).map(function () {
                        return h.inArray(this,
                        j)
                    }).toArray()
                }, c, f)
            }, 1); c.selector.cols = a; c.selector.opts = b; return c
        }); s("columns().header()", "column().header()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTh }, 1) }); s("columns().footer()", "column().footer()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTf }, 1) }); s("columns().data()", "column().data()", function () { return this.iterator("column-rows", Wb, 1) }); s("columns().dataSrc()", "column().dataSrc()", function () {
            return this.iterator("column",
            function (a, b) { return a.aoColumns[b].mData }, 1)
        }); s("columns().cache()", "column().cache()", function (a) { return this.iterator("column-rows", function (b, c, d, e, f) { return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) }); s("columns().nodes()", "column().nodes()", function () { return this.iterator("column-rows", function (a, b, c, d, e) { return ja(a.aoData, e, "anCells", b) }, 1) }); s("columns().visible()", "column().visible()", function (a, b) {
            return this.iterator("column", function (c, d) {
                if (a === k) return c.aoColumns[d].bVisible;
                var e = c.aoColumns, f = e[d], g = c.aoData, i, j, m; if (a !== k && f.bVisible !== a) { if (a) { var l = h.inArray(!0, D(e, "bVisible"), d + 1); i = 0; for (j = g.length; i < j; i++) m = g[i].nTr, e = g[i].anCells, m && m.insertBefore(e[d], e[l] || null) } else h(D(c.aoData, "anCells", d)).detach(); f.bVisible = a; ga(c, c.aoHeader); ga(c, c.aoFooter); if (b === k || b) Y(c), (c.oScroll.sX || c.oScroll.sY) && Z(c); w(c, null, "column-visibility", [c, d, a]); ya(c) }
            })
        }); s("columns().indexes()", "column().index()", function (a) {
            return this.iterator("column", function (b, c) {
                return "visible" ===
                a ? ba(b, c) : c
            }, 1)
        }); p("columns.adjust()", function () { return this.iterator("table", function (a) { Y(a) }, 1) }); p("column.index()", function (a, b) { if (0 !== this.context.length) { var c = this.context[0]; if ("fromVisible" === a || "toData" === a) return $(c, b); if ("fromData" === a || "toVisible" === a) return ba(c, b) } }); p("column()", function (a, b) { return ab(this.columns(a, b)) }); p("cells()", function (a, b, c) {
            h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null)); h.isPlainObject(b) && (c = b, b = null); if (null === b || b === k) return this.iterator("table",
            function (b) {
                var d = a, e = $a(c), f = b.aoData, g = Da(b, e), i = Sb(ja(f, g, "anCells")), j = h([].concat.apply([], i)), l, m = b.aoColumns.length, n, p, t, s, u, v; return Za("cell", d, function (a) {
                    var c = typeof a === "function"; if (a === null || a === k || c) { n = []; p = 0; for (t = g.length; p < t; p++) { l = g[p]; for (s = 0; s < m; s++) { u = { row: l, column: s }; if (c) { v = f[l]; a(u, B(b, l, s), v.anCells ? v.anCells[s] : null) && n.push(u) } else n.push(u) } } return n } return h.isPlainObject(a) ? [a] : j.filter(a).map(function (a, b) {
                        if (b.parentNode) l = b.parentNode._DT_RowIndex; else {
                            a = 0; for (t =
                            f.length; a < t; a++) if (h.inArray(b, f[a].anCells) !== -1) { l = a; break }
                        } return { row: l, column: h.inArray(b, f[l].anCells) }
                    }).toArray()
                }, b, e)
            }); var d = this.columns(b, c), e = this.rows(a, c), f, g, i, j, m, l = this.iterator("table", function (a, b) { f = []; g = 0; for (i = e[b].length; g < i; g++) { j = 0; for (m = d[b].length; j < m; j++) f.push({ row: e[b][g], column: d[b][j] }) } return f }, 1); h.extend(l.selector, { cols: b, rows: a, opts: c }); return l
        }); s("cells().nodes()", "cell().node()", function () {
            return this.iterator("cell", function (a, b, c) {
                return (a = a.aoData[b].anCells) ?
                a[c] : k
            }, 1)
        }); p("cells().data()", function () { return this.iterator("cell", function (a, b, c) { return B(a, b, c) }, 1) }); s("cells().cache()", "cell().cache()", function (a) { a = "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function (b, c, d) { return b.aoData[c][a][d] }, 1) }); s("cells().render()", "cell().render()", function (a) { return this.iterator("cell", function (b, c, d) { return B(b, c, d, a) }, 1) }); s("cells().indexes()", "cell().index()", function () {
            return this.iterator("cell", function (a, b, c) {
                return {
                    row: b,
                    column: c, columnVisible: ba(a, c)
                }
            }, 1)
        }); s("cells().invalidate()", "cell().invalidate()", function (a) { return this.iterator("cell", function (b, c, d) { ea(b, c, a, d) }) }); p("cell()", function (a, b, c) { return ab(this.cells(a, b, c)) }); p("cell().data()", function (a) { var b = this.context, c = this[0]; if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k; ib(b[0], c[0].row, c[0].column, a); ea(b[0], c[0].row, "data", c[0].column); return this }); p("order()", function (a, b) {
            var c = this.context; if (a === k) return 0 !== c.length ? c[0].aaSorting :
            k; "number" === typeof a ? a = [[a, b]] : h.isArray(a[0]) || (a = Array.prototype.slice.call(arguments)); return this.iterator("table", function (b) { b.aaSorting = a.slice() })
        }); p("order.listener()", function (a, b, c) { return this.iterator("table", function (d) { Oa(d, a, b, c) }) }); p(["columns().order()", "column().order()"], function (a) { var b = this; return this.iterator("table", function (c, d) { var e = []; h.each(b[d], function (b, c) { e.push([c, a]) }); c.aaSorting = e }) }); p("search()", function (a, b, c, d) {
            var e = this.context; return a === k ? 0 !== e.length ?
            e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) { e.oFeatures.bFilter && ha(e, h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1) })
        }); s("columns().search()", "column().search()", function (a, b, c, d) {
            return this.iterator("column", function (e, f) {
                var g = e.aoPreSearchCols; if (a === k) return g[f].sSearch; e.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ha(e,
                e.oPreviousSearch, 1))
            })
        }); p("state()", function () { return this.context.length ? this.context[0].oSavedState : null }); p("state.clear()", function () { return this.iterator("table", function (a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) }); p("state.loaded()", function () { return this.context.length ? this.context[0].oLoadedState : null }); p("state.save()", function () { return this.iterator("table", function (a) { ya(a) }) }); m.versionCheck = m.fnVersionCheck = function (a) {
            for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f =
            a.length; e < f; e++) if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d; return !0
        }; m.isDataTable = m.fnIsDataTable = function (a) { var b = h(a).get(0), c = !1; h.each(m.settings, function (a, e) { var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null, g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null; if (e.nTable === b || f === b || g === b) c = !0 }); return c }; m.tables = m.fnTables = function (a) {
            var b = !1; h.isPlainObject(a) && (b = a.api, a = a.visible); var c = h.map(m.settings, function (b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable });
            return b ? new t(c) : c
        }; m.util = { throttle: ua, escapeRegex: va }; m.camelToHungarian = I; p("$()", function (a, b) { var c = this.rows(b).nodes(), c = h(c); return h([].concat(c.filter(a).toArray(), c.find(a).toArray())) }); h.each(["on", "one", "off"], function (a, b) { p(b + "()", function () { var a = Array.prototype.slice.call(arguments); a[0].match(/\.dt\b/) || (a[0] += ".dt"); var d = h(this.tables().nodes()); d[b].apply(d, a); return this }) }); p("clear()", function () { return this.iterator("table", function (a) { na(a) }) }); p("settings()", function () {
            return new t(this.context,
            this.context)
        }); p("init()", function () { var a = this.context; return a.length ? a[0].oInit : null }); p("data()", function () { return this.iterator("table", function (a) { return D(a.aoData, "_aData") }).flatten() }); p("destroy()", function (a) {
            a = a || !1; return this.iterator("table", function (b) {
                var c = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, i = b.nTFoot, j = h(e), f = h(f), k = h(b.nTableWrapper), l = h.map(b.aoData, function (a) { return a.nTr }), p; b.bDestroying = !0; w(b, "aoDestroyCallback", "destroy", [b]); a ||
                (new t(b)).columns().visible(!0); k.unbind(".DT").find(":not(tbody *)").unbind(".DT"); h(Fa).unbind(".DT-" + b.sInstance); e != g.parentNode && (j.children("thead").detach(), j.append(g)); i && e != i.parentNode && (j.children("tfoot").detach(), j.append(i)); b.aaSorting = []; b.aaSortingFixed = []; xa(b); h(l).removeClass(b.asStripeClasses.join(" ")); h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone); b.bJUI && (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td",
                g).each(function () { var a = h("div." + d.sSortJUIWrapper, this); h(this).append(a.contents()); a.detach() })); f.children().detach(); f.append(l); g = a ? "remove" : "detach"; j[g](); k[g](); !a && c && (c.insertBefore(e, b.nTableReinsertBefore), j.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function (a) { h(this).addClass(b.asDestroyStripes[a % p]) })); c = h.inArray(b, m.settings); -1 !== c && m.settings.splice(c, 1)
            })
        }); h.each(["column", "row", "cell"], function (a, b) {
            p(b + "s().every()",
            function (a) { return this.iterator(b, function (d, e, f, g, h) { a.call((new t(d))[b](e, "cell" === b ? f : k), e, f, g, h) }) })
        }); p("i18n()", function (a, b, c) { var d = this.context[0], a = P(a)(d.oLanguage); a === k && (a = b); c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._); return a.replace("%d", c) }); m.version = "1.10.9"; m.settings = []; m.models = {}; m.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }; m.models.oRow = {
            nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null,
            idx: -1
        }; m.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null }; m.defaults = {
            aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10,
            25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bJQueryUI: !1, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function (a) { return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) }, fnHeaderCallback: null,
            fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function (a) { try { return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname)) } catch (b) { } }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function (a, b) { try { (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b)) } catch (c) { } },
            fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: {
                oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found"
            }, oSearch: h.extend({}, m.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId"
        }; X(m.defaults); m.defaults.column = {
            aDataSort: null,
            iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null
        }; X(m.defaults.column); m.models.oSettings = {
            oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: {
                bCollapse: null,
                iBarWidth: 0, sX: null, sXInner: null, sY: null
            }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [],
            aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: k, oAjaxData: k, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null,
            iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, bJUI: null, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function () { return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length }, fnRecordsDisplay: function () { return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function () {
                var a = this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e =
                this.oFeatures, f = e.bPaginate; return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
            }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null
        }; m.ext = v = {
            buttons: {}, classes: {}, errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: m.fnVersionCheck,
            iApiIndex: 0, oJUIClasses: {}, sVersion: m.version
        }; h.extend(v, { afnFiltering: v.search, aTypes: v.type.detect, ofnSearch: v.type.search, oSort: v.type.order, afnSortData: v.order, aoFeatures: v.feature, oApi: v.internal, oStdClasses: v.classes, oPagination: v.pager }); h.extend(m.ext.classes, {
            sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter",
            sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: ""
        }); var Ea = "", Ea = "", G = Ea + "ui-state-default", ka = Ea + "css_right ui-icon ui-icon-", Xb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix"; h.extend(m.ext.oJUIClasses, m.ext.classes, {
            sPageButton: "fg-button ui-button " + G, sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled", sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_", sSortAsc: G + " sorting_asc", sSortDesc: G + " sorting_desc", sSortable: G + " sorting", sSortableAsc: G + " sorting_asc_disabled", sSortableDesc: G + " sorting_desc_disabled", sSortableNone: G + " sorting_disabled", sSortJUIAsc: ka + "triangle-1-n", sSortJUIDesc: ka + "triangle-1-s", sSortJUI: ka + "carat-2-n-s", sSortJUIAscAllowed: ka + "carat-1-n", sSortJUIDescAllowed: ka + "carat-1-s", sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon", sScrollHead: "dataTables_scrollHead " + G, sScrollFoot: "dataTables_scrollFoot " + G, sHeaderTH: G, sFooterTH: G, sJUIHeader: Xb + " ui-corner-tl ui-corner-tr", sJUIFooter: Xb + " ui-corner-bl ui-corner-br"
        }); var Mb = m.ext.pager; h.extend(Mb, {
            simple: function () { return ["previous", "next"] }, full: function () { return ["first", "previous", "next", "last"] }, numbers: function (a, b) { return [Aa(a, b)] }, simple_numbers: function (a, b) { return ["previous", Aa(a, b), "next"] }, full_numbers: function (a, b) {
                return ["first",
                "previous", Aa(a, b), "next", "last"]
            }, _numbers: Aa, numbers_length: 7
        }); h.extend(!0, m.ext.renderer, {
            pageButton: {
                _: function (a, b, c, d, e, f) {
                    var g = a.oClasses, i = a.oLanguage.oPaginate, j, k, l = 0, m = function (b, d) {
                        var p, q, t, s, u = function (b) { Ta(a, b.data.action, true) }; p = 0; for (q = d.length; p < q; p++) {
                            s = d[p]; if (h.isArray(s)) { t = h("<" + (s.DT_el || "div") + "/>").appendTo(b); m(t, s) } else {
                                j = null; k = ""; switch (s) {
                                    case "ellipsis": b.append('<span class="ellipsis">&#x2026;</span>'); break; case "first": j = i.sFirst; k = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                        break; case "previous": j = i.sPrevious; k = s + (e > 0 ? "" : " " + g.sPageButtonDisabled); break; case "next": j = i.sNext; k = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; case "last": j = i.sLast; k = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; default: j = s + 1; k = e === s ? g.sPageButtonActive : ""
                                } if (j !== null) { t = h("<a>", { "class": g.sPageButton + " " + k, "aria-controls": a.sTableId, "data-dt-idx": l, tabindex: a.iTabIndex, id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null }).html(j).appendTo(b); Va(t, { action: s }, u); l++ }
                            }
                        }
                    }, p; try { p = h(b).find(T.activeElement).data("dt-idx") } catch (t) { } m(h(b).empty(),
                    d); p && h(b).find("[data-dt-idx=" + p + "]").focus()
                }
            }
        }); h.extend(m.ext.type.detect, [function (a, b) { var c = b.oLanguage.sDecimal; return Ya(a, c) ? "num" + c : null }, function (a) { if (a && !(a instanceof Date) && (!ac.test(a) || !bc.test(a))) return null; var b = Date.parse(a); return null !== b && !isNaN(b) || K(a) ? "date" : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Ya(a, c, !0) ? "num-fmt" + c : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Rb(a, c) ? "html-num" + c : null }, function (a, b) {
            var c = b.oLanguage.sDecimal; return Rb(a, c,
            !0) ? "html-num-fmt" + c : null
        }, function (a) { return K(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null }]); h.extend(m.ext.type.search, { html: function (a) { return K(a) ? a : "string" === typeof a ? a.replace(Ob, " ").replace(Ca, "") : "" }, string: function (a) { return K(a) ? a : "string" === typeof a ? a.replace(Ob, " ") : a } }); var Ba = function (a, b, c, d) { if (0 !== a && (!a || "-" === a)) return -Infinity; b && (a = Qb(a, b)); a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))); return 1 * a }; h.extend(v.type.order, {
            "date-pre": function (a) {
                return Date.parse(a) ||
                0
            }, "html-pre": function (a) { return K(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" }, "string-pre": function (a) { return K(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() }, "string-asc": function (a, b) { return a < b ? -1 : a > b ? 1 : 0 }, "string-desc": function (a, b) { return a < b ? 1 : a > b ? -1 : 0 }
        }); cb(""); h.extend(!0, m.ext.renderer, {
            header: {
                _: function (a, b, c, d) {
                    h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                        if (a === f) {
                            e = c.idx; b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] ==
                            "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                        }
                    })
                }, jqueryui: function (a, b, c, d) {
                    h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b); h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                        if (a === f) {
                            e = c.idx; b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass); b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " +
                            d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                        }
                    })
                }
            }
        }); m.render = { number: function (a, b, c, d, e) { return { display: function (f) { if ("number" !== typeof f && "string" !== typeof f) return f; var g = 0 > f ? "-" : "", f = Math.abs(parseFloat(f)), h = parseInt(f, 10), f = c ? b + (f - h).toFixed(c).substring(2) : ""; return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "") } } } }; h.extend(m.ext.internal, {
            _fnExternApiFunc: Nb, _fnBuildAjax: ra, _fnAjaxUpdate: lb,
            _fnAjaxParameters: ub, _fnAjaxUpdateDraw: vb, _fnAjaxDataSrc: sa, _fnAddColumn: Ga, _fnColumnOptions: la, _fnAdjustColumnSizing: Y, _fnVisibleToColumnIndex: $, _fnColumnIndexToVisible: ba, _fnVisbleColumns: ca, _fnGetColumns: aa, _fnColumnTypes: Ia, _fnApplyColumnDefs: hb, _fnHungarianMap: X, _fnCamelToHungarian: I, _fnLanguageCompat: S, _fnBrowserDetect: fb, _fnAddData: L, _fnAddTr: ma, _fnNodeToDataIndex: function (a, b) { return b._DT_RowIndex !== k ? b._DT_RowIndex : null }, _fnNodeToColumnIndex: function (a, b, c) { return h.inArray(c, a.aoData[b].anCells) },
            _fnGetCellData: B, _fnSetCellData: ib, _fnSplitObjNotation: La, _fnGetObjectDataFn: P, _fnSetObjectDataFn: Q, _fnGetDataMaster: Ma, _fnClearTable: na, _fnDeleteIndex: oa, _fnInvalidate: ea, _fnGetRowElements: Ka, _fnCreateTr: Ja, _fnBuildHead: kb, _fnDrawHead: ga, _fnDraw: M, _fnReDraw: R, _fnAddOptionsHtml: nb, _fnDetectHeader: fa, _fnGetUniqueThs: qa, _fnFeatureHtmlFilter: pb, _fnFilterComplete: ha, _fnFilterCustom: yb, _fnFilterColumn: xb, _fnFilter: wb, _fnFilterCreateSearch: Qa, _fnEscapeRegex: va, _fnFilterData: zb, _fnFeatureHtmlInfo: sb, _fnUpdateInfo: Cb,
            _fnInfoMacros: Db, _fnInitialise: ia, _fnInitComplete: ta, _fnLengthChange: Ra, _fnFeatureHtmlLength: ob, _fnFeatureHtmlPaginate: tb, _fnPageChange: Ta, _fnFeatureHtmlProcessing: qb, _fnProcessingDisplay: C, _fnFeatureHtmlTable: rb, _fnScrollDraw: Z, _fnApplyToChildren: H, _fnCalculateColumnWidths: Ha, _fnThrottle: ua, _fnConvertToWidth: Fb, _fnGetWidestNode: Gb, _fnGetMaxLenString: Hb, _fnStringToCss: u, _fnSortFlatten: V, _fnSort: mb, _fnSortAria: Jb, _fnSortListener: Ua, _fnSortAttachListener: Oa, _fnSortingClasses: xa, _fnSortData: Ib, _fnSaveState: ya,
            _fnLoadState: Kb, _fnSettingsFromNode: za, _fnLog: J, _fnMap: F, _fnBindAction: Va, _fnCallbackReg: z, _fnCallbackFire: w, _fnLengthOverflow: Sa, _fnRenderer: Pa, _fnDataSource: y, _fnRowAttributes: Na, _fnCalculateEnd: function () { }
        }); h.fn.dataTable = m; h.fn.dataTableSettings = m.settings; h.fn.dataTableExt = m.ext; h.fn.DataTable = function (a) { return h(this).dataTable(a).api() }; h.each(m, function (a, b) { h.fn.DataTable[a] = b }); return h.fn.dataTable
    }; "function" === typeof define && define.amd ? define("datatables", ["jquery"], S) : "object" ===
    typeof exports ? module.exports = S(require("jquery")) : jQuery && !jQuery.fn.dataTable && S(jQuery)
})(window, document);
///#source 1 1 /Scripts/_metro.js
/*!
 * Metro UI CSS v3.0.10 (http://metroui.org.ua)
 * Copyright 2012-2015 Sergey Pimenov
 * Licensed under MIT (http://metroui.org.ua/license.html)
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function (jQuery) {
    'use strict';

    var $ = jQuery;

    // Source: js/requirements.js
    if (typeof jQuery === 'undefined') {
        throw new Error('Metro\'s JavaScript requires jQuery');
    }

    // Source: js/global.js
    window.METRO_VERSION = '3.0.10';

    if (window.METRO_AUTO_REINIT === undefined) window.METRO_AUTO_REINIT = true;
    if (window.METRO_LANGUAGE === undefined) window.METRO_LANGUAGE = 'en';
    if (window.METRO_LOCALE === undefined) window.METRO_LOCALE = 'EN_en';
    if (window.METRO_CURRENT_LOCALE === undefined) window.METRO_CURRENT_LOCALE = 'en';
    if (window.METRO_SHOW_TYPE === undefined) window.METRO_SHOW_TYPE = 'slide';
    if (window.METRO_DEBUG === undefined) window.METRO_DEBUG = true;
    if (window.METRO_CALENDAR_WEEK_START === undefined) window.METRO_CALENDAR_WEEK_START = 0;

    window.canObserveMutation = 'MutationObserver' in window;

    String.prototype.isUrl = function () {
        var regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(this);
    };

    String.prototype.isColor = function () {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this);
    };

    Array.prototype.shuffle = function () {
        var currentIndex = this.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = this[currentIndex];
            this[currentIndex] = this[randomIndex];
            this[randomIndex] = temporaryValue;
        }

        return this;
    };

    Array.prototype.clone = function () {
        return this.slice(0);
    };

    Array.prototype.unique = function () {
        var a = this.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    };

    window.uniqueId = function (prefix) {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    window.isTouchDevice = function () {
        return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    };

    window.METRO_LOCALES = {
        'en': {
            months: [
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            days: [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"
            ],
            buttons: [
                "Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        },
        'fr': {
            months: [
                "Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre",
                "Jan", "FÃ©v", "Mars", "Avr", "Mai", "Juin", "Juil", "AoÃ»t", "Sept", "Oct", "Nov", "DÃ©c"
            ],
            days: [
                "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
                "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"
            ],
            buttons: [
                "Aujourd'hui", "Effacer", "Annuler", "Aide", "PrÃ©cedent", "Suivant", "Fin"
            ]
        },
        'nl': {
            months: [
                "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December",
                "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
            ],
            days: [
                "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
                "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"
            ],
            buttons: [
                "Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"
            ]
        },
        'ua': {
            months: [
                "Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ", "Ð›ÑŽÑ‚Ð¸Ð¹", "Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ", "ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ", "Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ", "Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ", "Ð›Ð¸Ð¿ÐµÐ½ÑŒ", "Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ", "Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ", "Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ", "Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´", "Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ",
                "Ð¡Ñ–Ñ‡", "Ð›ÑŽÑ‚", "Ð‘ÐµÑ€", "ÐšÐ²Ñ–", "Ð¢Ñ€Ð°", "Ð§ÐµÑ€", "Ð›Ð¸Ð¿", "Ð¡ÐµÑ€", "Ð’ÐµÑ€", "Ð–Ð¾Ð²", "Ð›Ð¸Ñ", "Ð“Ñ€Ñƒ"
            ],
            days: [
                "ÐÐµÐ´Ñ–Ð»Ñ", "ÐŸÐ¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº", "Ð’Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº", "Ð¡ÐµÑ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²ÐµÑ€", "ÐŸâ€™ÑÑ‚Ð½Ð¸Ñ†Ñ", "Ð¡ÑƒÐ±Ð¾Ñ‚Ð°",
                "ÐÐ´", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"
            ],
            buttons: [
                "Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ–", "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚Ð¸", "Ð¡ÐºÐ°ÑÑƒÐ²Ð°Ñ‚Ð¸", "Ð”Ð¾Ð¿Ð¾Ð¼Ð¾Ð³Ð°", "ÐÐ°Ð·Ð°Ð´", "Ð’Ð¿ÐµÑ€ÐµÐ´", "Ð“Ð¾Ñ‚Ð¾Ð²Ð¾"
            ]
        },
        'ru': {
            months: [
                "Ð¯Ð½Ð²Ð°Ñ€ÑŒ", "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€ÐµÐ»ÑŒ", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½ÑŒ", "Ð˜ÑŽÐ»ÑŒ", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ", "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ", "ÐÐ¾ÑÐ±Ñ€ÑŒ", "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ",
                "Ð¯Ð½Ð²", "Ð¤ÐµÐ²", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½", "Ð˜ÑŽÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ½", "ÐžÐºÑ‚", "ÐÐ¾Ñ", "Ð”ÐµÐº"
            ],
            days: [
                "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³", "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°", "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°",
                "Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"
            ],
            buttons: [
                "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ", "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚ÑŒ", "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ", "ÐŸÐ¾Ð¼Ð¾Ñ‰ÑŒ", "ÐÐ°Ð·Ð°Ð´", "Ð’Ð¿ÐµÑ€ÐµÐ´", "Ð“Ð¾Ñ‚Ð¾Ð²Ð¾"
            ]
        },
        /** By NoGrief (nogrief@gmail.com) */
        'zhCN': {
            months: [
                "ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ",
                "ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"
            ],
            days: [
                "æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­",
                "æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"
            ],
            buttons: [
                "ä»Šæ—¥", "æ¸…é™¤", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        },
        'it': {
            months: [
                'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
                'Gen', ' Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
            ],
            days: [
                'LunedÃ¬', 'MartedÃ¬', 'MercoledÃ¬', 'GiovedÃ¬', 'VenerdÃ¬', 'Sabato', 'Domenica',
                'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'
            ],
            buttons: [
                "Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        },
        'de': {
            months: [
                "Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",
                "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
            ],
            days: [
                "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",
                "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
            ],
            buttons: [
                "Heute", "ZurÃ¼cksetzen", "Abbrechen", "Hilfe", "FrÃ¼her", "SpÃ¤ter", "Fertig"
            ]
        },
        /** By Javier RodrÃ­guez (javier.rodriguez at fjrodriguez.com) */
        'es': {
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
                "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
            ],
            days: [
                "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
                "Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"
            ],
            buttons: [
                "Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        },
        'pt': {
            months: [
                'Janeiro', 'Fevereiro', 'MarÃ§o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
                'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
            ],
            days: [
                'Domingo', 'Segunda-feira', 'TerÃ§a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado',
                'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
            ],
            buttons: [
                "Hoje", "Limpar", "Cancelar", "Ajuda", "Anterior", "Seguinte", "Terminar"
            ]
        },
        'pl': {
            months: [
                "StyczeÅ„", "Luty", "Marzec", "KwiecieÅ„", "Maj", "Czerwiec", "Lipiec", "SierpieÅ„", "WrzesieÅ„", "PaÅºdziernik", "Listopad", "GrudzieÅ„",
                "Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "PaÅº", "Lis", "Gru"
            ],
            days: [
                "Niedziela", "PoniedziaÅ‚ek", "Wtorek", "Åšroda", "Czwartek", "PiÄ…tek", "Sobota",
                "Nd", "Pon", "Wt", "Åšr", "Czw", "Pt", "Sob"
            ],
            buttons: [
                "Dzisiaj", "WyczyÅ›Ä‡", "Anuluj", "Pomoc", "Poprzedni", "NastÄ™pny", "Koniec"
            ]
        },
        'cs': {
            months: [
                "Leden", "Ãšnor", "BÅ™ezen", "Duben", "KvÄ›ten", "ÄŒerven", "ÄŒervenec", "Srpen", "ZÃ¡Å™Ã­", "Å˜Ã­jen", "Listopad", "Prosinec",
                "Led", "Ãšn", "BÅ™", "Dub", "KvÄ›", "ÄŒe", "ÄŒer", "Srp", "ZÃ¡", "Å˜Ã­", "Li", "Pro"
            ],
            days: [
                "NedÄ›le", "PondÄ›lÃ­", "ÃšterÃ½", "StÅ™eda", "ÄŒtvrtek", "PÃ¡tek", "Sobota",
                "Ne", "Po", "Ãšt", "St", "ÄŒt", "PÃ¡", "So"
            ],
            buttons: [
                "Dnes", "VyÄistit", "ZruÅ¡it", "Pomoc", "PÅ™edeÅ¡lÃ½", "DalÅ¡Ã­", "DokonÄit"
            ]
        },
        /* By Satit Rianpit <rianpit@gmail.com> */
        'th': {
            months: [
                "à¸¡à¸à¸£à¸²à¸„à¸¡", "à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ", "à¸¡à¸µà¸™à¸²à¸„à¸¡", "à¹€à¸¡à¸©à¸²à¸¢à¸™", "à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡", "à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™", "à¸à¸£à¸à¸Žà¸²à¸„à¸¡", "à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡", "à¸à¸±à¸™à¸¢à¸²à¸¢à¸™", "à¸•à¸¸à¸¥à¸²à¸„à¸¡", "à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™", "à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡",
                "à¸¡.à¸„.", "à¸.à¸ž.", "à¸¡à¸µ.à¸„.", "à¹€à¸¡.à¸¢.", "à¸ž.à¸„.", "à¸¡à¸´.à¸¢.", "à¸.à¸„.", "à¸ª.à¸„.", "à¸.à¸¢.", "à¸•.à¸„.", "à¸ž.à¸¢.", "à¸˜.à¸„."
            ],
            days: [
                "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ", "à¸ˆà¸±à¸™à¸—à¸£à¹Œ", "à¸­à¸±à¸‡à¸„à¸²à¸£", "à¸žà¸¸à¸˜", "à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ", "à¸¨à¸¸à¸à¸£à¹Œ", "à¹€à¸ªà¸²à¸£à¹Œ",
                "à¸­à¸².", "à¸ˆ.", "à¸­.", "à¸ž.", "à¸žà¸¤.", "à¸¨.", "à¸ª."
            ],
            buttons: [
                "à¸§à¸±à¸™à¸™à¸µà¹‰", "à¸¥à¹‰à¸²à¸‡", "à¸¢à¸à¹€à¸¥à¸´à¸", "à¸Šà¹ˆà¸§à¸¢à¹€à¸«à¸¥à¸·à¸­", "à¸à¸¥à¸±à¸š", "à¸•à¹ˆà¸­à¹„à¸›", "à¹€à¸ªà¸£à¹‡à¸ˆ"
            ]
        }
    };

    /*
     * Date Format 1.2.3
     * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
     * MIT license
     *
     * Includes enhancements by Scott Trenda <scott.trenda.net>
     * and Kris Kowal <cixar.com/~kris.kowal/>
     *
     * Accepts a date, a mask, or a date and a mask.
     * Returns a formatted version of the given date.
     * The date defaults to the current date/time.
     * The mask defaults to dateFormat.masks.default.
     */
    // this is a temporary solution

    var dateFormat = function () {

        var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                timezoneClip = /[^-+\dA-Z]/g,
                pad = function (val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) {
                        val = "0" + val;
                    }
                    return val;
                };

        // Regexes and supporting functions are cached through closure
        return function (date, mask, utc) {
            var dF = dateFormat;

            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
                mask = date;
                date = undefined;
            }

            //console.log(arguments);

            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date();
            //if (isNaN(date)) throw SyntaxError("invalid date");

            mask = String(dF.masks[mask] || mask || dF.masks["default"]);

            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) === "UTC:") {
                mask = mask.slice(4);
                utc = true;
            }

            //console.log(locale);

            var locale = window.METRO_CURRENT_LOCALE || 'en';

            var _ = utc ? "getUTC" : "get",
                d = date[_ + "Date"](),
                D = date[_ + "Day"](),
                m = date[_ + "Month"](),
                y = date[_ + "FullYear"](),
                H = date[_ + "Hours"](),
                M = date[_ + "Minutes"](),
                s = date[_ + "Seconds"](),
                L = date[_ + "Milliseconds"](),
                o = utc ? 0 : date.getTimezoneOffset(),
                flags = {
                    d: d,
                    dd: pad(d),
                    ddd: window.METRO_LOCALES[locale].days[D],
                    dddd: window.METRO_LOCALES[locale].days[D + 7],
                    m: m + 1,
                    mm: pad(m + 1),
                    mmm: window.METRO_LOCALES[locale].months[m],
                    mmmm: window.METRO_LOCALES[locale].months[m + 12],
                    yy: String(y).slice(2),
                    yyyy: y,
                    h: H % 12 || 12,
                    hh: pad(H % 12 || 12),
                    H: H,
                    HH: pad(H),
                    M: M,
                    MM: pad(M),
                    s: s,
                    ss: pad(s),
                    l: pad(L, 3),
                    L: pad(L > 99 ? Math.round(L / 10) : L),
                    t: H < 12 ? "a" : "p",
                    tt: H < 12 ? "am" : "pm",
                    T: H < 12 ? "A" : "P",
                    TT: H < 12 ? "AM" : "PM",
                    Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                    o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                    S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
                };

            return mask.replace(token, function ($0) {
                return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
        };
    }();

    // Some common format strings
    dateFormat.masks = {
        "default": "ddd mmm dd yyyy HH:MM:ss",
        shortDate: "m/d/yy",
        mediumDate: "mmm d, yyyy",
        longDate: "mmmm d, yyyy",
        fullDate: "dddd, mmmm d, yyyy",
        shortTime: "h:MM TT",
        mediumTime: "h:MM:ss TT",
        longTime: "h:MM:ss TT Z",
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

    // For convenience...
    Date.prototype.format = function (mask, utc) {
        return dateFormat(this, mask, utc);
    };

    // Source: js/widget.js
    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;

    $.cleanData = (function (orig) {
        return function (elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }

                    // http://bugs.$.com/ticket/8235
                } catch (e) {
                }
            }
            orig(elems);
        };
    })($.cleanData);

    $.widget = function (name, base, prototype) {
        var fullName, existingConstructor, constructor, basePrototype,
        // proxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
            proxiedPrototype = {},
            namespace = name.split(".")[0];

        name = name.split(".")[1];
        fullName = namespace + "-" + name;

        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }

        // create selector for plugin
        $.expr[":"][fullName.toLowerCase()] = function (elem) {
            return !!$.data(elem, fullName);
        };

        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function (options, element) {
            // allow instantiation without "new" keyword
            if (!this._createWidget) {
                return new constructor(options, element);
            }

            // allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        // extend with the existing constructor to carry over any static properties
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            // copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend({}, prototype),
            // track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function (prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = (function () {
                var _super = function () {
                    return base.prototype[prop].apply(this, arguments);
                },
                    _superApply = function (args) {
                        return base.prototype[prop].apply(this, args);
                    };
                return function () {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply(this, arguments);

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend(basePrototype, {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function (i, child) {
                var childPrototype = child.prototype;

                // redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });
            // remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }

        $.widget.bridge(name, constructor);

        return constructor;
    };

    $.widget.extend = function (target) {
        var input = widget_slice.call(arguments, 1),
            inputIndex = 0,
            inputLength = input.length,
            key,
            value;
        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                    // Clone objects
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ?
                            $.widget.extend({}, target[key], value) :
                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend({}, value);
                        // Copy everything else by reference
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function (name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function (options) {
            var isMethodCall = typeof options === "string",
                args = widget_slice.call(arguments, 1),
                returnValue = this;

            if (isMethodCall) {
                this.each(function () {
                    var methodValue,
                        instance = $.data(this, fullName);
                    if (options === "instance") {
                        returnValue = instance;
                        return false;
                    }
                    if (!instance) {
                        return $.error("cannot call methods on " + name + " prior to initialization; " +
                            "attempted to call method '" + options + "'");
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        return $.error("no such method '" + options + "' for " + name + " widget instance");
                    }
                    methodValue = instance[options].apply(instance, args);
                    if (methodValue !== instance && methodValue !== undefined) {
                        returnValue = methodValue && methodValue.jquery ?
                            returnValue.pushStack(methodValue.get()) :
                            methodValue;
                        return false;
                    }
                });
            } else {

                // Allow multiple hashes to be passed on init
                if (args.length) {
                    options = $.widget.extend.apply(null, [options].concat(args));
                }

                this.each(function () {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function (/* options, element */) {
    };
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,

            // callbacks
            create: null
        },
        _createWidget: function (options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();

            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function (event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ?
                    // element within the document
                    element.ownerDocument :
                    // element is window or document
                element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }

            this.options = $.widget.extend({},
                this.options,
                this._getCreateOptions(),
                options);

            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,

        destroy: function () {
            this._destroy();
            // we can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .unbind(this.eventNamespace)
                .removeData(this.widgetFullName)
                // support: jquery <1.6.3
                // http://bugs.jquery.com/ticket/9413
                .removeData($.camelCase(this.widgetFullName));
            this.widget()
                .unbind(this.eventNamespace)
                .removeAttr("aria-disabled")
                .removeClass(
                this.widgetFullName + "-disabled " +
                "ui-state-disabled");

            // clean up events and states
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: $.noop,

        widget: function () {
            return this.element;
        },

        option: function (key, value) {
            var options = key,
                parts,
                curOption,
                i;

            if (arguments.length === 0) {
                // don't return a reference to the internal hash
                return $.widget.extend({}, this.options);
            }

            if (typeof key === "string") {
                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }

            this._setOptions(options);

            return this;
        },
        _setOptions: function (options) {
            var key;

            for (key in options) {
                this._setOption(key, options[key]);
            }

            return this;
        },
        _setOption: function (key, value) {
            this.options[key] = value;

            if (key === "disabled") {
                this.widget()
                    .toggleClass(this.widgetFullName + "-disabled", !!value);

                // If the widget is becoming disabled, then nothing is interactive
                if (value) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus");
                }
            }

            return this;
        },

        enable: function () {
            return this._setOptions({ disabled: false });
        },
        disable: function () {
            return this._setOptions({ disabled: true });
        },

        _on: function (suppressDisabledCheck, element, handlers) {
            var delegateElement,
                instance = this;

            // no suppressDisabledCheck flag, shuffle arguments
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // no element argument, shuffle and use this.element
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }

            $.each(handlers, function (event, handler) {
                function handlerProxy() {
                    // allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if (!suppressDisabledCheck &&
                        (instance.options.disabled === true ||
                        $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler)
                        .apply(instance, arguments);
                }

                // copy the guid so direct unbinding works
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match(/^([\w:-]*)\s*(.*)$/),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if (selector) {
                    delegateElement.delegate(selector, eventName, handlerProxy);
                } else {
                    element.bind(eventName, handlerProxy);
                }
            });
        },

        _off: function (element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
                this.eventNamespace;
            element.unbind(eventName).undelegate(eventName);

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },

        _delay: function (handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler)
                    .apply(instance, arguments);
            }

            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },

        _hoverable: function (element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function (event) {
                    $(event.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function (event) {
                    $(event.currentTarget).removeClass("ui-state-hover");
                }
            });
        },

        _focusable: function (element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function (event) {
                    $(event.currentTarget).addClass("ui-state-focus");
                },
                focusout: function (event) {
                    $(event.currentTarget).removeClass("ui-state-focus");
                }
            });
        },

        _trigger: function (type, event, data) {
            var prop, orig,
                callback = this.options[type];

            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ?
                type :
            this.widgetEventPrefix + type).toLowerCase();
            // the original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[0];

            // copy original event properties over to the new event
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }

            this.element.trigger(event, data);
            return !($.isFunction(callback) &&
            callback.apply(this.element[0], [event].concat(data)) === false ||
            event.isDefaultPrevented());
        }
    };

    $.each({ show: "fadeIn", hide: "fadeOut" }, function (method, defaultEffect) {
        $.Widget.prototype["_" + method] = function (element, options, callback) {
            if (typeof options === "string") {
                options = { effect: options };
            }
            var hasOptions,
                effectName = !options ?
                method :
                    options === true || typeof options === "number" ?
                defaultEffect :
                    options.effect || defaultEffect;
            options = options || {};
            if (typeof options === "number") {
                options = { duration: options };
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
                element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function (next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;

    // Source: js/initiator.js
    $.fn.reverse = Array.prototype.reverse;

    $.Metro = function (params) {
        params = $.extend({
        }, params);
    };

    $.Metro.hotkeys = [];

    $.Metro.initWidgets = function () {
        var widgets = $("[data-role]");

        var hotkeys = $("[data-hotkey]");
        $.each(hotkeys, function () {
            var element = $(this);
            var hotkey = element.data('hotkey').toLowerCase();

            //if ($.Metro.hotkeys.indexOf(hotkey) > -1) {
            //    return;
            //}
            if (element.data('hotKeyBonded') === true) {
                return;
            }

            $.Metro.hotkeys.push(hotkey);

            $(document).on('keyup', null, hotkey, function (e) {
                if (element === undefined) return;

                if (element[0].tagName === 'A' &&
                    element.attr('href') !== undefined &&
                    element.attr('href').trim() !== '' &&
                    element.attr('href').trim() !== '#') {
                    document.location.href = element.attr('href');
                } else {
                    element.click();
                }
                return false;
            });

            element.data('hotKeyBonded', true);
        });

        $.each(widgets, function () {
            var $this = $(this), w = this;
            var roles = $this.data('role').split(/\s*,\s*/);
            roles.map(function (func) {
                try {
                    //$(w)[func]();
                    if ($.fn[func] !== undefined) {
                        $.fn[func].call($this);
                    }
                } catch (e) {
                    if (window.METRO_DEBUG) {
                        console.log(e.message, e.stack);
                    }
                }
            });
        });
    };

    $.Metro.init = function () {
        $.Metro.initWidgets();

        if (window.METRO_AUTO_REINIT) {
            if (!window.canObserveMutation) {
                var originalDOM = $('body').html(),
                    actualDOM;

                setInterval(function () {
                    actualDOM = $('body').html();

                    if (originalDOM !== actualDOM) {
                        originalDOM = actualDOM;

                        $.Metro.initWidgets();
                    }
                }, 100);
            } else {
                var observer, observerOptions, observerCallback;
                observerOptions = {
                    'childList': true,
                    'subtree': true
                };
                observerCallback = function (mutations) {

                    //console.log(mutations);

                    mutations.map(function (record) {

                        if (record.addedNodes) {

                            /*jshint loopfunc: true */
                            var obj, widgets, plugins, hotkeys;

                            for (var i = 0, l = record.addedNodes.length; i < l; i++) {
                                obj = $(record.addedNodes[i]);

                                plugins = obj.find("[data-role]");

                                hotkeys = obj.find("[data-hotkey]");

                                $.each(hotkeys, function () {
                                    var element = $(this);
                                    var hotkey = element.data('hotkey').toLowerCase();

                                    //if ($.Metro.hotkeys.indexOf(hotkey) > -1) {
                                    //    return;
                                    //}

                                    if (element.data('hotKeyBonded') === true) {
                                        return;
                                    }

                                    $.Metro.hotkeys.push(hotkey);

                                    $(document).on('keyup', null, hotkey, function () {
                                        if (element === undefined) return;

                                        if (element[0].tagName === 'A' &&
                                            element.attr('href') !== undefined &&
                                            element.attr('href').trim() !== '' &&
                                            element.attr('href').trim() !== '#') {
                                            document.location.href = element.attr('href');
                                        } else {
                                            element.click();
                                        }
                                        return false;
                                    });

                                    element.data('hotKeyBonded', true);
                                    //console.log($.Metro.hotkeys);
                                });

                                if (obj.data('role') !== undefined) {
                                    widgets = $.merge(plugins, obj);
                                } else {
                                    widgets = plugins;
                                }

                                if (widgets.length) {
                                    $.each(widgets, function () {
                                        var _this = $(this);
                                        var roles = _this.data('role').split(/\s*,\s*/);
                                        roles.map(function (func) {
                                            try {
                                                if ($.fn[func] !== undefined && _this.data('initiated') !== true) {
                                                    $.fn[func].call(_this);
                                                    _this.data('initiated', true);
                                                }
                                            } catch (e) {
                                                if (window.METRO_DEBUG) {
                                                    console.log(e.message, e.stack);
                                                }
                                            }
                                        });
                                    });
                                }
                            }
                        }
                    });
                };

                //console.log($(document));
                observer = new MutationObserver(observerCallback);
                observer.observe(document, observerOptions);
            }
        }
    };

    // Source: js/utils/easing.js
    $.easing['jswing'] = $.easing['swing'];

    $.extend($.easing, {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert($.easing.default);
            return $.easing[$.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

    // Source: js/utils/hotkeys.js
    $.hotkeys = {
        version: "0.8",

        specialKeys: {
            8: "backspace",
            9: "tab",
            10: "return",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            59: ";",
            61: "=",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        },

        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": "\"",
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        },

        // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
        textAcceptingInputTypes: [
            "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
            "datetime-local", "search", "color", "tel"],

        // default input types not to bind to unless bound directly
        textInputTypes: /textarea|input|select/i,

        options: {
            filterInputAcceptingElements: true,
            filterTextInputs: true,
            filterContentEditable: true
        }
    };

    function keyHandler(handleObj) {
        if (typeof handleObj.data === "string") {
            handleObj.data = {
                keys: handleObj.data
            };
        }

        // Only care when a possible input has been specified
        if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
            return;
        }

        var origHandler = handleObj.handler,
            keys = handleObj.data.keys.toLowerCase().split(" ");

        handleObj.handler = function (event) {
            //      Don't fire in text-accepting inputs that we didn't directly bind to
            if (this !== event.target &&
                ($.hotkeys.options.filterInputAcceptingElements &&
                $.hotkeys.textInputTypes.test(event.target.nodeName) ||
                ($.hotkeys.options.filterContentEditable && $(event.target).attr('contenteditable')) ||
                ($.hotkeys.options.filterTextInputs &&
                $.inArray(event.target.type, $.hotkeys.textAcceptingInputTypes) > -1))) {
                return;
            }

            var special = event.type !== "keypress" && $.hotkeys.specialKeys[event.which],
                character = String.fromCharCode(event.which).toLowerCase(),
                modif = "",
                possible = {};

            $.each(["alt", "ctrl", "shift"], function (index, specialKey) {

                if (event[specialKey + 'Key'] && special !== specialKey) {
                    modif += specialKey + '+';
                }
            });

            // metaKey is triggered off ctrlKey erronously
            if (event.metaKey && !event.ctrlKey && special !== "meta") {
                modif += "meta+";
            }

            if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
                modif = modif.replace("alt+ctrl+shift+", "hyper+");
            }

            if (special) {
                possible[modif + special] = true;
            }
            else {
                possible[modif + character] = true;
                possible[modif + $.hotkeys.shiftNums[character]] = true;

                // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
                if (modif === "shift+") {
                    possible[$.hotkeys.shiftNums[character]] = true;
                }
            }

            for (var i = 0, l = keys.length; i < l; i++) {
                if (possible[keys[i]]) {
                    return origHandler.apply(this, arguments);
                }
            }
        };
    }

    $.each(["keydown", "keyup", "keypress"], function () {
        $.event.special[this] = {
            add: keyHandler
        };
    });

    // Source: js/utils/mousewheel.js
    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function () {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta; }
        if (orgEvent.detail) { delta = orgEvent.detail * -1; }

        // New school wheel delta (wheel event)
        if (orgEvent.deltaY) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if (orgEvent.deltaX) {
            deltaX = orgEvent.deltaX;
            delta = deltaX * -1;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY; }
        if (orgEvent.wheelDeltaX !== undefined) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if (!lowestDelta || absDelta < lowestDelta) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    // Source: js/utils/pre-code.js
    function preCode(selector) {
        var els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);

        els.forEach(function (el, idx, arr) {
            var txt = el.textContent
                .replace(/^[\r\n]+/, "")	// strip leading newline
                .replace(/\s+$/g, "");

            if (/^\S/gm.test(txt)) {
                el.textContent = txt;
                return;
            }

            var mat, str, re = /^[\t ]+/gm, len, min = 1e3;

            while (mat = re.exec(txt)) {
                len = mat[0].length;

                if (len < min) {
                    min = len;
                    str = mat[0];
                }
            }

            if (min == 1e3)
                return;

            el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        preCode("pre code, textarea");
    }, false);
    // Source: js/utils/touch-handler.js
    var hasTouch = 'ontouchend' in window, eventTimer;
    var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false;

    var addTouchEvents = function (element) {
        if (hasTouch) {
            element.addEventListener("touchstart", touch2Mouse, true);
            element.addEventListener("touchmove", touch2Mouse, true);
            element.addEventListener("touchend", touch2Mouse, true);
        }
    };

    function touch2Mouse(e) {
        var theTouch = e.changedTouches[0];
        var mouseEv;

        switch (e.type) {
            case "touchstart":
                mouseEv = "mousedown";
                break;
            case "touchend":
                mouseEv = "mouseup";
                break;
            case "touchmove":
                mouseEv = "mousemove";
                break;
            default:
                return;
        }


        if (mouseEv == "mousedown") {
            eventTimer = (new Date()).getTime();
            startX = theTouch.clientX;
            startY = theTouch.clientY;
            mouseDown = true;
        }

        if (mouseEv == "mouseup") {
            if ((new Date()).getTime() - eventTimer <= 500) {
                mouseEv = "click";
            } else if ((new Date()).getTime() - eventTimer > 1000) {
                mouseEv = "longclick";
            }
            eventTimer = 0;
            mouseDown = false;
        }

        if (mouseEv == "mousemove") {
            if (mouseDown) {
                deltaX = theTouch.clientX - startX;
                deltaY = theTouch.clientY - startY;
                moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
            }
        }

        var mouseEvent = document.createEvent("MouseEvent");
        mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
        theTouch.target.dispatchEvent(mouseEvent);

        e.preventDefault();
    }

    // Source: js/widgets/accordion.js
    $.widget("metro.accordion", {

        version: "3.0.0",

        options: {
            closeAny: false,
            speed: 'fast',
            onFrameOpen: function (frame) { return true; },
            onFrameOpened: function (frame) { },
            onFrameClose: function (frame) { return true; },
            onFrameClosed: function (frame) { }
        },

        init: function () {
            var that = this, element = this.element;

            element.on('click', '.heading', function (e) {
                var frame = $(this).parent();

                if (frame.hasClass('disabled')) { return false; }

                if (!frame.hasClass('active')) {
                    that._openFrame(frame);
                } else {
                    that._closeFrame(frame);
                }

                e.preventDefault();
                e.stopPropagation();
            });
        },

        _closeAllFrames: function () {
            var that = this;
            var frames = this.element.children('.frame.active');
            $.each(frames, function () {
                that._closeFrame($(this));
            });
        },

        _openFrame: function (frame) {
            var o = this.options;
            var content = frame.children('.content');
            var result;

            if (typeof o.onFrameOpen === 'function') {
                if (!o.onFrameOpen(frame)) { return false; }
            } else {
                if (typeof window[o.onFrameOpen] === 'function') {
                    if (!window[o.onFrameOpen](frame)) { return false; }
                } else {
                    result = eval("(function(){" + o.onFrameOpen + "})");
                    if (!result.call(frame)) { return false; }
                }
            }

            if (o.closeAny) { this._closeAllFrames(); }

            content.slideDown(o.speed);
            frame.addClass('active');

            if (typeof o.onFrameOpened === 'function') {
                o.onFrameOpened(frame);
            } else {
                if (typeof window[o.onFrameOpened] === 'function') {
                    window[o.onFrameOpened](frame);
                } else {
                    result = eval("(function(){" + o.onFrameOpened + "})");
                    result.call(frame);
                }
            }
        },

        _closeFrame: function (frame) {
            var o = this.options;
            var content = frame.children('.content');
            var result;

            if (typeof o.onFrameClose === 'function') {
                if (!o.onFrameClose(frame)) { return false; }
            } else {
                if (typeof window[o.onFrameClose] === 'function') {
                    if (!window[o.onFrameClose](frame)) { return false; }
                } else {
                    result = eval("(function(){" + o.onFrameClose + "})");
                    if (!result.call(frame)) { return false; }
                }
            }

            content.slideUp(o.speed, function () {
                frame.removeClass("active");
            });

            if (typeof o.onFrameClosed === 'function') {
                o.onFrameClosed(frame);
            } else {
                if (typeof window[o.onFrameClosed] === 'function') {
                    window[o.onFrameClosed](frame);
                } else {
                    result = eval("(function(){" + o.onFrameClosed + "})");
                    result.call(frame);
                }
            }
        },

        _create: function () {
            var that = this, o = this.options, element = this.element;

            $.each(this.element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            that.init();
            element.data('accordion', this);

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/appbar.js
    $.widget("metro.appbar", {
        version: "3.0.0",
        options: {
            flexstyle: "app-bar-menu", //app-bar-menu | YOUR_OWN class for the pull flexmenu, basic support for "sidebar2" are integrated in the appbar.less file
            flexclean: false,           //true | false. if set all entries except the no-flexible ones will removed
            flextolerance: 3               //in px. if set the freespace is runnig out a little bit earlier, so floats 
            //and not no-wrap elements have no chance to wrap. help for rounding errors also
        },
        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initBar();

            element.data('appbar', this);

        },
        _calculateFreeSpace: function () {
            var that = this, element = this.element, o = this.options;
            var menusParentWidth = 0, childrenWidth = 0, children;
            var freeSpace;

            //get the overall free space from the wrapping parent of the menus
            menusParentWidth = $(that.menusParent).width();

            //get the width of all visible children
            children = $(that.menusParent).children(":visible").not(".app-bar-pullmenu");


            //margin support: because there could be margins between elements, we do not summarize the width up with a one liner
            //but calculate width of all children in an intelligent way, we takte the left offsett of the first element and right offset of the right element
            //for that we have to support float left and right too:
            //float left and right support: we can not be sure that the first element in dom is on the left and the last is on the right
            //right floated
            //   - sort the children as the user see them

            //sort the children as the user see them according to the css float
            var childrenLeftFloated = [];
            var childrenRightFloated = [];
            var childrenAsUsual = [];
            var floatState;

            for (var i = 0, len = children.length; i < len; i++) {
                floatState = $(children[i]).css("float");
                switch (floatState) {
                    case "left":
                        childrenLeftFloated.push(children[i]);
                        break;
                    case "right":
                        childrenRightFloated.push(children[i]);
                        break;
                    default:
                        childrenAsUsual.push(children[i]);
                }
            }
            //right floats are from right to left
            childrenRightFloated.reverse();

            //=== build up the new children jquery object ===
            //join the left, right and normal children   
            children = new Array();
            children = childrenLeftFloated.concat(childrenAsUsual, childrenRightFloated);

            //convert the array to jquery object again
            children = $(children);

            //=== calculate the width of the elements with margin support ===

            //adds the left margin dedicated to the first child
            childrenWidth += parseInt($(children).first().css("margin-left"));

            //walk trough the children and add the size, 
            for (var i = 0, len = children.length - 1; i <= len; i++) {
                childrenWidth += $(children[i]).outerWidth();
                if (i !== len) {
                    //the highest margin between two elements counts
                    childrenWidth += Math.max(
                            parseInt($(children[i]).css("margin-right")),
                            parseInt($(children[i + 1]).css("margin-left"))

                            );
                }
            }
            //the right margin for the right child
            childrenWidth += parseInt($(children[len]).css("margin-right"));

            //now we have all data for calculation. Yippie-Ya-Yeah, Schweinebacke!! (much cooler German translation of B. W. Yippie-Ya-Yeah, Motherf***er)
            freeSpace = menusParentWidth - childrenWidth;

            //writing the data we found out to the element's data
            that.freeSpace = freeSpace;                     //not used space within the parent(mostly the appbar itself)
            that.childrenWidth = childrenWidth;             //the total width of the children
            that.menusParentWidth = menusParentWidth;       //the width without padding or something

            return freeSpace;
        },
        _originIndexMove: function (menu, child) {
            //find all children which are lower than we
            var flexChildren = $(menu).children().filter(function () {
                return parseInt($(this).attr("data-flexorderorigin")) < parseInt($(child).attr("data-flexorderorigin"));
            });

            if (flexChildren.length > 0) {
                //because we are greater, we set it after the childern which are lower
                $(flexChildren).last().after(child);
            } else {
                //find all children which are greater than we are
                flexChildren = $(menu).children().filter(function () {
                    return parseInt($(this).attr("data-flexorderorigin")) > parseInt($(child).attr("data-flexorderorigin"));
                });
                if (flexChildren.length > 0) {
                    //because we are lower, we set us before the childern which are greater
                    $(flexChildren).first().before(child);
                } else {
                    //we have no children, just append it
                    $(menu).append(child);
                }
            }
        },
        _moveMenuEntry: function (direction) {
            var that = this, element = this.element, o = this.options;

            direction = direction || "toPullMenu"; // "fromPullMenu" is also an option

            if (direction === "toPullMenu") {
                //get next candidate which could be moved to the pullmenu, in fact the last which not have a mark as pullmenu-entry

                var nextToHide = $(that.allMenuEntries).not(".app-bar-pullmenu-entry").last();

                if (nextToHide.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }


                //find out in which menubar we are located in
                var topMenu = $(nextToHide).parent(); //this is only a appbar-menu not the appbar itself
                //find out where we have to go
                var topMenuIndex = $(that.flexVisibles).index($(nextToHide).parent());
                var pullMenuBar = $(that.pullMenu).find(".app-bar-pullmenubar").eq(topMenuIndex); //TODO: Make the class app-bar-menu configurable - perhaps sidebar

                that._originIndexMove(pullMenuBar, nextToHide);
                //move it to the pullmenu
                //                if ($(topMenu).is("[data-flexdirection='reverse']")) {//data-flexdirection="reverse" support
                //                    $(nextToHide).appendTo(pullMenuBar);
                //                } else {                                             //normal way
                //                    $(nextToHide).prependTo(pullMenuBar);
                //                }

                //mark the entry as a entry of the pullmenu
                $(nextToHide).addClass("app-bar-pullmenu-entry");

                //the menubar is initiated with the hidden class, so we do not see empty pullmenubars, we must unhide them
                //it does not matter, if we see it already, we do it always:
                $(pullMenuBar).removeClass("hidden")
                        .show();

                //in case there are no more entries in the top menu bar we can hide it
                if ($(topMenu).children().length === 0) {
                    $(topMenu).addClass("hidden");
                }

                //we show the pullbutton now
                $(that.pullButton).show();

                return nextToHide;

            } else if (direction === "fromPullMenu") {
                //get next candidate which could be moved to the topbar menu, in fact the first which is still marked as pullmenu-entry
                var nextToShow = $(that.allMenuEntries).filter(".app-bar-pullmenu-entry").first();


                //find out in which pullmenu we are located in
                var pullMenuBar = $(nextToShow).parent(); //only one single menu, not the whole thing

                //find out where we have to go
                var topMenuIndex = $(pullMenuBar).index(); //it is the same structur as that.flexVisibles, so we can use the simple index
                var topMenu = $(that.flexVisibles).eq(topMenuIndex);

                $(topMenu).removeClass("hidden");
                //remove the mark as a entry of the pullmenu and move it to the normal top menu
                $(nextToShow).removeClass("app-bar-pullmenu-entry");

                //cosider the flexorder

                //walk trough the children in topMenu and find out what we must do

                //find all children which are lower than we
                that._originIndexMove(topMenu, nextToShow);

                //in case there are no more entries left, we can hide the pullbar menu from this entry
                if ($(pullMenuBar).children().length === 0) {
                    $(pullMenuBar).addClass("hidden")
                            .hide();
                }

                //in case we have no more menus in the pullbar area, we hide the pullbar thing
                if ($(that.pullMenu).children(".app-bar-pullmenubar").not(".hidden").length === 0) {
                    $(that.pullMenu).hide().addClass("hidden");
                    $(that.pullButton).hide();
                }

                if (nextToShow.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }
                return nextToShow;
            }
        },
        _checkMenuEntries: function () {
            var that = this, element = this.element, o = this.options;

            var forceEndLoop = false;

            for (var maxLoop = 0, maxLoopLen = that.allMenuEntries.length; maxLoop < maxLoopLen; maxLoop++) {  //we do nothing with this, we could use while(true) but there is a danger of infinite loops

                //calculate the empty space within the appbar we can use for hidden children
                that._calculateFreeSpace();
                var freeSpace = that.freeSpace;

                if (freeSpace < o.flextolerance || o.flexclean) { //3px is tolerance and to be faster than the wrapping. TODO: make this configurable
                    //no space left, we hide a menu entry now

                    //move the menu entry to the pullbar and check if there are more menuentries left
                    if (!(that._moveMenuEntry("toPullMenu"))) {
                        //nothing left to hide
                        break;
                    } else {
                        //we moved successfully, perhaps we can hide more entries, we recheck the appbar, 
                        //remember, we are in a endless loop, which checks this for us

                        if (!forceEndLoop) {
                            continue;
                        }
                    }

                } else {
                    //we have space here, we try to get more entries there

                    //check if there is something to do
                    if (!(that._moveMenuEntry("fromPullMenu"))) {
                        //nothing left to show
                        break;
                    } else {
                        forceEndLoop = true;
                        continue;
                    }

                }

                //we continue manually. if we reach the end of the loop we end this better so we do not produce infinite loop accidentally
                break;
            }
        },
        resize: function () {
            var that = this, element = this.element, o = this.options;

            if (that.initiatedAsFlex) {
                this._checkMenuEntries();
            }
        },
        _initBar: function () {
            var that = this, element = this.element, o = this.options;

            that.lastFlexAction = undefined;

            that.pullButton = $(element).find('.app-bar-pullbutton');
            var menus = $(element).find('.app-bar-menu');

            that.initiatedAsFlex = false;   //we change it later in the code - conditionally
            o.flexclean = $(element).is("[data-flexclean='true']") || o.flexclean;
            o.flexstyle = $(element).attr("data-flexstyle") || o.flexstyle;

            var flexVisible, menuEntries; //temporarly used vars

            that.flexVisibles = $();    //the menus which are directly in the appbar
            that.allMenuEntries = $();  //all menu entries in a sorted order
            that.menusParent = $();     //common parent from the menus, which can but do not need to be this.element. We get the max width from it
            that.pullMenu = $();

            if (menus.length > 0 && $(element).is(":not('.no-flexible')")) {
                //strip off all .no-flexible menus
                that.flexVisibles = $(menus).not(".no-flexible");

                if (that.flexVisibles.length > 0) {

                    that.initiatedAsFlex = true;

                    //sort the menus according to the data-flexorder attribute
                    that.flexVisibles.sort(function (a, b) {
                        var aValue = (parseInt($(a).data("flexorder")) || $(a).index() + 1);
                        var bValue = (parseInt($(b).data("flexorder")) || $(b).index() + 1);
                        return aValue - bValue;
                    });

                    //get all children in a sorted order according to the data-flexorder attribute
                    $(that.flexVisibles).each(function () {
                        flexVisible = this;

                        menuEntries = $(flexVisible).children();

                        //give  all menuEntries a flexorder which have not one and save the original order
                        $(menuEntries).each(function () {
                            $(this).attr("data-flexorderorigin", $(this).index());

                            if (!($(this).is("[data-flexorder]"))) {
                                $(this).attr("data-flexorder", $(this).index() + 1);
                            }
                        });

                        menuEntries.sort(function (a, b) {
                            var aValue = parseInt($(a).data("flexorder"));
                            var bValue = parseInt($(b).data("flexorder"));
                            return aValue - bValue;
                        });

                        //data-flexdirection="reverse" support 
                        if ($(flexVisible).is("[data-flexdirection='reverse']")) {
                            menuEntries.reverse();
                        }

                        $.merge(that.allMenuEntries, $(menuEntries).not(".no-flexible")); //strip off all .no-flexible elements
                    });

                    //find the parent, which contains all menus
                    that.menusParent = $(element).find(".app-bar-menu").first().parent();

                    // === create a pull down button + pull menu ===
                    //check if a pulldown button already exists, if not we create one
                    if (!(that.pullButton.length > 0)) {
                        //DOC: We can create a display:none button, if we want to force to not show a pull button
                        that.pullButton = $('<div class="app-bar-pullbutton automatic"></div>');
                        $(that.menusParent).append(that.pullButton);
                    }

                    //create a pullmenu
                    that.pullMenu = $('<nav class="app-bar-pullmenu hidden" />');

                    //create menubars within the pullmenu
                    that.flexVisibles.each(function () {
                        $(that.pullMenu).append($('<ul class="app-bar-pullmenubar hidden ' + o.flexstyle + '" />'));
                    });



                    // WORKAROUND: this is because a :after:before clearfix for the pullmenu do not work for some reason
                    //position: absolute does not work if we do not break the float. another pure css solution should be written in the appbar.less
                    //after that remove this line
                    $(that.menusParent).append($('<div class="clearfix" style="width: 0;">'));
                    //-----------


                    $(that.pullMenu).addClass("flexstyle-" + o.flexstyle);

                    $(that.menusParent).append(that.pullMenu);

                    //check for the first time the menu entries /hide them if needed, etc.
                    that._checkMenuEntries();



                    //===  EVENTS =================================================

                    //activate the click event for the pull button
                    $(that.pullButton).on("click", function () {

                        //who am i?
                        that = $(this).closest("[data-role=appbar]").data("appbar");

                        //we show /hide the pullmenu
                        if ($(that.pullMenu).is(":hidden")) {
                            $(that.pullMenu).show();
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .hide().not(".hidden").slideDown("fast");
                        } else {
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .not(".hidden").show().slideUp("fast", function () {
                                        $(that.pullMenu).hide();
                                    });
                        }

                    });


                    //we have to calculate everything new, if the user resizes or zooms the window
                    $(window).resize(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });


                    //because fonts(also icon-fonts) are often loaded async after the page has loaded and this script walked through already, 
                    //we have to check again after these elements loaded. Because there is no way to observe only specific elements, we do it for the window
                    $(window).load(function () {
                        $("[data-role=appbar]:not(.no-flexible)").each(function () {
                            $(this).data("appbar").resize();
                        });
                    });

                    //pictures (or other outside stuff was loaded - pictures are also often loaded async or have a lazy load or are injected after a while. 
                    //a picture can change a size of the element from the appbar, so we must recheck it again.
                    $("[data-role=appbar]:not(.no-flexible) [src]").on("load", function () {
                        //who am i?
                        var appbar = $(this).closest("[data-role=appbar]").data("appbar");
                        appbar.resize();
                    });
                }
            }

        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/button-groups.js
    $.widget("metro.group", {

        version: "3.0.0",

        options: {
            groupType: 'one-state', // 'multi-state'
            buttonStyle: false,
            onChange: function (index, btn) { return true; },
            onChanged: function (index, btn) { }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;
            var result;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (!element.hasClass('group-of-buttons')) { element.addClass('group-of-buttons'); }

            var buttons = element.find('.button, .toolbar-button');

            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).data('index', i);
            }

            if (o.buttonStyle !== false) {
                buttons.addClass(o.buttonStyle);
            }

            element.on('click', '.button, .toolbar-button', function () {

                var button = $(this), index = button.data('index');

                if (typeof o.onChange === 'function') {
                    if (!o.onChange(index, button)) { return false; }
                } else {
                    if (typeof window[o.onChange] === 'function') {
                        if (!window[o.onChange](index, button)) { return false; }
                    } else {
                        result = eval("(function(){" + o.onChange + "})");
                        if (!result.call(index, button)) { return false; }
                    }
                }

                if (o.groupType === 'one-state') {
                    buttons.removeClass('active');
                    $(this).addClass('active');
                } else {
                    $(this).toggleClass('active');
                }

                if (typeof o.onChanged === 'function') {
                    o.onChanged(index, button);
                } else {
                    if (typeof window[o.onChanged] === 'function') {
                        window[o.onChanged](index, button);
                    } else {
                        result = eval("(function(){" + o.onChanged + "})");
                        result.call(index, button);
                    }
                }
            });

            element.data('group', this);

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/calendar.js
    $.widget("metro.calendar", {

        version: "3.0.0",

        options: {
            format: "yyyy-mm-dd",
            multiSelect: false,
            startMode: 'day', //year, month, day
            weekStart: window.METRO_CALENDAR_WEEK_START, // 0 - Sunday, 1 - Monday
            otherDays: true,
            date: new Date(),
            minDate: false,
            maxDate: false,
            preset: false,
            exclude: false,
            stored: false,
            buttons: true,
            buttonToday: true,
            buttonClear: true,
            locale: 'en',
            actions: true,
            condensedGrid: false,
            getDates: function (d) { },
            dayClick: function (d, d0) { }
        },

        //_storage: [],
        //_exclude: [],

        _year: 0,
        _month: 0,
        _day: 0,
        _today: new Date(),
        _event: '',

        _mode: 'day', // day, month, year
        _distance: 0,

        _events: [],

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (typeof o.date === 'string') {
                o.date = new Date(o.date);
            }

            if (o.minDate !== false && typeof o.minDate === 'string') {
                o.minDate = new Date(o.minDate + 'T00:00:00Z') - 24 * 60 * 60 * 1000;
            }

            if (o.maxDate !== false && typeof o.maxDate === 'string') {
                o.maxDate = new Date(o.maxDate + 'T10:00:01Z');
            }

            //console.log(window.METRO_LOCALES);

            this.locales = window.METRO_LOCALES;

            this._year = o.date.getFullYear();
            this._distance = o.date.getFullYear() - 4;
            this._month = o.date.getMonth();
            this._day = o.date.getDate();
            this._mode = o.startMode;

            element.data("_storage", []);
            element.data("_exclude", []);
            element.data("_stored", []);
            if (!element.hasClass('calendar')) { element.addClass('calendar'); }

            var re, dates;

            if (o.preset) {
                re = /\s*,\s*/;
                dates = o.preset.split(re);
                $.each(dates, function () {
                    if (new Date(this) !== undefined) { that.setDate(this); }
                });
            }

            if (o.exclude) {
                re = /\s*,\s*/;
                dates = o.exclude.split(re);
                $.each(dates, function () {
                    if (new Date(this) !== undefined) { that.setDateExclude(this); }
                });
            }

            if (o.stored) {
                re = /\s*,\s*/;
                dates = o.stored.split(re);
                $.each(dates, function () {
                    if (new Date(this) !== undefined) { that.setDateStored(this); }
                });
            }

            this._renderCalendar();

            element.data('calendar', this);

        },

        _renderButtons: function (table) {
            var tr, td, o = this.options;

            if (this.options.buttons) {

                var buttonToday = o.buttonToday ? "<button class='button calendar-btn-today small-button success'>" + this.locales[o.locale].buttons[0] + "</button>" : "";
                var buttonClear = o.buttonClear ? "<button class='button calendar-btn-clear small-button warning'>" + this.locales[o.locale].buttons[1] + "</button>" : "";

                tr = $("<div/>").addClass("calendar-row calendar-actions");
                td = $("<div/>").addClass("align-center").html(
                    buttonToday + buttonClear
                );
                td.appendTo(tr);
                tr.appendTo(table);
            }
        },

        _renderMonth: function () {
            var that = this, o = this.options,
                year = this._year,
                month = this._month,
                day = this._day,
                event = this._event,
                feb = 28;

            if (month === 1) {
                if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
                    feb = 29;
                }
            }

            var totalDays = ["31", "" + feb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
            var daysInMonth = totalDays[month];
            var first_week_day = new Date(year, month, 1).getDay();

            var table, tr, td, i, div;

            this.element.html("");

            table = $("<div/>").addClass("calendar-grid");
            if (o.condensedGrid) {
                table.addClass('condensed no-border');
            }

            //console.log(this.locales);

            // Add calendar header
            tr = $("<div/>").addClass('calendar-row no-margin');

            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-month' href='#'>&#12296;</a>").appendTo(tr);

            $("<div/>").addClass("calendar-cell sel-month align-center").html("<a class='btn-select-month' href='#'>" + this.locales[o.locale].months[month] + ' ' + year + "</a>").appendTo(tr);

            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-month' href='#'>&#12297;</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            // Add day names
            var j;
            tr = $("<div/>").addClass('calendar-row week-days');
            for (i = 0; i < 7; i++) {
                if (!o.weekStart) {
                    td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                    div = $("<div/>").html(this.locales[o.locale].days[i + 7]).appendTo(td);
                } else {
                    j = i + 1;
                    if (j === 7) { j = 0; }
                    td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                    div = $("<div/>").html(this.locales[o.locale].days[j + 7]).appendTo(td);
                }
            }
            tr.addClass("calendar-subheader").appendTo(table);

            // Add empty days for previos month
            var prevMonth = this._month - 1; if (prevMonth < 0) { prevMonth = 11; } var daysInPrevMonth = totalDays[prevMonth];
            var _first_week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;
            var htmlPrevDay = "";
            tr = $("<div/>").addClass('calendar-row');
            for (i = 0; i < _first_week_day; i++) {
                if (o.otherDays) { htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1); }
                td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
                div = $("<div/>").addClass('other-day').html(htmlPrevDay).appendTo(td);
                if (!o.otherDays) {
                    div.css('visibility', 'hidden');
                }
            }

            // Days for current month
            var week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;

            var d, a, d_html;

            for (i = 1; i <= daysInMonth; i++) {
                week_day %= 7;

                if (week_day === 0) {
                    tr.appendTo(table);
                    tr = $("<div/>").addClass('calendar-row');
                }

                td = $("<div/>").addClass("calendar-cell align-center day");
                div = $("<div/>").appendTo(td);

                if (o.minDate !== false && (new Date(year, month, i) < o.minDate) || o.maxDate !== false && (new Date(year, month, i) > o.maxDate)) {
                    td.removeClass("day");
                    div.addClass("other-day");
                    d_html = i;
                } else {
                    d_html = "<a href='#'>" + i + "</a>";
                }

                div.html(d_html);

                //console.log(div);

                if (year === this._today.getFullYear() && month === this._today.getMonth() && this._today.getDate() === i) {
                    td.addClass("today");
                }

                //console.log('xxx');
                d = (new Date(this._year, this._month, i)).format('yyyy-mm-dd');

                if (this.element.data('_storage').indexOf(d) >= 0) {
                    a = td.find("a");
                    a.parent().parent().addClass("selected");
                }

                if (this.element.data('_exclude').indexOf(d) >= 0) {
                    a = td.find("a");
                    a.parent().parent().addClass("exclude");
                }

                if (this.element.data('_stored').indexOf(d) >= 0) {
                    a = td.find("a");
                    a.parent().parent().addClass("stored");
                }

                td.appendTo(tr);
                week_day++;
            }


            // next month other days
            var htmlOtherDays = "";
            for (i = week_day + 1; i <= 7; i++) {
                if (o.otherDays) { htmlOtherDays = i - week_day; }
                td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
                div = $("<div/>").addClass('other-day').html(htmlOtherDays).appendTo(td);
                if (!o.otherDays) {
                    div.css('visibility', 'hidden');
                }
            }

            tr.appendTo(table);
            this._renderButtons(table);
            table.appendTo(this.element);
        },

        _renderMonths: function () {
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<div/>").addClass("calendar-grid");
            if (this.options.condensedGrid) {
                table.addClass('condensed no-border');
            }

            // Add calendar header
            tr = $("<div/>").addClass('calendar-row');

            $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-select-year' href='#'>" + this._year + "</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<div/>").addClass('calendar-row');
            j = 0;
            for (i = 0; i < 12; i++) {

                //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
                td = $("<div/>").addClass("calendar-cell month-cell align-center month").html("<a href='#' data-month='" + i + "'>" + this.locales[this.options.locale].months[i + 12] + "</a>");

                if (this._month === i && (new Date()).getFullYear() === this._year) {
                    td.addClass("today");
                }

                td.appendTo(tr);
                if ((j + 1) % 4 === 0) {
                    tr.appendTo(table);
                    tr = $("<div/>").addClass('calendar-row');
                }
                j += 1;
            }

            this._renderButtons(table);

            table.appendTo(this.element);
        },

        _renderYears: function () {
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<div/>").addClass("calendar-grid");
            if (this.options.condensedGrid) {
                table.addClass('condensed no-border');
            }

            // Add calendar header
            tr = $("<div/>").addClass('calendar-row cells4');

            $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-none-btn'>" + (this._distance) + "-" + (this._distance + 11) + "</a>").appendTo(tr);
            $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<div/>").addClass('calendar-row');

            j = 0;
            for (i = this._distance; i < this._distance + 12; i++) {
                td = $("<div/>").addClass("calendar-cell year-cell align-center year").html("<a href='#' data-year='" + i + "'>" + i + "</a>");
                if ((new Date()).getFullYear() === i) {
                    td.addClass("today");
                }
                td.appendTo(tr);
                if ((j + 1) % 4 === 0) {
                    tr.appendTo(table);
                    tr = $("<div/>").addClass('calendar-row');
                }
                j += 1;
            }

            this._renderButtons(table);

            table.appendTo(this.element);
        },

        _renderCalendar: function () {
            switch (this._mode) {
                case 'year': this._renderYears(); break;
                case 'month': this._renderMonths(); break;
                default: this._renderMonth();
            }
            this._initButtons();
        },

        _initButtons: function () {
            // Add actions
            var that = this, o = this.options,
                table = this.element.find('.calendar-grid');

            if (this._mode === 'day') {
                table.find('.btn-select-month').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-month').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month -= 1;
                    if (that._month < 0) {
                        that._year -= 1;
                        that._month = 11;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-next-month').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month += 1;
                    if (that._month === 12) {
                        that._year += 1;
                        that._month = 0;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.day a').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    if ($(this).parent().parent().hasClass('exclude')) {
                        return false;
                    }

                    var d = (new Date(that._year, that._month, parseInt($(this).html()))).format(that.options.format, null);
                    var d0 = (new Date(that._year, that._month, parseInt($(this).html())));

                    if (that.options.multiSelect) {
                        $(this).parent().parent().toggleClass("selected");

                        if ($(this).parent().parent().hasClass("selected")) {
                            that._addDate(d);
                        } else {
                            that._removeDate(d);
                        }
                    } else {
                        table.find('.day a').parent().parent().removeClass('selected');
                        $(this).parent().parent().addClass("selected");
                        that.element.data('_storage', []);
                        that._addDate(d);
                    }


                    if (typeof o.dayClick === 'function') {
                        o.dayClick(d, d0);
                    } else {
                        if (typeof window[o.dayClick] === 'function') {
                            window[o.dayClick](d, d0);
                        } else {
                            var result = eval("(function(){" + o.dayClick + "})");
                            result.call(d, d0);
                        }
                    }
                });
            } else if (this._mode === 'month') {
                table.find('.month a').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month = parseInt($(this).data('month'));
                    that._mode = 'day';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.btn-select-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'year';
                    that._renderCalendar();
                });
            } else {
                table.find('.year a').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year = parseInt($(this).data('year'));
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance -= 10;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance += 10;
                    that._renderCalendar();
                });
            }

            table.find('.calendar-btn-today').on('click', function (e) {
                //that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._mode = that.options.startMode;
                that.options.date = new Date();
                that._year = that.options.date.getFullYear();
                that._month = that.options.date.getMonth();
                that._day = that.options.date.getDate();
                that._renderCalendar();
            });
            table.find('.calendar-btn-clear').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                that.options.date = new Date();
                that._year = that.options.date.getFullYear();
                that._month = that.options.date.getMonth();
                that._day = that.options.date.getDate();
                that.element.data('_storage', []);
                that._renderCalendar();
            });

        },

        _addDate: function (d) {
            var index = this.element.data('_storage').indexOf(d);
            if (index < 0) { this.element.data('_storage').push(d); }
        },

        _removeDate: function (d) {
            var index = this.element.data('_storage').indexOf(d);
            this.element.data('_storage').splice(index, 1);
        },

        _addDateExclude: function (d) {
            var index = this.element.data('_exclude').indexOf(d);
            if (index < 0) { this.element.data('_exclude').push(d); }
        },

        _addDateStored: function (d) {
            var index = this.element.data('_stored').indexOf(d);
            if (index < 0) { this.element.data('_stored').push(d); }
        },

        _removeDateExclude: function (d) {
            var index = this.element.data('_exclude').indexOf(d);
            this.element.data('_exclude').splice(index, 1);
        },

        _removeDateStored: function (d) {
            var index = this.element.data('_stored').indexOf(d);
            this.element.data('_stored').splice(index, 1);
        },

        setDate: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())).format('yyyy-mm-dd');
            this._addDate(r);
            this._renderCalendar();
        },

        setDateExclude: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())).format('yyyy-mm-dd');
            this._addDateExclude(r);
            this._renderCalendar();
        },

        setDateStored: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())).format('yyyy-mm-dd');
            this._addDateStored(r);
            this._renderCalendar();
        },

        getDate: function (index) {
            return new Date(index !== undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
        },

        getDates: function () {
            var res;
            res = $.merge($.merge([], this.element.data('_storage')), this.element.data('_stored'));
            return res.unique();
        },

        unsetDate: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())).format('yyyy-mm-dd');
            this._removeDate(r);
            this._renderCalendar();
        },

        unsetDateExclude: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())).format('yyyy-mm-dd');
            this._removeDateExclude(r);
            this._renderCalendar();
        },

        unsetDateStored: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())).format('yyyy-mm-dd');
            this._removeDateStored(r);
            this._renderCalendar();
        },

        _destroy: function () { },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/carousel.js
    $.widget("metro.carousel", {

        version: "3.0.0",

        options: {
            auto: true,
            period: 5000,
            duration: 1000,
            effect: 'slide', // slide, fade, switch, slowdown
            effectFunc: 'linear',
            direction: 'left',
            controls: true,
            controlNext: false,
            controlPrev: false,
            markers: true,
            stop: true,
            width: '100%',
            height: false,

            _slides: {},
            _currentIndex: 0,
            _interval: 0,
            _outPosition: 0,
            _animating: false
        },


        _create: function () {
            var that = this, o = this.options,
                element = this.element;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            o._slides = element.find('.slide');

            var max_height = 0; //element.find('.slide:nth-child(1)').outerHeight();


            $.each(o._slides, function () {
                var oh, slide = $(this);

                oh = slide.outerHeight();

                if (oh > max_height) { max_height = oh; }
            });

            element.css({
                'width': o.width,
                'height': o.height ? o.height : max_height
            });

            if (o._slides.length <= 1) { return; }

            if (o.markers) {
                this._markers();
            }

            if (o.controls) {
                this._controls();
            }

            if (o.stop) {
                element
                    .on('mouseenter', function () {
                        clearInterval(o._interval);
                    })
                    .on('mouseleave', function () {
                        if (that.options.auto) { that._autoStart(); }// that.options.period;
                    });
            }

            element.find('.slide').hide();
            element.find('.slide:nth-child(1)').show();

            //this._slideToSlide(0);
            if (o.auto) {
                this._autoStart();
            }

            element.data('carousel', this);

        },

        _autoStart: function () {
            var that = this, o = this.options;
            o._interval = setInterval(function () {
                if (o.direction === 'left') {
                    that._slideTo('next');
                } else {
                    that._slideTo('prior');
                }
            }, o.period);
        },

        _slideTo: function (direction) {
            var carousel = this.element, that = this, o = this.options;
            var currentSlide = o._slides[o._currentIndex], nextSlide;

            if (direction === undefined) { direction = 'next'; }

            if (direction === 'prior') {
                o._currentIndex -= 1;
                if (o._currentIndex < 0) { o._currentIndex = o._slides.length - 1; }

                o._outPosition = this.element.width();

            } else if (direction === 'next') {
                o._currentIndex += 1;
                if (o._currentIndex >= o._slides.length) { o._currentIndex = 0; }

                o._outPosition = -this.element.width();

            }

            nextSlide = o._slides[o._currentIndex];

            switch (this.options.effect) {
                case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
                case 'slowdown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
                case 'fade': this._effectFade(currentSlide, nextSlide, this.options.duration); break;
                default: this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            carousel.find('.carousel-bullets a').each(function () {
                var index = $(this).data('num');
                if (index === o._currentIndex) {
                    $(this).addClass('bullet-on');
                } else {
                    $(this).removeClass('bullet-on');
                }
            });
        },

        _slideToSlide: function (slideIndex) {
            var o = this.options,
                currentSlide = o._slides[o._currentIndex],
                nextSlide = o._slides[slideIndex];

            if (o._currentIndex === slideIndex) {
                return false;
            }

            if (slideIndex > o._currentIndex) {
                o._outPosition = -this.element.width();
            } else {
                o._outPosition = this.element.width();
            }

            switch (this.options.effect) {
                case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
                case 'slowdown': this._effectSlowdown(currentSlide, nextSlide); break;
                case 'fade': this._effectFade(currentSlide, nextSlide); break;
                default: this._effectSlide(currentSlide, nextSlide);
            }

            o._currentIndex = slideIndex;
        },

        _controls: function () {
            var next, prev, that = this, element = this.element, o = this.options;

            next = $('<span/>').addClass('carousel-switch-next').html("&gt;");
            prev = $('<span/>').addClass('carousel-switch-prev').html("&lt;");

            if (o.controlNext) {
                next.html(o.controlNext);
            }

            if (o.controlPrev) {
                prev.html(o.controlPrev);
            }

            next.appendTo(element);
            prev.appendTo(element);

            if (o._slides.length > 1) {
                prev.on('click', function () {
                    if (o._animating === false) {
                        that._slideTo('prior');
                        o._animating = true;
                        setTimeout(function () { o._animating = false; }, o.duration);
                    }
                });
                next.on('click', function () {
                    if (o._animating === false) {
                        that._slideTo('next');
                        o._animating = true;
                        setTimeout(function () { o._animating = false; }, o.duration);
                    }
                });
            } else {
                next.hide();
                prev.hide();
            }
        },

        _markers: function () {
            var div, a, i, that = this, o = this.options;

            div = $('<div class="carousel-bullets" />');

            for (i = 0; i < o._slides.length; i++) {
                a = $('<a class="carousel-bullet" href="javascript:void(0)" data-num="' + i + '"></a>');
                if (i === 0) {
                    a.addClass('bullet-on');
                }
                a.appendTo(div);
            }


            div.find('a').on('click', function (e) {
                var _this = $(this),
                    index = _this.data('num');



                div.find('a').removeClass('bullet-on');
                _this.addClass('bullet-on');

                if (index === o._currentIndex) {
                    return false;
                }

                that._slideToSlide(index);

                e.preventDefault();
                e.stopPropagation();
            });

            div.appendTo(this.element);

        },


        _effectSwitch: function (currentSlide, nextSlide) {
            $(currentSlide)
                .hide();
            $(nextSlide)
                .css({ left: 0 })
                .show();
            this.element.css({
                height: $(nextSlide).outerHeight()
            });
        },

        _effectSlide: function (currentSlide, nextSlide) {
            var o = this.options;
            $(currentSlide)
                .animate({ left: o._outPosition }, o.duration, o.effectFunc);
            $(nextSlide)
                .css('left', o._outPosition * -1)
                .show();

            this.element.css({
                height: $(nextSlide).outerHeight()
            });

            $(nextSlide).animate({ left: 0 }, o.duration, o.effectFunc);
        },

        _effectSlowdown: function (currentSlide, nextSlide) {
            var o = this.options;
            var options = {
                'duration': o.duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function (t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
                .animate({ left: o._outPosition }, options);


            $(nextSlide)
                .css('left', o._outPosition * -1)
                .show();

            this.element.css({
                height: $(nextSlide).outerHeight()
            });

            $(nextSlide).animate({ left: 0 }, options);
        },

        _effectFade: function (currentSlide, nextSlide) {
            var o = this.options;

            $(currentSlide)
                .fadeOut(o.duration);
            $(nextSlide)
                .css({ left: 0 })
                .fadeIn(o.duration);
            this.element.css({
                height: $(nextSlide).outerHeight()
            });
        },

        slideTo: function (index) {
            this._slideToSlide(index);
        },

        nextSlide: function () {
            this._slideTo('next');
        },

        priorSlide: function () {
            this._slideTo('prior');
        },

        _destroy: function () {

        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/charm.js
    $.widget("metro.charm", {

        version: "3.0.0",

        options: {
            position: "right",
            opacity: 1,
            outside: false,
            timeout: 0,
            duration: 400
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });


            this._createCharm();

            element.data('charm', this);
        },

        _createCharm: function () {
            var that = this, element = this.element, o = this.options;

            element.addClass("charm").addClass(o.position + "-side").css({ opacity: o.opacity }).hide();

            var closer = $("<span/>").addClass("charm-closer").appendTo(element);
            closer.on('click', function () {
                that.close();
            });

            if (o.outside === true) {
                element.on('mouseleave', function (e) {
                    that.close();
                });
            }
        },

        _showCharm: function () {
            var that = this, element = this.element, o = this.options;
            var size;

            if (o.position === "left" || o.position === "right") {
                size = element.outerWidth();
                if (o.position === "left") {
                    element.css({
                        left: -size
                    }).show().animate({
                        left: 0
                    }, o.duration);
                } else {
                    element.css({
                        right: -size
                    }).show().animate({
                        right: 0
                    }, o.duration);
                }
            } else {
                size = element.outerHeight();
                if (o.position === "top") {
                    element.css({
                        top: -size
                    }).show().animate({
                        top: 0
                    }, o.duration);
                } else {
                    element.css({
                        bottom: -size
                    }).show().animate({
                        bottom: 0
                    }, o.duration);
                }
            }

            if (o.timeout > 0) {
                this._timeout_interval = setInterval(function () {
                    if (!element.is(":hover")) {
                        that.close();
                        clearInterval(this._timeout_interval);
                    }
                }, o.timeout);
            }
        },

        _hideCharm: function () {
            var that = this, element = this.element, o = this.options;
            var size;

            if (o.position === "left" || o.position === "right") {
                size = element.outerWidth();
                if (o.position === "left") {
                    element.animate({
                        left: -size
                    }, o.duration, function () {
                        element.hide();
                    });
                } else {
                    element.animate({
                        right: -size
                    }, o.duration, function () {
                        element.hide();
                    });
                }
            } else {
                size = element.outerHeight();
                if (o.position === "top") {
                    element.animate({
                        top: -size
                    }, o.duration, function () {
                        element.hide();
                    });
                } else {
                    element.animate({
                        bottom: -size
                    }, o.duration, function () {
                        element.hide();
                    });
                }
            }

            clearInterval(this._timeout_interval);
        },

        open: function () {
            var that = this, element = this.element, o = this.options;

            if (element.data("opened") === true) {
                return;
            }

            element.data("opened", true);
            this._showCharm();
        },

        close: function () {
            var that = this, element = this.element, o = this.options;

            if (element.data("opened") === false) {
                return;
            }

            element.data("opened", false);

            this._hideCharm();
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/countdown.js
    $.widget("metro.countdown", {

        version: "3.0.0",

        options: {
            stop: false,
            days: false,
            hours: false,
            minutes: false,
            seconds: false,
            backgroundColor: 'bg-cyan',
            digitColor: 'fg-white',
            dividerColor: 'fg-dark',
            labelColor: 'fg-grayLight',
            labels: {
                'days': 'days',
                'hours': 'hours',
                'minutes': 'mins',
                'seconds': 'secs'
            },
            onTick: function (d, h, m, s) { },
            onStop: function () { }
        },

        _interval: 0,
        _interval2: 0,
        _alarmOn: undefined,

        _create: function () {
            //console.log('hi from countdown');

            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._alarmOn = new Date();

            if (o.stop !== false) {
                this._alarmOn = new Date(o.stop);
            }

            var dm = 24 * 60 * 60 * 1000, hm = 60 * 60 * 1000, mm = 60 * 1000, sm = 1000;

            if (o.days !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.days * dm;
            }

            if (o.hours !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.hours * hm;
            }

            if (o.minutes !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.minutes * mm;
            }

            if (o.seconds !== false) {
                if (typeof this._alarmOn === 'object') {
                    this._alarmOn = this._alarmOn.getTime();
                }
                this._alarmOn = this._alarmOn + o.seconds * sm;
            }

            this._createDigits();

            element.find('.digit').text('0');

            that._tick();

            element.data('countdown', this);

        },

        _createDigits: function () {
            var element = this.element, o = this.options;
            var parts = ['days', 'hours', 'minutes', 'seconds'];
            var p, d;

            parts.map(function (v) {
                p = $("<div/>").addClass('part ' + v).attr('data-day-text', o.labels[v]).appendTo(element);
                $("<div/>").addClass('digit').appendTo(p);
                $("<div/>").addClass('digit').appendTo(p);
                if (o.labelColor.isColor()) {
                    p.css({
                        color: o.labelColor
                    });
                } else {
                    p.addClass(o.labelColor);
                }

                if (o.backgroundColor.isColor()) {
                    p.find('.digit').css({
                        background: o.backgroundColor
                    });
                } else {
                    p.find('.digit').addClass(o.backgroundColor);
                }

                if (o.digitColor.isColor()) {
                    p.find('.digit').css({
                        color: o.digitColor
                    });
                } else {
                    p.find('.digit').addClass(o.digitColor);
                }

                if (v !== 'seconds') {
                    d = $("<div/>").addClass("divider").text(':').appendTo(element);
                    if (o.dividerColor.isColor()) {
                        d.css({ 'color': o.dividerColor });
                    } else {
                        d.addClass(o.dividerColor);
                    }
                }

            });

        },

        _blink: function () {
            this.element.toggleClass('tick');
        },

        _tick: function () {
            var that = this, o = this.options, element = this.element;
            var days = 24 * 60 * 60,
                hours = 60 * 60,
                minutes = 60;

            var left, d, h, m, s;

            this._interval2 = setInterval(function () {
                that._blink();
            }, 500);

            this._interval = setInterval(function () {
                var result;

                left = Math.floor((that._alarmOn - (new Date())) / 1000);
                if (left < 0) { left = 0; }

                d = Math.floor(left / days);
                left -= d * days;
                that._update('days', d);

                if (d === 0) {
                    element.find('.part.days').addClass('disabled');
                }

                h = Math.floor(left / hours);
                left -= h * hours;
                that._update('hours', h);

                if (d === 0 && h === 0) {
                    element.find('.part.hours').addClass('disabled');
                }

                m = Math.floor(left / minutes);
                left -= m * minutes;
                that._update('minutes', m);

                if (d === 0 && h === 0 && m === 0) {
                    element.find('.part.minutes').addClass('disabled');
                }

                s = left;
                that._update('seconds', s);

                if (typeof o.onTick === 'function') {
                    o.onTick(d, h, m, s);
                } else {
                    if (typeof window[o.onTick] === 'function') {
                        window[o.onTick](d, h, m, s);
                    } else {
                        result = eval("(function(){" + o.onTick + "})");
                        result.call(d, h, m, s);
                    }
                }

                //that._blink();

                if (d === 0 && h === 0 && m === 0 && s === 0) {
                    element.find('.part').addClass('disabled');

                    if (typeof o.onStop === 'function') {
                        o.onStop();
                    } else {
                        if (typeof window[o.onStop] === 'function') {
                            window[o.onStop]();
                        } else {
                            result = eval("(function(){" + o.onStop + "})");
                            result.call();
                        }
                    }

                    that._stop('all');
                    that._trigger('alarm');
                    clearInterval(that._interval);
                }

            }, 1000);
        },

        _update: function (part, value) {
            var element = this.element;
            var major_value = Math.floor(value / 10) % 10;
            var minor_value = value % 10;
            var major_digit, minor_digit;

            major_digit = element.find("." + part + " .digit:eq(0)");
            minor_digit = element.find("." + part + " .digit:eq(1)");

            if (minor_value !== parseInt(minor_digit.text())) {
                minor_digit.toggleClass('scaleIn');
                setTimeout(function () {
                    minor_digit.text(minor_value).toggleClass('scaleIn');
                }, 500);
            }
            if (major_value !== parseInt(major_digit.text())) {
                major_digit.toggleClass('scaleIn');
                setTimeout(function () {
                    major_digit.text(major_value).toggleClass('scaleIn');
                }, 500);
            }
        },

        _stop: function () {
            clearInterval(this._interval);
            clearInterval(this._interval2);
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/datatable.js
    $.widget("metro.datatable", {

        version: "3.0.0",

        options: {
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            });

            if ($().dataTable) {
                try {
                    element.dataTable(o);
                } catch (e) {

                }
            } else {
                alert('dataTable plugin required');
            }

            element.data('datatable', this);

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/datepicker.js
    $.widget("metro.datepicker", {

        version: "3.0.0",

        options: {
            format: "yyyy.mm.dd",
            preset: false,
            minDate: false,
            maxDate: false,
            effect: 'fade',
            position: 'bottom',
            locale: window.METRO_CURRENT_LOCALE,
            weekStart: window.METRO_CALENDAR_WEEK_START,
            otherDays: false,
            exclude: false,
            stored: false,
            buttons: false,
            buttonToday: true,
            buttonClear: true,
            condensedGrid: false,
            onSelect: function (d, d0) { }
        },

        _calendar: undefined,

        _create: function () {
            var that = this,
                element = this.element, o = this.options,
                input = element.children("input"),
                button = element.children("button");

            //console.log(o);

            $.each(element.data(), function (key, value) {
                //console.log(typeof key, key, value);

                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createCalendar();

            input.attr('readonly', true);
            button.attr('type', 'button');

            button.on('click', function (e) {
                e.stopPropagation();
                if (that._calendar.css('display') === 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            element.on('click', function (e) {
                e.stopPropagation();
                if (that._calendar.css('display') === 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            $('html').on('click', function () {
                $(".calendar-dropdown").hide();
            });

            element.data('datepicker', this);

        },

        _createCalendar: function () {
            var _calendar, that = this, element = this.element, o = this.options;

            _calendar = $("<div/>").css({
                position: 'absolute',
                display: 'none',
                'max-width': 220,
                'z-index': 1000

            }).addClass('calendar calendar-dropdown').appendTo(element);

            //if (o.date != undefined) {
            //_calendar.data('date', o.date);
            //}


            _calendar.calendar({
                multiSelect: false,
                format: o.format,
                buttons: false,
                buttonToday: false,
                buttonClear: false,
                locale: o.locale,
                otherDays: o.otherDays,
                weekStart: o.weekStart,
                condensedGrid: o.condensedGrid,
                exclude: o.exclude,
                stored: o.stored,
                date: o.preset ? o.preset : new Date(),
                minDate: o.minDate,
                maxDate: o.maxDate,
                dayClick: function (d, d0) {
                    //console.log(d, d0);
                    _calendar.calendar('setDate', d0);
                    that.element.children("input[type=text]").val(d);
                    that.element.children("input[type=text]").trigger('change', d0);
                    that.element.children("input[type=text]").blur();
                    that._hide();

                    if (typeof o.onSelect === 'function') {
                        o.onSelect(d, d0);
                    } else {
                        if (typeof window[o.onSelect] === 'function') {
                            window[o.onSelect](d, d0);
                        } else {
                            var result = eval("(function(){" + o.onSelect + "})");
                            result.call(d, d0);
                        }
                    }
                }
            });

            if (o.preset !== false) {
                //console.log(o.preset);
                _calendar.calendar('setDate', o.preset);
                element.find("input, .datepicker-output").val(_calendar.calendar('getDate'));
            }

            // Set position
            switch (this.options.position) {
                case 'top': _calendar.css({ top: (0 - _calendar.height()), left: 0 }); break;
                default: _calendar.css({ top: '100%', left: 0 });
            }

            this._calendar = _calendar;
        },

        _show: function () {
            if (this.options.effect === 'slide') {
                $(".calendar-dropdown").slideUp('fast');
                this._calendar.slideDown('fast');
            } else if (this.options.effect === 'fade') {
                $(".calendar-dropdown").fadeOut('fast');
                this._calendar.fadeIn('fast');
            } else {
                $(".calendar-dropdown").hide();
                this._calendar.show();
            }
        },
        _hide: function () {
            if (this.options.effect === 'slide') {
                this._calendar.slideUp('fast');
            } else if (this.options.effect === 'fade') {
                this._calendar.fadeOut('fast');
            } else {
                this._calendar.hide();
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/dialog.js
    $.widget("metro.dialog", {

        version: "3.0.0",

        options: {
            modal: false,
            overlay: false,
            overlayColor: 'default',
            type: 'default', // success, alert, warning, info
            place: 'center', // center, top-left, top-center, top-right, center-left, center-right, bottom-left, bottom-center, bottom-right
            position: 'default',
            content: false,
            hide: false,
            width: 'auto',
            height: 'auto',
            background: 'default',
            color: 'default',
            closeButton: false,
            windowsStyle: false,

            _interval: undefined,
            _overlay: undefined,

            onDialogOpen: function (dialog) { },
            onDialogClose: function (dialog) { }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (o.overlay) {
                this._createOverlay();
            }
            this._createDialog();

            element.data('dialog', this);
        },

        _createOverlay: function () {
            var that = this, element = this.element, o = this.options;
            var overlay = $('body').find('.dialog-overlay');

            if (overlay.length === 0) {
                overlay = $("<div/>").addClass('dialog-overlay');
            }

            if (o.overlayColor) {
                if (o.overlayColor.isColor()) {
                    overlay.css({
                        background: o.overlayColor
                    });
                } else {
                    overlay.addClass(o.overlayColor);
                }
            }

            o._overlay = overlay;
        },

        _createDialog: function () {
            var that = this, element = this.element, o = this.options;

            element.addClass('dialog');

            if (o.type !== 'default') {
                element.addClass(o.type);
            }

            if (o.windowsStyle) {
                o.width = 'auto';

                element.css({
                    left: 0,
                    right: 0
                });
            }

            if (o.background !== 'default') {
                if (o.background.isColor()) {
                    element.css({
                        background: o.background
                    });
                } else {
                    element.addClass(o.background);
                }
            }

            if (o.color !== 'default') {
                if (o.color.isColor()) {
                    element.css({
                        color: o.color
                    });
                } else {
                    element.addClass(o.color);
                }
            }

            element.css({
                width: o.width,
                height: o.height
            });

            if (o.closeButton) {
                $("<span/>").addClass('dialog-close-button').appendTo(element).on('click', function () {
                    that.close();
                });
            }

            element.hide();
        },

        _setPosition: function () {
            var that = this, element = this.element, o = this.options;
            var width = element.width(),
                height = element.height();

            element.css({
                left: o.windowsStyle === false ? ($(window).width() - width) / 2 : 0,
                top: ($(window).height() - height) / 2
            });
        },

        open: function () {
            var that = this, element = this.element, o = this.options;
            var overlay;

            this._setPosition();

            element.data('opened', true);

            if (o.overlay) {
                overlay = o._overlay;
                overlay.appendTo('body').show();
            }

            element.fadeIn();

            if (typeof o.onDialogOpen === 'function') {
                o.onDialogOpen(element);
            } else {
                if (typeof window[o.onDialogOpen] === 'function') {
                    window[o.onDialogOpen](element);
                } else {
                    var result = eval("(function(){" + o.onDialogOpen + "})");
                    result.call(element);
                }
            }

            if (o.hide && parseInt(o.hide) > 0) {
                o._interval = setTimeout(function () {
                    that.close();
                }, parseInt(o.hide));
            }
        },

        close: function () {
            var that = this, element = this.element, o = this.options;

            clearInterval(o._interval);

            if (o.overlay) {
                $('body').find('.dialog-overlay').remove();
            }

            element.data('opened', false);

            element.fadeOut();

            if (typeof o.onDialogClose === 'function') {
                o.onDialogClose(element);
            } else {
                if (typeof window[o.onDialogClose] === 'function') {
                    window[o.onDialogClose](element);
                } else {
                    var result = eval("(function(){" + o.onDialogClose + "})");
                    result.call(element);
                }
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/dropdown.js
    $.widget("metro.dropdown", {

        version: "3.0.0",

        options: {
            effect: window.METRO_SHOW_TYPE,
            toggleElement: false,
            noClose: false,
            onDrop: function (object) { },
            onUp: function (object) { }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options,
                 menu = this.element,
                 name = this.name,
                 parent = this.element.parent();

            var toggle;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

            if (METRO_SHOW_TYPE !== undefined) {
                this.options.effect = METRO_SHOW_TYPE;
            }

            toggle.on('click.' + name, function (e) {
                parent.siblings(parent[0].tagName).removeClass("active-container");
                $(".active-container").removeClass("active-container");

                if (menu.css('display') === 'block' && !menu.hasClass('keep-open')) {
                    that._close(menu);
                } else {
                    $('[data-role=dropdown]').each(function (i, el) {
                        if (!menu.parents('[data-role=dropdown]').is(el) && !$(el).hasClass('keep-open') && $(el).css('display') === 'block') {
                            that._close(el);
                        }
                    });
                    if (menu.hasClass('horizontal')) {
                        menu.css({
                            'visibility': 'hidden',
                            'display': 'block'
                        });
                        var item_length = $(menu.children('li')[0]).outerWidth();
                        //var item_length2 = $(menu.children('li')[0]).width();
                        menu.css({
                            'visibility': 'visible',
                            'display': 'none'
                        });
                        var menu_width = menu.children('li').length * item_length + (menu.children('li').length - 1);
                        menu.css('width', menu_width);
                    }
                    that._open(menu);
                    parent.addClass("active-container");
                }
                e.preventDefault();
                e.stopPropagation();
            });

            if (o.noClose === true) {
                element.on('click', function (e) {
                    // e.preventDefault();
                    e.stopPropagation();
                });
            }

            $(menu).find('li.disabled a').on('click', function (e) {
                e.preventDefault();
            });

            $(document).on('click', function (e) {
                $('[data-role=dropdown]').each(function (i, el) {
                    if (!$(el).hasClass('keep-open') && $(el).css('display') === 'block') {
                        that._close(el);
                    }
                });
            });

            element.data('dropdown', this);
        },

        _open: function (el) {
            var parent = this.element.parent(), o = this.options;
            var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

            switch (this.options.effect) {
                case 'fade': $(el).fadeIn('fast'); break;
                case 'slide': $(el).slideDown('fast'); break;
                default: $(el).show();
            }
            this._trigger("onOpen", null, el);
            toggle.addClass('active-toggle');

            if (typeof o.onDrop === 'function') {
                o.onDrop(el);
            } else {
                if (typeof window[o.onDrop] === 'function') {
                    window[o.onDrop](el);
                } else {
                    var result = eval("(function(){" + o.onDrop + "})");
                    result.call(el);
                }
            }
        },

        _close: function (el) {
            var parent = $(el).parent(), o = this.options;
            var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

            switch (this.options.effect) {
                case 'fade': $(el).fadeOut('fast'); break;
                case 'slide': $(el).slideUp('fast'); break;
                default: $(el).hide();
            }
            this._trigger("onClose", null, el);
            toggle.removeClass('active-toggle');

            if (typeof o.onUp === 'function') {
                o.onUp(el);
            } else {
                if (typeof window[o.onUp] === 'function') {
                    window[o.onUp](el);
                } else {
                    var result = eval("(function(){" + o.onUp + "})");
                    result.call(el);
                }
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/fit-image.js
    $.widget("metro.fitImage", {

        version: "3.0.0",

        options: {
            shadow: false,
            overlay: false,
            type: 'default',
            frameColor: 'default',
            format: 'hd' // 'sd'
        },

        _create: function () {
            var element = this.element, o = this.options;
            var parent = element.parent();
            var i_w, i_h, p_w, p_h;
            var div, src = element.attr('src');

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            $("<img/>")
                .attr('src', src)
                .load(function () {
                    i_w = this.width;
                    i_h = this.height;
                }).remove();

            var image_container = $("<div/>").addClass('image-container').css('width', '100%').appendTo(parent);
            var image_frame = $("<div/>").addClass('frame').appendTo(image_container);

            p_w = image_frame.innerWidth();
            p_h = image_frame.innerHeight();

            switch (o.format) {
                case 'sd': p_h = 3 * p_w / 4; break;
                case 'square': p_h = p_w; break;
                case 'cycle': p_h = p_w; break;
                case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
                case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
                default: p_h = 9 * p_w / 16;
            }

            div = $("<div/>").css({
                'width': '100%',
                'height': p_h,
                'background-image': 'url(' + src + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'border-radius': o.format === 'cycle' ? '50%' : '0'
            });

            $(window).on('resize', function () {
                var p_w = image_frame.innerWidth();
                var p_h = image_frame.innerHeight();

                switch (o.format) {
                    case 'sd': p_h = 3 * p_w / 4; break;
                    case 'square': p_h = p_w; break;
                    case 'cycle': p_h = p_w; break;
                    case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
                    case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
                    default: p_h = 9 * p_w / 16;
                }

                div.css({
                    'height': p_h
                });
            });

            if (o.frameColor !== 'default') {
                if (o.frameColor.isUrl()) {
                    image_frame.css('background-color', o.frameColor);
                } else {
                    image_frame.addClass(o.frameColor);
                }
            }
            if (o.overlay !== false) {
                var overlay = $("<div/>").addClass('image-overlay').html(o.overlay).appendTo(image_container);
            }
            if (o.shadow !== false) {
                image_container.addClass('block-shadow');
            }
            div.appendTo(image_frame);

            switch (o.type) {
                case 'diamond': {
                    image_container.addClass('diamond'); div.addClass('image-replacer'); break;
                }
                case 'bordered': {
                    image_container.addClass('bordered'); break;
                }
                case 'polaroid': {
                    image_container.addClass('polaroid'); break;
                }
                case 'handing': {
                    image_container.addClass('handing'); break;
                }
                case 'handing-ani': {
                    image_container.addClass('handing ani'); break;
                }
                case 'handing-ani-hover': {
                    image_container.addClass('handing ani-hover'); break;
                }
            }

            image_container.addClass('image-format-' + o.format);
            //element.css('display', 'none');
            element.remove();

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/fluentmenu.js
    $.widget("metro.fluentmenu", {

        version: "3.0.0",

        options: {
            onSpecialClick: function (a, li) { },
            onTabClick: function (a, li) { },
            onTabChange: function (a, li) { }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createMenu();

            element.data('fluentmenu', this);

        },

        _createMenu: function () {
            var that = this, element = this.element, o = this.options;
            var active_tab = $(element.find(".tabs-holder > li.active")[0]);

            this.openTab(active_tab);

            element.on("click", ".tabs-holder > li > a", function (e) {
                var a = $(this);
                var li = a.parent('li');
                var result;

                if (li.hasClass('special')) {
                    if (typeof o.onSpecialClick === 'function') {
                        o.onSpecialClick(a, li);
                    } else {
                        if (typeof window[o.onSpecialClick] === 'function') {
                            window[o.onSpecialClick](a, li);
                        } else {
                            result = eval("(function(){" + o.onSpecialClick + "})");
                            result.call(a, li);
                        }
                    }
                } else {
                    var panel = $(a.attr('href'));
                    that._hidePanels();
                    that._showPanel(panel);
                    element.find('.tabs-holder > li').removeClass('active');
                    a.parent('li').addClass('active');

                    if (typeof o.onTabClick === 'function') {
                        o.onTabClick(a, li);
                    } else {
                        if (typeof window[o.onTabClick] === 'function') {
                            window[o.onTabClick](a, li);
                        } else {
                            result = eval("(function(){" + o.onTabClick + "})");
                            result.call(a, li);
                        }
                    }

                    if (typeof o.onTabChange === 'function') {
                        o.onTabChange(a, li);
                    } else {
                        if (typeof window[o.onTabChange] === 'function') {
                            window[o.onTabChange](a, li);
                        } else {
                            result = eval("(function(){" + o.onTabChange + "})");
                            result.call(a, li);
                        }
                    }
                }
                e.preventDefault();
            });
        },

        _hidePanels: function () {
            this.element.find('.tab-panel').hide();
        },

        _showPanel: function (panel) {
            if (panel == undefined) {
                panel = this.element.find('.tabs-holder li.active a').attr('href');
            }
            $(panel).show();
        },

        openTab: function (tab) {
            var that = this, element = this.element, o = this.options;
            var target_panel = $(tab.children('a').attr('href'));
            if (target_panel.length === 0) {
                return false;
            }
            this._hidePanels();
            this._showPanel(target_panel);
            element.find('.tabs-holder > li').removeClass('active');
            tab.addClass('active');
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/grid.js
    $.widget("metro.grid", {

        version: "3.0.0",

        options: {
            equalHeight: true
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (o.equalHeight) {
                setTimeout(function () {
                    that._setEqualHeight();
                }, 50);

                $(window).on('resize', function () {
                    that._setEqualHeight();
                });
            }

            element.data('grid', this);

        },

        _setEqualHeight: function () {
            var that = this, element = this.element, o = this.options;
            var rows = element.find('.row');

            $.each(rows, function () {
                var row = $(this);
                var cells = row.children('.cell');
                var maxHeight = 0;

                cells.css('min-height', '0');

                $.each(cells, function () {
                    //console.log(this.tagName, $(this).outerHeight());
                    if ($(this).outerHeight() > maxHeight) {
                        maxHeight = $(this).outerHeight();
                    }
                });

                cells.css('min-height', maxHeight);
            });
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/hint.js
    $.widget("metro.hint", {

        version: "3.0.0",

        options: {
            hintPosition: "auto", // bottom, top, left, right, auto
            hintBackground: '#FFFCC0',
            hintColor: '#000000',
            hintMaxSize: 200,
            hintMode: 'default',
            hintShadow: false,
            hintBorder: true,
            hintTimeout: 0,
            hintTimeDelay: 0,

            _hint: undefined
        },

        _create: function () {
            var that = this, element = this.element;
            var o = this.options;


            this.element.on('mouseenter', function (e) {
                $(".hint, .hint2").remove();
                if (o.hintTimeDelay > 0) {
                    setTimeout(function () {
                        that.createHint();
                        o._hint.show();
                    }, o.hintTimeDelay);
                } else {
                    that.createHint();
                    o._hint.show();
                }
                e.preventDefault();
            });

            this.element.on('mouseleave', function (e) {
                if (o._hint.length) {
                    o._hint.hide().remove();
                }
                e.preventDefault();
            });

            //element.data('hint', this);

        },

        createHint: function () {
            var that = this, element = this.element,
                hint = element.data('hint').split("|"),
                o = this.options;

            var _hint;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (element[0].tagName === 'TD' || element[0].tagName === 'TH') {
                var wrp = $("<div/>").css("display", "inline-block").html(element.html());
                element.html(wrp);
                element = wrp;
            }

            var hint_title = hint.length > 1 ? hint[0] : false;
            var hint_text = hint.length > 1 ? hint[1] : hint[0];


            _hint = $("<div/>").appendTo('body');
            if (o.hintMode === 2) {
                _hint.addClass('hint2');
            } else {
                _hint.addClass('hint');
            }

            if (!o.hintBorder) {
                _hint.addClass('no-border');
            }

            if (hint_title) {
                $("<div/>").addClass("hint-title").html(hint_title).appendTo(_hint);
            }
            $("<div/>").addClass("hint-text").html(hint_text).appendTo(_hint);

            _hint.addClass(o.position);

            if (o.hintShadow) { _hint.addClass("shadow"); }
            if (o.hintBackground) {
                if (o.hintBackground.isColor()) {
                    _hint.css("background-color", o.hintBackground);
                } else {
                    _hint.addClass(o.hintBackground);
                }
            }
            if (o.hintColor) {
                if (o.hintColor.isColor()) {
                    _hint.css("color", o.hintColor);
                } else {
                    _hint.addClass(o.hintColor);
                }
            }

            if (o.hintMaxSize > 0) {
                _hint.css({
                    'max-width': o.hintMaxSize
                });
            }

            //if (o.hintMode !== 'default') {
            //    _hint.addClass(o.hintMode);
            //}

            if (o.hintPosition === 'top') {
                _hint.addClass('top');
                _hint.css({
                    top: element.offset().top - $(window).scrollTop() - _hint.outerHeight() - 20,
                    left: o.hintMode === 2 ? element.offset().left + element.outerWidth() / 2 - _hint.outerWidth() / 2 - $(window).scrollLeft() : element.offset().left - $(window).scrollLeft()
                });
            } else if (o.hintPosition === 'right') {
                _hint.addClass('right');
                _hint.css({
                    top: o.hintMode === 2 ? element.offset().top + element.outerHeight() / 2 - _hint.outerHeight() / 2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                    left: element.offset().left + element.outerWidth() + 15 - $(window).scrollLeft()
                });
            } else if (o.hintPosition === 'left') {
                _hint.addClass('left');
                _hint.css({
                    top: o.hintMode === 2 ? element.offset().top + element.outerHeight() / 2 - _hint.outerHeight() / 2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                    left: element.offset().left - _hint.outerWidth() - 10 - $(window).scrollLeft()
                });
            } else {
                _hint.addClass('bottom');
                _hint.css({
                    top: element.offset().top - $(window).scrollTop() + element.outerHeight(),
                    left: o.hintMode === 2 ? element.offset().left + element.outerWidth() / 2 - _hint.outerWidth() / 2 - $(window).scrollLeft() : element.offset().left - $(window).scrollLeft()
                });
            }

            o._hint = _hint;

            if (o.hintTimeout > 0) {
                setTimeout(function () {
                    if (o._hint.length) {
                        o._hint.hide().remove();
                    }
                }, o.hintTimeout);
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/inputs.js
    $.widget("metro.input", {

        version: "3.0.0",

        options: {
            showLabelOnValue: false
        },

        _create: function () {
            var element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (element.hasClass('file')) { this._createInputFile(); }
            if (element.hasClass('text')) { this._createInputText(); }
            if (element.hasClass('password')) { this._createInputText(); }
            if (element.hasClass('select')) { this._createInputSelect(); }
            if (element.hasClass('textarea')) { this._createInputTextarea(); }
            if (element.hasClass('modern')) { this._createInputModern(); }

            element.data('input', this);

        },

        _createInputModern: function () {
            var element = this.element;
            var input = element.find("input");
            var placeholder = element.find(".placeholder");

            if (input.val() !== "") {
                placeholder.css({ display: "none" });
            }

            input.on("blur", function () {
                if (input.val() !== "") {
                    placeholder.css({ display: "none" });
                } else {
                    placeholder.css({ display: "block" });
                }
            });
            input.on("focus", function () {
                if (input.val() !== "") {
                    placeholder.css({ display: "none" });
                } else {
                    placeholder.css({ display: "block" });
                }
            });
        },

        _createInputFile: function () {
            var element = this.element;
            var wrapper, button, input;
            wrapper = $("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>");
            button = element.children('.button');
            input = element.children('input[type="file"]');
            input.css('z-index', 0);
            wrapper.insertAfter(input);
            input.attr('tabindex', '-1');
            button.attr('type', 'button');
            wrapper.attr('placeholder', input.attr('placeholder'))

            input.on('change', function () {
                var val = $(this).val();
                if (val !== '') {
                    wrapper.val(val.replace(/.+[\\\/]/, ""));
                    wrapper.attr('title', val.replace(/.+[\\\/]/, ""));
                }
            });

            element.on('click', '.button, .input-file-wrapper', function () {
                input.trigger('click');
            });
        },

        _createInputText: function () {
            var element = this.element;
            var helper_clear = element.find('.helper-button.clear');
            var helper_reveal = element.find('.helper-button.reveal');
            var input = element.find('input');
            var helpers = element.find('.helper-button');
            var buttons = element.find('.button');
            var states = element.find('.input-state-error, .input-state-warning, .input-state-info, .input-state-success, .input-state-required');
            var padding = 0;
            var rtl = element.attr('dir') === 'rtl' || element.parents("[dir='rtl']").length > 0;


            $.each(buttons, function () {
                var b = $(this);
                padding += b.outerWidth();
            });

            if (rtl) {
                input.css({
                    'padding-left': padding + 5
                });

                states.css({
                    'left': padding + 8
                });
            } else {
                input.css({
                    'padding-right': padding + 5
                });

                states.css({
                    'right': padding + 8
                });
            }

            helpers
                .attr('tabindex', -1)
                .attr('type', 'button');

            if (helper_clear) {
                helper_clear.on('click', function () {
                    input.val('').trigger('change').focus();
                });
            }
            if (helper_reveal && element.hasClass('password')) {
                helper_reveal
                    .on('mousedown', function () { input.attr('type', 'text'); })
                    .on('mouseup', function () { input.attr('type', 'password').focus(); });
            }
        },

        _createInputSelect: function () {

        },

        _createInputTextarea: function () {

        },

        _destroy: function () {

        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/keypad.js
    $.widget("metro.keypad", {

        version: "3.0.0",

        options: {
            target: false,
            shuffle: false,
            length: false,
            keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            onKey: function (key) { }
        },

        //_keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (typeof o.keys === 'string') {
                o.keys = o.keys.split(",");
            }

            this._createKeypad();

            element.data('keypad', this);

        },

        _shuffleKeys: function () {
            var that = this, element = this.element, o = this.options;
            var keys = o.keys.slice(0);
            var keypad = this._keypad;
            var keys_length = keys.length + 2;

            if (o.shuffle) {
                keys = keys.shuffle();
            }

            keypad.html('').css({
                width: keys_length / 4 * 32 + (keys_length / 4 + 1) * 2 + 2
            });

            keys.map(function (i) {
                $("<div/>").addClass('key').html(i).data('key', i).appendTo(keypad);
            });

            $("<div/>").addClass('key').html('&larr;').data('key', '&larr;').appendTo(keypad);
            $("<div/>").addClass('key').html('&times;').data('key', '&times;').appendTo(keypad);
        },

        _createKeypad: function () {
            var that = this, element = this.element, o = this.options;
            var keypad;

            if (element.hasClass('input-control')) {

                keypad = $("<div/>").addClass('keypad keypad-dropdown').css({
                    position: 'absolute',
                    'z-index': 1000,
                    display: 'none'
                }).appendTo(element);

                o.target = element.find('input');

                element.on('click', function (e) {
                    if (keypad.css('display') === 'none') {
                        keypad.show();
                    } else {
                        keypad.hide();
                    }

                    var opened_pads = $(".keypad.keypad-dropdown");
                    $.each(opened_pads, function () {
                        if (!$(this).is(keypad)) {
                            $(this).hide();
                        }
                    });

                    e.stopPropagation();
                });

                $('html').on('click', function () {
                    $(".keypad.keypad-dropdown").hide();
                });
            } else {
                keypad = element;
                keypad.addClass('keypad');
            }

            if (o.target !== false) {
                $(o.target).attr('readonly', true);
            }

            if (keypad.parent().data('role') === 'dropdown') {
                keypad.parent().css({
                    top: '100%'
                });
            }

            this._keypad = keypad;

            this._shuffleKeys();

            keypad.on('click', '.key', function (e) {
                var key = $(this);

                if (o.target) {
                    if (key.data('key') !== '&larr;' && key.data('key') !== '&times;') {
                        if (o.length && $(o.target).val().length === o.length) {
                            return false;
                        }
                        $(o.target).val($(o.target).val() + '' + key.data('key'));
                    } else {
                        if (key.data('key') === '&times;') {
                            $(o.target).val('');
                        }
                        if (key.data('key') === '&larr;') {
                            var val = $(o.target).val();
                            $(o.target).val(val.substring(0, val.length - 1))
                        }
                    }
                }

                if (typeof o.onKey === 'function') {
                    o.onKey(key);
                } else {
                    if (typeof window[o.onKey] === 'function') {
                        window[o.onKey](key);
                    } else {
                        var result = eval("(function(){" + o.onKey + "})");
                        result.call(key);
                    }
                }

                if (o.shuffle) {
                    that._shuffleKeys();
                }

                e.preventDefault();
                e.stopPropagation();
            });
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/listview.js
    $.widget("metro.listview", {

        version: "3.0.0",

        options: {
            onExpand: function (group) { },
            onCollapse: function (group) { },
            onActivate: function (list) { },
            onListClick: function (list) { }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initList();
            this._createEvents();

            element.data('listview', this);

        },

        _initList: function () {
            var that = this, element = this.element, o = this.options;
            var groups = element.find('.list-group');

            $.each(groups, function () {
                var group = $(this);
                if (group.hasClass('collapsed')) {
                    group.find('.list-group-content').hide();
                }
            });

        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;

            element.on('click', '.list-group-toggle', function (e) {
                var toggle = $(this), parent = toggle.parent();
                var result;

                if (toggle.parent().hasClass('keep-open')) {
                    return;
                }

                parent.toggleClass('collapsed');

                if (!parent.hasClass('collapsed')) {
                    toggle.siblings('.list-group-content').slideDown('fast');
                    if (typeof o.onExpand === 'function') {
                        o.onExpand(parent);
                    } else {
                        if (typeof window[o.onExpand] === 'function') {
                            window[o.onExpand](parent);
                        } else {
                            result = eval("(function(){" + o.onExpand + "})");
                            result.call(parent);
                        }
                    }
                } else {
                    toggle.siblings('.list-group-content').slideUp('fast');
                    if (typeof o.onCollapse === 'function') {
                        o.onCollapse(parent);
                    } else {
                        if (typeof window[o.onCollapse] === 'function') {
                            window[o.onCollapse](parent);
                        } else {
                            result = eval("(function(){" + o.onCollapse + "})");
                            result.call(parent);
                        }
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            });

            element.on('click', '.list', function (e) {
                var list = $(this);
                var result;

                element.find('.list').removeClass('active');
                list.addClass('active');
                if (typeof o.onActivate === 'function') {
                    o.onActivate(list);
                } else {
                    if (typeof window[o.onActivate] === 'function') {
                        window[o.onActivate](list);
                    } else {
                        result = eval("(function(){" + o.onActivate + "})");
                        result.call(list);
                    }
                }
                if (typeof o.onListClick === 'function') {
                    o.onListClick(list);
                } else {
                    if (typeof window[o.onListClick] === 'function') {
                        window[o.onListClick](list);
                    } else {
                        result = eval("(function(){" + o.onListClick + "})");
                        result.call(list);
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            });
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/notify.js
    var _notify_container = false;
    var _notifies = [];

    var Notify = {

        _container: null,
        _notify: null,
        _timer: null,

        version: "3.0.0",

        options: {
            icon: '', // to be implemented
            caption: '',
            content: '',
            shadow: true,
            width: 'auto',
            height: 'auto',
            style: false, // {background: '', color: ''}
            position: 'right', //right, left
            timeout: 3000,
            keepOpen: false,
            type: 'default' //default, success, alert, info, warning
        },

        init: function (options) {
            this.options = $.extend({}, this.options, options);
            this._build();
            return this;
        },

        _build: function () {
            var that = this, o = this.options;

            this._container = _notify_container || $("<div/>").addClass("notify-container").appendTo('body');
            _notify_container = this._container;

            if (o.content === '' || o.content === undefined) { return false; }

            this._notify = $("<div/>").addClass("notify");

            if (o.type !== 'default') {
                this._notify.addClass(o.type);
            }

            if (o.shadow) { this._notify.addClass("shadow"); }
            if (o.style && o.style.background !== undefined) { this._notify.css("background-color", o.style.background); }
            if (o.style && o.style.color !== undefined) { this._notify.css("color", o.style.color); }

            // add Icon
            if (o.icon !== '') {
                var icon = $(o.icon).addClass('notify-icon').appendTo(this._notify);
            }

            // add title
            if (o.caption !== '' && o.caption !== undefined) {
                $("<div/>").addClass("notify-title").html(o.caption).appendTo(this._notify);
            }
            // add content
            if (o.content !== '' && o.content !== undefined) {
                $("<div/>").addClass("notify-text").html(o.content).appendTo(this._notify);
            }

            // add closer
            var closer = $("<span/>").addClass("notify-closer").appendTo(this._notify);
            closer.on('click', function () {
                that.close(0);
            });

            if (o.width !== 'auto') { this._notify.css('min-width', o.width); }
            if (o.height !== 'auto') { this._notify.css('min-height', o.height); }

            this._notify.hide().appendTo(this._container).fadeIn('slow');
            _notifies.push(this._notify);

            if (!o.keepOpen) {
                this.close(o.timeout);
            }

        },

        close: function (timeout) {
            var self = this;

            if (timeout === undefined) {
                return this._hide();
            }

            setTimeout(function () {
                self._hide();
            }, timeout);

            return this;
        },

        _hide: function () {
            var that = this;

            if (this._notify !== undefined) {
                this._notify.fadeOut('slow', function () {
                    $(this).remove();
                    _notifies.splice(_notifies.indexOf(that._notify), 1);
                });
                return this;
            } else {
                return false;
            }
        },

        closeAll: function () {
            _notifies.forEach(function (notEntry) {
                notEntry.hide('slow', function () {
                    notEntry.remove();
                    _notifies.splice(_notifies.indexOf(notEntry), 1);
                });
            });
            return this;
        }
    };

    $.Notify = function (options) {
        return Object.create(Notify).init(options);
    };

    $.Notify.show = function (message, title, icon) {
        return $.Notify({
            content: message,
            caption: title,
            icon: icon
        });
    };


    // Source: js/widgets/panel.js
    $.widget("metro.panel", {

        version: "3.0.0",

        options: {
            onExpand: function (panel) { },
            onCollapse: function (panel) { }
        },

        _create: function () {
            var element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (!element.hasClass('collapsible')) { element.addClass('collapsible'); }

            if (element.hasClass("collapsible")) {
                var toggle = element.children(".heading");
                var content = element.children(".content");

                toggle.on("click", function () {
                    var result;

                    if (element.hasClass("collapsed")) {
                        content.slideDown('fast', function () {
                            element.removeClass('collapsed');
                            if (typeof o.onExpand === 'function') {
                                o.onExpand(element);
                            } else {
                                if (typeof window[o.onExpand] === 'function') {
                                    window[o.onExpand](element);
                                } else {
                                    result = eval("(function(){" + o.onExpand + "})");
                                    result.call(element);
                                }
                            }
                        });
                    } else {
                        content.slideUp('fast', function () {
                            element.addClass('collapsed');
                            if (typeof o.onCollapse === 'function') {
                                o.onCollapse(element);
                            } else {
                                if (typeof window[o.onCollapse] === 'function') {
                                    window[o.onCollapse](element);
                                } else {
                                    result = eval("(function(){" + o.onCollapse + "})");
                                    result.call(element);
                                }
                            }
                        });
                    }

                });
            }

            element.data('panel', this);

        },

        _destroy: function () {

        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/plugin.js
    $.widget("metro.widget", {

        version: "3.0.0",

        options: {
            someValue: null
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            console.log('Hi');

            element.data('widget', this);

        },

        _executeEvent: function (event) {
            var result, args = arguments.splice(0, 1);

            if (typeof event === 'function') {
                event.apply(args);
            } else {
                if (typeof window[event] === 'function') {
                    window[event].apply(args);
                } else {
                    result = eval("(function(){" + event + "})");
                    result.apply(args);
                }
            }

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/popovers.js
    $.widget("metro.popover", {

        version: "3.0.0",

        options: {
            popoverText: '',
            popoverTimeout: 3000,
            popoverPosition: 'top', //top, bottom, left, right
            popoverBackground: 'bg-cyan',
            popoverColor: 'fg-white',
            popoverMode: 'none', //click, hover,
            popoverShadow: true,
            onPopup: function (popover) { }
        },

        popover: {},

        _create: function () {
            var element = this.element;

            this.createPopover();
            element.data('popover', this);

        },

        createPopover: function () {
            var that = this, element,
                o = this.options;

            element = this.element;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            var popover, content_container, marker_class;

            popover = $("<div/>").addClass("popover").appendTo('body').hide();
            $("<div/>").appendTo(popover);

            if (o.popoverShadow) {
                popover.addClass("popover-shadow");
            }

            if (o.popoverBackground) {
                if (o.popoverBackground[0] === '#') {
                    popover.css('background-color', o.popoverBackground);
                } else {
                    popover.addClass(o.popoverBackground);
                }
            }
            if (o.popoverColor) {
                if (o.popoverColor[0] === '#') {
                    popover.css('color', o.popoverColor);
                } else {
                    popover.addClass(o.popoverColor);
                }
            }

            switch (o.popoverPosition) {
                case 'left': marker_class = 'marker-on-right'; break;
                case 'right': marker_class = 'marker-on-left'; break;
                case 'bottom': marker_class = 'marker-on-top'; break;
                default: marker_class = 'marker-on-bottom';
            }

            popover.css({
                position: 'fixed'
            });

            popover.addClass(marker_class);

            this.popover = popover;

            this.setText(o.popoverText);

            element.on(o.popoverMode, function (e) {
                if (!popover.data('visible')) {
                    that.show();
                }
            });

            $(window).scroll(function () {
                //that.popover.hide();
                if (that.popover.data('visible')) {
                    that.setPosition();
                }
            });

        },

        setPosition: function () {
            var o = this.options, popover = this.popover, element = this.element;

            if (o.popoverPosition === 'top') {
                popover.css({
                    top: element.offset().top - $(window).scrollTop() - popover.outerHeight() - 10,
                    left: element.offset().left + element.outerWidth() / 2 - popover.outerWidth() / 2 - $(window).scrollLeft()
                });
            } else if (o.popoverPosition === 'bottom') {
                popover.css({
                    top: element.offset().top - $(window).scrollTop() + element.outerHeight() + 10,
                    left: element.offset().left + element.outerWidth() / 2 - popover.outerWidth() / 2 - $(window).scrollLeft()
                });
            } else if (o.popoverPosition === 'right') {
                popover.css({
                    top: element.offset().top + element.outerHeight() / 2 - popover.outerHeight() / 2 - $(window).scrollTop(),
                    left: element.offset().left + element.outerWidth() - $(window).scrollLeft() + 10
                });
            } else if (o.popoverPosition === 'left') {
                popover.css({
                    top: element.offset().top + element.outerHeight() / 2 - popover.outerHeight() / 2 - $(window).scrollTop(),
                    left: element.offset().left - popover.outerWidth() - $(window).scrollLeft() - 10
                });
            }
            return this;
        },

        setText: function (text) {
            this.popover.children('div').html(text);
        },

        show: function () {
            var o = this.options, popover = this.popover;

            this.setPosition();

            popover.fadeIn(function () {
                popover.data('visible', true);

                if (typeof o.onPopup === 'function') {
                    o.onPopup(popover);
                } else {
                    if (typeof window[o.onPopup] === 'function') {
                        window[o.onPopup](popover);
                    } else {
                        var result = eval("(function(){" + o.onPopup + "})");
                        result.call(popover);
                    }
                }

                setTimeout(function () {
                    popover.fadeOut(
                        function () { popover.data('visible', false); }
                    );
                }, o.popoverTimeout);
            });
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/preloaders.js
    $.widget("metro.preloader", {

        version: "3.0.0",

        options: {
            type: 'ring',
            style: 'light'
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createStructure();

            element.data('preloader', this);

        },

        _createRing: function () {
            var that = this, element = this.element, o = this.options;
            var i, wrap, circle;

            for (i = 0; i < 5 ; i++) {
                wrap = $("<div/>").addClass('wrap').appendTo(element);
                circle = $("<div/>").addClass('circle').appendTo(wrap);
            }
        },

        _createMetro: function () {
            var that = this, element = this.element, o = this.options;
            var i, circle;

            for (i = 0; i < 5 ; i++) {
                circle = $("<div/>").addClass('circle').appendTo(element);
            }
        },

        _createSquare: function () {
            var that = this, element = this.element, o = this.options;
            var i, square;

            for (i = 0; i < 4 ; i++) {
                square = $("<div/>").addClass('square').appendTo(element);
            }
        },

        _createCycle: function () {
            var that = this, element = this.element, o = this.options;
            var i, cycle;

            //for(i = 0; i < 3 ; i++) {
            cycle = $("<div/>").addClass('cycle').appendTo(element);
            //}
        },

        _createStructure: function () {
            var that = this, element = this.element, o = this.options;

            element.addClass("preloader-" + o.type);
            if (o.style !== 'light') {
                element.addClass(o.style + '-style');
            }

            element.html('');

            switch (o.type) {
                case 'ring': this._createRing(); break;
                case 'metro': this._createMetro(); break;
                case 'square': this._createSquare(); break;
                case 'cycle': this._createCycle(); break;
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/presenter.js
    $.widget("metro.presenter", {

        version: "3.0.0",

        options: {
            height: '200',
            width: '100%',
            effect: 'random',
            duration: 1000,
            timeout: 2000,
            sceneTimeout: 2000,
            easing: 'swing'
        },

        _acts: undefined,
        _currentAct: 0,
        _actDone: true,
        _interval: undefined,
        _effects: ['top', 'bottom', 'left', 'right'],
        _actor_positions: [],


        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createPresenter();
            this._showScene();

            element.data('presenter', this);

        },

        _createPresenter: function () {
            var that = this, element = this.element, o = this.options;
            var acts = element.find('.act');

            acts.hide();

            this._acts = acts;

            element.css({
                height: o.height,
                width: o.width
            });
        },

        _showScene: function () {
            var that = this, element = this.element, o = this.options;

            this._interval = setInterval(function () {
                if (that._actDone) {
                    that._currentAct++;

                    if (that._currentAct == that._acts.length) {
                        that._currentAct = 0;
                    }

                    //that._closeAct();
                    that._showAct();
                }
            }, 500);
        },

        _closeAct: function () {
            var that = this, element = this.element, o = this.options;
            var index = this._currentAct;
            setTimeout(function () {
                if (that._acts[index] !== undefined) $(that._acts[index]).fadeOut(1000, function () {
                    that._actDone = true;
                });
            }, o.sceneTimeout);
        },

        _showAct: function () {
            var that = this, element = this.element, o = this.options;

            var act = $(this._acts[this._currentAct]);
            var actors = act.find('.actor');
            var i;

            this._actDone = false;

            act.fadeIn(1000);

            actors.css({
                opacity: 0,
                position: 'absolute',
                display: 'none'
            });

            i = 0;
            $.each(actors, function () {
                var actor = $(this), pos = { top: actor.data('position').split(",")[0], left: actor.data('position').split(",")[1] };//that._actor_positions[$(that._acts[that._currentAct]).attr('id')][actor.attr('id')];
                var actor_effect, actor_duration, actor_timeout, actor_easing;

                actor_effect = actor.data('effect') !== undefined ? actor.data('effect') : o.effect;
                if (actor_effect === 'random') {
                    actor_effect = that._effects[Math.floor(Math.random() * that._effects.length)];
                }
                actor_duration = actor.data('duration') !== undefined ? actor.data('duration') : o.duration;
                actor_timeout = actor.data('timeout') !== undefined ? actor.data('timeout') : o.timeout;
                actor_easing = actor.data('easing') !== undefined ? actor.data('easing') : o.easing;

                if (actor_effect === 'top') {
                    setTimeout(function () {
                        actor.css({
                            top: -(element.height()),
                            left: pos.left,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function () { if (actor[0] == actors[actors.length - 1]) that._closeAct(); });
                    }, i * actor_timeout);
                } else if (actor_effect === 'bottom') {
                    setTimeout(function () {
                        actor.css({
                            top: element.height(),
                            left: pos.left,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function () { if (actor[0] == actors[actors.length - 1]) that._closeAct(); });
                    }, i * actor_timeout);
                } else if (actor_effect === 'left') {
                    setTimeout(function () {
                        actor.css({
                            left: -element.width(),
                            top: pos.top,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function () { if (actor[0] == actors[actors.length - 1]) that._closeAct(); });
                    }, i * actor_timeout);
                } else if (actor_effect === 'right') {
                    setTimeout(function () {
                        actor.css({
                            left: element.width(),
                            top: pos.top,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, actor_easing, function () { if (actor[0] == actors[actors.length - 1]) that._closeAct(); });
                    }, i * actor_timeout);
                } else { //fade
                    setTimeout(function () {
                        actor.css({
                            top: pos.top,
                            left: pos.left,
                            display: 'block'
                        }).animate({
                            top: pos.top,
                            left: pos.left,
                            opacity: 1
                        }, actor_duration, 'swing', function () { if (actor[0] == actors[actors.length - 1]) that._closeAct(); });
                    }, i * actor_timeout);
                }

                i++;
            });

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/progressbar.js
    $.widget("metro.progressBar", {

        version: "3.0.0",

        options: {
            color: 'default',
            colors: false,
            value: 0,
            onProgress: function (value) { }
        },

        colorsDim: {},

        _create: function () {
            var that = this, element = this.element, o = this.options;
            var bar = element.children('.bar:last-child');

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (bar.length === 0) {
                bar = $('<div/>').addClass('bar').appendTo(element);
            }

            if (o.colors) {
                var p = 0;
                $.each(o.colors, function (c, v) {
                    that.colorsDim[c] = [p, v];
                    p = v + 1;
                });
            }

            this.progress(o.value);
            this.color(o.color);

            element.data('progressBar', this);

        },

        color: function (value) {
            var element = this.element, o = this.options;
            var bar = element.children('.bar:last-child');
            var isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

            if (isOk) {
                bar.css({
                    'background-color': value
                });
            } else {
                bar.removeClass(function (index, css) {
                    return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
                }).addClass(value);
            }

            o.color = value;
        },

        progress: function (value) {
            if (value !== undefined) {
                var element = this.element, o = this.options, colors = this.colorsDim;
                var bar = element.children('.bar:last-child');
                var that = this, gradient = [];

                if (parseInt(value) < 0) {
                    return;
                }


                if (o.colors) {

                    $.each(colors, function (c, v) {
                        if (value >= v[0] && value <= v[1]) {
                            that.color(c);
                            return true;
                        }
                    });
                }

                o.value = value;

                bar.animate({
                    width: o.value + '%'
                }, 100, function () {
                    if (typeof o.onProgress === 'function') {
                        o.onProgress(value);
                    } else {
                        if (typeof window[o.onProgress] === 'function') {
                            window[o.onProgress](value);
                        } else {
                            var result = eval("(function(){" + o.onProgress + "})");
                            result.call(value);
                        }
                    }
                });
            } else {
                return this.options.value;
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/rating.js
    $.widget("metro.rating", {

        version: "3.0.0",

        options: {
            stars: 5,
            value: 0,
            half: true,
            static: false,
            showScore: true,
            scoreTitle: "Current: ",
            size: 'default',
            colorRate: false,
            onRate: function (v, s, w) { return true; },
            onRated: function (v, s, w) { }
        },

        _value: 0,
        _values: [],

        _create: function () {
            var element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._value = parseFloat(o.value);
            this._values[0] = Math.ceil(o.stars * 1 / 3);
            this._values[1] = Math.ceil(o.stars * 2 / 3);
            this._values[2] = o.stars;

            this._createRating();
            this._createEvents();
            this._setValue(this._value);
            this._setScore(this._value);

            element.data('rating', this);

        },

        _createRating: function () {
            var element = this.element, o = this.options;
            var i, star, stars, score;

            if (!element.hasClass('rating')) { element.addClass('rating'); }
            switch (o.size) {
                case 'small': element.addClass('small'); break;
                case 'large': element.addClass('large'); break;
                default: break;
            }

            if (o.static) {
                element.addClass('static');
            }

            for (i = 0; i < o.stars; i++) {
                star = $("<span/>").addClass('star').appendTo(element).data('star-value', i + 1);
            }

            if (o.showScore) {
                score = $("<span/>").addClass('score').appendTo(element);
            }

        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;
            var stars;

            stars = element.find('.star');

            stars.on('click', function (e) {

                if (o.static || element.hasClass('static') || element.data('static')) {
                    return false;
                }

                var result, value = $(this).data('star-value'),
                    star = this,
                    rating = that;

                if (typeof o.onRate === 'function') {
                    if (!o.onRate(value, star, rating)) { return false; }
                } else {
                    if (typeof window[o.onRate] === 'function') {
                        if (!window[o.onRate](value, star, rating)) { return false; }
                    } else {
                        result = eval("(function(){" + o.onRate + "})");
                        if (!result.call(value, star, rating)) { return false; }
                    }
                }

                if (typeof o.onRated === 'function') {
                    o.onRated(value, star, rating);
                } else {
                    if (typeof window[o.onRated] === 'function') {
                        window[o.onRated](value, star, rating);
                    } else {
                        result = eval("(function(){" + o.onRated + "})");
                        result.call(value, star, rating);
                    }
                }

                that._value = $(this).data('star-value');
                that._setValue();
                that._setScore();

                e.preventDefault();
                e.stopPropagation();
            });
        },

        _setValue: function () {
            var stars, o = this.options, element = this.element;
            if (o.stars) {
                stars = element.find('.star').removeClass('on half');
                var index = Math.floor(this._value) - 1;
                var half = (this._value - Math.floor(this._value)) * 10 > 0;
                $(stars[index]).addClass('on');
                $(stars[index]).prevAll().addClass('on');
                if (half) {
                    $(stars[index]).next().addClass('on half');
                }
            }

            if (o.colorRate) {
                element.removeClass('poor regular good');
                if (this._value <= this._values[0]) { element.addClass('poor'); }
                else if (this._value > this._values[0] && this._value <= this._values[1]) { element.addClass('regular'); }
                else if (this._value > this._values[1]) { element.addClass('good'); }
            }
        },

        _setScore: function () {
            var value = this._value, element = this.element, o = this.options;

            if (value !== undefined) {
                element.find(".score").html(o.scoreTitle + value);
            }
        },

        value: function (value) {
            if (value !== undefined) {
                this._value = value;
                this._setValue();
                this._setScore();
            } else {
                return this._value;
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/select.js
    $.widget("metro.select", {

        version: "3.0.0",

        options: {
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;
            var func_options = [
                'templateResult',
                'templateSelection',
                'matcher',
                'initSelection',
                'query'
            ];

            $.each(element.data(), function (key, value) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            });

            func_options.map(function (func, index) {
                if (o[func] !== undefined) {
                    o[func] = window[o[func]];
                }
            });

            if (o.dropdownParent !== undefined) {
                o.dropdownParent = $(o.dropdownParent);
            }

            if ($().select2) {
                try {
                    element.find("select").select2(o);
                } catch (e) {

                }
            } else {
                console.log('You are trying to use support for Select2, but the plugin is not found!');
            }

            element.data('select', this);

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/slider.js
    $.widget("metro.slider", {

        version: "3.0.0",

        options: {
            position: 0,
            accuracy: 0,
            color: 'default',
            completeColor: 'default',
            markerColor: 'default',
            colors: false,
            showHint: false,
            permanentHint: false,
            hintPosition: 'top',
            vertical: false,
            min: 0,
            max: 100,
            animate: true,
            minValue: 0,
            maxValue: 100,
            currValue: 0,
            returnType: 'value',
            target: false,

            onChange: function (value, slider) { },

            _slider: {
                vertical: false,
                offset: 0,
                length: 0,
                marker: 0,
                ppp: 0,
                start: 0,
                stop: 0
            }
        },

        _create: function () {
            var that = this,
                element = this.element;


            var o = this.options,
                s = o._slider;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            o.accuracy = o.accuracy < 0 ? 0 : o.accuracy;
            o.min = o.min < 0 ? 0 : o.min;
            o.min = o.min > o.max ? o.max : o.min;
            o.max = o.max > 100 ? 100 : o.max;
            o.max = o.max < o.min ? o.min : o.max;
            o.position = this._correctValue(element.data('position') > o.min ? (element.data('position') > o.max ? o.max : element.data('position')) : o.min);
            o.colors = o.colors ? o.colors.split(",") : false;

            s.vertical = o.vertical;
            if (o.vertical && !element.hasClass('vertical')) {
                element.addClass('vertical');
            }
            if (o.permanentHint && !element.hasClass('permanent-hint')) {
                element.addClass('permanent-hint');
            }

            if (!o.vertical && o.hintPosition === 'bottom') {
                element.addClass('hint-bottom');
            }

            if (o.vertical && o.hintPosition === 'left') {
                element.addClass('hint-left');
            }

            this._createSlider();
            this._initPoints();
            this._placeMarker(o.position);

            var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';

            element.children('.marker').on(event_down, function (e) {
                e.preventDefault();
                that._startMoveMarker(e);
            });

            element.on(event_down, function (e) {
                e.preventDefault();
                that._startMoveMarker(e);
            });

            element.data('slider', this);

        },

        _startMoveMarker: function (e) {
            var element = this.element, o = this.options, that = this, hint = element.children('.slider-hint');
            var returnedValue;

            var event_move = isTouchDevice() ? 'touchmove' : 'mousemove';
            var event_up = isTouchDevice() ? 'touchend' : 'mouseup mouseleave';

            $(element).on(event_move, function (event) {
                that._movingMarker(event);
                if (!element.hasClass('permanent-hint')) {
                    hint.css('display', 'block');
                }
            });
            $(element).on(event_up, function () {
                $(element).off('mousemove');
                $(element).off('mouseup');
                element.data('value', o.position);
                element.trigger('changed', o.position);

                returnedValue = o.returnType === 'value' ? that._valueToRealValue(o.position) : o.position;

                if (!element.hasClass('permanent-hint')) {
                    hint.css('display', 'none');
                }
            });

            this._initPoints();

            this._movingMarker(e);
        },

        _movingMarker: function (ev) {
            var element = this.element, o = this.options;
            var cursorPos,
                percents,
                valuePix,

                vertical = o._slider.vertical,
                sliderOffset = o._slider.offset,
                sliderStart = o._slider.start,
                sliderEnd = o._slider.stop,
                sliderLength = o._slider.length,
                markerSize = o._slider.marker;

            var event = !isTouchDevice() ? ev.originalEvent : ev.originalEvent.touches[0];

            //console.log(event);

            if (vertical) {
                cursorPos = event.pageY - sliderOffset;
            } else {
                cursorPos = event.pageX - sliderOffset;
            }

            if (cursorPos < sliderStart) {
                cursorPos = sliderStart;
            } else if (cursorPos > sliderEnd) {
                cursorPos = sliderEnd;
            }

            if (vertical) {
                valuePix = sliderLength - cursorPos - markerSize / 2;
            } else {
                valuePix = cursorPos - markerSize / 2;
            }

            percents = this._pixToPerc(valuePix);

            this._placeMarker(percents);

            o.currValue = this._valueToRealValue(percents);
            o.position = percents;

            var returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

            if (o.target) {
                $(o.target).val(returnedValue);
            }

            if (typeof o.onChange === 'function') {
                o.onChange(returnedValue, element);
            } else {
                if (typeof window[o.onChange] === 'function') {
                    window[o.onChange](returnedValue, element);
                } else {
                    var result = eval("(function(){" + o.onChange + "})");
                    result.call(returnedValue, element);
                }
            }
        },

        _placeMarker: function (value) {
            var size, size2, o = this.options, colorParts, colorIndex = 0, colorDelta, element = this.element,
                marker = this.element.children('.marker'),
                complete = this.element.children('.complete'),
                hint = this.element.children('.slider-hint'), hintValue,
                oldPos = this._percToPix(o.position);

            colorParts = o.colors.length;
            colorDelta = o._slider.length / colorParts;

            if (o._slider.vertical) {
                var oldSize = this._percToPix(o.position) + o._slider.marker,
                    oldSize2 = o._slider.length - oldSize;
                size = this._percToPix(value) + o._slider.marker;
                size2 = o._slider.length - size;
                this._animate(marker.css('top', oldSize2), { top: size2 });
                this._animate(complete.css('height', oldSize), { height: size });

                if (colorParts) {
                    colorIndex = Math.round(size / colorDelta) - 1;
                    complete.css('background-color', o.colors[colorIndex < 0 ? 0 : colorIndex]);
                }
                if (o.showHint) {
                    hintValue = this._valueToRealValue(value);
                    hint.html(hintValue).css('top', size2 - hint.height() / 2 + (element.hasClass('large') ? 8 : 0));
                }
            } else {
                size = this._percToPix(value);
                this._animate(marker.css('left', oldPos), { left: size });
                this._animate(complete.css('width', oldPos), { width: size });
                if (colorParts) {
                    colorIndex = Math.round(size / colorDelta) - 1;
                    complete.css('background-color', o.colors[colorIndex < 0 ? 0 : colorIndex]);
                }
                if (o.showHint) {
                    hintValue = this._valueToRealValue(value);
                    hint.html(hintValue).css({ left: size - hint.width() / 2 + (element.hasClass('large') ? 6 : 0) });
                }
            }
        },

        _valueToRealValue: function (value) {
            var o = this.options;
            var real_value;

            var percent_value = (o.maxValue - o.minValue) / 100;

            real_value = value * percent_value + o.minValue;

            return Math.round(real_value);
        },

        _animate: function (obj, val) {
            var o = this.options;

            if (o.animate) {
                obj.stop(true).animate(val);
            } else {
                obj.css(val);
            }
        },

        _pixToPerc: function (valuePix) {
            var valuePerc;
            valuePerc = valuePix * this.options._slider.ppp;
            return Math.round(this._correctValue(valuePerc));
        },

        _percToPix: function (value) {
            if (this.options._slider.ppp === 0) {
                return 0;
            }
            return Math.round(value / this.options._slider.ppp);
        },

        _correctValue: function (value) {
            var o = this.options;
            var accuracy = o.accuracy;
            var max = o.max;
            var min = o.min;
            if (accuracy === 0) {
                return value;
            }
            if (value === max) {
                return max;
            }
            if (value === min) {
                return min;
            }
            value = Math.floor(value / accuracy) * accuracy + Math.round(value % accuracy / accuracy) * accuracy;
            if (value > max) {
                return max;
            }
            if (value < min) {
                return min;
            }
            return value;
        },

        _initPoints: function () {
            var o = this.options, s = o._slider, element = this.element;

            if (s.vertical) {
                s.offset = element.offset().top;
                s.length = element.height();
                s.marker = element.children('.marker').height();
            } else {
                s.offset = element.offset().left;
                s.length = element.width();
                s.marker = element.children('.marker').width();
            }

            s.ppp = o.max / (s.length - s.marker);
            s.start = s.marker / 2;
            s.stop = s.length - s.marker / 2;
        },

        _createSlider: function () {
            var element = this.element,
                o = this.options,
                complete, marker, hint;

            element.html('');

            complete = $("<div/>").addClass("complete").appendTo(element);
            marker = $("<a/>").addClass("marker").appendTo(element);

            if (o.showHint) {
                hint = $("<span/>").addClass("slider-hint").appendTo(element);
            }

            if (o.color !== 'default') {
                if (o.color.isColor()) {
                    element.css('background-color', o.color);
                } else {
                    element.addClass(o.color);
                }
            }
            if (o.completeColor !== 'default') {
                if (o.completeColor.isColor()) {
                    complete.css('background-color', o.completeColor);
                } else {
                    complete.addClass(o.completeColor);
                }
            }
            if (o.markerColor !== 'default') {
                if (o.markerColor.isColor()) {
                    marker.css('background-color', o.markerColor);
                } else {
                    marker.addClass(o.markerColor);
                }
            }
        },

        value: function (value) {
            var element = this.element, o = this.options, returnedValue;

            if (typeof value !== 'undefined') {

                value = value > o.max ? o.max : value;
                value = value < o.min ? o.min : value;

                this._placeMarker(parseInt(value));
                o.position = parseInt(value);

                returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

                if (o.target) {
                    $(o.target).val(returnedValue);
                }

                if (typeof o.onChange === 'function') {
                    o.onChange(returnedValue, element);
                } else {
                    if (typeof window[o.onChange] === 'function') {
                        window[o.onChange](returnedValue, element);
                    } else {
                        var result = eval("(function(){" + o.onChange + "})");
                        result.call(returnedValue, element);
                    }
                }

                return this;
            } else {
                returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;
                return returnedValue;
            }
        },

        _destroy: function () { },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/stepper.js
    $.widget("metro.stepper", {

        version: "3.0.0",

        options: {
            steps: 3,
            start: 1,
            type: 'default',
            clickable: true,
            onStep: function (index, step) { },
            onStepClick: function (index, step) { }
        },

        _create: function () {
            var element = this.element, o = this.options, element_id = element.attr('id');

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (!element.hasClass('stepper')) { element.addClass('stepper'); }
            if (element_id === undefined) {
                element_id = window.uniqueId(this.widgetName + '_');
                element.attr('id', element_id);
            }

            this._createStepper();
            if (o.clickable) { this._createEvents(); }
            this._positioningSteps();
            this._stepTo(o.start);

            element.data('stepper', this);

        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;
            element.on('click', 'li', function (e) {
                var step = $(this).data('step');


                if (typeof o.onStepClick === 'function') {
                    o.onStepClick(step - 1, step);
                } else {
                    if (typeof window[o.onStepClick] === 'function') {
                        window[o.onStepClick](step - 1, step);
                    } else {
                        var result = eval("(function(){" + o.onStepClick + "})");
                        result.call(step - 1, step);
                    }
                }

                element.trigger("stepclick", step);
            });
        },

        _createStepper: function () {
            var element = this.element, o = this.options;
            var i, ul, li;

            ul = $("<ul/>");

            switch (o.type) {
                case 'diamond': element.addClass('diamond'); break;
                case 'cycle': element.addClass('cycle'); break;
            }

            for (i = 0; i < o.steps; i++) {
                li = $("<li/>").data('step', i + 1).appendTo(ul);
            }
            ul.appendTo(element);
        },

        _positioningSteps: function () {
            var that = this, element = this.element, o = this.options,
                steps = element.find("li"),
                element_width = element.width(),
                steps_length = steps.length - 1,
                step_width = $(steps[0]).width();

            $.each(steps, function (i, step) {
                var left = i === 0 ? 0 : (element_width - step_width) / steps_length * i;
                $(step).animate({
                    left: left
                });
            });
        },

        _stepTo: function (step) {
            var element = this.element, o = this.options;
            var steps = element.find("li");

            steps.removeClass('current').removeClass('complete');

            $.each(steps, function (i, s) {
                if (i < step - 1) { $(s).addClass('complete'); }
                if (i === step - 1) {
                    $(s).addClass('current');

                    if (typeof o.onStep === 'function') {
                        o.onStep(i + 1, s);
                    } else {
                        if (typeof window[o.onStep] === 'function') {
                            window[o.onStep](i + 1, s);
                        } else {
                            var result = eval("(function(){" + o.onStep + "})");
                            result.call(i + 1, s);
                        }
                    }
                }
            });
        },

        stepTo: function (step) {
            this._stepTo(step);
        },

        first: function () {
            var o = this.options;
            o.start = 1;
            this._stepTo(o.start);
        },

        last: function () {
            var element = this.element, o = this.options;
            var steps = element.find("li");

            o.start = steps.length;
            this._stepTo(o.start);
        },

        next: function () {
            var element = this.element, o = this.options;
            var steps = element.find("li");

            if (o.start + 1 > steps.length) { return; }

            o.start++;
            this._stepTo(o.start);
        },

        prior: function () {
            var o = this.options;

            if (o.start - 1 === 0) { return; }

            o.start--;
            this._stepTo(o.start);
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });


    // Source: js/widgets/streamer.js
    $.widget("metro.streamer", {

        version: "3.0.0",

        options: {
            scrollBar: false,
            meterStart: 9,
            meterStop: 19,
            meterInterval: 20,
            slideToTime: "default",
            slideSleep: 1000,
            slideSpeed: 1000,
            onClick: function (event) { }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options,
                streams = element.find(".stream"),
                events = element.find(".event"),
                events_container = element.find(".events"),
                events_area = element.find(".events-area"),
                groups = element.find(".event-group"),
                event_streams = element.find(".event-stream");


            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            element.data('streamSelect', -1);

            var meter = $("<ul/>").addClass("meter");
            var i, j, m, start = o.meterStart, stop = o.meterStop, interval = o.meterInterval;

            var _intervals = [];
            for (i = start; i < stop; i++) {
                for (j = 0; j < 60; j += interval) {
                    m = (i < 10 ? "0" + i : i) + ":" + (j < 10 ? "0" + j : j);
                    $("<li/>").addClass("js-interval-" + m.replace(":", "-")).html("<em>" + m + "</em>").appendTo(meter);
                    _intervals.push(m);
                }
            }
            element.data("intervals", _intervals);
            meter.insertBefore(element.find(".events-grid"));

            //console.log(element.data("intervals"));

            // Re-Calc all event-stream width and set background for time
            element.find(".event-stream").each(function (i, s) {
                var event_stream_width = 0;
                var events = $(s).find(".event");

                events.each(function (i, el) {
                    event_stream_width += $(el).outerWidth() + parseInt($(el).css('margin-left'));
                });

                $(s).css({
                    width: (event_stream_width + ((events.length - 1) * 2) + 1)
                });

                $(s).find(".time").css("background-color", $(streams[i]).css('background-color'));
            });

            // Set scrollbar
            events_container.css({
                'overflow-x': (o.scrollBar ? 'scroll' : 'hidden')
            });

            // Set streamer height
            element.css({
                height: element.find(".streams").outerHeight() + (o.scrollBar ? 20 : 0)
            });

            // Re-Calc events-area width
            var events_area_width = 0;
            groups.each(function (i, el) {
                events_area_width += $(el).outerWidth();
            });
            events_area_width += ((groups.length - 1) * 2) + 10;
            events_area.css('width', events_area_width);

            events.each(function (i, el) {
                addTouchEvents(el);
            });

            element.mousewheel(function (event, delta) {
                var scroll_value = delta * 50;
                events_container.scrollLeft(events_container.scrollLeft() - scroll_value);
                return false;
            });

            streams.each(function (i, s) {
                $(s).mousedown(function (e) {
                    if (element.data('streamSelect') == i) {
                        events.removeClass('event-disable');
                        element.data('streamSelect', -1);
                    } else {
                        element.data('streamSelect', i);
                        events.addClass('event-disable');
                        $(event_streams[i]).find(".event").removeClass("event-disable");
                    }
                });
            });

            this._createEvents();

            this.slideToTime(o.slideToTime, o.slideSleep, o.slideSpeed);

            element.data('streamer', this);
        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;
            var events = element.find(".event");

            events.on('click', function (e) {

                var event = $(this);

                if (e.ctrlKey) {
                    $(this).toggleClass("selected");
                }

                if (typeof o.onClick === 'function') {
                    o.onClick(event);
                } else {
                    if (typeof window[o.onClick] === 'function') {
                        window[o.onClick](event);
                    } else {
                        var result = eval("(function(){" + o.onClick + "})");
                        result.call(event);
                    }
                }

                e.preventDefault();
            });

            element.find(".js-go-previous-time").on('click', function (e) {
                var next_index = element.data("intervals").indexOf(element.data("current-time"));
                if (next_index == 0) {
                    return;
                }
                next_index--;
                var new_time = element.data("intervals")[next_index];
                that.slideToTime(new_time, 0, o.slideSpeed);
            });

            element.find(".js-go-next-time").on('click', function (e) {
                var next_index = element.data("intervals").indexOf(element.data("current-time"));
                if (next_index == element.data("intervals").length - 1) {
                    return;
                }
                next_index++;
                var new_time = element.data("intervals")[next_index];
                that.slideToTime(new_time, 0, o.slideSpeed);
            });

            element.find(".js-show-all-streams").on("click", function (e) {
                element.find(".event").removeClass("event-disable");
                element.data('streamSelect', -1);
                e.preventDefault();
            });


            element.find(".js-schedule-mode").on("click", function (e) {
                $(this).toggleClass("active");
                element.data("schedule-mode", $(this).hasClass("inverse"));
                e.preventDefault();
            });
        },

        slideToTime: function (time, sleep, speed) {
            var that = this, element = this.element,
                interval, _time;

            if (time === 'default') {
                interval = element.find(".meter li")[0];
                time = interval.className.replace("js-interval-", "").replace("-", ":");
            } else {
                _time = time.split(":");

                if (_time[0].length === 1) {
                    time = '0' + time;
                }

            }

            interval = element.find(".meter li.js-interval-" + time.replace(":", "-"))[0];

            setTimeout(function () {
                element.find(".events").animate({
                    scrollLeft: (interval.offsetLeft - $('.streams').width())
                }, speed, function () {
                    that._afterSlide();
                });
            }, sleep);

            element.data("current-time", time);
        },

        _afterSlide: function () {

        },

        _destroy: function () {

        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/tabcontrol.js
    $.widget("metro.tabControl", {

        version: "3.0.0",

        options: {
            openTarget: false,
            saveState: false,
            onTabClick: function (tab) { return true; },
            onTabChange: function (tab) { },
            _current: { tab: false, frame: false }
        },


        _create: function () {
            var that = this, element = this.element, o = this.options;
            var tabs = element.children('.tabs').find('li').children('a');
            var frames = element.children('.frames').children('div');
            var tab, target, frame;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {

                var stored_target = window.localStorage.getItem(element.attr('id') + "-stored-tab");
                if (stored_target && stored_target !== 'undefined') {
                    tab = element.find("a[href='" + stored_target + "']");
                    if (tab) {
                        target = tab.attr('href');
                        frame = target && target.isUrl() ? false : $(target);
                        o._current.tab = tab;
                        o._current.frame = frame;
                    }
                }
            }

            if (!o._current.tab && o.openTarget !== false) {

                tab = element.find("a[href='" + o.openTarget + "']");
                if (tab) {
                    target = tab.attr('href');
                    frame = target && target.isUrl() ? false : $(target);
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            }

            if (!o._current.tab) {

                $.each(tabs, function (i, v) {
                    var tab = $(v), target = tab.attr('href'), frame = target.isUrl() ? false : $(target);
                    if (tab.parent().hasClass('active') && !tab.parent().hasClass('disabled') && frame !== false) {
                        o._current.tab = tab;
                        o._current.frame = frame;
                    }
                });
            }

            if (!o._current.tab) {

                for (var i = 0; i < tabs.length; i++) {
                    if (!$(tabs[i]).attr('href').isUrl() && !$(tabs[i]).parent().hasClass('disabled')) {
                        o._current.tab = $(tabs[i]);
                        o._current.frame = $($(tabs[i]).attr('href'));
                        break;
                    }
                }
            }

            this._createEvents();
            this._openTab();

            //this._hideTabs();
            //
            //$(window).on('resize', function(){
            //    that._hideTabs();
            //});

            element.data('tabControl', this);

        },

        _hideTabs: function () {
            var element = this.element;
            var w = element.outerWidth();
            var _tabs = element.children('.tabs').find('li:not(.non-visible-tabs)');
            var _nvt = element.children('.tabs').find('.non-visible-tabs').children('.d-menu');

            $.each(_tabs, function () {
                var $tab = $(this), tab = this;
                if (tab.offsetLeft + tab.offsetWidth + 30 > w) {
                    var new_tab = $tab.clone(true);
                    new_tab.appendTo(_nvt);
                    $tab.remove();
                }
            });
        },

        _openTab: function () {
            var element = this.element, o = this.options;
            var tabs = element.children('.tabs').find('li').children('a');
            var frames = element.children('.frames').children('div');

            tabs.parent().removeClass('active');
            frames.hide();

            o._current.tab.parent().addClass('active');
            o._current.frame.show();

            if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {
                window.localStorage.setItem(element.attr('id') + "-stored-tab", o._current.tab.attr('href'));
            }
        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;
            var tabs = element.children('.tabs').find('li').children('a');
            var frames = element.children('.frames').children('div');

            element.on('click', '.tabs > li > a', function (e) {
                var result;
                var tab = $(this), target = tab.attr('href'), frame = $(target);

                if (tab.parent().hasClass('disabled')) { return false; }

                if (typeof o.onTabClick === 'function') {
                    if (!o.onTabClick(tab)) { return false; }
                } else {
                    if (typeof window[o.onTabClick] === 'function') {
                        if (!window[o.onTabClick](tab)) { return false; }
                    } else {
                        result = eval("(function(){" + o.onTabClick + "})");
                        if (!result.call(tab)) { return false; }
                    }
                }

                if (target.isUrl()) {
                    window.location.href = target;
                    return true;
                }

                o._current.tab = tab;
                o._current.frame = frame;

                that._openTab();

                if (typeof o.onTabChange === 'function') {
                    o.onTabChange(tab);
                } else {
                    if (typeof window[o.onTabChange] === 'function') {
                        window[o.onTabChange](tab);
                    } else {
                        result = eval("(function(){" + o.onTabChange + "})");
                        result.call(tab);
                    }
                }

                e.preventDefault();
                e.stopPropagation();
            });
        },

        hideTab: function (tab) {

        },

        showTab: function (tab) {

        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/tile.js
    $.widget("metro.tile", {

        version: "3.0.0",

        options: {
            effect: 'slideLeft',
            period: 4000,
            duration: 700,
            easing: 'doubleSqrt',
            onClick: function (tile) { }
        },

        _frames: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _size: {},

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createTransformTile();
            this._createLiveTile();
            this._createEvents();

            element.data('tile', this);

        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;
            var event = isTouchDevice() ? 'touchstart' : 'click';

            element.on(event, function (e) {
                if (element[0].tagName === "A") {

                } else {
                    if (typeof o.onClick === 'function') {
                        o.onClick(element);
                    } else {
                        if (typeof window[o.onClick] === 'function') {
                            window[o.onClick](element);
                        } else {
                            var result = eval("(function(){" + o.onClick + "})");
                            result.call(element);
                        }
                    }
                }
            });
        },

        _createLiveTile: function () {
            var that = this, element = this.element, o = this.options;
            var event_down = isTouchDevice() ? 'touchstart' : 'mouseenter';
            var event_up = isTouchDevice() ? 'touchend' : 'mouseleave';

            this._frames = element.find(".live-slide");
            if (this._frames.length <= 1) { return false; }

            $.easing.doubleSqrt = function (t) { return Math.sqrt(Math.sqrt(t)); };

            this._size = {
                'width': element.width(),
                'height': element.height()
            };

            element.on(event_down, function () {
                that.stop();
            });

            element.on(event_up, function () {
                that.start();
            });

            this.start();
        },

        start: function () {
            var that = this;
            this._interval = setInterval(function () {
                that._animate();
            }, this.options.period);
        },

        stop: function () {
            clearInterval(this._interval);
        },

        _animate: function () {
            var currentFrame = this._frames[this._currentIndex], nextFrame;
            this._currentIndex += 1;
            if (this._currentIndex >= this._frames.length) { this._currentIndex = 0; }
            nextFrame = this._frames[this._currentIndex];

            switch (this.options.effect) {
                case 'slideLeft': this._effectSlideLeft(currentFrame, nextFrame); break;
                case 'slideRight': this._effectSlideRight(currentFrame, nextFrame); break;
                case 'slideDown': this._effectSlideDown(currentFrame, nextFrame); break;
                case 'slideUpDown': this._effectSlideUpDown(currentFrame, nextFrame); break;
                case 'slideLeftRight': this._effectSlideLeftRight(currentFrame, nextFrame); break;
                default: this._effectSlideUp(currentFrame, nextFrame);
            }
        },

        _effectSlideLeftRight: function (currentFrame, nextFrame) {
            if (this._currentIndex % 2 === 0) {
                this._effectSlideLeft(currentFrame, nextFrame);
            } else {
                this._effectSlideRight(currentFrame, nextFrame);
            }
        },

        _effectSlideUpDown: function (currentFrame, nextFrame) {
            if (this._currentIndex % 2 === 0) {
                this._effectSlideUp(currentFrame, nextFrame);
            } else {
                this._effectSlideDown(currentFrame, nextFrame);
            }
        },

        _effectSlideUp: function (currentFrame, nextFrame) {
            var _out = this._size.height;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({ top: -_out }, options);
            $(nextFrame)
                .css({ top: _out })
                .show()
                .animate({ top: 0 }, options);
        },

        _effectSlideDown: function (currentFrame, nextFrame) {
            var _out = this._size.height;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({ top: _out }, options);
            $(nextFrame)
                .css({ top: -_out })
                .show()
                .animate({ top: 0 }, options);
        },

        _effectSlideLeft: function (currentFrame, nextFrame) {
            var _out = this._size.width;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({ left: _out * -1 }, options);
            $(nextFrame)
                .css({ left: _out })
                .show()
                .animate({ left: 0 }, options);
        },

        _effectSlideRight: function (currentFrame, nextFrame) {
            var _out = this._size.width;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({ left: _out }, options);
            $(nextFrame)
                .css({ left: -_out })
                .show()
                .animate({ left: 0 }, options);
        },

        _createTransformTile: function () {
            var that = this, element = this.element, o = this.options;
            var dim = { w: element.width(), h: element.height() };
            var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';
            var event_up = isTouchDevice() ? 'touchend' : 'mouseup';
            var event_leave = isTouchDevice() ? 'touchend' : 'mouseleave';


            element.on(event_down, function (e) {
                var X = e.pageX - $(this).offset().left, Y = e.pageY - $(this).offset().top;
                var transform = 'top';

                if (X < dim.w * 1 / 3 && (Y < dim.h * 1 / 2 || Y > dim.h * 1 / 2)) {
                    transform = 'left';
                } else if (X > dim.w * 2 / 3 && (Y < dim.h * 1 / 2 || Y > dim.h * 1 / 2)) {
                    transform = 'right';
                } else if (X > dim.w * 1 / 3 && X < dim.w * 2 / 3 && Y > dim.h / 2) {
                    transform = 'bottom';
                }

                $(this).addClass("tile-transform-" + transform);

                //console.log(transform);

                if (element[0].tagName === 'A' && element.attr('href')) {
                    setTimeout(function () {
                        document.location.href = element.attr('href');
                    }, 500);
                }
            });

            element.on(event_up, function () {
                $(this)
                    .removeClass("tile-transform-left")
                    .removeClass("tile-transform-right")
                    .removeClass("tile-transform-top")
                    .removeClass("tile-transform-bottom");
            });
            element.on(event_leave, function () {
                $(this)
                    .removeClass("tile-transform-left")
                    .removeClass("tile-transform-right")
                    .removeClass("tile-transform-top")
                    .removeClass("tile-transform-bottom");
            });
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/treeview.js
    $.widget("metro.treeview", {

        version: "3.0.0",

        options: {
            doubleClick: true,
            onClick: function (leaf, node, pnode, tree) { },
            onInputClick: function (leaf, node, pnode, tree) { },
            onExpand: function (leaf, node, pnode, tree) { },
            onCollapse: function (leaf, node, pnode, tree) { }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initTree();
            this._createEvents();

            element.data('treeview', this);
        },


        _createCheckbox: function (leaf, parent) {
            var input, checkbox, check;

            input = $("<label/>").addClass("input-control checkbox small-check").insertBefore(leaf);
            checkbox = $("<input/>").attr('type', 'checkbox').appendTo(input);
            check = $("<span/>").addClass('check').appendTo(input);
            if (parent.data('name') !== undefined) {
                checkbox.attr('name', parent.data('name'));
            }
            if (parent.data('id') !== undefined) {
                checkbox.attr('id', parent.data('id'));
            }
            if (parent.data('checked') !== undefined) {
                checkbox.prop('checked', parent.data('checked'));
            }
            if (parent.data('readonly') !== undefined) {
                checkbox.prop('disabled', parent.data('readonly'));
            }
            if (parent.data('disabled') !== undefined) {
                checkbox.prop('disabled', parent.data('disabled'));
                if (parent.data('disabled') === true) {
                    parent.addClass('disabled');
                }
            }
            if (parent.data('value') !== undefined) {
                checkbox.val(parent.data('value'));
            }
        },

        _createRadio: function (leaf, parent) {
            var input, checkbox, check;

            input = $("<label/>").addClass("input-control radio small-check").insertBefore(leaf);
            checkbox = $("<input/>").attr('type', 'radio').appendTo(input);
            check = $("<span/>").addClass('check').appendTo(input);
            if (parent.data('name') !== undefined) {
                checkbox.attr('name', parent.data('name'));
            }
            if (parent.data('id') !== undefined) {
                checkbox.attr('id', parent.data('id'));
            }
            if (parent.data('checked') !== undefined) {
                checkbox.prop('checked', parent.data('checked'));
            }
            if (parent.data('readonly') !== undefined) {
                checkbox.prop('disabled', parent.data('readonly'));
            }
            if (parent.data('disabled') !== undefined) {
                checkbox.prop('disabled', parent.data('disabled'));
                if (parent.data('disabled') === true) {
                    parent.addClass('disabled');
                }
            }
            if (parent.data('value') !== undefined) {
                checkbox.val(parent.data('value'));
            }
        },

        _initTree: function () {
            var that = this, element = this.element, o = this.options;
            var leafs = element.find('.leaf');
            $.each(leafs, function () {
                var leaf = $(this), parent = leaf.parent('li'), ul = leaf.siblings('ul'), node = $(leaf.parents('.node')[0]);
                //var input, checkbox, check;

                if (parent.data('mode') === 'checkbox') {
                    that._createCheckbox(leaf, parent);
                }

                if (parent.data('mode') === 'radio') {
                    that._createRadio(leaf, parent);
                }

                if (ul.length > 0) {
                    if (!parent.hasClass('node')) {
                        parent.addClass('node');
                    }
                }
                if (parent.hasClass('collapsed')) {
                    ul.hide();
                }
            });
        },

        _renderChecks: function (check) {
            var element = this.element, that = this, o = this.options;
            var state = check.is(":checked");
            var parent = $(check.parent().parent());
            var children_checks = parent.children('ul').find('[type="checkbox"]');

            children_checks.prop('checked', state).removeClass('indeterminate');

            $.each(element.find('.node[data-mode=checkbox]').reverse(), function () {
                var node = $(this),
                    ch = node.children('.input-control').find('[type="checkbox"]'),
                    children_all = node.children('ul').find('[type="checkbox"]'),
                    children_checked = node.children('ul').find('[type="checkbox"]:checked');

                ch.removeClass('indeterminate');
                if (children_checked.length === 0) {
                    ch.prop("checked", false);
                    ch.removeClass('indeterminate');
                } else
                    if (children_checked.length > 0 && children_all.length > children_checked.length) {
                        ch.prop('checked', true);
                        ch.addClass('indeterminate');
                    }
            });

        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;

            element.on('change', 'input:checkbox', function () {
                that._renderChecks($(this));
            });

            element.on('click', 'input', function () {
                var leaf = $(this),
                    node = $(leaf.parents('.node')[0]),
                    parent = leaf.parent('li'),
                    check = leaf.siblings('.input-control').find('input:checkbox'),
                    radio = leaf.siblings('.input-control').find('input:radio'),
                    new_check_state,
                    check_disabled;

                if (check.length > 0) {
                    new_check_state = !check.is(":checked");
                    check_disabled = check.is(":disabled");
                    if (!check_disabled) { check.prop('checked', new_check_state); }
                    that._renderChecks(check);
                }
                if (radio.length > 0) {
                    check_disabled = radio.is(":disabled");
                    if (!check_disabled) { radio.prop('checked', true); }
                }

                if (typeof o.onInputClick === 'function') {
                    o.onInputClick(leaf, parent, node, that);
                } else {
                    if (typeof window[o.onInputClick] === 'function') {
                        window[o.onInputClick](leaf, parent, node, that);
                    } else {
                        var result = eval("(function(){" + o.onInputClick + "})");
                        result.call(leaf, parent, node, that);
                    }
                }
            });

            element.on('click', '.leaf', function () {
                var leaf = $(this),
                    node = $(leaf.parents('.node')[0]),
                    parent = leaf.parent('li');

                element.find('.leaf').parent('li').removeClass('active');
                parent.addClass('active');

                if (typeof o.onClick === 'function') {
                    o.onClick(leaf, parent, node, that);
                } else {
                    if (typeof window[o.onClick] === 'function') {
                        window[o.onClick](leaf, parent, node, that);
                    } else {
                        var result = eval("(function(){" + o.onClick + "})");
                        result.call(leaf, parent, node, that);
                    }
                }
            });

            if (o.doubleClick) {
                element.on('dblclick', '.leaf', function (e) {
                    var leaf = $(this), parent = leaf.parent('li'), node = $(leaf.parents('.node')[0]);
                    var result;

                    if (parent.hasClass("keep-open")) {
                        return false;
                    }

                    parent.toggleClass('collapsed');
                    if (!parent.hasClass('collapsed')) {
                        parent.children('ul').fadeIn('fast');

                        if (typeof o.onExpand === 'function') {
                            o.onExpand(parent, leaf, node, that);
                        } else {
                            if (typeof window[o.onExpand] === 'function') {
                                window[o.onExpand](parent, leaf, node, that);
                            } else {
                                result = eval("(function(){" + o.onExpand + "})");
                                result.call(parent, leaf, node, that);
                            }
                        }
                    } else {
                        parent.children('ul').fadeOut('fast');

                        if (typeof o.onCollapse === 'function') {
                            o.onCollapse(parent, leaf, node, that);
                        } else {
                            if (typeof window[o.onCollapse] === 'function') {
                                window[o.onCollapse](parent, leaf, node, that);
                            } else {
                                result = eval("(function(){" + o.onCollapse + "})");
                                result.call(parent, leaf, node, that);
                            }
                        }
                    }
                    e.stopPropagation();
                    e.preventDefault();
                });
            }

            element.on('click', '.node-toggle', function (e) {
                var leaf = $(this).siblings('.leaf'), parent = $(this).parent('li'), node = $(leaf.parents('.node')[0]);
                var result;

                if (parent.hasClass("keep-open")) { return false; }

                parent.toggleClass('collapsed');
                if (!parent.hasClass('collapsed')) {
                    parent.children('ul').fadeIn('fast');
                    if (typeof o.onExpand === 'function') {
                        o.onExpand(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onExpand] === 'function') {
                            window[o.onExpand](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){" + o.onExpand + "})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                } else {
                    parent.children('ul').fadeOut('fast');
                    if (typeof o.onCollapse === 'function') {
                        o.onCollapse(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onCollapse] === 'function') {
                            window[o.onCollapse](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){" + o.onCollapse + "})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                }
                e.stopPropagation();
                e.preventDefault();
            });
        },

        addLeaf: function (parent, name, data) {
            var element = this.element;
            var leaf, li, ul;

            if (parent) {
                if (parent[0].tagName === "LI") { parent.addClass('node'); }
                if (parent.children('.node-toggle').length === 0) {
                    $("<span/>").addClass('node-toggle').appendTo(parent);
                }
            }

            ul = parent ? $(parent).children('ul') : element.children('ul');

            if (ul.length === 0) {
                ul = $("<ul/>").appendTo(parent ? parent : element);
            }

            li = $("<li/>").appendTo(ul);

            if (data !== undefined) {
                if (data.tagName !== undefined) {
                    leaf = $("<" + data.tagName + "/>").addClass("leaf").appendTo(li);
                } else {
                    leaf = $("<span/>").addClass("leaf").appendTo(li);
                }
            } else {
                leaf = $("<span/>").addClass("leaf").appendTo(li);
            }

            leaf.html(name);

            if (data !== undefined) {
                $.each(data, function (key, value) {
                    li.attr("data-" + key, value);
                });
                if (data.mode !== undefined) {
                    switch (data.mode) {
                        case 'checkbox': this._createCheckbox(leaf, li); break;
                        case 'radio': this._createRadio(leaf, li); break;
                    }
                }
            }

            return this;
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/validator.js
    $.widget("metro.validator", {

        version: "1.0.0",

        options: {
            showErrorState: true,
            showErrorHint: true,
            showRequiredState: true,
            showSuccessState: true,
            hintSize: 0,
            hintBackground: '#FFFCC0',
            hintColor: '#000000',
            hideError: false,
            hideHint: 5000,
            hintEasing: 'easeInQuad',
            hintEasingTime: 400,
            hintMode: 'hint', // hint, line
            hintPosition: 'right',
            focusInput: true,
            onBeforeSubmit: function (form, result) { return true; },
            onErrorInput: function (input) { },
            onSubmit: function (form) { return true; }
        },

        _scroll: 0,

        funcs: {
            required: function (val) {
                return val.trim() !== "" && val.trim().toLowerCase().indexOf("selecciona") < 0 && val.trim().toLowerCase()!="0";
            },
            minlength: function (val, len) {
                if (len == undefined || isNaN(len) || len <= 0) {
                    return false;
                }
                return val.trim().length >= len;
            },
            maxlength: function (val, len) {
                if (len == undefined || isNaN(len) || len <= 0) {
                    return false;
                }
                return val.trim().length <= len;
            },
            min: function (val, min_value) {
                if (min_value == undefined || isNaN(min_value)) {
                    return false;
                }
                if (val.trim() === "") {
                    return false;
                }
                if (isNaN(val)) {
                    return false;
                }
                return val >= min_value;
            },
            max: function (val, max_value) {
                if (max_value == undefined || isNaN(max_value)) {
                    return false;
                }
                if (val.trim() === "") {
                    return false;
                }
                if (isNaN(val)) {
                    return false;
                }
                return val <= max_value;
            },
            email: function (val) {
                return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(val);
            },
            url: function (val) {
                return /^(?:[a-z]+:)?\/\//i.test(val);
            },
            date: function (val) {
                return !!(new Date(val) !== "Invalid Date" && !isNaN(new Date(val)));
            },
            number: function (val) {
                return (val - 0) == val && ('' + val).trim().length > 0;
            },
            digits: function (val) {
                return /^\d+$/.test(val);
            },
            hexcolor: function (val) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val);
            },
            pattern: function (val, pat) {
                if (pat == undefined) {
                    return false;
                }
                var reg = new RegExp(pat);
                return reg.test(val);
            },
            celular: function (val) {
                return /^\d+$/.test(val);
            },
            telefono: function (val) {
                return /^\d+$/.test(val);
            },
            cedula: function (ced) {
                var isNumeric;
                var total = 0;
                var tamanoLongitudCedula = 10;
                var coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                var numeroProvincias = 24;
                var tercerDigito = 6;

                if (ced.length == tamanoLongitudCedula) {
                    var provincia = parseInt(ced[0] + "" + ced[1]);
                    var digitoTres = parseInt(ced[2] + "");
                    if ((provincia > 0 && provincia <= numeroProvincias) && digitoTres < tercerDigito) {
                        var digitoVerificadorRecibido = parseInt(ced[9] + "");
                        for (var k = 0; k < coeficientes.length; k++) {
                            var valor = parseInt(coeficientes[k] + "") *
                                parseInt(ced[k] + "");
                            total = valor >= 10 ? total + (valor - 9) : total + valor;

                        }
                        var digitoVerificadorObtenido = total >= 10 ? (total % 10) != 0 ?
                            10 - (total % 10) : (total % 10) : total;
                        return digitoVerificadorObtenido == digitoVerificadorRecibido;

                    }
                    return false;

                } else {
                    return false;
                }
            },
            militar: function (val) {
                return val.trim() === "" || val.trim().replace("_","").length == 12;
            }
        },

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            if (o.hintMode !== 'line') {
                o.hintMode = 'hint2';
            }

            this._scroll = $(window).scrollTop();

            this._createValidator();

            element.data('validator', this);

        },

        _createValidator: function () {
            var that = this, element = this.element, o = this.options;
            var inputs = element.find("[data-validate-func]");

            element.attr('novalidate', 'novalidate');

            if (o.showRequiredState) {
                $.each(inputs, function () {
                    var input = $(this);
                    if (input.parent().hasClass('input-control')) {
                        input.parent().addClass('required');
                    } else {
                        input.addClass('required');
                    }
                });
            }

            inputs.on('focus', function () {
            });

            //console.log(this._scroll);

            $(window).scroll(function (e) {
                var st = $(this).scrollTop();
                var delta = isNaN(st - this._scroll) ? 0 : st - this._scroll;
                $(".validator-hint.hint2").css({
                    top: '-=' + delta
                });
                this._scroll = st;
            });

            if (element[0].onsubmit) {
                this._onsubmit = element[0].onsubmit;
                element[0].onsubmit = null;
            } else {
                this._onsubmit = null;
            }

            element[0].onsubmit = function () {
                return that._submit();
            };
        },

        _submit: function () {
            if (isPostback()) {
                return true;
            }
            var that = this, element = this.element, o = this.options;
            var inputs = element.find("[data-validate-func]");
            var submit = element.find(":submit").attr('disabled', 'disabled').addClass('disabled');

            var result = 0;
            $('.validator-hint').hide();
            inputs.removeClass('error success');
            $.each(inputs, function (i, v) {
                var input = $(v);
                if (input.parent().hasClass('input-control')) {
                    input.parent().removeClass('error success');
                }
            });

            $.each(inputs, function (i, v) {
                var input = $(v);
                var func = input.data('validateFunc'), arg = input.data('validateArg');
                var this_result = that.funcs[func](input.val(), arg);

                if (!this_result) {
                    if (typeof o.onErrorInput === 'function') {
                        o.onErrorInput(input);
                    } else {
                        if (typeof window[o.onErrorInput] === 'function') {
                            window[o.onErrorInput](input);
                        } else {
                            result = eval("(function(){" + o.onErrorInput + "})");
                            result.call(input);
                        }
                    }
                }

                if (!this_result && o.showErrorState) {
                    that._showError(input);
                }
                if (!this_result && o.showErrorHint) {
                    setTimeout(function () {
                        that._showErrorHint(input);
                    }, i * 100);

                }
                if (this_result && o.showSuccessState) {
                    that._showSuccess(input);
                }
                if (!this_result && i == 0 && o.focusInput) {
                    input.focus();
                }
                result += !this_result ? 1 : 0;
            });

            if (typeof o.onBeforeSubmit === 'function') {
                result += !o.onBeforeSubmit(element, result) ? 1 : 0;
            } else {
                if (typeof window[o.onBeforeSubmit] === 'function') {
                    result += window[o.onBeforeSubmit](element, result) ? 1 : 0;
                } else {
                    var f0 = eval("(function(){" + o.onBeforeSubmit + "})");
                    result += f0.call(element, result) ? 1 : 0;
                }
            }

            if (result !== 0) {
                submit.removeAttr('disabled').removeClass('disabled');
                return false;
            }

            if (typeof o.onSubmit === 'function') {
                result = o.onSubmit(element[0]);
            } else {
                if (typeof window[o.onSubmit] === 'function') {
                    result = window[o.onSubmit](element[0]);
                } else {
                    var f = eval("(function(){" + o.onSubmit + "})");
                    result = f.call(element[0]);
                }
            }

            submit.removeAttr('disabled').removeClass('disabled');

            return result;
        },

        _showSuccess: function (input) {
            if (input.parent().hasClass('input-control')) {
                input.parent().addClass('success');
            } else {
                input.addClass('success');
            }
        },

        _showError: function (input) {
            var o = this.options;

            if (input.parent().hasClass('input-control')) {
                input.parent().addClass('error');
            } else {
                input.addClass('error');
            }

            if (o.hideError && o.hideError > 0) {
                setTimeout(function () {
                    input.parent().removeClass('error');
                }, o.hideError);
            }
        },

        _showErrorHint: function (input) {
            var o = this.options,
                msg = input.data('validateHint'),
                pos = input.data('validateHintPosition') || o.hintPosition,
                mode = input.data('validateHintMode') || o.hintMode,
                background = input.data('validateHintBackground') || o.hintBackground,
                color = input.data('validateHintColor') || o.hintColor;

            var hint, top, left;

            if (msg === undefined) {
                return false;
            }

            hint = $("<div/>").addClass(mode + ' validator-hint');//.appendTo(input.parent());
            hint.html(msg !== undefined ? this._format(msg, input.val()) : '');
            hint.css({
                'min-width': o.hintSize
            });

            if (background.isColor()) {
                hint.css('background-color', background);
            } else {
                hint.addClass(background);
            }

            if (color.isColor()) {
                hint.css('color', color);
            } else {
                hint.addClass(color);
            }

            // Position
            if (mode === 'line') {
                hint.addClass('hint2').addClass('line');
                hint.css({
                    'position': 'relative',
                    'width': input.parent().hasClass('input-control') ? input.parent().width() : input.width(),
                    'z-index': 100
                });
                hint.appendTo(input.parent());
                hint.fadeIn(o.hintEasingTime, function () {
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else {
                hint.appendTo("body");
                // right
                if (pos === 'right') {
                    left = input.offset().left + input.outerWidth() + 15 - $(window).scrollLeft();
                    top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                    hint.addClass(pos);
                    hint.css({
                        top: top,
                        left: $(window).width() + 100
                    });
                    hint.show().animate({
                        left: left
                    }, o.hintEasingTime, o.hintEasing, function () {
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                } else if (pos === 'left') {
                    left = input.offset().left - hint.outerWidth() - 10 - $(window).scrollLeft();
                    top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                    hint.addClass(pos);
                    hint.css({
                        top: top,
                        left: -input.offset().left - hint.outerWidth() - 10
                    });
                    hint.show().animate({
                        left: left
                    }, o.hintEasingTime, o.hintEasing, function () {
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                } else if (pos === 'top') {
                    left = input.offset().left + input.outerWidth() / 2 - hint.outerWidth() / 2 - $(window).scrollLeft();
                    top = input.offset().top - $(window).scrollTop() - hint.outerHeight() - 20;

                    hint.addClass(pos);
                    hint.css({
                        top: -hint.outerHeight(),
                        left: left
                    }).show().animate({
                        top: top
                    }, o.hintEasingTime, o.hintEasing, function () {
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                } else /*bottom*/ {
                    left = input.offset().left + input.outerWidth() / 2 - hint.outerWidth() / 2 - $(window).scrollLeft();
                    top = input.offset().top - $(window).scrollTop() + input.outerHeight();

                    hint.addClass(pos);
                    hint.css({
                        top: $(window).height(),
                        left: left
                    }).show().animate({
                        top: top
                    }, o.hintEasingTime, o.hintEasing, function () {
                        setTimeout(function () {
                            hint.hide().remove();
                        }, o.hideHint);
                    });
                }
            }
        },

        _format: function (source, params) {
            if (arguments.length === 1) {
                return function () {
                    var args = $.makeArray(arguments);
                    args.unshift(source);
                    return $.validator.format.apply(this, args);
                };
            }
            if (arguments.length > 2 && params.constructor !== Array) {
                params = $.makeArray(arguments).slice(1);
            }
            if (params.constructor !== Array) {
                params = [params];
            }
            $.each(params, function (i, n) {
                source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
                    return n;
                });
            });
            return source;
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/window.js
    $.widget("metro.window", {

        version: "3.0.0",

        options: {
            parent: 'default',
            captionStyle: false,
            contentStyle: false,
            buttons: {
                btnMin: false,
                btnMax: false,
                btnClose: false
            },
            title: false,
            content: false,
            icon: false,
            type: 'default', // 'modal'
            size: false, // {width: x, height: y}

            onBtnMinClick: function (e) { e.preventDefault(); },
            onBtnMaxClick: function (e) { e.preventDefault(); },
            onBtnCloseClick: function (e) { e.preventDefault(); },
            onShow: function (e) { e.preventDefault(); },
            onHide: function (e) { e.preventDefault(); }
        },

        _create: function () {
            var element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._createWindow();

            element.data('window', this);

        },

        _createWindow: function () {
            var that = this, element = this.element, o = this.options;
            var wind = element, capt, cont;

            wind.addClass("window");
            capt = $("<div/>").addClass("window-caption");
            cont = $("<div/>").addClass("window-content");

            if (o.icon || o.title) { capt.appendTo(wind); }
            cont.appendTo(wind);

            if (typeof o.size === 'object') {
                $.each(o.size, function (key, value) {
                    cont.css(key, value);
                });
            }

            if (o.captionStyle && typeof o.captionStyle === 'object') {
                $.each(o.captionStyle, function (key, value) {
                    if (value.isColor()) {
                        capt.css(key, value + " !important");
                    } else {
                        capt.addClass(value);
                    }
                });
            }

            if (o.contentStyle && typeof o.contentStyle === 'object') {
                $.each(o.contentStyle, function (key, value) {
                    if (value.isColor()) {
                        cont.css(key, value + " !important");
                    } else {
                        cont.addClass(value);
                    }
                });
            }

            wind.appendTo(o.parent !== 'default' ? o.parent : element.parent());

            this.icon();
            this.title();
            this.buttons();
            this.content();
        },

        icon: function () {
            var o = this.options;
            var capt = this.element.children('.window-caption');
            var icon = capt.find(".window-caption-icon");

            if (o.icon) {
                if (icon.length === 0) {
                    $("<span/>").addClass('window-caption-icon').html(o.icon).appendTo(capt);
                } else {
                    icon.html(o.icon);
                }

            }
        },

        title: function () {
            var o = this.options;
            var capt = this.element.children('.window-caption');
            var title = capt.find(".window-caption-title");

            if (o.title) {
                if (title.length === 0) {
                    $("<span/>").addClass('window-caption-title').html(o.title).appendTo(capt);
                } else {
                    title.html(o.title);
                }
            }
        },

        buttons: function () {
            var o = this.options;
            var bMin, bMax, bClose;
            var capt = this.element.children('.window-caption');

            if (capt.length === 0) { return; }

            if (o.buttons) {
                var btnMin = o.buttons.btnMin;
                var btnMax = o.buttons.btnMax;
                var btnClose = o.buttons.btnClose;

                if (btnMin && btnMin !== false) {
                    bMin = $("<span/>").addClass('btn-min').appendTo(capt);
                    if (typeof btnMin === 'object') {
                        bMin.css(btnMin);
                    }
                    if (typeof o.onBtnMinClick === 'string') {
                        var bMinFn = window[o.onBtnMinClick];
                        bMin.on('click', bMinFn);
                    } else {
                        bMin.on('click', o.onBtnMinClick(e));
                    }
                }

                if (btnMax && btnMax !== false) {
                    bMax = $("<span/>").addClass('btn-max').appendTo(capt);
                    if (typeof btnMax === 'object') {
                        bMax.css(btnMax);
                    }
                    if (typeof o.onBtnMaxClick === 'string') {
                        var bMaxFn = window[o.onBtnMaxClick];
                        bMax.on('click', bMaxFn);
                    } else {
                        bMax.on('click', o.onBtnMaxClick(e));
                    }
                }

                if (btnClose && btnClose !== false) {
                    bClose = $("<span/>").addClass('btn-close').appendTo(capt);
                    if (typeof btnClose === 'object') {
                        bClose.css(btnClose);
                    }
                    if (typeof o.onBtnCloseClick === 'string') {
                        var bCloseFn = window[o.onBtnCloseClick];
                        bClose.on('click', bCloseFn);
                    } else {
                        bClose.on('click', o.onBtnCloseClick(e));
                    }
                }
            }
        },

        content: function () {
            var o = this.options;
            var c = o.content;
            var content = this.element.children('.window-content');

            if (!c) { return; }

            if (c.isUrl()) {
                if (c.indexOf('youtube') > -1) {
                    var iframe = $("<iframe>");
                    var video_container = $("<div/>").addClass('video-container').appendTo(content);

                    iframe
                        .attr('src', c)
                        .attr('frameborder', '0');

                    iframe.appendTo(video_container);
                }
            } else {
                content.html(c);
            }
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    // Source: js/widgets/wizard.js
    $.widget("metro.wizard", {

        version: "3.0.0",

        options: {
            stepper: true,
            stepperType: 'default',
            stepperClickable: false,
            startPage: 'default',
            finishStep: 'default',
            locale: window.METRO_CURRENT_LOCALE,
            buttons: {
                cancel: true,
                help: true,
                prior: true,
                next: true,
                finish: true
            },

            onCancel: function (page, wiz) { },
            onHelp: function (page, wiz) { },
            onPrior: function (page, wiz) { return true; },
            onNext: function (page, wiz) { return true; },
            onFinish: function (page, wiz) { },

            onPage: function (page, wiz) { },
            onStepClick: function (step) { }
        },

        _stepper: undefined,
        _currentStep: 0,
        _steps: undefined,

        _create: function () {
            var that = this,
                element = this.element,
                o = this.options,
                steps = element.find(".step");

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._steps = steps;

            if (o.stepper) {
                this._stepper = this._createStepper(steps.length)
                    .insertBefore(element.find('.steps'))
                    .stepper({
                        clickable: o.stepperClickable
                    }).on('stepclick', function (e, s) {
                        that.stepTo(s);
                        if (typeof o.onStepClick === 'function') {
                            o.onStepClick(s);
                        } else {
                            if (typeof window[o.onStepClick] === 'function') {
                                window[o.onStepClick](s);
                            } else {
                                var result = eval("(function(){" + o.onStepClick + "})");
                                result.call(s);
                            }
                        }
                    });
            }

            if (element.data('locale') !== undefined) { o.locale = element.data('locale'); }

            this._createEvents();

            var sp = (o.startPage !== 'default' && parseInt(o.startPage) > 1) ? o.startPage : 1;
            this.stepTo(sp);

            if (typeof o.onPage === 'string') {
                window[o.onPage](this._currentStep + 1, element);
            } else {
                o.onPage(this._currentStep + 1, element);
            }

            element.data('wizard', this);

        },

        _createStepper: function (steps) {
            var stepper, o = this.options;

            stepper = $("<div/>").addClass("stepper")
                .attr("data-role", "stepper")
                .attr("data-steps", steps);

            if (o.stepperType !== 'default') {
                stepper.addClass(o.stepperType);
            }

            return stepper;
        },

        _createEvents: function () {
            var that = this, element = this.element, o = this.options;

            if (o.buttons) {
                var actions = $("<div/>").addClass("actions").appendTo(element);
                var group_left = $("<div/>").addClass("group-left").appendTo(actions);
                var group_right = $("<div/>").addClass("group-right").appendTo(actions);
                var cancel_button, help_button, prior_button, next_button, finish_button;

                if (o.buttons.cancel) {
                    cancel_button = $("<button type='button'/>").addClass("btn-cancel").html(window.METRO_LOCALES[o.locale].buttons[2]);
                    if (typeof o.buttons.cancel === "boolean") {
                        cancel_button.appendTo(group_left);
                    } else {
                        if (o.buttons.cancel.title) {
                            cancel_button.html(o.buttons.cancel.title);
                        }
                        if (o.buttons.cancel.cls) {
                            cancel_button.addClass(o.buttons.cancel.cls);
                        }
                        if (o.buttons.cancel.group && o.buttons.cancel.group !== "left") {
                            cancel_button.appendTo(group_right);
                        } else {
                            cancel_button.appendTo(group_left);
                        }
                    }
                    cancel_button.on('click', function () {
                        if (typeof o.onCancel === 'function') {
                            o.onCancel(that._currentStep + 1, element);
                        } else {
                            if (typeof window[o.onCancel] === 'function') {
                                window[o.onCancel](that._currentStep + 1, element);
                            } else {
                                var result = eval("(function(){" + o.onCancel + "})");
                                result.call(that._currentStep + 1, element);
                            }
                        }
                    });
                }
                if (o.buttons.help) {
                    help_button = $("<button type='button'/>").addClass("btn-help").html(window.METRO_LOCALES[o.locale].buttons[3]);
                    if (typeof o.buttons.help === "boolean") {
                        help_button.appendTo(group_right);
                    } else {
                        if (o.buttons.help.title) {
                            help_button.html(o.buttons.help.title);
                        }
                        if (o.buttons.help.cls) {
                            help_button.addClass(o.buttons.help.cls);
                        }
                        if (o.buttons.help.group && o.buttons.help.group !== "left") {
                            help_button.appendTo(group_right);
                        } else {
                            help_button.appendTo(group_left);
                        }
                    }
                    help_button.on('click', function () {
                        if (typeof o.onHelp === 'function') {
                            o.onHelp(that._currentStep + 1, element);
                        } else {
                            if (typeof window[o.onHelp] === 'function') {
                                window[o.onHelp](that._currentStep + 1, element);
                            } else {
                                var result = eval("(function(){" + o.onHelp + "})");
                                result.call(that._currentStep + 1, element);
                            }
                        }
                    });
                }
                if (o.buttons.prior) {
                    prior_button = $("<button type='button'/>").addClass("btn-prior").html(window.METRO_LOCALES[o.locale].buttons[4]);
                    if (typeof o.buttons.prior === "boolean") {
                        prior_button.appendTo(group_right);
                    } else {
                        if (o.buttons.prior.title) {
                            prior_button.html(o.buttons.prior.title);
                        }
                        if (o.buttons.prior.cls) {
                            prior_button.addClass(o.buttons.prior.cls);
                        }
                        if (o.buttons.prior.group && o.buttons.prior.group !== "left") {
                            prior_button.appendTo(group_right);
                        } else {
                            prior_button.appendTo(group_left);
                        }
                    }
                    prior_button.on('click', function () {
                        if (typeof o.onPrior === 'function') {
                            if (o.onPrior(that._currentStep + 1, element)) { that.prior(); }
                        } else {
                            if (typeof window[o.onPrior] === 'function') {
                                if (window[o.onPrior](that._currentStep + 1, element)) { that.prior(); }
                            } else {
                                var result = eval("(function(){" + o.onPrior + "})");
                                if (result.call(that._currentStep + 1, element)) { that.prior(); }
                            }
                        }
                    });
                }
                if (o.buttons.next) {
                    next_button = $("<button type='button'/>").addClass("btn-next").html(window.METRO_LOCALES[o.locale].buttons[5]);
                    if (typeof o.buttons.next === "boolean") {
                        next_button.appendTo(group_right);
                    } else {
                        if (o.buttons.next.title) {
                            next_button.html(o.buttons.next.title);
                        }
                        if (o.buttons.next.cls) {
                            next_button.addClass(o.buttons.next.cls);
                        }
                        if (o.buttons.next.group && o.buttons.next.group !== "left") {
                            next_button.appendTo(group_right);
                        } else {
                            next_button.appendTo(group_left);
                        }
                    }
                    next_button.on('click', function () {
                        if (typeof o.onNext === 'function') {
                            if (o.onNext(that._currentStep + 1, element)) { that.next(); }
                        } else {
                            if (typeof window[o.onNext] === 'function') {
                                if (window[o.onNext](that._currentStep + 1, element)) { that.next(); }
                            } else {
                                var result = eval("(function(){" + o.onNext + "})");
                                if (result.call(that._currentStep + 1, element)) { that.next(); }
                            }
                        }
                    });
                }
                if (o.buttons.finish) {
                    finish_button = $("<button type='button'/>").addClass("btn-finish").html(window.METRO_LOCALES[o.locale].buttons[6]);
                    if (typeof o.buttons.finish === "boolean") {
                        finish_button.appendTo(group_right);
                    } else {
                        if (o.buttons.finish.title) {
                            finish_button.html(o.buttons.finish.title);
                        }
                        if (o.buttons.finish.cls) {
                            finish_button.addClass(o.buttons.finish.cls);
                        }
                        if (o.buttons.finish.group && o.buttons.finish.group !== "left") {
                            finish_button.appendTo(group_right);
                        } else {
                            finish_button.appendTo(group_left);
                        }
                    }
                    finish_button.on('click', function () {
                        if (typeof o.onFinish === 'function') {
                            o.onFinish(that._currentStep + 1, element);
                        } else {
                            if (typeof window[o.onFinish] === 'function') {
                                window[o.onFinish](that._currentStep + 1, element);
                            } else {
                                var result = eval("(function(){" + o.onFinish + "})");
                                result.call(that._currentStep + 1, element);
                            }
                        }
                    });
                }
            }
        },

        next: function () {
            var element = this.element, that = this, o = this.options;
            var new_step = this._currentStep + 1;

            if (new_step === this._steps.length) { return false; }

            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();


            if (typeof o.onPage === 'function') {
                o.onPage(that._currentStep + 1, element);
            } else {
                if (typeof window[o.onPage] === 'function') {
                    window[o.onPage](that._currentStep + 1, element);
                } else {
                    var result = eval("(function(){" + o.onPage + "})");
                    result.call(that._currentStep + 1, element);
                }
            }

            if (this._stepper !== undefined) { this._stepper.stepper('stepTo', this._currentStep + 1); }

            var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
            if (new_step === finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            if (new_step === this._steps.length - 1) {
                this.element.find('.btn-next').attr('disabled', true);
            } else {
                this.element.find('.btn-next').attr('disabled', false);
            }

            if (new_step > 0) {
                this.element.find('.btn-prior').attr('disabled', false);
            }

            return true;
        },

        prior: function () {
            var element = this.element, that = this, new_step = this._currentStep - 1;
            var o = this.options;

            if (new_step < 0) { return false; }

            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();

            if (typeof o.onPage === 'function') {
                o.onPage(that._currentStep + 1, element);
            } else {
                if (typeof window[o.onPage] === 'function') {
                    window[o.onPage](that._currentStep + 1, element);
                } else {
                    var result = eval("(function(){" + o.onPage + "})");
                    result.call(that._currentStep + 1, element);
                }
            }

            if (this._stepper !== undefined) { this._stepper.stepper('stepTo', this._currentStep + 1); }

            var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
            if (new_step === finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            if (new_step === 0) {
                this.element.find('.btn-prior').attr('disabled', true);
            } else {
                this.element.find('.btn-prior').attr('disabled', false);
            }

            if (new_step < finish) {
                this.element.find('.btn-next').attr('disabled', false);
            }

            return true;
        },

        stepTo: function (step) {
            var element = this.element, that = this, new_step = step - 1;
            var o = this.options;

            if (new_step < 0) { return false; }
            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();

            if (typeof o.onPage === 'function') {
                o.onPage(that._currentStep + 1, element);
            } else {
                if (typeof window[o.onPage] === 'function') {
                    window[o.onPage](that._currentStep + 1, element);
                } else {
                    var result = eval("(function(){" + o.onPage + "})");
                    result.call(that._currentStep + 1, element);
                }
            }

            if (this._stepper !== undefined) { this._stepper.stepper('stepTo', step); }

            var finish = (o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep);
            if (new_step === finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            this.element.find('.btn-next').attr('disabled', (new_step >= finish));
            this.element.find('.btn-prior').attr('disabled', (new_step <= 0));

            return true;
        },

        stepper: function () {
            return this._stepper;
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });


    // Source: js/widgets/wizard2.js
    $.widget("metro.wizard2", {

        version: "3.0.0",

        options: {
            start: 1,
            finish: 'default',
            buttonLabels: {
                prev: '&lt;',
                next: '&gt;',
                finish: 'OK',
                help: '?'
            },
            onPrior: function (page, wiz) { return true; },
            onNext: function (page, wiz) { return true; },
            onFinish: function (page, wiz) { },
            onHelp: function (page, wiz) { },
            onPage: function (page, wiz) { }

        },

        _step: 1,
        _steps: undefined,

        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._step = o.start;
            this._steps = element.children('.step');
            this._height = 0;
            this._width = 0;

            if (o.finish === 'default') {
                o.finish = this._steps.length;
            }

            $.each(this._steps, function (i, v) {
                if ($(v).outerHeight() > that._height) { that._height = $(v).outerHeight(); }
                //console.log(i, $(v).outerHeight(), that._height);
                if ($(v).hasClass('active')) {
                    that._step = i + 1;
                }
            });

            this._width = element.innerWidth() - ((this._steps.length - 1) * 24 + (this._steps.length));

            element.children('.step').css({
                height: this._height + 48
            });

            $(window).resize(function () {
                that._width = element.innerWidth() - ((that._steps.length - 1) * 24 + (that._steps.length));
                that.step(that._step);
            });

            this._createActionBar();
            this.step(o.start);
            this._placeActionBar();

            element.data('wizard2', this);
        },

        _createActionBar: function () {
            var that = this, element = this.element, o = this.options;
            var bar = $("<div/>").addClass('action-bar').appendTo(element);
            var btn_prev, btn_next, btn_help, btn_finish;

            btn_help = $("<button/>").html(o.buttonLabels.help).addClass('button cycle-button medium-button wiz-btn-help place-left').appendTo(bar);
            btn_finish = $("<button/>").html(o.buttonLabels.finish).addClass('button cycle-button medium-button wiz-btn-finish place-right').appendTo(bar);
            btn_next = $("<button/>").html(o.buttonLabels.next).addClass('button cycle-button medium-button wiz-btn-next place-right').appendTo(bar);
            btn_prev = $("<button/>").html(o.buttonLabels.prev).addClass('button cycle-button medium-button wiz-btn-prev place-right').appendTo(bar);

            btn_help.on('click', function () {
                if (typeof o.onHelp === 'function') {
                    o.onHelp(that._step, that);
                } else {
                    if (typeof window[o.onHelp] === 'function') {
                        window[o.onHelp](that._step, that);
                    } else {
                        var result = eval("(function(){" + o.onHelp + "})");
                        result.call(that._step, that);
                    }
                }
            });

            btn_finish.on('click', function () {
                if (typeof o.onFinish === 'function') {
                    o.onFinish(that._step, that);
                } else {
                    if (typeof window[o.onFinish] === 'function') {
                        window[o.onFinish](that._step, that);
                    } else {
                        var result = eval("(function(){" + o.onFinish + "})");
                        result.call(that._step, that);
                    }
                }
            });

            btn_prev.on('click', function () {
                if (typeof o.onPrior === 'function') {
                    if (o.onPrior(that._step, element)) { that.prior(); }
                } else {
                    if (typeof window[o.onPrior] === 'function') {
                        if (window[o.onPrior](that._step, element)) { that.prior(); }
                    } else {
                        var result = eval("(function(){" + o.onPrior + "})");
                        if (result.call(that._step, element)) { that.prior(); }
                    }
                }
            });

            btn_next.on('click', function () {
                if (typeof o.onNext === 'function') {
                    if (o.onNext(that._step, element)) { that.next(); }
                } else {
                    if (typeof window[o.onNext] === 'function') {
                        if (window[o.onNext](that._step, element)) { that.next(); }
                    } else {
                        var result = eval("(function(){" + o.onNext + "})");
                        if (result.call(that._step, element)) { that.next(); }
                    }
                }
            });
        },

        _placeActionBar: function () {
            var element = this.element, o = this.options;
            var action_bar = element.find('.action-bar');
            var curr_frame = element.find('.step.active');
            var left = curr_frame.position().left, right = curr_frame.innerWidth();

            action_bar.css({
                left: left,
                width: right
            });
        },

        step: function (index) {
            var o = this.options;

            this.element.children('.step')
                .removeClass('active prev next');

            $(this.element.children('.step')[index - 1])
                .addClass('active')
                .css('width', this._width);

            this.element.children('.step.active').prevAll().addClass('prev').css('width', 0);
            this.element.children('.step.active').nextAll().addClass('next').css('width', 0);

            this._placeActionBar();

            if (index === 1) {
                this.element.find('.wiz-btn-prev').hide();
            } else {
                this.element.find('.wiz-btn-prev').show();
            }

            if (index === this._steps.length) {
                this.element.find('.wiz-btn-next').hide();
            } else {
                this.element.find('.wiz-btn-next').show();
            }

            if (index !== o.finish) {
                this.element.find('.wiz-btn-finish').hide();
            } else {
                this.element.find('.wiz-btn-finish').show();
            }

        },

        prior: function () {
            var new_step = this._step - 1;
            if (new_step <= 0) {
                return false;
            }

            this._step = new_step;

            this.step(new_step);

            return true;
        },

        next: function () {
            var new_step = this._step + 1;
            if (new_step > this._steps.length) { return false; }

            this._step = new_step;

            this.step(new_step);

            return true;
        },

        _destroy: function () {
        },

        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });


    return $.Metro.init();

}));
///#source 1 1 /Scripts/_inputmask.js
/*!
* jquery.inputmask.bundle
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2015 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.2.0
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){var b=a;return window.dependencyLib=b,b}),function(a){"function"==typeof define&&define.amd?define(["dependencyLib"],a):"object"==typeof exports?module.exports=a(require("dependencyLib")):a(window.dependencyLib||jQuery)}(function($){function Inputmask(a){this.el=void 0,this.opts=$.extend(!0,{},this.defaults,a),this.noMasksCache=a&&void 0!==a.definitions,this.userOptions=a||{},resolveAlias(this.opts.alias,a,this.opts)}function isInputEventSupported(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function isInputTypeSupported(a){var b="text"===a||"tel"===a||"password"===a;if(!b){var c=document.createElement("input");c.setAttribute("type",a),b="text"===c.type,c=null}return b}function resolveAlias(a,b,c){var d=c.aliases[a];return d?(d.alias&&resolveAlias(d.alias,void 0,c),$.extend(!0,c,d),$.extend(!0,c,b),!0):(null===c.mask&&(c.mask=a),!1)}function importAttributeOptions(npt,opts,userOptions){function importOption(option){var optionData=$npt.data("inputmask-"+option.toLowerCase());void 0!==optionData&&(optionData="boolean"==typeof optionData?optionData:optionData.toString(),"string"==typeof optionData&&0===option.indexOf("on")&&(optionData=eval("("+optionData+")")),"mask"===option&&0===optionData.indexOf("[")?(userOptions[option]=optionData.replace(/[\s[\]]/g,"").split(","),userOptions[option][0]=userOptions[option][0].replace("'",""),userOptions[option][userOptions[option].length-1]=userOptions[option][userOptions[option].length-1].replace("'","")):userOptions[option]=optionData)}var $npt=$(npt),attrOptions=$npt.data("inputmask");if(attrOptions&&""!==attrOptions)try{attrOptions=attrOptions.replace(new RegExp("'","g"),'"');var dataoptions=$.parseJSON("{"+attrOptions+"}");$.extend(!0,userOptions,dataoptions)}catch(ex){}for(var option in opts)importOption(option);if(userOptions.alias){resolveAlias(userOptions.alias,userOptions,opts);for(option in opts)importOption(option)}return $.extend(!0,opts,userOptions),opts}function generateMaskSet(a,b){function c(b){function c(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function d(b,c,d){var e=a.definitions[c];d=void 0!==d?d:b.matches.length;var f=b.matches[d-1];if(e&&!q){e.placeholder=$.isFunction(e.placeholder)?e.placeholder.call(this,a):e.placeholder;for(var g=e.prevalidator,h=g?g.length:0,i=1;i<e.cardinality;i++){var j=h>=i?g[i-1]:[],k=j.validator,l=j.cardinality;b.matches.splice(d++,0,{fn:k?"string"==typeof k?new RegExp(k):new function(){this.test=k}:new RegExp("."),cardinality:l?l:1,optionality:b.isOptional,newBlockMarker:void 0===f||f.def!==(e.definitionSymbol||c),casing:e.casing,def:e.definitionSymbol||c,placeholder:e.placeholder,mask:c}),f=b.matches[d-1]}b.matches.splice(d++,0,{fn:e.validator?"string"==typeof e.validator?new RegExp(e.validator):new function(){this.test=e.validator}:new RegExp("."),cardinality:e.cardinality,optionality:b.isOptional,newBlockMarker:void 0===f||f.def!==(e.definitionSymbol||c),casing:e.casing,def:e.definitionSymbol||c,placeholder:e.placeholder,mask:c})}else b.matches.splice(d++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:void 0===f||f.def!==c,casing:null,def:c,placeholder:void 0,mask:c}),q=!1}function e(b,c){b.isGroup&&(b.isGroup=!1,d(b,a.groupmarker.start,0),c!==!0&&d(b,a.groupmarker.end))}function f(a,b,c,f){b.matches.length>0&&(void 0===f||f)&&(c=b.matches[b.matches.length-1],e(c)),d(b,a)}function g(){if(s.length>0){if(l=s[s.length-1],f(j,l,n,!l.isAlternator),l.isAlternator){m=s.pop();for(var a=0;a<m.matches.length;a++)m.matches[a].isGroup=!1;s.length>0?(l=s[s.length-1],l.matches.push(m)):r.matches.push(m)}}else f(j,r,n)}function h(b){function c(b){return b===a.optionalmarker.start?b=a.optionalmarker.end:b===a.optionalmarker.end?b=a.optionalmarker.start:b===a.groupmarker.start?b=a.groupmarker.end:b===a.groupmarker.end&&(b=a.groupmarker.start),b}b.matches=b.matches.reverse();for(var d in b.matches){var e=parseInt(d);if(b.matches[d].isQuantifier&&b.matches[e+1]&&b.matches[e+1].isGroup){var f=b.matches[d];b.matches.splice(d,1),b.matches.splice(e+1,0,f)}void 0!==b.matches[d].matches?b.matches[d]=h(b.matches[d]):b.matches[d]=c(b.matches[d])}return b}for(var i,j,k,l,m,n,o,p=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,q=!1,r=new c,s=[],t=[];i=p.exec(b);)if(j=i[0],q)g();else switch(j.charAt(0)){case a.escapeChar:q=!0;break;case a.optionalmarker.end:case a.groupmarker.end:if(k=s.pop(),void 0!==k)if(s.length>0){if(l=s[s.length-1],l.matches.push(k),l.isAlternator){m=s.pop();for(var u=0;u<m.matches.length;u++)m.matches[u].isGroup=!1;s.length>0?(l=s[s.length-1],l.matches.push(m)):r.matches.push(m)}}else r.matches.push(k);else g();break;case a.optionalmarker.start:s.push(new c(!1,!0));break;case a.groupmarker.start:s.push(new c(!0));break;case a.quantifiermarker.start:var v=new c(!1,!1,!0);j=j.replace(/[{}]/g,"");var w=j.split(","),x=isNaN(w[0])?w[0]:parseInt(w[0]),y=1===w.length?x:isNaN(w[1])?w[1]:parseInt(w[1]);if(("*"===y||"+"===y)&&(x="*"===y?0:1),v.quantifier={min:x,max:y},s.length>0){var z=s[s.length-1].matches;i=z.pop(),i.isGroup||(o=new c(!0),o.matches.push(i),i=o),z.push(i),z.push(v)}else i=r.matches.pop(),i.isGroup||(o=new c(!0),o.matches.push(i),i=o),r.matches.push(i),r.matches.push(v);break;case a.alternatormarker:s.length>0?(l=s[s.length-1],n=l.matches.pop()):n=r.matches.pop(),n.isAlternator?s.push(n):(m=new c(!1,!1,!1,!0),m.matches.push(n),s.push(m));break;default:g()}for(;s.length>0;)k=s.pop(),e(k,!0),r.matches.push(k);return r.matches.length>0&&(n=r.matches[r.matches.length-1],e(n),t.push(r)),a.numericInput&&h(t[0]),t}function d(d,e){if(null===d||""===d)return void 0;if(1===d.length&&a.greedy===!1&&0!==a.repeat&&(a.placeholder=""),a.repeat>0||"*"===a.repeat||"+"===a.repeat){var f="*"===a.repeat?0:"+"===a.repeat?1:a.repeat;d=a.groupmarker.start+d+a.groupmarker.end+a.quantifiermarker.start+f+","+a.repeat+a.quantifiermarker.end}var g;return void 0===Inputmask.prototype.masksCache[d]||b===!0?(g={mask:d,maskToken:c(d),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:e},b!==!0&&(Inputmask.prototype.masksCache[a.numericInput?d.split("").reverse().join(""):d]=g)):g=$.extend(!0,{},Inputmask.prototype.masksCache[d]),g}function e(a){return a=a.toString()}var f;if($.isFunction(a.mask)&&(a.mask=a.mask.call(this,a)),$.isArray(a.mask)){if(a.mask.length>1){a.keepStatic=null===a.keepStatic?!0:a.keepStatic;var g="(";return $.each(a.numericInput?a.mask.reverse():a.mask,function(a,b){g.length>1&&(g+=")|("),g+=e(void 0===b.mask||$.isFunction(b.mask)?b:b.mask)}),g+=")",d(g,a.mask)}a.mask=a.mask.pop()}return a.mask&&(f=void 0===a.mask.mask||$.isFunction(a.mask.mask)?d(e(a.mask),a.mask):d(e(a.mask.mask),a.mask)),f}function maskScope(a,b,c){function d(a,b,c){b=b||0;var d,f,g,h=[],i=0;do{if(a===!0&&e().validPositions[i]){var k=e().validPositions[i];f=k.match,d=k.locator.slice(),h.push(c===!0?k.input:z(i,f))}else g=j(i,d,i-1),f=g.match,d=g.locator.slice(),h.push(z(i,f));i++}while((void 0===X||X>i-1)&&null!==f.fn||null===f.fn&&""!==f.def||b>=i);return h.pop(),h}function e(){return b}function f(a){var b=e();b.buffer=void 0,b.tests={},a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function g(a,b){var c=e(),d=-1,f=c.validPositions;void 0===a&&(a=-1);var g=d,h=d;for(var i in f){var j=parseInt(i);f[j]&&(b||null!==f[j].match.fn)&&(a>=j&&(g=j),j>=a&&(h=j))}return d=-1!==g&&a-g>1||a>h?g:h}function h(a,b,d){if(c.insertMode&&void 0!==e().validPositions[a]&&void 0===d){var f,h=$.extend(!0,{},e().validPositions),i=g();for(f=a;i>=f;f++)delete e().validPositions[f];e().validPositions[a]=b;var j,k=!0,n=e().validPositions;for(f=j=a;i>=f;f++){var o=h[f];if(void 0!==o)for(var p=j,q=-1;p<u()&&(null==o.match.fn&&n[f]&&(n[f].match.optionalQuantifier===!0||n[f].match.optionality===!0)||null!=o.match.fn);){if(null===o.match.fn||!c.keepStatic&&n[f]&&(void 0!==n[f+1]&&m(f+1,n[f].locator.slice(),f).length>1||void 0!==n[f].alternation)?p++:p=v(j),l(p,o.match.def)){k=s(p,o.input,!0,!0)!==!1,j=p;break}if(k=null==o.match.fn,q===p)break;q=p}if(!k)break}if(!k)return e().validPositions=$.extend(!0,{},h),!1}else e().validPositions[a]=b;return!0}function i(a,b,d,h){var i,j=a;for(e().p=a,i=j;b>i;i++)void 0!==e().validPositions[i]&&(d===!0||c.canClearPosition(e(),i,g(),h,c)!==!1)&&delete e().validPositions[i];for(f(!0),i=j+1;i<=g();){for(;void 0!==e().validPositions[j];)j++;var k=e().validPositions[j];j>i&&(i=j+1);var m=e().validPositions[i];void 0!==m&&t(i)&&void 0===k?(l(j,m.match.def)&&s(j,m.input,!0)!==!1&&(delete e().validPositions[i],i++),j++):i++}var n=g(),o=u();for(h!==!0&&d!==!0&&void 0!==e().validPositions[n]&&e().validPositions[n].input===c.radixPoint&&delete e().validPositions[n],i=n+1;o>=i;i++)e().validPositions[i]&&delete e().validPositions[i];f(!0)}function j(a,b,d){var f=e().validPositions[a];if(void 0===f)for(var h=m(a,b,d),i=g(),j=e().validPositions[i]||m(0)[0],k=void 0!==j.alternation?j.locator[j.alternation].toString().split(","):[],l=0;l<h.length&&(f=h[l],!(f.match&&(c.greedy&&f.match.optionalQuantifier!==!0||(f.match.optionality===!1||f.match.newBlockMarker===!1)&&f.match.optionalQuantifier!==!0)&&(void 0===j.alternation||j.alternation!==f.alternation||void 0!==f.locator[j.alternation]&&r(f.locator[j.alternation].toString().split(","),k))));l++);return f}function k(a){return e().validPositions[a]?e().validPositions[a].match:m(a)[0].match}function l(a,b){for(var c=!1,d=m(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function m(a,b,c,d){function f(b,c,d,i){function k(d,i,n){if(j>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+e().mask;if(j===a&&void 0===d.matches)return l.push({match:d,locator:i.reverse()}),!0;if(void 0!==d.matches){if(d.isGroup&&n!==d){if(d=k(b.matches[$.inArray(d,b.matches)+1],i))return!0}else if(d.isOptional){var o=d;if(d=f(d,c,i,n)){if(g=l[l.length-1].match,h=0===$.inArray(g,o.matches),!h)return!0;m=!0,j=a}}else if(d.isAlternator){var p,q=d,r=[],s=l.slice(),t=i.length,u=c.length>0?c.shift():-1;if(-1===u||"string"==typeof u){var v=j,w=c.slice(),x=[];"string"==typeof u&&(x=u.split(","));for(var y=0;y<q.matches.length;y++){if(l=[],d=k(q.matches[y],[y].concat(i),n)||d,d!==!0&&void 0!==d&&x[x.length-1]<q.matches.length){var z=b.matches.indexOf(d)+1;b.matches.length>z&&(d=k(b.matches[z],[z].concat(i.slice(1,i.length)),n),d&&(x.push(z.toString()),$.each(l,function(a,b){b.alternation=i.length-1})))}p=l.slice(),j=v,l=[];for(var A=0;A<w.length;A++)c[A]=w[A];for(var B=0;B<p.length;B++){var C=p[B];C.alternation=C.alternation||t;for(var D=0;D<r.length;D++){var E=r[D];if(C.match.mask===E.match.mask&&("string"!=typeof u||-1!==$.inArray(C.locator[C.alternation].toString(),x))){p.splice(B,1),B--,E.locator[C.alternation]=E.locator[C.alternation]+","+C.locator[C.alternation],E.alternation=C.alternation;break}}}r=r.concat(p)}"string"==typeof u&&(r=$.map(r,function(a,b){if(isFinite(b)){var c,d=a.alternation,e=a.locator[d].toString().split(",");a.locator[d]=void 0,a.alternation=void 0;for(var f=0;f<e.length;f++)c=-1!==$.inArray(e[f],x),c&&(void 0!==a.locator[d]?(a.locator[d]+=",",a.locator[d]+=e[f]):a.locator[d]=parseInt(e[f]),a.alternation=d);if(void 0!==a.locator[d])return a}})),l=s.concat(r),j=a,m=l.length>0}else d=q.matches[u]?k(q.matches[u],[u].concat(i),n):!1;if(d)return!0}else if(d.isQuantifier&&n!==b.matches[$.inArray(d,b.matches)-1])for(var F=d,G=c.length>0?c.shift():0;G<(isNaN(F.quantifier.max)?G+1:F.quantifier.max)&&a>=j;G++){var H=b.matches[$.inArray(F,b.matches)-1];if(d=k(H,[G].concat(i),H)){if(g=l[l.length-1].match,g.optionalQuantifier=G>F.quantifier.min-1,h=0===$.inArray(g,H.matches)){if(G>F.quantifier.min-1){m=!0,j=a;break}return!0}return!0}}else if(d=f(d,c,i,n))return!0}else j++}for(var n=c.length>0?c.shift():0;n<b.matches.length;n++)if(b.matches[n].isQuantifier!==!0){var o=k(b.matches[n],[n].concat(d),i);if(o&&j===a)return o;if(j>a)break}}var g,h,i=e().maskToken,j=b?c:0,k=b||[0],l=[],m=!1;if(d===!0&&e().tests[a])return e().tests[a];if(void 0===b){for(var n,o=a-1;void 0===(n=e().validPositions[o])&&o>-1&&(!e().tests[o]||void 0===(n=e().tests[o][0]));)o--;void 0!==n&&o>-1&&(j=o,k=n.locator.slice())}for(var p=k.shift();p<i.length;p++){var q=f(i[p],k,[p]);if(q&&j===a||j>a)break}return(0===l.length||m)&&l.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),e().tests[a]=$.extend(!0,[],l),e().tests[a]}function n(){return void 0===e()._buffer&&(e()._buffer=d(!1,1)),e()._buffer}function o(){return void 0===e().buffer&&(e().buffer=d(!0,g(),!0)),e().buffer}function p(a,b,d){var g;if(d=d||o().slice(),a===!0)f(),a=0,b=d.length;else for(g=a;b>g;g++)delete e().validPositions[g],delete e().tests[g];for(g=a;b>g;g++)f(!0),d[g]!==c.skipOptionalPartCharacter&&s(g,d[g],!0,!0)}function q(a,b){switch(b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase()}return a}function r(a,b){for(var d=c.greedy?b:b.slice(0,1),e=!1,f=0;f<a.length;f++)if(-1!==$.inArray(a[f],d)){e=!0;break}return e}function s(a,b,d,k){function l(a,b,d,j){var k=!1;return $.each(m(a),function(l,m){for(var n=m.match,r=b?1:0,t="",u=n.cardinality;u>r;u--)t+=x(a-(u-1));if(b&&(t+=b),k=null!=n.fn?n.fn.test(t,e(),a,d,c):b!==n.def&&b!==c.skipOptionalPartCharacter||""===n.def?!1:{c:n.def,pos:a},k!==!1){var v=void 0!==k.c?k.c:b;v=v===c.skipOptionalPartCharacter&&null===n.fn?n.def:v;var w=a,y=o();if(void 0!==k.remove&&($.isArray(k.remove)||(k.remove=[k.remove]),$.each(k.remove.sort(function(a,b){return b-a}),function(a,b){i(b,b+1,!0)})),void 0!==k.insert&&($.isArray(k.insert)||(k.insert=[k.insert]),$.each(k.insert.sort(function(a,b){return a-b}),function(a,b){s(b.pos,b.c,!0)})),k.refreshFromBuffer){var z=k.refreshFromBuffer;if(d=!0,p(z===!0?z:z.start,z.end,y),void 0===k.pos&&void 0===k.c)return k.pos=g(),!1;if(w=void 0!==k.pos?k.pos:a,w!==a)return k=$.extend(k,s(w,v,!0)),!1}else if(k!==!0&&void 0!==k.pos&&k.pos!==a&&(w=k.pos,p(a,w),w!==a))return k=$.extend(k,s(w,v,!0)),!1;return k!==!0&&void 0===k.pos&&void 0===k.c?!1:(l>0&&f(!0),h(w,$.extend({},m,{input:q(v,n)}),j)||(k=!1),!1)}}),k}function n(a,b,d,h){for(var i,k,l,m,n,o,p=$.extend(!0,{},e().validPositions),q=g();q>=0&&(m=e().validPositions[q],!m||void 0===m.alternation||(i=q,k=e().validPositions[i].alternation,j(i).locator[m.alternation]===m.locator[m.alternation]));q--);if(void 0!==k){i=parseInt(i);for(var r in e().validPositions)if(r=parseInt(r),m=e().validPositions[r],r>=i&&void 0!==m.alternation){var t=e().validPositions[i].locator[k].toString().split(","),u=m.locator[k]||t[0];u.length>0&&(u=u.split(",")[0]);for(var v=0;v<t.length;v++)if(u<t[v]){for(var w,x,y=r;y>=0;y--)if(w=e().validPositions[y],void 0!==w){x=w.locator[k],w.locator[k]=parseInt(t[v]);break}if(u!==w.locator[k]){var z=[],A=0;for(n=r+1;n<g()+1;n++)o=e().validPositions[n],o&&(null!=o.match.fn?z.push(o.input):a>n&&A++),delete e().validPositions[n],delete e().tests[n];for(f(!0),c.keepStatic=!c.keepStatic,l=!0;z.length>0;){var B=z.shift();if(B!==c.skipOptionalPartCharacter&&!(l=s(g()+1,B,!1,!0)))break}if(w.alternation=k,w.locator[k]=x,l){var C=g(a)+1,D=0;for(n=r+1;n<g()+1;n++)o=e().validPositions[n],o&&null==o.match.fn&&a>n&&D++;a+=D-A,l=s(a>C?C:a,b,d,h)}if(c.keepStatic=!c.keepStatic,l)return l;f(),e().validPositions=$.extend(!0,{},p)}}break}}return!1}function w(a,b){for(var c=e().validPositions[b],d=c.locator,f=d.length,g=a;b>g;g++)if(!t(g)){var i=m(g),j=i[0],k=-1;$.each(i,function(a,b){for(var c=0;f>c;c++)b.locator[c]&&r(b.locator[c].toString().split(","),d[c].toString().split(","))&&c>k&&(k=c,j=b)}),h(g,$.extend({},j,{input:j.match.def}),!0)}}d=d===!0;for(var y=o(),A=a-1;A>-1&&!e().validPositions[A];A--);for(A++;a>A;A++)void 0===e().validPositions[A]&&((!t(A)||y[A]!==z(A))&&m(A).length>1||y[A]===c.radixPoint||"0"===y[A]&&$.inArray(c.radixPoint,y)<A)&&l(A,y[A],!0);var B=a,C=!1,D=$.extend(!0,{},e().validPositions);if(B<u()&&(o(),C=l(B,b,d,k),(!d||k)&&C===!1)){var E=e().validPositions[B];if(!E||null!==E.match.fn||E.match.def!==b&&b!==c.skipOptionalPartCharacter){if((c.insertMode||void 0===e().validPositions[v(B)])&&!t(B))for(var G=B+1,H=v(B);H>=G;G++)if(C=l(G,b,d,k),C!==!1){w(B,G),B=G;break}}else C={caret:v(B)}}if(C===!1&&c.keepStatic&&F(y)&&(C=n(a,b,d,k)),C===!0&&(C={pos:B}),$.isFunction(c.postValidation)&&C!==!1&&!d){f(!0);var I=c.postValidation(o(),c);if(I){if(I.refreshFromBuffer){var J=I.refreshFromBuffer;p(J===!0?J:J.start,J.end,I.buffer),f(!0),C=I}}else f(!0),e().validPositions=$.extend(!0,{},D),C=!1}return C}function t(a){var b=k(a);if(null!=b.fn)return b.fn;if(!c.keepStatic&&void 0===e().validPositions[a]){for(var d=m(a),f=!0,g=0;g<d.length;g++)if(""!==d[g].match.def&&(void 0===d[g].alternation||d[g].locator[d[g].alternation].length>1)){f=!1;break}return f}return!1}function u(){var a;X=W.prop("maxLength"),-1===X&&(X=void 0);var b,c=g(),d=e().validPositions[c],f=void 0!==d?d.locator.slice():void 0;for(b=c+1;void 0===d||null!==d.match.fn||null===d.match.fn&&""!==d.match.def;b++)d=j(b,f,b-1),f=d.locator.slice();var h=k(b-1);return a=""!==h.def?b:b-1,void 0===X||X>a?a:X}function v(a,b){var d=u();if(a>=d)return d;for(var e=a;++e<d&&(b===!0&&(k(e).newBlockMarker!==!0||!t(e))||b!==!0&&!t(e)&&(c.nojumps!==!0||c.nojumpsThreshold>e)););return e}function w(a,b){var c=a;if(0>=c)return 0;for(;--c>0&&(b===!0&&k(c).newBlockMarker!==!0||b!==!0&&!t(c)););return c}function x(a){return void 0===e().validPositions[a]?z(a):e().validPositions[a].input}function y(a,b,d,e,g){if(e&&$.isFunction(c.onBeforeWrite)){var h=c.onBeforeWrite.call(a,e,b,d,c);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;p(i===!0?i:i.start,i.end,h.buffer||b),f(!0),b=o()}d=void 0!==h.caret?h.caret:d}}a.inputmask._valueSet(b.join("")),void 0===d||void 0!==e&&"blur"===e.type||C(a,d),g===!0&&(aa=!0,$(a).trigger("input"))}function z(a,b){if(b=b||k(a),void 0!==b.placeholder)return b.placeholder;if(null===b.fn){if(!c.keepStatic&&void 0===e().validPositions[a]){for(var d,f=m(a),g=!1,h=0;h<f.length;h++){if(d&&""!==f[h].match.def&&f[h].match.def!==d.match.def&&(void 0===f[h].alternation||f[h].alternation===d.alternation)){g=!0;break}f[h].match.optionality!==!0&&f[h].match.optionalQuantifier!==!0&&(d=f[h])}if(g)return c.placeholder.charAt(a%c.placeholder.length)}return b.def}return c.placeholder.charAt(a%c.placeholder.length)}function A(a,b,d,h){function i(){var a=!1,b=n().slice(m,v(m)).join("").indexOf(l);if(-1!==b&&!t(m)){a=!0;for(var c=n().slice(m,m+b),d=0;d<c.length;d++)if(" "!==c[d]){a=!1;break}}return a}var k=void 0!==h?h.slice():a.inputmask._valueGet().split(""),l="",m=0;if(f(),e().p=v(-1),b&&a.inputmask._valueSet(""),!d)if(c.autoUnmask!==!0){var p=n().slice(0,v(-1)).join(""),q=k.join("").match(new RegExp("^"+Inputmask.escapeRegex(p),"g"));q&&q.length>0&&(k.splice(0,q.length*p.length),m=v(m))}else m=v(m);$.each(k,function(b,f){var h=$.Event("keypress");h.which=f.charCodeAt(0),l+=f;var k=g(void 0,!0),n=e().validPositions[k],o=j(k+1,n?n.locator.slice():void 0,k);if(!i()||d||c.autoUnmask){var p=d?b:null==o.match.fn&&o.match.optionality&&k+1<e().p?k+1:e().p;L.call(a,h,!0,!1,d,p),m=p+1,l=""}else L.call(a,h,!0,!1,!0,k+1)}),b&&y(a,o(),$(a).is(":focus")?v(g(0)):void 0,$.Event("checkval"))}function B(a){if(a[0].inputmask&&!a.hasClass("hasDatepicker")){var b=[],d=e().validPositions;for(var f in d)d[f].match&&null!=d[f].match.fn&&b.push(d[f].input);var g=0===b.length?null:(Z?b.reverse():b).join("");if(null!==g){var h=(Z?o().slice().reverse():o()).join("");$.isFunction(c.onUnMask)&&(g=c.onUnMask.call(a,h,g,c)||g)}return g}return a[0].inputmask._valueGet()}function C(a,b,d){function e(a){if(Z&&"number"==typeof a&&(!c.greedy||""!==c.placeholder)){var b=o().join("").length;a=b-a}return a}var f,g=a.jquery&&a.length>0?a[0]:a;if("number"!=typeof b)return g.setSelectionRange?(b=g.selectionStart,d=g.selectionEnd):window.getSelection?(f=window.getSelection().getRangeAt(0),(f.commonAncestorContainer.parentNode===g||f.commonAncestorContainer===g)&&(b=f.startOffset,d=f.endOffset)):document.selection&&document.selection.createRange&&(f=document.selection.createRange(),b=0-f.duplicate().moveStart("character",-1e5),d=b+f.text.length),{begin:e(b),end:e(d)};if(b=e(b),d=e(d),d="number"==typeof d?d:b,$(g).is(":visible")){var h=$(g).css("font-size").replace("px","")*d;if(g.scrollLeft=h>g.scrollWidth?h:0,androidchrome||c.insertMode!==!1||b!==d||d++,g.setSelectionRange)g.selectionStart=b,g.selectionEnd=d;else if(window.getSelection){if(f=document.createRange(),void 0===g.firstChild){var i=document.createTextNode("");g.appendChild(i)}f.setStart(g.firstChild,b<g.inputmask._valueGet().length?b:g.inputmask._valueGet().length),f.setEnd(g.firstChild,d<g.inputmask._valueGet().length?d:g.inputmask._valueGet().length),f.collapse(!0);var j=window.getSelection();j.removeAllRanges(),j.addRange(f)}else g.createTextRange&&(f=g.createTextRange(),f.collapse(!0),f.moveEnd("character",d),f.moveStart("character",b),f.select())}}function D(a){var b,c,d=o(),f=d.length,h=g(),i={},k=e().validPositions[h],l=void 0!==k?k.locator.slice():void 0;for(b=h+1;b<d.length;b++)c=j(b,l,b-1),l=c.locator.slice(),i[b]=$.extend(!0,{},c);var n=k&&void 0!==k.alternation?k.locator[k.alternation]:void 0;for(b=f-1;b>h&&(c=i[b],(c.match.optionality||c.match.optionalQuantifier||n&&(n!==i[b].locator[k.alternation]&&null!=c.match.fn||null===c.match.fn&&c.locator[k.alternation]&&r(c.locator[k.alternation].toString().split(","),n.toString().split(","))&&""!==m(b)[0].def))&&d[b]===z(b,c.match));b--)f--;return a?{l:f,def:i[f]?i[f].match:void 0}:f}function E(a){for(var b=D(),c=a.length-1;c>b&&!t(c);c--);return a.splice(b,c+1-b),a}function F(a){if($.isFunction(c.isComplete))return c.isComplete.call(W,a,c);if("*"===c.repeat)return void 0;var b=!1,d=D(!0),f=w(d.l);if(void 0===d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){b=!0;for(var g=0;f>=g;g++){var h=j(g).match;if(null!==h.fn&&void 0===e().validPositions[g]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null===h.fn&&a[g]!==z(g,h)){b=!1;break}}}return b}function G(a,b){return Z?a-b>1||a-b===1&&c.insertMode:b-a>1||b-a===1&&c.insertMode}function H(a){var b=$._data(a).events,d=!1;$.each(b,function(a,b){$.each(b,function(a,b){if("inputmask"===b.namespace){var e=b.handler;b.handler=function(a){if(void 0===this.inputmask){var b=$(this).data("_inputmask_opts");b?new Inputmask(b).mask(this):$(this).unbind(".inputmask")}else{if("setvalue"===a.type||!(this.disabled||this.readOnly&&!("keydown"===a.type&&a.ctrlKey&&67===a.keyCode||c.tabThrough===!1&&a.keyCode===Inputmask.keyCode.TAB))){switch(a.type){case"input":if(aa===!0||d===!0)return aa=!1,a.preventDefault();break;case"keydown":_=!1,d=!1;break;case"keypress":if(_===!0)return a.preventDefault();_=!0;break;case"compositionstart":d=!0;break;case"compositionupdate":aa=!0;break;case"compositionend":d=!1}return e.apply(this,arguments)}a.preventDefault()}}}})})}function I(a){function b(a){if(void 0===$.valHooks[a]||$.valHooks[a].inputmaskpatch!==!0){var b=$.valHooks[a]&&$.valHooks[a].get?$.valHooks[a].get:function(a){return a.value},c=$.valHooks[a]&&$.valHooks[a].set?$.valHooks[a].set:function(a,b){return a.value=b,a};$.valHooks[a]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var c=b(a),d=a.inputmask.maskset,e=d._buffer;return e=e?e.join(""):"",c!==e?c:""}return b(a)},set:function(a,b){var d,e=$(a);return d=c(a,b),a.inputmask&&e.triggerHandler("setvalue.inputmask"),d},inputmaskpatch:!0}}}function c(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():f.call(this)!==n().join("")?f.call(this):"":f.call(this)}function d(a){g.call(this,a),this.inputmask&&$(this).triggerHandler("setvalue.inputmask")}function e(a){$(a).bind("mouseenter.inputmask",function(a){var b=$(this),c=this,d=c.inputmask._valueGet();""!==d&&d!==o().join("")&&b.triggerHandler("setvalue.inputmask")});
//!! the bound handlers are executed in the order they where bound
var b=$._data(a).events,c=b.mouseover;if(c){for(var d=c[c.length-1],e=c.length-1;e>0;e--)c[e]=c[e-1];c[0]=d}}var f,g;a.inputmask.__valueGet||(Object.getOwnPropertyDescriptor&&void 0===a.value?(f=function(){return this.textContent},g=function(a){this.textContent=a},Object.defineProperty(a,"value",{get:c,set:d})):document.__lookupGetter__&&a.__lookupGetter__("value")?(f=a.__lookupGetter__("value"),g=a.__lookupSetter__("value"),a.__defineGetter__("value",c),a.__defineSetter__("value",d)):(f=function(){return a.value},g=function(b){a.value=b},b(a.type),e(a)),a.inputmask.__valueGet=f,a.inputmask._valueGet=function(a){return Z&&a!==!0?f.call(this.el).split("").reverse().join(""):f.call(this.el)},a.inputmask.__valueSet=g,a.inputmask._valueSet=function(a,b){g.call(this.el,b!==!0&&Z?a.split("").reverse().join(""):a)})}function J(a,b,d,h){function k(){if(c.keepStatic){f(!0);var b,d=[],h=$.extend(!0,{},e().validPositions);for(b=g();b>=0;b--){var i=e().validPositions[b];if(i&&(null!=i.match.fn&&d.push(i.input),delete e().validPositions[b],void 0!==i.alternation&&i.locator[i.alternation]===j(b).locator[i.alternation]))break}if(b>-1)for(;d.length>0;){e().p=v(g());var k=$.Event("keypress");k.which=d.pop().charCodeAt(0),L.call(a,k,!0,!1,!1,e().p)}else e().validPositions=$.extend(!0,{},h)}}if((c.numericInput||Z)&&(b===Inputmask.keyCode.BACKSPACE?b=Inputmask.keyCode.DELETE:b===Inputmask.keyCode.DELETE&&(b=Inputmask.keyCode.BACKSPACE),Z)){var l=d.end;d.end=d.begin,d.begin=l}b===Inputmask.keyCode.BACKSPACE&&(d.end-d.begin<1||c.insertMode===!1)?(d.begin=w(d.begin),void 0===e().validPositions[d.begin]||e().validPositions[d.begin].input!==c.groupSeparator&&e().validPositions[d.begin].input!==c.radixPoint||d.begin--):b===Inputmask.keyCode.DELETE&&d.begin===d.end&&(d.end=t(d.end)?d.end+1:v(d.end)+1,void 0===e().validPositions[d.begin]||e().validPositions[d.begin].input!==c.groupSeparator&&e().validPositions[d.begin].input!==c.radixPoint||d.end++),i(d.begin,d.end,!1,h),h!==!0&&k();var m=g(d.begin);m<d.begin?(-1===m&&f(),e().p=v(m)):h!==!0&&(e().p=d.begin)}function K(a){var b=this,d=$(b),f=a.keyCode,h=C(b);f===Inputmask.keyCode.BACKSPACE||f===Inputmask.keyCode.DELETE||iphone&&127===f||a.ctrlKey&&88===f&&!isInputEventSupported("cut")?(a.preventDefault(),88===f&&(S=o().join("")),J(b,f,h),y(b,o(),e().p,a,S!==o().join("")),b.inputmask._valueGet()===n().join("")?d.trigger("cleared"):F(o())===!0&&d.trigger("complete"),c.showTooltip&&d.prop("title",e().mask)):f===Inputmask.keyCode.END||f===Inputmask.keyCode.PAGE_DOWN?setTimeout(function(){var d=v(g());c.insertMode||d!==u()||a.shiftKey||d--,C(b,a.shiftKey?h.begin:d,d)},0):f===Inputmask.keyCode.HOME&&!a.shiftKey||f===Inputmask.keyCode.PAGE_UP?C(b,0,a.shiftKey?h.begin:0):(c.undoOnEscape&&f===Inputmask.keyCode.ESCAPE||90===f&&a.ctrlKey)&&a.altKey!==!0?(A(b,!0,!1,S.split("")),d.click()):f!==Inputmask.keyCode.INSERT||a.shiftKey||a.ctrlKey?c.tabThrough===!0&&f===Inputmask.keyCode.TAB?(a.shiftKey===!0?(null===k(h.begin).fn&&(h.begin=v(h.begin)),h.end=w(h.begin,!0),h.begin=w(h.end,!0)):(h.begin=v(h.begin,!0),h.end=v(h.begin,!0),h.end<u()&&h.end--),h.begin<u()&&(a.preventDefault(),C(b,h.begin,h.end))):c.insertMode!==!1||a.shiftKey||(f===Inputmask.keyCode.RIGHT?setTimeout(function(){var a=C(b);C(b,a.begin)},0):f===Inputmask.keyCode.LEFT&&setTimeout(function(){var a=C(b);C(b,Z?a.begin+1:a.begin-1)},0)):(c.insertMode=!c.insertMode,C(b,c.insertMode||h.begin!==u()?h.begin:h.begin-1)),c.onKeyDown.call(this,a,o(),C(b).begin,c),ba=-1!==$.inArray(f,c.ignorables)}function L(a,b,d,g,i){var j=this,k=$(j),l=a.which||a.charCode||a.keyCode;if(!(b===!0||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||ba))return l===Inputmask.keyCode.ENTER&&S!==o().join("")&&setTimeout(function(){k.change(),S=o().join("")},0),!0;if(l){46===l&&a.shiftKey===!1&&","===c.radixPoint&&(l=44);var n,q=b?{begin:i,end:i}:C(j),r=String.fromCharCode(l),t=G(q.begin,q.end);t&&(e().undoPositions=$.extend(!0,{},e().validPositions),J(j,Inputmask.keyCode.DELETE,q,!0),q.begin=e().p,c.insertMode||(c.insertMode=!c.insertMode,h(q.begin,g),c.insertMode=!c.insertMode),t=!c.multi),e().writeOutBuffer=!0;var u=Z&&!t?q.end:q.begin,x=s(u,r,g);if(x!==!1){if(x!==!0&&(u=void 0!==x.pos?x.pos:u,r=void 0!==x.c?x.c:r),f(!0),void 0!==x.caret)n=x.caret;else{var z=e().validPositions;n=!c.keepStatic&&(void 0!==z[u+1]&&m(u+1,z[u].locator.slice(),u).length>1||void 0!==z[u].alternation)?u+1:v(u)}e().p=n}if(d!==!1){var A=this;if(setTimeout(function(){c.onKeyValidation.call(A,x,c)},0),e().writeOutBuffer&&x!==!1){var B=o();y(j,B,b?void 0:c.numericInput?w(n):n,a,b!==!0),b!==!0&&setTimeout(function(){F(B)===!0&&k.trigger("complete")},0)}else t&&(e().buffer=void 0,e().validPositions=e().undoPositions)}else t&&(e().buffer=void 0,e().validPositions=e().undoPositions);if(c.showTooltip&&k.prop("title",e().mask),b&&$.isFunction(c.onBeforeWrite)){var D=c.onBeforeWrite.call(this,a,o(),n,c);if(D&&D.refreshFromBuffer){var E=D.refreshFromBuffer;p(E===!0?E:E.start,E.end,D.buffer),f(!0),D.caret&&(e().p=D.caret)}}if(a.preventDefault(),b)return x}}function M(a){var b=this,d=$(b),e=b.inputmask._valueGet(!0),f=C(b);if("propertychange"===a.type&&b.inputmask._valueGet().length<=u())return!0;if("paste"===a.type){var g=e.substr(0,f.begin),h=e.substr(f.end,e.length);g===n().slice(0,f.begin).join("")&&(g=""),h===n().slice(f.end).join("")&&(h=""),window.clipboardData&&window.clipboardData.getData?e=g+window.clipboardData.getData("Text")+h:a.originalEvent&&a.originalEvent.clipboardData&&a.originalEvent.clipboardData.getData&&(e=g+a.originalEvent.clipboardData.getData("text/plain")+h)}var i=e;if($.isFunction(c.onBeforePaste)){if(i=c.onBeforePaste.call(b,e,c),i===!1)return a.preventDefault(),!1;i||(i=e)}return A(b,!1,!1,Z?i.split("").reverse():i.toString().split("")),y(b,o(),void 0,a,!0),d.click(),F(o())===!0&&d.trigger("complete"),!1}function N(a){var b=this;A(b,!0,!1),F(o())===!0&&$(b).trigger("complete"),a.preventDefault()}function O(a){var b=this;S=o().join(""),(""===U||0!==a.originalEvent.data.indexOf(U))&&(T=C(b))}function P(a){var b=this,d=C(b);0===a.originalEvent.data.indexOf(U)&&(f(),d=T);var g=a.originalEvent.data;C(b,d.begin,d.end);for(var h=0;h<g.length;h++){var i=$.Event("keypress");i.which=g.charCodeAt(h),_=!1,ba=!1,L.call(b,i)}setTimeout(function(){var a=e().p;y(b,o(),c.numericInput?w(a):a)},0),U=a.originalEvent.data}function Q(a){}function R(a){W=$(a),c.showTooltip&&W.prop("title",e().mask),("rtl"===a.dir||c.rightAlign)&&W.css("text-align","right"),("rtl"===a.dir||c.numericInput)&&(a.dir="ltr",W.removeAttr("dir"),a.inputmask.isRTL=!0,Z=!0),W.unbind(".inputmask"),(W.is(":input")&&isInputTypeSupported(W.attr("type"))||a.isContentEditable)&&(W.closest("form").bind("submit",function(){S!==o().join("")&&W.change(),c.clearMaskOnLostFocus&&-1===g()&&W[0].inputmask._valueGet&&W[0].inputmask._valueGet()===n().join("")&&a.inputmask._valueSet(""),c.removeMaskOnSubmit&&(a.inputmask._valueSet(a.inputmask.unmaskedvalue(),!0),setTimeout(function(){y(a,o())},0))}).bind("reset",function(){setTimeout(function(){W.triggerHandler("setvalue.inputmask")},0)}),W.bind("mouseenter.inputmask",function(){var a=$(this),b=this;ca=!0,!a.is(":focus")&&c.showMaskOnHover&&b.inputmask._valueGet()!==o().join("")&&y(b,o())}).bind("blur.inputmask",function(a){var b=$(this),d=this;if(d.inputmask){var e=d.inputmask._valueGet(),h=o().slice();S!==h.join("")&&setTimeout(function(){b.change(),S=h.join("")},0),""!==e&&(c.clearMaskOnLostFocus&&(-1===g()&&e===n().join("")?h=[]:E(h)),F(h)===!1&&(setTimeout(function(){b.trigger("incomplete")},0),c.clearIncomplete&&(f(),h=c.clearMaskOnLostFocus?[]:n().slice())),y(d,h,void 0,a))}}).bind("focus.inputmask",function(a){var b=this,d=b.inputmask._valueGet();c.showMaskOnFocus&&(!c.showMaskOnHover||c.showMaskOnHover&&""===d)?b.inputmask._valueGet()!==o().join("")&&y(b,o(),v(g())):ca===!1&&C(b,v(g())),c.positionCaretOnTab===!0&&setTimeout(function(){C(b,v(g()))},0),S=o().join("")}).bind("mouseleave.inputmask",function(){var a=$(this),b=this;if(ca=!1,c.clearMaskOnLostFocus){var d=o().slice(),e=b.inputmask._valueGet();a.is(":focus")||e===a.attr("placeholder")||""===e||(-1===g()&&e===n().join("")?d=[]:E(d),y(b,d))}}).bind("click.inputmask",function(){function a(a){if(c.radixFocus&&""!==c.radixPoint){var b=e().validPositions;if(void 0===b[a]||b[a].input===z(a)){if(a<v(-1))return!0;var d=$.inArray(c.radixPoint,o());if(-1!==d){for(var f in b)if(f>d&&b[f].input!==z(f))return!1;return!0}}}return!1}var b=this;if($(b).is(":focus")){var d=C(b);if(d.begin===d.end)if(a(d.begin))C(b,$.inArray(c.radixPoint,o()));else{var f=d.begin,h=v(g(f));h>f?C(b,t(f)||t(f-1)?f:v(f)):C(b,c.numericInput?0:h)}}}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){C(a,0,v(g()))},0)}).bind(PasteEventType+".inputmask dragdrop.inputmask drop.inputmask",M).bind("cut.inputmask",function(a){aa=!0;var b=this,d=$(b),f=C(b);if(Z){var g=window.clipboardData||a.originalEvent.clipboardData,h=g.getData("text").split("").reverse().join("");g.setData("text",h)}J(b,Inputmask.keyCode.DELETE,f),y(b,o(),e().p,a,S!==o().join("")),b.inputmask._valueGet()===n().join("")&&d.trigger("cleared"),c.showTooltip&&d.prop("title",e().mask)}).bind("complete.inputmask",c.oncomplete).bind("incomplete.inputmask",c.onincomplete).bind("cleared.inputmask",c.oncleared),W.bind("keydown.inputmask",K).bind("keypress.inputmask",L),androidfirefox||W.bind("compositionstart.inputmask",O).bind("compositionupdate.inputmask",P).bind("compositionend.inputmask",Q),"paste"===PasteEventType&&W.bind("input.inputmask",N)),W.bind("setvalue.inputmask",function(){var a=this,b=a.inputmask._valueGet();a.inputmask._valueSet($.isFunction(c.onBeforeMask)?c.onBeforeMask.call(a,b,c)||b:b),A(a,!0,!1),S=o().join(""),(c.clearMaskOnLostFocus||c.clearIncomplete)&&a.inputmask._valueGet()===n().join("")&&a.inputmask._valueSet("")}),I(a);var b=$.isFunction(c.onBeforeMask)?c.onBeforeMask.call(a,a.inputmask._valueGet(),c)||a.inputmask._valueGet():a.inputmask._valueGet();A(a,!0,!1,b.split(""));var d=o().slice();S=d.join("");var h;try{h=document.activeElement}catch(i){}F(d)===!1&&c.clearIncomplete&&f(),c.clearMaskOnLostFocus&&(d.join("")===n().join("")?d=[]:E(d)),y(a,d),h===a&&C(a,v(g())),H(a)}var S,T,U,V,W,X,Y,Z=!1,_=!1,aa=!1,ba=!1,ca=!0;if(void 0!==a)switch(a.action){case"isComplete":return V=a.el,W=$(V),b=V.inputmask.maskset,c=V.inputmask.opts,F(a.buffer);case"unmaskedvalue":return V=a.el,void 0===V?(W=$({}),V=W[0],V.inputmask=new Inputmask,V.inputmask.opts=c,V.inputmask.el=V,V.inputmask.maskset=b,V.inputmask.isRTL=c.numericInput,c.numericInput&&(Z=!0),Y=($.isFunction(c.onBeforeMask)?c.onBeforeMask.call(W,a.value,c)||a.value:a.value).split(""),A(W,!1,!1,Z?Y.reverse():Y),$.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(this,void 0,o(),0,c)):W=$(V),b=V.inputmask.maskset,c=V.inputmask.opts,Z=V.inputmask.isRTL,B(W);case"mask":S=o().join(""),R(a.el);break;case"format":return W=$({}),W[0].inputmask=new Inputmask,W[0].inputmask.opts=c,W[0].inputmask.el=W[0],W[0].inputmask.maskset=b,W[0].inputmask.isRTL=c.numericInput,c.numericInput&&(Z=!0),Y=($.isFunction(c.onBeforeMask)?c.onBeforeMask.call(W,a.value,c)||a.value:a.value).split(""),A(W,!1,!1,Z?Y.reverse():Y),$.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(this,void 0,o(),0,c),a.metadata?{value:Z?o().slice().reverse().join(""):o().join(""),metadata:W.inputmask("getmetadata")}:Z?o().slice().reverse().join(""):o().join("");case"isValid":W=$({}),W[0].inputmask=new Inputmask,W[0].inputmask.opts=c,W[0].inputmask.el=W[0],W[0].inputmask.maskset=b,W[0].inputmask.isRTL=c.numericInput,c.numericInput&&(Z=!0),Y=a.value.split(""),A(W,!1,!0,Z?Y.reverse():Y);for(var da=o(),ea=D(),fa=da.length-1;fa>ea&&!t(fa);fa--);return da.splice(ea,fa+1-ea),F(da)&&a.value===da.join("");case"getemptymask":return V=a.el,W=$(V),b=V.inputmask.maskset,c=V.inputmask.opts,n();case"remove":V=a.el,W=$(V),b=V.inputmask.maskset,c=V.inputmask.opts,V.inputmask._valueSet(B(W)),W.unbind(".inputmask");var ga;Object.getOwnPropertyDescriptor&&(ga=Object.getOwnPropertyDescriptor(V,"value")),ga&&ga.get?V.inputmask.__valueGet&&Object.defineProperty(V,"value",{get:V.inputmask.__valueGet,set:V.inputmask.__valueSet}):document.__lookupGetter__&&V.__lookupGetter__("value")&&V.inputmask.__valueGet&&(V.__defineGetter__("value",V.inputmask.__valueGet),V.__defineSetter__("value",V.inputmask.__valueSet)),V.inputmask=void 0;break;case"getmetadata":if(V=a.el,W=$(V),b=V.inputmask.maskset,c=V.inputmask.opts,$.isArray(b.metadata)){for(var ha,ia=g(),ja=ia;ja>=0;ja--)if(e().validPositions[ja]&&void 0!==e().validPositions[ja].alternation){ha=e().validPositions[ja].alternation;break}return void 0!==ha?b.metadata[e().validPositions[ia].locator[ha]]:b.metadata[0]}return b.metadata}}Inputmask.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:null,onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",groupSeparator:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:null,positionCaretOnTab:!1,tabThrough:!1,supportsInputType:[],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:$.noop,postValidation:null},masksCache:{},mask:function(a){var b=a.jquery&&a.length>0?a[0]:a,c=$.extend(!0,{},this.opts);importAttributeOptions(a,c,$.extend(!0,{},this.userOptions));var d=generateMaskSet(c,this.noMasksCache);return void 0!==d&&(b.inputmask=b.inputmask||new Inputmask,b.inputmask.opts=c,b.inputmask.noMasksCache=this.noMasksCache,b.inputmask.userOptions=$.extend(!0,{},this.userOptions),b.inputmask.el=b,b.inputmask.maskset=d,b.inputmask.isRTL=!1,$(b).data("_inputmask_opts",c),maskScope({action:"mask",el:b},d,b.inputmask.opts)),a},option:function(a){return"string"==typeof a?this.opts[a]:"object"==typeof a?($.extend(this.opts,a),$.extend(this.userOptions,a),this):void 0},unmaskedvalue:function(){return this.el?maskScope({action:"unmaskedvalue",el:this.el}):void 0},remove:function(){return this.el?(maskScope({action:"remove",el:this.el}),this.el.inputmask=void 0,this.el):void 0},getemptymask:function(){return this.el?maskScope({action:"getemptymask",el:this.el}):void 0},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.el?maskScope({action:"isComplete",buffer:this.el.inputmask._valueGet().split(""),el:this.el}):void 0},getmetadata:function(){return this.el?maskScope({action:"getmetadata",el:this.el}):void 0}},Inputmask.extendDefaults=function(a){$.extend(Inputmask.prototype.defaults,a)},Inputmask.extendDefinitions=function(a){$.extend(Inputmask.prototype.defaults.definitions,a)},Inputmask.extendAliases=function(a){$.extend(Inputmask.prototype.defaults.aliases,a)},Inputmask.format=function(a,b,c){var d=$.extend(!0,{},Inputmask.prototype.defaults,b);return resolveAlias(d.alias,b,d),maskScope({action:"format",value:a,metadata:c},generateMaskSet(d,b&&void 0!==b.definitions),d)},Inputmask.unmask=function(a,b){var c=$.extend(!0,{},Inputmask.prototype.defaults,b);return resolveAlias(c.alias,b,c),maskScope({action:"unmaskedvalue",value:a},generateMaskSet(c,b&&void 0!==b.definitions),c)},Inputmask.isValid=function(a,b){var c=$.extend(!0,{},Inputmask.prototype.defaults,b);return resolveAlias(c.alias,b,c),maskScope({action:"isValid",value:a},generateMaskSet(c,b&&void 0!==b.definitions),c)},Inputmask.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},Inputmask.keyCode={ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91};var ua=navigator.userAgent,iphone=null!==ua.match(new RegExp("iphone","i")),androidchrome=null!==ua.match(new RegExp("android.*chrome.*","i")),androidfirefox=null!==ua.match(new RegExp("android.*firefox.*","i")),PasteEventType=isInputEventSupported("paste")?"paste":isInputEventSupported("input")?"input":"propertychange";return window.Inputmask=Inputmask,Inputmask}),function(a){"function"==typeof define&&define.amd?define(["jquery","inputmask"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("inputmask")):a(jQuery,window.Inputmask)}(function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f;if(d=d||{},"string"==typeof c)switch(c){case"mask":return e=new b(d),this.each(function(){e.mask(this)});case"unmaskedvalue":return f=this.jquery&&this.length>0?this[0]:this,f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f=this.jquery&&this.length>0?this[0]:this,f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return f=this.jquery&&this.length>0?this[0]:this,f.inputmask?f.inputmask.hasMaskedValue():!1;case"isComplete":return f=this.jquery&&this.length>0?this[0]:this,f.inputmask?f.inputmask.isComplete():!0;case"getmetadata":return f=this.jquery&&this.length>0?this[0]:this,f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":f=this.jquery&&this.length>0?this[0]:this,a(f).val(d),void 0!==f.inputmask&&a(f).triggerHandler("setvalue.inputmask");break;case"option":if("string"!=typeof d)return this.each(function(){return void 0!==this.inputmask?this.inputmask.option(d):void 0});if(f=this.jquery&&this.length>0?this[0]:this,void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==typeof c)return e=new b(c),this.each(void 0===c.mask&&void 0===c.alias?function(){return void 0!==this.inputmask?this.inputmask.option(c):void e.mask(this)}:function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask}),function(a){"function"==typeof define&&define.amd?define(["jquery","inputmask"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("inputmask")):a(jQuery,window.Inputmask)}(function(a,b){return b.extendDefinitions({h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return(isNaN(d)?!1:d>=b&&c>=d)||(isNaN(e)?!1:e>=b&&c>=e)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(d>b){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);e+c>b;)e--;var g=e+f;return a>g?a:g}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.triggerHandler("setvalue.inputmask")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&-1==="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);if(!d&&!g&&(a.charAt(1)===e.separator||-1!=="-./".indexOf(a.charAt(1)))&&(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0))))return b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)};if(e.mask.indexOf("2")===e.mask.length-1&&g){var h=b.buffer.join("").substr(4,4)+a;if(h!==e.leapday)return!0;var i=parseInt(b.buffer.join("").substr(0,4),10);return i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}return g},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){if(e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)){var f=b.buffer.join("").substr(0,6);if(f!==e.leapday)return!0;var g=parseInt(a,10);return g%4===0?g%100===0?g%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear)){var h=b.buffer.join("").substr(0,6);if(h!==e.leapday)f=!0;else{var i=parseInt(a,10);f=i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}}else f=!1;if(f)return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.triggerHandler("setvalue.inputmask")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.triggerHandler("setvalue.inputmask")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||-1!=="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,10>g?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.triggerHandler("setvalue.inputmask")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),b}),function(a){"function"==typeof define&&define.amd?define(["jquery","inputmask"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("inputmask")):a(jQuery,window.Inputmask)}(function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{mask:"ir",placeholder:"",separator:"",defaultPrefix:"http://",regex:{urlpre1:new RegExp("[fh]"),urlpre2:new RegExp("(ft|ht)"),urlpre3:new RegExp("(ftp|htt)"),urlpre4:new RegExp("(ftp:|http|ftps)"),urlpre5:new RegExp("(ftp:/|ftps:|http:|https)"),urlpre6:new RegExp("(ftp://|ftps:/|http:/|https:)"),urlpre7:new RegExp("(ftp://|ftps://|http://|https:/)"),urlpre8:new RegExp("(ftp://|ftps://|http://|https://)")},definitions:{i:{validator:function(a,b,c,d,e){return!0},cardinality:8,prevalidator:function(){for(var a=[],b=8,c=0;b>c;c++)a[c]=function(){var a=c;return{validator:function(b,c,d,e,f){if(f.regex["urlpre"+(a+1)]){var g,h=b;a+1-b.length>0&&(h=c.buffer.join("").substring(0,a+1-b.length)+""+h);var i=f.regex["urlpre"+(a+1)].test(h);if(!e&&!i){for(d-=a,g=0;g<f.defaultPrefix.length;g++)c.buffer[d]=f.defaultPrefix[g],d++;for(g=0;g<h.length-1;g++)c.buffer[d]=h[g],d++;return{pos:d}}return i}return!1},cardinality:a}}();return a}()},r:{validator:".",cardinality:50}},insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,64}]@*{1,64}[.*{2,64}][.*{2,6}][.*{1,2}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"}}},mac:{mask:"##:##:##:##:##:##"}}),b}),function(a){"function"==typeof define&&define.amd?define(["jquery","inputmask"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("inputmask")):a(jQuery,window.Inputmask)}(function(a,b){return b.extendAliases({numeric:{mask:function(a){function b(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b.charAt(d)]?"\\"+b.charAt(d):b.charAt(d);return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var c=Math.floor(a.integerDigits/a.groupSize),d=a.integerDigits%a.groupSize;

a.integerDigits=parseInt(a.integerDigits)+(0===d?c-1:c),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),a.radixFocus=a.radixFocus&&""!==a.placeholder&&a.integerOptional===!0,a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",a.numericInput===!0&&(a.radixFocus=!1,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var e=b(a.prefix);return e+="[+]",e+=a.integerOptional===!0?"~{1,"+a.integerDigits+"}":"~{"+a.integerDigits+"}",void 0!==a.digits&&(isNaN(a.digits)||parseInt(a.digits)>0)&&(e+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{1,"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}"),""!==a.negationSymbol.back&&(e+="[-]"),e+=b(a.suffix),a.greedy=!1,e},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",radixFocus:!0,groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,postFormat:function(c,d,e,f){f.numericInput===!0&&(c=c.reverse(),isFinite(d)&&(d=c.join("").length-d-1));var g,h,i=!1;c.length>=f.suffix.length&&c.join("").indexOf(f.suffix)===c.length-f.suffix.length&&(c.length=c.length-f.suffix.length,i=!0),d=d>=c.length?c.length-1:d<f.prefix.length?f.prefix.length:d;var j=!1,k=c[d];if(""===f.groupSeparator||f.numericInput!==!0&&-1!==a.inArray(f.radixPoint,c)&&d>a.inArray(f.radixPoint,c)||new RegExp("["+b.escapeRegex(f.negationSymbol.front)+"+]").test(k)){if(i)for(g=0,h=f.suffix.length;h>g;g++)c.push(f.suffix.charAt(g));return{pos:d}}var l=c.slice();k===f.groupSeparator&&(l.splice(d--,1),k=l[d]),e?k!==f.radixPoint&&(l[d]="?"):l.splice(d,0,"?");var m=l.join(""),n=m;if(m.length>0&&f.autoGroup||e&&-1!==m.indexOf(f.groupSeparator)){var o=b.escapeRegex(f.groupSeparator);j=0===m.indexOf(f.groupSeparator),m=m.replace(new RegExp(o,"g"),"");var p=m.split(f.radixPoint);if(m=""===f.radixPoint?m:p[0],m!==f.prefix+"?0"&&m.length>=f.groupSize+f.prefix.length)for(var q=new RegExp("([-+]?[\\d?]+)([\\d?]{"+f.groupSize+"})");q.test(m);)m=m.replace(q,"$1"+f.groupSeparator+"$2"),m=m.replace(f.groupSeparator+f.groupSeparator,f.groupSeparator);""!==f.radixPoint&&p.length>1&&(m+=f.radixPoint+p[1])}for(j=n!==m,c.length=m.length,g=0,h=m.length;h>g;g++)c[g]=m.charAt(g);var r=a.inArray("?",c);if(-1===r&&k===f.radixPoint&&(r=a.inArray(f.radixPoint,c)),e?c[r]=k:c.splice(r,1),!j&&i)for(g=0,h=f.suffix.length;h>g;g++)c.push(f.suffix.charAt(g));return r=f.numericInput&&isFinite(d)?c.join("").length-r-1:r,f.numericInput&&(c=c.reverse(),a.inArray(f.radixPoint,c)<r&&c.join("").length-f.suffix.length!==r&&(r-=1)),{pos:r,refreshFromBuffer:j,buffer:c}},onBeforeWrite:function(c,d,e,f){if(c&&("blur"===c.type||"checkval"===c.type)){var g=d.join(""),h=g.replace(f.prefix,"");if(h=h.replace(f.suffix,""),h=h.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(h=h.replace(b.escapeRegex(f.radixPoint),".")),isFinite(h)&&isFinite(f.min)&&parseFloat(h)<parseFloat(f.min))return a.extend(!0,{refreshFromBuffer:!0,buffer:(f.prefix+f.min).split("")},f.postFormat((f.prefix+f.min).split(""),0,!0,f));if(f.numericInput!==!0){var i=""!==f.radixPoint?d.join("").split(f.radixPoint):[d.join("")],j=i[0].match(f.regex.integerPart(f)),k=2===i.length?i[1].match(f.regex.integerNPart(f)):void 0;if(j){j[0]!==f.negationSymbol.front+"0"&&j[0]!==f.negationSymbol.front&&"+"!==j[0]||void 0!==k&&!k[0].match(/^0+$/)||d.splice(j.index,1);var l=a.inArray(f.radixPoint,d);if(-1!==l){if(isFinite(f.digits)&&!f.digitsOptional){for(var m=1;m<=f.digits;m++)(void 0===d[l+m]||d[l+m]===f.placeholder.charAt(0))&&(d[l+m]="0");return{refreshFromBuffer:g!==d.join(""),buffer:d}}if(l===d.length-f.suffix.length-1)return d.splice(l,1),{refreshFromBuffer:!0,buffer:d}}}}}if(f.autoGroup){var n=f.postFormat(d,f.numericInput?e:e-1,!0,f);return n.caret=e<=f.prefix.length?n.pos:n.pos+1,n}},regex:{integerPart:function(a){return new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]===("-"===a?"+":e.negationSymbol.front)?"-"===a?""!==e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c,insert:{pos:b.buffer.length-e.suffix.length-1,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c}:""!==e.negationSymbol.back?{pos:f.index,c:"+",remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c}:{pos:f.index,c:"+",remove:f.index,caret:c}:b.buffer[f.index]===("-"===a?e.negationSymbol.front:"+")?"-"===a&&""!==e.negationSymbol.back?{remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c-1}:{remove:f.index,caret:c-1}:"-"===a?""!==e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length-e.suffix.length,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,caret:c+1}:{pos:f.index,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&(-1!==a.inArray(b,[",","."])&&(b=f.radixPoint),b===f.radixPoint&&void 0!==f.digits&&(isNaN(f.digits)||parseInt(f.digits)>0))){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));if(-1!==g&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"===h[0]&&h.index+1!==d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1,c:f.radixPoint}}return!1},leadingZeroHandler:function(b,c,d,e,f){if(f.numericInput===!0){if("0"===c.buffer[c.buffer.length-f.prefix.length-1])return{pos:d,remove:c.buffer.length-f.prefix.length-1}}else{var g=c.buffer.join("").match(f.regex.integerNPart(f)),h=a.inArray(f.radixPoint,c.buffer);if(g&&!e&&(-1===h||h>=d))if(0===g[0].indexOf("0")){d<f.prefix.length&&(d=g.index);var i=a.inArray(f.radixPoint,c._buffer),j=c._buffer&&c.buffer.slice(h).join("")===c._buffer.slice(i).join("")||0===parseInt(c.buffer.slice(h+1).join("")),k=c._buffer&&c.buffer.slice(g.index,h).join("")===c._buffer.slice(f.prefix.length,i).join("")||"0"===c.buffer.slice(g.index,h).join("");if(-1===h||j&&k)return c.buffer.splice(g.index,1),d=d>g.index?d-1:g.index,{pos:d,remove:g.index};if(g.index+1===d||"0"===b)return c.buffer.splice(g.index,1),d=g.index,{pos:d,remove:g.index}}else if("0"===b&&d<=g.index&&g[0]!==f.groupSeparator)return!1}return!0},postValidation:function(c,d){var e=!0,f=c.join(""),g=f.replace(d.prefix,"");return g=g.replace(d.suffix,""),g=g.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),","===d.radixPoint&&(g=g.replace(b.escapeRegex(d.radixPoint),".")),g=g.replace(new RegExp("^"+b.escapeRegex(d.negationSymbol.front)),"-"),g=g.replace(new RegExp(b.escapeRegex(d.negationSymbol.back)+"$"),""),g=g===d.negationSymbol.front?g+"0":g,isFinite(g)&&(null!==d.max&&isFinite(d.max)&&(e=parseFloat(g)<=parseFloat(d.max)),e&&null!==d.min&&isFinite(d.min)&&(0>=g||g.toString().length>=d.min.toString().length)&&(e=parseFloat(g)>=parseFloat(d.min),e||(e=a.extend(!0,{refreshFromBuffer:!0,buffer:(d.prefix+d.min).split("")},d.postFormat((d.prefix+d.min).split(""),0,!0,d)),e.refreshFromBuffer=!0))),e},definitions:{"~":{validator:function(c,d,e,f,g){var h=g.signHandler(c,d,e,f,g);if(!h&&(h=g.radixHandler(c,d,e,f,g),!h&&(h=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(c):new RegExp("[0-9]").test(c),h===!0&&(h=g.leadingZeroHandler(c,d,e,f,g),h===!0)))){var i=a.inArray(g.radixPoint,d.buffer);h=-1!==i&&g.digitsOptional===!1&&g.numericInput!==!0&&e>i&&!f?{pos:e,remove:e}:{pos:e}}return h},cardinality:1,prevalidator:null},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"===a||e.allowPlus&&"+"===a)&&(f="-"===a?""!==e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1}:!0),f},cardinality:1,prevalidator:null,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,prevalidator:null,placeholder:""},":":{validator:function(a,c,d,e,f){var g=f.signHandler(a,c,d,e,f);if(!g){var h="["+b.escapeRegex(f.radixPoint)+",\\.]";g=new RegExp(h).test(a),g&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(g={caret:d+1})}return g?{c:f.radixPoint}:g},cardinality:1,prevalidator:null,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),d.unmaskAsNumber?(e=e.replace(b.escapeRegex.call(this,d.radixPoint),"."),Number(e)):e},isComplete:function(a,c){var d=a.join(""),e=a.slice();if(c.postFormat(e,0,!0,c),e.join("")!==d)return!1;var f=d.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(b.escapeRegex(c.radixPoint),".")),isFinite(f)},onBeforeMask:function(a,c){if(""!==c.radixPoint&&isFinite(a))a=a.toString().replace(".",c.radixPoint);else{var d=a.match(/,/g),e=a.match(/\./g);e&&d?e.length>d.length?(a=a.replace(/\./g,""),a=a.replace(",",c.radixPoint)):d.length>e.length?(a=a.replace(/,/g,""),a=a.replace(".",c.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),"")}if(0===c.digits&&(-1!==a.indexOf(".")?a=a.substring(0,a.indexOf(".")):-1!==a.indexOf(",")&&(a=a.substring(0,a.indexOf(",")))),""!==c.radixPoint&&isFinite(c.digits)&&-1!==a.indexOf(c.radixPoint)){var f=a.split(c.radixPoint),g=f[1].match(new RegExp("\\d*"))[0];if(parseInt(c.digits)<g.toString().length){var h=Math.pow(10,parseInt(c.digits));a=a.replace(b.escapeRegex(c.radixPoint),"."),a=Math.round(parseFloat(a)*h)/h,a=a.toString().replace(".",c.radixPoint)}}return a.toString()},onBeforePaste:function(a,b){return b.onBeforeMask(a,b)},canClearPosition:function(c,d,e,f,g){var h=c.validPositions[d].input,i=h!==g.radixPoint||null!==c.validPositions[d].match.fn&&g.decimalProtect===!1||isFinite(h)||d===e||h===g.groupSeparator||h===g.negationSymbol.front||h===g.negationSymbol.back;if(i&&isFinite(h)){var j,k=a.inArray(g.radixPoint,c.buffer),l=!1;if(void 0===c.validPositions[k]&&(c.validPositions[k]={input:g.radixPoint},l=!0),!f&&c.buffer){j=c.buffer.join("").substr(0,d).match(g.regex.integerNPart(g));var m=d+1,n=null==j||0===parseInt(j[0].replace(new RegExp(b.escapeRegex(g.groupSeparator),"g"),""));if(n)for(;c.validPositions[m]&&(c.validPositions[m].input===g.groupSeparator||"0"===c.validPositions[m].input);)delete c.validPositions[m],m++}var o=[];for(var p in c.validPositions)void 0!==c.validPositions[p].input&&o.push(c.validPositions[p].input);if(l&&delete c.validPositions[k],k>0){var q=o.join("");if(j=q.match(g.regex.integerNPart(g)),j&&k>=d)if(0===j[0].indexOf("0"))i=j.index!==d||"0"===g.placeholder;else{var r=parseInt(j[0].replace(new RegExp(b.escapeRegex(g.groupSeparator),"g"),"")),s=parseInt(q.split(g.radixPoint)[1]);10>r&&c.validPositions[d]&&("0"!==g.placeholder||s>0)&&(c.validPositions[d].input="0",c.p=g.prefix.length+1,i=!1)}}}return i},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.triggerHandler("setvalue.inputmask");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.triggerHandler("setvalue.inputmask")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),b}),function(a){"function"==typeof define&&define.amd?define(["jquery","inputmask"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("inputmask")):a(jQuery,window.Inputmask)}(function(a,b){return b.extendAliases({phone:{url:"phone-codes/phone-codes.js",countrycode:"",mask:function(b){b.definitions["#"]=b.definitions[9];var c=[];return a.ajax({url:b.url,async:!1,dataType:"json",success:function(a){c=a},error:function(a,c,d){alert(d+" - "+b.url)}}),c=c.sort(function(a,b){return(a.mask||a)<(b.mask||b)?-1:1})},keepStatic:!1,nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(a,b){var c=a.replace(/^0/g,"");return(c.indexOf(b.countrycode)>1||-1===c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),b}),function(a){"function"==typeof define&&define.amd?define(["jquery","inputmask"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("inputmask")):a(jQuery,window.Inputmask)}(function(a,b){return b.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g(!0));break;case")":j=d.pop(),d.length>0?d[d.length-1].matches.push(j):c.matches.push(j);break;case"{":case"+":case"*":var e=new g(!1,!0);b=b.replace(/[{}]/g,"");var h=b.split(","),i=isNaN(h[0])?h[0]:parseInt(h[0]),k=1===h.length?i:isNaN(h[1])?h[1]:parseInt(h[1]);if(e.quantifier={min:i,max:k},d.length>0){var l=d[d.length-1].matches;a=l.pop(),a.isGroup||(j=new g(!0),j.matches.push(a),a=j),l.push(a),l.push(e)}else a=c.matches.pop(),a.isGroup||(j=new g(!0),j.matches.push(a),a=j),c.matches.push(a),c.matches.push(e);break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(l+="(",n++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(f.isGroup===!0)d=i(f,!0);else if(f.isQuantifier===!0){var g=a.inArray(f,b.matches),h=b.matches[g-1],j=l;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!==l&&f.repeaterPart.length>l.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=l),l=j+f.quantifier.max}else{for(var k=0,m=f.quantifier.max-1;m>k&&!(d=i(h,!0));k++);l=j+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!==f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=l,q+=f;for(var r=0;n>r;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(o)}else for(var t=0,u=f.length;u>t;t++)if("\\"!==f.charAt(t)){q=l,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;n>r;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(o))break}l+=f}if(d)break}return c&&(l+=")",n--),d}var j,k=c.buffer.slice(),l="",m=!1,n=0;null===f.regexTokens&&h(),k.splice(d,0,b);for(var o=k.join(""),p=0;p<f.regexTokens.length;p++){var q=f.regexTokens[p];if(m=i(q,q.isGroup))break}return m},cardinality:1}}}}),b});
