import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected/Protected";
import Navbar from "./components/Navbar/Navbar";
const CharactersPage = lazy(() =>
  import("./pages/CharactersPage/CharactersPage")
);
const CharacterInfoPage = lazy(() =>
  import("./pages/CharacterInfoPage/CharacterInfoPage")
);
const Layout = lazy(() => import("./pages/Layout/Layout"));
const Signin = lazy(() => import("./pages/Signin/Signin"));
const NotFound = () => {
  return <h1>Not Found</h1>;
};
function App() {
  return (
    <>
      <AuthContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="signin" element={<Signin />} />
            <Route
              path="/character"
              element={
                <Protected>
                  <CharactersPage />
                </Protected>
              }
            />
            <Route
              path="/:id"
              element={
                <Protected>
                  <CharacterInfoPage />
                </Protected>
              }
            />
            {/* <Route path="/character" element={<CharactersPage />} /> */}
            {/* <Route path="/:id" element={<CharacterInfoPage />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </>
  );
}

export default App;
