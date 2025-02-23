import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import { useLoader } from "./store";
import Loader from "./components/loader";
import ErrorPage from "./pages/404page";

export default function App() {
  const { index } = useLoader();
  return (
    <div className="App">

      {index && <Loader />}
      <BrowserRouter>
        {/* <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<h1>Profile page</h1>}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes> */}


        <Routes>
          
          <Route path="/" element={<h1>Profile Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}