import axios from "axios";
import React, { useEffect, useState } from "react";

function NavbarButon() {
  const [nav, setNav] = useState([]);
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
      .then((res) => {
        // console.log(res.data.data.data);
        setNav(res.data.data.data);
      });
  }, []);
  return (
    <div className="flex justify-between container m-auto px-5 pt-5">
      <p> 🔥 Aksiyalar</p>
      {nav.map((item, id) => {
        return (
          <div key={id}>
            <div>
              <p className=" font-semibold cursor-pointer hover:opacity-60 sekinlashtrish">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
    
  );
}

export default NavbarButon;
