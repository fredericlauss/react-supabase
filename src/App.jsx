import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_APP_URL;
const apiAnonKey = import.meta.env.VITE_APP_ANON_KEY;

const supabase = createClient(apiUrl, apiAnonKey);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
