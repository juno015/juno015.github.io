function t()
{
apm = localStorage.getItem("timer")
h = localStorage.getItem("hour")
t = localStorage.getItem("t_min")
o = localStorage.getItem("o_min")
c = localStorage.getItem("count")

localStorage.clear();

obj1 = document.getElementById("time");
obj1.innerText  = "시간 : " + " "+ apm + h + "시 "+ t + o + "분";

obj2 = document.getElementById("count");
obj2.innerText  = " 횟수 : " + c;
console.log(apm);
console.log(h);
console.log(t);
console.log(o);
console.log(c);
}