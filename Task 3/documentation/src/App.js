import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Mainframe from './components/mainframe';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='d-flex'>
          <Sidebar></Sidebar>
	  <Mainframe></Mainframe>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
