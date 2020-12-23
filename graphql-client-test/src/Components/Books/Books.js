import React from 'react';
import { render } from 'react-dom';

import { useQuery, gql } from '@apollo/client';

const GET_BOOK = gql`
  query GetBooks {
      books {
     title
    }
  }
`;

export default function Book() {
    const { loading, error, data } = useQuery(GET_BOOK);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    console.log(data);
    const { books } = data;
    console.log(books);
    return (
      <div>
        <h2>Books</h2>
        <ul>
          {
            books.map((el,i)=>{
            return <div key={i}>
              <li>{el.title}</li>
               <li>{el.__typename}</li>

            </div>
            
            })
          }
        </ul>
      </div>
  );
}
