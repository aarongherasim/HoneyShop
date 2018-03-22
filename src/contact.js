import React, {Component} from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h2>Contact Details: </h2>
                <p>Email address: <email className="email">aarongherasim@gmail.com</email></p>
                <p>Phone number: <phone className="phone">1234567</phone></p> 
                <p>For a search engine please press: <a href="http://google.com"> forums</a>
                </p>
            </div>
        )
    }
}

export default Contact;