import AppRouter from './routers/AppRouter';
import { ToastNotification } from './utils/ToastNotification';

const App = () => {
  return (
    <div className="App">
      <AppRouter />
      <ToastNotification />
    </div>
  );
};

export default App;
