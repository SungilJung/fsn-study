import Dialog from "./Dialog";

const CustomDialog = (props: any) => {
  return (
    <Dialog>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </Dialog>
  );
};

export default CustomDialog;
