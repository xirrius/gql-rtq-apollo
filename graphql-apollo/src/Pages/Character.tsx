import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../queries";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <div>
        <img src={data?.character?.image} alt="profile_pic" />
        <p>Name: {data?.character?.name}</p>
        <p>Status: {data?.character?.status}</p>
        <p>
          Species: {data?.character?.species} {data?.character?.type}
        </p>
        <p>Origin: {data?.character?.origin?.name}</p>
        <p>Location: {data?.character?.location?.name}</p>
        <div>
          <p>Episodes: </p>
          {data?.character?.episode?.map((itm) => (
            <span>
              {itm.name} {itm.episode}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Character;
