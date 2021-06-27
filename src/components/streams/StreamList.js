import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getSetAllStreams } from "../../store/actions";
import { Link } from "react-router-dom";

const StreamList = ({ streams, currentUserId, isUserSignedIn }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetAllStreams());
  }, []);

  const renderAdminButtons = (stream) => {
    if (currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderCreateStreamButton = () => {
    return (
      isUserSignedIn && (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    );
  };

  const renderStreamList = () => {
    return streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdminButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderStreamList()}</div>
      {renderCreateStreamButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isUserSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getSetAllStreams })(StreamList);
