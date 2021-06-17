import React from "react";

import Button from "components/Button";
import ColorPicker from "components/ColorPicker";
import BrickPicker from "components/BrickPicker";

import styles from "styles/components/bottombar";

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
}) => {
  return (
    <div className={styles.bottombar}>
      <div className={styles.section}>
        <div className={styles.section}>
          <div className={styles.title}>Streak: 10 days!</div>
        </div>
        <Button
          active={mode === "paint"}
          onClick={() => onClickSetMode("paint")}
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
  );
};

export default BottomBar;
