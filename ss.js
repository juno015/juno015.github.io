var count = 0;
var c = localStorage.getItem("count")
var apm = localStorage.getItem("timer")
var h = localStorage.getItem("hour")
var t = localStorage.getItem("t_min")
var o = localStorage.getItem("o_min")
localStorage.clear();
h = +h;
t = +t;
o = +o;

const time = t*10 + o; 
var k = ["sch1","sch2","sch3","sch4","sch5","sch6","sch7","sch8","sch9","sch10", "sch11","sch12","sch13","sch14","sch15","sch16","sch17","sch18","sch19","sch20","sch21","sch22","sch23","sch24","sch25","sch26","sch27","sch28","sch29","sch30", "sch31","sch32","sch33","sch34","sch35","sch36","sch37","sch38","sch39","sch40", "sch41","sch42","sch43","sch44","sch45","sch46","sch47","sch48","sch49","sch50","sch51","sch52","sch53","sch54","sch55","sch56","sch57","sch58","sch59","sch60","sch61","sch62","sch63","sch64","sch65","sch66","sch67","sch68","sch69","sch70",  "sch71","sch72","sch73","sch74","sch75","sch76","sch77","sch78","sch79","sch80", "sch81","sch82","sch83","sch84"];

var ii = 0;

if (apm == "PM")
h += 12; 
max_number = c;
window.onload=function(){
  const co2 = document.querySelector("#counting2"); 
 
  co2.textContent = (" 수강가능학점 : " + c);

}

function is_checked(num) { //삭제
    const table = document.getElementById('del');

    const checkbox = document.getElementById('my_checkbox');
    if(!confirm("삭제 하시겠습니까?")){
		return false;
    }
    else{alert("삭제되었습니다.");

  
    // 행(Row) 삭제
    for(let i = 0; i < table.rows.length; i++)  {
        table.rows[i].deleteCell(num);
      }
  }
}



function is_checked1(num) { //추가
    const value1 = document.getElementById('push_button').value;
    const i = Math.floor(Math.random() * (83))
    ii = i;
    const sch2 = document.getElementById(k[i]).textContent; //시간표 감지
    const table = document.getElementById('del');
    const checkbox = document.getElementById('my_checkbox');
    const now = new Date();	
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const second = now.getSeconds();
    const milsecond = now.getMilliseconds();
    

    count_i = (max_number-count); //조건
    if(!confirm("신청하시겠습니까?")){
		return false;
    }
    else{
      if ((hours < h))
      {
        alert("수강신청시간이 아닙니다.");
        return false;
      }
      if (minutes < time)
      {
          alert("수강신청시간이 아닙니다.");
        return false;
      }
      if (value1 == "")
      {
        alert("값을 입력해주세요");
        return false;
      }
      if (count_i <= 0)
      {
        alert("가능학점을 초과하셨습니다.");
        const value = document.getElementById('push_button');
        value.value = null;
        return false;
      }
      if(sch2 != "")
      {
        alert("중복된 시간표가 있습니다.");
        return false;
      }
      const date1 = new Date(year, month, day, h, time, 0, 0);
      const date2 = new Date(year, month, day, hours, minutes, second, milsecond);
    
      const Sec = date2 - date1;
      const second1 = Sec/1000; //sec
      alert("신청되었습니다.");
      alert(second1+"초 경과했습니다.");
      count++;
      //버튼 추가
      obj = document.getElementById("del1");
      Td = document.createElement("td");
      newDiv = document.createElement("input");
      newDiv.setAttribute("type", "checkbox"); 
      newDiv.onclick =function(){
        is_checked(1);
      };
        }
  Td.appendChild(newDiv);
  obj.appendChild(Td);

  // 이수구분
  obj1 = document.getElementById("cls");
  Td1 = document.createElement("td");
  Td1.textContent  = "전공";
  obj1.appendChild(Td1);

  // 학수번호
  obj2 = document.getElementById("sch_number");
  Td2 = document.createElement("td");
  Td2.textContent  = value1;
  obj2.appendChild(Td2);

  // 이름
  obj3 = document.getElementById("name");
  Td3 = document.createElement("td");
  Td3.textContent  = "수강과목";
  obj3.appendChild(Td3);

  //학점, 시수
  obj4 = document.getElementById("sch1_number");
  Td4 = document.createElement("td");
  Td4.textContent  = "1";
  obj4.appendChild(Td4);

  //학점, 시수
  obj5 = document.getElementById("sch2_number");
  Td5 = document.createElement("td");
  Td5.textContent  = "1/30";
  obj5.appendChild(Td5);

  //수강인원
  obj6 = document.getElementById("sch3_number");
  Td6 = document.createElement("td");
  Td6.textContent  = "123";
  obj6.appendChild(Td6);

  //교수
  obj7 = document.getElementById("professor");
  Td7 = document.createElement("td");
  Td7.textContent  = "홍길동";
  obj7.appendChild(Td7);

  add_cal(); //스케줄 추가
  count_number(count);
}

function add_cal()
{
  const value1 = document.getElementById('push_button').value;
  const sch2 = document.getElementById(k[ii]);

  sch2.textContent  = value1;

  
  const value2 = document.getElementById('push_button')
  value2.value = null;
  
}

function count_number(count)
{
  const co = document.querySelector("#counting"); 
 
  co.textContent = ("신청과목수 : " + count);

  const co1 = document.querySelector("#counting1"); 
 
  co1.textContent = (" 신청학점 :  " + count);

  const co2 = document.querySelector("#counting2"); 
 
  co2.textContent = (" 수강가능학점 : " + (max_number-count));
}