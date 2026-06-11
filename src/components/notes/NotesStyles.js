const styles = {
  bodyWrapper: { 
    backgroundColor: '#f8fafc', 
    minHeight: '100vh', 
    width: '100%',
    padding: '40px 60px', 
    boxSizing: 'border-box' 
  },
  container: { 
    width: '100%', 
    maxWidth: '100%', 
    margin: '0', 
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    boxSizing: 'border-box'
  },
  header: { 
    marginBottom: '40px', 
    borderBottom: '2px solid #e2e8f0', 
    paddingBottom: '24px',
    width: '100%'
  },
  mainTitle: { fontSize: '46px', fontWeight: '800', color: '#000000', margin: '0 0 10px 0', letterSpacing: '-0.025em' },
  subtitle: { fontSize: '20px', color: '#000000', margin: 0 },
  
  // TATA LETAK VERTIKAL FULLSCREEN (Menghilangkan sistem kolom samping)
  dashboardLayout: { 
    display: 'flex', 
    flexDirection: 'column',
    gap: '48px', 
    width: '100%',
    boxSizing: 'border-box'
  },
  sidebarColumn: { 
    width: '100%',
    boxSizing: 'border-box'
  },
  contentColumn: { 
    width: '100%',
    boxSizing: 'border-box'
  },
  
  searchSection: { marginBottom: '32px', width: '100%' },
  searchInput: { width: '100%', padding: '20px 24px', borderRadius: '16px', border: '2px solid #e2e8f0', fontSize: '18px', boxSizing: 'border-box', boxShadow: '0 2px 4px rgb(255, 255, 255)', outline: 'none', backgroundColor: '#ffffff', color: '#000000' },
  formCard: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 25px -5px rgb(255, 255, 255), 0 8px 10px -6px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', width: '100%', boxSizing: 'border-box' },
  formTitle: { fontSize: '26px', fontWeight: '800', color: '#000000', marginTop: 0, marginBottom: '28px' },
  input: { width: '100%', padding: '18px', marginBottom: '22px', borderRadius: '12px', border: '2px solid #cbd5e1', boxSizing: 'border-box', fontSize: '17px', color: '#000000', backgroundColor: '#f8f9fa' },
  textarea: { width: '100%', padding: '18px', marginBottom: '22px', borderRadius: '12px', border: '2px solid #cbd5e1', boxSizing: 'border-box', fontSize: '17px', color: '#000000', backgroundColor: '#f8f9fa', resize: 'vertical', fontFamily: 'inherit' },
  formFooterRow: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '32px', alignItems: 'center', marginBottom: '32px' },
  selectWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' },
  fieldLabel: { fontSize: '16px', fontWeight: '700', color: '#000000' },
  select: { padding: '14px 20px', borderRadius: '12px', border: '2px solid #cbd5e1', backgroundColor: '#f8f9fa', fontSize: '16px', color: '#000000', cursor: 'pointer' },
  checkboxLabel: { display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '17px', fontWeight: '700', color: '#000000' },
  checkbox: { width: '24px', height: '24px', cursor: 'pointer', accentColor: '#f59e0b' },
  btnGroup: { display: 'flex', gap: '16px' },
  btnSubmit: { padding: '18px 36px', backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '16px', fontWeight: '700', boxShadow: '0 4px 6px rgb(255, 255, 255)' },
  btnUpdate: { padding: '18px 36px', backgroundColor: '#10b981', color: '#ffffff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '16px', fontWeight: '700' },
  btnCancel: { padding: '18px 36px', backgroundColor: '#94a3b8', color: '#ffffff', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '16px', fontWeight: '700' },
  emptyState: { textAlign: 'center', backgroundColor: '#ffffff', padding: '100px 40px', borderRadius: '24px', border: '3px dashed #e2e8f0', width: '100%', boxSizing: 'border-box' },
  
  // GRID MAKSIMAL: Otomatis memenuhi lebar browser monitor laptop secara penuh
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
    gap: '32px',
    width: '100%',
    boxSizing: 'border-box'
  },
  
  noteCard: { padding: '32px', borderRadius: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px', border: '1px solid #f1f5f9' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  badge: { padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '700' },
  pinBadge: { fontSize: '11px', fontWeight: '800', color: '#b45309', backgroundColor: '#fef3c7', padding: '6px 12px', borderRadius: '8px', letterSpacing: '0.05em' },
  cardTitle: { margin: '0 0 14px 0', fontSize: '24px', fontWeight: '800', color: '#000000', lineHeight: '1.4' },
  cardContent: { margin: '0 0 28px 0', fontSize: '17px', color: '#000000', lineHeight: '1.6', whiteSpace: 'pre-wrap' },
  cardTimestamp: { display: 'flex', gap: '8px', fontSize: '13px', color: '#000000', marginBottom: '20px', borderTop: '2px solid #f1f5f9', paddingTop: '18px' },
  cardActions: { display: 'flex', gap: '16px' },
  btnEdit: { padding: '10px 20px', backgroundColor: '#f1f5f9', color: '#000000', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: '700' },
  btnDelete: { padding: '10px 20px', backgroundColor: '#fef2f2', color: '#ef4444', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: '700' }
};

export default styles;