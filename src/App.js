import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const CharactersPage = lazy(() =>
  import("./pages/CharactersPage/CharactersPage")
);
const NotFound = () => {
  return <h1>Not Found</h1>;
};
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<CharactersPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
