"use client";

import { useEffect } from "react";

interface GoHighLevelChatWidget {
  // Add any specific methods or properties if needed
  [key: string]: any;
}

declare global {
  interface Window {
    GoHighLevelChatWidget?: GoHighLevelChatWidget;
  }
}

const GoHighLevelChatWidget = () => {
  useEffect(() => {
    // Only load script once on client
    if (typeof window !== "undefined" && !window.GoHighLevelChatWidget) {
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      );
      script.setAttribute("data-widget-id", "689df787173a7f44d90c6447");
      script.async = true;

      // Append script to head
      document.head.appendChild(script);

      // Cleanup function to remove script if component unmounts
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return null;
};

export default GoHighLevelChatWidget;
