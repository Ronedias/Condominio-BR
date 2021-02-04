import Rotas from './rotas'


import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css'
import Navbar from '../components/navbar';



function App() {
  return (
    <>
    <Navbar />
      <div>
        <Rotas/>
      </div>
   </>  
  );
}

export default App;
