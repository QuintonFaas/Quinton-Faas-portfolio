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

      const skillsContainer = document.querySelector(".skills-container");
      skillsData.forEach((skillCategory) => {
        const skillElement = document.createElement("div");
        skillElement.className = "skill-category";
        const skillImageUrl = encodeURI(skillCategory.image);
        skillElement.style.setProperty("--skill-image", `url("${skillImageUrl}")`);
        skillElement.dataset.skillImage = skillImageUrl;
        skillElement.innerHTML = `
                                <div class="skill-background" aria-hidden="true"></div>
                <h3>${skillCategory.category}</h3>
                <div class="skill-items">
                    ${skillCategory.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                </div>
            `;
                skillElement.querySelector(".skill-background").style.backgroundImage =
                    `linear-gradient(rgba(25, 35, 45, 0.18), rgba(25, 35, 45, 0.42)), url("${skillImageUrl}")`;
        skillsContainer.appendChild(skillElement);
      });

skillsData.forEach((skillCategory) => {
});
if (typeof refreshScrollAnimations === 'function') refreshScrollAnimations();