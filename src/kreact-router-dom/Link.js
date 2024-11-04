import React, { Component } from 'react';
import { useContext } from 'react';
import RouterContext from './RouterContext';

// function Link({to, children, ...rest}) {
//   // 3. 消费value contextType\ counsumer \ useContext
//   const context = useContext(RouterContext);

//   const handle = (e) => {
//     e.preventDefault();
//     context.history.push(to);
//   };

//   return (
//     <a href={to} onClick={handle} {...rest}>
//       {children}
//     </a>
//   );
// }
// export default Link;

class Link extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { location } = context;
          const { to, children, ...rest } = this.props;
          const handle = e => {
            e.preventDefault();
            context.history?.push(to);
          };
          // *match: children > component > render > null
          // * no match: children(function) > null
          return (
            <a href={to} onClick={handle} {...rest}>
              {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Link;
