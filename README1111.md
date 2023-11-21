# React App Dev
- Object Model
    - React
        - BAse Object Model
            - The 'Component'
                - UI + Data + Events
            - Render
                - Generate a HTML DOM and mount on Browser    
    - React-Dom
        - HAndle the Mounting and UnMOunting of Component
        - Lifecycle  of React App
- Stateful Component
    - Data Driven UI in Component
    - The 'state', data present inside the component
        - Within the Component only
        - The 'mutable' state, means can be changed only inside the component
        - Once the component is unloaded the state is cleared for that component
    - A Component can have other Component's in it
        - Sister Component
        - Parent-Child Relationship across components
    - The 'props'
        - Used to pass data across Parent-Child Components   
        - The 'immutable', the data is live throught the life of the application inside the browser
- Components can be developed using
    - Class Components, an ES 6+ class
    - Functional Components
        - A JS Function that returns HTML
````javascript
   function MyComponent {
    return (
        <div>HAHAHIHIHOOO</div>
    );
   } 
````
- Hooks
    - Standard React Functions for Predefined Set of Operations
        - State Definition
            - useState()
                - A State Property that will be updated based on UI Event
            - useReducer()
                - Update the state in Transition
                    - Initial - to - final
                        - Either Success ot Fail 
            - useRef()
                - Not in use
                - Used to access DOM Element Directly and Update its value
            - useCallback()
                - Update the Child based on Event in Parent                     
        - Data Sharing Across Components
            - React.Context
                - useContext()
        - Mounting and UnMounting Execution
            - useEffect()
                - USed for execuing the code for  HTTP Calls
                    - Executed once for Mounting (By Default)
                    - Executed Obnce for UnMounting
- package.json file
    - Avavialable for all JS App
        - Contains information for following
            - Packages used for Developing and Testing the App, The 'devDependencies'
                - npm install --save-dev [PACKAGE-NAME]
             - Packages used for Running the application, the 'dependencies'
                - npm install --save [PACKAGE-NAME]
            - Commands to 'build', 'test', 'run' the application, the 'script' block
        - npm init -y command to create package.json     
