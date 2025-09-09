(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        61: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 6804))
        },
        6804: (e, s, a) => {
            "use strict";
            a.r(s), a.d(s, {
                default: () => w
            });
            var t = a(5155),
                l = a(2115),
                i = a(4840),
                r = a(9428),
                d = a(2596),
                o = a(9688);

            function n() {
                for (var e = arguments.length, s = Array(e), a = 0; a < e; a++) s[a] = arguments[a];
                return (0, o.QP)((0, d.$)(s))
            }
            let c = l.forwardRef((e, s) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, t.jsx)(i.bL, {
                    className: n("grid gap-2", a),
                    ...l,
                    ref: s
                })
            });
            c.displayName = i.bL.displayName;
            let m = l.forwardRef((e, s) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, t.jsx)(i.q7, {
                    ref: s,
                    className: n("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", a),
                    ...l,
                    children: (0, t.jsx)(i.C1, {
                        className: "flex items-center justify-center",
                        children: (0, t.jsx)(r.A, {
                            className: "h-3.5 w-3.5 fill-primary"
                        })
                    })
                })
            });
            m.displayName = i.q7.displayName;
            var x = a(968),
                b = a(2085);
            let f = (0, b.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                h = l.forwardRef((e, s) => {
                    let {
                        className: a,
                        ...l
                    } = e;
                    return (0, t.jsx)(x.b, {
                        ref: s,
                        className: n(f(), a),
                        ...l
                    })
                });
            h.displayName = x.b.displayName;
            let p = l.forwardRef((e, s) => {
                let {
                    className: a,
                    type: l,
                    ...i
                } = e;
                return (0, t.jsx)("input", {
                    type: l,
                    className: n("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", a),
                    ref: s,
                    ...i
                })
            });
            p.displayName = "Input";
            var u = a(9708);
            let v = (0, b.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-9 px-4 py-2",
                            sm: "h-8 rounded-md px-3 text-xs",
                            lg: "h-10 rounded-md px-8",
                            icon: "h-9 w-9"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                g = l.forwardRef((e, s) => {
                    let {
                        className: a,
                        variant: l,
                        size: i,
                        asChild: r = !1,
                        ...d
                    } = e, o = r ? u.DX : "button";
                    return (0, t.jsx)(o, {
                        className: n(v({
                            variant: l,
                            size: i,
                            className: a
                        })),
                        ref: s,
                        ...d
                    })
                });
            g.displayName = "Button";
            var k = a(6981),
                N = a(5196);
            let y = l.forwardRef((e, s) => {
                let {
                    className: a,
                    ...l
                } = e;
                return (0, t.jsx)(k.bL, {
                    ref: s,
                    className: n("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", a),
                    ...l,
                    children: (0, t.jsx)(k.C1, {
                        className: n("flex items-center justify-center text-current"),
                        children: (0, t.jsx)(N.A, {
                            className: "h-4 w-4"
                        })
                    })
                })
            });

            function j(e) {
                let {
                    index: s,
                    data: a,
                    updateHouse: l,
                    fixStake: i
                } = e;
                return (0, t.jsxs)("div", {
                    className: "bg-white rounded-lg p-6 border border-[#E60000]",
                    children: [(0, t.jsxs)("h3", {
                        className: "text-[#E60000] text-lg mb-4",
                        children: ["Casa ", s + 1]
                    }), (0, t.jsxs)("div", {
                        className: "space-y-4",
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)(h, {
                                htmlFor: "odd-".concat(s),
                                className: "text-black mb-1 block",
                                children: "Odd"
                            }), (0, t.jsx)(p, {
                                id: "odd-".concat(s),
                                type: "number",
                                min: "1",
                                step: "0.01",
                                value: a.odd,
                                onChange: e => {
                                    let s = e.target.value,
                                        t = {
                                            odd: s
                                        };
                                    if (a.lay) {
                                        let e = parseFloat(a.stake) || 0,
                                            l = parseFloat(s) || 0;
                                        e > 0 && l > 1 && (t.responsibility = (e * (l - 1)).toFixed(2))
                                    }
                                    l(t)
                                },
                                className: "bg-white border-[#E60000] text-black"
                            })]
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsxs)(h, {
                                className: "text-black mb-1 block",
                                children: ["Odd Final: ", a.finalOdd.toFixed(2)]
                            })
                        }), (0, t.jsxs)("div", {
                            children: [a.lay && (0, t.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, t.jsx)(h, {
                                    htmlFor: "responsibility-".concat(s),
                                    className: "text-black mb-1 block",
                                    children: "Responsabilidade"
                                }), (0, t.jsxs)("div", {
                                    className: "relative w-full",
                                    children: [(0, t.jsx)("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-black",
                                        children: "R$"
                                    }), (0, t.jsx)(p, {
                                        id: "responsibility-".concat(s),
                                        type: "number",
                                        min: "0",
                                        step: "0.01",
                                        value: a.responsibility,
                                        onChange: e => {
                                            let s = e.target.value,
                                                t = {
                                                    responsibility: s
                                                };
                                            if (a.lay) {
                                                let e = parseFloat(a.odd) || 0,
                                                    l = parseFloat(s) || 0;
                                                l > 0 && e > 1 ? t.stake = (l / (e - 1)).toFixed(2) : t.stake = ""
                                            }
                                            l(t)
                                        },
                                        className: "bg-white border-[#E60000] text-black pl-10 w-full"
                                    })]
                                })]
                            }), (0, t.jsx)(h, {
                                htmlFor: "stake-".concat(s),
                                className: "text-black mb-1 block",
                                children: "Stake"
                            }), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsxs)("div", {
                                    className: "relative flex-1",
                                    children: [(0, t.jsx)("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-black",
                                        children: "R$"
                                    }), (0, t.jsx)(p, {
                                        id: "stake-".concat(s),
                                        type: "number",
                                        min: "0",
                                        step: "0.01",
                                        value: a.stake,
                                        onChange: e => {
                                            let s = e.target.value,
                                                t = {
                                                    stake: s
                                                };
                                            if (a.lay) {
                                                let e = parseFloat(a.odd) || 0,
                                                    l = parseFloat(s) || 0;
                                                l > 0 && e > 1 && (t.responsibility = (l * (e - 1)).toFixed(2))
                                            }
                                            l(t)
                                        },
                                        className: "bg-white border-[#E60000] text-black pl-10 w-full"
                                    })]
                                }), (0, t.jsx)(g, {
                                    variant: "secondary",
                                    className: "bg-[#E60000] hover:bg-[#cc0000] text-white w-12",
                                    onClick: () => {
                                        if (a.lay) l({
                                            lay: !1
                                        });
                                        else {
                                            let e = parseFloat(a.stake) || 0,
                                                s = parseFloat(a.odd) || 0,
                                                t = {
                                                    lay: !0
                                                };
                                            e > 0 && s > 1 && (t.responsibility = (e * (s - 1)).toFixed(2)), l(t)
                                        }
                                    },
                                    children: a.lay ? "L" : "B"
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0, t.jsx)(y, {
                                    id: "commission-".concat(s),
                                    checked: null !== a.commission,
                                    onCheckedChange: e => l({
                                        commission: e ? 0 : null
                                    }),
                                    className: "border-[#E60000] data-[state=checked]:bg-[#E60000]"
                                }), (0, t.jsx)(h, {
                                    htmlFor: "commission-".concat(s),
                                    className: "text-black",
                                    children: "Comiss\xe3o"
                                })]
                            }), null !== a.commission && (0, t.jsxs)("div", {
                                className: "pl-6",
                                children: [(0, t.jsx)(h, {
                                    htmlFor: "commission-value-".concat(s),
                                    className: "text-black",
                                    children: "Valor da Comiss\xe3o (%)"
                                }), (0, t.jsxs)("div", {
                                    className: "relative flex-1",
                                    children: [(0, t.jsx)(p, {
                                        id: "commission-value-".concat(s),
                                        type: "number",
                                        min: "0",
                                        max: "100",
                                        step: "0.1",
                                        value: 0 === a.commission && document.activeElement === document.getElementById("commission-value-".concat(s)) ? "" : a.commission.toString(),
                                        onChange: e => {
                                            let s = e.target.value;
                                            if ("" === s) l({
                                                commission: 0
                                            });
                                            else {
                                                let e = parseFloat(s);
                                                isNaN(e) || l({
                                                    commission: e
                                                })
                                            }
                                        },
                                        onBlur: e => {
                                            "" === e.target.value && l({
                                                commission: 0
                                            })
                                        },
                                        className: "bg-white border-[#E60000] text-black pl-10"
                                    }), (0, t.jsx)("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-black",
                                        children: "%"
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [(0, t.jsx)(y, {
                                id: "freebet-".concat(s),
                                checked: a.freebet,
                                onCheckedChange: e => l({
                                    freebet: !0 === e
                                }),
                                className: "border-[#E60000] data-[state=checked]:bg-[#E60000]"
                            }), (0, t.jsx)(h, {
                                htmlFor: "freebet-".concat(s),
                                className: "text-black",
                                children: "Freebet"
                            })]
                        }), (0, t.jsx)(g, {
                            className: "w-full bg-[#E60000] hover:bg-[#cc0000] text-white",
                            onClick: i,
                            children: a.fixedStake ? "Stake Fixa" : "Fixar Stake"
                        })]
                    })]
                })
            }

            function F() {
                let [e, s] = (0, l.useState)(2), [a, i] = (0, l.useState)(() => [, , , , , ].fill(null).map((e, s) => ({
                    odd: "",
                    increase: "",
                    finalOdd: 0,
                    stake: "100",
                    commission: null,
                    freebet: !1,
                    fixedStake: 0 === s,
                    lay: !1,
                    responsibility: ""
                }))), [r, d] = (0, l.useState)({}), [o, x] = (0, l.useState)({
                    profits: [],
                    totalStake: 0,
                    roi: 0
                });
                (0, l.useEffect)(() => {
                    if (0 === a.length) return;
                    let s = a.slice(0, e),
                        t = s.findIndex(e => e.fixedStake);
                    if (-1 === t) return void b(s);
                    let l = s[t],
                        d = parseFloat(l.stake) || 0,
                        o = l.finalOdd;
                    if (d <= 0 || o <= 0) return void b(s);
                    let n = [...a],
                        c = !1;
                    s.forEach((e, s) => {
                        let a = r[s] || {},
                            i = parseFloat(e.odd) || 0,
                            m = parseFloat(e.stake) || 0;
                        if (e.lay && !a.responsibility && i > 1 && m > 0) {
                            let a = m * (i - 1);
                            Math.abs(parseFloat(e.responsibility) - a) > .01 && (c = !0, n[s] = { ...e,
                                responsibility: a.toFixed(2)
                            })
                        }
                        if (s !== t && e.finalOdd > 0 && !a.stake) {
                            let a, t = l.commission || 0,
                                r = e.commission || 0,
                                m = d * o * (1 - t / 100);
                            if (a = e.lay ? m / (e.finalOdd - r / 100) : m / (e.finalOdd * (1 - r / 100)), Math.abs((parseFloat(e.stake) || 0) - a) > .01)
                                if (c = !0, e.lay) {
                                    let t = a * (i - 1);
                                    n[s] = { ...e,
                                        stake: a.toFixed(2),
                                        responsibility: t.toFixed(2),
                                        fixedStake: !1
                                    }
                                } else n[s] = { ...e,
                                    stake: a.toFixed(2),
                                    fixedStake: !1
                                }
                        }
                    }), c ? i(n) : b(s)
                }, [a, e, r]);
                let b = e => {
                        let s = 0,
                            a = [];
                        e.forEach(e => {
                            e.freebet || (e.lay ? s += parseFloat(e.responsibility) || 0 : s += parseFloat(e.stake) || 0)
                        }), e.forEach((e, t) => {
                            let l = parseFloat(e.stake) || 0,
                                i = e.finalOdd || 0,
                                r = e.commission || 0;
                            if (e.lay) {
                                let i = parseFloat(e.responsibility) || 0,
                                    d = l * (1 - r / 100) - (s - i);
                                a[t] = d
                            } else if (e.freebet) {
                                let e = l * i - s;
                                a[t] = e - (e > 0 ? r / 100 * e : 0)
                            } else {
                                let e = l * i - s;
                                a[t] = e - (e > 0 ? r / 100 * e : 0)
                            }
                        });
                        let t = Math.min(...a),
                            l = s > 0 ? t / s * 100 : 0;
                        x({
                            profits: a,
                            totalStake: s,
                            roi: l
                        })
                    },
                    f = (e, s) => {
                        let t = [...a],
                            l = { ...t[e],
                                ...s
                            },
                            o = { ...r[e]
                            };
                        void 0 !== s.stake && (o.stake = !0), void 0 !== s.responsibility && (o.responsibility = !0), void 0 !== s.odd && (o.odd = !0), void 0 !== s.commission && (o.commission = !0), void 0 !== s.odd && (l.odd = s.odd), void 0 !== s.stake && (l.stake = s.stake);
                        let n = parseFloat(l.odd) || 0,
                            c = parseFloat(l.increase) || 0;
                        if (!0 === s.freebet || l.freebet ? l.finalOdd = Math.max(n - 1, 0) : l.finalOdd = n * (1 + c / 100), l.lay && !o.responsibility && n > 1) {
                            let e = parseFloat(l.stake) || 0;
                            l.responsibility = (e * (n - 1)).toFixed(2)
                        }
                        t[e] = l, d({ ...r,
                            [e]: o
                        }), i(t)
                    },
                    p = e => {
                        let s = [...a];
                        s.forEach((s, a) => {
                            a !== e && (s.fixedStake = !1)
                        }), s[e].fixedStake = !s[e].fixedStake, i(s)
                    };
                return (0, t.jsxs)("div", {
                    className: "flex flex-col gap-6",
                    children: [(0, t.jsxs)("div", {
                        className: "bg-white rounded-lg p-6",
                        children: [(0, t.jsx)("h2", {
                            className: "text-black text-xl mb-4",
                            children: "Configura\xe7\xf5es"
                        }), (0, t.jsx)("p", {
                            className: "text-black mb-2",
                            children: "N\xfamero de Casas:"
                        }), (0, t.jsx)(c, {
                            value: e.toString(),
                            onValueChange: e => s(parseInt(e)),
                            className: "flex gap-4 mt-2",
                            children: [2, 3, 4, 5].map(e => (0, t.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0, t.jsx)(m, {
                                    value: e.toString(),
                                    id: "r".concat(e),
                                    className: "text-[#E60000] border-[#E60000]"
                                }), (0, t.jsxs)(h, {
                                    htmlFor: "r".concat(e),
                                    className: "text-black",
                                    children: [e, " Casas"]
                                })]
                            }, e))
                        })]
                    }), (0, t.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: a.slice(0, e).map((e, s) => (0, t.jsx)(j, {
                            index: s,
                            data: e,
                            updateHouse: e => f(s, e),
                            fixStake: () => p(s)
                        }, s))
                    }), (0, t.jsxs)("div", {
                        className: "bg-white rounded-lg p-6",
                        children: [(0, t.jsx)("h2", {
                            className: "text-[#E60000] text-xl mb-4",
                            children: "Resultados"
                        }), (0, t.jsxs)("div", {
                            className: "bg-white rounded-lg overflow-hidden border border-[#E60000]",
                            children: [(0, t.jsxs)("div", {
                                className: "grid grid-cols-3 text-black p-4 border-b border-[#E60000] font-semibold",
                                children: [(0, t.jsx)("div", {
                                    children: "CASA"
                                }), (0, t.jsx)("div", {
                                    children: "STAKE"
                                }), (0, t.jsx)("div", {
                                    children: "LUCRO"
                                })]
                            }), a.slice(0, e).map((e, s) => (0, t.jsxs)("div", {
                                className: "grid grid-cols-3 p-4 border-b border-[#E60000]",
                                children: [(0, t.jsxs)("div", {
                                    className: "text-black",
                                    children: ["Casa ", s + 1]
                                }), (0, t.jsx)("div", {
                                    className: "text-black",
                                    children: e.lay ? "R$ ".concat(parseFloat(e.responsibility || "0").toFixed(2)) : "R$ ".concat(parseFloat(e.stake || "0").toFixed(2))
                                }), (0, t.jsxs)("div", {
                                    className: n(o.profits[s] >= 0 ? "text-green-500" : "text-[#E60000]"),
                                    children: [o.profits[s] >= 0 ? "R$ " : "-R$ ", Math.abs(o.profits[s] || 0).toFixed(2)]
                                })]
                            }, s))]
                        }), (0, t.jsxs)("div", {
                            className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [(0, t.jsxs)("div", {
                                className: "bg-white p-4 rounded-lg border border-[#E60000]",
                                children: [(0, t.jsx)("div", {
                                    className: "text-black mb-1",
                                    children: "Total Investido:"
                                }), (0, t.jsxs)("div", {
                                    className: "text-xl text-black",
                                    children: ["R$ ", o.totalStake.toFixed(2)]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "bg-white p-4 rounded-lg border border-[#E60000]",
                                children: [(0, t.jsx)("div", {
                                    className: "text-black mb-1",
                                    children: "ROI M\xe9dio:"
                                }), (0, t.jsxs)("div", {
                                    className: "text-xl text-black",
                                    children: [o.roi >= 0 ? "+" : "", o.roi.toFixed(2), "%"]
                                })]
                            })]
                        })]
                    })]
                })
            }

            function w() {
                return (0, t.jsx)("main", {
                    className: "min-h-screen p-4 md:p-8",
                    children: (0, t.jsx)("div", {
                        className: "max-w-6xl mx-auto",
                        children: (0, t.jsx)(F, {})
                    })
                })
            }
            y.displayName = k.bL.displayName
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [133, 441, 684, 358], () => s(61)), _N_E = e.O()
    }
]);