import { AllRoutes } from './routes/AllRoutes';
import { Header } from "./components/Layouts/Header";
import { Footer } from "./components/Layouts/Footer";
// json-server --watch data/db.json --port 8000

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
