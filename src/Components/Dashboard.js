import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/components/dashboard.css";
import Header from "./Header";

const Dashboard = (props) => {

  const values = [];
  const length = props.heroes.length;
  if (length > 4) {
    for (let i = 0; i < 4 ; i++) {
      values[i] = props.heroes[i].name;
    }
  } else {
    for (let i = 0; i < length; i++) {
      values[i] = props.heroes[i].name;
    }
  }

  return (
    <div className="dashboard">
      <Header />
      <h3 className="dashboard_title">Top Heroes</h3>

      {values.length <= 0 && <p><Link to="/add">Add an Hero</Link></p>}
      {values.map((value) => {
        console.log(values.length);
        return (
            <div className="dashboard_value">
            <p >{value}</p>
            </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    heroes: state,
  };
};

export default connect(mapStateToProps)(Dashboard);