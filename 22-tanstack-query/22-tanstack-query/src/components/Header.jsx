import { useIsFetching } from "@tanstack/react-query";
import LoadingIndicator from "./UI/LoadingIndicator";

export default function Header({ children }) {
  const isFetching = useIsFetching();
  return (
    <>
      {isFetching ? <div id="main-header-loading"><LoadingIndicator/></div> : undefined}
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
