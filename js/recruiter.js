AOS.init({
    once: true
  });

  function filterProfiles() {
    const selectedValue = document.querySelector('.dropdown').value;
    const profileCards = document.querySelectorAll('.profile-card');

    profileCards.forEach(card => {
      const title = card.querySelector('.profile-title').textContent;
      if (selectedValue === 'all' || title === selectedValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  const profiles = [
    {
      name: "Alex Johnson",
      title: "Frontend Developer",
      experience: "8 years",
      location: "San Francisco, CA",
      skills: ["JavaScript", "React", "UI/UX"],
      image: "assets/user1.jpg"
    },
    {
      name: "Maria Smith",
      title: "Backend Developer",
      experience: "5 years",
      location: "New York, NY",
      skills: ["Node.js", "Express", "MongoDB"],
      image: "assets/user2.jpg"
    },
    {
      name: "John Doe",
      title: "Full Stack Developer",
      experience: "6 years",
      location: "Austin, TX",
      skills: ["JavaScript", "React", "Node.js"],
      image: "assets/user3.jpg"
    },
    {
      name: "Emily Davis",
      title: "Design",
      experience: "4 years",
      location: "Seattle, WA",
      skills: ["Figma", "Sketch", "Adobe XD"],
      image: "assets/user4.jpg"
    },
    {
      name: "Michael Brown",
      title: "DevOps Engineer",
      experience: "7 years",
      location: "Chicago, IL",
      skills: ["Docker", "Kubernetes", "AWS"],
      image: "assets/user5.jpg"
    },
    {
      name: "Sophia Wilson",
      title: "Data Scientist",
      experience: "3 years",
      location: "Boston, MA",
      skills: ["Python", "Pandas", "Machine Learning"],
      image: "assets/user6.jpg"
    },
    {
      name: "James Taylor",
      title: "Mobile Developer",
      experience: "5 years",
      location: "Denver, CO",
      skills: ["React Native", "Swift", "Kotlin"],
      image: "assets/user7.jpg"
    },
    {
      name: "Olivia Martinez",
      title: "Systems Analyst",
      experience: "6 years",
      location: "Miami, FL",
      skills: ["SQL", "Java", "Agile"],
      image: "assets/user8.jpg"
    },
    {
      name: "Olivia Martinez",
      title: "Design",
      experience: "6 years",
      location: "Miami, FL",
      skills: ["XD", "Photo", "Figma"],
      image: "assets/user8.jpg"
    }
  ];

  function displayProfiles() {
    const profilesGrid = document.getElementById('profilesGrid');
    profiles.forEach(profile => {
      const card = document.createElement('div');
      card.className = 'profile-card';
      card.setAttribute('data-aos', 'zoom-in');
      card.setAttribute('data-aos-delay', '100');

      card.innerHTML = `
        <img class="profile-pic" src="${profile.image}" alt="Profile Picture">
        <div class="profile-name">${profile.name}</div>
        <div class="profile-title">${profile.title}</div>
        <div class="profile-experience">Experience: ${profile.experience}</div>
        <div class="profile-location">Location: ${profile.location}</div>
        <div class="profile-skill">
          ${profile.skills.map(skill => `<div class="profile-criteria">${skill}</div>`).join('')}
        </div>
      `;

      profilesGrid.appendChild(card);
    });
  }
  displayProfiles();