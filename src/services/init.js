import { attachReduxDevTools } from '@effector/redux-devtools-adapter';

import './commonInit';

attachReduxDevTools({
  stateTab: true
});
