import React from "react";
import styles from "../components/MyCountries.module.css";

const MyCountries = ({ countries }) => {
  const [mycountry, setmycountry] = React.useState(countries);
  const [populationflag, setpopulationflag] = React.useState(0);
  const [areaflag, setareaflag] = React.useState(0);
  const [name, setname] = React.useState("");

  const orderbypopulation = (countries) => {
    if (populationflag == 0) {
      let data = [...countries].sort((a, b) =>
        a.population < b.population ? 1 : -1
      );
      setpopulationflag(1);
      return setmycountry(data);
    }

    if (populationflag == 1) {
      let data = [...countries].sort((a, b) =>
        a.population > b.population ? 1 : -1
      );
      setpopulationflag(0);
      return setmycountry(data);
    }
  };

  const orderbyarea = (countries) => {
    if (areaflag == 0) {
      let data = [...countries].sort((a, b) => (a.area < b.area ? 1 : -1));
      setareaflag(1);
      return setmycountry(data);
    }

    if (areaflag == 1) {
      let data = [...countries].sort((a, b) => (a.area > b.area ? 1 : -1));
      setareaflag(0);
      return setmycountry(data);
    }
  };

  return (
    <div className={styles.countrytable_outer}>
      <div className={styles.countrytable_inner}>
        <div className={styles.head}>
          <button>Country</button>
          <button>Flag</button>
          <button>Capital</button>
          <button onClick={() => orderbypopulation(countries)}>
            Population
          </button>
          <button onClick={() => orderbyarea(countries)}>Area</button>
        </div>
        <div className={styles.content}>
          {mycountry.map((country) => {
            return (
              <div className={styles.country_row}>
                <div>
                  <p>{country.name.common}</p>
                </div>
                <div className={styles.country_flag}>
                  <img src={country.flags.png} />
                </div>
                <div>
                  <p>{country.capital}</p>
                </div>
                <div>
                  <p>{country.population}</p>
                </div>
                <div>
                  <p>{country.area}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCountries;
