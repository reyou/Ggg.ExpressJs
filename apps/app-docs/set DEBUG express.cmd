@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::=============================================================================
:: https://www.npmjs.com/package/debug
:: https://expressjs.com/en/guide/debugging.html
:: To see the logs only from the router implementation set the value of DEBUG to express:router
:: to see logs only from the application implementation set the value of DEBUG to express:application
:: You can specify more than one debug namespace by assigning a comma-separated list of names:
:: DEBUG=http,mail,express:*
echo "set the DEBUG environment variable to express:* when launching your app."
echo.
call set DEBUG=express:* & node index.js
echo "Environment Variable DEBUG has been set:"
set DEBUG
echo.
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause>nul
 