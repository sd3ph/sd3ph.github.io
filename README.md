<!DOCTYPE html>
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
        .site-title-header { /* Renamed from navbar for clarity */
            display: flex;
            align-items: center;
            padding: 15px 30px;
            background-color: var(--nav-hover-bg);
            border-bottom: 3px solid var(--accent-color);
            box-sizing: border-box;
            width: 100%;
            height: 70px; /* Fixed height for the banner */
            justify-content: space-between; /* Distribute space */
        }

        .site-title-header .title {
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
                <img src="https://source.unsplash.com/150x150/?engineer,developer" alt="Profile Picture" class="profile-picture">
                <div class="header-text">
                    <h1>Suman Dutta</h1>
                    <p>Researcher | Intelligent Living & Artificial Systems</p>
                </div>
            </div>

            <h2>About Me</h2>
            <p>
                I am an <strong>Active</strong> researcher in the field of <strong>Intelligent Living and Artificial Systems</strong>, with a specialization in <strong>Physics of Complex Fluids</strong>. Driven by <strong>Creative Research</strong>, I focus on the intricate complex dynamics of <strong>Soft, Glassy, Active & Adaptable Matter</strong>, combining <strong>Statistical Physics</strong> and <strong>Machine Intelligence</strong>.
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
                        <strong>Post Doctor
