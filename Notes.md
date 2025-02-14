# Angular Essentials

Core structure comes with config files and src folder with scaffolding for source code.

tsconfig file contains how transcript is compiled into js

@ = decorator adds metadata relevant to angular framework. 

Versions lower than angular 19 you need to specify "standalone" properties on components.

spec.ts files are test files.

## JavaScript Refresher: Classes, Properties & More
Angular makes heavy use of classes - a feature that's supported by vanilla JavaScript and TypeScript (though TypeScript "extends" it and adds some extra features as you'll see).

A class is essentially a blueprint for objects. Any properties and methods defined in the class will exist on all objects that are created based on the class.

For example, if you had this class (in vanilla JavaScript):

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
 
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}
```
You could instantiate it (and create objects) like this:
```
const person1 = new Person('Max', 35);
const person2 = new Person('Anna', 32);
```
And you could then access the properties and methods defined by the class:

```
console.log(person1.age);
person2.greet();
```
When using Angular, you'll often define classes which are NEVER instantiated by you!

For example, components are created as classes - i.e., you create blueprints for custom HTML elements. But it's Angular that actually instantiates the classes in the end. You never call new SomeComponent() anywhere in your code.

In addition, Angular uses TypeScript - therefore, you often use TS-supported "enhancements" to classes.

For example decorators:
```
@Component({})
class SomeComponent {}
```
Decorators like @Component are used by Angular to add metadata & configuration to classes (and other things, as you'll see throughout the course).

In addition, TypeScript gives you more control over how properties are defined in classes.

You can, for example, mark properties (and methods) as private, public (the default) and protected to control which parts of your code can access which property (or method). You can learn more about these keywords here.

And, in general, you can learn more about TypeScript's support for classes here.

That being said, you don't have to study classes in-depth right now. You'll see most of those important features in action throughout this course.

For the moment, it's just important to understand that this classes feature exists, what it does (= create blueprints for objects) and how to work with classes.

## Assets

Asset paths must be added to Angular.json configuration file under build objects properties.

## Attribute Binding
In the previous lecture, you were introduced to "Property Binding" - a key Angular feature that allows you to bind element properties to dynamic values.

For example, `<img [src]="someSrc">` binds the src property of the underlying HTMLImageElement DOM object to the value stored in `someSrc`.

Whilst it might look like you're binding the src attribute of the `<img>` tag, you're actually NOT doing that. Instead, property binding really targets the underlying DOM object property (in this case a property that's also called src) and binds that.

This might look like a subtle detail (and often it indeed doesn't matter) but it's important to understand this difference between element attributes and property. This article can help with understanding this difference.

Whilst it won't make a difference in Angular apps in many cases, it DOES matter if you're trying to set attributes on elements dynamically. Attributes which don't have an equally-named underlying property.

For example, when binding ARIA attributes, you can't target an underlying DOM object property.

Since "Property Binding" wants to target properties (and not attributes), that can be a problem. That's why Angular offers a slight variation of the "Property Binding" syntax that does allow you to bind attributes to dynamic values.

It looks like this:
```
<div 
  role="progressbar" 
  [attr.aria-valuenow]="currentVal" 
  [attr.aria-valuemax]="maxVal">...</div>
  ```
By adding attr in front of the attribute name you want to bind dynamically, you're "telling" Angular that it shouldn't try to find a property with the specified name but instead bind the respective attribute - in the example above, the aria-valuenow and aria-valuemax attributes would be bound dynamically.

## Change detection mechanism

Zone.js notifies angular about user events, expired timers, etc.
Low level patching of browser apis (provides additional functionality to browsing events, like `addEventListener`)

Zone: Execution context that survives multiple javascript VM execution returns. Generic mechanism we use t add extra functionality to the browser. 

## Signals

Imported from angular core. 
A signal is an object that stores a value (any type).
Angular manages subscriptions to signals and gets notified about value changes.
When a change occurs angular is able to update relevant ui about that change.
Signals only available for versions 16+

## Flexible components

Use the @Input decorator from angular core to allow properties to be set via external sources

conversely @Output decorator allows for data flow from child components or directives to flow to parent component. child component uses EventEmitter from @angular/core to emit custom events

$event is the event value that is emitted from the EventEmitter in our event binding.

##Types and Interfaces

```
interface X {
    a: number
    b: string
}

type X = {
    a: number
    b: string
};
```

###Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

[Typescript Type vs Interface](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)