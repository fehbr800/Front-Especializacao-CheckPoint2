type ActionGetAll = {
    type: "GET_ALL",
    payload: {
        info: {},
        results: [],
    }
};

export type Action = ActionGetAll;