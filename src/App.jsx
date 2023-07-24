import Navbar from './components/Navbar';
import Bienvenida from './components/itemListContainer';

function App() {

  return (
<main>
  <Navbar />
  <Bienvenida proverbio="Hyakubun wa ikken ni shikazu"/>
  <Bienvenida proverbio='"Ver algo una vez es mejor que escucharlo 100 veces"'/>
</main>
  );
}

export default App
