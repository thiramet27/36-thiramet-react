import React, { useState } from "react";

function AdminSection({ user, setUser }) {
  const [newUser, setNewUser] = useState({ name: "", lastname: "", position: "" });

  const handleAddUser = () => {
    if (newUser.name && newUser.lastname && newUser.position) {
      const id = user.length + 1;
      setUser([...user, { id, ...newUser }]);
      setNewUser({ name: "", lastname: "", position: "" });
    }
  };

  const handleDelete = (id) => {
    setUser(user.filter((emp) => emp.id !== id));
  };

  return (
    <div className="p-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Create user here</h2>
      
      {/* Form for Adding New User */}
      <div className="mb-8 flex flex-row items-center space-x-16 ">
        <input
          type="text"
          value={newUser.name}
          placeholder="Name..."
          className="px-4 py-2 text-xl border border-gray-300 rounded-lg w-80"
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          value={newUser.lastname}
          placeholder="Lastname..."
          className="px-4 py-2 text-xl border border-gray-300 rounded-lg w-80"
          onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
        />
        <input
          type="text"
          value={newUser.position}
          placeholder="Position..."
          className="px-4 py-2 text-xl border border-gray-300 rounded-lg w-80"
          onChange={(e) => setNewUser({ ...newUser, position: e.target.value })}
        />
        <button
          onClick={handleAddUser}
          className="px-8 py-3 text-lg bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          Add New User
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto shadow-2xl rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="px-8 py-6 text-left text-4xl">Name</th>
              <th className="px-8 py-6 text-left text-4xl">Lastname</th>
              <th className="px-8 py-6 text-left text-4xl">Position</th>
              <th className="px-8 py-6 text-left text-4xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((emp) => (
              <tr key={emp.id} className="border-b bg-gray-100 hover:bg-gray-200">
                <td className="px-8 py-6 text-2xl">{emp.name}</td>
                <td className="px-8 py-6 text-2xl">{emp.lastname}</td>
                <td className="px-8 py-6 text-2xl">{emp.position}</td>
                <td className="px-8 py-6 text-2xl">
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="px-6 py-2 text-2xl bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSection;
