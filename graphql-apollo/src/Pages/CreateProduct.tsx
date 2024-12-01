import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../queries";

const Search = () => {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "Hot Dog",
        quantityPerUnit: 10
      },
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <button onClick={() => createProduct()}>Create</button>
    </div>
  );
};
export default Search;
