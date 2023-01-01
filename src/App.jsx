import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";
import "./global.css";

function App() {
  const [contributors, setContributors] = useState([]);

  const newContributorAdded = (collaborator) => {
    console.log(collaborator);
    setContributors(...contributors, collaborator);
  };

  return (
    <>
      <Banner />
      <Form
        registeredEmployee={(collaborator) => newContributorAdded(collaborator)}
      />
      <Team name="Programacao" />
      <Team name="Frontend" />
      <Team name="Data Sciense" />
    </>
  );
}

export default App;
