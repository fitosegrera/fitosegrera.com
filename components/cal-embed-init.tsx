import Script from "next/script";

type CalEmbedInitProps = {
  calOrigin: string;
};

/**
 * Cal.com element-click embed: installs the official loader stub (which pulls
 * `embed.js`) then runs `Cal("init", { origin })`. Required before any
 * `data-cal-link` trigger works.
 */
export function CalEmbedInit({ calOrigin }: CalEmbedInitProps) {
  const initArg = JSON.stringify({ origin: calOrigin });
  const inlineHtml = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");Cal("init",${initArg});`;

  return (
    <Script
      id="cal-com-embed"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: inlineHtml }}
    />
  );
}
