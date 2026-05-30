import { Link, NavLink } from "react-router";

export const NavigationBar = () => {
  const styles = {
    border: "1px solid black",
    padding: "2px 6px",
    borderRadius: "6px",
  };
  return (
    <div style={{ display: "flex" }}>
      <NavLink
        className={(isActive) => (isActive ? "active" : "")}
        style={styles}
        to={"/"}
      >
        Your'e Manager
      </NavLink>
      <Link style={styles} to={"social"}>
        Social Manager
      </Link>
    </div>
  );
};
