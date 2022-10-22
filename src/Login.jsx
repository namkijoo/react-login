import React,{useState} from "react";
import { useEffect } from "react";

const User={
    email:'test@example.com',
    pw:'test2323@@@'
}

export default function Login(){
    const[email,setEmail]=useState('');
    const[pw,setPw] =useState('');

    const[emailValid,setEmailValid]  = useState(false);
    const[pwValid,setPwValid]  = useState(false);
    const[notAllow,setNotAllow] = useState(true);

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(regex.test(email)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    const handlePassWord=(e)=>{
        setPw(e.target.value);
        const regex =/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
        if(regex.test(pw)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    }

    const onClickConfirm=()=>{
        if(email=== User.email&&pw===User.pw){
            alert('로그인에 성공했습니다.');
        }else{
            alert('등록되지 않은 회원입니다.');
        }
    }

    useEffect(()=>{
        if(emailValid&&pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);

    },[emailValid,pwValid])

    return(
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를<br></br>
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>

                <div className="inputWrap">
                    <input className="input" placeholder="test@gmail.com" value={email} onChange={handleEmail} type='text'/>
                </div>

                <div className="errorMessageWrap">
                    {
                        !emailValid&&email.length>0&&(
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>

                <div className="inputTitle">비밀번호</div>

                <div className="inputWrap">
                    <input className="input" placeholder="영문, 숫자, 특수문자 포함 8자 이상" value={pw} onChange={handlePassWord} type='password'></input>
                </div>

                <div className="errorMessageWrap">
                    {!pwValid&&pw.length>0&&(
                        <div>영문, 숫자, 특수문자 포함 8장 이상 입력해주세요.</div>
                    )}
                </div>
            </div>

            <div>
                <button onClick={onClickConfirm} className="bottomButton" disabled={notAllow}>
                    확인
                </button>
            </div>
        </div>
    )
}