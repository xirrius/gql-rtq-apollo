import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../queries";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <h1>CHARACTERS OF RICK AND MORTY</h1>
      <ul className="section-accordion \">
        {data?.characters?.results?.map((curElem: any) => {
          const { id, name, image, gender } = curElem;
          return (
            <li key={id} onClick={() => navigate(`/${id}`)}>
              <div>
                <img src={image} alt="profile_pic" />
                <p>{name}</p>
                <p>{gender}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
