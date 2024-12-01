import gql from "graphql-tag";
import { useGQLQuery } from "./useGQLQuery";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`;
const GET_COUNTRY = gql`
  query($code: ID!) {
    country(code: $code) {
      name
    }
  }
`;

const App = () => {

  const {data, isLoading, error} = useGQLQuery('country', GET_COUNTRY, {code:"SE"})
  console.log(data.country.name);

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Something went wrong...</p>
  

  // return <div>{data.countries.map((country) => (
  //   <div key={country.code}>{country.name}</div>
  // ))}</div>;

  return <div>{data?.country?.name}</div>

};
export default App;
