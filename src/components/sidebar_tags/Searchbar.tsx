import { useState } from "react";
import data from "./../../data/tags.json";
import searchIcon from "./../../assets/icons/sidebar_modal/search.svg";

interface Tag {
  id: number;
  name: string;
  checked: boolean;
}

const TagsComponent: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>(data);
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
      <div className="flex flex-row items-center justify-start pt-0 p-2">
        <img
          className="me-2"
          src={searchIcon}
          alt="search icon"
          width={24}
          height={24}
        />
        <input
          className="focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 rounded-md p-2 w-full font-medium"
          type="text"
          placeholder="Wyszukaj grupę lub tag"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ul className=" overflow-y-auto max-h-80">
        {filteredTags.map((tag) => (
          <li key={tag.id} className="flex items-center mb-1 ">
            <label className="flex w-full items-center text-sm rounded-md font-medium text-gray-900 dark:text-gray-300 select-none h-9 px-2 py-4 hover:bg-[#F4F4F5]">
              <input
                type="checkbox"
                checked={tag.checked}
                onChange={() => handleTagToggle(tag.id)}
                className="w-5 h-5 me-2 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
