import SignIn from "./SignIn";

const DisplayUsername = ({ loggedInUser }) => {
  return <p>Hello, {loggedInUser.username}</p>;
};

export default DisplayUsername;
