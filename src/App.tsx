import './App.css'
import Counter from './component/counter';
import counterReducer from './redux/counter';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(counterReducer);

function App() {
  console.log(store);
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  )
}

export default App
