- Read  
 : Reads user's input, parse the input into JavaScript data-structure, and store in memory  
- Eval  
 : Takes and evaluates the data structure  
- Print  
 : Prints the result  
- Loop  
 : Loops the above command untile the user presses ctrl-c twice  


> Sample Expression  


```
$ node
> 1 + 3
4
> 1 + (2*3) -4
3
```  

> Use Variables  

- var keyword not used ==> value is stored in the variable  
and printed  
- var keyword used ==> value is stored and not printed

```
$ node
> x = 10
10
> var y = 10
undefined
> x + y
20
>
> console.log('Hello world')
Hello world
undefined
```  

> Multiline Expression  

```
> var x = 0
undefined
> do {
... x++;
... console.log('x : ', x);
... }while ( x < 5 );
x :  1
x :  2
x :  3
x :  4
x :  5
undefined
```  

> Underscore Variable  

```
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = _
undefined
> console.log(sum)
30
undefined
```

## REPL Commands  

- ctrl + c  
 : terminate the current command.  
- ctrl + c twice  
 : terminate the Node REPL.  
- ctrl + d  
 : terminate the Node REPL  
- Up/Down Keys  
 : see command history and modify previous commands.  
- Tab Keys  
 : list of current commands  
- .help  
 : list of all commands  
- .break  
 : exit from multiline expression  
- .clear  
 : exit from multiline expression  
- .save filename  
 : save the current Node REPL session to a file  
- .load filename  
 : load file content in current Node REPL session.  
      

---  

https://www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm  


