import styles from './notesStyles';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div style={styles.searchSection}>
      <input
        type="text"
        placeholder="Cari judul atau isi catatan..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;