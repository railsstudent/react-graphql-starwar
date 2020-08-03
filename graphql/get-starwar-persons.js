// query {
//   persons(
// 	  where: { 
//       name_contains: "ray"
//   	},
//   	first: 5,
// 	) {
//     id,
//     name,
//     height,
//     birthYear,
//     mass,
//     skinColor,
//     gender,
//     eyeColor, 
//     hairColor,
//     homeworld {
//       id,
//       name,
//       terrain,
//     },
//     species(first: 1) {
//      id,
//       name,
//       language
//     },
//     films(orderBy: episodeId_ASC) {
//        episodeId,
//        title
//     }
// 	}
// }

import gql from 'graphql-tag';

export const GET_STARWAR_PERSONS = gql`
  query persons($name: String!, $first: Int!) {
    persons(
      where: { 
        name_contains: $name
      },
      first: $first,
    ) {
      id,
      name,
      height,
      birthYear,
      mass,
      skinColor,
      gender,
      eyeColor, 
      hairColor,
      homeworld {
        id,
        name,
      },
      species(first: 1) {
        id,
        name,
        language
      },
      films(orderBy: episodeId_ASC) {
        episodeId,
        title     
      }
    }
  }
`;
