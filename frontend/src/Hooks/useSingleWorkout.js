import { useEffect, useState } from "react";

const useSingleWorkout = (id) => {
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch("/workout/" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
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
  }, [id]);

  return { workout, error };
};

export default useSingleWorkout;
