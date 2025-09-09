"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [133], {
        968: (e, r, t) => {
            t.d(r, {
                b: () => s
            });
            var o = t(2115),
                n = t(3655),
                a = t(5155),
                l = o.forwardRef((e, r) => (0, a.jsx)(n.sG.label, { ...e,
                    ref: r,
                    onMouseDown: r => {
                        var t;
                        r.target.closest("button, input, select, textarea") || (null == (t = e.onMouseDown) || t.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault())
                    }
                }));
            l.displayName = "Label";
            var s = l
        },
        1275: (e, r, t) => {
            t.d(r, {
                X: () => a
            });
            var o = t(2115),
                n = t(2712);

            function a(e) {
                let [r, t] = o.useState(void 0);
                return (0, n.N)(() => {
                    if (e) {
                        t({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let r = new ResizeObserver(r => {
                            let o, n;
                            if (!Array.isArray(r) || !r.length) return;
                            let a = r[0];
                            if ("borderBoxSize" in a) {
                                let e = a.borderBoxSize,
                                    r = Array.isArray(e) ? e[0] : e;
                                o = r.inlineSize, n = r.blockSize
                            } else o = e.offsetWidth, n = e.offsetHeight;
                            t({
                                width: o,
                                height: n
                            })
                        });
                        return r.observe(e, {
                            box: "border-box"
                        }), () => r.unobserve(e)
                    }
                    t(void 0)
                }, [e]), r
            }
        },
        2085: (e, r, t) => {
            t.d(r, {
                F: () => l
            });
            var o = t(2596);
            let n = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                a = o.$,
                l = (e, r) => t => {
                    var o;
                    if ((null == r ? void 0 : r.variants) == null) return a(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
                    let {
                        variants: l,
                        defaultVariants: s
                    } = r, i = Object.keys(l).map(e => {
                        let r = null == t ? void 0 : t[e],
                            o = null == s ? void 0 : s[e];
                        if (null === r) return null;
                        let a = n(r) || n(o);
                        return l[e][a]
                    }), c = t && Object.entries(t).reduce((e, r) => {
                        let [t, o] = r;
                        return void 0 === o || (e[t] = o), e
                    }, {});
                    return a(e, i, null == r || null == (o = r.compoundVariants) ? void 0 : o.reduce((e, r) => {
                        let {
                            class: t,
                            className: o,
                            ...n
                        } = r;
                        return Object.entries(n).every(e => {
                            let [r, t] = e;
                            return Array.isArray(t) ? t.includes({ ...s,
                                ...c
                            }[r]) : ({ ...s,
                                ...c
                            })[r] === t
                        }) ? [...e, t, o] : e
                    }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
                }
        },
        2596: (e, r, t) => {
            t.d(r, {
                $: () => o
            });

            function o() {
                for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)(e = arguments[t]) && (r = function e(r) {
                    var t, o, n = "";
                    if ("string" == typeof r || "number" == typeof r) n += r;
                    else if ("object" == typeof r)
                        if (Array.isArray(r)) {
                            var a = r.length;
                            for (t = 0; t < a; t++) r[t] && (o = e(r[t])) && (n && (n += " "), n += o)
                        } else
                            for (o in r) r[o] && (n && (n += " "), n += o);
                    return n
                }(e)) && (o && (o += " "), o += r);
                return o
            }
        },
        2712: (e, r, t) => {
            t.d(r, {
                N: () => n
            });
            var o = t(2115),
                n = globalThis ? .document ? o.useLayoutEffect : () => {}
        },
        3655: (e, r, t) => {
            t.d(r, {
                sG: () => l
            });
            var o = t(2115);
            t(7650);
            var n = t(9708),
                a = t(5155),
                l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
                    let t = (0, n.TL)(`Primitive.${r}`),
                        l = o.forwardRef((e, o) => {
                            let {
                                asChild: n,
                                ...l
                            } = e;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(n ? t : r, { ...l,
                                ref: o
                            })
                        });
                    return l.displayName = `Primitive.${r}`, { ...e,
                        [r]: l
                    }
                }, {})
        },
        4840: (e, r, t) => {
            t.d(r, {
                C1: () => ef,
                q7: () => em,
                bL: () => eu
            });
            var o, n = t(2115),
                a = t.t(n, 2),
                l = t(5185),
                s = t(6101),
                i = t(6081),
                c = t(3655);

            function d(e, r, t) {
                if (!r.has(e)) throw TypeError("attempted to " + t + " private field on non-instance");
                return r.get(e)
            }

            function u(e, r) {
                var t = d(e, r, "get");
                return t.get ? t.get.call(e) : t.value
            }

            function m(e, r, t) {
                var o = d(e, r, "set");
                if (o.set) o.set.call(e, t);
                else {
                    if (!o.writable) throw TypeError("attempted to set read only private field");
                    o.value = t
                }
                return t
            }
            var f = t(9708),
                p = t(5155),
                b = new WeakMap;

            function g(e, r) {
                if ("at" in Array.prototype) return Array.prototype.at.call(e, r);
                let t = function(e, r) {
                    let t = e.length,
                        o = h(r),
                        n = o >= 0 ? o : t + o;
                    return n < 0 || n >= t ? -1 : n
                }(e, r);
                return -1 === t ? void 0 : e[t]
            }

            function h(e) {
                return e != e || 0 === e ? 0 : Math.trunc(e)
            }
            o = new WeakMap;
            var v = t(2712),
                w = a[" useId ".trim().toString()] || (() => void 0),
                y = 0,
                k = t(5845),
                x = n.createContext(void 0);

            function N(e) {
                let r = n.useContext(x);
                return e || r || "ltr"
            }
            var R = "rovingFocusGroup.onEntryFocus",
                E = {
                    bubbles: !1,
                    cancelable: !0
                },
                C = "RovingFocusGroup",
                [j, z, A] = function(e) {
                    let r = e + "CollectionProvider",
                        [t, o] = (0, i.A)(r),
                        [a, l] = t(r, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        c = e => {
                            let {
                                scope: r,
                                children: t
                            } = e, o = n.useRef(null), l = n.useRef(new Map).current;
                            return (0, p.jsx)(a, {
                                scope: r,
                                itemMap: l,
                                collectionRef: o,
                                children: t
                            })
                        };
                    c.displayName = r;
                    let d = e + "CollectionSlot",
                        u = (0, f.TL)(d),
                        m = n.forwardRef((e, r) => {
                            let {
                                scope: t,
                                children: o
                            } = e, n = l(d, t), a = (0, s.s)(r, n.collectionRef);
                            return (0, p.jsx)(u, {
                                ref: a,
                                children: o
                            })
                        });
                    m.displayName = d;
                    let b = e + "CollectionItemSlot",
                        g = "data-radix-collection-item",
                        h = (0, f.TL)(b),
                        v = n.forwardRef((e, r) => {
                            let {
                                scope: t,
                                children: o,
                                ...a
                            } = e, i = n.useRef(null), c = (0, s.s)(r, i), d = l(b, t);
                            return n.useEffect(() => (d.itemMap.set(i, {
                                ref: i,
                                ...a
                            }), () => void d.itemMap.delete(i))), (0, p.jsx)(h, { ...{
                                    [g]: ""
                                },
                                ref: c,
                                children: o
                            })
                        });
                    return v.displayName = b, [{
                        Provider: c,
                        Slot: m,
                        ItemSlot: v
                    }, function(r) {
                        let t = l(e + "CollectionConsumer", r);
                        return n.useCallback(() => {
                            let e = t.collectionRef.current;
                            if (!e) return [];
                            let r = Array.from(e.querySelectorAll("[".concat(g, "]")));
                            return Array.from(t.itemMap.values()).sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current))
                        }, [t.collectionRef, t.itemMap])
                    }, o]
                }(C),
                [M, I] = (0, i.A)(C, [A]),
                [S, P] = M(C),
                T = n.forwardRef((e, r) => (0, p.jsx)(j.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, p.jsx)(j.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, p.jsx)(O, { ...e,
                            ref: r
                        })
                    })
                }));
            T.displayName = C;
            var O = n.forwardRef((e, r) => {
                    let {
                        __scopeRovingFocusGroup: t,
                        orientation: o,
                        loop: a = !1,
                        dir: i,
                        currentTabStopId: d,
                        defaultCurrentTabStopId: u,
                        onCurrentTabStopIdChange: m,
                        onEntryFocus: f,
                        preventScrollOnEntryFocus: b = !1,
                        ...g
                    } = e, h = n.useRef(null), v = (0, s.s)(r, h), w = N(i), [y, x] = (0, k.i)({
                        prop: d,
                        defaultProp: null != u ? u : null,
                        onChange: m,
                        caller: C
                    }), [j, A] = n.useState(!1), M = function(e) {
                        let r = n.useRef(e);
                        return n.useEffect(() => {
                            r.current = e
                        }), n.useMemo(() => (...e) => r.current ? .(...e), [])
                    }(f), I = z(t), P = n.useRef(!1), [T, O] = n.useState(0);
                    return n.useEffect(() => {
                        let e = h.current;
                        if (e) return e.addEventListener(R, M), () => e.removeEventListener(R, M)
                    }, [M]), (0, p.jsx)(S, {
                        scope: t,
                        orientation: o,
                        dir: w,
                        loop: a,
                        currentTabStopId: y,
                        onItemFocus: n.useCallback(e => x(e), [x]),
                        onItemShiftTab: n.useCallback(() => A(!0), []),
                        onFocusableItemAdd: n.useCallback(() => O(e => e + 1), []),
                        onFocusableItemRemove: n.useCallback(() => O(e => e - 1), []),
                        children: (0, p.jsx)(c.sG.div, {
                            tabIndex: j || 0 === T ? -1 : 0,
                            "data-orientation": o,
                            ...g,
                            ref: v,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, l.m)(e.onMouseDown, () => {
                                P.current = !0
                            }),
                            onFocus: (0, l.m)(e.onFocus, e => {
                                let r = !P.current;
                                if (e.target === e.currentTarget && r && !j) {
                                    let r = new CustomEvent(R, E);
                                    if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                                        let e = I().filter(e => e.focusable);
                                        _([e.find(e => e.active), e.find(e => e.id === y), ...e].filter(Boolean).map(e => e.ref.current), b)
                                    }
                                }
                                P.current = !1
                            }),
                            onBlur: (0, l.m)(e.onBlur, () => A(!1))
                        })
                    })
                }),
                D = "RovingFocusGroupItem",
                L = n.forwardRef((e, r) => {
                    let {
                        __scopeRovingFocusGroup: t,
                        focusable: o = !0,
                        active: a = !1,
                        tabStopId: s,
                        children: i,
                        ...d
                    } = e, u = function(e) {
                        let [r, t] = n.useState(w());
                        return (0, v.N)(() => {
                            t(e => e ? ? String(y++))
                        }, [void 0]), e || (r ? `radix-${r}` : "")
                    }(), m = s || u, f = P(D, t), b = f.currentTabStopId === m, g = z(t), {
                        onFocusableItemAdd: h,
                        onFocusableItemRemove: k,
                        currentTabStopId: x
                    } = f;
                    return n.useEffect(() => {
                        if (o) return h(), () => k()
                    }, [o, h, k]), (0, p.jsx)(j.ItemSlot, {
                        scope: t,
                        id: m,
                        focusable: o,
                        active: a,
                        children: (0, p.jsx)(c.sG.span, {
                            tabIndex: b ? 0 : -1,
                            "data-orientation": f.orientation,
                            ...d,
                            ref: r,
                            onMouseDown: (0, l.m)(e.onMouseDown, e => {
                                o ? f.onItemFocus(m) : e.preventDefault()
                            }),
                            onFocus: (0, l.m)(e.onFocus, () => f.onItemFocus(m)),
                            onKeyDown: (0, l.m)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) return void f.onItemShiftTab();
                                if (e.target !== e.currentTarget) return;
                                let r = function(e, r, t) {
                                    var o;
                                    let n = (o = e.key, "rtl" !== t ? o : "ArrowLeft" === o ? "ArrowRight" : "ArrowRight" === o ? "ArrowLeft" : o);
                                    if (!("vertical" === r && ["ArrowLeft", "ArrowRight"].includes(n)) && !("horizontal" === r && ["ArrowUp", "ArrowDown"].includes(n))) return G[n]
                                }(e, f.orientation, f.dir);
                                if (void 0 !== r) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let t = g().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === r) t.reverse();
                                    else if ("prev" === r || "next" === r) {
                                        "prev" === r && t.reverse();
                                        let o = t.indexOf(e.currentTarget);
                                        t = f.loop ? function(e, r) {
                                            return e.map((t, o) => e[(r + o) % e.length])
                                        }(t, o + 1) : t.slice(o + 1)
                                    }
                                    setTimeout(() => _(t))
                                }
                            }),
                            children: "function" == typeof i ? i({
                                isCurrentTabStop: b,
                                hasTabStop: null != x
                            }) : i
                        })
                    })
                });
            L.displayName = D;
            var G = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function _(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = document.activeElement;
                for (let o of e)
                    if (o === t || (o.focus({
                            preventScroll: r
                        }), document.activeElement !== t)) return
            }
            var $ = t(1275),
                F = t(5503),
                W = t(8905),
                U = "Radio",
                [K, B] = (0, i.A)(U),
                [q, V] = K(U),
                X = n.forwardRef((e, r) => {
                    let {
                        __scopeRadio: t,
                        name: o,
                        checked: a = !1,
                        required: i,
                        disabled: d,
                        value: u = "on",
                        onCheck: m,
                        form: f,
                        ...b
                    } = e, [g, h] = n.useState(null), v = (0, s.s)(r, e => h(e)), w = n.useRef(!1), y = !g || f || !!g.closest("form");
                    return (0, p.jsxs)(q, {
                        scope: t,
                        checked: a,
                        disabled: d,
                        children: [(0, p.jsx)(c.sG.button, {
                            type: "button",
                            role: "radio",
                            "aria-checked": a,
                            "data-state": Y(a),
                            "data-disabled": d ? "" : void 0,
                            disabled: d,
                            value: u,
                            ...b,
                            ref: v,
                            onClick: (0, l.m)(e.onClick, e => {
                                a || null == m || m(), y && (w.current = e.isPropagationStopped(), w.current || e.stopPropagation())
                            })
                        }), y && (0, p.jsx)(Q, {
                            control: g,
                            bubbles: !w.current,
                            name: o,
                            value: u,
                            checked: a,
                            required: i,
                            disabled: d,
                            form: f,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            X.displayName = U;
            var Z = "RadioIndicator",
                H = n.forwardRef((e, r) => {
                    let {
                        __scopeRadio: t,
                        forceMount: o,
                        ...n
                    } = e, a = V(Z, t);
                    return (0, p.jsx)(W.C, {
                        present: o || a.checked,
                        children: (0, p.jsx)(c.sG.span, {
                            "data-state": Y(a.checked),
                            "data-disabled": a.disabled ? "" : void 0,
                            ...n,
                            ref: r
                        })
                    })
                });
            H.displayName = Z;
            var Q = n.forwardRef((e, r) => {
                let {
                    __scopeRadio: t,
                    control: o,
                    checked: a,
                    bubbles: l = !0,
                    ...i
                } = e, d = n.useRef(null), u = (0, s.s)(d, r), m = (0, F.Z)(a), f = (0, $.X)(o);
                return n.useEffect(() => {
                    let e = d.current;
                    if (!e) return;
                    let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (m !== a && r) {
                        let t = new Event("click", {
                            bubbles: l
                        });
                        r.call(e, a), e.dispatchEvent(t)
                    }
                }, [m, a, l]), (0, p.jsx)(c.sG.input, {
                    type: "radio",
                    "aria-hidden": !0,
                    defaultChecked: a,
                    ...i,
                    tabIndex: -1,
                    ref: u,
                    style: { ...i.style,
                        ...f,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            });

            function Y(e) {
                return e ? "checked" : "unchecked"
            }
            Q.displayName = "RadioBubbleInput";
            var J = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                ee = "RadioGroup",
                [er, et] = (0, i.A)(ee, [I, B]),
                eo = I(),
                en = B(),
                [ea, el] = er(ee),
                es = n.forwardRef((e, r) => {
                    let {
                        __scopeRadioGroup: t,
                        name: o,
                        defaultValue: n,
                        value: a,
                        required: l = !1,
                        disabled: s = !1,
                        orientation: i,
                        dir: d,
                        loop: u = !0,
                        onValueChange: m,
                        ...f
                    } = e, b = eo(t), g = N(d), [h, v] = (0, k.i)({
                        prop: a,
                        defaultProp: null != n ? n : "",
                        onChange: m,
                        caller: ee
                    });
                    return (0, p.jsx)(ea, {
                        scope: t,
                        name: o,
                        required: l,
                        disabled: s,
                        value: h,
                        onValueChange: v,
                        children: (0, p.jsx)(T, {
                            asChild: !0,
                            ...b,
                            orientation: i,
                            dir: g,
                            loop: u,
                            children: (0, p.jsx)(c.sG.div, {
                                role: "radiogroup",
                                "aria-required": l,
                                "aria-orientation": i,
                                "data-disabled": s ? "" : void 0,
                                dir: g,
                                ...f,
                                ref: r
                            })
                        })
                    })
                });
            es.displayName = ee;
            var ei = "RadioGroupItem",
                ec = n.forwardRef((e, r) => {
                    let {
                        __scopeRadioGroup: t,
                        disabled: o,
                        ...a
                    } = e, i = el(ei, t), c = i.disabled || o, d = eo(t), u = en(t), m = n.useRef(null), f = (0, s.s)(r, m), b = i.value === a.value, g = n.useRef(!1);
                    return n.useEffect(() => {
                        let e = e => {
                                J.includes(e.key) && (g.current = !0)
                            },
                            r = () => g.current = !1;
                        return document.addEventListener("keydown", e), document.addEventListener("keyup", r), () => {
                            document.removeEventListener("keydown", e), document.removeEventListener("keyup", r)
                        }
                    }, []), (0, p.jsx)(L, {
                        asChild: !0,
                        ...d,
                        focusable: !c,
                        active: b,
                        children: (0, p.jsx)(X, {
                            disabled: c,
                            required: i.required,
                            checked: b,
                            ...u,
                            ...a,
                            name: i.name,
                            ref: f,
                            onCheck: () => i.onValueChange(a.value),
                            onKeyDown: (0, l.m)(e => {
                                "Enter" === e.key && e.preventDefault()
                            }),
                            onFocus: (0, l.m)(a.onFocus, () => {
                                var e;
                                g.current && (null == (e = m.current) || e.click())
                            })
                        })
                    })
                });
            ec.displayName = ei;
            var ed = n.forwardRef((e, r) => {
                let {
                    __scopeRadioGroup: t,
                    ...o
                } = e, n = en(t);
                return (0, p.jsx)(H, { ...n,
                    ...o,
                    ref: r
                })
            });
            ed.displayName = "RadioGroupIndicator";
            var eu = es,
                em = ec,
                ef = ed
        },
        5185: (e, r, t) => {
            t.d(r, {
                m: () => o
            });

            function o(e, r, {
                checkForDefaultPrevented: t = !0
            } = {}) {
                return function(o) {
                    if (e ? .(o), !1 === t || !o.defaultPrevented) return r ? .(o)
                }
            }
        },
        5196: (e, r, t) => {
            t.d(r, {
                A: () => o
            });
            let o = (0, t(9946).A)("check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        5503: (e, r, t) => {
            t.d(r, {
                Z: () => n
            });
            var o = t(2115);

            function n(e) {
                let r = o.useRef({
                    value: e,
                    previous: e
                });
                return o.useMemo(() => (r.current.value !== e && (r.current.previous = r.current.value, r.current.value = e), r.current.previous), [e])
            }
        },
        5845: (e, r, t) => {
            t.d(r, {
                i: () => s
            });
            var o, n = t(2115),
                a = t(2712),
                l = (o || (o = t.t(n, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

            function s({
                prop: e,
                defaultProp: r,
                onChange: t = () => {},
                caller: o
            }) {
                let [a, s, i] = function({
                    defaultProp: e,
                    onChange: r
                }) {
                    let [t, o] = n.useState(e), a = n.useRef(t), s = n.useRef(r);
                    return l(() => {
                        s.current = r
                    }, [r]), n.useEffect(() => {
                        a.current !== t && (s.current ? .(t), a.current = t)
                    }, [t, a]), [t, o, s]
                }({
                    defaultProp: r,
                    onChange: t
                }), c = void 0 !== e, d = c ? e : a; {
                    let r = n.useRef(void 0 !== e);
                    n.useEffect(() => {
                        let e = r.current;
                        if (e !== c) {
                            let r = c ? "controlled" : "uncontrolled";
                            console.warn(`${o} is changing from ${e?"controlled":"uncontrolled"} to ${r}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                        }
                        r.current = c
                    }, [c, o])
                }
                return [d, n.useCallback(r => {
                    if (c) {
                        let t = "function" == typeof r ? r(e) : r;
                        t !== e && i.current ? .(t)
                    } else s(r)
                }, [c, e, s, i])]
            }
            Symbol("RADIX:SYNC_STATE")
        },
        6081: (e, r, t) => {
            t.d(r, {
                A: () => a
            });
            var o = t(2115),
                n = t(5155);

            function a(e, r = []) {
                let t = [],
                    l = () => {
                        let r = t.map(e => o.createContext(e));
                        return function(t) {
                            let n = t ? .[e] || r;
                            return o.useMemo(() => ({
                                [`__scope${e}`]: { ...t,
                                    [e]: n
                                }
                            }), [t, n])
                        }
                    };
                return l.scopeName = e, [function(r, a) {
                    let l = o.createContext(a),
                        s = t.length;
                    t = [...t, a];
                    let i = r => {
                        let {
                            scope: t,
                            children: a,
                            ...i
                        } = r, c = t ? .[e] ? .[s] || l, d = o.useMemo(() => i, Object.values(i));
                        return (0, n.jsx)(c.Provider, {
                            value: d,
                            children: a
                        })
                    };
                    return i.displayName = r + "Provider", [i, function(t, n) {
                        let i = n ? .[e] ? .[s] || l,
                            c = o.useContext(i);
                        if (c) return c;
                        if (void 0 !== a) return a;
                        throw Error(`\`${t}\` must be used within \`${r}\``)
                    }]
                }, function(...e) {
                    let r = e[0];
                    if (1 === e.length) return r;
                    let t = () => {
                        let t = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let n = t.reduce((r, {
                                useScope: t,
                                scopeName: o
                            }) => {
                                let n = t(e)[`__scope${o}`];
                                return { ...r,
                                    ...n
                                }
                            }, {});
                            return o.useMemo(() => ({
                                [`__scope${r.scopeName}`]: n
                            }), [n])
                        }
                    };
                    return t.scopeName = r.scopeName, t
                }(l, ...r)]
            }
        },
        6101: (e, r, t) => {
            t.d(r, {
                s: () => l,
                t: () => a
            });
            var o = t(2115);

            function n(e, r) {
                if ("function" == typeof e) return e(r);
                null != e && (e.current = r)
            }

            function a(...e) {
                return r => {
                    let t = !1,
                        o = e.map(e => {
                            let o = n(e, r);
                            return t || "function" != typeof o || (t = !0), o
                        });
                    if (t) return () => {
                        for (let r = 0; r < o.length; r++) {
                            let t = o[r];
                            "function" == typeof t ? t() : n(e[r], null)
                        }
                    }
                }
            }

            function l(...e) {
                return o.useCallback(a(...e), e)
            }
        },
        6981: (e, r, t) => {
            t.d(r, {
                C1: () => E,
                bL: () => R
            });
            var o = t(2115),
                n = t(6101),
                a = t(6081),
                l = t(5185),
                s = t(5845),
                i = t(5503),
                c = t(1275),
                d = t(8905),
                u = t(3655),
                m = t(5155),
                f = "Checkbox",
                [p, b] = (0, a.A)(f),
                [g, h] = p(f),
                v = o.forwardRef((e, r) => {
                    let {
                        __scopeCheckbox: t,
                        name: a,
                        checked: i,
                        defaultChecked: c,
                        required: d,
                        disabled: p,
                        value: b = "on",
                        onCheckedChange: h,
                        form: v,
                        ...w
                    } = e, [y, R] = o.useState(null), E = (0, n.s)(r, e => R(e)), C = o.useRef(!1), j = !y || v || !!y.closest("form"), [z, A] = (0, s.i)({
                        prop: i,
                        defaultProp: null != c && c,
                        onChange: h,
                        caller: f
                    }), M = o.useRef(z);
                    return o.useEffect(() => {
                        let e = null == y ? void 0 : y.form;
                        if (e) {
                            let r = () => A(M.current);
                            return e.addEventListener("reset", r), () => e.removeEventListener("reset", r)
                        }
                    }, [y, A]), (0, m.jsxs)(g, {
                        scope: t,
                        state: z,
                        disabled: p,
                        children: [(0, m.jsx)(u.sG.button, {
                            type: "button",
                            role: "checkbox",
                            "aria-checked": x(z) ? "mixed" : z,
                            "aria-required": d,
                            "data-state": N(z),
                            "data-disabled": p ? "" : void 0,
                            disabled: p,
                            value: b,
                            ...w,
                            ref: E,
                            onKeyDown: (0, l.m)(e.onKeyDown, e => {
                                "Enter" === e.key && e.preventDefault()
                            }),
                            onClick: (0, l.m)(e.onClick, e => {
                                A(e => !!x(e) || !e), j && (C.current = e.isPropagationStopped(), C.current || e.stopPropagation())
                            })
                        }), j && (0, m.jsx)(k, {
                            control: y,
                            bubbles: !C.current,
                            name: a,
                            value: b,
                            checked: z,
                            required: d,
                            disabled: p,
                            form: v,
                            style: {
                                transform: "translateX(-100%)"
                            },
                            defaultChecked: !x(c) && c
                        })]
                    })
                });
            v.displayName = f;
            var w = "CheckboxIndicator",
                y = o.forwardRef((e, r) => {
                    let {
                        __scopeCheckbox: t,
                        forceMount: o,
                        ...n
                    } = e, a = h(w, t);
                    return (0, m.jsx)(d.C, {
                        present: o || x(a.state) || !0 === a.state,
                        children: (0, m.jsx)(u.sG.span, {
                            "data-state": N(a.state),
                            "data-disabled": a.disabled ? "" : void 0,
                            ...n,
                            ref: r,
                            style: {
                                pointerEvents: "none",
                                ...e.style
                            }
                        })
                    })
                });
            y.displayName = w;
            var k = o.forwardRef((e, r) => {
                let {
                    __scopeCheckbox: t,
                    control: a,
                    checked: l,
                    bubbles: s = !0,
                    defaultChecked: d,
                    ...f
                } = e, p = o.useRef(null), b = (0, n.s)(p, r), g = (0, i.Z)(l), h = (0, c.X)(a);
                o.useEffect(() => {
                    let e = p.current;
                    if (!e) return;
                    let r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (g !== l && r) {
                        let t = new Event("click", {
                            bubbles: s
                        });
                        e.indeterminate = x(l), r.call(e, !x(l) && l), e.dispatchEvent(t)
                    }
                }, [g, l, s]);
                let v = o.useRef(!x(l) && l);
                return (0, m.jsx)(u.sG.input, {
                    type: "checkbox",
                    "aria-hidden": !0,
                    defaultChecked: null != d ? d : v.current,
                    ...f,
                    tabIndex: -1,
                    ref: b,
                    style: { ...f.style,
                        ...h,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            });

            function x(e) {
                return "indeterminate" === e
            }

            function N(e) {
                return x(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }
            k.displayName = "CheckboxBubbleInput";
            var R = v,
                E = y
        },
        8905: (e, r, t) => {
            t.d(r, {
                C: () => l
            });
            var o = t(2115),
                n = t(6101),
                a = t(2712),
                l = e => {
                    let {
                        present: r,
                        children: t
                    } = e, l = function(e) {
                        var r, t;
                        let [n, l] = o.useState(), i = o.useRef(null), c = o.useRef(e), d = o.useRef("none"), [u, m] = (r = e ? "mounted" : "unmounted", t = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, o.useReducer((e, r) => {
                            let o = t[e][r];
                            return null != o ? o : e
                        }, r));
                        return o.useEffect(() => {
                            let e = s(i.current);
                            d.current = "mounted" === u ? e : "none"
                        }, [u]), (0, a.N)(() => {
                            let r = i.current,
                                t = c.current;
                            if (t !== e) {
                                let o = d.current,
                                    n = s(r);
                                e ? m("MOUNT") : "none" === n || (null == r ? void 0 : r.display) === "none" ? m("UNMOUNT") : t && o !== n ? m("ANIMATION_OUT") : m("UNMOUNT"), c.current = e
                            }
                        }, [e, m]), (0, a.N)(() => {
                            if (n) {
                                var e;
                                let r, t = null != (e = n.ownerDocument.defaultView) ? e : window,
                                    o = e => {
                                        let o = s(i.current).includes(e.animationName);
                                        if (e.target === n && o && (m("ANIMATION_END"), !c.current)) {
                                            let e = n.style.animationFillMode;
                                            n.style.animationFillMode = "forwards", r = t.setTimeout(() => {
                                                "forwards" === n.style.animationFillMode && (n.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    a = e => {
                                        e.target === n && (d.current = s(i.current))
                                    };
                                return n.addEventListener("animationstart", a), n.addEventListener("animationcancel", o), n.addEventListener("animationend", o), () => {
                                    t.clearTimeout(r), n.removeEventListener("animationstart", a), n.removeEventListener("animationcancel", o), n.removeEventListener("animationend", o)
                                }
                            }
                            m("ANIMATION_END")
                        }, [n, m]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(u),
                            ref: o.useCallback(e => {
                                i.current = e ? getComputedStyle(e) : null, l(e)
                            }, [])
                        }
                    }(r), i = "function" == typeof t ? t({
                        present: l.isPresent
                    }) : o.Children.only(t), c = (0, n.s)(l.ref, function(e) {
                        var r, t;
                        let o = null == (r = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : r.get,
                            n = o && "isReactWarning" in o && o.isReactWarning;
                        return n ? e.ref : (n = (o = null == (t = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : t.get) && "isReactWarning" in o && o.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(i));
                    return "function" == typeof t || l.isPresent ? o.cloneElement(i, {
                        ref: c
                    }) : null
                };

            function s(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            l.displayName = "Presence"
        },
        9428: (e, r, t) => {
            t.d(r, {
                A: () => o
            });
            let o = (0, t(9946).A)("circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        9688: (e, r, t) => {
            t.d(r, {
                QP: () => ec
            });
            let o = e => {
                    let r = s(e),
                        {
                            conflictingClassGroups: t,
                            conflictingClassGroupModifiers: o
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let t = e.split("-");
                            return "" === t[0] && 1 !== t.length && t.shift(), n(t, r) || l(e)
                        },
                        getConflictingClassGroupIds: (e, r) => {
                            let n = t[e] || [];
                            return r && o[e] ? [...n, ...o[e]] : n
                        }
                    }
                },
                n = (e, r) => {
                    if (0 === e.length) return r.classGroupId;
                    let t = e[0],
                        o = r.nextPart.get(t),
                        a = o ? n(e.slice(1), o) : void 0;
                    if (a) return a;
                    if (0 === r.validators.length) return;
                    let l = e.join("-");
                    return r.validators.find(({
                        validator: e
                    }) => e(l)) ? .classGroupId
                },
                a = /^\[(.+)\]$/,
                l = e => {
                    if (a.test(e)) {
                        let r = a.exec(e)[1],
                            t = r ? .substring(0, r.indexOf(":"));
                        if (t) return "arbitrary.." + t
                    }
                },
                s = e => {
                    let {
                        theme: r,
                        classGroups: t
                    } = e, o = {
                        nextPart: new Map,
                        validators: []
                    };
                    for (let e in t) i(t[e], o, e, r);
                    return o
                },
                i = (e, r, t, o) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? r : c(r, e)).classGroupId = t;
                            return
                        }
                        if ("function" == typeof e) return d(e) ? void i(e(o), r, t, o) : void r.validators.push({
                            validator: e,
                            classGroupId: t
                        });
                        Object.entries(e).forEach(([e, n]) => {
                            i(n, c(r, e), t, o)
                        })
                    })
                },
                c = (e, r) => {
                    let t = e;
                    return r.split("-").forEach(e => {
                        t.nextPart.has(e) || t.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), t = t.nextPart.get(e)
                    }), t
                },
                d = e => e.isThemeGetter,
                u = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let r = 0,
                        t = new Map,
                        o = new Map,
                        n = (n, a) => {
                            t.set(n, a), ++r > e && (r = 0, o = t, t = new Map)
                        };
                    return {
                        get(e) {
                            let r = t.get(e);
                            return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0
                        },
                        set(e, r) {
                            t.has(e) ? t.set(e, r) : n(e, r)
                        }
                    }
                },
                m = e => {
                    let {
                        prefix: r,
                        experimentalParseClassName: t
                    } = e, o = e => {
                        let r, t = [],
                            o = 0,
                            n = 0,
                            a = 0;
                        for (let l = 0; l < e.length; l++) {
                            let s = e[l];
                            if (0 === o && 0 === n) {
                                if (":" === s) {
                                    t.push(e.slice(a, l)), a = l + 1;
                                    continue
                                }
                                if ("/" === s) {
                                    r = l;
                                    continue
                                }
                            }
                            "[" === s ? o++ : "]" === s ? o-- : "(" === s ? n++ : ")" === s && n--
                        }
                        let l = 0 === t.length ? e : e.substring(a),
                            s = f(l);
                        return {
                            modifiers: t,
                            hasImportantModifier: s !== l,
                            baseClassName: s,
                            maybePostfixModifierPosition: r && r > a ? r - a : void 0
                        }
                    };
                    if (r) {
                        let e = r + ":",
                            t = o;
                        o = r => r.startsWith(e) ? t(r.substring(e.length)) : {
                            isExternal: !0,
                            modifiers: [],
                            hasImportantModifier: !1,
                            baseClassName: r,
                            maybePostfixModifierPosition: void 0
                        }
                    }
                    if (t) {
                        let e = o;
                        o = r => t({
                            className: r,
                            parseClassName: e
                        })
                    }
                    return o
                },
                f = e => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e,
                p = e => {
                    let r = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, !0]));
                    return e => {
                        if (e.length <= 1) return e;
                        let t = [],
                            o = [];
                        return e.forEach(e => {
                            "[" === e[0] || r[e] ? (t.push(...o.sort(), e), o = []) : o.push(e)
                        }), t.push(...o.sort()), t
                    }
                },
                b = e => ({
                    cache: u(e.cacheSize),
                    parseClassName: m(e),
                    sortModifiers: p(e),
                    ...o(e)
                }),
                g = /\s+/,
                h = (e, r) => {
                    let {
                        parseClassName: t,
                        getClassGroupId: o,
                        getConflictingClassGroupIds: n,
                        sortModifiers: a
                    } = r, l = [], s = e.trim().split(g), i = "";
                    for (let e = s.length - 1; e >= 0; e -= 1) {
                        let r = s[e],
                            {
                                isExternal: c,
                                modifiers: d,
                                hasImportantModifier: u,
                                baseClassName: m,
                                maybePostfixModifierPosition: f
                            } = t(r);
                        if (c) {
                            i = r + (i.length > 0 ? " " + i : i);
                            continue
                        }
                        let p = !!f,
                            b = o(p ? m.substring(0, f) : m);
                        if (!b) {
                            if (!p || !(b = o(m))) {
                                i = r + (i.length > 0 ? " " + i : i);
                                continue
                            }
                            p = !1
                        }
                        let g = a(d).join(":"),
                            h = u ? g + "!" : g,
                            v = h + b;
                        if (l.includes(v)) continue;
                        l.push(v);
                        let w = n(b, p);
                        for (let e = 0; e < w.length; ++e) {
                            let r = w[e];
                            l.push(h + r)
                        }
                        i = r + (i.length > 0 ? " " + i : i)
                    }
                    return i
                };

            function v() {
                let e, r, t = 0,
                    o = "";
                for (; t < arguments.length;)(e = arguments[t++]) && (r = w(e)) && (o && (o += " "), o += r);
                return o
            }
            let w = e => {
                    let r;
                    if ("string" == typeof e) return e;
                    let t = "";
                    for (let o = 0; o < e.length; o++) e[o] && (r = w(e[o])) && (t && (t += " "), t += r);
                    return t
                },
                y = e => {
                    let r = r => r[e] || [];
                    return r.isThemeGetter = !0, r
                },
                k = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
                x = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
                N = /^\d+\/\d+$/,
                R = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                E = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                j = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                z = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                A = e => N.test(e),
                M = e => !!e && !Number.isNaN(Number(e)),
                I = e => !!e && Number.isInteger(Number(e)),
                S = e => e.endsWith("%") && M(e.slice(0, -1)),
                P = e => R.test(e),
                T = () => !0,
                O = e => E.test(e) && !C.test(e),
                D = () => !1,
                L = e => j.test(e),
                G = e => z.test(e),
                _ = e => !F(e) && !V(e),
                $ = e => ee(e, en, D),
                F = e => k.test(e),
                W = e => ee(e, ea, O),
                U = e => ee(e, el, M),
                K = e => ee(e, et, D),
                B = e => ee(e, eo, G),
                q = e => ee(e, ei, L),
                V = e => x.test(e),
                X = e => er(e, ea),
                Z = e => er(e, es),
                H = e => er(e, et),
                Q = e => er(e, en),
                Y = e => er(e, eo),
                J = e => er(e, ei, !0),
                ee = (e, r, t) => {
                    let o = k.exec(e);
                    return !!o && (o[1] ? r(o[1]) : t(o[2]))
                },
                er = (e, r, t = !1) => {
                    let o = x.exec(e);
                    return !!o && (o[1] ? r(o[1]) : t)
                },
                et = e => "position" === e || "percentage" === e,
                eo = e => "image" === e || "url" === e,
                en = e => "length" === e || "size" === e || "bg-size" === e,
                ea = e => "length" === e,
                el = e => "number" === e,
                es = e => "family-name" === e,
                ei = e => "shadow" === e;
            Symbol.toStringTag;
            let ec = function(e, ...r) {
                let t, o, n, a = function(s) {
                    return o = (t = b(r.reduce((e, r) => r(e), e()))).cache.get, n = t.cache.set, a = l, l(s)
                };

                function l(e) {
                    let r = o(e);
                    if (r) return r;
                    let a = h(e, t);
                    return n(e, a), a
                }
                return function() {
                    return a(v.apply(null, arguments))
                }
            }(() => {
                let e = y("color"),
                    r = y("font"),
                    t = y("text"),
                    o = y("font-weight"),
                    n = y("tracking"),
                    a = y("leading"),
                    l = y("breakpoint"),
                    s = y("container"),
                    i = y("spacing"),
                    c = y("radius"),
                    d = y("shadow"),
                    u = y("inset-shadow"),
                    m = y("text-shadow"),
                    f = y("drop-shadow"),
                    p = y("blur"),
                    b = y("perspective"),
                    g = y("aspect"),
                    h = y("ease"),
                    v = y("animate"),
                    w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                    x = () => [...k(), V, F],
                    N = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    R = () => ["auto", "contain", "none"],
                    E = () => [V, F, i],
                    C = () => [A, "full", "auto", ...E()],
                    j = () => [I, "none", "subgrid", V, F],
                    z = () => ["auto", {
                        span: ["full", I, V, F]
                    }, I, V, F],
                    O = () => [I, "auto", V, F],
                    D = () => ["auto", "min", "max", "fr", V, F],
                    L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                    G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                    ee = () => ["auto", ...E()],
                    er = () => [A, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()],
                    et = () => [e, V, F],
                    eo = () => [...k(), H, K, {
                        position: [V, F]
                    }],
                    en = () => ["no-repeat", {
                        repeat: ["", "x", "y", "space", "round"]
                    }],
                    ea = () => ["auto", "cover", "contain", Q, $, {
                        size: [V, F]
                    }],
                    el = () => [S, X, W],
                    es = () => ["", "none", "full", c, V, F],
                    ei = () => ["", M, X, W],
                    ec = () => ["solid", "dashed", "dotted", "double"],
                    ed = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    eu = () => [M, S, H, K],
                    em = () => ["", "none", p, V, F],
                    ef = () => ["none", M, V, F],
                    ep = () => ["none", M, V, F],
                    eb = () => [M, V, F],
                    eg = () => [A, "full", ...E()];
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ["spin", "ping", "pulse", "bounce"],
                        aspect: ["video"],
                        blur: [P],
                        breakpoint: [P],
                        color: [T],
                        container: [P],
                        "drop-shadow": [P],
                        ease: ["in", "out", "in-out"],
                        font: [_],
                        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                        "inset-shadow": [P],
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                        radius: [P],
                        shadow: [P],
                        spacing: ["px", M],
                        text: [P],
                        "text-shadow": [P],
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", A, F, V, g]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [M, F, V, s]
                        }],
                        "break-after": [{
                            "break-after": w()
                        }],
                        "break-before": [{
                            "break-before": w()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        sr: ["sr-only", "not-sr-only"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: x()
                        }],
                        overflow: [{
                            overflow: N()
                        }],
                        "overflow-x": [{
                            "overflow-x": N()
                        }],
                        "overflow-y": [{
                            "overflow-y": N()
                        }],
                        overscroll: [{
                            overscroll: R()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": R()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": R()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: C()
                        }],
                        "inset-x": [{
                            "inset-x": C()
                        }],
                        "inset-y": [{
                            "inset-y": C()
                        }],
                        start: [{
                            start: C()
                        }],
                        end: [{
                            end: C()
                        }],
                        top: [{
                            top: C()
                        }],
                        right: [{
                            right: C()
                        }],
                        bottom: [{
                            bottom: C()
                        }],
                        left: [{
                            left: C()
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: [I, "auto", V, F]
                        }],
                        basis: [{
                            basis: [A, "full", "auto", s, ...E()]
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["nowrap", "wrap", "wrap-reverse"]
                        }],
                        flex: [{
                            flex: [M, A, "auto", "initial", "none", F]
                        }],
                        grow: [{
                            grow: ["", M, V, F]
                        }],
                        shrink: [{
                            shrink: ["", M, V, F]
                        }],
                        order: [{
                            order: [I, "first", "last", "none", V, F]
                        }],
                        "grid-cols": [{
                            "grid-cols": j()
                        }],
                        "col-start-end": [{
                            col: z()
                        }],
                        "col-start": [{
                            "col-start": O()
                        }],
                        "col-end": [{
                            "col-end": O()
                        }],
                        "grid-rows": [{
                            "grid-rows": j()
                        }],
                        "row-start-end": [{
                            row: z()
                        }],
                        "row-start": [{
                            "row-start": O()
                        }],
                        "row-end": [{
                            "row-end": O()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": D()
                        }],
                        "auto-rows": [{
                            "auto-rows": D()
                        }],
                        gap: [{
                            gap: E()
                        }],
                        "gap-x": [{
                            "gap-x": E()
                        }],
                        "gap-y": [{
                            "gap-y": E()
                        }],
                        "justify-content": [{
                            justify: [...L(), "normal"]
                        }],
                        "justify-items": [{
                            "justify-items": [...G(), "normal"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", ...G()]
                        }],
                        "align-content": [{
                            content: ["normal", ...L()]
                        }],
                        "align-items": [{
                            items: [...G(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "align-self": [{
                            self: ["auto", ...G(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "place-content": [{
                            "place-content": L()
                        }],
                        "place-items": [{
                            "place-items": [...G(), "baseline"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", ...G()]
                        }],
                        p: [{
                            p: E()
                        }],
                        px: [{
                            px: E()
                        }],
                        py: [{
                            py: E()
                        }],
                        ps: [{
                            ps: E()
                        }],
                        pe: [{
                            pe: E()
                        }],
                        pt: [{
                            pt: E()
                        }],
                        pr: [{
                            pr: E()
                        }],
                        pb: [{
                            pb: E()
                        }],
                        pl: [{
                            pl: E()
                        }],
                        m: [{
                            m: ee()
                        }],
                        mx: [{
                            mx: ee()
                        }],
                        my: [{
                            my: ee()
                        }],
                        ms: [{
                            ms: ee()
                        }],
                        me: [{
                            me: ee()
                        }],
                        mt: [{
                            mt: ee()
                        }],
                        mr: [{
                            mr: ee()
                        }],
                        mb: [{
                            mb: ee()
                        }],
                        ml: [{
                            ml: ee()
                        }],
                        "space-x": [{
                            "space-x": E()
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": E()
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        size: [{
                            size: er()
                        }],
                        w: [{
                            w: [s, "screen", ...er()]
                        }],
                        "min-w": [{
                            "min-w": [s, "screen", "none", ...er()]
                        }],
                        "max-w": [{
                            "max-w": [s, "screen", "none", "prose", {
                                screen: [l]
                            }, ...er()]
                        }],
                        h: [{
                            h: ["screen", ...er()]
                        }],
                        "min-h": [{
                            "min-h": ["screen", "none", ...er()]
                        }],
                        "max-h": [{
                            "max-h": ["screen", ...er()]
                        }],
                        "font-size": [{
                            text: ["base", t, X, W]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: [o, V, U]
                        }],
                        "font-stretch": [{
                            "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", S, F]
                        }],
                        "font-family": [{
                            font: [Z, F, r]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: [n, V, F]
                        }],
                        "line-clamp": [{
                            "line-clamp": [M, "none", V, U]
                        }],
                        leading: [{
                            leading: [a, ...E()]
                        }],
                        "list-image": [{
                            "list-image": ["none", V, F]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "list-style-type": [{
                            list: ["disc", "decimal", "none", V, F]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "placeholder-color": [{
                            placeholder: et()
                        }],
                        "text-color": [{
                            text: et()
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...ec(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: [M, "from-font", "auto", V, W]
                        }],
                        "text-decoration-color": [{
                            decoration: et()
                        }],
                        "underline-offset": [{
                            "underline-offset": [M, "auto", V, F]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: E()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V, F]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        wrap: [{
                            wrap: ["break-word", "anywhere", "normal"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", V, F]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: eo()
                        }],
                        "bg-repeat": [{
                            bg: en()
                        }],
                        "bg-size": [{
                            bg: ea()
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                linear: [{
                                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, I, V, F],
                                radial: ["", V, F],
                                conic: [I, V, F]
                            }, Y, B]
                        }],
                        "bg-color": [{
                            bg: et()
                        }],
                        "gradient-from-pos": [{
                            from: el()
                        }],
                        "gradient-via-pos": [{
                            via: el()
                        }],
                        "gradient-to-pos": [{
                            to: el()
                        }],
                        "gradient-from": [{
                            from: et()
                        }],
                        "gradient-via": [{
                            via: et()
                        }],
                        "gradient-to": [{
                            to: et()
                        }],
                        rounded: [{
                            rounded: es()
                        }],
                        "rounded-s": [{
                            "rounded-s": es()
                        }],
                        "rounded-e": [{
                            "rounded-e": es()
                        }],
                        "rounded-t": [{
                            "rounded-t": es()
                        }],
                        "rounded-r": [{
                            "rounded-r": es()
                        }],
                        "rounded-b": [{
                            "rounded-b": es()
                        }],
                        "rounded-l": [{
                            "rounded-l": es()
                        }],
                        "rounded-ss": [{
                            "rounded-ss": es()
                        }],
                        "rounded-se": [{
                            "rounded-se": es()
                        }],
                        "rounded-ee": [{
                            "rounded-ee": es()
                        }],
                        "rounded-es": [{
                            "rounded-es": es()
                        }],
                        "rounded-tl": [{
                            "rounded-tl": es()
                        }],
                        "rounded-tr": [{
                            "rounded-tr": es()
                        }],
                        "rounded-br": [{
                            "rounded-br": es()
                        }],
                        "rounded-bl": [{
                            "rounded-bl": es()
                        }],
                        "border-w": [{
                            border: ei()
                        }],
                        "border-w-x": [{
                            "border-x": ei()
                        }],
                        "border-w-y": [{
                            "border-y": ei()
                        }],
                        "border-w-s": [{
                            "border-s": ei()
                        }],
                        "border-w-e": [{
                            "border-e": ei()
                        }],
                        "border-w-t": [{
                            "border-t": ei()
                        }],
                        "border-w-r": [{
                            "border-r": ei()
                        }],
                        "border-w-b": [{
                            "border-b": ei()
                        }],
                        "border-w-l": [{
                            "border-l": ei()
                        }],
                        "divide-x": [{
                            "divide-x": ei()
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": ei()
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "border-style": [{
                            border: [...ec(), "hidden", "none"]
                        }],
                        "divide-style": [{
                            divide: [...ec(), "hidden", "none"]
                        }],
                        "border-color": [{
                            border: et()
                        }],
                        "border-color-x": [{
                            "border-x": et()
                        }],
                        "border-color-y": [{
                            "border-y": et()
                        }],
                        "border-color-s": [{
                            "border-s": et()
                        }],
                        "border-color-e": [{
                            "border-e": et()
                        }],
                        "border-color-t": [{
                            "border-t": et()
                        }],
                        "border-color-r": [{
                            "border-r": et()
                        }],
                        "border-color-b": [{
                            "border-b": et()
                        }],
                        "border-color-l": [{
                            "border-l": et()
                        }],
                        "divide-color": [{
                            divide: et()
                        }],
                        "outline-style": [{
                            outline: [...ec(), "none", "hidden"]
                        }],
                        "outline-offset": [{
                            "outline-offset": [M, V, F]
                        }],
                        "outline-w": [{
                            outline: ["", M, X, W]
                        }],
                        "outline-color": [{
                            outline: et()
                        }],
                        shadow: [{
                            shadow: ["", "none", d, J, q]
                        }],
                        "shadow-color": [{
                            shadow: et()
                        }],
                        "inset-shadow": [{
                            "inset-shadow": ["none", u, J, q]
                        }],
                        "inset-shadow-color": [{
                            "inset-shadow": et()
                        }],
                        "ring-w": [{
                            ring: ei()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: et()
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [M, W]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": et()
                        }],
                        "inset-ring-w": [{
                            "inset-ring": ei()
                        }],
                        "inset-ring-color": [{
                            "inset-ring": et()
                        }],
                        "text-shadow": [{
                            "text-shadow": ["none", m, J, q]
                        }],
                        "text-shadow-color": [{
                            "text-shadow": et()
                        }],
                        opacity: [{
                            opacity: [M, V, F]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...ed(), "plus-darker", "plus-lighter"]
                        }],
                        "bg-blend": [{
                            "bg-blend": ed()
                        }],
                        "mask-clip": [{
                            "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                        }, "mask-no-clip"],
                        "mask-composite": [{
                            mask: ["add", "subtract", "intersect", "exclude"]
                        }],
                        "mask-image-linear-pos": [{
                            "mask-linear": [M]
                        }],
                        "mask-image-linear-from-pos": [{
                            "mask-linear-from": eu()
                        }],
                        "mask-image-linear-to-pos": [{
                            "mask-linear-to": eu()
                        }],
                        "mask-image-linear-from-color": [{
                            "mask-linear-from": et()
                        }],
                        "mask-image-linear-to-color": [{
                            "mask-linear-to": et()
                        }],
                        "mask-image-t-from-pos": [{
                            "mask-t-from": eu()
                        }],
                        "mask-image-t-to-pos": [{
                            "mask-t-to": eu()
                        }],
                        "mask-image-t-from-color": [{
                            "mask-t-from": et()
                        }],
                        "mask-image-t-to-color": [{
                            "mask-t-to": et()
                        }],
                        "mask-image-r-from-pos": [{
                            "mask-r-from": eu()
                        }],
                        "mask-image-r-to-pos": [{
                            "mask-r-to": eu()
                        }],
                        "mask-image-r-from-color": [{
                            "mask-r-from": et()
                        }],
                        "mask-image-r-to-color": [{
                            "mask-r-to": et()
                        }],
                        "mask-image-b-from-pos": [{
                            "mask-b-from": eu()
                        }],
                        "mask-image-b-to-pos": [{
                            "mask-b-to": eu()
                        }],
                        "mask-image-b-from-color": [{
                            "mask-b-from": et()
                        }],
                        "mask-image-b-to-color": [{
                            "mask-b-to": et()
                        }],
                        "mask-image-l-from-pos": [{
                            "mask-l-from": eu()
                        }],
                        "mask-image-l-to-pos": [{
                            "mask-l-to": eu()
                        }],
                        "mask-image-l-from-color": [{
                            "mask-l-from": et()
                        }],
                        "mask-image-l-to-color": [{
                            "mask-l-to": et()
                        }],
                        "mask-image-x-from-pos": [{
                            "mask-x-from": eu()
                        }],
                        "mask-image-x-to-pos": [{
                            "mask-x-to": eu()
                        }],
                        "mask-image-x-from-color": [{
                            "mask-x-from": et()
                        }],
                        "mask-image-x-to-color": [{
                            "mask-x-to": et()
                        }],
                        "mask-image-y-from-pos": [{
                            "mask-y-from": eu()
                        }],
                        "mask-image-y-to-pos": [{
                            "mask-y-to": eu()
                        }],
                        "mask-image-y-from-color": [{
                            "mask-y-from": et()
                        }],
                        "mask-image-y-to-color": [{
                            "mask-y-to": et()
                        }],
                        "mask-image-radial": [{
                            "mask-radial": [V, F]
                        }],
                        "mask-image-radial-from-pos": [{
                            "mask-radial-from": eu()
                        }],
                        "mask-image-radial-to-pos": [{
                            "mask-radial-to": eu()
                        }],
                        "mask-image-radial-from-color": [{
                            "mask-radial-from": et()
                        }],
                        "mask-image-radial-to-color": [{
                            "mask-radial-to": et()
                        }],
                        "mask-image-radial-shape": [{
                            "mask-radial": ["circle", "ellipse"]
                        }],
                        "mask-image-radial-size": [{
                            "mask-radial": [{
                                closest: ["side", "corner"],
                                farthest: ["side", "corner"]
                            }]
                        }],
                        "mask-image-radial-pos": [{
                            "mask-radial-at": k()
                        }],
                        "mask-image-conic-pos": [{
                            "mask-conic": [M]
                        }],
                        "mask-image-conic-from-pos": [{
                            "mask-conic-from": eu()
                        }],
                        "mask-image-conic-to-pos": [{
                            "mask-conic-to": eu()
                        }],
                        "mask-image-conic-from-color": [{
                            "mask-conic-from": et()
                        }],
                        "mask-image-conic-to-color": [{
                            "mask-conic-to": et()
                        }],
                        "mask-mode": [{
                            mask: ["alpha", "luminance", "match"]
                        }],
                        "mask-origin": [{
                            "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                        }],
                        "mask-position": [{
                            mask: eo()
                        }],
                        "mask-repeat": [{
                            mask: en()
                        }],
                        "mask-size": [{
                            mask: ea()
                        }],
                        "mask-type": [{
                            "mask-type": ["alpha", "luminance"]
                        }],
                        "mask-image": [{
                            mask: ["none", V, F]
                        }],
                        filter: [{
                            filter: ["", "none", V, F]
                        }],
                        blur: [{
                            blur: em()
                        }],
                        brightness: [{
                            brightness: [M, V, F]
                        }],
                        contrast: [{
                            contrast: [M, V, F]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", f, J, q]
                        }],
                        "drop-shadow-color": [{
                            "drop-shadow": et()
                        }],
                        grayscale: [{
                            grayscale: ["", M, V, F]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [M, V, F]
                        }],
                        invert: [{
                            invert: ["", M, V, F]
                        }],
                        saturate: [{
                            saturate: [M, V, F]
                        }],
                        sepia: [{
                            sepia: ["", M, V, F]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none", V, F]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": em()
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [M, V, F]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [M, V, F]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": ["", M, V, F]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [M, V, F]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": ["", M, V, F]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [M, V, F]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [M, V, F]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": ["", M, V, F]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": E()
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": E()
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": E()
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", V, F]
                        }],
                        "transition-behavior": [{
                            transition: ["normal", "discrete"]
                        }],
                        duration: [{
                            duration: [M, "initial", V, F]
                        }],
                        ease: [{
                            ease: ["linear", "initial", h, V, F]
                        }],
                        delay: [{
                            delay: [M, V, F]
                        }],
                        animate: [{
                            animate: ["none", v, V, F]
                        }],
                        backface: [{
                            backface: ["hidden", "visible"]
                        }],
                        perspective: [{
                            perspective: [b, V, F]
                        }],
                        "perspective-origin": [{
                            "perspective-origin": x()
                        }],
                        rotate: [{
                            rotate: ef()
                        }],
                        "rotate-x": [{
                            "rotate-x": ef()
                        }],
                        "rotate-y": [{
                            "rotate-y": ef()
                        }],
                        "rotate-z": [{
                            "rotate-z": ef()
                        }],
                        scale: [{
                            scale: ep()
                        }],
                        "scale-x": [{
                            "scale-x": ep()
                        }],
                        "scale-y": [{
                            "scale-y": ep()
                        }],
                        "scale-z": [{
                            "scale-z": ep()
                        }],
                        "scale-3d": ["scale-3d"],
                        skew: [{
                            skew: eb()
                        }],
                        "skew-x": [{
                            "skew-x": eb()
                        }],
                        "skew-y": [{
                            "skew-y": eb()
                        }],
                        transform: [{
                            transform: [V, F, "", "none", "gpu", "cpu"]
                        }],
                        "transform-origin": [{
                            origin: x()
                        }],
                        "transform-style": [{
                            transform: ["3d", "flat"]
                        }],
                        translate: [{
                            translate: eg()
                        }],
                        "translate-x": [{
                            "translate-x": eg()
                        }],
                        "translate-y": [{
                            "translate-y": eg()
                        }],
                        "translate-z": [{
                            "translate-z": eg()
                        }],
                        "translate-none": ["translate-none"],
                        accent: [{
                            accent: et()
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        "caret-color": [{
                            caret: et()
                        }],
                        "color-scheme": [{
                            scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V, F]
                        }],
                        "field-sizing": [{
                            "field-sizing": ["fixed", "content"]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["auto", "none"]
                        }],
                        resize: [{
                            resize: ["none", "", "y", "x"]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": E()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": E()
                        }],
                        "scroll-my": [{
                            "scroll-my": E()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": E()
                        }],
                        "scroll-me": [{
                            "scroll-me": E()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": E()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": E()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": E()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": E()
                        }],
                        "scroll-p": [{
                            "scroll-p": E()
                        }],
                        "scroll-px": [{
                            "scroll-px": E()
                        }],
                        "scroll-py": [{
                            "scroll-py": E()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": E()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": E()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": E()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": E()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": E()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": E()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", V, F]
                        }],
                        fill: [{
                            fill: ["none", ...et()]
                        }],
                        "stroke-w": [{
                            stroke: [M, X, W, U]
                        }],
                        stroke: [{
                            stroke: ["none", ...et()]
                        }],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        translate: ["translate-x", "translate-y", "translate-none"],
                        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    },
                    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
                }
            })
        },
        9708: (e, r, t) => {
            t.d(r, {
                DX: () => s,
                TL: () => l
            });
            var o = t(2115),
                n = t(6101),
                a = t(5155);

            function l(e) {
                let r = function(e) {
                        let r = o.forwardRef((e, r) => {
                            let {
                                children: t,
                                ...a
                            } = e;
                            if (o.isValidElement(t)) {
                                var l;
                                let e, s, i = (l = t, (s = (e = Object.getOwnPropertyDescriptor(l.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (s = (e = Object.getOwnPropertyDescriptor(l, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
                                    c = function(e, r) {
                                        let t = { ...r
                                        };
                                        for (let o in r) {
                                            let n = e[o],
                                                a = r[o];
                                            /^on[A-Z]/.test(o) ? n && a ? t[o] = (...e) => {
                                                a(...e), n(...e)
                                            } : n && (t[o] = n) : "style" === o ? t[o] = { ...n,
                                                ...a
                                            } : "className" === o && (t[o] = [n, a].filter(Boolean).join(" "))
                                        }
                                        return { ...e,
                                            ...t
                                        }
                                    }(a, t.props);
                                return t.type !== o.Fragment && (c.ref = r ? (0, n.t)(r, i) : i), o.cloneElement(t, c)
                            }
                            return o.Children.count(t) > 1 ? o.Children.only(null) : null
                        });
                        return r.displayName = `${e}.SlotClone`, r
                    }(e),
                    t = o.forwardRef((e, t) => {
                        let {
                            children: n,
                            ...l
                        } = e, s = o.Children.toArray(n), i = s.find(c);
                        if (i) {
                            let e = i.props.children,
                                n = s.map(r => r !== i ? r : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
                            return (0, a.jsx)(r, { ...l,
                                ref: t,
                                children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
                            })
                        }
                        return (0, a.jsx)(r, { ...l,
                            ref: t,
                            children: n
                        })
                    });
                return t.displayName = `${e}.Slot`, t
            }
            var s = l("Slot"),
                i = Symbol("radix.slottable");

            function c(e) {
                return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === i
            }
        },
        9946: (e, r, t) => {
            t.d(r, {
                A: () => u
            });
            var o = t(2115);
            let n = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                a = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, r, t) => t ? t.toUpperCase() : r.toLowerCase()),
                l = e => {
                    let r = a(e);
                    return r.charAt(0).toUpperCase() + r.slice(1)
                },
                s = function() {
                    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                    return r.filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r).join(" ").trim()
                },
                i = e => {
                    for (let r in e)
                        if (r.startsWith("aria-") || "role" === r || "title" === r) return !0
                };
            var c = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let d = (0, o.forwardRef)((e, r) => {
                    let {
                        color: t = "currentColor",
                        size: n = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: l,
                        className: d = "",
                        children: u,
                        iconNode: m,
                        ...f
                    } = e;
                    return (0, o.createElement)("svg", {
                        ref: r,
                        ...c,
                        width: n,
                        height: n,
                        stroke: t,
                        strokeWidth: l ? 24 * Number(a) / Number(n) : a,
                        className: s("lucide", d),
                        ...!u && !i(f) && {
                            "aria-hidden": "true"
                        },
                        ...f
                    }, [...m.map(e => {
                        let [r, t] = e;
                        return (0, o.createElement)(r, t)
                    }), ...Array.isArray(u) ? u : [u]])
                }),
                u = (e, r) => {
                    let t = (0, o.forwardRef)((t, a) => {
                        let {
                            className: i,
                            ...c
                        } = t;
                        return (0, o.createElement)(d, {
                            ref: a,
                            iconNode: r,
                            className: s("lucide-".concat(n(l(e))), "lucide-".concat(e), i),
                            ...c
                        })
                    });
                    return t.displayName = l(e), t
                }
        }
    }
]);