import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/slice/sliceFilter';
import { addContact, removeContact } from 'redux/slice/sliceContact';

export function App() {
  const contacts = useSelector(state => state.contact);
  const filtered = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    // const toLower = filtered.trim().toLowerCase();
    if (filtered) {
      return contacts.filter(i => i.name.toLowerCase().includes(filtered));
    } else return contacts;
  };

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
      <>
        {contacts.length === 0 ? (
          <p>The contact list is empty</p>
        ) : (
          <Filter value={filtered} onChange={filterNow} />
        )}
      </>
      <ContactList contacts={filteredContacts()} onClick={deleteItem} />
    </div>
  );
}
