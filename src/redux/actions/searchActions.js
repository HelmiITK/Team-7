import axios from "axios";
import { setSearching } from "../reducers/searchReducer";

export const getSearchMovies =
  (errors, setErrors, query, page = 1) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      if (!token) return;

      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/search/movie?page=${page}&query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response.data;

      dispatch(setSearching(data));
      setErrors({ ...errors, isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          ...errors,
          isError: true,
          message: error?.response?.data?.message || error?.message,
        });
      }

      alert(error?.message);
      setErrors({
        ...errors,
        isError: true,
        message: error?.message,
      });
    }
  };
