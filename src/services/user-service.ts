import axios from "utils/axios";

export const getUserData = async () => {
  const response = await axios.get("/users/getUser");
  const userData = response.data;
  return userData;
};

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post("/users/login/", {
      username,
      password,
    });
    const token = response.data.authToken;
    if (token) {
      localStorage.setItem("authToken", token);
      return true;
    }
    return false;
  } catch {
    throw Error("Caught error during logging in");
  }
};

export const updateUser = async ({
  username,
  email,
}: {
  username: string;
  email: string;
}) => {
  try {
    const response = await axios.post("/users/updateUser/", {
      username,
      email,
    });
    return response.data;
  } catch (err) {
    throw Error("Caught error during updating user");
  }
};
