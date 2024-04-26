import { useState } from "react";

const Searchbar = () => {
  const [tags, setTags] = useState([
    { id: 1, name: "Gwiazda", checked: false },
    { id: 2, name: "Sejm", checked: false },
    { id: 3, name: "Mariusz Kamiński", checked: false },
    { id: 4, name: "Na czasie", checked: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTagToggle = (id) => {
    const updatedTags = tags.map((tag) =>
      tag.id === id ? { ...tag, checked: !tag.checked } : tag
    );
    setTags(updatedTags);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Tags</h2>
      <input
        type="text"
        placeholder="Search tags..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredTags.map((tag) => (
          <li key={tag.id}>
            <label>
              <input
                type="checkbox"
                checked={tag.checked}
                onChange={() => handleTagToggle(tag.id)}
              />
              {tag.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
