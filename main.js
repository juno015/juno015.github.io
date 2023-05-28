function submited()  {
  /*obj0 = document.getElementById("count").value;
  for(i = 0; i < obj0; i ++){
    obj1 = document.getElementById("table1");
    Tr1 = document.createElement("tr");
    Tr1.innerHTML  = 
    " <tr id = 'hide'> <td colspan='6'> 시간표 " + (i+1) + ": </td><td colspan='1'><select id = " + "school"+ (i+1) + "> <option > 월</option><option > 화</option> <option > 수</option> <option > 목</option>  <option > 금</option>  <option > 토</option> </select> </td> </tr>";
        obj1.appendChild(Tr1);
  }*/
  button_remove = document.getElementById("sub");
  button_remove.remove();
  end();
  button_add = document.getElementById("table1");
  Tr1 = document.createElement("tr");
  Tr1.innerHTML  = 
    " <input type='button' id = 'sub' value='설정완료' onclick='move(); '/>";
  button_add.appendChild(Tr1);

  Tr1 = document.createElement("tr");
  Tr1.innerHTML  = 
    " <input type='button' id = 'sub' value='재설정' onclick='location.reload(); '/>";
  button_add.appendChild(Tr1);

  obj = document.getElementById("apm").value;
  const apm = document.getElementById("apm1"); 
  apm.textContent = (obj);

  obj0 = document.getElementById("hour").value;
  const hour = document.getElementById("hour1"); 
  hour.textContent = (obj0 + "시");

  obj1 = document.getElementById("t_min").value;
  obj2 = document.getElementById("o_min").value;
  const t_min = document.getElementById("min");

  all_min = +obj2 + (+(obj1)*10);
  
  t_min.textContent = ((all_min) + "분");

  obj3 = document.getElementById("count").value;
  const count = document.getElementById("count1");
  count.textContent = ("연습횟수 :   " + obj3);
}

function end()
{
  obj = document.getElementById("apm").value;

  obj0 = document.getElementById("hour").value;

  obj1 = document.getElementById("t_min").value;

  obj2 = document.getElementById("o_min").value;

  obj3 = document.getElementById("count").value;

  localStorage.setItem('timer',obj);
  localStorage.setItem('hour',obj0);
  localStorage.setItem('t_min',obj1);
  localStorage.setItem('o_min',obj2);
  localStorage.setItem('count',obj3);


}

function move()
{
  location.href='ss.html';
}
