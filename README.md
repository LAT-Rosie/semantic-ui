# Semantic-UI Library for Circura
## Prerequisites
1. Install Yarn: `npm install -g yarn`
1. Install Gulp: `npm install -g gulp`

## Getting Started
1. In the repo's root directory, run install: `yarn install`
1. Access the semantic directory: `cd /semantic`

## Making Changes to Components
All changes will be made within the `/semantic/src/site` directories, which is where the site theme adjustments can 
be made. [Read more about Semantic-UI theme inheritance.](https://semantic-ui.com/usage/theming.html#theme-inheritance) 

### Variables
A `.variables` file specifies variables that should be adjusted. The `.variables` file only needs to include variables which differ from the defaults.

### Overrides
An `.overrides` file specifies additional CSS rules to be added to the site's theme definition. These files also have access to all inherited variables for a component.

### Build
After making changes to the site's variables and overrides files then you need to rebuild the dist folder.
1. Access the root of the semantic directory: `/semantic`
1. Rebuild the dist folder: `gulp build`
1. Add, commit, and push changes: `git add . && git commit -m "New build" && git push`