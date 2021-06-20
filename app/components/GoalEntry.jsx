import React from "react";

class GoalEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goal, deleteGoal } = this.props;
    return (
      <li>
        {goal.goals}
        <button onClick={() => deleteGoal(goal._id)}>Delete</button>
      </li>
    );
  }
}

export default GoalEntry;
