let date = new Date(2021,0,31);
getWeekDay(date);
function getWeekDay(date){
    let days = ['SU','MO','TU','WE','TH','FR','SA'];
    // console.log(date.getDay());
    var day = days[date.getDay()];
    alert(day);
}
