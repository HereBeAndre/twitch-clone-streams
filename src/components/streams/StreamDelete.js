import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { getStream } from "../../store/actions";
import Modal from "../Modal";

import { setDeleteStream } from "../../store/actions";

const StreamDelete = (props) => {
  const dispatch = useDispatch();
  const streamId = props.match.params.id;

  useEffect(() => {
    getStream(streamId);
  }, []);

  const actions = (
    <>
      <button
        onClick={() => {
          dispatch(setDeleteStream(streamId));
        }}
        className="ui negative button"
      >
        Delete
      </button>
      <Link to={"/"} className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${props.stream.title}?`;
  };

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
        onModalDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, setDeleteStream })(
  StreamDelete
);
