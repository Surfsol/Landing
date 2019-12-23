import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fecthIconCard } from "../actions/iconCard-actions";

import Grid from "./Grid";

const IconCard = props => {
  console.log(`IconCard props.match`, props.match.url);
  console.log(`iconCard projects`, props.projects);

  const id = props.match.params;

  useEffect(() => {
    props.fecthIconCard(props.match.url);
  }, id);

  return (
    <>
      <div>
        <h1></h1>
        <h1>
          {props.projects.map(e => (
            <React.Fragment key={e.id}>
              <Grid list={e} />
            </React.Fragment>
          ))}
        </h1>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    projects: state.iconCard.list
  };
};
export default connect(mapStateToProps, { fecthIconCard })(IconCard);
