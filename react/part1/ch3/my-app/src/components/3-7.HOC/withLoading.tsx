import { useEffect, useState } from "react";

const withLoading = (Component: React.FC): React.FC => {
  console.dir(Component);
  const WithLoadingComponent = (props: any) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <p>...Loading</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
};

export default withLoading;
