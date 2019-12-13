所有的操作来源[Tourist](https://zh-hans.reactjs.org/tutorial/tutorial.html)

1. 创建一个react的工程 npx create-react-app my-app

```
 yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  yarn start
```

> yarn start 运行多次以后会有ENOSPC的问题，Run the below command to avoid ENOSPC:
> echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

2. component之间信息的交换
  - 每个square有自己的value
  - Board保存整个棋盘的状态

