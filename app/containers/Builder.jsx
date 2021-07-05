import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import axios from "axios";
import Moment from "react-moment";

import {
  getMode,
  getColor,
  getIsGridVisible,
  getBrickDimensions,
  getAreUtilsOpen,
  getBricks,
} from "selectors";
import {
  setMode,
  setColor,
  toggleGrid,
  setBrick,
  toggleUtils,
  addBrick,
  removeBrick,
  updateBrick,
  resetScene,
  setScene,
} from "actions";
import Scene from "components/engine/Scene";
import Topbar from "components/Topbar";
import BottomBar from "components/BottomBar";
import Help from "components/Help";
import Sidebar from "components/Sidebar";
import GoalModal from "components/modals/GoalModal";
import CheckInModal from "components/modals/CheckInModal";

import styles from "styles/containers/builder";

class Builder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showGoals: false,
      showCheckIn: false,
      goals: [],
      credits: { _id: "", dailyCredits: "", totalCredits: "", newDay: "" },
    };

    this.toggleGoalsModal = this.toggleGoalsModal.bind(this);
    this.toggleCheckInModal = this.toggleCheckInModal.bind(this);
    this.getGoals = this.getGoals.bind(this);
    this.postGoal = this.postGoal.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
    this.patchUpTotalCredits = this.patchUpTotalCredits.bind(this);
    this.patchDownTotalCredits = this.patchDownTotalCredits.bind(this);
    this.patchToggleNewDayCredits = this.patchToggleNewDayCredits.bind(this);
    this.getCredits = this.getCredits.bind(this);
  }

  componentDidMount() {
    this.getGoals();
    this.getCredits();
  }

  toggleGoalsModal() {
    this.setState(({ showGoals }) => ({ showGoals: !showGoals }));
    this.setState({ showCheckIn: false });
  }

  toggleCheckInModal() {
    this.setState(({ showCheckIn }) => ({ showCheckIn: !showCheckIn }));
    this.setState({ showGoals: false });
  }

  getGoals() {
    axios
      .get("/goals")
      .then((response) => {
        // console.log("response.data.data", response.data.data);
        this.setState({ goals: response.data.data });
      })
      .catch((error) => console.log(error, "ERROR at getGoals"));
  }

  postGoal(goalInput) {
    // console.log("goalInput", goalInput);
    axios
      .post("/goals", goalInput)
      .then((response) => {
        // console.log(response);
        this.getGoals();
      })
      .catch((error) => console.log(error, "ERROR AT POSTGOAL"));
  }

  deleteGoal(id) {
    // console.log("id", id);
    axios
      .delete(`/goals/${id}`)
      .then((response) => {
        // console.log(response);
        this.getGoals();
      })
      .catch((error) => console.log(error, "ERROR AT deleteGoal"));
  }

  getCredits() {
    axios
      .get("/credits")
      .then((response) => {
        console.log("response.data.data", response.data.data);
        this.setState({ credits: response.data.data[0] });
      })
      .catch((error) => console.log(error, "ERROR at getGoals"));
  }

  patchUpTotalCredits(id, dailyCredits) {
    this.patchToggleNewDayCredits(id);
    this.toggleCheckInModal();
    console.log("dailyCredits", dailyCredits);
    // console.log("id", id);
    // console.log("this.state.credits.totalCredits", this.state.credits._id);
    const totalCs = dailyCredits + this.state.credits.totalCredits;
    console.log("totalCs", totalCs);
    const totalCreditsObj = { totalCredits: totalCs };
    axios
      .patch(`/credits/${id}`, totalCreditsObj)
      .then((response) => {
        // console.log(response);
        this.getCredits();
      })
      .catch((error) => console.log(error, "ERROR AT patchUpTotalCredits"));
  }

  patchDownTotalCredits(id) {
    console.log("saved bricks", this.props.bricks);
    console.log("id", id);
    // console.log("this.state.credits.totalCredits", this.state.credits._id);
    const totalCs = this.state.credits.totalCredits - 1;
    console.log("totalCs", totalCs);
    const totalCreditsObj = { totalCredits: totalCs };
    axios
      .patch(`/credits/${id}`, totalCreditsObj)
      .then((response) => {
        // console.log(response);
        this.getCredits();
      })
      .catch((error) => console.log(error, "ERROR AT patchDownTotalCredits"));
  }

  patchToggleNewDayCredits(id) {
    const NewDayObj = { newDay: false };
    axios
      .patch(`/credits/${id}`, NewDayObj)
      .then((response) => {
        this.getCredits();
      })
      .catch((error) =>
        console.log(error, "ERROR AT patchToggleNewDayCredits")
      );
  }

  // postSavedBricks() {

  // }

  render() {
    const {
      mode,
      setMode,
      color,
      setColor,
      gridVisible,
      toggleGrid,
      dimensions,
      setBrick,
      utilsOpen,
      toggleUtils,
      removeBrick,
      addBrick,
      bricks,
      updateBrick,
      resetScene,
      setScene,
    } = this.props;

    return (
      <div className={styles.builder}>
        <Topbar
          onClickSetMode={setMode}
          onClickSetColor={setColor}
          onClickToggleGrid={toggleGrid}
          mode={mode}
          color={color}
          grid={gridVisible}
          brickSize={dimensions}
          onClickSetBrick={setBrick}
          utilsOpen={utilsOpen}
          onClickToggleUtils={toggleUtils}
        >
          <Sidebar
            utilsOpen={utilsOpen}
            resetScene={resetScene}
            objects={bricks}
            importScene={setScene}
            grid={gridVisible}
            onClickToggleGrid={toggleGrid}
          />
        </Topbar>
        {/* MOMENT WORKS, GETS CURRENT TIME, JUST NEED TO REFRESH PAGE RIGHT AFTER MIDNIGHT */}
        {/* <Moment local></Moment> */}
        <Scene
          brickColor={color}
          objects={bricks}
          mode={mode}
          grid={gridVisible}
          dimensions={dimensions}
          // shifted={utilsOpen}
          removeObject={removeBrick}
          addObject={addBrick}
          updateObject={updateBrick}
          credits={this.state.credits}
          patchDownTotalCredits={this.patchDownTotalCredits}
        />
        <GoalModal
          showGoals={this.state.showGoals}
          postGoal={this.postGoal}
          deleteGoal={this.deleteGoal}
          goals={this.state.goals}
        />
        <CheckInModal
          patchUpTotalCredits={this.patchUpTotalCredits}
          patchToggleNewDayCredits={this.patchToggleNewDayCredits}
          showCheckIn={this.state.showCheckIn}
          goals={this.state.goals}
          credits={this.state.credits}
        />
        <BottomBar
          onClickSetMode={setMode}
          onClickSetColor={setColor}
          onClickToggleGrid={toggleGrid}
          mode={mode}
          color={color}
          grid={gridVisible}
          brickSize={dimensions}
          onClickSetBrick={setBrick}
          utilsOpen={utilsOpen}
          onClickToggleUtils={toggleUtils}
          showGoals={this.state.showGoals}
          inversed={utilsOpen}
          toggleGoalsModal={this.toggleGoalsModal}
          toggleCheckInModal={this.toggleCheckInModal}
          credits={this.state.credits}
        >
          <Sidebar
            utilsOpen={utilsOpen}
            resetScene={resetScene}
            objects={bricks}
            importScene={setScene}
            onClickToggleGrid={toggleGrid}
            grid={gridVisible}
          />
        </BottomBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mode: getMode(state),
  color: getColor(state),
  gridVisible: getIsGridVisible(state),
  dimensions: getBrickDimensions(state),
  utilsOpen: getAreUtilsOpen(state),
  bricks: getBricks(state),
});

const mapDispatchToProps = {
  setMode,
  setColor,
  toggleGrid,
  setBrick,
  toggleUtils,
  removeBrick,
  addBrick,
  updateBrick,
  resetScene,
  setScene,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Builder);
