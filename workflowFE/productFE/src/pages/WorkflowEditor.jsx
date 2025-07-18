import React from 'react';
import WorkflowCanvas from '../components/WorkflowCanvas';
import NodeConfigPanel from '../components/NodeConfigPanel';

function WorkflowEditor() {
  return (
    <div>
      <h1>工作流编辑页</h1>
      <WorkflowCanvas />
      <NodeConfigPanel />
    </div>
  );
}

export default WorkflowEditor;
