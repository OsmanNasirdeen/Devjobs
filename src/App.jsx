import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./Header/scrollToTop";
import Home from "./components/Homepage/Home";
import Navbar from "./Header/Navbar";
import Main from "./components/main/mainContents";
import Cards from "./components/cards/cards";
import Details from "./components/DetailsPage/Details";
import ErrorPage from "./components/Homepage/errorPage";
import SharedLayout from "./Header/sharedLayout";
function App() {
  // theme toggle state
  const [darkTheme, setDarkTheme] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  const getData = (url) => {
    setIsLoading(true);
    document.querySelector(".modal-overlay").style.display = "block";
    fetch(url)
      .then((response) => {
        response.json().then((data) => {
          setData(() => data.data);
          setIsLoading(() => false);
          document.querySelector(".modal-overlay").style.display = "none";
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getData(`https://server-devjobs.onrender.com/`);
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }>
          <Route
            index
            element={
              <Home isLoading={isLoading}>
                <Navbar
                  darkTheme={darkTheme}
                  setData={setData}
                  getData={getData}
                />
                <Main data={data} isLoading={isLoading} darkTheme={darkTheme}>
                  <Cards data={data} darkTheme={darkTheme} />
                </Main>
              </Home>
            }
          />
          <Route
            path="positions/:positionId"
            element={<Details darkTheme={darkTheme} />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
