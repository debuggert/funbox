import CardCatList from '../cardCatList/CardCatList';
import './app.css';

function App() {
  return (
    <div className="site_wrap">
      <main className="main">
        <h1>Ты сегодня покормил кота?</h1>
        
        <CardCatList />
      </main>
    </div>
  );
}

export default App;
