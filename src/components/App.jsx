import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/slice/sliceFilter';
import { addContact, removeContact } from 'redux/slice/sliceContact';

export function App() {
  const contacts = useSelector(state => state.contact);
  const filter = useSelector(state => state.filter);

  const filteredContacts = () => {
    const toLower = filter.toLowerCase();
    return contacts.filter(i => i.name.toLowerCase().includes(toLower));
  };

  const dispatch = useDispatch();
  const deleteItem = itemId => {
    dispatch(removeContact(itemId));
  };
  const filterNow = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  const addingContact = contact => {
    contacts.some(e => e.name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  return (
    <div className={styles.form}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addingContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterNow} />
      <ContactList contacts={filteredContacts()} onClick={deleteItem} />
    </div>
  );
}
