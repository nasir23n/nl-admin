import React from "react";

export default function Panel({children ,header, footer}) {
  return (
    <div className="panel">
        <div className="header">
            <h2>{header}</h2>
        </div>
        <div className="body">
            {children}
        </div>
        <div className="footer">{footer}</div>
    </div>
  );
}
