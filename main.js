document.write("40.to check from two given integers whether one of them is 8 or their sum or difference is 8."+"<br>");
function test40(x,y){
    if(x==8 || y==8){
        return true;
    }
    if(x+y==8 || Math.abs(x-y)==8){
        return true;
    }
    return false;
}
document.write("The numbers are :24,32  ,Ans :"+test40(24,32)+"<br>");
document.write("The numbers are :17,18  ,Ans :"+test40(17,18)+"<br><br>");