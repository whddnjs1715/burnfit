| 이름 | 김종원 |

<br>

## ✨ 프로젝트 실행 방법

```bash
# install dependencies
 $ yarn install

# serve with hot reload at localhost:19006
 $ expo start
```

## ✨ Coding Convention

```
[feat] : 새로운 기능 추가
[fix] : 버그 수정
[docs] : 문서 추가 및 변경
[style] : 코드 포맷팅, 로직의 변화는 없이 띄어쓰기나 탭 문자 등의 사소한 변화
[refactor] : 리팩토링
[test] : 테스트 코드 수정 및 변경
[chore] : 그 외 사소한 변경
```

## 📝 폴더구조

```bash
src
 ┃
 ┣ components
 ┃  ┣ body
 ┃  ┃  ┗ BasicBody.js
 ┃  ┣ calendar
 ┃  ┃  ┗ CalendarApp.js
 ┣ navigations
 ┃  ┣ MyTabs.js
 ┃  ┗ TabComponent.js
 ┗ App.js

```

## 📝 실행 영상

<video src="https://user-images.githubusercontent.com/73818206/184046006-bc2fe2c4-4a31-4e31-88ec-520f3ec0065f.mov" width="50%" height="100%"/>

## ✨ 개선할 점

```
- Calendar Tab에서 처음에 오늘이 아닌 다른 날짜를 클릭하면 오늘 날짜도 같이 선택 됩니다.
그 이후에는 선택된 날짜만 선택됩니다.
그 점을 개선해야 할것 같습니다.
- react-native-reanimated, react-native-gesture-handler 라이브러리를 이용해서 제스처 이벤트가 발생하면 캘린더의 형태가 월 캘린더에서 주 캘린더로, 주 캘린더에서 다시 월 캘린더로 변환 가능하도록 구현해보고 싶다.
시간이 조금더 들여서 월, 주 캘린더 변경 이벤트를 적용하고 싶습니다.
- CalendarApp.js에서 코드를 너무 복잡하게 작성한 것 같다.
이 부분이 가독성 증가를 위해 컴포넌트를 분리하여 관리해아 할 것 같습니다.
- JSX가 필수는 아니지만 자바스크립트 내에서 직관적으로 UI 관련 작업이 가능하고, 개발에 도움을 주는 에러 및 경고 메시지를 표시할 수 있게 해 주는 장점이 있는 만큼
JS가 아닌 JSX로 개발하는 것도 좋을 것 같습니다.
- 타입스크립트로 코드를 작성하여 타입으로 인해 에러가 발생하는 것도 방지하는 방법도 좋을 것 같습니다.





```
