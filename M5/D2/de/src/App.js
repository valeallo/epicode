
import './App.css';
// import MyNav from "./components/MyNav.js";
import Footer from "./components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MyCard from './components/MyCard';
import CardComponent from './components/CardComponent';


function App() {
  return (

    <div className="App">
      <header>
        {/* <MyNav /> */}
        <CardComponent />
      </header>
{/*       
        <MyCard /> */}
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
