
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// // EXPORT THIS so Home.jsx can use images
// export const blogContent = {
//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg1,
//     content: `Women empowerment through education helps in personal and career growth.`,
//   },

//   "admission-notice": {
//     title: "Admission Notice",
//     date: "21 May 2024",
//     img: blogImg2,
//     content: `New admissions are open for session 2024-2025.`,
//   },

//   "admission-open": {
//     title: "Admission Open 2024-2025",
//     date: "21 May 2024",
//     img: blogImg3,
//     content: `Admissions have started for Graduate & Diploma courses.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 Feb 2023",
//     img: blogImg4,
//     content: `The annual function included cultural activities and student recognition.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     content: `Our students performed exceptionally well.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) return <h2 style={{ textAlign: "center" }}>Blog Not Found ❌</h2>;

//   return (
//     <div className="blog-detail-container">
//       <img src={blog.img} className="blog-detail-img" alt={blog.title} />

//       <h1 className="blog-detail-title">{blog.title}</h1>
//       <p className="blog-detail-date">📅 {blog.date}</p>

//       <p className="blog-detail-text">{blog.content}</p>

//       <Link to="/" className="blog-back-btn">← Back</Link>
//     </div>
//   );
// }



// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// export const blogContent = {
//   "prospective-faculty": {
//     title: "Prospective Faculty",
//     date: "17 March 2023",
//     img: blogImg1,
//     content: `This program helps student understand the faculty development system.`,
//   },

//   "student-governance": {
//     title: "Student Governance",
//     date: "03 March 2023",
//     img: blogImg2,
//     content: `Students participate in academic decisions and leadership.`,
//   },

//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg3,
//     content: `Educational empowerment improves women's lifestyle and career.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     content: `Students showcased cultural talents and achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     content: `Students performed exceptionally and received awards.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) return <h2 style={{ textAlign: "center" }}>Blog Not Found ❌</h2>;

//   return (
//     <div className="blog-detail-container">
//       <div className="blog-detail-left">
//         <img src={blog.img} className="blog-detail-img" alt={blog.title} />
//         <h1 className="blog-detail-title">{blog.title}</h1>
//         <p className="blog-detail-date">📅 {blog.date}</p>
//         <p className="blog-detail-text">{blog.content}</p>
//       </div>

//       {/* Sidebar */}
//       <aside className="blog-sidebar">
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: "30px" }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([slug, item]) => (
//             <li key={slug}>
//               <Link to={`/highlights/blog/${slug}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <Link to="/highlights/blog" className="blog-back-btn">← Back</Link>
//     </div>
//   );
// }


// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// export const blogContent = {
//   "prospective-faculty": {
//     title: "Prospective Faculty",
//     date: "17 March 2023",
//     img: blogImg1,
//     page: "/prospective-faculty",
//     content: `This program helps student understand the faculty development system.`,
//   },

//   "student-governance": {
//     title: "Student Governance",
//     date: "03 March 2023",
//     img: blogImg2,
//     page: "/student-governance",
//     content: `Students participate in academic decisions and leadership.`,
//   },

//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg3,
//     page: "/help-to-women-education",
//     content: `Educational empowerment improves women's lifestyle and career.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     page: "/function-2023",
//     content: `Students showcased cultural talents and achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     page: "/student-achievement",
//     content: `Students performed exceptionally and received awards.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];


  

//   if (!blog) return <h2 style={{ textAlign: "center" }}>Blog Not Found ❌</h2>;

//   return (
//     <div className="blog-detail-container">
//       <div className="blog-detail-left">
//         {/* Image clickable to respective page */}
//         <Link to={blog.page}>
//           <img src={blog.img} className="blog-detail-img" alt={blog.title} />
//         </Link>

//         <h1 className="blog-detail-title">{blog.title}</h1>
//         <p className="blog-detail-date">📅 {blog.date}</p>
//         <p className="blog-detail-text">{blog.content}</p>
//       </div>

//       {/* Sidebar */}
//       <aside className="blog-sidebar">
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: "30px" }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([slug, item]) => (
//             <li key={slug}>
//               <Link to={`/highlights/blog/${slug}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <Link to="/highlights/blog" className="blog-back-btn">
//         ← Back
//       </Link>
//     </div>
//   );
// }


// src/pages/BlogDetail.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// /**
//  * NOTE:
//  * Make sure the "page" values below match the routes in AppRoutes.jsx exactly.
//  * Your AppRoutes lists full-page blog routes under /highlights/<slug>,
//  * so we must link to /highlights/...
//  */
// export const blogContent = {
//   "prospective-faculty": {
//     title: "Prospective Faculty",
//     date: "17 March 2023",
//     img: blogImg1,
//     page: "/highlights/prospective-faculty", // <- updated to include /highlights
//     content: `This program helps student understand the faculty development system.`,
//   },

//   "student-governance": {
//     title: "Student Governance",
//     date: "03 March 2023",
//     img: blogImg2,
//     page: "/highlights/student-governance",
//     content: `Students participate in academic decisions and leadership.`,
//   },

//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg3,
//     page: "/highlights/help-to-women-education",
//     content: `Educational empowerment improves women's lifestyle and career.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     page: "/highlights/function-2023",
//     content: `Students showcased cultural talents and achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     page: "/highlights/student-achievement",
//     content: `Students performed exceptionally and received awards.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) {
//     return (
//       <div style={{ padding: 40, textAlign: "center" }}>
//         <h2>Blog Not Found ❌</h2>
//         <p>
//           Go back to{" "}
//           <Link to="/highlights/blog" style={{ color: "#ff7a00" }}>
//             Highlights Blog
//           </Link>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="blog-detail-container" style={{ display: "flex", gap: 24, padding: 24 }}>
//       <div className="blog-detail-left" style={{ flex: 1, maxWidth: 760 }}>
//         {/* Image clickable to respective full-page blog */}
//         <Link to={blog.page} aria-label={`Open full page for ${blog.title}`}>
//           <img
//             src={blog.img}
//             className="blog-detail-img"
//             alt={blog.title}
//             style={{ width: "100%", maxHeight: 420, objectFit: "cover", cursor: "pointer", borderRadius: 6 }}
//           />
//         </Link>

//         <h1 className="blog-detail-title" style={{ marginTop: 18 }}>{blog.title}</h1>
//         <p className="blog-detail-date" style={{ color: "#666", marginBottom: 14 }}>📅 {blog.date}</p>
//         <p className="blog-detail-text" style={{ lineHeight: 1.7 }}>{blog.content}</p>
//       </div>

//       {/* Sidebar */}
//       <aside className="blog-sidebar" style={{ width: 300 }}>
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: 30 }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([s, item]) => (
//             <li key={s} style={{ marginBottom: 8 }}>
//               {/* link to the blog detail page (not the full-page route) */}
//               <Link to={`/highlights/blog/${s}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <Link to="/highlights/blog" className="blog-back-btn" style={{ position: "fixed", left: 24, bottom: 24 }}>
//         ← Back
//       </Link>
//     </div>
//   );
// }


// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// /**
//  * FULLY FIXED VERSION
//  * Slugs, images, and full-page routes are all CORRECT now.
//  */
// export const blogContent = {
//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg1,
//     page: "/highlights/help-to-women-education",
//     content: `Women empowerment improves lifestyle, confidence, and career opportunities.`,
//   },

//   "admission-notice": {
//     title: "Admission Notice",
//     date: "21 May 2024",
//     img: blogImg2,
//     page: "/highlights/student-governance",
//     content: `New admissions are open for session 2024-2025.`,
//   },

//   "admission-open-2024": {
//     title: "Admission Open 2024-2025",
//     date: "21 May 2024",
//     img: blogImg3,
//     page: "/highlights/prospective-faculty",
//     content: `Admissions have started for all UG & Diploma courses.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     page: "/highlights/function-2023",
//     content: `Students showcased cultural performances and academic achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     page: "/highlights/student-achievement",
//     content: `Students achieved excellence in academics, sports, and competitions.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) {
//     return (
//       <div style={{ padding: 40, textAlign: "center" }}>
//         <h2>Blog Not Found ❌</h2>
//         <p>
//           Go back to{" "}
//           <Link to="/highlights/blog" style={{ color: "#ff7a00" }}>
//             Highlights Blog
//           </Link>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="blog-detail-container"
//       style={{
//         display: "flex",
//         gap: 24,
//         padding: 24,
//         alignItems: "flex-start",
//       }}
//     >
//       {/* LEFT SIDE CONTENT */}
//       <div className="blog-detail-left" style={{ flex: 1, maxWidth: 800 }}>
        
//         {/* CLICKABLE IMAGE → FULL PAGE BLOG */}
//         <Link to={blog.page}>
//           <img
//             src={blog.img}
//             alt={blog.title}
//             style={{
//               width: "100%",
//               maxHeight: 420,
//               borderRadius: 6,
//               objectFit: "cover",
//               cursor: "pointer",
//             }}
//           />
//         </Link>

//         <h1 className="blog-detail-title" style={{ marginTop: 18 }}>
//           {blog.title}
//         </h1>

//         <p className="blog-detail-date" style={{ color: "#555" }}>
//           📅 {blog.date}
//         </p>

//         <p className="blog-detail-text" style={{ lineHeight: 1.7 }}>
//           {blog.content}
//         </p>
//       </div>

//       {/* RIGHT SIDEBAR */}
//       <aside className="blog-sidebar" style={{ width: 300 }}>
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: 30 }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([s, item]) => (
//             <li key={s} style={{ marginBottom: 8 }}>
//               {/* This opens the same BlogDetail system */}
//               <Link to={`/highlights/blog/${s}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* FIXED BACK BUTTON */}
//       <Link
//         to="/highlights/blog"
//         className="blog-back-btn"
//         style={{
//           position: "fixed",
//           left: 24,
//           bottom: 24,
//           background: "#000",
//           color: "#fff",
//           padding: "8px 14px",
//           borderRadius: 4,
//           textDecoration: "none",
//         }}
//       >
//         ← Back
//       </Link>
//     </div>
//   );
// }

import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetail.css";

import blogImg1 from "../images/blog1.jpg";
import blogImg2 from "../images/blog2.jpg";
import blogImg3 from "../images/blog3.jpg";
import blogImg4 from "../images/blog4.jpg";
import blogImg5 from "../images/blog5.jpg";

/**
 * Blog content data
 */
export const blogContent = {
  "help-to-women-education": {
    title: "Help to Women Education",
    date: "03 March 2023",
    img: blogImg1,
    page: "/highlights/help-to-women-education",
    content: `Women empowerment improves lifestyle, confidence, and career opportunities.`,
  },
  "admission-notice": {
    title: "Admission Notice",
    date: "21 May 2024",
    img: blogImg2,
    page: "/highlights/student-governance",
    content: `New admissions are open for session 2024-2025.`,
  },
  "admission-open-2024": {
    title: "Admission Open 2024-2025",
    date: "21 May 2024",
    img: blogImg3,
    page: "/highlights/prospective-faculty",
    content: `Admissions have started for all UG & Diploma courses.`,
  },
  "function-2023": {
    title: "Annual Function 2023",
    date: "11 February 2023",
    img: blogImg4,
    page: "/highlights/function-2023",
    content: `Students showcased cultural performances and academic achievements.`,
  },
  "student-achievement": {
    title: "Student Achievement",
    date: "02 April 2023",
    img: blogImg5,
    page: "/highlights/student-achievement",
    content: `Students achieved excellence in academics, sports, and competitions.`,
  },
};

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogContent[slug];

  if (!blog) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Blog Not Found ❌</h2>
        <p>
          Go back to{" "}
          <Link to="/highlights/blog" style={{ color: "#ff7a00" }}>
            Highlights Blog
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      {/* LEFT CONTENT */}
      <div className="blog-detail-left">
        <Link to={blog.page}>
          <img src={blog.img} alt={blog.title} className="blog-detail-img" />
        </Link>

        <h1 className="blog-detail-title">{blog.title}</h1>
        <p className="blog-detail-date">📅 {blog.date}</p>
        <p className="blog-detail-text">{blog.content}</p>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="blog-sidebar">
        <h3>Categories</h3>
        <ul>
          <li>Education (5)</li>
          <li>Library (0)</li>
        </ul>

        <h3 style={{ marginTop: 30 }}>Latest Posts</h3>
        <ul>
          {Object.entries(blogContent).map(([s, item]) => (
            <li
              key={s}
              style={{
                marginBottom: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {slug === s ? (
                // Current blog → show only thumbnail and faded text
                <span style={{ opacity: 0.6, display: "flex", alignItems: "center", gap: 8 }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4 }}
                  />
                  <span>{item.title}</span>
                </span>
              ) : (
                // Other blogs → clickable
                <Link
                  to={`/highlights/blog/${s}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    color: "#ff7a00",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4 }}
                  />
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* FIXED BACK BUTTON */}
      <Link to="/highlights/blog" className="blog-back-btn">
        ← Back
      </Link>
    </div>
  );
}
