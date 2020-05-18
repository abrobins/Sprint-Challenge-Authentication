import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Cards = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Card = Styled.div`
  margin: 2rem 6rem;
  padding: 1rem;
  background-color: #ffc357;
  box-shadow: 2px 2px #d88144;
  border-radius: 1.5rem;
`;

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/jokes") // required to get cookies to work properly
      .then(res => {
        console.log(res.data);
        setJokes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Dad Jokes</h2>
      <Cards>
        {jokes.map(singlejoke => (
          <Card>
            <h3>{singlejoke.joke}</h3>
          </Card>
        ))}
      </Cards>
    </div>
  );
};

export default Jokes;
