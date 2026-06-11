import { useState, useEffect } from 'react';
import styles from './notesStyles';
import SearchBar from './SearchBar';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

function NotesApp() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('my_notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Belajar',
    isImportant: false
  });

  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // PENGATURAN FULL SCREEN: Memaksa seluruh elemen browser menjadi full width & light mode
  useEffect(() => {
    // Reset elemen HTML & Body secara total
    const html = document.documentElement;
    if (html) {
      html.style.margin = '0';
      html.style.padding = '0';
      html.style.backgroundColor = '#f8fafc';
    }

    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#f8fafc';
    document.body.style.display = 'block';
    document.body.style.maxWidth = '100%';
    document.body.style.width = '100vw';
    document.body.style.minHeight = '100vh';
    
    // Reset container #root bawaan Vite
    const root = document.getElementById('root');
    if (root) {
      root.style.maxWidth = '100%';
      root.style.width = '100%';
      root.style.margin = '0';
      root.style.padding = '0';
      root.style.textAlign = 'left';
      root.style.display = 'block';
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('my_notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) return;

    const timestamp = new Date().toLocaleString('id-ID', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    if (editId) {
      setNotes(notes.map(note => 
        note.id === editId ? { ...note, ...formData, updatedAt: timestamp } : note
      ));
      setEditId(null);
    } else {
      const newNote = {
        id: Date.now(),
        ...formData,
        createdAt: timestamp,
        updatedAt: timestamp
      };
      setNotes([newNote, ...notes]);
    }

    setFormData({ title: '', content: '', category: 'Belajar', isImportant: false });
  };

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus catatan ini?')) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const handleEdit = (note) => {
    setEditId(note.id);
    setFormData({
      title: note.title,
      content: note.content,
      category: note.category,
      isImportant: note.isImportant
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditId(null);
    setFormData({ title: '', content: '', category: 'Belajar', isImportant: false });
  };

  const filteredNotes = notes
    .filter(note => 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a.isImportant === b.isImportant) return 0;
      return a.isImportant ? -1 : 1;
    });

  return (
    <div style={styles.bodyWrapper}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainTitle}>Workspace Catatan</h1>
          <p style={styles.subtitle}>Kelola ide, tugas, dan materi kuliahmu dengan rapi.</p>
        </header>
        
        <div style={styles.dashboardLayout}>
          <div style={styles.sidebarColumn}>
            <NoteForm 
              formData={formData}
              editId={editId}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              cancelEdit={cancelEdit}
            />
          </div>

          <div style={styles.contentColumn}>
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
            
            <NoteList 
              notes={notes}
              filteredNotes={filteredNotes}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesApp;