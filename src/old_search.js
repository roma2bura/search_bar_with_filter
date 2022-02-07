import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useParams, useHistory } from 'react-router-dom';


const Home = () => {

const searchQuery = useParams()
const history = useHistory()

console.log(searchQuery.search)

const [query, setQuery] = useState(searchQuery.search !== "search" ? searchQuery.search  : []);
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://6195803474c1bd00176c6d9a.mockapi.io/api/v1/patient?search=${query}`;

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
  }, [query]);

  console.log(data);


  const handleSubmit = (event) => {
      console.log(event);
    setQuery(event.target.value);
  }

  console.log(query);

  const handleSubmitBtn = () => {
      history.push(query);
  }

    console.log(searchQuery);
    return (
        
        <div className="container m-5">
    
    <div className="form" >
        <input
          type="text"
          id="free-solo-demo"
          placeholder="Search.."
          value={query}
        //   onKeyDown={(e) => search(e)}
            onChange={(event) => handleSubmit(event)}
        />
        <button onClick={handleSubmitBtn}>Search</button>
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length !== 0
              ? data.map((user, index) => (
                  <tr>
                    <td key={index + 1}>{user.firstName}</td>
                    <td key={index + 3}>{user.lastName}</td>
                    <td key={index + 4}>{user.id}</td>
                  </tr>
                ))
              : "No users"}
          </TableBody>
        </Table>
      </TableContainer>
    </div> );
}

 
export default Home;