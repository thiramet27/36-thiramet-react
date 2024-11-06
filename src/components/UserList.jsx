import React from "react";

function UserList({ user }) {
  return (
    <div className="p-10">
      <div className="overflow-x-auto shadow-2xl rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-800 text-white ">
              <th className="px-8 py-6 text-4xl px-20">Name</th>
              <th className="px-8 py-6 text-4xl px-20">Lastname</th>
              <th className="px-8 py-6 text-4xl px-20">Position</th>
            </tr>
          </thead>
          <tbody>
            {user.map((emp, index) => (
              <tr
                key={index}
                className={`border-b ${index % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
              >
                <td className="px-8 py-6 text-2xl px-20">{emp.name}</td>
                <td className="px-8 py-6 text-2xl px-20">{emp.lastname}</td>
                <td className="px-8 py-6 text-2xl px-20">{emp.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
