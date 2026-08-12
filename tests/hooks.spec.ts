import {test, expect} from "@playwright/test"


test.beforeAll("Before Each hook", async()=>{
console.log("This is before all hook")
});

test.afterAll("after all hook", async()=>{
console.log("This is after all hook")
});

test.beforeEach("Before Each hook", async()=>{
console.log("This is before Each hook")
});

test.afterEach("Before Each hook", async()=>{
console.log("This is after Each hook")
});

test("test1", async ()=>{
console.log("This is test1")
});

test("test2", async ()=>{
console.log("This is test2")
});

test("test3", async ()=>{
console.log("This is test3")
});