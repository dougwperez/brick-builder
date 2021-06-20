import React from "react";

class GoalCheckEntry extends React.Component {
  constructor(props) {
    super(props);
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
          type="checkbox"
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
