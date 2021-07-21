import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return (<footer><p>Copyright Sharon Tomski &copy; {year}</p></footer>);
}

export default Footer;