import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    axios.get("https://api.npms.io/v2/search?q=react").then(response =>
      setState({
        data: response.data.results
      })
    );
  }, []);

  console.log(state.data);

  if (state.data.length > 0) {
    return (
      <div className="App">
        <header></header>
        <main>
          <ul>
            {state.data.map((item) => (
						<li key={item.package.date}>{item.package.name}</li>
					))}
          </ul>
        </main>
        <footer></footer>
      </div>
    );
  } else {
    return <h5>Loading...</h5>;
  }
}

export default App;
