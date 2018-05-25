@echo off
:: npm install <package_name> without an option, just installs the package but does not update
:: the dependencies as listed in your package.json.
:: npm install <package_name> --save installs the package and updates 
:: the dependencies in your package.json.
:: bat file contents (if you want to stop batch when one of cmds errors)
::cmd1 && ^
::cmd2 && ^
::cmd3 && ^
::bat file contents (if you want to continue batch when one of cmds errors)
::cmd1 & ^
::cmd2 & ^
::cmd3 & ^
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
:: pause 
echo.
::============================================================================= 
:: local
:: --save installs the package and updates 
::
call npm install debug --save
echo "GggMessage: debug installed." 
echo.
:: Tedious is an implementation of the TDS protocol,
:: which is used to interact with instances of Microsoft's SQL Server. 
call npm install tedious --save
echo "GggMessage: tedious installed." 
echo.
::
call npm install mongodb --save
echo "GggMessage: mongodb installed." 
echo.
::
call npm install bootstrap@next --save  
echo "GggMessage: bootstrap installed." 
echo.
::
call npm install body-parser --save  
echo "GggMessage: body-parser installed."  
echo.
::
call npm install express --save  
echo "GggMessage: express installed."  
echo.
::
call npm install express-generator --save  
echo "GggMessage: express-generator installed."  
echo.
::
call npm install opn --save 
echo "GggMessage: opn installed."  
echo.
::
call npm install cookie-parser --save
echo "GggMessage: cookie-parser installed."  
echo.
::
call npm install pug --save
echo "GggMessage: pug installed."  
echo.
:: global
call npm install -g nodemon
echo "GggMessage: nodemon installed."  
echo.
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul