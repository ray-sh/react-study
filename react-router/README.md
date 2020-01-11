This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
### 安装依赖的 npm 包

npm install -s flux react-router-dom bootstrap

### Setup api mock server

- API mock server 是用 json-server 来实现，他和 index 的 host server 不再同一个 server

```
start script

    "start": "run-p start:dev start:api",  //run-p表示并行运行两个server
    "start:dev": "cross-env REACT_APP_API_URL=http://localhost:3001 react-scripts start",//cross-env用来传递参数
    "prestart:api": "node ./tools/createMockDb.js",//当调用start:api，prestart:api会自动执行
    "start:api": "node ./tools/apiServer.js",
```

### Router 的 key components

- Router，app entry 入口
- Route，load component for url
- Link, Anchors, no request is send to server

```
 NavLink可以使用activeLink来区分active状态，用exact属性来作精确匹配
 const activeLink = { color: "red" };
  return (
    <nav>
      <NavLink activeStyle={activeLink} to="/" exact>
        Home
      </NavLink>


```

- 使用 switch/Route 来设置路由规则

```
   switch会顺序匹配，一旦match会立刻返回，如果没有指定path，表示会匹配任何path
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
```

- Redirect
  通过redirect，可以把老的url重新定向到新的url
