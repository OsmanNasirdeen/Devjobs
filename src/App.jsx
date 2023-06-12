import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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

  const [data, setData] = useState([]);

  const getData = (url) => {
    fetch(url)
      .then((response) => {
        response.json().then((data) => {
          setData(() => data.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData(`http://localhost:8000/`);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }>
          <Route
            index
            element={
              <Home>
                <Navbar
                  darkTheme={darkTheme}
                  setData={setData}
                  getData={getData}
                />
                <Main data={data}>
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
