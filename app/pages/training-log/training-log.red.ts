/*
 * Reducer for Timeline component
 */

interface IObjectConstructor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

declare var Object: IObjectConstructor;

const initialState: any = {
  monthShown: undefined,
  selectedTraining: undefined,
  training: [{
    date: "2016/02/01",
    name: "Core Crusher",
    desc: "At home functional training",
    completed: false,
    mediaUrl: "./assets/images/workout-1.jpg",
    tags: [{
      name: "Cardio"
    }, {
      name: "At Home"
    }, {
      name: "Strength"
    }, {
      name: "Functional"
    }]
  }, {
    date: "2016/02/08",
    name: "Core Crusher 1",
    desc: "At home functional training",
    completed: false,
    mediaUrl: "./assets/images/workout-2.jpg",
    tags: [{
      name: "Cardio"
    }, {
      name: "At Home"
    }, {
      name: "Strength"
    }, {
      name: "Functional"
    }]
  }, {
    date: "2016/02/10",
    name: "Core Crusher 2",
    desc: "At home functional training",
    mediaUrl: "./assets/images/workout-3.jpg",
    completed: false,
    tags: [{
      name: "Cardio"
    }, {
      name: "At Home"
    }, {
      name: "Strength"
    }, {
      name: "Functional"
    }]
  }, {
    date: "2016/02/12",
    name: "Core Crusher 3",
    desc: "At home functional training",
    completed: false,
    mediaUrl: "./assets/images/workout-2.jpg",
    tags: [{
      name: "Cardio"
    }, {
      name: "At Home"
    }, {
      name: "Strength"
    }, {
      name: "Functional"
    }]
  }]
};

export const trainingLogReducer: any = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "Select training on training log":
            return Object.assign({}, state, { selectedTraining: action.id });

        case "Change month shown":
            return Object.assign({}, state, { monthShown: action.month });

        default:
            return state;
    }
};
