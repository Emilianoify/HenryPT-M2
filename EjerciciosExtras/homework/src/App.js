import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {Buscador} from "../src/components/Buscador/Buscador"
import {CommentsPost} from "../src/components/CommentsPost/CommentsPost"
import {UserPosts} from "../src/components/UserPosts/UserPosts"
import {Users } from "../src/components/Users/Users"

function App() {
  return (
      <React.Fragment>
         <NavBar />
         <Route path="/filter/posts" component={Users} />
         <Route path="/" component={Buscador} />
         <Route path="/users/:id/posts" component={UserPosts} />
         <Route path="/user/:userid/post/:id/coments" component={CommentsPost} />
      </React.Fragment>
  )
}

export default App
