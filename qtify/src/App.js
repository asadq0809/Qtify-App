// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/AlbumCard/AlbumCard";
import Section from "./components/Section/Section";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Navbar />
                    <Hero />
                    <Section title="Top Albums" apiEndpoint="https://qtify-backend.labs.crio.do/albums/top" />
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
