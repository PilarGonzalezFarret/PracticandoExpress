import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      const express = require("express");
      const app = express();
      const port = 8000;
      
      app.get("/api", (req, res) => {
        res.json({ message: "Hello World" })
      });


      app.listen( port, () => console.log(`Listening on port: ${port}`) );


    </div>
  );
}

export default App;
