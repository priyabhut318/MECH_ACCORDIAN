import "./App.css";
import React, { useState, useEffect } from "react";
import AccordianForExapand from "./components/AccordianData/AccordianForExapand";
import { demodata } from "./api/demodata";

function App() {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      console.log("data");
      const data = await demodata();
      console.log(data, "data");
      setProfiles(data.profiles);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>User Profiles</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AccordianForExapand profiles={profiles} />
          <div className="footer">
            <p>© 2023 Accordian Component. All rights reserved.</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
