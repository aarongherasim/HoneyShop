import React from "react";
import PolyfloralHoney from "./images/honey1.jpg";
import HoneyDew from "./images/honey2.jpg";
import ColzaHoney from "./images/honey3.jpg";
import Pollen from "./images/pollen.jpg"

class Honey extends React.Component {
    render() {
        return (
            <div>
                <h2>Honey</h2>
                <p>Types of honey available:</p>
                <ol>
                    <li>Polyfloral honey</li>
                    <img src={PolyfloralHoney} alt="" />
                    <ul>Price: 0$</ul>
                    <li>Honeydew</li>
                    <img src={HoneyDew} alt="" />
                    <ul>Price: 0$</ul>
                    <li>Colza honey</li>
                    <img src={ColzaHoney} alt="" />
                    <ul>Price: 0$</ul>
                    <li>Pollen</li>
                    <img src={Pollen} alt="" />
                    <ul>Price: 0$</ul>
                </ol>
            </div>
        );
    }
}

export default Honey;