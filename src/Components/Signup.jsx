import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Signup() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{
      boxSizing: "border-box",
      fontFamily: "'Segoe UI', sans-serif",
      margin: 0,
      padding: 0,
      background: "#f5f6f8",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        width: "900px",
        height: "550px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        borderRadius: "15px",
        overflow: "hidden",
        background: "#fff"
      }}>
        {/* Sign In Section */}
        <div
          data-aos="fade-right"
          style={{
            width: "50%",
            padding: "50px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#2ab69f",
            color: "#fff"
          }}>
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login<br />with your personal info</p>
          <form>
            <input type="email" placeholder="Email" required style={{
              padding: "12px 15px",
              marginBottom: "15px",
              border: "none",
              borderRadius: "5px",
              width: "100%"
            }} />
            <input type="password" placeholder="Password" required style={{
              padding: "12px 15px",
              marginBottom: "15px",
              border: "none",
              borderRadius: "5px",
              width: "100%"
            }} />
            <button type="submit" style={{
              padding: "12px",
              width: "100%",
              background: "#fff",
              color: "#2ab69f",
              fontWeight: "bold",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "16px"
            }}>Login In</button>
          </form>
        </div>

        {/* Sign Up Section */}
        <div
          data-aos="fade-left"
          style={{
            width: "50%",
            padding: "50px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
          <h2 style={{ color: "#2ab69f", marginBottom: "15px" }}>Create Account</h2>
          <div style={{
            display: "flex",
            gap: "10px",
            marginBottom: "15px"
          }}>
            <a href="https://www.facebook.com/" style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              color: "#555",
              textDecoration: "none",
              fontSize: "16px"
            }}><i className="fab fa-facebook-f"></i></a>
            <a href="https://accounts.google.com/v3/signin/identifier?hl=en&ifkv=AdBytiPTVmpkOhzQMABYd3tcngUGtq18iNBJbmGBALfV6ghzOSp1Cr7AXlBi-5BdMZS0OR9mc2Hf0g&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1931325809%3A1751543072415535" style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              color: "#555",
              textDecoration: "none",
              fontSize: "16px"
            }}><i className="fab fa-google-plus-g"></i></a>
            <a href="https://www.linkedin.com/home" style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              color: "#555",
              textDecoration: "none",
              fontSize: "16px"
            }}><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p style={{
            fontSize: "14px",
            color: "#555",
            marginBottom: "20px"
          }}>or use your email for registration:</p>
          <form>
            <input type="text" placeholder="Name" required style={{
              padding: "12px 15px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%"
            }} />
            <input type="email" placeholder="Email" required style={{
              padding: "12px 15px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%"
            }} />
            <input type="password" placeholder="Password" required style={{
              padding: "12px 15px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%"
            }} />
            <button type="submit" style={{
              padding: "12px",
              width: "100%",
              background: "#2ab69f",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "16px"
            }}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
