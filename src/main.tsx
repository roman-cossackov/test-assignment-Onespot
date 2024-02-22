import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";
import { RouterProvider, createHashRouter } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";

import "./index.css";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import NewsItemPage from "./pages/NewsItemPage.tsx";

const store = setupStore();
const router = createHashRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/:id",
        element: <NewsItemPage />,
        errorElement: <NotFoundPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
