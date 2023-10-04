// pb_hooks/main.pb.js

onAfterBootstrap((e) => {
    console.log("Hooks Loaded !")
})


routerAdd("GET", "/hello/:name", (c) => {
    let name = c.pathParam("name")
    return c.json(200, {"message": "Hello " + name})
})

