import React from "react";
import Link from "next/link"

function Header() {
  return (
    <div className="header">
      <a href="#default" class="logo">
              CompanyLogo
          </a>
          <div className="header-right">
              <Link className="active" href="/">Home</Link>
              <Link href="/user">User</Link>
              <Link href="/test-sayfasi">Test Sayfası</Link>
      </div>
    </div>
  );
}

export default Header;
