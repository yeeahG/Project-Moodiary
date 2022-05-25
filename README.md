## MY Moo Diary

### 🖥️
![Moooo](https://user-images.githubusercontent.com/97449025/169136627-eefba906-b3be-48e4-b4dc-bdeb9852193f.png)

![Mymoo](https://user-images.githubusercontent.com/97449025/169655922-3490d8e8-b6c4-4840-b152-4aa740fc450e.png)
![moo2](https://user-images.githubusercontent.com/97449025/170336631-cc5791eb-4244-4335-980d-53f6eace0291.png)


### 🔑issue  
scroll을 적용시키려고 useRef를 이용하여 handler를 작동시켰는데 ```overflow: hidden```로 인해 DiaryItem의 id:5번 데이터가 자꾸만 숨겨졌다.   
생각해보니 ScrollAcrive 함수로 인해서 menu__wrapper의 지정된 크기만큼 height가 지정되어서 밀린 듯 했다  
그래서 menu__wrapper의 ```position: absolute;```을 지정하고 ```z-index: 1;````도 지정했더니 해결되었다
