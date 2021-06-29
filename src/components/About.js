import React from "react";

function About({ image = "https://via.placeholder.com/215", about}) {
    return(
    <aside>
        <img src={image} alt="blog logo"/>
        <p>{about}</p>
    </aside>
    )}

export default About




// a <aside> element with the following elements inside:
// a <img> element, with the src set to an image passed as a prop
// the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215"
// the image should also be accessible! Give it an alt attribute of "blog logo"
// a <p> element, with the about text for the blog passed in as a prop