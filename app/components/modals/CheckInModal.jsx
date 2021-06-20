import React from "react";
import styles from "styles/components/checkin-modal";
import GoalCheckEntry from "../GoalCheckEntry";

class CheckInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", count: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.props.postGoal(this.state.value);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const { goals, patchUpTotalCredits, credits, showCheckIn } = this.props;
    // console.log("CREDITS!!!!", credits._id);
    return (
      <div>
        {showCheckIn ? (
          <div className={styles.goalmodal}>
            <div className={styles.modal}>
              <h1 style={{ textAlign: "center" }}>"Date Here" Check-In</h1>
              <br />
              <h3 style={{ textAlign: "center" }}>
                Complete your daily goals for credits.
              </h3>
              {/* <p>Something Something in the Month of May</p> */}
              <ul>
                {goals.map((goal) => (
                  <GoalCheckEntry
                    key={goal.id}
                    goal={goal}
                    incrementCount={this.incrementCount}
                    decrementCount={this.decrementCount}
                  />
                ))}
              </ul>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ color: "green" }}>
                  {this.state.count} Credits Earned Today
                </h3>
                <button
                  onClick={() =>
                    this.props.patchUpTotalCredits(
                      credits._id,
                      this.state.count
                    )
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CheckInModal;
