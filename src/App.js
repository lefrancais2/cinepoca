import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ArrowUp from './components/ArrowUp';

function App() {

  return (
    <div className="d-flex flex-column">
      <Header/>
      <Main/>
      <Footer/>
      <ArrowUp/>
    </div>
  );
}

export default App;
