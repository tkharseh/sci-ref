import './App.css';
import {ReactComponent as Logo} from './assets/logo.svg'
import Instructions from './components/Instructions';

function App() {
  return (
    <div className='grid justify-items-center'>
      <Logo />
      <Instructions />
    </div>
  );
}

export default App;
