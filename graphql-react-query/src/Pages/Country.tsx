import { useNavigate, useParams } from "react-router-dom";
import { GET_COUNTRY } from "../queries";
import { useGQLQuery } from "../useGQLQuery";

const Country = () => {
  const { id } = useParams();
  const { data, isPending, error } = useGQLQuery("country", GET_COUNTRY, {
    code: id,
  });
  const navigate = useNavigate();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <div>
      <h1>Name - {data?.country?.name}</h1>
      <p>Capital - {data?.country?.capital}</p>
      <p>Code - {data?.country?.code}</p>
      <p>Currency - {data?.country?.currency}</p>
      <p>Emoji - {data?.country?.emoji}</p>
      <p>Phone - {data?.country?.phone}</p>
      <h4>States</h4>
      {data?.country?.states?.map((itm) => (
        <div>
          <p>{itm.name}</p>
        </div>
      ))}
      <h4>Languages</h4>
      {data?.country?.languages?.map((itm) => (
        <div>
          <span>Name: {itm.name}</span>{" "}
          <span>Native: {itm.native}</span>
        </div>
      ))}
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
export default Country;
