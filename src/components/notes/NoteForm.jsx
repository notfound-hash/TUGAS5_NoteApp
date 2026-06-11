import styles from './notesStyles';

function NoteForm({ formData, editId, handleInputChange, handleSubmit, cancelEdit }) {
  return (
    <form onSubmit={handleSubmit} style={styles.formCard}>
      <h2 style={styles.formTitle}>{editId ? '📝 Edit Catatan' : '✨ Catatan Baru'}</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Beri judul yang menarik..."
        value={formData.title}
        onChange={handleInputChange}
        style={styles.input}
        required
      />
      
      <textarea
        name="content"
        placeholder="Tuliskan isi pikiran di sini..."
        value={formData.content}
        onChange={handleInputChange}
        style={styles.textarea}
        rows="4"
        required
      />
      
      <div style={styles.formFooterRow}>
        <div style={styles.selectWrapper}>
          <label style={styles.fieldLabel}>Kategori</label>
          <select name="category" value={formData.category} onChange={handleInputChange} style={styles.select}>
            <option value="Belajar">Belajar</option>
            <option value="Kerja">Kerja</option>
            <option value="Pribadi">Pribadi</option>
          </select>
        </div>
        
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="isImportant"
            checked={formData.isImportant}
            onChange={handleInputChange}
            style={styles.checkbox}
          />
          Tandai Penting
        </label>
      </div>
      
      <div style={styles.btnGroup}>
        <button type="submit" style={editId ? styles.btnUpdate : styles.btnSubmit}>
          {editId ? 'Perbarui Catatan' : 'Simpan ke Board'}
        </button>
        {editId && (
          <button type="button" onClick={cancelEdit} style={styles.btnCancel}>
            Batalkan
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;