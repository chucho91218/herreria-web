export function reveal(node: HTMLElement, params: { delay?: number } = {}) {
	const delay = params.delay || 0;
	
	// Estado inicial: invisible y desplazado hacia abajo
	node.style.opacity = '0';
	node.style.transform = 'translateY(30px)';
	node.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`; // Efecto "Heavy Metal" easing

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Estado final: visible y en su lugar
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				observer.unobserve(node); // Solo animar una vez
			}
		});
	}, { threshold: 0.1 });

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}