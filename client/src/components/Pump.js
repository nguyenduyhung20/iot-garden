import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './InfomationTree.module.scss'
import moment from 'moment'
const Pump = () => {
  const location = useLocation().state.location


const DD = moment().format('DD')
const MM = moment().format('MM')
const YYYY = moment().format('YYYY')
const HH = moment().format('HH')
const mm = moment().format('mm')
const pumpD = JSON.parse(localStorage.getItem('datePump'))?JSON.parse(localStorage.getItem('datePump')):[]
const handlePump = (e)=>{
    e.preventDefault();
    const arr = [{type:`${location.title}`,date:`Ngày tưới cây cuối cùng ${HH} Giờ ${mm} phút ngày ${DD} tháng ${MM} năm ${YYYY} `}]
    const concatArr = [...arr,...pumpD]
    localStorage.setItem('datePump',JSON.stringify(concatArr))
    window.location.reload()
}



  return (
    <div className={classes.mainInfomationTree}>
      <div className={classes.mainInfomationTree_title}>
        <h1>{location.title}</h1>
      </div>
      <div className={classes.mainInfomationTree_container}>
        <img width={500} src={location.link} />

        <div   style={{marginLeft:"100px",height:350,display:"flex",flexDirection:"column"}}  className={classes.mainInfomationTree_containers}>
          <h5>Pump Water</h5>
          <h5 style={{fontWeight:"400"}}>Thời gian tưới <div style={{display:"inline-block",padding:"5px 8px",borderRadius:"5px",backgroundColor:"#80808075",color:"#494848"}}>{location.timePump}</div></h5>
          <div onClick={(e)=>{handlePump(e)}}  style={{margin:"14px 0",width:"50px",textAlign:"center",cursor:"pointer", backgroundColor: "#7edd6c",borderRadius:"5px" ,padding: "7px 10px", color: "black",fontSize:20 }}>{location.run}</div>
            <h5 style={{fontSize:"20px",fontWeight:"400"}}>Lịch sử tưới</h5>
            {pumpD.filter(item=>item.type === location.title).slice(0,5).map((item,index)=>(
                <div key={index}>
                    {item.date}
                </div>
            ))}
        </div>
      </div>
    </div>


  )
}

export default Pump