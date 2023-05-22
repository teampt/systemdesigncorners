echo 'Hello'

@echo off
set current_time=%TIME%

rem Extract the hour part from the time
set hour=%current_time:~0,2%

echo Hour of the day: %hour%


rem Define thread_count
set "thread_count[0]=10"
set "thread_count[1]=20"
set "thread_count[2]=40"
set "thread_count[3]=100"
set "thread_count[4]=200"
set "thread_count[5]=300"
set "thread_count[6]=400"
set "thread_count[7]=600"
set "thread_count[8]=700"
set "thread_count[9]=800"
set "thread_count[10]=900"
set "thread_count[11]=1000"
set "thread_count[12]=1025"
set "thread_count[13]=1050"
set "thread_count[14]=1100"
set "thread_count[15]=1200"
set "thread_count[16]=1300"
set "thread_count[17]=1400"
set "thread_count[18]=1500"
set "thread_count[19]=1600"
set "thread_count[20]=1700"
set "thread_count[21]=1800"
set "thread_count[22]=1900"
set thread_count[23]=2000

setlocal enableDelayedExpansion

set thread_count_decided=!thread_count[%hour%]!
echo Hello again %thread_count_decided%

jmeter -n -t D:\pocs\jmeter_scripts\mongo\Search.jmx -Jthreads=%thread_count_decided% -l "D:\pocs\findings\mongo\load-test-%date:~-4%-%date:~3,2%-%date:~0,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%.csv" -e -o "D:\pocs\findings\mongo\output-%date:~-4%-%date:~3,2%-%date:~0,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%"

endlocal