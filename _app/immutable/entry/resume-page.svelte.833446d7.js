import {
  S as q,
  i as I,
  s as N,
  k as s,
  r as H,
  a as m,
  l as o,
  m as d,
  u as R,
  h as c,
  c as _,
  p as u,
  b as O,
  H as e,
  n as S,
} from "../chunks/index.eb9e444d.js";
function T(k) {
  let t, r, p, f, b, v, g, x, E, j, l, y, B, i, n, C;
  return {
    c() {
      (t = s("section")),
        (r = s("h1")),
        (p = H("Contact")),
        (f = m()),
        (b = s("br")),
        (v = m()),
        (g = s("br")),
        (x = s("br")),
        (E = s("br")),
        (j = m()),
        (l = s("a")),
        (y = H("jordanlouiscarson@gmail.com")),
        (B = m()),
        (i = s("p")),
        (n = s("a")),
        (C = H("GitHub")),
        this.h();
    },
    l(h) {
      t = o(h, "SECTION", { class: !0 });
      var a = d(t);
      r = o(a, "H1", { class: !0 });
      var w = d(r);
      (p = R(w, "Contact")),
        w.forEach(c),
        (f = _(a)),
        (b = o(a, "BR", {})),
        (v = _(a)),
        (g = o(a, "BR", {})),
        (x = o(a, "BR", {})),
        (E = o(a, "BR", {})),
        (j = _(a)),
        (l = o(a, "A", { href: !0 }));
      var A = d(l);
      (y = R(A, "jordanlouiscarson@gmail.com")),
        A.forEach(c),
        (B = _(a)),
        (i = o(a, "P", {}));
      var G = d(i);
      n = o(G, "A", { href: !0 });
      var P = d(n);
      (C = R(P, "GitHub")), P.forEach(c), G.forEach(c), a.forEach(c), this.h();
    },
    h() {
      u(r, "class", "font-bold text-5xl svelte-tdow97"),
        u(l, "href", "mailto:jordanlouiscarson@gmail.com"),
        u(n, "href", "https://github.com/jordan-carson"),
        u(t, "class", "svelte-tdow97");
    },
    m(h, a) {
      O(h, t, a),
        e(t, r),
        e(r, p),
        e(t, f),
        e(t, b),
        e(t, v),
        e(t, g),
        e(t, x),
        e(t, E),
        e(t, j),
        e(t, l),
        e(l, y),
        e(t, B),
        e(t, i),
        e(i, n),
        e(n, C);
    },
    p: S,
    i: S,
    o: S,
    d(h) {
      h && c(t);
    },
  };
}
class D extends q {
  constructor(t) {
    super(), I(this, t, null, T, N, {});
  }
}
export { D as default };
