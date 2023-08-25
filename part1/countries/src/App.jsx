import "./App.css";

import { useEffect, useState } from "react";

const countryService = {
  baseUrl: "https://studies.cs.helsinki.fi/restcountries/api/all",
  getAll: () => {
    return fetch(countryService.baseUrl).then((res) => {
      return res.json();
    });
  },
};
function App() {
  const [filter, setFilter] = useState("");
  const [initialCountries, setInitialCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    countryService.getAll().then((countries) => {
      setInitialCountries(countries);
    });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [filter]);

  const handleSearch = () => {
    const _selectedContries = initialCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(filter.toLowerCase());
    });
    console.log(filter, _selectedContries);
    setSelectedCountries(_selectedContries);
  };
  return (
    <>
      <h1>Country Finder</h1>
      <div>
        <form>
          <label>
            find Countries:{" "}
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              type="text"
            />
          </label>
        </form>
      </div>
      <div>
        <h3>countries</h3>
        <div>
          {selectedCountries.length && selectedCountries.length > 5 ? (
            <h5>Too many matches, specify another filter</h5>
          ) : (
            <ul>
              {selectedCountries.map((country) => (
                <li key={country.name.common}>{country.name.common}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <h5>total countries: {initialCountries.length} </h5>
      </div>
    </>
  );
}

export default App;
