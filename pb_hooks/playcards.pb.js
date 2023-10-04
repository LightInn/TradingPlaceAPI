// pb_hooks/playcards.pb.js
/// <reference path="../pb_data/types.d.ts" />
onAfterBootstrap((e) => {
    console.log("PlayCards Loaded !")
})


routerAdd("GET", "/ap/user", (c) => {

    let connected =  c.get("authRecord") // empty if not authenticated as regular auth record
    return c.json(200, {"connected ": connected})
})

routerAdd("POST", "/ap/addPlaycard", (c) => {

}