#### How to setup this project

Pull the project to your local machine
run `npm install` and after the installation run `npm run start`

#### Design decisions

Although Ant Design Components were recommended, I had to overwrite some styles to fit the original design. Some elements that were not in the design were introduced (listed below and why). The major difference between the shared design and the project (apart from introduced element) is the create button which was made to appear on the bottom right corner on mobile.

- Edit Input's Close Button: to allow users decide on not editing and allowing them move on to other tasks
- Create Project Button (mobile): Button appears on bottom right corner in order to prevent users from extending fingers to create project
- Bulk Delete Project's Checkbox: This checkbox displays on hover but will also display on click on mobile.

#### Architecture Decisions

The projects are the only data stored in Redux. Every other component manages their state on a need to basis. All states are either implicitly typed or explicitly typed.

#### List of features completed

- [x] Add new project
- [x] Rename project
- [x] Delete project

#### extra features implemented

- [x] Responsive and mobile friendly
- [x] Drag and drop project
- [x] Use a state management library such as Redux
- [x] Bulk delete projects

#### Things to note

- the created projects are not persisted
- if the testing of the site is done on devtools, when the selected UI is mobile, some of the click events for the projects do not work. The issue is with the drag & drop package used but it works great on actual mobile phones.

#### What can be improved?

- Writing tests
- Implementing Pagination
- introducing a sorting feature to sort by date
- Introduce clickaway to projects to allow users hide checkbox when they click on project on mobile

---

the url for the project can be found [here](https://main--funny-kitsune-d273d2.netlify.app/)
