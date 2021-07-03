import React, { useState, useEffect, useToggle } from "react";

import Button from "components/Button";
import ColorPicker from "components/ColorPicker";
import BrickPicker from "components/BrickPicker";

import styles from "styles/components/topbar";

const Topbar = ({
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
  // const [displayBricks, setDisplayBricks] = useState(false);
  // const [isOn, toggleIsOn] = useToggle();

  // const
  return (
    <div className={styles.topbar}>
      <div className={styles.section}>
        {/* <div className={styles.title}></div> */}

        <Button
          active={mode === "build"}
          onClick={() => onClickSetMode("build")}
          icon="hammer"
          text="Build"
        />
        <Button
          active={mode === "build"}
          onClick={() => onClickSetMode("build")}
          icon="loop"
          text="Rotate"
        />
        <Button
          active={mode === "paint"}
          onClick={() => onClickSetMode("paint")}
          icon="paintbrush"
          text="Paint"
        />
        {/* <Button
          active={mode === "paint"}
          onClick={() => onClickSetMode("paint")}
          icon="android-color-palette"
          text="Color"
        /> */}

        <ColorPicker
          mode={mode}
          background={color}
          handleSetColor={onClickSetColor}
        />
        {/* <Button
          active={mode === "paint"}
          onClick={() => console.log("build")}
          icon="ios-grid-view"
          text="Brick"
        /> */}
        <BrickPicker
          mode={mode}
          selectedSize={brickSize}
          handleSetBrick={onClickSetBrick}
        />

        <Button
          active={mode === "paint"}
          onClick={() => onClickSetMode("paint")}
          icon="trash-a"
          text="Delete"
        />
      </div>
      {/* <div className={styles.Secondtbar}>
        <div className={styles.section}>
          <div className={styles.title}>Color</div>
          <ColorPicker background={color} handleSetColor={onClickSetColor} />
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Brick</div>
          <BrickPicker
            selectedSize={brickSize}
            handleSetBrick={onClickSetBrick}
          />
        </div>
      </div> */}
      <div className={styles.section}>
        {/* <div className={styles.title}>Scene</div> */}
        {/* <Button
          active={grid}
          onClick={onClickToggleGrid}
          icon="grid"
          text="Grid"
        /> */}
      </div>
      <div className={styles.rightSection}>
        {/* <Button
          active={utilsOpen}
          onClick={onClickToggleUtils}
          icon="navicon-round"
          text="Utils"
        /> */}
      </div>
      {children}
    </div>
  );
};

export default Topbar;
