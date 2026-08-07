// Sticky 50/50 A/B assignment between /control/ and /refresh/.
// Override with ?v=control or ?v=refresh. Cookie lasts 30 days.
(function () {
  var KEY = "crema_ab";
  var params = new URLSearchParams(location.search);
  var forced = params.get("v");
  var match = document.cookie.match(/(?:^|; )crema_ab=([^;]*)/);
  var variant = forced === "control" || forced === "refresh"
    ? forced
    : match && decodeURIComponent(match[1]);

  if (variant !== "control" && variant !== "refresh") {
    variant = Math.random() < 0.5 ? "control" : "refresh";
  }

  document.cookie =
    KEY +
    "=" +
    encodeURIComponent(variant) +
    "; path=/; max-age=2592000; SameSite=Lax";

  var page = document.body && document.body.dataset
    ? document.body.dataset.abPage || "index.html"
    : "index.html";
  // Allow script usage before body exists.
  var script = document.currentScript;
  if (script && script.dataset.page) page = script.dataset.page;

  var dest = "/" + variant + "/" + page;
  if (params.has("v")) {
    params.delete("v");
    var qs = params.toString();
    if (qs) dest += "?" + qs;
  }
  if (location.hash) dest += location.hash;
  location.replace(dest);
})();
