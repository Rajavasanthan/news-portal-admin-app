import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CreateNews from "./components/CreateNews";
import EditNews from "./components/EditNews";
import CreateCategory from "./components/CreateCategory";
import EditCategory from "./components/EditCategory";
import ListAllNews from "./components/ListAllNews";
import ListAllCategory from "./components/ListAllCategory";
import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import ViewNews from "./components/ViewNews";
import ProtectedRouter from "./components/ProtectedRouter";
function App() {
  return (  
      <BrowserRouter>           
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route element={<ProtectedRouter />}>
                  
                  <Route path="/create-news" element={<CreateNews />}></Route>
                  <Route path="/edit-news" element={<EditNews />}></Route>
                  <Route
                    path="/list-all-news"
                    element={<ListAllNews />}
                  ></Route>
                  <Route
                    path="/create-category"
                    element={<CreateCategory />}
                  ></Route>
                  <Route
                    path="/edit-category"
                    element={<EditCategory />}
                  ></Route>
                  <Route
                    path="/list-all-category"
                    element={<ListAllCategory />}
                  ></Route>
                  <Route path="/view-news" element={<ViewNews />}></Route>
                </Route>
              </Routes>
      </BrowserRouter>
  );
}

export default App;
