import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "@/services/api"; 

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchAllUsers();
        console.log(usersData,"gettttttt");
        
        setUsers(usersData);
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left border-r border-gray-300">
                  Name
                </th>
                <th className="px-4 py-2 text-left border-r border-gray-300">
                  Email
                </th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2 border-r">{user.name}</td>
                  <td className="px-4 py-2 border-r">{user.email}</td>
                  <td className="px-4 py-2">
                    <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 mr-2">
                      Edit
                    </button>
                    <button className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
