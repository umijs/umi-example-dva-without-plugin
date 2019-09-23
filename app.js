import dva from 'dva';
import React from 'react';

const app = dva();
app.model(require('./models/count').default);

function Container(props) {
  app.router(() => props.children);
  return app.start()();
}

export function rootContainer(container) {
  return React.createElement(Container, null, container);
}
