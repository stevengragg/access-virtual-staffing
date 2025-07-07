// @ts-nocheck

"use client";

import { useEffect } from "react";

const LiveChatWidget = () => {
  useEffect(() => {
    // Only load script once on client
    if (typeof window !== "undefined" && !window.LiveChatWidget) {
      window.__lc = window.__lc || {};
      window.__lc.license = 19170929; // Replace with your actual license ID

      (function (n, t, c) {
        function i(n: any) {
          return e._h ? e._h.apply(null, n) : e._q.push(n);
        }
        const e: any = {
          _q: [],
          _h: null,
          _v: "2.0",
          on: function () {
            i(["on", c.call(arguments)]);
          },
          once: function () {
            i(["once", c.call(arguments)]);
          },
          off: function () {
            i(["off", c.call(arguments)]);
          },
          get: function () {
            if (!e._h)
              throw new Error(
                "[LiveChatWidget] You can't use getters before load."
              );
            return i(["get", c.call(arguments)]);
          },
          call: function () {
            i(["call", c.call(arguments)]);
          },
          init: function () {
            const n = t.createElement("script");
            n.async = true;
            n.type = "text/javascript";
            n.src = "https://cdn.livechatinc.com/tracking.js";
            t.head.appendChild(n);
          },
        };
        !n.__lc.asyncInit && e.init();
        n.LiveChatWidget = n.LiveChatWidget || e;
      })(window, document, [].slice);
    }
  }, []);

  return null;
};

export default LiveChatWidget;
