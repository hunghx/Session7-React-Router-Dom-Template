import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Blank from "./components/Blank";
import Table from "./components/Table";
import Profile from "./components/Profile";
import FontAwesome from "./components/FontAwesome";
import Map from "./components/Map";

function App() {
  return (
    <>
      {/* định nghĩa router */}
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/blank" element={<Blank />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/icon" element={<FontAwesome />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
