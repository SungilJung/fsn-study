export default function Condition(props: any) {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

function Greeting(props: any) {
  const isLoggedIn = props.isLoggedIn;

  //   if (isLoggedIn) {
  //     return <UserGreeting name={"Jimmy"} time={0} />;
  //   }

  return isLoggedIn ? (
    <UserGreeting name={"Jimmy"} count={0} />
  ) : (
    <GuestGreeting />
  );
}

function UserGreeting(props: any) {
  return (
    <h1>
      {props.name && `${props.name}, `} Welcome
      {props.count ? ` count ${props.count} aa` : null}
    </h1>
  );
}

function GuestGreeting(props: any) {
  return <h1>Please sign up.</h1>;
}
