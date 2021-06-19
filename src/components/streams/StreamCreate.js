import { connect, useDispatch } from "react-redux";
import StreamForm from "./StreamForm";
import { createStream } from "../../store/actions";

const StreamCreate = () => {
  const dispatch = useDispatch();
  const onFormSubmit = (formValues) => {
    dispatch(createStream(formValues));
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onFormSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
