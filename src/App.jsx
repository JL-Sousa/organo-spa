import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Team } from "./components/Team";
import "./global.css";

function App() {
  const times = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Frontend",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7EB",
    },
    {
      name: "UX e Desing",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  const [contributors, setContributors] = useState([]);

  const newContributorAdded = (collaborator) => {
    console.log(collaborator);
    setContributors([...contributors, collaborator]);
  };

  return (
    <>
      <Banner />
      <Form
        times={times.map((team) => team.name)}
        registeredEmployee={(collaborator) => newContributorAdded(collaborator)}
      />
      {times.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          contributors={contributors.filter(
            (collaborator) => collaborator.time === team.name
          )}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
