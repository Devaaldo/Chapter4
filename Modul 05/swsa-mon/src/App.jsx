import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";

const routes = {
	home: (args, changePage) => <HomePage changePage={changePage} />,
	gallery: (args) => <GalleryPage />,
	about: (args) => <AboutPage />,
	detail: (args) => <DetailPage />,
	error: (args) => <ErrorPage />,
};

export default function App() {
	const [page, setPage] = useState("home");
	const [args, setArgs] = useState([]);

	useEffect(() => {
		const { hash } = window.location;
		const [page, ...args] = hash.substring(1).split("/");
		setPage(page ? page : "home");
		setArgs(args);
	}, []);

	const changePage = (newPage, args) => (e) => {
		if (newPage == page) {
			e.preventDefault();
		} else {
			setPage(newPage);
			setArgs(args);
		}
	};

	const menu = {
		home: "Home",
		gallery: "Gallery",
		about: "About",
	};

	return (
		<div className="container d-flex flex-column w-100 h-100 p-3 mx-auto">
			<PageHeader page={page} onClickMenu={changePage} />
			<main className="p-4">
				{routes[page]?.call(null, args, changePage) || routes["error"](args)}
			</main>
			<PageFooter />
		</div>
	);
}
