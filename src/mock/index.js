import Mock from "mockjs";

//指定被拦截的 Ajax 请求的响应时间
Mock.setup({
    timeout: "200-1000"
});

Mock.mock(/user\/info/, "post", {
    code: 0,
    data: {
        "list|1-10": [
            {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                "id|+1": 1,
                title: "前端人人@id",
                status: 1
            }
        ]
    },
    message: "操作成功",
    systemDate: new Date().getTime()
});
