import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callbck) => {
	const observer = useRef();
	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		let callback = function (entries, observer) {
			if (entries[0].isIntersecting && canLoad) callbck();
		};
		observer.current = new IntersectionObserver(callback);
		observer.current.observe(ref.current);
	}, [isLoading]);
};