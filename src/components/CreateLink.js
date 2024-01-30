import React, { useState } from 'react'

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(event) => setFormState({
              ...formState,
              description: event.target.value
            })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(event) => setFormState({
              ...formState,
              url: event.target.value
            })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink();