import { configure as reactConfig } from '@storybook/react';
// import { INITIAL_VIEWPORTS }from '@storybook/addon-viewport';
// import { configure as viewportConfig } from '@storybook/addon-viewport';


function loadStories() {
  require('../src/stories/index');
}

reactConfig(loadStories, module);

// TODO: Uncomment when Storybook 4.0.0 fixes its FontAwesome/React problem
// const newViewports = {
// 	arrowDevice: {
// 		name: 'Arrow Device',
// 		styles: {
// 			width: '1280px',
// 			height: '800px',
// 		},
// 		type: 'tablet',
// 	},
// };
//
// viewportConfig({
// 	viewports: {
// 		...INITIAL_VIEWPORTS,
// 		...newViewports,
// 	},
// 	defaultViewport: 'arrowDevice'
// });
