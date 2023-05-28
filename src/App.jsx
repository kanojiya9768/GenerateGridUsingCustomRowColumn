// import CollectFormData from "./Component/CollectFormData_InUseState_2";
// import Pass_data_from_child_to_parent from "./Component/Pass_data_from_child_to_parent_4";
// import Show_hide_with_conditional_rendering from "./Component/Show_hide_with_conditional_rendering_3";
// import Usestate_1 from "./Component/Usestate_1";
// import UseEffect_5 from "./Component/useEffect_5";
// import UseRef_7 from "./Component/UseRef_7";
// import UseContext_fetch_data_from_context_8 from "./Component/UseContext/UseContext_fetch_data_from_context_8";
// import Usereducer_Example_9 from "./Component/UseReducer/Usereducer_Example_9";
// import Usememo from "./Component/Use_memo/Usememo";
// import UseCallback from "./Component/UseCallback/UseCallback";
// import Movie from "./Component/Debouncing/Movie";


// export default function App() {

//   //creating function to get data from child components
//   let getdata = (data) =>{
//     alert("data from child one is " + data);
//   }

//   return (
//    <>
//      <Usestate_1 />
//      <CollectFormData />
//      <Show_hide_with_conditional_rendering />
//      <Pass_data_from_child_to_parent passdata={getdata} />
//      <UseEffect_5 />
//      <UseRef_7 />
//      {/* <UseContext_fetch_data_from_context_8 /> */}
//      <Usereducer_Example_9 />
//      <Usememo />
//      <UseCallback />
//      <Movie />
//    </>
//   )
// }



import React from 'react'
import Input from './Assessment_Metrocoid/pages/Input'
import { ContextProvider } from './Component/context/context'

function App() {
  return (
    <ContextProvider>
      <Input />
    </ContextProvider>
  )
}

export default App
