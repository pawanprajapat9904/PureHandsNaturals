export default function Loader() {
  return (
    <div style={styles.loader}>
      <p>Loading...</p>
    </div>
  );
}

const styles = {
  loader: {
    padding: "40px",
    textAlign: "center",
    fontSize: "18px"
  }
};
