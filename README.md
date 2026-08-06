<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>iLab - Portfolio</title>
    <!-- Modern Typography Imports -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <style>
        /* --- COLOR THEME VARIABLES --- */
        [data-theme="dark"] {
            --bg-base: #090d16;
            --bg-surface: rgba(18, 26, 41, 0.7);
            --bg-card: rgba(23, 33, 53, 0.55);
            --bg-input: rgba(0, 0, 0, 0.3);
            --border-glow: rgba(255, 255, 255, 0.1);
            --border-hover: rgba(0, 242, 254, 0.4);
            
            --text-primary: #f1f5f9;
            --text-secondary: #94a3b8;
            --text-muted: #64748b;
            --heading-color: #ffffff;

            --accent-cyan: #00f2fe;
            --accent-blue: #3b82f6;
            --accent-purple: #8b5cf6;
            --accent-pink: #ec4899;
            --accent-emerald: #10b981;
            --accent-amber: #f59e0b;

            --gradient-primary: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
            --gradient-purple: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
            --gradient-ad: linear-gradient(135deg, rgba(30, 27, 75, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%);
            --shadow-elevation: 0 20px 40px rgba(0, 0, 0, 0.5);
            --badge-bg: rgba(59, 130, 246, 0.2);
            --table-header-bg: rgba(255, 255, 255, 0.05);
        }

        [data-theme="light"] {
            --bg-base: #f8fafc;
            --bg-surface: rgba(255, 255, 255, 0.85);
            --bg-card: rgba(241, 245, 249, 0.8);
            --bg-input: rgba(255, 255, 255, 0.9);
            --border-glow: rgba(0, 0, 0, 0.08);
            --border-hover: rgba(37, 99, 235, 0.4);
            
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --text-muted: #64748b;
            --heading-color: #0f172a;

            --accent-cyan: #0284c7;
            --accent-blue: #2563eb;
            --accent-purple: #7c3aed;
            --accent-pink: #db2777;
            --accent-emerald: #059669;
            --accent-amber: #d97706;

            --gradient-primary: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
            --gradient-purple: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
            --gradient-ad: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            --shadow-elevation: 0 10px 30px rgba(0, 0, 0, 0.08);
            --badge-bg: rgba(37, 99, 235, 0.1);
            --table-header-bg: rgba(0, 0, 0, 0.04);
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 14px;
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background-color: var(--bg-base);
            background-image: 
                radial-gradient(at 15% 15%, rgba(59, 130, 246, 0.12) 0px, transparent 50%),
                radial-gradient(at 85% 20%, rgba(139, 92, 246, 0.12) 0px, transparent 50%),
                radial-gradient(at 50% 80%, rgba(16, 185, 129, 0.08) 0px, transparent 50%);
            background-attachment: fixed;
            color: var(--text-primary);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* --- HEADER & NAVIGATION --- */
        .main-header {
            position: sticky;
            top: 12px;
            z-index: 1000;
            width: 95%;
            max-width: 1080px;
            margin: 12px auto;
            background: var(--bg-surface);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border-glow);
            border-radius: 20px;
            box-shadow: var(--shadow-elevation);
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .site-title-header {
            padding: 12px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            flex-wrap: wrap;
        }

        .site-title-header .title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.8em;
            color: var(--heading-color);
            margin: 0;
            font-weight: 700;
            letter-spacing: -0.5px;
            position: relative;
            flex-shrink: 0;
        }

        .site-title-header .title::after {
            content: '';
            position: absolute;
            right: -10px;
            bottom: 6px;
            width: 6px;
            height: 6px;
            background: var(--accent-cyan);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--accent-cyan);
        }

        /* Top Row Main Navigation Buttons */
        .top-nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .top-nav-links li {
            font-size: 0.88em;
            padding-left: 0;
            margin-bottom: 0;
        }

        .top-nav-links li::before {
            content: none;
        }

        .top-nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 12px;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            background: var(--bg-card);
            border: 1px solid var(--border-glow);
            display: inline-block;
        }

        .top-nav-links a:hover {
            color: var(--heading-color);
            border-color: var(--border-hover);
        }

        .top-nav-links a.active {
            background: var(--badge-bg);
            color: var(--accent-cyan);
            border: 1px solid var(--accent-cyan);
            box-shadow: 0 0 12px rgba(0, 242, 254, 0.15);
        }

        /* Theme Switcher Button */
        .theme-toggle-btn {
            background: var(--bg-card);
            border: 1px solid var(--border-glow);
            color: var(--text-primary);
            padding: 8px 14px;
            border-radius: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.85em;
            font-weight: 600;
            transition: all 0.25s ease;
            flex-shrink: 0;
        }

        .theme-toggle-btn:hover {
            border-color: var(--accent-cyan);
            transform: translateY(-1px);
        }

        .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 15px 12px 15px;
            border-top: 1px solid var(--border-glow);
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
        }

        .navbar::-webkit-scrollbar {
            display: none;
        }

        .nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 6px;
            white-space: nowrap;
        }

        .nav-links li {
            font-size: 0.85em;
            flex-shrink: 0;
            padding-left: 0;
            margin-bottom: 0;
        }

        .nav-links li::before {
            content: none;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 600;
            padding: 7px 16px;
            border-radius: 12px;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            background: transparent;
            border: 1px solid transparent;
            display: inline-block;
        }

        .nav-links a:hover {
            color: var(--heading-color);
            background: var(--bg-card);
            border-color: var(--border-glow);
        }

        .nav-links a.active {
            background: var(--badge-bg);
            color: var(--accent-cyan);
            border: 1px solid var(--accent-cyan);
            box-shadow: 0 0 12px rgba(0, 242, 254, 0.15);
        }

        /* --- CONTAINER & CONTENT STYLING --- */
        .container {
            max-width: 1080px;
            width: 95%;
            margin-top: 10px;
            margin-bottom: 40px;
        }

        .page-content {
            display: none;
            animation: slideUpFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .page-content.active {
            display: block;
        }

        @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h2 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.7em;
            margin-top: 0;
            margin-bottom: 20px;
            color: var(--heading-color);
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid var(--border-glow);
            padding-bottom: 10px;
        }

        h3 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.25em;
            color: var(--accent-cyan);
            margin-top: 20px;
            margin-bottom: 12px;
            font-weight: 600;
        }

        h4 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.05em;
            color: var(--text-primary);
            margin-top: 16px;
            margin-bottom: 8px;
            font-weight: 600;
        }

        strong {
            color: var(--heading-color);
            font-weight: 600;
        }

        p {
            margin-bottom: 14px;
            color: var(--text-secondary);
        }

        ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: 20px;
        }

        li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            color: var(--text-secondary);
        }

        li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--accent-cyan);
            font-family: monospace;
        }

        /* Glassmorphism Section Card */
        .section {
            background: var(--bg-surface);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--border-glow);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 20px;
            box-shadow: var(--shadow-elevation);
            transition: border-color 0.3s ease;
        }

        .section:hover {
            border-color: var(--border-hover);
        }

        /* Profile Header */
        .profile-header {
            display: flex;
            align-items: center;
            gap: 20px;
            background: var(--bg-surface);
            border: 1px solid var(--border-glow);
        }

        .profile-picture {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent-cyan);
            box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
            flex-shrink: 0;
        }

        .header-text h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 2em;
            margin: 0 0 4px 0;
            color: var(--heading-color);
            letter-spacing: -0.5px;
        }

        .header-text p {
            font-size: 0.95em;
            color: var(--accent-cyan);
            margin: 0;
            font-weight: 500;
        }

        /* Social Links */
        .social-links {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .social-links a img {
            height: 26px;
            border-radius: 6px;
            transition: transform 0.2s ease;
        }

        .social-links a:hover img {
            transform: translateY(-2px);
        }

        /* Research Items */
        .research-area-item {
            margin-bottom: 12px;
            padding: 12px 16px;
            border-radius: 10px;
            background: var(--bg-card);
            border-left: 3px solid var(--accent-cyan);
            transition: transform 0.2s ease;
        }

        .research-area-item:hover {
            transform: translateX(4px);
        }

        /* --- JOIN US ADVERTISEMENT --- */
        .advertisement {
            background: var(--gradient-ad);
            border: 1px solid var(--border-glow);
            color: var(--text-primary);
            padding: 30px 20px;
            border-radius: 20px;
            box-shadow: var(--shadow-elevation);
            text-align: center;
            margin: 20px 0;
        }

        .advertisement h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 2em;
            margin-bottom: 15px;
            background: var(--gradient-purple);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .opportunities {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }

        .opportunity {
            background: var(--badge-bg);
            border: 1px solid var(--border-glow);
            padding: 8px 16px;
            border-radius: 30px;
            font-size: 0.85em;
            color: var(--text-primary);
            transition: all 0.2s ease;
        }

        .opportunity:hover {
            border-color: var(--accent-cyan);
            transform: translateY(-2px);
        }

        .email-link {
            display: inline-block;
            background: var(--gradient-primary);
            color: #ffffff;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95em;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 242, 254, 0.25);
            margin-top: 15px;
        }

        .email-link:hover {
            transform: scale(1.04);
            box-shadow: 0 6px 20px rgba(0, 242, 254, 0.4);
        }

        /* --- PUBLICATIONS --- */
        .publication-item {
            margin-bottom: 16px;
            padding: 14px 18px;
            background: var(--bg-card);
            border-radius: 12px;
            border: 1px solid var(--border-glow);
            transition: all 0.2s ease;
        }

        .publication-item:hover {
            border-color: var(--accent-cyan);
        }

        .publication-item .citation {
            font-size: 1em;
            line-height: 1.6;
            margin-bottom: 6px;
            color: var(--text-primary);
        }

        .publication-item a {
            color: var(--accent-cyan);
            font-weight: 600;
            text-decoration: none;
            padding: 2px 6px;
            background: var(--badge-bg);
            border-radius: 4px;
        }

        /* --- TIMELINE / LATEST NEWS --- */
        .timeline {
            position: relative;
            padding-left: 20px;
            border-left: 2px solid var(--border-glow);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 18px;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -26px;
            top: 14px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--accent-purple);
            border: 2px solid var(--bg-base);
        }

        .timeline-content {
            background: var(--bg-card);
            padding: 14px 18px;
            border-radius: 12px;
            border: 1px solid var(--border-glow);
        }

        .timeline-content strong {
            color: var(--text-primary);
            font-size: 0.95em;
        }

        /* --- COURSE & TEACHING DASHBOARD CARDS --- */
        .course-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            margin-top: 16px;
        }

        .course-card {
            background: var(--bg-card);
            border-radius: 16px;
            padding: 20px;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid var(--border-glow);
            position: relative;
            overflow: hidden;
        }

        .course-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--gradient-primary);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .course-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent-cyan);
            box-shadow: var(--shadow-elevation);
        }

        .course-card:hover::before {
            opacity: 1;
        }

        .course-card h4 {
            margin-top: 0;
            font-size: 1.15em;
            color: var(--heading-color);
            border-bottom: 1px solid var(--border-glow);
            padding-bottom: 8px;
        }

        .semester-tag {
            background: var(--badge-bg);
            color: var(--accent-cyan);
            border: 1px solid var(--border-glow);
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 0.75em;
            font-weight: 600;
        }

        .back-btn {
            background: var(--bg-card);
            color: var(--text-primary);
            border: 1px solid var(--border-glow);
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            margin-bottom: 18px;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .back-btn:hover {
            border-color: var(--accent-cyan);
            transform: translateX(-3px);
        }

        /* --- OUTREACH CARDS --- */
        .outreach-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 16px;
        }

        .outreach-card {
            background: var(--bg-card);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--border-glow);
            border-top: 3px solid var(--accent-amber);
            transition: transform 0.25s ease;
        }

        .outreach-card:hover {
            transform: translateY(-3px);
        }

        .outreach-icon {
            font-size: 1.8em;
            margin-bottom: 8px;
            display: block;
        }

        /* --- PLAYGROUND & SLIDESHOW IFRAMES --- */
        .playground-container {
            width: 100%;
            height: 70vh;
            min-height: 400px;
            border: 1px solid var(--border-glow);
            border-radius: 16px;
            overflow: hidden;
            background-color: #000;
            box-shadow: var(--shadow-elevation);
        }

        .playground-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* --- CLASSROOM LOCK PROMPT --- */
        .password-prompt-container {
            text-align: center;
            padding: 40px 20px;
            border: 1px dashed var(--border-glow);
            border-radius: 20px;
            background: var(--bg-surface);
            max-width: 480px;
            margin: 30px auto;
        }

        .password-form {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 18px;
            flex-wrap: wrap;
        }

        .password-form input {
            padding: 10px 14px;
            background: var(--bg-input);
            border: 1px solid var(--border-glow);
            border-radius: 8px;
            color: var(--text-primary);
            font-size: 0.95em;
            outline: none;
            flex-grow: 1;
            max-width: 260px;
        }

        .password-form input:focus {
            border-color: var(--accent-cyan);
        }

        .password-form button {
            padding: 10px 20px;
            border: none;
            background: var(--gradient-primary);
            color: #ffffff;
            font-weight: 700;
            border-radius: 8px;
            cursor: pointer;
            transition: opacity 0.2s ease;
        }

        .password-form button:hover {
            opacity: 0.9;
        }

        .password-error-message {
            margin-top: 12px;
            color: #ef4444;
            font-weight: 600;
        }

        /* --- TABLE STYLING --- */
        .table-responsive {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin-top: 12px;
            border-radius: 12px;
            border: 1px solid var(--border-glow);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.88em;
            background: var(--bg-card);
            min-width: 550px;
        }

        th, td {
            padding: 10px 12px;
            text-align: left;
            border-bottom: 1px solid var(--border-glow);
            color: var(--text-secondary);
        }

        th {
            background: var(--table-header-bg);
            color: var(--heading-color);
            font-weight: 600;
            font-family: 'Space Grotesk', sans-serif;
        }

        tr:hover td {
            background: rgba(255, 255, 255, 0.02);
            color: var(--text-primary);
        }

        /* Hidden Utility */
        #classroom-content.hidden {
            display: none;
        }
        .course-detail-view, .teaching-detail-view {
            display: none;
            animation: slideUpFade 0.4s ease-out;
        }
        .course-detail-view.active, .teaching-detail-view.active {
            display: block;
        }

        /* --- RESPONSIVE BREAKPOINTS (MOBILE & TABLET) --- */
        @media (max-width: 768px) {
            body {
                font-size: 13.5px;
            }

            .main-header {
                width: 92%;
                margin: 10px auto;
                border-radius: 16px;
            }

            .site-title-header {
                padding: 12px 16px;
                justify-content: space-between;
            }

            .site-title-header .title {
                font-size: 1.5em;
            }

            .top-nav-links {
                width: 100%;
                order: 3;
                justify-content: center;
                margin-top: 6px;
            }

            .container {
                width: 92%;
            }

            .section {
                padding: 18px;
                border-radius: 14px;
            }

            .profile-header {
                flex-direction: column;
                text-align: center;
                gap: 12px;
            }

            .profile-picture {
                width: 80px;
                height: 80px;
            }

            .header-text h1 {
                font-size: 1.6em;
            }

            .advertisement {
                padding: 24px 16px;
            }

            .advertisement h1 {
                font-size: 1.6em;
            }

            .research-gifs {
                flex-direction: column !important;
            }

            .research-gifs img {
                width: 100% !important;
                height: auto !important;
            }

            .playground-container {
                height: 55vh;
            }
        }

        @media (max-width: 480px) {
            .nav-links a, .top-nav-links a {
                padding: 6px 10px;
                font-size: 0.8em;
            }

            h2 {
                font-size: 1.4em;
            }

            h3 {
                font-size: 1.15em;
            }

            .email-link {
                width: 100%;
                box-sizing: border-box;
            }
        }

    </style>
</head>
<body>

    <!-- MAIN HEADER -->
    <header class="main-header">
        <!-- Top Row: Title, Main Nav Buttons, and Theme Switcher Button -->
        <div class="site-title-header">
            <div class="title">Physics+AI</div>
            <ul class="top-nav-links">
                <li><a href="#research" class="nav-link">Research</a></li>
                <li><a href="#publication" class="nav-link">Publication</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
            </ul>
            <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Theme">
                <span id="theme-toggle-icon">🌙</span>
                <span id="theme-toggle-text">Dark</span>
            </button>
        </div>
        <!-- Bottom Row: Other Navigation Links -->
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="#highlight" class="nav-link active">Home</a></li>
                <li><a href="#teaching" class="nav-link">Teaching</a></li>
                <li><a href="#outreach" class="nav-link">Outreach</a></li>
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
            <img src="cover1.png" alt="Highlight cover image" style="width: 100%; aspect-ratio: 21 / 9; object-fit: cover; margin-bottom: 20px; border-radius: 14px; border: 1px solid var(--border-glow);">
           
            <h2> Hello World !</h2>
            <p>We are a group of creative researchers exploring physics at the interface of artificial intelligence, working in a deeply collaborative and interdisciplinary setting. Our goal is to understand complex systems and to see how modern computational approaches, especially deep learning, can contribute to solutions for societal good. Our main research interests include:</p>
            <ul>
                <li><b>Collective Intelligence in Natural and Artificial Systems:</b> How do large groups of individual agents—be they birds in a flock, cells in a tissue, or robots in a swarm—coordinate to achieve complex, group-level goals? We explore the physical principles behind this emergent intelligence, studying how local rules and interactions give rise to sophisticated collective behaviors in both living and engineered systems.</li>
                <li><b>Physics of Living Matter:</b> We view biological tissues as a form of active matter. We study the collective migration and self-organization of cells to better understand fundamental processes like wound healing, tissue development, and morphogenesis. By creating computational models that capture the interplay between cellular forces and signaling, we hope to contribute insights that could one day aid in regenerative medicine.</li>
                <li><b>Mechanics of Disordered Materials:</b> Materials like glasses and granular packings lack a perfect crystal structure, which makes predicting their behavior, particularly failure, a difficult challenge. We investigate the fundamental mechanics of these systems, applying machine learning techniques to identify subtle structural precursors to failure. Our goal is to contribute to a more predictive science of materials, which is essential for designing more resilient and safer structures.</li>
                <li><b>AI as a Tool for Scientific Discovery:</b> A common thread through all our research is the use of deep learning not just for prediction, but as a tool for gaining fundamental insight. We are committed to developing simple models by machine intelligence (MI). We aim to uncover the underlying physical principles our models have learned, helping us to formulate new hypotheses and deepen our understanding of the complex natural systems we study.</li>
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
                    <p> We are seeking creative individuals to join our lab to co-create the future.</p>
           
                    <p>Whether you are an established researcher, a budding scientist, or a creative force eager to collaborate, we have a place for you. We are actively seeking passionate individuals for:</p>
           
                    <div class="opportunities">
                        <div class="opportunity">Collaborative Projects</div>
                        <div class="opportunity">Internship Opportunities</div>
                        <div class="opportunity">PhD Positions</div>
                        <div class="opportunity">Postdoctoral Fellowships</div>
                    </div>
           
                    <p>Find your chance to work on projects that matter, surrounded by a team to pushing the boundaries of what's possible. We believe in the power of diversity and the magic that happens when generative minds connect.</p>
           
                    <div class="call-to-action">
                        <h2 style="justify-content: center; border: none;">Ready to answer the call?</h2>
                        <p>We want to hear from you: your vision and plans with us.<br>Email your one-page CV, a well supported SOP</p>
                        <a href="mailto:sumandutta.avvcb@gmail.com" class="email-link">Submit</a>
                    </div>
           
                    <p style="margin-top: 25px; font-style: italic; font-size: 0.9em;">Let's build the future together.</p>
                </div>
                <img src="joinus.png" alt="Join Us Graphic" style="width: 100%; margin-top: 15px; border-radius: 12px; border: 1px solid var(--border-glow);">
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
            <div class="research-gifs" style="display: flex; gap: 15px; width: 100%; aspect-ratio: 32 / 9; overflow: hidden; margin-bottom: 20px;">
                <img src="cavitation.gif" alt="First highlight cover image" style="width: 50%; height: 100%; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glow);">
                <img src="mips.gif" alt="Second highlight cover image" style="width: 50%; height: 100%; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glow);">
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

        <!-- Publication Page -->
        <div id="publication" class="page-content">
            <h2>📚 Publications</h2>
            <div class="section">
                <h3>2026</h3>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav, T. Das & <u>S. Dutta</u>*, <em>Persistently Non-Gaussian Metastable Liquids</em>, Ann. Phys. (Berlin) 538 (4), e00247(2026) [<a href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/andp.202500247" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
                <h3>2025</h3>
                <div class="publication-item">
                    <p class="citation">S. Santra, L. Touzo, C. Dasgupta, A. Dhar, <u>S. Dutta</u>, A. Kundu, P. Le Doussal, G. Schehr & P. Singh, <em>Crystal to liquid cross-over in the active Calogero-Moser model</em>, J. Stat. Mech. 033203 (2025) [<a href="https://iopscience.iop.org/article/10.1088/1742-5468/adbb5d" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Contributing author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>*, P. Chaudhuri, M. Rao & C. Dasgupta, <em>Activity-driven sorting, approach to criticality and turbulent flows in dense persistent active fluids</em>, arXiv:2509.00376 (2025) [<a href="https://arxiv.org/abs/2509.00376" target="_blank" rel="noopener noreferrer">LINK</a>] </p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>
               
                <h3>2024</h3>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav & <u>S. Dutta</u>*, <em>Entropic timescales of Dynamic Heterogeneity in Supercooled Liquid</em>, Phys. Rev. E (Lett.), <strong>109</strong>, L062102 (2024) [<a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.109.L062102" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
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
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Length-scales of dynamic heterogeneity in a driven binary colloid</em>, Phys. Chem. Chem. Phys., <strong>22</strong>, 17731 (2020) [<a href="https://pubs.rsc.org/en/content/articlelanding/2020/cp/d0cp02703k/unauth" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>

                <h3>2019</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>*, <em>Microscopic insights into dynamical heterogeneity in a lane forming colloid</em>, Chem. Phys., <strong>522</strong>, 256 (2019) [<a href="https://www.sciencedirect.com/science/article/pii/S0301010418311510" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Solo author</u></p>
                </div>

                <h3>2018</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Transient dynamical responses of a charged binary colloid in an electric field</em>, Soft Matter, <strong>14</strong>, 4477 (2018) [<a href="https://pubs.rsc.org/en/content/articlehtml/2018/sm/c7sm02552a" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>

                <h3>2016</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Anomalous dynamical responses in a driven system</em>, Europhys. Lett., <strong>116</strong>, 38001 (2016) [<a href="https://iopscience.iop.org/article/10.1209/0295-5075/116/38001/meta" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First author</u></p>
                </div>

                <h3>2015</h3>
                <div class="publication-item">
                    <p class="citation">J. Chakrabarti & <u>S. Dutta</u>, <em>Analytical form of forces in hydrophobic collapse</em>, Chem. Phys. Lett., 620, <strong>109</strong> (2015) [<a href="https://www.sciencedirect.com/science/article/pii/S0009261414010483" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Second author</u></p>
                </div>
            </div>
        </div>

        <!-- 3. Teaching Page -->
        <div id="teaching" class="page-content">
            <h2>💡 Teaching & Mentoring</h2>
            <div class="section">
                <h3>Glimpses</h3>
                <p>Moments from My Classes</p>
                <div class="playground-container">
                    <iframe src="slideshow.html" frameborder="0"></iframe>
                </div>
            </div>
           
            <!-- TEACHING DASHBOARD -->
            <div id="teaching-dashboard">
                <p style="text-align: center; margin-bottom: 20px; font-size: 1.05em; color: var(--text-secondary);">
                    Explore our academic engagements, mentoring programs, and pedagogical philosophy.
                </p>

                <div class="course-grid">
                    <!-- Card 1: Academic Courses -->
                    <div class="course-card" onclick="openTeachingSection('teaching-courses')">
                        <div>
                            <h4>👨‍🏫 Academic Courses</h4>
                            <p><strong>Focus:</strong> AI, Mathematics & Material Science</p>
                            <p>Courses delivered at Amrita Vishwa Vidyapeetham and S. N. Bose National Centre for Basic Sciences.</p>
                            <ul style="margin-top:10px; font-size: 0.9em; color: var(--text-secondary);">
                                <li>Mathematics for Intelligent Systems-III (23MAT204)</li>
                                <li>Introduction to Material Informatics (23CHY115)</li>
                                <li>Mathematics for Intelligent Systems-I (23MAT106)</li>
                                <li>Research Methodology (PHY501)</li>
                            </ul>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan); font-weight: bold;">
                            View Course List &rarr;
                        </div>
                    </div>

                    <!-- Card 2: Mentoring -->
                    <div class="course-card" onclick="openTeachingSection('teaching-mentoring')">
                        <div>
                            <h4>🤝 Mentoring & Supervision</h4>
                            <p><strong>Role:</strong> Advisor & Co-Supervisor</p>
                            <p>Guiding research interns, Masters thesis students, and student collaborators.</p>
                            <div style="margin-top:10px;">
                                <span class="semester-tag">Interns</span>
                                <span class="semester-tag">Thesis</span>
                            </div>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan); font-weight: bold;">
                            View Student Profiles &rarr;
                        </div>
                    </div>

                    <!-- Card 3: Philosophy -->
                    <div class="course-card" onclick="openTeachingSection('teaching-philosophy')">
                        <div>
                            <h4>🧠 Teaching Philosophy</h4>
                            <p><strong>Approach:</strong> Interactive & Generative</p>
                            <p>Believing in "Learning by Doing" and bridging the gap between theoretical Physics and applied AI.</p>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan); font-weight: bold;">
                            Read Methodology &rarr;
                        </div>
                    </div>
                </div>
            </div>

            <!-- DETAILED VIEW: ACADEMIC COURSES -->
            <div id="teaching-courses" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to Dashboard
                </button>
                <div class="section">
                    <h3>Courses Taught</h3>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Credit</th>
                                    <th>Hrs/Week</th>
                                    <th>Session</th>
                                    <th>Students</th>
                                    <th>TLP-Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mathematics for Intelligent System - III (B.Tech in AI & Data Science, Semester-III)</td>
                                    <td>3+3</td>
                                    <td>4+4</td>
                                    <td>2026-27 Odd</td>
                                    <td>65+66</td>
                                    <td>Ongoing</td>
                                </tr>
                                <tr>
                                    <td>Introduction to Material Informatics (B.Tech in AI & Data Science, Semester-II)</td>
                                    <td>3+3</td>
                                    <td>4+4</td>
                                    <td>2025-26 Even</td>
                                    <td>64+65</td>
                                    <td>92.92%</td>
                                </tr>
                                <tr>
                                    <td>Mathematics for Intelligent System - I (B.Tech in AI & Data Science, Semester-I)</td>
                                    <td>4+4</td>
                                    <td>5+5</td>
                                    <td>2025-26 Odd</td>
                                    <td>65+66</td>
                                    <td>93.11%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- DETAILED VIEW: MENTORING -->
            <div id="teaching-mentoring" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to Dashboard
                </button>
                <div class="section">
                    <h3>Research Supervision</h3>
                    <div class="research-area-item">
                        <strong>Research Interns</strong>
                        <p>A. Jagdish, School of Physical Sciences, Amrita Vishwa Vidyapeetham (06/2025 onwards)</p>
                    </div>
                    <div class="research-area-item">
                        <strong>Student Collaborators</strong>
                        <p>A. Harish, Department of Mathematics, Amrita Vishwa Vidyapeetham (06/2025 onwards)</p>
                        <p>A. Venkatraman, Department of Mathematics, Amrita Vishwa Vidyapeetham (06/2025 onwards)</p>
                        <p>P. S. Mrudula, Department of AI, Amrita Vishwa Vidyapeetham (11/2025 onwards)</p>
                    </div>
                    <div class="research-area-item">
                        <strong>Masters Thesis Co-supervision</strong>
                        <p>Magnus Olsen, <em>Understanding Non-Newtonian Materials</em> <br> (Supervisor: R. Cabriolu, Norwegian University of Science and Technology, since 08/2025)</p>
                    </div>
                    <div class="research-area-item">
                        <strong>Supervision: Topical Projects</strong>
                        <div class="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Subject Code</th>
                                        <th>Names</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- 23CHY115 Projects -->
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Adithya R, Ashwin Krishna V, Madhan S, Nawin K.G</td>
                                        <td>Prediction of Molecular Solubility</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Mahalakshmi R, Venugopalan G, Ram Eswar P, Selva Vignesh V</td>
                                        <td>Semantic RAG with Specialized Embeddings</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>A. Shashank Royal, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha</td>
                                        <td>Bio-Match: Implant Material Recommender</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>P. Manvith, M. Venkat Naidu, S. Manoj Chowdary, B. Nakul</td>
                                        <td>Earthquake Probability & Early Warning Analysis</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Rithvik, Venkat, Abhishek, Grishmanth</td>
                                        <td>Forecasting Stress-Strain with Koopman</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Rithvik Arulprakash, Harshith K. V, Vijayamurughan S, Vipin Sudhakar</td>
                                        <td>AI-Driven Dynamics in Active Glass</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Suthasrinitha K.G, Asmitha T, Moushika S, Mirudhunya V</td>
                                        <td>Governing Equations of Chaotic Systems</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>J. Harini, A. Harsha Sree, B. Pavani, P. Prasad</td>
                                        <td>Identifying Metastable States with HAVOK</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>B. Lalith, K. Swami, M. Pranavi, N. Manoj</td>
                                        <td>The Sandpile Model (BTW)</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>N.V. Varshitha, A. Jahnavi, T. Varshini, B. Sai Prasanna</td>
                                        <td>Polymer Property Prediction Simulator</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>V.R. Yasswant, Abishek S, Y. Sanmukha Sai, U. Sudheer</td>
                                        <td>Convex Hull for Alloy</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Hari Priya, Maha Sri, Neha, Prathibaa</td>
                                        <td>SINDy - Discovering Physics from Data</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Moorthy Neeraj, Mortha Sathwik, Surya Charan Teja, Pavan Kalyan S.V, Dhanush</td>
                                        <td>Lennard-Jones System for Glass Formation</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Sharvesh S. P, B. gurucharan, P. A. Bhavesh Jayan, Hashwin M</td>
                                        <td>The Butterfly Paradox: Chaos in MD</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>T.V.S.S Phanindra Guptha, Athul V.R, Nanda Kishore, M. Vittal</td>
                                        <td>Ocean Waves Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>B. Sharmitha, H. Bala Sri Siva Sai Surya Tej, V. Mouli Sri, K. Bhanu Prakash</td>
                                        <td>AI-Based Material Recommendation System</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>D. Durga Prasad Reddy, Mukesh Reddy, G. Yaswanth Reddy, K. Praneeth, Jasmitha</td>
                                        <td>Failure Prediction in Amorphous Solids</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>S. Sujitkumar, M. Hemanthkumar, H. Abinavkumaran, P.V. RithikRaj</td>
                                        <td>Molecular Phase Dynamics using Koopman DMD</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Kirithik B, Sankardas K.K, V. Amruth, Vishnu Prasad P</td>
                                        <td>Discontinuous Molecular Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Adharsh K, Anu R, Sidharth M, Vethavarsini A</td>
                                        <td>Rare Event Acceleration with Koopman-GNN</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Akshara Sree R, Anirudh S Nair, Iniyaa Muthuselvan, Shashank Kannan</td>
                                        <td>The Battery Oracle</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Harish Kumaar S, S. Sri Raghav Vatsan, Dhruv Jayesh, Prithve KC</td>
                                        <td>Predicting Swarm Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Kanish Visyanth C, Kavipranidan J.T, Navaneet K.V, Nethaaji S</td>
                                        <td>Radiation Damage Prediction</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Revanth S, G Kamalesh, Jaswanth S, Elango Megabala G</td>
                                        <td>Graph Neural Networks for Molecules</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>K. Gayathri, P. Sri Harshini, M. Deekshitha, A. Gnana Amrutha</td>
                                        <td>AI-Based Inverse Material Selector</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Rohith Meka, Kode Karrthik, Naram Divya Akhil, T. Yashwant</td>
                                        <td>Microstructure Evolution Prediction</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Meenakshi Bijoy, Neelanjana J Anil, Aryananda M, Ghadige Rithika</td>
                                        <td>Learning Swarm Behaviour</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>U. Raghu Nandan, S. Akshaya, Nikitha, Likhit K</td>
                                        <td>De-noising MD Data via Hankel SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>M. Harsha, M. Anudeep Reddy, P. Nihal Reddy, P. Naren</td>
                                        <td>Bayesian Optimization for Alloy Design</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>C. Sai Hardhik Reddy, R. Gagan Chowdhury, K. Charan Saatvikh Reddy, T. Sri Sai</td>
                                        <td>Deformation in Copper Crystals</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Srikar, Sumanth, Sai Sushanth, Sai Sathwik</td>
                                        <td>Perovskite Solar Cells</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Neha Saravanan, Y. Pranavi Reddy, T. Sai Varshitha</td>
                                        <td>Predicting Particle Mobility in Active Matter</td>
                                    </tr>

                                    <!-- 23MAT106 Projects -->
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Adithya R, Sai Prasanna B, Anudeep Reddy</td>
                                        <td>Stochastic Gradient Descent-Image Brightness Optimizer</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Abisheik S, Ashwin Krishna V, Nakul Sharvan B, Nawin K.G</td>
                                        <td>Interior Point Method for Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Raghuraman V, Vipin Sudhakar, Harshith KV, Rithvik Arul Prakash</td>
                                        <td>Optimization Using Sequential Quadratic Programming</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Harish Kumaar S, Prabakar, Venkat D, Prithve K C</td>
                                        <td>Minimizing 2-D Lennard-Jones System via Broyden’s Good Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>V R Yasswant, S. Sri Raghav Vatsan, Selva Vignesh V, Madhan S</td>
                                        <td>Augmented Lagrangian Method for Constrained Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>P. Manvith Sharma, P. Grishmanth, P. Naren, S. Manoj</td>
                                        <td>Broyden’s Bad Method for Energy Minimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>P. Sri Harshini, K. Gayathri, M. Deekshitha, Meenakshi Bijoy</td>
                                        <td>Movie Recommendation System</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>S Jaswant, Revanth S, Elango Megabala G, G Kamalesh</td>
                                        <td>Steepest Descent Algorithm</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Rohith Meka, Naram Divya Akhil, B. Sai Srikar, Danush Mani Yerramsetti</td>
                                        <td>Movie Recommendation Using SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>P.S. Sathwik, V.S. Amruth Chowdary, Kirithik B, Sankar Das K.K</td>
                                        <td>Computational Search for Glassy States using Conjugate Gradient</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>SV Pavan Kalyan, Neeraj M, C. Jasmitha, S. Akshaya, G. Rithika</td>
                                        <td>Audio Compression using SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Sharmitha, H. Bala Sri Siva Sai Surya Tej, V. Mouli Sri, K. Bhanu Prakash</td>
                                        <td>Energy Minimization of 2D Particle System via L-BFGS</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Mortha Sathwik, Surya Charan Tej B, AryaNanda M, Neelanjana J Anil</td>
                                        <td>Computer Glassy States via Newton-Raphson Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>T.V.S.S Phanindra Guptha, M. Vittal, K. Nanda Kishore, Athul V.R</td>
                                        <td>Lennard-Jones Potential via Nelder-Mead</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Y. Pranavi Reddy, Neha Saravanan, T. Sai Varshitha Reddy, K.B Nikitha Krishna</td>
                                        <td>Optimization of Lennard-Jones via PSO</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Nethaaji S, Navaneet KV, Kavipranidan JT, Kanish Visyanth C</td>
                                        <td>Computer Glassy States through Simulated Annealing</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Prasad Reddy, Sai Praneeth, Mukesh Reddy, Yaswanth Reddy</td>
                                        <td>Adopted Basis Newton-Raphson Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Kode Karrthik, Kella Likhith, T. Yaswanth Sai Vedadri, U. Raghu Nandan</td>
                                        <td>Glassy States by Instantaneous Quench (FIRE Algorithm)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>H. Abinavkumaran, S. Sujitkumar, M. Hemanthkumar, P.V. RithikRaj</td>
                                        <td>Stable Particle Arrangement via Barzilai-Borwein Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Vishnu Prasad, N Sai Sushanth Reddy, Hari Sumanth, Gnana Amrutha</td>
                                        <td>Glassy States via Instant Quenching</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Lalith Hari Sainath Reddy, N. Manoj Kumar, P. Krishna Prasad, K. Swamy</td>
                                        <td>Powell’s Method for Energy Minimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Moushika S, Iniyaa Muthuselvan, Alamuru Harsha Sree, Akshara Sree R</td>
                                        <td>Levenberg-Marquardt Algorithm for Glass Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Suthasrinitha K G, Mirudhunya V, Asmitha T, Ram Eswar P</td>
                                        <td>RMS Propagation Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Pavani B, Maha Sri N, Neha S, Varshini T</td>
                                        <td>Basin Hopping Algorithm</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Ala Shashank Royal, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha</td>
                                        <td>Smart Diet Planner</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Lalith, N. Manoj Kumar, P. Krishna Prasad, K. Swamy</td>
                                        <td>Powell’s Method of Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>K. Charan Saatvikh Reddy, R. Gagan Chowdary, C. Sai Hardhik Reddy, M. Venkat Naidu</td>
                                        <td>Adagrad Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Dhruv Jayesh Kansagara, Nihal Reddy P, T. Sri Sai, Y. Sanmukha Sai</td>
                                        <td>BFGS with Trust Region</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>J. Harini, Prathibaa, Mahalakshmi</td>
                                        <td>Image Compression using SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Aadharsh, Anu R, Sidharth M, Vethavarsini A</td>
                                        <td>Glassy States via Instantaneous Quench (TNM)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>M. Dinesh Kumar, M. Sujan, K. Aravind Guptha, A. Sheshank Royal</td>
                                        <td>Smart Diet Planner (Revised)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Madhan Senthil Kumar, Selva Vignesh V, S. Sri Raghav Vatsan, V.R. Yasswant</td>
                                        <td>Augmented Lagrangian Method (ALM)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Sai Prasanna Anjaneyulu, M. Annudeep Reddy, R. Adithya</td>
                                        <td>Image Enhancement Using SGD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Mukesh Reddy, D. Durga Prasad Reddy, Yaswanth Reddy, K. Sai Praneeth</td>
                                        <td>Lennard-Jones via Adopted Basis Newton-Raphson</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Anirudh S Nair, Shashank Kannan, Vijayamurughan S, G. Venugopalan</td>
                                        <td>The Math Behind PageRank</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DETAILED VIEW: PHILOSOPHY -->
            <div id="teaching-philosophy" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to Dashboard
                </button>
                <div class="section">
                    <h3>My Teaching Philosophy</h3>
                    <p>My approach to teaching is grounded in the belief that the interface between Physics and Artificial Intelligence provides a unique playground for intuitive understanding. I emphasize:</p>
                    <ul>
                        <li><strong>Active Learning:</strong> Moving beyond lectures to include live coding sessions, simulation workshops, and "playground" style problem solving.</li>
                        <li><strong>Interdisciplinary Thinking:</strong> Encouraging students to see the mathematical structures common to both quantum mechanics and machine learning.</li>
                        <li><strong>Project-Based Assessment:</strong> Evaluating understanding through the creation of tangible models and tools (like our Lab Products) rather than just rote memorization.</li>
                    </ul>
                    <p><em>"Education is not the learning of facts, but the training of the mind to think." - Albert Einstein</em></p>
                </div>
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
            <p>I am a <strong>Creative</strong> researcher in the field of <strong>Intelligent Complex Systems</strong>, with a specialization in <strong>out-of-equilibrium Complex Fluids</strong>. I investigate model dynamics of <strong>Natural and Artificial Systems</strong>, combining <strong>Statistical Physics</strong>, <strong>High Performance Computing </strong> and <strong>Machine Intelligence</strong>, with an aim to develop strategies for <strong>Generative Physical Systems</strong>.</p>
            <div class="section">
                <h3>🎓 Professional Journey</h3>
                <h4>Present Affiliation</h4>
                <p><strong>Gemini Certified Faculty</strong><br>(2026-2028)<br></p>
                <p><strong>Assistant Professor (Sr. Gr.), Department of Artificial Intelligence</strong><br>School of AI, Amrita Vishwa Vidyapeetham, Coimbatore HQ<br></p>
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
                    <li>Laboratoire Interdisciplinaire de Physique Université Grenoble Alpes (Grenoble, FR) </li>
                    <li>Institut für Theoretische Physik II - Soft Matter Heinrich-Heine-Universität (Düsseldorf, DE) </li>
                </ul>
                <h4>Education</h4>
                <ul>
                    <li><strong>Ph.D in Physics</strong> (08/2012 – 01/2018)<br>Department of Chemical, Biological and Macromolecular Sciences, S. N. Bose National Centre for Basic Sciences, Kolkata (Degree awarded by University of Calcutta) <br><em>Thesis:</em> Numerical Studies on the Dynamics of Soft Matter Systems (Advisor: J. Chakrabarti)</li>
                    <li><strong>M.Sc in Physical Sciences</strong> (08/2010 – 07/2012)<br>S. N. Bose National Centre for Basic Sciences (Degree awarded by West Bengal University of Technology, Kolkata)</li>
                </ul>
            </div>
            <h2>📫 Connect</h2>
            <div class="section" style="text-align: center;">
                <div class="social-links">
                    <a href="mailto:sumandutta.snbncbs@gmail.com"><img src="https://img.shields.io/badge/Email-red?style=flat-square&logo=gmail&logoColor=white" alt="Email"></a>
                    <a href="https://scholar.google.com/citations?user=j-83jp8AAAAJ"><img src="https://img.shields.io/badge/Google_Scholar-007bff?style=flat-square&logo=google-scholar&logoColor=white" alt="Google Scholar"></a>
                    <a href="https://github.com/sd3ph"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>
                    <a href="https://www.linkedin.com/in/sd3ph/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
                </div>
            </div>
        </div>

        <!-- NEW OUTREACH PAGE -->
        <div id="outreach" class="page-content">
            <h2>📢 Outreach & Community</h2>
            <p style="text-align: center; margin-bottom: 25px;">Engaging with the scientific community and the public to demystify Physics and AI.</p>
           
            <div class="outreach-grid">
                <!-- Outreach Item 1 -->
                <div class="outreach-card">
                    <span class="outreach-icon">🗣️</span>
                    <h4>Talks</h4>
                    <p>Talks/Presentations</p>
                    <ul style="font-size: 0.9em;">
                        <li>International: 3+ </li>
                        <li>National: 10+ </li>
                        <li>Total: 26+ </li>
                    </ul>
                </div>
            
                <!-- Outreach Item 3 -->
                <div class="outreach-card">
                    <span class="outreach-icon">🌍</span>
                    <h4>Science Popularization</h4>
                    <p>October 31, 2025 -- Story writing by human-machine collaboration. Participation: 115 Students </p>
                    <p>February 6, 2026 -- International Mini-Workshop -- 125 Minutes (Online). Participation: 106 </p>
                </div>
               
                <!-- Outreach Item 4 -->
                <div class="outreach-card">
                    <span class="outreach-icon">🏆</span>
                    <h4>Competitions</h4>
                    <p>August 28–29, 2025-- The Class Hackathon on the theme "AI for Greener Future". Participation: 23 Groups (Each consisting of 6 Members) </p>
                    <p>March 20, 2026-- Class hackathon -II. Participation: 9 Groups (Each consisting of 4-6 Members) </p>
                </div>
            </div>
           
            <div class="section" style="margin-top: 30px;">
                <h3>Milestones</h3>
                <div class="research-area-item">
                    <strong>Human+AI Collaboration</strong>
                    <p>In a fusion of logic and creativity, we conducted an experimental initiative in the Autumn of 2025, challenging first-year BTech(AID) students to move beyond the mechanics of AI to the artistry of generation. The resulting anthology compiles 115 distinct narratives, representing a massive coordination of human imagination amplified by Large Language Models. This collection showcases a remarkable spectrum of themes, refracting a single premise into genres ranging from the futuristic sci-fi of The Neural Vault and ZeroTrace to the philosophical introspection of synthetic intelligence. Demonstrating how artificial tools can yield storytelling, we present the book: "Tales from the Hidden Layers — An Anthology of Neural Symphonies" (115 Stories from 115 Student coauthors from BTech AID S1 batch, 748 Pages).</p>
                </div>
            </div>
        </div>

        <!-- Latest News Page -->
        <div id="latest" class="page-content">
            <h2>✨ Latest News</h2>
            <div class="section">
                <div class="timeline">

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Siddharth M and MVS Praneeth has successfully completed the summer internship at the Department of Physics, SRM University. </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Suman delivered a talk at the Department of Physics of Complex Systems, S. N. Bose National Centre for Basic Sciences, Kolkata: Persistently Non-Gaussian Metastable Fluids </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Moushika S selected for ICTS-TIFR Summer Course: Dynamical Systems in Neuroscience </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Archit Harish joined the Institute of Mathematical Sciences, Chennai </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Completed Project: Development of a Proof-of-Concept Multimodal Agentic AI System for Advanced Geological Well Log Analysis (PI: Abhijith A, Project in partnership with Telesto Energy Pvt. Ltd. via The Directorate of Corporate & Industry Relations, Amrita Vishwa Vidyapeetham, Coimbatore (2025-2026) (PI: Abhijit A., CoPI: Sai N Sundarakrishna, T. Subeesh and S. Dutta </strong>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Publication: Persistently Non Gaussian Metastable Liquids, V. Vaibhav, T. Das and S. Dutta, Ann. Phys. (Berlin), 538 (4), e00247 (2026) </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Oral presentation in International Mini-Workshop - 125 Minutes: Optimal Diet Plannar, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha and A. Sheshank Royal </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>International Mini-Workshop - 125 Minutes was organised at School of AI (Coordinators: Dr Milton Mondal, Ayan Banerjee and Suman Dutta). </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Suman delivered a talk at the Institute of Mathematical Sciences, Chennai: Persistently Non-Gaussian Metastable Fluids </strong>
                        </div>
                    </div>
            
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>EuroHPC Benchmark Access awarded for LUMI clusters (9th Fastest Supercomputer Globally) (PI: Raffaela Cabriolu, CoPI: Suman Dutta)</strong>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Archit Harish selected for the Biophysical Society/ICTS-TIFR flagship Meeting: Spatial Organizations of Biophysical Functions. He presented a poster -- Learning Micro-flocking Dynamics in Living Machines by Hybrid Machine Intelligence</strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Agnevesh Jagdish selected in the ICTS-TIFR/Google flagship school: Data Science: Probabilistic and Optimization Methods II.</strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Oral presentation by Archit in International Conference: Machine Learning Material Heterogeneity at Micro-scale, A Harish, A Jagdish, A Venkatraman, S Dutta, International Conference on Advanced Materials and Green Technologies, MPD34; 74 (2025)</strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Suman Dutta joined the School of AI, Amrita Vishwa Vidyapeetham, as Assistant Professor (24 March, 2025).</strong>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- NEW: Live Class Room Page -->
        <div id="classroom" class="page-content">
             <h2>🧑‍🏫 Live Class Room</h2>
             
             <!-- Password Prompt Container -->
             <div id="password-prompt-container" class="password-prompt-container">
                 <h3>🔒 Access Restricted</h3>
                 <p>Please enter the passcode to view course materials.</p>
                 <form id="password-form" class="password-form">
                     <input type="password" id="passcode-input" placeholder="Enter passcode" required>
                     <button type="submit">Unlock</button>
                 </form>
                 <p id="password-error-message" class="password-error-message"></p>
             </div>
             
             <!-- Protected Content -->
             <div id="classroom-content" class="hidden">
               
                <!-- DASHBOARD VIEW -->
                <div id="classroom-dashboard">
                    <p style="text-align: center; margin-bottom: 25px; font-size: 1.05em;">Welcome to the Live Class Room. Select a course below to view details.</p>
                    <div class="course-grid">
                        <!-- Card 1: 23MAT106 -->
                        <div class="course-card" onclick="openCourse('course-mat106')">
                            <div>
                                <h4>Mathematics for Intelligent Systems - I</h4>
                                <p><span class="course-code">23MAT106</span> <span class="semester-tag">Fall 2025</span></p>
                                <p><strong>Subject:</strong> Linear Algebra, ODEs, Probability, Quantum Computing</p>
                                <p><strong>Credit:</strong> 4 </p>
                                <p><strong>Timeline:</strong> 6 Aug - 5 Dec, 2025 </p>
                                <p><strong>Students:</strong> BTech AID, Batch A and B (Total: 133 Students) First Year, First Semester </p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan);">
                                Click to view Schedule, Syllabus & Notes &rarr;
                            </div>
                        </div>

                        <!-- Card 2: 23CHY115 -->
                        <div class="course-card" onclick="openCourse('course-chy115')">
                            <div>
                                <h4>Introduction to Material Informatics</h4>
                                <p><span class="course-code">23CHY115</span> <span class="semester-tag">Spring 2026</span></p>
                                <p><strong>Subject:</strong> AI in Material Science</p>
                                <p><strong>Credit:</strong> 3 </p>
                                <p><strong>Timeline:</strong> 5 Jan - 4 May, 2026 </p>
                                <p><strong>Students:</strong> BTech AID, Batch A and B (Total: 129 Students) First Year, Second Semester</p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan);">
                                Click to view Schedule, Syllabus & Notes &rarr;
                            </div>
                        </div>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23MAT106 -->
                <div id="course-mat106" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to Dashboard
                    </button>
                   
                    <div class="section">
                        <h3>Course Details</h3>
                        <ul>
                            <li><strong>Class:</strong> BTech AID</li>
                            <li><strong>Semester:</strong> Fall, 2025 </li>
                            <li><strong>Course Code:</strong> 23MAT106</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Combined Weekly Schedule</h3>
                        <p style="font-weight: bold; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.05em; font-style: italic; margin-top: 0;">Mathematics for Intelligent Systems - I - 23MAT106, School of AI, Amrita Vishwa Vidyapeetham</p>

                        <div class="table-responsive">
                            <table style="text-align: center;">
                                <thead>
                                    <tr>
                                        <th>Time Slot</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">08:00 - 08:50</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">08:50 - 09:40</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">09:40 - 10:30</td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:30 - 10:45</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:45 - 11:35</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">11:35 - 12:25</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">12:25 - 01:15</td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td><td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Project (Sec B)</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">01:15 - 02:05</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Lunch Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">02:05 - 03:45</td>
                                        <td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B (Lab)</span></td>
                                        <td><span class="semester-tag">Section A (Lab)</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">03:45 - 04:35</td>
                                        <td><span class="semester-tag">Project (Sec A)</span></td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                   
                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt><strong>Unit 1</strong></dt>
                            <dd>Basics of Linear Algebra - Linear Dependence and independence of vectors - Gaussian Elimination - Rank of set of vectors forming a matrix - Vector space and Basis set for a Vector space – Dot product and Orthogonality - CR decomposition - Rotation matrices - Eigenvalues and Eigenvectors and its interpretation - Introduction to SVD. Computational experiments using Matlab/Excel/Simulink.</dd>
                           
                            <dt><strong>Unit 2</strong></dt>
                            <dd>Ordinary Linear differential equations, formulation - concept of slope, velocity and acceleration - analytical and numerical solutions - Impulse Response computations - converting higher order into first order equations - examples of ODE modelling in falling objects, satellite and planetary motion, Electrical and mechanical systems – Introduction to solving simple differential equations with Simulink - Introduction to one variable optimization - Taylor series. Computational experiments using Matlab /Excel/Simulink.</dd>

                            <dt><strong>Unit 3</strong></dt>
                            <dd>Introduction to random variables (continuous and discrete), mean, standard deviation, variance, sum of independent random variable, convolution, sum of convolution integral, probability distributions.</dd>

                            <dt><strong>Unit 4</strong></dt>
                            <dd>Introduction to quantum computing, Quantum Computing Roadmap, Quantum Mission in India, A Brief Introduction to Applications of Quantum computers, Quantum Computing Basics, Bracket Notation, Inner product, outer product, concept of state.</dd>
                        </dl>
                    </div>

                    <div class="section">
                        <h3>Lecture Notes</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1iQD5Idz2AqHFS5tHxHp9FYU0DpuDQ2t2/view?usp=sharing">Lecture 01: Introduction to Linear Algebra for AI (06/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1QxHKnfaHpDvrX1Q6f9Q9I8hQ8eetbBaU/view?usp=sharing">Lecture 02: Pseudoinverse in Action: Left and Right Inverses (08/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1tWhlRsK2VE4cyas4OhLAwnjNwyOfuxR/view?usp=sharing">Lecture 03: Pseudoinverse : Guide to your first AI application (11/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1xMa106_qIavA7vq0Un-bNcqrSbn4ItBr/view?usp=sharing">Lecture 04: Complex Data Processing (13/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1Cex5xgXujKA76VS8t02WuPzfFm4i7vMf/view?usp=sharing">Lecture 05-06: Introduction to Advanced Optimization and Physics-Informed Approaches(18/8/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1rwP78U60kntlpxxYTe5jD12t332jRt1s/view?usp=sharing">Lecture 07: The Linear Algebra Behind Large Language Models and Generative AI (21/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1MkGZUF9IKAIYxBv7noBz9B3FnrgaPJc5/view?usp=sharing">Lecture 08-10: The Physics behind the Data: Unveiling the Symmetries and Principal Axes of Transformations (1-5/09/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1MkGZUF9IKAIYxBv7noBz9B3FnrgaPJc5/view?usp=sharing">Lecture 11-12: Introduction to Ordinary Differential Equations (8-10/9/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1_PaitQ1drWka5PChDg8cy8fRMGuFMhA2/view?usp=sharing">Lecture 13-15:Impulse Response and Convolution(10-13/09/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1pRwjpohrF_t-iULyS0VWk7NBpHGEKWqo/view?usp=sharing">Lecture S1: An Introduction to Python for Linear Algebra(17/09/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1hlK77sH8cevDB_e4i1mbi67cYOawG7hw/view?usp=sharing">Lecture 16-17: Modeling Falling Objects, Satellites, and Planetary Motion (3-4/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1oe9eS-2PNsJ_ms5_4UgoKinqTAhAeGID/view?usp=sharing">Lecture 18: Ordinary Differential Equations (6/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/15vP6HRE0uMPYSHGrdb1SOZZ2CLl9UuaU/view?usp=sharing">Lecture 19: Complex RLC Circuit Analysis (8/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1mkCa3YYbM5Y04IAdMoVx39nBrDEsV5sR/view?usp=sharing">Lecture 20-21: Solving Ordinary Differential Equations in Python with SciPy (8/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1C-MSVKh_8QVNJtfayCFyjBGn_F1A2To5/view?usp=sharing">Lecture 22: Numerical Solution of ODEs (11/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1iRcFYW5_NAFJNh9FnoA9uo16n-Cv5R8c/view?usp=sharing">Lecture 23-26: Probability and Random Variables (24/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1qLYkZweb2UPk8yMq9tnCXjYJoxhnoDSO/view?usp=sharing">Hybrid Lecture-1: Buidling your first AI model (5/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1qPFETANADVHdJYmeeauB-VWI1uOieIvr/view?usp=sharing">Hybrid Lecture-2: Building your second AI model (6/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1JhTzCXodJKlXThSbIfQH9Wt4rWrv4WA1/view?usp=sharing">Hybrid Lecture-3: Polynomial Regression via Design Matrix Modification (7/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1HwdJjU6YZwOnGfQAE5U_FlKCwx0ZBiwr/view?usp=sharing">Hybrid Lecture-4: Finding the Pseudoinverse via CR Decomposition (11/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1o-EyZnoYgP5XWq7N9jYSVEB9K5tOGHDT/view?usp=sharing">Hybrid Lecture-5: Application of Singular Value Decomposition(SVD) (12/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1ZmoDHKNj4rgpQNUL0a5F4NBmyQDESGfY/view?usp=sharing">Hybrid Lecture-6: Application of Singular Value Decomposition(SVD) and Stochastic Analysis (14/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1AH3pcCV2Y20UcjFV1GsWdiEphSNxoSeG/view?usp=sharing"> Summary and Revision Unit-I-II-III (Theory) (17/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1H00roWBC8HzWcGgA-pDbqYawVBSGjIwY/view?usp=sharing"> Summary and Revision Unit-I-II-III (Coding) (19/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1odIEqeeOxx4CVEQcGZPm_qSWesh43KN_/view?usp=sharing"> SmartLab1: Linear Regression on the Edge (27/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1_WMGs493n6NF6MFzfg_KIoJpky-3X1ex/view?usp=sharing"> Lecture 27: Introduction to Quantum Computing (28/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1TDx-ZVSEYl2dRAufjnGKXv9N5GwKH0rJ/view?usp=sharing"> Lecture 28-30: Introduction to Quantum Computing (Extended) (29/11/2025)</a> - (LH 15/16)</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Topical Project</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1kfk44ClGk1CHYdp4oH3HK4MVGU5g_oYK/view?usp=drive_link"> Summary of Topical Projects </a> </li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Assignments</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1rkGgMks5BO0PGgv5f-wHzubaMnZHBIxF/view?usp=sharing">Assignment 1: Linear Algebra and ML </a> - (Due: 18/08/2025)</li>
                            <li><a href="https://drive.google.com/file/d/1yReUaF3pPoDgymTmBLUbRtqrZP40dzlW/view?usp=sharing">Assignment 2: Differential Equations and Modeling</a> - (Due: 11/10/2025)</li>
                        </ul>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23CHY115 -->
                <div id="course-chy115" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to Dashboard
                    </button>

                    <div class="section">
                        <h3>Course Details</h3>
                        <ul>
                            <li><strong>Class:</strong> BTech AID</li>
                            <li><strong>Semester:</strong> Fall, 2025 </li>
                            <li><strong>Course Code:</strong> 23CHY115</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Combined Weekly Schedule</h3>
                        <p style="font-weight: bold; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.05em; font-style: italic; margin-top: 0;">Material Informatics - 23CHY115, School of AI, Amrita Vishwa Vidyapeetham</p>

                        <div class="table-responsive">
                            <table style="text-align: center;">
                                <thead>
                                    <tr>
                                        <th>Time Slot</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">08:00 - 08:50</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">08:50 - 09:40</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">09:40 - 10:30</td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:30 - 10:45</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:45 - 11:35</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">11:35 - 12:25</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">12:25 - 01:15</td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">01:15 - 02:05</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Lunch Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">02:05 - 03:45</td>
                                        <td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B (Lab)</span></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">03:45 - 04:35</td>
                                        <td></td><td></td><td></td>
                                        <td><span class="semester-tag">Section A (Lab)</span></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt><strong>Unit 1</strong></dt>
                            <dd>Introduction to material science – structure, properties, and process spaces - process-structure-property linkages – foundation of material informatics – introduction to molecular mechanism and force field – quantification of dynamics properties of polymers (monte carlo simulation, molecular dynamics simulation, normal mode analysis) – electronics structure of atoms (Gaussian, Gauss view, density functional theory)</dd>
                           
                            <dt><strong>Unit 2</strong></dt>
                            <dd>Quantification and screening of materials properties - property prediction and optimization using AI - materials design and discovery using AI – how to handle small, spared, and low-quality dataset using AI.</dd>

                            <dt><strong>Unit 3</strong></dt>
                            <dd>Materials failure and sustainability analysis – new material and inverse materials design concept – solve inverse design using AI – enhance speed, efficacy and cost-effectiveness of material using AI - basic concept of quantum computing in material informatics.</dd>

                            <dt><strong>Unit 4</strong></dt>
                            <dd>Case studies of materials informatics (use of AI) in different fields (e.g. energy, aerospace, biomedical, etc.) - ethical considerations and limitations of materials informatics - future directions and challenges in materials informatics.</dd>
                        </dl>
                    </div>

                    <div class="section">
                        <h3>Lecture Notes</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/10rcKnWqmk5Hy0MSTJqXo8-H74M2xk72T/view?usp=sharing">Lecture 01-03: Overview of Material Informatics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1cZaj16h_Sk6r1eZzc-ZFUbtcTkD7J-z2/view?usp=sharing">Lecture S1: Generative Prediction using Koopman Theory </a> - (LH 15/16)</li>  
                            <li><a href="https://drive.google.com/file/d/1hfJNXZGG6GfeTdLZS3ALU6GrzoUQhBdy/view?usp=sharing">Lecture 4-5: Koopman Operator & Simple DMD </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1lz4Ddp6zURVGcWDvydx6Za-LBiv1wt7c/view?usp=sharing">Lecture 6-7: Koopman Prediction in Material Informatics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1uW-H33hAH_Th4Y_Ejim6yngpuo9gq43a/view?usp=sharing">Lecture 8: Single Variable Time-Series Prediction (Hankel-DMD) </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1zUQ6BYGaNtxK2LeCS5pzdL0czc-1aZHG/view?usp=sharing">Lecture S2: Data-Driven Model Engineering </a> - (LH 15/16)</li>  
                            <li><a href="https://drive.google.com/file/d/1zUQ6BYGaNtxK2LeCS5pzdL0czc-1aZHG/view?usp=drive_link">DMD Slides: Data-Driven Model Engineering </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/10btQz3_e2ZYVLppxqe5Zqhg0wxUBOAZY/view?usp=drive_link">Lecture 9-10: Analytical Data-Driven Koopman </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1I54B2QkDEIKDU_1Vk8Or9NcVrmtz-gaw/view?usp=drive_link">Lecture 11-12: Introduction to Molecular Dynamics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1hnKFxWve7AYl4j8dOCd-JzC-rZAyxlYu/view?usp=drive_link">Lecture 13: Basic Molecular Dynamics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1t1njTsSTpOiqRU6bVZCJHe98pCBcKfsM/view?usp=drive_link">Lecture 14-15: Catastrophic Algorithms in Materials BTW Sandpile vs. CBO Earthquake Model </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1BSzk1M6NML5LYN_KgRYH-GUJco4YDLPv/view?usp=sharing">Lecture 14-18: Catastrophic Algorithms in Materials BTW Sandpile vs. CBO Earthquake Model </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1X1Cv0vV0pIWJsyU0P-M8dduBeOsBiz-I/view?usp=sharing">Lecture 22: Massively Parallel Material Simulations LAMMPS and OVITO </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1-ZvtPiX5y_kmptXihOqa5jQbOkfN724e/view?usp=sharing">Lecture 24: Agent-Based Simulations using LAMMPS </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1SXG6P7WjXRF_BbrG1r8ix1ya77g1PmKw/view?usp=sharing">Lecture 26: Post Processing LAMMPS data </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1x02_HxmbctBWNH9JE-QyohEowLdpwCw6/view?usp=sharing">Lecture 27: Tutorial: Material Discovery with AI </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1-ZvtPiX5y_kmptXihOqa5jQbOkfN724e/view?usp=sharing">Lecture 26-30: Material Discovery by AI </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1lmd9snw_9iXnuwFd-jeRUOTeB5SqjVov/view?usp=sharing">Lecture 31: Vibrational Dynamics, Normal Mode Analysis (NMA) and Data-Driven Modeling </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1znn-zVH3Ciy3cJJHQO3Tiuo-i4yUdGIt/view?usp=sharing">Lecture 32-34: Ethical Considerations, Limitations, and Future Directions </a> - (LH 15/16)</li>    
                            <li><a href="https://drive.google.com/file/d/1Is5xz_s14I5ROZDtmghbUwJOtNb5wAZT/view?usp=sharing">Extensive Summary</a> - (LH 15/16)</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Topical Project</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/13OLMqsd1L7j0Fj4esVj72-NellyJjNn9/view?usp=sharing"> Summary of Project Review</a> </li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Assignments</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1DHuBZ-bzmekvveB4S0OiRT2LBufMDDvi/view?usp=sharing">Assignment 01: Due Date 31/01/2026 </a> - (LH 15/16)</li>     
                        </ul>
                    </div>
                </div>

             </div>
        </div>

        <!-- Lab Products Page -->
        <div id="products" class="page-content">
            <h2>🧪 Lab Products</h2>
           
            <div class="section">
                <h3>🤖 Aadri 2.0: Conversational AI for Customary Profiles</h3>
                <h4>AADRI – An Intelligent Conversational AI for Academic Profiles (v2.0)</h4>
               
                <h4>🔹 Team</h4>
                <ul>
                    <li><strong>Lead Developer:</strong> Dr. Suman Dutta, School of AI, Amrita Vishwa Vidyapeetham</li>
                    <li><strong>Quality Testing:</strong> BTech AID (Core) students</li>
                    <li><strong>Consultants & Reviewers:</strong> Experts from TCS, Cognizant, and University of Luxembourg</li>
                </ul>

                <h4>🔹 Project Synopsis</h4>
                <p> AI system engineered for the interactive presentation of academic profiles. Utilizing the Google Gemini engine and Retrieval-Augmented Generation (RAG) architecture, it transforms static information base into dynamic, query-driven user experiences. The platform ensures heightened accuracy, engagement, and personalization in professional digital self-presentation.</p>

                <h4>🔹 Colloquial Abstract</h4>
                <p>Aadri can be conceptualized as an intelligent assistant that articulates your academic contributions with the fluency of an informed colleague. Rather than navigating a conventional, static document, users engage through direct inquiry, receiving precise and user-centric responses. It functions as a personalized navigational tool for one's research portfolio, pedagogical experience, and professional accomplishments.</p>
               
                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To make academic profiles interactive, accessible, and engaging.</li>
                    <li>To help users (students, collaborators, institutions) explore a researcher’s work through natural conversation.</li>
                    <li>To set a new standard for how academics present themselves digitally.</li>
                </ul>
                <h4>🔹 Mobile Demonstration 📱</h4>
                <p>Evaluate the application's real-time conversational capabilities on the go, in the playground subpage. Read the: <a href="https://drive.google.com/file/d/1wTpjT0-jby8hUuf01bEL8L08Mx2ihmwp/view?usp=sharing" style="text-decoration: none; color: var(--accent-cyan); font-weight: bold; border-bottom: 2px solid var(--accent-cyan); padding-bottom: 2px;">White Paper</a></p>
            </div>

            <div class="section">
                <h3>📝 AtoGRAD: OMR Solutions for Class-based Tests</h3>
                <p>AtoGRAD is an innovative Optical Mark Recognition (OMR) solution designed to streamline and automate the grading process for classroom-based tests. More details coming soon!</p>

                <h4>🔹 Team</h4>
                <p>To be announced.</p>
               
                <h4>🔹 Abstract</h4>
                <p>Details about the technology and application will be available shortly.</p>

                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To provide a fast, accurate, and cost-effective OMR solution for educators.</li>
                    <li>To reduce the manual effort and time spent on grading multiple-choice exams.</li>
                    <li>To offer instant analytics and performance reports for students and instructors.</li>
                </ul>
            </div>

            <div class="section">
                <h3>🩺 MedScriptAI: Intelligent Medical Documentation</h3>
                <h4>MedScriptAI – Automated Clinical Scripting and Analysis Engine</h4>

                <h4>🔹 Team</h4>
                <p>To be announced.</p>

                <h4>🔹 Project Synopsis</h4>
                <p>MedScriptAI utilizes advanced natural language processing to transcribe and analyze clinical interactions. By automating documentation, it allows healthcare professionals to focus more on patient care and less on administrative tasks.</p>

                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To reduce clinician burnout by automating electronic health record (EHR) entries.</li>
                    <li>To ensure high accuracy in medical transcription and prescription generation.</li>
                    <li>To provide real-time clinical decision support based on patient history.</li>
                </ul>
            </div>
        </div>

        <!-- miscellaneous Page -->
        <div id="misc" class="page-content">
            <h2>🤝 Research Collaborators</h2>
            <div class="section">
                <div class="research-area-item"><strong>Jaydeb Chakrabarti</strong> (Senior Professor, S N Bose National Centre for Basic Sciences, Kolkata, IN)</div>
                <div class="research-area-item"><strong>Pinaki Chaudhuri</strong> (Professor, The Institute of Mathematical Sciences, Chennai, IN)</div>
                <div class="research-area-item"><strong>Kirsten Martens</strong> (CNRS Researcher, University of Grenoble Alpes, Grenoble, FR)</div>
                <div class="research-area-item"><strong>Chandan Dasgupta</strong> (Honorary Professor, Indian Institute of Sciences, Bengaluru, IN)</div>
                <div class="research-area-item"><strong>Madan Rao</strong> (Senior Professor, National Centre for Biological Sciences -TIFR, Bengaluru, IN)</div>
                <div class="research-area-item"><strong>Vinay Vaibhav</strong> (Post Doctoral Fellow, University of Goettingen, DE)</div>
                <div class="research-area-item"><strong>Raffaela Cabriolu</strong> (Associate Professor, Norwegian University of Science and Technology, NO)</div>
                <div class="research-area-item"><strong>Tamoghna Kanti Das</strong> (Assistant Professor, WPA-NanoLSI - Kanazawa University, JP)</div>
                <div class="research-area-item"><strong>AM Parvez Biswas</strong> (Solution Architect - Enterprise Systems, Data & Integration, Tata Consultancy Services, IN)</div>
            </div>

            <h2>🏆 Awards & Recognition</h2>
            <div class="section">
                <ul>
                    <li><strong>Project Awarded: EUROHPC-Joint Undertaking Benchmark Access</strong> (2025-2026) (PI: Raffaela Cabriolu, CoPI: S. Dutta).</li>
                    <li><strong>Project Awarded: Development of a Proof-of-Concept Multimodal Agentic AI System for Advanced Geological Well Log Analysis</strong> (PI: Abhijith A, Project in partnership with Telesto Energy Pvt. Ltd. via The Directorate of Corporate & Industry Relations, Amrita Vishwa Vidyapeetham, Coimbatore) (PI: Abhijit A., CoPI: Sai N Sundarakrishna, T. Subeesh and S. Dutta) (2025-2026).</li>
                    <li><strong>Best Oral Presenter</strong> at the Condensed Matter and Statistical Physics Symposium, Presidency University (August 2024).</li>
                    <li><strong>Visiting Research Grant</strong> from the Indo-French Centre for the Promotion of Advanced Research (IFC-PAR/CEFIPRA) (2019, 2018).</li>
                    <li><strong>Post BSc Integrated PhD Research Fellowship</strong> (2010-18).</li>
                    <li><strong>National Merit Scholarship</strong> (2004).</li>
                </ul>
            </div>
        </div>
        
        <!-- NEW: Playground Page (Chatbot moved here) -->
        <div id="playground" class="page-content">
            <h2>🎮 Swarm Intelligence</h2>
            <div class="section">
                <p>Unleash the swarm. Take control of the artificial 'intelligence' and guide its trajectory toward the target in the simulation below. Acknowledgement: Harish Kumaar S, S. Sri Raghav Vatsan, Neelanjana. J A, Aryananda M, M. Bijoy, Ghadige R, D. Jayesh, Prithve KC, A. Jagdish (Ongoing) </p>
                <div class="playground-container">
                    <iframe src="boids_lj_interactive.html" frameborder="0"></iframe>
                </div>
            </div>
        </div>

    </div>

    <script>
        window.addEventListener('DOMContentLoaded', () => {
           
            // --- CONFIGURATION ---
            const CLASSROOM_PASSCODE = '23MAT106';

            // --- DOM Elements ---
            const navLinks = document.querySelectorAll('.nav-link');
            const pageContents = document.querySelectorAll('.page-content');
            const passwordForm = document.getElementById('password-form');
            const passwordInput = document.getElementById('passcode-input');
            const passwordErrorMsg = document.getElementById('password-error-message');
            const classroomPrompt = document.getElementById('password-prompt-container');
            const classroomContent = document.getElementById('classroom-content');

            // --- Theme Switcher Logic ---
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-toggle-icon');
            const themeText = document.getElementById('theme-toggle-text');

            function applyTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                    themeIcon.textContent = '🌙';
                    themeText.textContent = 'Dark';
                } else {
                    themeIcon.textContent = '☀️';
                    themeText.textContent = 'Light';
                }
                localStorage.setItem('theme', theme);
            }

            // Detect system theme or stored theme
            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
            applyTheme(savedTheme);

            themeToggleBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });

            // --- Navigation Logic ---
            function switchTab(targetId) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                pageContents.forEach(content => content.classList.remove('active'));

                const activeLinks = document.querySelectorAll(`.nav-link[href="${targetId}"]`);
                activeLinks.forEach(link => {
                    link.classList.add('active');
                    link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                });

                const activeContent = document.querySelector(targetId);
                if (activeContent) activeContent.classList.add('active');
               
                // Special check for classroom page
                if(targetId === '#classroom') {
                    checkClassroomAccess();
                }

                // Reset teaching dashboard state when navigating away/to
                if(targetId === '#teaching') {
                    closeTeachingSection();
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
        });

        // --- Live Classroom Dashboard Logic ---
        function openCourse(courseId) {
            document.getElementById('classroom-dashboard').style.display = 'none';
            const views = document.querySelectorAll('.course-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const target = document.getElementById(courseId);
            if(target) target.classList.add('active');
            document.querySelector('.container').scrollIntoView({behavior: 'smooth'});
        }

        function closeCourse() {
            const views = document.querySelectorAll('.course-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const dashboard = document.getElementById('classroom-dashboard');
            if(dashboard) dashboard.style.display = 'block';
        }

        // --- Teaching Page Dashboard Logic ---
        function openTeachingSection(sectionId) {
            document.getElementById('teaching-dashboard').style.display = 'none';
            const views = document.querySelectorAll('.teaching-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const target = document.getElementById(sectionId);
            if(target) target.classList.add('active');
            document.querySelector('.container').scrollIntoView({behavior: 'smooth'});
        }

        function closeTeachingSection() {
            const views = document.querySelectorAll('.teaching-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const dashboard = document.getElementById('teaching-dashboard');
            if(dashboard) dashboard.style.display = 'block';
        }
    </script>

</body>
</html>
