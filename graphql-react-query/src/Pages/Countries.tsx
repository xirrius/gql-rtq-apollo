import { useNavigate } from "react-router-dom";
import { GET_COUNTRIES } from "../queries";
import { useGQLQuery } from "../useGQLQuery";

const Countries = () => {
  const { data, isPending, error } = useGQLQuery("country", GET_COUNTRIES, {});
  const navigate = useNavigate()

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      <h1>COUNTRIES</h1>
      <ul className="section-accordion">
        {data?.countries?.map((country) => (
          <li key={country.code} onClick={() => navigate(`/${country.code}`)}>
            <div>
              <h1>{country?.name}</h1>
              <p>{country.code}</p>
              <p>Continent: {country.continent.name}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
