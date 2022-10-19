# Nativescript + Formily
[Edit in Codeflow ⚡️](https://stackblitz.com/~/github.com/azriel46d/nativescript-formily-example)

# What is Formily?
Formily is a Form Management Framework which can manage complex forms. It is developed by the Alibaba digital supply chain team. 
What it tries to solve is 
1. Complex Form Data &amp; State management
2. Complex Field association with Active and Reactive status
3. State Management.

# Why with Nativescript ? 
One key benefit is that it utilises **JSON SCHEMA** whereby the data model is translated into components.

Fromily does not provide its own rendering layer, instead it provides **Bridiging capabilities** such that the rendering can be handled by any framework. (They provide solutions for the web for several libraries such as `Elements UI` `Vant` etc ) This makes Formily a perfect candidate for form management with Nativescript.

In order to take advantage this repo 
1. Wraps the Native elements for Input, Password, Switch
2. Adds some additional functionality for DatePicker and TimePicker to use the root layout.
3. More complex component such as for example a currency input, can be
    - Created
    - Wrapped
    - Exposed


## Shout out
Thanks [@vallemar](https://github.com/vallemar) for helping me setup `vue-demi`