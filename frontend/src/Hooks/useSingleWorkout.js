import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSingleWorkout = (id) => {
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.authentication);

  useEffect(() => {
    const fetchWorkout = async () => {
      if (!user) {
        setError("User not logged in");
        return;
      }

      try {
        const token = user.token;
        const response = await fetch(
          `https://fitnessplanner-uxlg.onrender.com/workout/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const json = await response.json();
        if (!response.ok) {
          setError(json.error);
        } else {
          setWorkout(json);
        }
      } catch (err) {
        setError("An error occurred while fetching the workout data.");
      }
    };

    fetchWorkout();
  }, [id, user]);

  return { workout, error };
};

export default useSingleWorkout;
