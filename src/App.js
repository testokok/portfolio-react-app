import './App.css';

function App() {
  return (
    <div className="App">
      
      <div class="container" id="particle-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>

       <nav>
        <section> 
           <div id="logo"><span></span><a href="#">Welcome to my site</a></div>
            <ul class="main-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">My works</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div>
                <p>&copy; 2024 Montreal<br />Created by Oksana Yaner-Meslem</p>
            </div> 
        </section>
        
    </nav>
    <main id="particle-container">
        <section>
            <div id="my-photo"></div>
        </section>
        <section>
            <h1>Oksana Yaner-Meslem</h1>
            <p class="description">I am a creative person who loves coding and fascinated by working with Data. Nonstop learning and improving myself. Intrested in science, arts and cooking.</p>
        </section>
    </main> 
    <footer>
        <ul class="media">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Tableau</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </footer>
    </div>

    </div>
  );
}

export default App;
