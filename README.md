# 보험닥터 컨텐츠
[![Build Status](https://github.com/aijinet/doctor-contents/workflows/ban/badge.svg)](https://github.com/aijinet/doctor-contents/actions?query=workflow%3Aban)

보험닥터의 컨텐츠를 저장해두는 저장소입니다.

이 저장소에 있는 보험 컨텐츠를 퍼가실 때에는 본문의 하단 부에 반드시 다음 출처를 표기하셔야 합니다.

> 이 글은 **보험닥터** 에서 발췌되었습니다.
>  - 광고문구
>  - App store link




## Installation
```bash
# Get source from repository
git clone https://github.com/aijinet/doctor-contents.git
cd doctor-contents

# Install dependencies
npm install

# If you installed VSCode
code .
```




## Usage
### Initial
1. `contents` 폴더 안에 md 파일을 저장할 구조에 맞게 폴더를 생성
2. 생성한 폴더 내에 md 파일을 작성 및 저장
3. `git remote add origin https://github.com/aijinet/doctor-contents.git`
4. `git add .`
5. `git commit m <your message>`
6. `git push --set-upstream origin <your branch>`

### Normal
1. `contents` 폴더 안에 md 파일을 저장할 구조에 맞게 폴더를 생성
2. 생성한 폴더 내에 md 파일을 작성 및 저장
3. `git add .`
4. `git commit m <your message>`
5. `git push`

### 금지어 검사
[![Build Status](https://github.com/aijinet/doctor-contents/workflows/ban/badge.svg)](https://github.com/aijinet/doctor-contents/actions?query=workflow%3Aban)

컨텐츠를 변경하고 이를 `commit` 하거든, 자동으로 금지어 검사가 시작됩니다. 

커밋이 완료된 후, 위 뱃지를 눌러 테스트 페이지로 이동해주십시오. 그리고 만일 해당 테스트 페이지에서 금지어가 검출되거든, 뱃지는 빨간색이 될 것이며, 테스트 페이지에서 상세 오류 사유를 확인하실 수 있습니다.

이 금지어 검사는 로컬에서 다음 명령어로도 대신할 수 있습니다. 그리고 금지어 목록은 [assets/config/ban.json](assets/config/ban.json) 에서 관리하실 수 있습니다. 참고로 금지어는 어떻게 입력하던, 대소문자와 띄어쓰기를 무시하고 검사하니, 이 점 유의하시기 바랍니다.

```bash
npm run ban
```