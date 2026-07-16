import { useState } from 'react'

function App() {
  const [skills, setSkills] = useState([
    { name: 'React & JavaScript', completed: true },
    { name: 'Docker', completed: false },
    { name: 'GitHub Actions (CI/CD)', completed: false },
    { name: 'TypeScript Basics', completed: false }
  ])

  const toggleSkill = (index) => {
    const updated = [...skills]
    updated[index].completed = !updated[index].completed
    setSkills(updated)
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1>🛠️ Tech Stack Checklist</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ margin: '15px 0', fontSize: '18px' }}>
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="checkbox" 
                checked={skill.completed} 
                onChange={() => toggleSkill(index)}
                style={{ width: '20px', height: '20px' }}
              />
              <span style={{ textDecoration: skill.completed ? 'line-through' : 'none', color: skill.completed ? '#888' : '#000' }}>
                {skill.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App