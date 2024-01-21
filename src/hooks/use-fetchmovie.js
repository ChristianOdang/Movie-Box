import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoadingUpdate } from "../context/LoadingContext";

const useFetchMovie = (movie) => {
  const navigate = useNavigate();
  const API_URL = "https://api.themoviebd.org/3";
  const toggleLoading = useLoadingUpdate();
  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/movie/${movie.id}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      if (data) {
        navigate(`/movies/${data.id}`, {
          state: { movie: data },
        });
        const load = setTimeout(() => toggleLoading(false), 1000);
      }
    } catch (error) {
      const load = setTimeout(() => {
        toggleLoading(false);
        toast.error(`Error: ${error}`);
      }, 1000);
    }
  };

  const fetch = () => {
    toggleLoading(true);
    fetchMovie()
    console.log(movie);
  };

  return [fetch];
};

export default useFetchMovie;