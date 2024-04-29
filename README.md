# React.js CMS component

React.js CMS component written using React.js, TypeScript, Tailwind CSS.

Used technlogies:

- React.js
- TypeScript
- Tailwind CSS

There are clickable all of 5 sidebar modals. 4 of them are filled with sample texts but all of them has clickable elements like close icon.

The full function of the task is included in the `SidebarTagsModal.tsx` component.

You can use the search input to find the tags you are interested in by typing a particular letter, these tags will be displayed according to the characters you type, after selecting the tags. You click the save button to save the tags, then you will get the information depending on the number of selected tags.

The component has been styled using Tailwind CSS while maintaining RWD principles, so it displays well on desktop as well as mobile devices.

Sample tags were created in the json file located in `/src/data/tags.json`. You can see all of them below:

```json
[
  { "id": 1, "name": "Gwiazda", "checked": false },
  { "id": 2, "name": "Sejm", "checked": false },
  { "id": 3, "name": "Jarosław Kaczyński", "checked": false },
  { "id": 4, "name": "PiS", "checked": false },
  { "id": 5, "name": "Wybory", "checked": false },
  { "id": 6, "name": "Wakacje", "checked": false },
  { "id": 7, "name": "Majówka", "checked": false },
  { "id": 8, "name": "PO", "checked": false },
  { "id": 9, "name": "Wyjazd", "checked": false },
  { "id": 10, "name": "Kodowanie", "checked": false },
  { "id": 11, "name": "Wybory prezydenckie", "checked": false },
  { "id": 12, "name": "Wybory parlamentarne", "checked": false }
]
```

Let's move on to discuss the main functionality.
The `<SidebarTagsModal />` has been divided into 3 minor components that make up the full functionality.

- `<SidebarTagsModal />` - modal creates a main structure containing a modal template with a title and a hook to hide the modal & include main tag component named TagsComponent
- `<TagsComponent />` - component contains the other 2 components:

  - `<TagsOptions />` - the component responsible for 3 functions such as: CMS AI (currently unavailable), text analysis & the most popular tags
  - `<TagsQuality />` - component, which is used to evaluate the number of selected tags according to a 5-degree scale. More info about the scale in code snippet below:

  ```typescript
  if (checkedCount === 1) {
    qualityText = "Źle";
    qualityStatusColor = "text-red-700";
    qualityProgressBarColor = "bg-red-700";
    qualityStatusText =
      "Zbyt mało tagów. Dodaj jeszcze 3 aby poprawić widoczność artykułu";
  } else if (checkedCount === 2) {
    qualityText = "Słabo";
    qualityStatusColor = "text-red-400";
    qualityProgressBarColor = "bg-red-400";
    qualityStatusText =
      "Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu";
  } else if (checkedCount === 3) {
    qualityText = "Ok";
    qualityStatusColor = "text-yellow-400";
    qualityProgressBarColor = "bg-yellow-400";
    qualityStatusText =
      "Jest ok. Jak dodasz więcej tagów to widoczność artykułu się poprawi";
  } else if (checkedCount === 4) {
    qualityText = "Dobrze";
    qualityStatusColor = "text-green-600";
    qualityProgressBarColor = "bg-green-600";
    qualityStatusText =
      "Jest dobrze. Jak dodasz 1 tag więcej to widoczność artykułu znacznie się poprawi";
  } else if (checkedCount >= 5) {
    qualityText = "Bardzo Dobrze";
    qualityStatusColor = "text-lime-500";
    qualityProgressBarColor = "bg-lime-500";
    qualityStatusText = "Jest bardzo dobrze. O to chodziło";
  } else {
    qualityText = "Wybierz Tagi";
    qualityStatusColor = "text-gray-600";
    qualityProgressBarColor = "bg-gray-600";
    qualityStatusText = "";
  }
  ```

## How to run locally?

Make sure you are in the project folder `react-cms-component`, if no then go into the project folder

```bash
cd './react-cms-component'
```

Type:

```bash
npm i
npm run dev
```

and open

```bash
http://localhost:5173/
```

## Live link

https://goldipl.github.io/react-cms-component/

## Project preview in `.gif` file - desktop version

<img src="./src/assets/gif/tags-component-desktop.gif">

## Project preview in `.gif` file - mobile version

<img src="./src/assets/gif/tags-component-mobile.gif" width="300">

### Target functionality to be achieved:

![screenshot](./src/assets/screenshots/component.jpg)

## Configuration info - Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
