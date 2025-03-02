import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (profileId) {
      const fetchedProfile = {
        name: "John Doe",
        email: "johndoe@example.com",
        profilePicture: "https://example.com/profile.jpg",
      };
      setProfile(fetchedProfile);
    } else {
      const storedProfile = localStorage.getItem("profile");
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    }
  }, [profileId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profile.name || !profile.email.includes("@")) {
      setError("Please enter a valid name and email.");
      return;
    }
    setError(""); 
    localStorage.setItem("profile", JSON.stringify(profile));
    navigate("/profile"); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProfile = () => {
    localStorage.removeItem("profile");
    navigate("/"); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>{profileId ? "Edit Profile" : "Create Profile"}</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={profile.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={profile.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={styles.input}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile Preview"
              style={styles.imagePreview}
            />
          )}
          <button type="submit" style={styles.button}>
            {profileId ? "Update Profile" : "Create Profile"}
          </button>
        </form>

        {profileId && (
          <button
            onClick={handleDeleteProfile}
            style={styles.deleteButton}
          >
            Delete Profile
          </button>
        )}

        <p>
          <span
            onClick={() => navigate("/")}
            style={styles.link}
          >
            Back to Home
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to bottom, #FF512F, #DD2476)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "0 20px",
  },
  formContainer: {
    background: "#fff",
    padding: "40px 60px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "600px",
    minHeight: "450px",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "18px",
    boxSizing: "border-box",
  },
  imagePreview: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginTop: "10px",
    border: "2px solid #ff6f00",
  },
  button: {
    width: "100%",
    padding: "15px",
    background: "#ff6f00",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    background: "#e65c00",
  },
  deleteButton: {
    width: "100%",
    padding: "15px",
    background: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    marginTop: "10px",
  },
  link: {
    color: "#ff6f00",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
};
