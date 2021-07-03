import React from "react";

import Button from "components/Button";
import ColorPicker from "components/ColorPicker";
import BrickPicker from "components/BrickPicker";

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
  toggleCheckInModal,
  showGoals,
  credits,
}) => {
  return (
    <div>
      <div className={styles.bottombar}>
        <div className={styles.section}>
          <div className={styles.section}>
            <div className={styles.title}>Credits: {credits.totalCredits}</div>
          </div>

          <Button
            active={mode === "paint"}
            onClick={toggleGoalsModal}
            icon="trophy"
            text="Goals"
            style={{ color: "pink" }}
          />
          <Button
            active={mode === "paint"}
            onClick={toggleCheckInModal}
            icon="checkmark"
            text="Check-In"
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
