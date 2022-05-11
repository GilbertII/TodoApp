import { useNavigate } from "react-router-dom";

function PageNavigation(Component) {
  const navigate = useNavigate();

  return (props) => <Component {...props} navigate={navigate} />;
}

export default PageNavigation;
