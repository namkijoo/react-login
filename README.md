#리액트 간단 로그인 구현
로그인 할 수 있는 미리 지정
```jsx
const User={
    email:'test@example.com',
    pw:'test2323@@@'
}
```
<br/>

onchange를 사용해 실시간으로 email와 pw값을 가지고 정규식을 통해 valid검사
```jsx
const handlePassWord=(e)=>{
        setPw(e.target.value);
        const regex =/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
        if(regex.test(pw)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    }
```

<br/>


로그인 버튼을 눌렀을대 email과pw가 맞다면 로그인인 성공
```jsx
const onClickConfirm=()=>{
        if(email=== User.email&&pw===User.pw){
            alert('로그인에 성공했습니다.');
        }else{
            alert('등록되지 않은 회원입니다.');
        }
    }
```
