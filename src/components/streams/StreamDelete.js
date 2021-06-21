import { useEffect } from "react";
import { connect } from "react-redux";
import history from "../../history";
import { getStream } from "../../store/actions";
import Modal from "../Modal";

const StreamDelete = (props) => {
  const streamId = props.match.params.id;

  useEffect(() => {
    getStream(streamId);
  }, []);

  const actions = (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onModalDismiss={() => history.push("/")}
      />
    </div>
  );
};

// const mapStateToProps = (state, action) =>

export default connect(null, { getStream })(StreamDelete);
