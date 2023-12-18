
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexScreen from "./screens/IndexScreen/IndexScreen";
import IndexScreen2 from "./screens/IndexSreen2/IndexScreen2";
import Layout from "./screens/Layout/Layout";


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  path="/index" element={<IndexScreen />}></Route>
        <Route path="/index2" element={<IndexScreen2 />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
