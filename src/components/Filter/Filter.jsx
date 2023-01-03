import { filterContact } from 'redux/slice/sliceFilter';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const onChangeInput = event => {
    dispatch(filterContact(event.currentTarget.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChangeInput} />
    </>
  );
}
