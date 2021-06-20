import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getStream, setUpdateStream } from "../../store/actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStream(props.match.params.id));
  }, []);

  const onFormSubmit = (formValues) => {
    dispatch(setUpdateStream(props.stream.id, formValues));
  };

  return props.stream ? (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={{
          title: props.stream.title,
          description: props.stream.description,
        }}
        onSubmit={onFormSubmit}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

// ownProps allows to pass props of component to Redux
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getStream, setUpdateStream })(
  StreamEdit
);
