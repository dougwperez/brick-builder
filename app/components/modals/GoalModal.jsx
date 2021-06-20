import React from "react";
import styles from "styles/components/goal-modal";
import GoalEntry from "../GoalEntry";

class GoalModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { goals: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.props.postGoal(this.state);
  }

  render() {
    const { goals, showGoals, deleteGoal } = this.props;
    return (
      <div>
        {showGoals ? (
          <div className={styles.goalmodal}>
            <div className={styles.modal}>
              <h1 style={{ textAlign: "center" }}>Goal Builder</h1>
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
                  Goal:
                  <input
                    name="goals"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Add Goal" />
              </form>
              <ul>
                {goals.map((goal) => (
                  <GoalEntry
                    key={goal.id}
                    goal={goal}
                    deleteGoal={deleteGoal}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default GoalModal;
