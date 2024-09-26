import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './Product';
import Registrasi from './Registrasi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello nama="Eddo Saputra" pesan="Selamat datang dikelas PW2 IF31"/>
        <Hello />
        <Product />
        <Registrasi />
      </header>
    </div>
  );
}

export default App;
