import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Bada 404 Text */}
        <h1 style={styles.errorCode}>404</h1>
        
        {/* Error Message */}
        <h2 style={styles.title}>Oops! Page Not Found</h2>
        <p style={styles.message}>
          The page you are looking for might have been moved or doesn't exist.
        </p>

        {/* Classic Green Button */}
        <Link to="/" style={styles.button}>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "80vh", // Screen ke center mein dikhane ke liye
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
    padding: "20px",
  },
  content: {
    textAlign: "center",
    maxWidth: "500px",
  },
  errorCode: {
    fontSize: "120px",
    margin: "0",
    color: "#ccff00", // Bright Lime Yellow
    fontWeight: "900",
    lineHeight: "1",
    // Halka sa shadow taaki white bg par dikhe
    textShadow: "2px 2px 0px #2e7d32", 
  },
  title: {
    fontSize: "28px",
    color: "#2e7d32", // Deep Classic Green
    marginTop: "10px",
  },
  message: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
  },
  button: {
    display: "inline-block",
    padding: "14px 28px",
    backgroundColor: "#2e7d32", // Theme Green
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "8px",
    borderBottom: "4px solid #ccff00", // Yellow accent on button
    transition: "transform 0.2s ease",
  }
};