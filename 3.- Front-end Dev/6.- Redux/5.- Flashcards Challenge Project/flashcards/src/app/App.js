import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useMatch,
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
            <NavLink to={ROUTES.topicsRoute()} activeClassName="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()} activeClassName="active">
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()} activeClassName="active">
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/topics" element={<TopicsRoutes />}/>
        <Route path="/quizzes" element={<QuizRoutes />} />
      </Routes>
    </Router>
  );
}

function TopicsRoutes() {
  let match = useMatch();

  return (
    <>
      <Routes>
        <Route path={`${match.path}/new`} element={<NewTopicForm />} />
        <Route path={`${match.path}/:topicId`} element={<Topic />} />
        <Route path={`${match.path}`} element={<Topics />} />
      </Routes>
    </>
  );
}

function QuizRoutes() {
  let match = useMatch();

  return (
    <>
      <Routes>
        <Route path={`${match.path}/new`} element={<NewQuizForm />} />
        <Route path={`${match.path}/:quizId`} element={<Quiz />} />
        <Route path={`${match.path}`} element={<Quizzes />} />
      </Routes>
    </>
  );
}
