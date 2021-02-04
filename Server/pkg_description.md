# node module, 이거 왜 썼어??

> 모듈 사용 목적 기록하기!

## dev dependencies(개발의존성)
| module | description |
|:------------------:|---------------------|
| **babel** |- **JavaScript transpiler**<br>- Node.js는 아직 CommonJS 기반 모듈 시스템을 사용하기 때문에 ES6의 `import`나 `export`와 같은 키워드는 디폴트로 지원되지 않는다.<br>- 이러한 문제를 해결하고 Node.js 런타임이 실행가능한 형태로 변환해주는 작업(transpile)을 담당한다.|
| @babel/node |- babel 커맨드는 transpile을 담당한다면 babel-node는 transpile 후 실행까지 할 수 있다.<br>- babel은 애플리케이션이 실행 시에 필요한 것이 아니라 **빌드 시에만 필요**하기 때문에 개발의존성으로 설치한다.|
| @babel/core | - babel의 코어 패키지<br>- babel을 사용하기위해 필수적으로 설치해야한다.|
| nodemon |- 파일 변경사항이 생겼을 때 자동으로 노드 애플리케이션을 재시작하는 도구이다.<br>- nodemon를 사용하려면 command line에서 node 명령어를 nodemon으로 변경하기만 하면 된다. 별도의 작업이 필요 없음!|

## dependencies(의존성)
| module | description |
|:------------------:|---------------------|
| express.js |- Node.js 기반 웹 애플리케이션 제작을 훨씬 수월하게 한다.|
| dotenv |- 환경변수들을 모아 파일에 저장하고 관리할 수 있게 하는 모듈|