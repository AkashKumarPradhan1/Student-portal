// // import "./App.css";
// // // import axios from "axios";
// // import { useEffect, useState } from "react";

// // import * as XLSX from "xlsx";

// // function App() {

// //   const [students, setStudents] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const rowsPerPage = 10;

// //   useEffect(function () {
// //     fetchData();
// //   }, []);

// //   // async function fetchData() {

// //   //   const response = await axios.get(
// //   //     "https://docs.google.com/spreadsheets/d/1XETVssIQ8n10wfz6Z7TOr1EOub7avFIBjJicdZTdbAQ/edit?usp=sharing"
// //   //   );

// //   //   setStudents(response.data);
// //   // }

// //   async function fetchData() {

// //   const response = await fetch("https://docs.google.com/spreadsheets/d/1-NXYTPN-UTtpFWzzmzgeIDtY9G-ZmZPgB0JoVua4spA/edit?usp=sharing");

// //   const arrayBuffer = await response.arrayBuffer();

// //   const workbook = XLSX.read(arrayBuffer);

// //   const sheet = workbook.Sheets[workbook.SheetNames[0]];

// //   const data = XLSX.utils.sheet_to_json(sheet);

// //   setStudents(data);
// // }

// //   const filteredStudents = students.filter(function (student) {

// //     return Object.values(student)
// //       .join(" ")
// //       .toLowerCase()
// //       .includes(search.toLowerCase());

// //   });

// //   const lastIndex = currentPage * rowsPerPage;
// //   const firstIndex = lastIndex - rowsPerPage;

// //   const currentStudents =
// //     filteredStudents.slice(firstIndex, lastIndex);

// //   const totalPages =
// //     Math.ceil(filteredStudents.length / rowsPerPage);

// //   return (

// //     <div className="container">

// //       <div className="card">

// //         <h1>FullinFaws 🎓 Student Portal</h1>

// //         <input
// //           type="text"
// //           placeholder="Search Student..."
// //           value={search}
// //           onChange={function (e) {
// //             setSearch(e.target.value);
// //           }}
// //         />

// //         <table>

// //           <thead>

// //             <tr>

// //               {students.length > 0 &&
// //                 Object.keys(students[0]).map(function (key) {

// //                   return <th key={key}>{key}</th>;

// //                 })}

// //             </tr>

// //           </thead>

// //           <tbody>

// //             {currentStudents.map(function (student, index) {

// //               return (

// //                 <tr key={index}>

// //                   {Object.values(student).map(function (value, i) {

// //                     return <td key={i}>{value}</td>;

// //                   })}

// //                 </tr>

// //               );

// //             })}

// //           </tbody>

// //         </table>

// //         <div className="pagination">

// //           <button
// //             disabled={currentPage === 1}
// //             onClick={function () {

// //               setCurrentPage(currentPage - 1);

// //             }}
// //           >
// //             Prev
// //           </button>

// //           <span>
// //             Page {currentPage} / {totalPages}
// //           </span>

// //           <button
// //             disabled={currentPage === totalPages}
// //             onClick={function () {

// //               setCurrentPage(currentPage + 1);

// //             }}
// //           >
// //             Next
// //           </button>

// //         </div>

// //       </div>

// //     </div>

// //   );
// // }

// // export default App;



// import "./App.css";
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

//   async function fetchData() {
//     try {
//       const response = await fetch(
//         "https://docs.google.com/spreadsheets/d/1-NXYTPN-UTtpFWzzmzgeIDtY9G-ZmZPgB0JoVua4spA/export?format=xlsx"
//       );

//       const arrayBuffer = await response.arrayBuffer();

//       const workbook = XLSX.read(arrayBuffer, {
//         type: "array",
//       });

//       const sheet = workbook.Sheets[workbook.SheetNames[0]];

//       const data = XLSX.utils.sheet_to_json(sheet);

//       setStudents(data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }

//   const filteredStudents = students.filter(function (student) {
//     return Object.values(student)
//       .join(" ")
//       .toLowerCase()
//       .includes(search.toLowerCase());
//   });

//   const lastIndex = currentPage * rowsPerPage;
//   const firstIndex = lastIndex - rowsPerPage;

//   const currentStudents = filteredStudents.slice(
//     firstIndex,
//     lastIndex
//   );

//   const totalPages = Math.ceil(
//     filteredStudents.length / rowsPerPage
//   );

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
//             setCurrentPage(1);
//           }}
//         />

//         <table>

//           <thead>
//             <tr>
//               {students.length > 0 &&
//                 Object.keys(students[0]).map(function (key) {
//                   return (
//                     <th key={key}>
//                       {key}
//                     </th>
//                   );
//                 })}
//             </tr>
//           </thead>

//           <tbody>
//             {currentStudents.map(function (student, index) {
//               return (
//                 <tr key={index}>
//                   {Object.keys(student).map(function (key, i) {
//                     return (
//                       <td key={i}>
//                         {student[key]}
//                       </td>
//                     );
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

  const [studentSearch, setStudentSearch] = useState("");
  const [feeSearch, setFeeSearch] = useState("");

  useEffect(() => {
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

      console.log(error);

    }

  }

  const filteredStudentDetails = students.filter((student) =>
    Object.values({
      Student_ID: student.Student_ID || "",
      Name: student.Name || "",
      Education: student.Education || "",
      Marks: student.Marks || "",
    })
      .join(" ")
      .toLowerCase()
      .includes(studentSearch.toLowerCase())
  );

  const filteredFees = students.filter((student) =>
    Object.values({
      Student_ID: student.Student_ID || "",
      Name: student.Name || "",
      Fees_Total: student.Fees_Total || "",
      Fees_Paid: student.Fees_Paid || "",
      Fees_Pending: student.Fees_Pending || "",
    })
      .join(" ")
      .toLowerCase()
      .includes(feeSearch.toLowerCase())
  );

  return (

    <div className="container">

      {/* Hero */}

      <div className="hero">

        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600"
          alt="college"
        />

        <div className="hero-overlay">

          <h1 className="hero-title">
            FullinFaws 🎓 Student Portal
          </h1>

          <p className="hero-text">
            Excellence • Innovation • Future Ready
          </p>

        </div>

      </div>

      {/* Stats */}

      <div className="stats-container">

        <div className="stat-card">
          <h2>5000+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>200+</h2>
          <p>Faculty Members</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Placement Rate</p>
        </div>

      </div>

      <div className="dual-section">

        {/* Student Details */}

        <div className="card section-card">

          <h1>Student Details</h1>

          <input
            type="text"
            placeholder="🔍 Search Student..."
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)}
          />

          <div className="table-container">

            <table>

              <thead>

                <tr>

                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Education</th>
                  <th>Marks</th>

                </tr>

              </thead>

              <tbody>

                {filteredStudentDetails.map((student, index) => (

                  <tr key={index}>

                    <td>{student.Student_ID}</td>

                    <td>{student.Name}</td>

                    <td>{student.Education}</td>

                    <td>{student.Marks}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
                {/* Fees Portal */}

        <div className="card section-card">

          <h1>Fees Portal</h1>

          <input
            type="text"
            placeholder="💰 Search Fees..."
            value={feeSearch}
            onChange={(e) => setFeeSearch(e.target.value)}
          />

          <div className="table-container">

            <table>

              <thead>

                <tr>

                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Total Fees</th>
                  <th>Fees Paid</th>
                  <th>Fees Pending</th>

                </tr>

              </thead>

              <tbody>

                {filteredFees.map((student, index) => (

                  <tr key={index}>

                    <td>{student.Student_ID}</td>

                    <td>{student.Name}</td>

                    <td>{student.Fees_Total}</td>

                    <td>{student.Fees_Paid}</td>

                    <td>{student.Fees_Pending}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Campus Gallery */}

      <div className="gallery">

        <h1>Campus Gallery</h1>

        <div className="gallery-images">

          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
            alt="Campus 1"
          />

          <img
            src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg"
            alt="Campus 2"
          />

          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
            alt="Campus 3"
          />

        </div>

      </div>

      {/* Footer */}

      <footer>

        <h2>FullinFaws College</h2>

        <p>
          Excellence • Innovation • Future Ready
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>

  );

}

export default App;