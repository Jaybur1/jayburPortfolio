const initState = {
  projects: [
    {
      id: "1",
      title: "test test test",
      content: "bl,sflkdm kmdslkdmflskdmf lksmdl kmsldkfml skmdf "
    },
    {
      id: "2",
      title: "test test test2",
      content: "bl,sflkdm kmdslkdmflskdmf lksmdl kmsldkfml skmdf "
    },
    {
      id: "3",
      title: "test test test3",
      content: "bl,sflkdm kmdslkdmflskdmf lksmdl kmsldkfml skmdf "
    }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state
  }
};

export default projectReducer;
