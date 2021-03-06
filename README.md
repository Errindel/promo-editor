# promo-photo-editor

## How to run

To run app in developer mode (only this one was prepared for this task) run command:

```javascript
  yarn && yarn start
```

Application will be available at `http://localhost:3000`

## Features

### Background area (2h)

- User can select from 4 backgrounds fetched on app init
- Click on background thumbnail - sets image as background for editor area
- Click on “Delete Background” - cleans background
- User can search for background by given keywords

### Logo area (4h + 1h bug fix)

- User is able to add logo via drag’n’drop. On drop to the editor area create 100px x
  100px logo
- User can add multiple logos.
- User can reposition logo inside editor using drag’n’drop after logo was added.
- Right click on logo shows contex menu with “delete” button.
- Click on “delete” button removes logo from editor.

### Text area (3h + 1h bug fix)

- User is able to add text to the editor.
- User is able to provide his own text via text Input.
- User can select one of suggested font variants
  - Arial
  - Times New Roman
  - Open Sans
- Click on “add text” adds “black 20px” text to the center of the editor
- User can reposition text inside editor using drag and drop.
- User can delete added text from editor (logic and ui is the same as for Logo element)
- User can set color for the text
- User can set bold / underline / italic on text
- Download as image button

### Save / Load (1h)

- Automatically saves after every change.
- Automatically loads last state after window refresh.
- Undo/redo possibility of last 5 changes

### Styles (1h)

## Architecture solutions

### HoR

Higher order reducers were used to provide functionality of undo / redo and local storage save/read.
This solution allow developer to export such wrapper as npm packages and share the logic between teams.
It is also straightforward to read and removes the burden of calling some kind of local storage module in every reducer.
Such solution allows also enhance of single reducer with given functionality.
If we will write test it will also minimise the complexity of test if we abstract some logic to HoR.

### Fetch

For fetching images I used browser Fetch API that have all what is needed to perform such a simple task.
For bigger application I would use RxJS (redux-observable) which will allow e.g. cancellation of request or multi-action dispach.

## Pain points during development
In general all pain points were strongly connected with not knowing react-dnd package specifics. In detail:
1. Positioning of elements using react-dnd monitors when drop element is dragged from outside of target.
2. Positioning of texts in the center of target.
