export const isAuthenticated = () => {
  // Check for a valid token or user information
  // For example, checking if a token exists in localStorage
  const token = localStorage.getItem("token"); // Replace with your token storage method
  return !!token;
};
