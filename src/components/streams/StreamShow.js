import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { getStream } from "../../store/actions";

const StreamShow = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStream(props.match.params.id));
  }, []);

  return (
    <>
      {!props.stream ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{props.stream.title}</h1>
          <h5>{props.stream.description}</h5>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream })(StreamShow);
