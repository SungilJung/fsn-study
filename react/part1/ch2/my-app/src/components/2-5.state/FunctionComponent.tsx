import { useEffect, useState } from "react";

export default function FunctionComponent(props: any) {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>hello world</h1>
      <h2>It it {date.toLocaleTimeString()}</h2>
    </div>
  );
}
