<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suman Dutta - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #2c3e50; /* Deep blue-grey */
            --secondary-color: #7f8c8d; /* Muted grey */
            --accent-color: #e74c3c; /* Reddish-orange */
            --background-color: #ecf0f1; /* Light grey */
            --card-background: #ffffff;
            --border-color: #bdc3c7; /* Medium grey */
            --nav-hover-bg: #34495e; /* Darker blue-grey for hover */
            --nav-active-bg: #e74c3c; /* Accent color for active nav */
        }

        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 12px; /* Very small font size */
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background-color: var(--background-color);
            color: var(--primary-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden; /* Prevent horizontal scroll */
        }

        .container {
            max-width: 960px;
            width: 100%;
            background-color: var(--card-background);
            margin-top: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            border: 1px solid var(--border-color);
            overflow: hidden; /* To contain floated elements */
        }

        /* Navigation */
        .navbar {
            background-color: var(--nav-hover-bg);
            padding: 15px 30px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 3px solid var(--accent-color);
            box-sizing: border-box;
        }

        .navbar-title-container { /* New container for title and potential logo */
            display: flex;
            align-items: center;
            flex-grow: 1;
        }

        .navbar h1 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8em;
            color: #fff;
            margin: 0;
            text-align: left;
        }

        .nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
        }

        .nav-links li {
            margin-left: 25px;
            font-size: 0.9em;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            padding: 8px 15px;
            border-radius: 4px;
            transition: background-color 0.3s ease, color 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .nav-links a:hover {
            background-color: var(--accent-color);
            color: #fff;
        }

        .nav-links a.active {
            background-color: var(--accent-color);
            color: #fff;
        }

        /* Page Content Styling */
        .page-content {
            padding: 30px;
            display: none; /* Hidden by default */
            animation: fadeIn 0.5s ease-out;
        }

        .page-content.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 1.7em;
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 8px;
            margin-top: 0;
            margin-bottom: 20px;
            color: var(--primary-color);
            text-align: center;
        }

        h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.3em;
            color: var(--primary-color);
            margin-top: 20px;
            margin-bottom: 12px;
        }

        strong {
            color: var(--primary-color);
            font-weight: 600;
        }

        p {
            margin-bottom: 12px;
        }

        ul {
            list-style: disc;
            margin-left: 25px;
            padding-left: 0;
        }

        li {
            margin-bottom: 10px;
            padding-left: 5px;
        }

        .profile-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px dashed var(--border-color);
        }

        .profile-picture {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-right: 20px;
            object-fit: cover;
            border: 3px solid var(--accent-color);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .header-text {
            flex-grow: 1;
        }

        .header-text h1 {
            font-family: 'Playfair Display', serif;
            font-size: 2em;
            margin-bottom: 4px;
            color: var(--primary-color);
        }

        .header-text p {
            font-size: 0.9em;
            color: var(--secondary-color);
            font-style: italic;
        }

        .social-links {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px dashed var(--border-color);
        }

        .social-links a {
            margin: 0 10px;
            display: inline-block;
        }

        .social-links img {
            height: 26px;
            vertical-align: middle;
            transition: transform 0.2s ease;
        }

        .social-links a:hover img {
            transform: translateY(-2px) scale(1.05);
        }

        hr {
            border: 0;
            height: 1px;
            background: var(--border-color);
            margin: 35px 0;
        }

        .badge-container {
            text-align: center;
            margin-top: 25px;
            margin-bottom: 20px;
        }
        .badge-container img {
            margin: 0 5px;
            height: 22px;
        }

        /* Specific for Research Section */
        .research-area-item {
            margin-bottom: 15px;
            padding-left: 10px;
            border-left: 3px solid var(--accent-color);
            background-color: #fdfdfd;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 0 4px 4px 0;
        }
        .research-area-item strong {
            color: var(--primary-color);
        }

        /* Creative Theme Adjustments */
        .profile-header, .section {
            background-color: rgba(255, 255, 255, 0.8); /* Slight transparency */
            padding: 20px;
            border-radius: 6px;
            margin-bottom: 20px;
            border: 1px solid rgba(189, 195, 199, 0.3); /* Lighter border */
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .container {
            background: none; /* Remove card background for the overall container */
            box-shadow: none;
            border: none;
        }
        .page-content {
            background-color: transparent;
            padding: 0; /* Remove padding from page content as it's now in sections */
        }
        .page-content.active {
            padding: 30px; /* Add padding back when active */
        }
        h2 {
            text-align: left; /* Align section titles left */
        }
        .profile-header h1, .profile-header p {
            color: var(--primary-color);
        }

        /* Styling for the header that contains "Physics+AI" */
        .site-title-header {
            display: flex;
            align-items: center;
            padding: 15px 30px;
            background-color: var(--nav-hover-bg);
            border-bottom: 3px solid var(--accent-color);
            box-sizing: border-box;
            width: 100%;
        }

        .site-title-header .title {
            font-family: 'Playfair Display', serif;
            font-size: 1.8em;
            color: #fff;
            margin: 0;
            flex-grow: 1;
            text-align: left;
        }

        /* Collaborator Section Styles */
        .collaborator-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .collaborator-pic {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 15px;
            object-fit: cover;
            border: 2px solid var(--accent-color);
        }
        
        .collaborator-info {
            line-height: 1.5;
        }

    </style>
</head>
<body>

    <div class="site-title-header">
        <div class="title">Physics+AI</div>
        <ul class="nav-links">
            <li><a href="#about" class="nav-link active">About Me</a></li>
            <li><a href="#research" class="nav-link">Research</a></li>
            <li><a href="#teaching" class="nav-link">Teaching</a></li>
            <li><a href="#misc" class="nav-link">Misc</a></li>
        </ul>
    </div>

    <div class="container">

        <div id="about" class="page-content active">
            <div class="profile-header">
                <div class="header-text">
                    <h1>Suman Dutta</h1>
                    <p>Researcher | Intelligent Living & Artificial Systems</p>
                </div>
            </div>

            <h2>About Me</h2>
            <p>
                I am an <strong>Active</strong> researcher in the field of <strong>Intelligent Living and Artificial Systems</strong>, with a specialization in <strong> Complex Fluids</strong>. Driven by <strong>Creative Research</strong>, I focus on the complex dynamics of <strong>Natural Systems</strong>, combining <strong>Statistical Physics</strong> and <strong>Machine Intelligence</strong>, to develop <strong>Generative Physical Systems</strong>.
            </p>

            <div class="section">
                <h3>🌟 Highlights</h3>
                <ul>
                    <li><strong>PhD</strong> on Numerical Studies on the Dynamics of Soft Matter Systems (S. N. Bose National Centre for Basic Sciences, 2018)</li>
                    <li><strong>5+ Years of Post-PhD Research Experience</strong> in Interdisciplinary Physics, at IMSc (2018-2020), ICTS-TIFR (2021-23) and NCBS-TIFR (2024)</li>
                </ul>
            </div>

            <div class="section">
                <h3>🎓 Professional Journey</h3>
                <h4>Present Affiliation</h4>
                <p>
                    <span class="affiliation">Assistant Professor (Sr. Gd.)</span><br>
                    School of Artificial Intelligence, Amrita Vishwa Vidyapeetham, Coimbatore<br>
                    <span class="date">(Since 03/2025)</span>
                </p>

                <h4>Professional Research Experience</h4>
                <ul>
                    <li>
                        <strong>Post Doctoral Fellow</strong> (01/2024 – 09/2024)<br>
                        Simons Centre for the Study of Living Machines, NCBS-TIFR, Bangalore (Advisor: M. Rao)
                    </li>
                    <li>
                        <strong>Post Doctoral Fellow</strong> (01/2021 – 12/2023)<br>
                        International Centre for Theoretical Sciences (ICTS-TIFR), Bangalore (Advisor: C. Dasgupta)
                    </li>
                    <li>
                        <strong>Post Doctoral Fellow</strong> (02/2018 – 12/2020)<br>
                        The Institute of Mathematical Sciences, Chennai (Advisor: P. Chaudhuri, in collaboration with K. Martens)
                    </li>
                </ul>

                <h4>Education</h4>
                <ul>
                    <li>
                        <strong>Post B.Sc Integrated PhD Research Fellow</strong><br>
                        S. N. Bose National Centre for Basic Sciences, Kolkata<br>
                        <span class="date">(08/2010 - 01/2018)</span>
                    </li>
                    <li>
                        <strong>Ph.D.</strong> (08/2012 – 01/2018)<br>
                        Department of Chemical, Biological and Macromolecular Sciences, S. N. Bose National Centre for Basic Sciences, Kolkata<br>
                        <em>Thesis:</em> Numerical Studies on the Dynamics of Soft Matter Systems (Advisor: J. Chakrabarti)
                    </li>
                    <li>
                        <strong>M.Sc</strong> (08/2010 – 07/2012)<br>
                        S. N. Bose National Centre for Basic Sciences (Degree awarded by West Bengal University of Technology, Kolkata)
                    </li>
                </ul>
            </div>
        </div>

        <div id="research" class="page-content">
            <h2>🔬 Research Interests & Competencies</h2>
            <div class="section">
                <h3>Research Expertise</h3>
                <ul>
                    <li><strong>Domain Expertise:</strong> Intelligent Living and Artificial Systems, Physics of Complex Fluids.</li>
                    <li><strong>Core Competencies:</strong> Creative Research, Out-of-Equilibrium Statistical Physics, Machine Learning Order Disorder.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Key Research Areas</h3>
                <ul>
                    <li class="research-area-item"><strong>Soft, Glassy, Active & Adaptable Matter</strong></li>
                    <li class="research-area-item"><strong>Physics of Flow, Glass & Living Machines</strong></li>
                    <li class="research-area-item"><strong>Material Failure and Molecular Information Processing</strong></li>
                    <li class="research-area-item"><strong>Mechanobiology, Catastrophe Science, Emergent Intelligence</strong></li>
                </ul>
            </div>

            <div class="section">
                <h3>Extensive Experience in</h3>
                <ul>
                    <li>Soft Condensed Matter</li>
                    <li>High Performance Computing (Molecular Simulations)</li>
                </ul>
            </div>

            <div class="section">
                <h3>Research within the Group</h3>
                <p>
                    We perform extensive computer simulations, harnessing the power of High-Performance Computing (HPC), alongside statistical methods. Our aim is to develop and deploy data-driven yet inherently explainable techniques. These methods are meticulously designed to systematically investigate the intricate complex processes that drive autonomous organization and the phenomena of failure in both living and artificial systems. Our approach bridges the gap between complex data analysis and fundamental scientific understanding, ensuring our findings are not only predictive but also interpretable.
                </p>
                <p>
                    Our research endeavors delve into several key directions, offering a comprehensive exploration of complex systems:
                </p>
                <ul>
                    <li><strong>Molecular Information Processing:</strong> We meticulously decode how molecular systems store, manipulate, and relay information. This involves unraveling the fundamental principles that govern adaptive behaviors observed in both natural biological networks and synthetic molecular constructs. By understanding these intricate mechanisms, we aim to engineer more sophisticated and responsive artificial systems.</li>
                    <li><strong>Cellular Migration and Turbulence:</strong> We investigate the often chaotic and dynamic patterns exhibited by migrating cells. This research focuses on understanding their collective dynamics during critical biological processes such as tissue formation, repair, and in cases of failure. By analyzing these complex movements, we gain insights into emergent behaviors and the underlying physical constraints.</li>
                    <li><strong>Failure and Jamming of Amorphous Systems:</strong> A significant area of our work explores the transitions of disordered materials between fluid-like and rigid states. We aim to develop predictive models that can accurately forecast their resilience, pinpoint critical points of failure, and understand the jamming phenomena that can lead to material collapse.</li>
                    <li><strong>Predicting Vulnerability and Avalanches:</strong> We develop models that capture the dynamics of critical cascades—phenomena ranging from natural avalanches to the interconnectedness of economic societies. Our goal is to forecast the likelihood and potential impact of systemic failures, thereby enabling proactive mitigation strategies.</li>
                    <li><strong>Autonomous and Critical Phenomena in Living and Artificial Systems:</strong> We are deeply interested in the emergence of self-organized behaviors in systems poised at critical thresholds. By studying these systems, we aim to uncover the delicate balance between stability and adaptability, and how these seemingly opposing forces coexist to drive complex system evolution.</li>
                    <li><strong>Generative Physical Intelligence:</strong> We are pioneering the development of novel generative models that are deeply integrated with the fundamental laws of physics. This research aims to create AI systems capable of not only predicting but also generating physically plausible dynamics and structures. By teaching models the principles of statistical mechanics and emergent phenomena, we seek to build intelligent agents that can autonomously discover new materials, understand system failures, and generate innovative solutions to complex physical challenges.</li>
                </ul>
            </div>
        </div>

        <div id="teaching" class="page-content">
            <h2>💡 Teaching & Mentoring</h2>
            <div class="section">
                <h3>Courses Taught</h3>
                <ul>
                    <li>Mathematics for Intelligent Systems, 23MAT106, First Semester, B. Tech (AI and Data Science Core), School of Artificial Intelligence, Amrita Vishwa Vidyapeetham (Fall, 2025)
                    <li>Mathematics for AI, School of Artificial Intelligence, Amrita Vishwa Vidyapeetham, Bootcamp (AI & Data Science Core) .</li>
                    <li>Research Methodology: S. N. Bose National Centre for Basic Sciences.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Mentoring Experience</h3>
                <ul>
                    <li>Research Intern: A. Jagdish, A. Harish (06/2025 onwards)</li>
                    <li>Masters Thesis Co-supervision: Magnus Olsen, Understanding Non-Newtonian Materials (Supervisor: R. Cabriolu, Norwegian University of Science and Technology (since 08/2025)</li>
                </ul>
            </div>
        </div>

        <div id="misc" class="page-content">
            <h2>🤝 Research Collaborators</h2>
            <div class="section">
                 <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Jaydeb Chakrabarti</strong><br>
                        (Senior Professor, Physics of Complex System, S N Bose National Centre for Basic Sciences, Kolkata, IND)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Pinaki Chaudhuri</strong><br>
                        (Professor, Physics Group, The Institute of Mathematical Sciences, Chennai, IND)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Kirsten Martens</strong><br>
                        (CNRS Researcher, Interdisciplinary Laboratory of Physics (LIPHy), University of Grenoble Alpes, Grenoble, FR)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Chandan Dasgupta</strong><br>
                        (Honorary Professor, Indian Institute of Sciences, Bengaluru, IND; Simons Visiting Professor, International Centre for Theoretical Sciences -TIFR, Bengaluru, IND)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Abhishek Dhar</strong><br>
                        (Senior Professor, International Centre for Theoretical Sciences -TIFR, Bengaluru, IND)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Anupam Kundu</strong><br>
                        (Associate Professor, International Centre for Theoretical Sciences -TIFR, Bengaluru, IND)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Madan Rao</strong><br>
                        (Senior Professor, Simons Centre for the Study of Living Machines, National Centre for Biological Sciences -TIFR, Bengaluru, IND)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Vinay Vaibhav</strong><br>
                        (Post Doctoral Fellow, University of Goettingen, GER)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Collaborator 7</strong><br>
                        (Position, Affiliation 1, affiliation 2... and so on)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Collaborator 8</strong><br>
                        (Position, Affiliation 1, affiliation 2... and so on)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Collaborator 9</strong><br>
                        (Position, Affiliation 1, affiliation 2... and so on)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Collaborator 10</strong><br>
                        (Position, Affiliation 1, affiliation 2... and so on)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Collaborator 11</strong><br>
                        (Position, Affiliation 1, affiliation 2... and so on)
                    </div>
                </div>
                <div class="collaborator-item">
                    <div class="collaborator-info">
                        <strong>Collaborator 12</strong><br>
                        (Position, Affiliation 1, affiliation 2... and so on)
                    </div>
                </div>
            </div>

            <h2>🏆 Awards & Recognition</h2>
            <div class="section">
                <ul>
                    <li><strong>Best Oral Presenter</strong> at the Condensed Matter and Statistical Physics Symposium, Presidency University (August 2024).</li>
                    <li><strong>Visiting Research Grant</strong> from the Indo-French Centre for the Promotion of Advanced Research (IFC-PAR/CEFIPRA) (2019, 2018).</li>
                    <li><strong>Post BSc Integrated PhD Research Fellowship</strong> (2010-18).</li>
                    <li><strong>West Bengal Merit cum Means Scholarship</strong> (2006-2009).</li>
                    <li><strong>National Merit Scholarship</strong> (2004).</li>
                </ul>
            </div>

            <div class="badge-container">
                <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
                <img src="https://img.shields.io/github/followers/sd3ph?label=Followers&style=social" alt="GitHub Followers">
            </div>

            <div class="social-links">
                <a href="mailto:sumandutta.snbncbs@gmail.com">
                    <img src="https://img.shields.io/badge/Email-red?style=flat-square&logo=gmail&logoColor=white" alt="Email">
                </a>
                <a href="https://scholar.google.com/citations?user=j-83jp8AAAAJ">
                    <img src="https://img.shields.io/badge/Google_Scholar-007bff?style=flat-square&logo=google-scholar&logoColor=white" alt="Google Scholar">
                </a>
                <a href="https://github.com/sd3ph">
                    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub">
                </a>
                <a href="https://www.linkedin.com/in/sd3ph/">
                    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn">
                </a>
            </div>
        </div>

    </div>

    <script>
        const navLinks = document.querySelectorAll('.nav-link');
        const pageContents = document.querySelectorAll('.page-content');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Remove 'active' class from all links and content
                navLinks.forEach(nav => nav.classList.remove('active'));
                pageContents.forEach(content => content.classList.remove('active'));

                // Add 'active' class to the clicked link
                this.classList.add('active');

                // Show the corresponding content
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).classList.add('active');
            });
        });

        // Set the initial active link based on URL fragment or default to #about
        const currentHash = window.location.hash || '#about';
        document.querySelector(`.nav-link[href="${currentHash}"]`).classList.add('active');
        document.querySelector(currentHash).classList.add('active');
    </script>

</body>
</html>
