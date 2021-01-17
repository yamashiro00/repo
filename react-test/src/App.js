import { useState } from "react";
import { List } from "./List";


function App() {
  const [description, setDescription] = useState('before');
  const cDesc = () => {
    setDescription('after')
  }
  return (
    <div>
      TopPage
      <List title="titletest"/>
      { description } {}
      <button onClick={cDesc}>button</button>
    </div>
  );
}

export default App;
