# Simple Factory

Simple factory creates an instance without showing the logic of creation it  

## Example
In this example we create a Door

## When to use it

When we want to create an object with the same logic but with different parameters  
It's better to use the factory instead of repeating it anywhere  

## Bad usge for our example
```
const door = new WoodenDoor(1,2)
```  

For example, when we want to change or replace the WoodenDoor class, we must edit it everywhere, while with Simple Factory Pattern, just editing Factory Class