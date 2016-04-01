//	HYPE.documents["DYC-M"]

(function () {
    (function k() {
        var f = "DYC-M.hyperesources", d = "DYC-M", c = "dycm_hype_container";
        if (false == !1)try {
            for (var g = document.getElementsByTagName("script"), a = 0; a < g.length; a++) {
                var b = g[a].src;
                if (null != b && -1 != b.indexOf("dycm_hype_generated_script.js")) {
                    f = b.substr(0, b.lastIndexOf("/"));
                    break
                }
            }
        } catch (m) {
        }
        if (false == !1 && null == window.HYPE_458)null == window.HYPE_dtl_458 ? (window.HYPE_dtl_458 = [], window.HYPE_dtl_458.push(k), d = document.getElementsByTagName("head")[0], c = document.createElement("script"),
            a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null, c.type = "text/javascript", c.src = f + "/" + (!0 == (null != a && 10 > a || false == !0) ? "HYPE-458.full.min.js" : "HYPE-458.thin.min.js"), d.appendChild(c)) : window.HYPE_dtl_458.push(k); else {
            window.HYPE_dtl_458 = [];
            g = window.HYPE.documents;
            if (null != g[d]) {
                b = 1;
                a = d;
                do d = "" + a + "-" + b++; while (null != g[d]);
                for (var e = document.getElementsByTagName("div"), b = !1, a = 0; a < e.length; a++)if (e[a].id == c && null == e[a].getAttribute("HYP_dn")) {
                    var b =
                        1, h = c;
                    do c = "" + h + "-" + b++; while (null != document.getElementById(c));
                    e[a].id = c;
                    b = !0;
                    break
                }
                if (!1 == b)return
            }
            b = [];
            b = [];
            e = {};
            h = {};
            for (a = 0; a < b.length; a++)try {
                h[b[a].identifier] = b[a].name, e[b[a].name] = eval("(function(){return " + b[a].source + "})();")
            } catch (l) {
                window.console && window.console.log(l), e[b[a].name] = function () {
                }
            }
            f = new HYPE_458(d, c, {
                    "7": {p: 1, n: "01content.png", g: "19", t: "@1x"},
                    "3": {p: 1, n: "01circle2.png", g: "11", t: "@1x"},
                    "8": {p: 1, n: "01circle-1.png", g: "70", o: true, t: "@1x"},
                    "4": {p: 1, n: "01title.png", g: "13", t: "@1x"},
                    "0": {p: 1, n: "01bg.png", g: "4", t: "@1x"},
                    "9": {p: 1, n: "01circle-1%402x.png", g: "70", o: true, t: "@2x"},
                    "5": {p: 1, n: "01logo.png", g: "15", t: "@1x"},
                    "1": {p: 1, n: "01circle.png", g: "6", t: "@1x"},
                    "6": {p: 1, n: "01dot.png", g: "17", t: "@1x"},
                    "2": {p: 1, n: "01circle1.png", g: "8", t: "@1x"}
                }, f, [], e, [{n: "\u672a\u547d\u540d\u573a\u666f", o: "1", X: [0, 1]}], [{
                    o: "66",
                    p: "600px",
                    x: 0,
                    a: 100,
                    Z: 568,
                    cA: false,
                    Y: 320,
                    b: 100,
                    c: "#FFFFFF",
                    L: [],
                    bY: 1,
                    d: 320,
                    U: {},
                    T: {
                        kTimelineDefaultIdentifier: {
                            i: "kTimelineDefaultIdentifier",
                            n: "\u4e3b\u65f6\u95f4\u7ebf",
                            z: 10,
                            b: [],
                            a: [{f: "33", y: 0, z: 10, i: "f", e: 360, s: 0, o: "83"}, {
                                f: "b",
                                y: 0,
                                z: 10,
                                i: "f",
                                e: -360,
                                s: 0,
                                o: "89"
                            }, {
                                f: "c",
                                p: 2,
                                y: 10,
                                z: 0,
                                i: "ActionHandler",
                                s: {a: [{i: 0, b: "kTimelineDefaultIdentifier", p: 9, symbolOid: "56"}]},
                                o: "kTimelineDefaultIdentifier"
                            }, {y: 10, i: "f", s: 360, z: 0, o: "83", f: "c"}, {
                                y: 10,
                                i: "f",
                                s: -360,
                                z: 0,
                                o: "89",
                                f: "c"
                            }],
                            f: 30
                        }
                    },
                    bZ: 180,
                    O: ["80", "86", "85", "84", "87", "88", "83", "89", "82", "81"],
                    v: {
                        "86": {
                            w: "",
                            h: "13",
                            p: "no-repeat",
                            x: "visible",
                            a: 96,
                            q: "100% 100%",
                            b: 80,
                            j: "absolute",
                            bF: "82",
                            z: 7,
                            k: "div",
                            c: 97,
                            d: 31,
                            r: "inline"
                        },
                        "81": {
                            h: "4",
                            p: "no-repeat",
                            x: "visible",
                            a: 0,
                            q: "100% 100%",
                            bS: 191,
                            j: "absolute",
                            b: 0,
                            c: 320,
                            k: "div",
                            z: 1,
                            d: 568,
                            r: "inline"
                        },
                        "89": {
                            h: "70",
                            p: "no-repeat",
                            x: "visible",
                            a: -15,
                            q: "100% 100%",
                            b: -13,
                            j: "absolute",
                            bF: "82",
                            z: 1,
                            k: "div",
                            c: 320,
                            d: 316.99059561128524,
                            r: "inline",
                            f: 0
                        },
                        "84": {
                            h: "8",
                            p: "no-repeat",
                            x: "visible",
                            a: 42,
                            q: "100% 100%",
                            b: 44,
                            j: "absolute",
                            bF: "82",
                            c: 206,
                            k: "div",
                            z: 5,
                            d: 206,
                            r: "inline"
                        },
                        "87": {
                            h: "11",
                            p: "no-repeat",
                            x: "visible",
                            a: 42,
                            q: "100% 100%",
                            b: 44,
                            j: "absolute",
                            bF: "82",
                            z: 4,
                            k: "div",
                            c: 206,
                            d: 206,
                            r: "inline",
                            f: 360
                        },
                        "82": {k: "div", x: "visible", c: 290, d: 292, z: 3, a: 15, j: "absolute", bS: 109, b: 163},
                        "85": {
                            h: "19",
                            p: "no-repeat",
                            x: "visible",
                            a: 111,
                            q: "100% 100%",
                            b: 149,
                            j: "absolute",
                            bF: "82",
                            c: 67,
                            k: "div",
                            z: 6,
                            d: 54,
                            r: "inline"
                        },
                        "80": {
                            h: "15",
                            p: "no-repeat",
                            x: "visible",
                            a: 130,
                            q: "100% 100%",
                            bS: 69,
                            j: "absolute",
                            b: 51,
                            c: 60,
                            k: "div",
                            z: 6,
                            d: 58,
                            r: "inline"
                        },
                        "88": {
                            h: "6",
                            p: "no-repeat",
                            x: "visible",
                            a: 42,
                            q: "100% 100%",
                            b: 44,
                            j: "absolute",
                            bF: "82",
                            c: 206,
                            k: "div",
                            z: 3,
                            d: 206,
                            r: "inline"
                        },
                        "83": {
                            bR: 0,
                            w: "",
                            h: "17",
                            p: "no-repeat",
                            x: "visible",
                            a: -5,
                            q: "100% 100%",
                            b: -3,
                            j: "absolute",
                            bF: "82",
                            z: 2,
                            k: "div",
                            c: 300,
                            d: 297,
                            r: "inline",
                            aY: 0,
                            f: 0
                        }
                    }
                }, {
                    o: "3",
                    p: "600px",
                    x: 1,
                    a: 100,
                    Z: 1136,
                    cA: false,
                    Y: 640,
                    b: 100,
                    c: "#FFFFFF",
                    L: [],
                    bY: 1,
                    d: 640,
                    U: {},
                    T: {
                        kTimelineDefaultIdentifier: {
                            i: "kTimelineDefaultIdentifier",
                            n: "\u4e3b\u65f6\u95f4\u7ebf",
                            z: 3.02,
                            b: [],
                            a: [{f: "33", y: 0, z: 3.02, i: "f", e: 360, s: 0, o: "98"}, {
                                y: 3.02,
                                i: "f",
                                s: 360,
                                z: 0,
                                o: "98",
                                f: "c"
                            }],
                            f: 30
                        }
                    },
                    bZ: 180,
                    O: ["90", "94", "97", "96", "95", "93", "98", "92", "91"],
                    v: {
                        "91": {
                            h: "4",
                            p: "no-repeat",
                            x: "visible",
                            a: 0,
                            q: "100% 100%",
                            b: 0,
                            j: "absolute",
                            r: "inline",
                            c: 640,
                            k: "div",
                            z: 1,
                            d: 1136
                        },
                        "94": {
                            h: "13",
                            p: "no-repeat",
                            x: "visible",
                            a: 108,
                            q: "100% 100%",
                            b: 86,
                            j: "absolute",
                            bF: "92",
                            c: 195,
                            k: "div",
                            z: 6,
                            d: 63,
                            r: "inline"
                        },
                        "97": {
                            h: "19",
                            p: "no-repeat",
                            x: "visible",
                            a: 138,
                            q: "100% 100%",
                            b: 206,
                            j: "absolute",
                            bF: "92",
                            c: 135,
                            k: "div",
                            z: 5,
                            d: 108,
                            r: "inline"
                        },
                        "92": {k: "div", x: "visible", c: 412, d: 412, z: 3, a: 114, j: "absolute", bS: 127, b: 337},
                        "95": {
                            h: "8",
                            p: "no-repeat",
                            x: "visible",
                            a: 0,
                            q: "100% 100%",
                            b: 0,
                            j: "absolute",
                            bF: "92",
                            c: 412,
                            k: "div",
                            z: 3,
                            d: 412,
                            r: "inline"
                        },
                        "90": {
                            h: "15",
                            p: "no-repeat",
                            x: "visible",
                            a: 282,
                            q: "100% 100%",
                            bS: 127,
                            j: "absolute",
                            b: 75,
                            c: 75,
                            k: "div",
                            z: 6,
                            d: 72,
                            r: "inline"
                        },
                        "98": {
                            bR: 0,
                            h: "17",
                            p: "no-repeat",
                            x: "visible",
                            a: -113,
                            q: "100% 100%",
                            b: -110,
                            j: "absolute",
                            bF: "92",
                            z: 1,
                            k: "div",
                            c: 638,
                            d: 632,
                            r: "inline",
                            aY: 0,
                            f: 0
                        },
                        "93": {
                            h: "6",
                            p: "no-repeat",
                            x: "visible",
                            a: 0,
                            q: "100% 100%",
                            b: 0,
                            j: "absolute",
                            bF: "92",
                            c: 412,
                            k: "div",
                            z: 2,
                            d: 412,
                            r: "inline"
                        },
                        "96": {
                            h: "11",
                            p: "no-repeat",
                            x: "visible",
                            a: 0,
                            q: "100% 100%",
                            b: 0,
                            j: "absolute",
                            bF: "92",
                            z: 4,
                            k: "div",
                            c: 412,
                            d: 412,
                            r: "inline",
                            f: 347
                        }
                    }
                }], {}, h, {"33": [[0, 0, 0, 0, 0.2654, 0.2654, 0.5227, 0.5227], [0.5227, 0.5227, 0.7649, 0.7649, 1, 1, 1, 1]]},
                0, false, false, true, -1, true, true, true);
            g[d] = f.API;
            document.getElementById(c).setAttribute("HYP_dn", d);
            f.z_o(this.body)
        }
    })();
})();
