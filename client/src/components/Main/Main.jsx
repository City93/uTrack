import React from "react";

const Main = () => {

  const data = fetchData('https://pokeapi.co/api/v2/pokemon/ditto')
  console.log(data)

  return <div>Main</div>;
};

export default Main;
