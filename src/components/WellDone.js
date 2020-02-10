import React from "react";

const WellDone = () => {
  return (
    <>
      <h1>Well Done</h1>
      <h2>Currently deployed on Netlify: https://welldone.netlify.com/</h2>
      <p> username: a.com , password: 123</p>
      <h2>
        Product Vision Document:
        https://www.notion.so/WellDone-068de827be164b9e814b636f9f36bef2#8389afde51144323bba0a3ab1ad1852e
      </h2>
      <p>Company Description</p>
      <h2>Stack</h2>
      <h3>React</h3>
      <h3>Redux</h3>
      <h3>AG-Grid React</h3>
      <h3>Material-UI</h3>
      <h3>Ant</h3>
      <h3>Node.Js</h3>
      <h3>PostgreSQL</h3>
      <h3>Heroku</h3>
      <h3>Netlify</h3>

      <h3>Objective:Organize Data Redux</h3>
      <p>
        Our first task was to organize the frontend by setting up a Redux
        environment, so data could easily be accessed and updated in the grids.
      </p>
      <p>
        We converted many React Class Components to Functional components and
        used Redux hooks in the Functional components.
      </p>
      <h3>
        Objective: Give administrative users ability to print, create, edit and
        delete Accounts, Organizations and Sensors. Also give them the ability
        filter and search such information.
      </h3>
      <p>
        We added modals to the categorical grids to create and edit related
        information.
      </p>
      <p>
        Filtering and search methods were also added to AG-Grid, and additional
        search options were displayed outside of the Grid for a better user
        experience. As well as edit, delete and print options.
      </p>
      <p>
        Also we reorganized the site, so grids and modals could be easily found
        and displayed.
      </p>
      <h3>
        Limit user permissions, so they could only access company and or user
        specific information.
      </h3>
      <p>
        This was accomplished by storing user company id numbers and roles in
        Redux and local storage. Company admin users would only fetch
        information from the API based upon their company id. And user-roles
        determined which components would be displayed. A few backend tables
        were updated using foreign keys to connect them.
      </p>
      <h3>Manage </h3>
      <h3>
        Objective: Improve user experience by providing filter / search
        functions, Improved graph displays
      </h3>
    </>
  );
};
export default WellDone;
