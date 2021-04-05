# Softwaredam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
It uses [Materialize](https://materializecss.com).

## DevOps

### Develop and test local
- `npm start` or `ng serve`
- browse `http://localhost:4200`

### Package
- Upgrade `buildTimestamp` in `src/environments/environment.prod.ts`. #12
- Run `ng build --prod --base-href "https://softwaredam.com"` to build the project.
  - The build artifacts will be stored in the `docs/` directory, becuase github pages serve from this folder.
  - See also project settings Github > this project > Settings > Options > GitHub Pages
- Push (PR/MR)
- Visual tests on the deployed website.
