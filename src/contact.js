import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h2>Contact Details: </h2>
                <p>Email address: <span className="highlight-blue">aarongherasim@gmail.com</span></p>
                <p>Phone number: <span className="highlight-blue">1234567</span></p> 
                <p>For a search engine please press: <a href="http://google.com"> google</a>
                </p>
            </div>
        )
    }
}

export default Contact;