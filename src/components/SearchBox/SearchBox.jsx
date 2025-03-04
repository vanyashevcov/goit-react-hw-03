import s from "./SearchBox.module.css"

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <p className={s.searchText}>Find contacts by name</p>
      <input className={s.searchBox}
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox