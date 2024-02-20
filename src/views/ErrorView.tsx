import { useRouteError } from "react-router-dom";

const ErrorView = () => {
  const error = useRouteError() as any;
  return (
    <div>
      <h1>Opps!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorView;
