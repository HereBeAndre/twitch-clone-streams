import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getStream } from "../../store/actions";

const StreamEdit = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStream(props.match.params.id));
  }, []);
  return props.stream ? <div>{props.stream.title}</div> : <div>Loading...</div>;
};

// ownProps allows to pass props of component to Redux
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getStream })(StreamEdit);
