'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import { Button, Input } from "@mui/material";
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";



export default function Home() {
  const [name, setName] = useState('')
  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    alert("리퀘스트로 보낸 이름 : " + name);
  
    axios.post(`${API.SERVER}/name`, {name: name}, AxiosConfig()).then((res) => {
      alert("리스판스가 가져온 데이터 : " + JSON.stringify(res.data.name));
    });
  }
  

  return (
    <div className='text-center'>
    <div>welcom to react world !</div><br />
    <h3 className='text-red-500'>이름 입력</h3><br />
    <Input type="text" onChange={handleChange} /><br />
    <Button onClick={handleClick}>전 송</Button><br />
    <Link href={`${PG.USER}/login`} >로그인</Link><br />
    <Link href={`${PG.USER}/join`}>회원가입</Link><br />
    <Link href={`${PG.DEMO}/mui-demo`}>MUI 데모</Link><br />
    <Link href={`${PG.DEMO}/counter`}>카운터 데모</Link><br />
    <Link href={`${PG.DEMO}/redux-counter`} className="underline">리덕스 카운터 데모</Link><br />
    <Link href={`${PG.BOARD}`} className="underline">보드</Link><br />
    <Link href={`${PG.USER}/list`} className="underline">유저목록</Link><br />
    </div>
  )
}
