import withLoading from "./withLoading";

const Input = (): JSX.Element => {
  return <input defaultValue={"Input"} />;
};
export default withLoading(Input);
