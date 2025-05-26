Rub4ik's Professional Web Portfolio
Welcome to the official GitHub repository for Rub4ik's professional web portfolio, hosted on GitHub Pages at https://Rub4ik.github.io/. This portfolio showcases my skills as a Full Stack Developer, with a focus on Python and JavaScript, and highlights key projects including AI-powered Discord and Telegram bots.

✨ Features
Clean & Modern Design: A professional and minimalist aesthetic built with Tailwind CSS.

Fully Responsive: Optimized for viewing on desktops, tablets, and mobile devices.

Smooth Scrolling: Enhanced user experience with smooth navigation between sections.

Scroll-Reveal Animations: Engaging visual effects as content comes into view, powered by AOS.

Lazy Loading Images: Improves performance by loading images only when they are needed.

SEO Optimized: Includes essential meta tags for better search engine visibility and social media sharing.

Professional Icons: Utilizes Font Awesome for visually appealing skill and contact icons.

"Scroll to Top" Button: Convenient navigation for longer pages.

🚀 Technologies Used
HTML5: For semantic structure.

CSS3: For styling, primarily using Tailwind CSS.

JavaScript (ES6+): For interactivity and dynamic elements.

AOS (Animate On Scroll): For scroll-reveal animations.

Font Awesome: For scalable vector icons.

💻 Local Setup & Development
To get a local copy of this portfolio up and running, follow these simple steps.

Prerequisites
You will need Git installed on your machine.

Installation
Clone the repository:

git clone https://github.com/Rub4ik/Rub4ik.github.io.git

Navigate into the project directory:

cd Rub4ik.github.io

Running Locally
This is a static website, so you don't need a complex server setup. You can open the index.html file directly in your browser.

However, for a better development experience (especially if you plan to add more complex features or use a local Tailwind build process), it's recommended to use a simple local server.

Option 1: Using VS Code Live Server Extension
If you use VS Code, install the "Live Server" extension by Ritwick Dey. Then, right-click on index.html and select "Open with Live Server."

Option 2: Using Python's Simple HTTP Server
If you have Python installed, you can run a simple HTTP server from your terminal:

python -m http.server
# Or for Python 2:
# python -m SimpleHTTPServer

Then, open your browser and go to http://localhost:8000 (or the port indicated by the server).

🎨 Customization
This portfolio is designed to be easily customizable to fit your personal brand and content.

Update Personal Information:

Open index.html.

Change the text in the Hero and About Me sections to reflect your professional story, skills, and aspirations.

Update the mailto: link and social media links in the Contact section with your actual details.

Replace your.email@example.com and linkedin.com/in/yourprofile placeholders.

Replace Images & Resume:

Place your professional headshot as images/profile.jpg.

Create compelling screenshots/thumbnails for your projects (e.g., images/discord-ai-bot-thumb.png, images/telegram-ai-bot-thumb.png, images/py-tg-bot-template-thumb.png) and place them in the images/ folder. Ensure consistent aspect ratios for a clean grid.

Add a suitable image for social media sharing as images/social-share-image.jpg (recommended: 1200x630px).

Place your updated CV/Resume as resume/rub4ik-resume.pdf.

Update any image paths in index.html if your filenames differ.

Modify Skills:

In the Skills section of index.html, update the <li> items under each category (Frontend, Backend, Tools & Other) to accurately list your proficiencies.

Add/Remove Projects:

In the Projects section of index.html, you can easily add new projects by copying an existing <div class="bg-white rounded-xl ..."> block and updating its content (image, title, description, technologies, and links).

Remove any project blocks you don't need.

Adjust Styling:

Most styling is handled by Tailwind CSS classes directly in index.html. You can modify these classes to change colors, spacing, typography, etc.

For custom CSS or overrides, edit css/style.css.

To change the primary color scheme, look for Tailwind classes like bg-blue-700, to-blue-900, text-yellow-300, etc., and replace them with your desired color palette.

🚀 Deployment (GitHub Pages)
This repository is set up for automatic deployment via GitHub Pages.

Repository Naming: Ensure your repository is named exactly [YOUR_USERNAME].github.io (e.g., Rub4ik.github.io).

Push to main (or master): Any changes pushed to the main (or master) branch will automatically trigger a GitHub Pages build.

Settings: Verify in your repository's Settings > Pages section that the source is set to "Deploy from a branch" and the branch is main (or master) from the / (root) folder.

Your portfolio will typically be live at https://[YOUR_USERNAME].github.io/ within a few minutes after a successful push.

🤝 Contributing
While this is a personal portfolio, feel free to fork the repository and adapt it for your own use. If you find any bugs or have suggestions for general improvements that could benefit others, please open an issue or submit a pull request!

📄 License
This project is licensed under the MIT License - see the LICENSE file for details (you might need to create a LICENSE file in your repository if you don't have one).

Made with ❤️ and Code by Rub4ik
