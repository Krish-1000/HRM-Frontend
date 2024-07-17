// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const About = () => {
//   const [employee, setEmployee] = useState({
//     id: "VBE001",
//     firstName: "Dhinesh",
//     lastName: "Babu",
//     position: "Chief Executive Officer",
//     department: "Design",
//     email: "dhinesh@vividobots.com",
//     location: "Chennai",
//     timezone: "(GMT+05:30)",
//     directReports: [
//       { name: "Jayanth Krishna", position: "Chief Product Officer" },
//     ],
//   });
//   return (
//     <div className="body">
//       <header className="bg-primary pb-5 h-50">
//         <span className="d-flex justify-content-center ">
//           <img
//           className="img-fluid h-5"
//           src="adminlogo.png"
//           alt="A beautiful scenery"
//         />
         
//           <AccountCircleIcon fontSize="large" style={{ fontSize: 90 }} />
//           <div className="col-md-8">
//             <h6>{`${employee.id} - ${employee.firstName} ${employee.lastName}`}</h6>
//             <p className="list-inline-item">{employee.position}</p>
//             <p className="list-inline-item">{employee.department}</p>
//             <p className="list-inline-item">{employee.email}</p>
//           </div>
//         </span>
//       </header>
//       <div className=" mt-4">
//         <div className="row">
//           <div className="col-6">
//             <div className="card mb-3">
//               <h5 className="card-header">About Me</h5>
//               <div className="card-body">
//                 <div className="row">
//                 <div className="col-6">
//                   <p>Design</p>
//                 </div>
//                 <div className="col-6">
//                   <p>General</p>
//                 </div>
//               </div>
//                 <div className="row">
//                 <div className="col-6">
//                   <p>Chief Executive Officer</p>
//                 </div>
//                 <div className="col-6">
//                   <p>(GMT+05:30)</p>
//                 </div>
//               </div>
//                 <p>Design</p>
//               </div>
//             </div>
//             <div className="card mb-3">
//               <h5 className="card-header">Skill Sets</h5>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Design</p>
//                   </div>
//                   <div className="col-6">
//                     <p>General</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                 <div className="col-6">
//                   <p>Chief Executive Officer</p>
//                 </div>
//                 <div className="col-6">
//                   <p>(GMT+05:30)</p>
//                 </div>
//               </div>
//                 <p>Test</p>
//                 <p>he</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-6">
//             <div className="card mb-2">
//               <h5 className="card-header">Bank Details</h5>
//               <div className="card-body mb-2">
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Design</p>
//                   </div>
//                   <div className="col-6">
//                     <p>General</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Details</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Details</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Chief Executive Officer</p>
//                   </div>
//                   <div className="col-6">
//                     <p>(GMT+05:30)</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Chief Executive Officer</p>
//                   </div>
//                   <div className="col-6">
//                     <p>(GMT+05:30)</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Chief Executive Officer</p>
//                   </div>
//                   <div className="col-6">
//                     <p>(GMT+05:30)</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Chief Executive Officer</p>
//                   </div>
//                   <div className="col-6">
//                     <p>(GMT+05:30)</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="card mb-3">
//               <h5 className="card-header">Basic Information</h5>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Employee ID</p>
//                   </div>
//                   <div className="col-6">
//                     <p>VBE001</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>First Name</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Dhinesh</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Last Name</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Babu</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Nick Name</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Chennai</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Email address</p>
//                   </div>
//                   <div className="col-6">
//                     <p>dhinesh@vividobots.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-6">
//             <div className="card mb-3">
//               <h5 className="card-header">Basic Information</h5>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Employee ID</p>
//                   </div>
//                   <div className="col-6">
//                     <p>VBE001</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>First Name</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Dhinesh</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Last Name</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Babu</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Nick Name</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Chennai</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Email address</p>
//                   </div>
//                   <div className="col-6">
//                     <p>dhinesh@vividobots.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-6">
//             <div className="card mb-3">
//               <h5 className="card-header">Work Information</h5>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Department</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Design</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Location</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Design</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Designation</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Chief Executive Officer</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Zoho Role</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Admin</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Employment Type</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Permanent</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Employee Status</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Active</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Source of Hire</p>
//                   </div>
//                   <div className="col-6">
//                     <p></p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-6">
//             <div className="card mb-3">
//               <h5 className="card-header">Personal Details</h5>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Date of Birth</p>
//                   </div>
//                   <div className="col-6">
//                     <p>12/01/2004</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Age</p>
//                   </div>
//                   <div className="col-6">
//                     <p>20</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Gender</p>
//                   </div>
//                   <div className="col-6">
//                     <p>F</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Marital Status</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Single</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>About Me</p>
//                   </div>
//                   <div className="col-6">
//                     <p>Bla..Bla..Bla..</p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-6">
//                     <p>Ask me about/Expertise</p>
//                   </div>
//                   <div className="col-6">
//                     <p>---</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [employee, setEmployee] = useState({
    id: 'VBE001',
    firstName: 'Dhinesh',
    lastName: 'Babu',
    position: 'Chief Executive Officer',
    department: 'Design',
    email: 'dhinesh@vividobots.com',
    location: 'Chennai',
    timezone: '(GMT+05:30)',
    directReports: [
      { name: 'Jayanth Krishna', position: 'Chief Product Officer' }
    ]
  });

  const [tags, setTags] = useState([]);

  const addTag = () => {
    alert("your tag");
  };

  const addSkill = () => {
    // Functionality to add a skill
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row py-4" style={{ backgroundColor: '#556b2f', color: 'white' }}>
        <div className="col-md-12 ps-5">
          <img src="profile-picture.jpg" className="rounded-circle img-fluid" alt="Profile" />
        </div>
        <div className="col-md-8 ps-5">
          <h6>{`${employee.id} - ${employee.firstName} ${employee.lastName}`}</h6>
          <p className='list-inline-item'>{employee.position}</p>
          <p className='list-inline-item'>{employee.department}</p>
          <p className='list-inline-item'>{employee.email}</p>
        </div>
        <div className="col-md-2">
          <nav className="nav flex-column">
            <button className="btn btn-outline-light mb-2">Edit</button>
            <button className="btn btn-outline-light mb-2">View Details</button>
            <button className="btn btn-outline-light">Personal Settings</button>
          </nav>
        </div>
      </div>

      <div className="row mt-4">
      <div className="col-md-6 mb-4">
  <div className="border p-3 bg-white">
    <h5>About Me</h5>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <p><i className="bi bi-gear"></i> General</p>
        <p><i className="bi bi-clock"></i> {employee.timezone}</p>
      </div>
      <div className="col-md-6">
        <p><i className="bi bi-brush"></i> {employee.department}</p>
        <p><i className="bi bi-person-badge"></i> {employee.position}</p>
      </div>
    </div>
    <button className="btn btn-primary btn-sm">+</button>
  </div>
</div>

        <div className="col-md-6 mb-4">
          <div className="border p-3 bg-white">
            <h5>Skill Set</h5>
            <hr />
            <button className="btn btn-primary btn-sm" onClick={addSkill}>+</button>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="border p-3 bg-white">
            <h5>Work Information</h5>
            <hr />
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Location:</strong> {employee.location}</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="border p-3 bg-white">
            <h5>Direct Reports</h5>
            <hr />
            {employee.directReports.map((report, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <img src="default-avatar.jpg" className="rounded-circle" width={50} height={50} alt="Direct Report" />
                <div className="ml-3">
                  <p className="mb-0">{report.name}</p>
                  <small>{report.position}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="border p-3 bg-white">
            <h5>Tags</h5>
            <hr />
            <button className="btn btn-primary btn-sm" onClick={addTag}>+</button>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="border p-3 bg-white">
            <h5>Basic Information</h5>
            <hr />
            <p><strong>Employee ID:</strong> {employee.id}</p>
            <p><strong>First Name:</strong> {employee.firstName}</p>
            <p><strong>Last Name:</strong> {employee.lastName}</p>
            <p><strong>Nick Name:</strong> -</p>
            <p><strong>Email address:</strong> {employee.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;






  //  <div className="profile">
  //     <div className="card">
  //       <h2>About Me</h2>
  //       <hr />
  //       <div className="leftt">
  //         <h4>Design</h4>
  //         <h4>General</h4>
  //       </div>
  //       <div className="rightt">
  //         <h4>CEO</h4>
  //         <h4>GMT</h4>
  //       </div>
  //     </div>

  //   </div>