import Moon from 'moonjs'


export const Home = Moon.component('Home', {
  data: {
    msg: 'Hello Moon!'
  },
  template: `<section>      <div id="hero">
        <div class="container">
          <img src="http://moonjs.ga/img/logo.png" id="logo"/>
          <h1 class="head">Moon</h1>
          <h3>A minimal, blazing fast user interface library.</h3>
          <a class="cta" href="./docs/installation.html">Get Started</a>
        </div>
      </div>

      <div id="features">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <h3 class="subhead text-center">Lightweight</h3>
              <p>Weighing in at 7kb minified + gzipped, Moon is one of the lightest libraries out there.</p>
            </div>

            <div class="col-4">
              <h3 class="subhead text-center">Fast</h3>
              <p>Moon uses a fast Virtual DOM, and can rerender the DOM efficiently, only updating nodes where changes were made.</p>
            </div>

            <div class="col-4">
              <h3 class="subhead text-center">Intuitive</h3>
              <p>Moon's simple API makes it easy to learn, you can get going in no time, just include a script.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="example">
        <div class="container">
          <h5 class="subhead">Example</h5>
          <div class="row">
            <div class="col" id="code">
              <pre><code lang="HTML"><span class="method">&lt;div</span> <span class="global">id</span>=<span class="string">"app"</span><span class="method">&gt;</span>
  <span class="method">&lt;h1</span><span class="method">&gt;</span>{{msg}}<span class="method">&lt;/h1</span><span class="method">&gt;</span>
  <span class="method">&lt;input</span> <span class="global">type</span>=<span class="string">"text"</span> <span class="global">m-model</span>=<span class="string">"msg"</span><span class="method">/&gt;</span>
<span class="method">&lt;/div</span><span class="method">&gt;</span></code></pre>
            <pre><code lang="JS"><span class="special">new</span> <span class="method">Moon</span>({
  el: <span class="string">"#app"</span>,
  data: {
    msg: <span class="string">"Hello Moon!"</span>
  }
});</code></pre>
          </div>

          <div class="col">
            <div id='app'>
              <h1>{{msg}}</h1>
              <input type='text' m-model='msg'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <a href="https://kabir.ml" id="footer-link">
        <div id="footer-content">
          <img src="http://moonjs.ga/img/kabir.png" id="footer-logo"/>
          <div id="footer-desc">
            <p id="footer-madeby">Made by</p>
            <p id="footer-name">Kabir</p>
          </div>
        </div>
      </a>
    </footer></section>`
})
