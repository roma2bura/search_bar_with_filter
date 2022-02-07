import React, {useEffect, useState} from 'react';
import SearchBar from "./Components/searchBar"

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://6195803474c1bd00176c6d9a.mockapi.io/api/v1/patient`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <div className="App">
      <SearchBar placeholder="Search" data={data}/>
    </div>

      
  );
}

export default App;
