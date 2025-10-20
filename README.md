<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iLab - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root { 
            --primary-color: #2c3e50;
            --secondary-color: #7f8c8d;
            --accent-color: #e74c3c;
            --background-color: #ecf0f1;
            --card-background: #ffffff;
            --border-color: #bdc3c7;
            --nav-hover-bg: #34495e;
            --nav-active-bg: #e74c3c;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 12px;
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background-color: var(--background-color);
            color: var(--primary-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
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
            overflow: hidden;
        }

        .main-header {
            width: 100%;
            background-color: var(--nav-hover-bg);
            box-sizing: border-box;
        }

        .site-title-header {
            padding: 15px 30px;
            box-sizing: border-box;
        }

        .site-title-header .title {
            font-family: 'Playfair Display', serif;
            font-size: 2.2em;
            color: #fff;
            margin: 0;
            text-align: left;
        }
        
        .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 30px;
            border-bottom: 3px solid var(--accent-color);
            box-sizing: border-box;
        }
        
        .nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .nav-links li {
            margin: 5px 15px;
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
            white-space: nowrap;
        }

        .nav-links a:hover {
            background-color: var(--accent-color);
            color: #fff;
        }

        .nav-links a.active {
            background-color: var(--accent-color);
            color: #fff;
        }

        .page-content {
            padding: 30px;
            display: none;
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
        
        h4 {
            font-family: 'Playfair Display', serif;
            font-size: 1.1em;
            color: var(--primary-color);
            margin-top: 18px;
            margin-bottom: 10px;
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

        .profile-header, .section {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 6px;
            margin-bottom: 20px;
            border: 1px solid rgba(189, 195, 199, 0.3);
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .container {
            background: none;
            box-shadow: none;
            border: none;
        }
        .page-content {
            background-color: transparent;
            padding: 0;
        }
        .page-content.active {
            display: block;
            padding: 30px;
        }
        h2 {
            text-align: left;
        }
        .profile-header h1, .profile-header p {
            color: var(--primary-color);
        }

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

        .advertisement {
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 800px;
            margin: 20px auto;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .advertisement:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .advertisement h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.2em;
            margin-bottom: 20px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
            color: white; 
            border-bottom: none; 
            text-align: center; 
        }

        .advertisement p {
            font-size: 1.0em;
            line-height: 1.7;
            margin-bottom: 20px;
        }

        .opportunities {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin: 30px 0;
        }

        .opportunity {
            background: rgba(255, 255, 255, 0.1);
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 0.85em;
            transition: background-color 0.3s ease;
        }

        .opportunity:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .call-to-action {
            margin-top: 30px;
        }

        .call-to-action h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.5em;
            margin-bottom: 15px;
            color: white; 
            border-bottom: none; 
            text-align: center; 
        }

        .email-link {
            display: inline-block;
            background-color: #ffffff;
            color: #667eea;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.0em;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .email-link:hover {
            background-color: #f0f2ff;
            color: #5a6edc;
            transform: scale(1.05);
        }

        .footer-text {
            margin-top: 30px;
            font-size: 0.9em;
            font-style: italic;
        }

        .publication-item {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px dashed var(--border-color);
        }
        .publication-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
        .publication-item .citation {
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 8px;
        }
        .publication-item p {
            margin-bottom: 5px;
            line-height: 1.6;
        }
        .publication-item a {
            color: var(--accent-color);
            font-weight: bold;
            text-decoration: none;
        }
        .publication-item a:hover {
            text-decoration: underline;
        }

        .timeline {
            position: relative;
            padding-left: 20px; 
            border-left: 2px solid var(--accent-color);
        }
        .timeline-item {
            position: relative;
            margin-bottom: 30px;
        }
        .timeline-item:last-child {
            margin-bottom: 0;
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -28px;
            top: 5px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: var(--accent-color);
            border: 2px solid white;
            z-index: 1;
        }
        .timeline-month {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 1.2em;
            color: var(--primary-color);
            margin-bottom: 15px;
            text-transform: uppercase;
        }
        .timeline-content {
            background-color: #fdfdfd;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid var(--border-color);
        }
        .timeline-content p {
            margin: 0;
        }
        .timeline-content strong {
            display: block;
            margin-bottom: 8px;
            color: var(--primary-color);
            font-size: 1.05em;
        }
        .timeline-content a {
             color: var(--accent-color);
            font-weight: bold;
            text-decoration: none;
        }
        .timeline-content a:hover {
            text-decoration: underline;
        }

        #chatbot-widget {
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 1000;
        }

        #chatbot-bubble {
            width: 60px;
            height: 60px;
            background-color: var(--accent-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s ease, background-color 0.2s ease, border-radius 0.3s ease;
        }

        #chatbot-bubble:hover {
            transform: scale(1.1);
            background-color: #d35400;
        }
        
        #chatbot-bubble .icon-open, #chatbot-bubble .icon-close {
            transition: transform 0.3s ease, opacity 0.3s ease;
            position: absolute;
        }

        #chatbot-bubble .icon-close {
            transform: rotate(-90deg) scale(0.5);
            opacity: 0;
        }

        #chatbot-widget.open #chatbot-bubble {
            background-color: var(--primary-color);
            border-radius: 15px;
        }

        #chatbot-widget.open #chatbot-bubble .icon-open {
            transform: rotate(90deg) scale(0.5);
            opacity: 0;
        }

        #chatbot-widget.open #chatbot-bubble .icon-close {
            transform: rotate(0deg) scale(1);
            opacity: 1;
        }

        #chatbot-iframe-container {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 350px;
            height: 500px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
            transform: scale(0.95) translateY(10px);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
            transform-origin: bottom right;
        }

        #chatbot-widget.open #chatbot-iframe-container {
            opacity: 1;
            visibility: visible;
            transform: scale(1) translateY(0);
        }

        #chatbot-iframe-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        @media (max-width: 480px) {
            #chatbot-iframe-container {
                width: calc(100vw - 40px);
                height: 70vh;
                bottom: 75px;
                right: -10px;
            }
            #chatbot-widget {
                bottom: 20px;
                right: 20px;
            }
        }
        
        .password-prompt-container {
            text-align: center;
            padding: 40px 20px;
            border: 1px dashed var(--border-color);
            border-radius: 8px;
            background-color: #fdfdfd;
        }
        .password-prompt-container h3 {
            margin-top: 0;
        }
        .password-form {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }
        .password-form input {
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-size: 1.1em;
            width: 250px;
        }
        .password-form button {
            padding: 10px 20px;
            border: none;
            background-color: var(--primary-color);
            color: white;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .password-form button:hover {
            background-color: var(--nav-hover-bg);
        }
        .password-error-message {
            margin-top: 15px;
            color: var(--accent-color);
            font-weight: bold;
            height: 1.2em;
        }
        #classroom-content.hidden {
            display: none;
        }

    </style>
</head>
<body>

    <header class="main-header">
        <div class="site-title-header">
            <div class="title">Physics+AI</div>
        </div>
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="#highlight" class="nav-link active">Home</a></li>
                <li><a href="#research" class="nav-link">Research</a></li>
                <li><a href="#publication" class="nav-link">Publication</a></li>
                <li><a href="#teaching" class="nav-link">Teaching</a></li>
                <li><a href="#latest" class="nav-link">Latest</a></li>
                <li><a href="#classroom" class="nav-link">Live Class Room</a></li>
                <li><a href="#products" class="nav-link">Lab Products</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#misc" class="nav-link">misc</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <div id="highlight" class="page-content active">
            <img src="cover1.png" alt="Highlight cover image" style="width: 100%; aspect-ratio: 21 / 9; object-fit: cover; margin-bottom: 20px; border-radius: 6px;">
            
            <h2> Hello World !</h2>
            <p>We are a group of creative researchers exploring physics at the interface of artificial intelligence, working in a deeply collaborative and interdisciplinary setting. Our goal is to understand complex systems and to see how modern computational approaches, especially deep learning, can contribute to solutions for societal good. Our main research interests include:</p>
            <ul>
                <li><b>Collective Intelligence in Natural and Artificial Systems:</b> How do large groups of individual agents—be they birds in a flock, cells in a tissue, or robots in a swarm—coordinate to achieve complex, group-level goals? We explore the physical principles behind this emergent intelligence, studying how local rules and interactions give rise to sophisticated collective behaviors in both living and engineered systems.</li>
                <li><b>Physics of Living Matter:</b> We view biological tissues as a form of active matter. We study the collective migration and self-organization of cells to better understand fundamental processes like wound healing, tissue development, and morphogenesis. By creating computational models that capture the interplay between cellular forces and signaling, we hope to contribute insights that could one day aid in regenerative medicine.</li>
                <li><b>Mechanics of Disordered Materials:</b> Materials like glasses and granular packings lack a perfect crystal structure, which makes predicting their behavior, particularly failure, a difficult challenge. We investigate the fundamental mechanics of these systems, applying machine learning techniques to identify subtle structural precursors to failure. Our goal is to contribute to a more predictive science of materials, which is essential for designing more resilient and safer structures.</li>
                <li><b>AI as a Tool for Scientific Discovery:</b> A common thread through all our research is the use of deep learning not just for prediction, but as a tool for gaining fundamental insight. We are committed to developing simple models by machine intelligence (MI).  We aim to uncover the underlying physical principles our models have learned, helping us to formulate new hypotheses and deepen our understanding of the complex natural systems we study.</li>
            </ul>
            <p>We thrive on a close partnership with experimentalists and other theorists, creating a dynamic environment for learning and discovery.</p>

            <div class="section">
                <h3>🌟 Highlights</h3>
                <ul>
                    <li><strong>Research Interests:</strong> Investigating the dynamics of natural and artificial complex systems, with a focus on out-of-equilibrium soft, glassy, and active matter.</li>
                    <li><strong>Physics at the Interface of AI:</strong> By training models from physical systems, we integrate fundamental physical laws into novel AI models. This involves using high-performance computing and explainable AI to decode molecular information processing, predict material failure, and attempts to understand emergent behaviors in living and artificial systems.</li>
                    <li><strong>Teaching and Mentoring:</strong> Engaged in teaching courses such as Mathematics for AI and Intelligent Systems, and mentoring research interns and graduate students.</li>
                </ul>
            </div>

            <div class="section">
                <h2>🌟 Join Us </h2>
                <div class="advertisement">
                    <h1>Join Us to Innovate</h1>
                    <p> We are seeking creative indivisuals to join our lab to co-create the future.</p>
            
                    <p>Whether you are an established researcher, a budding scientist, or a creative force eager to collaborate, we have a place for you. We are actively seeking passionate individuals for:</p>
            
                    <div class="opportunities">
                        <div class="opportunity">Collaborative Projects</div>
                        <div class="opportunity">Internship Opportunities</div>
                        <div class="opportunity">PhD Positions</div>
                        <div class="opportunity">Postdoctoral Fellowships</div>
                    </div>
            
                    <p>Find your chance to work on projects that matter, surrounded by a team to pushing the boundaries of what's possible. We believe in the power of diversity and the magic that happens when generative minds connect.</p>
            
                    <div class="call-to-action">
                        <h2>Ready to answer the call?</h2>
                        <p>We want to hear from you: your vision and plans with us.<br>Email your one-page CV, a well supported SOP</p>
                        <a href="mailto:sumandutta.avvcb@gmail.com" class="email-link">Submit</a>
                    </div>
            
                    <p class="footer-text">Let's build the future together.</p>
                </div>
                <img src="joinus.png" alt="Join Us Graphic" style="width: 100%; margin-top: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            </div>
        </div>

        <div id="research" class="page-content">
            <h2>🔬 Research Interests & Competencies</h2>
            <div class="section">
                <h3>Research Expertise</h3>
                <ul>
                    <li><strong>Domain Expertise:</strong> Collective Intelligence in Living and Artificial Systems, Physics of Complex Fluids, Soft Condensed Matter. </li>
                    <li><strong>Core Competencies:</strong> Creative Research, Out-of-Equilibrium Statistical Physics, Machine Learning Order Disorder.</li>
                </ul>
            </div>
            <div style="display: flex; width: 100%; aspect-ratio: 32 / 9; overflow: hidden; margin-bottom: 20px; border-radius: 6px;">
                <img src="Intro.gif" alt="First highlight cover image" style="width: 50%; height: 100%; object-fit: cover;">
                <img src="Intro2.gif" alt="Second highlight cover image" style="width: 50%; height: 100%; object-fit: cover;">
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
                <p>We perform extensive computer simulations, harnessing the power of High-Performance Computing (HPC), alongside statistical methods. Our aim is to develop and deploy data-driven yet inherently explainable techniques. These methods are meticulously designed to systematically investigate the intricate complex processes that drive autonomous organization and the phenomena of failure in both living and artificial systems. Our approach bridges the gap between complex data analysis and fundamental scientific understanding, ensuring our findings are not only predictive but also interpretable.</p>
                <p>Our research endeavors delve into several key directions, offering a comprehensive exploration of complex systems:</p>
                <ul>
                    <li><strong>Molecular Information Processing:</strong> We meticulously decode how molecular systems store, manipulate, and relay information. This involves unraveling the fundamental principles that govern adaptive behaviors observed in both natural biological networks and synthetic molecular constructs. By understanding these intricate mechanisms, we aim to engineer more sophisticated and responsive artificial systems.</li>
                    <li><strong>Cellular Migration and Turbulence:</strong> We investigate the often chaotic and dynamic patterns exhibited by migrating cells. This research focuses on understanding their collective dynamics during critical biological processes such as tissue formation, repair, and in cases of failure. By analyzing these complex movements, we gain insights into emergent behaviors and the underlying physical constraints.</li>
                    <li><strong>Failure and Jamming of Amorphous Systems:</strong> A significant area of our work explores the transitions of disordered materials between fluid-like and rigid states. We aim to develop predictive models that can accurately forecast their resilience, pinpoint critical points of failure, and understand the jamming phenomena that can lead to material collapse.</li>
                    <li><strong>Predicting Vulnerability and Avalanches:</strong> We develop models that capture the dynamics of critical cascades—phenomena ranging from natural avalanches to the interconnectedness of economic societies. Our goal is to forecast the likelihood and potential impact of systemic failures, thereby enabling proactive mitigation strategies.</li>
                    <li><strong>Autonomous and Critical Phenomena in Living and Artificial Systems:</strong> We are deeply interested in the emergence of self-organized behaviors in systems poised at critical thresholds. By studying these systems, we aim to uncover the delicate balance between stability and adaptability, and how these seemingly opposing forces coexist to drive complex system evolution.</li>
                    <li><strong>Generative Physical Intelligence:</strong> We are pioneering the development of novel generative models that are deeply integrated with the fundamental laws of physics. This research aims to create AI systems capable of not only predicting but also generating physically plausible dynamics and structures. By teaching models the principles of statistical mechanics and emergent phenomena, we seek to build intelligent agents that can autonomously discover new materials, understand system failures, and generate innovative solutions to a complex physical challenges.</li>
                </ul>
            </div>
        </div>

        <div id="publication" class="page-content">
            <h2>📚 Publications</h2>
            <div class="section">
                <div class="publication-item">
                    <p class="citation">J. Chakrabarti & <u>S. Dutta</u>, <em>Analytical form of forces in hydrophobic collapse</em>, Chem. Phys. Lett., 620, <strong>109</strong> (2015) [<a href="https://www.sciencedirect.com/science/article/pii/S0009261414010483" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Second author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation">
