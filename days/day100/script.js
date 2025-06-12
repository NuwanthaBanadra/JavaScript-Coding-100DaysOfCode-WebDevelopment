function updatePreview() {
    const name = document.getElementById('name').value || "Your Name";
    const bio = document.getElementById('bio').value || "Your short bio goes here.";
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const github = document.getElementById('github').value || "#";

    document.getElementById('previewName').innerText = name;
    document.getElementById('previewBio').innerText = bio;

    const skillList = document.getElementById('previewSkills');
    skillList.innerHTML = "";
    skills.forEach(skill => {
        if (skill) {
            const li = document.createElement('li');
            li.innerText = skill;
            skillList.appendChild(li);
        }
    });

    const githubLink = document.getElementById('previewGithub');
    githubLink.href = github;
    githubLink.innerText = "GitHub";
}

function downloadHTML() {
    const name = document.getElementById('previewName').innerText;
    const bio = document.getElementById('previewBio').innerText;
    const skills = Array.from(document.getElementById('previewSkills').children).map(li => li.innerText);
    const github = document.getElementById('previewGithub').href;

    const html = `
    <html>
    <head>
      <title>${name}'s Portfolio</title>
      <style>
        body { font-family: sans-serif; padding: 20px; background: #f5f5f5; }
        h1 { color: #333; }
        ul { list-style: square; }
      </style>
    </head>
    <body>
      <h1>${name}</h1>
      <p>${bio}</p>
      <h3>Skills</h3>
      <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
      <p><a href="${github}">GitHub</a></p>
    </body>
    </html>
  `;

    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "portfolio.html";
    a.click();
}
