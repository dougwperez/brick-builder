import React from "react";

class GoalCheckEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      number: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState(({ isComplete }) => ({ isComplete: !isComplete }));
    if (this.state.number === 0) {
      this.setState({ number: 1 });
      this.props.incrementCount();
    } else {
      this.setState({ number: 0 });
      this.props.decrementCount();
    }
  }

  // {goal.goals}
  render() {
    const { goal } = this.props;

    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <h3>{goal.goals} </h3>
        <input
          name={goal.goals}
          type="checkbox"
          checked={this.state.isComplete}
          onChange={this.handleInputChange}
          style={{
            transform: "translateY(11px)",
            margin: "8px",
          }}
        />
      </div>
    );
  }
}

export default GoalCheckEntry;
