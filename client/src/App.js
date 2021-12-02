import './app.css'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RenderHome from './components/Home/index'
import RenderProfile from './components/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RenderHome/>}/>
        <Route exact path="/user" element={<RenderProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
