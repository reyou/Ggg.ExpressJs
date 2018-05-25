@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
:: pause 
echo.
::============================================================================= 
call npm install really-need --save
echo "GggMessage: really-need installed." 
echo.
::============================================================================= 
call npm install debug --save
echo "GggMessage: debug installed." 
echo.
::============================================================================= 
call npm install mocha --save
echo "GggMessage: mocha installed." 
echo.
::============================================================================= 
call npm install cookie-parser --save
echo "GggMessage: cookie-parser installed." 
echo.
::============================================================================= 
call npm install chai --save
echo "GggMessage: chai installed." 
echo.
::============================================================================= 
call npm install should --save
echo "GggMessage: should installed." 
echo.
::============================================================================= 
call npm install supertest --save
echo "GggMessage: supertest installed." 
echo.
::============================================================================= 
call npm install express --save  
echo "GggMessage: express installed."  
echo.
::============================================================================= 
call npm install express-generator --save  
echo "GggMessage: express-generator installed."  
echo.
::============================================================================= 
:: global
call npm install -g nodemon
echo "GggMessage: nodemon installed."  
echo.
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul