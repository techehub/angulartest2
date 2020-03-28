import { HomeComponent } from "./home.component"
import {AuthService} from "../auth.service"
let component : HomeComponent
let service : AuthService = new AuthService()

//spec - test case
//suite
//TDD
//BDD
beforeEach( ()=>{
   component = new HomeComponent(service)
})

describe ("Home page testing ", ()=>{

it("test1",()=>{

  //let component : HomeComponent = new HomeComponent()
  let title1 =  component.title
  component.ngOnInit()
  let title2 =  component.title

  //expect(title1).
  expect(title2).toBe("Vijeesh")
})

it("should be 20 when provided 10 and 10",()=>{

  //let component : HomeComponent = new HomeComponent()
  let result = component.calc(10,10)
  expect(result).toBe(100)

})

it("Shold display loggin button", ()=>{
  let service : AuthService = new AuthService()

  component = new HomeComponent(service)
  //component.service.authorize()
  spyOn(service, "isLoggedIn").and.returnValue(false)
  component.ngOnInit()
  let x= component.loggedIn
  expect(x).toBe(false)
})

} )
