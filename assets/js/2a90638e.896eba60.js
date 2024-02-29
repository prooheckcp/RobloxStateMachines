"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[662],{62643:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Used to create a new State. The state should manage how the object should behave during\\nthat given state. I personally recommend having your states in their own files for organizational\\npurposes\\n\\n```lua\\nlocal ReplicatedStorage = game:GetService(\\"ReplicatedStorage\\")\\n\\nlocal StateMachine = require(ReplicatedStorage.RobloxStateMachine)\\nlocal State = StateMachine.State\\n\\nlocal Default = State.new(\\"Blue\\") -- The name of this state is \\"Blue\\"\\nDefault.Transitions = { -- The transitions that will be listened to while in the blue state\\n    transition1,\\n    transition2\\n}\\nfunction Default:OnEnter(data)\\n    data.part.Color = Color3.fromRGB(0, 166, 255) --This will turn the part Blue when it enters the state blue\\nend\\n\\nreturn Default\\n```","params":[{"name":"stateName","desc":"","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"State"}],"function_type":"static","source":{"line":113,"path":"src/StateMachine/State.lua"}},{"name":"ChangeState","desc":"Forcelly changes the current state of our state machine to a new one","params":[{"name":"newState","desc":"The name of the new state","lua_type":"string"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":129,"path":"src/StateMachine/State.lua"}},{"name":"GetState","desc":"Gets the current state of our state machine","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":142,"path":"src/StateMachine/State.lua"}},{"name":"GetPreviousState","desc":"Gets the previous state of our state machine","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":155,"path":"src/StateMachine/State.lua"}},{"name":"ChangeData","desc":"Changing data request. You can also just Get the data and change the data at run time.\\n\\n```lua\\nlocal example: State = State.new(\\"Blue\\")\\n\\nfunction example:OnEnter(data)\\n    self:ChangeData(\\"color\\", Color3.fromRGB(255, 0, 0)) -- Change to red :D\\n\\n    data.part.Color = data.color\\nend\\n```","params":[{"name":"index","desc":"","lua_type":"string"},{"name":"newValue","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":181,"path":"src/StateMachine/State.lua"}},{"name":"OnInit","desc":":::info\\nThis is a **Virtual Method**. Virtual Methods are meant to be overwritten\\n:::\\n\\nCalled whenever a state machine is created with this state.\\n\\n```lua\\nfunction State:OnInit(data)\\n    print(\\"I was init!\\")\\n    self.SomeStartingData = tick()\\nend\\n```","params":[{"name":"_data","desc":"This is the data from the StateMachine itself!","lua_type":"{[string]: any}"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":207,"path":"src/StateMachine/State.lua"}},{"name":"OnDataChanged","desc":":::info\\nThis is a **Virtual Method**. Virtual Methods are meant to be overwritten\\n:::\\n\\n:::warning\\n**OnDataChanged** only gets called when the data is changed by a **ChangeData** call\\n:::\\n\\nCalled whenever the data of the state machine changes.\\n\\n```lua\\nfunction State:OnDataChanged(data, index, newValue, oldValue)\\n    if index == \\"SomeStartingData\\" then\\n        self.SomeStartingData = value\\n    end\\nend\\n```","params":[{"name":"_data","desc":"This is the data from the StateMachine itself!","lua_type":"{[string]: any}"},{"name":"_index","desc":"The index of the data that changed","lua_type":"any"},{"name":"_value","desc":"The new value of the data","lua_type":"any"},{"name":"_oldValue","desc":"The old value of the data","lua_type":"any"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":237,"path":"src/StateMachine/State.lua"}},{"name":"OnEnter","desc":":::info\\nThis is a **Virtual Method**. Virtual Methods are meant to be overwritten\\n:::\\n\\nCalled whenever you enter this state\\n\\n```lua\\nfunction State:OnEnter(data)\\n    data.part.Color = Color3.fromRGB(0, 166, 255)\\nend\\n```","params":[{"name":"_data","desc":"This is the data from the StateMachine itself!","lua_type":"{[string]: any}"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":258,"path":"src/StateMachine/State.lua"}},{"name":"OnHeartbeat","desc":":::info\\nThis is a **Virtual Method**. Virtual Methods are meant to be overwritten\\n:::\\n\\nCalled every frame after the physics simulation while in this state\\n\\n```lua\\nfunction Default:OnHeartbeat(data, deltaTime: number)\\n    self.timePassed += deltaTime\\nend\\n```","params":[{"name":"_data","desc":"This is the data from the StateMachine itself!","lua_type":"{[string]: any}"},{"name":"_deltaTime","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":280,"path":"src/StateMachine/State.lua"}},{"name":"OnLeave","desc":":::info\\nThis is a **Virtual Method**. Virtual Methods are meant to be overwritten\\n:::\\n\\nCalled whenever you leave this state\\n\\n```lua\\nfunction State:OnLeave(data)\\n    data.stuff:Clean()\\nend\\n```","params":[{"name":"_data","desc":"This is the data from the StateMachine itself!","lua_type":"{[string]: any}"}],"returns":[{"desc":"","lua_type":"()"}],"function_type":"method","source":{"line":301,"path":"src/StateMachine/State.lua"}}],"properties":[{"name":"Name","desc":"The name of the state. This is used to identify the state. Usually set while creating the state\\n\\n```lua\\nlocal Blue: State = State.new(\\"Blue\\")\\n```","lua_type":"string","source":{"line":22,"path":"src/StateMachine/State.lua"}},{"name":"Transitions","desc":"A reference for the transitions of this state. This is usually set while creating the state\\n\\n```lua\\nlocal GoToBlue = require(script.Parent.Parent.Transitions.GoToBlue)\\n\\nlocal State = StateMachine.State\\n\\nlocal Default = State.new(\\"Default\\")\\nDefault.Transitions = {GoToBlue}\\n```","lua_type":"string","source":{"line":38,"path":"src/StateMachine/State.lua"}},{"name":"Data","desc":"Contains the state machine data, it can be accessed from within the class","lua_type":"{[string]: any}","source":{"line":45,"path":"src/StateMachine/State.lua"}},{"name":"_transitions","desc":"Used to cache the transitions objects","lua_type":"{[string]: Transition.Transition}","private":true,"source":{"line":53,"path":"src/StateMachine/State.lua"}},{"name":"_changeState","desc":"This is used to change the state of the state machine. This is set by the state machine itself","lua_type":"(newState: string)->()?","private":true,"source":{"line":61,"path":"src/StateMachine/State.lua"}},{"name":"_changeData","desc":"This is used to change the data of the state machine. This is set by the state machine itself","lua_type":"(index: string, newValue: any)->()?","private":true,"source":{"line":69,"path":"src/StateMachine/State.lua"}},{"name":"_getState","desc":"Gets the current state of our state machine","lua_type":"(index: string, newValue: any)-> string","private":true,"source":{"line":77,"path":"src/StateMachine/State.lua"}},{"name":"_getPreviousState","desc":"Gets the previous state of our state machine","lua_type":"()-> string?","private":true,"source":{"line":85,"path":"src/StateMachine/State.lua"}}],"types":[],"name":"State","desc":"Describes one of the many states an object can have. It also declares\\nhow it should behave when it enters, is and leaves the given state","source":{"line":9,"path":"src/StateMachine/State.lua"}}')}}]);