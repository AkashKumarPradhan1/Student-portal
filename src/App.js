// import "./App.css";
// // import axios from "axios";
// import { useEffect, useState } from "react";

// import * as XLSX from "xlsx";

// function App() {

//   const [students, setStudents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const rowsPerPage = 10;

//   useEffect(function () {
//     fetchData();
//   }, []);

//   // async function fetchData() {

//   //   const response = await axios.get(
//   //     "https://docs.google.com/spreadsheets/d/1XETVssIQ8n10wfz6Z7TOr1EOub7avFIBjJicdZTdbAQ/edit?usp=sharing"
//   //   );

//   //   setStudents(response.data);
//   // }

//   async function fetchData() {

//   const response = await fetch("https://docs.google.com/spreadsheets/d/1-NXYTPN-UTtpFWzzmzgeIDtY9G-ZmZPgB0JoVua4spA/edit?usp=sharing");

//   const arrayBuffer = await response.arrayBuffer();

//   const workbook = XLSX.read(arrayBuffer);

//   const sheet = workbook.Sheets[workbook.SheetNames[0]];

//   const data = XLSX.utils.sheet_to_json(sheet);

//   setStudents(data);
// }

//   const filteredStudents = students.filter(function (student) {

//     return Object.values(student)
//       .join(" ")
//       .toLowerCase()
//       .includes(search.toLowerCase());

//   });

//   const lastIndex = currentPage * rowsPerPage;
//   const firstIndex = lastIndex - rowsPerPage;

//   const currentStudents =
//     filteredStudents.slice(firstIndex, lastIndex);

//   const totalPages =
//     Math.ceil(filteredStudents.length / rowsPerPage);

//   return (

//     <div className="container">

//       <div className="card">

//         <h1>FullinFaws 🎓 Student Portal</h1>

//         <input
//           type="text"
//           placeholder="Search Student..."
//           value={search}
//           onChange={function (e) {
//             setSearch(e.target.value);
//           }}
//         />

//         <table>

//           <thead>

//             <tr>

//               {students.length > 0 &&
//                 Object.keys(students[0]).map(function (key) {

//                   return <th key={key}>{key}</th>;

//                 })}

//             </tr>

//           </thead>

//           <tbody>

//             {currentStudents.map(function (student, index) {

//               return (

//                 <tr key={index}>

//                   {Object.values(student).map(function (value, i) {

//                     return <td key={i}>{value}</td>;

//                   })}

//                 </tr>

//               );

//             })}

//           </tbody>

//         </table>

//         <div className="pagination">

//           <button
//             disabled={currentPage === 1}
//             onClick={function () {

//               setCurrentPage(currentPage - 1);

//             }}
//           >
//             Prev
//           </button>

//           <span>
//             Page {currentPage} / {totalPages}
//           </span>

//           <button
//             disabled={currentPage === totalPages}
//             onClick={function () {

//               setCurrentPage(currentPage + 1);

//             }}
//           >
//             Next
//           </button>

//         </div>

//       </div>

//     </div>

//   );
// }

// export default App;



import "./App.css";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  useEffect(function () {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/1-NXYTPN-UTtpFWzzmzgeIDtY9G-ZmZPgB0JoVua4spA/export?format=xlsx"
      );

      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, {
        type: "array",
      });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const data = XLSX.utils.sheet_to_json(sheet);

      setStudents(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  const filteredStudents = students.filter(function (student) {
    return Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;

  const currentStudents = filteredStudents.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    filteredStudents.length / rowsPerPage
  );

  return (
    <div className="container">
      <div className="card">

        <h1>FullinFaws 🎓 Student Portal</h1>

        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={function (e) {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <table>

          <thead>
            <tr>
              {students.length > 0 &&
                Object.keys(students[0]).map(function (key) {
                  return (
                    <th key={key}>
                      {key}
                    </th>
                  );
                })}
            </tr>
          </thead>

          <tbody>
            {currentStudents.map(function (student, index) {
              return (
                <tr key={index}>
                  {Object.keys(student).map(function (key, i) {
                    return (
                      <td key={i}>
                        {student[key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>

        </table>

        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={function () {
              setCurrentPage(currentPage - 1);
            }}
          >
            Prev
          </button>

          <span>
            Page {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={function () {
              setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;