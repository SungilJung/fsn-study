import { useRef } from "react";

export default function UnControlledCompoenet(props: any) {
  const fileInputref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.dir(fileInputref.current);
    console.log(typeof fileInputref.current);
    const files = fileInputref.current?.files;

    alert(`Selected file - ${files?.item(0)?.name}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={fileInputref} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
