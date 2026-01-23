import { APP_NAME } from "../../utils/constants";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1 - About */}
        <div style={styles.column}>
          <h4 style={styles.heading}>{APP_NAME}</h4>
          <p style={styles.text}>
            Pure Hands Naturals 🌿
            From our hands ✋ to your family 👨‍👩‍👧‍👦 with love ❤️ and responsibility 🤝.
            Natural products you can trust 🌱, every single day ☀️.

          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Help</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>FAQs</li>
            <li style={styles.listItem}>Shipping & Delivery</li>
            <li style={styles.listItem}>Return Policy</li>
            <li style={styles.listItem}>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Customer Care</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Contact Us</li>
            <li style={styles.listItem}>Order Tracking</li>
            <li style={styles.listItem}>Bulk Orders</li>
            <li style={styles.listItem}>Support Center</li>
          </ul>
        </div>

        {/* Column 4 - Socials with Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Connect With Us</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="https://www.instagram.com/purehandsnaturals/" target="_blank" rel="noreferrer" style={styles.link}>
                Instagram
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.link}>
                Facebook
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="mailto:purehandsnaturals@gmail.com">
                📧 Email Us
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="https://wa.me/917877521900" target="_blank" rel="noreferrer" style={styles.link}>
                💬 WhatsApp +91 7877521900
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.bottomContent}>
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <p style={styles.madeIn}>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "80px",
    background: "#1b3d1e", // Deep Classic Green
    color: "#e0e0e0",
    borderTop: "6px solid #ccff00", // Yellow-Green Accent Line
    width: "100%",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "60px 24px",
    display: "grid",
    // 1fr ensure karta hai ki mobile par columns full width le lein
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    boxSizing: "border-box",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    // Mobile par text center karne ke liye (Optional):
    // textAlign: window.innerWidth < 600 ? "center" : "left",
  },
  heading: {
    color: "#ccff00",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  text: {
    lineHeight: "1.6",
    color: "#d1d1d1",
    fontSize: "14px",
    maxWidth: "300px", // Text ko zyada phailne se rokta hai
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    lineHeight: "2.2",
    color: "#d1d1d1",
    cursor: "pointer",
    fontSize: "14px",
    transition: "color 0.2s ease",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },

  bottomBar: {
    background: "#142b16",
    padding: "20px 0",
    fontSize: "13px",
    color: "#aaa",
    width: "100%",
    boxSizing: "border-box",
  },
  bottomContent: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    // Mobile par copyright aur "Made in India" upar-niche aa jayenge
    flexDirection: window.innerWidth < 600 ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    gap: "15px"
  },
  madeIn: {
    color: "#ccff00",
    fontWeight: "600",
    fontSize: "14px"
  }
};