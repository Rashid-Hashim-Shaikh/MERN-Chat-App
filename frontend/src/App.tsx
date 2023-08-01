import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/chats" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
