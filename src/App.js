import logo from './logo.svg';

import ContentRowTop from './components/contentRowTop.js'; //Importo componente
import ContentWrapper from './components/contentWrapper.js'; //Importo componente
import Footer from './components/footer.js'; //Importo componente
import SideBar from './components/sideBar.js'; //Importo componente
import TopBar from './components/topBar.js'; //Importo componente
import './assets/css/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        <ContentRowTop/>
        <SideBar/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
