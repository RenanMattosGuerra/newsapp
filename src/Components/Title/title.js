import { useParams } from "react-router-dom";
import "./title.css";

const Title = () => {
  const { id } = useParams();

  const formattedId = id.charAt(0).toUpperCase() + id.slice(1).toLowerCase();

  return (
    <div>
      <h2 className="category-heading">{formattedId}</h2>
    </div>
  );
};

export default Title;
