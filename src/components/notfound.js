
import React from 'react';

const NotFound = ({location}) => (
  <div>
    <h1>Error 404</h1>
    <h2>Oops!</h2>
    <h3>Something went terribly wrong</h3>
    <p>No Match for <code>{location.pathname}</code></p>
  </div>
)

export default NotFound;