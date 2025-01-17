import React from "react";
import { saveAs } from "file-saver";
import autobind from "autobind-decorator";

import FileUploader from "./FileUploader";
import Brick from "components/engine/Brick";

import styles from "../styles/components/sidebar";

class Sidebar extends React.Component {
  render() {
    const { utilsOpen, resetScene, onClickToggleGrid, grid } = this.props;
    return (
      <div className={utilsOpen ? styles.visible : styles.sidebar}>
        <div className={styles.content}>
          <div className={styles.row} onClick={resetScene}>
            <div className={styles.text}>
              <i className="ion-log-out" />
              <span>Log Out</span>
            </div>
          </div>
          <div className={styles.row} onClick={resetScene}>
            <div className={styles.text}>
              <i className="ion-ios-star" />
              <span>Hall of Fame</span>
            </div>
          </div>
          <div className={styles.row} onClick={resetScene}>
            <div className={styles.text}>
              <i className="ion-ios-world-outline" />
              <span>Publish scene</span>
            </div>
          </div>
          <div className={styles.row} onClick={resetScene}>
            <div className={styles.text}>
              <i className="ion-trash-a" />
              <span>Reset scene</span>
            </div>
          </div>
          {/* <div className={styles.row} onClick={this._exportFile}>
            <div className={styles.text}>
              <i className="ion-log-out" />
              <span>Export scene</span>
            </div>
          </div>
          <div className={styles.row}>
            <FileUploader onFinish={this._importFile}>
              <div className={styles.text}>
                <i className="ion-log-in" />
                <span>Import scene</span>
              </div>
            </FileUploader>
          </div> */}
          <div className={styles.row}>
            <div active={grid} onClick={onClickToggleGrid}>
              <div className={styles.text}>
                <i className="ion-grid" />
                <span>Toggle Grid</span>
              </div>
            </div>
          </div>
          <div className={styles.row} onClick={resetScene}>
            <div className={styles.text}>
              <i className="ion-help-circled" />
              <span>Help</span>
            </div>
          </div>
          {/* <div className={styles.row}>
            <div active={grid} onClick={this._quickSave}>
              <div className={styles.text}>
                <i className="ion-grid" />
                <span>Quick Save</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  // @autobind
  // _quickSave() {
  //   const { objects } = this.props;
  //   console.log("SAVED", objects);
  // }

  @autobind
  _exportFile() {
    const { objects } = this.props;
    const fileName = "scene.json";
    const simplified = objects.map((o) => ({
      intersect: o._intersect,
      color: o._color,
      dimensions: o._dimensions,
      rotation: o._rotation,
      translation: o._translation,
    }));
    var fileToSave = new Blob([JSON.stringify(simplified)], {
      type: "application/json",
      name: fileName,
    });
    saveAs(fileToSave, fileName);
  }

  // TODO: bad, do this in epic/saga/thunk but not here
  @autobind
  _importFile(objects) {
    const { importScene } = this.props;
    const bricks = objects.map(
      (o) =>
        new Brick(o.intersect, o.color, o.dimensions, o.rotation, o.translation)
    );
    importScene(bricks);
  }
}

export default Sidebar;
