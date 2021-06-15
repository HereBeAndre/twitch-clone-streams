import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getSetAllStreams } from "../../store/actions";

const StreamList = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetAllStreams());
  }, []);

  return <div>StreamList</div>;
};

export default connect(null, { getSetAllStreams })(StreamList);
