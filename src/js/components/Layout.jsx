import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Layout";
  }

  render() {
    return (
      <div>
        <Header />
        <p>{this.name}</p>
        <Footer />
      </div>
    );
  }
}
