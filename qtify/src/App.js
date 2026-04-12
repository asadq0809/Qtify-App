// import logo from './logo.svg';
import "./App.css";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
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
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
