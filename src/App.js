import './App.css';
import Header from './components/Heading';
import Card from './components/Cards.js';
import data from './data.js';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}
  />
    )
}) 
  return (
    <div className="App">
        <Header />
        {cards}
    </div>
  );
}

export default App;
