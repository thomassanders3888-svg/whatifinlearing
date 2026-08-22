/* Shared WhatIfInlearing navigation — include as /nav.js on every page */
(function () {
  if (window.__wilNav) return;
  window.__wilNav = true;

  var GROUPS = [
    {
      label: "Play",
      items: [
        { href: "/", label: "Home" },
        { href: "/worth-adventure/", label: "Worth Adventure" },
        { href: "/attune/", label: "Attune" },
      ],
    },
    {
      label: "Finance",
      items: [
        { href: "/freelance-calc/", label: "Freelance Rate" },
        { href: "/tax-software/", label: "Tax Tools" },
        { href: "/salary-negotiate/", label: "Salary Negotiator" },
        { href: "/startup-cost/", label: "Startup Cost" },
        { href: "/indie-revenue/", label: "Indie Revenue" },
        { href: "/crypto/", label: "Crypto Dash" },
        { href: "/carbon/", label: "Carbon Credits" },
      ],
    },
    {
      label: "Build",
      items: [
        { href: "/ai-side-hustle/", label: "AI Side Hustle" },
        { href: "/creator-stack/", label: "Creator Stack" },
        { href: "/nocode-hub/", label: "No-Code Hub" },
        { href: "/nocode-tools/", label: "No-Code Tools" },
        { href: "/saas-monitor/", label: "SaaS Monitor" },
        { href: "/saas-templates/", label: "SaaS Templates" },
        { href: "/startup-inc/", label: "Startup Inc" },
        { href: "/marketing-tools/", label: "Marketing" },
      ],
    },
    {
      label: "Career",
      items: [
        { href: "/nuke-jobs/", label: "Nuclear Jobs" },
        { href: "/nuke-calc/", label: "Nuke Calc" },
        { href: "/remote-visa/", label: "Remote Visa" },
      ],
    },
    {
      label: "Utilities",
      items: [
        { href: "/calendly-alts/", label: "Calendly Alts" },
        { href: "/charter/", label: "Charter Estimate" },
        { href: "/couponhub/", label: "Coupon Hub" },
        { href: "/tasks/", label: "Tasks" },
      ],
    },
  ];

  var css = [
    "#wil-nav{position:sticky;top:0;z-index:50;font-family:Figtree,system-ui,sans-serif;background:rgba(12,13,16,.92);backdrop-filter:blur(12px);border-bottom:1px solid #2a2b32;color:#ece8e1}",
    "#wil-nav a{color:inherit;text-decoration:none}",
    "#wil-nav .bar{max-width:72rem;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.7rem 1rem}",
    "#wil-nav .brand{display:flex;align-items:center;gap:.6rem;font-weight:600;letter-spacing:-.02em}",
    "#wil-nav .brand svg{width:1.1rem;height:1.1rem}",
    "#wil-nav .links{display:flex;flex-wrap:wrap;gap:.15rem;align-items:center}",
    "#wil-nav .links > a, #wil-nav .drop > button{display:inline-flex;align-items:center;gap:.25rem;min-height:2.5rem;padding:.35rem .75rem;border-radius:.5rem;border:0;background:transparent;color:#9a958c;font:500 .9rem Figtree,system-ui,sans-serif;cursor:pointer}",
    "#wil-nav .links > a:hover, #wil-nav .drop > button:hover, #wil-nav .links > a.on{background:#1c1d24;color:#ece8e1}",
    "#wil-nav .drop{position:relative}",
    "#wil-nav .menu{display:none;position:absolute;right:0;top:100%;min-width:16rem;background:#14151a;border:1px solid #2a2b32;border-radius:.9rem;padding:.5rem;box-shadow:0 24px 50px -24px rgba(0,0,0,.7)}",
    "#wil-nav .drop:hover .menu, #wil-nav .drop:focus-within .menu, #wil-nav .drop.open .menu{display:grid;grid-template-columns:1fr 1fr;gap:.15rem}",
    "#wil-nav .menu a{display:block;padding:.55rem .65rem;border-radius:.45rem;color:#9a958c;font-size:.85rem}",
    "#wil-nav .menu a:hover{background:#1c1d24;color:#ece8e1}",
    "#wil-nav .burger{display:none;width:2.75rem;height:2.75rem;border:0;border-radius:.5rem;background:transparent;color:#ece8e1;font-size:1.2rem;cursor:pointer}",
    "#wil-nav .drawer{display:none;border-top:1px solid #2a2b32;padding:.5rem 1rem 1rem;background:#14151a}",
    "#wil-nav .drawer a{display:block;padding:.7rem .4rem;color:#ece8e1}",
    "#wil-nav .drawer .g{margin-top:.75rem;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:#6e6a64}",
    "@media(max-width:860px){#wil-nav .links{display:none}#wil-nav .burger{display:grid;place-items:center}#wil-nav.open .drawer{display:block}}",
  ].join("");

  function path() {
    return (location.pathname.replace(/\/+$/, "") || "/") + "/";
  }

  function isOn(href) {
    var p = path();
    if (href === "/") return p === "/";
    return p.indexOf(href) === 0;
  }

  function mount() {
    if (document.getElementById("wil-nav")) return;
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var nav = document.createElement("header");
    nav.id = "wil-nav";
    var play = GROUPS[0].items
      .map(function (i) {
        return '<a class="' + (isOn(i.href) ? "on" : "") + '" href="' + i.href + '">' + i.label + "</a>";
      })
      .join("");
    var toolLinks = GROUPS.slice(1)
      .map(function (g) {
        return g.items
          .map(function (i) {
            return '<a href="' + i.href + '">' + i.label + "</a>";
          })
          .join("");
      })
      .join("");
    var drawer = GROUPS.map(function (g) {
      return (
        '<div class="g">' +
        g.label +
        "</div>" +
        g.items
          .map(function (i) {
            return '<a href="' + i.href + '">' + i.label + "</a>";
          })
          .join("")
      );
    }).join("");

    nav.innerHTML =
      '<div class="bar">' +
      '<a class="brand" href="/"><svg viewBox="0 0 16 16" fill="none" stroke="#8fa39a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="1,12 5,8 8,10 12,4 15,6"/></svg>WhatIfInlearing</a>' +
      '<nav class="links">' +
      play +
      '<div class="drop"><button type="button" aria-haspopup="true">Tools</button><div class="menu">' +
      toolLinks +
      "</div></div></nav>" +
      '<button class="burger" type="button" aria-label="Menu">☰</button>' +
      "</div><div class=\"drawer\">" +
      drawer +
      "</div>";

    document.body.insertBefore(nav, document.body.firstChild);
    var burger = nav.querySelector(".burger");
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    var dropBtn = nav.querySelector(".drop > button");
    dropBtn.addEventListener("click", function () {
      dropBtn.parentElement.classList.toggle("open");
    });
  }

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
