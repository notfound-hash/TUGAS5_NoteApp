import styles from './notesStyles';
import NoteCard from './NoteCard';

function NoteList({ notes, filteredNotes, handleEdit, handleDelete }) {
  if (notes.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p style={{ fontSize: '18px', fontWeight: '600', color: '#64748b', margin: 0 }}>Belum Ada Catatan</p>
        <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '5px' }}>Mulai tulis ide pertamamu di form atas.</p>
      </div>
    );
  }

  if (filteredNotes.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p style={{ fontSize: '16px', color: '#94a3b8', margin: 0 }}>Pencarian tidak menemukan hasil.</p>
      </div>
    );
  }

  return (
    <div style={styles.grid}>
      {filteredNotes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;