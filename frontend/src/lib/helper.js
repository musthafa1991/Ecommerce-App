export const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Replace with actual token retrieval logic
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};
