import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        omnis.
      </p>
      <p>
        exact は、パスの部分が他のルートと同じとき、厳密なパス認識をさせる属性
        <br />
        <b>localhost:3000/about</b> という URL の場合、
        <ul>
          <li>path="/"</li>
          <li>path="/about"</li>
        </ul>
        の２つのルートに該当してしまうので、厳密なルーティングをさせたい場合、
        <b>exact</b>の属性を指定する
      </p>
      <p>複数のルーティングに該当する場合、どちらもレンダーされてしまう。</p>
    </div>
  );
};

export default Home;
