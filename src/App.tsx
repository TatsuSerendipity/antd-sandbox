import React from 'react';
import './App.css';
import { Space } from 'antd';
import Button from './parts/Button';

function App() {
  return (
    <div className="App">
      <Space wrap>
        <Button type='primary' word='button-primary'/>
      </Space>
    </div>
  );
}

export default App;
