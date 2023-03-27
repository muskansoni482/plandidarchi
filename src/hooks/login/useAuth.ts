export const useAuth = () => {
  return (
    localStorage.getItem("authUser") &&
    localStorage.getItem("authUser") === "appinventiv@gmail.com"
  );
};
