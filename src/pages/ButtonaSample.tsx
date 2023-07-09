import { Button, Space } from "antd";

const ButtonSample = () => {
  return (
    <>
      <h1>ボタンサンプル</h1>
      <div>
        <Space>
          <Button type="primary">BasicButton</Button>
          <Button type="primary" loading>
            LoadingButton
          </Button>
        </Space>
      </div>
    </>
  );
};

export default ButtonSample;
