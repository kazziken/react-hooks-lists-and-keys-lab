import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const masterLinks = links.map((stuffs) => {
    return <a href={"#" + stuffs} key={stuffs}>{stuffs}</a>
  });

  return (
    <nav>{/* display an <a> tag for each link here */}
      {masterLinks}
    </nav>
    );
}

export default NavBar;
