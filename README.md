<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suman Dutta - Researcher</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #343a40; /* Dark grey */
            --secondary-color: #6c757d; /* Light grey */
            --accent-color: #007bff; /* Blue */
            --background-color: #f8f9fa; /* Off-white */
            --card-background: #fff;
            --border-color: #dee2e6; /* Very light grey */
        }

        body {
            font-family: 'Roboto', sans-serif;
            font-size: 13px;
            line-height: 1.6;
            margin: 0;
            padding: 0; /* Remove padding from body to allow full-width header */
            background-color: var(--background-color);
            color: var(--primary-color);
            display: flex;
            flex-direction: column; /* Stack header, content, and footer vertically */
            align-items: center; /* Center content */
            min-height: 100vh;
        }

        .header-bar {
            width: 100%;
            background-color: #fff; /* White background for header */
            padding: 15px 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap; /* Allow wrapping on smaller screens */
        }

        .page-title {
            font-family: 'Roboto Slab', serif;
            font-size: 1.6em; /* Slightly larger for emphasis */
            color: var(--accent-color);
            font-weight: 700;
            margin: 0 20px; /* Spacing around the title */
        }

        .nav-menu {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            gap: 20px; /* Space between nav items */
        }

        .nav-menu li {
            margin-bottom: 0; /* Override default li margin */
        }

        .nav-menu a {
            font-family: 'Roboto', sans-serif;
            font-size: 1em; /* Standard font size for nav */
            font-weight: 500;
            color: var(--primary-color);
            padding: 8px 12px;
            border-radius: 4px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .nav-menu a:hover, .nav-menu a.active {
            background-color: var(--accent-color);
            color: #fff;
            text-decoration: none;
        }

        .container {
            max-width: 800px;
            width: 100%;
            background-color: var(--card-background);
            padding: 25px;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            border: 1px solid var(--border-color);
            margin-top: 20px; /* Space below header */
            margin-bottom: 20px; /* Space above footer */
        }

        h2 {
            font-size: 1.4em;
            border-bottom: 1px solid var(--accent-color);
            padding-bottom: 6px;
            margin-top: 25px;
            margin-bottom: 16px;
            color: #343a40;
        }

        h3 {
            font-size: 1.1em;
            color: #495057;
            margin-top: 18px;
            margin-bottom: 12px;
        }

        strong {
            color: #343a40;
            font-weight: 500;
        }

        p {
            margin-bottom: 12px;
        }

        ul {
            list-style: disc;
            margin-left: 20px;
            padding-left: 0;
        }

        li {
            margin-bottom: 8px;
            padding-left: 3px;
        }

        .section {
            margin-bottom: 25px;
            padding-top: 15px; /* Add some padding to visually separate sections */
        }

        .paper-title {
            font-style: italic;
            color: var(--primary-color);
        }

        .affiliation {
            font-weight: 600;
            color: #343a40;
        }

        .date {
            color: var(--secondary-color);
            font-size: 0.85em;
        }

        a {
            color: var(--accent-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #0056b3;
            text-decoration: underline;
        }

        .profile-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 15px;
        }

        .profile-picture {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-right: 20px;
            object-fit: cover;
            border: 2px solid var(--accent-color);
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.15);
        }

        .header-text {
            flex-grow: 1;
        }

        .header-text h1 {
            margin-bottom: 0;
            text-align: left;
            font-size: 1.6em;
        }

        .header-text p {
            font-size: 0.95em;
            color: var(--secondary-color);
            margin-top: 3px;
        }

        .social-links {
            text-align: center;
            margin-top: 25px;
            padding-top: 15px;
            border-top: 1px solid var(--border-color);
        }

        .social-links a {
            margin: 0 8px;
            display: inline-block;
        }

        .social-links img {
            height: 24px;
            vertical-align: middle;
            transition: transform 0.2s ease;
        }

        .social-links a:hover img {
            transform: translateY(-1px);
        }

        hr {
            border: 0;
            height: 1px;
            background: var(--border-color);
            margin: 30px 0;
        }

        .badge-container {
            text-align: center;
            margin-top: 20px;
            margin-bottom: 15px;
        }
        .badge-container img {
            margin: 0 4px;
            height: 20px;
        }

        /* Hide all sections by default */
        .page-content {
            display: none;
        }

        /* Show the active section */
        .page-content.active {
            display: block;
        }
    </style>
</head>
<body>

    <header class="header-bar">
        <div class="page-title">Welcome</div>
        <nav>
            <ul class="nav-menu">
                <li><a href="#about" onclick="showPage('about'); return false;" class="active">About Me</a></li>
                <li><a href="#research" onclick="showPage('research'); return false;">Research</a></li>
                <li><a href="#teaching" onclick="showPage('teaching'); return false;">Teaching</a></li>
                <li><a href="#misc" onclick="showPage('misc'); return false;">Misc</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">

        <!-- About Me Section -->
        <div id="about" class="page-content active">
            <div class="profile-header">
                <img src="https://source.unsplash.com/150x150/?portrait" alt="Profile Picture" class="profile-picture">
                <div class="header-text">
                    <h1>Suman Dutta</h1>
                    <p>Researcher | Intelligent Living & Artificial Systems</p>
                </div>
            </div>

            <p>
                I am an <strong>Active</strong> researcher in the field of <strong>Intelligent Living and Artificial Systems</strong>, with a specialization in <strong>Physics of Complex Fluids</strong>. Driven by <strong>Creative Research</strong>, I focus on the intricate complex dynamics of <strong>Soft, Glassy, Active & Adaptable Matter</strong>, combining <strong>Statistical Physics</strong> and <strong>Machine Intelligence</strong>.
            </p>

            <hr>

            <div class="section">
                <h2>🌟 Highlights</h2>
                <ul>
                    <li><strong>PhD</strong> on Numerical Studies on the Dynamics of Soft Matter Systems (S. N. Bose National Centre for Basic Sciences, 2018)</li>
                    <li><strong>5+ Years of Post-PhD Research Experience</strong> in Interdisciplinary Physics, at IMSc (2018-2020), ICTS-TIFR (2021-23) and NCBS-TIFR (2024)</li>
                </ul>
            </div>

            <hr>

            <div class="section">
                <h2>🔬 Research Interests & Competencies</h2>
                <h3>Research Expertise</h3>
                <ul>
                    <li><strong>Domain Expertise:</strong> Intelligent Living and Artificial Systems, Physics of Complex Fluids.</li>
                    <li><strong>Core Competencies:</strong> Creative Research, Out-of-Equilibrium Statistical Physics, Machine Learning Order Disorder.</li>
                    <li><strong>Key Research Areas:</strong>
                        <ul>
                            <li>Soft, Glassy, Active & Adaptable Matter</li>
                            <li>Physics of Flow, Glass & Living Machines</li>
                            <li>Material Failure and Molecular Information Processing</li>
                            <li>Mechanobiology, Catastrophe Science, Emergent Intelligence</li>
                        </ul>
                    </li>
                    <li><strong>Extensive Experience in:</strong> Soft Condensed Matter, High Performance Computing (Molecular Simulations)</li>
                </ul>
            </div>

            <hr>

            <div class="section">
                <h2>🎓 Professional Journey</h2>
                <h3>Present Affiliation</h3>
                <p>
                    <span class="affiliation">Assistant Professor (Sr. Gd.)</span><br>
                    School of Artificial Intelligence, Amrita Vishwa Vidyapeetham, Coimbatore<br>
                    <span class="date">(Since 03/2025)</span>
                </p>

                <h3>Professional Research Experience</h3>
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

                <h3>Education</h3>
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

            <div class="badge-container">
                <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
                <img src="https://img.shields.io/github/followers/sd3ph?label=Followers&style=social" alt="GitHub Followers">
            </div>

            <div class="social-links">
                <a href="mailto:sumandutta.snbncbs@gmail.com">
                    <img src="https://img.shields.io/badge/Email-sumandutta.snbncbs%40gmail.com-red?style=flat-square&logo=gmail&logoColor=white" alt="Email">
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

        <!-- Research Section -->
        <div id="research" class="page-content">
            <div class="section">
                <h2>🔬 Research Interests & Competencies</h2>
                <h3>Research Expertise</h3>
                <ul>
                    <li><strong>Domain Expertise:</strong> Intelligent Living and Artificial Systems, Physics of Complex Fluids.</li>
                    <li><strong>Core Competencies:</strong> Creative Research, Out-of-Equilibrium Statistical Physics, Machine Learning Order Disorder.</li>
                    <li><strong>Key Research Areas:</strong>
                        <ul>
                            <li>Soft, Glassy, Active & Adaptable Matter</li>
                            <li>Physics of Flow, Glass & Living Machines</li>
                            <li>Material Failure and Molecular Information Processing</li>
                            <li>Mechanobiology, Catastrophe Science, Emergent Intelligence</li>
                        </ul>
                    </li>
                    <li><strong>Extensive Experience in:</strong> Soft Condensed Matter, High Performance Computing (Molecular Simulations)</li>
                </ul>
            </div>

            <div class="section">
                <h2>Research within the Group</h2>
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
                </ul>
            </div>

            <hr>

            <div class="section">
                <h2>📚 Scientific Portfolio (Selected Papers)</h2>
                <p>Here are some of my papers:</p>
                <ul>
                    <li>
                        <span class="paper-title">Entropic Timescales of Dynamic Heterogeneity in Supercooled Liquid</span><br>
                        V. Vaibhav & S. Dutta*, <em>Phys. Rev. E (Lett.)</em>, 109, L062102 (2024)<br>
                        <a href="#">[🔗 LINK]</a> <a href="#">[⭐ Commentary]</a>
                    </li>
                    <li>
                        <span class="paper-title">Elastoplastic approach based on microscopic insights for the steady state and transient dynamics of sheared disordered solids</span><br>
                        C. Liu, S. Dutta†, P. Chaudhuri & K. Martens, <em>Phys. Rev. Lett.</em>, 126, 138005 (2021)<br>
                        <a href="#">[🔗 LINK]</a>
                    </li>
                    <li>
                        <span class="paper-title">Anomalous dynamical responses in a driven system</span><br>
                        S. Dutta* & J. Chakrabarti, <em>Europhys. Lett. (EPL)</em>, 116, 38001 (2016)<br>
                        <a href="#">[🔗 LINK]</a>
                    </li>
                    <li>
                        <span class="paper-title">Crystal to liquid cross-over for active particles with inverse-square power-law interactions</span><br>
                        S. Santra, L. Touzo, C. Dasgupta, A. Dhar, S. Dutta, A. Kundu, P. Le Doussal, G. Schehr, P. Singh, <em>J. Stat. Mech.</em>, 033203 (2025)<br>
                        <a href="#">[🔗 LINK]</a>
                    </li>
                    <li>
                        <span class="paper-title">Microscopic insights into dynamical heterogeneity in a lane forming colloid</span><br>
                        S. Dutta*, <em>Chem. Phys.</em>, 522, 256 (2019)<br>
                        <a href="#">[🔗 LINK]</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Teaching Section -->
        <div id="teaching" class="page-content">
            <div class="section">
                <h2>💡 Teaching & Mentoring</h2>
                <ul>
                    <li><strong>Courses Taught:</strong> Mathematics for AI, School of Artificial Intelligence, Bootcamp (AI & Data Science Core).</li>
                    <li><strong>Research Methodology:</strong> S. N. Bose National Centre for Basic Sciences.</li>
                    <li><strong>Mentoring Experience:</strong>
                        <ul>
                            <li>Research Intern: A. Jagdish, A. Harish (06/2025 onwards)</li>
                            <li>Masters Thesis Co-supervision: Understanding Non-Newtonian Materials (since 08/2025)</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Misc Section -->
        <div id="misc" class="page-content">
            <div class="section">
                <h2>🏆 Awards & Recognition</h2>
                <ul>
                    <li><strong>Best Oral Presenter</strong> at the Condensed Matter and Statistical Physics Symposium, Presidency University (August 2024).</li>
                    <li><strong>Visiting Research Grant</strong> from the Indo-French Centre for the Promotion of Advanced Research (IFC-PAR/CEFIPRA) (2019, 2018).</li>
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
                    <img src="https://img.shields.io/badge/Email-sumandutta.snbncbs%40gmail.com-red?style=flat-square&logo=gmail&logoColor=white" alt="Email">
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
        function showPage(pageId) {
            // Hide all content sections
            const pageContents = document.querySelectorAll('.page-content');
            pageContents.forEach(content => {
                content.classList.remove('active');
            });

            // Deactivate all navigation links
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Show the selected content section
            const activeContent = document.getElementById(pageId);
            if (activeContent) {
                activeContent.classList.add('active');
            }

            // Activate the clicked navigation link
            const activeLink = document.querySelector(`.nav-menu a[href="#${pageId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Optional: Update URL hash without page reload
            history.pushState(null, '', `#${pageId}`);
        }

        // Initialize: Show the 'About Me' section by default
        document.addEventListener('DOMContentLoaded', () => {
            // Check if there's a hash in the URL, otherwise default to 'about'
            const initialHash = window.location.hash || '#about';
            const initialPageId = initialHash.substring(1); // Remove '#'
            showPage(initialPageId);
        });
    </script>

</body>
</html>
