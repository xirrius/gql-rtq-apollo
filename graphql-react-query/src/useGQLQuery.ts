import { useQuery } from "@tanstack/react-query"; 
import { GraphQLClient } from "graphql-request";

export const useGQLQuery = (key:string, query, variables:object, config = {}) => {
    const endpoint = 'https://countries.trevorblades.com/'
    const headers = {
        headers: {
            authorization: 'Bearer token goes here'
        }
    }

    const graphQLClient = new GraphQLClient(endpoint, headers)

    const fetchData = async () => await graphQLClient.request(query, variables)
    // const fetchData = async () => await request(endpoint, query, variables)

    return useQuery({
      queryKey: [key],
      queryFn: fetchData,
      ...config
    });
}