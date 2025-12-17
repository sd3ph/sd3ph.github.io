<!DOCTYPE html>
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

        /* --- NAVIGATION STYLES --- */
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

        .nav-links a:hover, .nav-links a.active {
            background-color: var(--accent-color);
            color: #fff;
        }

        /* --- CONTENT STYLES --- */
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
            text-align: left;
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

        strong { color: var(--primary-color); font-weight: 600; }
        p { margin-bottom: 12px; }
        ul { list-style: disc; margin-left: 25px; padding-left: 0; }
        li { margin-bottom: 10px; padding-left: 5px; }

        .profile-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px dashed var(--border-color);
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 6px;
            border: 1px solid rgba(189, 195, 199, 0.3);
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
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

        .header-text { flex-grow: 1; }
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

        .section {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 6px;
            margin-bottom: 20px;
            border: 1px solid rgba(189, 195, 199, 0.3);
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .social-links {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px dashed var(--border-color);
        }
        .social-links a { margin: 0 10px; display: inline-block; }
        .social-links img {
            height: 26px;
            vertical-align: middle;
            transition: transform 0.2s ease;
        }
        .social-links a:hover img { transform: translateY(-2px) scale(1.05); }

        /* Research Items */
        .research-area-item {
            margin-bottom: 15px;
            padding-left: 10px;
            border-left: 3px solid var(--accent-color);
            background-color: #fdfdfd;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 0 4px 4px 0;
        }

        /* Collaborators */
        .collaborator-item { display: flex; align-items: center; margin-bottom: 15px; }
        .collaborator-info { line-height: 1.5; }

        /* Advertisement */
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
        .advertisement:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2); }
        .advertisement h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.2em; margin-bottom: 20px; font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2); color: white; border-bottom: none; text-align: center;
        }
        .opportunities {
            display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; margin: 30px 0;
        }
        .opportunity {
            background: rgba(255, 255, 255, 0.1); padding: 10px 20px; border-radius: 30px;
            font-size: 0.85em; transition: background-color 0.3s ease;
        }
        .opportunity:hover { background: rgba(255, 255, 255, 0.2); }
        .email-link {
            display: inline-block; background-color: #ffffff; color: #667eea;
            padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: 700;
            font-size: 1.0em; transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .email-link:hover { background-color: #f0f2ff; color: #5a6edc; transform: scale(1.05); }

        /* Publication & Timeline */
        .publication-item {
            margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px dashed var(--border-color);
        }
        .publication-item:last-child { border-bottom: none; padding-bottom: 0; }
        .publication-item .citation { font-size: 1.1em; line-height: 1.6; margin-bottom: 8px; }
        .publication-item a, .timeline-content a { color: var(--accent-color); font-weight: bold; text-decoration: none; }
        .publication-item a:hover, .timeline-content a:hover { text-decoration: underline; }

        .timeline { position: relative; padding-left: 20px; border-left: 2px solid var(--accent-color); }
        .timeline-item { position: relative; margin-bottom: 30px; }
        .timeline-item::before {
            content: ''; position: absolute; left: -28px; top: 5px; width: 14px; height: 14px;
            border-radius: 50%; background-color: var(--accent-color); border: 2px solid white; z-index: 1;
        }
        .timeline-month {
            font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1.2em;
            color: var(--primary-color); margin-bottom: 15px; text-transform: uppercase;
        }
        .timeline-content { background-color: #fdfdfd; padding: 15px; border-radius: 6px; border: 1px solid var(--border-color); }

        /* Chatbot */
        #chatbot-widget { position: fixed; bottom: 25px; right: 25px; z-index: 1000; }
        #chatbot-bubble {
            width: 60px; height: 60px; background-color: var(--accent-color); border-radius: 50%;
            display: flex; align-items: center; justify-content: center; cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); transition: transform 0.2s ease, background-color 0.2s ease, border-radius 0.3s ease;
        }
        #chatbot-bubble:hover { transform: scale(1.1); background-color: #d35400; }
        #chatbot-bubble .icon-open, #chatbot-bubble .icon-close { position: absolute; transition: transform 0.3s ease, opacity 0.3s ease; }
        #chatbot-bubble .icon-close { transform: rotate(-90deg) scale(0.5); opacity: 0; }
        #chatbot-widget.open #chatbot-bubble { background-color: var(--primary-color); border-radius: 15px; }
        #chatbot-widget.open #chatbot-bubble .icon-open { transform: rotate(90deg) scale(0.5); opacity: 0; }
        #chatbot-widget.open #chatbot-bubble .icon-close { transform: rotate(0deg) scale(1); opacity: 1; }
        #chatbot-iframe-container {
            position: absolute; bottom: 80px; right: 0; width: 350px; height: 500px;
            border-radius: 15px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
            transform: scale(0.95) translateY(10px); opacity: 0; visibility: hidden;
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s; transform-origin: bottom right;
        }
        #chatbot-widget.open #chatbot-iframe-container { opacity: 1; visibility: visible; transform: scale(1) translateY(0); }
        #chatbot-iframe-container iframe { width: 100%; height: 100%; border: none; }
        @media (max-width: 480px) {
            #chatbot-iframe-container { width: calc(100vw - 40px); height: 70vh; bottom: 75px; right: -10px; }
            #chatbot-widget { bottom: 20px; right: 20px; }
        }

        /* Live Classroom */
        .password-prompt-container {
            text-align: center; padding: 40px 20px; border: 1px dashed var(--border-color);
            border-radius: 8px; background-color: #fdfdfd;
        }
        .password-form { display: flex; justify-content: center; gap: 10px; margin-top: 20px; }
        .password-form input { padding: 10px; border: 1px solid var(--border-color); border-radius: 4px; font-size: 1.1em; width: 250px; }
        .password-form button {
            padding: 10px 20px; border: none; background-color: var(--primary-color); color: white;
            font-weight: bold; border-radius: 4px; cursor: pointer; transition: background-color 0.2s;
        }
        .password-form button:hover { background-color: var(--nav-hover-bg); }
        .password-error-message { margin-top: 15px; color: var(--accent-color); font-weight: bold; height: 1.2em; }
        #classroom-content.hidden { display: none; }

        .course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }
        .course-card {
            background-color: #f9f9f9; border: 1px solid var(--border-color); border-radius: 8px; padding: 20px;
            cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
            display: flex; flex-direction: column; justify-content: space-between;
        }
        .course-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); border-color: var(--accent-color); }
        .course-card h4 {
            margin-top: 0; color: var(--accent-color); font-size: 1.3em; font-family: 'Playfair Display', serif;
            border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 15px;
        }
        .course-card .course-code { font-weight: bold; color: var(--primary-color); }
        .course-card .semester-tag {
            background-color: var(--nav-hover-bg); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8em; margin-left: 5px;
        }
        .back-btn {
            background-color: var(--secondary-color); color: white; border: none; padding: 8px 15px; border-radius: 4px;
            cursor: pointer; font-weight: bold; margin-bottom: 20px; transition: background-color 0.3s;
            display: inline-flex; align-items: center;
        }
        .back-btn:hover { background-color: var(--primary-color); }
        .back-btn svg { margin-right: 5px; fill: currentColor; }
        .course-detail-view { display: none; animation: fadeIn 0.4s ease-out; }
        .course-detail-view.active { display: block; }

        /* Playground: Physics Research Explorer */
        .pre-container-inner {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 20px;
            color: #333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; min-height: 80vh;
        }
        .pre-header { text-align: center; color: white; margin-bottom: 40px; padding-top: 20px; }
        .pre-header h1 { font-size: 2.5em; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); color: white; border-bottom: none; }
        .pre-header p { font-size: 1.1em; opacity: 0.95; color: #eee; }
        .pre-research-builder { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); color: #333; }
        .pre-section-title {
            font-size: 1.5em; color: #667eea; margin-bottom: 20px; font-weight: 600;
            border-bottom: 3px solid #667eea; padding-bottom: 10px; text-align: left;
        }
        .pre-physics-core {
            background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-left: 5px solid #667eea;
            padding: 20px; border-radius: 8px; margin-bottom: 30px;
        }
        .pre-topics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 40px; }
        .pre-topic-checkbox { display: none; }
        .pre-topic-label {
            display: block; padding: 20px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer;
            transition: all 0.3s ease; background: white; text-align: center;
        }
        .pre-topic-label:hover { border-color: #667eea; background: #f8f9ff; }
        .pre-topic-checkbox:checked + .pre-topic-label {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;
            border-color: #667eea; box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        .pre-topic-label strong { display: block; font-size: 1.1em; margin-bottom: 5px; color: inherit; }
        .pre-topic-checkbox:checked + .pre-topic-label strong { color: white; }
        .pre-query-input {
            width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 1em;
            transition: border-color 0.3s; margin-bottom: 10px; box-sizing: border-box;
        }
        .pre-query-input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
        .pre-api-section { background: #f8f9fa; padding: 15px; border-radius: 8px; border: 1px solid #e9ecef; margin-bottom: 30px; }
        .pre-btn {
            padding: 12px 30px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer;
            transition: all 0.3s; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .pre-btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .pre-btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4); }
        .pre-btn-secondary { background: #f0f0f0; color: #333; border: 2px solid #ddd; }
        .pre-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .pre-button-group { display: flex; gap: 10px; flex-wrap: wrap; }
        .pre-ideas-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; margin-top: 20px; }
        .pre-idea-card {
            background: white; border: 2px solid #e0e0e0; border-radius: 10px; padding: 25px;
            transition: all 0.3s; border-left: 5px solid #667eea;
        }
        .pre-idea-card:hover { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2); border-left-color: #764ba2; transform: translateY(-3px); }
        .pre-idea-title { font-size: 1.2em; font-weight: 700; color: #667eea; margin-bottom: 10px; }
        .pre-idea-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; }
        .pre-tag { padding: 4px 12px; background: #f0f0f0; color: #667eea; border-radius: 20px; font-size: 0.85em; font-weight: 600; }
        .pre-impact-high { background: #fee; color: #c33; }
        .pre-impact-medium { background: #ffe; color: #cc6; }
        .pre-impact-low { background: #efe; color: #3c3; }
        .pre-spinner {
            width: 16px; height: 16px; border: 2px solid #ffffff; border-radius: 50%;
            border-top-color: transparent; animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .pre-message-box { margin-bottom: 20px; }
        .pre-error-message { background: #fee; color: #c33; padding: 15px; border-radius: 8px; border-left: 4px solid #c33; }
        .pre-success-message { background: #efe; color: #3c3; padding: 15px; border-radius: 8px; border-left: 4px solid #3c3; }

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
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#latest" class="nav-link">Latest</a></li>
                <li><a href="#classroom" class="nav-link">Live Class Room</a></li>
                <li><a href="#products" class="nav-link">Lab Products</a></li>
                <li><a href="#misc" class="nav-link">misc</a></li>
                <li><a href="#playground" class="nav-link">Playground</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <!-- 1. Highlight Page -->
        <div id="highlight" class="page-content active">
            <img src="cover1.png" alt="Highlight cover image" style="width: 100%; aspect-ratio: 21 / 9; object-fit: cover; margin-bottom: 20px; border-radius: 6px;">
            <h2> Hello World !</h2>
            <p>We are a group of creative researchers exploring physics at the interface of artificial intelligence, working in a deeply collaborative and interdisciplinary setting. Our goal is to understand complex systems and to see how modern computational approaches, especially deep learning, can contribute to solutions for societal good.</p>
            <ul>
                <li><b>Collective Intelligence in Natural and Artificial Systems:</b> How do large groups of individual agents coordinate to achieve complex, group-level goals? We explore the physical principles behind this emergent intelligence.</li>
                <li><b>Physics of Living Matter:</b> We view biological tissues as a form of active matter, studying collective migration and self-organization of cells.</li>
                <li><b>Mechanics of Disordered Materials:</b> Materials like glasses lack a perfect crystal structure. We investigate the fundamental mechanics of these systems using machine learning.</li>
                <li><b>AI as a Tool for Scientific Discovery:</b> We use deep learning not just for prediction, but to gain fundamental insight, aiming to uncover underlying physical principles.</li>
            </ul>
            <p>We thrive on a close partnership with experimentalists and other theorists, creating a dynamic environment for learning and discovery.</p>

            <div class="section">
                <h3>🌟 Highlights</h3>
                <ul>
                    <li><strong>Research Interests:</strong> Dynamics of natural and artificial complex systems, out-of-equilibrium soft, glassy, and active matter.</li>
                    <li><strong>Physics at the Interface of AI:</strong> Integrating fundamental physical laws into novel AI models using HPC and explainable AI.</li>
                    <li><strong>Teaching and Mentoring:</strong> Teaching courses such as Mathematics for AI and Intelligent Systems, and mentoring research interns and graduate students.</li>
                </ul>
            </div>

            <div class="section">
                <h2>🌟 Join Us </h2>
                <div class="advertisement">
                    <h1>Join Us to Innovate</h1>
                    <p>We are seeking creative individuals to join our lab to co-create the future.</p>
                    <div class="opportunities">
                        <div class="opportunity">Collaborative Projects</div>
                        <div class="opportunity">Internship Opportunities</div>
                        <div class="opportunity">PhD Positions</div>
                        <div class="opportunity">Postdoctoral Fellowships</div>
                    </div>
                    <div class="call-to-action">
                        <h2>Ready to answer the call?</h2>
                        <p>We want to hear from you. Email your one-page CV and SOP.</p>
                        <a href="mailto:sumandutta.avvcb@gmail.com" class="email-link">Submit</a>
                    </div>
                    <p class="footer-text">Let's build the future together.</p>
                </div>
            </div>
        </div>

        <!-- 2. Research Page -->
        <div id="research" class="page-content">
            <h2>🔬 Research Interests & Competencies</h2>
            <div class="section">
                <h3>Research Expertise</h3>
                <ul>
                    <li><strong>Domain Expertise:</strong> Collective Intelligence in Living and Artificial Systems, Physics of Complex Fluids, Soft Condensed Matter.</li>
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
                <h3>Research within the Group</h3>
                <p>We perform extensive computer simulations, harnessing HPC alongside statistical methods to develop data-driven, explainable techniques.</p>
                <ul>
                    <li><strong>Molecular Information Processing:</strong> Decoding how molecular systems store and relay information.</li>
                    <li><strong>Cellular Migration and Turbulence:</strong> Investigating chaotic patterns in migrating cells during tissue formation.</li>
                    <li><strong>Failure and Jamming of Amorphous Systems:</strong> Predicting resilience and failure in disordered materials.</li>
                    <li><strong>Predicting Vulnerability and Avalanches:</strong> Modeling critical cascades in systems ranging from nature to economics.</li>
                    <li><strong>Autonomous and Critical Phenomena:</strong> Uncovering the balance between stability and adaptability in living systems.</li>
                    <li><strong>Generative Physical Intelligence:</strong> Creating AI systems that understand and generate physically plausible dynamics.</li>
                </ul>
            </div>
        </div>

        <!-- 3. Publication Page -->
        <div id="publication" class="page-content">
            <h2>📚 Publications</h2>
            <div class="section">
                <h3>2025</h3>
                <div class="publication-item">
                    <p class="citation">S. Santra, L. Touzo, C. Dasgupta, A. Dhar, <u>S. Dutta</u>, A. Kundu, P. Le Doussal, G. Schehr & P. Singh, <em>Crystal to liquid cross-over in the active Calogero-Moser model</em>, J. Stat. Mech. 033203 (2025) [<a href="https://iopscience.iop.org/article/10.1088/1742-5468/adbb5d" target="_blank">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Contributing author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav, T. Das & <u>S. Dutta</u>*, <em>Persistently Non-Gaussian Metastable Liquids</em>, arXiv:2511.07951 (2025) [<a href="https://arxiv.org/abs/2511.07951" target="_blank">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>*, P. Chaudhuri, M. Rao & C. Dasgupta, <em>Activity-driven sorting, approach to criticality and turbulent flows in dense persistent active fluids</em>, arXiv:2509.00376 (2025) [<a href="https://arxiv.org/abs/2509.00376" target="_blank">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>
               
                <h3>2024</h3>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav & <u>S. Dutta</u>*, <em>Entropic timescales of Dynamic Heterogeneity in Supercooled Liquid</em>, Phys. Rev. E (Lett.), <strong>109</strong>, L062102 (2024) [<a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.109.L062102" target="_blank">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>

                <h3>2023</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>, K. Martens & P. Chaudhuri, <em>Creep response of athermal amorphous solids under imposed shear stress</em>, arXiv:2303.04718 (2023) [<a href="https://arxiv.org/abs/2303.04718" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First author</u></p>
                </div>
                <h3>2021</h3>
                <div class="publication-item">
                    <p class="citation">C. Liu, <u>S. Dutta</u>, P. Chaudhuri & K. Martens, <em>Elastoplastic approach based on microscopic insights for the steady state and transient dynamics of sheared disordered solids</em>, Phys. Rev. Lett., <strong>126</strong>, 138005 (2021) [<a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.138005" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Joint first author</u></p>
                </div>
                <h3>2020</h3>
                <div class="publication-item">
                    <p class="citation">R. Dandekar, S. Bose & <u>S. Dutta</u>*, <em>Non-Gaussian information of heterogeneity in soft matter</em>, Europhys. Lett., <strong>131</strong>, 18002 (2020) [<a href="https://iopscience.iop.org/article/10.1209/0295-5075/131/18002/meta" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
            </div>
        </div>

        <!-- 4. Teaching Page -->
        <div id="teaching" class="page-content">
            <h2>💡 Teaching & Mentoring</h2>
            <div class="section">
                <h3>Courses Taught</h3>
                <ul>
                    <li>Mathematics for Intelligent Systems, 23MAT106, B. Tech (AI and Data Science Core), Amrita Vishwa Vidyapeetham (Fall, 2025).</li>
                    <li>Mathematics for AI, Bootcamp, Amrita Vishwa Vidyapeetham.</li>
                    <li>Research Methodology: S. N. Bose National Centre for Basic Sciences.</li>
                </ul>
            </div>
            <div class="section">
                <h3>Mentoring Experience</h3>
                <ul>
                    <li>Research Intern: A. Jagdish (06/2025 onwards)</li>
                    <li>Student Collaborators: A. Harish, A. Venkatraman (06/2025 onwards)</li>
                    <li>Masters Thesis Co-supervision: Magnus Olsen (NTNU, since 08/2025)</li>
                </ul>
            </div>
        </div>

        <!-- 5. About Me Page -->
        <div id="about" class="page-content">
            <h2>Group Leader</h2>
            <div class="profile-header section">
                <img src="Image_PPic.png" alt="Profile Picture" class="profile-picture">
                <div class="header-text">
                    <h1>Suman Dutta</h1>
                    <p>Researcher | Intelligent Living & Artificial Systems</p>
                </div>
            </div>
             <h2>About Me</h2>
            <p>I am a <strong>Creative</strong> researcher in the field of <strong>Intelligent Complex Systems</strong>. I investigate model dynamics of <strong>Natural and Artificial Systems</strong>, combining <strong>Statistical Physics</strong>, <strong>HPC</strong>, and <strong>Machine Intelligence</strong>.</p>
            <div class="section">
                <h3>🎓 Professional Journey</h3>
                <h4>Present Affiliation</h4>
                <p><strong>Faculty Member, Department of Artificial Intelligence</strong><br>School of AI, Amrita Vishwa Vidyapeetham, Coimbatore HQ <span class="date">(Since 03/2025)</span></p>
                <h4>Professional Research Experience</h4>
                <ul>
                    <li>Post Doctoral Fellow, NCBS-TIFR (Advisor: M. Rao)</li>
                    <li>Post Doctoral Fellow, ICTS-TIFR (Advisor: C. Dasgupta)</li>
                    <li>Post Doctoral Fellow, IMSc Chennai (Advisor: P. Chaudhuri)</li>
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

        <!-- 6. Latest News Page -->
        <div id="latest" class="page-content">
            <h2>✨ Latest News</h2>
            <div class="section">
                <div class="timeline">
                    <div class="timeline-item">
                        <h3 class="timeline-month">November 2025</h3>
                        <div class="timeline-content"><strong>Nov 14: EuroHPC Benchmark Access Awarded</strong><p>Grant awarded for LUMI clusters (2000 Node-Hours). R. Cabriolu (PI), S. Dutta (Co-PI).</p></div>
                    </div>
                    <div class="timeline-item">
                        <h3 class="timeline-month">September 2025</h3>
                        <div class="timeline-content"><strong>Sep 24: Archit Selected for Biophysical Meeting</strong><p>Selected for "Spatial Organization of Biological Functions" at ICTS-TIFR.</p></div>
                        <div class="timeline-content"><strong>Sep 15: ANRF Grant Proposal Advances</strong><p>Proposal "Learning Order-Disorder by Machine Intelligence" accepted for technical evaluation.</p></div>
                    </div>
                    <div class="timeline-item">
                        <h3 class="timeline-month">August 2025</h3>
                        <div class="timeline-content"><strong>Aug 30: New Preprint</strong><p>"Activity-driven sorting... in dense persistent active fluids" on arXiv.</p></div>
                    </div>
                     <div class="timeline-item">
                        <h3 class="timeline-month">March 2025</h3>
                        <div class="timeline-content"><strong>Mar 24: Joined Amrita Vishwa Vidyapeetham</strong><p>Dr. Suman Dutta commenced appointment as Assistant Professor (Sr. Gd.).</p></div>
                    </div>
                </div>
            </div>
        </div>
       
        <!-- 7. Live Class Room Page -->
        <div id="classroom" class="page-content">
             <h2><span style="vertical-align: middle;">🧑‍🏫</span> Live Class Room</h2>
             <div id="password-prompt-container" class="password-prompt-container">
                 <h3>🔒 Access Restricted</h3>
                 <p>Please enter the passcode to view course materials.</p>
                 <form id="password-form" class="password-form">
                     <input type="password" id="passcode-input" placeholder="Enter passcode" required>
                     <button type="submit">Unlock</button>
                 </form>
                 <p id="password-error-message" class="password-error-message"></p>
             </div>
             
             <div id="classroom-content" class="hidden">
                <!-- DASHBOARD VIEW -->
                <div id="classroom-dashboard">
                    <p style="text-align: center; margin-bottom: 25px;">Welcome to the Live Class Room. Select a course below.</p>
                    <div class="course-grid">
                        <div class="course-card" onclick="openCourse('course-mat106')">
                            <div>
                                <h4>Mathematics for Intelligent Systems - I</h4>
                                <p><span class="course-code">23MAT106</span> <span class="semester-tag">Fall 2025</span></p>
                                <p><strong>Students:</strong> BTech AID</p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--secondary-color);">Click to view details &rarr;</div>
                        </div>
                        <div class="course-card" onclick="openCourse('course-chy115')">
                            <div>
                                <h4>Material Informatics</h4>
                                <p><span class="course-code">23CHY115</span> <span class="semester-tag">Fall 2025</span></p>
                                <p><strong>Students:</strong> BTech AID</p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--secondary-color);">Click to view details &rarr;</div>
                        </div>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23MAT106 -->
                <div id="course-mat106" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Back to Dashboard
                    </button>
                    
                    <div class="section">
                        <h3>Course Details</h3>
                        <ul>
                            <li><strong>Class:</strong> BTech AID | <strong>Semester:</strong> Fall, 2025 | <strong>Code:</strong> 23MAT106</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Combined Weekly Schedule</h3>
                        <div style="border: 1px solid #4D4D4D; padding: 15px; border-radius: 3px; margin: 20px 0; overflow-x: auto;">
                            <!-- Simplified Schedule Table Representation -->
                            <table style="width: 100%; border-collapse: collapse; text-align: center; font-family: sans-serif;">
                                <thead><tr style="background-color: #F2F2F2;"><th style="padding:10px; border:1px solid #ccc;">Time</th><th style="padding:10px; border:1px solid #ccc;">Mon-Fri Activity</th></tr></thead>
                                <tbody><tr><td style="padding:10px; border:1px solid #ccc;">Various</td><td style="padding:10px; border:1px solid #ccc;">See detailed PDF or LMS for full breakdown (Sec A/B)</td></tr></tbody>
                            </table>
                        </div>
                    </div>
                   
                    <div class="section">
                        <h3>Syllabus & Notes</h3>
                        <dl>
                            <dt>Unit 1</dt><dd>Basics of Linear Algebra, Gaussian Elimination, Vector Spaces.</dd>
                            <dt>Unit 2</dt><dd>Ordinary Linear Differential Equations, Impulse Response.</dd>
                            <dt>Unit 3</dt><dd>Random Variables, Probability Distributions.</dd>
                            <dt>Unit 4</dt><dd>Introduction to Quantum Computing.</dd>
                        </dl>
                        <ul>
                            <li><a href="#">Lecture 01: Introduction to Linear Algebra for AI (06/08/2025)</a></li>
                            <li><a href="#">Lecture 18: Ordinary Differential Equations (6/10/2025)</a></li>
                            <li><a href="#">Lecture 27: Introduction to Quantum Computing (28/11/2025)</a></li>
                        </ul>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23CHY115 -->
                <div id="course-chy115" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">Back to Dashboard</button>
                    <div class="section">
                        <h3>Course Details: Material Informatics</h3>
                        <p style="font-style: italic;">Content to be updated soon.</p>
                    </div>
                </div>
             </div>
        </div>

        <!-- 8. Lab Products Page -->
        <div id="products" class="page-content">
            <h2><span style="vertical-align: middle;">🧪</span> Lab Products</h2>
            <div class="section">
                <h3><span style="vertical-align: middle;">🤖</span> Aadri 2.0: Conversational AI</h3>
                <p>AI system engineered for the interactive presentation of academic profiles using Google Gemini and RAG architecture.</p>
                <h4>🔹 Mobile Demonstration</h4>
                <p>Test the application: <a href="https://aadri-chatbot-v-2-0-released-version-774248093245.us-west1.run.app" style="text-decoration: none; color: #007BFF; font-weight: bold;">Test Aadri 2.0 Live</a></p>
            </div>
            <div class="section">
                <h3><span style="vertical-align: middle;">📝</span> AtoGRAD: OMR Solutions</h3>
                <p>Innovative Optical Mark Recognition (OMR) solution designed to streamline grading for classroom-based tests. Details coming soon.</p>
            </div>
        </div>

        <!-- 9. Collaborators Page -->
        <div id="misc" class="page-content">
            <h2>🤝 Research Collaborators</h2>
            <div class="section">
                 <div class="collaborator-item"><strong>Jaydeb Chakrabarti</strong> (S N Bose Centre)</div>
                 <div class="collaborator-item"><strong>Pinaki Chaudhuri</strong> (IMSc Chennai)</div>
                 <div class="collaborator-item"><strong>Kirsten Martens</strong> (Univ. Grenoble Alpes)</div>
                 <div class="collaborator-item"><strong>Madan Rao</strong> (NCBS-TIFR)</div>
            </div>
        </div>

        <!-- 10. Playground Page - MODIFIED -->
        <div id="playground" class="page-content">
            <div class="pre-container-inner">
                <div class="pre-header">
                    <h1>⚛️ Physics Research Explorer</h1>
                    <p>Generate innovative research ideas using Google Gemini 1.5 Flash</p>
                </div>
                <div class="pre-research-builder">
                    <div class="pre-physics-core"><p>✨ <strong>Physics as the Foundation</strong></p></div>
                    
                    <!-- API Key Input Removed: Hardcoded below -->
                    <div style="text-align: center; margin-bottom: 20px; color: #666; font-style: italic;">
                        <p>Powered by Google Gemini AI</p>
                    </div>

                    <div>
                        <h2 class="pre-section-title">1. Select Domains</h2>
                        <div class="pre-topics-grid" id="topicsGrid"></div>
                    </div>
                    <div class="pre-query-section">
                        <h2 class="pre-section-title">2. Specific Focus (Optional)</h2>
                        <input type="text" class="pre-query-input" id="researchQuery" placeholder="E.g., 'renewable energy', 'cancer treatment'...">
                    </div>
                    <div class="pre-button-group">
                        <button class="pre-btn pre-btn-primary" id="generateBtn">🚀 Generate Ideas</button>
                        <button class="pre-btn pre-btn-secondary" id="clearBtn">Clear</button>
                    </div>
                    <div class="pre-results-section" id="resultsSection" style="display: none; margin-top: 40px;">
                        <h2 class="pre-section-title">Generated Research Ideas</h2>
                        <div id="messageBox" class="pre-message-box"></div>
                        <div class="pre-ideas-container" id="ideasContainer"></div>
                    </div>
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
            const CLASSROOM_PASSCODE = '23MAT106';
            const navLinks = document.querySelectorAll('.nav-link');
            const pageContents = document.querySelectorAll('.page-content');
            const chatbotBubble = document.getElementById('chatbot-bubble');
            const chatbotWidget = document.getElementById('chatbot-widget');
            const passwordForm = document.getElementById('password-form');
            const passwordInput = document.getElementById('passcode-input');
            const passwordErrorMsg = document.getElementById('password-error-message');
            const classroomPrompt = document.getElementById('password-prompt-container');
            const classroomContent = document.getElementById('classroom-content');

            function switchTab(targetId) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                pageContents.forEach(content => content.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
                if (activeLink) activeLink.classList.add('active');
                const activeContent = document.querySelector(targetId);
                if (activeContent) activeContent.classList.add('active');
                if(targetId === '#classroom') checkClassroomAccess();
            }

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (window.location.hash !== targetId) history.pushState ? history.pushState(null, null, targetId) : window.location.hash = targetId;
                    switchTab(targetId);
                });
            });

            function handleHashChange() {
                const currentHash = window.location.hash || '#highlight';
                switchTab(currentHash);
            }
            window.addEventListener('popstate', handleHashChange);
            handleHashChange();

            function checkClassroomAccess() {
                if (sessionStorage.getItem('classroomAccessGranted') === 'true') {
                    classroomPrompt.style.display = 'none';
                    classroomContent.classList.remove('hidden');
                    closeCourse(); 
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

            if (chatbotBubble && chatbotWidget) {
                chatbotBubble.addEventListener('click', () => { chatbotWidget.classList.toggle('open'); });
            }

            initPhysicsExplorer();
        });

        function openCourse(courseId) {
            document.getElementById('classroom-dashboard').style.display = 'none';
            document.querySelectorAll('.course-detail-view').forEach(view => view.classList.remove('active'));
            const target = document.getElementById(courseId);
            if(target) target.classList.add('active');
            document.querySelector('.container').scrollIntoView({behavior: 'smooth'});
        }

        function closeCourse() {
            document.querySelectorAll('.course-detail-view').forEach(view => view.classList.remove('active'));
            const dashboard = document.getElementById('classroom-dashboard');
            if(dashboard) dashboard.style.display = 'block';
        }

        function initPhysicsExplorer() {
            const topics = [
                { id: 'chemistry', name: 'Chemistry', emoji: '⚗️' },
                { id: 'biology', name: 'Biology', emoji: '🧬' },
                { id: 'technology', name: 'Technology', emoji: '💻' },
                { id: 'engineering', name: 'Engineering', emoji: '🔧' },
                { id: 'medical', name: 'Medical Science', emoji: '🏥' },
                { id: 'indian-systems', name: 'Indian Knowledge Systems', emoji: '📚' }
            ];

            const grid = document.getElementById('topicsGrid');
            if(grid) {
                topics.forEach(topic => {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `
                        <input type="checkbox" id="${topic.id}" class="pre-topic-checkbox" value="${topic.id}">
                        <label for="${topic.id}" class="pre-topic-label">
                            <strong>${topic.emoji} ${topic.name}</strong>
                            <small>+ Physics</small>
                        </label>
                    `;
                    grid.appendChild(wrapper);
                });
            }

            const generateBtn = document.getElementById('generateBtn');
            const clearBtn = document.getElementById('clearBtn');
            if(generateBtn) generateBtn.addEventListener('click', generateIdeas);
            if(clearBtn) clearBtn.addEventListener('click', () => {
                document.querySelectorAll('.pre-topic-checkbox').forEach(cb => cb.checked = false);
                document.getElementById('researchQuery').value = '';
                document.getElementById('resultsSection').style.display = 'none';
            });
        }

        async function generateIdeas() {
            // Hardcoded API Key
            const GEMINI_API_KEY = 'AIzaSyC4p2OAmRUmLBPDgCfRrXfZjSvi2Km9tg4';

            const topics = [
                { id: 'chemistry', name: 'Chemistry', emoji: '⚗️' },
                { id: 'biology', name: 'Biology', emoji: '🧬' },
                { id: 'technology', name: 'Technology', emoji: '💻' },
                { id: 'engineering', name: 'Engineering', emoji: '🔧' },
                { id: 'medical', name: 'Medical Science', emoji: '🏥' },
                { id: 'indian-systems', name: 'Indian Knowledge Systems', emoji: '📚' }
            ];
            
            const selectedTopics = Array.from(document.querySelectorAll('.pre-topic-checkbox:checked')).map(cb => {
                return topics.find(t => t.id === cb.value).name;
            });
            const query = document.getElementById('researchQuery').value;
            const btn = document.getElementById('generateBtn');
            const messageBox = document.getElementById('messageBox');
            const container = document.getElementById('ideasContainer');

            if (selectedTopics.length === 0) { alert('Please select at least one domain.'); return; }

            btn.disabled = true;
            btn.innerHTML = '<span class="pre-spinner"></span> Processing...';
            messageBox.innerHTML = '';
            container.innerHTML = '';
            document.getElementById('resultsSection').style.display = 'block';

            try {
                // Using hardcoded key
                const ideas = await callGeminiAPI(selectedTopics, query, GEMINI_API_KEY);
                displayIdeas(ideas, selectedTopics);
            } catch (error) {
                console.error('Generation Error:', error);
                messageBox.innerHTML = `<div class="pre-error-message">Error: ${error.message}. <br>Showing local backup ideas instead.</div>`;
                displayIdeas(generateLocalIdeas(), selectedTopics);
            } finally {
                btn.disabled = false;
                btn.innerHTML = '🚀 Generate Ideas';
            }
        }

        async function callGeminiAPI(topics, query, apiKey) {
            const prompt = `Act as a physics research assistant. Generate 4 innovative research ideas that combine Physics with: ${topics.join(', ')}. ${query ? `Focus specificially on: ${query}.` : ''} Return ONLY a JSON array with objects having fields: title, description, domains, impact (High/Medium/Low).`;
            
            // Updated to Gemini 1.5 Flash
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
            
            const response = await fetch(url, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            if (!response.ok) { const errData = await response.json(); throw new Error(errData.error?.message || 'API Call Failed'); }
            const data = await response.json();
            let textResponse = data.candidates[0].content.parts[0].text;
            textResponse = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
            return JSON.parse(textResponse);
        }

        function generateLocalIdeas() {
            return [
                { title: 'Quantum Entanglement Sensors', description: 'Utilizing quantum entanglement for ultra-sensitive sensors.', domains: 'Physics, Chemistry', impact: 'High' },
                { title: 'Bio-Mimetic Aerodynamics', description: 'Studying bird flight for efficient drone propellers.', domains: 'Physics, Biology, Engineering', impact: 'Medium' },
                { title: 'Thermodynamic Data Storage', description: 'Entropy-based coding for high-density storage.', domains: 'Physics, Technology', impact: 'High' },
                { title: 'Nano-fluidic Drug Delivery', description: 'Fluid dynamics at nanoscale for targeted delivery.', domains: 'Physics, Medical Science', impact: 'High' }
            ];
        }

        function displayIdeas(ideas, topicNames) {
            const container = document.getElementById('ideasContainer');
            const messageBox = document.getElementById('messageBox');
            if(!messageBox.innerHTML.includes('Error')) {
                messageBox.innerHTML = `<div class="pre-success-message">✓ Generated ${ideas.length} ideas combining Physics with ${topicNames.join(', ')}</div>`;
            }
            ideas.forEach((idea, index) => {
                const domains = idea.domains.split(',').map(d => `<span class="pre-tag">${d.trim()}</span>`).join('');
                const impactClass = `pre-impact-${idea.impact.toLowerCase()}`;
                const card = document.createElement('div');
                card.className = 'pre-idea-card';
                card.innerHTML = `<div class="pre-idea-title">${index + 1}. ${idea.title}</div><div class="pre-idea-description">${idea.description}</div><div class="pre-idea-tags"><span class="pre-tag" style="background:#e0e7ff; color:#4338ca">Physics</span>${domains}<span class="pre-tag ${impactClass}">Impact: ${idea.impact}</span></div>`;
                container.appendChild(card);
            });
        }
    </script>
    </div>
</body>
</html>
