import React from "react";
import styles from "styles/components/checkin-modal";

class CheckInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.props.postGoal(this.state.value);
  }

  render() {
    return (
      <div>
        {this.props.showCheckIn ? (
          <div className={styles.goalmodal}>
            <div className={styles.modal}>
              <h1 style={{ textAlign: "center" }}>Daily Goal Check-In</h1>
              <br />
              <h3 style={{ textAlign: "center" }}>
                Complete your daily goals for credits.
              </h3>
              <p>Something Something in the Month of May</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CheckInModal;
