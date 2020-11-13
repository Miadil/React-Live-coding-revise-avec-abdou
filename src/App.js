import Form from './components/Form';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header age='42' status='Chicken Lord'/>
      <Form />
    </div>
  );
}

export default App;
