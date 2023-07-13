// I find this solution in Q&A.
// import { useState, useEffect } from "react";

// let globalState = {};
// let listeners = [];
// let actions = {};

// export const useStore = (shouldListen = true, sliceId = null) => {
//   const setState = useState(globalState)[1];
//   console.log(sliceId);

//   const dispatch = (actionIdentifier, payload) => {
//     console.log("Saad");
//     const newState = actions[actionIdentifier](globalState, payload);
//     globalState = { ...globalState, ...newState };

//     for (const listener of listeners) {
//       console.log(listener.sliceId);
//       console.log(sliceId);
//       if (listener.sliceId === sliceId) {
//         console.log("Hiiii");
//         listener.setState(globalState);
//       }
//     }
//   };

//   useEffect(() => {
//     if (shouldListen) {
//       listeners.push({ setState: setState, sliceId: sliceId });
//     }

//     console.log(listeners, "Effect");

//     return () => {
//       if (shouldListen) {
//         listeners = listeners.filter((li) => li !== setState);
//       }
//     };
//   }, [setState, shouldListen, sliceId]);

//   return [globalState, dispatch];
// };

// export const initStore = (userActions, initialState) => {
//   if (initialState) {
//     globalState = { ...globalState, ...initialState };
//   }
//   actions = { ...actions, ...userActions };
// };

//My Solution.
import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true, isCounter = false) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    console.log("Saad");
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      console.log(listener);
      if (listener.isCounter === true) {
        listener.setState(globalState);
      }
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push({ setState: setState, isCounter: isCounter });
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
