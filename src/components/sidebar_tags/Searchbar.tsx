import { useState } from "react";

interface Tag {
  id: number;
  name: string;
  checked: boolean;
}

const TagsComponent: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([
    { id: 1, name: "Gwiazda", checked: false },
    { id: 2, name: "Sejm", checked: false },
    { id: 3, name: "Jarosław Kaczyński", checked: false },
    { id: 4, name: "PiS", checked: false },
    { id: 5, name: "Wybory", checked: false },
  ]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleTagToggle = (id: number): void => {
    const updatedTags = tags.map((tag) =>
      tag.id === id ? { ...tag, checked: !tag.checked } : tag
    );
    setTags(updatedTags);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  // Filter tags based on the search term
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

export default TagsComponent;
