var configDocument = {
  '/document/sponse/do': [{
    name: "公文管理",
    url: "/document"
  }, {
    name: "公文发起",
    url: "/document/sponse"
  }, {
    name: '发起公文',
    url: ''
  }],
  '/document/seeSponse/do': [{
    name: "公文管理",
    url: "/document"
  }, {
    name: "公文发起",
    url: "/document/sponse"
  }, {
    name: '查看',
    url: ''
  }],
  '/document/assign/do': [{
    name: "公文管理",
    url: "/document"
  }, {
    name: "收文分派",
    url: "/document/assign",
    query: {
      activeNav: '-1'
    }
  }, {
    name: "待分派",
    url: "/document/assign",
    query: {
      activeNav: '-1'
    }
  }, {
    name: "分派",
    url: ""
  }],
  '/document/seeAssign/do': [{
    name: "公文管理",
    url: "/document"
  }, {
    name: "收文分派",
    url: "/document/assign",
    query: {
      activeNav: '1'
    }
  }, {
    name: "已分派",
    url: "/document/assign",
    query: {
      activeNav: '1'
    }
  }, {
    name: "查看",
    url: ""
  }],
  '/document/receive/do': [{
    name: "公文管理",
    url: "/document"
  }, {
    name: "待收已收",
    url: "/document/receive",
    query: {
      activeNav: '-1'
    }
  }, {
    name: "待收任务",
    url: "/document/receive",
    query: {
      activeNav: '-1'
    }
  }, {
    name: "收文",
    url: ""
  }],
  '/document/seeReceive/do': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "待收已收",
      url: "/document/receive",
      query: {
        activeNav: '1'
      }
    },
    {
      name: "已收任务",
      url: "/document/receive",
      query: {
        activeNav: '1'
      }
    },
    {
      name: "查看",
      url: ""
    }
  ],
  '/document/done/do': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "待办已办",
      url: "/document/done",
      query: {
        activeNav: '-1'
      }
    },
    {
      name: "待办任务",
      url: "/document/done",
      query: {
        activeNav: '-1'
      }
    },
    {
      name: "办理",
      url: ""
    }
  ],
  '/document/seeDone/do': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "待办已办",
      url: "/document/done",
      query: {
        activeNav: '1'
      }
    },
    {
      name: "已办任务",
      url: "/document/done",
      query: {
        activeNav: '1'
      }
    },
    {
      name: "查看",
      url: ""
    }
  ],
  '/document/assign': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "收文分派",
      url: ""
    }
  ],
  '/document/sponse': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "公文发起",
      url: ""
    }
  ],
  '/document/done': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "待办已办",
      url: ""
    }
  ],
  '/document/receive': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "待收已收",
      url: ""
    }
  ],
  '/document/arrange': [{
      name: "公文管理",
      url: "/document"
    },
    {
      name: "归档公文",
      url: ""
    }
  ],
}

var configTask = {
  '/task/mine': [{
      name: "任务管理",
      url: "/task/mine"
    },
    {
      name: "我发起的",
      url: "/task/mine"
    }
  ],
  '/document/task/do': [{
      name: "任务管理",
      url: "/task/mine"
    },
    {
      name: "我发起的",
      url: "/task/mine"
    }, {
      name: '任务发起',
      url: ''
    }
  ],
  '/document/seeTask/do': [{
      name: "任务管理",
      url: "/task/mine"
    },
    {
      name: "我发起的",
      url: "/task/mine"
    }, {
      name: '查看',
      url: ''
    }
  ],
  '/document/seeTaskDone/do': [{
      name: "任务管理",
      url: "/task/done"
    },
    {
      name: "待办已办",
      query: {
        activeNav: '-1'
      },
      url: "/task/done"
    },
    {
      name: "待办任务",
      url: "/task/done",
      query: {
        activeNav: '-1'
      }
    },
    {
      name: '查看',
      url: ''
    }
  ],
  '/document/seeTaskDone1/do': [{
    name: "任务管理",
    url: "/task/done"
  }, {
    name: "待办已办",
    url: "/task/done",
    query: {
      activeNav: '1'
    }
  }, {
    name: "已办任务",
    url: "/task/done",
    query: {
      activeNav: '1'
    }
  }, {
    name: '查看',
    url: ''
  }],
  '/task/done': [{
      name: "任务管理",
      url: "/task/done"
    },
    {
      name: "待办已办",
      url: ""
    }
  ],
}

var configSchedual = {
  '/schedual/search': [{
      name: "排班管理",
      url: "/schedual/search"
    },
    {
      name: "排班查询",
      url: ""
    }
  ],
}
export const pathsConfig = Object.assign({}, configDocument, configTask, configSchedual)
export const funcGetPath = (route) => {
  return {
    paths: pathsConfig[route.path]
  };
}
