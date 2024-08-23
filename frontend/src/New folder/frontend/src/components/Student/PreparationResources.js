import React from 'react';
import '../../assets/CSS/Student/PreparationResources.css';

function PreparationResources() {
  const resources = [
    { name: 'Study Materials', link: '#study-materials' },
    { name: 'Past Papers', link: '#past-papers' },
    { name: 'Exam Guidelines', link: '#exam-guidelines' },
  ];

  return (
    <div className="preparation-resources">
      <h2>Preparation Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className="resource-item">
            <a href={resource.link}>{resource.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreparationResources;
