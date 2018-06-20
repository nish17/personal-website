import React, { Component } from 'react';
import {
  render
} from 'react-dom';

const Webpage = () => (
  <div>
    <main>
      <div id="landing">
        <div id="landing-text">
          <div id="landing-text-inner">
            <h1 > Coming soon </h1>
            <h2 > Website Under Development </h2>
            <a href="https://www.github.com/nish17" target="_blank" className="btn" id="view-work" > View Work </a>
          </div>
        </div>
        <div id="landing-image"> </div>
      </div>
    </main>

    <footer>
      <h3> Get in Touch </h3>
      <p> Email:<strong>  nimesh3536 @gmail.com </strong> </p>
      <p> Phone:<strong> +91 - 9033309720 </strong> </p>
    </footer>
    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossOrigin="anonymous" > </script>
    <script src="js/main.js" > </script>
  </div>
);

// render(<Webpage />, document.getElementById('app'));
export default Webpage;