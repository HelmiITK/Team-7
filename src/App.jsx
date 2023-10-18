import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HalamanHome from "./pages/HalamanHome";
import HasilPencarian from "./pages/HasilPencarian";
import DetailFilm from "./pages/DetailFilm";
import NotFound from "./pages/NotFound";
import Trailer from "./pages/Trailer";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import NoAccessToken from "./components/NoAccessToken";
import HalamanUser from "./pages/HalamanUser";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <HalamanHome />
                </Protected>
              }
            />

            <Route
              path="/search"
              element={
                <Protected>
                  <HasilPencarian />
                </Protected>
              }
            />

            <Route
              path="/detail-film/:movieId"
              element={
                <Protected>
                  <DetailFilm />
                </Protected>
              }
            />

            <Route
              path="/trailer/:movieId"
              element={
                <Protected>
                  <Trailer />
                </Protected>
              }
            />

            <Route
              path="/login"
              element={
                <NoAccessToken>
                  <Login />
                </NoAccessToken>
              }
            />

            <Route
              path="/myprofile"
              element={
                <Protected>
                  <HalamanUser />
                </Protected>
              }
            />

            <Route path="/register" element={<Register />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
