// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Songs from "./components/Songs/Songs";
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
                    <div className="sectionsContainer">
                        <Section title="Top Albums" apiEndpoint="https://qtify-backend.labs.crio.do/albums/top" />
                        <Section title="New Albums" apiEndpoint="https://qtify-backend.labs.crio.do/albums/new" />
                        <Songs />
                    </div>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
