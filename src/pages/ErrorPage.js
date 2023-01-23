import React from "react";
import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Wrapper className="page-100">
      <section>
        <h1>Error</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
