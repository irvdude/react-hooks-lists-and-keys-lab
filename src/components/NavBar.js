import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aElement = links.map((links) => {
    return <a href={`#${links}`} key={links}>{links}</a>
  })

  return (
    <nav>
      {aElement}
    </nav>
  )
}

export default NavBar;
