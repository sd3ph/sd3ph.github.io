<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iLab - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #1a252f; /* Deep blue-grey */
            --secondary-color: #576574; /* Muted grey */
            --accent-color: #ff4757; /* Accent */
            --card-background: #ffffff;
            --border-color: #dcdde1;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 12px; /* Very small font size */
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
            background-attachment: fixed;
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
            background: rgba(255, 255, 255, 0.95);
            margin-top: 20px;
            margin-bottom: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            overflow: hidden; /* To contain floated elements */
            backdrop-filter: blur(5px);
        }

        /* --- MODIFIED NAVIGATION STYLES --- */
        /* Main header container */
        .main-header {
            width: 100%;
            background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
            box-sizing: border-box;
            border-bottom: 3px solid transparent;
            border-image: linear-gradient(90deg, #ff7e5f, #feb47b, #8E2DE2, #00B4DB) 1;
        }

        /* Top row: Title */
        .site-title-header {
            padding: 15px 30px;
            box-sizing: border-box;
        }

        .site-title-header .title {
            font-family: 'Playfair Display', serif;
            font-size: 2.2em; /* Increased title font size */
            background: linear-gradient(90deg, #ffffff, #a8ff78);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
            text-align: left;
            font-weight: 700;
        }
       
        /* Bottom row: Navigation Links Bar */
        .navbar {
            display: flex;
            justify-content: center; /* Center the links container */
            align-items: center;
            padding: 10px 30px;
            box-sizing: border-box;
            background: rgba(0, 0, 0, 0.2);
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
            margin: 5px 10px; /* Add vertical margin for wrapping */
            font-size: 0.9em;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            padding: 8px 15px;
            border-radius: 20px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            white-space: nowrap; /* Prevent link text from breaking */
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-links a:hover {
            background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
            color: #fff;
            box-shadow: 0 4px 12px rgba(255, 65, 108, 0.4);
        }

        .nav-links a.active {
            background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
            color: #fff;
            box-shadow: 0 4px 12px rgba(0, 114, 255, 0.4);
        }
        /* --- END OF MODIFIED NAVIGATION --- */


        /* Page Content Styling */
        .page-content {
            padding: 30px;
            display: none; /* Hidden by default */
            animation: fadeIn 0.5s ease-out;
            border-radius: 8px;
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
            padding-bottom: 8px;
            margin-top: 0;
            margin-bottom: 20px;
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
        }

        .profile-picture {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-right: 20px;
            object-fit: cover;
            border: 3px solid #667eea;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
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
            background: linear-gradient(90deg, transparent, var(--border-color), transparent);
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
            padding-left: 12px;
            padding-top: 8px;
            padding-bottom: 8px;
            border-radius: 0 8px 8px 0;
            background: rgba(255, 255, 255, 0.6);
        }
        .research-area-item strong {
            color: var(--primary-color);
        }

        /* Creative Theme Adjustments */
        .profile-header, .section {
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            border: 1px solid rgba(255,255,255,0.6);
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
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
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
            background: rgba(255, 255, 255, 0.15);
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 0.85em;
            transition: background-color 0.3s ease;
            backdrop-filter: blur(5px);
        }

        .opportunity:hover {
            background: rgba(255, 255, 255, 0.3);
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
            background: linear-gradient(135deg, #ffffff 0%, #f0f2ff 100%);
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
            background: #ffffff;
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
            border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
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
            color: #11998e;
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
            border-left: 3px solid #654ea3;
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
            background: linear-gradient(135deg, #654ea3, #eaafc8);
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
            background: linear-gradient(135deg, #ffffff 0%, #f7f5ff 100%);
            padding: 15px;
            border-radius: 8px;
            border: 1px solid rgba(101, 78, 163, 0.15);
            box-shadow: 0 3px 10px rgba(0,0,0,0.03);
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
            color: #654ea3;
            font-weight: bold;
            text-decoration: none;
        }
        .timeline-content a:hover {
            text-decoration: underline;
        }

        /* --- Playground / Embedded Chatbot Styles --- */
        .playground-container {
            width: 100%;
            height: 75vh; /* Take up significant vertical space */
            border: 1px solid var(--border-color);
            border-radius: 8px;
            overflow: hidden;
            background-color: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        
        .playground-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* --- Live Class Room & Teaching Dashboard Styles --- */
        .password-prompt-container {
            text-align: center;
            padding: 40px 20px;
            border: 1px dashed var(--border-color);
            border-radius: 12px;
            background: linear-gradient(135deg, #ffffff 0%, #f0fcfc 100%);
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
            background: linear-gradient(135deg, #0DA699 0%, #12D8C9 100%);
            color: white;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            transition: opacity 0.2s;
        }
        .password-form button:hover {
            opacity: 0.9;
        }
        .password-error-message {
            margin-top: 15px;
            color: #e74c3c;
            font-weight: bold;
            height: 1.2em; /* Reserve space to prevent layout shift */
        }
        #classroom-content.hidden {
            display: none;
        }

        /* --- New Course/Teaching Dashboard Styles --- */
        .course-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .course-card {
            border-radius: 10px;
            padding: 20px;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        .course-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #8E2DE2, #4A00E0);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
        }
        .course-card:hover::after {
            transform: scaleX(1);
        }
        .course-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .course-card h4 {
            margin-top: 0;
            font-size: 1.3em;
            font-family: 'Playfair Display', serif;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        .course-card p {
            margin-bottom: 8px;
            font-size: 0.95em;
        }
        .course-card .course-code {
            font-weight: bold;
            color: var(--primary-color);
        }
        .course-card .semester-tag {
            background: linear-gradient(135deg, #141e30, #243b55);
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.8em;
            vertical-align: middle;
            margin-left: 5px;
        }
        .back-btn {
            background: linear-gradient(135deg, #576574 0%, #2f3542 100%);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            margin-bottom: 20px;
            transition: opacity 0.3s;
            display: inline-flex;
            align-items: center;
            box-shadow: 0 3px 10px rgba(0,0,0,0.15);
        }
        .back-btn:hover {
            opacity: 0.9;
        }
        .back-btn svg {
            margin-right: 5px;
            fill: currentColor;
        }
        .course-detail-view, .teaching-detail-view {
            display: none;
            animation: fadeIn 0.4s ease-out;
        }
        .course-detail-view.active, .teaching-detail-view.active {
            display: block;
        }

        /* --- Outreach Styles --- */
        .outreach-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        .outreach-card {
            background: linear-gradient(135deg, #ffffff 0%, #fff0f3 100%);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            border-top: 4px solid #ff7e5f;
            transition: transform 0.3s;
        }
        .outreach-card:hover {
            transform: translateY(-5px);
        }
        .outreach-card h4 {
            color: var(--primary-color);
            border-bottom: none;
            margin-top: 0;
            font-weight: 700;
        }
        .outreach-icon {
            font-size: 2em;
            margin-bottom: 10px;
            display: block;
        }

        /* --- PAGE-SPECIFIC GRADIENT STYLES --- */

        /* 1. HIGHLIGHT (HOME) - Deep Royal Blue / Indigo Theme */
        #highlight {
            background: linear-gradient(135deg, #f0f4ff 0%, #e6edfd 100%);
        }
        #highlight h2 {
            background: linear-gradient(90deg, #1e3c72, #2a5298);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #2a5298;
        }
        #highlight .section {
            background: linear-gradient(135deg, #ffffff 0%, #eef3fc 100%);
            border-left: 5px solid #2a5298;
        }

        /* 2. RESEARCH - Coral Sunset / Crimson Flame Theme */
        #research {
            background: linear-gradient(135deg, #fff5f5 0%, #ffebeb 100%);
        }
        #research h2 {
            background: linear-gradient(90deg, #e52d27, #b31217);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #e52d27;
        }
        #research .section {
            background: linear-gradient(135deg, #ffffff 0%, #fde8e8 100%);
            border-left: 5px solid #e52d27;
        }
        #research .research-area-item {
            border-left: 3px solid #e52d27;
            background: rgba(229, 45, 39, 0.05);
        }

        /* 3. PUBLICATION - Emerald Jade / Mint Green Theme */
        #publication {
            background: linear-gradient(135deg, #f0fbf5 0%, #e2f7eb 100%);
        }
        #publication h2 {
            background: linear-gradient(90deg, #059669, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #059669;
        }
        #publication .section {
            background: linear-gradient(135deg, #ffffff 0%, #e1f9eb 100%);
            border-left: 5px solid #059669;
        }

        /* 4. TEACHING - Cyber Purple / Violet Dusk Theme */
        #teaching {
            background: linear-gradient(135deg, #f8f0fc 0%, #f1e3fa 100%);
        }
        #teaching h2 {
            background: linear-gradient(90deg, #8E2DE2, #4A00E0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #8E2DE2;
        }
        #teaching .section {
            background: linear-gradient(135deg, #ffffff 0%, #f3e5fa 100%);
            border-left: 5px solid #8E2DE2;
        }
        #teaching .course-card {
            background: linear-gradient(135deg, #ffffff 0%, #f6ebfc 100%);
        }
        #teaching .course-card h4 {
            color: #8E2DE2;
        }

        /* 5. ABOUT - Teal Ocean / Cyan Horizon Theme */
        #about {
            background: linear-gradient(135deg, #eef9fb 0%, #e0f2f7 100%);
        }
        #about h2 {
            background: linear-gradient(90deg, #0083B0, #00B4DB);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #0083B0;
        }
        #about .section {
            background: linear-gradient(135deg, #ffffff 0%, #e2f4f8 100%);
            border-left: 5px solid #0083B0;
        }

        /* 6. OUTREACH - Warm Mango / Amber Peach Theme */
        #outreach {
            background: linear-gradient(135deg, #fff8f0 0%, #ffeedd 100%);
        }
        #outreach h2 {
            background: linear-gradient(90deg, #ff7e5f, #feb47b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #ff7e5f;
        }
        #outreach .section {
            background: linear-gradient(135deg, #ffffff 0%, #ffe9e0 100%);
            border-left: 5px solid #ff7e5f;
        }
        #outreach .outreach-card {
            background: linear-gradient(135deg, #ffffff 0%, #ffebe3 100%);
            border-top: 4px solid #ff7e5f;
        }

        /* 7. LATEST - Midnight Amethyst / Aurora Lavender Theme */
        #latest {
            background: linear-gradient(135deg, #f6f3ff 0%, #ede8ff 100%);
        }
        #latest h2 {
            background: linear-gradient(90deg, #654ea3, #eaafc8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #654ea3;
        }
        #latest .section {
            background: linear-gradient(135deg, #ffffff 0%, #ede7ff 100%);
            border-left: 5px solid #654ea3;
        }

        /* 8. LIVE CLASSROOM - Turquoise Aqua / Mint Breeze Theme */
        #classroom {
            background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
        }
        #classroom h2 {
            background: linear-gradient(90deg, #0DA699, #12D8C9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #0DA699;
        }
        #classroom .section {
            background: linear-gradient(135deg, #ffffff 0%, #e6fffa 100%);
            border-left: 5px solid #0DA699;
        }
        #classroom .course-card {
            background: linear-gradient(135deg, #ffffff 0%, #e6fcf5 100%);
        }
        #classroom .course-card h4 {
            color: #0DA699;
        }

        /* 9. LAB PRODUCTS - Berry Magenta / Electric Rose Theme */
        #products {
            background: linear-gradient(135deg, #fcf0f8 0%, #f8e1f3 100%);
        }
        #products h2 {
            background: linear-gradient(90deg, #B224EF, #7579FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #B224EF;
        }
        #products .section {
            background: linear-gradient(135deg, #ffffff 0%, #f7e2f4 100%);
            border-left: 5px solid #B224EF;
        }

        /* 10. MISC - Cosmic Charcoal / Steel Blue Theme */
        #misc {
            background: linear-gradient(135deg, #f2f5f9 0%, #e4eaf2 100%);
        }
        #misc h2 {
            background: linear-gradient(90deg, #373B44, #4286f4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #4286f4;
        }
        #misc .section {
            background: linear-gradient(135deg, #ffffff 0%, #e2e9f5 100%);
            border-left: 5px solid #4286f4;
        }

        /* 11. PLAYGROUND - Deep Space Slate / Electric Cyan Theme */
        #playground {
            background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
        }
        #playground h2 {
            background: linear-gradient(90deg, #112233, #335577);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border-bottom: 3px solid #112233;
        }
        #playground .section {
            background: linear-gradient(135deg, #ffffff 0%, #e1e9f0 100%);
            border-left: 5px solid #112233;
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
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#outreach" class="nav-link">Outreach</a></li>
                <li><a href="#latest" class="nav-link">Latest</a></li>
                <!-- NEW PAGES ADDED HERE -->
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
                <img src="cavitation.gif" alt="First highlight cover image" style="width: 50%; height: 100%; object-fit: cover;">
                <img src="mips.gif" alt="Second highlight cover image" style="width: 50%; height: 100%; object-fit: cover;">
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
                    <p class="citation"><u>S. Dutta</u>*, P. Chaudhuri, M. Rao & C. Dasgupta, <em>Activity-driven sorting, approach to criticality and turbulent flows in dense persistent active fluids</em>, arXiv:2509.00376 (2025)  [<a href="https://arxiv.org/abs/2509.00376" target="_blank" rel="noopener noreferrer">LINK</a>] </p>
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
 

        <!-- 3. Teaching Page (REDESIGNED) -->
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
                <p style="text-align: center; margin-bottom: 25px; font-size: 1.1em; color: var(--secondary-color);">
                    Explore our academic engagements, mentoring programs, and pedagogical philosophy.
                </p>

                
               
                <div class="course-grid">
                    <!-- Card 1: Academic Courses -->
                    <div class="course-card" onclick="openTeachingSection('teaching-courses')">
                        <div>
                            <h4><span style="vertical-align: middle;">👨‍🏫</span> Academic Courses</h4>
                            <p><strong>Focus:</strong> AI, Mathematics & Material Science</p>
                            <p>Courses delivered at Amrita Vishwa Vidyapeetham and S. N. Bose National Centre for Basic Sciences.</p>
                            <ul style="margin-top:10px; font-size: 0.9em; color: var(--secondary-color);">
                                <li>Mathematics for Intelligent Systems-III (23MAT204)</li>
                                <li>Introduction to Material Informatics (23CHY115)</li>
                                <li>Mathematics for Intelligent Systems-I (23MAT106)</li>
                                <li>Research Methodology (PHY501)
                                </li>
                            </ul>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: #8E2DE2; font-weight: bold;">
                            View Course List &rarr;
                        </div>
                    </div>

                    <!-- Card 2: Mentoring -->
                    <div class="course-card" onclick="openTeachingSection('teaching-mentoring')">
                        <div>
                            <h4><span style="vertical-align: middle;">🤝</span> Mentoring & Supervision</h4>
                            <p><strong>Role:</strong> Advisor & Co-Supervisor</p>
                            <p>Guiding research interns, Masters thesis students, and student collaborators.</p>
                            <div style="margin-top:10px;">
                                <span class="semester-tag" style="background-color: var(--primary-color);">Interns</span>
                                <span class="semester-tag" style="background-color: var(--primary-color);">Thesis</span>
                            </div>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: #8E2DE2; font-weight: bold;">
                            View Student Profiles &rarr;
                        </div>
                    </div>

                 

            <!-- DETAILED VIEW: ACADEMIC COURSES -->
            <div id="teaching-courses" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to Dashboard
                </button>
                <div class="section">
                    <h3>Courses Taught</h3>
                    <ul>
                        <style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
</style>
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
                    </ul>
                </div>
            </div>

            <!-- DETAILED VIEW: MENTORING -->
            <div id="teaching-mentoring" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
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
                        <div style="overflow-x: auto; margin-top: 15px;">
                            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9em;">
                                <thead>
                                    <tr style="border-bottom: 2px solid #ddd; background-color: #f8f9fa;">
                                        <th style="padding: 10px; border: 1px solid #ddd;">Subject Code</th>
                                        <th style="padding: 10px; border: 1px solid #ddd;">Names</th>
                                        <th style="padding: 10px; border: 1px solid #ddd;">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- 23CHY115 Projects -->
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Adithya R, Ashwin Krishna V, Madhan S, Nawin K.G</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Prediction of Molecular Solubility</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Mahalakshmi R, Venugopalan G, Ram Eswar P, Selva Vignesh V</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Semantic RAG with Specialized Embeddings</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">A. Shashank Royal, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Bio-Match: Implant Material Recommender</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">P. Manvith, M. Venkat Naidu, S. Manoj Chowdary, B. Nakul</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Earthquake Probability & Early Warning Analysis</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Rithvik, Venkat, Abhishek, Grishmanth</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Forecasting Stress-Strain with Koopman</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Rithvik Arulprakash, Harshith K. V, Vijayamurughan S, Vipin Sudhakar</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">AI-Driven Dynamics in Active Glass</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Suthasrinitha K.G, Asmitha T, Moushika S, Mirudhunya V</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Governing Equations of Chaotic Systems</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">J. Harini, A. Harsha Sree, B. Pavani, P. Prasad</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Identifying Metastable States with HAVOK</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">B. Lalith, K. Swami, M. Pranavi, N. Manoj</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">The Sandpile Model (BTW)</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">N.V. Varshitha, A. Jahnavi, T. Varshini, B. Sai Prasanna</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Polymer Property Prediction Simulator</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">V.R. Yasswant, Abishek S, Y. Sanmukha Sai, U. Sudheer</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Convex Hull for Alloy</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Hari Priya, Maha Sri, Neha, Prathibaa</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">SINDy - Discovering Physics from Data</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Moorthy Neeraj, Mortha Sathwik, Surya Charan Teja, Pavan Kalyan S.V, Dhanush</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Lennard-Jones System for Glass Formation</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Sharvesh S. P, B. gurucharan, P. A. Bhavesh Jayan, Hashwin M</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">The Butterfly Paradox: Chaos in MD</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">T.V.S.S Phanindra Guptha, Athul V.R, Nanda Kishore, M. Vittal</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Ocean Waves Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">B. Sharmitha, H. Bala Sri Siva Sai Surya Tej, V. Mouli Sri, K. Bhanu Prakash</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">AI-Based Material Recommendation System</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">D. Durga Prasad Reddy, Mukesh Reddy, G. Yaswanth Reddy, K. Praneeth, Jasmitha</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Failure Prediction in Amorphous Solids</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">S. Sujitkumar, M. Hemanthkumar, H. Abinavkumaran, P.V. RithikRaj</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Molecular Phase Dynamics using Koopman DMD</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Kirithik B, Sankardas K.K, V. Amruth, Vishnu Prasad P</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Discontinuous Molecular Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Adharsh K, Anu R, Sidharth M, Vethavarsini A</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Rare Event Acceleration with Koopman-GNN</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Akshara Sree R, Anirudh S Nair, Iniyaa Muthuselvan, Shashank Kannan</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">The Battery Oracle</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Harish Kumaar S, S. Sri Raghav Vatsan, Dhruv Jayesh, Prithve KC</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Predicting Swarm Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Kanish Visyanth C, Kavipranidan J.T, Navaneet K.V, Nethaaji S</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Radiation Damage Prediction</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Revanth S, G Kamalesh, Jaswanth S, Elango Megabala G</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Graph Neural Networks for Molecules</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">K. Gayathri, P. Sri Harshini, M. Deekshitha, A. Gnana Amrutha</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">AI-Based Inverse Material Selector</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Rohith Meka, Kode Karrthik, Naram Divya Akhil, T. Yashwant</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Microstructure Evolution Prediction</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Meenakshi Bijoy, Neelanjana J Anil, Aryananda M, Ghadige Rithika</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Learning Swarm Behaviour</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">U. Raghu Nandan, S. Akshaya, Nikitha, Likhit K</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">De-noising MD Data via Hankel SVD</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">M. Harsha, M. Anudeep Reddy, P. Nihal Reddy, P. Naren</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Bayesian Optimization for Alloy Design</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">C. Sai Hardhik Reddy, R. Gagan Chowdhury, K. Charan Saatvikh Reddy, T. Sri Sai</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Deformation in Copper Crystals</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Srikar, Sumanth, Sai Sushanth, Sai Sathwik</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Perovskite Solar Cells</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23CHY115</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Neha Saravanan, Y. Pranavi Reddy, T. Sai Varshitha</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Predicting Particle Mobility in Active Matter</td>
                                    </tr>

                                    <!-- 23MAT106 Projects -->
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Adithya R, Sai Prasanna B, Anudeep Reddy</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Stochastic Gradient Descent-Image Brightness Optimizer</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Abisheik S, Ashwin Krishna V, Nakul Sharvan B, Nawin K.G</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Interior Point Method for Optimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Raghuraman V, Vipin Sudhakar, Harshith KV, Rithvik Arul Prakash</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Optimization Using Sequential Quadratic Programming</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Harish Kumaar S, Prabakar, Venkat D, Prithve K C</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Minimizing 2-D Lennard-Jones System via Broyden’s Good Method</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">V R Yasswant, S. Sri Raghav Vatsan, Selva Vignesh V, Madhan S</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Augmented Lagrangian Method for Constrained Optimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">P. Manvith Sharma, P. Grishmanth, P. Naren, S. Manoj</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Broyden’s Bad Method for Energy Minimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">P. Sri Harshini, K. Gayathri, M. Deekshitha, Meenakshi Bijoy</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Movie Recommendation System</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">S Jaswant, Revanth S, Elango Megabala G, G Kamalesh</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Steepest Descent Algorithm</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Rohith Meka, Naram Divya Akhil, B. Sai Srikar, Danush Mani Yerramsetti</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Movie Recommendation Using SVD</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">P.S. Sathwik, V.S. Amruth Chowdary, Kirithik B, Sankar Das K.K</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Computational Search for Glassy States using Conjugate Gradient</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">SV Pavan Kalyan, Neeraj M, C. Jasmitha, S. Akshaya, G. Rithika</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Audio Compression using SVD</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">B. Sharmitha, H. Bala Sri Siva Sai Surya Tej, V. Mouli Sri, K. Bhanu Prakash</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Energy Minimization of 2D Particle System via L-BFGS</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Mortha Sathwik, Surya Charan Tej B, AryaNanda M, Neelanjana J Anil</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Computer Glassy States via Newton-Raphson Method</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">T.V.S.S Phanindra Guptha, M. Vittal, K. Nanda Kishore, Athul V.R</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Lennard-Jones Potential via Nelder-Mead</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Y. Pranavi Reddy, Neha Saravanan, T. Sai Varshitha Reddy, K.B Nikitha Krishna</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Optimization of Lennard-Jones via PSO</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Nethaaji S, Navaneet KV, Kavipranidan JT, Kanish Visyanth C</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Computer Glassy States through Simulated Annealing</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Prasad Reddy, Sai Praneeth, Mukesh Reddy, Yaswanth Reddy</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Adopted Basis Newton-Raphson Method</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Kode Karrthik, Kella Likhith, T. Yaswanth Sai Vedadri, U. Raghu Nandan</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Glassy States by Instantaneous Quench (FIRE Algorithm)</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">H. Abinavkumaran, S. Sujitkumar, M. Hemanthkumar, P.V. RithikRaj</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Stable Particle Arrangement via Barzilai-Borwein Method</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Vishnu Prasad, N Sai Sushanth Reddy, Hari Sumanth, Gnana Amrutha</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Glassy States via Instant Quenching</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">B. Lalith Hari Sainath Reddy, N. Manoj Kumar, P. Krishna Prasad, K. Swamy</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Powell’s Method for Energy Minimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Moushika S, Iniyaa Muthuselvan, Alamuru Harsha Sree, Akshara Sree R</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Levenberg-Marquardt Algorithm for Glass Optimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Suthasrinitha K G, Mirudhunya V, Asmitha T, Ram Eswar P</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">RMS Propagation Optimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Pavani B, Maha Sri N, Neha S, Varshini T</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Basin Hopping Algorithm</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Ala Shashank Royal, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Smart Diet Planner</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">B. Lalith, N. Manoj Kumar, P. Krishna Prasad, K. Swamy</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Powell’s Method of Optimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">K. Charan Saatvikh Reddy, R. Gagan Chowdary, C. Sai Hardhik Reddy, M. Venkat Naidu</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Adagrad Optimization</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Dhruv Jayesh Kansagara, Nihal Reddy P, T. Sri Sai, Y. Sanmukha Sai</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">BFGS with Trust Region</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">J. Harini, Prathibaa, Mahalakshmi</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Image Compression using SVD</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Aadharsh, Anu R, Sidharth M, Vethavarsini A</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Glassy States via Instantaneous Quench (TNM)</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">M. Dinesh Kumar, M. Sujan, K. Aravind Guptha, A. Sheshank Royal</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Smart Diet Planner (Revised)</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Madhan Senthil Kumar, Selva Vignesh V, S. Sri Raghav Vatsan, V.R. Yasswant</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Augmented Lagrangian Method (ALM)</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">B. Sai Prasanna Anjaneyulu, M. Annudeep Reddy, R. Adithya</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Image Enhancement Using SGD</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Mukesh Reddy, D. Durga Prasad Reddy, Yaswanth Reddy, K. Sai Praneeth</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Lennard-Jones via Adopted Basis Newton-Raphson</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: 1px solid #ddd;">23MAT106</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">Anirudh S Nair, Shashank Kannan, Vijayamurughan S, G. Venugopalan</td>
                                        <td style="padding: 8px; border: 1px solid #ddd;">The Math Behind PageRank</td>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
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

        <!-- NEW OUTREACH PAGE -->
        <div id="outreach" class="page-content">
            <h2><span style="vertical-align: middle;">📢</span> Outreach & Community</h2>
            <p style="text-align: center; margin-bottom: 25px;">Engaging with the scientific community and the public to demystify Physics and AI.</p>
           
            <div class="outreach-grid">
                <!-- Outreach Item 1 -->
                <div class="outreach-card">
                    <span class="outreach-icon">🗣️</span>
                    <h4>Talks</h4>
                    <p>Talks/Presentations</p>
                    <ul style="font-size: 0.9em; color: var(--secondary-color);">
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
                    <p>In a fusion of logic and creativity, we conducted
an experimental initiative in the Autumn of 2025, challenging first-year BTech(AID) students to move beyond the mechanics of AI to the artistry of generation. The resulting anthology compiles 115 distinct narratives, representing a massive coordination of human imagination amplified by Large Language Models. This collection showcases a remarkable spectrum of themes, refracting a single premise into genres ranging from the futuristic sci-fi of The Neural Vault and ZeroTrace
to the philosophical introspection of synthetic intelligence. Demonstrating how artificial tools can yield storytelling, we present the book: "Tales from the Hidden Layers — An Anthology of Neural Symphonies" (115 Stories from 115 Student coauthors from BTech AID S1 batch, 748 Pages).</p>
                </div>
            </div>
        </div>


        <!-- Latest News Page -->
     <div id="latest" class="page-content">
    <h2>✨ Latest News</h2>
    <div class="section">
        <div class="timeline">

         <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong> Siddharth M and MVS Praneeth has successfully completed the summer internship at the Department of Physics, SRM University. </strong>
                </div>
            </div>

         <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong> Moushika S selected for ICTS-TIFR Summer Course: Dynamical Systems in Neuroscience </strong>
                </div>
            </div>

         <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong> Archit Harish joined the Institute of Mathematical Sciences, Chennai </strong>
                </div>
            </div>

        <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong> Completed Project: Development of a Proof-of-Concept Multimodal Agentic AI System for Advanced Geological Well Log Analysis (PI: Abhijith A, Project in partnership with Telesto Energy Pvt. Ltd. via The Directorate of Corporate & Industry Relations, Amrita Vishwa Vidyapeetham, Coimbatore (2025-2026) (PI: Abhijit A., CoPI:  Sai N Sundarakrishna, T. Subeesh and S. Dutta </strong>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>Publication: Persistently Non Gaussian Metastable Liquids, V. Vaibhav, T. Das and S. Dutta, Ann. Phys. (Berlin), 538 (4), e00247 (2026) </strong>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>Oral presentation in International Mini-Workshop - 125 Minutes: Optimal Diet Plannar, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha and A. Sheshank Royal </strong>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>International Mini-Workshop - 125 Minutes was organised at School of AI (Coordinators: Dr Milton Mondal, Ayan Banerjee and Suman Dutta). </strong>
                </div>
            </div>

             <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong> Suman delivered a talk at the Institute of Mathematical Sciences, Chennai: Persistently Non-Gaussian Metastable Fluids </strong>
                </div>
            </div>
    
            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>EuroHPC Benchmark Access awarded for LUMI clusters (9th Fastest Supercomputer Globally) (PI: Raffaela Cabriolu, CoPI: Suman Dutta)</strong>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>Archit Harish selected for the Biophysical Society/ICTS-TIFR flagship Meeting: Spatial Organizations of Biophysical Functions. He presented a poster -- Learning Micro-flocking Dynamics in Living Machines by Hybrid Machine Intelligence</strong>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>Agnevesh Jagdish selected in the ICTS-TIFR/Google flagship school: Data Science: Probabilistic and Optimization Methods II.</strong>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>Oral presentation by Archit in International Conference: Machine Learning Material Heterogeneity at Micro-scale, A Harish, A Jagdish, A Venkatraman, S Dutta, International Conference on Advanced Materials and Green Technologies, MPD34; 74 (2025)</strong>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-content" style="margin-bottom: 15px;">
                    <strong>Suman Dutta joined the School of AI, Amrita Vishwa Vidyapeetham, as Assistant Professor (24 March, 2025).</strong>
                </div>
            </div>

        </div> <!-- Close the one and only timeline div here -->
    </div> <!-- Close section -->
</div> <!-- Close page-content -->
        
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
               
                <!-- DASHBOARD VIEW -->
                <div id="classroom-dashboard">
                    <p style="text-align: center; margin-bottom: 25px; font-size: 1.1em;">Welcome to the Live Class Room. Select a course below to view details.</p>
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
                            <div style="margin-top: 15px; font-style: italic; color: #0DA699;">
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
                            <div style="margin-top: 15px; font-style: italic; color: #0DA699;">
                                Click to view Schedule, Syllabus & Notes &rarr;
                            </div>
                        </div>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23MAT106 -->
                <div id="course-mat106" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
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
                        <!-- Updated the header to reflect the content -->
                        <h3>Combined Weekly Schedule</h3>

                        <!-- Sub-headers for the course details -->
                        <p style="font-weight: bold; font-family: sans-serif; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.1em; font-style: italic; font-family: sans-serif; margin-top: 0;">Mathematics for Intelligent Systems - I - 23MAT106, School of AI, Amrita Vishwa Vidyapeetham</p>

                        <!-- Outer container to simulate the tcolorbox border -->
                        <div style="border: 1px solid #4D4D4D; padding: 15px; border-radius: 3px; margin: 20px 0; overflow-x: auto;">

                            <!-- Main Schedule Table -->
                            <table style="width: 100%; border-collapse: collapse; text-align: center; font-family: sans-serif;">
                                <thead>
                                    <tr style="background-color: #F2F2F2;">
                                        <!-- Table Headers (thead) -->
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Time Slot</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Monday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Tuesday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Wednesday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Thursday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Row 1: 08:00 - 08:50 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">08:00 - 08:50</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 2: 08:50 - 09:40 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">08:50 - 09:40</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section A -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A</span>
                                        </td>
                                    </tr>
                                    <!-- Row 3: 09:40 - 10:30 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">09:40 - 10:30</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section B -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section A -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section B -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 4: 10:30 - 10:45 (Break) -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">10:30 - 10:45</td>
                                        <td colspan="5" style="background-color: #e0e0e0; font-style: italic; padding: 10px; border: 1px solid #ccc;">Break</td>
                                    </tr>
                                    <!-- Row 5: 10:45 - 11:35 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">10:45 - 11:35</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 6: 11:35 - 12:25 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">11:35 - 12:25</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section B -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B</span>
                                        </td>
                                    </tr>
                                    <!-- Row 7: 12:25 - 01:15 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">12:25 - 01:15</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section A -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Project (Sec B) -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Project (Sec B)</span>
                                        </td>
                                    </tr>
                                    <!-- Row 8: 01:15 - 02:05 (Lunch Break) -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">01:15 - 02:05</td>
                                        <td colspan="5" style="background-color: #e0e0e0; font-style: italic; padding: 10px; border: 1px solid #ccc;">Lunch Break</td>
                                    </tr>
                                    <!-- Row 9: 02:05 - 03:45 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">02:05 - 03:45</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section B (Lab) -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B (Lab)</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Section A (Lab) -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A (Lab)</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 10: 03:45 - 04:35 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">03:45 - 04:35</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Project (Sec A) -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Project (Sec A)</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 11: 04:35 - 06:15 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">04:35 - 06:15</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- Legend (Key) -->
                            <div style="margin-top: 25px; text-align: center; font-family: sans-serif; line-height: 1.5;">
                                <div style="display: inline-block; margin-right: 30px; font-size: 0.9em;">
                                    <span style="background-color: #D6EAF8; display: inline-block; width: 25px; height: 10px; border-radius: 2px; margin-right: 5px; vertical-align: middle;"></span>
                                    Section A, LH 310
                                </div>
                                <div style="display: inline-block; font-size: 0.9em;">
                                    <span style="background-color: #FDEDEC; display: inline-block; width: 25px; height: 10px; border-radius: 2px; margin-right: 5px; vertical-align: middle;"></span>
                                    Section B, LH 314
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt>Unit 1</dt>
                            <dd>Basics of Linear Algebra - Linear Dependence and independence of vectors - Gaussian Elimination - Rank of set of vectors forming a matrix - Vector space and Basis set for a Vector space – Dot product and Orthogonality - CR decomposition - Rotation matrices - Eigenvalues and Eigenvectors and its interpretation - Introduction to SVD. Computational experiments using Matlab/Excel/Simulink.</dd>
                           
                            <dt>Unit 2</dt>
                            <dd>Ordinary Linear differential equations, formulation - concept of slope, velocity and acceleration - analytical and numerical solutions - Impulse Response computations - converting higher order into first order equations - examples of ODE modelling in falling objects, satellite and planetary motion, Electrical and mechanical systems – Introduction to solving simple differential equations with Simulink - Introduction to one variable optimization - Taylor series. Computational experiments using Matlab /Excel/Simulink.</dd>

                            <dt>Unit 3</dt>
                            <dd>Introduction to random variables (continuous and discrete), mean, standard deviation, variance, sum of independent random variable, convolution, sum of convolution integral, probability distributions.</dd>

                            <dt>Unit 4</dt>
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
                          <li><a href="https://drive.google.com/file/d/1rwP78U60kntlpxxYTe5jD12t332jRt1s/view?usp=sharing"
    >Lecture 07: The Linear Algebra Behind Large Language Models and Generative AI (21/08/2025)</a> - (LH 310/314)</li>
                           <li><a href="https://drive.google.com/file/d/1MkGZUF9IKAIYxBv7noBz9B3FnrgaPJc5/view?usp=sharing"
    >Lecture 08-10: The Physics behind the Data: Unveiling the Symmetries and Principal Axes of Transformations (1-5/09/2025)</a> - (LH 310/314)</li>
                          <li><a href="https://drive.google.com/file/d/1MkGZUF9IKAIYxBv7noBz9B3FnrgaPJc5/view?usp=sharing">Lecture 11-12: Introduction to Ordinary Differential Equations (8-10/9/2025)</a> - (LH 310/314)</li>
                           <li><a href="https://drive.google.com/file/d/1_PaitQ1drWka5PChDg8cy8fRMGuFMhA2/view?usp=sharing">Lecture 13-15:Impulse Response and Convolution(10-13/09/2025)</a> - (LH 310/314)</li>
                          <li><a href="https://drive.google.com/file/d/1pRwjpohrF_t-iULyS0VWk7NBpHGEKWqo/view?
    usp=sharing">Lecture S1: An Introduction to Python for Linear Algebra(17/09/2025)</a> - (LH 310/314)</li>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
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
                        <p style="font-weight: bold; font-family: sans-serif; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.1em; font-style: italic; font-family: sans-serif; margin-top: 0;">Material Informatics - 23CHY115, School of AI, Amrita Vishwa Vidyapeetham</p>
                        <div style="border: 1px solid #4D4D4D; padding: 15px; border-radius: 3px; margin: 20px 0; overflow-x: auto;">
                            <!-- Main Schedule Table (COPIED FROM 23MAT106 AND UPDATED) -->
                            <table style="width: 100%; border-collapse: collapse; text-align: center; font-family: sans-serif;">
                                <thead>
                                    <tr style="background-color: #F2F2F2;">
                                        <!-- Table Headers (thead) -->
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Time Slot</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Monday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Tuesday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Wednesday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Thursday</th>
                                        <th style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Row 1: 08:00 - 08:50 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">08:00 - 08:50</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 2: 08:50 - 09:40 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">08:50 - 09:40</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Fri A -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A</span>
                                        </td>
                                    </tr>
                                    <!-- Row 3: 09:40 - 10:30 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">09:40 - 10:30</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Mon B -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Wed A -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Thu B -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 4: 10:30 - 10:45 (Break) -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">10:30 - 10:45</td>
                                        <td colspan="5" style="background-color: #e0e0e0; font-style: italic; padding: 10px; border: 1px solid #ccc;">Break</td>
                                    </tr>
                                    <!-- Row 5: 10:45 - 11:35 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">10:45 - 11:35</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 6: 11:35 - 12:25 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">11:35 - 12:25</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Fri B -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B</span>
                                        </td>
                                    </tr>
                                    <!-- Row 7: 12:25 - 01:15 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">12:25 - 01:15</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Mon A -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 8: 01:15 - 02:05 (Lunch Break) -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">01:15 - 02:05</td>
                                        <td colspan="5" style="background-color: #e0e0e0; font-style: italic; padding: 10px; border: 1px solid #ccc;">Lunch Break</td>
                                    </tr>
                                    <!-- Row 9: 02:05 - 03:45 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">02:05 - 03:45</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Wed B (Lab) -->
                                            <span style="background-color: #FDEDEC; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section B (Lab)</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 10: 03:45 - 04:35 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">03:45 - 04:35</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;">
                                            <!-- Thu A (Lab) -->
                                            <span style="background-color: #D6EAF8; padding: 5px 10px; border-radius: 2px; display: inline-block;">Section A (Lab)</span>
                                        </td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                    <!-- Row 11: 04:35 - 06:15 -->
                                    <tr>
                                        <td style="font-weight: bold; padding: 10px; border: 1px solid #ccc;">04:35 - 06:15</td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                        <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- Legend (Key) -->
                            <div style="margin-top: 25px; text-align: center; font-family: sans-serif; line-height: 1.5;">
                                <div style="display: inline-block; margin-right: 30px; font-size: 0.9em;">
                                    <span style="background-color: #D6EAF8; display: inline-block; width: 25px; height: 10px; border-radius: 2px; margin-right: 5px; vertical-align: middle;"></span>
                                    Section A, LH 310
                                </div>
                                <div style="display: inline-block; font-size: 0.9em;">
                                    <span style="background-color: #FDEDEC; display: inline-block; width: 25px; height: 10px; border-radius: 2px; margin-right: 5px; vertical-align: middle;"></span>
                                    Section B, LH 314
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt>Unit 1</dt>
                            <dd>Introduction to material science – structure, properties, and process spaces - process-structure-property linkages – foundation of material informatics – introduction to molecular mechanism and force field – quantification of dynamics properties of polymers (monte carlo simulation, molecular dynamics simulation, normal mode analysis) – electronics structure of atoms (Gaussian, Gauss view, density functional theory)</dd>
                           
                            <dt>Unit 2</dt>
                            <dd>Quantification and screening of materials properties - property prediction and optimization using AI - materials design and discovery using AI – how to handle small, spared, and low-quality dataset using AI.</dd>

                            <dt>Unit 3</dt>
                            <dd>Materials failure and sustainability analysis – new material and inverse materials design concept – solve inverse design using AI – enhance speed, efficacy and cost-effectiveness of material using AI - basic concept of quantum computing in material informatics.</dd>

                            <dt>Unit 4</dt>
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
            <h2><span style="vertical-align: middle;">🧪</span> Lab Products</h2>
           
            <div class="section">
                <h3><span style="vertical-align: middle;">🤖</span> Aadri 2.0: Conversational AI for Customary Profiles</h3>
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
                 <h4>🔹 Mobile Demonstration <span style="vertical-align: middle;">📱</span></h4>
    <p>Evaluate the application's real-time conversational capabilities on the go, in the playground subpage. Read the: <a href="https://drive.google.com/file/d/1wTpjT0-jby8hUuf01bEL8L08Mx2ihmwp/view?usp=sharing" style="text-decoration: none; color: #007BFF; font-weight: bold; border-bottom: 2px solid #007BFF; padding-bottom: 2px;">White Paper</a></p>
            </div>

            <div class="section">
                <h3><span style="vertical-align: middle;">📝</span> AtoGRAD: OMR Solutions for Class-based Tests</h3>
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
                <h3><span style="vertical-align: middle;">🩺</span> MedScriptAI: Intelligent Medical Documentation</h3>
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
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Jaydeb Chakrabarti</strong><br>(Senior Professor, S N Bose National Centre for Basic Sciences, Kolkata, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Pinaki Chaudhuri</strong><br>(Professor, The Institute of Mathematical Sciences, Chennai, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Kirsten Martens</strong><br>(CNRS Researcher, University of Grenoble Alpes, Grenoble, FR)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Chandan Dasgupta</strong><br>(Honorary Professor, Indian Institute of Sciences, Bengaluru, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Madan Rao</strong><br>(Senior Professor, National Centre for Biological Sciences -TIFR, Bengaluru, IN)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Vinay Vaibhav</strong><br>(Post Doctoral Fellow, University of Goettingen, DE)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Raffaela Cabriolu</strong><br>(Associate Professor, Norwegian University of Science and Technology, NO)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>Tamoghna Kanti Das</strong><br>(Assistant Professor, WPA-NanoLSI - Kanazawa University, JP)</div></div>
                 <div class="collaborator-item"><div class="collaborator-info"><strong>AM Parvez Biswas</strong><br>(Solution Architect - Enterprise Systems, Data & Integration, Tata Consultancy Services, IN)</div></div>
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
            <h2><span style="vertical-align: middle;">🎮</span> Swarm Intelligence</h2>
            <div class="section">
                <p>Unleash the swarm. Take control of the artificial 'intelligence' and guide its trajectory toward the target in the simulation below. Acknowledgement: Harish Kumaar S, S. Sri Raghav Vatsan, Neelanjana. J A, Aryananda M,  M. Bijoy, Ghadige R, D. Jayesh, Prithve KC, A. Jagdish (Ongoing) </p>
                <div class="playground-container">
                    <iframe src="boids_lj_interactive.html" frameborder="0"></iframe>
                </div>
            </div>
        </div>


    <script>
        window.addEventListener('DOMContentLoaded', () => {
           
            // --- CONFIGURATION ---
            // Easily change the classroom passcode here
            const CLASSROOM_PASSCODE = '23MAT106'; // UPDATED PASSCODE

            // --- DOM Elements ---
            const navLinks = document.querySelectorAll('.nav-link');
            const pageContents = document.querySelectorAll('.page-content');
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
                    // Reset views: Show dashboard, hide details
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
            // Hide Dashboard
            document.getElementById('classroom-dashboard').style.display = 'none';
            // Hide all detail views
            const views = document.querySelectorAll('.course-detail-view');
            views.forEach(view => view.classList.remove('active'));
            // Show selected course
            const target = document.getElementById(courseId);
            if(target) target.classList.add('active');
            // Scroll to top of container
            document.querySelector('.container').scrollIntoView({behavior: 'smooth'});
        }

       function closeCourse() {
            // Hide all detail views
            const views = document.querySelectorAll('.course-detail-view');
            views.forEach(view => view.classList.remove('active'));
            // Show Dashboard
            const dashboard = document.getElementById('classroom-dashboard');
            if(dashboard) dashboard.style.display = 'block';
        }

        // --- Teaching Page Dashboard Logic (Separated from Classroom) ---
        function openTeachingSection(sectionId) {
            // Hide Dashboard
            document.getElementById('teaching-dashboard').style.display = 'none';
            // Hide all detail views
            const views = document.querySelectorAll('.teaching-detail-view');
            views.forEach(view => view.classList.remove('active'));
            // Show selected section
            const target = document.getElementById(sectionId);
            if(target) target.classList.add('active');
             // Scroll to top of container
             document.querySelector('.container').scrollIntoView({behavior: 'smooth'});
        }

        function closeTeachingSection() {
             // Hide all detail views
             const views = document.querySelectorAll('.teaching-detail-view');
             views.forEach(view => view.classList.remove('active'));
             // Show Dashboard
             const dashboard = document.getElementById('teaching-dashboard');
             if(dashboard) dashboard.style.display = 'block';
        }
    </script>

</body>
</html>
