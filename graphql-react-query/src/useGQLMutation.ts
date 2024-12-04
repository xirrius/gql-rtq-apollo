import { useMutation } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

export const useGQLMutation = (mutation, variables, config = {}) => {
  const endpoint = "https://hasura.io/learn/graphql";
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY3NGYzODZkNzYyNjQ0OTExYTRmMTFmOCJ9LCJuaWNrbmFtZSI6InNocmV5YS5uaWdhbTEwNjIiLCJuYW1lIjoic2hyZXlhLm5pZ2FtMTA2MkBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvOTkwY2UwOGVmZDJmMjQzYmM5Y2NlMDNmMDJmYmM5NjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZzaC5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNC0xMi0wM1QxNjo1NzoxOS4xMjhaIiwiaXNzIjoiaHR0cHM6Ly9ncmFwaHFsLXR1dG9yaWFscy5hdXRoMC5jb20vIiwiYXVkIjoiUDM4cW5GbzFsRkFRSnJ6a3VuLS13RXpxbGpWTkdjV1ciLCJpYXQiOjE3MzMyNDUwNDAsImV4cCI6MTczMzI4MTA0MCwic3ViIjoiYXV0aDB8Njc0ZjM4NmQ3NjI2NDQ5MTFhNGYxMWY4IiwiYXRfaGFzaCI6IlhrVUYtbGlxWDJFNEZ3Rmo1c1k5LWciLCJzaWQiOiIxTXM3c1lLR3oxcmxfcnRRU0k0eTlhUENyTUZCTGJtUiIsIm5vbmNlIjoiQ2ZLLlNkdWR4fkR1a0g2alpKR0xvcU9iaG1wRVZNYVgifQ.O6GyO4VjnSRHpDwZaVNUb8H4cLIQ73aXsWowRhWURUm4zCRB_6J8UOX1RMNKWIvJiUIGDbDptRgLTMN3cOnUDojCaMAnks8Km1FGr4BP9Ba0VSDrbTqiCnVXgMQItZ4AMawVXsNgaY6n5_1I6gV64Zbj1jllzTMRDjHAdAVrKgnwYZRUkVAdSb_kkFSvvjYpYd37GzFmfK-qW1LNwRUVipXkZJPLhoOMmyXUVN2Sm-xZ_VN5gnWClLvYzTrmSvGWtD4JdV2yZTMHinDdfJri5rP3cQaSPlQFisMadIB-kPLu5l09K8xhk4keT9cSAYkV300pHhPBqyAQpA5BnHbi8g",
    },
  };

  const graphQLClient = new GraphQLClient(endpoint, headers);

  const mutateData = async () => {
    return await graphQLClient.request(mutation, variables);
  };

  return useMutation({
    mutationFn: mutateData,
    ...config, // You can pass options like onSuccess, onError, etc.
  });
};
