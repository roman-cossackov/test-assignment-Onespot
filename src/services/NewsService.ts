import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INews } from "../models/INews";
import { IComments } from "../models/IComments";

export const newsAPI = createApi({
	reducerPath: "newsAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://63c652e7dcdc478e15bf1f66.mockapi.io",
	}),
	endpoints: (build) => ({
		fetchNews: build.query<INews[], string>({
			query: () => ({
				url: "/news?sortBy=createdAt&order=desc",
			}),
		}),
		fetchNewsById: build.query<INews, number>({
			query: (id) => ({
				url: `/news/${id}`,
			}),
		}),
		fetchNewsCommentsById: build.query<IComments[], number>({
			query: (id) => ({
				url: `/news/${id}/comments`,
			}),
		}),
	}),
});
