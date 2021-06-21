import React from 'react'

function Datetime  ()
{
    var showdate = new Date();
    var displaytodaydate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes();
    return(
        <div>
            <center>
                {/* <input type ="text" value={displaytodaydate}  readOnly="true"/> */}
                                          {dt} - {displaytime}
            </center>
        </div>
    );
}
export default Datetime;