// import React from 'react'
// const Error = () => {
//   return (
//     <div className="section section-center text-center">
//       <h2>there was an error</h2>
//     </div>
//   )
// }
// export default Error
import { useRouteError } from "react-router-dom";

export default function ErrorComponent() {
  const error = useRouteError();
  console.error(error);

    return (
    <div className="section section-center text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}


