'use client'

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log("This is a client-side effect");
  }, []);

  return (
    <div className="Home">

      
    </div>
  );
}
