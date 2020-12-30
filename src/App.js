import Routes from './components/Routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import styled from 'styled-components';

const Screen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Screen id="screen">
        <Routes />
      </Screen>
    </Provider>
  );
}

export default App;
