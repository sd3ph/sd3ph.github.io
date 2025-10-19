<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iLab - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
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

        /* --- MODIFIED NAVIGATION STYLES --- */
        /* Main header container */
        .main-header {
            width: 100%;
            background-color: var(--nav-hover-bg);
            box-sizing: border-box;
        }

        /* Top row: Title */
        .site-title-header {
            padding: 15px 30px;
            box-sizing: border-box;
        }

        .site-title-header .title {
            font-family: 'Playfair Display', serif;
            font-size: 2.2em; /* Increased title font size */
            color: #fff;
            margin: 0;
            text-align: left;
        }
        
        /* Bottom row: Navigation Links Bar */
        .navbar {
            display: flex;
            justify-content: center; /* Center the links container */
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
            flex-wrap: wrap; /* Allow links to wrap on smaller screens */
            justify-content: center;
        }

        .nav-links li {
            margin: 5px 15px; /* Add vertical margin for wrapping */
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
            white-space: nowrap; /* Prevent link text from breaking */
        }

        .nav-links a:hover {
            background-color: var(--accent-color);
            color: #fff;
        }

        .nav-links a.active {
            background-color: var(--accent-color);
            color: #fff;
        }
        /* --- END OF MODIFIED NAVIGATION --- */


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

        /* --- JOIN US ADVERTISEMENT STYLES --- */
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
        /* --- END OF ADVERTISEMENT STYLES --- */

        /* --- Publication Section Styles --- */
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
            font-size: 1.1em; /* Slightly larger font for the main citation */
            line-height: 1.6;
            margin-bottom: 8px;
        }
        .publication-item p {
            margin-bottom: 5px; /* Tighter spacing within an item */
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

        /* --- Timeline Styles for Latest News --- */
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

        /* --- Chatbot Widget Styles --- */
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
            background-color: #d35400; /* Darker accent color */
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
            bottom: 80px; /* Position above the bubble */
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
        
        /* Responsive styles for chatbot */
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
        
        /* --- Live Class Room Styles --- */
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
            height: 1.2em; /* Reserve space to prevent layout shift */
        }
        #classroom-content.hidden {
            display: none;
        }


    </style>
</head>
<body>

    <!-- MODIFIED HEADER FOR TWO-ROW LAYOUT -->
    <header class="main-header">
        <!-- Top Row: Title -->
        <div class="site-title-header">
            <div class="title">Physics+AI</div>
        </div>
        <!-- Bottom Row: Navigation Links -->
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="#highlight" class="nav-link active">Home</a></li>
                <li><a href="#research" class="nav-link">Research</a></li>
                <li><a href="#publication" class="nav-link">Publication</a></li>
                <li><a href="#teaching" class="nav-link">Teaching</a></li>
                <li><a href="#latest" class="nav-link">Latest</a></li>
                <!-- NEW PAGES ADDED HERE -->
                <li><a href="#classroom" class="nav-link">Live Class Room</a></li>
                <li><a href="#products" class="nav-link">Lab Products</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#misc" class="nav-link">misc</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <!-- 1. Highlight Page -->
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

        <!-- 2. Research Page -->
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

        <!-- NEW: Publication Page -->
        <div id="publication" class="page-content">
            <h2>📚 Publications</h2>
            <div class="section">
                <div class="publication-item">
                    <p class="citation">J. Chakrabarti & <u>S. Dutta</u>, <em>Analytical form of forces in hydrophobic collapse</em>, Chem. Phys. Lett., 620, <strong>109</strong> (2015) [<a href="https://www.sciencedirect.com/science/article/pii/S0009261414010483" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Second author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Anomalous dynamical responses in a driven system</em>, Europhys. Lett., <strong>116</strong>, 38001 (2016) [<a href="https://iopscience.iop.org/article/10.1209/0295-5075/116/38001/meta" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Transient dynamical responses of a charged binary colloid in an electric field</em>, Soft Matter, <strong>14</strong>, 4477 (2018) [<a href="https://pubs.rsc.org/en/content/articlehtml/2018/sm/c7sm02552a" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>*, <em>Microscopic insights into dynamical heterogeneity in a lane forming colloid</em>, Chem. Phys., <strong>522</strong>, 256 (2019) [<a href="https://www.sciencedirect.com/science/article/pii/S0301010418311510" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Solo author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation">R. Dandekar, S. Bose & <u>S. Dutta</u>*, <em>Non-Gaussian information of heterogeneity in soft matter</em>, Europhys. Lett., <strong>131</strong>, 18002 (2020) [<a href="https://iopscience.iop.org/article/10.1209/0295-5075/131/18002/meta" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Length-scales of dynamic heterogeneity in a driven binary colloid</em>, Phys. Chem. Chem. Phys., <strong>22</strong>, 17731 (2020) [<a href="https://pubs.rsc.org/en/content/articlelanding/2020/cp/d0cp02703k/unauth" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation">C. Liu, <u>S. Dutta</u>, P. Chaudhuri & K. Martens, <em>Elastoplastic approach based on microscopic insights for the steady state and transient dynamics of sheared disordered solids</em>, Phys. Rev. Lett., <strong>126</strong>, 138005 (2021) [<a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.138005" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Joint first author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>, K. Martens & P. Chaudhuri, <em>Creep response of athermal amorphous solids under imposed shear stress</em>, arXiv:2303.04718 (2023) [<a href="https://arxiv.org/abs/2303.04718" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav & <u>S. Dutta</u>*, <em>Entropic timescales of Dynamic Heterogeneity in Supercooled Liquid</em>, Phys. Rev. E (Lett.), <strong>109</strong>, L062102 (2024) [<a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.109.L062102" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation">S. Santra, L. Touzo, C. Dasgupta, A. Dhar, <u>S. Dutta</u>, A. Kundu, P. Le Doussal, G. Schehr & P. Singh, <em>Crystal to liquid cross-over in the active Calogero-Moser model</em>, J. Stat. Mech. 033203 (2025) [<a href="https://iopscience.iop.org/article/10.1088/1742-5468/adbb5d" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Contributing author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav, T. Das & <u>S. Dutta</u>*, <em>Persistently Non-Gaussian Metastable Liquids</em>, To be published in Ann. Phys. (Berlin) (2025)</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>*, P. Chaudhuri, M. Rao & C. Dasgupta, <em>Activity-driven sorting, approach to criticality and turbulent flows in dense persistent active fluids</em>, arXiv:2509.00376</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>
            </div>
        </div>


        <!-- 3. Teaching Page -->
        <div id="teaching" class="page-content">
            <h2>💡 Teaching & Mentoring</h2>
            <div class="section">
                <h3>Courses Taught</h3>
                <ul>
                    <li>Mathematics for Intelligent Systems, 23MAT106, First Semester, B. Tech (AI and Data Science Core), School of Artificial Intelligence, Amrita Vishwa Vidyapeetham (Fall, 2025) .</li>
                    <li>Mathematics for AI, School of Artificial Intelligence, Amrita Vishwa Vidyapeetham, Bootcamp (AI & Data Science Core) .</li>
                    <li>Research Methodology: S. N. Bose National Centre for Basic Sciences.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Mentoring Experience</h3>
                <ul>
                    <li>Research Intern: A. Jagdish, School of Physical Sciences, Amrita Vishwa Vidyapeetham (06/2025 onwards)</li>
                    <li>Student Collaborators: A. Harish, A. Venkatraman, Department of Mathematics, Amrita Vishwa Vidyapeetham  (06/2025 onwards)</li>
                    <li>Masters Thesis Co-supervision: Magnus Olsen, Understanding Non-Newtonian Materials (Supervisor: R. Cabriolu, Norwegian University of Science and Technology (since 08/2025)</li>
                </ul>
            </div>
        </div>

        <!-- 4. About Me Page -->
        <div id="about" class="page-content">
            <h2>Group Leader</h2>
            <div class="profile-header section">
                <img src="Image_PPic.png" alt="Profile Picture" class="profile-picture">
                <div class="header-text">
                    <h1>Suman Dutta</h1>
                    <p>Researcher | Intelligent Living & Artificial Systems</p>
                </div>
            </div>

             <h2> About Me</h2>
            <p>I am a <strong>Creative</strong> researcher in the field of <strong>Intelligent Complex Systems</strong>, with a specialization in <strong>out-of-equilibrium Complex Fluids</strong>. Driven by <strong>Creative Research</strong>, I investigate model dynamics of <strong>Natural and Artificial Systems</strong>, combining <strong>Statistical Physics</strong> and <strong>Machine Intelligence</strong>, with an aim to develop strategies for <strong>Generative Physical Systems</strong>.</p>
            <div class="section">
                <h3>🎓 Professional Journey</h3>
                <h4>Present Affiliation</h4>
                <p><strong>Assistant Professor (Sr. Gd.)<br> Department of Artificial Intelligence</strong>Joint Coordinator (Academic), B.Tech Programme (AI-Quantum Technology), School of AI<span class="date">(Since 03/2025)<br>Amrita Vishwa Vidyapeetham, Coimbatore HQ<br></span></p>
                <h4>Professional Research Experience</h4>
                <ul>
                    <li><strong>Post Doctoral Fellow</strong> (01/2024 – 09/2024)<br>Simons Centre for the Study of Living Machines, National Centre for Biological Sciences - Tata Institute of Fundamental Research, Bangalore (Advisor: M. Rao)</li>
                    <li><strong>Post Doctoral Fellow</strong> (01/2021 – 12/2023)<br>International Centre for Theoretical Sciences - Tata Institute of Fundamental Research, Bangalore (Advisor: C. Dasgupta)</li>
                    <li><strong>Post Doctoral Fellow</strong> (02/2018 – 12/2020)<br>The Institute of Mathematical Sciences, Chennai (Advisor: P. Chaudhuri, in collaboration with K. Martens)</li>
                </ul>
                <h4>Visiting Researcher Experience</h4>
                <ul>
                    <li>Fluvial Mechanics Laboratory Indian Statistical Institute (Kolkata, IN) </li>
                    <li>Department of Physics Indian Institute of Science (Bangalore, IN) </li>
                    <li>Department of Physics Indian Institute of Science Education and Research (Bhopal, IN) </li>
                    <li>Laboratoire Interdisciplinaire de Physique Universit´e Grenoble Alpes (Grenoble, FR) </li>
                    <li>Institut f¨ur Theoretische Physik II - Soft Matter Heinrich-Heine-Universit¨at (D¨usseldorf, DE) </li>
                </ul>
                <h4>Education</h4>
                <ul>
                    <li><strong>Ph.D in Physics</strong> (08/2012 – 01/2018)<br>Department of Chemical, Biological and Macromolecular Sciences, S. N. Bose National Centre for Basic Sciences, Kolkata (Degree awarded by University of Calcutta) <br><em>Thesis:</em> Numerical Studies on the Dynamics of Soft Matter Systems (Advisor: J. Chakrabarti)</li>
                    <li><strong>M.Sc in Physical Sciences</strong> (08/2010 – 07/2012)<br>S. N. Bose National Centre for Basic Sciences (Degree awarded by West Bengal University of Technology, Kolkata)</li>
                </ul>
            </div>
            <h2>📫 Connect</h2>
            <div class="section" style="text-align: center;">
                <div class="social-links" style="border-top: none; margin-top: 0; padding-top: 0;">
                    <a href="mailto:sumandutta.snbncbs@gmail.com"><img src="https://img.shields.io/badge/Email-red?style=flat-square&logo=gmail&logoColor=white" alt="Email"></a>
                    <a href="https://scholar.google.com/citations?user=j-83jp8AAAAJ"><img src="https://img.shields.io/badge/Google_Scholar-007bff?style=flat-square&logo=google-scholar&logoColor=white" alt="Google Scholar"></a>
                    <a href="https://github.com/sd3ph"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>
                    <a href="https://www.linkedin.com/in/sd3ph/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
                </div>
            </div>
        </div>

        <!-- Latest News Page -->
        <div id="latest" class="page-content">
            <h2>✨ Latest News</h2>
            <div class="section">
                <div class="timeline">
                    <div class="timeline-item"><h3 class="timeline-month">September 2025</h3><div class="timeline-content" style="margin-bottom: 15px;"><strong>September 24: Archit Selected for the flagship Biophysical Meeting at ICTS-TIFR Program</strong><p>Archit has been selected for on-campus participation in the flagship- international meeting "Spatial Organization of Biological Functions", organized by the Biophysical Society, at ICTS-TIFR, scheduled for October 20-25. He will also present a poster on his work, "Learning Micro-Flocking Dynamics in Living Machines by Hybrid Machine Intelligence."</p></div><div class="timeline-content" style="margin-bottom: 15px;"><strong>September 22: Agnevesh’s Research Tenure Extended</strong><p>We are pleased to announce that Agnevesh's research tenure has been extended for an additional three months following a positive recommendation from a review panel.</p></div><div class="timeline-content" style="margin-bottom: 15px;"><strong>September 15: ANRF Grant Proposal Advances</strong><p>Our grant proposal, titled "Learning Order-Disorder by Machine Intelligence," has been successfully accepted for technical evaluation.</p></div></div>
                    <div class="timeline-item"><h3 class="timeline-month">August 2025</h3><div class="timeline-content" style="margin-bottom: 15px;"><strong>August 30: New Preprint on Dense Persistent Active Fluids</strong><p>Our latest preprint, "Activity-driven sorting, approach to criticality and turbulent flows in dense persistent active fluids," is now available on arXiv. This collaborative work can be accessed at: <a href="https://arxiv.org/abs/2509.00376" target="_blank">arXiv:2509.00376</a>.</p></div><div class="timeline-content"><strong>August 4-15: Agnevesh Participates in ICTS-TIFR Flagship School</strong><p>Congratulations to our intern, Agnevesh, for his selection to participate in the prestigious flagship school "Data Science: Probabilistic and Optimization Methods II", held online by ICTS-TIFR.</p></div></div>
                    <div class="timeline-item"><h3 class="timeline-month">July 2025</h3><div class="timeline-content"><strong>July 12: Archit to Present at ICAMGT – 2025</strong><p>Congratulations to our student collaborator, Archit, whose research on "Machine Learning Material Heterogeneity at Micro-scale" has been accepted for an oral presentation at the International Conference on Advanced Materials and Green Technology (ICAMGT – 2025).</p></div></div>
                    <div class="timeline-item"><h3 class="timeline-month">June 2025</h3><div class="timeline-content"><strong>June 2: Manuscript Submitted to Annalen der Physik</strong><p>A new manuscript titled "Persistently Non-Gaussian Metastable Liquids" was submitted to *Annalen der Physik*.</p></div></div>
                    <div class="timeline-item"><h3 class="timeline-month">May – June 2025</h3><div class="timeline-content"><strong>May 28: Research Visit to ISI-Kolkata</strong><p>Suman made a research visit to the Fluvial Mechanics Laboratory at the Indian Statistical Institute (ISI), Kolkata.</p></div></div>
                    <div class="timeline-item"><h3 class="timeline-month">March 2025</h3><div class="timeline-content"><strong>March 24: Joined Amrita Vishwa Vidyapeetham</strong><p>Dr. Suman Dutta commenced his appointment as Assistant Professor (Sr. Gd.) at the School of AI, Amrita Vishwa Vidyapeetham, Coimbatore.</p></div></div>
                </div>
            </div>
        </div>
        
        <!-- NEW: Live Class Room Page -->
        <div id="classroom" class="page-content">
             <h2><span style="vertical-align: middle;">🧑‍🏫</span> Live Class Room</h2>
             
             <!-- This container holds the password prompt -->
             <div id="password-prompt-container" class="password-prompt-container">
                 <h3>🔒 Access Restricted</h3>
                 <p>Please enter the passcode to view course materials.</p>
                 <form id="password-form" class="password-form">
                     <input type="password" id="passcode-input" placeholder="Enter passcode" required>
                     <button type="submit">Unlock</button>
                 </form>
                 <p id="password-error-message" class="password-error-message"></p>
             </div>
             
             <!-- This container holds the protected content, hidden by default -->
             <div id="classroom-content" class="hidden">
                <div class="section">
                    <h3>Course Details</h3>
                    <ul>
                        <li><strong>Class:</strong> BTech AID</li>
                        <li><strong>Semester:</strong> 1</li>
                        <li><strong>Course Code:</strong> 23MAT106</li>
                    </ul>
                </div>
                
                <div class="section">
                    <h3>Syllabus</h3>
                    <p>To be added.</p>
                </div>
                
                <div class="section">
                    <h3>Lecture Notes</h3>
                    <ul>
                        <li><a href="#">Week 1: Introduction to Calculus (PDF)</a> - (Example link)</li>
                        <li><a href="#">Week 2: Linear Algebra Basics (PDF)</a> - (Example link)</li>
                        <!-- Add more lecture notes here -->
                    </ul>
                </div>

                <div class="section">
                    <h3>Assignments</h3>
                    <ul>
                        <li><a href="#">Assignment 1 (Due: DD/MM/YYYY)</a> - (Example link)</li>
                        <!-- Add more assignments here -->
                    </ul>
                </div>

                <div class="section">
                    <h3>Python Codes & Notebooks</h3>
                    <ul>
                        <li><a href="#">Notebook for Linear Algebra Visualization (ipynb)</a> - (Example link)</li>
                        <!-- Add more code links here -->
                    </ul>
                </div>
             </div>
        </div>

        <!-- UPDATED: Lab Products Page -->
        <div id="products" class="page-content">
            <h2><span style="vertical-align: middle;">🧪</span> Lab Products</h2>
            
            <div class="section">
                <h3><span style="vertical-align: middle;">🤖</span> Aadri 2.0: An Intelligent Conversational AI for Customary Academic Profiles (v2.0)</h3>
                
                <h4>🔹 Team</h4>
                <ul>
                    <li><strong>Lead Developer:</strong> Suman Dutta</li>
                    <li><strong>Quality Testing:</strong> Selva Vignesh V, Rithvik K, Raghuraman V, Madhan S, Anirudh, Vipin S, N Manoj Kumar, Harshith KV, KCS Reddy, V Ashwin Krishna, R Gagan Chowdary, BLHS Reddy, M Sharma, A Sheshank Royal, Dhruv, CSH Reddy, M. Venkat, B. Jayan, K. Bhanuprakash, Nethaaji S, Kanish Visyanth C, K Adarsh, JK Kavipranidan, Danush M, Gurucharan, Revanth S, Athul V RR, B Surya Charan Tej, Abinav, Kirithik B, KVSP Praneeth, Kamalesh, Sidharth M, S. Sujitkumar, M. Hemanth Kumar, V Amruth Chowdary [Students of BTech AID (Core), School of AI, Amrita Vishwa Vidyapeetham]</li>
                    <li><strong>Consultants & Reviewers:</strong> Experts from TCS, Cognizant, and University of Luxembourg</li>
                </ul>

                <h4>🔹 White Paper</h4>
                <p>To be updated soon</p>

                <h4>🔹 Abstract</h4>
                <p>Aadri as a smart assistant explains about your academic work like a well-informed friend. Instead of scrolling through a boring CV, you just ask questions and Aadri gives you clear, friendly answers. It’s like having a personal guide to your research, teaching, and achievements.</p>
                
                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To make academic profiles interactive, accessible, and engaging.</li>
                    <li>To help users (students, collaborators, institutions) explore a researcher’s work through natural conversation.</li>
                    <li>To set a new standard for how academics present themselves digitally.</li>
                </ul>
            </div>

            <div class="section">
                <h3><span style="vertical-align: middle;">📝</span> AtoGRAD: OMR Solutions for Class-based Tests</h3>
                <p>AtoGRAD is an innovative Optical Mark Recognition (OMR) solution designed to streamline and automate the grading process for classroom-based tests. More details coming soon!</p>

                <h4>🔹 Team</h4>
                 <ul>
                    <li><strong>Lead Developer:</strong> Agnevesh Jagdish</li>
                    <li><strong>Quality Testing:</strong> Agnevesh Jagdish</li>
                    <li><strong>Consultants & Reviewers:</strong> Souvick Das, University of Luxembourg</li>
                </ul>
                
                <h4>🔹 Abstract</h4>
                <p>Details about the technology and application will be available shortly.</p>

                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To provide a fast, accurate, and cost-effective OMR solution for educators.</li>
                    <li>To reduce the manual effort and time spent on grading multiple-choice exams.</li>
                    <li>To offer instant analytics and performance reports for students and instructors.</li>
                </ul>
            </div>
        </div>


        <!-- miscellaneous Page -->
        <div id="misc" class="page-content">
            <h2>🤝 Research Collaborators</h2>
            <div class="section">
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Jaydeb Chakrabarti</strong><br>(Senior Professor, S N Bose National Centre for Basic Sciences, Kolkata, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Pinaki Chaudhuri</strong><br>(Professor, The Institute of Mathematical Sciences, Chennai, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Kirsten Martens</strong><br>(CNRS Researcher, University of Grenoble Alpes, Grenoble, FR)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Chandan Dasgupta</strong><br>(Honorary Professor, Indian Institute of Sciences, Bengaluru, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Madan Rao</strong><br>(Senior Professor, National Centre for Biological Sciences -TIFR, Bengaluru, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Vinay Vaibhav</strong><br>(Post Doctoral Fellow, University of Goettingen, DE)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Raffaela Cabriolu</strong><br>(Associate Professor, Norwegian University of Science and Technology, NO)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Tamoghna Kanti Das</strong><br>(Assistant Professor, WPA-NanoLSI - Kanazawa University, JP)</div></div>
            </div>

            <h2>🏆 Awards & Recognition</h2>
            <div class="section">
                <ul>
                    <li><strong>Best Oral Presenter</strong> at the Condensed Matter and Statistical Physics Symposium, Presidency University (August 2024).</li>
                    <li><strong>Visiting Research Grant</strong> from the Indo-French Centre for the Promotion of Advanced Research (IFC-PAR/CEFIPRA) (2019, 2018).</li>
                    <li><strong>Post BSc Integrated PhD Research Fellowship</strong> (2010-18).</li>
                    <li><strong>National Merit Scholarship</strong> (2004).</li>
                </ul>
            </div>
        </div>

    </div>

    <!-- Chatbot Widget -->
    <div id="chatbot-widget">
        <div id="chatbot-bubble">
            <div class="icon-open"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28px" height="28px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg></div>
            <div class="icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></div>
        </div>
        <div id="chatbot-iframe-container"><iframe src="https://aadri-chatbot-v-2-0-774248093245.us-west1.run.app/" frameborder="0"></iframe></div>
    </div>


    <script>
        window.addEventListener('DOMContentLoaded', () => {
            
            // --- CONFIGURATION ---
            // Easily change the classroom passcode here
            const CLASSROOM_PASSCODE = 'TestClassAmrita23mat106';

            // --- DOM Elements ---
            const navLinks = document.querySelectorAll('.nav-link');
            const pageContents = document.querySelectorAll('.page-content');
            const chatbotBubble = document.getElementById('chatbot-bubble');
            const chatbotWidget = document.getElementById('chatbot-widget');
            const passwordForm = document.getElementById('password-form');
            const passwordInput = document.getElementById('passcode-input');
            const passwordErrorMsg = document.getElementById('password-error-message');
            const classroomPrompt = document.getElementById('password-prompt-container');
            const classroomContent = document.getElementById('classroom-content');

            // --- Navigation Logic ---
            function switchTab(targetId) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                pageContents.forEach(content => content.classList.remove('active'));

                const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
                if (activeLink) activeLink.classList.add('active');

                const activeContent = document.querySelector(targetId);
                if (activeContent) activeContent.classList.add('active');
                
                // Special check for classroom page
                if(targetId === '#classroom') {
                    checkClassroomAccess();
                }
            }

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (window.location.hash !== targetId) {
                        history.pushState ? history.pushState(null, null, targetId) : window.location.hash = targetId;
                    }
                    switchTab(targetId);
                });
            });

            function handleHashChange() {
                const currentHash = window.location.hash || '#highlight';
                switchTab(currentHash);
            }

            window.addEventListener('popstate', handleHashChange);
            handleHashChange(); // Initial page load

            // --- Classroom Passcode Logic ---
            function checkClassroomAccess() {
                if (sessionStorage.getItem('classroomAccessGranted') === 'true') {
                    classroomPrompt.style.display = 'none';
                    classroomContent.classList.remove('hidden');
                } else {
                    classroomPrompt.style.display = 'block';
                    classroomContent.classList.add('hidden');
                }
            }
            
            if (passwordForm) {
                passwordForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    if (passwordInput.value.trim() === CLASSROOM_PASSCODE) {
                        sessionStorage.setItem('classroomAccessGranted', 'true');
                        passwordErrorMsg.textContent = '';
                        passwordInput.value = '';
                        checkClassroomAccess();
                    } else {
                        passwordErrorMsg.textContent = 'Incorrect passcode. Please try again.';
                        passwordInput.value = '';
                    }
                });
            }


            // --- Chatbot Logic ---
            if (chatbotBubble && chatbotWidget) {
                chatbotBubble.addEventListener('click', () => {
                    chatbotWidget.classList.toggle('open');
                });
            }
        });
    </script>

</body>
</html>
