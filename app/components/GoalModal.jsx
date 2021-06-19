import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "styles/components/goal-modal";

class GoalModal extends React.Component {
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
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {this.props.showGoals ? (
          <div className={styles.goalmodal}>
            <div className={styles.modal}>
              <h1 style={{ textAlign: "center" }}>Goal Constructor</h1>
              <br />
              <h3 style={{ textAlign: "center" }}>
                Select up to three daily goals:
              </h3>
              <p>
                Pick up to 3 daily habits that you can realisitically pull off,
                well.. everyday. Every day, you will receive a credit to build a
                brick if you complete said task.
              </p>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default GoalModal;
