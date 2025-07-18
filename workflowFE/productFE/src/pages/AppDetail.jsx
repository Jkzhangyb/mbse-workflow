import React from 'react';
import SimulationControl from '../components/SimulationControl';
import ResultPreview from '../components/ResultPreview';

function AppDetail() {
  return (
    <div>
      <h1>应用详情页</h1>
      <div>
        {/* 左栏：参数设置 */}
        <div>参数设置</div>
        {/* 中栏：目标设置 */}
        <div>目标设置</div>
        {/* 中部：仿真控制 */}
        <SimulationControl />
        {/* 下部：结果预览 */}
        <ResultPreview />
      </div>
    </div>
  );
}

export default AppDetail;
