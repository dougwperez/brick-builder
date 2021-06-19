import React from "react";

import Button from "components/Button";
import ColorPicker from "components/ColorPicker";
import BrickPicker from "components/BrickPicker";
import GoalModal from "components/GoalModal";

import styles from "styles/components/bottombar";
import Help from "components/Help";

const BottomBar = ({
  mode,
  onClickSetMode,
  color,
  onClickSetColor,
  grid,
  onClickToggleGrid,
  brickSize,
  onClickSetBrick,
  utilsOpen,
  onClickToggleUtils,
  children,
  inversed,
  toggleGoalsModal,
  showGoals,
}) => {
  return (
    <div>
      <div className={styles.bottombar}>
        <div className={styles.section}>
          <div className={styles.section}>
            <div className={styles.title}>Streak: 10 days!</div>
          </div>

          <Button
            active={mode === "paint"}
            onClick={toggleGoalsModal}
            icon="checkmark"
            text="Goals"
          />

          <Button
            active={utilsOpen}
            onClick={onClickToggleUtils}
            icon="gear-b"
            text="Options"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
