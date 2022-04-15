import React, { useEffect } from 'react';

const FormComp = () => {
  const [formData, setFormData] = React.useState({
    title: '',
    desc: '',
    link: '',
    topics: '',
    difficulty: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log('Form data updated:', formData);
  }, [formData]);

  return (
    <div class="form-container">
      <form>
        <div class="form-group">
          <label htmlFor="title">Enter Question Title:</label>
          <input type="text" id="title" name="title" required onChange={handleChange} value={formData.title} />
        </div>
        <div class="form-group">
          <label htmlFor="desc">Description:</label>
          <textarea
            rows="5"
            cols="40"
            type="text"
            id="desc"
            name="desc"
            required
            onChange={handleChange}
            value={formData.desc}
          />
        </div>
        <div class="form-group">
          <label htmlFor="link">Link:</label>
          <input type="text" id="link" name="link" required onChange={handleChange} value={formData.link} />
        </div>
        <div class="form-group">
          <label htmlFor="link">Topics:</label>
          <select onChange={handleChange} value={formData.topics} name="topics" id="topics">
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="nodejs">Node.js</option>
            <option value="express">Express</option>
          </select>
        </div>
        <div class="radio-options-container">
          <div class="radio-option">
            <input
              type="radio"
              id="hard"
              name="difficulty"
              value="hard"
              checked={formData.difficulty === 'hard'}
              onChange={handleChange}
            />
            <label htmlFor="hard">Hard</label>
          </div>
          <div class="radio-option">
            <input
              type="radio"
              id="easy"
              name="difficulty"
              value="easy"
              checked={formData.difficulty === 'easy'}
              onChange={handleChange}
            />
            <label htmlFor="easy">Easy</label>
          </div>
        </div>
        <div class="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
