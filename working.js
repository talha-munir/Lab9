
function calendar()
{
        var currdate = new Date();
        var currday = currdate.getDate();
        var currmonth = currdate.getMonth();
        var curryear = currdate.getYear()+ 1900;
        
		months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        
		month_max_days = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
        if(curryear%4 == 0)
        {
                month_max_days[1]=29;
        }
		
        total = month_max_days[currmonth];
      
		temp = currdate;
        temp.setDate(1);
		
        if(temp.getDate()==2)
        {
                temp=setDate(0);
        }
		
        temp = temp.getDay();
        
		week = 0;
		
        document.write('<tr><th id = "currentdate" colspan="7">'+ currday +' '+ months[currmonth]+' '+curryear+'</th></tr>');
		document.write('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');
        
		for(i=1;i<=temp;i++)
        {
                document.write('<td class="others">'+(month_max_days[currmonth-1]-temp+i)+'</td>');
                week++;	
        }
		
        for(i=1;i<=total;i++)
        {
                if(week==0)
                {
                        document.write('<tr>');
                }
                if(currday==i)
                {
                        document.write('<td id="today">{{result.results.channel.item.condition.temp + " " + result.results.channel.item.condition.text}}</td>');
                }
                else
                {
                        document.write('<td>'+i+'</td>');
                }
                week++;
                if(week==7)
                {
                        document.write('</tr>');
                        week=0;
                }
        }
		
        for(i=1;week!=0;i++)
        {
                document.write('<td class="others">'+i+'</td>');
                week++;
                if(week==7)
                {
                        document.write('</tr>');
                        week=0;
                }
        }
 
        return true;
}