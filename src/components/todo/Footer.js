import * as React from "react";
import Link from "react-router-dom/es/Link";

export const Footer = () => {
  return (
    <div className="Footer">
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/complete">Complete</Link>
    </div>
  )
};