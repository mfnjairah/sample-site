import { useState } from "react";
import "./Home.css";

const Home = () => {
  const posts = [
    {
      newsTitle: "Bagyong Yolanda Nanalasa sa Visayas",
      newsDetails:
        "Ang Bagyong Yolanda ay bumayo sa Visayas, nagdulot ng malawakang pagbaha at pinsala sa mga komunidad.",
      imageLink:
        "https://www.usatoday.com/gcdn/-mm-/268cf849c0fbfcd7322de9ffa2c4504257305dd3/c=0-343-3500-2317/local/-/media/USATODAY/USATODAY/2013/11/08/1383900301000-AFP-524452087.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
      date: "2023-01-15",
    },
    {
      newsTitle: "Paghahanda sa Bagyong Ambo",
      newsDetails:
        "Binabantayan ng mga awtoridad ang Bagyong Ambo na inaasahang tatahak sa Luzon. Maraming lugar na naka-alerto.",
      imageLink:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2017/12/16/thumbs_b_c_021e8878485f9bcc0a573a8d25c4a7d2.jpg?v=110312",
      date: "2023-03-05",
    },
    {
      newsTitle: "Mga Evacuee sa Bagyong Odette",
      newsDetails:
        "Libo-libong residente ang nailikas sa mga apektadong lugar dahil sa Bagyong Odette. Nanganganib ang kaligtasan ng marami.",
      imageLink:
        "https://www.gulf-times.com/uploads/imported_images/Upload/Slider/24713dc5-4df7-436f-8400-65ab846500fd.jpg",
      date: "2023-06-20",
    },
    {
      newsTitle: "Bagyong Tisoy, Nagdulot ng Pinsala sa Infrastruktura",
      newsDetails:
        "Matindi ang pinsala ng Bagyong Tisoy sa mga kalsada at tulay sa Bicol Region. Nagsagawa ng rescue operations ang mga otoridad.",
      imageLink:
        "https://i.guim.co.uk/img/media/3cd9916725a6bbe0bfb529261dbffbf0fc25fc9e/0_203_4000_2401/master/4000.jpg?width=620&dpr=1&s=none",
      date: "2023-09-10",
    },
    {
      newsTitle: "Paghahanda sa Bagyong Rolly",
      newsDetails:
        "Muling nagsagawa ng evacuation ang mga lokal na pamahalaan sa Luzon sa pagdating ng Bagyong Rolly, na inaasahang malakas na bagyo.",
      imageLink:
        "https://www.aljazeera.com/wp-content/uploads/2022/11/AP22304186425283.jpg?resize=1170%2C780&quality=80",
      date: "2023-11-03",
    },
  ];

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleFormDataChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const webProjects = [
    {
      projectTitle: "E-commerce Platform",
      projectDescription:
        "A fully-featured e-commerce website with user authentication, product catalog, and secure checkout.",
      imageLink:
        "https://bootstrapmade.com/content/templatefiles/Impact/Impact-bootstrap-website-template-md.webp",
      date: "2023-02-10",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      projectTitle: "Blog Platform",
      projectDescription:
        "A dynamic blog platform with user profiles, post creation, and commenting functionality.",
      imageLink:
        "https://themewagon.com/wp-content/uploads/2020/10/aievari.jpg",
      date: "2023-04-25",
      techStack: ["Angular", "Firebase", "Node.js", "Express"],
    },
    {
      projectTitle: "Portfolio Website",
      projectDescription:
        "A personal portfolio website showcasing skills, projects, and resume.",
      imageLink:
        "https://img.freepik.com/premium-psd/charity-web-template_225406-8.jpg",
      date: "2023-07-15",
      techStack: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    },
    {
      projectTitle: "Social Media Dashboard",
      projectDescription:
        "A dashboard for managing and analyzing social media accounts, with real-time updates.",
      imageLink:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/279244227/original/6df0faed8d9409d01954e3053b7a200c43ae23b0/design-html-template-or-newsletter.jpeg",
      date: "2023-09-30",
      techStack: ["React", "Redux", "Node.js", "Socket.io"],
    },
    {
      projectTitle: "Online Learning Platform",
      projectDescription:
        "An online learning platform with video lectures, quizzes, and student progress tracking.",
      imageLink:
        "https://themeforest.img.customer.envatousercontent.com/files/264747338/01_preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=01faedf3ef7587d393732299606cbf5e",
      date: "2023-12-05",
      techStack: ["Django", "React", "PostgreSQL"],
    },
  ];

  return (
    <div>
      <section className="header">
        <div className="container">
          <h1>Jairah Dev Projects</h1>
          <p>Check my projects and hire me!</p>
        </div>
      </section>

      <section>
        <div className="container">
          {webProjects.map((project) => (
            <div className="post">
              <img src={project.imageLink} alt="walking man" />
              <h2>{project.projectTitle}</h2>
              <p>{project.projectDescription}</p>
              <p className="tech-stack">{project.techStack.join(", ")}</p>
              <p className="date">{project.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          {posts.map((post) => (
            <div className="post">
              <img src={post.imageLink} alt="Imahe" />
              <h2>{post.newsTitle}</h2>
              <p>{post.newsDetails}</p>
              <p className="date">{post.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section>
        <div className="container">
          <form>
            <label>Enter your email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormDataChanges}
            />
            <br />
            <label>Enter your message</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleFormDataChanges}
            />
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
