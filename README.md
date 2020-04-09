# 보험닥터 컨텐츠
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