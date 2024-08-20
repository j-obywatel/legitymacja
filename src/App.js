import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  const myDate = date.toLocaleString("pl-PL", {
    minute: "numeric",
    hour: "2-digit",
    second: "2-digit",
  });
  const mySecondDate = date.toLocaleString("pl-PL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="calosc">
      <div className="gora"></div>
      <div className="date">
        Czas: {myDate} {""}
        {mySecondDate}
      </div>
      <div className="cialo">
        <img
          // src="https://jacob-jk.github.io/legitymacja/images/zdjecie.png"
          alt="profil"
          className="profil"
        />
        <img
          // src="https://jacob-jk.github.io/legitymacja/images/flaga.gif"
          alt="flaga"
          className="flaga"
        />
      </div>
      <div className="dol"></div>
    </div>
  );
}

export default App;
