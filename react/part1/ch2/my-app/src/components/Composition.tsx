function Welcom(props: any) {
  return <h1> hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcom name="FSN" />
    </div>
  );
}
