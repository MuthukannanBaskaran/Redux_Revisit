import './App.css'
import Counter from './component/counter';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  )
}

export default App;
