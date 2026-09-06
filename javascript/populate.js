 // Populate experience timeline
      const experienceTimeline = document.querySelector(
        "#experience .timeline",
      );
      experienceData.forEach((exp, index) => {
        const timelineItem = document.createElement("div");
        timelineItem.className = `timeline-item ${index % 2 === 0 ? "left" : "right"}`;
        timelineItem.innerHTML = `
                <div class="timeline-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="timeline-content">
                    <div class="timeline-date">${exp.date}</div>
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p>${exp.description}</p>
                </div>
            `;
        experienceTimeline.appendChild(timelineItem);
      });

      // Populate education timeline
      const educationTimeline = document.querySelector("#education .timeline");
      educationData.forEach((edu, index) => {
        const timelineItem = document.createElement("div");
        timelineItem.className = `timeline-item ${index % 2 === 0 ? "left" : "right"}`;
        timelineItem.innerHTML = `
                <div class="timeline-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="timeline-content">
                    <div class="timeline-date">${edu.date}</div>
                    <h3>${edu.title}</h3>
                    <h4>${edu.institution}</h4>
                    ${edu.note ? `<p><strong>${edu.note}</strong></p>` : ""}
                </div>
            `;
        educationTimeline.appendChild(timelineItem);
      });

      // Populate skills
      const skillsContainer = document.querySelector(".skills-container");
      skillsData.forEach((skillCategory) => {
        const skillElement = document.createElement("div");
        skillElement.className = "skill-category";
        skillElement.style.setProperty("--skill-image", `url("${skillCategory.image}")`);
        skillElement.innerHTML = `
                <h3>${skillCategory.category}</h3>
                <div class="skill-items">
                    ${skillCategory.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                </div>
            `;
        skillsContainer.appendChild(skillElement);
      });

      // After populating skills, refresh animations
skillsData.forEach((skillCategory) => {
    // ... your existing code
});
// Add this line:
if (typeof refreshScrollAnimations === 'function') refreshScrollAnimations();