import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useMatch,
  useMatches,
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import ROUTES from "./routes";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()}>
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()}>
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()}>
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Hello there!</h1>}/>
        <Route path="/topics//*" element={<TopicsRoutes />}/> 
        <Route path="/quizzes//*" element={<QuizRoutes />} />
      </Routes>
    </Router>
  );
}

function TopicsRoutes() {
  return (
    <>
      <Routes>
        <Route path={"new"} element={<NewTopicForm />} />
        <Route path={":topicId"} element={<Topic />} />
        <Route index element={<Topics />} />
      </Routes>
    </>
  );
}

function QuizRoutes() {
  return (
    <>
      <Routes>
        <Route path={"new"} element={<NewQuizForm />} />
        <Route path={":quizId"} element={<Quiz />} />
        <Route index element={<Quizzes />} />
      </Routes>
    </>
  );
}
