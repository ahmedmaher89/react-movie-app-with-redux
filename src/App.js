import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Footers from './components/Footers'

const App = () => {
  return (
    <>
      <div className="font color-body ">
        <NavBar />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MoviesList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </Container>
        <Footers />
      </div>
    </>
  );
};
export default App;
