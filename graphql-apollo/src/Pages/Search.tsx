import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH_CHARACTERS } from "../queries";

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { data, loading, error, called }] = useLazyQuery(
    SEARCH_CHARACTERS, 
    {
      variables: {
        name,
      },
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <label htmlFor="name">Search...</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      <ul className="section-accordion \">
        {data?.characters?.results?.map((curElem: any) => {
          return (
            <li >
              <div>
                <p>{curElem.location.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
