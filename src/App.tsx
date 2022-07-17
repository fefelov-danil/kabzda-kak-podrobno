import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import {Header} from "./header/Header";
import {Pages} from "./pages/Pages";


function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Pages/>
        </div>
    );
}

export default App;
