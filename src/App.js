import "./App.css";
import Beer from "./components/Beer";

function App() {
  const beer = {
    name: "Honey",
    ibu: 5,
  };
  console.log({ beer });

  const beer2 = { ...beer, name: "Stout", ibu: "6"};

  console.log({ beer2 });

  const beers = [
    { name: "Honey", ibu: 5, },
    { name: "Stout", ibu: 6 },
    { name: "Scotish", ibu: 7 },
  ];

  return (
    <div className="App">
      <h1>Cervezas Postanak</h1>
        <hr/>
      {beers.map((beer) => (
        <>
          
          <Beer key={beer.name} {...beer} />
          <hr />
        </>
      ))}
    </div>
  );
}

export default App;
