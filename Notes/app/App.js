import { createAppContainer } from 'react-navigation';
import { getRootNavigator } from './src/screens/index';

const App = () => {
    return getRootNavigator();
}

export default App;
