import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Post" desc="Click the button to render posts!" />
      </section>
    </div>
  );
}

export default App;
