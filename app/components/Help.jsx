import React from "react";
import { createPortal } from "react-dom";
import Button from "components/Button";
import Modal from "react-bootstrap/Modal";
import styles from "styles/components/help";

const HelpModal = ({ open, toggleClose }) => {
  return createPortal(
    <div className={open ? styles.modalWrapper : styles.closedModal}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={toggleClose}>
          <i className="ion-close" />
        </div>
        <h1 style={{ textAlign: "center" }}>Goal Constructor</h1>
        <h3>Select up to three daily goals:</h3>
        <p>
          Brick Builder is a simple web app to create brick objects (heavily
          inspired by Lego in fact). You can also import and export models from
          the menu!
        </p>

        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}

        <h2 style={{ textAlign: "center" }}>Available commands</h2>
        <div className={styles.section}>
          <div className={styles.icon}>
            <i className="ion-hammer" />
          </div>
          <div style={{ flex: 1 }}>
            In BUILD mode you can place bricks with a <strong>LEFT</strong>{" "}
            click. Choose between different sizes in the menu bar. <br /> If you
            press <strong>D</strong> at the same time you delete bricks. <br />
            If you press <strong>R</strong> you can rotate bricks.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.icon}>
            <i className="ion-paintbrush" />
          </div>
          <div style={{ flex: 1 }}>
            In PAINT mode you set the chosen color (on the menu bar) to existing
            bricks.
          </div>
        </div>
        <div className={styles.github}>
          <i className="ion-social-github" />
          <a href={process.env.REPOSITORY_URL} target="_blank">
            View on Github
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

class Help extends React.Component {
  state = {
    open: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      item: "",
      quantity: "",
      showModal: true,
    };
    this._toggleHelp = this._toggleHelp.bind(this);
    this._handleClickEscape = this._handleClickEscape.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleClickEscape, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleClickEscape, false);
  }
  // {
  //   showGoals ? this.setState({ open: true }) : null;
  // }

  render() {
    const { open } = this.state;
    const { inversed, mode, showGoals } = this.props;

    return (
      <div>
        {this.state.showModal ? <div>TESTING</div> : null}
        <Modal
          // show={show}
          // onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
        <div className={styles.help}>
          {/* <div
          className={!inversed ? styles.inversed : styles.text}
          onClick={this._toggleHelp}
        >
          <i className="ion-information-circled" />
          <span>Help</span>
        </div>
        <HelpModal open={open} toggleClose={this._toggleHelp} /> */}
          <Button
            className="ion-information-circled"
            active={mode === "paint"}
            onClick={this._toggleHelp}
            icon="checkmark"
            text="Goals"
          />

          <HelpModal open={open} toggleClose={this._toggleHelp} />
        </div>
      </div>
    );
  }

  _toggleHelp() {
    this.setState({
      open: !this.state.open,
    });
  }

  _handleClickEscape(e) {
    if (e.keyCode === 27) {
      this.setState({
        open: false,
      });
    }
  }
}

export default Help;
