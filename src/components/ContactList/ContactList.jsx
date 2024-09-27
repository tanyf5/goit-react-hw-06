import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
  };

  const visibleContacts = getVisibleContacts();

  return (
    visibleContacts.length > 0 && (
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    )
  );
}