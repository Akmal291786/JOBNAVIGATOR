import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <nav><div className="logo">Job<span>Navigator</span></div><div className="links"><a>Find Jobs</a><a>Companies</a><a>For Recruiters</a><button>Sign In</button></div></nav>
      <main>
        <section className="hero">
          <p className="eyebrow">CAREER OPPORTUNITIES, SIMPLIFIED</p>
          <h1>Find the work that<br/><span>moves you forward.</span></h1>
          <p className="sub">Discover opportunities, build your profile, upload your resume and manage applications from one place.</p>
          <div className="search"><input placeholder="Job title, skills or company"/><input placeholder="Location"/><button>Search Jobs</button></div>
        </section>
        <section className="stats"><div><b>10K+</b><span>Job opportunities</span></div><div><b>2K+</b><span>Hiring companies</span></div><div><b>25K+</b><span>Active candidates</span></div></section>
        <section className="cards"><div className="card"><div className="icon">⌕</div><h3>Discover jobs</h3><p>Search and filter openings by role, location, category and job type.</p></div><div className="card"><div className="icon">↗</div><h3>Apply confidently</h3><p>Keep your profile and resume ready and submit applications quickly.</p></div><div className="card"><div className="icon">▣</div><h3>Track progress</h3><p>Keep applications organized from submission through recruiter review.</p></div></section>
      </main>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App/>);