import { useRouteError } from "react-router-dom";

export default function Error() {
	const error: RouteErrorResponse = useRouteError();

	return (
		<div>
			<p>Oops!</p>
			<div>Something Unexpected Happened</div>
			<p>{error.statusText || error.message}</p>
		</div>
	);
}
