import { Space, Table } from "antd";
import { useState } from "react";

const MapSample = () => {
  const [ids, setIds] = useState<Map<string, string>>(
    new Map<string, string>()
  );
  ids.set("apple", "りんご");
  ids.set("banana", "ばなな");
  ids.set("strawberry", "いちご");

  for (const [key, value] of ids) {
    console.log(key, value);
  }

  return (
    <>
      <h1>マップサンプル</h1>
      <div>
        <Space>
          <div>{ids.get("apple")}</div>
        </Space>
      </div>
    </>
  );
};

export default MapSample;
