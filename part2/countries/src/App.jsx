import "./App.css";

import { useEffect, useState } from "react";

import ReactDOM from "react-dom/client";

const countryService = {
  baseUrl: "https://studies.cs.helsinki.fi/restcountries/api/all",
  getAll: () => {
    return fetch(countryService.baseUrl).then((res) => {
      return res.json();
    });
  },
};

const Countries = ({ countries }) => {
  // console.log(countries);

  if (countries && countries.length > 1) {
    const handleShow = (e, country) => {
      const c = <Countries countries={[country]} />;
      console.log(`country-${country.name.common}`);
      const el = document.getElementById(`country-${country.name.common}`);
      ReactDOM.createRoot(el).render(c);
    };
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name.common} id={`country-${country.name.common}`}>
            {country.name.common}
            <button onClick={(e) => handleShow(e, country)}>show</button>
          </li>
        ))}
      </ul>
    );
  } else if (countries.length === 1) {
    console.log(countries[0]);
    const country = countries[0];
    return (
      <ul>
        <h5>Country {country.name.common}</h5>
        <div>
          <p>Capital: {country.capital}</p>
          <p>
            Langues:{" "}
            {Object.keys(country.languages).map((key) => (
              <h5>{country.languages[key]}</h5>
            ))}
          </p>
          <div>
            <img src={`https://flagsapi.com/${country.cca2}/flat/64.png`} />
          </div>
        </div>
      </ul>
    );
  } else {
    console.log(countries);
  }
};
function App() {
  const [filter, setFilter] = useState("");
  const [initialCountries, setInitialCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((countries) => {
      setInitialCountries(countries);
    });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [filter]);

  const handleSearch = () => {
    const contries = initialCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(filter.toLowerCase());
    });
    // console.log(filter, _selectedContries);
    setSelectedCountries(contries);
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
        <Countries countries={selectedCountries} />
      </div>
      <div>
        <h5>total countries: {initialCountries.length} </h5>
      </div>
    </>
  );
}

export default App;
