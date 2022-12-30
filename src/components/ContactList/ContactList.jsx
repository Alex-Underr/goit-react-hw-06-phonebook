import PropTypes from 'prop-types';
import styles from './contactList.module.css';
import { BsPersonCircle } from 'react-icons/bs';
export default function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.list} key={id} id={id}>
          <BsPersonCircle />
          <p>
            {name} : {number}
          </p>
          <button className={styles.btn} onClick={() => onClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  onClick: PropTypes.func.isRequired,
};
