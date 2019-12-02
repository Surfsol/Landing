import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fecthIconCard } from "../actions/iconCard-actions";

import Grid from "./Grid";

const IconCard = props => {
  console.log(`IconCard props.match`, props.match);
  console.log(`iconCard projects`, props.projects);

  const id = props.match.params.id;

  useEffect(() => {
    props.fecthIconCard(props.match.params.id);
  }, id);

  return (
    <>
      <div>
        <h1></h1>
        {props.projects.map(e => (
          <Grid key={e.id} list={e} />
        ))}
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
