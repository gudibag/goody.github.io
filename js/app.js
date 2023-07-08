// Fetch and display projects from GitHub API
fetch('https://api.github.com/users/your-username/repos')
  .then(response => response.json())
  .then(data => {
    const projectList = document.getElementById('project-list');
    data.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');

      const image = document.createElement('img');
      image.src = 'path-to-your-project-image';
      projectItem.appendChild(image);

      const projectInfo = document.createElement('div');
      const projectName = document.createElement('h3');
      projectName.innerText = project.name;
      projectInfo.appendChild(projectName);

      const projectDescription = document.createElement('p');
      projectDescription.innerText = project.description;
      projectInfo.appendChild(projectDescription);

      projectItem.appendChild(projectInfo);

      projectList.appendChild(projectItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
