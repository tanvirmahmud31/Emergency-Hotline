

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

1) ans:

method                                  Returns              Selection             Notes

a) getElementById("id)                 single element         by id               return one element 
b) getElementsByClassName("class")     htmlcollection         by class            return like array but not array
c) querySelector("selector")           Single element         Any CSS selector     Returns first matching element
d) querySelectorAll("selectorAll")     NodeList               Any CSS selector     Returns all matching elements


2) ans:

const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="bg-[#F5FFF6] rounded-lg p-4 flex  justify-between items-center mx-2 mt-2">
                <div class="flex-1 min-w-0">
                    <h1 class="font-bold">${serviceName}</h1>
                    <p>${serviceNumber}</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        callHistory.appendChild(newHistory);
    });

3)  Event Bubbling is the default way events propagate in the DOM.When an event happens on an element, it bubbles up to its parent, then grandparent, until it reaches the document.

4)  Instead of attaching event listeners to multiple child elements, you attach a single listener on a parent   and  detect which child triggered it.
Useful for dynamic content or many elements, improving performance.

5) preventDefault():Prevents the default browser action for an event.
   stopPropagation():Stops the event from bubbling or capturing further in the DOM tree.