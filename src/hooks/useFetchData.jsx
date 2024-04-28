import { useState, useEffect,useContext } from "react";
import { authContext } from "../context/AuthContext";

const useFetchData = (url, body="") => {
  const [data, setData] = useState([]);
  const {token}  = useContext(authContext)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
          // body,
        });
        const result = await res.json();
        if (!res.ok) {
            throw new Error(result.message + "Oops");
        }
        
        console.log("Data Founded is : ",result)
       
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url,token]);

  return {data, loading, error};
};

export default useFetchData;
