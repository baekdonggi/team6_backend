# 에듀키트 디지털 트윈 모니터링 시스템 구축
> **실시간으로 PLC Edukit의 기기를 제어하는 동시에 데이터를 모니터링하는 기기 제어 대시보드 웹 서비스**

![ezgif-1-e7d022f932](https://user-images.githubusercontent.com/96156114/163900276-60600b71-2074-46ed-9e9f-f837bfad2d33.gif)

[![Npm version][npm-image]][npm-url]
[![Node version][node-image]][node-url]
[![Vue version][vue-image]][vue-url]

- 프로젝트 기간 2022-03-16 ~ 2022-04-28
- 상세 정보 [notion](https://www.notion.so/digsomething/Metaverse-Bootcamp-2-70e4f46bcd674874a09a962575a35200) 문서 참고

<br/>

## Contents
- [System Concept](#system-concept)
- [Architecture](#architecture)
- [Features](#features)
- [Installation](#installation)
- [Used](#used)
- [Members](#members)

<br/>

## System Concept

**PLC Edukit의 기기를 제어하고 Edukit의 데이터를 모니터링하는 기기 제어 대시보드 웹 서비스**

![unknown](https://user-images.githubusercontent.com/96156114/163985687-9f4e9483-8c27-4975-a4b6-0f6c5f70514c.png)

- 회원가입 및 로그인이 선행되어야 고객정보 로드/수정, 실시간 데이터 모니터링 및 Edukit 제어를 수행할 수 있다.
- 회원정보를 저장할 때 비밀번호는 암호화 되어야 한다.
- Edukit의 제어는 서버를 거치지 않고 MQTT를 통해 직접 연결된다.

<br/>

## Architecture

- 전체 서비스 흐름도

![unknown2](https://user-images.githubusercontent.com/96156114/164124784-9d9564eb-96f2-42ea-8376-33b12601e3f6.png)

<br/>

- 회원가입 및 로그인

![회원가입 및 로그인](https://user-images.githubusercontent.com/96156114/164626301-e1263d3d-62e5-4acd-9606-72727860a840.png)

<br/>

- 마이 페이지

![마이페이지](https://user-images.githubusercontent.com/96156114/164626312-a8d87f62-4910-4335-b381-32d532a917e4.png)

<br/>

- 담당자 관리

![담당자 관리](https://user-images.githubusercontent.com/96156114/164626308-0795b887-4460-4db9-83e4-d375d6afb072.png)

<br/>

- 작업 내역

![unknown3](https://user-images.githubusercontent.com/96156114/164372271-7c0969bb-9c90-407a-88b4-f2ec5a31e62b.png)

<br/>

## Features

- **불량품 확인 및 체크**
    - edukit의 실시간 데이터를 three.js로 웹에서 확인 가능
        - 웹에서 기기 클릭 후 실시간 비전 영상 확인 가능(비전 카메라 이용)
        - 3호기의 움직임 실시간 연동

- **실시간 데이터 확인 대시보드**
    - 실시간 데이터들을 three.js로 디지털 트윈된 3D 오브젝트와 함께 실시간 연동 그래프로 표시
    - edukit에서 지정한 조건에 따라(주사위 값/박스 색) 불량품으로 간주
    - 마이페이지는 사용자 정보 확인 및 수정이 가능하며 모달로 생성

- **담당자 관리**
    - 담당자 확인 가능
    - 관리자의 경우, 담당자 정보 수정 및 삭제 가능

- **작업 내역**
    - 작업 내역 등록/수정/삭제 가능

<br/>

## Installation

**front**

```sh
npm install // 설치
npm run serve
```

**back**

_설치 전 DB에 `team6` 직접 생성 필요_
+ nodemon 적용 실행
```sh
npm install // 설치
npm run dev
```
+ 단순 실행
```sh
npm install // 설치
npm start
```

<br/>

## Used

* [Node.js](https://nodejs.org/)
    * [Sequelize](https://sequelize.org/)
    * [Express.js](https://expressjs.com/)
    * [Postman](https://www.postman.com/)
* [Vue.js](https://v2.vuejs.org/)
    * [Chart.js](https://www.chartjs.org/)
    * [Three.js](https://threejs.org/)
* [PostgreSQL](https://www.postgresql.org/)
    * [Dbeaver](https://dbeaver.io/)
* [Mosquitto](https://mosquitto.org/)
    * [MQTTBox](https://chrome.google.com/webstore/detail/mqttbox/kaajoficamnjijhkeomgfljpicifbkaf?hl=ko)

<br/>

## Members

김채은
+ [Github](https://github.com/Dig-Something)
+ digsomething@gmail.com

<br/>

김희선
+ [Github](https://github.com/legavin1023)
+ wntkdnl1023@gmail.com

<br/>

백동기
+ [Github](https://github.com/baekdonggi)
+ [Notion](https://quark-hip-8f0.notion.site/4919f1058129454690042f24115be255)
+ bakdonggi@naver.com

<br/>

진아영
+ [Github](https://github.com/jay0v0)
+ [Blog](https://keepgoinglog.tistory.com/)
+ ayjindev@gmail.com

<br/>

[▲](#에듀키트-디지털-트윈-모니터링-시스템-구축)

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/badge/npm-v6.14.15-orange?style=flat-square
[npm-url]: https://www.npmjs.com/
[node-image]: https://img.shields.io/badge/node-v14.18.1-blue?style=flat-square
[node-url]: https://nodejs.org/
[vue-image]: https://img.shields.io/badge/vue-v2.6.14-brightgreen?style=flat-square
[vue-url]: https://v2.vuejs.org/
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
