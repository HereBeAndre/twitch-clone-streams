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

export default connect(mapStateToProps, { getStream })(StreamDelete);
