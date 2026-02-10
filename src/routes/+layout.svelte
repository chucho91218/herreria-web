<script lang="ts">
	import '../app.css';
	import WhatsAppFloating from '$lib/components/WhatsAppFloating.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<header class="fixed w-full top-0 z-50 bg-forge-black/90 backdrop-blur-md border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-20">
				
				<a href="/" class="flex items-center">
					<img 
						src="/logo.png" 
						alt="Logo Forja Maestra" 
						class="h-50 w-auto object-contain hover:opacity-90 transition-opacity"
					/>
				</a>

				<nav class="hidden md:flex space-x-8 items-center">
					<a href="/" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">INICIO</a>
					<a href="#servicios" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">SERVICIOS</a>
					<a href="#galeria" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">GALERIA</a>
					<a href="#contacto" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">CONTACTO</a>
				</nav>
			</div>
		</div>
	</header>

	<main class="flex-grow pt-20">
		<slot />
	</main>
    
    <footer class="bg-forge-black border-t border-white/10 py-8 mt-auto">
        <div class="max-w-7xl mx-auto px-4 text-center text-forge-muted text-sm">
            <p>&copy; 2026. Todos los derechos reservados.</p>
        </div>
    </footer>

	<WhatsAppFloating />
</div>