import {
  S as Ne,
  i as Le,
  s as Ae,
  k as g,
  r as P,
  a as k,
  e as Re,
  l as v,
  m as J,
  u as x,
  h as u,
  c as R,
  p as T,
  b as S,
  H as a,
  v as Fe,
  n as _e,
  z as Pe,
  E as xe,
  A as Oe,
  B as Be,
  M as we,
  g as Je,
  d as De,
  C as We,
  R as He,
} from "../chunks/index.eb9e444d.js";
function Se(N) {
  let i, w, C, r, d;
  return {
    c() {
      (i = g("meta")),
        (w = k()),
        (C = g("meta")),
        (r = k()),
        (d = g("meta")),
        this.h();
    },
    l(h) {
      (i = v(h, "META", { name: !0, content: !0 })),
        (w = R(h)),
        (C = v(h, "META", { name: !0, content: !0 })),
        (r = R(h)),
        (d = v(h, "META", { name: !0, content: !0 })),
        this.h();
    },
    h() {
      T(i, "name", "description"),
        T(i, "content", "Jordan Carson, AI ML Engineer in NYC."),
        T(C, "name", "og:title"),
        T(C, "content", "Jordan Carson"),
        T(d, "name", "og:description"),
        T(d, "content", "Jordan Carson, AI ML Engineer in NYC.");
    },
    m(h, E) {
      S(h, i, E), S(h, w, E), S(h, C, E), S(h, r, E), S(h, d, E);
    },
    d(h) {
      h && u(i), h && u(w), h && u(C), h && u(r), h && u(d);
    },
  };
}
function Ue(N) {
  let i,
    w,
    C,
    r,
    d,
    h,
    E,
    O,
    D,
    U,
    q,
    A,
    o = N[1] && Se();
  return {
    c() {
      (i = g("title")),
        (w = P(N[0])),
        (C = k()),
        (r = g("meta")),
        (d = k()),
        (h = g("meta")),
        (E = k()),
        (O = g("meta")),
        (D = k()),
        (U = g("meta")),
        (q = k()),
        o && o.c(),
        (A = Re()),
        this.h();
    },
    l(n) {
      i = v(n, "TITLE", {});
      var _ = J(i);
      (w = x(_, N[0])),
        _.forEach(u),
        (C = R(n)),
        (r = v(n, "META", { name: !0, content: !0, class: !0 })),
        (d = R(n)),
        (h = v(n, "META", { name: !0, content: !0 })),
        (E = R(n)),
        (O = v(n, "META", { name: !0, content: !0 })),
        (D = R(n)),
        (U = v(n, "META", { name: !0, content: !0 })),
        (q = R(n)),
        o && o.l(n),
        (A = Re()),
        this.h();
    },
    h() {
      T(r, "name", "title"),
        T(r, "content", N[0]),
        T(r, "class", "text-left"),
        T(h, "name", "keywords"),
        T(
          h,
          "content",
          `Python, Artificial Intelligence, Machine Learning, JavaScript, TypeScript, Blog, Blogger,
	Jordan, Carson, Jordan Carson, NYC, New York, United States`
        ),
        T(O, "name", "author"),
        T(O, "content", "Jordan Carson"),
        T(U, "name", "copyright"),
        T(U, "content", "Jordan Carson");
    },
    m(n, _) {
      S(n, i, _),
        a(i, w),
        S(n, C, _),
        S(n, r, _),
        S(n, d, _),
        S(n, h, _),
        S(n, E, _),
        S(n, O, _),
        S(n, D, _),
        S(n, U, _),
        S(n, q, _),
        o && o.m(n, _),
        S(n, A, _);
    },
    p(n, [_]) {
      _ & 1 && Fe(w, n[0]),
        _ & 1 && T(r, "content", n[0]),
        n[1]
          ? o || ((o = Se()), o.c(), o.m(A.parentNode, A))
          : o && (o.d(1), (o = null));
    },
    i: _e,
    o: _e,
    d(n) {
      n && u(i),
        n && u(C),
        n && u(r),
        n && u(d),
        n && u(h),
        n && u(E),
        n && u(O),
        n && u(D),
        n && u(U),
        n && u(q),
        o && o.d(n),
        n && u(A);
    },
  };
}
function Ve(N, i, w) {
  let { title: C = "" } = i,
    { details: r = !0 } = i;
  return (
    (N.$$set = (d) => {
      "title" in d && w(0, (C = d.title)),
        "details" in d && w(1, (r = d.details));
    }),
    [C, r]
  );
}
class ze extends Ne {
  constructor(i) {
    super(), Le(this, i, Ve, Ue, Ae, { title: 0, details: 1 });
  }
}
var Ee = {};
(function N(i, w, C, r) {
  var d = !!(
    i.Worker &&
    i.Blob &&
    i.Promise &&
    i.OffscreenCanvas &&
    i.OffscreenCanvasRenderingContext2D &&
    i.HTMLCanvasElement &&
    i.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    i.URL &&
    i.URL.createObjectURL
  );
  function h() {}
  function E(t) {
    var e = w.exports.Promise,
      f = e !== void 0 ? e : i.Promise;
    return typeof f == "function" ? new f(t) : (t(h, h), null);
  }
  var O = (function () {
      var t = Math.floor(16.666666666666668),
        e,
        f,
        s = {},
        p = 0;
      return (
        typeof requestAnimationFrame == "function" &&
        typeof cancelAnimationFrame == "function"
          ? ((e = function (m) {
              var l = Math.random();
              return (
                (s[l] = requestAnimationFrame(function c(b) {
                  p === b || p + t - 1 < b
                    ? ((p = b), delete s[l], m())
                    : (s[l] = requestAnimationFrame(c));
                })),
                l
              );
            }),
            (f = function (m) {
              s[m] && cancelAnimationFrame(s[m]);
            }))
          : ((e = function (m) {
              return setTimeout(m, t);
            }),
            (f = function (m) {
              return clearTimeout(m);
            })),
        { frame: e, cancel: f }
      );
    })(),
    D = (function () {
      var t,
        e,
        f = {};
      function s(p) {
        function m(l, c) {
          p.postMessage({ options: l || {}, callback: c });
        }
        (p.init = function (c) {
          var b = c.transferControlToOffscreen();
          p.postMessage({ canvas: b }, [b]);
        }),
          (p.fire = function (c, b, H) {
            if (e) return m(c, null), e;
            var M = Math.random().toString(36).slice(2);
            return (
              (e = E(function (F) {
                function L(y) {
                  y.data.callback === M &&
                    (delete f[M],
                    p.removeEventListener("message", L),
                    (e = null),
                    H(),
                    F());
                }
                p.addEventListener("message", L),
                  m(c, M),
                  (f[M] = L.bind(null, { data: { callback: M } }));
              })),
              e
            );
          }),
          (p.reset = function () {
            p.postMessage({ reset: !0 });
            for (var c in f) f[c](), delete f[c];
          });
      }
      return function () {
        if (t) return t;
        if (!C && d) {
          var p = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + N.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI && CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}",
          ].join(`
`);
          try {
            t = new Worker(URL.createObjectURL(new Blob([p])));
          } catch (m) {
            return (
              typeof console !== void 0 &&
                typeof console.warn == "function" &&
                console.warn("🎊 Could not load worker", m),
              null
            );
          }
          s(t);
        }
        return t;
      };
    })(),
    U = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function q(t, e) {
    return e ? e(t) : t;
  }
  function A(t) {
    return t != null;
  }
  function o(t, e, f) {
    return q(t && A(t[e]) ? t[e] : U[e], f);
  }
  function n(t) {
    return t < 0 ? 0 : Math.floor(t);
  }
  function _(t, e) {
    return Math.floor(Math.random() * (e - t)) + t;
  }
  function Q(t) {
    return parseInt(t, 16);
  }
  function oe(t) {
    return t.map(ee);
  }
  function ee(t) {
    var e = String(t).replace(/[^0-9a-f]/gi, "");
    return (
      e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
      {
        r: Q(e.substring(0, 2)),
        g: Q(e.substring(2, 4)),
        b: Q(e.substring(4, 6)),
      }
    );
  }
  function le(t) {
    var e = o(t, "origin", Object);
    return (e.x = o(e, "x", Number)), (e.y = o(e, "y", Number)), e;
  }
  function se(t) {
    (t.width = document.documentElement.clientWidth),
      (t.height = document.documentElement.clientHeight);
  }
  function ce(t) {
    var e = t.getBoundingClientRect();
    (t.width = e.width), (t.height = e.height);
  }
  function ue(t) {
    var e = document.createElement("canvas");
    return (
      (e.style.position = "fixed"),
      (e.style.top = "0px"),
      (e.style.left = "0px"),
      (e.style.pointerEvents = "none"),
      (e.style.zIndex = t),
      e
    );
  }
  function W(t, e, f, s, p, m, l, c, b) {
    t.save(),
      t.translate(e, f),
      t.rotate(m),
      t.scale(s, p),
      t.arc(0, 0, 1, l, c, b),
      t.restore();
  }
  function de(t) {
    var e = t.angle * (Math.PI / 180),
      f = t.spread * (Math.PI / 180);
    return {
      x: t.x,
      y: t.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: t.startVelocity * 0.5 + Math.random() * t.startVelocity,
      angle2D: -e + (0.5 * f - Math.random() * f),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: t.color,
      shape: t.shape,
      tick: 0,
      totalTicks: t.ticks,
      decay: t.decay,
      drift: t.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: t.gravity * 3,
      ovalScalar: 0.6,
      scalar: t.scalar,
    };
  }
  function fe(t, e) {
    (e.x += Math.cos(e.angle2D) * e.velocity + e.drift),
      (e.y += Math.sin(e.angle2D) * e.velocity + e.gravity),
      (e.wobble += e.wobbleSpeed),
      (e.velocity *= e.decay),
      (e.tiltAngle += 0.1),
      (e.tiltSin = Math.sin(e.tiltAngle)),
      (e.tiltCos = Math.cos(e.tiltAngle)),
      (e.random = Math.random() + 2),
      (e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble)),
      (e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble));
    var f = e.tick++ / e.totalTicks,
      s = e.x + e.random * e.tiltCos,
      p = e.y + e.random * e.tiltSin,
      m = e.wobbleX + e.random * e.tiltCos,
      l = e.wobbleY + e.random * e.tiltSin;
    if (
      ((t.fillStyle =
        "rgba(" +
        e.color.r +
        ", " +
        e.color.g +
        ", " +
        e.color.b +
        ", " +
        (1 - f) +
        ")"),
      t.beginPath(),
      e.shape === "circle")
    )
      t.ellipse
        ? t.ellipse(
            e.x,
            e.y,
            Math.abs(m - s) * e.ovalScalar,
            Math.abs(l - p) * e.ovalScalar,
            (Math.PI / 10) * e.wobble,
            0,
            2 * Math.PI
          )
        : W(
            t,
            e.x,
            e.y,
            Math.abs(m - s) * e.ovalScalar,
            Math.abs(l - p) * e.ovalScalar,
            (Math.PI / 10) * e.wobble,
            0,
            2 * Math.PI
          );
    else if (e.shape === "star")
      for (
        var c = (Math.PI / 2) * 3,
          b = 4 * e.scalar,
          H = 8 * e.scalar,
          M = e.x,
          F = e.y,
          L = 5,
          y = Math.PI / L;
        L--;

      )
        (M = e.x + Math.cos(c) * H),
          (F = e.y + Math.sin(c) * H),
          t.lineTo(M, F),
          (c += y),
          (M = e.x + Math.cos(c) * b),
          (F = e.y + Math.sin(c) * b),
          t.lineTo(M, F),
          (c += y);
    else
      t.moveTo(Math.floor(e.x), Math.floor(e.y)),
        t.lineTo(Math.floor(e.wobbleX), Math.floor(p)),
        t.lineTo(Math.floor(m), Math.floor(l)),
        t.lineTo(Math.floor(s), Math.floor(e.wobbleY));
    return t.closePath(), t.fill(), e.tick < e.totalTicks;
  }
  function te(t, e, f, s, p) {
    var m = e.slice(),
      l = t.getContext("2d"),
      c,
      b,
      H = E(function (M) {
        function F() {
          (c = b = null), l.clearRect(0, 0, s.width, s.height), p(), M();
        }
        function L() {
          C &&
            !(s.width === r.width && s.height === r.height) &&
            ((s.width = t.width = r.width), (s.height = t.height = r.height)),
            !s.width &&
              !s.height &&
              (f(t), (s.width = t.width), (s.height = t.height)),
            l.clearRect(0, 0, s.width, s.height),
            (m = m.filter(function (y) {
              return fe(l, y);
            })),
            m.length ? (c = O.frame(L)) : F();
        }
        (c = O.frame(L)), (b = F);
      });
    return {
      addFettis: function (M) {
        return (m = m.concat(M)), H;
      },
      canvas: t,
      promise: H,
      reset: function () {
        c && O.cancel(c), b && b();
      },
    };
  }
  function ae(t, e) {
    var f = !t,
      s = !!o(e || {}, "resize"),
      p = o(e, "disableForReducedMotion", Boolean),
      m = d && !!o(e || {}, "useWorker"),
      l = m ? D() : null,
      c = f ? se : ce,
      b = t && l ? !!t.__confetti_initialized : !1,
      H =
        typeof matchMedia == "function" &&
        matchMedia("(prefers-reduced-motion)").matches,
      M;
    function F(y, j, ne) {
      for (
        var V = o(y, "particleCount", n),
          $ = o(y, "angle", Number),
          K = o(y, "spread", Number),
          z = o(y, "startVelocity", Number),
          he = o(y, "decay", Number),
          ve = o(y, "gravity", Number),
          B = o(y, "drift", Number),
          Z = o(y, "colors", oe),
          I = o(y, "ticks", Number),
          Y = o(y, "shapes"),
          Ce = o(y, "scalar"),
          me = le(y),
          pe = V,
          ie = [],
          G = t.width * me.x,
          be = t.height * me.y;
        pe--;

      )
        ie.push(
          de({
            x: G,
            y: be,
            angle: $,
            spread: K,
            startVelocity: z,
            color: Z[pe % Z.length],
            shape: Y[_(0, Y.length)],
            ticks: I,
            decay: he,
            gravity: ve,
            drift: B,
            scalar: Ce,
          })
        );
      return M ? M.addFettis(ie) : ((M = te(t, ie, c, j, ne)), M.promise);
    }
    function L(y) {
      var j = p || o(y, "disableForReducedMotion", Boolean),
        ne = o(y, "zIndex", Number);
      if (j && H)
        return E(function (z) {
          z();
        });
      f && M
        ? (t = M.canvas)
        : f && !t && ((t = ue(ne)), document.body.appendChild(t)),
        s && !b && c(t);
      var V = { width: t.width, height: t.height };
      l && !b && l.init(t), (b = !0), l && (t.__confetti_initialized = !0);
      function $() {
        if (l) {
          var z = {
            getBoundingClientRect: function () {
              if (!f) return t.getBoundingClientRect();
            },
          };
          c(z), l.postMessage({ resize: { width: z.width, height: z.height } });
          return;
        }
        V.width = V.height = null;
      }
      function K() {
        (M = null),
          s && i.removeEventListener("resize", $),
          f && t && (document.body.removeChild(t), (t = null), (b = !1));
      }
      return (
        s && i.addEventListener("resize", $, !1),
        l ? l.fire(y, V, K) : F(y, V, K)
      );
    }
    return (
      (L.reset = function () {
        l && l.reset(), M && M.reset();
      }),
      L
    );
  }
  var re;
  function X() {
    return re || (re = ae(null, { useWorker: !0, resize: !0 })), re;
  }
  (w.exports = function () {
    return X().apply(this, arguments);
  }),
    (w.exports.reset = function () {
      X().reset();
    }),
    (w.exports.create = ae);
})(
  (function () {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
  })(),
  Ee,
  !1
);
const ge = Ee.exports;
Ee.exports.create;
function Ye(N) {
  let i,
    w,
    C,
    r,
    d,
    h,
    E,
    O,
    D,
    U,
    q,
    A,
    o,
    n,
    _,
    Q,
    oe,
    ee,
    le,
    se,
    ce,
    ue,
    W,
    de,
    fe,
    te,
    ae,
    re,
    X,
    t,
    e,
    f,
    s,
    p,
    m,
    l,
    c,
    b,
    H,
    M,
    F,
    L,
    y,
    j,
    ne,
    V,
    $,
    K,
    z,
    he,
    ve;
  return (
    (w = new ze({ props: { title: "Jordan Carson", details: !0 } })),
    {
      c() {
        (i = g("link")),
          Pe(w.$$.fragment),
          (C = k()),
          (r = g("section")),
          (d = g("h1")),
          (h = P(`Hi, I'm Jordan
		`)),
          (E = g("strong")),
          (O = k()),
          (D = g("div")),
          (U = P("👋")),
          (q = k()),
          (A = g("strong")),
          (o = k()),
          (n = g("br")),
          (_ = k()),
          (Q = g("br")),
          (oe = k()),
          (ee = g("p")),
          (le = P(
            "Mastering in AI and Computational Mathematics at Johns Hopkins University."
          )),
          (se = k()),
          (ce = g("br")),
          (ue = k()),
          (W = g("p")),
          (de = g("br")),
          (fe = P(`
			I enjoy `)),
          (te = g("strong")),
          (ae = P("blogging")),
          (re = P(" about engineering, scientific and ")),
          (X = g("strong")),
          (t = P("food")),
          (e = P(`.
			`)),
          (f = g("br")),
          (s = k()),
          (p = g("br")),
          (m = k()),
          (l = g("p")),
          (c = P("Lifelong learner, ")),
          (b = g("strong")),
          (H = P("open-source enthusiast")),
          (M = P(`, mainly working on ...this website,
			LLMs, ML Engineering, and a lot in between.`)),
          (F = k()),
          (L = g("br")),
          (y = k()),
          (j = g("p")),
          (ne = P("Also a huge ")),
          (V = g("strong")),
          ($ = P("skiier")),
          (K = P(".")),
          this.h();
      },
      l(B) {
        const Z = xe("svelte-np8q6v", document.head);
        (i = v(Z, "LINK", { href: !0, rel: !0 })),
          Oe(w.$$.fragment, Z),
          Z.forEach(u),
          (C = R(B)),
          (r = v(B, "SECTION", { class: !0 }));
        var I = J(r);
        d = v(I, "H1", { class: !0 });
        var Y = J(d);
        (h = x(
          Y,
          `Hi, I'm Jordan
		`
        )),
          (E = v(Y, "STRONG", {}));
        var Ce = J(E);
        Ce.forEach(u), (O = R(Y)), (D = v(Y, "DIV", { class: !0 }));
        var me = J(D);
        (U = x(me, "👋")), me.forEach(u), (q = R(Y)), (A = v(Y, "STRONG", {}));
        var pe = J(A);
        pe.forEach(u),
          (o = R(Y)),
          (n = v(Y, "BR", {})),
          Y.forEach(u),
          (_ = R(I)),
          (Q = v(I, "BR", {})),
          (oe = R(I)),
          (ee = v(I, "P", {}));
        var ie = J(ee);
        (le = x(
          ie,
          "Mastering in AI and Computational Mathematics at Johns Hopkins University."
        )),
          ie.forEach(u),
          (se = R(I)),
          (ce = v(I, "BR", {})),
          (ue = R(I)),
          (W = v(I, "P", {}));
        var G = J(W);
        (de = v(G, "BR", {})),
          (fe = x(
            G,
            `
			I enjoy `
          )),
          (te = v(G, "STRONG", {}));
        var be = J(te);
        (ae = x(be, "blogging")),
          be.forEach(u),
          (re = x(G, " about engineering, scientific and ")),
          (X = v(G, "STRONG", {}));
        var Te = J(X);
        (t = x(Te, "food")),
          Te.forEach(u),
          (e = x(
            G,
            `.
			`
          )),
          (f = v(G, "BR", {})),
          G.forEach(u),
          (s = R(I)),
          (p = v(I, "BR", {})),
          (m = R(I)),
          (l = v(I, "P", {}));
        var Me = J(l);
        (c = x(Me, "Lifelong learner, ")), (b = v(Me, "STRONG", {}));
        var Ie = J(b);
        (H = x(Ie, "open-source enthusiast")),
          Ie.forEach(u),
          (M = x(
            Me,
            `, mainly working on ...this website,
			LLMs, ML Engineering, and a lot in between.`
          )),
          Me.forEach(u),
          (F = R(I)),
          (L = v(I, "BR", {})),
          (y = R(I)),
          (j = v(I, "P", {}));
        var ye = J(j);
        (ne = x(ye, "Also a huge ")), (V = v(ye, "STRONG", {}));
        var ke = J(V);
        ($ = x(ke, "skiier")),
          ke.forEach(u),
          (K = x(ye, ".")),
          ye.forEach(u),
          I.forEach(u),
          this.h();
      },
      h() {
        T(
          i,
          "href",
          "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        ),
          T(i, "rel", "stylesheet"),
          T(D, "class", "wave svelte-17gijxl"),
          T(d, "class", "font-bold text-5xl"),
          T(r, "class", "svelte-17gijxl");
      },
      m(B, Z) {
        a(document.head, i),
          Be(w, document.head, null),
          S(B, C, Z),
          S(B, r, Z),
          a(r, d),
          a(d, h),
          a(d, E),
          a(d, O),
          a(d, D),
          a(D, U),
          a(d, q),
          a(d, A),
          a(d, o),
          a(d, n),
          a(r, _),
          a(r, Q),
          a(r, oe),
          a(r, ee),
          a(ee, le),
          a(r, se),
          a(r, ce),
          a(r, ue),
          a(r, W),
          a(W, de),
          a(W, fe),
          a(W, te),
          a(te, ae),
          a(W, re),
          a(W, X),
          a(X, t),
          a(W, e),
          a(W, f),
          a(r, s),
          a(r, p),
          a(r, m),
          a(r, l),
          a(l, c),
          a(l, b),
          a(b, H),
          a(l, M),
          a(r, F),
          a(r, L),
          a(r, y),
          a(r, j),
          a(j, ne),
          a(j, V),
          a(V, $),
          a(j, K),
          (z = !0),
          he ||
            ((ve = [
              we(E, "mouseover", N[0]),
              we(E, "focus", N[0]),
              we(A, "mouseover", N[0]),
              we(A, "focus", N[0]),
            ]),
            (he = !0));
      },
      p: _e,
      i(B) {
        z || (Je(w.$$.fragment, B), (z = !0));
      },
      o(B) {
        De(w.$$.fragment, B), (z = !1);
      },
      d(B) {
        u(i), We(w), B && u(C), B && u(r), (he = !1), He(ve);
      },
    }
  );
}
function je(N) {
  let i = 0;
  function w(C) {
    if (i + 1111 > Date.now()) return;
    i = Date.now();
    const r = {
      disableForReducedMotion: !0,
      origin: { x: C.x / window.innerWidth, y: (C.y - 1) / window.innerHeight },
    };
    ge({
      ...r,
      spread: 26,
      startVelocity: 55,
      particleCount: Math.floor(200 * 0.25),
    }),
      ge({ ...r, spread: 60, particleCount: Math.floor(200 * 0.2) }),
      ge({
        ...r,
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        particleCount: Math.floor(200 * 0.35),
      }),
      ge({
        ...r,
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        particleCount: Math.floor(200 * 0.1),
      }),
      ge({
        ...r,
        spread: 120,
        startVelocity: 45,
        particleCount: Math.floor(200 * 0.1),
      });
  }
  return [w];
}
class Ge extends Ne {
  constructor(i) {
    super(), Le(this, i, je, Ye, Ae, {});
  }
}
export { Ge as default };
