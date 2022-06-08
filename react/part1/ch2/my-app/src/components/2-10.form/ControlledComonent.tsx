import { useState } from "react";
const ControlledComonent = (props: any) => {
  const [name, setName] = useState("");
  const [essay, seteEssay] = useState(
    "Please write an essay about your favorite DOM element."
  );
  const [flavor, setFlavor] = useState("coconut");

  const handleNameChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const eventName = event.target.name;
    if (eventName === "name") {
      setName(event.target.value);
    } else if (eventName === "essay") {
      seteEssay(event.target.value);
    } else {
      setFlavor(event.target.value);
    }
  };

  // const handleEssayChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   seteEssay(event.target.value);
  // };

  // const handleFlavorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   console.dir(event);
  //   setFlavor(event.target.value);
  // };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`A name was submitted: ${name} essay: ${essay} flavor ${flavor}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name={"name"}
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <br />
        <label>
          Essay:
          <textarea name={"essay"} value={essay} onChange={handleNameChange} />
        </label>
        <br />
        <br />
        <label>
          Pick your favorite flavor:
          <select name={"flavor"} value={flavor} onChange={handleNameChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledComonent;
