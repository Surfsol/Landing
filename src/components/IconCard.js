import React, { useEffect } from "react";

import { fecthIconCard } from "../actions/iconCard-actions";

import { useSelector, useDispatch } from "react-redux";
import redux from "../assets/icons/reduxlogo.png";

import Comments from "./CommentsModal";


import Grid from "./Grid";

import "../assets/css/iconCard.scss";

const IconCard = props => {
  const id = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthIconCard(props.match.url));
  }, id);

  //show loading
  const projects = useSelector(state => state.iconCardReducer);

  if (projects.list.length === 0) {
    return (
      <div className="spinner">
        <p>loading...</p>
        <img className="loading" src={redux} alt="redux" />
        <p>Redux</p>
      </div>
    );
  }

  return (
    <>
      <div>
        {projects.list.map(e => (
          <React.Fragment key={e.id}>
            <Grid list={e} />
            {/* <Comments item={e} /> */}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default IconCard;
