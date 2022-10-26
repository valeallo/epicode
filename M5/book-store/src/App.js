import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LastestReleases from './Components/LastestReleases';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <>
    <MyNav />
    <LastestReleases />
    <MyFooter />
    </>
  );
}

export default App;
