import styles from './notesStyles';

function NoteCard({ note, handleEdit, handleDelete }) {
  return (
    <div style={{
      ...styles.noteCard,
      borderTop: note.isImportant ? '4px solid #f59e0b' : '4px solid #4f46e5',
      backgroundColor: note.isImportant ? '#fffbeb' : '#ffffff',
      boxShadow: note.isImportant ? '0 10px 15px -3px rgb(255, 255, 255)' : '0 4px 6px -1px rgb(255, 255, 255)'
    }}>
      <div>
        <div style={styles.cardHeader}>
          <span style={{
            ...styles.badge,
            backgroundColor: note.category === 'Belajar' ? '#e0f2fe' : note.category === 'Kerja' ? '#ffffff' : '#f3e8ff',
            color: note.category === 'Belajar' ? '#0369a1' : note.category === 'Kerja' ? '#15803d' : '#6b21a8'
          }}>
            {note.category}
          </span>
          {note.isImportant && <span style={styles.pinBadge}>PINNED</span>}
        </div>
        
        <h3 style={styles.cardTitle}>{note.title}</h3>
        <p style={styles.cardContent}>{note.content}</p>
      </div>
      
      <div>
        <div style={styles.cardTimestamp}>
          <span>📅 {note.createdAt}</span>
          {note.createdAt !== note.updatedAt && <span style={{color: '#4f46e5'}}> • Diedit</span>}
        </div>
        
        <div style={styles.cardActions}>
          <button onClick={() => handleEdit(note)} style={styles.btnEdit}>✏️ Edit</button>
          <button onClick={() => handleDelete(note.id)} style={styles.btnDelete}>🗑️ Hapus</button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;