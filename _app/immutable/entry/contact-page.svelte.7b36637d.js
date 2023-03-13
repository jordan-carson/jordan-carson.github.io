import {
  S as I,
  i as N,
  s as O,
  k as s,
  r as H,
  a as p,
  l as r,
  m,
  u as R,
  h as c,
  c as _,
  p as d,
  b as T,
  H as e,
  n as S,
} from "../chunks/index.eb9e444d.js";
function w(q) {
  let t, l, u, f, b, g, v, x, E, j, o, y, B, i, n, C;
  return {
    c() {
      (t = s("section")),
        (l = s("h1")),
        (u = H("Contact")),
        (f = p()),
        (b = s("br")),
        (g = p()),
        (v = s("br")),
        (x = s("br")),
        (E = s("br")),
        (j = p()),
        (o = s("a")),
        (y = H("jordanlouiscarson@gmail.com")),
        (B = p()),
        (i = s("p")),
        (n = s("a")),
        (C = H("GitHub")),
        this.h();
    },
    l(h) {
      t = r(h, "SECTION", { class: !0 });
      var a = m(t);
      l = r(a, "H1", { class: !0 });
      var A = m(l);
      (u = R(A, "Contact")),
        A.forEach(c),
        (f = _(a)),
        (b = r(a, "BR", {})),
        (g = _(a)),
        (v = r(a, "BR", {})),
        (x = r(a, "BR", {})),
        (E = r(a, "BR", {})),
        (j = _(a)),
        (o = r(a, "A", { href: !0 }));
      var G = m(o);
      (y = R(G, "jordanlouiscarson@gmail.com")),
        G.forEach(c),
        (B = _(a)),
        (i = r(a, "P", {}));
      var P = m(i);
      n = r(P, "A", { href: !0 });
      var k = m(n);
      (C = R(k, "GitHub")), k.forEach(c), P.forEach(c), a.forEach(c), this.h();
    },
    h() {
      d(l, "class", "font-bold text-5xl svelte-tpssge"),
        d(o, "href", "mailto:jordanlouiscarson@gmail.com"),
        d(n, "href", "https://github.com/jordan-carson"),
        d(t, "class", "svelte-tpssge");
    },
    m(h, a) {
      T(h, t, a),
        e(t, l),
        e(l, u),
        e(t, f),
        e(t, b),
        e(t, g),
        e(t, v),
        e(t, x),
        e(t, E),
        e(t, j),
        e(t, o),
        e(o, y),
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
class D extends I {
  constructor(t) {
    super(), N(this, t, null, w, O, {});
  }
}
export { D as default };
