import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello nama="Eddo Saputra" pesan="Selamat datang dikelas PW2 IF31"/>
        <Hello />
        <Product />
      </header>
    </div>
  );
}

export default App;
