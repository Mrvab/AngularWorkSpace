#change port
ng serve --host 0.0.0.0 –port 4205

getAttribute <-init- DOM properity ie no change after initilization
property `value` change

angular works with components
each component consist of 4 files 
    typescript file used to define components behavior
    html file to define it structure
    css
    spec file for for writing test script

Interpolation
    uses dynamic values use in HTML file
    {{ }} uses this expression for adding it to html

property binding 
    to add props value to HTML file
    [ ] uses this expression then the property name
    [id] = "myid" (myid is in declarer in the typescript file)

class binding 
    similar to property binding but here we are using typescript prop to contain class defined in css file and then using that prop in HTML file
    [ ] uses this expression
    [class] = "selectorClass" (selectorClass is in declarer in the typescript file)

style binding:
    same as class binding just adding particular value to an inline style property

event Binding:
    used to listen to an event from user and can add response to it
    ( ) used this expresson
    (click) = "myclickevent()" (myclickevent() will invole when the user click)

template reference variable:
    a variable to store data from template and accessbel to our class file 
    inside the html tag #varname 
    when passing to a function myfun(varname.thepropertyname) 
    eg : <input #name > <button (click) = "myfun(name.value)">

two way binding
    a way to share value between parent and chile components
    [( )] from template to class and class to template