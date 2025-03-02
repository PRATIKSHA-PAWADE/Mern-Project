function Searchbar({ search, setSearch }) {
    return (
      <div style={styles.container}>
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
      </div>
    );
  }
  
  // Inline CSS styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    input: {
      width: "60%",
      padding: "10px",
      fontSize: "16px",
      border: "2px solid #ff914d",
      borderRadius: "8px",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: "#ff5500",
      boxShadow: "0 0 8px rgba(255, 85, 0, 0.5)",
    },
  };
  
  export default Searchbar;
  