import React from 'react';
import Tree from 'react-tree-graph';

let data = {
    name: 'Parent',
    children: [{
        name: 'Child One',
        children: [{
            name: 'Grandchild One'
          }, {
              name: 'Grandchild Two'
            }
        ]
    }, {
        name: 'Child Two'
    }]
};

class ManagementTree extends React.Component {
  render() {
    return (
      <Tree
    data={data}
    height={400}
    width={400}
  />
  );
  }
}

export default ManagementTree;
