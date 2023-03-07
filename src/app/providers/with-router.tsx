import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense
        fallback={'is loading'}
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  );