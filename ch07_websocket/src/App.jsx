import './App.css';
import socket from "./server";
import {useState} from "react";

function App() {
    const [user, setUser] = useState('');

    const showAlert = () => {
        alert(user)
    }

    const showPrompt = () => {
        const response = prompt("사용자 이름을 입력하세요.");
        setUser(response)
        console.log(response)
    }

    return (
        <div>
            <button onClick={showAlert}>Show Alert</button>
            <button onClick={showPrompt}>Show Prompt</button>
        </div>
    );
}

export default App;