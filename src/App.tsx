
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexScreen from "./screens/IndexScreen/IndexScreen";
import Layout from "./screens/Layout/Layout";
import Home from "./screens/Home/Home";
import Logs from "./screens/Logs/Logs";


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/index" element={<IndexScreen />}></Route>
        <Route path="/home" element={<Home/>}/>
        </Route>
        
    </Routes>
  </BrowserRouter>
  );
};

export default App;
