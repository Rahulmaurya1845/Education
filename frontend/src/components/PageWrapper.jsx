import React, { useEffect, useState } from "react";
import "./PageWrapper.css";

export default function PageWrapper({ children }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    return () => setFade(false);
  }, []);

  return <div className={`page-transition ${fade ? "fade-in" : "fade-out"}`}>{children}</div>;
}
